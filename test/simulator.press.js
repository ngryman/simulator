'use strict'

var flavours = require('./lib').flavours
  , test = require('./lib').test

describe('Simulator.press', function() {
  before(function() {
    Simulator.pressDuration = 25
  })

  flavours(function(usePromise) {
    it('triggers mousedown', test(Simulator.press, function(spies) {
      expect(spies.down).to.have.been.called.and.calledOn(el)
    }, {}, usePromise))

    it('triggers mouseup', test(Simulator.press, function(spies) {
      expect(spies.up).to.have.been.called.and.calledOn(el)
    }, {}, usePromise))

    it('triggers mouseup after mousedown', test(Simulator.press, function(spies) {
      expect(spies.down).to.have.been.called.and.calledOn(el)
      expect(spies.up).to.have.been.called.and.calledOn(el)
      expect(spies.down).to.have.been.calledBefore(spies.up)
    }, {}, usePromise))

    it('can delay mouseup event', test(Simulator.press, function(spies, timers) {
      expect(Date.now() - timers.before).to.be.at.least(50)
      expect(spies.down).to.have.been.called.and.calledOn(el)
    }, { duration: 50 }, usePromise))

    it('can trigger at specific coordinates', test(function() {
      return Simulator.position(10, 10).press.apply(null, arguments)
    }, function(spies) {
      expect(spies.down.args[0][0].screenX).to.equal(10)
      expect(spies.down.args[0][0].screenY).to.equal(10)
      expect(spies.down.args[0][0].clientX).to.equal(10)
      expect(spies.down.args[0][0].clientY).to.equal(10)
    }, {}, usePromise))
  })
})
