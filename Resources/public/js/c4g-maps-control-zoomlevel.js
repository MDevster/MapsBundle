import {cssConstants} from "./c4g-maps-constant";

'use strict';
export class Zoomlevel extends ol.control.Control {
  constructor(options) {
    super(options);
    var self,
      element,
      updateZoomlevel;

    self = this;

    if (!options || !options.mapView) {
      console.warn('Zoomlevel control needs to know the map.');
      return false;
    }

    // default options
    options = $.extend({
      className: cssConstants.ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);

    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = options.mapView.getZoom();

    updateZoomlevel = function () {
      element.innerHTML = parseInt(options.mapView.getZoom());
    };

    options.mapView.on('change:resolution', updateZoomlevel);

    // inheritance-stuff
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  }
}

