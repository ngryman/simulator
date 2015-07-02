'use strict'

var Simulator = require('Simulator')
  , test = require('./test')

module.exports = function devices(callback) {
  Object.getOwnPropertyNames(Simulator.devices).forEach(function(name) {
    Simulator.device = name
    test.device = Simulator.device
    context('given ' + name + ' device', callback.bind(null, Simulator.device.eventsMap))
  })
}
