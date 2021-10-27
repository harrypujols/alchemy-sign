/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = JSON.parse('{"site":{"name":"Alchemy"},"signs":[{"id":"0","element":"Copper","planet":"Venus","symbol":"&#9792;"},{"id":"1","element":"Silver","planet":"The Moon","symbol":"&#9789;"},{"id":"2","element":"Iron","planet":"Mars","symbol":"&#9794;"},{"id":"3","element":"Mercury","planet":"Mercury","symbol":"&#9791;"},{"id":"4","element":"Zinc","planet":"Neptune","symbol":"&#9798;"},{"id":"5","element":"Tin","planet":"Jupiter","symbol":"&#9795;"},{"id":"6","element":"Lead","planet":"Saturn","symbol":"&#9796;"},{"id":"7","element":"Platinum","planet":"Earth","symbol":"&#9793;"},{"id":"8","element":"Nickel","planet":"Uranus","symbol":"&#9797;"},{"id":"9","element":"Gold","planet":"The Sun","symbol":"&#9737;"}]}');

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (( APP ) => {
  let components = document.querySelectorAll('[data-js]')
  components.forEach(( component ) => {
    Object.entries( APP.components ).forEach(( entry ) => {
      let [key, value] = entry
      if ( key == component.dataset.js ) {
        let directive = new value( component, APP )
        directive.init()
      }
    })
  })
});


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return   window.getComputedStyle( document.querySelector('body'), ':before')
          .getPropertyValue('content').replace(/\"/g, '')
});


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((callback, delay=66) => {
  var isResizing

  window.addEventListener('resize', ()=> {
    window.clearTimeout(isResizing);

    isResizing = setTimeout(()=> {
      callback();
    }, delay)
  }, false);
});


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((onStop, onScroll=false, delay=66) => {
  var isScrolling

  window.addEventListener('scroll', ()=> {

    if( typeof onScroll === 'function' && onScroll() ) {
      onScroll();
    }

    window.clearTimeout(isScrolling)

    isScrolling = setTimeout(()=> {
      if( typeof onStop === 'function' && onStop() ) {
        onStop();
      }
    }, delay);

  }, false);
});


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor ( element ) {
    this.element = element
    this.file = this.element.dataset.file
  }

  init ( ) {
    fetch( this.file )
    .then( response => response.text() )
    .then( text => {
      this.element.innerHTML = text
    })
    .catch(console.error.bind( console ))
  }
});


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor ( element, APP ) {
    this.element = element
    this.input = document.getElementById('birthdate')
    this.button = document.getElementById('getsign')
    this.template = document.getElementById('template')
    this.data = APP.data
  }

  birthdate() {
    this.input.valueAsDate = new Date();

    this.input.addEventListener('change', ( event ) => {
      this.input.value = event.target.value;
      console.log(this.input.value);
    })
  }

  sumDigits(numbers) {
    return numbers.toString().split('').map(Number).reduce(function (a, b) {return a + b;}, 0);
  }

  getResults(numbers) {
    if (numbers % 10) {
      if (numbers > 10) {
        return this.sumDigits(numbers);

      } else {
        return numbers;
      }

    } else {
      return 0;
    }
  }

  getsign() {
    this.button.addEventListener('click', ( event ) => {
      console.log(this.input.value);
      let result
      let info =  this.input.value;
      let digits = ('' + info).split('').filter(v => v !== '-').map((i) => Number(i));
      let calculation = digits.reduce((a, b) => a + b, 0);
      
      console.log(digits);
      console.log(calculation);

      result = this.getResults(calculation);

      if (result > 9) {
        result = this.getResults(calculation);
      }

      console.log(result);
      return result;
    })
  }

  render() {

  }

  init ( ) {
    this.birthdate();
    this.getsign();
    console.log(this.data)
  }
});


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (( APP ) => {
  document.addEventListener('DOMContentLoaded', () => {
    APP.methods.components( APP )
  })
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _methods_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _methods_breakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _methods_resizestop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _methods_scrollstop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _components_include__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_birthdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _app_run__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
const FRAMEWORK = {};













(( window, APP ) => {
  APP.methods = {
    components: _methods_components__WEBPACK_IMPORTED_MODULE_1__["default"],
    breakpoint: _methods_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"],
    resizestop: _methods_resizestop__WEBPACK_IMPORTED_MODULE_3__["default"],
    scrollstop: _methods_scrollstop__WEBPACK_IMPORTED_MODULE_4__["default"]
  }

  APP.components = {
    include: _components_include__WEBPACK_IMPORTED_MODULE_5__["default"],
    birthdate: _components_birthdate__WEBPACK_IMPORTED_MODULE_6__["default"]
  }

  APP.start = {
    run: _app_run__WEBPACK_IMPORTED_MODULE_7__["default"]
  }

  APP.data = _data_data_json__WEBPACK_IMPORTED_MODULE_0__;

  APP.start.run( APP );

})( window, FRAMEWORK, undefined )

})();

/******/ })()
;