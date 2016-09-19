(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! front.js v0.0.1, (c) Damir Sultanov - http://fronteed.com, http://git.io/vi0x1 */

// require polyfills
require('classlist.js')
require('element-closest')
require('whatwg-fetch')

// require packages
// var domready = require('domready')
const dorm = require('dorm.js')

// require modules
require('./modules/front.lazy.js');require('./modules/front.modals.js');require('./modules/front.polyfill.js');require('./modules/front.svgsprite.js');

var Front = function () {
  if (window.front) {
    return
  }

  // devices cache
  this.device = dorm.init({
    prefix: 'app',
  })

  // dom cache
  this.dom = {
    html: document.documentElement,
    head: document.head,
  }

  // states cache
  this.states = {
    debug: true,
  }

  // selectors cache
  this.selectors = {
    loader: 'js-loader',
    slider: '.js-slider',
    sliderList: '.js-slider-list',
    sliderItem: '.js-slider-item',
    sliderDot: '.js-slider-dot',
    sliderPrev: '.js-slider-prev',
    sliderNext: '.js-slider-next',
    sliderArrow: '.js-slider-arrow',
    lazy: '.js-lazy',
    lazyLoader: '.js-lazy-loader',
    lazyHolder: '.js-lazy-holder',
  }

  // arbitrary cache
  this.cache = {
    loadedState: ['winload'],
  }

  // cache body
  this.domready(function () {
    this.dom.body = document.body
  })

  // detect domain
  this.url = window.location.href.split(/\?|#/g)[0]
  this.domain = window.location.protocol + '//' + window.location.host

  // js support
  this.dom.html.classList.remove('app-no-js')
  this.dom.html.classList.add('app-js')


  // launch modules
  this.modules()

  // start app loading
  this.loaded()

  // detect app loading
  this.onload(this.loaded)
}

// normalize property value
Front.prototype.parseProperty = function () {

}

// set and get module
Front.prototype.module = function (name, Module, options) {
  if (!this.modules) {
    this.modules = {}
  }

  // set
  if (Module) {
    if (typeof Module === 'function') {
      name = name.toLowerCase()
      this[options && options.onload ? 'onload' : 'onready'](function () {
        this.modules[name] = new Module()
      })
    }

  // get
  } else {
    if (this.modules[name]) {
      return this.modules[name]
    }
  }
}

// get module
Front.prototype.getModule = function () {

}

// set module
Front.prototype.setModule = function () {

}

// modules launcher
Front.prototype.modules = function () {
  if (Array.isArray(window.frontModules)) {
    for (var module in window.frontModules) {
      console.log(module)
      // if (object.hasOwnProperty(key)) {
      //   var element = object[key];
      // }
    }
  }
}


Front.prototype.getSelector = function (selector) {

}

Front.prototype.setSelector = function (selector, value) {

}

Front.prototype.getState = function () {

}

Front.prototype.setState = function () {

}

Front.prototype.getDom = function () {

}

Front.prototype.setDom = function () {

}

Front.prototype.getCache = function () {

}

Front.prototype.setCache = function () {

}

// if (typeof (state) === 'string') {
//     // set state
//     if (typeof (value) === 'boolean') {

//     // get state
//     } else {
//       return !!this.states[state]
//     }
//   }

// Front.prototype.applySelector = function () {

// }

// document.readyState listener
Front.prototype.domready = function (callback) {
  if (!this.cache.onready) {
    this.cache.onready = []
  }

  if (typeof (callback) === 'function') {
    if (this.state.domready) {
      callback.call(this)
    } else {
      this.cache.onready.push(callback)
    }
  }

  if (!this.cache.onreadyHandler && !this.state.domready) {
    this.cache.onreadyHandler = true
    domready(function (listener) {
      this.states.domready = true
      while (listener = this.cache.onready.shift()) listener.call(this)
    }.call(this))
  }
}

// window.onload listener
Front.prototype.onload = function (callback) {
  if (!this.cache.onload) {
    this.cache.onload = []
  }

  if (typeof (callback) === 'function') {

    if (this.states.winload) {
      callback.call(this)
    } else {
      this.cache.onload.push(callback)
    }
  }

  if (!this.cache.onloadHandler && !this.states.winload) {
    var listener
    this.cache.onloadHandler = true
    window.addEventListener('load', listener = function (event) {
      window.removeEventListener('load', listener)
      this.states.winload = true


      setTimeout(function () {
        while (listener = this.cache.onload.shift()) listener.call(this)
      }.call(this), 10)
    }.call(this))
  }
}


// loading assistant
Front.prototype.loaded = function (state, value) {
  if (typeof (state) === 'string') {
    // set state
    if (typeof (value) === 'boolean') {

    // get state
    } else {
      return !!this.states[state]
    }
  }


  console.log(state)

}

window.front = new Front()

},{"./modules/front.lazy.js":2,"./modules/front.modals.js":3,"./modules/front.polyfill.js":4,"./modules/front.svgsprite.js":5,"classlist.js":6,"dorm.js":7,"element-closest":8,"whatwg-fetch":9}],2:[function(require,module,exports){
/*! front.js - lazy, (c) Damir Sultanov - http://fronteed.com, http://git.io/vi0x1 */

(function (window, document, name, instance) {
  !window.frontModules && (window.frontModules = {})

  instance = function () {

  }

  instance.prototype.method = function () {

  }

  window.frontModules[name] = instance
  module.exports = instance
})(window, document, 'lazy')

},{}],3:[function(require,module,exports){
/*! front.js - modals, (c) Damir Sultanov - http://fronteed.com, http://git.io/vi0x1 */

(function (window, document, name, instance) {
  !window.frontModules && (window.frontModules = {})

  instance = function () {

  }

  instance.prototype.method = function () {

  }

  window.frontModules[name] = instance
  module.exports = instance
})(window, document, 'modals')

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
/*! front.js - svgsprite, (c) Damir Sultanov - http://fronteed.com, http://git.io/vi0x1 */

(function (window, document, name, instance) {
  !window.frontModules && (window.frontModules = {})

  instance = function () {

  }

  instance.prototype.method = function () {

  }

  window.frontModules[name] = instance
  module.exports = instance
})(window, document, 'svgsprite')

},{}],6:[function(require,module,exports){
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20160811
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

(function (win) {
	"use strict";
	if (!("document" in win)) return;
	
	// Full polyfill for browsers with no classList support
	// Including IE < Edge missing SVGElement.classList
	if (!("classList" in document.createElement("_")) 
		|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","svg").appendChild(document.createElement("g"))) ) {

		if (!('Element' in win)) return;

		var classListProp = "classList"
			, protoProp = "prototype"
			, elemCtrProto = win.Element[protoProp]
			, objCtr = Object
			, strTrim = String[protoProp].trim || function () {
				return this.replace(/^\s+|\s+$/g, "");
			}
			, arrIndexOf = Array[protoProp].indexOf || function (item) {
				var
					  i = 0
					, len = this.length
				;
				for (; i < len; i++) {
					if (i in this && this[i] === item) {
						return i;
					}
				}
				return -1;
			}
			// Vendors: please allow content code to instantiate DOMExceptions
			, DOMEx = function (type, message) {
				this.name = type;
				this.code = DOMException[type];
				this.message = message;
			}
			, checkTokenAndGetIndex = function (classList, token) {
				if (token === "") {
					throw new DOMEx(
						  "SYNTAX_ERR"
						, "An invalid or illegal string was specified"
					);
				}
				if (/\s/.test(token)) {
					throw new DOMEx(
						  "INVALID_CHARACTER_ERR"
						, "String contains an invalid character"
					);
				}
				return arrIndexOf.call(classList, token);
			}
			, ClassList = function (elem) {
				var
					  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
					, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
					, i = 0
					, len = classes.length
				;
				for (; i < len; i++) {
					this.push(classes[i]);
				}
				this._updateClassName = function () {
					elem.setAttribute("class", this.toString());
				};
			}
			, classListProto = ClassList[protoProp] = []
			, classListGetter = function () {
				return new ClassList(this);
			}
		;
		// Most DOMException implementations don't allow calling DOMException's toString()
		// on non-DOMExceptions. Error's toString() is sufficient here.
		DOMEx[protoProp] = Error[protoProp];
		classListProto.item = function (i) {
			return this[i] || null;
		};
		classListProto.contains = function (token) {
			token += "";
			return checkTokenAndGetIndex(this, token) !== -1;
		};
		classListProto.add = function () {
			var
				  tokens = arguments
				, i = 0
				, l = tokens.length
				, token
				, updated = false
			;
			do {
				token = tokens[i] + "";
				if (checkTokenAndGetIndex(this, token) === -1) {
					this.push(token);
					updated = true;
				}
			}
			while (++i < l);

			if (updated) {
				this._updateClassName();
			}
		};
		classListProto.remove = function () {
			var
				  tokens = arguments
				, i = 0
				, l = tokens.length
				, token
				, updated = false
				, index
			;
			do {
				token = tokens[i] + "";
				index = checkTokenAndGetIndex(this, token);
				while (index !== -1) {
					this.splice(index, 1);
					updated = true;
					index = checkTokenAndGetIndex(this, token);
				}
			}
			while (++i < l);

			if (updated) {
				this._updateClassName();
			}
		};
		classListProto.toggle = function (token, force) {
			token += "";

			var
				  result = this.contains(token)
				, method = result ?
					force !== true && "remove"
				:
					force !== false && "add"
			;

			if (method) {
				this[method](token);
			}

			if (force === true || force === false) {
				return force;
			} else {
				return !result;
			}
		};
		classListProto.toString = function () {
			return this.join(" ");
		};

		if (objCtr.defineProperty) {
			var classListPropDesc = {
				  get: classListGetter
				, enumerable: true
				, configurable: true
			};
			try {
				objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
			} catch (ex) { // IE 8 doesn't support enumerable:true
				if (ex.number === -0x7FF5EC54) {
					classListPropDesc.enumerable = false;
					objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
				}
			}
		} else if (objCtr[protoProp].__defineGetter__) {
			elemCtrProto.__defineGetter__(classListProp, classListGetter);
		}

	} else {
		// There is full or partial native classList support, so just check if we need
		// to normalize the add/remove and toggle APIs.

		var testElement = document.createElement("_");

		testElement.classList.add("c1", "c2");

		// Polyfill for IE 10/11 and Firefox <26, where classList.add and
		// classList.remove exist but support only one argument at a time.
		if (!testElement.classList.contains("c2")) {
			var createMethod = function(method) {
				var original = DOMTokenList.prototype[method];

				DOMTokenList.prototype[method] = function(token) {
					var i, len = arguments.length;

					for (i = 0; i < len; i++) {
						token = arguments[i];
						original.call(this, token);
					}
				};
			};
			createMethod('add');
			createMethod('remove');
		}

		testElement.classList.toggle("c3", false);

		// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
		// support the second argument.
		if (testElement.classList.contains("c3")) {
			var _toggle = DOMTokenList.prototype.toggle;

			DOMTokenList.prototype.toggle = function(token, force) {
				if (1 in arguments && !this.contains(token) === !force) {
					return force;
				} else {
					return _toggle.call(this, token);
				}
			};

		}

		testElement = null;
	}
}(typeof window !== "undefined" ? window : {}));

},{}],7:[function(require,module,exports){
(function (global){
/* dorm.js v0.0.1, (c) Damir Sultanov - http://fronteed.com, http://git.io/vCUlz */

/* global define, module */
(function (isNode, nil) {
  // detect node.js env
  try {
    isNode = Object.prototype.toString.call(global.process) === '[object process]'
  } catch (exception) {}

  // cache globals
  var root = isNode ? global : window
  var rootNode = !isNode && document ? document.documentElement : nil
  var types = {desktop: nil, mobile: nil, phone: nil, tablet: nil, tv: nil, console: nil, bot: nil}

  // dorm.js instance
  var Dorm = function (init) {
    init && this.init({}, rootNode)
  }

  // initiate dorm.js
  Dorm.prototype.init = function (options, domNode) {
    if (domNode && domNode.nodeType && !(domNode.nodeType === 1 || domNode.nodeType === 9)) {
      domNode = nil
    }

    options = this.assign({
      prefix: 'dorm',
      classes: true,
      // tv: nil,
      // console: nil,
      // bot: nil,
      useragent: !isNode && root.navigator ? root.navigator.userAgent : null,
    },
      this.getAttribute(),
      this.getOptions(),
      this.getOptions(options)
    )

    // parse current userAgent
    var result = this.parse(options.useragent, options)
    var resultHelper

    // normalize according options
    for (var type in types) {
      if (options[type] === false || options[type] === nil) {
        result[type] = nil
      } else if (typeof options[type] === 'string') {
        result[type] = result[options[type]]
      }
    }

    for (var resultItem in result) {
      if (result[resultItem] === true && types[resultItem] !== undefined) {
        // redirects
        if (!isNode && root.location) {
          resultHelper = options[resultItem + 'redirect']

          if (resultHelper) {
            root.location.replace(resultHelper)
          }
        }

        // callbacks
        resultHelper = options[resultItem + 'callback']
        if (resultHelper && typeof (resultHelper) === 'function') {
          resultHelper(result, options)
        }
      }
    }

    if (rootNode && options.classes) {
      var rootClass = this.trim(rootNode.className)

      for (var resultClass in result) {
        if (result[resultClass] !== nil) {
          rootClass += ' ' + (options.prefix ? options.prefix + '-' : '') + (!result[resultClass] ? 'not-' : '') + (resultClass === 'os' ? result[resultClass] : resultClass)
        }
      }

      rootNode.className = this.trim(rootClass)
    }

    return result
  }

  // parse userAgent and return object
  Dorm.prototype.parse = function (string, options, result) {
    string = typeof (string) === 'string' ? this.trim(string) : nil
    result = {}

    if (string) {
      var os
      var phone
      var tablet
      var secondary
      var legacy = 'amoi|bada|jasmine|maemo|meego|nokia\\D\\d{2}|palm|pocket|sailfish|series.[10-90]|symb'
      var check = function (keyword) {
        return new RegExp(keyword, 'i').test(string)
      }

      // detect consoles
      if (check('car(.*?)sys|func(.*?)titan|nintendo|playstation|sony(.*?)ps|wii|xbox')) {
        result.console = secondary = true

      // detect tvs
      } else if (check('aftb|(apple|google|hbb|internet.|net|pov_|power|smart|sonyd|web)(.*?)tv|boxee|ce-html|dlink(.*?)dsm|dlnadoc|dongle|espial|kylo|loewe|net(box|cast)|roku|thom|tube|tv |viera')) {
        result.tv = secondary = true

      // detect bots
      } else if (check('anonym|bot|cisco|crawl|gr(a|u)b|http|search|seek|spider|worm')) {
        result.bot = true
      }

      // detect os
      if (check('ios|ip(ad|hone|od)')) {
        os = 'ios'

        if (!secondary) {
          if (check('pad')) {
            tablet = true
          } else {
            phone = true
          }
        }

      // android
      } else if (check('android|kindle|silk')) {
        if (secondary) {
          if (check('android')) {
            os = 'android'
          }
        } else {
          os = 'android'

          if ((check('mobile|opera (mini|mobi)|(xl|xm)\\d{2}\\D') &&
            !check('Odys(.*?)(space|xpress)|allview(.*?)(speed|city)|kobo|msi enjoy|nabi|nook|note|pocketbook|t-hub|xelio') &&
            !check('gt-p\\d{2}|sc-\\d{2}\\D')) ||
            check('sdk b')) {
            phone = true
          } else {
            tablet = true
          }
        }

      // blackberry
      } else if (check('blackberry|bb10|rim(?!ent)')) {
        os = 'blackberry'

        if (!secondary) {
          if (check('tablet')) {
            tablet = true
          } else {
            phone = true
          }
        }

      // firefox os
      } else if (check('\\((mobile|tablet);') && check('; rv:')) {
        os = 'foxos'

        if (!secondary) {
          if (check('tablet')) {
            tablet = true
          } else {
            phone = true
          }
        }

      // windows
      // } else if (check('cygwin|windows|win[ \\d]') && !check('darwin')) {
      } else if (check('os\\/2|win') && !check('darwin')) {
        os = 'windows'

        if (!secondary) {
          if (check(legacy)) {
            phone = true
          } else {
            if (check('phone|wpdesktop')) {
              phone = true
            } else if (check('tablet') || (check('touch') && check('iemobile'))) {
              tablet = true
            } else if (check('mobi')) {
              phone = true
            }
          }
        }

      // mac
      } else if (check('darwin|mac|os[ _-]?x')) {
        os = 'mac'

      // third-party os
      } else {
        if (!secondary && (check(legacy) || check('midp|mobi|puffin'))) {
          phone = true
        }

        if (check('bada|\\D{3}bsd|hp(.*?)ux|(ir|un)ix|linux|maemo|meego|sailfish|sunos|tizen')) {
          os = 'nix'
        }
      }

      // specific ids
      if (check('folio|pad|slate|tab(?!out|rec)')) {
        phone = false
        tablet = true
      } else if (check('juc|(pad|voda)fone')) {
        phone = true
        tablet = false
      }

      // specific brands
      if (!secondary && !phone && !tablet && (!os || os === 'nix') && check('htc|mot[o -]|nokia|samsung|sonyeric|xda')) {
        phone = true
      }

      // desktop
      if (os === 'windows' && check('(win|wow|x)64') || result.bot && !check('mobi')) {
        phone = tablet = false
      }

      // detect phones and tablets
      if (phone || tablet || secondary) {
        result.mobile = true

        if (phone) {
          result.phone = phone
        } else if (tablet) {
          result.tablet = tablet
        }
      } else {
        if (!check('mac|nix|win', os)) {
          os = nil
        }

        result.desktop = true
      }

      // save os
      if (os) {
        result.os = os
      }
    }

    for (var type in types) {
      result[type] = !!result[type]
    }

    return result
  }

  // get data-dorm attribute
  Dorm.prototype.getAttribute = function (data) {
    data = {}

    if (rootNode) {
      var attribute = rootNode.getAttribute('data-dorm')

      if (attribute) {
        attribute = this.trim(attribute).split(/\s*,\s*/)

        for (var i = 0; i < attribute.length; i++) {
          var attributeItem = attribute[i].split(/\s*:\s*/)
          var attributeName = attributeItem[0].toLowerCase()
          var attributeValue = attributeItem[1]

          if (attributeItem.length > 1) {
            if (attributeName === 'prefix') {
              attributeValue = attributeValue === 'false' || !attributeValue ? '' : (attributeValue === 'true' ? nil : attributeValue)
            } else if (attributeName === 'classes') {
              attributeValue = attributeValue === 'true'
            }

            attributeValue === 'null' && (attributeValue = nil)
            attributeValue !== nil && (data[attributeName] = attributeValue)
          }
        }
      }
    }

    return data
  }

  // get window.dormOptions or custom options
  Dorm.prototype.getOptions = function (options, result) {
    options = options || (!isNode ? (root.dormOptions || {}) : {})
    result = {}

    for (var option in options) {
      result[option.toLowerCase()] = options[option]
    }

    return result
  }

  // cross-browser Object.assign() replacement
  Dorm.prototype.assign = function (target) {
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

  // cross-browser String.trim() replacement
  Dorm.prototype.trim = function (variable) {
    return (variable + '').replace(/^\s+|\s+$/g, '')
  }

  // exports
  if (typeof define === 'function' && define.amd) {
    // export for amd fans
    define(function () {
      return new Dorm()
    })
  } else if (typeof module !== 'undefined' && module.exports) {
    // export in Node.js style
    module.exports = new Dorm()
  } else {
    // export to global and launch
    !isNode && (root.dorm = new Dorm(true))
  }
})(false, null)

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],8:[function(require,module,exports){
// element-closest | CC0-1.0 | github.com/jonathantneal/closest

if (typeof Element.prototype.matches !== 'function') {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
		var element = this;
		var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
		var index = 0;

		while (elements[index] && elements[index] !== element) {
			++index;
		}

		return Boolean(elements[index]);
	};
}

if (typeof Element.prototype.closest !== 'function') {
	Element.prototype.closest = function closest(selector) {
		var element = this;

		while (element && element.nodeType === 1) {
			if (element.matches(selector)) {
				return element;
			}

			element = element.parentNode;
		}

		return null;
	};
}

},{}],9:[function(require,module,exports){
(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    return fileReaderReady(reader)
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    reader.readAsText(blob)
    return fileReaderReady(reader)
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (!body) {
        this._bodyText = ''
      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
        // Only support ArrayBuffers for POST method.
        // Receiving ArrayBuffers happens via Blobs, instead.
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        return this.blob().then(readBlobAsArrayBuffer)
      }

      this.text = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return Promise.resolve(this._bodyText)
        }
      }
    } else {
      this.text = function() {
        var rejected = consumed(this)
        return rejected ? rejected : Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body
    if (Request.prototype.isPrototypeOf(input)) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = input
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this)
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request = input
      } else {
        request = new Request(input, init)
      }

      var xhr = new XMLHttpRequest()

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udC5qcyIsIm1vZHVsZXMvZnJvbnQubGF6eS5qcyIsIm1vZHVsZXMvZnJvbnQubW9kYWxzLmpzIiwibW9kdWxlcy9mcm9udC5wb2x5ZmlsbC5qcyIsIm1vZHVsZXMvZnJvbnQuc3Znc3ByaXRlLmpzIiwibm9kZV9tb2R1bGVzL2NsYXNzbGlzdC5qcy9jbGFzc0xpc3QuanMiLCJub2RlX21vZHVsZXMvZG9ybS5qcy9kb3JtLmpzIiwibm9kZV9tb2R1bGVzL2VsZW1lbnQtY2xvc2VzdC9jbG9zZXN0LmpzIiwibm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN6VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiEgZnJvbnQuanMgdjAuMC4xLCAoYykgRGFtaXIgU3VsdGFub3YgLSBodHRwOi8vZnJvbnRlZWQuY29tLCBodHRwOi8vZ2l0LmlvL3ZpMHgxICovXG5cbi8vIHJlcXVpcmUgcG9seWZpbGxzXG5yZXF1aXJlKCdjbGFzc2xpc3QuanMnKVxucmVxdWlyZSgnZWxlbWVudC1jbG9zZXN0JylcbnJlcXVpcmUoJ3doYXR3Zy1mZXRjaCcpXG5cbi8vIHJlcXVpcmUgcGFja2FnZXNcbi8vIHZhciBkb21yZWFkeSA9IHJlcXVpcmUoJ2RvbXJlYWR5JylcbmNvbnN0IGRvcm0gPSByZXF1aXJlKCdkb3JtLmpzJylcblxuLy8gcmVxdWlyZSBtb2R1bGVzXG5yZXF1aXJlKCcuL21vZHVsZXMvZnJvbnQubGF6eS5qcycpO3JlcXVpcmUoJy4vbW9kdWxlcy9mcm9udC5tb2RhbHMuanMnKTtyZXF1aXJlKCcuL21vZHVsZXMvZnJvbnQucG9seWZpbGwuanMnKTtyZXF1aXJlKCcuL21vZHVsZXMvZnJvbnQuc3Znc3ByaXRlLmpzJyk7XG5cbnZhciBGcm9udCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHdpbmRvdy5mcm9udCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gZGV2aWNlcyBjYWNoZVxuICB0aGlzLmRldmljZSA9IGRvcm0uaW5pdCh7XG4gICAgcHJlZml4OiAnYXBwJyxcbiAgfSlcblxuICAvLyBkb20gY2FjaGVcbiAgdGhpcy5kb20gPSB7XG4gICAgaHRtbDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgIGhlYWQ6IGRvY3VtZW50LmhlYWQsXG4gIH1cblxuICAvLyBzdGF0ZXMgY2FjaGVcbiAgdGhpcy5zdGF0ZXMgPSB7XG4gICAgZGVidWc6IHRydWUsXG4gIH1cblxuICAvLyBzZWxlY3RvcnMgY2FjaGVcbiAgdGhpcy5zZWxlY3RvcnMgPSB7XG4gICAgbG9hZGVyOiAnanMtbG9hZGVyJyxcbiAgICBzbGlkZXI6ICcuanMtc2xpZGVyJyxcbiAgICBzbGlkZXJMaXN0OiAnLmpzLXNsaWRlci1saXN0JyxcbiAgICBzbGlkZXJJdGVtOiAnLmpzLXNsaWRlci1pdGVtJyxcbiAgICBzbGlkZXJEb3Q6ICcuanMtc2xpZGVyLWRvdCcsXG4gICAgc2xpZGVyUHJldjogJy5qcy1zbGlkZXItcHJldicsXG4gICAgc2xpZGVyTmV4dDogJy5qcy1zbGlkZXItbmV4dCcsXG4gICAgc2xpZGVyQXJyb3c6ICcuanMtc2xpZGVyLWFycm93JyxcbiAgICBsYXp5OiAnLmpzLWxhenknLFxuICAgIGxhenlMb2FkZXI6ICcuanMtbGF6eS1sb2FkZXInLFxuICAgIGxhenlIb2xkZXI6ICcuanMtbGF6eS1ob2xkZXInLFxuICB9XG5cbiAgLy8gYXJiaXRyYXJ5IGNhY2hlXG4gIHRoaXMuY2FjaGUgPSB7XG4gICAgbG9hZGVkU3RhdGU6IFsnd2lubG9hZCddLFxuICB9XG5cbiAgLy8gY2FjaGUgYm9keVxuICB0aGlzLmRvbXJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRvbS5ib2R5ID0gZG9jdW1lbnQuYm9keVxuICB9KVxuXG4gIC8vIGRldGVjdCBkb21haW5cbiAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgvXFw/fCMvZylbMF1cbiAgdGhpcy5kb21haW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RcblxuICAvLyBqcyBzdXBwb3J0XG4gIHRoaXMuZG9tLmh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnYXBwLW5vLWpzJylcbiAgdGhpcy5kb20uaHRtbC5jbGFzc0xpc3QuYWRkKCdhcHAtanMnKVxuXG5cbiAgLy8gbGF1bmNoIG1vZHVsZXNcbiAgdGhpcy5tb2R1bGVzKClcblxuICAvLyBzdGFydCBhcHAgbG9hZGluZ1xuICB0aGlzLmxvYWRlZCgpXG5cbiAgLy8gZGV0ZWN0IGFwcCBsb2FkaW5nXG4gIHRoaXMub25sb2FkKHRoaXMubG9hZGVkKVxufVxuXG4vLyBub3JtYWxpemUgcHJvcGVydHkgdmFsdWVcbkZyb250LnByb3RvdHlwZS5wYXJzZVByb3BlcnR5ID0gZnVuY3Rpb24gKCkge1xuXG59XG5cbi8vIHNldCBhbmQgZ2V0IG1vZHVsZVxuRnJvbnQucHJvdG90eXBlLm1vZHVsZSA9IGZ1bmN0aW9uIChuYW1lLCBNb2R1bGUsIG9wdGlvbnMpIHtcbiAgaWYgKCF0aGlzLm1vZHVsZXMpIHtcbiAgICB0aGlzLm1vZHVsZXMgPSB7fVxuICB9XG5cbiAgLy8gc2V0XG4gIGlmIChNb2R1bGUpIHtcbiAgICBpZiAodHlwZW9mIE1vZHVsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgdGhpc1tvcHRpb25zICYmIG9wdGlvbnMub25sb2FkID8gJ29ubG9hZCcgOiAnb25yZWFkeSddKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzW25hbWVdID0gbmV3IE1vZHVsZSgpXG4gICAgICB9KVxuICAgIH1cblxuICAvLyBnZXRcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5tb2R1bGVzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2R1bGVzW25hbWVdXG4gICAgfVxuICB9XG59XG5cbi8vIGdldCBtb2R1bGVcbkZyb250LnByb3RvdHlwZS5nZXRNb2R1bGUgPSBmdW5jdGlvbiAoKSB7XG5cbn1cblxuLy8gc2V0IG1vZHVsZVxuRnJvbnQucHJvdG90eXBlLnNldE1vZHVsZSA9IGZ1bmN0aW9uICgpIHtcblxufVxuXG4vLyBtb2R1bGVzIGxhdW5jaGVyXG5Gcm9udC5wcm90b3R5cGUubW9kdWxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkod2luZG93LmZyb250TW9kdWxlcykpIHtcbiAgICBmb3IgKHZhciBtb2R1bGUgaW4gd2luZG93LmZyb250TW9kdWxlcykge1xuICAgICAgY29uc29sZS5sb2cobW9kdWxlKVxuICAgICAgLy8gaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAvLyAgIHZhciBlbGVtZW50ID0gb2JqZWN0W2tleV07XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG59XG5cblxuRnJvbnQucHJvdG90eXBlLmdldFNlbGVjdG9yID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cbn1cblxuRnJvbnQucHJvdG90eXBlLnNldFNlbGVjdG9yID0gZnVuY3Rpb24gKHNlbGVjdG9yLCB2YWx1ZSkge1xuXG59XG5cbkZyb250LnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxufVxuXG5Gcm9udC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cbn1cblxuRnJvbnQucHJvdG90eXBlLmdldERvbSA9IGZ1bmN0aW9uICgpIHtcblxufVxuXG5Gcm9udC5wcm90b3R5cGUuc2V0RG9tID0gZnVuY3Rpb24gKCkge1xuXG59XG5cbkZyb250LnByb3RvdHlwZS5nZXRDYWNoZSA9IGZ1bmN0aW9uICgpIHtcblxufVxuXG5Gcm9udC5wcm90b3R5cGUuc2V0Q2FjaGUgPSBmdW5jdGlvbiAoKSB7XG5cbn1cblxuLy8gaWYgKHR5cGVvZiAoc3RhdGUpID09PSAnc3RyaW5nJykge1xuLy8gICAgIC8vIHNldCBzdGF0ZVxuLy8gICAgIGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gJ2Jvb2xlYW4nKSB7XG5cbi8vICAgICAvLyBnZXQgc3RhdGVcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgcmV0dXJuICEhdGhpcy5zdGF0ZXNbc3RhdGVdXG4vLyAgICAgfVxuLy8gICB9XG5cbi8vIEZyb250LnByb3RvdHlwZS5hcHBseVNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xuXG4vLyB9XG5cbi8vIGRvY3VtZW50LnJlYWR5U3RhdGUgbGlzdGVuZXJcbkZyb250LnByb3RvdHlwZS5kb21yZWFkeSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBpZiAoIXRoaXMuY2FjaGUub25yZWFkeSkge1xuICAgIHRoaXMuY2FjaGUub25yZWFkeSA9IFtdXG4gIH1cblxuICBpZiAodHlwZW9mIChjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kb21yZWFkeSkge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhY2hlLm9ucmVhZHkucHVzaChjYWxsYmFjaylcbiAgICB9XG4gIH1cblxuICBpZiAoIXRoaXMuY2FjaGUub25yZWFkeUhhbmRsZXIgJiYgIXRoaXMuc3RhdGUuZG9tcmVhZHkpIHtcbiAgICB0aGlzLmNhY2hlLm9ucmVhZHlIYW5kbGVyID0gdHJ1ZVxuICAgIGRvbXJlYWR5KGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgdGhpcy5zdGF0ZXMuZG9tcmVhZHkgPSB0cnVlXG4gICAgICB3aGlsZSAobGlzdGVuZXIgPSB0aGlzLmNhY2hlLm9ucmVhZHkuc2hpZnQoKSkgbGlzdGVuZXIuY2FsbCh0aGlzKVxuICAgIH0uY2FsbCh0aGlzKSlcbiAgfVxufVxuXG4vLyB3aW5kb3cub25sb2FkIGxpc3RlbmVyXG5Gcm9udC5wcm90b3R5cGUub25sb2FkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGlmICghdGhpcy5jYWNoZS5vbmxvYWQpIHtcbiAgICB0aGlzLmNhY2hlLm9ubG9hZCA9IFtdXG4gIH1cblxuICBpZiAodHlwZW9mIChjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcblxuICAgIGlmICh0aGlzLnN0YXRlcy53aW5sb2FkKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGUub25sb2FkLnB1c2goY2FsbGJhY2spXG4gICAgfVxuICB9XG5cbiAgaWYgKCF0aGlzLmNhY2hlLm9ubG9hZEhhbmRsZXIgJiYgIXRoaXMuc3RhdGVzLndpbmxvYWQpIHtcbiAgICB2YXIgbGlzdGVuZXJcbiAgICB0aGlzLmNhY2hlLm9ubG9hZEhhbmRsZXIgPSB0cnVlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsaXN0ZW5lcilcbiAgICAgIHRoaXMuc3RhdGVzLndpbmxvYWQgPSB0cnVlXG5cblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlIChsaXN0ZW5lciA9IHRoaXMuY2FjaGUub25sb2FkLnNoaWZ0KCkpIGxpc3RlbmVyLmNhbGwodGhpcylcbiAgICAgIH0uY2FsbCh0aGlzKSwgMTApXG4gICAgfS5jYWxsKHRoaXMpKVxuICB9XG59XG5cblxuLy8gbG9hZGluZyBhc3Npc3RhbnRcbkZyb250LnByb3RvdHlwZS5sb2FkZWQgPSBmdW5jdGlvbiAoc3RhdGUsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgKHN0YXRlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBzZXQgc3RhdGVcbiAgICBpZiAodHlwZW9mICh2YWx1ZSkgPT09ICdib29sZWFuJykge1xuXG4gICAgLy8gZ2V0IHN0YXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhIXRoaXMuc3RhdGVzW3N0YXRlXVxuICAgIH1cbiAgfVxuXG5cbiAgY29uc29sZS5sb2coc3RhdGUpXG5cbn1cblxud2luZG93LmZyb250ID0gbmV3IEZyb250KClcbiIsIi8qISBmcm9udC5qcyAtIGxhenksIChjKSBEYW1pciBTdWx0YW5vdiAtIGh0dHA6Ly9mcm9udGVlZC5jb20sIGh0dHA6Ly9naXQuaW8vdmkweDEgKi9cblxuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBuYW1lLCBpbnN0YW5jZSkge1xuICAhd2luZG93LmZyb250TW9kdWxlcyAmJiAod2luZG93LmZyb250TW9kdWxlcyA9IHt9KVxuXG4gIGluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuXG4gIH1cblxuICBpbnN0YW5jZS5wcm90b3R5cGUubWV0aG9kID0gZnVuY3Rpb24gKCkge1xuXG4gIH1cblxuICB3aW5kb3cuZnJvbnRNb2R1bGVzW25hbWVdID0gaW5zdGFuY2VcbiAgbW9kdWxlLmV4cG9ydHMgPSBpbnN0YW5jZVxufSkod2luZG93LCBkb2N1bWVudCwgJ2xhenknKVxuIiwiLyohIGZyb250LmpzIC0gbW9kYWxzLCAoYykgRGFtaXIgU3VsdGFub3YgLSBodHRwOi8vZnJvbnRlZWQuY29tLCBodHRwOi8vZ2l0LmlvL3ZpMHgxICovXG5cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgbmFtZSwgaW5zdGFuY2UpIHtcbiAgIXdpbmRvdy5mcm9udE1vZHVsZXMgJiYgKHdpbmRvdy5mcm9udE1vZHVsZXMgPSB7fSlcblxuICBpbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcblxuICB9XG5cbiAgaW5zdGFuY2UucHJvdG90eXBlLm1ldGhvZCA9IGZ1bmN0aW9uICgpIHtcblxuICB9XG5cbiAgd2luZG93LmZyb250TW9kdWxlc1tuYW1lXSA9IGluc3RhbmNlXG4gIG1vZHVsZS5leHBvcnRzID0gaW5zdGFuY2Vcbn0pKHdpbmRvdywgZG9jdW1lbnQsICdtb2RhbHMnKVxuIiwiLyohIGZyb250LmpzIC0gcG9seWZpbGwsIChjKSBEYW1pciBTdWx0YW5vdiAtIGh0dHA6Ly9mcm9udGVlZC5jb20sIGh0dHA6Ly9naXQuaW8vdmkweDEgKi9cblxuLy8gT2JqZWN0LmFzc2lnbigpIHBvbHlmaWxsXG5pZiAoIU9iamVjdC5hc3NpZ24pIHtcbiAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAxLCBrZXksIHNyYzsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICBzcmMgPSBhcmd1bWVudHNbaW5kZXhdXG5cbiAgICAgIGZvciAoa2V5IGluIHNyYykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNyYywga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc3JjW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbiAgfVxufVxuIiwiLyohIGZyb250LmpzIC0gc3Znc3ByaXRlLCAoYykgRGFtaXIgU3VsdGFub3YgLSBodHRwOi8vZnJvbnRlZWQuY29tLCBodHRwOi8vZ2l0LmlvL3ZpMHgxICovXG5cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgbmFtZSwgaW5zdGFuY2UpIHtcbiAgIXdpbmRvdy5mcm9udE1vZHVsZXMgJiYgKHdpbmRvdy5mcm9udE1vZHVsZXMgPSB7fSlcblxuICBpbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcblxuICB9XG5cbiAgaW5zdGFuY2UucHJvdG90eXBlLm1ldGhvZCA9IGZ1bmN0aW9uICgpIHtcblxuICB9XG5cbiAgd2luZG93LmZyb250TW9kdWxlc1tuYW1lXSA9IGluc3RhbmNlXG4gIG1vZHVsZS5leHBvcnRzID0gaW5zdGFuY2Vcbn0pKHdpbmRvdywgZG9jdW1lbnQsICdzdmdzcHJpdGUnKVxuIiwiLypcbiAqIGNsYXNzTGlzdC5qczogQ3Jvc3MtYnJvd3NlciBmdWxsIGVsZW1lbnQuY2xhc3NMaXN0IGltcGxlbWVudGF0aW9uLlxuICogMS4xLjIwMTYwODExXG4gKlxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxuICogTGljZW5zZTogRGVkaWNhdGVkIHRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL2NsYXNzTGlzdC5qcyAqL1xuXG4oZnVuY3Rpb24gKHdpbikge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0aWYgKCEoXCJkb2N1bWVudFwiIGluIHdpbikpIHJldHVybjtcblx0XG5cdC8vIEZ1bGwgcG9seWZpbGwgZm9yIGJyb3dzZXJzIHdpdGggbm8gY2xhc3NMaXN0IHN1cHBvcnRcblx0Ly8gSW5jbHVkaW5nIElFIDwgRWRnZSBtaXNzaW5nIFNWR0VsZW1lbnQuY2xhc3NMaXN0XG5cdGlmICghKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIikpIFxuXHRcdHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAhKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcInN2Z1wiKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZ1wiKSkpICkge1xuXG5cdFx0aWYgKCEoJ0VsZW1lbnQnIGluIHdpbikpIHJldHVybjtcblxuXHRcdHZhciBjbGFzc0xpc3RQcm9wID0gXCJjbGFzc0xpc3RcIlxuXHRcdFx0LCBwcm90b1Byb3AgPSBcInByb3RvdHlwZVwiXG5cdFx0XHQsIGVsZW1DdHJQcm90byA9IHdpbi5FbGVtZW50W3Byb3RvUHJvcF1cblx0XHRcdCwgb2JqQ3RyID0gT2JqZWN0XG5cdFx0XHQsIHN0clRyaW0gPSBTdHJpbmdbcHJvdG9Qcm9wXS50cmltIHx8IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG5cdFx0XHR9XG5cdFx0XHQsIGFyckluZGV4T2YgPSBBcnJheVtwcm90b1Byb3BdLmluZGV4T2YgfHwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0dmFyXG5cdFx0XHRcdFx0ICBpID0gMFxuXHRcdFx0XHRcdCwgbGVuID0gdGhpcy5sZW5ndGhcblx0XHRcdFx0O1xuXHRcdFx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdFx0Ly8gVmVuZG9yczogcGxlYXNlIGFsbG93IGNvbnRlbnQgY29kZSB0byBpbnN0YW50aWF0ZSBET01FeGNlcHRpb25zXG5cdFx0XHQsIERPTUV4ID0gZnVuY3Rpb24gKHR5cGUsIG1lc3NhZ2UpIHtcblx0XHRcdFx0dGhpcy5uYW1lID0gdHlwZTtcblx0XHRcdFx0dGhpcy5jb2RlID0gRE9NRXhjZXB0aW9uW3R5cGVdO1xuXHRcdFx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHRcdFx0fVxuXHRcdFx0LCBjaGVja1Rva2VuQW5kR2V0SW5kZXggPSBmdW5jdGlvbiAoY2xhc3NMaXN0LCB0b2tlbikge1xuXHRcdFx0XHRpZiAodG9rZW4gPT09IFwiXCIpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdFx0XHQgIFwiU1lOVEFYX0VSUlwiXG5cdFx0XHRcdFx0XHQsIFwiQW4gaW52YWxpZCBvciBpbGxlZ2FsIHN0cmluZyB3YXMgc3BlY2lmaWVkXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgvXFxzLy50ZXN0KHRva2VuKSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBET01FeChcblx0XHRcdFx0XHRcdCAgXCJJTlZBTElEX0NIQVJBQ1RFUl9FUlJcIlxuXHRcdFx0XHRcdFx0LCBcIlN0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3RlclwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gYXJySW5kZXhPZi5jYWxsKGNsYXNzTGlzdCwgdG9rZW4pO1xuXHRcdFx0fVxuXHRcdFx0LCBDbGFzc0xpc3QgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0XHR2YXJcblx0XHRcdFx0XHQgIHRyaW1tZWRDbGFzc2VzID0gc3RyVHJpbS5jYWxsKGVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIilcblx0XHRcdFx0XHQsIGNsYXNzZXMgPSB0cmltbWVkQ2xhc3NlcyA/IHRyaW1tZWRDbGFzc2VzLnNwbGl0KC9cXHMrLykgOiBbXVxuXHRcdFx0XHRcdCwgaSA9IDBcblx0XHRcdFx0XHQsIGxlbiA9IGNsYXNzZXMubGVuZ3RoXG5cdFx0XHRcdDtcblx0XHRcdFx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdHRoaXMucHVzaChjbGFzc2VzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LCBjbGFzc0xpc3RQcm90byA9IENsYXNzTGlzdFtwcm90b1Byb3BdID0gW11cblx0XHRcdCwgY2xhc3NMaXN0R2V0dGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IENsYXNzTGlzdCh0aGlzKTtcblx0XHRcdH1cblx0XHQ7XG5cdFx0Ly8gTW9zdCBET01FeGNlcHRpb24gaW1wbGVtZW50YXRpb25zIGRvbid0IGFsbG93IGNhbGxpbmcgRE9NRXhjZXB0aW9uJ3MgdG9TdHJpbmcoKVxuXHRcdC8vIG9uIG5vbi1ET01FeGNlcHRpb25zLiBFcnJvcidzIHRvU3RyaW5nKCkgaXMgc3VmZmljaWVudCBoZXJlLlxuXHRcdERPTUV4W3Byb3RvUHJvcF0gPSBFcnJvcltwcm90b1Byb3BdO1xuXHRcdGNsYXNzTGlzdFByb3RvLml0ZW0gPSBmdW5jdGlvbiAoaSkge1xuXHRcdFx0cmV0dXJuIHRoaXNbaV0gfHwgbnVsbDtcblx0XHR9O1xuXHRcdGNsYXNzTGlzdFByb3RvLmNvbnRhaW5zID0gZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0XHR0b2tlbiArPSBcIlwiO1xuXHRcdFx0cmV0dXJuIGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgIT09IC0xO1xuXHRcdH07XG5cdFx0Y2xhc3NMaXN0UHJvdG8uYWRkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyXG5cdFx0XHRcdCAgdG9rZW5zID0gYXJndW1lbnRzXG5cdFx0XHRcdCwgaSA9IDBcblx0XHRcdFx0LCBsID0gdG9rZW5zLmxlbmd0aFxuXHRcdFx0XHQsIHRva2VuXG5cdFx0XHRcdCwgdXBkYXRlZCA9IGZhbHNlXG5cdFx0XHQ7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRcdFx0aWYgKGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgPT09IC0xKSB7XG5cdFx0XHRcdFx0dGhpcy5wdXNoKHRva2VuKTtcblx0XHRcdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdFx0XHRpZiAodXBkYXRlZCkge1xuXHRcdFx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNsYXNzTGlzdFByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhclxuXHRcdFx0XHQgIHRva2VucyA9IGFyZ3VtZW50c1xuXHRcdFx0XHQsIGkgPSAwXG5cdFx0XHRcdCwgbCA9IHRva2Vucy5sZW5ndGhcblx0XHRcdFx0LCB0b2tlblxuXHRcdFx0XHQsIHVwZGF0ZWQgPSBmYWxzZVxuXHRcdFx0XHQsIGluZGV4XG5cdFx0XHQ7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRcdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdFx0XHR3aGlsZSAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0dGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdHVwZGF0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdFx0XHRpZiAodXBkYXRlZCkge1xuXHRcdFx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNsYXNzTGlzdFByb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uICh0b2tlbiwgZm9yY2UpIHtcblx0XHRcdHRva2VuICs9IFwiXCI7XG5cblx0XHRcdHZhclxuXHRcdFx0XHQgIHJlc3VsdCA9IHRoaXMuY29udGFpbnModG9rZW4pXG5cdFx0XHRcdCwgbWV0aG9kID0gcmVzdWx0ID9cblx0XHRcdFx0XHRmb3JjZSAhPT0gdHJ1ZSAmJiBcInJlbW92ZVwiXG5cdFx0XHRcdDpcblx0XHRcdFx0XHRmb3JjZSAhPT0gZmFsc2UgJiYgXCJhZGRcIlxuXHRcdFx0O1xuXG5cdFx0XHRpZiAobWV0aG9kKSB7XG5cdFx0XHRcdHRoaXNbbWV0aG9kXSh0b2tlbik7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmb3JjZSA9PT0gdHJ1ZSB8fCBmb3JjZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0cmV0dXJuIGZvcmNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuICFyZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjbGFzc0xpc3RQcm90by50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB0aGlzLmpvaW4oXCIgXCIpO1xuXHRcdH07XG5cblx0XHRpZiAob2JqQ3RyLmRlZmluZVByb3BlcnR5KSB7XG5cdFx0XHR2YXIgY2xhc3NMaXN0UHJvcERlc2MgPSB7XG5cdFx0XHRcdCAgZ2V0OiBjbGFzc0xpc3RHZXR0ZXJcblx0XHRcdFx0LCBlbnVtZXJhYmxlOiB0cnVlXG5cdFx0XHRcdCwgY29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHR9O1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0b2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuXHRcdFx0fSBjYXRjaCAoZXgpIHsgLy8gSUUgOCBkb2Vzbid0IHN1cHBvcnQgZW51bWVyYWJsZTp0cnVlXG5cdFx0XHRcdGlmIChleC5udW1iZXIgPT09IC0weDdGRjVFQzU0KSB7XG5cdFx0XHRcdFx0Y2xhc3NMaXN0UHJvcERlc2MuZW51bWVyYWJsZSA9IGZhbHNlO1xuXHRcdFx0XHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob2JqQ3RyW3Byb3RvUHJvcF0uX19kZWZpbmVHZXR0ZXJfXykge1xuXHRcdFx0ZWxlbUN0clByb3RvLl9fZGVmaW5lR2V0dGVyX18oY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0R2V0dGVyKTtcblx0XHR9XG5cblx0fSBlbHNlIHtcblx0XHQvLyBUaGVyZSBpcyBmdWxsIG9yIHBhcnRpYWwgbmF0aXZlIGNsYXNzTGlzdCBzdXBwb3J0LCBzbyBqdXN0IGNoZWNrIGlmIHdlIG5lZWRcblx0XHQvLyB0byBub3JtYWxpemUgdGhlIGFkZC9yZW1vdmUgYW5kIHRvZ2dsZSBBUElzLlxuXG5cdFx0dmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIik7XG5cblx0XHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYzFcIiwgXCJjMlwiKTtcblxuXHRcdC8vIFBvbHlmaWxsIGZvciBJRSAxMC8xMSBhbmQgRmlyZWZveCA8MjYsIHdoZXJlIGNsYXNzTGlzdC5hZGQgYW5kXG5cdFx0Ly8gY2xhc3NMaXN0LnJlbW92ZSBleGlzdCBidXQgc3VwcG9ydCBvbmx5IG9uZSBhcmd1bWVudCBhdCBhIHRpbWUuXG5cdFx0aWYgKCF0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjMlwiKSkge1xuXHRcdFx0dmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXHRcdFx0XHR2YXIgb3JpZ2luYWwgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF07XG5cblx0XHRcdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odG9rZW4pIHtcblx0XHRcdFx0XHR2YXIgaSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcblxuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdFx0dG9rZW4gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcdFx0XHRvcmlnaW5hbC5jYWxsKHRoaXMsIHRva2VuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdFx0Y3JlYXRlTWV0aG9kKCdhZGQnKTtcblx0XHRcdGNyZWF0ZU1ldGhvZCgncmVtb3ZlJyk7XG5cdFx0fVxuXG5cdFx0dGVzdEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImMzXCIsIGZhbHNlKTtcblxuXHRcdC8vIFBvbHlmaWxsIGZvciBJRSAxMCBhbmQgRmlyZWZveCA8MjQsIHdoZXJlIGNsYXNzTGlzdC50b2dnbGUgZG9lcyBub3Rcblx0XHQvLyBzdXBwb3J0IHRoZSBzZWNvbmQgYXJndW1lbnQuXG5cdFx0aWYgKHRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImMzXCIpKSB7XG5cdFx0XHR2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG5cdFx0XHRET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKHRva2VuLCBmb3JjZSkge1xuXHRcdFx0XHRpZiAoMSBpbiBhcmd1bWVudHMgJiYgIXRoaXMuY29udGFpbnModG9rZW4pID09PSAhZm9yY2UpIHtcblx0XHRcdFx0XHRyZXR1cm4gZm9yY2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIF90b2dnbGUuY2FsbCh0aGlzLCB0b2tlbik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHR9XG5cblx0XHR0ZXN0RWxlbWVudCA9IG51bGw7XG5cdH1cbn0odHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSk7XG4iLCIvKiBkb3JtLmpzIHYwLjAuMSwgKGMpIERhbWlyIFN1bHRhbm92IC0gaHR0cDovL2Zyb250ZWVkLmNvbSwgaHR0cDovL2dpdC5pby92Q1VseiAqL1xuXG4vKiBnbG9iYWwgZGVmaW5lLCBtb2R1bGUgKi9cbihmdW5jdGlvbiAoaXNOb2RlLCBuaWwpIHtcbiAgLy8gZGV0ZWN0IG5vZGUuanMgZW52XG4gIHRyeSB7XG4gICAgaXNOb2RlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nXG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge31cblxuICAvLyBjYWNoZSBnbG9iYWxzXG4gIHZhciByb290ID0gaXNOb2RlID8gZ2xvYmFsIDogd2luZG93XG4gIHZhciByb290Tm9kZSA9ICFpc05vZGUgJiYgZG9jdW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBuaWxcbiAgdmFyIHR5cGVzID0ge2Rlc2t0b3A6IG5pbCwgbW9iaWxlOiBuaWwsIHBob25lOiBuaWwsIHRhYmxldDogbmlsLCB0djogbmlsLCBjb25zb2xlOiBuaWwsIGJvdDogbmlsfVxuXG4gIC8vIGRvcm0uanMgaW5zdGFuY2VcbiAgdmFyIERvcm0gPSBmdW5jdGlvbiAoaW5pdCkge1xuICAgIGluaXQgJiYgdGhpcy5pbml0KHt9LCByb290Tm9kZSlcbiAgfVxuXG4gIC8vIGluaXRpYXRlIGRvcm0uanNcbiAgRG9ybS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBkb21Ob2RlKSB7XG4gICAgaWYgKGRvbU5vZGUgJiYgZG9tTm9kZS5ub2RlVHlwZSAmJiAhKGRvbU5vZGUubm9kZVR5cGUgPT09IDEgfHwgZG9tTm9kZS5ub2RlVHlwZSA9PT0gOSkpIHtcbiAgICAgIGRvbU5vZGUgPSBuaWxcbiAgICB9XG5cbiAgICBvcHRpb25zID0gdGhpcy5hc3NpZ24oe1xuICAgICAgcHJlZml4OiAnZG9ybScsXG4gICAgICBjbGFzc2VzOiB0cnVlLFxuICAgICAgLy8gdHY6IG5pbCxcbiAgICAgIC8vIGNvbnNvbGU6IG5pbCxcbiAgICAgIC8vIGJvdDogbmlsLFxuICAgICAgdXNlcmFnZW50OiAhaXNOb2RlICYmIHJvb3QubmF2aWdhdG9yID8gcm9vdC5uYXZpZ2F0b3IudXNlckFnZW50IDogbnVsbCxcbiAgICB9LFxuICAgICAgdGhpcy5nZXRBdHRyaWJ1dGUoKSxcbiAgICAgIHRoaXMuZ2V0T3B0aW9ucygpLFxuICAgICAgdGhpcy5nZXRPcHRpb25zKG9wdGlvbnMpXG4gICAgKVxuXG4gICAgLy8gcGFyc2UgY3VycmVudCB1c2VyQWdlbnRcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5wYXJzZShvcHRpb25zLnVzZXJhZ2VudCwgb3B0aW9ucylcbiAgICB2YXIgcmVzdWx0SGVscGVyXG5cbiAgICAvLyBub3JtYWxpemUgYWNjb3JkaW5nIG9wdGlvbnNcbiAgICBmb3IgKHZhciB0eXBlIGluIHR5cGVzKSB7XG4gICAgICBpZiAob3B0aW9uc1t0eXBlXSA9PT0gZmFsc2UgfHwgb3B0aW9uc1t0eXBlXSA9PT0gbmlsKSB7XG4gICAgICAgIHJlc3VsdFt0eXBlXSA9IG5pbFxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9uc1t0eXBlXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmVzdWx0W3R5cGVdID0gcmVzdWx0W29wdGlvbnNbdHlwZV1dXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgcmVzdWx0SXRlbSBpbiByZXN1bHQpIHtcbiAgICAgIGlmIChyZXN1bHRbcmVzdWx0SXRlbV0gPT09IHRydWUgJiYgdHlwZXNbcmVzdWx0SXRlbV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyByZWRpcmVjdHNcbiAgICAgICAgaWYgKCFpc05vZGUgJiYgcm9vdC5sb2NhdGlvbikge1xuICAgICAgICAgIHJlc3VsdEhlbHBlciA9IG9wdGlvbnNbcmVzdWx0SXRlbSArICdyZWRpcmVjdCddXG5cbiAgICAgICAgICBpZiAocmVzdWx0SGVscGVyKSB7XG4gICAgICAgICAgICByb290LmxvY2F0aW9uLnJlcGxhY2UocmVzdWx0SGVscGVyKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGxiYWNrc1xuICAgICAgICByZXN1bHRIZWxwZXIgPSBvcHRpb25zW3Jlc3VsdEl0ZW0gKyAnY2FsbGJhY2snXVxuICAgICAgICBpZiAocmVzdWx0SGVscGVyICYmIHR5cGVvZiAocmVzdWx0SGVscGVyKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlc3VsdEhlbHBlcihyZXN1bHQsIG9wdGlvbnMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocm9vdE5vZGUgJiYgb3B0aW9ucy5jbGFzc2VzKSB7XG4gICAgICB2YXIgcm9vdENsYXNzID0gdGhpcy50cmltKHJvb3ROb2RlLmNsYXNzTmFtZSlcblxuICAgICAgZm9yICh2YXIgcmVzdWx0Q2xhc3MgaW4gcmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHRbcmVzdWx0Q2xhc3NdICE9PSBuaWwpIHtcbiAgICAgICAgICByb290Q2xhc3MgKz0gJyAnICsgKG9wdGlvbnMucHJlZml4ID8gb3B0aW9ucy5wcmVmaXggKyAnLScgOiAnJykgKyAoIXJlc3VsdFtyZXN1bHRDbGFzc10gPyAnbm90LScgOiAnJykgKyAocmVzdWx0Q2xhc3MgPT09ICdvcycgPyByZXN1bHRbcmVzdWx0Q2xhc3NdIDogcmVzdWx0Q2xhc3MpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcm9vdE5vZGUuY2xhc3NOYW1lID0gdGhpcy50cmltKHJvb3RDbGFzcylcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvLyBwYXJzZSB1c2VyQWdlbnQgYW5kIHJldHVybiBvYmplY3RcbiAgRG9ybS5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3RyaW5nLCBvcHRpb25zLCByZXN1bHQpIHtcbiAgICBzdHJpbmcgPSB0eXBlb2YgKHN0cmluZykgPT09ICdzdHJpbmcnID8gdGhpcy50cmltKHN0cmluZykgOiBuaWxcbiAgICByZXN1bHQgPSB7fVxuXG4gICAgaWYgKHN0cmluZykge1xuICAgICAgdmFyIG9zXG4gICAgICB2YXIgcGhvbmVcbiAgICAgIHZhciB0YWJsZXRcbiAgICAgIHZhciBzZWNvbmRhcnlcbiAgICAgIHZhciBsZWdhY3kgPSAnYW1vaXxiYWRhfGphc21pbmV8bWFlbW98bWVlZ298bm9raWFcXFxcRFxcXFxkezJ9fHBhbG18cG9ja2V0fHNhaWxmaXNofHNlcmllcy5bMTAtOTBdfHN5bWInXG4gICAgICB2YXIgY2hlY2sgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChrZXl3b3JkLCAnaScpLnRlc3Qoc3RyaW5nKVxuICAgICAgfVxuXG4gICAgICAvLyBkZXRlY3QgY29uc29sZXNcbiAgICAgIGlmIChjaGVjaygnY2FyKC4qPylzeXN8ZnVuYyguKj8pdGl0YW58bmludGVuZG98cGxheXN0YXRpb258c29ueSguKj8pcHN8d2lpfHhib3gnKSkge1xuICAgICAgICByZXN1bHQuY29uc29sZSA9IHNlY29uZGFyeSA9IHRydWVcblxuICAgICAgLy8gZGV0ZWN0IHR2c1xuICAgICAgfSBlbHNlIGlmIChjaGVjaygnYWZ0YnwoYXBwbGV8Z29vZ2xlfGhiYnxpbnRlcm5ldC58bmV0fHBvdl98cG93ZXJ8c21hcnR8c29ueWR8d2ViKSguKj8pdHZ8Ym94ZWV8Y2UtaHRtbHxkbGluayguKj8pZHNtfGRsbmFkb2N8ZG9uZ2xlfGVzcGlhbHxreWxvfGxvZXdlfG5ldChib3h8Y2FzdCl8cm9rdXx0aG9tfHR1YmV8dHYgfHZpZXJhJykpIHtcbiAgICAgICAgcmVzdWx0LnR2ID0gc2Vjb25kYXJ5ID0gdHJ1ZVxuXG4gICAgICAvLyBkZXRlY3QgYm90c1xuICAgICAgfSBlbHNlIGlmIChjaGVjaygnYW5vbnltfGJvdHxjaXNjb3xjcmF3bHxncihhfHUpYnxodHRwfHNlYXJjaHxzZWVrfHNwaWRlcnx3b3JtJykpIHtcbiAgICAgICAgcmVzdWx0LmJvdCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gZGV0ZWN0IG9zXG4gICAgICBpZiAoY2hlY2soJ2lvc3xpcChhZHxob25lfG9kKScpKSB7XG4gICAgICAgIG9zID0gJ2lvcydcblxuICAgICAgICBpZiAoIXNlY29uZGFyeSkge1xuICAgICAgICAgIGlmIChjaGVjaygncGFkJykpIHtcbiAgICAgICAgICAgIHRhYmxldCA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGhvbmUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGFuZHJvaWRcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2soJ2FuZHJvaWR8a2luZGxlfHNpbGsnKSkge1xuICAgICAgICBpZiAoc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgaWYgKGNoZWNrKCdhbmRyb2lkJykpIHtcbiAgICAgICAgICAgIG9zID0gJ2FuZHJvaWQnXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9zID0gJ2FuZHJvaWQnXG5cbiAgICAgICAgICBpZiAoKGNoZWNrKCdtb2JpbGV8b3BlcmEgKG1pbml8bW9iaSl8KHhsfHhtKVxcXFxkezJ9XFxcXEQnKSAmJlxuICAgICAgICAgICAgIWNoZWNrKCdPZHlzKC4qPykoc3BhY2V8eHByZXNzKXxhbGx2aWV3KC4qPykoc3BlZWR8Y2l0eSl8a29ib3xtc2kgZW5qb3l8bmFiaXxub29rfG5vdGV8cG9ja2V0Ym9va3x0LWh1Ynx4ZWxpbycpICYmXG4gICAgICAgICAgICAhY2hlY2soJ2d0LXBcXFxcZHsyfXxzYy1cXFxcZHsyfVxcXFxEJykpIHx8XG4gICAgICAgICAgICBjaGVjaygnc2RrIGInKSkge1xuICAgICAgICAgICAgcGhvbmUgPSB0cnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhYmxldCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gYmxhY2tiZXJyeVxuICAgICAgfSBlbHNlIGlmIChjaGVjaygnYmxhY2tiZXJyeXxiYjEwfHJpbSg/IWVudCknKSkge1xuICAgICAgICBvcyA9ICdibGFja2JlcnJ5J1xuXG4gICAgICAgIGlmICghc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgaWYgKGNoZWNrKCd0YWJsZXQnKSkge1xuICAgICAgICAgICAgdGFibGV0ID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwaG9uZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZmlyZWZveCBvc1xuICAgICAgfSBlbHNlIGlmIChjaGVjaygnXFxcXCgobW9iaWxlfHRhYmxldCk7JykgJiYgY2hlY2soJzsgcnY6JykpIHtcbiAgICAgICAgb3MgPSAnZm94b3MnXG5cbiAgICAgICAgaWYgKCFzZWNvbmRhcnkpIHtcbiAgICAgICAgICBpZiAoY2hlY2soJ3RhYmxldCcpKSB7XG4gICAgICAgICAgICB0YWJsZXQgPSB0cnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBob25lID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyB3aW5kb3dzXG4gICAgICAvLyB9IGVsc2UgaWYgKGNoZWNrKCdjeWd3aW58d2luZG93c3x3aW5bIFxcXFxkXScpICYmICFjaGVjaygnZGFyd2luJykpIHtcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2soJ29zXFxcXC8yfHdpbicpICYmICFjaGVjaygnZGFyd2luJykpIHtcbiAgICAgICAgb3MgPSAnd2luZG93cydcblxuICAgICAgICBpZiAoIXNlY29uZGFyeSkge1xuICAgICAgICAgIGlmIChjaGVjayhsZWdhY3kpKSB7XG4gICAgICAgICAgICBwaG9uZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNoZWNrKCdwaG9uZXx3cGRlc2t0b3AnKSkge1xuICAgICAgICAgICAgICBwaG9uZSA9IHRydWVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2soJ3RhYmxldCcpIHx8IChjaGVjaygndG91Y2gnKSAmJiBjaGVjaygnaWVtb2JpbGUnKSkpIHtcbiAgICAgICAgICAgICAgdGFibGV0ID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGVjaygnbW9iaScpKSB7XG4gICAgICAgICAgICAgIHBob25lID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBtYWNcbiAgICAgIH0gZWxzZSBpZiAoY2hlY2soJ2RhcndpbnxtYWN8b3NbIF8tXT94JykpIHtcbiAgICAgICAgb3MgPSAnbWFjJ1xuXG4gICAgICAvLyB0aGlyZC1wYXJ0eSBvc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFzZWNvbmRhcnkgJiYgKGNoZWNrKGxlZ2FjeSkgfHwgY2hlY2soJ21pZHB8bW9iaXxwdWZmaW4nKSkpIHtcbiAgICAgICAgICBwaG9uZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGVjaygnYmFkYXxcXFxcRHszfWJzZHxocCguKj8pdXh8KGlyfHVuKWl4fGxpbnV4fG1hZW1vfG1lZWdvfHNhaWxmaXNofHN1bm9zfHRpemVuJykpIHtcbiAgICAgICAgICBvcyA9ICduaXgnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc3BlY2lmaWMgaWRzXG4gICAgICBpZiAoY2hlY2soJ2ZvbGlvfHBhZHxzbGF0ZXx0YWIoPyFvdXR8cmVjKScpKSB7XG4gICAgICAgIHBob25lID0gZmFsc2VcbiAgICAgICAgdGFibGV0ID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChjaGVjaygnanVjfChwYWR8dm9kYSlmb25lJykpIHtcbiAgICAgICAgcGhvbmUgPSB0cnVlXG4gICAgICAgIHRhYmxldCA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIC8vIHNwZWNpZmljIGJyYW5kc1xuICAgICAgaWYgKCFzZWNvbmRhcnkgJiYgIXBob25lICYmICF0YWJsZXQgJiYgKCFvcyB8fCBvcyA9PT0gJ25peCcpICYmIGNoZWNrKCdodGN8bW90W28gLV18bm9raWF8c2Ftc3VuZ3xzb255ZXJpY3x4ZGEnKSkge1xuICAgICAgICBwaG9uZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gZGVza3RvcFxuICAgICAgaWYgKG9zID09PSAnd2luZG93cycgJiYgY2hlY2soJyh3aW58d293fHgpNjQnKSB8fCByZXN1bHQuYm90ICYmICFjaGVjaygnbW9iaScpKSB7XG4gICAgICAgIHBob25lID0gdGFibGV0ID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgLy8gZGV0ZWN0IHBob25lcyBhbmQgdGFibGV0c1xuICAgICAgaWYgKHBob25lIHx8IHRhYmxldCB8fCBzZWNvbmRhcnkpIHtcbiAgICAgICAgcmVzdWx0Lm1vYmlsZSA9IHRydWVcblxuICAgICAgICBpZiAocGhvbmUpIHtcbiAgICAgICAgICByZXN1bHQucGhvbmUgPSBwaG9uZVxuICAgICAgICB9IGVsc2UgaWYgKHRhYmxldCkge1xuICAgICAgICAgIHJlc3VsdC50YWJsZXQgPSB0YWJsZXRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjaGVjaygnbWFjfG5peHx3aW4nLCBvcykpIHtcbiAgICAgICAgICBvcyA9IG5pbFxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmRlc2t0b3AgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHNhdmUgb3NcbiAgICAgIGlmIChvcykge1xuICAgICAgICByZXN1bHQub3MgPSBvc1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIHR5cGUgaW4gdHlwZXMpIHtcbiAgICAgIHJlc3VsdFt0eXBlXSA9ICEhcmVzdWx0W3R5cGVdXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gZ2V0IGRhdGEtZG9ybSBhdHRyaWJ1dGVcbiAgRG9ybS5wcm90b3R5cGUuZ2V0QXR0cmlidXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkYXRhID0ge31cblxuICAgIGlmIChyb290Tm9kZSkge1xuICAgICAgdmFyIGF0dHJpYnV0ZSA9IHJvb3ROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1kb3JtJylcblxuICAgICAgaWYgKGF0dHJpYnV0ZSkge1xuICAgICAgICBhdHRyaWJ1dGUgPSB0aGlzLnRyaW0oYXR0cmlidXRlKS5zcGxpdCgvXFxzKixcXHMqLylcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBhdHRyaWJ1dGVJdGVtID0gYXR0cmlidXRlW2ldLnNwbGl0KC9cXHMqOlxccyovKVxuICAgICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlSXRlbVswXS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlSXRlbVsxXVxuXG4gICAgICAgICAgaWYgKGF0dHJpYnV0ZUl0ZW0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgPT09ICdwcmVmaXgnKSB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWUgPT09ICdmYWxzZScgfHwgIWF0dHJpYnV0ZVZhbHVlID8gJycgOiAoYXR0cmlidXRlVmFsdWUgPT09ICd0cnVlJyA/IG5pbCA6IGF0dHJpYnV0ZVZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnY2xhc3NlcycpIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZSA9PT0gJ3RydWUnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID09PSAnbnVsbCcgJiYgKGF0dHJpYnV0ZVZhbHVlID0gbmlsKVxuICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgIT09IG5pbCAmJiAoZGF0YVthdHRyaWJ1dGVOYW1lXSA9IGF0dHJpYnV0ZVZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICAvLyBnZXQgd2luZG93LmRvcm1PcHRpb25zIG9yIGN1c3RvbSBvcHRpb25zXG4gIERvcm0ucHJvdG90eXBlLmdldE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucywgcmVzdWx0KSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgKCFpc05vZGUgPyAocm9vdC5kb3JtT3B0aW9ucyB8fCB7fSkgOiB7fSlcbiAgICByZXN1bHQgPSB7fVxuXG4gICAgZm9yICh2YXIgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICAgIHJlc3VsdFtvcHRpb24udG9Mb3dlckNhc2UoKV0gPSBvcHRpb25zW29wdGlvbl1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvLyBjcm9zcy1icm93c2VyIE9iamVjdC5hc3NpZ24oKSByZXBsYWNlbWVudFxuICBEb3JtLnByb3RvdHlwZS5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAxLCBrZXksIHNyYzsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICBzcmMgPSBhcmd1bWVudHNbaW5kZXhdXG5cbiAgICAgIGZvciAoa2V5IGluIHNyYykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNyYywga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc3JjW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbiAgfVxuXG4gIC8vIGNyb3NzLWJyb3dzZXIgU3RyaW5nLnRyaW0oKSByZXBsYWNlbWVudFxuICBEb3JtLnByb3RvdHlwZS50cmltID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgcmV0dXJuICh2YXJpYWJsZSArICcnKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbiAgfVxuXG4gIC8vIGV4cG9ydHNcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIGV4cG9ydCBmb3IgYW1kIGZhbnNcbiAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBEb3JtKClcbiAgICB9KVxuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gZXhwb3J0IGluIE5vZGUuanMgc3R5bGVcbiAgICBtb2R1bGUuZXhwb3J0cyA9IG5ldyBEb3JtKClcbiAgfSBlbHNlIHtcbiAgICAvLyBleHBvcnQgdG8gZ2xvYmFsIGFuZCBsYXVuY2hcbiAgICAhaXNOb2RlICYmIChyb290LmRvcm0gPSBuZXcgRG9ybSh0cnVlKSlcbiAgfVxufSkoZmFsc2UsIG51bGwpXG4iLCIvLyBlbGVtZW50LWNsb3Nlc3QgfCBDQzAtMS4wIHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL2Nsb3Nlc3RcblxuaWYgKHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzICE9PSAnZnVuY3Rpb24nKSB7XG5cdEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGZ1bmN0aW9uIG1hdGNoZXMoc2VsZWN0b3IpIHtcblx0XHR2YXIgZWxlbWVudCA9IHRoaXM7XG5cdFx0dmFyIGVsZW1lbnRzID0gKGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudC5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0XHR2YXIgaW5kZXggPSAwO1xuXG5cdFx0d2hpbGUgKGVsZW1lbnRzW2luZGV4XSAmJiBlbGVtZW50c1tpbmRleF0gIT09IGVsZW1lbnQpIHtcblx0XHRcdCsraW5kZXg7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEJvb2xlYW4oZWxlbWVudHNbaW5kZXhdKTtcblx0fTtcbn1cblxuaWYgKHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSB0aGlzO1xuXG5cdFx0d2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSkge1xuXHRcdFx0aWYgKGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG59XG4iLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG5cbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgbGlzdCA9IHRoaXMubWFwW25hbWVdXG4gICAgaWYgKCFsaXN0KSB7XG4gICAgICBsaXN0ID0gW11cbiAgICAgIHRoaXMubWFwW25hbWVdID0gbGlzdFxuICAgIH1cbiAgICBsaXN0LnB1c2godmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gICAgcmV0dXJuIHZhbHVlcyA/IHZhbHVlc1swXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gfHwgW11cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBbbm9ybWFsaXplVmFsdWUodmFsdWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5tYXApLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgdGhpcy5tYXBbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCB0aGlzKVxuICAgICAgfSwgdGhpcylcbiAgICB9LCB0aGlzKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgLy8gT25seSBzdXBwb3J0IEFycmF5QnVmZmVycyBmb3IgUE9TVCBtZXRob2QuXG4gICAgICAgIC8vIFJlY2VpdmluZyBBcnJheUJ1ZmZlcnMgaGFwcGVucyB2aWEgQmxvYnMsIGluc3RlYWQuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgIH1cblxuICAgICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICByZXR1cm4gcmVqZWN0ZWQgPyByZWplY3RlZCA6IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcbiAgICBpZiAoUmVxdWVzdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihpbnB1dCkpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBpbnB1dFxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBoZWFkZXJzKHhocikge1xuICAgIHZhciBoZWFkID0gbmV3IEhlYWRlcnMoKVxuICAgIHZhciBwYWlycyA9ICh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpLnRyaW0oKS5zcGxpdCgnXFxuJylcbiAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgdmFyIHNwbGl0ID0gaGVhZGVyLnRyaW0oKS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gc3BsaXQuc2hpZnQoKS50cmltKClcbiAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJzonKS50cmltKClcbiAgICAgIGhlYWQuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgfSlcbiAgICByZXR1cm4gaGVhZFxuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dFxuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMgPyBvcHRpb25zLmhlYWRlcnMgOiBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0XG4gICAgICBpZiAoUmVxdWVzdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihpbnB1dCkgJiYgIWluaXQpIHtcbiAgICAgICAgcmVxdWVzdCA9IGlucHV0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB9XG5cbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICBmdW5jdGlvbiByZXNwb25zZVVSTCgpIHtcbiAgICAgICAgaWYgKCdyZXNwb25zZVVSTCcgaW4geGhyKSB7XG4gICAgICAgICAgcmV0dXJuIHhoci5yZXNwb25zZVVSTFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXZvaWQgc2VjdXJpdHkgd2FybmluZ3Mgb24gZ2V0UmVzcG9uc2VIZWFkZXIgd2hlbiBub3QgYWxsb3dlZCBieSBDT1JTXG4gICAgICAgIGlmICgvXlgtUmVxdWVzdC1VUkw6L20udGVzdCh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKSB7XG4gICAgICAgICAgcmV0dXJuIHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyh4aHIpLFxuICAgICAgICAgIHVybDogcmVzcG9uc2VVUkwoKVxuICAgICAgICB9XG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG4iXX0=
