'use strict'

function chain() {
  var queue = [].slice.call(arguments)

  var sequence = queue.reduceRight(function(prevAction, action) {
    var delay = 'number' === typeof action ? action : 0
    return function() {
      if (!delay && action) action()
      if (prevAction) {
        if (delay) setTimeout(prevAction, delay); else prevAction()
      }
    }
  })

  sequence()
}

module.exports = function exec(queue) {
  if (!Array.isArray(queue)) {
    queue = [].slice.call(arguments)
  }

  if ('undefined' !== typeof Promise) {
    return new Promise(function(resolve) {
      queue.push(resolve)
      chain.apply(0, queue)
    })
  }

  chain.apply(0, queue)
}
