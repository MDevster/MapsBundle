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

import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {StarboardLayerswitcher} from "./c4g-starboard-layerswitcher";
import {getLanguage} from "./../c4g-maps-i18n";

export class BaselayerSwitcher extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    // create control to toggle the panel
    let element = document.createElement('div');
    let button = document.createElement('button');
    let langConstants = getLanguage(props.mapController.data);
    button.title = "Basiskartenwechsler ein-/ausschalten"; // TODO i18n
    element.className = "c4g-baselayer-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    let mapController = props.mapController;
    let control = new Control({element: element, target: props.target});
    mapController.mapsControls.controls.baselayerSwitcher = control;
    mapController.map.addControl(control);
    this.open = this.open.bind(this);
    this.resizeFunction = this.resizeFunction.bind(this);
    let baselayerLoaded = false;
    if (props.mapController.proxy.baselayerLoaded) {
      baselayerLoaded = true;
    } else {
      props.mapController.proxy.hook_baselayer_loaded = props.mapController.proxy.hook_baselayer_loaded || [];
      props.mapController.proxy.hook_baselayer_loaded.push(function() {
        scope.setState({baselayerLoaded: true, currentBaselayer: props.mapController.proxy.activeBaselayerId});
      });
    }
    // state variables (every property that has influence on this component)
    this.state = {
      open: props.open || false,
      className: props.className || "c4g-baselayerswitcher-panel",
      control: control,
      baselayerLoaded: baselayerLoaded,
      currentBaselayer: 0
    };
  }

  componentDidMount() {

  }

  render() {
    let arrBaselayers = this.props.baselayerController.arrBaselayers;
    let className = this.state.className;
    className += " " + (this.state.open ? "c4g-open" : "c4g-close");
    if (this.state.open) {
      jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
      jQuery(".c4g-baselayer-container").addClass("c4g-open").removeClass("c4g-close");
    } else {
      jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
      jQuery(".c4g-baselayer-container").removeClass("c4g-open").addClass("c4g-close");
    }
    const scope = this;
    return (
      <div className={"c4g-baselayer-wrapper"}>
        <div className={"contentHeadline"}>Basiskarten</div>
        <div className={"c4g-baselayertree"}>
          <ul>
            {Object.keys(arrBaselayers).map(function(element, index) {
              let baselayer = arrBaselayers[element];
              let currentCls = scope.state.currentBaselayer === element ? "c4g-active" : "c4g-inactive";
              return (<li key={element}>
                <a onMouseUp={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    scope.entryClick(element);
                  }
                } className={currentCls}>{baselayer.name}</a>
              </li>);
            })}
          </ul>
        </div>
      </div>
    )
  }

  entryClick(id) {
    this.props.baselayerController.showBaseLayer(id);
    this.setState({currentBaselayer: id});
  }

  open() {
    this.setState({open: true});
    this.props.mapController.setOpenComponent(this);

  }

  close() {
    this.setState({open: false});
  }

  resizeFunction() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }
}