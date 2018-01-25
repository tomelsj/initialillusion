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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /srv/initialillusion/client/src/js/main.js: Unexpected token (8:0)\n\n  6 | \n  7 | import { setup3d }\n> 8 | \n    | ^\n    at Parser.raise (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:832:15)\n    at Parser.unexpected (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:2212:16)\n    at Parser.expectContextual (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:2172:41)\n    at Parser.parseImport (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:5508:12)\n    at Parser.parseStatementContent (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:4291:27)\n    at Parser.parseStatement (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:4206:17)\n    at Parser.parseBlockOrModuleBlockBody (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:4764:23)\n    at Parser.parseBlockBody (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:4750:10)\n    at Parser.parseTopLevel (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:4174:10)\n    at Parser.parse (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:5613:17)\n    at parse (/srv/initialillusion/client/node_modules/@babel/core/node_modules/babylon/lib/index.js:10552:38)\n    at parser (/srv/initialillusion/client/node_modules/@babel/core/lib/transformation/normalize-file.js:106:33)\n    at normalizeFile (/srv/initialillusion/client/node_modules/@babel/core/lib/transformation/normalize-file.js:53:11)\n    at runSync (/srv/initialillusion/client/node_modules/@babel/core/lib/transformation/index.js:34:41)\n    at transformSync (/srv/initialillusion/client/node_modules/@babel/core/lib/transform-sync.js:15:38)\n    at Object.transform (/srv/initialillusion/client/node_modules/@babel/core/lib/transform.js:20:65)\n    at transpile (/srv/initialillusion/client/node_modules/babel-loader/lib/index.js:55:20)\n    at Object.module.exports (/srv/initialillusion/client/node_modules/babel-loader/lib/index.js:179:20)");

/***/ })
/******/ ]);