/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/add-amount-product.js":
/*!**********************************!*\
  !*** ./js/add-amount-product.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./js/data.js\");\n\r\n\r\nconst amountForm = document.querySelector('.product-amount__form');\r\nconst addToCartButton = document.querySelector('.product-amount__add-to-cart-button');\r\nconst plusButton = amountForm.querySelector('.product-amount__plus-number');\r\nconst minusButton = amountForm.querySelector('.product-amount__minus-number');\r\nconst amountField = amountForm.querySelector('.product-amount__amount-field');\r\n\r\nlet productAmount = parseInt(amountField.value);\r\namountField.max = _data_js__WEBPACK_IMPORTED_MODULE_0__.maxProductAmount.g_home\r\n\r\nplusButton.addEventListener('click', function() {\r\n  if ( amountField.value >= amountField.min && amountField.value < _data_js__WEBPACK_IMPORTED_MODULE_0__.maxProductAmount.g_home) {\r\n    productAmount++;\r\n  }\r\n  amountField.value = productAmount;\r\n})\r\n\r\nminusButton.addEventListener('click', function() {\r\n  if ( amountField.value > amountField.min && amountField.value <= _data_js__WEBPACK_IMPORTED_MODULE_0__.maxProductAmount.g_home) {\r\n  productAmount--;\r\n  }\r\n  amountField.value = productAmount;\r\n})\r\n\r\n\r\n// !Отправление формы без перезагрузки страницы. Закоментировал, т.к. нет сервера для проверки отправки формы\r\n// const setUserFormSubmit = () => {\r\n//   amountForm.addEventListener('submit', (evt) => {\r\n//     evt.preventDefault();\r\n\r\n//     return fetch(\r\n//       '######### URL ##############',\r\n//       {\r\n//         method: 'GET',\r\n//         credentials: 'same-origin',\r\n//       },\r\n//     )\r\n//       .then((response) => {\r\n//         if (response.ok) {\r\n//           return response.json();\r\n//         }\r\n  \r\n//         throw new Error(`${response.status} ${response.statusText}`);\r\n//       })\r\n//   })\r\n// }\r\n\r\n// addToCartButton.addEventListener('click', setUserFormSubmit);\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/add-amount-product.js?");

/***/ }),

/***/ "./js/add-favorite.js":
/*!****************************!*\
  !*** ./js/add-favorite.js ***!
  \****************************/
/***/ (() => {

eval("const favoriteButton = document.querySelectorAll('.favorite-button');\r\n\r\nfor (let i = 0; i < favoriteButton.length; i++) {\r\n  favoriteButton[i].addEventListener(\"click\", function(){\r\n    favoriteButton[i].classList.toggle('favorite-button--favorites-add')\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/add-favorite.js?");

/***/ }),

/***/ "./js/data.js":
/*!********************!*\
  !*** ./js/data.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maxProductAmount\": () => (/* binding */ maxProductAmount)\n/* harmony export */ });\nconst maxProductAmount =  {\r\n  g_home: 15,\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./js/data.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-filter.js */ \"./js/search-filter.js\");\n/* harmony import */ var _add_favorite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-favorite.js */ \"./js/add-favorite.js\");\n/* harmony import */ var _add_favorite_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_add_favorite_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _add_amount_product_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-amount-product.js */ \"./js/add-amount-product.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/search-filter.js":
/*!*****************************!*\
  !*** ./js/search-filter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterProducts\": () => (/* binding */ filterProducts)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./js/utils.js\");\n\r\n\r\nconst searchField = document.querySelector('#search-field')\r\nfunction filterProducts() {\r\n\r\n  const searchFieldValue = searchField.value.toUpperCase();\r\n  const productItem = document.querySelectorAll('.product__item');\r\n\r\n  productItem.forEach(\r\n    function getMatch (info) {\r\n      const heading = info.querySelector('.product__title')\r\n      const headingContent = heading.innerHTML.toUpperCase();\r\n      \r\n\r\n      if (headingContent.includes(searchFieldValue)) {\r\n        info.style.display = \"\";\r\n      } else {\r\n        info.style.display = \"none\"\r\n      }\r\n    }\r\n  )\r\n}\r\n\r\nfilterProducts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(filterProducts, 800);\r\n\r\nsearchField.addEventListener('keyup', filterProducts)\r\n\r\n\n\n//# sourceURL=webpack:///./js/search-filter.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n\r\n// Debounce\r\nfunction debounce (func, delay) {\r\n  let timeout;\r\n  return function() {\r\n\r\n    clearTimeout(timeout);\r\n    timeout = setTimeout(func, delay);\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/utils.js?");

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;