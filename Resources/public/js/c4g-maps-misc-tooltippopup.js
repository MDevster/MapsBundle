import {cssConstants} from "./c4g-maps-constant";
'use strict';
export class TooltipPopUp {


  /**
   * @TODO
   * [TooltipPopUp description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  constructor (opt_options) {

    var self,
      addClassName,
      closeButton;

    self = this;
    this.options = opt_options || {};

    // default options
    this.options = $.extend({
      // className: ''
      // closeFunction: null
      // map: null
      horizontal: false,
      closeable: false,
      offset: [1, -1],
      position: [0, 0]
    }, this.options);

    // prepare additional classes
    addClassName = '';
    if (this.options.className) {
      addClassName = ' ' + this.options.className;
    }
    if (this.options.horizontal) {
      addClassName += ' ' + cssConstants.HORIZONTAL;
    }
    if (this.options.closeable) {
      addClassName += ' ' + cssConstants.CLOSEABLE;
    }

    this.element = document.createElement('div');
    this.element.className = cssConstants.TOOLTIP_POPUP + addClassName;

    if (this.options.closeable) {
      closeButton = document.createElement('button');
      closeButton.className = cssConstants.ICON + ' ' + cssConstants.POPUP_CLOSE;
      this.element.appendChild(closeButton);

      $(closeButton).click(function () {
        self.close();
      });
    }

    this.contentContainer = document.createElement('div');
    this.element.appendChild(this.contentContainer);

    this.overlay = new ol.Overlay({
      element: this.element,
      insertFirst: false,
      offset: this.options.offset,
      positioning: 'bottom-left'
    });

    if (this.options.map) {
      this.options.map.addOverlay(this.overlay);
    }

    if (this.options.position) {
      this.overlay.setPosition(this.options.position);
    }
  }

  close () {
    if (typeof this.options.closeFunction === 'function') {
      this.options.closeFunction();
    }

    if (this.options.map) {
      this.options.map.removeOverlay(this.overlay);
    }
  }

  /**
   * @TODO
   * [show description]
   *
   * @return  {[type]}  [description]
   */
  show () {
    if ($(this.element).hasClass(cssConstants.HIDE)) {
      $(this.element).removeClass(cssConstants.HIDE);
    }
  }

  /**
   * @TODO
   * [hide description]
   *
   * @return  {[type]}  [description]
   */
  hide () {
    if (!$(this.element).hasClass(cssConstants.HIDE)) {
      $(this.element).addClass(cssConstants.HIDE);
    }
  }

  /**
   * @TODO
   * [getContent description]
   *
   */
  getContent () {
    return this.contentContainer.innerHTML;
  }

  /**
   * @TODO
   * [getPosition description]
   *
   */
  getPosition () {
    return this.overlay.getPosition();
  }

  /**
   * @TODO
   * [setContent description]
   *
   * @param  {[type]}  content  [description]
   */
  setContent (content) {
    this.contentContainer.innerHTML = content;
  }

  /**
   * @TODO
   * [setPosition description]
   *
   * @param  {[type]}  coordinates  [description]
   */
  setPosition (coordinates) {
    this.overlay.setPosition(coordinates);
  }

} // End of "add methods to TooltipPopUp"
