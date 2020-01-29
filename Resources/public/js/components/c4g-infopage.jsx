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
import {Titlebar} from "./c4g-titlebar.jsx";
import {getLanguage} from "../c4g-maps-i18n";
import {Control} from "ol/control";

export class Infopage extends Component {

  constructor(props) {
    super(props);

    const scope = this;
    // create control to toggle the panel
    let element = document.createElement('div');
    let button = document.createElement('button');
    let langConstants = getLanguage(props.mapController.data);
    button.title = "Infobereich öffnen/schließen"; // TODO i18n
    element.className = "c4g-infopage-control ol-unselectable ol-control ";
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
    mapController.mapsControls.controls.infoPage = control;
    mapController.map.addControl(control);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.state = {
      open: false,
      control: control
    }
  }

  render() {
    if (this.state.open) {
      jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
      jQuery(".c4g-infopage-container").addClass("c4g-open").removeClass("c4g-close");
    } else {
      jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
      jQuery(".c4g-infopage-container").removeClass("c4g-open").addClass("c4g-close");
    }
    return (
      <div className={"c4g-infopage-wrapper"}>
        <Titlebar wrapperClass={"c4g-infopage-header"} headerClass={"c4g-infopage-headline"}
                  header={"Informationen"} closeBtnClass={"c4g-titlebar-close"} closeBtnCb={this.close}>

        </Titlebar>
        <div className={"c4g-infopage-content"} dangerouslySetInnerHTML={{__html: this.props.infoContent}}>
        </div>
      </div>
    );
  }

  open() {
    this.setState({open: true});
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    this.setState({open: false});
  }

}