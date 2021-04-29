(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{434:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),n=r(17),s=(o=n)&&o.__esModule?o:{default:o},l=r(456);
/*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    con4gis contributors (see "authors.txt")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	    Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link            https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.setActiveId=r.setActiveId.bind(r),r.features={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"setActiveId",value:function(e){this.setState({activeId:e})}},{key:"render",value:function(){var e=this,t=this.sortFeatures();return t?s.default.createElement("div",{className:this.props.className},this.props.header,this.props.switcher,s.default.createElement("ul",null,t.map((function(t,r){return e.features[t.id]=s.default.createRef(),s.default.createElement(l.RouterFeatureListItem,{feature:t,refProp:e.features[t.id],type:e.props.featureList.type,active:e.props.activeId===t.id,setActiveId:e.props.setActiveId,routeMode:e.props.routeMode,mapController:e.props.mapController,layerRoute:e.props.layerRoute,layerArea:e.props.layerArea,featureSource:e.props.featureSource,key:r,layerValueRoute:e.props.layerValueRoute,layerValueArea:e.props.layerValueArea})})))):s.default.createElement("div",{className:this.props.className})}},{key:"componentDidUpdate",value:function(e,t,r){if(e.activeId!==this.props.activeId&&this.props.activeId){var o=this.features[this.props.activeId];document.querySelector(".c4g-router-result-container").scrollTo(0,o.current.offsetTop)}}},{key:"sortFeatures",value:function(){var e=this.props.mapController.data.routerLayers,t="area"===this.props.routeMode?this.props.layerArea:this.props.layerRoute,r="area"===this.props.routeMode?this.props.layerValueArea:this.props.layerValueRoute;if(e){var o=e[t][r].mapLabel;return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(this.props.featureList.features)).sort((function(e,t){var r=e,a=t;return e.tags&&t.tags&&(r=e.tags,a=t.tags),isNaN(r[o])?r[o]<a[o]?-1:1:r[o]-a[o]}))}}}]),t}(n.Component);t.default=p},456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RouterFeatureListItem=void 0;var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=r(17),n=c(a),s=(c(r(49)),r(38)),l=(r(1),i(r(241))),p=i(r(242)),u=r(39);function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function c(e){return e&&e.__esModule?e:{default:e}}
/*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of con4gis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the gis-kit for Contao CMS.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @package   	con4gis
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version        6
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author  	    ¯\_(ツ)_/¯
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license 	    LGPL-3.0-or-later
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 	    Küstenschmiede GmbH Software & Design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link            https://www.con4gis.org
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
t.RouterFeatureListItem=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.popupFunctions="de"===e.mapController.data.lang?l:p,r.clickFeature=r.clickFeature.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"clickFeature",value:function(e){var t=this;t.props.setActiveId(t.props.feature.id),t.props.featureSource.forEachFeature((function(e){var r=void 0,o=t.props.mapController.data.routerLayers;if("area"===t.props.routeMode?r=o[t.props.layerArea][t.props.layerValueArea].layerData:"route"===t.props.routeMode&&(r=o[t.props.layerRoute][t.props.layerValueRoute].layerData),e.get("tid")===t.props.feature.id){var a=t.props.mapController.data.clickLocstyle;if(a)if(t.props.mapController.proxy.locationStyleController.arrLocStyles[a]){var n=t.props.mapController.proxy.locationStyleController.arrLocStyles[a].style;e.setStyle(n),"Polygon"==e.getGeometry().getType()?t.props.mapController.map.getView().fit(e.getGeometry().getExtent()):t.props.mapController.map.getView().setCenter(e.getGeometry().getCoordinates())}else t.props.mapController.proxy.locationStyleController.loadLocationStyles([a],{done:function(){var r=t.props.mapController.proxy.locationStyleController.arrLocStyles[a].style;t.mapSelectInteraction.getFeatures().forEach((function(t,o,a){t===e&&e.setStyle(r)}))}})}else{e.setStyle(t.props.mapController.proxy.locationStyleController.arrLocStyles[r.locstyle].style)}})),jQuery(this).parent().children("li").each((function(e,t){jQuery(t).addClass(s.cssConstants.INACTIVE).removeClass(s.cssConstants.ACTIVE)})),jQuery(this).addClass(s.cssConstants.ACTIVE).removeClass(s.cssConstants.INACTIVE)}},{key:"render",value:function(){var e=this,t=null;this.props.featureSource.forEachFeature((function(r){r.get("tid")===e.props.feature.id&&(t=r)}));var r="",o=null;if(t){if("overpass"===this.props.type){if(t.get("locstyle")){var a=t.get("locstyle"),s="",l=this.props.mapController.proxy.locationStyleController.arrLocStyles[a];l&&l.locStyleArr&&(s="cust_icon"===l.locStyleArr.styletype?l.locStyleArr.icon_src:"cust_icon_svg"===l.locStyleArr.styletype?l.locStyleArr.svgSrc:""),r=this.popupFunctions.fnStandardInfoPopup(t,s)}}else if("notOverpass"===this.props.type)this.props.feature&&this.props.feature.popup&&(r=this.props.feature.popup);else{var p="route"===this.props.routeMode?this.props.layerValueRoute:this.props.layerValueArea;o={entry:"",feature:this.props.feature,labels:["name"],activeLayerValue:p},u.utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry,o),r=o.entry}var i={__html:r+"<br>"};return n.default.createElement("li",{ref:this.props.refProp,dangerouslySetInnerHTML:i,className:this.props.active?"route-features-list-element c4g-active":"route-features-list-element c4g-inactive",onMouseUp:this.clickFeature})}return null}}]),t}(a.Component)}}]);