(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["Resources_public_js_components_c4g-overviewmap_jsx"],{"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/iterableToArray.js":e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/nonIterableSpread.js":e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/toConsumableArray.js":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"),o=s("./node_modules/@babel/runtime/helpers/iterableToArray.js"),a=s("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),n=s("./node_modules/@babel/runtime/helpers/nonIterableSpread.js");e.exports=function(e){return r(e)||o(e)||a(e)||n()},e.exports.default=e.exports,e.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},"./Resources/public/js/components/c4g-overviewmap.jsx":(e,t,s)=>{"use strict";var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),o=s("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(s("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),u=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),p=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var s=y(t);if(s&&s.has(e))return s.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var l=a?Object.getOwnPropertyDescriptor(e,n):null;l&&(l.get||l.set)?Object.defineProperty(r,n,l):r[n]=e[n]}return r.default=e,s&&s.set(e,r),r}(s("./node_modules/react/index.js")),m=s("./node_modules/ol/control.js"),f=s("./Resources/public/js/c4g-maps-constant.js"),b=s("./Resources/public/js/c4g-maps-i18n.js"),h=r(s("./node_modules/ol/layer/Group.js")),v=s("./Resources/public/js/components/c4g-titlebar.jsx");function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(y=function(e){return e?s:t})(e)}var C=function(e){(0,i.default)(o,e);var t,s,r=(t=o,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.default)(t);if(s){var o=(0,c.default)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,p.default)(this,e)});function o(e){var t,s,a,l;(0,n.default)(this,o),t=r.call(this,e);var i=(0,u.default)(t);t.state={open:!e.collapsed,layers:t.props.layers},t.langConstants=(0,b.getLanguage)(e.mapController.data),t.mapController=e.mapController,t.open=t.open.bind((0,u.default)(t)),t.close=t.close.bind((0,u.default)(t)),(s=document.createElement("div")).className=f.cssConstants.OVERVIEWMAP+" "+f.cssConstants.OL_UNSELECTABLE+" "+f.cssConstants.OL_CONTROL,e.collapsed?s.className+=" "+f.cssConstants.CLOSE:s.className+=" "+f.cssConstants.OPEN,(a=document.createElement("button")).title=t.langConstants.CTRL_OVERVIEWMAP,s.appendChild(a),(l=document.createElement("span")).className=f.cssConstants.ICON,a.appendChild(l),jQuery(a).click((function(){i.state.open?i.close():i.open()})),t.element=s;var p=new m.Control({element:s,target:e.target});return t.baseLayerIds=[],t.mapController.mapsControls.controls.overviewMap=p,t.mapController.map.addControl(p),t}return(0,l.default)(o,[{key:"render",value:function(){return d.default.createElement("div",{className:"overview-map-wrapper"},d.default.createElement(v.Titlebar,{wrapperClass:"c4g-overwiev-header",headerClass:"c4g-overview-headline",header:this.langConstants.OVERVIEWMAP,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE}),d.default.createElement("div",{id:"overview-map-target",className:"c4g-overview-content"}))}},{key:"componentDidMount",value:function(){}},{key:"createOverviewMap",value:function(){var e=document.querySelector("#overview-map-target");this.ovm=new m.OverviewMap({collapsed:this.props.collapsed||!0,collapsible:!1,rotateWithView:!0,className:"ol-overviewmap ol-custom-overviewmap",target:e,layers:this.state.layers}),this.ovm.setMap(this.props.mapController.map)}},{key:"removeFromMap",value:function(){this.element.parentNode.removeChild(this.element)}},{key:"getOverviewMap",value:function(){return this.ovm}},{key:"isOpen",value:function(){return!!jQuery(this.element).hasClass(f.cssConstants.OPEN)}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"componentDidUpdate",value:function(e,t,s){if(!this.state.open&&t.open?(jQuery(this.element).addClass(f.cssConstants.CLOSE).removeClass(f.cssConstants.OPEN),jQuery(this.props.ovmTarget).addClass(f.cssConstants.CLOSE).removeClass(f.cssConstants.OPEN)):this.state.open&&(jQuery(this.element).removeClass(f.cssConstants.CLOSE).addClass(f.cssConstants.OPEN),jQuery(this.props.ovmTarget).removeClass(f.cssConstants.CLOSE).addClass(f.cssConstants.OPEN)),t.layers.length!==this.state.layers.length)if(this.ovm){var r=new h.default({layers:this.state.layers});this.ovm.getOverviewMap().setLayerGroup(r)}else this.createOverviewMap()}},{key:"addLayer",value:function(e,t){if(!this.baseLayerIds.includes(t)){this.baseLayerIds.push(t);var s=(0,a.default)(this.state.layers);s.push(e),this.setState({layers:s})}}}]),o}(d.Component);t.default=C}}]);