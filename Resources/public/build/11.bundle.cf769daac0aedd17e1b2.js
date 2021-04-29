(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./Resources/public/js/components/c4g-infopage.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("./node_modules/react/index.js"),l=(o=a)&&o.__esModule?o:{default:o},r=n("./Resources/public/js/components/c4g-titlebar.jsx"),c=n("./Resources/public/js/c4g-maps-i18n.js"),i=n("./node_modules/ol/control.js"),p=n("./Resources/public/js/c4g-maps-utils.js");
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
var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=n,s=document.createElement("div"),a=document.createElement("button");n.langConstants=(0,c.getLanguage)(e.mapController.data),a.title=n.langConstants.CTRL_INFOAREA,s.className="c4g-infopage-control ol-unselectable ol-control ",e.open?s.className+="c4g-open":s.className+="c4g-close",e.external&&(s.className+=" c4g-external"),s.appendChild(a),jQuery(s).on("click",(function(e){o.state.open?o.close():o.open()}));var l=e.mapController,r=new i.Control({element:s,target:e.target});return l.mapsControls.controls.infoPage=r,l.map.addControl(r),n.close=n.close.bind(n),n.open=n.open.bind(n),n.state={open:e.open||!1,control:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"render",value:function(){return this.state.open?(jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"),jQuery(".c4g-infopage-container").addClass("c4g-open").removeClass("c4g-close")):(jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close"),jQuery(".c4g-infopage-container").removeClass("c4g-open").addClass("c4g-close")),l.default.createElement("div",{className:"c4g-infopage-wrapper"},l.default.createElement(r.Titlebar,{wrapperClass:"c4g-infopage-header",headerClass:"c4g-infopage-headline",header:this.langConstants.INFOPAGE,closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE}),l.default.createElement("div",{className:"c4g-infopage-content",dangerouslySetInnerHTML:{__html:this.props.infoContent}}))}},{key:"open",value:function(){this.setState({open:!0}),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){this.setState({open:!1})}},{key:"componentDidUpdate",value:function(e,t,n){this.props.mapController.data.caching&&!this.state.open&&(p.utils.getValue("panel")===this.constructor.name&&p.utils.storeValue("panel",""))}}]),t}(a.Component);t.default=u}}]);