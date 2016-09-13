/*! front.js - polyfill, (c) Damir Sultanov - http://fronteed.com, http://git.io/vi0x1 */

// Object.assign() polyfill
if (!Object.assign) {
  Object.assign = function assign (target) {
    for (var index = 1, key, src; index < arguments.length; ++index) {
      src = arguments[index]

      for (key in src) {
        if (Object.prototype.hasOwnProperty.call(src, key)) {
          target[key] = src[key]
        }
      }
    }

    return target
  }
}
