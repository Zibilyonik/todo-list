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

/***/ "./src/adjustItems.js":
/*!****************************!*\
  !*** ./src/adjustItems.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"editTodo\": () => (/* binding */ editTodo),\n/* harmony export */   \"deleteMarked\": () => (/* binding */ deleteMarked)\n/* harmony export */ });\nfunction addTodo(arr) {\n  const textGetter = document.getElementById('TodoDesc');\n  arr.push({\n    description: textGetter.value,\n    completed: false,\n    index: arr.length + 1,\n  });\n  textGetter.value = '';\n}\nfunction deleteTodo(arr, index) {\n  const cont = document.getElementById(index);\n  let first = document.getElementById('Container').firstChild;\n  arr.splice(index - 1, 1);\n  for (let i = 0; i < arr.length; i += 1) {\n    first.id = i + 1;\n    first.firstChild.id = `${i + 1}-checkbox`;\n    first.lastChild.id = `${i + 1}-del`;\n    first = first.nextSibling;\n    arr[i].index = i + 1;\n  }\n  cont.remove();\n  localStorage.clear();\n  localStorage.setItem('todoArray', JSON.stringify(arr));\n}\n\nfunction editTodo(arr, index) {\n  const obj = document.getElementById(`${index}-text`);\n  arr[index - 1].description = obj.innerText;\n  localStorage.clear();\n  localStorage.setItem('todoArray', JSON.stringify(arr));\n}\n\nfunction deleteMarked(arr) {\n  const bonk = arr.filter((item) => item.completed === false);\n  arr = [...bonk];\n  localStorage.clear();\n  localStorage.setItem('todoArray', JSON.stringify(arr));\n}\n\n\n//# sourceURL=webpack://todo-list/./src/adjustItems.js?");

/***/ }),

/***/ "./src/changeStatus.js":
/*!*****************************!*\
  !*** ./src/changeStatus.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst changeStatus = (arr, itemId) => {\r\n  const item = document.getElementById(itemId);\r\n  arr[itemId - 1].completed = !arr[itemId - 1].completed;\r\n  if (arr[itemId - 1].completed) {\r\n    item.classList.add('disabled');\r\n  } else {\r\n    item.classList.remove('disabled');\r\n  }\r\n  localStorage.clear();\r\n  localStorage.setItem('todoArray', JSON.stringify(arr));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeStatus);\n\n//# sourceURL=webpack://todo-list/./src/changeStatus.js?");

/***/ }),

/***/ "./src/dragging.js":
/*!*************************!*\
  !*** ./src/dragging.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragger\": () => (/* binding */ dragger),\n/* harmony export */   \"heldItem\": () => (/* binding */ heldItem),\n/* harmony export */   \"droppedOn\": () => (/* binding */ droppedOn)\n/* harmony export */ });\nlet droppedItem;\r\nlet held;\r\nfunction heldItem(e) {\r\n  held = parseInt(e.target.id, 10);\r\n}\r\n\r\nfunction droppedOn(e) {\r\n  e.preventDefault();\r\n  droppedItem = parseInt(e.target.id, 10);\r\n}\r\n\r\nfunction dragger(arr) {\r\n  const item1 = arr[held - 1];\r\n  const item2 = arr[droppedItem - 1];\r\n  arr.splice(item1.index - 1, 1);\r\n  arr.splice(item2.index - 1, 0, item1);\r\n  for (let i = 1; i <= arr.length; i += 1) {\r\n    arr[i - 1].index = i;\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/dragging.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _changeStatus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeStatus.js */ \"./src/changeStatus.js\");\n/* harmony import */ var _dragging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragging.js */ \"./src/dragging.js\");\n/* harmony import */ var _adjustItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjustItems.js */ \"./src/adjustItems.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nlet arr = [];\nlet temp = [];\n\nfunction printList(list) {\n  const temp = document.getElementById('Container');\n  temp.innerText = '';\n  for (let i = 1; i <= list.length; i += 1) {\n    list[i - 1].add();\n    const checkbox = document.getElementById(`${i}-checkbox`);\n    const item = checkbox.nextSibling;\n    item.addEventListener('input', () => { (0,_adjustItems_js__WEBPACK_IMPORTED_MODULE_2__.editTodo)(list, i); });\n    item.addEventListener('keypress', (e) => { if (e.key === 'Enter') { e.preventDefault(); (0,_adjustItems_js__WEBPACK_IMPORTED_MODULE_2__.editTodo)(list, i); item.blur(); } });\n    checkbox.onchange = () => { (0,_changeStatus_js__WEBPACK_IMPORTED_MODULE_0__.default)(list, i); };\n  }\n  localStorage.clear();\n  localStorage.setItem('todoArray', JSON.stringify(list));\n}\n\nclass Todo {\n  constructor(description = '', completed = false, index = 0) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n\n  add() {\n    const mainCont = document.getElementById('Container');\n    const obj = document.createElement('li');\n    const checkbox = document.createElement('input');\n    const texter = document.createElement('p');\n    const delBtn = document.createElement('button');\n    delBtn.classList.add('del-button-style', 'btn', 'col-3', 'm-0', 'float-right');\n    delBtn.type = 'button';\n    delBtn.id = `${this.index}-del`;\n    delBtn.innerText = 'Delete';\n    checkbox.classList.add('form-check-input', 'mt-3', 'checkbox-style');\n    checkbox.type = 'checkbox';\n    checkbox.id = `${this.index}-checkbox`;\n    texter.id = `${this.index}-text`;\n    checkbox.ariaLabel = '...';\n    obj.id = this.index;\n    texter.contentEditable = 'true';\n    texter.classList.add('inline-flex', 'mt-2');\n    obj.classList.add('list-group-item', 'list-item-style', 'mx-2', 'align-middle');\n    obj.draggable = true;\n    if (this.completed) {\n      checkbox.defaultChecked = true;\n      obj.classList.add('disabled');\n    }\n    texter.innerText = this.description;\n    obj.appendChild(checkbox);\n    obj.appendChild(texter);\n    obj.appendChild(delBtn);\n    mainCont.appendChild(obj);\n    delBtn.addEventListener('click', () => {\n      (0,_adjustItems_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(arr, this.index);\n      printList(arr);\n      temp = [...arr];\n    });\n    obj.addEventListener('drag', _dragging_js__WEBPACK_IMPORTED_MODULE_1__.heldItem);\n    obj.addEventListener('dragover', _dragging_js__WEBPACK_IMPORTED_MODULE_1__.droppedOn);\n    obj.addEventListener('drop', () => { (0,_dragging_js__WEBPACK_IMPORTED_MODULE_1__.dragger)(arr); printList(arr); });\n  }\n}\n\nconst btn = document.getElementById('SubmitButton');\n\nbtn.addEventListener('click', () => {\n  (0,_adjustItems_js__WEBPACK_IMPORTED_MODULE_2__.addTodo)(temp);\n  const num = temp.length - 1;\n  arr.push(new Todo(temp[num].description, temp[num].completed, temp[num].index));\n  printList(arr);\n});\nwindow.addEventListener('DOMContentLoad', () => {\n  const descIt = document.getElementById('TodoDesc');\n  descIt.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      e.preventDefault();\n      btn.click();\n    }\n  });\n  const cleanbtn = document.getElementById('ClearButton');\n  cleanbtn.addEventListener('click', () => {\n    (0,_adjustItems_js__WEBPACK_IMPORTED_MODULE_2__.deleteMarked)(arr);\n    arr = [];\n    temp = JSON.parse(localStorage.getItem('todoArray'));\n    // eslint-disable-next-line max-len\n    temp.forEach((item) => arr.push(new Todo(item.description, item.completed, temp.indexOf(item))));\n    printList(arr);\n  });\n  if (localStorage.getItem('todoArray')) {\n    temp = JSON.parse(localStorage.getItem('todoArray'));\n    // eslint-disable-next-line max-len\n    temp.forEach((item) => arr.push(new Todo(item.description, item.completed, temp.indexOf(item))));\n  }\n});\n\nprintList(arr);\n\nmodule.exports = Todo;\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;