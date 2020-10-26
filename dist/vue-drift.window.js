window["VueDrift"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: install, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\nvar installed = false;\n\nvar load = function load(appId) {\n  if (installed) return;\n  var script = document.createElement('script');\n  script.innerText = \"!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error(\\\"Drift snippet included twice.\\\"));t.invoked=!0,t.methods=[\\\"identify\\\",\\\"config\\\",\\\"track\\\",\\\"reset\\\",\\\"debug\\\",\\\"show\\\",\\\"ping\\\",\\\"page\\\",\\\"hide\\\",\\\"off\\\",\\\"on\\\"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement(\\\"script\\\");n.type=\\\"text/javascript\\\",n.async=!0,n.crossorigin=\\\"anonymous\\\",n.src=\\\"https://js.driftt.com/include/\\\"+e+\\\"/\\\"+t+\\\".js\\\";var o=document.getElementsByTagName(\\\"script\\\")[0];o.parentNode.insertBefore(n,o)}}}(),drift.SNIPPET_VERSION=\\\"0.3.1\\\",drift.load(\\\"\".concat(appId, \"\\\");\");\n  script.async = true;\n  script.charset = 'utf-8';\n  document.body.appendChild(script);\n  installed = true;\n};\n\nvar install = function install(Vue) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var appId = options.appId,\n      development = options.development;\n  if (development) return;\n  if (!appId) throw new Error('[vue-drift] missing the \"appId\" option');\n  if (!window) throw new Error('[vue-drift] missing the \"window\" object');\n  Vue.mixin({\n    mounted: function mounted() {\n      load(appId);\n\n      var drift = function drift() {\n        return window.drift;\n      };\n\n      Vue.prototype.$drift = new Proxy(drift, {\n        get: function get(target, prop) {\n          var drift = target();\n          if (!drift) throw new Error('[vue-drift] missing the \"drift\" object');\n          if (prop in drift) return drift[prop];\n          throw new Error(\"[vue-drift] missing the \\\"\".concat(prop, \"\\\" method\"));\n        }\n      });\n    }\n  });\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (install);\n\n//# sourceURL=webpack://VueDrift/./src/index.js?");

/***/ })

/******/ });