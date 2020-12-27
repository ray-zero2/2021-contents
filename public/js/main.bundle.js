/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webGl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webGl */ "./js/webGl/index.js");


var index = function index() {
  new _webGl__WEBPACK_IMPORTED_MODULE_0__["default"]();
};

index();

/***/ }),

/***/ "./js/utils/MathFunc.js":
/*!******************************!*\
  !*** ./js/utils/MathFunc.js ***!
  \******************************/
/*! exports provided: MathFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathFunc", function() { return MathFunc; });
var MathFunc = {
  /**
   * Returns value clamped to the inclusive range of min and max.
   * @param {number} value The value to be clamped.
   * @param {number} min The lower bound of the result.
   * @param {number} max The upper bound of the result.
   * @returns value if min ≤ value ≤ max.
   *    -or-
   *    min if value < min.
   *    -or-
   *    max if max < value.
   */
  clamp: function clamp(value, min, max) {
    return Math.min(min, Math.max(max, value));
  }
};

/***/ }),

/***/ "./js/utils/Utils.js":
/*!***************************!*\
  !*** ./js/utils/Utils.js ***!
  \***************************/
/*! exports provided: MathFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MathFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathFunc */ "./js/utils/MathFunc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MathFunc", function() { return _MathFunc__WEBPACK_IMPORTED_MODULE_0__["MathFunc"]; });



/***/ }),

/***/ "./js/webGl/Camera.js":
/*!****************************!*\
  !*** ./js/webGl/Camera.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Camera = /*#__PURE__*/function (_THREE$PerspectiveCam) {
  _inherits(Camera, _THREE$PerspectiveCam);

  var _super = _createSuper(Camera);

  function Camera() {
    var _options$dampingFacto;

    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Camera);

    _this = _super.call(this, options === null || options === void 0 ? void 0 : options.fov, options === null || options === void 0 ? void 0 : options.aspect, options === null || options === void 0 ? void 0 : options.near, options === null || options === void 0 ? void 0 : options.far);
    _this.time = 0;
    if (!(options === null || options === void 0 ? void 0 : options.canvas)) return _possibleConstructorReturn(_this);
    _this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_12__["OrbitControls"](_assertThisInitialized(_this), options === null || options === void 0 ? void 0 : options.canvas);
    _this.controls.enableDamping = (options === null || options === void 0 ? void 0 : options.enableDamping) || false;
    _this.controls.dampingFactor = (_options$dampingFacto = options === null || options === void 0 ? void 0 : options.dampingFactor) !== null && _options$dampingFacto !== void 0 ? _options$dampingFacto : 0.2;
    return _this;
  }

  _createClass(Camera, [{
    key: "init",
    value: function init() {
      this.position.set(-5, 5, 20);
      this.lookAt(new three__WEBPACK_IMPORTED_MODULE_11__["Vector3"](0, 0, 0));
    }
  }, {
    key: "resize",
    value: function resize(resolution) {
      this.aspect = resolution.x / resolution.y;
      this.updateProjectionMatrix();
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      this.time += deltaTime;
      if (!this.controls) return;
      this.controls.update();
    }
  }]);

  return Camera;
}(three__WEBPACK_IMPORTED_MODULE_11__["PerspectiveCamera"]);



/***/ }),

/***/ "./js/webGl/Cow.js":
/*!*************************!*\
  !*** ./js/webGl/Cow.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cow; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _shader_cow_vertex_vert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shader/cow/vertex.vert */ "./shader/cow/vertex.vert");
/* harmony import */ var _shader_cow_fragment_frag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shader/cow/fragment.frag */ "./shader/cow/fragment.frag");













function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Cow = /*#__PURE__*/function (_THREE$Group) {
  _inherits(Cow, _THREE$Group);

  var _super = _createSuper(Cow);

  /**
   *
   * @param {THREE.Geometry} headGeometry
   * @param {THREE.Geometry} jawGeometry
   * @param { Object } textures
   */
  function Cow(geometry, textures) {
    var _this;

    _classCallCheck(this, Cow);

    _this = _super.call(this);
    _this.name = 'cow';
    _this.isActive = false;
    _this.noiseTexture = textures.noise;
    _this.material = _this.createMaterial();
    _this.cow = new three__WEBPACK_IMPORTED_MODULE_12__["Mesh"](geometry, _this.material);

    _this.cow.rotateY(Math.PI);

    _this.add(_this.cow);

    return _this;
  }

  _createClass(Cow, [{
    key: "setNoiseTexture",
    value: function setNoiseTexture(texture) {
      this.noiseTexture = texture;
    }
  }, {
    key: "createMaterial",
    value: function createMaterial() {
      var material = new three__WEBPACK_IMPORTED_MODULE_12__["RawShaderMaterial"]({
        vertexShader: _shader_cow_vertex_vert__WEBPACK_IMPORTED_MODULE_13__["default"],
        fragmentShader: _shader_cow_fragment_frag__WEBPACK_IMPORTED_MODULE_14__["default"],
        uniforms: {
          time: {
            value: 0
          },
          noiseTexture: {
            value: this.noiseTexture
          }
        }
      }); // const material = new THREE.MeshNormalMaterial();

      return material;
    }
  }]);

  return Cow;
}(three__WEBPACK_IMPORTED_MODULE_12__["Group"]);



/***/ }),

/***/ "./js/webGl/Mouse.js":
/*!***************************!*\
  !*** ./js/webGl/Mouse.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mouse; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Mouse = /*#__PURE__*/function () {
  _createClass(Mouse, null, [{
    key: "transformToNormalizedDeviceCoord",

    /**
     *
     * @param {THRE.Vector2} position
     * @param {THREE.Vector2} resolution
     * @returns {THREE.Vector2} 正規化デバイス座標系に変換した座標
     */
    value: function transformToNormalizedDeviceCoord(position, resolution) {
      var resolutionX = resolution.x;
      var resolutionY = resolution.y;
      if (resolutionX === 0 || resolutionY === 0) return new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 0);
      var positionX = position.x;
      var positionY = position.y;
      var transformedX = positionX / (resolutionX / 2) - 1;
      var transformedY = positionY / (resolutionY / 2) - 1;
      var transformedPosition = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](transformedX, -transformedY);
      transformedPosition.clampScalar(-1, 1);
      return transformedPosition;
    }
  }]);

  function Mouse(resolution) {
    _classCallCheck(this, Mouse);

    this.resolution = resolution;
    this.position = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
    this.start = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
    this.lastStart = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
    this.lastPosition = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
    this.isTouched = false;
    this.isDumping = false;
    this.canHover = false;
  }

  _createClass(Mouse, [{
    key: "touchStart",
    value: function touchStart(event) {
      if (!('touches' in event)) event.preventDefault();
      this.isTouched = true;
    }
  }, {
    key: "touchMove",
    value: function touchMove(event) {
      if (!this.canHover && !this.isTouched) return;
      if (!('touches' in event)) event.preventDefault();
      var x = 'touches' in event ? event.touches[0].clientX : event.clientX;
      var y = 'touches' in event ? event.touches[0].clientY : event.clientY;
      this.position.set(x, y);
      console.log({
        x: x,
        y: y
      });
      var normalizedDeviceCoord = Mouse.transformToNormalizedDeviceCoord(this.position, this.resolution);
      var _x = normalizedDeviceCoord.x;
      var _y = normalizedDeviceCoord.y;
      console.log({
        _x: _x,
        _y: _y
      });
    }
  }, {
    key: "touchEnd",
    value: function touchEnd(event) {
      console.log(event);
      this.isTouched = false;
    }
  }, {
    key: "resize",
    value: function resize(resolution) {
      this.resolution = resolution;
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.isDumping) return;
    }
  }]);

  return Mouse;
}();



/***/ }),

/***/ "./js/webGl/WebGlContents.js":
/*!***********************************!*\
  !*** ./js/webGl/WebGlContents.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebGlContents; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_OBJLoader2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader2 */ "./node_modules/three/examples/jsm/loaders/OBJLoader2.js");
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Camera */ "./js/webGl/Camera.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/Utils */ "./js/utils/Utils.js");
/* harmony import */ var _Cow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Cow */ "./js/webGl/Cow.js");







function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





 // import { Mouse } from './Mouse';

var WebGlContents = /*#__PURE__*/function () {
  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @param {THREE.Vector2} resolution
   */
  function WebGlContents(canvas, resolution) {
    _classCallCheck(this, WebGlContents);

    this.renderer = new three__WEBPACK_IMPORTED_MODULE_6__["WebGLRenderer"]({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setPixelRatio(_utils_Utils__WEBPACK_IMPORTED_MODULE_9__["MathFunc"].clamp(window.devicePixelRatio, 1, 2));
    this.renderer.setClearColor(0x000000, 1.0);
    this.renderer.setSize(resolution.x, resolution.y);
    this.scene = new three__WEBPACK_IMPORTED_MODULE_6__["Scene"]();
    this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_8__["default"]({
      fov: 50,
      aspect: resolution.x / resolution.y,
      far: 1000,
      canvas: canvas,
      enableDamping: true
    });
    this.clock = new three__WEBPACK_IMPORTED_MODULE_6__["Clock"](false);
    this.cow = null;
    this.init();
  }

  _createClass(WebGlContents, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$this$fetchObje, geometries, textures, noiseTexture;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fetchObjects();

              case 2:
                _yield$this$fetchObje = _context.sent;
                geometries = _yield$this$fetchObje.geometries;
                textures = _yield$this$fetchObje.textures;
                noiseTexture = textures.noise;
                noiseTexture.wrapS = three__WEBPACK_IMPORTED_MODULE_6__["RepeatWrapping"];
                noiseTexture.wrapT = three__WEBPACK_IMPORTED_MODULE_6__["RepeatWrapping"];
                this.camera.init();
                console.log(geometries);
                this.cow = new _Cow__WEBPACK_IMPORTED_MODULE_10__["default"](geometries.cow, textures);
                this.scene.add(this.cow);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "fetchObjects",
    value: function () {
      var _fetchObjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var textureLoader, objLoader;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                textureLoader = new three__WEBPACK_IMPORTED_MODULE_6__["TextureLoader"]();
                objLoader = new three_examples_jsm_loaders_OBJLoader2__WEBPACK_IMPORTED_MODULE_7__["OBJLoader2"]();
                _context2.next = 4;
                return Promise.all([objLoader.loadAsync('/public/model/cow.obj'), textureLoader.loadAsync('/public/images/textures/noise.png')]).then(function (response) {
                  console.log(response[0]);
                  var objChildren = response[0].children;
                  var cow = objChildren[0].geometry;
                  var noiseTexture = response[1];
                  var geometries = {
                    cow: cow
                  };
                  var textures = {
                    noise: noiseTexture
                  };
                  return {
                    geometries: geometries,
                    textures: textures
                  };
                });

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fetchObjects() {
        return _fetchObjects.apply(this, arguments);
      }

      return fetchObjects;
    }()
  }, {
    key: "render",
    value: function render() {
      var deltaTime = this.clock.getDelta();
      this.camera.update(deltaTime);
      this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "resize",
    value: function resize(resolution) {
      this.resolution = resolution;
      this.camera.resize(resolution);
      this.renderer.setSize(resolution.x, resolution.y);
    }
  }]);

  return WebGlContents;
}();



/***/ }),

/***/ "./js/webGl/index.js":
/*!***************************!*\
  !*** ./js/webGl/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _Mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mouse */ "./js/webGl/Mouse.js");
/* harmony import */ var _WebGlContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebGlContents */ "./js/webGl/WebGlContents.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Index = /*#__PURE__*/function () {
  function Index() {
    _classCallCheck(this, Index);

    this.canvas = document.querySelector('#canvas');
    if (!this.canvas) throw new Error('canvas element not found');
    this.resolution = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](document.body.clientWidth, window.innerHeight);
    this.mouse = new _Mouse__WEBPACK_IMPORTED_MODULE_0__["default"](this.resolution);
    this.webGlContent = new _WebGlContents__WEBPACK_IMPORTED_MODULE_1__["default"](this.canvas, this.resolution); // this.mouse.canHover = true;

    this.start();
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      this.webGlContent.render();
    }
  }, {
    key: "animate",
    value: function animate() {
      this.render();
      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: "touchStart",
    value: function touchStart(event) {
      this.mouse.touchStart(event);
    }
  }, {
    key: "touchMove",
    value: function touchMove(event) {
      this.mouse.touchMove(event);
    }
  }, {
    key: "touchEnd",
    value: function touchEnd(event) {
      this.mouse.touchEnd(event);
    }
  }, {
    key: "resize",
    value: function resize() {
      this.resolution.set(document.body.clientWidth, window.innerHeight);
      var resolution = this.resolution;
      this.mouse.resize(resolution);
      this.webGlContent.resize(resolution);
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this$canvas, _this$canvas2;

      (_this$canvas = this.canvas) === null || _this$canvas === void 0 ? void 0 : _this$canvas.addEventListener('mousedown', this.touchStart.bind(this));
      window.addEventListener('mousemove', this.touchMove.bind(this));
      window.addEventListener('mouseup', this.touchEnd.bind(this));
      (_this$canvas2 = this.canvas) === null || _this$canvas2 === void 0 ? void 0 : _this$canvas2.addEventListener('touchstart', this.touchStart.bind(this));
      window.addEventListener('touchmove', this.touchMove.bind(this));
      window.addEventListener('touchend', this.touchEnd.bind(this));
      window.addEventListener('resize', this.resize.bind(this));
    }
  }, {
    key: "start",
    value: function start() {
      this.bind();
      this.animate();
    }
  }]);

  return Index;
}();



/***/ }),

/***/ "./shader/cow/fragment.frag":
/*!**********************************!*\
  !*** ./shader/cow/fragment.frag ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision mediump float;\n#define GLSLIFY 1\n\n// uniform float time;\nuniform sampler2D noiseTexture;\n// uniform vec4 resolution;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\nfloat PI = 3.141592653589793238;\n\nvoid main() {\n  // gl_FragColor = vec4(vUv, 0.0, 1.0);\n  vec3 testLight = vec3(1.0, 1.0, -2.0);\n  float testColor = dot(normalize(testLight), normalize(vNormal));\n  gl_FragColor = vec4(vec3(testColor), 1.0);\n}\n");

/***/ }),

/***/ "./shader/cow/vertex.vert":
/*!********************************!*\
  !*** ./shader/cow/vertex.vert ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define GLSLIFY 1\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\n// uniform float time;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\nfloat PI = 3.141592653589793238;\n\nvoid main() {\n  vUv = uv;\n  vNormal = normal;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n");

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map