/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	    con4gis
 * @version         6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	    Küstenschmiede GmbH Software & Design
 * @link            https://www.con4gis.org
 *
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {StarboardLayerswitcher} from "./c4g-starboard-layerswitcher";

export class StarboardPanel extends Component {

    constructor(props) {
        super(props);
        const scope = this;
        // create control to toggle the panel
        let element = document.createElement('div');
        let button = document.createElement('button');
        element.className = "c4g-sideboard c4g-starboard-control ol-unselectable ol-control c4g-close";
        element.appendChild(button);
        jQuery(button).on('click', function(event) {
            if (scope.state.open) {
                scope.close();
            } else {
                scope.open();
            }
        });
        let mapController = props.mapController;
        let control = new Control({element: element, target: props.target});
        mapController.controls.horizontalPanel = control;
        mapController.map.addControl(control);

        // state variables (every property that has influence on this component)
        this.state = {
            // either "top" or "bottom"
            direction: props.direction || "right",
            open: props.open || false,
            className: props.className || "c4g-starboard-panel",
            childs: props.childs || [],
            control: control
        };
    }

    render() {
        let className = this.state.className + "-" + this.state.direction;
        className += " " + (this.state.open ? "c4g-open" : "c4g-close");
        const scope = this;
        return (
            <StarboardLayerswitcher key={this.props.mapController.id} mapController ={this.props.mapController}></StarboardLayerswitcher>
        )
    }

    open() {
        // this.setState({open: true});
        this.state.open = true;
        this.slideOutCollidingElements();
    }

    close() {
        // this.setState({open: false});
        this.state.open = false;
        this.slideInCollidingElements();
    }

    /**
     * Moves the buttons that would collide with the panel.
     */
    slideOutCollidingElements() {
        const scope = this;
        if (this.state.direction === "right") {
            let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TR + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.right = "240px";
            });
            this.state.control.element.style.right = "240px";
            elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BR + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.right = "240px";
            });
            jQuery(".c4g-starboard-container").css("right","0%");
            this.state.control.element.style.right = "240px";
        } else {
            let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TL + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.left = "240px";
            });
            elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BL + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.left = "240px";
            });
            // let topValue = this.props.mapController.map.getSize()[1] - 100;
            // jQuery(this.state.control.element).style.top = topValue + "px";
            jQuery(this.state.control.element).addClass("panel-slided-out").removeClass("panel-slided-in");
        }

    }

    /**
     * Undoes the previous button movement.
     */
    slideInCollidingElements() {
        const scope = this;
        if (this.state.direction === "right") {
            let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TR + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.right = "0px";
            });
            elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BR + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.right = "0px";
            });
            jQuery(".c4g-starboard-container").css("right","-100%");
            this.state.control.element.style.right = "0px";
        } else {
            let elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_TL + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.left = "0px";
            });
            elements = document.querySelectorAll('.' + cssConstants.CONTROL_CONTAINER_BL + ' .' + cssConstants.OL_UNSELECTABLE);
            elements.forEach(function(element) {
                element.style.left = "0px";
            });
            // this.state.control.element.style.top = this.props.mapController.map.getSize()[1] + "px";
            jQuery(this.state.control.element).addClass("panel-slided-in").removeClass("panel-slided-out")
        }
    }
}
