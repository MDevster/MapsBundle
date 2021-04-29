(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./Resources/public/js/components/c4g-measuretools-feature.jsx":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuredFeature=void 0;var a=c(r("./node_modules/babel-runtime/core-js/object/keys.js")),s=c(r("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),o=c(r("./node_modules/babel-runtime/helpers/classCallCheck.js")),n=c(r("./node_modules/babel-runtime/helpers/createClass.js")),u=c(r("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),l=c(r("./node_modules/babel-runtime/helpers/inherits.js")),i=r("./node_modules/react/index.js"),d=c(i);function c(e){return e&&e.__esModule?e:{default:e}}t.MeasuredFeature=function(e){function t(e){(0,o.default)(this,t);var r=(0,u.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return r.changeFeatureLabel=r.changeFeatureLabel.bind(r),r}return(0,l.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this;return d.default.createElement("div",null,d.default.createElement("div",null,d.default.createElement("label",{htmlFor:"measureElement_"+this.props.idx},"Name: "),d.default.createElement("input",{type:"text",name:"measureElement_"+this.props.idx,defaultValue:this.props.label,onInput:this.changeFeatureLabel})),(0,a.default)(this.props.measuredValues).map((function(t,r){var a=e.props.measuredValues[t],s=0;switch(t){case"line":case"radius":s=e.convertMetersToKm(a.value);break;case"area":s=e.convertSquareMetersToSquareKm(a.value)}return d.default.createElement("p",{key:r},d.default.createElement("strong",null,a.description),d.default.createElement("span",{className:"c4g-measure-value-"+e.props.idx},s))})))}},{key:"changeFeatureLabel",value:function(){var e=this.props.feature;e.label=document.querySelector('input[name="measureElement_'+this.props.idx+'"]').value,this.props.modifyFeature(e,e.id)}},{key:"convertMetersToKm",value:function(e){var t=e/1e3;return t>0?t+" km":e+" m"}},{key:"convertSquareMetersToSquareKm",value:function(e){var t=e/1e6;return t>0?t+" km²":e+" m²"}}]),t}(i.Component);
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
                      */},"./Resources/public/js/components/c4g-measuretools-view.jsx":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuretoolsView=void 0;var a=v(r("./node_modules/babel-runtime/core-js/object/keys.js")),s=v(r("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),o=v(r("./node_modules/babel-runtime/helpers/classCallCheck.js")),n=v(r("./node_modules/babel-runtime/helpers/createClass.js")),u=v(r("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),l=v(r("./node_modules/babel-runtime/helpers/inherits.js")),i=r("./node_modules/react/index.js"),d=v(i),c=r("./Resources/public/js/c4g-maps-i18n.js"),m=r("./node_modules/ol/index.js"),p=r("./node_modules/ol/interaction.js"),h=r("./Resources/public/js/c4g-maps-utils.js"),f=r("./Resources/public/js/c4g-maps-misc-tooltippopup.js"),g=r("./Resources/public/js/components/c4g-measuretools-feature.jsx");function v(e){return e&&e.__esModule?e:{default:e}}t.MeasuretoolsView=function(e){function t(e){(0,o.default)(this,t);var r=(0,u.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e)),a=(0,c.getLanguage)(r.props.mapController.data);return r.headlines={select:a.MEASURETOOLS_VIEW_TRIGGER_SELECT,line:a.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,polygon:a.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,circle:a.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,freehand:a.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND},r.featureIdCtr=r.props.featureId,r.updateFunctions=r.createMeasureFunctions(),r.modifyFeature=r.modifyFeature.bind(r),r}return(0,l.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){var e=this;return this.props.active?"select"===this.props.mode?d.default.createElement("div",{className:"c4g-measuretools-content"},d.default.createElement("p",null,this.props.lang.MEASURETOOLS_INFO),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("sub",null,this.props.lang.MEASURETOOLS_INFO_ADDITIONAL)):d.default.createElement("div",{className:"c4g-measuretools-content"},d.default.createElement("div",{className:"contentHeadline"},this.headlines[this.props.mode]),d.default.createElement("div",null,(0,a.default)(this.props.features).map((function(t,r){var a=e.props.features[t];return d.default.createElement(g.MeasuredFeature,{key:r,idx:r,label:a.label,feature:a,measuredValues:a.measuredValues,modifyFeature:e.modifyFeature})})))):null}},{key:"modifyFeature",value:function(e,t){for(var r=this.props.features,a=0;a<r.length;a++)if(r[a].id===t){r[a].olFeature.set("featureLabel",e.label),this.updateMeasureFeature(r[a].olFeature);break}this.props.modifyFeature(e,t)}},{key:"componentDidMount",value:function(){"select"!==this.props.mode&&this.updateFunctions.initFunction()}},{key:"componentDidUpdate",value:function(e,t,r){"select"!==this.props.mode&&(!e.active&&this.props.active&&this.updateFunctions.activateFunction(),e.active&&!this.props.active&&this.updateFunctions.deactivateFunction(),this.props.mapController.mapHover.deactivate()),"select"!==this.props.mode&&this.props.measureTools.state.open||this.props.mapController.mapHover.activate(),this.featureIdCtr=this.props.featureId}},{key:"createMeasureFunctions",value:function(){var e=void 0,t=void 0,r=void 0,a=void 0,s=this;return{initFunction:function(){var o,n,u,l,i,d,c,g;if(o=s.featureIdCtr,e="freehand"===s.props.mode.toLowerCase()?s.props.measureTools.measureFreehandLayer.getSource():"circle"===s.props.mode.toLowerCase()?s.props.measureTools.measureCircleLayer.getSource():"polygon"===s.props.mode.toLowerCase()?s.props.measureTools.measurePolygonLayer.getSource():s.props.measureTools.measureLineLayer.getSource(),t=new m.Collection,"select"!==s.props.mode.toLowerCase()){switch(s.props.mode){case"line":r="LineString";break;case"polygon":r="Polygon";break;case"circle":r="Circle";break;case"freehand":r="LineString"}return a=new p.Draw({features:t,source:e,type:r,freehand:"freehand"===s.props.mode}),l=function(e){var t,r,a,n;if(!e)return!1;"LineString"===e.getGeometry().getType()?(s.props.lang.LENGTH,t=s.props.lang.LINE,r=!1,a=!1,n=!0):"Polygon"===e.getGeometry().getType()?(s.props.lang.PERIMETER,t=s.props.lang.POLYGON,r=!0,a=!1,n=!1):"Circle"===e.getGeometry().getType()?(s.props.lang.RADIUS,t=s.props.lang.CIRCLE,r=!0,a=!0,n=!1):(s.props.lang.LENGTH,t=s.props.lang.FREEHAND,r=!1,a=!1,n=!0),o=s.featureIdCtr,e.set("featureId",o);var u={};u.id=o,u.label=t+" "+o,e.set("featureLabel",u.label),u.measuredValues={},n&&(u.measuredValues.line={description:"Länge: ",value:0}),a&&(u.measuredValues.radius={description:"Radius: ",value:0}),r&&(u.measuredValues.area={description:"Flächeninhalt: ",value:0}),u.olFeature=e,s.props.addFeature(u),s.props.incrFeatId()},i=function(e){var t,r,a,o,n;t=e.get("tooltip"),r=e.get("featureLabel"),a=h.utils.measureGeometry(e.getGeometry(),!0),e.set("measuredLength",a.rawValue),t.setContent("<strong>"+r+"</strong><br>"+a.htmlValue);var u=e.get("featureId"),l={};l.label=r,l.id=u,l.measuredValues={},l.olFeature=e,a&&"circle"!==e.get("geometryType")&&"polygon"!==e.get("geometryType")&&(l.measuredValues.line={},l.measuredValues.line.description="Länge: ",l.measuredValues.line.value=a.rawValue),"circle"===e.get("geometryType")&&(n=h.utils.measureGeometry(e.getGeometry()),l.measuredValues.radius={description:"Radius: ",value:0},l.measuredValues.radius.value=n.rawValue,t.setContent("<strong>"+r+"</strong><br>"+l.measuredValues.radius.description+n.htmlValue)),"polygon"!==e.get("geometryType")&&"circle"!==e.get("geometryType")||(o=h.utils.measureGeometry(e.getGeometry(),!1,!0),l.measuredValues.area={description:"Flächeninhalt: ",value:0},l.measuredValues.area.value=o.rawValue,t.setContent("<strong>"+r+"</strong><br>"+l.measuredValues.area.description+o.htmlValue)),e.set("tooltip",t),s.props.modifyFeature(l,l.id)},s.updateMeasureFeature=i,g=function(e){s.props.removeFeature(e.get("featureId"))},d=function(e){var t=h.utils.measureGeometry(e.getGeometry(),!0).htmlValue.match(/\d/g);return t=t.join("")},c=function(){var e="0.00 m".match(/\d/g);return e=e.join(""),e=8},a.on("drawstart",(function(t){n=t.feature,u=new f.TooltipPopUp({map:s.props.mapController.map,position:t.coordinate,horizontal:!0,closeable:!0,closeFunction:function(){var r=d(t.feature),a=c();r!==a&&r>a?(g(t.feature),e.removeFeature(t.feature)):g(t.feature)}}),n.set("tooltip",u),n.set("geometryType",s.props.mode.toLowerCase()),l(n)}),s),s.props.mapController.map.on("pointermove",(function(e){n&&u&&(u.setPosition(e.coordinate),i(n))}),s),a.on("drawend",(function(e){n&&u&&(i(n),n=null,u=null)}),s),!0}},activateFunction:function(){t.clear(),s.props.mapController.map.addInteraction(a)},deactivateFunction:function(){if("point"!==s.props.mode.toLowerCase())try{a.finishDrawing()}catch(e){}s.props.mapController.map.removeInteraction(a)}}}}]),t}(i.Component);
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
                      */},"./Resources/public/js/components/c4g-measuretools.jsx":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(r("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),s=y(r("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=y(r("./node_modules/babel-runtime/helpers/createClass.js")),n=y(r("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),u=y(r("./node_modules/babel-runtime/helpers/inherits.js")),l=r("./node_modules/react/index.js"),i=y(l),d=r("./Resources/public/js/components/c4g-titlebar.jsx"),c=r("./Resources/public/js/c4g-maps-i18n.js"),m=r("./node_modules/ol/control.js"),p=r("./Resources/public/js/components/c4g-measuretools-view.jsx"),h=r("./node_modules/ol/layer.js"),f=r("./node_modules/ol/source.js"),g=r("./node_modules/ol/index.js"),v=r("./Resources/public/js/c4g-maps-utils.js");function y(e){return e&&e.__esModule?e:{default:e}}var C=function(e){function t(e){(0,s.default)(this,t);var r=(0,n.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e)),o=r,u=document.createElement("div"),l=document.createElement("button");r.langConstants=(0,c.getLanguage)(e.mapController.data),l.title=r.langConstants.CTRL_MEASURETOOLS,u.className="c4g-measuretools-control ol-unselectable ol-control ",e.open?u.className+="c4g-open":u.className+="c4g-close",e.external&&(u.className+=" c4g-external"),u.appendChild(l),jQuery(u).on("click",(function(e){var t=o.props.mapController.measuretoolsContainer.className.includes("c4g-close");o.state.open?t?jQuery(o.props.mapController.measuretoolsContainer).removeClass("c4g-close").addClass("c4g-open"):o.close():o.open()}));var i=e.mapController,d=new m.Control({element:u,target:e.target});return i.mapsControls.controls.measuretools=d,i.map.addControl(d),r.close=r.close.bind(r),r.open=r.open.bind(r),r.addMeasuredFeature=r.addMeasuredFeature.bind(r),r.modifyMeasuredFeature=r.modifyMeasuredFeature.bind(r),r.removeMeasuredFeature=r.removeMeasuredFeature.bind(r),r.incrementFeatureId=r.incrementFeatureId.bind(r),r.modes=["select","line","polygon","circle","freehand"],r.state={open:e.open||!1,currentMode:"select",control:d,measuredFeatures:[],featureIdCtr:0},r.init(),r}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this,t={select:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,line:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,polygon:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,circle:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,freehand:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND};return i.default.createElement("div",{className:"c4g-measuretools-wrapper"},i.default.createElement(d.Titlebar,{wrapperClass:"c4g-measuretools-header",headerClass:"c4g-measuretools-headline",hideContainer:".c4g-measuretools-container",header:this.langConstants.MEASURETOOLS,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE}),i.default.createElement("div",{className:"c4g-measuretools-mode-switcher"},this.modes.map((function(r,a){return i.default.createElement("button",{key:a,className:"c4g-measure-"+r+" "+(r===e.state.currentMode?"c4g-active":"c4g-inactive"),onMouseUp:function(){return e.setState({currentMode:r})},title:t[r]})}))),i.default.createElement(p.MeasuretoolsView,{mode:"select",measureTools:this,active:"select"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),i.default.createElement(p.MeasuretoolsView,{mode:"line",measureTools:this,active:"line"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),i.default.createElement(p.MeasuretoolsView,{mode:"polygon",measureTools:this,active:"polygon"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),i.default.createElement(p.MeasuretoolsView,{mode:"circle",measureTools:this,active:"circle"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),i.default.createElement(p.MeasuretoolsView,{mode:"freehand",measureTools:this,active:"freehand"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}))}},{key:"incrementFeatureId",value:function(){this.setState({featureIdCtr:this.state.featureIdCtr+1})}},{key:"addMeasuredFeature",value:function(e){var t=this.state.measuredFeatures;t.push(e),this.setState({measuredFeatures:t})}},{key:"modifyMeasuredFeature",value:function(e,t){for(var r=this.state.measuredFeatures,a=0;a<r.length;a++)r[a].id===t&&(r[a]=e);this.setState({measuredFeatures:r})}},{key:"removeMeasuredFeature",value:function(e){for(var t=this.state.measuredFeatures,r=0;r<t.length;r++)if(t[r].id===e){t.splice(r,1);break}this.setState({measuredFeatures:t})}},{key:"setCurrentMode",value:function(e){this.modes.includes(e)?this.setState({currentMode:e}):console.warn("The specified mode is not available")}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"init",value:function(){return this.measureLineLayer=new h.Vector({source:new f.Vector}),this.measurePolygonLayer=new h.Vector({source:new f.Vector}),this.measureCircleLayer=new h.Vector({source:new f.Vector}),this.measureFreehandLayer=new h.Vector({source:new f.Vector}),this.measureLayerGroup=new h.Group({layers:new g.Collection([this.measureFreehandLayer,this.measureCircleLayer,this.measurePolygonLayer,this.measureLineLayer]),visible:!0}),this.props.mapController.map.addLayer(this.measureLayerGroup),!0}},{key:"componentDidUpdate",value:function(e,t,r){if(t.open&&!this.state.open)jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-measuretools-container").removeClass("c4g-open").addClass("c4g-close"),this.props.mapController.map.removeLayer(this.measureLayerGroup),this.removeTooltips(),this.removedOnce=!0;else if(!t.open&&this.state.open){if(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-measuretools-container").addClass("c4g-open").removeClass("c4g-close"),this.removedOnce)try{this.props.mapController.map.addLayer(this.measureLayerGroup)}catch(e){console.warn(e)}this.addTooltips()}this.props.mapController.data.caching&&!this.state.open&&(v.utils.getValue("panel")===this.constructor.name&&v.utils.storeValue("panel",""))}},{key:"removeTooltips",value:function(){for(var e=this.measureLayerGroup.getLayersArray(),t=0;t<e.length;t++){var r=e[t].getSource().getFeatures();if(r)for(var a=0;a<r.length;a++){r[a].get("tooltip").hide()}}}},{key:"addTooltips",value:function(){for(var e=this.measureLayerGroup.getLayersArray(),t=0;t<e.length;t++){var r=e[t].getSource().getFeatures();if(r)for(var a=0;a<r.length;a++){r[a].get("tooltip").show()}}}}]),t}(l.Component);
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
                      */t.default=C}}]);