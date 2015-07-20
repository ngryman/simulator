'use strict'

var Simulator = require('Simulator')

module.exports = function devices(callback) {
  Object.getOwnPropertyNames(Simulator.devices).forEach(function(name) {
    context('given ' + name + ' device', callback.bind(null, name, Simulator.device.events))
  })
}
