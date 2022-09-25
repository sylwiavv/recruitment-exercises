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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _microblog_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./microblog/index */ \"./microblog/index.ts\");\n/* harmony import */ var _searchbox_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchbox/index */ \"./searchbox/index.ts\");\n/* harmony import */ var _konami_code_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./konami_code/index */ \"./konami_code/index.ts\");\n/* harmony import */ var _microblog_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./microblog/assets/scss/main.scss */ \"./microblog/assets/scss/main.scss\");\n// Scripts\n\n\n\n\n// Styles\n\n\n//# sourceURL=webpack://typescript/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./microblog/assets/scss/main.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./microblog/assets/scss/main.scss ***!
  \**********************************************************************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nError: PostCSS received undefined instead of CSS string\\n    at new Input (/Users/sylwia/Downloads/recruitment-exercises/src/js/node_modules/postcss/lib/input.js:24:13)\\n    at parse (/Users/sylwia/Downloads/recruitment-exercises/src/js/node_modules/postcss/lib/parse.js:8:15)\\n    at new LazyResult (/Users/sylwia/Downloads/recruitment-exercises/src/js/node_modules/postcss/lib/lazy-result.js:133:16)\\n    at Processor.process (/Users/sylwia/Downloads/recruitment-exercises/src/js/node_modules/postcss/lib/processor.js:28:14)\\n    at Object.loader (/Users/sylwia/Downloads/recruitment-exercises/src/js/node_modules/css-loader/dist/index.js:128:51)\");\n\n//# sourceURL=webpack://typescript/./microblog/assets/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./microblog/assets/scss/main.scss":
/*!*****************************************!*\
  !*** ./microblog/assets/scss/main.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./microblog/assets/scss/main.scss\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);\n\n\n//# sourceURL=webpack://typescript/./microblog/assets/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://typescript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./konami_code/index.ts":
/*!******************************!*\
  !*** ./konami_code/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ESC = 27;\nvar input = document.querySelector('#konami_input');\nvar wrapper = document.querySelector('#konami_code');\nvar list = document.createElement('ul');\nvar timeoutIdInout;\nvar timeoutIdList;\n// Display 5 newest issues names and nickname of the author\nvar fetchData = function (items) {\n    if (items === void 0) { items = 5; }\n    var data = \"https://api.github.com/repos/elixir-lang/elixir/issues?&per_page=\".concat(items);\n    fetch(data)\n        .then(function (response) { return response.json(); })\n        .then(function (data) {\n        data.forEach(function (_a) {\n            var issueName = _a.title, authorNickname = _a.user.login;\n            renderList(issueName, authorNickname);\n        });\n    })\n        .catch(function (err) { return console.log('Request Failed', err); });\n};\ninput.addEventListener('input', function (e) {\n    var inputValue = e.target.value;\n    if (timeoutIdInout !== undefined || inputValue === '') {\n        clearTimeout(timeoutIdInout);\n    }\n    timeoutIdInout = setTimeout(clearInput, 5000);\n    if (inputValue === 'injects3crets') {\n        fetchData();\n        if (timeoutIdList !== undefined) {\n            clearTimeout(timeoutIdList);\n            console.log(timeoutIdList);\n        }\n        timeoutIdList = setTimeout(hideList, 15000);\n    }\n    else {\n        hideList();\n    }\n});\ninput.addEventListener(\"keydown\", function (e) {\n    if (e.keyCode === ESC) {\n        clearInput();\n        hideList();\n    }\n});\nvar renderList = function (issueName, authorNickname) {\n    var listElement = document.createElement('li');\n    listElement.innerHTML = \"\\n    <li>\\n        <span><strong>Issue name:</strong> \".concat(issueName, \"</span>\\n        <span><strong>Author nickname:</strong> \").concat(authorNickname, \"</span>\\n    </li>\\n    \");\n    list.appendChild(listElement);\n    wrapper.appendChild(list);\n};\nvar hideList = function () {\n    list.innerHTML = '';\n    list.remove();\n};\nvar clearInput = function () {\n    input.value = \"\";\n};\n\n//\n// let pending: object = {};\n//\n// function mySetTimeout(callback: () => void, delay: number) {\n//     let t: ReturnType<typeof setTimeout>;\n//     t = setTimeout(function() {\n//         // @ts-ignore\n//         delete pending[t];\n//         callback()}, delay)\n//     // @ts-ignore\n//     pending[t]=1;\n//     console.log(t);\n// }\n// function clearAllTimeouts() {\n//     for (var t in pending) if (pending.hasOwnProperty(t)) {\n//         clearTimeout(t);\n//         // @ts-ignore\n//         delete pending[t];\n//     }\n// }\n// mySetTimeout(clearInput, 15000);\n\n\n//# sourceURL=webpack://typescript/./konami_code/index.ts?");

/***/ }),

/***/ "./microblog/data/articles.ts":
/*!************************************!*\
  !*** ./microblog/data/articles.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allArticles\": () => (/* binding */ allArticles)\n/* harmony export */ });\nvar allArticles = [\n    {\n        title: 'The surprising ancient roots of The Lord of the Rings',\n        content: \"The series takes its cue from an appendix Tolkien wrote for the final instalment of his epic, slenderly outlining the history of Middle-earth's Second Age. By necessity – legal as well as creative (Amazon doesn't own the rights to posthumously published materials in which Tolkien goes into greater depth on the Second Age) – the show's writers have had to alter and embellish, compressing time frames, inventing new characters and tinkering with the storylines of some canonical creations.\",\n        likes: 2,\n        dislikes: 3,\n    },\n    {\n        title: 'The writers who invented languages',\n        content: 'f you’re a Game of Thrones fan suffering from withdrawal, you might consider brushing up on your Dothraki while waiting to find out whether any of your favourite characters will live to see another season. How? With the Dothraki Companion app, of course, the latest creation of David J Peterson, who’s the man responsible for turning the handful of phrases found in the original series of books into a lexicon of more than 4,000 words.',\n        likes: 1,\n        dislikes: 0,\n    },\n    {\n        title: 'Is the final Hobbit film a flop?',\n        content: 'The Battle of the Five Armies is undoubtedly a colossal technical achievement, with something marvellous to look at in every corner of the screen. The CGI is immeasurably better than it was in the Lord of the Rings trilogy, and no dragon in cinema history has ever been as awe-inspiring as the vast, snaking, spiny Smaug (voiced by Benedict Cumberbatch). And it’s not just the monsters that are spectacular. Just as much care and attention has gone into the tiniest details of the characters’ armour, weaponry and hairstyles. There aren’t many film productions which would go to the effort of engraving the toggles on either end of a dwarf’s moustache.',\n        likes: 3,\n        dislikes: 0,\n    },\n    {\n        title: 'Why companies are rescinding job offers',\n        content: 'Communications ended there: Michael was ghosted as if the position had never existed. With no explanation from the employer, Michael says he couldn’t help but speculate. “My first thought was [it happened] because I hadn’t provided references right away, that I didn’t initially email back immediately or that I’d asked too many questions.”',\n        likes: 4,\n        dislikes: 0,\n    },\n    {\n        title: 'The rise of never-ending job interviews',\n        content: 'Five companies told him they had to delay hiring because of Covid-19 – but only after he’d done the final round of interviews. Another three invited him for several rounds of interviews until it was time to make an offer, at which point they decided to promote internally. Then, he made it through three rounds of interviews for a director-level position at a company he really liked, only to receive an email to co-ordinate six more rounds.',\n        likes: 9,\n        dislikes: 0,\n    },\n    {\n        title: 'Why worker loyalty is at a breaking point',\n        content: 'The mother of two, whose surname is being withheld for professional reasons, enjoyed her job in the firm’s wealth-management division. But in June, her bosses determined that, given the global pandemic continued to show signs of easing, everyone in the team would soon be ordered back to the office full time. ',\n        likes: 28,\n        dislikes: 0,\n    },\n];\n\n\n//# sourceURL=webpack://typescript/./microblog/data/articles.ts?");

/***/ }),

/***/ "./microblog/helpers/modal.ts":
/*!************************************!*\
  !*** ./microblog/helpers/modal.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal)\n/* harmony export */ });\nvar getFormArticle = document.querySelector('#form-wrapper');\nvar body = document.querySelector('body');\nvar getTitleInput = document.querySelector('#article-title');\nvar getContentInput = document.querySelector('#article-content');\nbody.addEventListener('click', function (e) {\n    if (e.target.matches('#create-article')) {\n        getFormArticle.classList.toggle('active');\n        if (getFormArticle.classList.contains('active')) {\n            body.classList.add('active');\n        }\n        else {\n            body.classList.remove('active');\n        }\n    }\n    else if (e.target.matches('body') || e.target.matches('.close-button')) {\n        closeModal();\n    }\n});\nvar closeModal = function () {\n    getFormArticle.classList.remove('active');\n    body.classList.remove('active');\n    getTitleInput.value = '';\n    getContentInput.value = '';\n};\n\n\n//# sourceURL=webpack://typescript/./microblog/helpers/modal.ts?");

/***/ }),

/***/ "./microblog/helpers/render-articles.ts":
/*!**********************************************!*\
  !*** ./microblog/helpers/render-articles.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderArticles\": () => (/* binding */ renderArticles)\n/* harmony export */ });\n/* harmony import */ var _data_articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/articles */ \"./microblog/data/articles.ts\");\nvar getArticlesContainer = document.querySelector('.articles');\nvar numberOfPosts = document.querySelector('#number-of-post');\n\nvar showNumber = '';\nvar renderArticles = function (updateLikesCallback) {\n    var articleNumber = null;\n    var fragment = document.createDocumentFragment();\n    _data_articles__WEBPACK_IMPORTED_MODULE_0__.allArticles.forEach(function (_a, i) {\n        var title = _a.title, content = _a.content, likes = _a.likes, dislikes = _a.dislikes;\n        articleNumber++;\n        if (articleNumber <= 9) {\n            showNumber = \"0\".concat(articleNumber);\n        }\n        else {\n            showNumber = \"\".concat(articleNumber);\n        }\n        var createArticle = document.createElement('article');\n        createArticle.classList.add('article');\n        var id = \"\".concat(i);\n        createArticle.setAttribute('for', id);\n        createArticle.innerHTML = \"\\n            <div class=\\\"wrapper\\\">\\n              <button data-text=\\\"Remove article\\\" class=\\\"icon-button remove\\\"></button>\\n           </div>\\n            <div class=\\\"article__title_wrapper\\\" data-whatever=\\\"\".concat(showNumber, \"\\\">\\n               <h2 class=\\\"article__title\\\">\").concat(title, \"</h2>\\n            </div>\\n           <p class=\\\"article__content\\\">\").concat(content, \"</p>\\n           <div class=\\\"box-likes wrapper\\\">\\n           <p>Do you like this article? </p>\\n             <div class=\\\"wrapper\\\">\\n               <div class=\\\"button-wrapper\\\">\\n                   <button class=\\\"icon-button thumb-up\\\" id=\\\"button-like\\\"></button>\\n                   <span class=\\\"likes-count\\\" id=\\\"people-likes\\\">\").concat(likes, \"</span>\\n               </div>\\n               <div class=\\\"button-wrapper\\\">\\n                   <button class=\\\"icon-button thumb-down\\\" id=\\\"button-dislikes\\\"></button>\\n                   <span class=\\\"likes-count\\\" id=\\\"people-dislikes\\\">\").concat(dislikes, \"</span>\\n               </div>\\n             </div>\\n           </div>\\n        \");\n        fragment.appendChild(createArticle);\n    });\n    getArticlesContainer.appendChild(fragment);\n    numberOfPosts.innerHTML = String(Number(_data_articles__WEBPACK_IMPORTED_MODULE_0__.allArticles.length));\n};\n\n\n//# sourceURL=webpack://typescript/./microblog/helpers/render-articles.ts?");

/***/ }),

/***/ "./microblog/index.ts":
/*!****************************!*\
  !*** ./microblog/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createErrorMessage\": () => (/* binding */ createErrorMessage)\n/* harmony export */ });\n/* harmony import */ var _helpers_render_articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/render-articles */ \"./microblog/helpers/render-articles.ts\");\n/* harmony import */ var _data_articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/articles */ \"./microblog/data/articles.ts\");\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/types */ \"./microblog/types/types.ts\");\n/* harmony import */ var _helpers_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/modal */ \"./microblog/helpers/modal.ts\");\n\n\n\n\nvar getFormArticle = document.querySelector('#form-wrapper');\nvar body = document.querySelector('body');\nvar addArticle = document.querySelector('#add-article');\nvar getTitleInput = document.querySelector('#article-title');\nvar getContentInput = document.querySelector('#article-content');\nvar titleValue = '';\nvar contentValue = '';\nvar errorMessage = 'You need to fill all fields';\nvar createErrorMessage = document.createElement('p');\ncreateErrorMessage.classList.add('error-message');\nvar getAllArticlesWrapper = document.querySelector('.articles');\nvar addNewArticle = function (article) {\n    getAllArticlesWrapper.innerHTML = '';\n    _data_articles__WEBPACK_IMPORTED_MODULE_1__.allArticles.push(article);\n};\naddArticle.addEventListener('click', function (e) {\n    createErrorMessage.remove();\n    e.preventDefault();\n    if (getTitleInput.value && getContentInput.value) {\n        addNewArticle(new _types_types__WEBPACK_IMPORTED_MODULE_2__.Article(titleValue, contentValue, 0, 0));\n        (0,_helpers_render_articles__WEBPACK_IMPORTED_MODULE_0__.renderArticles)(updateLikes);\n        (0,_helpers_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)();\n    }\n    else {\n        createErrorMessage.innerText = errorMessage;\n        getFormArticle.appendChild(createErrorMessage);\n    }\n});\nvar updateLikes = function (childLikes, likesNumberElement, currentArticleIndex) {\n    _data_articles__WEBPACK_IMPORTED_MODULE_1__.allArticles[currentArticleIndex].likes = childLikes;\n    likesNumberElement.innerHTML = String(childLikes);\n};\n(0,_helpers_render_articles__WEBPACK_IMPORTED_MODULE_0__.renderArticles)(updateLikes);\nbody.addEventListener('click', function (e) {\n    if (e.target.matches('#button-like') || e.target.matches('#button-dislikes')) {\n        var parent_1 = e.target.parentNode;\n        var currentArticleIndex = parseInt(parent_1.parentNode.parentNode.parentNode.getAttribute('for'));\n        var likesNumberElement = parent_1.children[1];\n        var childLikes = parseInt(parent_1.children[1].innerHTML);\n        if (e.target.matches('#button-like') || e.target.matches('#button-dislikes')) {\n            childLikes++;\n            updateLikes(childLikes, likesNumberElement, currentArticleIndex);\n        }\n    }\n});\nvar allArticlesDom = document.querySelector('.articles');\nallArticlesDom.addEventListener('click', function (e) {\n    if (e.target.matches('.remove')) {\n        var parent_2 = e.target.parentNode.parentNode;\n        var currentArticleIndex = parseInt(parent_2.getAttribute('for'));\n        _data_articles__WEBPACK_IMPORTED_MODULE_1__.allArticles.splice(currentArticleIndex, 1);\n        getAllArticlesWrapper.innerHTML = '';\n        (0,_helpers_render_articles__WEBPACK_IMPORTED_MODULE_0__.renderArticles)(updateLikes);\n    }\n});\n\n\n//# sourceURL=webpack://typescript/./microblog/index.ts?");

/***/ }),

/***/ "./microblog/types/types.ts":
/*!**********************************!*\
  !*** ./microblog/types/types.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Article\": () => (/* binding */ Article)\n/* harmony export */ });\nvar Article = /** @class */ (function () {\n    function Article(title, content, likes, dislikes) {\n        this.title = title;\n        this.content = content;\n        this.likes = likes;\n        this.dislikes = dislikes;\n    }\n    return Article;\n}());\n\n\n\n//# sourceURL=webpack://typescript/./microblog/types/types.ts?");

/***/ }),

/***/ "./searchbox/data/colors.ts":
/*!**********************************!*\
  !*** ./searchbox/data/colors.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"colors\": () => (/* binding */ colors)\n/* harmony export */ });\nvar colors = [\n    {\n        id: '#D65DB1',\n        category: 'pink',\n    }, {\n        id: '#FF9671',\n        category: 'orange',\n    }, {\n        id: '#2C73D2',\n        category: 'blue',\n    }, {\n        id: '#cbbcad',\n        category: 'beige',\n    }, {\n        id: '#0a967f',\n        category: 'green',\n    }, {\n        id: '#d95468',\n        category: 'red',\n    }, {\n        id: '#FFC55D',\n        category: 'yellow',\n    }, {\n        id: '#000',\n        category: 'black',\n    }, {\n        id: '#cb19cb',\n        category: 'fuchsia',\n    }, {\n        id: '#B9BBC1',\n        category: 'gray',\n    },\n];\n\n\n//# sourceURL=webpack://typescript/./searchbox/data/colors.ts?");

/***/ }),

/***/ "./searchbox/index.ts":
/*!****************************!*\
  !*** ./searchbox/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/colors */ \"./searchbox/data/colors.ts\");\n\nvar searchBoxWrapper = document.querySelector('#search-box-wrapper');\nvar searchBoxInput = document.querySelector('#search-box-input');\nvar chosenColorBox = document.querySelector('.chosen-color');\nvar clearButton = document.querySelector('#clear-input-color');\nvar searchButton = document.querySelector('#search-input-color');\nvar buttonsWrapper = document.querySelector('.buttons-wrapper');\nvar colorsWrapper = document.createElement('ul');\nvar chosenColors = [];\nsearchBoxInput.addEventListener(\"input\", function (e) {\n    var inputValue = e.target.value;\n    chosenColors.push(inputValue);\n    _data_colors__WEBPACK_IMPORTED_MODULE_0__.colors.forEach(function (_a) {\n        var id = _a.id, category = _a.category;\n        var matchItems = category.match(inputValue);\n        if (matchItems !== null) {\n            document.title = matchItems.input;\n            setColors(id);\n        }\n    });\n    searchBoxInput.value == '' && cleanInput();\n});\nbuttonsWrapper.addEventListener('click', function (e) {\n    e.preventDefault();\n    e.target === clearButton && cleanInput();\n    if (e.target === searchButton) {\n        document.title = 'green';\n        var greenOnGreen = _data_colors__WEBPACK_IMPORTED_MODULE_0__.colors.filter(function (colors) { return colors.category === 'green'; });\n        chosenColorBox.innerHTML = greenOnGreen[0].id;\n        setColors(document.title);\n    }\n});\nvar setColors = function (color) {\n    searchBoxInput.style.color = color;\n    chosenColorBox.style.backgroundColor = color;\n    chosenColorBox.innerHTML = color;\n    var foundBlack = _data_colors__WEBPACK_IMPORTED_MODULE_0__.colors.filter(function (color) { return color.category === 'black'; });\n    if (foundBlack[0].id === color) {\n        chosenColorBox.style.color = '#fff';\n    }\n    else {\n        chosenColorBox.style.color = foundBlack[0].id;\n    }\n};\nvar cleanInput = function () {\n    searchBoxInput.value = '';\n    chosenColorBox.innerHTML = 'Color';\n    chosenColorBox.style.backgroundColor = '#fff';\n};\nvar renderColors = function () {\n    _data_colors__WEBPACK_IMPORTED_MODULE_0__.colors.forEach(function (_a) {\n        var id = _a.id;\n        var colorElement = document.createElement('li');\n        colorElement.innerHTML = id;\n        colorElement.style.backgroundColor = \"\".concat(id);\n        id === '#000' && (colorElement.style.color = '#fff');\n        colorsWrapper.appendChild(colorElement);\n    });\n    searchBoxWrapper.appendChild(colorsWrapper);\n};\nrenderColors();\n\n\n//# sourceURL=webpack://typescript/./searchbox/index.ts?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;