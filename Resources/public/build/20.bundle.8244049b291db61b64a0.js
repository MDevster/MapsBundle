(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{758:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(31),i=((o=a)&&o.__esModule,n(136)),s=n(61),c=n(135),u=n(86);
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
var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=void 0,r=void 0,a=e.mapController,l=a.map.getView(),p=a.data,f=(0,c.getLanguage)(p),d=function(e){e.stopPropagation(),this.blur();var t=new u.Geolocation({tracking:!0,projection:l.getProjection()});t.on("change",(function(e){l.setCenter(t.getPosition()),l.setZoom(18),t.setTracking(!1),a.map.setView(l)}))};(o=document.createElement("div")).className=s.cssConstants.OL_ZOOM_POS+" "+s.cssConstants.OL_CONTROL+" "+s.cssConstants.OL_UNSELECTABLE,(r=document.createElement("button")).title=f.CTRL_ZOOM_POS,o.appendChild(r),r.addEventListener("click",d,{useCapture:!1,passive:!0}),r.addEventListener("touchstart",d,{useCapture:!1,passive:!0});var b=new i.Control({element:o,target:n.props.target});return a.mapsControls.controls.zoomPosition=b,a.map.addControl(b),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return null}}]),t}(a.Component);t.default=l}}]);