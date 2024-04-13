/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Urbanist-Regular.ttf */ "./src/fonts/Urbanist-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./image/background/desert-dune.jpg */ "./src/image/background/desert-dune.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'urbanist';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}

:root {
    --main-color: #FEFEFE;
    --crimson-color: #CF1A1A;
    --background: rgba(0, 0, 0, 0.3);
}

body {
    display: flex;
    flex-direction: column;
    gap: 4vh;
    max-height: 100vh;
    font-family: 'urbanist';
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    margin: 5vh 15vw;
}

.search-div {
    text-align: right;
    flex-wrap: wrap;
}

#location {
    appearance: none;
    background: transparent;
    padding: 4px 8px;
    border: none;
    border-bottom: 2px solid #000000;
    font-size: 1.2rem;
}

#location:focus {
    outline: none;
    background-color: var(--main-color);
    border-radius: 4px 4px 0 0;
}

.search {
    font-size: 1.4rem;
    cursor: pointer;
    border: none;
    background: transparent;
    margin-left: -4px;
}

.search:hover {
    color: #5f5a5a;
}

#error-message {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: var(--crimson-color);
    margin: 4px 35px 0 0;
}

.search-div + div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 50px;
}

.current-info {
    background-color: var(--background);
    padding: 30px 20px;
    color: var(--main-color);
    border-radius: 16px;
}

.current-info p {
    margin: 8px 0;
}

.current-weather {
    font-size: 3rem;
    font-weight: 500;
    text-transform: capitalize;
    letter-spacing: 2px;
}

.current-location {
    font-size: 1.75rem;
    margin-bottom: 0 !important;
    text-transform: capitalize;
}

.current-info > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 70px;
}

.current-time {
    font-size: 1rem;
    margin: 0 !important;
}

.current-time + button, .current-temp + button {
    background-color: rgba(0, 89, 255, 0.28);
    color: var(--main-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    appearance: none;
    padding: 4px 12px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
}

.current-time + button:hover, .current-temp + button:hover {
    background-color: var(--crimson-color);
}

.current-temp {
    font-size: 3.4rem;
}

.current-info > img {
    display: block;
    filter: brightness(0) invert(1);
    padding: 10px;
    width: 90px;
    height: auto;
    margin: auto;
}

.current-wind-dir {
    margin: 16px 0 0;
}

.wind-direction {
    font-size: 1.4rem;
}

.wind-arrow {
    font-size: 3.2rem;
    text-align: center;
}

.more-details {
    background-color: var(--background);
    padding: 10px 30px;
    color: var(--main-color);
    border-radius: 16px;
}

.more-details > div {
    display: grid;
    column-gap: 6px;
    grid-template: repeat(2, 1fr) / 40px 1fr;
    align-items: center;
    margin: 20px 0;
}

.more-details i {
    grid-row: 1 / 3;
    font-size: 2rem;
    text-align: center;
    margin-right: 25px;
}

.more-details i:first-of-type {
    margin-right: 10px;
}

.more-details i ~ p {
    margin: 8px 0 0;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-transform: uppercase;
}

.more-details > div p:last-child {
    margin: 0;
    font-size: 1.7rem;
    letter-spacing: 1.2px;
}

button[class*="forecast-btn"] {
    appearance: none;
    border: 3px solid transparent;
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--main-color);
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 1.2px;
    padding: 8px 16px;
    border-radius: 12px;
    cursor: pointer;
    margin: 0 8px 8px;
}

button[class*="forecast-btn"]:hover {
    border: 3px solid var(--main-color);
    border-radius: 12px;
}

button.active {
    border: 3px solid var(--main-color);
}

.week-forecast, .day-forecast {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    gap: 20px;
    overflow-x: auto;
}

.week-forecast > div, .day-forecast > div {
    width: 170px;
    min-height: 180px;
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--main-color);
    border-radius: 12px;
    letter-spacing: 1.2px;
    padding: 14px 20px 0;
}

.day-forecast > div {
    min-width: 110px;
}

.day, .hour {
    font-size: 1.4rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
}

.hour {
    font-size: 1.4rem !important;
}

.day + img, .hour + img {
    display: block;
    width: 80px;
    height: auto;
    margin: auto;
}

img[src*="13"] {
    filter: invert(44%) sepia(96%) saturate(1785%) hue-rotate(162deg) brightness(95%) contrast(101%);
}

.forecast-temp {
    font-size: 2rem;
    margin: 4px 20px;
}

.hour-forecast-temp {
    font-size: 2rem;
    text-align: center;
    margin: 4px 0;
}

.forecast-temp + p {
    font-size: 1.2rem;
    margin: 0 20px 10px;
}

.day-forecast::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 14px 14px #5f5a5a;
    border: 4px solid transparent;
    border-radius: 8px;
    cursor: pointer;
}

.day-forecast::-webkit-scrollbar-thumb:hover {
    box-shadow: inset 0 0 14px 14px var(--crimson-color);
}

.day-forecast::-webkit-scrollbar {
    width: 16px;
}

.day-forecast::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px var(--background);
    border: solid 2px transparent;
    border-radius: 8px;
}

footer {
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--main-color);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100vw;
    font-size: 18px;
}

.copyright {
    margin: 12px 0;
}

i[class\$="hub"] {
    color: #5f5a5a;
    font-size: 24px;
}

i[class\$="hub"]:hover {
    color: var(--main-color);
    font-size: 24px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'urbanist';\r\n    src: url('./fonts/Urbanist-Regular.ttf') format('truetype');\r\n}\r\n\r\n:root {\r\n    --main-color: #FEFEFE;\r\n    --crimson-color: #CF1A1A;\r\n    --background: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4vh;\r\n    max-height: 100vh;\r\n    font-family: 'urbanist';\r\n    background-image: url('./image/background/desert-dune.jpg');\r\n    background-size: cover;\r\n    margin: 5vh 15vw;\r\n}\r\n\r\n.search-div {\r\n    text-align: right;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#location {\r\n    appearance: none;\r\n    background: transparent;\r\n    padding: 4px 8px;\r\n    border: none;\r\n    border-bottom: 2px solid #000000;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#location:focus {\r\n    outline: none;\r\n    background-color: var(--main-color);\r\n    border-radius: 4px 4px 0 0;\r\n}\r\n\r\n.search {\r\n    font-size: 1.4rem;\r\n    cursor: pointer;\r\n    border: none;\r\n    background: transparent;\r\n    margin-left: -4px;\r\n}\r\n\r\n.search:hover {\r\n    color: #5f5a5a;\r\n}\r\n\r\n#error-message {\r\n    display: block;\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n    letter-spacing: 1.2px;\r\n    color: var(--crimson-color);\r\n    margin: 4px 35px 0 0;\r\n}\r\n\r\n.search-div + div {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 0 50px;\r\n}\r\n\r\n.current-info {\r\n    background-color: var(--background);\r\n    padding: 30px 20px;\r\n    color: var(--main-color);\r\n    border-radius: 16px;\r\n}\r\n\r\n.current-info p {\r\n    margin: 8px 0;\r\n}\r\n\r\n.current-weather {\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    text-transform: capitalize;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.current-location {\r\n    font-size: 1.75rem;\r\n    margin-bottom: 0 !important;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.current-info > div {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    gap: 70px;\r\n}\r\n\r\n.current-time {\r\n    font-size: 1rem;\r\n    margin: 0 !important;\r\n}\r\n\r\n.current-time + button, .current-temp + button {\r\n    background-color: rgba(0, 89, 255, 0.28);\r\n    color: var(--main-color);\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n    font-weight: 600;\r\n    appearance: none;\r\n    padding: 4px 12px;\r\n    border: none;\r\n    border-radius: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n.current-time + button:hover, .current-temp + button:hover {\r\n    background-color: var(--crimson-color);\r\n}\r\n\r\n.current-temp {\r\n    font-size: 3.4rem;\r\n}\r\n\r\n.current-info > img {\r\n    display: block;\r\n    filter: brightness(0) invert(1);\r\n    padding: 10px;\r\n    width: 90px;\r\n    height: auto;\r\n    margin: auto;\r\n}\r\n\r\n.current-wind-dir {\r\n    margin: 16px 0 0;\r\n}\r\n\r\n.wind-direction {\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.wind-arrow {\r\n    font-size: 3.2rem;\r\n    text-align: center;\r\n}\r\n\r\n.more-details {\r\n    background-color: var(--background);\r\n    padding: 10px 30px;\r\n    color: var(--main-color);\r\n    border-radius: 16px;\r\n}\r\n\r\n.more-details > div {\r\n    display: grid;\r\n    column-gap: 6px;\r\n    grid-template: repeat(2, 1fr) / 40px 1fr;\r\n    align-items: center;\r\n    margin: 20px 0;\r\n}\r\n\r\n.more-details i {\r\n    grid-row: 1 / 3;\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    margin-right: 25px;\r\n}\r\n\r\n.more-details i:first-of-type {\r\n    margin-right: 10px;\r\n}\r\n\r\n.more-details i ~ p {\r\n    margin: 8px 0 0;\r\n    font-weight: 400;\r\n    letter-spacing: 1.2px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.more-details > div p:last-child {\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n    letter-spacing: 1.2px;\r\n}\r\n\r\nbutton[class*=\"forecast-btn\"] {\r\n    appearance: none;\r\n    border: 3px solid transparent;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: var(--main-color);\r\n    font-weight: 600;\r\n    font-size: 1.1rem;\r\n    letter-spacing: 1.2px;\r\n    padding: 8px 16px;\r\n    border-radius: 12px;\r\n    cursor: pointer;\r\n    margin: 0 8px 8px;\r\n}\r\n\r\nbutton[class*=\"forecast-btn\"]:hover {\r\n    border: 3px solid var(--main-color);\r\n    border-radius: 12px;\r\n}\r\n\r\nbutton.active {\r\n    border: 3px solid var(--main-color);\r\n}\r\n\r\n.week-forecast, .day-forecast {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: flex-end;\r\n    gap: 20px;\r\n    overflow-x: auto;\r\n}\r\n\r\n.week-forecast > div, .day-forecast > div {\r\n    width: 170px;\r\n    min-height: 180px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: var(--main-color);\r\n    border-radius: 12px;\r\n    letter-spacing: 1.2px;\r\n    padding: 14px 20px 0;\r\n}\r\n\r\n.day-forecast > div {\r\n    min-width: 110px;\r\n}\r\n\r\n.day, .hour {\r\n    font-size: 1.4rem;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n\r\n.hour {\r\n    font-size: 1.4rem !important;\r\n}\r\n\r\n.day + img, .hour + img {\r\n    display: block;\r\n    width: 80px;\r\n    height: auto;\r\n    margin: auto;\r\n}\r\n\r\nimg[src*=\"13\"] {\r\n    filter: invert(44%) sepia(96%) saturate(1785%) hue-rotate(162deg) brightness(95%) contrast(101%);\r\n}\r\n\r\n.forecast-temp {\r\n    font-size: 2rem;\r\n    margin: 4px 20px;\r\n}\r\n\r\n.hour-forecast-temp {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    margin: 4px 0;\r\n}\r\n\r\n.forecast-temp + p {\r\n    font-size: 1.2rem;\r\n    margin: 0 20px 10px;\r\n}\r\n\r\n.day-forecast::-webkit-scrollbar-thumb {\r\n    box-shadow: inset 0 0 14px 14px #5f5a5a;\r\n    border: 4px solid transparent;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.day-forecast::-webkit-scrollbar-thumb:hover {\r\n    box-shadow: inset 0 0 14px 14px var(--crimson-color);\r\n}\r\n\r\n.day-forecast::-webkit-scrollbar {\r\n    width: 16px;\r\n}\r\n\r\n.day-forecast::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 10px 10px var(--background);\r\n    border: solid 2px transparent;\r\n    border-radius: 8px;\r\n}\r\n\r\nfooter {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: var(--main-color);\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 16px;\r\n    width: 100vw;\r\n    font-size: 18px;\r\n}\r\n\r\n.copyright {\r\n    margin: 12px 0;\r\n}\r\n\r\ni[class$=\"hub\"] {\r\n    color: #5f5a5a;\r\n    font-size: 24px;\r\n}\r\n\r\ni[class$=\"hub\"]:hover {\r\n    color: var(--main-color);\r\n    font-size: 24px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js-script/current_weather.js":
/*!******************************************!*\
  !*** ./src/js-script/current_weather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   celsius: () => (/* binding */ celsius),
/* harmony export */   currentTemp: () => (/* binding */ currentTemp),
/* harmony export */   currentTime: () => (/* binding */ currentTime),
/* harmony export */   feelsLikeCelsius: () => (/* binding */ feelsLikeCelsius),
/* harmony export */   feelsTemp: () => (/* binding */ feelsTemp),
/* harmony export */   getCurrentWeatherData: () => (/* binding */ getCurrentWeatherData),
/* harmony export */   speedKPH: () => (/* binding */ speedKPH),
/* harmony export */   windSpeed: () => (/* binding */ windSpeed)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js-script/index.js");


const currentTime = document.querySelector('.current-time');
const currentTemp = document.querySelector('.current-temp');
const feelsTemp = document.querySelector('.feels-temp');
const windSpeed = document.querySelector('.wind');

let celsius;
let feelsLikeCelsius;
let speedKPH;

function dayOrNight(dt, dawn, dusk) {
    return (dt > dawn && dt < dusk) ? "day" : "night";
}

function convertLocalTime(timezone) {
    const unix = Math.floor(Date.now() / 1000);
    const utc_ms = (parseInt(unix, 10) + parseInt(timezone, 10)) * 1000;
    const local_date = new Date(utc_ms).toUTCString().split(" ")[4];
    const [hours, minutes] = local_date.split(":");
    return `${('0'+ hours).slice(-2)}:${('0'+ minutes).slice(-2)}`;
}

function displayWeatherData(weatherJSON) {
    const currentWeather = document.querySelector('.current-weather');
    currentWeather.textContent = weatherJSON.weather[0].description;

    const weatherIcon = document.querySelector('.current-weather + img');
    weatherIcon.src = `./image/weather-png/${dayOrNight(weatherJSON.dt, weatherJSON.sys.sunrise, weatherJSON.sys.sunset)}_${weatherJSON.weather[0].main.toLowerCase()}.png`;
    weatherIcon.alt = weatherJSON.weather[0].description;

    const currentLocation = document.querySelector('.current-location');
    currentLocation.textContent = `${_index__WEBPACK_IMPORTED_MODULE_0__.input.value}` || 'London';

    currentTime.textContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.checkTimeFormat)(convertLocalTime(weatherJSON.timezone));

    celsius = Math.floor(weatherJSON.main.temp);
    currentTemp.textContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.checkTempFormat)(celsius);

    const windDirection = document.querySelector('.wind-arrow');
    windDirection.style.transform = `rotate(${weatherJSON.wind.deg}deg)`;

    feelsLikeCelsius = Math.floor(weatherJSON.main.feels_like);
    feelsTemp.textContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.checkTempFormat)(feelsLikeCelsius);

    speedKPH = Math.round(weatherJSON.wind.speed * 36) / 10;
    windSpeed.textContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.checkWindUnit)(speedKPH);

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `${weatherJSON.main.humidity}%`;
}

async function getCurrentWeatherData(lat, lon) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${_index__WEBPACK_IMPORTED_MODULE_0__.openWeatherAPI}&units=metric`, 
        {mode: 'cors'}
    );
    const weatherData = await response.json();

    displayWeatherData(weatherData);
}



/***/ }),

/***/ "./src/js-script/daily_forecast.js":
/*!*****************************************!*\
  !*** ./src/js-script/daily_forecast.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js-script/index.js");


function displayWeekForecast(weekForecastJSON, fiveDaysForecast) {
    fiveDaysForecast.textContent = '';

    const interval = 8;
    const weekForecastArr = [];
    for (let i = 7; i < weekForecastJSON.list.length; i=i+interval) {
        weekForecastArr.push(weekForecastJSON.list[i]);
    }

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    weekForecastArr.forEach((dayForecast) => {
        const day = new Date(dayForecast.dt_txt.split(' ')[0]);
        const weather = dayForecast.weather[0];
        const forecastTemp = (0,_index__WEBPACK_IMPORTED_MODULE_0__.checkTempFormat)(Math.floor(dayForecast.main.temp));
        const forecastTempFeelsLike = (0,_index__WEBPACK_IMPORTED_MODULE_0__.checkTempFormat)(Math.floor(dayForecast.main.feels_like));

        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = `
            <p class="day">${dayNames[day.getDay()]}</p>
            <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}">
            <p class="forecast-temp">${forecastTemp}</p>
            <p>${forecastTempFeelsLike}</p>
        `;
        fiveDaysForecast.appendChild(dayDiv);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeekForecast);

/***/ }),

/***/ "./src/js-script/footer.js":
/*!*********************************!*\
  !*** ./src/js-script/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function gitHubFooter() {
    const copyright = document.querySelector('.copyright');
    const date = new Date();
    copyright.textContent = `Copyright ©️ ${date.getFullYear()} JHoldsworth23`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gitHubFooter);

/***/ }),

/***/ "./src/js-script/form.js":
/*!*******************************!*\
  !*** ./src/js-script/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkInput: () => (/* binding */ checkInput),
/* harmony export */   error: () => (/* binding */ error)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js-script/index.js");


const form = document.querySelector('.search-div');
const error = document.getElementById('error-message');

function checkInput() {
    if (_index__WEBPACK_IMPORTED_MODULE_0__.input.value == '') {
        error.textContent = 'You need to enter a location.';
    } else if (!isNaN(_index__WEBPACK_IMPORTED_MODULE_0__.input.value)) {
        error.textContent = 'Search value needs to be a location - not a number.';
    } else {
        return true;
    }
    form.appendChild(error);
    return;
}



/***/ }),

/***/ "./src/js-script/hourly_forecast.js":
/*!******************************************!*\
  !*** ./src/js-script/hourly_forecast.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js-script/index.js");


function displayHourForecast(hourlyForecastJSON, dayForecastDiv) {
    dayForecastDiv.textContent = '';

    hourlyForecastJSON.forEach((obj) => {
        const hourDiv = document.createElement('div');
        const time = (0,_index__WEBPACK_IMPORTED_MODULE_0__.checkTimeFormat)(obj.time.split(" ")[1]);
        const weather = obj.condition;
        const forecastTemp = (0,_index__WEBPACK_IMPORTED_MODULE_0__.checkTempFormat)(Math.floor(obj.temp_c));

        hourDiv.innerHTML = `
            <p class="hour">${time}</p>
            <img src="${weather.icon}" alt="${weather.text}">
            <p class="hour-forecast-temp">${forecastTemp}</p>
        `;
        dayForecastDiv.appendChild(hourDiv);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHourForecast);

/***/ }),

/***/ "./src/js-script/index.js":
/*!********************************!*\
  !*** ./src/js-script/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkTempFormat: () => (/* binding */ checkTempFormat),
/* harmony export */   checkTimeFormat: () => (/* binding */ checkTimeFormat),
/* harmony export */   checkWindUnit: () => (/* binding */ checkWindUnit),
/* harmony export */   input: () => (/* binding */ input),
/* harmony export */   openWeatherAPI: () => (/* binding */ openWeatherAPI),
/* harmony export */   tempFormat: () => (/* binding */ tempFormat),
/* harmony export */   timeFormatBtn: () => (/* binding */ timeFormatBtn)
/* harmony export */ });
/* harmony import */ var _current_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current_weather */ "./src/js-script/current_weather.js");
/* harmony import */ var _weather_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather_forecast */ "./src/js-script/weather_forecast.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/js-script/form.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/js-script/footer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./src/style.css");






const openWeatherAPI = 'b27c46842b98db969dffe3b1226f126f';

const input = document.querySelector('input');
const search = document.querySelector('.search');

const timeFormatBtn = document.querySelector('.time-format');
const tempFormat = document.querySelector('.temp-format');

let twelveHours = false;
let imperial = false;

function checkTimeFormat(timeString) {
    if (twelveHours) {
        const [hourString, minuteString] = timeString.split(':');
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ':' + minuteString + (hour < 12 ? ' AM' : ' PM');
    } else {
        const [time, meridiem] = timeString.split(' ');
        const [hour, minute] = time.split(':');
        let changeHours = parseInt(hour)
        if (meridiem === 'PM') {changeHours += 12}
        return `${('0' + changeHours).slice(-2)}:${minute}`;
    }
}

function checkTempFormat(temp) {
    return imperial 
      ? Math.floor((temp * 9/5) + 32) + ' °F' 
      : temp + ' °C';
}

function checkWindUnit(speed) {
    return imperial 
      ? Math.round(speed * 6.21371) / 10 + ' mph' 
      : speed + ' kph';
}

async function getCoordinates(location) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${openWeatherAPI}`, 
        {mode: 'cors'}
    );
    const coordinateData = await response.json();
    const { lat, lon } = coordinateData[0];

    (0,_current_weather__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeatherData)(lat, lon);
    (0,_weather_forecast__WEBPACK_IMPORTED_MODULE_1__.getWeatherForecast)(lat, lon);
}

getCoordinates('London');

search.addEventListener('click', () => {
    if ((0,_form__WEBPACK_IMPORTED_MODULE_2__.checkInput)()) {
        _form__WEBPACK_IMPORTED_MODULE_2__.error.textContent = '';
        getCoordinates(input.value)
          .catch(() => {_form__WEBPACK_IMPORTED_MODULE_2__.error.textContent = 'Location not found. Please try again.'});
    }
});

document.body.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if ((0,_form__WEBPACK_IMPORTED_MODULE_2__.checkInput)()) {
            _form__WEBPACK_IMPORTED_MODULE_2__.error.textContent = '';
            getCoordinates(input.value)
                .catch(() => {_form__WEBPACK_IMPORTED_MODULE_2__.error.textContent = 'Location not found. Please try again.'});
        }
    }
});

timeFormatBtn.addEventListener('click', () => {
    twelveHours = !twelveHours;
    _current_weather__WEBPACK_IMPORTED_MODULE_0__.currentTime.textContent = checkTimeFormat(_current_weather__WEBPACK_IMPORTED_MODULE_0__.currentTime.textContent);
});

tempFormat.addEventListener('click', () => {
    imperial = !imperial;
    _current_weather__WEBPACK_IMPORTED_MODULE_0__.currentTemp.textContent = checkTempFormat(_current_weather__WEBPACK_IMPORTED_MODULE_0__.celsius);
    _current_weather__WEBPACK_IMPORTED_MODULE_0__.feelsTemp.textContent = checkTempFormat(_current_weather__WEBPACK_IMPORTED_MODULE_0__.feelsLikeCelsius);
    _current_weather__WEBPACK_IMPORTED_MODULE_0__.windSpeed.textContent = checkWindUnit(_current_weather__WEBPACK_IMPORTED_MODULE_0__.speedKPH);
    tempFormat.textContent = imperial ? 'Display °C' : 'Display °F';
});

(0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])();



/***/ }),

/***/ "./src/js-script/weather_forecast.js":
/*!*******************************************!*\
  !*** ./src/js-script/weather_forecast.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherForecast: () => (/* binding */ getWeatherForecast)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/js-script/index.js");
/* harmony import */ var _daily_forecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daily_forecast */ "./src/js-script/daily_forecast.js");
/* harmony import */ var _hourly_forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hourly_forecast */ "./src/js-script/hourly_forecast.js");




const weatherAPI = 'dcb884b7c7f4487cbca185100242903';

function activateButton(button) {
    const activeBtn = document.querySelector('.active');
    activeBtn.classList.remove('active');
    button.classList.add('active');
}

function displayWeatherForecast(hourlyForecastJSON, weekForecastJSON) {
    const currentDT = Math.floor(Date.now() / 1000);
    const dayForecastJSON = hourlyForecastJSON[0].hour
      .concat(hourlyForecastJSON[1].hour)
      .filter(obj => {if (currentDT < obj.time_epoch) return obj})
      .slice(0, 24);

    const chanceOfRain = dayForecastJSON[0].chance_of_rain;
    const precipitation = document.querySelector('.precipitation');
    precipitation.textContent = `${chanceOfRain}%`;

    const weekForecastBtn = document.querySelector('.week-forecast-btn');
    const weekForecastDiv = document.querySelector('.week-forecast');

    const dayForecastBtn = document.querySelector('.day-forecast-btn');
    const dayForecastDiv = document.querySelector('.day-forecast');

    weekForecastDiv.textContent = '';

    weekForecastBtn.addEventListener('click', () => {
        activateButton(weekForecastBtn);
        dayForecastDiv.textContent = '';
        (0,_daily_forecast__WEBPACK_IMPORTED_MODULE_1__["default"])(weekForecastJSON, weekForecastDiv);
    });

    dayForecastBtn.addEventListener('click', () => {
        activateButton(dayForecastBtn);
        weekForecastDiv.textContent = '';
        (0,_hourly_forecast__WEBPACK_IMPORTED_MODULE_2__["default"])(dayForecastJSON, dayForecastDiv);
    });

    _index__WEBPACK_IMPORTED_MODULE_0__.timeFormatBtn.addEventListener('click', () => {
        if (dayForecastDiv.textContent) (0,_hourly_forecast__WEBPACK_IMPORTED_MODULE_2__["default"])(dayForecastJSON, dayForecastDiv);
    })

    _index__WEBPACK_IMPORTED_MODULE_0__.tempFormat.addEventListener('click', () => {
        dayForecastDiv.textContent ? (0,_hourly_forecast__WEBPACK_IMPORTED_MODULE_2__["default"])(dayForecastJSON, dayForecastDiv) : (0,_daily_forecast__WEBPACK_IMPORTED_MODULE_1__["default"])(weekForecastJSON, weekForecastDiv);
    });

    const weekOrDayForecast = document.querySelector('.active');
    weekOrDayForecast.classList.contains('week-forecast-btn') 
      ? (0,_daily_forecast__WEBPACK_IMPORTED_MODULE_1__["default"])(weekForecastJSON, weekForecastDiv) 
      : (0,_hourly_forecast__WEBPACK_IMPORTED_MODULE_2__["default"])(dayForecastJSON, dayForecastDiv);
}

async function getWeatherForecast(lat, lon) {
    const weatherApiResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherAPI}&q=${lat},${lon}&days=2`,
        { mode: 'cors'}
    );
    const dayForecastData = await weatherApiResponse.json();

    const openWeatherApiResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${_index__WEBPACK_IMPORTED_MODULE_0__.openWeatherAPI}&units=metric`,
        { mode: 'cors' }
    );
    const weekForecastJSON = await openWeatherApiResponse.json();

    displayWeatherForecast(dayForecastData.forecast.forecastday, weekForecastJSON);
}



/***/ }),

/***/ "./src/fonts/Urbanist-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Urbanist-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64ab880a68030133bbf7.ttf";

/***/ }),

/***/ "./src/image/background/desert-dune.jpg":
/*!**********************************************!*\
  !*** ./src/image/background/desert-dune.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70297d48e7d558a9bf18.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js-script/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFJQUErQztBQUMzRiw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FB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QzNCLFFBQVEsNERBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFdBQVcsS0FBSyxJQUFJLEdBQUcsSUFBSTtBQUN0RixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsSUFBSSxPQUFPLElBQUksU0FBUyxrREFBYyxDQUFDO0FBQ3ZHLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzLXNjcmlwdC9jdXJyZW50X3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMtc2NyaXB0L2RhaWx5X2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzLXNjcmlwdC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMtc2NyaXB0L2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMtc2NyaXB0L2hvdXJseV9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy1zY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMtc2NyaXB0L3dlYXRoZXJfZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvVXJiYW5pc3QtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlL2JhY2tncm91bmQvZGVzZXJ0LWR1bmUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ3VyYmFuaXN0JztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1tYWluLWNvbG9yOiAjRkVGRUZFO1xyXG4gICAgLS1jcmltc29uLWNvbG9yOiAjQ0YxQTFBO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDR2aDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICd1cmJhbmlzdCc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luOiA1dmggMTV2dztcclxufVxyXG5cclxuLnNlYXJjaC1kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbiNsb2NhdGlvbiB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuI2xvY2F0aW9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTRweDtcclxufVxyXG5cclxuLnNlYXJjaDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzVmNWE1YTtcclxufVxyXG5cclxuI2Vycm9yLW1lc3NhZ2Uge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY3JpbXNvbi1jb2xvcik7XHJcbiAgICBtYXJnaW46IDRweCAzNXB4IDAgMDtcclxufVxyXG5cclxuLnNlYXJjaC1kaXYgKyBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgNTBweDtcclxufVxyXG5cclxuLmN1cnJlbnQtaW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5jdXJyZW50LWluZm8gcCB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG59XHJcblxyXG4uY3VycmVudC13ZWF0aGVyIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5jdXJyZW50LWxvY2F0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY3VycmVudC1pbmZvID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA3MHB4O1xyXG59XHJcblxyXG4uY3VycmVudC10aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VycmVudC10aW1lICsgYnV0dG9uLCAuY3VycmVudC10ZW1wICsgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgODksIDI1NSwgMC4yOCk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jdXJyZW50LXRpbWUgKyBidXR0b246aG92ZXIsIC5jdXJyZW50LXRlbXAgKyBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JpbXNvbi1jb2xvcik7XHJcbn1cclxuXHJcbi5jdXJyZW50LXRlbXAge1xyXG4gICAgZm9udC1zaXplOiAzLjRyZW07XHJcbn1cclxuXHJcbi5jdXJyZW50LWluZm8gPiBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY3VycmVudC13aW5kLWRpciB7XHJcbiAgICBtYXJnaW46IDE2cHggMCAwO1xyXG59XHJcblxyXG4ud2luZC1kaXJlY3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi53aW5kLWFycm93IHtcclxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9yZS1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLm1vcmUtZGV0YWlscyA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgY29sdW1uLWdhcDogNnB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDFmcikgLyA0MHB4IDFmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLm1vcmUtZGV0YWlscyBpIHtcclxuICAgIGdyaWQtcm93OiAxIC8gMztcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5cclxuLm1vcmUtZGV0YWlscyBpOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubW9yZS1kZXRhaWxzIGkgfiBwIHtcclxuICAgIG1hcmdpbjogOHB4IDAgMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubW9yZS1kZXRhaWxzID4gZGl2IHA6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxufVxyXG5cclxuYnV0dG9uW2NsYXNzKj1cImZvcmVjYXN0LWJ0blwiXSB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDAgOHB4IDhweDtcclxufVxyXG5cclxuYnV0dG9uW2NsYXNzKj1cImZvcmVjYXN0LWJ0blwiXTpob3ZlciB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuXHJcbi53ZWVrLWZvcmVjYXN0LCAuZGF5LWZvcmVjYXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi53ZWVrLWZvcmVjYXN0ID4gZGl2LCAuZGF5LWZvcmVjYXN0ID4gZGl2IHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweCAwO1xyXG59XHJcblxyXG4uZGF5LWZvcmVjYXN0ID4gZGl2IHtcclxuICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbn1cclxuXHJcbi5kYXksIC5ob3VyIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ob3VyIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXkgKyBpbWcsIC5ob3VyICsgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmltZ1tzcmMqPVwiMTNcIl0ge1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoNDQlKSBzZXBpYSg5NiUpIHNhdHVyYXRlKDE3ODUlKSBodWUtcm90YXRlKDE2MmRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwMSUpO1xyXG59XHJcblxyXG4uZm9yZWNhc3QtdGVtcCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IDRweCAyMHB4O1xyXG59XHJcblxyXG4uaG91ci1mb3JlY2FzdC10ZW1wIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbn1cclxuXHJcbi5mb3JlY2FzdC10ZW1wICsgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbjogMCAyMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5kYXktZm9yZWNhc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNHB4IDE0cHggIzVmNWE1YTtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGF5LWZvcmVjYXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTRweCAxNHB4IHZhcigtLWNyaW1zb24tY29sb3IpO1xyXG59XHJcblxyXG4uZGF5LWZvcmVjYXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTZweDtcclxufVxyXG5cclxuLmRheS1mb3JlY2FzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbn1cclxuXHJcbmlbY2xhc3NcXCQ9XCJodWJcIl0ge1xyXG4gICAgY29sb3I6ICM1ZjVhNWE7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmlbY2xhc3NcXCQ9XCJodWJcIl06aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QiwrREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIseURBQTJEO0lBQzNELHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdHQUFnRztBQUNwRzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9EQUFvRDtBQUN4RDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICd1cmJhbmlzdCc7XFxyXFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1VyYmFuaXN0LVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tbWFpbi1jb2xvcjogI0ZFRkVGRTtcXHJcXG4gICAgLS1jcmltc29uLWNvbG9yOiAjQ0YxQTFBO1xcclxcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNHZoO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICd1cmJhbmlzdCc7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZS9iYWNrZ3JvdW5kL2Rlc2VydC1kdW5lLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBtYXJnaW46IDV2aCAxNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWRpdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbiNsb2NhdGlvbiB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2g6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzVmNWE1YTtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLW1lc3NhZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNyaW1zb24tY29sb3IpO1xcclxcbiAgICBtYXJnaW46IDRweCAzNXB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1kaXYgKyBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1pbmZvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC1pbmZvIHAge1xcclxcbiAgICBtYXJnaW46IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtbG9jYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LWluZm8gPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtdGltZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXRpbWUgKyBidXR0b24sIC5jdXJyZW50LXRlbXAgKyBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDg5LCAyNTUsIDAuMjgpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC10aW1lICsgYnV0dG9uOmhvdmVyLCAuY3VycmVudC10ZW1wICsgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JpbXNvbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXRlbXAge1xcclxcbiAgICBmb250LXNpemU6IDMuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtaW5mbyA+IGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogOTBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXdpbmQtZGlyIHtcXHJcXG4gICAgbWFyZ2luOiAxNnB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmQtZGlyZWN0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi53aW5kLWFycm93IHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtZGV0YWlscyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtZGV0YWlscyA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDZweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDFmcikgLyA0MHB4IDFmcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWRldGFpbHMgaSB7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMztcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtZGV0YWlscyBpOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWRldGFpbHMgaSB+IHAge1xcclxcbiAgICBtYXJnaW46IDhweCAwIDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtZGV0YWlscyA+IGRpdiBwOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbltjbGFzcyo9XFxcImZvcmVjYXN0LWJ0blxcXCJdIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcclxcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IDAgOHB4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uW2NsYXNzKj1cXFwiZm9yZWNhc3QtYnRuXFxcIl06aG92ZXIge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vlay1mb3JlY2FzdCwgLmRheS1mb3JlY2FzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLndlZWstZm9yZWNhc3QgPiBkaXYsIC5kYXktZm9yZWNhc3QgPiBkaXYge1xcclxcbiAgICB3aWR0aDogMTcwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1mb3JlY2FzdCA+IGRpdiB7XFxyXFxuICAgIG1pbi13aWR0aDogMTEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXksIC5ob3VyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91ciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5kYXkgKyBpbWcsIC5ob3VyICsgaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaW1nW3NyYyo9XFxcIjEzXFxcIl0ge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCg0NCUpIHNlcGlhKDk2JSkgc2F0dXJhdGUoMTc4NSUpIGh1ZS1yb3RhdGUoMTYyZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoMTAxJSk7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC10ZW1wIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBtYXJnaW46IDRweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG91ci1mb3JlY2FzdC10ZW1wIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogNHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC10ZW1wICsgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBtYXJnaW46IDAgMjBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWZvcmVjYXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNHB4IDE0cHggIzVmNWE1YTtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWZvcmVjYXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNHB4IDE0cHggdmFyKC0tY3JpbXNvbi1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5kYXktZm9yZWNhc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5kYXktZm9yZWNhc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pW2NsYXNzJD1cXFwiaHViXFxcIl0ge1xcclxcbiAgICBjb2xvcjogIzVmNWE1YTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pW2NsYXNzJD1cXFwiaHViXFxcIl06aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgb3BlbldlYXRoZXJBUEksIGlucHV0LCBjaGVja1RlbXBGb3JtYXQsIGNoZWNrVGltZUZvcm1hdCwgY2hlY2tXaW5kVW5pdCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5jb25zdCBjdXJyZW50VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRpbWUnKTtcclxuY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wJyk7XHJcbmNvbnN0IGZlZWxzVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy10ZW1wJyk7XHJcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XHJcblxyXG5sZXQgY2Vsc2l1cztcclxubGV0IGZlZWxzTGlrZUNlbHNpdXM7XHJcbmxldCBzcGVlZEtQSDtcclxuXHJcbmZ1bmN0aW9uIGRheU9yTmlnaHQoZHQsIGRhd24sIGR1c2spIHtcclxuICAgIHJldHVybiAoZHQgPiBkYXduICYmIGR0IDwgZHVzaykgPyBcImRheVwiIDogXCJuaWdodFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0TG9jYWxUaW1lKHRpbWV6b25lKSB7XHJcbiAgICBjb25zdCB1bml4ID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XHJcbiAgICBjb25zdCB1dGNfbXMgPSAocGFyc2VJbnQodW5peCwgMTApICsgcGFyc2VJbnQodGltZXpvbmUsIDEwKSkgKiAxMDAwO1xyXG4gICAgY29uc3QgbG9jYWxfZGF0ZSA9IG5ldyBEYXRlKHV0Y19tcykudG9VVENTdHJpbmcoKS5zcGxpdChcIiBcIilbNF07XHJcbiAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gbG9jYWxfZGF0ZS5zcGxpdChcIjpcIik7XHJcbiAgICByZXR1cm4gYCR7KCcwJysgaG91cnMpLnNsaWNlKC0yKX06JHsoJzAnKyBtaW51dGVzKS5zbGljZSgtMil9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJEYXRhKHdlYXRoZXJKU09OKSB7XHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXInKTtcclxuICAgIGN1cnJlbnRXZWF0aGVyLnRleHRDb250ZW50ID0gd2VhdGhlckpTT04ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXIgKyBpbWcnKTtcclxuICAgIHdlYXRoZXJJY29uLnNyYyA9IGAuL2ltYWdlL3dlYXRoZXItcG5nLyR7ZGF5T3JOaWdodCh3ZWF0aGVySlNPTi5kdCwgd2VhdGhlckpTT04uc3lzLnN1bnJpc2UsIHdlYXRoZXJKU09OLnN5cy5zdW5zZXQpfV8ke3dlYXRoZXJKU09OLndlYXRoZXJbMF0ubWFpbi50b0xvd2VyQ2FzZSgpfS5wbmdgO1xyXG4gICAgd2VhdGhlckljb24uYWx0ID0gd2VhdGhlckpTT04ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1sb2NhdGlvbicpO1xyXG4gICAgY3VycmVudExvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7aW5wdXQudmFsdWV9YCB8fCAnTG9uZG9uJztcclxuXHJcbiAgICBjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IGNoZWNrVGltZUZvcm1hdChjb252ZXJ0TG9jYWxUaW1lKHdlYXRoZXJKU09OLnRpbWV6b25lKSk7XHJcblxyXG4gICAgY2Vsc2l1cyA9IE1hdGguZmxvb3Iod2VhdGhlckpTT04ubWFpbi50ZW1wKTtcclxuICAgIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gY2hlY2tUZW1wRm9ybWF0KGNlbHNpdXMpO1xyXG5cclxuICAgIGNvbnN0IHdpbmREaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1hcnJvdycpO1xyXG4gICAgd2luZERpcmVjdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7d2VhdGhlckpTT04ud2luZC5kZWd9ZGVnKWA7XHJcblxyXG4gICAgZmVlbHNMaWtlQ2Vsc2l1cyA9IE1hdGguZmxvb3Iod2VhdGhlckpTT04ubWFpbi5mZWVsc19saWtlKTtcclxuICAgIGZlZWxzVGVtcC50ZXh0Q29udGVudCA9IGNoZWNrVGVtcEZvcm1hdChmZWVsc0xpa2VDZWxzaXVzKTtcclxuXHJcbiAgICBzcGVlZEtQSCA9IE1hdGgucm91bmQod2VhdGhlckpTT04ud2luZC5zcGVlZCAqIDM2KSAvIDEwO1xyXG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gY2hlY2tXaW5kVW5pdChzcGVlZEtQSCk7XHJcblxyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckpTT04ubWFpbi5odW1pZGl0eX0lYDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXJEYXRhKGxhdCwgbG9uKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHtvcGVuV2VhdGhlckFQSX0mdW5pdHM9bWV0cmljYCwgXHJcbiAgICAgICAge21vZGU6ICdjb3JzJ31cclxuICAgICk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBkaXNwbGF5V2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0Q3VycmVudFdlYXRoZXJEYXRhLCBcclxuICAgIGN1cnJlbnRUZW1wLCBcclxuICAgIGN1cnJlbnRUaW1lLCBcclxuICAgIGZlZWxzVGVtcCwgXHJcbiAgICB3aW5kU3BlZWQsXHJcbiAgICBjZWxzaXVzLFxyXG4gICAgZmVlbHNMaWtlQ2Vsc2l1cyxcclxuICAgIHNwZWVkS1BIXHJcbn07IiwiaW1wb3J0IHsgY2hlY2tUZW1wRm9ybWF0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXZWVrRm9yZWNhc3Qod2Vla0ZvcmVjYXN0SlNPTiwgZml2ZURheXNGb3JlY2FzdCkge1xyXG4gICAgZml2ZURheXNGb3JlY2FzdC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGludGVydmFsID0gODtcclxuICAgIGNvbnN0IHdlZWtGb3JlY2FzdEFyciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDc7IGkgPCB3ZWVrRm9yZWNhc3RKU09OLmxpc3QubGVuZ3RoOyBpPWkraW50ZXJ2YWwpIHtcclxuICAgICAgICB3ZWVrRm9yZWNhc3RBcnIucHVzaCh3ZWVrRm9yZWNhc3RKU09OLmxpc3RbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xyXG4gICAgd2Vla0ZvcmVjYXN0QXJyLmZvckVhY2goKGRheUZvcmVjYXN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF5Rm9yZWNhc3QuZHRfdHh0LnNwbGl0KCcgJylbMF0pO1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBkYXlGb3JlY2FzdC53ZWF0aGVyWzBdO1xyXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0VGVtcCA9IGNoZWNrVGVtcEZvcm1hdChNYXRoLmZsb29yKGRheUZvcmVjYXN0Lm1haW4udGVtcCkpO1xyXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0VGVtcEZlZWxzTGlrZSA9IGNoZWNrVGVtcEZvcm1hdChNYXRoLmZsb29yKGRheUZvcmVjYXN0Lm1haW4uZmVlbHNfbGlrZSkpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkYXlEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImRheVwiPiR7ZGF5TmFtZXNbZGF5LmdldERheSgpXX08L3A+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlci5pY29ufUAyeC5wbmdcIiBhbHQ9XCIke3dlYXRoZXIuZGVzY3JpcHRpb259XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9yZWNhc3QtdGVtcFwiPiR7Zm9yZWNhc3RUZW1wfTwvcD5cclxuICAgICAgICAgICAgPHA+JHtmb3JlY2FzdFRlbXBGZWVsc0xpa2V9PC9wPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgZml2ZURheXNGb3JlY2FzdC5hcHBlbmRDaGlsZChkYXlEaXYpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlXZWVrRm9yZWNhc3Q7IiwiZnVuY3Rpb24gZ2l0SHViRm9vdGVyKCkge1xyXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvcHlyaWdodCcpO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKp77iPICR7ZGF0ZS5nZXRGdWxsWWVhcigpfSBKSG9sZHN3b3J0aDIzYDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2l0SHViRm9vdGVyOyIsImltcG9ydCB7IGlucHV0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWRpdicpO1xyXG5jb25zdCBlcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci1tZXNzYWdlJyk7XHJcblxyXG5mdW5jdGlvbiBjaGVja0lucHV0KCkge1xyXG4gICAgaWYgKGlucHV0LnZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnWW91IG5lZWQgdG8gZW50ZXIgYSBsb2NhdGlvbi4nO1xyXG4gICAgfSBlbHNlIGlmICghaXNOYU4oaW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnU2VhcmNoIHZhbHVlIG5lZWRzIHRvIGJlIGEgbG9jYXRpb24gLSBub3QgYSBudW1iZXIuJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVycm9yKTtcclxuICAgIHJldHVybjtcclxufVxyXG5cclxuZXhwb3J0IHsgY2hlY2tJbnB1dCwgZXJyb3IgfTsiLCJpbXBvcnQgeyBjaGVja1RpbWVGb3JtYXQsIGNoZWNrVGVtcEZvcm1hdCB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SG91ckZvcmVjYXN0KGhvdXJseUZvcmVjYXN0SlNPTiwgZGF5Rm9yZWNhc3REaXYpIHtcclxuICAgIGRheUZvcmVjYXN0RGl2LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgaG91cmx5Rm9yZWNhc3RKU09OLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhvdXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0aW1lID0gY2hlY2tUaW1lRm9ybWF0KG9iai50aW1lLnNwbGl0KFwiIFwiKVsxXSk7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IG9iai5jb25kaXRpb247XHJcbiAgICAgICAgY29uc3QgZm9yZWNhc3RUZW1wID0gY2hlY2tUZW1wRm9ybWF0KE1hdGguZmxvb3Iob2JqLnRlbXBfYykpO1xyXG5cclxuICAgICAgICBob3VyRGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJob3VyXCI+JHt0aW1lfTwvcD5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3dlYXRoZXIuaWNvbn1cIiBhbHQ9XCIke3dlYXRoZXIudGV4dH1cIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJob3VyLWZvcmVjYXN0LXRlbXBcIj4ke2ZvcmVjYXN0VGVtcH08L3A+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBkYXlGb3JlY2FzdERpdi5hcHBlbmRDaGlsZChob3VyRGl2KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5SG91ckZvcmVjYXN0OyIsImltcG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyRGF0YSwgY3VycmVudFRlbXAsIGN1cnJlbnRUaW1lLCBmZWVsc1RlbXAsIHdpbmRTcGVlZCwgY2Vsc2l1cywgZmVlbHNMaWtlQ2Vsc2l1cywgc3BlZWRLUEggfSBmcm9tIFwiLi9jdXJyZW50X3dlYXRoZXJcIjtcclxuaW1wb3J0IHsgZ2V0V2VhdGhlckZvcmVjYXN0IH0gZnJvbSBcIi4vd2VhdGhlcl9mb3JlY2FzdFwiO1xyXG5pbXBvcnQgeyBjaGVja0lucHV0LCBlcnJvciB9IGZyb20gXCIuL2Zvcm1cIjtcclxuaW1wb3J0IGdpdEh1YkZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCBvcGVuV2VhdGhlckFQSSA9ICdiMjdjNDY4NDJiOThkYjk2OWRmZmUzYjEyMjZmMTI2Zic7XHJcblxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcclxuXHJcbmNvbnN0IHRpbWVGb3JtYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZS1mb3JtYXQnKTtcclxuY29uc3QgdGVtcEZvcm1hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWZvcm1hdCcpO1xyXG5cclxubGV0IHR3ZWx2ZUhvdXJzID0gZmFsc2U7XHJcbmxldCBpbXBlcmlhbCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tUaW1lRm9ybWF0KHRpbWVTdHJpbmcpIHtcclxuICAgIGlmICh0d2VsdmVIb3Vycykge1xyXG4gICAgICAgIGNvbnN0IFtob3VyU3RyaW5nLCBtaW51dGVTdHJpbmddID0gdGltZVN0cmluZy5zcGxpdCgnOicpO1xyXG4gICAgICAgIGNvbnN0IGhvdXIgPSAraG91clN0cmluZyAlIDI0O1xyXG4gICAgICAgIHJldHVybiAoaG91ciAlIDEyIHx8IDEyKSArICc6JyArIG1pbnV0ZVN0cmluZyArIChob3VyIDwgMTIgPyAnIEFNJyA6ICcgUE0nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgW3RpbWUsIG1lcmlkaWVtXSA9IHRpbWVTdHJpbmcuc3BsaXQoJyAnKTtcclxuICAgICAgICBjb25zdCBbaG91ciwgbWludXRlXSA9IHRpbWUuc3BsaXQoJzonKTtcclxuICAgICAgICBsZXQgY2hhbmdlSG91cnMgPSBwYXJzZUludChob3VyKVxyXG4gICAgICAgIGlmIChtZXJpZGllbSA9PT0gJ1BNJykge2NoYW5nZUhvdXJzICs9IDEyfVxyXG4gICAgICAgIHJldHVybiBgJHsoJzAnICsgY2hhbmdlSG91cnMpLnNsaWNlKC0yKX06JHttaW51dGV9YDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tUZW1wRm9ybWF0KHRlbXApIHtcclxuICAgIHJldHVybiBpbXBlcmlhbCBcclxuICAgICAgPyBNYXRoLmZsb29yKCh0ZW1wICogOS81KSArIDMyKSArICcgwrBGJyBcclxuICAgICAgOiB0ZW1wICsgJyDCsEMnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1dpbmRVbml0KHNwZWVkKSB7XHJcbiAgICByZXR1cm4gaW1wZXJpYWwgXHJcbiAgICAgID8gTWF0aC5yb3VuZChzcGVlZCAqIDYuMjEzNzEpIC8gMTAgKyAnIG1waCcgXHJcbiAgICAgIDogc3BlZWQgKyAnIGtwaCc7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKGxvY2F0aW9uKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmFwcGlkPSR7b3BlbldlYXRoZXJBUEl9YCwgXHJcbiAgICAgICAge21vZGU6ICdjb3JzJ31cclxuICAgICk7XHJcbiAgICBjb25zdCBjb29yZGluYXRlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGNvb3JkaW5hdGVEYXRhWzBdO1xyXG5cclxuICAgIGdldEN1cnJlbnRXZWF0aGVyRGF0YShsYXQsIGxvbik7XHJcbiAgICBnZXRXZWF0aGVyRm9yZWNhc3QobGF0LCBsb24pO1xyXG59XHJcblxyXG5nZXRDb29yZGluYXRlcygnTG9uZG9uJyk7XHJcblxyXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY2hlY2tJbnB1dCgpKSB7XHJcbiAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBnZXRDb29yZGluYXRlcyhpbnB1dC52YWx1ZSlcclxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7ZXJyb3IudGV4dENvbnRlbnQgPSAnTG9jYXRpb24gbm90IGZvdW5kLiBQbGVhc2UgdHJ5IGFnYWluLid9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIGlmIChjaGVja0lucHV0KCkpIHtcclxuICAgICAgICAgICAgZXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgZ2V0Q29vcmRpbmF0ZXMoaW5wdXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge2Vycm9yLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uIG5vdCBmb3VuZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbnRpbWVGb3JtYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0d2VsdmVIb3VycyA9ICF0d2VsdmVIb3VycztcclxuICAgIGN1cnJlbnRUaW1lLnRleHRDb250ZW50ID0gY2hlY2tUaW1lRm9ybWF0KGN1cnJlbnRUaW1lLnRleHRDb250ZW50KTtcclxufSk7XHJcblxyXG50ZW1wRm9ybWF0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaW1wZXJpYWwgPSAhaW1wZXJpYWw7XHJcbiAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGNoZWNrVGVtcEZvcm1hdChjZWxzaXVzKTtcclxuICAgIGZlZWxzVGVtcC50ZXh0Q29udGVudCA9IGNoZWNrVGVtcEZvcm1hdChmZWVsc0xpa2VDZWxzaXVzKTtcclxuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGNoZWNrV2luZFVuaXQoc3BlZWRLUEgpO1xyXG4gICAgdGVtcEZvcm1hdC50ZXh0Q29udGVudCA9IGltcGVyaWFsID8gJ0Rpc3BsYXkgwrBDJyA6ICdEaXNwbGF5IMKwRic7XHJcbn0pO1xyXG5cclxuZ2l0SHViRm9vdGVyKCk7XHJcblxyXG5leHBvcnQgeyBcclxuICAgIG9wZW5XZWF0aGVyQVBJLFxyXG4gICAgaW5wdXQsXHJcbiAgICB0aW1lRm9ybWF0QnRuLFxyXG4gICAgdGVtcEZvcm1hdCwgXHJcbiAgICBjaGVja1RpbWVGb3JtYXQsXHJcbiAgICBjaGVja1RlbXBGb3JtYXQsXHJcbiAgICBjaGVja1dpbmRVbml0LFxyXG59OyIsImltcG9ydCB7IG9wZW5XZWF0aGVyQVBJLCB0aW1lRm9ybWF0QnRuLCB0ZW1wRm9ybWF0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IGRpc3BsYXlXZWVrRm9yZWNhc3QgZnJvbSBcIi4vZGFpbHlfZm9yZWNhc3RcIjtcclxuaW1wb3J0IGRpc3BsYXlIb3VyRm9yZWNhc3QgZnJvbSBcIi4vaG91cmx5X2ZvcmVjYXN0XCI7XHJcblxyXG5jb25zdCB3ZWF0aGVyQVBJID0gJ2RjYjg4NGI3YzdmNDQ4N2NiY2ExODUxMDAyNDI5MDMnO1xyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVCdXR0b24oYnV0dG9uKSB7XHJcbiAgICBjb25zdCBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcbiAgICBhY3RpdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyRm9yZWNhc3QoaG91cmx5Rm9yZWNhc3RKU09OLCB3ZWVrRm9yZWNhc3RKU09OKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RFQgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcclxuICAgIGNvbnN0IGRheUZvcmVjYXN0SlNPTiA9IGhvdXJseUZvcmVjYXN0SlNPTlswXS5ob3VyXHJcbiAgICAgIC5jb25jYXQoaG91cmx5Rm9yZWNhc3RKU09OWzFdLmhvdXIpXHJcbiAgICAgIC5maWx0ZXIob2JqID0+IHtpZiAoY3VycmVudERUIDwgb2JqLnRpbWVfZXBvY2gpIHJldHVybiBvYmp9KVxyXG4gICAgICAuc2xpY2UoMCwgMjQpO1xyXG5cclxuICAgIGNvbnN0IGNoYW5jZU9mUmFpbiA9IGRheUZvcmVjYXN0SlNPTlswXS5jaGFuY2Vfb2ZfcmFpbjtcclxuICAgIGNvbnN0IHByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlY2lwaXRhdGlvbicpO1xyXG4gICAgcHJlY2lwaXRhdGlvbi50ZXh0Q29udGVudCA9IGAke2NoYW5jZU9mUmFpbn0lYDtcclxuXHJcbiAgICBjb25zdCB3ZWVrRm9yZWNhc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2Vlay1mb3JlY2FzdC1idG4nKTtcclxuICAgIGNvbnN0IHdlZWtGb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrLWZvcmVjYXN0Jyk7XHJcblxyXG4gICAgY29uc3QgZGF5Rm9yZWNhc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWZvcmVjYXN0LWJ0bicpO1xyXG4gICAgY29uc3QgZGF5Rm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LWZvcmVjYXN0Jyk7XHJcblxyXG4gICAgd2Vla0ZvcmVjYXN0RGl2LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgd2Vla0ZvcmVjYXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGFjdGl2YXRlQnV0dG9uKHdlZWtGb3JlY2FzdEJ0bik7XHJcbiAgICAgICAgZGF5Rm9yZWNhc3REaXYudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICBkaXNwbGF5V2Vla0ZvcmVjYXN0KHdlZWtGb3JlY2FzdEpTT04sIHdlZWtGb3JlY2FzdERpdik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkYXlGb3JlY2FzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBhY3RpdmF0ZUJ1dHRvbihkYXlGb3JlY2FzdEJ0bik7XHJcbiAgICAgICAgd2Vla0ZvcmVjYXN0RGl2LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgZGlzcGxheUhvdXJGb3JlY2FzdChkYXlGb3JlY2FzdEpTT04sIGRheUZvcmVjYXN0RGl2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRpbWVGb3JtYXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRheUZvcmVjYXN0RGl2LnRleHRDb250ZW50KSBkaXNwbGF5SG91ckZvcmVjYXN0KGRheUZvcmVjYXN0SlNPTiwgZGF5Rm9yZWNhc3REaXYpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0ZW1wRm9ybWF0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRheUZvcmVjYXN0RGl2LnRleHRDb250ZW50ID8gZGlzcGxheUhvdXJGb3JlY2FzdChkYXlGb3JlY2FzdEpTT04sIGRheUZvcmVjYXN0RGl2KSA6IGRpc3BsYXlXZWVrRm9yZWNhc3Qod2Vla0ZvcmVjYXN0SlNPTiwgd2Vla0ZvcmVjYXN0RGl2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHdlZWtPckRheUZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgd2Vla09yRGF5Rm9yZWNhc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCd3ZWVrLWZvcmVjYXN0LWJ0bicpIFxyXG4gICAgICA/IGRpc3BsYXlXZWVrRm9yZWNhc3Qod2Vla0ZvcmVjYXN0SlNPTiwgd2Vla0ZvcmVjYXN0RGl2KSBcclxuICAgICAgOiBkaXNwbGF5SG91ckZvcmVjYXN0KGRheUZvcmVjYXN0SlNPTiwgZGF5Rm9yZWNhc3REaXYpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRm9yZWNhc3QobGF0LCBsb24pIHtcclxuICAgIGNvbnN0IHdlYXRoZXJBcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke3dlYXRoZXJBUEl9JnE9JHtsYXR9LCR7bG9ufSZkYXlzPTJgLFxyXG4gICAgICAgIHsgbW9kZTogJ2NvcnMnfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRheUZvcmVjYXN0RGF0YSA9IGF3YWl0IHdlYXRoZXJBcGlSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3Qgb3BlbldlYXRoZXJBcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7b3BlbldlYXRoZXJBUEl9JnVuaXRzPW1ldHJpY2AsXHJcbiAgICAgICAgeyBtb2RlOiAnY29ycycgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHdlZWtGb3JlY2FzdEpTT04gPSBhd2FpdCBvcGVuV2VhdGhlckFwaVJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBkaXNwbGF5V2VhdGhlckZvcmVjYXN0KGRheUZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheSwgd2Vla0ZvcmVjYXN0SlNPTik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldFdlYXRoZXJGb3JlY2FzdCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy1zY3JpcHQvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=