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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("\r\nconst btn = document.getElementById(\"button1\");\r\nbtn.addEventListener(\"click\",()=> {\r\n    const el = document.getElementById(\"header\");\r\n    el.innerHTML = \"I update the code\";\r\n\r\n    const shopplingList = [\"Potato\", \"Tomato\", \"LadyFinger\", \"Onion\", \"Spinach\", \"chilly\"]\r\n    const ul = document.getElementById(\"shoppingList\");\r\n\r\n    shopplingList.forEach(item => {\r\n        const tempElement = document.createElement(\"li\");\r\n        tempElement.innerHTML = item;\r\n        ul.appendChild(tempElement);\r\n    })\r\n})\n\n//# sourceURL=webpack://y/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;