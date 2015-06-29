'use strict'

var Simulator = require('simulator')

describe('Simulator.doubleTap', function() {
  before(function() {
    Simulator.doubleTapDuration = 25
  })

  it('triggers mousedown 2 times', test(Simulator.doubleTap, function(spies) {
    expect(spies.down).to.have.been.calledTwice.and.calledOn(el)
  }))

  it('triggers mouseup 2 times', test(Simulator.doubleTap, function(spies) {
    expect(spies.up).to.have.been.calledTwice.and.calledOn(el)
  }))

  it('interleaves mousedown and mouseup', test(Simulator.doubleTap, function(spies) {
    expect(spies.down.args[0][0].timeStamp).to.be.at.most(spies.up.args[0][0].timeStamp)
    expect(spies.up.args[0][0].timeStamp).to.be.below(spies.down.args[1][0].timeStamp)
    expect(spies.down.args[1][0].timeStamp).to.be.at.most(spies.up.args[1][0].timeStamp)
  }))

  it('can delay second tap', test(Simulator.doubleTap, function(spies, timers) {
    expect(Date.now() - timers.before).to.be.at.least(50)
    expect(spies.down).to.have.been.called.and.calledOn(el)
  }, { duration: 50 }))

  it('can trigger at specific coordinates', test(function() {
    return Simulator.position(10, 10).doubleTap()
  }, function(spies) {
    expect(spies.down.args[0][0].screenX).to.equal(10)
    expect(spies.down.args[0][0].screenY).to.equal(10)
    expect(spies.down.args[0][0].clientX).to.equal(10)
    expect(spies.down.args[0][0].clientY).to.equal(10)
  }))
})
