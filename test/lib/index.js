'use strict'

window.Simulator = require('simulator')
window.chai = require('chai')
window.sinon = require('sinon')
window.sinonChai = require('sinon-chai')
window.expect = chai.expect
chai.use(sinonChai)

window.el = document.querySelector('#fixture')

module.exports = {
  flavours: require('./flavours'),
  test: require('./test')
}
