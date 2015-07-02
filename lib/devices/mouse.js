'use strict'

var TouchDevice = Object.create(require('simulator/device'))

TouchDevice.eventsMap = {
  down: 'mousedown',
  move: 'mousemove',
  up: 'mouseup'
}

/**
 * Simulate a down event.
 */
TouchDevice.down = TouchDevice.trigger.bind(TouchDevice, 'mousedown')

/**
 * Simulate a move event.
 */
TouchDevice.move = TouchDevice.trigger.bind(TouchDevice, 'mousemove')

/**
 * Simulate a up event.
 */
TouchDevice.up = TouchDevice.trigger.bind(TouchDevice, 'mouseup')

/** Exports. */
module.exports = TouchDevice
