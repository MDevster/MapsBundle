(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{757:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(31),i=((o=a)&&o.__esModule,n(136)),s=n(61),c=n(135),p=n(2),l=n(86);
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
var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=void 0,r=void 0,a=e.mapController,u=a.map.getView(),f=a.data,m=(0,c.getLanguage)(a.data),d=function(e){if(e.stopPropagation(),this.blur(),"LOCATIONS"===f.calc_extent||"CENTERLOCS"===f.calc_extent){var t=a.proxy.layerController.extent;if(t&&t.maxX!==1/0&&t.maxX!==-1/0){var n=a.map.getView(),o=[parseInt(f.min_gap,10),parseInt(f.min_gap,10),parseInt(f.min_gap,10),parseInt(f.min_gap,10)],r=[t.minX,t.minY,t.maxX,t.maxY];"CENTERLOCS"===f.calc_extent?n.fit(r,{maxZoom:f.center.zoom}):n.fit(r,{padding:o})}}else u.setCenter((0,p.transform)([parseFloat(f.center.lon),parseFloat(f.center.lat)],"EPSG:4326","EPSG:3857")),u.setZoom(parseInt(f.center.zoom,10)),u.setRotation(parseFloat(f.center.rotation));var i=void 0;f.geolocation&&(i=new l.Geolocation({tracking:!0,projection:u.getProjection()})).on("change",(function(e){u.setCenter(i.getPosition()),f.geolocation_zoom&&u.setZoom(parseInt(f.geolocation_zoom,10)),i.setTracking(!1)})),a.map.setView(u)};(o=document.createElement("div")).className=s.cssConstants.OL_ZOOM_HOME+" "+s.cssConstants.OL_CONTROL+" "+s.cssConstants.OL_UNSELECTABLE,(r=document.createElement("button")).title=m.CTRL_ZOOM_HOME,o.appendChild(r),r.addEventListener("click",d,{useCapture:!1,passive:!0}),r.addEventListener("touchstart",d,{useCapture:!1,passive:!0});var _=new i.Control({element:o,target:n.props.target});return a.mapsControls.controls.zoomHome=_,a.map.addControl(_),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return null}}]),t}(a.Component);t.default=u}}]);