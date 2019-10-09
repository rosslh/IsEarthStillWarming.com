(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("unitransform");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(12);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(34)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(33);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(35);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(18);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(36);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(12);

var _helpers = __webpack_require__(37);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_4__);


 //



 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(react_static__WEBPACK_IMPORTED_MODULE_2__["addPrefetchExcludes"])(['dynamic']);

var _ref =  true ? {
  name: "10t3lln",
  styles: "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Spectral:400,400i');line-height:1.6;*:not(p){font-family:'Open Sans',sans-serif;}p{font-family:'Spectral',serif;font-size:18px;*{font-family:'Spectral',serif;}}h1{padding:1.75rem 0 1rem;}h2{padding:1.75rem 0 0;font-weight:600;}h3{padding:0.75rem 0 0;font-weight:600;}"
} : undefined;

function App() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_static__WEBPACK_IMPORTED_MODULE_2__["Root"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_static__WEBPACK_IMPORTED_MODULE_2__["Head"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", null, "Global warming information and data"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "description",
    content: "Up-to-date global climate information"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    itemProp: "name",
    content: "Global warming information and data"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    itemProp: "description",
    content: "Up-to-date global climate information"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    itemProp: "image",
    content: "https://isearthstillwarming.com/assets/siteImage.png"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:url",
    content: "https://isearthstillwarming.com"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:type",
    content: "website"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:title",
    content: "Global warming information and data"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:description",
    content: "Up-to-date global climate information"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    property: "og:image",
    content: "https://isearthstillwarming.com/assets/siteImage.png"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:title",
    content: "Global warming information and data"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:description",
    content: "Up-to-date global climate information"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    name: "twitter:image",
    content: "https://isearthstillwarming.com/assets/siteImage.png"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
    charSet: "UTF-8"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: __webpack_require__(47)
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: __webpack_require__(48)
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: __webpack_require__(49)
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Suspense, {
    fallback: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("em", null, "Loading...")
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Router"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_static__WEBPACK_IMPORTED_MODULE_2__["Routes"], {
    path: "*"
  })))));
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(5);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins = [{
  location: "/home/ross/Projects/IsEarthStillWarming2",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_ross_Projects_IsEarthStillWarming2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _home_ross_Projects_IsEarthStillWarming2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_ross_Projects_IsEarthStillWarming2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4__);







Object(_home_ross_Projects_IsEarthStillWarming2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _home_ross_Projects_IsEarthStillWarming2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 19, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return "home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404';
var t_1 = _home_ross_Projects_IsEarthStillWarming2_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/home/ross/Projects/IsEarthStillWarming2/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | home/ross/Projects/IsEarthStillWarming2/src/pages/index */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/home/ross/Projects/IsEarthStillWarming2/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "home/ross/Projects/IsEarthStillWarming2/src/pages/index";
  }
}), universalOptions);
t_1.template = '/home/ross/Projects/IsEarthStillWarming2/src/pages/index.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404': t_0,
  '/home/ross/Projects/IsEarthStillWarming2/src/pages/index.js': t_1
}); // Not Found Template

var notFoundTemplate = "/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(23);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(24);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(25);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(26);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(27);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(28);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(3);

// EXTERNAL MODULE: external "unitransform"
var external_unitransform_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(4);

// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(14);

// CONCATENATED MODULE: /home/ross/Projects/IsEarthStillWarming2/src/components/reflist.js



var citations = [{
  name: "1.5C",
  citation: "IPCC, 2018: Summary for Policymakers. In: Global warming of 1.5\xB0C. An IPCC Special Report on the impacts of global warming of 1.5\xB0C above pre-industrial levels and related global greenhouse gas emission pathways, in the context of strengthening the global response to the threat of climate change, sustainable development, and efforts to eradicate poverty [V. Masson-Delmotte, P. Zhai, H. O. P\xF6rtner, D. Roberts, J. Skea, P.R. Shukla, A. Pirani, W. Moufouma-Okia, C. P\xE9an, R. Pidcock, S. Connors, J. B. R. Matthews, Y. Chen, X. Zhou, M. I. Gomis, E. Lonnoy, T. Maycock, M. Tignor, T. Waterfield (eds.)]. World Meteorological Organization, Geneva, Switzerland, 32 pp.",
  url: "https://www.ipcc.ch/sr15/chapter/summary-for-policy-makers/"
}, {
  name: "1.5C-press-release",
  citation: "Summary for Policymakers of IPCC Special Report on Global Warming of 1.5\xB0C approved by governments. Incheon, Republic of Korea: Intergovernmental Panel on Climate Change (IPCC). 8 October 2018.",
  url: "https://www.ipcc.ch/2018/10/08/summary-for-policymakers-of-ipcc-special-report-on-global-warming-of-1-5c-approved-by-governments/"
}, {
  name: "guardian",
  citation: "Jay, A., D.R. Reidmiller, C.W. Avery, D. Barrie, B.J. DeAngelo, A. Dave, M. Dzaugis, M. Kolian, K.L.M. Lewis, K. Reeves, and D. Winner, 2018: Overview. In Impacts, Risks, and Adaptation in the United States: Fourth National Climate Assessment, Volume II [Reidmiller, D.R., C.W. Avery, D.R. Easterling, K.E. Kunkel, K.L.M. Lewis, T.K. Maycock, and B.C. Stewart (eds.)]. U.S. Global Change Research Program, Washington, DC, USA, pp. 33\u201371. doi: 10.7930/NCA4.2018.CH1.",
  url: "https://www.theguardian.com/environment/2018/oct/08/global-warming-must-not-exceed-15c-warns-landmark-un-report"
}, {
  name: "nasa",
  citation: "\"Global Climate Change.\" NASA Global Climate Change and Global Warming: Vital Signs of the Planet. Jet Propulsion Laboratory / National Aeronautics and Space Administration, 15 June 2008. Web. 14 Jan. 2015. <http://climate.nasa.gov/>.",
  url: "https://climate.nasa.gov/"
}, {
  name: "co2After1958",
  citation: "C. D. Keeling, S. C. Piper, R. B. Bacastow, M. Wahlen, T. P. Whorf, M. Heimann, and H. A. Meijer, Exchanges of atmospheric CO2 and 13CO2 with the terrestrial biosphere and oceans from 1978 to 2000. I. Global aspects, SIO Reference Series, No. 01-06, Scripps Institution of Oceanography, San Diego, 88 pages, 2001. <http://escholarship.org/uc/item/09v319r9>.",
  url: "http://scrippsco2.ucsd.edu/data/atmospheric_co2/icecore_merged_products"
}, {
  name: "co2Before1958",
  citation: "MacFarling Meure, C., D. Etheridge, C. Trudinger, P. Steele, R. Langenfelds, T. van Ommen, A. Smith, and J. Elkins. 2006. The Law Dome CO2, CH4 and N2O Ice Core Records Extended to 2000 years BP. Geophysical Research Letters, Vol. 33, No. 14, L14810 10.1029/2006GL026152.",
  url: "http://scrippsco2.ucsd.edu/data/atmospheric_co2/icecore_merged_products"
}, {
  name: "tempData",
  citation: "\u201CGlobal Surface Temperature | NASA Global Climate Change.\u201D NASA, NASA, 3 May 2018, <https://climate.nasa.gov/vital-signs/global-temperature/>.",
  url: "https://climate.nasa.gov/vital-signs/global-temperature/"
}, {
  name: "emissionsData",
  citation: "\u201CGlobal Greenhouse Gas Emissions Data.\u201D Global Greenhouse Gas Emissions Data, Environmental Protection Agency, 13 Apr. 2017, <https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data>.",
  url: "https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data"
}, {
  name: "natGeo",
  citation: "\u201CGlobal Warming Effects.\u201D National Geographic, National Geographic, 14 Jan. 2019, www.nationalgeographic.com/environment/global-warming/global-warming-effects/.",
  url: "https://www.nationalgeographic.com/environment/global-warming/global-warming-effects/"
}];

var reflist_ref =  true ? {
  name: "vjeie4",
  styles: "list-style-position:inside;margin:0;padding:0;"
} : undefined;

var reflist_ref2 =  true ? {
  name: "1t23hcv",
  styles: "text-indent:-2rem;margin-left:2rem;padding-bottom:1.5rem;word-break:break-all;"
} : undefined;

var reflist_RefList = function RefList() {
  return Object(core_["jsx"])("ol", {
    css: reflist_ref
  }, citations.map(function (x) {
    return Object(core_["jsx"])("li", {
      css: reflist_ref2,
      key: x.name,
      id: "ref-".concat(x.name)
    }, x.citation, " ", x.url && Object(core_["jsx"])("a", {
      href: x.url,
      rel: "external noopener"
    }, "More information"));
  }));
};

/* harmony default export */ var reflist = (reflist_RefList);
// CONCATENATED MODULE: /home/ross/Projects/IsEarthStillWarming2/src/components/cite.js






var cite_ref =  true ? {
  name: "mz5tb9",
  styles: "font-weight:regular;padding:0 1px;"
} : undefined;

var cite_Cite = function Cite(_ref2) {
  var name = _ref2.name;
  return Object(core_["jsx"])("sup", {
    css: cite_ref
  }, Object(core_["jsx"])("a", {
    href: "#ref-".concat(name)
  }, citations.findIndex(function (x) {
    return x.name === name;
  }) + 1));
};

/* harmony default export */ var cite = (Object(external_react_["memo"])(cite_Cite));
// CONCATENATED MODULE: /home/ross/Projects/IsEarthStillWarming2/src/utils/colors.js

var red = "#c10000";
var redDark = Object(external_unitransform_["saturate"])(Object(external_unitransform_["darken"])(red, 12), 5);
// CONCATENATED MODULE: /home/ross/Projects/IsEarthStillWarming2/src/components/stamp.js







var stamp_getColor = function getColor(isGreen) {
  return isGreen ? Object(external_unitransform_["rotate"])(red, 115) : red;
};

var stamp_Stamp = function Stamp(_ref) {
  var children = _ref.children,
      green = _ref.green;
  return Object(core_["jsx"])("div", null, Object(core_["jsx"])("div", {
    id: "stamp",
    css:
    /*#__PURE__*/
    Object(core_["css"])("font-size:3rem;min-width:7rem;text-align:center;font-weight:bold;display:inline-block;padding:0.2rem 0.8rem;text-transform:uppercase;border-radius:12% / 22%;letter-spacing:2px;font-family:Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace !important;color:", stamp_getColor(green), ";border:0.5rem double ", stamp_getColor(green), ";transform:rotate(", green ? "-" : "", "3deg);font-size:2rem;margin:0.8rem 2rem;" + ( true ? "" : undefined))
  }, children));
};

/* harmony default export */ var stamp = (stamp_Stamp);
// CONCATENATED MODULE: /home/ross/Projects/IsEarthStillWarming2/src/components/isEarthWarming.js







var isEarthWarming_ref =  true ? {
  name: "z08pxs",
  styles: "display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;> p{display:inline-block;flex-grow:1;flex-shrink:1;margin:0;flex-basis:400px;}"
} : undefined;

var isEarthWarming_IsEarthWarming = function IsEarthWarming(props) {
  var warmedBy = props.tenYearWarming;

  var citation = Object(core_["jsx"])(cite, {
    name: "tempData"
  });

  var currentYear = new Date().getFullYear();
  var target = props.latestTempValue >= 1.5 ? 2 : 1.5;
  var projectedYear = Math.trunc(currentYear + (target - props.latestTempValue) / (props.tenYearWarming / 10));
  var styles = isEarthWarming_ref;

  if (warmedBy > 0.1) {
    return Object(core_["jsx"])("div", {
      css: styles
    }, Object(core_["jsx"])(stamp, null, "Yes"), Object(core_["jsx"])("p", null, "Over the past 10 years, Earth's average temperature has risen by", " ", Object(core_["jsx"])("span", {
      id: "tenYearWarming"
    }, props.tenYearWarming), "\xB0C.", citation, " ", props.latestTempValue < 2 ? "At this rate, global warming will surpass the +".concat(target, "\xB0C\n              limit set by the Paris Climate Agreement by ").concat(projectedYear, ".") : ""));
  } else if (warmedBy > 0) {
    return Object(core_["jsx"])("div", {
      css: styles
    }, Object(core_["jsx"])(stamp, {
      green: true
    }, "Maybe?"), Object(core_["jsx"])("p", null, "Over the past 10 years, Earth's temperature has only risen by", " ", Object(core_["jsx"])("span", {
      id: "tenYearWarming"
    }, props.tenYearWarming), "\xB0C.", citation));
  }

  return Object(core_["jsx"])("div", {
    css: styles
  }, Object(core_["jsx"])(stamp, {
    green: true
  }, "No"), Object(core_["jsx"])("p", null, "Over the past 10 years, Earth's temperature has dropped by", " ", Object(core_["jsx"])("span", {
    id: "tenYearWarming"
  }, Math.abs(props.tenYearWarming)), "\xB0C.", citation));
};

/* harmony default export */ var isEarthWarming = (isEarthWarming_IsEarthWarming);
// CONCATENATED MODULE: /home/ross/Projects/IsEarthStillWarming2/src/components/contentWrapper.js





var contentWrapper_ContentWrapper = function ContentWrapper(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return Object(core_["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(core_["css"])("max-width:850px;width:80%;margin:0 auto;@media (max-width:700px){width:90%;}", style,  true ? "" : undefined)
  }, children);
};

/* harmony default export */ var contentWrapper = (contentWrapper_ContentWrapper);
// CONCATENATED MODULE: /home/ross/Projects/IsEarthStillWarming2/src/components/co2.js


/* harmony default export */ var co2 = (function () {
  return Object(core_["jsx"])(external_react_["Fragment"], null, "CO", Object(core_["jsx"])("sub", null, "2"));
});
// CONCATENATED MODULE: /home/ross/Projects/IsEarthStillWarming2/src/components/counter.js







var counter_ref =  true ? {
  name: "aln541",
  styles: "display:flex;flex-wrap:wrap;justify-content:space-evenly;> div{flex-grow:1 min-height:80px;padding:2rem 1.5rem 0;> div{font-size:0.9rem;}> strong{padding-top:0.75rem;display:block;font-weight:bold;font-size:1.5rem;}}"
} : undefined;

var counter_Counter = function Counter(_ref2) {
  var currentCo2 = _ref2.currentCo2,
      currentTemp = _ref2.currentTemp;
  return Object(core_["jsx"])(contentWrapper, {
    style: "\n      padding: 0;\n      margin-top: .5rem;\n      text-align: center;\n    "
  }, Object(core_["jsx"])("div", {
    css: counter_ref
  }, Object(core_["jsx"])("div", null, Object(core_["jsx"])("div", null, "Atmospheric ", Object(core_["jsx"])(co2, null)), Object(core_["jsx"])("strong", {
    id: "currentCo2Counter"
  }, currentCo2, "ppm")), Object(core_["jsx"])("div", null, Object(core_["jsx"])("div", null, "Global temperature anomaly"), Object(core_["jsx"])("strong", {
    id: "currentTempCounter"
  }, "+", currentTemp, "\xB0C"))));
};

/* harmony default export */ var counter = (counter_Counter);
// EXTERNAL MODULE: /home/ross/Projects/IsEarthStillWarming2/public/assets/fire-icon.svg
var fire_icon = __webpack_require__(29);
var fire_icon_default = /*#__PURE__*/__webpack_require__.n(fire_icon);

// CONCATENATED MODULE: /home/ross/Projects/IsEarthStillWarming2/src/components/header.js









var header_ref =  true ? {
  name: "1xhrqxi",
  styles: "margin:0;padding:0 !important;line-height:40px;font-size:20px;display:flex;align-items:center;font-weight:600;"
} : undefined;

var header_ref2 =  true ? {
  name: "6irvxf",
  styles: "margin-right:0.6rem;"
} : undefined;

var _ref3 =  true ? {
  name: "1etbfyb",
  styles: "a{display:inline-block;margin:0 6px;&:first-child{margin-left:0;}}"
} : undefined;

var header_Header = function Header(props) {
  return Object(core_["jsx"])("header", {
    css:
    /*#__PURE__*/
    Object(core_["css"])("background-color:", red, ";color:white !important;a{color:white !important;}box-shadow:inset 0 -6rem 12rem -6rem ", redDark, "44,0px 4px 8px 0px rgba(34,34,34,0.3);border-radius:0% 0% 50% 50% / 0% 0% 0.8rem 0.8rem;margin-bottom:1.75rem;" + ( true ? "" : undefined))
  }, Object(core_["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(core_["css"])("background-color:", redDark, ";" + ( true ? "" : undefined))
  }, Object(core_["jsx"])(contentWrapper, {
    style: "\n          display: flex;\n          flex-direction: row;\n          justify-content: space-between;\n          align-items: center;\n        "
  }, Object(core_["jsx"])("h1", {
    css: header_ref
  }, Object(core_["jsx"])("img", {
    css: header_ref2,
    alt: "fire icon",
    height: "20px",
    src: fire_icon_default.a
  }), " ", "IsEarthStillWarming.com"), Object(core_["jsx"])("nav", {
    css: _ref3
  }, Object(core_["jsx"])("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/rosslh/isearthstillwarming.com"
  }, "GitHub")))), Object(core_["jsx"])(counter, props), Object(core_["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(core_["css"])("color:", Object(external_unitransform_["lighten"])(red, 40), ";font-size:15px !important;text-align:center;margin-top:0.5rem;padding:1.5rem 0 2.5rem;font-family:'Open Sans',sans-serif !important;" + ( true ? "" : undefined))
  }, "This website is kept up-to-date with climate data provided by NASA and Scripps Institution of Oceanography"));
};

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: /home/ross/Projects/IsEarthStillWarming2/src/pages/index.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var pages_ref =  true ? {
  name: "oys5ed",
  styles: "width:80%;margin:3rem auto;>div{padding 1.5rem;box-shadow:rgba(00,00,00,0.2) 0px 6px 16px 0px;border-radius:5px;> img{width:100%;}@media (max-width:700px){padding:0;box-shadow:none;}}>strong{margin-top:1.5rem;display:block;text-align:center;}@media (max-width:700px){width:98%;}"
} : undefined;

var pages_ref2 =  true ? {
  name: "xekqe7",
  styles: "svg{margin:0 auto;display:block;.mg-active-datapoint-container{transform:translate(-200px,0);}}"
} : undefined;

var pages_ref3 =  true ? {
  name: "13i30ag",
  styles: "margin-top:0;padding-top:0;"
} : undefined;

var pages_Home =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Home, _Component);

  function Home(props) {
    var _this;

    classCallCheck_default()(this, Home);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Home).call(this, props));
    _this.state = {};
    return _this;
  }

  createClass_default()(Home, [{
    key: "render",
    value: function render() {
      var figureWrapperStyle = pages_ref;
      var datasetOptions = {
        borderColor: Object(external_unitransform_["lighten"])(red, 10),
        backgroundColor: Object(external_unitransform_["desaturate"])(Object(external_unitransform_["lighten"])(red, 20), 30)
      };
      return Object(core_["jsx"])(external_react_["Fragment"], null, Object(core_["jsx"])(header, {
        currentCo2: this.props.latestCo2Value,
        currentTemp: this.props.latestTempValue
      }), Object(core_["jsx"])(contentWrapper, null, Object(core_["jsx"])("article", {
        css: pages_ref2
      }, Object(core_["jsx"])("h2", {
        css: pages_ref3
      }, "Is global warming still happening?"), Object(core_["jsx"])(isEarthWarming, this.props), Object(core_["jsx"])("h2", null, "What is global warming?"), Object(core_["jsx"])("p", null, "Global warming is the trend of Earth", "'", "s temperature rising at an unprecedented rate starting in the mid 20th century.", Object(core_["jsx"])(cite, {
        name: "nasa"
      })), Object(core_["jsx"])("p", null, "Though gradual changes to Earth", "'", "s climate have happened in the past, this latest trend has been primarily caused by the release of carbon dioxide (", Object(core_["jsx"])(co2, null), ") into the atmosphere by burning fossil fuels.", Object(core_["jsx"])(cite, {
        name: "nasa"
      }), " ", Object(core_["jsx"])(co2, null), " is a ", Object(core_["jsx"])("em", null, "greenhouse gas"), ", meaning it traps heat in Earth", "'", "s atmosphere rather than allowing it to radiate into space.", Object(core_["jsx"])(cite, {
        name: "nasa"
      })), Object(core_["jsx"])("p", null, "Since the mid 1950s, Earth", "'", "s temperature has had a clear positive trend (see fig. 1)."), Object(core_["jsx"])("div", {
        css: figureWrapperStyle
      }, Object(core_["jsx"])("div", null, Object(core_["jsx"])(external_react_chartjs_2_["Scatter"], {
        data: {
          datasets: [_objectSpread({
            label: "Global average temperature",
            data: this.props.temp
          }, datasetOptions)]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                callback: function callback(value) {
                  return "".concat(value, "\xB0C");
                }
              },
              scaleLabel: {
                display: true,
                labelString: "Global average temperature"
              }
            }]
          }
        }
      })), Object(core_["jsx"])("strong", null, "Figure 1", Object(core_["jsx"])(cite, {
        name: "tempData"
      }))), Object(core_["jsx"])("p", null, "The amount Earth has warmed is measured against the average pre-industrial global temperature. As of", " ", Object(core_["jsx"])("span", {
        id: "latestTempYear"
      }, this.props.latestTempYear), ", Earth", "'", "s temperature is approximately", " ", Object(core_["jsx"])("span", {
        id: "latestTempValue"
      }, this.props.latestTempValue), "\xB0C above pre-industrial levels.", Object(core_["jsx"])(cite, {
        name: "tempData"
      }), " If the planet", "'", "s temperature continues to rise, we can expect many environmental and societal impacts, the most significant of which we will explain in this paper."), Object(core_["jsx"])("p", null, "In late 2015, 184 nations were party to the Paris Climate Accord, a UN agreement dealing with reducing greenhouse gas emissions in an effort to mitigate global warming. The stated goal of the agreement is to limit the average global temperature to 1.5\xB0C above pre-industrial levels.", Object(core_["jsx"])(cite, {
        name: "1.5C"
      })), Object(core_["jsx"])("p", null, "In 2018, the UN released a report detailing the potential impacts of human-induced climate change and possible preventative measures. Its key finding was that staying below the 1.5\xB0C target is possible, but would require ", "\"", "rapid, far-reaching, and unprecedented changes in all aspects of society", "\"", ".", Object(core_["jsx"])(cite, {
        name: "1.5C-press-release"
      }), " Human carbon emissions would need to decrease by 45% from 2010 levels by 2030, and reach net zero by 2050.", Object(core_["jsx"])(cite, {
        name: "1.5C"
      })), Object(core_["jsx"])("p", null, "The primary cause of global warming is the human emission of", " ", Object(core_["jsx"])(co2, null), " into the atmosphere. This ", Object(core_["jsx"])(co2, null), " is produced by burning fossil fuels, mostly from electricity production, agriculture, industry, and vehicles with internal combustion engines.", Object(core_["jsx"])(cite, {
        name: "emissionsData"
      }), " As of", " ", Object(core_["jsx"])("span", {
        id: "latestCo2Year"
      }, this.props.latestCo2Year), ", the atmosphere", "'", "s carbon concentration is", " ", Object(core_["jsx"])("span", {
        id: "latestCo2Value"
      }, this.props.latestCo2Value), "ppm (see fig. 2).", Object(core_["jsx"])(cite, {
        name: "co2After1958"
      })), Object(core_["jsx"])("div", {
        css: figureWrapperStyle
      }, Object(core_["jsx"])("div", null, Object(core_["jsx"])(external_react_chartjs_2_["Scatter"], {
        data: {
          datasets: [_objectSpread({
            label: "Atmospheric CO2",
            data: this.props.co2
          }, datasetOptions)]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                callback: function callback(value) {
                  return "".concat(value, "ppm");
                }
              },
              scaleLabel: {
                display: true,
                labelString: "Atmospheric CO2 concentration"
              }
            }]
          }
        }
      })), Object(core_["jsx"])("strong", null, "Figure 2", Object(core_["jsx"])(cite, {
        name: "co2After1958"
      }), Object(core_["jsx"])(cite, {
        name: "co2Before1958"
      }))), Object(core_["jsx"])("p", null, "Since ", Object(core_["jsx"])(co2, null), " abundance in the atmosphere is directly linked to the Earth", "'", "s temperature increase, limiting atmospheric carbon has been identified as vital to mitigating global warming. As part of the Kyoto Protocol climate convention, scientists have identified 450ppm as a good upper limit for carbon concentration in order to keep global warming below +2\xB0C."), Object(core_["jsx"])("h2", null, "Effects of global warming"), Object(core_["jsx"])("p", null, "Global warming will impact a wide range of issues including health, livelihoods, food security, water supply, human security, and economic growth.", Object(core_["jsx"])(cite, {
        name: "1.5C"
      }), " The severity of these impacts is determined by how hot Earth gets; reaching 2\xB0C above the pre-industrial average would put millions more people at risk than if global warming was limited to 1.5\xB0C.", Object(core_["jsx"])(cite, {
        name: "1.5C"
      }), " Generally speaking, ", "\"", "countries in the tropics and Southern Hemisphere subtropics are projected to experience the largest impacts on economic growth.", "\"", Object(core_["jsx"])(cite, {
        name: "1.5C"
      })), Object(core_["jsx"])("p", null, "The UN projects more frequent weather extremes (both heavy rain and drought) and temperature extremes due to global warming.", Object(core_["jsx"])(cite, {
        name: "1.5C"
      }), " The most immediate risk to the environment is the dying-off of coral reefs- a process that has already started on a large scale (see fig. 3)."), Object(core_["jsx"])("div", {
        css: figureWrapperStyle
      }, Object(core_["jsx"])("div", null, Object(core_["jsx"])("img", {
        src: 'assets/risks.png',
        alt: "risks of climate change"
      })), Object(core_["jsx"])("strong", null, "Figure 3", Object(core_["jsx"])(cite, {
        name: "guardian"
      }), Object(core_["jsx"])(cite, {
        name: "1.5C"
      }))), Object(core_["jsx"])("p", null, "Other already-visible impacts of global warming include worldwide glacier and sea ice melting, which contributes to sea level rise.", Object(core_["jsx"])(cite, {
        name: "natGeo"
      }), " Some regions have experienced severe drought, leading to food-and-water shortages as well as wildfires.", Object(core_["jsx"])(cite, {
        name: "natGeo"
      })), Object(core_["jsx"])("h2", null, "Works Cited"), Object(core_["jsx"])(reflist, null))));
    }
  }]);

  return Home;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_static_["withRouteData"])(pages_Home));

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhciIgZGF0YS1pY29uPSJmaXJlLWFsdCIgcm9sZT0iaW1nIiAKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMzIzLjU2IDUxLjJjLTIwLjggMTkuMy0zOS41OCAzOS41OS01Ni4yMiA1OS45N0MyNDAuMDggNzMuNjIgMjA2LjI4IDM1LjUzIDE2OCAwIDY5Ljc0IDkxLjE3IDAgMjA5Ljk2IDAgMjgxLjYgMCA0MDguODUgMTAwLjI5IDUxMiAyMjQgNTEyczIyNC0xMDMuMTUgMjI0LTIzMC40YzAtNTMuMjctNTEuOTgtMTYzLjE0LTEyNC40NC0yMzAuNHpNMjI0IDQ2NGMtOTcuMDUgMC0xNzYtODEuODMtMTc2LTE4Mi40IDAtNDUuMzcgNDQuMy0xMzMuMjEgMTIwLjE2LTIxNC4wOSAyMi4zNCAyMy4zNiA0Mi44MiA0Ny43MiA2MC4zNCA3MS44NmwzNi42MiA1MC40NCAzOS40MS00OC4yOWM1LjgzLTcuMTUgMTEuODUtMTQuMTUgMTguMDEtMjAuOTdDMzY4Ljg5IDE3Ny45NiA0MDAgMjUwLjQyIDQwMCAyODEuNiA0MDAgMzgyLjE3IDMyMS4wNSA0NjQgMjI0IDQ2NHptODkuNDctMjIwLjg0bC01MS4zIDU4LjUyUzE4MS43NSAxOTguOTggMTc1LjY5IDE5MkMxMzMuMjcgMjQyLjg2IDExMiAyNzIuNjIgMTEyIDMwNi40MSAxMTIgMzc0LjIzIDE2My4zNyA0MTYgMjI2LjUgNDE2YzI1LjI2IDAgNDguNjItNy44NyA2Ny41OC0yMS4xMyA0My4wOC0zMC4xNCA1My4xOC04OC41OCAyOS4yNi0xMzQuMjQtMi45NS01LjYyLTYuMjQtMTEuNDgtOS44Ny0xNy40N3oiIGNsYXNzPSIiPjwvcGF0aD4KPC9zdmc+"

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
__webpack_require__(32);
module.exports = __webpack_require__(38);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(15)["default"];

var _require = __webpack_require__(16),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/home/ross/Projects/IsEarthStillWarming2/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(15)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(16),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(17),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/home/ross/Projects/IsEarthStillWarming2/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(17),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(12);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 5,
	"./": 5,
	"./index": 5,
	"./index.js": 5
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 34;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(11);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(18);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(39);

var _interopRequireDefault = __webpack_require__(40);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(41));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(42));

var React = _interopRequireWildcard(__webpack_require__(1));

var _useStaticInfo = __webpack_require__(43);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(44)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("/home/ross/Projects/IsEarthStillWarming2/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);



 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render;

  var render = function render(Comp) {
    renderMethod(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__["AppContainer"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("modern-normalize/modern-normalize.css");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB41BMVEUAAAC+DCHBDSPGGyDCECLADCPCDiTRPBfPNBm/CSTGRyHOMxm5ACnHHx7URBXbVhDqggTeXw1XAFNTAFXACyTCDyPBCyS9BSXNKBy5ACPADSPBDSPDEyHHHh/BDCPCDiPBDiPJJhzPNBnSPxbBDCPDESLGGCHDECLZUhHYThLNMBq9BSa+ByXDESLJHh/LIh7DECLjbwndXA6/ByXKKBzFGiDHGSDPKxzPLBzFFSHrhwPZVBHACyPEFiHIIB7URBXUQxXTQhXJHh/SNRnVOxjLJB3BDiPDECLCECLPNhjSPhbfYw3fZA3IHR/WQBfbTxXYRRXRNBnOKxzGGSDcWw/eXw3BDSO/CSTaVxDROxfJIR7dWBflchneVxHbThPWPhjHGyDNMBrJJB27ACjADCPCDyPEEiLGGSDUOhfjbRbwniHofRbjbBbeXRrNKRzEEyLBDiPBDCPACyTDESLLIh7UOhrcTxPogBj4xCz4wyz1tinmeR/TNxjLIh6/CSTEEiLMJR3hbSLvnSX4wy3xqSneYR/DESLMJB3leyTBDCPJHh7DECLOLhzkeCLzti34yTHOLhyvACfFFx3VTSLebSj92jP70zL5zDL92zT+3TP92jT5yzLdXB73wi/93DT+3jP///+kAsNwAAAAlXRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAk2HxwnjZswZwMutN99R40FAQeT4+JjSm4uOi626el7EDF0FgcGlFqe7+7SgJKkUTVrf5P08/Lw8almLAQyME7D9/j29fTBPSoDD7O/zfP5/Pr59+7QqQ8Wy/f3+Pv+/v369fYPwPj6/P79+Yn7/CXGJpHY8fiSAxo3RvoBCk4AAAABYktHRKBe076gAAAAB3RJTUUH4wEPFhol2oULNAAAAOxJREFUGNNjYAABRiYpaRlZZhYGKGBlk5NXUFRSZofymZhUVNXUNTS1OCB8Tm0dXT19A0MjYy4mEJ+bx8TUzNzC0sraxtaOFyjAZ+/g6OTs4urm7uHpBTKFX8Dbx9fPPyAwKDgkVBBoYlh4RGRUdExsXHxCYlIyEwNTSmpaekZmVnZObl5+QSFQoKi4pLSsvKKyqrqmtrgIKFBX39DY1Dx16rSW1ob6OqCAUFt7x/QZM2fOmt3R3ibMxCAi2tk1Z+68+fPnzZ3T1SkqxsAgLtHd09vX39/XO6FbQhzsdsmJkyZPmTJ50kRJBiwAAMAAP1wQFsKgAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAxLTE1VDIyOjI2OjM3KzAxOjAw2dttagAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMS0xNVQyMjoyNjozNyswMTowMKiG1dYAAAAbdEVYdFNvZnR3YXJlAEFQTkcgQXNzZW1ibGVyIDMuMF5FLBwAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII="

/***/ })
/******/ ]);
});