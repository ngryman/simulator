'use strict'

var test = require('./test')

module.exports = function flavours(callback) {
  // if ('Promise' in window) {
  //   test.promise = true
  //   context('with promise flavour', callback)
  // }
  test.promise = false
  context('with callback flavour', callback)
}
