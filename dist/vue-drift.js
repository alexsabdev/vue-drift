module.exports =
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return install; });\nfunction appendScript(content) {\n  var script = document.createElement('script');\n  script.innerText = content;\n  script.async = true;\n  script.charset = 'utf-8';\n  document.body.appendChild(script);\n}\n\nvar installed = false;\n\nfunction loadInitScript(appId) {\n  if (installed) {\n    return;\n  }\n\n  if (typeof window === 'undefined') {\n    throw new Error('[vue-drift] missing the \"window\" object');\n  }\n\n  var content = \"!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error(\\\"Drift snippet included twice.\\\"));t.invoked=!0,t.methods=[\\\"identify\\\",\\\"config\\\",\\\"track\\\",\\\"reset\\\",\\\"debug\\\",\\\"show\\\",\\\"ping\\\",\\\"page\\\",\\\"hide\\\",\\\"off\\\",\\\"on\\\"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement(\\\"script\\\");n.type=\\\"text/javascript\\\",n.async=!0,n.crossorigin=\\\"anonymous\\\",n.src=\\\"https://js.driftt.com/include/\\\"+e+\\\"/\\\"+t+\\\".js\\\";var o=document.getElementsByTagName(\\\"script\\\")[0];o.parentNode.insertBefore(n,o)}}}(),drift.SNIPPET_VERSION=\\\"0.3.1\\\",drift.load(\\\"\".concat(appId, \"\\\");\");\n  appendScript(content);\n  installed = true;\n}\n\nfunction identify(userId) {\n  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  if (userId === undefined) {\n    throw new Error('[vue-drift] missing the \"userId\" parameter');\n  }\n\n  if (typeof window === 'undefined') {\n    throw new Error('[vue-drift] missing the \"window\" object');\n  }\n\n  if (typeof window.drift === 'undefined') {\n    throw new Error('[vue-drift] missing the \"drift\" object');\n  }\n\n  window.drift.identify(userId, attributes);\n}\n\nfunction reset() {\n  if (typeof window === 'undefined') {\n    throw new Error('[vue-drift] missing the \"window\" object');\n  }\n\n  if (typeof window.drift === 'undefined') {\n    throw new Error('[vue-drift] missing the \"drift\" object');\n  }\n\n  window.drift.reset();\n}\n\nfunction page() {\n  var pageName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  if (typeof window === 'undefined') {\n    throw new Error('[vue-drift] missing the \"window\" object');\n  }\n\n  if (typeof window.drift === 'undefined') {\n    throw new Error('[vue-drift] missing the \"drift\" object');\n  }\n\n  if (pageName === '') {\n    window.drift.page();\n    return;\n  }\n\n  window.drift.page(pageName);\n}\n\nfunction setUserAttributes(attributes) {\n  if (typeof window === 'undefined') {\n    throw new Error('[vue-drift] missing the \"window\" object');\n  }\n\n  if (typeof window.drift === 'undefined') {\n    throw new Error('[vue-drift] missing the \"drift\" object');\n  }\n\n  window.drift.api.setUserAttributes(attributes);\n}\n\nfunction hide() {\n  if (typeof window === 'undefined') {\n    throw new Error('[vue-drift] missing the \"window\" object');\n  }\n\n  if (typeof window.drift === 'undefined') {\n    throw new Error('[vue-drift] missing the \"drift\" object');\n  }\n\n  window.drift.hide();\n}\n\nfunction show() {\n  if (typeof window === 'undefined') {\n    throw new Error('[vue-drift] missing the \"window\" object');\n  }\n\n  if (typeof window.drift === 'undefined') {\n    throw new Error('[vue-drift] missing the \"drift\" object');\n  }\n\n  window.drift.show();\n}\n\nfunction config() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  if (typeof window === 'undefined') {\n    throw new Error('[vue-drift] missing the \"window\" object');\n  }\n\n  if (typeof window.drift === 'undefined') {\n    throw new Error('[vue-drift] missing the \"drift\" object');\n  }\n\n  window.drift.config(options);\n}\n\nfunction install(Vue) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var appId = options.appId,\n      development = options.development;\n\n  if (appId === undefined) {\n    throw new Error('[vue-drift] missing the \"appId\" parameter');\n  }\n\n  if (development) {\n    return;\n  }\n\n  Vue.prototype.$drift = {\n    identify: identify,\n    reset: reset,\n    page: page,\n    setUserAttributes: setUserAttributes,\n    hide: hide,\n    show: show,\n    config: config\n  };\n  Vue.mixin({\n    mounted: function mounted() {\n      loadInitScript(appId);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });