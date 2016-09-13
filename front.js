/*! front.js v0.0.1, (c) Damir Sultanov - http://fronteed.com, http://git.io/vi0x1 */

// require polyfills
require('classlist.js')
require('element-closest')
require('whatwg-fetch')

// require packages
// var domready = require('domready')
var dorm = require('dorm.js')

// require modules
require('./modules/*.js', {mode: 'expand'});

(function (window, document) {
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
})(window, document)
