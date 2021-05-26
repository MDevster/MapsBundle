(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["Resources_public_js_components_c4g-measuretools_jsx"],{"./Resources/public/js/components/c4g-measuretools-feature.jsx":(e,t,r)=>{"use strict";var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuredFeature=void 0;var o=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),n=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),u=a(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),l=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=o?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js"));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}var m=function(e){(0,l.default)(s,e);var t,r,a=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.default)(t);if(r){var s=(0,c.default)(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return(0,i.default)(this,e)});function s(e){var t;return(0,o.default)(this,s),(t=a.call(this,e)).changeFeatureLabel=t.changeFeatureLabel.bind((0,u.default)(t)),t}return(0,n.default)(s,[{key:"render",value:function(){var e=this;return d.default.createElement("div",null,d.default.createElement("div",null,d.default.createElement("label",{htmlFor:"measureElement_"+this.props.idx},"Name: "),d.default.createElement("input",{type:"text",name:"measureElement_"+this.props.idx,defaultValue:this.props.label,onInput:this.changeFeatureLabel})),Object.keys(this.props.measuredValues).map((function(t,r){var a=e.props.measuredValues[t],s=0;switch(t){case"line":case"radius":s=e.convertMetersToKm(a.value);break;case"area":s=e.convertSquareMetersToSquareKm(a.value)}return d.default.createElement("p",{key:r},d.default.createElement("strong",null,a.description),d.default.createElement("span",{className:"c4g-measure-value-"+e.props.idx},s))})))}},{key:"changeFeatureLabel",value:function(){var e=this.props.feature;e.label=document.querySelector('input[name="measureElement_'+this.props.idx+'"]').value,this.props.modifyFeature(e,e.id)}},{key:"convertMetersToKm",value:function(e){var t=e/1e3;return t>0?t+" km":e+" m"}},{key:"convertSquareMetersToSquareKm",value:function(e){var t=e/1e6;return t>0?t+" km²":e+" m²"}}]),s}(d.Component);t.MeasuredFeature=m},"./Resources/public/js/components/c4g-measuretools-view.jsx":(e,t,r)=>{"use strict";var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.MeasuretoolsView=void 0;var o=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),n=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),u=a(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),l=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=o?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),p=r("./Resources/public/js/c4g-maps-i18n.js"),m=r("./node_modules/ol/index.js"),f=r("./node_modules/ol/interaction.js"),h=r("./Resources/public/js/c4g-maps-utils.js"),y=r("./Resources/public/js/c4g-maps-misc-tooltippopup.js"),v=r("./Resources/public/js/components/c4g-measuretools-feature.jsx");function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}var b=function(e){(0,l.default)(s,e);var t,r,a=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.default)(t);if(r){var s=(0,c.default)(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return(0,i.default)(this,e)});function s(e){var t;(0,o.default)(this,s),t=a.call(this,e);var r=(0,p.getLanguage)(t.props.mapController.data);return t.headlines={select:r.MEASURETOOLS_VIEW_TRIGGER_SELECT,line:r.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,polygon:r.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,circle:r.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,freehand:r.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND},t.featureIdCtr=t.props.featureId,t.updateFunctions=t.createMeasureFunctions(),t.modifyFeature=t.modifyFeature.bind((0,u.default)(t)),t}return(0,n.default)(s,[{key:"render",value:function(){var e=this;return this.props.active?"select"===this.props.mode?d.default.createElement("div",{className:"c4g-measuretools-content"},d.default.createElement("p",null,this.props.lang.MEASURETOOLS_INFO),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("sub",null,this.props.lang.MEASURETOOLS_INFO_ADDITIONAL)):d.default.createElement("div",{className:"c4g-measuretools-content"},d.default.createElement("div",{className:"contentHeadline"},this.headlines[this.props.mode]),d.default.createElement("div",null,Object.keys(this.props.features).map((function(t,r){var a=e.props.features[t];return d.default.createElement(v.MeasuredFeature,{key:r,idx:r,label:a.label,feature:a,measuredValues:a.measuredValues,modifyFeature:e.modifyFeature})})))):null}},{key:"modifyFeature",value:function(e,t){for(var r=this.props.features,a=0;a<r.length;a++)if(r[a].id===t){r[a].olFeature.set("featureLabel",e.label),this.updateMeasureFeature(r[a].olFeature);break}this.props.modifyFeature(e,t)}},{key:"componentDidMount",value:function(){"select"!==this.props.mode&&this.updateFunctions.initFunction()}},{key:"componentDidUpdate",value:function(e,t,r){"select"!==this.props.mode&&(!e.active&&this.props.active&&this.updateFunctions.activateFunction(),e.active&&!this.props.active&&this.updateFunctions.deactivateFunction(),this.props.mapController.mapHover.deactivate()),"select"!==this.props.mode&&this.props.measureTools.state.open||this.props.mapController.mapHover.activate(),this.featureIdCtr=this.props.featureId}},{key:"createMeasureFunctions",value:function(){var e,t,r,a,s=this;return{initFunction:function(){var o,n,u,l,i,c,d,p;if(o=s.featureIdCtr,e="freehand"===s.props.mode.toLowerCase()?s.props.measureTools.measureFreehandLayer.getSource():"circle"===s.props.mode.toLowerCase()?s.props.measureTools.measureCircleLayer.getSource():"polygon"===s.props.mode.toLowerCase()?s.props.measureTools.measurePolygonLayer.getSource():s.props.measureTools.measureLineLayer.getSource(),t=new m.Collection,"select"!==s.props.mode.toLowerCase()){switch(s.props.mode){case"line":r="LineString";break;case"polygon":r="Polygon";break;case"circle":r="Circle";break;case"freehand":r="LineString"}return a=new f.Draw({features:t,source:e,type:r,freehand:"freehand"===s.props.mode}),l=function(e){var t,r,a,n;if(!e)return!1;"LineString"===e.getGeometry().getType()?(s.props.lang.LENGTH,t=s.props.lang.LINE,r=!1,a=!1,n=!0):"Polygon"===e.getGeometry().getType()?(s.props.lang.PERIMETER,t=s.props.lang.POLYGON,r=!0,a=!1,n=!1):"Circle"===e.getGeometry().getType()?(s.props.lang.RADIUS,t=s.props.lang.CIRCLE,r=!0,a=!0,n=!1):(s.props.lang.LENGTH,t=s.props.lang.FREEHAND,r=!1,a=!1,n=!0),o=s.featureIdCtr,e.set("featureId",o);var u={};u.id=o,u.label=t+" "+o,e.set("featureLabel",u.label),u.measuredValues={},n&&(u.measuredValues.line={description:"Länge: ",value:0}),a&&(u.measuredValues.radius={description:"Radius: ",value:0}),r&&(u.measuredValues.area={description:"Flächeninhalt: ",value:0}),u.olFeature=e,s.props.addFeature(u),s.props.incrFeatId()},i=function(e){var t,r,a,o,n;t=e.get("tooltip"),r=e.get("featureLabel"),a=h.utils.measureGeometry(e.getGeometry(),!0),e.set("measuredLength",a.rawValue),t.setContent("<strong>"+r+"</strong><br>"+a.htmlValue);var u=e.get("featureId"),l={};l.label=r,l.id=u,l.measuredValues={},l.olFeature=e,a&&"circle"!==e.get("geometryType")&&"polygon"!==e.get("geometryType")&&(l.measuredValues.line={},l.measuredValues.line.description="Länge: ",l.measuredValues.line.value=a.rawValue),"circle"===e.get("geometryType")&&(n=h.utils.measureGeometry(e.getGeometry()),l.measuredValues.radius={description:"Radius: ",value:0},l.measuredValues.radius.value=n.rawValue,t.setContent("<strong>"+r+"</strong><br>"+l.measuredValues.radius.description+n.htmlValue)),"polygon"!==e.get("geometryType")&&"circle"!==e.get("geometryType")||(o=h.utils.measureGeometry(e.getGeometry(),!1,!0),l.measuredValues.area={description:"Flächeninhalt: ",value:0},l.measuredValues.area.value=o.rawValue,t.setContent("<strong>"+r+"</strong><br>"+l.measuredValues.area.description+o.htmlValue)),e.set("tooltip",t),s.props.modifyFeature(l,l.id)},s.updateMeasureFeature=i,p=function(e){s.props.removeFeature(e.get("featureId"))},c=function(e){var t=h.utils.measureGeometry(e.getGeometry(),!0).htmlValue.match(/\d/g);return t.join("")},d=function(){var e="0.00 m".match(/\d/g);return e=e.join(""),8},a.on("drawstart",(function(t){n=t.feature,u=new y.TooltipPopUp({map:s.props.mapController.map,position:t.coordinate,horizontal:!0,closeable:!0,closeFunction:function(){var r=c(t.feature),a=d();r!==a&&r>a?(p(t.feature),e.removeFeature(t.feature)):p(t.feature)}}),n.set("tooltip",u),n.set("geometryType",s.props.mode.toLowerCase()),l(n)}),s),s.props.mapController.map.on("pointermove",(function(e){n&&u&&(u.setPosition(e.coordinate),i(n))}),s),a.on("drawend",(function(e){n&&u&&(i(n),n=null,u=null)}),s),!0}},activateFunction:function(){t.clear(),s.props.mapController.map.addInteraction(a)},deactivateFunction:function(){if("point"!==s.props.mode.toLowerCase())try{a.finishDrawing()}catch(e){}s.props.mapController.map.removeInteraction(a)}}}}]),s}(d.Component);t.MeasuretoolsView=b},"./Resources/public/js/components/c4g-measuretools.jsx":(e,t,r)=>{"use strict";var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),n=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),u=a(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),l=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var u=o?Object.getOwnPropertyDescriptor(e,n):null;u&&(u.get||u.set)?Object.defineProperty(a,n,u):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),p=r("./Resources/public/js/c4g-maps-i18n.js"),m=r("./node_modules/ol/control.js"),f=r("./Resources/public/js/components/c4g-measuretools-view.jsx"),h=r("./node_modules/ol/layer.js"),y=r("./node_modules/ol/source.js"),v=r("./node_modules/ol/index.js"),g=r("./Resources/public/js/c4g-maps-utils.js");function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}var C=d.default.lazy((function(){return Promise.resolve().then(r.bind(r,"./Resources/public/js/components/c4g-titlebar.jsx"))})),F=function(e){(0,l.default)(s,e);var t,r,a=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.default)(t);if(r){var s=(0,c.default)(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return(0,i.default)(this,e)});function s(e){var t;(0,o.default)(this,s),t=a.call(this,e);var r=(0,u.default)(t),n=document.createElement("div"),l=document.createElement("button");t.langConstants=(0,p.getLanguage)(e.mapController.data),l.title=t.langConstants.CTRL_MEASURETOOLS,n.className="c4g-measuretools-control ol-unselectable ol-control ",e.open?n.className+="c4g-open":n.className+="c4g-close",e.external&&(n.className+=" c4g-external"),n.appendChild(l),jQuery(n).on("click",(function(e){var t=r.props.mapController.measuretoolsContainer.className.includes("c4g-close");r.state.open?t?jQuery(r.props.mapController.measuretoolsContainer).removeClass("c4g-close").addClass("c4g-open"):r.close():r.open()}));var i=e.mapController,c=new m.Control({element:n,target:e.target});return i.mapsControls.controls.measuretools=c,i.map.addControl(c),t.close=t.close.bind((0,u.default)(t)),t.open=t.open.bind((0,u.default)(t)),t.addMeasuredFeature=t.addMeasuredFeature.bind((0,u.default)(t)),t.modifyMeasuredFeature=t.modifyMeasuredFeature.bind((0,u.default)(t)),t.removeMeasuredFeature=t.removeMeasuredFeature.bind((0,u.default)(t)),t.incrementFeatureId=t.incrementFeatureId.bind((0,u.default)(t)),t.modes=["select","line","polygon","circle","freehand"],t.state={open:e.open||!1,currentMode:"select",control:c,measuredFeatures:[],featureIdCtr:0},t.init(),t}return(0,n.default)(s,[{key:"render",value:function(){var e=this,t={select:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,line:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,polygon:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,circle:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,freehand:this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND};return d.default.createElement("div",{className:"c4g-measuretools-wrapper"},d.default.createElement(d.Suspense,{fallback:d.default.createElement("div",null,"Loading...")},d.default.createElement(C,{wrapperClass:"c4g-measuretools-header",headerClass:"c4g-measuretools-headline",hideContainer:".c4g-measuretools-container",header:this.langConstants.MEASURETOOLS,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),d.default.createElement("div",{className:"c4g-measuretools-mode-switcher"},this.modes.map((function(r,a){return d.default.createElement("button",{key:a,className:"c4g-measure-"+r+" "+(r===e.state.currentMode?"c4g-active":"c4g-inactive"),onMouseUp:function(){return e.setState({currentMode:r})},title:t[r]})}))),d.default.createElement(f.MeasuretoolsView,{mode:"select",measureTools:this,active:"select"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),d.default.createElement(f.MeasuretoolsView,{mode:"line",measureTools:this,active:"line"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),d.default.createElement(f.MeasuretoolsView,{mode:"polygon",measureTools:this,active:"polygon"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),d.default.createElement(f.MeasuretoolsView,{mode:"circle",measureTools:this,active:"circle"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}),d.default.createElement(f.MeasuretoolsView,{mode:"freehand",measureTools:this,active:"freehand"===this.state.currentMode&&this.state.open,featureId:this.state.featureIdCtr,lang:this.langConstants,addFeature:this.addMeasuredFeature,features:this.state.measuredFeatures,incrFeatId:this.incrementFeatureId,modifyFeature:this.modifyMeasuredFeature,mapController:this.props.mapController,removeFeature:this.removeMeasuredFeature}))}},{key:"incrementFeatureId",value:function(){this.setState({featureIdCtr:this.state.featureIdCtr+1})}},{key:"addMeasuredFeature",value:function(e){var t=this.state.measuredFeatures;t.push(e),this.setState({measuredFeatures:t})}},{key:"modifyMeasuredFeature",value:function(e,t){for(var r=this.state.measuredFeatures,a=0;a<r.length;a++)r[a].id===t&&(r[a]=e);this.setState({measuredFeatures:r})}},{key:"removeMeasuredFeature",value:function(e){for(var t=this.state.measuredFeatures,r=0;r<t.length;r++)if(t[r].id===e){t.splice(r,1);break}this.setState({measuredFeatures:t})}},{key:"setCurrentMode",value:function(e){this.modes.includes(e)?this.setState({currentMode:e}):console.warn("The specified mode is not available")}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"init",value:function(){return this.measureLineLayer=new h.Vector({source:new y.Vector}),this.measurePolygonLayer=new h.Vector({source:new y.Vector}),this.measureCircleLayer=new h.Vector({source:new y.Vector}),this.measureFreehandLayer=new h.Vector({source:new y.Vector}),this.measureLayerGroup=new h.Group({layers:new v.Collection([this.measureFreehandLayer,this.measureCircleLayer,this.measurePolygonLayer,this.measureLineLayer]),visible:!0}),this.props.mapController.map.addLayer(this.measureLayerGroup),!0}},{key:"componentDidUpdate",value:function(e,t,r){if(t.open&&!this.state.open)jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-measuretools-container").removeClass("c4g-open").addClass("c4g-close"),this.props.mapController.map.removeLayer(this.measureLayerGroup),this.removeTooltips(),this.removedOnce=!0;else if(!t.open&&this.state.open){if(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-measuretools-container").addClass("c4g-open").removeClass("c4g-close"),this.removedOnce)try{this.props.mapController.map.addLayer(this.measureLayerGroup)}catch(e){console.warn(e)}this.addTooltips()}this.props.mapController.data.caching&&!this.state.open&&g.utils.getValue("panel")===this.constructor.name&&g.utils.storeValue("panel","")}},{key:"removeTooltips",value:function(){for(var e=this.measureLayerGroup.getLayersArray(),t=0;t<e.length;t++){var r=e[t].getSource().getFeatures();if(r)for(var a=0;a<r.length;a++)r[a].get("tooltip").hide()}}},{key:"addTooltips",value:function(){for(var e=this.measureLayerGroup.getLayersArray(),t=0;t<e.length;t++){var r=e[t].getSource().getFeatures();if(r)for(var a=0;a<r.length;a++)r[a].get("tooltip").show()}}}]),s}(d.Component);t.default=F}}]);