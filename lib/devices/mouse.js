'use strict'

var MouseDevice = Object.create(require('simulator/device'))

MouseDevice.events = {
  down: 'mousedown',
  up: 'mouseup',
  move: 'mousemove'
}

/**
 * Simulate a down event.
 */
MouseDevice.down = MouseDevice.trigger.bind(MouseDevice, MouseDevice.events.down)

/**
 * Simulate a up event.
 */
MouseDevice.up = MouseDevice.trigger.bind(MouseDevice, MouseDevice.events.up)

/**
 * Simulate a move event.
 */
MouseDevice.move = MouseDevice.trigger.bind(MouseDevice, MouseDevice.events.move)


/** Exports. */
module.exports = MouseDevice
