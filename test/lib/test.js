'use strict'

module.exports = function test(fn, asserts, options, promise) {
  function before() {
    var spies = 'down move up'.split(' ').reduce(function(res, type) {
      res[type] = sinon.spy()
      return res
    }, {})

    for (var k in spies) {
      el.addEventListener(test.device.eventsMap[k], spies[k])
    }

    var timers = {
      before: Date.now()
    }

    asserts = asserts.bind(null, spies, timers)
  }

  function after() {
    el.parentNode.replaceChild(el.cloneNode(), el)
    el = document.querySelector('#fixture')
  }

  // if (promise) {
  //   return function() {
  //     before()
  //     return fn(options).then(asserts).then(after)
  //   }
  // }

  return function(done) {
    before()
    fn(options, function() {
      asserts()
      after()
      done()
    })
  }
}
