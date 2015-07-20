'use strict'

var exec = require('./exec')
  , defaults = require('object-defaults')
  , devices = require('./devices')

var device = devices.mouse

/**
 * Simulator.
 */
var Simulator = {
  tapDuration: 0,
  doubleTapDuration: 300,
  pressDuration: 300,
  swipeDuration: 300,
  autoReset: [0, 0],
  devices: devices
}

/**
 * Simulate a tap event.
 *
 * @param  {object}   [options] [description]
 * @param  {Function} done      [description]
 * @return {[type]}             [description]
 */
Simulator.tap = function(options, done) {
  if ('function' === typeof options) done = options
  options = defaults(options, { duration: Simulator.tapDuration })

  return exec(device.down, options.duration, device.up, Simulator.reset, done)
}

/**
 * Simulate a double tap event.
 *
 * @param  {[type]}   [options] [description]
 * @param  {Function} done      [description]
 * @return {[type]}             [description]
 */
Simulator.doubleTap = function(options, done) {
  if ('function' === typeof options) done = options
  options = defaults(options, { duration: Simulator.doubleTapDuration })

  return exec(
    device.down, device.up, options.duration, device.down, device.up, Simulator.reset, done
  )
}

/**
 * Simulate a press event.
 *
 * @param  {[type]}   [options] [description]
 * @param  {Function} done      [description]
 * @return {[type]}             [description]
 */
Simulator.press = function(options, done) {
  if ('function' === typeof options) done = options
  options = defaults(options, { duration: Simulator.pressDuration })

  return Simulator.tap(options, done)
}

/**
 * Simulate a swipe event.
 *
 * @param  {[type]}   [options] [description]
 * @param  {Function} done      [description]
 * @return {[type]}             [description]
 */
Simulator.swipe = function(options, done) {
  if ('function' === typeof options) done = options
  options = defaults(options, {
    duration: Simulator.swipeDuration,
    iterations: 10,
    to: [device.x + 100, device.y]
  })

  var start = [device.x, device.y]
    , queue = [device.down]

  for (var i = 0; i < options.iterations; i++) {
    queue.push(Simulator.position.bind(Simulator,
      ((i + 1) / options.iterations) * (options.to[0] - start[0]),
      ((i + 1) / options.iterations) * (options.to[1] - start[1]))
    )
    queue.push(device.move)
    queue.push(options.duration / options.iterations)
  }
  queue = queue.concat([device.up, Simulator.reset, done])

  return exec(queue)
}

/**
 * Position simulator to given coordinates.
 * It does not trigger any gesture.
 *
 * @param  {[type]} x [description]
 * @param  {[type]} y [description]
 * @return {[type]}   [description]
 */
Simulator.position = function(x, y) {
  device.x = x
  device.y = y
  return this
}

/**
 * Reset simulator to initial state.
 *
 * @return {[type]} [description]
 */
Simulator.reset = function() {
  if (Simulator.autoReset) {
    Simulator.position.apply(Simulator, Simulator.autoReset)
  }
  return this
}

/** Exports. */
module.exports = Simulator
