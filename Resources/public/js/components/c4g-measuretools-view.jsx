/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */
import React, { Component } from "react";
import {getLanguage} from "../c4g-maps-i18n";
import {Collection} from "ol";
import {Draw} from "ol/interaction";
import {utils} from "../c4g-maps-utils";
import {TooltipPopUp} from "../c4g-maps-misc-tooltippopup";
import {MeasuredFeature} from "./c4g-measuretools-feature.jsx";

export class MeasuretoolsView extends Component {

  constructor(props) {
    super(props);

    this.headlines = {
      "select": "Auswahlmodus",
      "line": "Strecken messen",
      "polygon": "Flächen messen",
      "circle": "Kreise messen",
      "freehand": "Freihand messen"
    };
    this.updateFunctions = this.createMeasureFunctions();
  }

  render() {
    const scope = this;
    if (this.props.active) {
      if (this.props.mode === "select") {
        return (
          <div className={"c4g-measuretools-content"}>
            <p>{this.props.lang.MEASURETOOLS_INFO}</p>
            <br/><br/>
            <sub>{this.props.lang.MEASURETOOLS_INFO_ADDITIONAL}</sub>
          </div>
        );
      } else {
        // measure view
        return (
          <div className={"c4g-measuretools-content"}>
            <div className={"contentHeadline"}>{this.headlines[this.props.mode]}</div>
            <div>
              {Object.keys(this.props.features).map(function(element, index) {
                let feat = scope.props.features[element];
                return (<MeasuredFeature key={index} idx={index} label={feat.label}
                                         measuredValues={feat.measuredValues} />);
              })}
            </div>
          </div>
        );
      }
    } else {
      // not active
      return null;
    }

  }

  componentDidMount() {
    if (this.props.mode !== "select") {
      this.updateFunctions.initFunction();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.mode !== "select") {
      if (!prevProps.active && this.props.active) {
        this.updateFunctions.activateFunction();
      }
      if (prevProps.active && !this.props.active) {
        this.updateFunctions.deactivateFunction();
      }
    }
  }

  createMeasureFunctions() {
    let source, features, olType, interaction;
    const scope = this;
    return {
      initFunction: function () {
      var featureIdCount,
        activeSketch,
        activeTooltip,
        addMeasureFeature,
        updateMeasureFeature,
        getValueOfGeometry,
        getLengthOfMeasure,
        removeMeasureFeature;

      featureIdCount = 1;

      if (scope.props.mode.toLowerCase() === 'freehand') {
        source = scope.props.measureTools.measureFreehandLayer.getSource();
      } else if (scope.props.mode.toLowerCase() === 'circle') {
        source = scope.props.measureTools.measureCircleLayer.getSource();
      } else if (scope.props.mode.toLowerCase() === 'polygon') {
        source = scope.props.measureTools.measurePolygonLayer.getSource();
      } else {
        source = scope.props.measureTools.measureLineLayer.getSource();
      }


      features = new Collection();
      if (scope.props.mode.toLowerCase() === "select") {
        return;
      }

      switch (scope.props.mode) {
        case "line":
          olType = "LineString";
          break;
        case "polygon":
          olType = "Polygon";
          break;
        case "circle":
          olType = "Circle";
          break;
        case "freehand":
          olType = "LineString";
          break;
      }

      interaction = new Draw({
        features: features,
        source: source,
        type: olType,
        freehand: scope.props.mode === 'Freehand',
        // @TODO: use custom style? (BE-option)
        // style: use default style
      });

      addMeasureFeature = function (feature) {
        var inputElement,
          strLabel,
          strType,
          measureArea,
          measureRadius,
          measureLine;

        if (!feature) {
          return false;
        }

        // check feature-type
        if (feature.getGeometry().getType() === 'LineString') {
          strLabel = scope.props.lang.LENGTH;
          strType = scope.props.lang.LINE;
          measureArea = false;
          measureRadius = false;
          measureLine = true;
        } else if (feature.getGeometry().getType() === 'Polygon') {
          strLabel = scope.props.lang.PERIMETER;
          strType = scope.props.lang.POLYGON;
          measureArea = true;
          measureRadius = false;
          measureLine = false;
        } else if (feature.getGeometry().getType() === 'Circle') {
          strLabel = scope.props.lang.RADIUS;
          strType = scope.props.lang.CIRCLE;
          measureArea = true;
          measureRadius = true;
          measureLine = false;
        } else {
          //freehand ist LineString too
          strLabel = scope.props.lang.LENGTH;
          strType = scope.props.lang.FREEHAND;
          measureArea = false;
          measureRadius = false;
          measureLine = true;
        }
        // feature.set('listElementValueName', inputElement);
        feature.set('featureId', featureIdCount);
        let measuredFeature = {};
        measuredFeature.id = featureIdCount;
        measuredFeature.label = strType + " " + featureIdCount;
        feature.set('featureLabel', measuredFeature.label);
        measuredFeature.measuredValues = {};
        if (measureLine) {
          measuredFeature.measuredValues['line'] = {
            description: "Länge: ",
            value: 0
          };
        }
        if (measureRadius) {
          measuredFeature.measuredValues['radius'] = {
            description: "Radius: ",
            value: 0
          };
        }
        if (measureArea) {
          measuredFeature.measuredValues['area'] = {
            description: "Flächeninhalt: ",
            value: 0
          };
        }
        scope.props.addFeature(measuredFeature);
        // increase the id-counter
        featureIdCount += 1;
        // scope.update();
      }; // end of "addMeasureFeature()"

      updateMeasureFeature = function (feature) {
        var featureTooltip,
          newContent,
          name,
          length,
          area,
          radius;

        featureTooltip = feature.get('tooltip');
        name = feature.get('featureLabel');
        length = utils.measureGeometry(feature.getGeometry(), true);
        feature.set('measuredLength', length.rawValue);
        let featureId = feature.get('featureId');
        let newFeature = {};
        newFeature.label = name;
        newFeature.id = featureId;
        newFeature.measuredValues = {};
        if (length) {
          newFeature.measuredValues.line = {};
          newFeature.measuredValues['line'].value = length.rawValue;
        }

        if (feature.get('geometryType') === 'circle') {
          radius = utils.measureGeometry(feature.getGeometry());
          if (newFeature.measuredValues['radius']) {
            newFeature.measuredValues['radius'].value = radius.rawValue;
          }
        } else if (feature.get('geometryType') === 'polygon') {
          area = utils.measureGeometry(feature.getGeometry());
          if (newFeature.measuredValues['area']) {
            newFeature.measuredValues['area'].value = area.rawValue;
          }
        }
        scope.props.modifyFeature(newFeature, featureId);
      }; // end of "updateMeasureFeature()"

      removeMeasureFeature = function (feature) {
        // scope.mainSection.removeChild(feature.get('listElement'));
        //
        // // last element? -> add infomessage
        // if (scope.mainSection.childElementCount < 1) {
        //   scope.mainSection.appendChild(scope.mainSectionInfo);
        //   scope.update();
        // }
        // TODO removeFeature implementieren
      }; // end of "removeMeasureFeature()"

      //Start Workaround
      getValueOfGeometry = function (feature) {
        var leng = utils.measureGeometry(feature.getGeometry(), true);
        // feature.set('measuredLength', length);
        var val = leng.htmlValue;
        var valuenumb = val.match(/\d/g);
        valuenumb = valuenumb.join("");
        return valuenumb;
      };

      getLengthOfMeasure = function () {
        var length = '0.00 m';
        var lengthnumb = length.match(/\d/g);
        lengthnumb = lengthnumb.join("");
        lengthnumb = +8;
        return lengthnumb;
      };// End Workaround

      interaction.on('drawstart',
        function (event) {
          activeSketch = event.feature;
          // create tooltip
          activeTooltip = new TooltipPopUp({
            map: scope.props.mapController.map,
            position: event.coordinate,
            horizontal: true,
            closeable: true,
            closeFunction: function () {
              //Workaround, for small or zero values of Freehand
              var val = getValueOfGeometry(event.feature);
              var leng = getLengthOfMeasure();
              if (val !== leng && val > leng) {
                removeMeasureFeature(event.feature);
                source.removeFeature(event.feature);
              }
              else {
                removeMeasureFeature(event.feature);
              }
            }
          });

          activeSketch.set('tooltip', activeTooltip);
          activeSketch.set('geometryType', scope.props.mode.toLowerCase());
          addMeasureFeature(activeSketch);
        }, scope);

      scope.props.mapController.map.on('pointermove',
        function (event) {
          if (activeSketch && activeTooltip) {
            activeTooltip.setPosition(event.coordinate);
            updateMeasureFeature(activeSketch);
          }
        }, scope);

      interaction.on('drawend',
        function (event) {
          if (activeSketch && activeTooltip) {
            updateMeasureFeature(activeSketch);
            activeSketch = null;
            activeTooltip = null;
          }
        }, scope);

      return true;
    },
      activateFunction: function () {

        // disable mapHover
        scope.props.mapController.mapHover.deactivate();

        features.clear();

        // Enable interaction
        scope.props.mapController.map.addInteraction(interaction);
      },
      deactivateFunction: function () {

        // reactivate mapHover
        scope.props.mapController.mapHover.activate();
        if (scope.props.mode.toLowerCase() !== 'point') {
          try {
            interaction.finishDrawing();
          } catch (ignore) {
            // 0_o
          }
        }

        // Remove from map
        scope.props.mapController.map.removeInteraction(interaction);
      }
    }
  }

}