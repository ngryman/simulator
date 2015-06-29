'use strict'

/**
 * [defaults description]
 * @param  {[type]} options [description]
 * @param  {[type]} source  [description]
 * @return {[type]}         [description]
 */
function defaults(options, source) {
  options = options || {}
  for (var k in source) {
    if (undefined === options[k] && source.hasOwnProperty(k)) {
      options[k] = source[k]
    }
  }
  return options
}

/** Exports. */
module.exports = {
  defaults: defaults
}
