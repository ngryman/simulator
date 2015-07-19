'use strict'

module.exports = function flavours(callback) {
  // if ('Promise' in window) {
  //   test.promise = true
  //   context('with promise flavour', callback)
  // }
  context('with callback flavour', callback.bind(null, false))
}
