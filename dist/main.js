/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/api.js":
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataProductCard\": () => (/* binding */ getDataProductCard),\n/* harmony export */   \"getDataProductList\": () => (/* binding */ getDataProductList)\n/* harmony export */ });\n\r\n// const axios = require('axios');\r\n\r\n// axios\r\n//   .get('http://localhost:3007/item')\r\n//   .then((response) => {\r\n//     console.log(response.data);\r\n//   })\r\n//   .catch(function (error) {\r\n//     // handle error\r\n//     console.log(error);\r\n//   })\r\n\r\n\r\nconst getDataProductList = (onSuccess) => {\r\n  fetch('http://localhost:3007/item')\r\n    .then((response) => {\r\n      if (response.ok) {\r\n        return response.json();\r\n      }\r\n      throw new Error(`${response.status} ${response.statusText}`);\r\n    }\r\n    )\r\n    .then((item) => {\r\n      onSuccess(item.content);\r\n    })\r\n  }\r\n\r\nconst getDataProductCard = (onSuccess) => {\r\n  fetch('http://localhost:3007/item/:itemId')\r\n    .then((response) => {\r\n      if (response.ok) {\r\n        return response.json();\r\n      }\r\n      throw new Error(`${response.status} ${response.statusText}`);\r\n    }\r\n    )\r\n    .then((content) => {\r\n      onSuccess(content.content);\r\n    })\r\n  }\r\n\r\n  // async function getData() {\r\n  //   const [itemListResponse, itemCardResponse] = await Promise.all([\r\n  //     fetch('http://localhost:3007/item'),\r\n  //     fetch('http://localhost:3007/item/:itemId')\r\n  //   ]);\r\n\r\n  //   const list = await itemListResponse.json();\r\n  //   const card = await itemCardResponse.json();\r\n\r\n  //   return [list, card];\r\n  // }\r\n\r\n  // getData().then(([list, card]) => {\r\n  //   list.content;\r\n  //   card.content\r\n  // }).catch(error => {`${response.status} ${response.statusText}`});\r\n\r\n\r\n  \n\n//# sourceURL=webpack:///./js/api.js?");

/***/ }),

/***/ "./js/data.js":
/*!********************!*\
  !*** ./js/data.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maxProductAmount\": () => (/* binding */ maxProductAmount)\n/* harmony export */ });\nconst maxProductAmount =  {\r\n  g_home: 15,\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./js/data.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_product_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-product-card.js */ \"./js/render-product-card.js\");\n/* harmony import */ var _render_product_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-product-list.js */ \"./js/render-product-list.js\");\n/* harmony import */ var _search_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-filter.js */ \"./js/search-filter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/render-product-card.js":
/*!***********************************!*\
  !*** ./js/render-product-card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./js/utils.js\");\n\r\n\r\n \r\nif (window.location.pathname.indexOf('product') >= 0) {\r\n  const productCardMain = document.querySelector('.product-card-main');\r\n  const productCardInfoTemplate = document.querySelector('#product-card-info').content;\r\n\r\n  const renderProductCard = (product) => {\r\n    const createProductCard = document.createDocumentFragment();\r\n\r\n    const productCard = productCardInfoTemplate.cloneNode(true);\r\n    \r\n    const plusButton = productCard.querySelector('.product-amount__plus-number');\r\n    const minusButton = productCard.querySelector('.product-amount__minus-number');\r\n    const amountField = productCard.querySelector('.product-amount__amount-field');\r\n\r\n    productCard.querySelector('.product-card').id = product.id;\r\n    productCard.querySelector('.product-card__title ').textContent = product.name;\r\n    productCard.querySelector('.product-card__product-description').textContent = product.info;\r\n    productCard.querySelector('.product-card__title--details-title').textContent = product.description;\r\n    productCard.querySelector('.product-card__product-description--details').textContent = product.details;\r\n    productCard.querySelector('.product-card__price').textContent = product.price.value;\r\n    if(product.price.currency = 'USD') {\r\n      productCard.querySelector('.product-card__price').textContent ='$' + product.price.value;\r\n    } \r\n\r\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.addProductAmount)(amountField, minusButton, plusButton);\r\n    productCard.querySelector\r\n\r\n    ;(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.actionFavorite)(productCard.querySelector('.favorite-button'))\r\n\r\n\r\n    createProductCard.appendChild(productCard);\r\n    \r\n    productCardMain.appendChild(createProductCard);\r\n  }\r\n\r\n  ;(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getDataProductCard)((product) => {\r\n    renderProductCard(product);\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/render-product-card.js?");

/***/ }),

/***/ "./js/render-product-list.js":
/*!***********************************!*\
  !*** ./js/render-product-list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./js/utils.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n\r\n\r\n\r\nif (window.location.pathname.indexOf('index') >= 0) {\r\n\r\n  const productItemTemplate = document.querySelector('#product').content;\r\n  const productList = document.querySelector('.products');\r\n\r\n  const renderProductsList = (products) => {\r\n    const createProduct = document.createDocumentFragment();\r\n    \r\n    products.forEach((product) => {\r\n  \r\n      const productItem = productItemTemplate.cloneNode(true);\r\n      const productItemInfo = productItem.querySelector('.product__item');\r\n      const productItemLink = productItem.querySelector('.product__description-link');\r\n      const productItemImage = productItem.querySelector('img');\r\n      const productItemTitle = productItem.querySelector('.product__title');\r\n      const favoriteButton = productItem.querySelector('.favorite-button');\r\n      const productItemPrice = productItem.querySelector('.product__price');\r\n\r\n      productItemInfo.id = product.id;\r\n      productItemLink.href = 'product.html?:' + product.id;\r\n      productItemImage.src = product.picture.path;\r\n      productItemImage.alt = product.picture.alt;\r\n      productItemTitle.textContent = product.name;\r\n      productItemPrice.textContent = product.price.value;\r\n      if(product.price.currency = 'USD') {\r\n        productItemPrice.textContent ='$' + product.price.value;\r\n      }\r\n      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.actionFavorite)(favoriteButton);\r\n     \r\n      createProduct.appendChild(productItem);\r\n    })\r\n    \r\n    productList.appendChild(createProduct);\r\n  }\r\n\r\n  ;(0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getDataProductList)((products) => {\r\n    renderProductsList(products);\r\n  });\r\n\r\n  \r\n}\r\n\n\n//# sourceURL=webpack:///./js/render-product-list.js?");

/***/ }),

/***/ "./js/search-filter.js":
/*!*****************************!*\
  !*** ./js/search-filter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterProducts\": () => (/* binding */ filterProducts)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./js/utils.js\");\n\r\n\r\nconst searchField = document.querySelector('#search-field')\r\nfunction filterProducts() {\r\n\r\n  const searchFieldValue = searchField.value.toUpperCase();\r\n  const productItem = document.querySelectorAll('.product__item');\r\n\r\n  productItem.forEach(\r\n    function getMatch (info) {\r\n      const heading = info.querySelector('.product__title')\r\n      const headingContent = heading.innerHTML.toUpperCase();\r\n      \r\n\r\n      if (headingContent.includes(searchFieldValue)) {\r\n        info.style.display = \"\";\r\n      } else {\r\n        info.style.display = \"none\"\r\n      }\r\n    }\r\n  )\r\n}\r\n\r\nfilterProducts = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(filterProducts, 800);\r\n\r\nsearchField.addEventListener('keyup', filterProducts)\r\n\r\n\n\n//# sourceURL=webpack:///./js/search-filter.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"actionFavorite\": () => (/* binding */ actionFavorite),\n/* harmony export */   \"addProductAmount\": () => (/* binding */ addProductAmount),\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./js/data.js\");\n\r\n\r\n\r\n// !Работа с формами, добавление слушателей и максимального колтчества\r\nconst addProductAmount = (amountField, minusButton, plusButton) => {\r\n\r\n  let productAmount = parseInt(amountField.value);\r\n  amountField.max = _data_js__WEBPACK_IMPORTED_MODULE_0__.maxProductAmount.g_home;\r\n\r\n  plusButton.addEventListener('click', function() {\r\n    if ( amountField.value >= amountField.min && amountField.value < _data_js__WEBPACK_IMPORTED_MODULE_0__.maxProductAmount.g_home) {\r\n      productAmount++;\r\n    }\r\n    amountField.value = productAmount;\r\n  })\r\n\r\n  minusButton.addEventListener('click', function() {\r\n    if ( amountField.value > amountField.min && amountField.value <= _data_js__WEBPACK_IMPORTED_MODULE_0__.maxProductAmount.g_home) {\r\n    productAmount--;\r\n    }\r\n    amountField.value = productAmount;\r\n  })\r\n}\r\n\r\n\r\n// !Debounce\r\nfunction debounce (func, delay) {\r\n  let timeout;\r\n  return function() {\r\n\r\n    clearTimeout(timeout);\r\n    timeout = setTimeout(func, delay);\r\n  }\r\n}\r\n\r\n\r\n// !Смена значка(добавление в избранное)\r\nfunction actionFavorite( actionItem ) {\r\n  actionItem.addEventListener('click', function(){\r\n    actionItem.classList.toggle('favorite-button--favorites-add');\r\n  });\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/utils.js?");

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