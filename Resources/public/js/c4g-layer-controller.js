/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
import {Cluster, Vector as VectorSource} from "ol/source";
import {transform, transformExtent} from "ol/proj";
import OSMXML from "ol/format/OSMXML";
import {bbox, all} from "ol/loadingstrategy";
import {Vector} from "ol/layer";
import * as olFormats from "ol/format";
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4';
import Projection from 'ol/proj/Projection';
import Collection from 'ol/Collection';
import {utils} from './c4g-maps-utils';
import {Fill, Style, Text} from 'ol/style';
import {Point} from "ol/geom";
import Feature from 'ol/Feature';

const osmtogeojson = require('osmtogeojson');

let olFormat = jQuery.extend({
  OSMXML: OSMXML
}, olFormats);

export class BetterLayerController {

  constructor(proxy) {
    this.handleZoom = this.handleZoom.bind(this);
    const scope = this;
    this.proxy = proxy;
    this.loaders = [];
    this.controllers = {};
    this.arrLocstyles = [];
    this.extent = {
      maxX: -Infinity,
      maxY: -Infinity,
      minX: Infinity,
      minY: Infinity
    };
    this.mapController = proxy.options.mapController;
    this.vectorCollection = new Collection();
    this.loaderFunction = function(extent, resolution, projection) {
      for (let i in scope.loaders) {
        if (scope.loaders.hasOwnProperty(i)) {
          const requestData = scope.loaders[i];
          if (!requestData.preventLoading) {
            if (!requestData.params && !requestData.url) {
              let responseFunc = function (data) {
                let features = [];
                let layer = scope.objLayers.find(element => element.id == requestData.layerId) || {};
                for(let i = 0; i < data.length; i++){
                  let contentData = data[i];
                  let feature = scope.parseOwnData(contentData, layer);
                  features.push(feature);
                }
                scope.addFeatures(features, requestData.chain);
                scope.mapController.setObjLayers(scope.arrLayers);
              };
              scope.performOwnData({
                    "layerId": requestData.layerId,
                    "locstyleId": requestData.locstyleId
                  }, {
                    "extent": extent,
                    "resolution": resolution,
                    "projection": projection
                  },
                  responseFunc)
            }
            else {
              let responseFunc = function (response) {
                let features;
                if (typeof response === "string") {
                  let format = new OSMXML();
                  try {
                    features = format.readFeatures(response, {featureProjection: projection});
                  } catch (e) {
                    console.warn('Can not read feature.');
                  }
                }
                else if (typeof response === "object"){
                  let geojson = osmtogeojson(response);
                  features = new olFormat.GeoJSON().readFeatures(geojson, {featureProjection: projection});
                }
                else {
                  return false;
                }
                for (let featureId in features) {
                  if (features.hasOwnProperty(featureId)) {
                    if (requestData.forceNodes && features[featureId].getGeometry().getType() === "Polygon") {
                      features[featureId].setGeometry(features[featureId].getGeometry().getInteriorPoint());
                    }
                    else if (requestData.forceNodes && features[featureId].getGeometry().getType() === "MultiPolygon") {
                      features[featureId].setGeometry(features[featureId].getGeometry()[0].getInteriorPoint());
                    }
                    features[featureId].set('locstyle', requestData.locstyleId);
                  }
                }
                scope.addFeatures(features, requestData.chain);
                scope.mapController.setObjLayers(scope.arrLayers);
              };
              scope.performOvp({
                    "url": requestData.url,
                    "params": requestData.params,
                    "locstyleId": requestData.locstyle
                  }, {
                    "extent": extent,
                    "resolution": resolution,
                    "projection": projection
                  },
                  responseFunc);
            }

          }
          else {
            requestData.arrExtents.push(extent)
          }
        }
      }
    };
    this.vectorSource = new VectorSource({
      features: this.vectorCollection,
      loader: this.loaderFunction,
      strategy: bbox
    });
    this.clusterStyleFunction = function(feature, resolution) {
      let size = false;
      let returnStyle = [];
      if (feature && feature.get && feature.get('features')) {
        let features = feature.get('features');
        size = features.length;
        feature = features[0];
      }
      if (feature && feature.get && feature.get('locstyle')) {
        let locstyle = feature.get('locstyle');
        if (scope.proxy.locationStyleController.arrLocStyles && scope.proxy.locationStyleController.arrLocStyles[locstyle] && scope.proxy.locationStyleController.arrLocStyles[locstyle].style) {
          let style = scope.proxy.locationStyleController.arrLocStyles[locstyle].style;
          if (typeof style === "function") {
            returnStyle = style(feature, resolution, false);
          }
          else {
            returnStyle = scope.proxy.locationStyleController.arrLocStyles[locstyle].style;
          }
        }
      }
      if (size > 1 && returnStyle) {
        let iconOffset = [0, 0];
        if (returnStyle[0]) {
          if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && typeof returnStyle[0].getImage().getRadius === "function") {
            let radius = parseInt(returnStyle[0].getImage().getRadius(), 10);
            if (radius) {
              iconOffset = [-radius, radius];
            }
          } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getAnchor && typeof returnStyle[0].getImage().getAnchor === "function") {
            iconOffset = returnStyle[0].getImage().getAnchor() || [0, 0];
          }
        }

        let fillcolor = utils.getRgbaFromHexAndOpacity('4975A8',{
          unit: '%',
          value: 70
        });

        let fontcolor = '#FFFFFF';

        returnStyle.push(
            new Style({
              text: new Text({
                text: "●",
                font: "60px sans-serif",
                offsetX: -1 * iconOffset[0],
                offsetY: -1 * iconOffset[1],
                fill: new Fill({
                  color: fillcolor
                })
              })
            })
        );
        returnStyle.push(
            new Style({
              text: new Text({
                text: size.toString(),
                offsetX: -1 * iconOffset[0],
                offsetY: -1 * iconOffset[1] + 3,
                fill: new Fill({
                  color: fontcolor
                })
              })
            })
        );
      }
      return returnStyle
    };
    if (this.mapController.data.cluster_all) {
      this.vectorSource = new Cluster({
        source: this.vectorSource,
        geometryFunction: this.geometryFunction,
        distance: this.mapController.data.cluster_distance
      });
    }
    this.vectorLayer = new Vector({
      source: this.vectorSource,
      style: this.clusterStyleFunction
    });
    this.layerRequests = {};
    this.ovpKey = this.mapController.data.ovp_key;
    window.c4gMapsHooks.hook_map_zoom = window.c4gMapsHooks.hook_map_zoom || [];
    window.c4gMapsHooks.hook_map_zoom.push(this.handleZoom);
  }
  hide (id, hideElement) {
    let features,
        vectorLayer;
    if (Array.isArray(hideElement)) {
      features = hideElement;
    }
    else {
      vectorLayer = hideElement
    }
    if (features) {
      if (id >= 0) {
        let loader = this.loaders[id];
        this.loaders[id].preventLoading = true;
        if (loader.request) {
          loader.request.abort();
        }
      }
      if (features.length > 0) {
        for (let featureId in features) {
          if (features.hasOwnProperty(featureId)) {
            this.vectorCollection.remove(features[featureId]);
          }
        }
      }
    }
    else if (vectorLayer) {
      this.mapController.map.removeLayer(vectorLayer);
    }
  }
  show (id, hideElement) {
    let features,
        vectorLayer;
    if (Array.isArray(hideElement)) {
      features = hideElement;
    }
    else {
      vectorLayer = hideElement
    }
    if (id >= 0 && this.loaders[id] && this.loaders[id].preventLoading) {
      this.loaders[id].preventLoading = false;
      for (let extentId in this.loaders[id].arrExtents) {
        if (this.loaders[id].arrExtents.hasOwnProperty(extentId) && this.vectorSource) {
          let extent = this.loaders[id].arrExtents[extentId];
          this.vectorSource.removeLoadedExtent(extent);
        }
      }
      this.loaders[id].arrExtents = [];
    }
    if (features) {
      this.vectorCollection.extend(features);
    }
    else if (vectorLayer) {
      this.mapController.map.addLayer(vectorLayer);
    }
  }


  loadLayers () {
    let self = this;
    if (this.mapId === 0) {
      return false;
    }

    jQuery.ajax(this.proxy.api_layer_url, {
      dataType: this.mapController.data.jsonp ? "jsonp" : "json"

    }).done(function (data) {
      self.objLayers = data.layer;
      // self.mapController.setObjLayers(self.objLayers);
      let structure = [];
      let features = [];

      let tabStructures = [];

      for (let layerId in data.layer) {
        if (data.layer.hasOwnProperty(layerId)) {
          if (data.layer[layerId].type === "startab") {
            let newTab = [self.getStructureFromLayer(data.layer[layerId], tabStructures.length)];
            newTab.awesomeIcon = data.layer[layerId].awesomeicon;
            tabStructures.push(newTab);
          } else {
            let newChild = self.getStructureFromLayer(data.layer[layerId], structure.length);
            if (newChild.hide_in_starboardDromedarCase) {
              structure = structure.concat(newChild.childs);
              features = features.concat(newChild.features);
            }
            else {
              structure.push(newChild);
            }
          }
        }
      }
      let arrStates = [];
      for (let structId in structure) {
        if (structure.hasOwnProperty(structId)) {
          arrStates.push(self.getInitialStates(structure[structId]));
          features = features.concat(self.getFeaturesFromStruct(structure[structId]));
        }
      }
      let tabStates = [];
      for (let structId in tabStructures) {
        if (tabStructures.hasOwnProperty(structId)) {
          tabStates.push(self.getInitialStates(tabStructures[structId][0]));
        }
      }
      self.arrLayers = structure;
      self.proxy.locationStyleController.loadLocationStyles(self.arrLocstyles, {"done": (styleData) => {self.mapController.setLocStyles(styleData)}});
      self.vectorCollection.extend(features);
      self.vectorLayer.set('zIndex', 1);
      self.mapController.map.addLayer(self.vectorLayer);
      self.mapController.setLayersInitial(self.arrLayers, arrStates);
      self.mapController.setTabLayers(tabStructures, tabStates);
      if (self.mapController.props.mapData.calc_extent === "LOCATIONS") {
        if (self.extent && !(self.extent.maxX === Infinity || self.extent.maxX === -Infinity)) {
          let view = self.mapController.map.getView();
          let padding = [
              parseInt(self.mapController.props.mapData.min_gap, 10),
              parseInt(self.mapController.props.mapData.min_gap, 10),
              parseInt(self.mapController.props.mapData.min_gap, 10),
              parseInt(self.mapController.props.mapData.min_gap, 10)
          ];
          let extent = [
              self.extent.minX,
              self.extent.minY,
              self.extent.maxX,
              self.extent.maxY
          ];
          view.fit(extent, {
            padding: padding
          });
        }
      }
      return true;
    }).fail(function () {
      console.warn('An error occured while trying to load the layers...');
      return false;
    }).always(function () {
      // this.proxy.starboard.spinner.hide();
    });
  } // end of "loadLayer()"
  getInitialStates(layer) {
    let childStates = [];
    if (layer.childs && layer.childs.length > 0) {
      for (let childId in layer.childs) {
        if (layer.childs.hasOwnProperty(childId)) {
          childStates.push(this.getInitialStates(layer.childs[childId]));
        }
      }
    }
    let zoom = this.mapController.map.getView().getZoom();
    return {
      active: !layer.hide,
      greyed: layer.zoom && !this.compareZoom(layer.zoom),
      id: layer.id,
      childStates: childStates
    }
  }
  getFeaturesFromStruct(structure) {
    let features = [];
    let zoom = this.mapController.map.getView().getZoom();
    let greyed = structure.zoom && !this.compareZoom(structure.zoom);
    if (!structure.hide && !greyed) {
      if (structure.childs && structure.childs.length > 0) {
        for (let structId in structure.childs) {
          if (structure.childs.hasOwnProperty(structId)) {
            if (!structure.childs[structId].hide) {
              features = features.concat(this.getFeaturesFromStruct(structure.childs[structId]));
            }
          }
        }
      }
      if (structure.features) {
        features = features.concat(structure.features);
      }
    }
    return features;
  }

  getStructureFromLayer(layer, idChain) {
    let scope = this;
    let features = [];
    let childs = [];
    let hide = !!layer.hide;
    if (scope.mapController.data.layers && scope.mapController.data.layers.length > 0) { //hide or show according to permalink - overwrites layerService
      if (scope.mapController.data.layers.indexOf(layer.id) > -1) { //in permalink
        hide = false;
      }
      else { //not in permalink
        hide = true;
      }
    }
    if (layer.activeForBaselayers !== "all") { //initial handling for activate with baselayer
      // let found = layer.activeForBaselayers.find((element) => element === scope.mapController.proxy.activeBaselayerId || scope.mapController.data.default_baselayer);
      let found = layer.activeForBaselayers.includes(scope.mapController.proxy.activeBaselayerId || scope.mapController.data.default_baselayer);
      hide = !found;
    }
    let vectorLayer = false;
    let loaderId = -1;
    let possibleLocstyle = layer.locstyle;
    if (layer.content && layer.content.length > 0) {
      features = this.getFeaturesForLayer(layer);
      possibleLocstyle = layer.locstyle || layer.content[0].locationStyle
    }

    let checkLocstyle = this.arrLocstyles.findIndex((element) => element === possibleLocstyle);
    if (checkLocstyle === -1 && possibleLocstyle) {
      this.arrLocstyles.push(possibleLocstyle);
    }
    if (layer.async_content && layer.async_content != 0 && !layer.excludeFromSingleLayer) {
      let url = "";
      let locstyleId = 0;
      let params = "";
      let forceNodes = false;
      let layerId = layer.id;
      if (layer.content && layer.content[0] && layer.content[0].data) {
        let data = layer.content[0].data;
        url = data.url;
        params = data.params;
        locstyleId = layer.locstyle;
      }
      if (layer.content && layer.content[0] && layer.content[0].settings) {
        forceNodes = layer.content[0].settings.forceNodes;
      }
      checkLocstyle = this.arrLocstyles.findIndex((element) => element === locstyleId);
      if (checkLocstyle === -1 && locstyleId) {
        this.arrLocstyles.push(locstyleId);
      }
      loaderId = this.loaders.length;
      this.loaders.push({
        chain: idChain,
        url: url,
        preventLoading: hide,
        forceNodes: forceNodes,
        arrExtents: [],
        locstyleId: locstyleId,
        params: params,
        layerId: layerId
      });

    }
    if (layer.childs && layer.childs.length > 0) {
      for (let layerId in layer.childs) {
        if (layer.childs.hasOwnProperty(layerId)) {
          let childChain = idChain + "," + childs.length;
          let newChild = this.getStructureFromLayer(layer.childs[layerId], childChain);
          if (newChild.hide_in_starboardDromedarCase) {
            childs = childs.concat(newChild.childs);
            features = features.concat(newChild.features)
          }
          else {
            childs.push(newChild);
          }
        }
      }
    }
    // if (childs && childs.length && childs.length > 0) {
    //   let singleLocStyle = childs[0].locstyle;
    //   if (!childs.find( (element) => element.locstyle !== singleLocStyle)) {
    //     for (let childId in childs) {
    //       if(childs.hasOwnProperty(childId)) {
    //         delete childs[childId].locstyle;
    //       }
    //     }
    //     possibleLocstyle = singleLocStyle;
    //   }
    // }
    if (layer.excludeFromSingleLayer) {
      let customStyleFunc = false;
      let vectorSource = new VectorSource();
      if (layer.async_content && layer.async_content !== "0") {
        let strategy = layer.content[0].settings.boundingBox ? bbox : all;
        vectorSource = new VectorSource({"strategy": strategy});
        const scope = this;

        let loaderFunc = function(extent, resolution, projection) {
          if (layer.content[0].settings.boundingBox && (extent[0] === Infinity || extent[0] === -Infinity)) {
            vectorSource.removeLoadedExtent();
          }
          else if (layer.content && layer.content[0] && layer.content[0].data) {
            let data = layer.content[0].data;
            let responseFunc = function (response) {
              let features;
              if (typeof response === "string") {
                let format = new OSMXML();
                try {
                  features = format.readFeatures(response, {featureProjection: "EPSG:3857"});
                } catch (e) {
                  console.warn('Can not read feature.');
                }
              } else if (typeof response === "object"){
                let geojson = osmtogeojson(response);
                features = new olFormat.GeoJSON().readFeatures(geojson, {featureProjection: "EPSG:3857"});
              } else {
                return false;
              }
              // set popups for features
              if (data.popup.content === "${FNfnStandardInfoPopup}") {
                for (let i = 0; i < features.length; i++) {
                  features[i].set('popup', data.popup.content);
                }
              }

              let requestData = layer.content[0].settings ? layer.content[0].settings: {};
              for (let featureId in features) {
                if (features.hasOwnProperty(featureId)) {
                  if (features[featureId].getGeometry().getType() === "Polygon") {
                    if (requestData.forceNodes) {
                      features[featureId].setGeometry(features[featureId].getGeometry().getInteriorPoint());
                    }
                    features[featureId].set('osm_type', 'way');
                  }
                  else if (features[featureId].getGeometry().getType() === "MultiPolygon") {
                    if (requestData.forceNodes) {
                      features[featureId].setGeometry(features[featureId].getGeometry()[0].getInteriorPoint());
                    }
                    features[featureId].set('osm_type', 'relation');
                  }
                  else if (features[featureId].getGeometry().getType() === "Point") {
                    features[featureId].set('osm_type', 'node');
                  }

                  features[featureId].set('locstyle', layer.locstyle)
                }
              }
              if (vectorSource instanceof Cluster) {
                vectorSource.getSource().addFeatures(features);
              }
              else {
                vectorSource.addFeatures(features);
              }
            };
            scope.performOvp({
                  "url": data.url,
                  "layerId": layer.id,
                  "params": data.params,
                  "locstyleId": layer.locstyle
                },
                {
                  "extent": extent,
                  "resolution": resolution,
                  "projection": projection
                },
                responseFunc)
          }
          else if (layer.type === "table") {
            let responseFunc = function (data) {
              let features = [];
              for(let i = 0; i < data.length; i++){
                let contentData = data[i];
                let feature = scope.parseOwnData(contentData, layer);
                features.push(feature);
              }
              if (vectorSource instanceof Cluster) {
                vectorSource.getSource().addFeatures(features);
              }
              else {
                vectorSource.addFeatures(features);
              }

            };
            scope.performOwnData({
              "layerId": layer.id,
              "locstyleId": layer.locstyle
            },
            {
              "extent": extent,
              "resolution": resolution,
              "projection": projection
            },
            responseFunc)
          }
        };
        vectorSource.setLoader(loaderFunc);
      }
      else if (features && features.length){
        vectorSource.addFeatures(features);
      }
      else {
        let content = layer.content[0];
        let featureProjection = "EPSG:3857";
        let dataProjection = "EPSG:4326";

        customStyleFunc = function (feature, resolution) {
          let size = false;
          let returnStyle = [];
          if (feature && feature.get && feature.get('features')) {
            let features = feature.get('features');
            size = features.length;
            feature = features[0];
          }
          if (layer && layer.locstyle && layer.locstyle !== "0") {
            if (scope.proxy.locationStyleController.arrLocStyles && scope.proxy.locationStyleController.arrLocStyles[layer.locstyle] && scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].style) {
              let style = scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].style;
              if (typeof style === "function") {
                returnStyle = style(feature, resolution, false);
              }
              else {
                returnStyle = scope.proxy.locationStyleController.arrLocStyles[locstyle].style;
              }
            }
          }
          if (size > 1 && returnStyle) {
            let iconOffset = [0, 0];
            if (returnStyle[0]) {
              if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && typeof returnStyle[0].getImage().getRadius === "function") {
                let radius = parseInt(returnStyle[0].getImage().getRadius(), 10);
                if (radius) {
                  iconOffset = [-radius, radius];
                }
              } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getAnchor && typeof returnStyle[0].getImage().getAnchor === "function") {
                iconOffset = returnStyle[0].getImage().getAnchor() || [0, 0];
              }
            }

            let fillcolor = utils.getRgbaFromHexAndOpacity('4975A8',{
              unit: '%',
              value: 70
            });

            let fontcolor = '#FFFFFF';

            returnStyle.push(
                new Style({
                  text: new Text({
                    text: "●",
                    font: "60px sans-serif",
                    offsetX: -1 * iconOffset[0],
                    offsetY: -1 * iconOffset[1],
                    fill: new Fill({
                      color: fillcolor
                    })
                  })
                })
            );
            returnStyle.push(
                new Style({
                  text: new Text({
                    text: size.toString(),
                    offsetX: -1 * iconOffset[0],
                    offsetY: -1 * iconOffset[1] + 3,
                    fill: new Fill({
                      color: fontcolor
                    })
                  })
                })
            );
          }
          return returnStyle
        };

        if (content.data && content.data.properties && content.data.properties.projection && content.data.properties.projCode) {
          // if (!proj4(contentData.data.properties.projection)) {
          proj4.defs(content.data.properties.projection, content.data.properties.projCode);
          register(proj4);
          // }
          dataProjection = new Projection({
            code: content.data.properties.projection
          });
        }
        let format = new olFormat[content['format']]({
          featureProjection: featureProjection,
          dataProjection: dataProjection
        });

        vectorSource = new VectorSource({
          format: format,
          url: content.data.url
        });
      }

      if (layer.cluster) {
        vectorSource = new Cluster({
          source: vectorSource,
          geometryFunction: this.geometryFunction,
          distance: parseInt(layer.cluster.distance, 10)
        });
      }
      vectorLayer = new Vector({
          source: vectorSource,
          style: customStyleFunc || this.clusterStyleFunction
      });
      scope.proxy.hook_locstyles_loaded.push(function(lostyleController) {
        vectorLayer.changed();
      });
      let greyed = layer.zoom && !this.compareZoom(layer.zoom);
      if (!hide && !greyed) {
        vectorLayer.set('zIndex', 1);
        this.mapController.map.addLayer(vectorLayer);
      }
      features = false;
    }
    if (layer.hideInStarboard) {
      return {
        childs: childs,
        features: features,
        hide_in_starboardDromedarCase: true
      }
    }
    else {
      return {
        "features"      : features,
        "vectorLayer"   : vectorLayer,
        "loader"        : loaderId,
        "zoom"          : layer.zoom,
        "locstyle"      : possibleLocstyle,
        "activateWithBl": layer.activeForBaselayers,
        "id"            : layer.id,
        "name"          : layer.name,
        "hide"          : hide,
        "childs"        : childs
      };
    }
  }

  getFeaturesForLayer(layer) {
    let features = [];
    const featureProjection = "EPSG:3857";
    for (let contentId in layer.content) {
      if (layer.content.hasOwnProperty(contentId)) {
        let content = layer.content[contentId];
        let contentData = content.data;
        if (contentData) {
          let dataProjection = "EPSG:4326";
          if (contentData.properties && contentData.properties.projection && contentData.properties.projCode) {
            // if (!proj4(contentData.data.properties.projection)) {
            proj4.defs(contentData.properties.projection, contentData.properties.projCode);
            register(proj4);
            // }
            dataProjection = new Projection({
              code: contentData.properties.projection
            });
          }
          let format;
          if (layer.content[contentId].type === "urlData") {
            if (layer.type === "kml") {
              return false
            }
            else if (layer.type === "gpx") {
              return false;
            }
          }
          else {
            format = new olFormat[layer.content[contentId].type]({
              featureProjection: featureProjection,
              dataProjection: contentData.properties.projection
            });
          }

          let locstyle = content.locationStyle || layer.locstyle;
          let checkLocstyle = this.arrLocstyles.findIndex((element) => element === locstyle);
          if (checkLocstyle === -1 && locstyle) {
            this.arrLocstyles.push(locstyle);
          }
          if (layer.content[contentId].type === "GeoJSON") {
            if (contentData.type === "FeatureCollection") {
              for (let i in contentData.features) {
                if (contentData.features.hasOwnProperty(i)) {
                  let singleFeature = format.readFeature(contentData.features[i]);
                  singleFeature.set('locstyle', locstyle);
                  features.push(singleFeature);
                }
              }
            }
            else {
              let feature = format.readFeature(contentData);
              feature.set('locstyle', locstyle);

              features.push(feature);
            }
          }
          else if (format) {
            fetch(contentData.url).then((response) => {
              response.text().then((text) => {
                let parser = new DOMParser();
                let data = parser.parseFromString(text, "text/xml");
                let tempFeatures = format.readFeature(data.childNodes[0].outerHTML);
                for (let featId in tempFeatures) {
                  if (tempFeatures.hasOwnProperty(featId)) {
                    let feature = tempFeatures[featId];
                    feature.set('locstyle', locstyle);
                    features.push(feature);
                  }
                }
              });
            });
          }
        }
      }
    }
    if (this.mapController.props.mapData.calc_extent === "LOCATIONS") {
      for (let i in features) {
        if (features.hasOwnProperty(i)) {
          let coordinate = utils.getSingleCoordinateForGeom(features[i].getGeometry());
          if (this.extent.maxX < coordinate[0]) {
            this.extent.maxX = coordinate[0];
          }
          if (this.extent.maxY < coordinate[1]) {
            this.extent.maxY = coordinate[1];
          }
          if (this.extent.minX > coordinate[0]) {
            this.extent.minX = coordinate[0];
          }
          if (this.extent.minY > coordinate[1]) {
            this.extent.minY = coordinate[1];
          }

        }
      }
    }
    return features;
  }
  geometryFunction (feature) {
    let geometry = feature.getGeometry();
    if (geometry instanceof Point) {
      return geometry;
    }
    else {
      return null;
    }
  }

  performOvp(requestData, mapConf, responseFunc) {
    if (this.controllers[requestData.layerId]) {    //abort request, if new exists
      this.controllers[requestData.layerId].abort();
      delete this.controllers[requestData.layerId];
    }
    const scope = this;
    this.controllers[requestData.layerId] = new AbortController();
    const signal = this.controllers[requestData.layerId].signal;
    let boundingArray = transformExtent(mapConf.extent, mapConf.projection, 'EPSG:4326');
    let strBoundingBox = "";
    let url = requestData.url;
    let params = decodeURIComponent(requestData.params);
    if (url) {
      if (url.indexOf('{key}') > -1) {
        url = url.replace('{key}', scope.ovpKey);
      }

      const bboxTag = params.indexOf('(bbox)') >= 0 ? /\(bbox\)/g : /\{{bbox\}}/g;
      url += url.includes("?") ? "&" : "?";
      if (params && params.substr(0, 1).trim() === "<") {
        strBoundingBox = '<bbox-query s="' + boundingArray[1] + '" n="' + boundingArray[3] + '" w="' + boundingArray[0] + '" e="' + boundingArray[2] + '"/>';
        url += 'data=' + encodeURIComponent(params.replace(bboxTag, strBoundingBox));
        fetch(url, {signal}).then((response) => {
          response.text().then(responseFunc).catch((error) => {console.log(error.message)});
        })
        .catch((error) => {
          if (error.code && error.code !== 20) {
            console.log('Fetch Error :-S', error.message);
          }
        });
      } else {
        strBoundingBox = boundingArray[1] + ',' + boundingArray[0] + ',' + boundingArray[3] + ',' + boundingArray[2];
        url += 'data=' + encodeURIComponent(params.replace(bboxTag, strBoundingBox));
        fetch(url, {signal}).then((response) => {
          response.json().then(responseFunc).catch((error) => {console.log(error.message)});
        })
        .catch((error) => {
          if (error.code && error.code !== 20) {
            console.log('Fetch Error :-S', error.message);
          }
        });
      }
    }
  }
  performOwnData (requestData, mapConf, responseFunc) {
    const scope = this;
    if (this.controllers[requestData.layerId]) {    //abort request, if new exists
      this.controllers[requestData.layerId].abort();
      delete this.controllers[requestData.layerId];
    }
    // @Todelü implement handling for other projections
    let boundingArray = transformExtent(mapConf.extent, mapConf.projection, 'EPSG:4326');
    let strBoundingBox = boundingArray[0] + ',' + boundingArray [1] + ';' + boundingArray[2] + ',' + boundingArray[3];

    let url = scope.proxy.api_layercontentdata_url + '/' + requestData.layerId + '/' + strBoundingBox;

    this.controllers[requestData.layerId] = new AbortController();
    const signal = this.controllers[requestData.layerId].signal;
    fetch(url, {signal}).then((response) => {
      response.json().then(responseFunc).catch((error) => {console.log(error.message)});
    })
    .catch((error) => {
      if (error.code && error.code !== 20) {
        console.log('Fetch Error :-S', error.message);
      }
    });
  }
  parseOwnData (contentData, layer) {
    var resultCoordinate = transform([parseFloat(contentData['geox']), parseFloat(contentData['geoy'])], 'EPSG:4326', 'EPSG:3857')
    var point = new Point(resultCoordinate);
    let contentFeature = new Feature(point);
    contentFeature.setId(contentData.id);

    contentFeature.set('hover_location', layer.hover_location);
    contentFeature.set('hover_style', layer.hover_style);
    let popup = contentData['popup'] ? contentData['popup'] : jQuery.extend({},layer.popup);
    if(popup && popup.content && popup.content.search && popup.content.search('itemId')){
      popup.content = popup.content.replace('itemId',contentData['id']);
    }
    if(contentData['label']){
      contentFeature.set('label',contentData['label'])
    }
    if(contentData['tooltip']){
      contentFeature.set('tooltip',contentData['tooltip'])
    }
    contentFeature.set('popup', popup);
    contentFeature.set('zoom_onclick', layer.zoom_onclick);
    contentFeature.set('tid', contentData['id']);
    let locstyle = contentData['locstyle'] || layer.locstyle;
    contentFeature.set('locstyle', locstyle);
    return contentFeature;
  }
  addFeatures (features, chain) {
    const scope = this;
    let addedFeatures;
    let layer;
    let oldLength = scope.vectorCollection.getLength(); //necesarry to distinct redundant features

    scope.vectorCollection.extend(features);
    addedFeatures = scope.vectorCollection.getArray().slice(oldLength);

    if (typeof chain === "string") {
      let arrChain = chain.split(',');
      let i = 1;
      layer = scope.arrLayers[arrChain[0]];
      while(chain[i]) {
        layer = layer.childs[arrChain[i]];
        i++;
      }
    }
    else {
      layer = scope.arrLayers[chain]
    }
    if (layer.features) {
      layer.features = layer.features.concat(addedFeatures);
    }
    else if (layer.vectorLayer) {
      let source = layer.vectorLayer.getSource().getSource();
      source.addFeatures(features);
    }
  }
  handleZoom(proxy) {
    const mapController = proxy.options.mapController;
    const childStates = mapController.state.arrLayerStates;
    const objLayers = mapController.state.objLayers;
    const zoom = mapController.map.getView().getZoom();
    for (let id in childStates) {
      if (childStates.hasOwnProperty(id)) {
        childStates[id] = this.handleZoomChilds(zoom, childStates[id], objLayers[id]);
      }
    }
    this.mapController.setLayerStates(childStates);
  }
  handleZoomChilds (zoom, childState, child) {
    for (let id in childState.childStates) {
      if (childState.childStates.hasOwnProperty(id)) {
        childState.childStates[id] = this.handleZoomChilds(zoom, childState.childStates[id], child.childs[id]);
      }
    }
    let greyed = child.zoom && !this.compareZoom(child.zoom);
    if (childState['greyed'] !== greyed) {
      if (greyed || !!child.hide) {
        this.hide(child.loader, child.features || child.vectorLayer);
      }
      else {
        this.show(child.loader, child.features || child.vectorLayer);
      }
    }
    childState['greyed'] = greyed;

    return childState;

  }
  compareZoom(layerZoom) {
    let zoom = this.mapController.map.getView().getZoom();
    return (parseInt(layerZoom.min, 10) < zoom && parseInt(layerZoom.max, 10) > zoom);
  }
}
