/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "printMyName",
    value: function printMyName(name) {
      console.log("my name is ", name);
    }
  }]);

  return Util;
}();

exports.default = Util;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _test = __webpack_require__(0);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Kenty!!!");
var x = 2;
console.log('this is xxx', x);

_test2.default.printMyName('kenty!!!');

// const scene = document.querySelector('a-scene');

// // these are temporary functions that we will use until we implement particle system for lanterns
// createOwnLantern();
// createOtherLanterns();

// // let engine = new ParticleEngine();
// // engine.initialize();

// function createOwnLantern() {
//   const ownParentObject = document.createElement('a-entity');
//   const ownObj = document.createElement('a-entity');
//   const color = getRandColor();

//   ownObj.setAttribute('lantern',{
//     light: color.light,
//     dark: color.dark
//   });

//   ownObj.setAttribute('position', {
//       x: 0,
//       y: 1,
//       z: 0,
//   });

//   ownObj.setAttribute('rotation', {
//       x: 0,
//       y: Math.random() * 90,
//       z: 0,
//   });

//   ownObj.setAttribute('light', {
//     color: color.light,
//     type: 'point',
//     intensity: 1,
//     distance: 20,
//     decay: 1,
//   });

//   ownObj.setAttribute('glow', {});

//   // obviously don't use setTimeout, find proper way to getAttribute once loaded
//   setTimeout(() => {
//     ownObj.setAttribute('animation', {
//       property: 'position',
//       dir: 'alternate',
//       dur: 2000,
//       easing: 'easeInSine',
//       loop: true,
//       to: `0 ${ownObj.getAttribute('position').y + .5} 0}`,
//     });

//     ownObj.setAttribute('animation__2', {
//         property: 'rotation',
//         dur: 8000,
//         easing: 'linear',
//         loop: true,
//         to: `0 ${ownObj.getAttribute('rotation').y + 360} 0`,
//     });
//   }, 2000);

//   // add lantern to scene
//   ownParentObject.appendChild(ownObj);
//   scene.appendChild(ownParentObject);
// }

// function createOtherLanterns() {
//   const parentObj = document.createElement('a-entity');

//   for (let i = 0; i < 200; i++) {
//     const obj = document.createElement('a-entity');
//     const color = getRandColor();

//     obj.setAttribute('lantern',{
//       light: color.light,
//       dark: color.dark
//     });

//     if (i < 50) {
//       obj.setAttribute('position', {
//         x: getRandCoord(3),
//         y: getRandCoord(2, 1),
//         z: getRandCoord(3),
//       }); 
//     } else if (i < 150) {
//       obj.setAttribute('position', {
//         x: getRandCoord(6),
//         y: getRandCoord(4, 1),
//         z: getRandCoord(6),
//       }); 
//     } else if (i < 180) {
//       obj.setAttribute('position', {
//         x: getRandCoord(20),
//         y: getRandCoord(15, 1),
//         z: getRandCoord(20),
//       }); 
//     } else {
//       obj.setAttribute('position', {
//         x: getRandCoord(50),
//         y: getRandCoord(30, 1),
//         z: getRandCoord(50),
//       }); 
//     }

//     obj.setAttribute('rotation', {
//       x: 0,
//       y: Math.random() * 90,
//       z: 0,
//     });

//     obj.setAttribute('glow', {});

//     // all lanterns fly in and converge
//     // obj.setAttribute('animation', {
//     //   property: 'position',
//     //   dir: 'alternate',
//     //   dur: 8000,
//     //   easing: 'easeInSine',
//     //   loop: true,
//     //   to: "0 3 -5",
//     // });

//     // all lanterns fly in one direction
//     // obviously don't use setTimeout, find proper way to getAttribute once loaded
//     setTimeout(() => {
//       obj.setAttribute('animation', {
//         property: 'position',
//         dir: 'alternate',
//         dur: 10000,
//         easing: 'easeInSine',
//         loop: true,
//         to: `${obj.getAttribute('position').x + 10} ${obj.getAttribute('position').y - 3} ${obj.getAttribute('position').z + 10}`,
//       });

//       obj.setAttribute('animation__2', {
//         property: 'rotation',
//         dur: 10000 + Math.random() * 8000,
//         easing: 'linear',
//         loop: true,
//         to: `0 ${obj.getAttribute('rotation').y + 360 * randomSign()} 0`,
//       });
//     }, 2000);

//     parentObj.appendChild(obj);
//   }

//   scene.appendChild(parentObj);
// }

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map