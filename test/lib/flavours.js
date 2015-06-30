'use strict'

module.exports = function flavours(tests) {
  if ('Promise' in window)
    context('with promise flavour', tests)
  context('with callback flavour', tests.bind(null, true))
}
