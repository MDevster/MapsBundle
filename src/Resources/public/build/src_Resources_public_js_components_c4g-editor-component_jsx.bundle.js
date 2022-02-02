"use strict";
(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["src_Resources_public_js_components_c4g-editor-component_jsx"],{

/***/ "./src/Resources/public/js/c4g-editor-i18n-de.js":
/*!*******************************************************!*\
  !*** ./src/Resources/public/js/c4g-editor-i18n-de.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.projectEditorLang = void 0;

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var projectEditorLang = {
  LANG: 'de',
  METADATA_EDIT: "Metadaten bearbeiten",
  DUPLICATE_ELEMENT: "Element duplizieren",
  DISPLACE_ELEMENT: "Element in anderes Projekt verschieben",
  DUPLICATE_AND_DELETE: "Element duplizieren & in anderes Projekt verschieben",
  CHOOSE_PROJECT: "Wähle ein Projekt ...",
  EDITOR_FEATURE_DELETE_HEADLINE: "Element löschen",
  EDITOR_FEATURE_DELETE_QUESTION: "Wollen Sie das Element wirklich löschen?",
  ROTATE_ELEMENT: "Element rotieren",
  DESELECT_ELEMENT: "Element-Auswahl aufheben",
  REVERT_ELEMENT: "Letzte Version wiederherstellen",
  CONFIRM_DELETE_ALL: "Wollen Sie die ausgewählten Elemente wirklich löschen?",
  BUTTON_DESELECT_ALL: "Auswahl für alle aufheben",
  BUTTON_DELETE_ALL: "Ausgewählte Elemente löschen",
  BUTTON_DISPLACE_ALL: "Ausgewählte Elemente in anderes Projekt verschieben",
  BUTTON_CONFIRM: "Bestätigen",
  BUTTON_CANCEL: "Abbrechen",
  BUTTON_COPY_DISPLACE_ALL: "Ausgewählte Elemente kopieren und in anderes Projekt verschieben",
  BUTTON_TRANSLATE_ALL: "Ausgewählte Elemente auf der Karte verschieben",
  BUTTON_APPLY_TRANSLATE: "Änderungen übernehmen",
  EDITOR: 'Editor',
  EDITOR_ENABLE_INSTANT_MEASURE: 'Messen während des Zeichnens',
  EDITOR_ENABLE_FREEHAND_DRAW: 'Freihand zeichnen',
  EDITOR_FEATURE_APPLY: 'Editieren beenden',
  EDITOR_FEATURE_DELETE: 'Aktives Element löschen',
  EDITOR_FEATURE_MODIFY: 'Elemente editieren',
  EDITOR_SELECT_INFO: 'Zur Auswahl ein Element auf der Karte anklicken.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox',
  EDITOR_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Punktwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihand zeichnen',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Streckenwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Flächenwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Kreiswerkzeuge',
  CTRL_EDITOR: 'Editor ein-/ausblenden',
  EDITOR_API_ERROR_TITLE: 'Es ist ein Fehler aufgetreten',
  NONE: '' // last line

};
exports.projectEditorLang = projectEditorLang;

/***/ }),

/***/ "./src/Resources/public/js/c4g-editor-i18n.js":
/*!****************************************************!*\
  !*** ./src/Resources/public/js/c4g-editor-i18n.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getEditorLanguage = getEditorLanguage;
exports.langConstants = void 0;

var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./src/Resources/public/js/c4g-maps-constant-i18n-de.js");

var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "./src/Resources/public/js/c4g-maps-constant-i18n-en.js");

var _c4gEditorI18nDe = __webpack_require__(/*! ./c4g-editor-i18n-de */ "./src/Resources/public/js/c4g-editor-i18n-de.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var mapsLang = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    mapsLang = _c4gMapsConstantI18nDe.langConstantsGerman;
  } else if (mapData.lang === "en") {
    mapsLang = _c4gMapsConstantI18nEn.langConstantsEnglish;
  } else {
    // fallback
    mapsLang = _c4gMapsConstantI18nDe.langConstantsGerman;
  }
}

function getEditorLanguage(mapData) {
  if (mapData.lang === "de") {
    return _c4gEditorI18nDe.projectEditorLang;
  } else if (mapData.lang === "en") {
    return _c4gEditorI18nDe.projectEditorLang;
  } else {
    // fallback
    return _c4gEditorI18nDe.projectEditorLang;
  }
}

var langConstants = jQuery.extend(mapsLang, _c4gEditorI18nDe.projectEditorLang);
exports.langConstants = langConstants;

/***/ }),

/***/ "./src/Resources/public/js/components/c4g-editor-component.jsx":
/*!*********************************************************************!*\
  !*** ./src/Resources/public/js/components/c4g-editor-component.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gEditorI18n = __webpack_require__(/*! ./../c4g-editor-i18n */ "./src/Resources/public/js/c4g-editor-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "./src/Resources/public/js/c4g-maps-utils.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//import {EditorView} from "./c4g-editor-view.jsx";
var EditorView = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("src_Resources_public_js_c4g-popup-controller_js"), __webpack_require__.e("src_Resources_public_js_components_c4g-editor-view_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-editor-view.jsx */ "./src/Resources/public/js/components/c4g-editor-view.jsx"));
});

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_Resources_public_js_components_c4g-titlebar_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./src/Resources/public/js/components/c4g-titlebar.jsx"));
});

var EditorComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EditorComponent, _Component);

  var _super = _createSuper(EditorComponent);

  function EditorComponent(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, EditorComponent);
    _this = _super.call(this, props);
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.countEditorId = _this.countEditorId.bind((0, _assertThisInitialized2["default"])(_this));
    _this.addFeature = _this.addFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.removeFeature = _this.removeFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.modifyFeature = _this.modifyFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.changeJSON = _this.changeJSON.bind((0, _assertThisInitialized2["default"])(_this));
    _this.props.mapController.editor = (0, _assertThisInitialized2["default"])(_this);
    var scope = (0, _assertThisInitialized2["default"])(_this);
    var element = document.createElement('div');
    var button = document.createElement('button');
    button.title = "Editor";
    element.className = "c4g-editor-control ol-unselectable ol-control c4g-close";
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      var hidden = scope.props.mapController.editorContainer.className.includes('c4g-close');

      if (scope.state.open) {
        if (!hidden) {
          scope.close();
        } else {
          jQuery(scope.props.mapController.editorContainer).removeClass('c4g-close').addClass('c4g-open');
        }
      } else {
        scope.open();
      }
    });
    _this.config = {};
    _this.arrLocstyles = [];
    var mapController = props.mapController;

    if (props.config) {
      _this.handleConfig(props.config);
    } else {
      _this.getConfiguration(mapController.data.feEditorProfile || mapController.data.beEditorProfile, !!mapController.data.feEditorProfile);
    }

    _this.langConstants = (0, _c4gEditorI18n.getEditorLanguage)(mapController.data);
    var control = new _control.Control({
      element: element,
      target: props.target
    });

    control.isOpen = function () {
      return false;
    };

    if (!mapController.mapsControls.controls.editor) {
      mapController.mapsControls.controls.editor = control;
      mapController.map.addControl(control);
    }

    _this.modes = ["select", "Point", "LineString", "Polygon", "Circle"];
    var features;

    if (_this.props.inputField && $(_this.props.inputField).val() && $(_this.props.inputField).val().length > 50) {
      features = $(_this.props.inputField).val();
      setTimeout(function () {
        _this.reRender();
      }, 200);
    } else {
      features = '{"type": "FeatureCollection", "features": []}';
    }

    _this.state = {
      open: props.open || false,
      currentMode: "select",
      styleData: {},
      control: control,
      range: 0,
      features: features,
      editorId: 0
    };

    _this.styleFunction = function (feature, resolution) {
      var size = false;
      var returnStyle = [];

      if (feature && feature.get && feature.get('features')) {
        var _features = feature.get('features');

        size = _features.length;
        feature = _features[0];
      }

      if (feature && feature.getStyle()) {
        returnStyle = feature.getStyle();
      } else if (feature && feature.get && feature.get('locstyle')) {
        var locstyle = feature.get('locstyle');

        if (scope.props.mapController.proxy.locationStyleController.arrLocStyles && scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle] && scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
          var style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;

          if (typeof style === "function") {
            returnStyle = style(feature, resolution, false);
          } else {
            returnStyle = scope.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style;
          }
        }
      }

      return returnStyle;
    };

    _this.features = new _ol.Collection();
    _this.editorLayer = new _layer.Vector({
      source: new _source.Vector({
        format: new _format.GeoJSON()
      }),
      style: _this.styleFunction
    });

    if (_this.props.open) {
      _this.props.mapController.map.addLayer(_this.editorLayer);
    }

    return _this;
  }

  (0, _createClass2["default"])(EditorComponent, [{
    key: "open",
    value: function open() {
      jQuery(this.props.mapController.editorContainer).removeClass("c4g-close").addClass("c4g-open");
      this.props.mapController.map.addLayer(this.editorLayer);
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close");
      this.props.mapController.map.removeLayer(this.editorLayer);
      this.setState({
        open: false
      });
    }
  }, {
    key: "countEditorId",
    value: function countEditorId() {
      var newCount = this.state.editorId + 1;
      this.setState({
        editorId: newCount
      });
    }
  }, {
    key: "getConfiguration",
    value: function getConfiguration(id) {
      var _this2 = this;

      var frontend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var url;

      if (frontend) {
        url = "con4gis/editorService/" + id;
      } else {
        url = "con4gis/editorServiceBackend/" + id;
      }

      fetch(url).then(function (response) {
        response.json().then(function (json) {
          _this2.handleConfig(json);
        });
      });
    }
  }, {
    key: "handleConfig",
    value: function handleConfig(json) {
      var _this3 = this;

      for (var i in json.drawStyles) {
        if (json.drawStyles.hasOwnProperty(i)) {
          this.config[i] = [];
          var drawStyle = json.drawStyles[i];

          for (var j in drawStyle.elements) {
            if (drawStyle.elements.hasOwnProperty(j)) {
              (function () {
                var element = drawStyle.elements[j];

                _this3.config[i].push(element);

                var checkLocstyle = _this3.arrLocstyles.findIndex(function (locstyle) {
                  return locstyle === element.styleId;
                });

                if (checkLocstyle === -1 && element.styleId) {
                  _this3.arrLocstyles.push(element.styleId);
                }
              })();
            }
          }
        }
      }

      this.props.mapController.proxy.locationStyleController.loadLocationStyles(this.arrLocstyles, {
        "done": function done(styleData) {
          _this3.setState({
            styleData: styleData
          });
        }
      });
    }
  }, {
    key: "reRender",
    value: function reRender() {
      try {
        if (this.state.features.length > 50) {
          this.linkInput();
          var geojson = JSON.parse(this.state.features);
          var features = new _format.GeoJSON({
            featureProjection: "EPSG:3857"
          }).readFeatures(geojson);
          var source = this.editorLayer.getSource();
          source.forEachFeature(function (feature) {
            source.removeFeature(feature);
          });

          for (var i in features) {
            if (features.hasOwnProperty(i)) {
              var jsonFeature = features[i];

              if (jsonFeature.get('radius')) {
                jsonFeature.setGeometry(new _geom.Circle(jsonFeature.getGeometry().getCoordinates(), jsonFeature.get('radius')));
              }

              source.addFeature(jsonFeature);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }

      if (this.state.range) {
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        var startContainer = range.startContainer.childNodes[0] || range.startContainer;
        range.setStart(startContainer, this.state.range);
        range.setEnd(startContainer, this.state.range);
        selection.removeRange(range);
        selection.addRange(range);
      }
    }
  }, {
    key: "changeJSON",
    value: function changeJSON(event) {
      var _this4 = this;

      var range = window.getSelection().getRangeAt(0).startOffset;
      this.setState({
        features: event.target.innerText,
        range: range
      }, function () {
        _this4.reRender();
      });
    }
  }, {
    key: "addFeature",
    value: function addFeature(feature) {
      var _this5 = this;

      var arrFeatures = JSON.parse(this.state.features);
      arrFeatures.features.push(feature);
      var features = JSON.stringify(arrFeatures, null, 2);
      this.setState({
        features: features
      }, function () {
        _this5.linkInput();
      });
    }
  }, {
    key: "removeFeature",
    value: function removeFeature(geojson) {
      var _this6 = this;

      var editorId = geojson.properties.editorId;
      var arrFeatures = JSON.parse(this.state.features);
      var featureId = arrFeatures.features.findIndex(function (element) {
        return element.properties.editorId === editorId;
      });
      arrFeatures.features.splice(featureId, 1);
      var features = JSON.stringify(arrFeatures, null, 2);
      this.setState({
        features: features
      }, function () {
        _this6.linkInput();
      });
    }
  }, {
    key: "modifyFeature",
    value: function modifyFeature(geojson) {
      var _this7 = this;

      var editorId = geojson.properties.editorId;
      var objGeojson = JSON.parse(this.state.features);
      var arrFeatures = objGeojson.features;
      var featureId = arrFeatures.findIndex(function (element) {
        return element.properties.editorId === editorId;
      });
      objGeojson.features[featureId] = geojson;
      var features = JSON.stringify(objGeojson, null, 2);
      this.setState({
        features: features
      }, function () {
        _this7.linkInput();
      });
    }
  }, {
    key: "linkInput",
    value: function linkInput() {
      if (this.props.inputField && this.state.features.length > 50) {
        $(this.props.inputField).val(this.state.features); //link to inputField
      }
    }
  }, {
    key: "render",
    value: function render() {
      var scope = this; // if (this.props.inputField && $(this.props.inputField).length > 0) {
      //     if (this.state.features < 50) {
      //         console.log(this.state.features);
      //     }
      //     else {
      //         $(this.props.inputField).val(this.state.features);
      //     }
      // }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, (0, _defineProperty2["default"])({
        wrapperClass: "c4g-editor-header",
        headerClass: "c4g-editor-headline",
        hideContainer: ".c4g-editor-container",
        header: this.langConstants.EDITOR,
        closeBtnTitle: this.langConstants.CTRL_EDITOR,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close
      }, "closeBtnTitle", this.langConstants.CLOSE))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-mode-switcher"
      }, this.modes.map(function (element, index) {
        if (element === "select" || scope.config[element] && scope.config[element].length > 0) {
          var title = scope.langConstants["EDITOR_VIEW_TRIGGER_DRAW_" + element.toUpperCase()];
          return /*#__PURE__*/_react["default"].createElement("button", {
            key: index,
            className: "c4g-editor-" + element + "  " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive"),
            title: title,
            onMouseUp: function onMouseUp() {
              return scope.setState({
                currentMode: element
              });
            }
          });
        } else {
          return null;
        }
      })), /*#__PURE__*/_react["default"].createElement(EditorView, {
        className: "c4g-editor-view",
        styleFunction: this.styleFunction,
        mode: this.state.currentMode,
        styleData: this.state.styleData,
        elements: this.config[this.state.currentMode] ? this.config[this.state.currentMode] : [],
        active: this.state.open,
        features: this.features,
        editorVars: this.props.config.editorVars,
        removeFeature: this.removeFeature,
        modifyFeature: this.modifyFeature,
        addFeature: this.addFeature,
        editorLayer: this.editorLayer,
        editorId: this.state.editorId,
        countEditorId: this.countEditorId,
        updateFeatures: this.updateFeatures,
        mapController: this.props.mapController,
        editor: this,
        lang: this.langConstants
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-editor-content",
        style: {
          overflow: "none"
        }
      }, /*#__PURE__*/_react["default"].createElement("pre", {
        contentEditable: true,
        style: {
          overflowY: "scroll",
          overflowX: "none",
          height: "400px"
        },
        suppressContentEditableWarning: true,
        onInput: this.changeJSON
      }, this.state.features)));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.open && !this.props.open || prevState.open && !this.state.open) {
        jQuery(this.props.mapController.editorContainer).removeClass("c4g-open").addClass("c4g-close");
      }
    }
  }]);
  return EditorComponent;
}(_react.Component);

exports["default"] = EditorComponent;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1Jlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctZWRpdG9yLWNvbXBvbmVudF9qc3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFJQSxpQkFBaUIsR0FBRztBQUM3QkMsRUFBQUEsSUFBSSxFQUFFLElBRHVCO0FBRzdCQyxFQUFBQSxhQUFhLEVBQUUsc0JBSGM7QUFJN0JDLEVBQUFBLGlCQUFpQixFQUFFLHFCQUpVO0FBSzdCQyxFQUFBQSxnQkFBZ0IsRUFBRSx3Q0FMVztBQU03QkMsRUFBQUEsb0JBQW9CLEVBQUUsc0RBTk87QUFPN0JDLEVBQUFBLGNBQWMsRUFBRSx1QkFQYTtBQVE3QkMsRUFBQUEsOEJBQThCLEVBQUUsaUJBUkg7QUFTN0JDLEVBQUFBLDhCQUE4QixFQUFFLDBDQVRIO0FBVTdCQyxFQUFBQSxjQUFjLEVBQUUsa0JBVmE7QUFXN0JDLEVBQUFBLGdCQUFnQixFQUFFLDBCQVhXO0FBWTdCQyxFQUFBQSxjQUFjLEVBQUUsaUNBWmE7QUFhN0JDLEVBQUFBLGtCQUFrQixFQUFFLHdEQWJTO0FBYzdCQyxFQUFBQSxtQkFBbUIsRUFBRSwyQkFkUTtBQWU3QkMsRUFBQUEsaUJBQWlCLEVBQUUsOEJBZlU7QUFnQjdCQyxFQUFBQSxtQkFBbUIsRUFBRSxxREFoQlE7QUFpQjdCQyxFQUFBQSxjQUFjLEVBQUUsWUFqQmE7QUFrQjdCQyxFQUFBQSxhQUFhLEVBQUUsV0FsQmM7QUFtQjdCQyxFQUFBQSx3QkFBd0IsRUFBRSxrRUFuQkc7QUFvQjdCQyxFQUFBQSxvQkFBb0IsRUFBRSxnREFwQk87QUFxQjdCQyxFQUFBQSxzQkFBc0IsRUFBRSx1QkFyQks7QUF1QjdCQyxFQUFBQSxNQUFNLEVBQUUsUUF2QnFCO0FBd0I3QkMsRUFBQUEsNkJBQTZCLEVBQUUsOEJBeEJGO0FBeUI3QkMsRUFBQUEsMkJBQTJCLEVBQUUsbUJBekJB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LElBQTNFLEVBQWtGO0FBQ2hGVixRQUFBQSxNQUFNLENBQUMsS0FBS08sS0FBTCxDQUFXUyxhQUFYLENBQXlCYSxlQUExQixDQUFOLENBQWlERyxXQUFqRCxDQUE2RCxVQUE3RCxFQUF5RUMsUUFBekUsQ0FBa0YsV0FBbEY7QUFDRDtBQUNGOzs7RUFwUzBDb0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vc3JjL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLWVkaXRvci1pMThuLWRlLmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctZWRpdG9yLWkxOG4uanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLWVkaXRvci1jb21wb25lbnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIyLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuZXhwb3J0IHZhciBwcm9qZWN0RWRpdG9yTGFuZyA9IHtcbiAgTEFORzogJ2RlJyxcblxuICBNRVRBREFUQV9FRElUOiBcIk1ldGFkYXRlbiBiZWFyYmVpdGVuXCIsXG4gIERVUExJQ0FURV9FTEVNRU5UOiBcIkVsZW1lbnQgZHVwbGl6aWVyZW5cIixcbiAgRElTUExBQ0VfRUxFTUVOVDogXCJFbGVtZW50IGluIGFuZGVyZXMgUHJvamVrdCB2ZXJzY2hpZWJlblwiLFxuICBEVVBMSUNBVEVfQU5EX0RFTEVURTogXCJFbGVtZW50IGR1cGxpemllcmVuICYgaW4gYW5kZXJlcyBQcm9qZWt0IHZlcnNjaGllYmVuXCIsXG4gIENIT09TRV9QUk9KRUNUOiBcIlfDpGhsZSBlaW4gUHJvamVrdCAuLi5cIixcbiAgRURJVE9SX0ZFQVRVUkVfREVMRVRFX0hFQURMSU5FOiBcIkVsZW1lbnQgbMO2c2NoZW5cIixcbiAgRURJVE9SX0ZFQVRVUkVfREVMRVRFX1FVRVNUSU9OOiBcIldvbGxlbiBTaWUgZGFzIEVsZW1lbnQgd2lya2xpY2ggbMO2c2NoZW4/XCIsXG4gIFJPVEFURV9FTEVNRU5UOiBcIkVsZW1lbnQgcm90aWVyZW5cIixcbiAgREVTRUxFQ1RfRUxFTUVOVDogXCJFbGVtZW50LUF1c3dhaGwgYXVmaGViZW5cIixcbiAgUkVWRVJUX0VMRU1FTlQ6IFwiTGV0enRlIFZlcnNpb24gd2llZGVyaGVyc3RlbGxlblwiLFxuICBDT05GSVJNX0RFTEVURV9BTEw6IFwiV29sbGVuIFNpZSBkaWUgYXVzZ2V3w6RobHRlbiBFbGVtZW50ZSB3aXJrbGljaCBsw7ZzY2hlbj9cIixcbiAgQlVUVE9OX0RFU0VMRUNUX0FMTDogXCJBdXN3YWhsIGbDvHIgYWxsZSBhdWZoZWJlblwiLFxuICBCVVRUT05fREVMRVRFX0FMTDogXCJBdXNnZXfDpGhsdGUgRWxlbWVudGUgbMO2c2NoZW5cIixcbiAgQlVUVE9OX0RJU1BMQUNFX0FMTDogXCJBdXNnZXfDpGhsdGUgRWxlbWVudGUgaW4gYW5kZXJlcyBQcm9qZWt0IHZlcnNjaGllYmVuXCIsXG4gIEJVVFRPTl9DT05GSVJNOiBcIkJlc3TDpHRpZ2VuXCIsXG4gIEJVVFRPTl9DQU5DRUw6IFwiQWJicmVjaGVuXCIsXG4gIEJVVFRPTl9DT1BZX0RJU1BMQUNFX0FMTDogXCJBdXNnZXfDpGhsdGUgRWxlbWVudGUga29waWVyZW4gdW5kIGluIGFuZGVyZXMgUHJvamVrdCB2ZXJzY2hpZWJlblwiLFxuICBCVVRUT05fVFJBTlNMQVRFX0FMTDogXCJBdXNnZXfDpGhsdGUgRWxlbWVudGUgYXVmIGRlciBLYXJ0ZSB2ZXJzY2hpZWJlblwiLFxuICBCVVRUT05fQVBQTFlfVFJBTlNMQVRFOiBcIsOEbmRlcnVuZ2VuIMO8YmVybmVobWVuXCIsXG5cbiAgRURJVE9SOiAnRWRpdG9yJyxcbiAgRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkU6ICdNZXNzZW4gd8OkaHJlbmQgZGVzIFplaWNobmVucycsXG4gIEVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVzogJ0ZyZWloYW5kIHplaWNobmVuJyxcbiAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdFZGl0aWVyZW4gYmVlbmRlbicsXG4gIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ0FrdGl2ZXMgRWxlbWVudCBsw7ZzY2hlbicsXG4gIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ0VsZW1lbnRlIGVkaXRpZXJlbicsXG4gIEVESVRPUl9TRUxFQ1RfSU5GTzogJ1p1ciBBdXN3YWhsIGVpbiBFbGVtZW50IGF1ZiBkZXIgS2FydGUgYW5rbGlja2VuLicsXG4gIEVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMOiAnW1N0cmddICsgW0tsaWNrXSBmw7xyIE1laHJmYWNoYXVzd2FobCA8YnI+W1NoaWZ0XSBoYWx0ZW4gZsO8ciBBdXN3YWhsYm94JyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdBdXN3YWhsIE1vZHVzJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnUHVua3R3ZXJremV1Z2UnLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZCB6ZWljaG5lbicsXG4gIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnU3RyZWNrZW53ZXJremV1Z2UnLFxuICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ0Zsw6RjaGVud2Vya3pldWdlJyxcbiAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ0tyZWlzd2Vya3pldWdlJyxcbiAgQ1RSTF9FRElUT1I6ICdFZGl0b3IgZWluLS9hdXNibGVuZGVuJyxcblxuICBFRElUT1JfQVBJX0VSUk9SX1RJVExFOiAnRXMgaXN0IGVpbiBGZWhsZXIgYXVmZ2V0cmV0ZW4nLFxuXG4gIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMiwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCB7bGFuZ0NvbnN0YW50c0dlcm1hbn0gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzRW5nbGlzaH0gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1lblwiO1xuaW1wb3J0IHtwcm9qZWN0RWRpdG9yTGFuZ30gZnJvbSBcIi4vYzRnLWVkaXRvci1pMThuLWRlXCI7XG5sZXQgbWFwc0xhbmcgPSB7fTtcblxuaWYgKHR5cGVvZiBtYXBEYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZGVcIikge1xuICAgIG1hcHNMYW5nID0gbGFuZ0NvbnN0YW50c0dlcm1hbjtcbiAgfSBlbHNlIGlmIChtYXBEYXRhLmxhbmcgPT09IFwiZW5cIikge1xuICAgIG1hcHNMYW5nID0gbGFuZ0NvbnN0YW50c0VuZ2xpc2g7XG4gIH0gZWxzZSB7XG4gICAgLy8gZmFsbGJhY2tcbiAgICBtYXBzTGFuZyA9IGxhbmdDb25zdGFudHNHZXJtYW47XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVkaXRvckxhbmd1YWdlKG1hcERhdGEpIHtcbiAgaWYgKG1hcERhdGEubGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgcmV0dXJuIHByb2plY3RFZGl0b3JMYW5nO1xuICB9IGVsc2UgaWYgKG1hcERhdGEubGFuZyA9PT0gXCJlblwiKSB7XG4gICAgcmV0dXJuIHByb2plY3RFZGl0b3JMYW5nO1xuICB9IGVsc2Uge1xuICAgIC8vIGZhbGxiYWNrXG4gICAgcmV0dXJuIHByb2plY3RFZGl0b3JMYW5nO1xuICB9XG59XG5leHBvcnQgdmFyIGxhbmdDb25zdGFudHMgPSBqUXVlcnkuZXh0ZW5kKG1hcHNMYW5nLCBwcm9qZWN0RWRpdG9yTGFuZyk7IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICogQHBhY2thZ2UgY29uNGdpc1xuICogQHZlcnNpb24gOFxuICogQGF1dGhvciBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0IChjKSAyMDEwLTIwMjIsIGJ5IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCB7RWRpdG9yVmlld30gZnJvbSBcIi4vYzRnLWVkaXRvci12aWV3LmpzeFwiO1xuY29uc3QgRWRpdG9yVmlldyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jNGctZWRpdG9yLXZpZXcuanN4XCIpKTtcbmltcG9ydCB7Z2V0RWRpdG9yTGFuZ3VhZ2V9IGZyb20gXCIuLy4uL2M0Zy1lZGl0b3ItaTE4blwiO1xuaW1wb3J0IHtDb250cm9sfSBmcm9tIFwib2wvY29udHJvbFwiO1xuaW1wb3J0IHtHcm91cCwgVmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7R2VvSlNPTn0gZnJvbSBcIm9sL2Zvcm1hdFwiO1xuaW1wb3J0IHtEcmF3fSBmcm9tIFwib2wvaW50ZXJhY3Rpb25cIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7RmlsbCwgU3R5bGUsIFRleHR9IGZyb20gXCJvbC9zdHlsZVwiO1xuY29uc3QgVGl0bGViYXIgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vYzRnLXRpdGxlYmFyLmpzeFwiKSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY291bnRFZGl0b3JJZCA9IHRoaXMuY291bnRFZGl0b3JJZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRmVhdHVyZSA9IHRoaXMuYWRkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlRmVhdHVyZSA9IHRoaXMucmVtb3ZlRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZSA9IHRoaXMubW9kaWZ5RmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlSlNPTiA9IHRoaXMuY2hhbmdlSlNPTi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3IgPSB0aGlzO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50aXRsZSA9IFwiRWRpdG9yXCI7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1lZGl0b3ItY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBjNGctY2xvc2VcIjtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgbGV0IGhpZGRlbiA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZWRpdG9yQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnYzRnLWNsb3NlJykuYWRkQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzY29wZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICB0aGlzLmFyckxvY3N0eWxlcyA9IFtdO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcblxuICAgIGlmIChwcm9wcy5jb25maWcpIHtcbiAgICAgIHRoaXMuaGFuZGxlQ29uZmlnKHByb3BzLmNvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5nZXRDb25maWd1cmF0aW9uKG1hcENvbnRyb2xsZXIuZGF0YS5mZUVkaXRvclByb2ZpbGUgfHwgbWFwQ29udHJvbGxlci5kYXRhLmJlRWRpdG9yUHJvZmlsZSwgISFtYXBDb250cm9sbGVyLmRhdGEuZmVFZGl0b3JQcm9maWxlKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRFZGl0b3JMYW5ndWFnZShtYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGxldCBjb250cm9sID0gbmV3IENvbnRyb2woe2VsZW1lbnQ6IGVsZW1lbnQsIHRhcmdldDogcHJvcHMudGFyZ2V0fSk7XG4gICAgY29udHJvbC5pc09wZW4gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghbWFwQ29udHJvbGxlci5tYXBzQ29udHJvbHMuY29udHJvbHMuZWRpdG9yKSB7XG4gICAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5lZGl0b3IgPSBjb250cm9sO1xuICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB9XG4gICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcIlBvaW50XCIsIFwiTGluZVN0cmluZ1wiLCBcIlBvbHlnb25cIiwgXCJDaXJjbGVcIl07XG4gICAgbGV0IGZlYXR1cmVzO1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0RmllbGQgJiYgJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLnZhbCgpICYmICQodGhpcy5wcm9wcy5pbnB1dEZpZWxkKS52YWwoKS5sZW5ndGggPiA1MCkge1xuICAgICAgZmVhdHVyZXMgPSAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICB0aGlzLnJlUmVuZGVyKCk7XG4gICAgICB9LCAyMDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZmVhdHVyZXMgPSAne1widHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsIFwiZmVhdHVyZXNcIjogW119J1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGN1cnJlbnRNb2RlOiBcInNlbGVjdFwiLFxuICAgICAgc3R5bGVEYXRhOiB7fSxcbiAgICAgIGNvbnRyb2w6IGNvbnRyb2wsXG4gICAgICByYW5nZTogMCxcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgIGVkaXRvcklkOiAwXG4gICAgfTtcbiAgICB0aGlzLnN0eWxlRnVuY3Rpb24gPSBmdW5jdGlvbihmZWF0dXJlLCByZXNvbHV0aW9uKSB7XG4gICAgICBsZXQgc2l6ZSA9IGZhbHNlO1xuICAgICAgbGV0IHJldHVyblN0eWxlID0gW107XG4gICAgICBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCAmJiBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKSkge1xuICAgICAgICBsZXQgZmVhdHVyZXMgPSBmZWF0dXJlLmdldCgnZmVhdHVyZXMnKTtcbiAgICAgICAgc2l6ZSA9IGZlYXR1cmVzLmxlbmd0aDtcbiAgICAgICAgZmVhdHVyZSA9IGZlYXR1cmVzWzBdO1xuICAgICAgfVxuICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZXRTdHlsZSgpKSB7XG4gICAgICAgIHJldHVyblN0eWxlID0gZmVhdHVyZS5nZXRTdHlsZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZmVhdHVyZSAmJiBmZWF0dXJlLmdldCAmJiBmZWF0dXJlLmdldCgnbG9jc3R5bGUnKSkge1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSBmZWF0dXJlLmdldCgnbG9jc3R5bGUnKTtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzICYmIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXSAmJiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpIHtcbiAgICAgICAgICBsZXQgc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGU7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm5TdHlsZSA9IHN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24sIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm5TdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5TdHlsZVxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlcyA9IG5ldyBDb2xsZWN0aW9uKCk7XG4gICAgdGhpcy5lZGl0b3JMYXllciA9IG5ldyBWZWN0b3Ioe1xuICAgICAgc291cmNlOiBuZXcgVmVjdG9yU291cmNlKHtmb3JtYXQ6IG5ldyBHZW9KU09OKCl9KSxcbiAgICAgIHN0eWxlOiB0aGlzLnN0eWxlRnVuY3Rpb25cbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgalF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIik7XG4gICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLmVkaXRvckxheWVyKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG9wZW46IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICBqUXVlcnkodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmVkaXRvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUxheWVyKHRoaXMuZWRpdG9yTGF5ZXIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBjb3VudEVkaXRvcklkICgpIHtcbiAgICBsZXQgbmV3Q291bnQgPSB0aGlzLnN0YXRlLmVkaXRvcklkICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRvcklkOiBuZXdDb3VudFxuICAgIH0pXG4gIH1cbiAgZ2V0Q29uZmlndXJhdGlvbiAoaWQsIGZyb250ZW5kID0gdHJ1ZSkge1xuICAgIGxldCB1cmw7XG4gICAgaWYgKGZyb250ZW5kKSB7XG4gICAgICB1cmwgPSBcImNvbjRnaXMvZWRpdG9yU2VydmljZS9cIiArIGlkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVybCA9IFwiY29uNGdpcy9lZGl0b3JTZXJ2aWNlQmFja2VuZC9cIiArIGlkO1xuICAgIH1cblxuICAgIGZldGNoKHVybCkudGhlbihcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgICAgICAoanNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDb25maWcoanNvbik7XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cbiAgaGFuZGxlQ29uZmlnIChqc29uKSB7XG4gICAgZm9yIChsZXQgaSBpbiBqc29uLmRyYXdTdHlsZXMpIHtcbiAgICAgIGlmIChqc29uLmRyYXdTdHlsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdGhpcy5jb25maWdbaV0gPSBbXTtcbiAgICAgICAgbGV0IGRyYXdTdHlsZSA9IGpzb24uZHJhd1N0eWxlc1tpXTtcbiAgICAgICAgZm9yIChsZXQgaiBpbiBkcmF3U3R5bGUuZWxlbWVudHMpIHtcbiAgICAgICAgICBpZiAoZHJhd1N0eWxlLmVsZW1lbnRzLmhhc093blByb3BlcnR5KGopKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRyYXdTdHlsZS5lbGVtZW50c1tqXTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnW2ldLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICBsZXQgY2hlY2tMb2NzdHlsZSA9IHRoaXMuYXJyTG9jc3R5bGVzLmZpbmRJbmRleCgobG9jc3R5bGUpID0+IGxvY3N0eWxlID09PSBlbGVtZW50LnN0eWxlSWQpO1xuICAgICAgICAgICAgaWYgKGNoZWNrTG9jc3R5bGUgPT09IC0xICYmIGVsZW1lbnQuc3R5bGVJZCkge1xuICAgICAgICAgICAgICB0aGlzLmFyckxvY3N0eWxlcy5wdXNoKGVsZW1lbnQuc3R5bGVJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXModGhpcy5hcnJMb2NzdHlsZXMsIHtcbiAgICAgIFwiZG9uZVwiOiAoc3R5bGVEYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN0eWxlRGF0YTogc3R5bGVEYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZVJlbmRlcigpe1xuICAgIHRyeXtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVzLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgIHRoaXMubGlua0lucHV0KCk7XG4gICAgICAgIGxldCBnZW9qc29uID0gSlNPTi5wYXJzZSh0aGlzLnN0YXRlLmZlYXR1cmVzKTtcbiAgICAgICAgbGV0IGZlYXR1cmVzID0gbmV3IEdlb0pTT04oe1xuICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBcIkVQU0c6Mzg1N1wiXG4gICAgICAgIH0pLnJlYWRGZWF0dXJlcyhnZW9qc29uKTtcbiAgICAgICAgbGV0IHNvdXJjZSA9IHRoaXMuZWRpdG9yTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoRmVhdHVyZSgoZmVhdHVyZSkgPT4ge1xuICAgICAgICAgIHNvdXJjZS5yZW1vdmVGZWF0dXJlKGZlYXR1cmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBmZWF0dXJlcykge1xuICAgICAgICAgIGlmIChmZWF0dXJlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgbGV0IGpzb25GZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICAgICAgICBpZiAoanNvbkZlYXR1cmUuZ2V0KCdyYWRpdXMnKSkge1xuICAgICAgICAgICAgICBqc29uRmVhdHVyZS5zZXRHZW9tZXRyeShuZXcgQ2lyY2xlKGpzb25GZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSwganNvbkZlYXR1cmUuZ2V0KCdyYWRpdXMnKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc291cmNlLmFkZEZlYXR1cmUoanNvbkZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5yYW5nZSkge1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIGxldCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApO1xuICAgICAgbGV0IHN0YXJ0Q29udGFpbmVyID0gcmFuZ2Uuc3RhcnRDb250YWluZXIuY2hpbGROb2Rlc1swXSB8fCByYW5nZS5zdGFydENvbnRhaW5lcjtcbiAgICAgIHJhbmdlLnNldFN0YXJ0KHN0YXJ0Q29udGFpbmVyLCB0aGlzLnN0YXRlLnJhbmdlKTtcbiAgICAgIHJhbmdlLnNldEVuZChzdGFydENvbnRhaW5lciwgdGhpcy5zdGF0ZS5yYW5nZSk7XG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlUmFuZ2UocmFuZ2UpO1xuICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB9XG4gIH1cbiAgY2hhbmdlSlNPTihldmVudCkge1xuICAgIGxldCByYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLnN0YXJ0T2Zmc2V0O1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZlYXR1cmVzOiBldmVudC50YXJnZXQuaW5uZXJUZXh0LCByYW5nZTogcmFuZ2V9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlUmVuZGVyKCk7XG4gICAgfSlcbiAgfVxuICBhZGRGZWF0dXJlIChmZWF0dXJlKSB7XG4gICAgbGV0IGFyckZlYXR1cmVzID0gSlNPTi5wYXJzZSh0aGlzLnN0YXRlLmZlYXR1cmVzKTtcblxuICAgIGFyckZlYXR1cmVzLmZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgbGV0IGZlYXR1cmVzID0gSlNPTi5zdHJpbmdpZnkoYXJyRmVhdHVyZXMsIG51bGwsIDIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgfSwgKCkgPT4ge3RoaXMubGlua0lucHV0KCl9KTtcbiAgfVxuICByZW1vdmVGZWF0dXJlIChnZW9qc29uKSB7XG4gICAgbGV0IGVkaXRvcklkID0gZ2VvanNvbi5wcm9wZXJ0aWVzLmVkaXRvcklkO1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IEpTT04ucGFyc2UodGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgbGV0IGZlYXR1cmVJZCA9IGFyckZlYXR1cmVzLmZlYXR1cmVzLmZpbmRJbmRleCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQucHJvcGVydGllcy5lZGl0b3JJZCA9PT0gZWRpdG9ySWQ7XG4gICAgfSk7XG4gICAgYXJyRmVhdHVyZXMuZmVhdHVyZXMuc3BsaWNlKGZlYXR1cmVJZCwgMSk7XG4gICAgbGV0IGZlYXR1cmVzID0gSlNPTi5zdHJpbmdpZnkoYXJyRmVhdHVyZXMsIG51bGwsIDIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgfSwgKCkgPT4ge3RoaXMubGlua0lucHV0KCl9KTtcbiAgfVxuICBtb2RpZnlGZWF0dXJlIChnZW9qc29uKSB7XG4gICAgbGV0IGVkaXRvcklkID0gZ2VvanNvbi5wcm9wZXJ0aWVzLmVkaXRvcklkO1xuICAgIGxldCBvYmpHZW9qc29uID0gSlNPTi5wYXJzZSh0aGlzLnN0YXRlLmZlYXR1cmVzKTtcbiAgICBsZXQgYXJyRmVhdHVyZXMgPSBvYmpHZW9qc29uLmZlYXR1cmVzO1xuICAgIGxldCBmZWF0dXJlSWQgPSBhcnJGZWF0dXJlcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50LnByb3BlcnRpZXMuZWRpdG9ySWQgPT09IGVkaXRvcklkO1xuICAgIH0pO1xuICAgIG9iakdlb2pzb24uZmVhdHVyZXNbZmVhdHVyZUlkXSA9IGdlb2pzb247XG4gICAgbGV0IGZlYXR1cmVzID0gSlNPTi5zdHJpbmdpZnkob2JqR2VvanNvbiwgbnVsbCwgMik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICB9LCAoKSA9PiB7dGhpcy5saW5rSW5wdXQoKX0pO1xuICB9XG4gIGxpbmtJbnB1dCAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRGaWVsZCAmJiB0aGlzLnN0YXRlLmZlYXR1cmVzLmxlbmd0aCA+IDUwKSB7XG4gICAgICAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKHRoaXMuc3RhdGUuZmVhdHVyZXMpOyAvL2xpbmsgdG8gaW5wdXRGaWVsZFxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGlmICh0aGlzLnByb3BzLmlucHV0RmllbGQgJiYgJCh0aGlzLnByb3BzLmlucHV0RmllbGQpLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZXMgPCA1MCkge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5mZWF0dXJlcyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSB7XG4gICAgLy8gICAgICAgICAkKHRoaXMucHJvcHMuaW5wdXRGaWVsZCkudmFsKHRoaXMuc3RhdGUuZmVhdHVyZXMpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLXdyYXBwZXJcIn0+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1lZGl0b3ItaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1lZGl0b3ItaGVhZGxpbmVcIn0gaGlkZUNvbnRhaW5lcj17XCIuYzRnLWVkaXRvci1jb250YWluZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmxhbmdDb25zdGFudHMuRURJVE9SfSBjbG9zZUJ0blRpdGxlPXt0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9FRElUT1J9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLWVkaXRvci1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICAgIHt0aGlzLm1vZGVzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IFwic2VsZWN0XCIgfHwgKHNjb3BlLmNvbmZpZ1tlbGVtZW50XSAmJiBzY29wZS5jb25maWdbZWxlbWVudF0ubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgICAgbGV0IHRpdGxlID0gc2NvcGUubGFuZ0NvbnN0YW50c1tcIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19cIiArIGVsZW1lbnQudG9VcHBlckNhc2UoKV07XG4gICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLVwiICsgZWxlbWVudCArIFwiICBcIiArIChlbGVtZW50ID09PSBzY29wZS5zdGF0ZS5jdXJyZW50TW9kZSA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX0gb25Nb3VzZVVwPXsoKSA9PiBzY29wZS5zZXRTdGF0ZSh7Y3VycmVudE1vZGU6IGVsZW1lbnR9KX0vPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxFZGl0b3JWaWV3IGNsYXNzTmFtZT17XCJjNGctZWRpdG9yLXZpZXdcIn0gc3R5bGVGdW5jdGlvbj17dGhpcy5zdHlsZUZ1bmN0aW9ufSBtb2RlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlfSBzdHlsZURhdGE9e3RoaXMuc3RhdGUuc3R5bGVEYXRhfSBlbGVtZW50cz17dGhpcy5jb25maWdbdGhpcy5zdGF0ZS5jdXJyZW50TW9kZV0gPyB0aGlzLmNvbmZpZ1t0aGlzLnN0YXRlLmN1cnJlbnRNb2RlXTogW119IGFjdGl2ZT17dGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlcz17dGhpcy5mZWF0dXJlc30gZWRpdG9yVmFycz17dGhpcy5wcm9wcy5jb25maWcuZWRpdG9yVmFyc30gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVGZWF0dXJlfSBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeUZlYXR1cmV9IGFkZEZlYXR1cmU9e3RoaXMuYWRkRmVhdHVyZX0gZWRpdG9yTGF5ZXI9e3RoaXMuZWRpdG9yTGF5ZXJ9IGVkaXRvcklkPXt0aGlzLnN0YXRlLmVkaXRvcklkfSBjb3VudEVkaXRvcklkPXt0aGlzLmNvdW50RWRpdG9ySWR9IHVwZGF0ZUZlYXR1cmVzPXt0aGlzLnVwZGF0ZUZlYXR1cmVzfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IGVkaXRvcj17dGhpc30gbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1lZGl0b3ItY29udGVudFwifSBzdHlsZT17e292ZXJmbG93OiBcIm5vbmVcIn19PlxuICAgICAgICAgIDxwcmUgY29udGVudEVkaXRhYmxlPXt0cnVlfSBzdHlsZT17e292ZXJmbG93WTogXCJzY3JvbGxcIiwgb3ZlcmZsb3dYOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjQwMHB4XCJ9fSBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9e3RydWV9IG9uSW5wdXQ9e3RoaXMuY2hhbmdlSlNPTn0+e3RoaXMuc3RhdGUuZmVhdHVyZXN9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAoKHByZXZQcm9wcy5vcGVuICYmICF0aGlzLnByb3BzLm9wZW4pIHx8IChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSkge1xuICAgICAgalF1ZXJ5KHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5lZGl0b3JDb250YWluZXIpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbInByb2plY3RFZGl0b3JMYW5nIiwiTEFORyIsIk1FVEFEQVRBX0VESVQiLCJEVVBMSUNBVEVfRUxFTUVOVCIsIkRJU1BMQUNFX0VMRU1FTlQiLCJEVVBMSUNBVEVfQU5EX0RFTEVURSIsIkNIT09TRV9QUk9KRUNUIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFX0hFQURMSU5FIiwiRURJVE9SX0ZFQVRVUkVfREVMRVRFX1FVRVNUSU9OIiwiUk9UQVRFX0VMRU1FTlQiLCJERVNFTEVDVF9FTEVNRU5UIiwiUkVWRVJUX0VMRU1FTlQiLCJDT05GSVJNX0RFTEVURV9BTEwiLCJCVVRUT05fREVTRUxFQ1RfQUxMIiwiQlVUVE9OX0RFTEVURV9BTEwiLCJCVVRUT05fRElTUExBQ0VfQUxMIiwiQlVUVE9OX0NPTkZJUk0iLCJCVVRUT05fQ0FOQ0VMIiwiQlVUVE9OX0NPUFlfRElTUExBQ0VfQUxMIiwiQlVUVE9OX1RSQU5TTEFURV9BTEwiLCJCVVRUT05fQVBQTFlfVFJBTlNMQVRFIiwiRURJVE9SIiwiRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkUiLCJFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVciLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9TRUxFQ1RfSU5GTyIsIkVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIkNUUkxfRURJVE9SIiwiRURJVE9SX0FQSV9FUlJPUl9USVRMRSIsIk5PTkUiLCJtYXBzTGFuZyIsIm1hcERhdGEiLCJsYW5nIiwibGFuZ0NvbnN0YW50c0dlcm1hbiIsImxhbmdDb25zdGFudHNFbmdsaXNoIiwiZ2V0RWRpdG9yTGFuZ3VhZ2UiLCJsYW5nQ29uc3RhbnRzIiwialF1ZXJ5IiwiZXh0ZW5kIiwiRWRpdG9yVmlldyIsIlJlYWN0IiwibGF6eSIsIlRpdGxlYmFyIiwiRWRpdG9yQ29tcG9uZW50IiwicHJvcHMiLCJjbG9zZSIsImJpbmQiLCJvcGVuIiwiY291bnRFZGl0b3JJZCIsImFkZEZlYXR1cmUiLCJyZW1vdmVGZWF0dXJlIiwibW9kaWZ5RmVhdHVyZSIsImNoYW5nZUpTT04iLCJtYXBDb250cm9sbGVyIiwiZWRpdG9yIiwic2NvcGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYnV0dG9uIiwidGl0bGUiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsIm9uIiwiZXZlbnQiLCJoaWRkZW4iLCJlZGl0b3JDb250YWluZXIiLCJpbmNsdWRlcyIsInN0YXRlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNvbmZpZyIsImFyckxvY3N0eWxlcyIsImhhbmRsZUNvbmZpZyIsImdldENvbmZpZ3VyYXRpb24iLCJkYXRhIiwiZmVFZGl0b3JQcm9maWxlIiwiYmVFZGl0b3JQcm9maWxlIiwiY29udHJvbCIsIkNvbnRyb2wiLCJ0YXJnZXQiLCJpc09wZW4iLCJtYXBzQ29udHJvbHMiLCJjb250cm9scyIsIm1hcCIsImFkZENvbnRyb2wiLCJtb2RlcyIsImZlYXR1cmVzIiwiaW5wdXRGaWVsZCIsIiQiLCJ2YWwiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwicmVSZW5kZXIiLCJjdXJyZW50TW9kZSIsInN0eWxlRGF0YSIsInJhbmdlIiwiZWRpdG9ySWQiLCJzdHlsZUZ1bmN0aW9uIiwiZmVhdHVyZSIsInJlc29sdXRpb24iLCJzaXplIiwicmV0dXJuU3R5bGUiLCJnZXQiLCJnZXRTdHlsZSIsImxvY3N0eWxlIiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImFyckxvY1N0eWxlcyIsInN0eWxlIiwiQ29sbGVjdGlvbiIsImVkaXRvckxheWVyIiwiVmVjdG9yIiwic291cmNlIiwiVmVjdG9yU291cmNlIiwiZm9ybWF0IiwiR2VvSlNPTiIsImFkZExheWVyIiwic2V0U3RhdGUiLCJzZXRPcGVuQ29tcG9uZW50IiwicmVtb3ZlTGF5ZXIiLCJuZXdDb3VudCIsImlkIiwiZnJvbnRlbmQiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJpIiwiZHJhd1N0eWxlcyIsImhhc093blByb3BlcnR5IiwiZHJhd1N0eWxlIiwiaiIsImVsZW1lbnRzIiwicHVzaCIsImNoZWNrTG9jc3R5bGUiLCJmaW5kSW5kZXgiLCJzdHlsZUlkIiwibG9hZExvY2F0aW9uU3R5bGVzIiwibGlua0lucHV0IiwiZ2VvanNvbiIsIkpTT04iLCJwYXJzZSIsImZlYXR1cmVQcm9qZWN0aW9uIiwicmVhZEZlYXR1cmVzIiwiZ2V0U291cmNlIiwiZm9yRWFjaEZlYXR1cmUiLCJqc29uRmVhdHVyZSIsInNldEdlb21ldHJ5IiwiQ2lyY2xlIiwiZ2V0R2VvbWV0cnkiLCJnZXRDb29yZGluYXRlcyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGlvbiIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsImdldFJhbmdlQXQiLCJzdGFydENvbnRhaW5lciIsImNoaWxkTm9kZXMiLCJzZXRTdGFydCIsInNldEVuZCIsInJlbW92ZVJhbmdlIiwiYWRkUmFuZ2UiLCJzdGFydE9mZnNldCIsImlubmVyVGV4dCIsImFyckZlYXR1cmVzIiwic3RyaW5naWZ5IiwicHJvcGVydGllcyIsImZlYXR1cmVJZCIsInNwbGljZSIsIm9iakdlb2pzb24iLCJDTE9TRSIsImluZGV4IiwidG9VcHBlckNhc2UiLCJlZGl0b3JWYXJzIiwidXBkYXRlRmVhdHVyZXMiLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsImhlaWdodCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==