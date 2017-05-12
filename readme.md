# simulator [![npm][npm-image]][npm-url] [![size][size-image]][size-url] [![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/simulator.svg?style=flat
[npm-url]: https://npmjs.org/package/simulator
[size-image]: https://img.shields.io/badge/size-1.3kb-brightgreen.svg?style=flat
[size-url]: https://raw.githubusercontent.com/ngryman/simulator/master/dist/simulator.min.js
[travis-image]: https://img.shields.io/travis/ngryman/simulator.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/simulator

> Mouse and touch events simulator

[![sauce][sauce-image]][sauce-url]
[sauce-image]: https://saucelabs.com/browser-matrix/oss-simulator.svg
[sauce-url]: https://saucelabs.com/u/oss-simulator


## Install

```
$ npm install --save-dev simulator
```


## Usage

```js
var Simulator = require('simulator')

// simulate tap
Simulator.tap()
Simulator.tap({ duration: 100 })

// simulate double tap
Simulator.doubleTap()
Simulator.doubleTap({ duration: 200 })

// simulate press
Simulator.press()
Simulator.press({ duration: 300 })

// simulate press (100 pixels to the right by default)
Simulator.swipe()
Simulator.swipe({ to: [100, 100] })

// position the simulator
Simulator.position(10, 10).tap()

// supports promises
Simulator.tap().then(Simulator.press)

// ...but also callbacks
Simulator.tap(Simulator.press)
```


## License

MIT © [Nicolas Gryman](http://ngryman.sh)
