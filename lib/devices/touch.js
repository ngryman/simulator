'use strict'

var TouchDevice = Object.create(require('simulator/device'))

TouchDevice.eventsMap = {
  down: 'touchstart',
  up: 'touchend',
  move: 'touchmove'
}

/**
 * Simulate a down event.
 */
TouchDevice.down = TouchDevice.trigger.bind(TouchDevice, TouchDevice.eventsMap.down)

/**
 * Simulate a up event.
 */
TouchDevice.up = TouchDevice.trigger.bind(TouchDevice, TouchDevice.eventsMap.up)

/**
 * Simulate a move event.
 */
TouchDevice.move = TouchDevice.trigger.bind(TouchDevice, TouchDevice.eventsMap.move)

/** Exports. */
module.exports = TouchDevice
