'use strict'

var MouseDevice = Object.create(require('simulator/device'))

MouseDevice.eventsMap = {
  down: 'mousedown',
  up: 'mouseup',
  move: 'mousemove'
}

/**
 * Simulate a down event.
 */
MouseDevice.down = MouseDevice.trigger.bind(MouseDevice, MouseDevice.eventsMap.down)

/**
 * Simulate a up event.
 */
MouseDevice.up = MouseDevice.trigger.bind(MouseDevice, MouseDevice.eventsMap.up)

/**
 * Simulate a move event.
 */
MouseDevice.move = MouseDevice.trigger.bind(MouseDevice, MouseDevice.eventsMap.move)


/** Exports. */
module.exports = MouseDevice
