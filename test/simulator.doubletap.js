'use strict'

var devices = require('./lib').devices
  , flavours = require('./lib').flavours
  , test = require('./lib').test

describe('Simulator.doubleTap', function() {
  before(function() {
    Simulator.doubleTapDuration = 25
  })

  devices(function(name, events) {
    flavours(function(usePromise) {
      it('triggers ' + events.down + ' 2 times', test(Simulator.doubleTap, function(spies) {
        expect(spies.down).to.have.been.calledTwice.and.calledOn(el)
      }, {}, usePromise))

      it('triggers ' + events.up + ' 2 times', test(Simulator.doubleTap, function(spies) {
        expect(spies.up).to.have.been.calledTwice.and.calledOn(el)
      }, {}, usePromise))

      it('interleaves ' + events.down + ' and ' + events.up + '', test(Simulator.doubleTap, function(spies) {
        expect(spies.down.args[0][0].timeStamp).to.be.at.most(spies.up.args[0][0].timeStamp)
        expect(spies.up.args[0][0].timeStamp).to.be.below(spies.down.args[1][0].timeStamp)
        expect(spies.down.args[1][0].timeStamp).to.be.at.most(spies.up.args[1][0].timeStamp)
      }, {}, usePromise))

      it('can delay second tap', test(Simulator.doubleTap, function(spies, timers) {
        expect(Date.now() - timers.before).to.be.at.least(50)
        expect(spies.down).to.have.been.called.and.calledOn(el)
      }, { duration: 50 }, usePromise))

      it('can trigger at specific coordinates', test(function() {
        return Simulator.position(10, 10).doubleTap.apply(null, arguments)
      }, function(spies) {
        expect(spies.down.args[0][0].screenX).to.equal(10)
        expect(spies.down.args[0][0].screenY).to.equal(10)
        expect(spies.down.args[0][0].clientX).to.equal(10)
        expect(spies.down.args[0][0].clientY).to.equal(10)
      }, {}, usePromise))
    })
  })
})
