'use strict'

var devices = require('./lib').devices
  , flavours = require('./lib').flavours
  , test = require('./lib').test

describe('Simulator.tap', function() {
  devices(function(eventsMap) {
    flavours(function() {
      it('triggers ' + eventsMap.down, test(Simulator.tap, function(spies) {
        expect(spies.down).to.have.been.called.and.calledOn(el)
      }))

      it('triggers ' + eventsMap.up, test(Simulator.tap, function(spies) {
        expect(spies.up).to.have.been.called.and.calledOn(el)
      }))

      it('triggers ' + eventsMap.up + ' after ' + eventsMap.down, test(Simulator.tap, function(spies) {
        expect(spies.down).to.have.been.called.and.calledOn(el)
        expect(spies.up).to.have.been.called.and.calledOn(el)
        expect(spies.down).to.have.been.calledBefore(spies.up)
      }))

      it('can delay ' + eventsMap.up + 'event', test(Simulator.tap, function(spies, timers) {
        expect(Date.now() - timers.before).to.be.at.least(50)
        expect(spies.up).to.have.been.called.and.calledOn(el)
      }, { duration: 50 }))

      it('can trigger at specific coordinates', test(function() {
        return Simulator.position(10, 10).tap.apply(null, arguments)
      }, function(spies) {
        expect(spies.down.args[0][0].screenX).to.equal(10)
        expect(spies.down.args[0][0].screenY).to.equal(10)
        expect(spies.down.args[0][0].clientX).to.equal(10)
        expect(spies.down.args[0][0].clientY).to.equal(10)
      }))
    })
  })
})
