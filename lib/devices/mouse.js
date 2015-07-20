'use strict'

var MouseDevice = Object.create(require('simulator/device'))

/**
 * Simulate a down event.
 */
MouseDevice.down = MouseDevice.trigger.bind(MouseDevice, 'mousedown')

/**
 * Simulate a up event.
 */
MouseDevice.up = MouseDevice.trigger.bind(MouseDevice, 'mouseup')

/**
 * Simulate a move event.
 */
MouseDevice.move = MouseDevice.trigger.bind(MouseDevice, 'mousemove')

/** Exports. */
module.exports = MouseDevice
