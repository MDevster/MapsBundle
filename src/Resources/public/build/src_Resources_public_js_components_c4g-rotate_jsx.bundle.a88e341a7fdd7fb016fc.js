"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-rotate_jsx"],{"./src/Resources/public/js/components/c4g-rotate.jsx":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),o=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),u=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),a=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=l?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(n,s,u):n[s]=e[s]}return n.default=e,r&&r.set(e,n),n}(r("./node_modules/react/index.js")),p=r("./node_modules/ol/control.js"),f=(r("./src/Resources/public/js/c4g-maps-constant.js"),r("./src/Resources/public/js/c4g-maps-i18n.js"));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}var b=function(e){(0,u.default)(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,c.default)(t);if(r){var o=(0,c.default)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,a.default)(this,e)});function o(e){var t;(0,l.default)(this,o),t=n.call(this,e);var r=(0,f.getLanguage)(e.mapController.data),s=new p.Rotate({label:" ",labelActive:" ",tipLabel:r.CTRL_RESET_ROTATION,target:t.props.target}),u=e.mapController;return u.mapsControls.controls.rotate=s,u.map.addControl(s),t}return(0,s.default)(o,[{key:"render",value:function(){return null}}]),o}(i.Component);t.default=b}}]);