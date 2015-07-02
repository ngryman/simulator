'use strict'

require('./lib')

describe('Device.trigger', function() {
  it('bubbles up', function() {
    var bodySpy = sinon.spy()
      , elSpy = sinon.spy()

    document.body.addEventListener('mousedown', bodySpy)
    el.addEventListener('mousedown', elSpy)

    Simulator.devices.mouse.down()

    expect(bodySpy).to.have.been.calledOn(document.body)
    expect(elSpy).to.have.been.calledOn(el)
    expect(elSpy).to.have.been.calledBefore(bodySpy)
  })

  it('trickles down', function() {
    var bodySpy = sinon.spy()
      , elSpy = sinon.spy()

    document.body.addEventListener('mousedown', bodySpy, true)
    el.addEventListener('mousedown', elSpy, true)

    Simulator.devices.mouse.down()

    expect(bodySpy).to.have.been.calledOn(document.body)
    expect(elSpy).to.have.been.calledOn(el)
    expect(bodySpy).to.have.been.calledBefore(elSpy)
  })
})
