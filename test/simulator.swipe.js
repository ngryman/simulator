'use strict'

var devices = require('./lib').devices
  , flavours = require('./lib').flavours
  , test = require('./lib').test

describe('Simulator.swipe', function() {
  before(function() {
    Simulator.swipeDuration = 25
  })

  devices(function(eventsMap) {
    flavours(function() {
      it('triggers ' + eventsMap.down, test(Simulator.swipe, function(spies) {
        expect(spies.down).to.have.been.called.and.calledOn(el)
      }))

      it('triggers ' + eventsMap.move, test(Simulator.swipe, function(spies) {
        expect(spies.move).to.have.been.called.and.calledOn(el)
      }))

      it('triggers ' + eventsMap.up, test(Simulator.swipe, function(spies) {
        expect(spies.up).to.have.been.called.and.calledOn(el)
      }))

      it('trigger ' + eventsMap.down + ', ' + eventsMap.move + ' then ' + eventsMap.up, test(Simulator.swipe, function(spies) {
        expect(spies.down).to.have.been.called.and.calledOn(el)
        expect(spies.move).to.have.been.called.and.calledOn(el)
        expect(spies.up).to.have.been.called.and.calledOn(el)
        expect(spies.down).to.have.been.calledBefore(spies.move)
        expect(spies.move).to.have.been.calledBefore(spies.up)
      }))

      it('can take a given duration', test(Simulator.swipe, function(spies, timers) {
        expect(Date.now() - timers.before).to.be.at.least(50)
        expect(spies.down).to.have.been.called.and.calledOn(el)
      }, { duration: 50 }))

      it('can start at specific coordinates', test(function() {
        return Simulator.position(10, 10).swipe.apply(null, arguments)
      }, function(spies) {
        expect(spies.down.args[0][0].screenX).to.equal(10)
        expect(spies.down.args[0][0].screenY).to.equal(10)
        expect(spies.down.args[0][0].clientX).to.equal(10)
        expect(spies.down.args[0][0].clientY).to.equal(10)
      }))

      it('can end at specific coordinates', test(Simulator.swipe, function(spies) {
        expect(spies.up.args[0][0].screenX).to.equal(100)
        expect(spies.up.args[0][0].screenY).to.equal(100)
        expect(spies.up.args[0][0].clientX).to.equal(100)
        expect(spies.up.args[0][0].clientY).to.equal(100)
      }, { to: [100, 100] }))
    })
  })
})
