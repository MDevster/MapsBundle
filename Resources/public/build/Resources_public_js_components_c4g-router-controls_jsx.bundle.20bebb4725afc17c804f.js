(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["Resources_public_js_components_c4g-router-controls_jsx","Resources_public_js_components_c4g-router-profile-selection_jsx"],{"./Resources/public/js/components/c4g-horizontal-panel.jsx":(e,t,r)=>{"use strict";var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.HorizontalPanel=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),d=r("./node_modules/ol/control.js"),f=r("./Resources/public/js/c4g-maps-constant.js");function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}var h=function(e){(0,u.default)(s,e);var t,r,o=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,c.default)(t);if(r){var s=(0,c.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,i.default)(this,e)});function s(e){var t;(0,n.default)(this,s),t=o.call(this,e),(0,l.default)(t);var r=document.createElement("div"),a=document.createElement("button");e.title&&(a.title=e.title),r.className=(e.className||"c4g-horizontal-panel")+"-button-"+(e.direction||"top")+" ol-control ol-unselectable",r.appendChild(a),a.title=e.title,t.clickControl=t.clickControl.bind((0,l.default)(t)),jQuery(a).on("click",t.clickControl);var u=e.mapController,i=new d.Control({element:r,target:e.target});return u.map.addControl(i),t.state={direction:e.direction||"top",open:e.open||!1,className:e.className||"c4g-horizontal-panel",childs:e.childs||[],control:i},t}return(0,a.default)(s,[{key:"render",value:function(){var e=this.state.className+"-"+this.state.direction;return e+=" "+(this.state.open?"c4g-open":"c4g-close"),p.default.createElement("div",{className:e})}},{key:"clickControl",value:function(){this.state.open?this.close():this.open()}},{key:"open",value:function(){this.setState({open:!0}),this.slideOutCollidingElements()}},{key:"close",value:function(){this.setState({open:!1}),this.slideInCollidingElements()}},{key:"slideOutCollidingElements",value:function(){if("top"===this.state.direction){var e=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_TL+" ."+f.cssConstants.OL_UNSELECTABLE);e.forEach((function(e){e.style.top="100px"})),(e=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_TR+" ."+f.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.top="100px"}))}else{var t=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_BL+" ."+f.cssConstants.OL_UNSELECTABLE);t.forEach((function(e){e.style.bottom="100px"})),(t=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_BR+" ."+f.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.bottom="100px"}))}}},{key:"slideInCollidingElements",value:function(){if("top"===this.state.direction){var e=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_TL+" ."+f.cssConstants.OL_UNSELECTABLE);e.forEach((function(e){e.style.top="0px"})),(e=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_TR+" ."+f.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.top="0px"}))}else{var t=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_BL+" ."+f.cssConstants.OL_UNSELECTABLE);t.forEach((function(e){e.style.bottom="0px"})),(t=document.querySelectorAll("."+f.cssConstants.CONTROL_CONTAINER_BR+" ."+f.cssConstants.OL_UNSELECTABLE)).forEach((function(e){e.style.bottom="0px"}))}}},{key:"addContent",value:function(e){this.state.childs.push(e)}}]),s}(p.Component);t.HorizontalPanel=h},"./Resources/public/js/components/c4g-router-address-field.jsx":(e,t,r)=>{"use strict";var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.RouterAddressField=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),d=r("./Resources/public/js/components/c4g-autocomplete-input.jsx"),f=(r("./node_modules/ol/geom.js"),r("./Resources/public/js/routing-constant-i18n.js")),m=r("./node_modules/ol/proj.js");function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}var b=function(e){(0,u.default)(s,e);var t,r,o=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,c.default)(t);if(r){var s=(0,c.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,i.default)(this,e)});function s(e){var t;return(0,n.default)(this,s),(t=o.call(this,e)).languageConstants=(0,f.getLanguage)(t.props.router.props.mapController.data),t.getPosition=t.getPosition.bind((0,l.default)(t)),t.removeContent=t.removeContent.bind((0,l.default)(t)),!e.router.mapData.initialPosition||"routingFrom"!==e.name&&"areaFrom"!==e.name?e.router.mapData.initialDestination&&"routingTo"===e.name&&(window.c4gMapsHooks.layer_loaded=window.c4gMapsHooks.layer_loaded||[],window.c4gMapsHooks.layer_loaded.push((function(r){var o=e.router.props.mapController.map.getView().getCenter(),s={coords:{}};s.coords.longitude=(0,m.transform)(o,"EPSG:3857","EPSG:4326")[0],s.coords.latitude=(0,m.transform)(o,"EPSG:3857","EPSG:4326")[1],t.handlePosition(s)}))):t.getPosition(),t}return(0,a.default)(s,[{key:"render",value:function(){var e=null;return this.props.withPosition&&(e=p.default.createElement("button",{className:"c4g-router-position",onMouseUp:this.getPosition,title:this.languageConstants.ROUTE_POSITION})),p.default.createElement("div",{className:this.props.className},p.default.createElement("label",{htmlFor:this.props.name},this.props.label),p.default.createElement(d.AutocompleteInput,{type:"search",className:this.props.class,name:this.props.name,cssId:this.props.cssId,objFunctions:this.props.objFunctions,objSettings:this.props.objSettings,popup:this.props.popup,containerAddresses:this.props.containerAddresses,router:this.props.router,value:this.props.value,index:this.props.index}),e,p.default.createElement("button",{className:"c4g-router-input-clear",onMouseUp:this.removeContent,title:this.languageConstants.REMOVE_ADDRESS}))}},{key:"removeContent",value:function(e){jQuery("#"+this.props.cssId).val(""),this.props.clearInput(e)}},{key:"getPosition",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e.handlePosition(t)})):console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.")}},{key:"handlePosition",value:function(e){var t=e.coords;"routingFrom"===this.props.name?this.props.router.setRouteFrom(t.longitude,t.latitude):"overValue"===this.props.name||"routingTo"===this.props.name&&this.props.router.setRouteTo(t.longitude,t.latitude),"areaFrom"===this.props.name&&this.props.router.setAreaPoint(t.longitude,t.latitude),this.props.router.recalculateRoute()}}]),s}(p.Component);t.RouterAddressField=b},"./Resources/public/js/components/c4g-router-address-input.jsx":(e,t,r)=>{"use strict";var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.RouterAddressInput=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),p=r("./Resources/public/js/components/c4g-router-address-field.jsx"),d=(r("./Resources/public/js/components/c4g-router-profile-selection.jsx"),r("./Resources/public/js/components/c4g-router-layer-selection.jsx")),f=r("./Resources/public/js/components/c4g-router-detour-slider.jsx"),m=r("./Resources/public/js/routing-constant-i18n-de.js"),h=r("./Resources/public/js/routing-constant-i18n-en.js");function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}var g=function(e){(0,l.default)(s,e);var t,r,o=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,i.default)(t);if(r){var s=(0,i.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,u.default)(this,e)});function s(e){var t;return(0,n.default)(this,s),t=o.call(this,e),e.router||console.warn("The routing component needs a router, it won't work correctly since none was passed..."),t.state={router:e.router},void 0!==e.router.props.mapController.data&&("de"===e.router.props.mapController.data.lang?t.langConstants=m.routingConstantsGerman:t.langConstants=h.routingConstantsEnglish),t}return(0,a.default)(s,[{key:"render",value:function(){var e,t=this,r=this,o="";this.props.enableOverPoints&&"route"===this.props.mode&&(o=Object.keys(this.props.overSettings.overPoints).map((function(e){return c.default.createElement(p.RouterAddressField,{className:"c4g-router-input-over-"+e,name:"overPoint-"+e,label:t.langConstants.ROUTER_Label_Interim,cssId:"routingOver-"+e,objFunctions:t.props.overSettings.objFunctions,objSettings:t.props.objSettings,containerAddresses:t.props.containerAddresses,value:t.props.overSettings.overAddresses[e],router:t.props.router,key:e,index:e,clearInput:function(){t.props.overSettings.objFunctions[e].deleteFunction()}})})));var s="",n="",a="";"route"===this.props.mode?a=" invisible":(s=" invisible",n=" invisible");var l="";this.props.switchTargets&&"route"===this.props.mode&&(l=c.default.createElement("button",{className:"c4g-router-switch",onMouseUp:function(){r.props.overSettings.swapPoints();var e=jQuery("#routingFrom").val();jQuery("#routingFrom").val(jQuery("#routingTo").val()),jQuery("#routingTo").val(e)}}));var u="";this.props.enableOverPoints&&"route"===this.props.mode&&(u=c.default.createElement("button",{className:"c4g-router-over",onMouseUp:this.props.overSettings.overFunction}));var i=this.props.overSettings.overPoints.length+1;e=c.default.createElement(c.default.Fragment,null,c.default.createElement(p.RouterAddressField,{className:"c4g-router-input-from"+s,name:"routingFrom",label:this.langConstants.ROUTER_FROM,key:i,cssId:"routingFrom",objFunctions:this.props.objFunctions.fromFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.from,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.fromAddress,router:this.props.router}),o,c.default.createElement(p.RouterAddressField,{className:"c4g-router-input-to"+n,name:"routingTo",label:this.langConstants.ROUTER_TO,key:i+1,cssId:"routingTo",objFunctions:this.props.objFunctions.toFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.to,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.toAddress,router:this.props.router}),c.default.createElement(p.RouterAddressField,{className:"c4g-router-input-area"+a,name:"areaFrom",label:this.langConstants.ROUTER_CENTER,key:i+2,cssId:"areaInput",objFunctions:this.props.objFunctions.areaFunctions,objSettings:this.props.objSettings,clearInput:this.props.resetFunctions.area,containerAddresses:this.props.containerAddresses,withPosition:this.props.withPosition,value:this.props.areaAddress,router:this.props.router}));var m="",h="";this.props.router.props.mapController.data.showFeatures&&this.props.layers&&(h=c.default.createElement(c.default.Fragment,null,c.default.createElement(d.RouterLayerSelection,{layers:this.props.layers,router:this.props.router,activeLayerValue:"route"===this.props.router.state.mode?this.props.router.state.layerValueRoute:this.props.router.state.layerValueArea}),c.default.createElement(f.RouterDetourSlider,{min:this.props.sliderOptions.min,max:this.props.sliderOptions.max,value:this.props.sliderOptions.value,router:this.props.sliderOptions.router}))),"route"===this.props.mode?m=c.default.createElement("div",{className:"buttonbar"},u,l,h):"area"===this.props.mode&&(m=c.default.createElement("div",{className:"buttonbar"},h));var b=null;return this.props.router.props.mapController.data.routeStartButton&&(b=c.default.createElement("button",{className:"c4g-route-search-start",onMouseUp:this.props.router.recalculateRoute},this.langConstants.START_ROUTE)),c.default.createElement("div",{className:this.props.className},e,b,m)}}]),s}(c.Component);t.RouterAddressInput=g},"./Resources/public/js/components/c4g-router-controls.jsx":(e,t,r)=>{"use strict";var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),d=r("./Resources/public/js/components/c4g-horizontal-panel.jsx"),f=r("./Resources/public/js/components/c4g-router-address-input.jsx"),m=(r("./Resources/public/js/components/c4g-router-profile-selection.jsx"),r("./Resources/public/js/components/c4g-titlebar.jsx")),h=r("./Resources/public/js/routing-constant-i18n.js");function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}var g=function(e){(0,u.default)(s,e);var t,r,o=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,c.default)(t);if(r){var s=(0,c.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,i.default)(this,e)});function s(e){var t;return(0,n.default)(this,s),(t=o.call(this,e)).state.router=t.props.router,t.state.showForm=!0,t.setRouteMode=t.setRouteMode.bind((0,l.default)(t)),t.setAreaMode=t.setAreaMode.bind((0,l.default)(t)),t.close=t.close.bind((0,l.default)(t)),t.langConstants=(0,h.getLanguage)(e.mapController.data),e.mapController.data.router_div&&(document.querySelector(".c4g-router-panel-button-top").className+=" c4g-external"),t}return(0,a.default)(s,[{key:"setRouteMode",value:function(e){e.stopPropagation(),this.props.router.setMode("route")}},{key:"setAreaMode",value:function(e){e.stopPropagation(),this.props.router.setMode("area")}},{key:"componentDidUpdate",value:function(e,t,r){this.slideOutCollidingElements()}},{key:"render",value:function(){var e=this,t="c4g-router-content"+(this.props.open?" c4g-open ":" c4g-close ")+this.props.mode,r=this.props.open,o="";return this.props.router.props.mapController.data.areaSearch&&!this.props.router.props.mapController.data.areaSearchOnly&&(o=p.default.createElement("div",{className:"c4g-router-mode-switch"},p.default.createElement("button",{id:"c4g-router-button-route",className:"route"===this.props.mode?"c4g-active":"c4g-inactive",onMouseUp:this.setRouteMode,title:this.langConstants.ROUTER_FIND_ROUTE},"Route"),p.default.createElement("button",{id:"c4g-router-button-area",className:"area"===this.props.mode?"c4g-active":"c4g-inactive",onMouseUp:this.setAreaMode,title:this.langConstants.AREA_NAME},"Area"))),this.state.showForm?p.default.createElement("div",{className:t},o,p.default.createElement(f.RouterAddressInput,{className:"c4g-router-input-content",router:this.props.router,withPosition:!0,switchTargets:this.props.switchTargets,objFunctions:this.props.objFunctions,objSettings:this.props.objSettings,currentProfile:this.props.currentProfile,enableOverPoints:this.props.enableOverPoints,containerAddresses:this.props.containerAddresses,mode:this.props.mode,open:r,layers:this.props.layers,resetFunctions:this.props.resetFunctions,fromAddress:this.props.fromAddress,toAddress:this.props.toAddress,areaAddress:this.props.areaAddress,sliderOptions:this.props.sliderOptions,profiles:this.props.profiles,overSettings:this.props.overSettings})):p.default.createElement("div",{className:t},p.default.createElement(m.Titlebar,{wrapperClass:"c4g-router-header",header:headline,headerClass:"c4g-router-headline",detailBtnClass:"c4g-router-extended-options",detailBtnCb:this.toggleDetails,closeBtnClass:"c4g-router-close",closeBtnCb:this.close}),p.default.createElement("button",{className:"c4g-router-hide-form-button",onMouseUp:function(){e.setState({showForm:!e.state.showForm})}}))}},{key:"slideInCollidingElements",value:function(){}},{key:"slideOutCollidingElements",value:function(){var e=this.props.className+(this.props.open?" c4g-open":" c4g-close"),t=document.getElementsByClassName(e)[0];t&&t.offsetHeight}},{key:"open",value:function(){this.props.setOpen(!0),this.slideOutCollidingElements(),jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open")}},{key:"close",value:function(){this.props.setOpen(!1),this.slideOutCollidingElements(),jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close")}},{key:"clickControl",value:function(e){var t=this.props.router.props.mapController.routerContainer.className.includes("c4g-close");this.props.open?t?jQuery(this.props.router.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open"):this.close():this.props.open||this.open()}}]),s}(d.HorizontalPanel);t.default=g},"./Resources/public/js/components/c4g-router-detour-slider.jsx":(e,t,r)=>{"use strict";var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.RouterDetourSlider=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),p=r("./Resources/public/js/routing-constants.js");function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}r("./Resources/public/js/c4g-maps-utils.js");var f=function(e){(0,l.default)(s,e);var t,r,o=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,i.default)(t);if(r){var s=(0,i.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,u.default)(this,e)});function s(e){var t;return(0,n.default)(this,s),(t=o.call(this,e)).updated=!1,t}return(0,a.default)(s,[{key:"componentDidMount",value:function(){var e=this,t=jQuery("."+p.routingConstants.ROUTE_TOGGLE);t.on("input",(function(){var t=jQuery(this),r=t.attr("max")-t.attr("min"),o=(t.val()-t.attr("min"))/r*100,s=Math.round(50*o/100)-25;t.next("output").css("left","calc("+o+"% - "+s+"px)").text(t.val()+" km"),e.props.router.props.mapController.data.usePermalink&&e.props.router.permalink.updateLinkFragments("detour",t.val())})),t.on("change",(function(){"route"===e.props.router.state.mode?e.props.router.setState({detourRoute:t.val()},e.props.router.recalculateRoute):e.props.router.setState({detourArea:t.val()},(function(){e.props.router.performArea(e.props.router.state.areaValue)}))})),t.trigger("input")}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("p",null,"Umweg"),c.default.createElement("input",{type:"range",className:p.routingConstants.ROUTE_TOGGLE,min:this.props.min,max:this.props.max,defaultValue:this.props.value,step:.5}),c.default.createElement("output",{className:p.routingConstants.OUTPUT_DETOUR},this.props.value+" km"))}},{key:"componentDidUpdate",value:function(e,t,r){var o=document.querySelector("."+p.routingConstants.ROUTE_TOGGLE),s=this;this.updated||(jQuery(o).on("input",(function(){var e=jQuery(this),t=e.attr("max")-e.attr("min"),r=(e.val()-e.attr("min"))/t*100,o=Math.round(50*r/100)-25;e.next("output").css("left","calc("+r+"% - "+o+"px)").text(e.val()+" km"),s.props.router.props.mapController.data.usePermalink&&s.props.router.permalink.updateLinkFragments("detour",e.val())})),jQuery(o).on("change",(function(){"route"===s.props.router.state.mode?s.props.router.setState({detourRoute:jQuery(o).val()},s.props.router.recalculateRoute):s.props.router.setState({detourArea:jQuery(o).val()},(function(){s.props.router.performArea(s.props.router.state.areaValue)}))})),jQuery(o).trigger("input"),this.updated=!0)}}]),s}(c.Component);t.RouterDetourSlider=f},"./Resources/public/js/components/c4g-router-layer-selection.jsx":(e,t,r)=>{"use strict";var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.RouterLayerSelection=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js"));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}var f=function(e){(0,u.default)(s,e);var t,r,o=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,c.default)(t);if(r){var s=(0,c.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,i.default)(this,e)});function s(e){var t;return(0,n.default)(this,s),(t=o.call(this,e)).setLayer=t.setLayer.bind((0,l.default)(t)),t.setLayerValue=t.setLayerValue.bind((0,l.default)(t)),t}return(0,a.default)(s,[{key:"setLayer",value:function(e){var t=e.target.value;this.props.router.setLayer(parseInt(t,10))}},{key:"setLayerValue",value:function(e){var t=e.target.value;this.props.router.setLayerValue(t)}},{key:"render",value:function(){var e=this,t=0;"route"===this.props.router.state.mode?t=this.props.router.state.layerRoute:"area"===this.props.router.state.mode&&(t=this.props.router.state.layerArea);var r=this.props.router.objLayers,o="";return this.props.layers&&Object.keys(this.props.layers[t]).length>1&&(o=p.default.createElement("div",{className:"c4g-router-layer-value-selection"},Object.keys(this.props.layers[t]).map((function(r){return p.default.createElement("button",{className:e.props.activeLayerValue===r?"c4g-active":"c4g-inactive",onMouseUp:e.setLayerValue,key:e.props.layers[t][r].mapLabel,value:r,title:r},r)})))),this.props.layers&&Object.keys(this.props.layers).length>1?p.default.createElement(p.default.Fragment,null,p.default.createElement("select",{className:"c4g-router-layer-selection",onChange:this.setLayer,defaultValue:t},Object.keys(this.props.layers).map((function(e){var t=r[e].layerData;return p.default.createElement("option",{key:e,value:e},t.name)}))),o):p.default.createElement(p.default.Fragment,null,o)}}]),s}(p.Component);t.RouterLayerSelection=f},"./Resources/public/js/components/c4g-router-profile-selection.jsx":(e,t,r)=>{"use strict";var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=o(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r("./node_modules/react/index.js")),d=r("./Resources/public/js/routing-constant-i18n.js");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}var m=function(e){(0,u.default)(s,e);var t,r,o=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,c.default)(t);if(r){var s=(0,c.default)(this).constructor;e=Reflect.construct(o,arguments,s)}else e=o.apply(this,arguments);return(0,i.default)(this,e)});function s(e){var t;return(0,n.default)(this,s),(t=o.call(this,e)).setProfile=t.setProfile.bind((0,l.default)(t)),t.profileTranslation={0:"car",1:"hgv",2:"bike",3:"roadbike",4:"bike",5:"mountainbike",6:"bike",7:"electricbike",8:"foot",9:"wander",10:"wheelchair",11:"hgv",12:"scooter",13:"motorbike"},t.languageConstants=(0,d.getLanguage)(e.router.props.mapController.data),t.profileLang={car:t.languageConstants.CAR,hgv:t.languageConstants.TRUCK,bike:t.languageConstants.BIKE,roadbike:t.languageConstants.ROADBIKE,mountainbike:t.languageConstants.MOUNTAINBIKE,electricbike:t.languageConstants.ELECTRICBIKE,foot:t.languageConstants.WALK,wander:t.languageConstants.WANDER,wheelchair:t.languageConstants.WHEEL,scooter:t.languageConstants.SCOOT,motorbike:t.languageConstants.MOTORBIKE},t.state={showPopup:!!e.router.mapData.router_profiles_initial},t}return(0,a.default)(s,[{key:"setProfile",value:function(e){this.props.router.setProfile(parseInt(e.id,10)),this.props.router.mapData.router_profiles_initial||this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this;return 1===this.props.profiles.length?p.default.createElement("div",{className:"c4g-router-profile-wrapper"},p.default.createElement("button",{className:"c4g-router-profile-"+this.profileTranslation[this.props.currentProfile]+" c4g-active",key:this.props.currentProfile,title:this.profileLang[this.profileTranslation[this.props.currentProfile]]})):this.state.showPopup?p.default.createElement("div",{className:"c4g-router-profile-wrapper c4g-popup"},p.default.createElement("button",{className:"c4g-titlebar-close",onMouseUp:function(){return e.setState({showPopup:!1})}}),this.props.profiles.map((function(t){return p.default.createElement("button",{onMouseUp:function(){return e.setProfile(t)},className:"c4g-router-profile-"+e.profileTranslation[t.id]+(parseInt(t.id,10)===parseInt(e.props.currentProfile,10)?" c4g-active":" c4g-inactive"),key:t.id,title:e.profileLang[e.profileTranslation[t.id]]})}))):p.default.createElement("div",{className:"c4g-router-profile-wrapper"},p.default.createElement("button",{onMouseUp:function(){return e.setState({showPopup:!0})},className:"c4g-router-profile-"+this.profileTranslation[this.props.currentProfile]+" c4g-active",key:this.props.currentProfile,title:this.profileLang[this.profileTranslation[this.props.currentProfile]]}))}},{key:"showProfileSelection",value:function(){this.setState({showPopup:!0})}}]),s}(p.Component);t.default=m}}]);