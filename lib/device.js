'use strict'

/**
 * [Device description]
 * @type {Object}
 */
var Device = {
  x: 0,
  y: 0,

  trigger: function(type) {
    var el = document.elementFromPoint(this.x, this.y)
      , e

    if ('MouseEvent' in window && 'function' === typeof MouseEvent) {
      e = new MouseEvent(type, {
        view: window,
        bubbles: true,
        cancelable: true,
        screenX: this.x,
        screenY: this.y,
        clientX: this.x,
        clientY: this.y
      })
    }
    else {
      e = document.createEvent('MouseEvents')
      e.initMouseEvent(
        type, true, true, window, null, this.x, this.y, this.x, this.y,
        false, false, false, false, 0, null
      )
    }

    el.dispatchEvent(e)
  }
}

/** Exports. */
module.exports = Device
