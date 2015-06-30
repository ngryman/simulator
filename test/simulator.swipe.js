'use strict'

var flavours = require('./lib').flavours
  , test = require('./lib').test

describe('Simulator.swipe', function() {
  before(function() {
    Simulator.swipeDuration = 25
  })

  flavours(function(usePromise) {
    it('triggers mousedown', test(Simulator.swipe, function(spies) {
      expect(spies.down).to.have.been.called.and.calledOn(el)
    }, {}, usePromise))

    it('triggers mousemove', test(Simulator.swipe, function(spies) {
      expect(spies.move).to.have.been.called.and.calledOn(el)
    }, {}, usePromise))

    it('triggers mouseup', test(Simulator.swipe, function(spies) {
      expect(spies.up).to.have.been.called.and.calledOn(el)
    }, {}, usePromise))

    it('trigger mousedown, mosemove then mousedown', test(Simulator.swipe, function(spies) {
      expect(spies.down).to.have.been.called.and.calledOn(el)
      expect(spies.move).to.have.been.called.and.calledOn(el)
      expect(spies.up).to.have.been.called.and.calledOn(el)
      expect(spies.down).to.have.been.calledBefore(spies.move)
      expect(spies.move).to.have.been.calledBefore(spies.up)
    }, {}, usePromise))

    it('can take a given duration', test(Simulator.swipe, function(spies, timers) {
      expect(Date.now() - timers.before).to.be.at.least(50)
      expect(spies.down).to.have.been.called.and.calledOn(el)
    }, { duration: 50 }, usePromise))

    it('can start at specific coordinates', test(function() {
      return Simulator.position(10, 10).swipe.apply(null, arguments)
    }, function(spies) {
      expect(spies.down.args[0][0].screenX).to.equal(10)
      expect(spies.down.args[0][0].screenY).to.equal(10)
      expect(spies.down.args[0][0].clientX).to.equal(10)
      expect(spies.down.args[0][0].clientY).to.equal(10)
    }, {}, usePromise))

    it('can end at specific coordinates', test(Simulator.swipe, function(spies) {
      expect(spies.up.args[0][0].screenX).to.equal(100)
      expect(spies.up.args[0][0].screenY).to.equal(100)
      expect(spies.up.args[0][0].clientX).to.equal(100)
      expect(spies.up.args[0][0].clientY).to.equal(100)
    }, { to: [100, 100] }, usePromise))
  })
})
