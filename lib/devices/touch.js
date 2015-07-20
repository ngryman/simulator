'use strict'

var TouchDevice = Object.create(require('simulator/device'))

TouchDevice.events = {
  down: 'touchstart',
  up: 'touchend',
  move: 'touchmove'
}

/**
 * Simulate a down event.
 */
TouchDevice.down = TouchDevice.trigger.bind(TouchDevice, TouchDevice.events.down)

/**
 * Simulate a up event.
 */
TouchDevice.up = TouchDevice.trigger.bind(TouchDevice, TouchDevice.events.up)

/**
 * Simulate a move event.
 */
TouchDevice.move = TouchDevice.trigger.bind(TouchDevice, TouchDevice.events.move)

/**
 * Check for support.
 */
 Object.defineProperty(TouchDevice, 'supported', {
   get: function() { return ('ontouchstart' in window) }
 })

/** Exports. */
module.exports = TouchDevice
