/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = JSON.parse('{"site":{"name":"Alchemy"},"signs":[{"id":"0","element":"copper","planet":"venus","symbol":"&#9792;"},{"id":"1","element":"silver","planet":"the moon","symbol":"&#9789;"},{"id":"2","element":"iron","planet":"mars","symbol":"&#9794;"},{"id":"3","element":"mercury","planet":"mercury","symbol":"&#9791;"},{"id":"4","element":"zinc","planet":"neptune","symbol":"&#9798;"},{"id":"5","element":"tin","planet":"jupiter","symbol":"&#9795;"},{"id":"6","element":"lead","planet":"saturn","symbol":"&#9796;"},{"id":"7","element":"platinum","planet":"the earth","symbol":"&#9793;"},{"id":"8","element":"nickel","planet":"uranus","symbol":"&#9797;"},{"id":"9","element":"gold","planet":"the sun","symbol":"&#9737;"}]}');

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((args) => {
  const data = args.data
  let render = MicroTemplate(args.template);

  function MicroTemplate(template) {
    return new Function(
      "data",
      "var output=" +
      JSON.stringify(template)
      .replace(/{{ (.+?) }}/g, '"+($1)+"')
      .replace(/{%(.+?)%}/g, '";$1\noutput+="') +
      ";return output;"
    );
  }

  return render(data);
});

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _include_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // Ensure you import the Include class

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element, APP) {
    this.element = element;
    this.form = document.getElementById("alchemy-form");
    this.results = document.getElementById("alchemy-results");
    this.input = document.getElementById("input");
    this.button = document.getElementById("submit");
    this.template = document.getElementById("template");
    this.placeholder = document.getElementById("placeholder");
    this.reset = document.getElementById("reset");
    this.data = APP.data.signs;
    this.render = APP.methods.render;
  }

  birthdate() {
    this.input.valueAsDate = new Date();
  }

  sumDigits(numbers) {
    return numbers
      .toString()
      .split("")
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  }

  getResults(numbers) {
    // Check if the number is less than 10 and not divisible by 10
    // If it is, we can return it directly
    if (numbers % 10) {
      if (numbers > 9) {
        return this.sumDigits(numbers);
      }
      return numbers;
    }
    // If the number is divisible by 10, we need to check if the sum of its digits equals 1
    // If it does, return 1, otherwise return 0
    if (this.sumDigits(numbers) == 1) {
      return 1;
    }
    return 0;
  }

  getsign() {
    this.button.addEventListener("click", (event) => {
      let info = this.input.value;
      let date = new Date(info.replace(/-/g, "/")).toDateString();
      let digits = ("" + info)
        .split("")
        .filter((v) => v !== "-")
        .map((i) => Number(i));
      let calculation = digits.reduce((a, b) => a + b, 0);
      let result = this.getResults(calculation);

      if (result > 9) {
        result = this.getResults(result);
      }

      let content = this.data[result];
      content["date"] = date;

      this.placeholder.innerHTML = this.render({
        data: content,
        template: this.template.innerHTML,
      });

      // Reinitialize Include.js for dynamically added elements
      const includeElements = this.placeholder.querySelectorAll(
        '[data-js="include"]'
      );
      includeElements.forEach((element) => {
        const includeInstance = new _include_js__WEBPACK_IMPORTED_MODULE_0__["default"](element);
        includeInstance.init();
      });

      this.form.classList.add("hidden");
      this.reset.classList.remove("hidden");
      this.results.classList.remove("hidden");
    });
  }

  resetForm() {
    this.reset.addEventListener("click", (event) => {
      this.placeholder.innerHTML = "";
      this.results.classList.add("hidden");
      this.form.classList.remove("hidden");
      this.reset.classList.add("hidden");
    });
  }

  init() {
    this.birthdate();
    this.getsign();
    this.resetForm();
  }
});


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element) {
    this.element = element;
    this.file = this.element.dataset.file;
  }

  init() {
    fetch(this.file)
      .then((response) => response.text())
      .then((text) => {
        this.element.innerHTML = text;
      })
      .catch(console.error.bind(console));
  }
});


/***/ }),
/* 7 */
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
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _methods_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _methods_breakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _methods_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _components_include__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _app_run__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
const FRAMEWORK = {};












((window, APP) => {
  APP.methods = {
    components: _methods_components__WEBPACK_IMPORTED_MODULE_1__["default"],
    breakpoint: _methods_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"],
    render: _methods_render__WEBPACK_IMPORTED_MODULE_3__["default"],
  };

  APP.components = {
    alchemy: _components_alchemy__WEBPACK_IMPORTED_MODULE_4__["default"],
    include: _components_include__WEBPACK_IMPORTED_MODULE_5__["default"],
  };

  APP.start = {
    run: _app_run__WEBPACK_IMPORTED_MODULE_6__["default"],
  };

  APP.data = _data_data__WEBPACK_IMPORTED_MODULE_0__;

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);

})();

/******/ })()
;