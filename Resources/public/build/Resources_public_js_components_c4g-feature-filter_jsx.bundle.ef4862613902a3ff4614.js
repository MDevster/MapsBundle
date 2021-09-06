"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["Resources_public_js_components_c4g-feature-filter_jsx"],{"./Resources/public/js/components/c4g-feature-filter-item.jsx":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterItem=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),o=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=s?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}(r("./node_modules/react/index.js")),c=r("./Resources/public/js/c4g-maps-utils.js");function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}var d=function(e){(0,l.default)(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.default)(t);if(r){var a=(0,o.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,i.default)(this,e)});function a(e){return(0,s.default)(this,a),n.call(this,e)}return(0,u.default)(a,[{key:"render",value:function(){var e=this,t=this;return f.default.createElement("div",{className:"c4g-filter-form-element"},f.default.createElement("label",null,f.default.createElement("input",{type:"radio",onChange:function(r){e.props.filterLayers(t.props.feature.identifier,t.props.parentId,t.props.feature.value)},checked:t.props.checked.identifier===t.props.feature.identifier,value:this.props.feature.identifier}),c.utils.decodeHTML(this.props.feature.translation)))}}]),a}(f.Component);t.FeatureFilterItem=d},"./Resources/public/js/components/c4g-feature-filter-list.jsx":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterList=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),o=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=s?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}(r("./node_modules/react/index.js")),c=r("./Resources/public/js/c4g-maps-utils.js"),p=r("./Resources/public/js/components/c4g-feature-filter-item.jsx");function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}var h=function(e){(0,l.default)(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.default)(t);if(r){var a=(0,o.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,i.default)(this,e)});function a(e){return(0,s.default)(this,a),n.call(this,e)}return(0,u.default)(a,[{key:"render",value:function(){var e=this,t=null,r="";if(this.props.feature.filters.length>2){this.props.open?(r="c4g-open",t=f.default.createElement("form",null,this.props.feature.filters.map((function(t,r){return f.default.createElement(p.FeatureFilterItem,{feature:t,parentId:e.props.id,checked:e.props.checkedItem,filterLayers:e.props.filterLayers,key:r})})))):r="c4g-close",r+=" fi_"+c.utils.removeUmlauts(this.props.feature.name);var n="all"===this.props.checkedItem.identifier?"":"c4g-item-checked";return f.default.createElement("li",{className:n},f.default.createElement("strong",{className:r,onMouseUp:function(t){e.props.setOpen(e.props.id),t.stopPropagation(),t.preventDefault()}},f.default.createElement("span",null),c.utils.decodeHTML(this.props.feature.name)),t)}r=" fi_"+c.utils.removeUmlauts(this.props.feature.name);var a="c4g-item-checked";return a+="all"===this.props.checkedItem.identifier?"":" clicked",f.default.createElement("li",{className:a},f.default.createElement("img",{src:this.props.feature.image,title:this.props.feature.name,width:this.props.feature.width,height:this.props.feature.height}),f.default.createElement("strong",{className:r,onMouseUp:function(t){e.props.filterLayers(e.props.feature.filters[1].identifier!==e.props.checkedItem.identifier?e.props.feature.filters[1].identifier:"all",e.props.id,e.props.feature.filters[1].identifier!==e.props.checkedItem.identifier?e.props.feature.filters[1].value:void 0),t.stopPropagation(),t.preventDefault()}},c.utils.decodeHTML(this.props.feature.name)))}}]),a}(f.Component);t.FeatureFilterList=h},"./Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterMultiCheckbox=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),o=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=s?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}(r("./node_modules/react/index.js")),c=r("./Resources/public/js/c4g-maps-utils.js"),p=r("./Resources/public/js/components/c4g-feature-multicheckbox-item.jsx");function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}var h=function(e){(0,l.default)(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.default)(t);if(r){var a=(0,o.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,i.default)(this,e)});function a(e){return(0,s.default)(this,a),n.call(this,e)}return(0,u.default)(a,[{key:"render",value:function(){var e,t=this,r=null;if(this.props.feature.filters.length>2){this.props.open?(e="c4g-open",r=f.default.createElement("form",null,this.props.feature.filters.map((function(e,r){var n=!!t.props.checkedItems.find((function(t){return t.identifier===e.identifier&&t.value===e.value}));return f.default.createElement(p.FeatureFilterMultiCheckboxItem,{feature:e,parentId:t.props.id,checked:n,filterLayers:t.props.filterLayers,key:r})})))):e="c4g-close";var n=null;if(this.props.checkedItems.length>0){var a="all"===this.props.checkedItems[0].identifier?this.props.checkedItems.length-1:this.props.checkedItems.length;n=f.default.createElement("span",{className:"sum"}," ",a," ")}return e+=" fi_"+c.utils.removeUmlauts(this.props.feature.name),f.default.createElement("li",{className:"c4g-item-checked"},f.default.createElement("strong",{className:e,onMouseUp:function(e){t.props.setOpen(t.props.id),e.stopPropagation(),e.preventDefault()}},f.default.createElement("span",null),c.utils.decodeHTML(this.props.feature.name)),n,r)}e+=" fi_"+c.utils.removeUmlauts(this.props.feature.name);var s="c4g-item-checked";return s+=0===this.props.checkedItems.length?"":" clicked",f.default.createElement("li",{className:s},f.default.createElement("img",{src:this.props.feature.image,title:this.props.feature.name,width:this.props.feature.width,height:this.props.feature.height}),f.default.createElement("strong",{className:e,onMouseUp:function(e){t.props.filterLayers(t.props.feature.filters[1].identifier,t.props.id,!0),e.stopPropagation(),e.preventDefault()}},c.utils.decodeHTML(this.props.feature.name)))}}]),a}(f.Component);t.FeatureFilterMultiCheckbox=h},"./Resources/public/js/components/c4g-feature-filter.jsx":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),o=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),f=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=s?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}(r("./node_modules/react/index.js")),p=r("./Resources/public/js/components/c4g-feature-filter-list.jsx"),d=r("./Resources/public/js/components/c4g-feature-filter-multicheckbox.jsx"),h=(r("./node_modules/ol/style.js"),r("./node_modules/ol/source.js")),m=r("./Resources/public/js/c4g-maps-i18n.js"),v=n(r("./node_modules/opening_hours/build/opening_hours.js"));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}var b=function(e){(0,i.default)(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,f.default)(t);if(r){var a=(0,f.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.default)(this,e)});function a(e){var t;return(0,s.default)(this,a),(t=n.call(this,e)).filterLayers=t.filterLayers.bind((0,l.default)(t)),t.filterLayersMulti=t.filterLayersMulti.bind((0,l.default)(t)),t.setOpen=t.setOpen.bind((0,l.default)(t)),t.wrapperRef=c.default.createRef(),t.ulRef=c.default.createRef(),t.handleClickOutside=t.handleClickOutside.bind((0,l.default)(t)),t.handleClickInside=t.handleClickInside.bind((0,l.default)(t)),t.filterLayer=t.filterLayer.bind((0,l.default)(t)),t.filterLayerMulti=t.filterLayerMulti.bind((0,l.default)(t)),t.hideFeature=t.hideFeature.bind((0,l.default)(t)),t.hideFeatureMulti=t.hideFeatureMulti.bind((0,l.default)(t)),t.loadFilters(),t.state={filters:[],open:!0,arrChecked:[],openedList:-1},t.features=[],t.langConstants=(0,m.getLanguage)(e.mapController.data),t.props.mapController.filter=(0,l.default)(t),t}return(0,u.default)(a,[{key:"render",value:function(){var e,t=this,r=this,n=this.state.filters,a=document.querySelector(".c4g-feature-filter-list");e=a?!(a.scrollWidth<=a.clientWidth):r.props.target&&!(r.props.target.scrollWidth<=r.props.target.clientWidth);var s=null;if(parseFloat(this.props.mapController.data.filterResetButton)&&(s=c.default.createElement("button",{className:"c4g-feature-filter-reset",onMouseUp:function(e){return t.resetFilter()}},this.langConstants.RESET_FILTER)),parseFloat(this.props.mapController.data.filterHandling)){if(n&&n.length>0){var u=n.map((function(e,n){var a=r.state.arrChecked[n]||[],s=r.state.openedList===n;return c.default.createElement(d.FeatureFilterMultiCheckbox,{feature:e,open:s,setOpen:t.setOpen,checkedItems:a,filterLayers:t.filterLayersMulti,id:n,key:n})}));return e?c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("button",{className:"c4g-btn-nav-previous",onMouseUp:function(e){return t.ulRef.current.scrollLeft-=100}}),c.default.createElement("button",{className:"c4g-btn-nav-next",onMouseUp:function(e){return t.ulRef.current.scrollLeft+=100}}),c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-overflowed",onMouseUp:function(e){return t.handleClickInside(e)},ref:this.ulRef},u),s):c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-not-overflowed",onMouseUp:function(e){return t.handleClickInside(e)},ref:this.ulRef},u),s)}}else if(n&&n.length>0){var l=n.map((function(e,n){var a=r.state.arrChecked[n],s=r.state.openedList===n;return c.default.createElement(p.FeatureFilterList,{feature:e,open:s,setOpen:t.setOpen,checkedItem:a,filterLayers:t.filterLayers,id:n,key:n})}));return e?c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("button",{className:"c4g-btn-nav-previous",onMouseUp:function(e){return t.ulRef.current.scrollLeft-=100}}),c.default.createElement("button",{className:"c4g-btn-nav-next",onMouseUp:function(e){return t.ulRef.current.scrollLeft+=100}}),c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-overflowed",onMouseUp:function(e){return t.handleClickInside(e)},ref:this.ulRef},l),s):c.default.createElement("div",{className:"c4g-feature-filter",ref:this.wrapperRef},c.default.createElement("ul",{className:"c4g-feature-filter-list c4g-not-overflowed",onMouseUp:function(e){return t.handleClickInside(e)},ref:this.ulRef},l),s)}return c.default.createElement("div",null)}},{key:"filterLayers",value:function(e,t,r){var n=this,a=this.state.arrChecked;a[t]={identifier:e,value:r},this.setState({arrChecked:a},(function(){n.props.mapController.map.getLayers().getArray().map((function(e,t){n.filterLayer(e)}));for(var e=0;e<n.features.length;e++)n.features.hasOwnProperty(e)&&n.showFeature(n.features[e],e)&&e--}))}},{key:"filterLayersMulti",value:function(e,t,r){var n=this,a=this.state.arrChecked,s=a[t],u=s.find((function(t){return t.identifier===e&&t.value===r}));if(u)if("all"===e)s=[];else{var l=s.indexOf(u);l>-1&&s.splice(l,1)}else"all"===e?s=JSON.parse(JSON.stringify(this.state.filters[t].filters)):s.push({identifier:e,value:r});a[t]=s,this.setState({arrChecked:a},(function(){n.props.mapController.map.getLayers().getArray().map((function(e,t){n.filterLayerMulti(e)}));for(var e=0;e<n.features.length;e++)n.features.hasOwnProperty(e)&&n.showFeatureMulti(n.features[e],e)&&e--}))}},{key:"setOpen",value:function(e){this.state.openedList===e?this.setState({openedList:-1}):this.setState({openedList:e})}},{key:"resetFilter",value:function(){var e=this,t=[];for(var r in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(r)&&t.push([]);this.setState({arrChecked:t},(function(){for(var t=0;t<e.features.length;t++)e.features.hasOwnProperty(t)&&e.resetFeature(e.features[t],t)&&t--}))}},{key:"filterLayer",value:function(e){var t=this;if(e.getLayers&&"function"==typeof e.getLayers)e.getLayers().getArray().map((function(e,r){t.filterLayer(e)}));else if(e.getStyle&&"function"==typeof e.getSource){var r=e.getSource()instanceof h.Cluster?e.getSource().getSource():e.getSource();r.forEachFeature((function(e){return t.hideFeature(e,r)}))}}},{key:"filterLayerMulti",value:function(e){var t=this;if(e.getLayers&&"function"==typeof e.getLayers)e.getLayers().getArray().map((function(e,r){t.filterLayerMulti(e)}));else if(e.getStyle&&"function"==typeof e.getSource){var r=e.getSource()instanceof h.Cluster?e.getSource().getSource():e.getSource();r.forEachFeature((function(e){return t.hideFeatureMulti(e,r)}))}}},{key:"checkFeature",value:function(e,t){var r=t.identifier;if("opening_hours"!==t.value||!e.get("opening_hours"))return!!("all"===r||e.get(r)&&!t.value||t.value==e.get(r)&&t.value);try{return new v.default(e.get("opening_hours"),{address:{country_code:"de"}}).getState()}catch(e){return console.warn(e),!1}}},{key:"checkFeatureMulti",value:function(e,t){}},{key:"hideFeature",value:function(e,t){var r=this;if(e.get("features"))e.get("features").forEach((function(e){return r.hideFeature(e,t)}));else{if(e.get("noFilter"))return;var n=!0;for(var a in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(a)&&n&&(n=this.checkFeature(e,this.state.arrChecked[a]));n||(e.set("source",t),this.features.push(e),t.removeFeature(e))}}},{key:"hideFeatureMulti",value:function(e,t){var r=this;if(e.get("features"))e.get("features").forEach((function(e){return r.hideFeatureMulti(e,t)}));else{if(e.get("noFilter"))return;var n=!1,a=!1;for(var s in this.state.arrChecked)if(this.state.arrChecked.hasOwnProperty(s)){var u=this.state.arrChecked[s];for(var l in u)if(u.hasOwnProperty(l)){a=!0;var i=u[l],o=i.identifier;if(e.get(o)){var f=e.get(o);(i.value&&i.value===f||!i.value)&&(n=!0)}}}!n&&a&&(e.set("source",t),this.features.push(e),t.removeFeature(e))}}},{key:"showFeature",value:function(e,t){var r=!0;for(var n in this.state.arrChecked)this.state.arrChecked.hasOwnProperty(n)&&r&&(r=this.checkFeature(e,this.state.arrChecked[n]));if(r){var a=e.get("source");return e.set("source",!1),a.addFeature(e),this.features.splice(t,1),!0}return!1}},{key:"resetFeature",value:function(e,t){var r=e.get("source");return e.set("source",!1),r.addFeature(e),this.features.splice(t,1),!0}},{key:"showFeatureMulti",value:function(e,t){var r=!1,n=!1;for(var a in this.state.arrChecked)if(this.state.arrChecked.hasOwnProperty(a)){var s=this.state.arrChecked[a];for(var u in s)if(s.hasOwnProperty(u)){n=!0;var l=s[u],i=l.identifier;if(e.get(i)){var o=e.get(i);(l.value&&l.value===o||!l.value)&&(r=!0)}}}if(r||!n){var f=e.get("source");return e.set("source",!1),f.addFeature(e),this.features.splice(t,1),!0}return!1}},{key:"loadFilters",value:function(){var e=this,t=this.props.mapController.data.api.filter+this.props.mapController.data.id+"/"+this.props.mapController.data.lang;fetch(t).then((function(t){return t.json().then((function(t){for(var r=[],n=0;n<t.length;n++)parseFloat(e.props.mapController.data.filterHandling)?r.push([]):r.push({identifier:"all"});e.setState({filters:t,arrChecked:r})}))}))}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&this.wrapperRef.current&&!this.wrapperRef.current.contains(e.target)&&this.setState({openedList:-1})}},{key:"handleClickInside",value:function(e){e.nativeEvent.path[0]===e.currentTarget&&this.setState({openedList:-1})}}]),a}(c.Component);t.default=b},"./Resources/public/js/components/c4g-feature-multicheckbox-item.jsx":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureFilterMultiCheckboxItem=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),o=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=s?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}(r("./node_modules/react/index.js")),c=r("./Resources/public/js/c4g-maps-utils.js");function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}var d=function(e){(0,l.default)(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.default)(t);if(r){var a=(0,o.default)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,i.default)(this,e)});function a(e){return(0,s.default)(this,a),n.call(this,e)}return(0,u.default)(a,[{key:"render",value:function(){var e=this;return f.default.createElement("div",{className:"c4g-filter-form-element"},f.default.createElement("label",null,f.default.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:function(e){e.stopPropagation()},onClick:function(t){e.props.filterLayers(e.props.feature.identifier,e.props.parentId,e.props.feature.value)},value:this.props.feature.identifier}),c.utils.decodeHTML(this.props.feature.translation)))}}]),a}(f.Component);t.FeatureFilterMultiCheckboxItem=d}}]);