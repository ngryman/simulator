'use strict'

var TouchDevice = Object.create(require('simulator/device'))

TouchDevice.eventsMap = {
  down: 'touchstart',
  move: 'touchmove',
  up: 'touchend'
}

/**
 * Simulate a down event.
 */
TouchDevice.down = TouchDevice.trigger.bind(TouchDevice, 'touchstart')

/**
 * Simulate a move event.
 */
TouchDevice.move = TouchDevice.trigger.bind(TouchDevice, 'touchmove')

/**
 * Simulate a up event.
 */
TouchDevice.up = TouchDevice.trigger.bind(TouchDevice, 'touchend')

/** Exports. */
module.exports = TouchDevice
