module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/weather_widget.js":
/*!**************************************!*\
  !*** ./components/weather_widget.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_weather_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/weather_icon */ "./helpers/weather_icon.js");
var _jsxFileName = "/Users/fturano1271/Desktop/weather-widget-next-project/components/weather_widget.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var weather = _ref.weather;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1956364526" + " " + "weather__widget",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1956364526" + " " + "widget__slot slot--left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1956364526" + " " + "weather__widget--city",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-1956364526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, weather.location.city)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1956364526" + " " + "weather__widget--condition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, weather.item.condition.text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1956364526" + " " + "widget__slot slot--right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1956364526" + " " + "weather__widget--high",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-1956364526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "H"), " ", weather.item.forecast[0].high, "\xB0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1956364526" + " " + "weather__widget--low",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-1956364526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "L"), " ", weather.item.forecast[0].low, "\xB0")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1956364526" + " " + "widget__slot slot--right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "static/icons/".concat(Object(_helpers_weather_icon__WEBPACK_IMPORTED_MODULE_2__["default"])(weather.item.condition.code), ".svg"),
    className: "jsx-1956364526" + " " + "weather__widget--icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1956364526" + " " + "widget__slot slot--right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1956364526" + " " + "weather__widget--current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-1956364526",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, weather.item.condition.temp, "\xB0"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1956364526",
    css: ".weather__widget.jsx-1956364526{width:100%;font-family:sans-serif;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;padding:1.5rem 1rem;box-sizing:border-box;color:#3b3d3c;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s;position:absolute;top:0;left:0;}.weather__widget.jsx-1956364526:nth-child(1){opacity:1;}.weather__widget--icon.jsx-1956364526{width:2.25rem;height:2.25rem;margin-right:.5rem;}.widget__slot.jsx-1956364526{display:inline-block;}.slot--right.jsx-1956364526{float:right;}.weather__widget--current.jsx-1956364526{font-size:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdHVyYW5vMTI3MS9EZXNrdG9wL3dlYXRoZXItd2lkZ2V0LW5leHQtcHJvamVjdC9jb21wb25lbnRzL3dlYXRoZXJfd2lkZ2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCZ0IsQUFHb0IsQUFhRCxBQUdJLEFBS08sQUFHVCxBQUdHLFVBYmpCLENBYnlCLENBd0J6QixFQVJpQixDQVdqQixNQU5BLFFBSnFCLEtBaEJBLGNBaUJyQiwrRUFoQnNCLG9CQUNFLHNCQUNSLGNBQ0osVUFDYSxzREFDTCxrQkFDWixNQUNDLE9BQ1QiLCJmaWxlIjoiL1VzZXJzL2Z0dXJhbm8xMjcxL0Rlc2t0b3Avd2VhdGhlci13aWRnZXQtbmV4dC1wcm9qZWN0L2NvbXBvbmVudHMvd2VhdGhlcl93aWRnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VhdGhlckljb24gZnJvbSAnLi4vaGVscGVycy93ZWF0aGVyX2ljb24nXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHdlYXRoZXIgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJfX3dpZGdldFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0X19zbG90IHNsb3QtLWxlZnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlcl9fd2lkZ2V0LS1jaXR5XCI+XG4gICAgICAgIDxiPnt3ZWF0aGVyLmxvY2F0aW9uLmNpdHl9PC9iPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJfX3dpZGdldC0tY29uZGl0aW9uXCI+XG4gICAgICAgIHt3ZWF0aGVyLml0ZW0uY29uZGl0aW9uLnRleHR9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldF9fc2xvdCBzbG90LS1yaWdodFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyX193aWRnZXQtLWhpZ2hcIj5cbiAgICAgICAgPGI+SDwvYj4ge3dlYXRoZXIuaXRlbS5mb3JlY2FzdFswXS5oaWdofSZkZWc7XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlcl9fd2lkZ2V0LS1sb3dcIj5cbiAgICAgICAgPGI+TDwvYj4ge3dlYXRoZXIuaXRlbS5mb3JlY2FzdFswXS5sb3d9JmRlZztcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0X19zbG90IHNsb3QtLXJpZ2h0XCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIndlYXRoZXJfX3dpZGdldC0taWNvblwiIFxuICAgICAgICBzcmM9e2BzdGF0aWMvaWNvbnMvJHt3ZWF0aGVySWNvbih3ZWF0aGVyLml0ZW0uY29uZGl0aW9uLmNvZGUpfS5zdmdgfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0X19zbG90IHNsb3QtLXJpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJfX3dpZGdldC0tY3VycmVudFwiPlxuICAgICAgICA8Yj57d2VhdGhlci5pdGVtLmNvbmRpdGlvbi50ZW1wfSZkZWc7PC9iPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgey8qIFdpZGdldCBTcGVjaWZpYyBTdHlsZXMgKi99XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLndlYXRoZXJfX3dpZGdldCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDFyZW07XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbG9yOiAjM2IzZDNjO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAud2VhdGhlcl9fd2lkZ2V0Om50aC1jaGlsZCgxKSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICAud2VhdGhlcl9fd2lkZ2V0LS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDIuMjVyZW07XG4gICAgICAgIGhlaWdodDogMi4yNXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgIH1cbiAgICAgIC53aWRnZXRfX3Nsb3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuc2xvdC0tcmlnaHQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgICAud2VhdGhlcl9fd2lkZ2V0LS1jdXJyZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/fturano1271/Desktop/weather-widget-next-project/components/weather_widget.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./helpers/weather_icon.js":
/*!*********************************!*\
  !*** ./helpers/weather_icon.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (weatherCode) {
  var codeToIconMap = {
    0: 'wi-tornado',
    1: 'wi-storm-showers',
    2: 'wi-tornado',
    3: 'wi-thunderstorm',
    4: 'wi-thunderstorm',
    5: 'wi-snow',
    6: 'wi-rain-mix',
    7: 'wi-rain-mix',
    8: 'wi-sprinkle',
    9: 'wi-sprinkle',
    10: 'wi-hail',
    11: 'wi-showers',
    12: 'wi-showers',
    13: 'wi-snow',
    14: 'wi-storm-showers',
    15: 'wi-snow',
    16: 'wi-snow',
    17: 'wi-hail',
    18: 'wi-hail',
    19: 'wi-cloudy-gusts',
    20: 'wi-fog',
    21: 'wi-fog',
    22: 'wi-fog',
    23: 'wi-cloudy-gusts',
    24: 'wi-cloudy-windy',
    25: 'wi-thermometer',
    26: 'wi-cloudy',
    27: 'wi-night-cloudy',
    28: 'wi-day-cloudy',
    29: 'wi-night-cloudy',
    30: 'wi-day-cloudy',
    31: 'wi-night-clear',
    32: 'wi-day-sunny',
    33: 'wi-night-clear',
    34: 'wi-day-sunny-overcast',
    35: 'wi-hail',
    36: 'wi-day-sunny',
    37: 'wi-thunderstorm',
    38: 'wi-thunderstorm',
    39: 'wi-thunderstorm',
    40: 'wi-storm-showers',
    41: 'wi-snow',
    42: 'wi-snow',
    43: 'wi-snow',
    44: 'wi-cloudy',
    45: 'wi-lightning',
    46: 'wi-snow',
    47: 'wi-thunderstorm',
    3200: 'wi-cloud',
    default: 'wi-cloud'
  };

  if (weatherCode && codeToIconMap[weatherCode]) {
    return codeToIconMap[weatherCode];
  } else {
    return codeToIconMap['default'];
  }
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_weather_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/weather_widget */ "./components/weather_widget.js");

var _jsxFileName = "/Users/fturano1271/Desktop/weather-widget-next-project/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
    _this.state = {
      activeIndex: 0,
      data: props.data
    };
    _this.timer = _this.timer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.addLocation = _this.addLocation.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.WeatherWidget = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    _this.NewLocation = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var intervalId = setInterval(this.timer, 5000);
      this.setState({
        intervalId: intervalId
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.state.intervalId);
    }
  }, {
    key: "timer",
    value: function timer() {
      var max = this.state.data.length - 1;
      var next = this.state.activeIndex < max ? this.state.activeIndex + 1 : 0; // this is a little ghetto...

      var weatherWidgets = this.WeatherWidget.current.getElementsByClassName('weather__widget');
      var slideIndicators = this.WeatherWidget.current.getElementsByClassName('slide__indicator');
      weatherWidgets[next].style.opacity = '1';
      weatherWidgets[this.state.activeIndex].style.opacity = '0';
      slideIndicators[next].style.opacity = '1';
      slideIndicators[this.state.activeIndex].style.opacity = '.7';
      this.setState({
        activeIndex: next
      });
    }
  }, {
    key: "jumpTo",
    value: function jumpTo(index) {
      var _this2 = this;

      clearInterval(this.state.intervalId);
      var weatherWidgets = this.WeatherWidget.current.getElementsByClassName('weather__widget');
      var slideIndicators = this.WeatherWidget.current.getElementsByClassName('slide__indicator'); // fanciness all over

      Array.prototype.slice.call(weatherWidgets).forEach(function (ww) {
        return ww.style.opacity = '0';
      });
      Array.prototype.slice.call(slideIndicators).forEach(function (ss) {
        return ss.style.opacity = '.7';
      });
      weatherWidgets[index].style.opacity = '1';
      slideIndicators[index].style.opacity = '1';
      this.setState({
        activeIndex: index
      }, function () {
        var intervalId = setInterval(_this2.timer, 5000);

        _this2.setState({
          intervalId: intervalId
        });
      });
    }
  }, {
    key: "addLocation",
    value: function addLocation(e) {
      var _this3 = this;

      e.preventDefault(); // This should be a variable somewhere
      // In fact, there should be a weather API helper in this project

      var url = "\n      https://query.yahooapis.com/v1/public/yql?q=select * \n      from weather.forecast where woeid in (select woeid from geo.places(1) \n      where text=\"".concat(this.NewLocation.current.value, "\")\n      &format=json&env=store://datatables.org/alltableswithkeys\n    "); // Oh, but some error handling would have been nice... even just a little!!

      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url).then(function (response) {
        response.json().then(function (_ref) {
          var query = _ref.query;

          // let's assume the api is always just working lol
          if (query.results && query.results.channel && query.results.channel.location) {
            var data = _this3.state.data.concat([query.results.channel]);

            _this3.setState({
              data: data
            }, function () {
              return _this3.jumpTo(data.length - 1);
            }); // SOOOO... storing a cookie would be super easy
            // In fact... technically... we could do the could do the cookie bit server side
            // Then, render the slider a bit differently with a <noscript>
            // Result would be that this whole thing would work with NO JAVASCRIPT :)))))
            // So many chins on my emjoi!

          } else {
            // LAME!
            alert('Invalid Location, try again!');
          }
        });
      }); // nah... ;) who needs error handling anyways?
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var data = this.state.data;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: this.WeatherWidget,
        className: "jsx-964362948" + " " + "widgets__slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, data.map(function (weather, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_weather_widget__WEBPACK_IMPORTED_MODULE_4__["default"], {
          weather: weather,
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-964362948" + " " + "slide__indicators",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, data.map(function (weather, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          key: i,
          onClick: function onClick(e) {
            return _this4.jumpTo(i);
          },
          className: "jsx-964362948" + " " + "slide__indicator",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        onSubmit: this.addLocation,
        className: "jsx-964362948" + " " + "add__location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        className: "jsx-964362948",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Add Location (City, State)"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        ref: this.NewLocation,
        className: "jsx-964362948",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        type: "submit",
        className: "jsx-964362948",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "+")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "964362948",
        css: ".widgets__slider.jsx-964362948{position:relative;width:100%;max-width:600px;margin:0 auto;box-shadow:0px 0px 2px rgba(0,0,0,.5);color:#3b3d3c;padding-top:88px;}.add__location.jsx-964362948{background:#eee;font-family:sans-serif;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;padding:1em;box-sizing:border-box;}.add__location.jsx-964362948 label.jsx-964362948{display:block;margin-bottom:5px;font-size:.9em;}.add__location.jsx-964362948 input.jsx-964362948{border:none;width:calc(100% - 60px);padding:6px 8px;font-size:.8em;}.add__location.jsx-964362948 button.jsx-964362948{width:35px;float:right;background:#3b3d3c;color:#fff;border:none;font-size:1.2em;padding:0 0 .2em 0;}.slide__indicators.jsx-964362948{text-align:center;}.slide__indicator.jsx-964362948{width:10px;height:10px;display:inline-block;background:#3b3d3c;margin:5px;border-radius:20px;opacity:.7;-webkit-transition:opacity .5s;transition:opacity .5s;cursor:pointer;}.slide__indicator.jsx-964362948:nth-child(1){opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdHVyYW5vMTI3MS9EZXNrdG9wL3dlYXRoZXItd2lkZ2V0LW5leHQtcHJvamVjdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSXNCLEFBR2lDLEFBU0YsQUFPRixBQUtGLEFBTUQsQUFTTyxBQUdQLEFBV0QsVUFDWixDQXZCYyxBQVlBLENBbEJZLEVBTE4sRUFQSyxFQVRaLEFBb0NiLEtBUnFCLEFBWUUsTUF2Q0wsR0FnQkQsSUFLQyxHQVpHLEdBbUJSLEVBWVEsQ0F2Q0wsRUFnQmhCLEtBS2lCLENBT0gsTUEzQjZCLElBdUM5QixFQVhLLEVBUGxCLE9BbUJxQixPQVhBLFlBWVIsSUF4Q0csR0E2QmhCLElBWXlCLE9BeENOLGlCQUNuQixJQUtjLFlBQ1UsY0FrQ1AsUUFqQ2pCLE9Ba0NBIiwiZmlsZSI6Ii9Vc2Vycy9mdHVyYW5vMTI3MS9EZXNrdG9wL3dlYXRoZXItd2lkZ2V0LW5leHQtcHJvamVjdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgV2VhdGhlcldpZGdldCBmcm9tICcuLi9jb21wb25lbnRzL3dlYXRoZXJfd2lkZ2V0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBhY3RpdmVJbmRleDogMCwgXG4gICAgICBkYXRhOiBwcm9wcy5kYXRhXG4gICAgfVxuICAgIHRoaXMudGltZXIgPSB0aGlzLnRpbWVyLmJpbmQodGhpcylcbiAgICB0aGlzLmFkZExvY2F0aW9uID0gdGhpcy5hZGRMb2NhdGlvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5XZWF0aGVyV2lkZ2V0ID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLk5ld0xvY2F0aW9uID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIGNvbnN0IGxvY2F0aW9ucyA9IFsnU2FuIERpZWdvLCBDQScsICdOZXcgWW9yaywgTlknLCAnSnVuZWF1LCBBSyddXG4gICAgXG4gICAgY29uc3QgdXJscyA9IGxvY2F0aW9ucy5tYXAobG9jYXRpb24gPT4gKGBcbiAgICAgIGh0dHBzOi8vcXVlcnkueWFob29hcGlzLmNvbS92MS9wdWJsaWMveXFsP3E9c2VsZWN0ICogXG4gICAgICBmcm9tIHdlYXRoZXIuZm9yZWNhc3Qgd2hlcmUgd29laWQgaW4gKHNlbGVjdCB3b2VpZCBmcm9tIGdlby5wbGFjZXMoMSkgXG4gICAgICB3aGVyZSB0ZXh0PVwiJHtsb2NhdGlvbn1cIilcbiAgICAgICZmb3JtYXQ9anNvbiZlbnY9c3RvcmU6Ly9kYXRhdGFibGVzLm9yZy9hbGx0YWJsZXN3aXRoa2V5c1xuICAgIGApKVxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwodXJscy5tYXAoZmV0Y2gpKS50aGVuKHJlc3BvbnNlcyA9PlxuICAgICAgUHJvbWlzZS5hbGwocmVzcG9uc2VzLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICApKSAvLyAjcGVyZm9ybWFuY2UhXG5cbiAgICBsZXQgZGF0YSA9IHJlcy5tYXAocmVzID0+IHJlcy5xdWVyeS5yZXN1bHRzID8gcmVzLnF1ZXJ5LnJlc3VsdHMuY2hhbm5lbCA6IGZhbHNlKVxuICAgIGRhdGEgPSBkYXRhLmZpbHRlcihkYXRhID0+IGRhdGEgJiYgZGF0YS5sb2NhdGlvbikgLy8gZmlsdGVyIG91dCBiYWQgbG9jYXRpb25zXG5cbiAgICByZXR1cm4geyBkYXRhIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLnRpbWVyLCA1MDAwKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnRlcnZhbElkIH0pXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWxJZClcbiAgfVxuXG4gIHRpbWVyKCkgeyAgIFxuICAgIGNvbnN0IG1heCA9IHRoaXMuc3RhdGUuZGF0YS5sZW5ndGggLSAxXG4gICAgY29uc3QgbmV4dCA9IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPCBtYXggPyB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ICsgMSA6IDBcblxuICAgIC8vIHRoaXMgaXMgYSBsaXR0bGUgZ2hldHRvLi4uXG4gICAgY29uc3Qgd2VhdGhlcldpZGdldHMgPSB0aGlzLldlYXRoZXJXaWRnZXQuY3VycmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3ZWF0aGVyX193aWRnZXQnKVxuICAgIGNvbnN0IHNsaWRlSW5kaWNhdG9ycyA9IHRoaXMuV2VhdGhlcldpZGdldC5jdXJyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlX19pbmRpY2F0b3InKVxuXG4gICAgd2VhdGhlcldpZGdldHNbbmV4dF0uc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIHdlYXRoZXJXaWRnZXRzW3RoaXMuc3RhdGUuYWN0aXZlSW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAnMCdcblxuICAgIHNsaWRlSW5kaWNhdG9yc1tuZXh0XS5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgc2xpZGVJbmRpY2F0b3JzW3RoaXMuc3RhdGUuYWN0aXZlSW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAnLjcnXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSW5kZXg6IG5leHQgfSlcbiAgfVxuXG4gIGp1bXBUbyhpbmRleCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbElkKVxuXG4gICAgY29uc3Qgd2VhdGhlcldpZGdldHMgPSB0aGlzLldlYXRoZXJXaWRnZXQuY3VycmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3ZWF0aGVyX193aWRnZXQnKVxuICAgIGNvbnN0IHNsaWRlSW5kaWNhdG9ycyA9IHRoaXMuV2VhdGhlcldpZGdldC5jdXJyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlX19pbmRpY2F0b3InKVxuXG4gICAgLy8gZmFuY2luZXNzIGFsbCBvdmVyXG4gICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwod2VhdGhlcldpZGdldHMpLmZvckVhY2god3cgPT4gd3cuc3R5bGUub3BhY2l0eSA9ICcwJylcbiAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzbGlkZUluZGljYXRvcnMpLmZvckVhY2goc3MgPT4gc3Muc3R5bGUub3BhY2l0eSA9ICcuNycpXG5cbiAgICB3ZWF0aGVyV2lkZ2V0c1tpbmRleF0uc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIHNsaWRlSW5kaWNhdG9yc1tpbmRleF0uc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogaW5kZXggfSwgKCkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMudGltZXIsIDUwMDApXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW50ZXJ2YWxJZCB9KVxuICAgIH0pXG4gIH1cblxuICBhZGRMb2NhdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgLy8gVGhpcyBzaG91bGQgYmUgYSB2YXJpYWJsZSBzb21ld2hlcmVcbiAgICAvLyBJbiBmYWN0LCB0aGVyZSBzaG91bGQgYmUgYSB3ZWF0aGVyIEFQSSBoZWxwZXIgaW4gdGhpcyBwcm9qZWN0XG4gICAgY29uc3QgdXJsID0gYFxuICAgICAgaHR0cHM6Ly9xdWVyeS55YWhvb2FwaXMuY29tL3YxL3B1YmxpYy95cWw/cT1zZWxlY3QgKiBcbiAgICAgIGZyb20gd2VhdGhlci5mb3JlY2FzdCB3aGVyZSB3b2VpZCBpbiAoc2VsZWN0IHdvZWlkIGZyb20gZ2VvLnBsYWNlcygxKSBcbiAgICAgIHdoZXJlIHRleHQ9XCIke3RoaXMuTmV3TG9jYXRpb24uY3VycmVudC52YWx1ZX1cIilcbiAgICAgICZmb3JtYXQ9anNvbiZlbnY9c3RvcmU6Ly9kYXRhdGFibGVzLm9yZy9hbGx0YWJsZXN3aXRoa2V5c1xuICAgIGBcblxuICAgIC8vIE9oLCBidXQgc29tZSBlcnJvciBoYW5kbGluZyB3b3VsZCBoYXZlIGJlZW4gbmljZS4uLiBldmVuIGp1c3QgYSBsaXR0bGUhIVxuICAgIGZldGNoKHVybCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbigoeyBxdWVyeSB9KSA9PiB7IC8vIGxldCdzIGFzc3VtZSB0aGUgYXBpIGlzIGFsd2F5cyBqdXN0IHdvcmtpbmcgbG9sXG4gICAgICAgIGlmIChxdWVyeS5yZXN1bHRzICYmIHF1ZXJ5LnJlc3VsdHMuY2hhbm5lbCAmJiBxdWVyeS5yZXN1bHRzLmNoYW5uZWwubG9jYXRpb24pIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuc3RhdGUuZGF0YS5jb25jYXQoW3F1ZXJ5LnJlc3VsdHMuY2hhbm5lbF0pXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSwgKCkgPT4gdGhpcy5qdW1wVG8oZGF0YS5sZW5ndGggLSAxKSlcbiAgICAgICAgICAvLyBTT09PTy4uLiBzdG9yaW5nIGEgY29va2llIHdvdWxkIGJlIHN1cGVyIGVhc3lcbiAgICAgICAgICAvLyBJbiBmYWN0Li4uIHRlY2huaWNhbGx5Li4uIHdlIGNvdWxkIGRvIHRoZSBjb3VsZCBkbyB0aGUgY29va2llIGJpdCBzZXJ2ZXIgc2lkZVxuICAgICAgICAgIC8vIFRoZW4sIHJlbmRlciB0aGUgc2xpZGVyIGEgYml0IGRpZmZlcmVudGx5IHdpdGggYSA8bm9zY3JpcHQ+XG4gICAgICAgICAgLy8gUmVzdWx0IHdvdWxkIGJlIHRoYXQgdGhpcyB3aG9sZSB0aGluZyB3b3VsZCB3b3JrIHdpdGggTk8gSkFWQVNDUklQVCA6KSkpKSlcbiAgICAgICAgICAvLyBTbyBtYW55IGNoaW5zIG9uIG15IGVtam9pIVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIExBTUUhXG4gICAgICAgICAgYWxlcnQoJ0ludmFsaWQgTG9jYXRpb24sIHRyeSBhZ2FpbiEnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pIC8vIG5haC4uLiA7KSB3aG8gbmVlZHMgZXJyb3IgaGFuZGxpbmcgYW55d2F5cz9cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldHNfX3NsaWRlclwiIHJlZj17dGhpcy5XZWF0aGVyV2lkZ2V0fT5cbiAgICAgICAgICB7LyogV2VhdGhlciBXaWRnZXRzICovfVxuICAgICAgICAgIHtkYXRhLm1hcCgod2VhdGhlciwgaSkgPT4gPFdlYXRoZXJXaWRnZXQgd2VhdGhlcj17d2VhdGhlcn0ga2V5PXtpfSAvPil9XG4gICAgICAgICAgey8qIFNsaWRlIEluZGljYXRvcnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZV9faW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAge2RhdGEubWFwKCh3ZWF0aGVyLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVfX2luZGljYXRvclwiIGtleT17aX0gb25DbGljaz17ZSA9PiB0aGlzLmp1bXBUbyhpKX0+PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogQWRkIExvY2F0aW9uIEZvcm0gKi99XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYWRkX19sb2NhdGlvblwiIG9uU3VibWl0PXt0aGlzLmFkZExvY2F0aW9ufT5cbiAgICAgICAgICAgIDxsYWJlbD5BZGQgTG9jYXRpb24gKENpdHksIFN0YXRlKTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e3RoaXMuTmV3TG9jYXRpb259IC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4mIzQzOzwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICB7LyogR2VuZXJhbCBTdHlsZXMgKi99XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLndpZGdldHNfX3NsaWRlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgICAgICAgY29sb3I6ICMzYjNkM2M7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4OHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZF9fbG9jYXRpb24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZF9fbG9jYXRpb24gbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkX19sb2NhdGlvbiBpbnB1dCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkX19sb2NhdGlvbiBidXR0b24ge1xuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2IzZDNjO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgLjJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNsaWRlX19pbmRpY2F0b3JzIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNsaWRlX19pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzYjNkM2M7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbGlkZV9faW5kaWNhdG9yOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/fturano1271/Desktop/weather-widget-next-project/pages/index.js */",
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
        var req, locations, urls, res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref2.req;
                locations = ['San Diego, CA', 'New York, NY', 'Juneau, AK'];
                urls = locations.map(function (location) {
                  return "\n      https://query.yahooapis.com/v1/public/yql?q=select * \n      from weather.forecast where woeid in (select woeid from geo.places(1) \n      where text=\"".concat(location, "\")\n      &format=json&env=store://datatables.org/alltableswithkeys\n    ");
                });
                _context.next = 5;
                return Promise.all(urls.map(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default.a)).then(function (responses) {
                  return Promise.all(responses.map(function (res) {
                    return res.json();
                  }));
                });

              case 5:
                res = _context.sent;
                // #performance!
                data = res.map(function (res) {
                  return res.query.results ? res.query.results.channel : false;
                });
                data = data.filter(function (data) {
                  return data && data.location;
                }); // filter out bad locations

                return _context.abrupt("return", {
                  data: data
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map