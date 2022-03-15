self["webpackHotUpdatedemeter"]("/index",{

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/find */ "./node_modules/core-js-pure/stable/instance/find.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/includes */ "./node_modules/core-js-pure/stable/instance/includes.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/instance/index-of */ "./node_modules/core-js-pure/features/instance/index-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/assign.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/assign */ "./node_modules/core-js-pure/features/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/get-own-property-symbols */ "./node_modules/core-js-pure/features/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/keys.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/keys */ "./node_modules/core-js-pure/features/object/keys.js");

/***/ }),

/***/ "./src/components/common/Icon/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/common/Icon/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": function() { return /* binding */ Icon; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_Icon_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/Icon/lib */ "./src/components/common/Icon/lib.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/components/common/Icon/index.scss");


var _excluded = ["className", "component", "lib", "icon", "ratio"];





function Icon(props) {
  var className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'span' : _props$component,
      _props$lib = props.lib,
      lib = _props$lib === void 0 ? _components_common_Icon_lib__WEBPACK_IMPORTED_MODULE_4__["default"] : _props$lib,
      icon = props.icon,
      _props$ratio = props.ratio,
      ratio = _props$ratio === void 0 ? 1 : _props$ratio,
      restProps = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  if (!icon) {
    return null;
  }

  var Ico = lib[(0,_utils__WEBPACK_IMPORTED_MODULE_5__.camelify)(icon)]; // Render

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('icon', className)
  }, restProps), Ico && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Ico, {
    ratio: ratio
  }));
}

/***/ }),

/***/ "./src/components/common/Icon/lib.tsx":
/*!********************************************!*\
  !*** ./src/components/common/Icon/lib.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProps": function() { return /* binding */ defaultProps; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var _excluded = ["ratio"],
    _excluded2 = ["ratio"],
    _excluded3 = ["ratio"],
    _excluded4 = ["ratio"],
    _excluded5 = ["ratio"],
    _excluded6 = ["ratio"],
    _excluded7 = ["ratio"],
    _excluded8 = ["ratio"],
    _excluded9 = ["ratio"],
    _excluded10 = ["ratio"],
    _excluded11 = ["ratio"],
    _excluded12 = ["ratio"],
    _excluded13 = ["ratio"],
    _excluded14 = ["ratio"],
    _excluded15 = ["ratio"],
    _excluded16 = ["ratio"],
    _excluded17 = ["ratio"],
    _excluded18 = ["ratio"],
    _excluded19 = ["ratio"],
    _excluded20 = ["ratio"],
    _excluded21 = ["ratio"],
    _excluded22 = ["ratio"],
    _excluded23 = ["ratio"],
    _excluded24 = ["ratio"],
    _excluded25 = ["ratio"],
    _excluded26 = ["ratio"],
    _excluded27 = ["ratio"],
    _excluded28 = ["ratio"];


function getSize(height, width) {
  var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return {
    height: height * ratio,
    width: width * ratio
  };
}

var defaultProps = {
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
};
/* eslint-disable */

var library = {
  arrowDown: function arrowDown(_ref) {
    var ratio = _ref.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 20 20"
    }, getSize(20, 20, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M10 12.5L5 7.5H15L10 12.5Z"
    }));
  },
  externalLink: function externalLink(_ref2) {
    var ratio = _ref2.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded2);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 512 512"
    }, getSize(20, 20, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M511.5,0.9v255.5h-34.4V63.2L159.4,381l-24.2-24.2L457.6,34.4H256V0h255.5V0.9z M374.9,477.6H34.8V137.5 h223.9v-34.4H0.5V512h408.9V249h-34.4V477.6z",
      fill: "currentColor",
      strokeWidth: 1.6
    }));
  },
  close: function close(_ref3) {
    var ratio = _ref3.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _excluded3);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 40 40"
    }, getSize(40, 40, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M14 14L20 20M20 20L14 26M20 20L26 14M20 20L26 26",
      stroke: "currentColor",
      strokeWidth: 2
    }));
  },
  config: function config(_ref4) {
    var ratio = _ref4.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _excluded4);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 24 24"
    }, getSize(24, 24, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M17.0458 20.2491C17.8104 19.764 18.503 19.1724 19.1031 18.4941L21.2666 19.7627L23.2365 16.298L21.0774 15.0321C21.3519 14.181 21.5134 13.2783 21.5436 12.3426L24 11.9028L23.3156 7.9629L20.8597 8.40269C20.5203 7.54852 20.0649 6.75427 19.5127 6.04049L21.1181 4.09798L18.0999 1.52657L16.4959 3.46742C15.7124 3.04112 14.864 2.72245 13.9698 2.53122V0L10.03 0V2.53122C9.13573 2.72245 8.2873 3.04112 7.50375 3.46742L5.89979 1.52657L2.88162 4.09807L4.48685 6.04058C3.93473 6.75436 3.47938 7.54871 3.13997 8.40279L0.684057 7.96299L0 11.9029L2.45601 12.3427C2.48628 13.2785 2.64785 14.181 2.92238 15.0324L0.763035 16.2982L2.73306 19.7628L4.89665 18.4946C5.49658 19.1725 6.18913 19.7643 6.95388 20.2494L6.09985 22.6317L9.80225 23.9998L10.6551 21.6207C11.0946 21.6839 11.5435 21.7174 11.9999 21.7174C12.4563 21.7174 12.9053 21.684 13.3448 21.6207L14.1976 24L17.8998 22.6315L17.0458 20.2491ZM11.9997 18C8.6861 17.9999 6 15.3136 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3138 15.3135 18.0002 11.9997 18Z"
    }));
  },
  info: function info(_ref5) {
    var ratio = _ref5.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, _excluded5);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 20 20"
    }, getSize(20, 20, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM10.75 9V14H9.25V9H10.75ZM10.75 7V5.5H9.25V7H10.75Z"
    }));
  },
  link: function link(_ref6) {
    var ratio = _ref6.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref6, _excluded6);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 20 20"
    }, getSize(20, 20, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.1,
      d: "M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.1,
      d: "M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.1,
      d: "M7.925,11.875 L11.925,7.975"
    }));
  },
  loader: function loader(_ref7) {
    var ratio = _ref7.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref7, _excluded7);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 22 22"
    }, getSize(22, 22, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M11 22C17.0959 22 22 17.0959 22 11C22 7.12134 20.0146 3.72514 17 1.76773L16 3.45543C18.4345 5.04268 20 7.78975 20 11C20 16.0799 16.0799 20 11 20C5.92011 20 2 16.0799 2 11C2 5.92011 5.92011 2 11 2V0C4.90413 0 0 4.90413 0 11C0 17.0959 4.90413 22 11 22Z",
      fill: "currentColor"
    }));
  },
  logout: function logout(_ref8) {
    var ratio = _ref8.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, _excluded8);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 32 32"
    }, getSize(32, 32, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"
    }));
  },
  plus: function plus(_ref9) {
    var ratio = _ref9.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, _excluded9);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 36 36"
    }, getSize(36, 36, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M18 27V9",
      stroke: "currentColor",
      strokeWidth: 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M9 18L27 18",
      stroke: "currentColor",
      strokeWidth: 2
    }));
  },
  pull: function pull(_ref10) {
    var ratio = _ref10.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref10, _excluded10);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 22 21"
    }, getSize(21, 22, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M11 0V13.3333M11 13.3333L16 8.33333M11 13.3333L6 8.33333",
      stroke: "currentColor",
      strokeWidth: 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M1.83334 12.5V19.1667H20.1667V12.5",
      stroke: "currentColor",
      strokeWidth: 2
    }));
  },
  push: function push(_ref11) {
    var ratio = _ref11.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref11, _excluded11);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 22 21"
    }, getSize(21, 22, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M11 14.334L11 2.00065M11 2.00065L6 7.00065M11 2.00065L16 7.00065",
      stroke: "currentColor",
      strokeWidth: 2
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M1.83334 12.5V19.1667H20.1667V12.5",
      stroke: "currentColor",
      strokeWidth: 2
    }));
  },
  remove: function remove(_ref12) {
    var ratio = _ref12.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref12, _excluded12);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 14 14"
    }, getSize(14, 14, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M1 1L7 7M7 7L1 13M7 7L13 1M7 7L13 13",
      stroke: "currentColor",
      strokeWidth: 2
    }));
  },
  reverse: function reverse(_ref13) {
    var ratio = _ref13.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref13, _excluded13);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 36 36"
    }, getSize(36, 36, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M16 24L12 28M12 28L8 24M12 28C12 28 12 20.6863 12 16C12 13.6667 16 12 16 12",
      strokeWidth: 1.4
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M20 12L24 8M24 8L28 12M24 8C24 8 24 15.3137 24 20C24 22.3333 20 24 20 24",
      strokeWidth: 1.4
    }));
  },
  reverseHorizontal: function reverseHorizontal(_ref14) {
    var ratio = _ref14.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref14, _excluded14);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 24 24"
    }, getSize(24, 24, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M15.6001 13.2002L18.0001 15.6002M18.0001 15.6002L15.6001 18.0002M18.0001 15.6002C18.0001 15.6002 13.6119 15.6002 10.8001 15.6002C9.40015 15.6002 8.40015 13.2002 8.40015 13.2002",
      strokeWidth: 1.4
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M8.39985 10.7998L5.99985 8.3998M5.99985 8.3998L8.39985 5.9998M5.99985 8.3998C5.99985 8.3998 10.3881 8.3998 13.1999 8.3998C14.5999 8.3998 15.5999 10.7998 15.5999 10.7998",
      strokeWidth: 1.4
    }));
  },
  star: function star(_ref15) {
    var ratio = _ref15.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref15, _excluded15);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 24 24"
    }, getSize(24, 24, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M14.6258 8.82306L14.7857 9.24051L15.2317 9.27097L22.2779 9.7522L16.8465 14.5363L16.5284 14.8165L16.6294 15.2283L18.3978 22.4392L12.3794 18.4874L11.9952 18.2351L11.611 18.4874L5.59272 22.4392L7.36114 15.2283L7.46204 14.8168L7.14433 14.5366L1.72029 9.7522L8.75876 9.27096L9.20473 9.24047L9.36467 8.82306L11.9952 1.95785L14.6258 8.82306Z",
      stroke: "currentColor",
      strokeWidth: 1.4
    }));
  },
  user: function user(_ref16) {
    var ratio = _ref16.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref16, _excluded16);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 20 20"
    }, getSize(20, 20, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 6C6 3.7944 7.7944 2 10 2C12.2056 2 14 3.7944 14 6C14 8.2056 12.2056 10 10 10C7.7944 10 6 8.2056 6 6ZM10.9333 11.375C12.5514 11.375 14.0757 12.0208 15.2256 13.1936C16.3698 14.3606 17 15.901 17 17.5312C17 17.7901 16.7911 18 16.5333 18H3.46667C3.20894 18 3 17.7901 3 17.5312C3 15.901 3.63016 14.3606 4.77439 13.1936C5.92426 12.0208 7.44864 11.375 9.06667 11.375H10.9333Z",
      fill: "currentColor"
    }));
  },
  warning: function warning(_ref17) {
    var ratio = _ref17.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref17, _excluded17);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 24 24"
    }, getSize(24, 24, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.9354 3.55908C12.5117 2.85289 11.4883 2.85289 11.0646 3.55908L0.991306 20.3478C0.555036 21.0749 1.0788 22 1.92675 22H22.0732C22.9212 22 23.445 21.0749 23.0087 20.3478L12.9354 3.55908Z",
      fill: "#EB4361",
      fillOpacity: "0.32"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M10.63 20H13.38L13.38 17H10.63L10.63 20Z",
      fill: "#EB4361"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M10.63 15H13.38L13.38 7H10.63L10.63 15Z",
      fill: "#EB4361"
    }));
  },
  check: function check(_ref18) {
    var ratio = _ref18.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref18, _excluded18);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 10 8"
    }, getSize(10, 8, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M1.5 4L4 6.5L8.5 1",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }));
  },
  directionRight: function directionRight(_ref19) {
    var ratio = _ref19.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref19, _excluded19);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 28 14"
    }, getSize(28, 14, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M20 1L26 7M26 7L20 13M26 7H0",
      stroke: "currentColor",
      strokeOpacity: 0.48,
      strokeWidth: 1.6
    }));
  },
  success: function success(_ref20) {
    var ratio = _ref20.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref20, _excluded20);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 64 64"
    }, getSize(64, 64, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M5.3335 33.7017L23.5972 52.0002L58.6668 16.9652L53.632 12L23.5972 42L10.2986 28.7015L5.3335 33.7017Z",
      fill: "currentColor"
    }));
  },
  infoFill: function infoFill(_ref21) {
    var ratio = _ref21.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref21, _excluded21);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 16 16"
    }, getSize(16, 16, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.875 5.25V3H9.125V5.25H6.875ZM6.875 13.625V6.875H9.125V13.625H6.875Z",
      fill: "white",
      fillOpacity: "0.48"
    }));
  },
  copy: function copy(_ref22) {
    var ratio = _ref22.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref22, _excluded22);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 20 20"
    }, getSize(20, 20, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M16 13V4H8M4 17H12.6V7H4V17Z",
      stroke: "currentColor",
      strokeWidth: "1.4"
    }));
  },
  twitter: function twitter(_ref23) {
    var ratio = _ref23.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref23, _excluded23);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 20 20"
    }, getSize(20, 20, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M19 4.77577C18.3306 5.07692 17.6174 5.27654 16.8737 5.37346C17.6388 4.905 18.2226 4.16885 18.4971 3.28154C17.7839 3.71769 16.9964 4.02577 16.1571 4.19769C15.4799 3.45808 14.5146 3 13.4616 3C11.4186 3 9.77387 4.70077 9.77387 6.78577C9.77387 7.08577 9.79862 7.37423 9.85938 7.64885C6.7915 7.49538 4.07687 5.98731 2.25325 3.69C1.93487 4.25654 1.74813 4.905 1.74813 5.60308C1.74813 6.91385 2.40625 8.07577 3.38725 8.74846C2.79437 8.73692 2.21275 8.56038 1.72 8.28231C1.72 8.29385 1.72 8.30885 1.72 8.32385C1.72 10.1631 2.99912 11.6908 4.6765 12.0427C4.37612 12.1269 4.04875 12.1673 3.709 12.1673C3.47275 12.1673 3.23425 12.1535 3.01038 12.1027C3.4885 13.6015 4.84525 14.7035 6.4585 14.7392C5.203 15.7465 3.60888 16.3535 1.88313 16.3535C1.5805 16.3535 1.29025 16.3396 1 16.3015C2.63462 17.3827 4.57188 18 6.661 18C13.4515 18 17.164 12.2308 17.164 7.23C17.164 7.06269 17.1584 6.90115 17.1505 6.74077C17.8829 6.20769 18.4982 5.54192 19 4.77577Z",
      fill: "currentColor"
    }));
  },
  github: function github(_ref24) {
    var ratio = _ref24.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref24, _excluded24);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 20 20"
    }, getSize(20, 20, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M10 1C5.0275 1 1 5.13211 1 10.2284C1 14.3065 3.5785 17.7648 7.15375 18.9841C7.60375 19.0709 7.76875 18.7853 7.76875 18.5403C7.76875 18.3212 7.76125 17.7405 7.7575 16.9712C5.254 17.5277 4.726 15.7332 4.726 15.7332C4.3165 14.6681 3.72475 14.3832 3.72475 14.3832C2.9095 13.8111 3.78775 13.8229 3.78775 13.8229C4.6915 13.887 5.16625 14.7737 5.16625 14.7737C5.96875 16.1847 7.273 15.777 7.7875 15.5414C7.8685 14.9443 8.10025 14.5381 8.3575 14.3073C6.35875 14.0764 4.258 13.2829 4.258 9.74709C4.258 8.73988 4.60675 7.91659 5.18425 7.27095C5.083 7.03774 4.77925 6.0994 5.263 4.82846C5.263 4.82846 6.01675 4.58116 7.738 5.77462C8.458 5.56958 9.223 5.46785 9.988 5.46315C10.753 5.46785 11.518 5.56958 12.238 5.77462C13.948 4.58116 14.7017 4.82846 14.7017 4.82846C15.1855 6.0994 14.8818 7.03774 14.7917 7.27095C15.3655 7.91659 15.7142 8.73988 15.7142 9.74709C15.7142 13.2923 13.6105 14.0725 11.608 14.2995C11.923 14.5765 12.2155 15.1423 12.2155 16.0071C12.2155 17.242 12.2043 18.2344 12.2043 18.5341C12.2043 18.7759 12.3617 19.0647 12.823 18.9723C16.4237 17.7609 19 14.3002 19 10.2284C19 5.13211 14.9703 1 10 1Z",
      fill: "currentColor"
    }));
  },
  medium: function medium(_ref25) {
    var ratio = _ref25.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref25, _excluded25);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 20 20"
    }, getSize(20, 20, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.3953 9.69767C11.3953 12.8444 8.84441 15.3953 5.69767 15.3953C2.55094 15.3953 0 12.8444 0 9.69767C0 6.55094 2.55094 4 5.69767 4C8.84441 4 11.3953 6.55094 11.3953 9.69767ZM17.4419 9.69767C17.4419 12.716 16.1924 15.1628 14.6512 15.1628C13.1099 15.1628 11.8605 12.716 11.8605 9.69767C11.8605 6.67937 13.1099 4.23256 14.6512 4.23256C16.1924 4.23256 17.4419 6.67937 17.4419 9.69767ZM18.9535 14.4651C19.5315 14.4651 20 12.2786 20 9.5814C20 6.88419 19.5315 4.69767 18.9535 4.69767C18.3755 4.69767 17.907 6.88419 17.907 9.5814C17.907 12.2786 18.3755 14.4651 18.9535 14.4651Z",
      fill: "currentColor"
    }));
  },
  telegram: function telegram(_ref26) {
    var ratio = _ref26.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref26, _excluded26);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 20 20"
    }, getSize(20, 20, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M3.09992 9.02697C7.39487 7.05126 10.2589 5.74875 11.6919 5.11944C15.7834 3.32264 16.6335 3.01052 17.1877 3.0001C17.3095 2.99794 17.582 3.02983 17.7586 3.18106C17.9076 3.30876 17.9486 3.48125 17.9683 3.60232C17.9879 3.72339 18.0123 3.99919 17.9929 4.21469C17.7712 6.67437 16.8118 12.6434 16.3237 15.3983C16.1172 16.564 15.7105 16.9548 15.3168 16.9931C14.4613 17.0762 13.8116 16.3961 12.9829 15.8226C11.6862 14.9251 10.9537 14.3664 9.69503 13.4907C8.24042 12.4786 9.18338 11.9224 10.0124 11.0133C10.2293 10.7754 13.999 7.15516 14.0719 6.82675C14.0811 6.78568 14.0895 6.63258 14.0034 6.55173C13.9172 6.47089 13.7901 6.49853 13.6983 6.52052C13.5683 6.55169 11.4968 7.9973 7.48389 10.8573C6.89591 11.2836 6.36333 11.4913 5.88616 11.4805C5.36012 11.4685 4.34822 11.1664 3.59598 10.9083C2.67333 10.5916 1.94002 10.4242 2.00388 9.88638C2.03714 9.60627 2.40248 9.3198 3.09992 9.02697Z",
      fill: "currentColor"
    }));
  },
  heartSelected: function heartSelected(_ref27) {
    var ratio = _ref27.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref27, _excluded27);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 16 16"
    }, getSize(16, 16, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M7.99994 16L7.65544 15.75C6.01793 14.5596 3.94597 13.2142 2.41142 11.2367C0.794196 9.15333 0.0183108 7.01375 0.0382151 4.695C0.0623299 2.10583 1.9697 0 4.29008 0C6.13161 0 7.35611 1.16667 7.99994 2.00875C8.64377 1.16667 9.86826 0 11.7098 0C14.0302 0 15.9375 2.10583 15.9617 4.69375C15.9831 7.01375 15.2072 9.15208 13.5885 11.2354C12.0539 13.2142 9.98195 14.5596 8.34443 15.75L7.99994 16Z",
      fill: "#EC6D5F"
    }));
  },
  heartUnselected: function heartUnselected(_ref28) {
    var ratio = _ref28.ratio,
        props = (0,_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref28, _excluded28);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("svg", (0,_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultProps, props, {
      viewBox: "0 0 16 16"
    }, getSize(16, 16, ratio)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("path", {
      d: "M7.99994 16L7.65544 15.75C6.01793 14.5596 3.94597 13.2142 2.41142 11.2367C0.794196 9.15333 0.0183108 7.01375 0.0382151 4.695C0.0623299 2.10583 1.9697 0 4.29008 0C6.13161 0 7.35611 1.16667 7.99994 2.00875C8.64377 1.16667 9.86826 0 11.7098 0C14.0302 0 15.9375 2.10583 15.9617 4.69375C15.9831 7.01375 15.2072 9.15208 13.5885 11.2354C12.0539 13.2142 9.98195 14.5596 8.34443 15.75L7.99994 16Z",
      fill: "#A9BBC9"
    }));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (library);

/***/ }),

/***/ "./src/components/components/modals/BidNFTModal.jsx":
/*!**********************************************************!*\
  !*** ./src/components/components/modals/BidNFTModal.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BidNFTModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");
/* harmony import */ var _components_common_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/common/Icon */ "./src/components/common/Icon/index.tsx");
/* harmony import */ var _pages_Events_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../pages/Events/event */ "./src/pages/Events/event.jsx");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_15__);



















function BidNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      ToAddress = _ref.ToAddress,
      tokenId = _ref.tokenId,
      recid = _ref.recid,
      RealEventId = _ref.RealEventId,
      Highestbid = _ref.Highestbid,
      walletType = _ref.walletType,
      contract = _ref.contract,
      contractCelo = _ref.contractCelo,
      senderAddress = _ref.senderAddress,
      eventId = _ref.eventId;

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  var base = new Airtable({
    apiKey: 'keyR1Rrcl9O2s9bTs'
  }).base('appgbRCpbkzmdcucO');

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_11__["default"])({
    type: 'text',
    placeholder: 'Amount'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      Amount = _UseFormInput2[0],
      AmountInput = _UseFormInput2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      EventGoal = _useState4[0],
      setEventGoal = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      categories = _useState6[0],
      setCategories = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      allSelected = _useState8[0],
      setAllSelected = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      otherSelected = _useState10[0],
      setOtherSelected = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      selectedCategory = _useState12[0],
      setSelectedCategory = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(-1),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      otherCategory = _useState14[0],
      setOtherCategory = _useState14[1];

  function activateWarningModal() {
    var alertELM = document.getElementById("alert");
    alertELM.style = 'contents';
    setAlert("Amount cannot be under ".concat(Highestbid, " NEAR"));
  }

  function fetchCategories() {
    return _fetchCategories.apply(this, arguments);
  }

  function _fetchCategories() {
    _fetchCategories = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var nearPrice, nearCurrencyUrl, options, _context;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(categories.length == 0)) {
                _context2.next = 17;
                break;
              }

              nearPrice = 0;
              _context2.prev = 2;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context2.next = 7;
              return fetch(nearCurrencyUrl, options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 7:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);
              nearPrice = 0;

            case 13:
              if (!(EventGoal == 0)) {
                _context2.next = 16;
                break;
              }

              _context2.next = 16;
              return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(_context = base('events')).call(_context, eventId, function (err, record) {
                setEventGoal(Number(record.get("Goal")));
              });

            case 16:
              if (RealEventId != 0) {
                try {
                  base('eventcategories').select({
                    filterByFormula: "({eventid} = ".concat(RealEventId, ")"),
                    view: "Grid view"
                  }).eachPage(function page(records, fetchNextPage) {
                    var sumofmain = 0;
                    records.forEach(function (record) {
                      categories.push(record.fields);
                      sumofmain += Number(Number(record.get("price")) * Number(record.get("amount")));
                    });
                    setOtherCategory(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(EventGoal * nearPrice) - sumofmain); // setCategories(records[0].fields);
                  }, function done(err) {
                    console.error(err);
                  });
                } catch (error) {}
              }

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));
    return _fetchCategories.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    fetchCategories();
  }, [categories]);

  function bidNFT() {
    return _bidNFT.apply(this, arguments);
  }

  function _bidNFT() {
    _bidNFT = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(Number(Amount) < Number(Highestbid))) {
                _context3.next = 3;
                break;
              }

              activateWarningModal();
              return _context3.abrupt("return");

            case 3:
              if (!(walletType == "CELO")) {
                _context3.next = 8;
                break;
              }

              _context3.next = 6;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(bidNFTbyCELO, {
                pending: "Bidding...",
                error: "Please try again later",
                success: "Success!!!"
              });

            case 6:
              _context3.next = 11;
              break;

            case 8:
              if (!(walletType == "NEAR")) {
                _context3.next = 11;
                break;
              }

              _context3.next = 11;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(bidNFTbyNEAR, {
                pending: "Bidding...",
                error: "Please try again later",
                success: "Success!!!"
              });

            case 11:
              _context3.next = 13;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(CreatingOnAirTable, {
                pending: "Updating on Airtable...",
                error: "Please try again later",
                success: "Updated on Airtable"
              });

            case 13:
              window.location.reload();
              window.document.getElementsByClassName("btn-close")[0].click();

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2);
    }));
    return _bidNFT.apply(this, arguments);
  }

  function CreatingOnAirTable() {
    return _CreatingOnAirTable.apply(this, arguments);
  }

  function _CreatingOnAirTable() {
    _CreatingOnAirTable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var Airtable, base, currentDate;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              currentDate = new Date();
              _context4.next = 5;
              return base('tokenbid').create([{
                "fields": {
                  "Tokenid": tokenId,
                  "Date": currentDate,
                  "UserName": walletAccount.getAccountId().toString(),
                  "Bidprice": Amount
                }
              }]);

            case 5:
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success("Bid created on Airtable");
              _context4.next = 8;
              return UpdateAirtable();

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    }));
    return _CreatingOnAirTable.apply(this, arguments);
  }

  function UpdateAirtable() {
    return _UpdateAirtable.apply(this, arguments);
  }

  function _UpdateAirtable() {
    _UpdateAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var Airtable, base, i;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              _context7.next = 4;
              return base('nfts').update([{
                "id": recid,
                "fields": {
                  "price": Amount
                }
              }]);

            case 4:
              i = 0;

            case 5:
              if (!(i < selectedCategory.length)) {
                _context7.next = 11;
                break;
              }

              _context7.next = 8;
              return base('eventcategories').select({
                filterByFormula: "({id} = '".concat(selectedCategory[i], "')"),
                sort: [{
                  field: "price",
                  direction: "desc"
                }],
                view: "Grid view"
              }).eachPage( /*#__PURE__*/function () {
                var _page = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(records, fetchNextPage) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return records.forEach( /*#__PURE__*/function () {
                            var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(record) {
                              var eventcategoryID, perpeice, updatedprice, Updatedamount;
                              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      eventcategoryID = record.id;
                                      perpeice = _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(Number(record.get('price')) / Number(record.get('amount')));
                                      updatedprice = Number(record.get("price")) - perpeice;
                                      Updatedamount = Number(record.get('amount')) - 1;
                                      _context5.next = 6;
                                      return base('eventcategories').update([{
                                        "id": eventcategoryID,
                                        "fields": {
                                          "price": updatedprice.toString(),
                                          "amount": Updatedamount.toString()
                                        }
                                      }]);

                                    case 6:
                                      console.log(record);

                                    case 7:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee4);
                            }));

                            return function (_x3) {
                              return _ref2.apply(this, arguments);
                            };
                          }());

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee5);
                }));

                function page(_x, _x2) {
                  return _page.apply(this, arguments);
                }

                return page;
              }(), function done(err) {
                if (err) {
                  console.error(err);
                  return;
                }
              });

            case 8:
              i++;
              _context7.next = 5;
              break;

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee6);
    }));
    return _UpdateAirtable.apply(this, arguments);
  }

  function bidNFTbyNEAR() {
    return _bidNFTbyNEAR.apply(this, arguments);
  }

  function _bidNFTbyNEAR() {
    _bidNFTbyNEAR = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      var buttonProps, config, near, account, amountInYocto;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              buttonProps = document.getElementsByClassName("btn btn-primary")[0];

              if (!(window.walletAccount.isSignedIn() == false)) {
                _context8.next = 8;
                break;
              }

              buttonProps.innerText = "Connect to NEAR wallet";
              _context8.next = 5;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.warn("Not connected with NEAR wallet! Connecting...");

            case 5:
              _context8.next = 7;
              return window.walletAccount.requestSignIn(window.nearConfig.contractName, 'Demeter');

            case 7:
              return _context8.abrupt("return");

            case 8:
              // We call say Hi and then update who said Hi last.
              // window.contract.sayHi().then(updateWhoSaidHi);
              config = {
                networkId: "testnet",
                keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_15__.keyStores.BrowserLocalStorageKeyStore(),
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org"
              }; // sends NEAR tokens

              _context8.next = 11;
              return near_api_js__WEBPACK_IMPORTED_MODULE_15__.connect(config);

            case 11:
              near = _context8.sent;
              _context8.next = 14;
              return near.account(walletAccount.getAccountId());

            case 14:
              account = _context8.sent;
              amountInYocto = (Number(Amount) * 1000000000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context8.next = 18;
              return account.sendMoney(ToAddress, // receiver account
              amountInYocto // amount in yoctoNEAR
              ).catch(function (error) {
                console.error("error:", error);
                console.log(error);
                return;
              });

            case 18:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee7);
    }));
    return _bidNFTbyNEAR.apply(this, arguments);
  }

  function bidNFTbyCELO() {
    return _bidNFTbyCELO.apply(this, arguments);
  }

  function _bidNFTbyCELO() {
    _bidNFTbyCELO = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
      var buttonProps, createdObject, CELOinFull, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              buttonProps = document.getElementsByClassName("btn btn-primary")[0];

              if (!(window.ethereum.selectedAddress != null && window.ethereum.networkVersion == 44787 && window.localStorage.getItem("ConnectedMetaCelo") != "")) {
                _context9.next = 10;
                break;
              }

              createdObject = {
                "Tokenid": tokenId,
                "Bidprice": Amount
              };
              CELOinFull = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context9.next = 6;
              return contractCelo.createBid(tokenId, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(createdObject), {
                from: senderAddress,
                gasPrice: 1000000000000,
                value: CELOinFull
              });

            case 6:
              result = _context9.sent;

              try {
                console.log(result);
              } catch (e) {
                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error("Insufficient funds");
              }

              _context9.next = 16;
              break;

            case 10:
              buttonProps.innerText = "Connect to CELO wallet";
              _context9.next = 13;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.warn("Not connected with CELO wallet! Connecting...");

            case 13:
              window.location.href = "/login[/donation]";
              throw new Error("Not connected with CELO wallet!");

            case 16:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee8);
    }));
    return _bidNFTbyCELO.apply(this, arguments);
  }

  var selectCategory = function selectCategory(category_id) {
    console.log("category_id");
    console.log(category_id);
    var temp_arr = [];

    for (var i = 0; i < selectedCategory.length; i++) {
      temp_arr.push(selectedCategory[i]);
    }

    temp_arr.push(category_id);
    console.log(temp_arr);
    setSelectedCategory(temp_arr);
  };

  var unselectCategory = function unselectCategory(category_id) {
    var temp_arr = [];

    for (var i = 0; i < selectedCategory.length; i++) {
      if (selectedCategory[i] != category_id) temp_arr.push(selectedCategory[i]);
    }

    console.log(temp_arr);
    setSelectedCategory(temp_arr);
  };

  var selectAllCategory = function selectAllCategory() {
    if (allSelected) {
      setAllSelected(false);
      setSelectedCategory([]);
    } else {
      setAllSelected(true);
      var temp_arr = [];

      for (var i = 0; i < categories.length; i++) {
        temp_arr.push(categories[i].id);
      }

      temp_arr.push(-1);
      setSelectedCategory(temp_arr);
    }
  };

  var otherSelect = function otherSelect() {
    if (otherSelected) {
      setOtherSelected(false);
      var temp_arr = [];

      for (var i = 0; i < selectedCategory.length; i++) {
        if (selectedCategory[i] != -1) temp_arr.push(selectedCategory[i]);
      }

      setSelectedCategory(temp_arr);
    } else {
      setOtherSelected(true);
      var temp_arr = [];

      for (var i = 0; i < selectedCategory.length; i++) {
        temp_arr.push(selectedCategory[i]);
      }

      temp_arr.push(-1);
      setSelectedCategory(temp_arr);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    show: show,
    onHide: onHide,
    onShow: fetchCategories,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    id: "alert",
    style: {
      display: 'none'
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Label, null, "Bid Amount in ", walletType), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    className: "selectCategoryAll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Choose where you want to give support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      width: "100%",
      padding: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      background: "bisque",
      height: "40px",
      borderRadius: "5px",
      marginBottom: "10px"
    },
    onClick: function onClick() {
      selectAllCategory();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
    style: {
      alignSelf: "center",
      color: "black"
    }
  }, "Support in general "), allSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      position: "absolute",
      right: "10px",
      top: "-7px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
    icon: "heartSelected"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      position: "absolute",
      right: "10px",
      top: "-7px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
    icon: "heartUnselected"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    className: "selectCategory",
    style: {
      marginLeft: "-10px",
      marginRight: "-10px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(categories).call(categories, function (category) {
    return _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4___default()(selectedCategory).call(selectedCategory, category.id) !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        width: "33%",
        padding: "0 10px",
        marginBottom: "10px"
      },
      key: category.id,
      onClick: function onClick() {
        return unselectCategory(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        background: "white",
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
      style: {
        marginBottom: "10px",
        color: "#151F28",
        textAlign: "center"
      }
    }, category.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("img", {
      src: category.image,
      style: {
        aspectRatio: '1',
        borderRadius: "5px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        marginTop: "10px",
        lineHeight: "14px"
      }
    }, category.amount * category.price, " USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        lineHeight: "14px"
      }
    }, "(", category.amount, " pieces)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        marginTop: "10px",
        display: "flex",
        width: "32px",
        height: "32px",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "16px",
        background: "#EEF1F4"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
      icon: "heartSelected"
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        width: "33%",
        padding: "0 10px",
        marginBottom: "10px"
      },
      key: category.id,
      onClick: function onClick() {
        return selectCategory(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        background: "white",
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
      style: {
        marginBottom: "10px",
        color: "#151F28",
        textAlign: "center"
      }
    }, category.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("img", {
      src: category.image,
      style: {
        aspectRatio: '1',
        borderRadius: "5px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        marginTop: "10px",
        lineHeight: "14px"
      }
    }, category.amount * category.price, " USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        lineHeight: "14px"
      }
    }, "(", category.amount, " pieces)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        marginTop: "10px",
        display: "flex",
        width: "32px",
        height: "32px",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "16px",
        background: "#EEF1F4"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
      icon: "heartUnselected"
    })))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      width: "33%",
      padding: "0 10px",
      display: "flex",
      flexDirection: "column"
    },
    onClick: function onClick() {
      return otherSelect();
    }
  }, categories.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      background: "white",
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "5px",
      alignItems: "center",
      marginBottom: "15px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "#151F28",
      textAlign: "center"
    }
  }, "Other support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h5", {
    style: {
      color: "#151F28",
      textAlign: "center",
      marginTop: "10px",
      lineHeight: "14px"
    }
  }, otherCategory, " USD"), _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4___default()(selectedCategory).call(selectedCategory, -1) !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
    icon: "heartSelected"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
    icon: "heartUnselected"
  })))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT"))))));
}

/***/ }),

/***/ "./src/components/components/modals/ViewBidNFTModal.jsx":
/*!**************************************************************!*\
  !*** ./src/components/components/modals/ViewBidNFTModal.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewmodalShow; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");











function ViewmodalShow(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      id = _ref.id,
      walletType = _ref.walletType,
      title = _ref.title;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  var base = new Airtable({
    apiKey: 'keyR1Rrcl9O2s9bTs'
  }).base('appgbRCpbkzmdcucO');

  function addZero(num) {
    return num < 10 ? "0".concat(num) : num;
  }

  function AmPM(num) {
    return num < 12 ? 'AM' : 'PM';
  }

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var nearPrice, nearCurrencyUrl, currency_options;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;

              if (!id) {
                _context8.next = 16;
                break;
              }

              nearPrice = 0; //NEAR currency

              _context8.prev = 3;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context8.next = 8;
              return fetch(nearCurrencyUrl, currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 8:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context8.next = 14;
              break;

            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8["catch"](3);
              nearPrice = 0;

            case 14:
              _context8.next = 16;
              return base('tokenbid').select({
                filterByFormula: "({Tokenid} = '".concat(id, "')"),
                // Selecting the first 10 records in Grid view:
                maxRecords: 10,
                sort: [{
                  field: "Bidprice",
                  direction: "desc"
                }],
                view: "Grid view"
              }).eachPage( /*#__PURE__*/function () {
                var _page = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(records, fetchNextPage) {
                  var arr, element;
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          // This function (`page`) will get called for each page of records.
                          arr = [];
                          _context7.next = 3;
                          return records.forEach(function (record) {
                            var _context, _context2, _context3, _context4, _context5, _context6;

                            var goalPrice2usd = 0;
                            goalPrice2usd = Number(Number(record.get("Bidprice")) * nearPrice);
                            var Datetime = new Date(record.get("Date"));

                            var currentdate = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context6 = "".concat(addZero(Datetime.getDate()), "/")).call(_context6, addZero(Datetime.getMonth() + 1), "/")).call(_context5, addZero(Datetime.getFullYear()), " ")).call(_context4, addZero(Datetime.getHours()), ":")).call(_context3, addZero(Datetime.getMinutes()), ":")).call(_context2, addZero(Datetime.getSeconds()), " ")).call(_context, AmPM(Datetime.getHours()));

                            arr.push({
                              Date: currentdate,
                              UserName: record.get("UserName"),
                              bidpriceusd: formatter.format(goalPrice2usd),
                              Bidprice: record.get("Bidprice")
                            });
                          });

                        case 3:
                          setList(arr); // fetchNextPage();

                          // fetchNextPage();
                          if (document.getElementById("LoadingView")) document.getElementById("LoadingView").style = "display:none";

                          if (document.getElementById("Loadingtable")) {
                            element = document.getElementById("Loadingtable");
                            element.style = "display:block";
                            element.setAttribute("id", "");
                          }

                        case 6:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee);
                }));

                function page(_x, _x2) {
                  return _page.apply(this, arguments);
                }

                return page;
              }(), function done(err) {
                if (err) {
                  console.error(err);
                  return;
                }
              });

            case 16:
              _context8.next = 21;
              break;

            case 18:
              _context8.prev = 18;
              _context8.t1 = _context8["catch"](0);
              console.error(_context8.t1);

            case 21:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee2, null, [[0, 18], [3, 11]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchContractData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: show,
    onHide: onHide,
    onShow: fetchContractData,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "xl",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "View Bid - ", title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "LoadingView",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h1", null, "Loading...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "Loadingtable",
    style: {
      display: 'none'
    },
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableHeaderContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderDateContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    className: "header"
  }, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderUserContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    className: "header"
  }, "User Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderBidContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    className: "header"
  }, "Bid")))), " ", _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      key: listItem.Id,
      className: "tableFullRowContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellDateContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      className: "cell"
    }, listItem.Date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellUserContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      className: "cell"
    }, listItem.UserName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellBidContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      className: "cell"
    }, "$", listItem.bidpriceusd, " (", listItem.Bidprice, " NEAR)")))));
  }))));
}

/***/ }),

/***/ "./src/modals/lottery/AddLotteryModal.jsx":
/*!************************************************!*\
  !*** ./src/modals/lottery/AddLotteryModal.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddLotteryModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_8__);












function AddLotteryModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      nftid = _ref.nftid,
      nftrecid = _ref.nftrecid,
      eventid = _ref.eventid;

  var _UseFormInput = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_4__["default"])({
    type: 'text',
    placeholder: 'Price Ticket'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      price = _UseFormInput2[0],
      priceTicketInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_4__["default"])({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'Start Date Lottery ',
    id: 'startdate'
  }),
      _UseFormInput4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput3, 2),
      startDate = _UseFormInput4[0],
      startDateInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_4__["default"])({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'End Date Lottery ',
    id: 'enddate'
  }),
      _UseFormInput6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput5, 2),
      endDate = _UseFormInput6[0],
      endDateInput = _UseFormInput6[1];

  function addLottery() {
    return _addLottery.apply(this, arguments);
  }

  function _addLottery() {
    _addLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.promise(CreatingOnAirtable, {
                pending: "Creating Lottery...",
                error: "Please try again later",
                success: "Created successfully!"
              });

            case 2:
              _context.next = 4;
              return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.promise(UpdateOnAirtable, {
                pending: "Updating NFT...",
                error: "Please try again later",
                success: "Updated successfully!"
              });

            case 4:
              window.location.reload();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _addLottery.apply(this, arguments);
  }

  function CreatingOnAirtable() {
    return _CreatingOnAirtable.apply(this, arguments);
  }

  function _CreatingOnAirtable() {
    _CreatingOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context2.next = 5;
              return base('lottery').create([{
                "fields": {
                  "nftid": Number(nftid),
                  "eventid": eventid,
                  "price": price,
                  "startDate": startDate,
                  "endDate": endDate
                }
              }]);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _CreatingOnAirtable.apply(this, arguments);
  }

  function UpdateOnAirtable() {
    return _UpdateOnAirtable.apply(this, arguments);
  }

  function _UpdateOnAirtable() {
    _UpdateOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context3.next = 5;
              return base('nfts').update([{
                "id": nftrecid,
                "fields": {
                  "lottery": "true",
                  "price": price
                }
              }]);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _UpdateOnAirtable.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "gg",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Add to Lottery")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "Price Ticket in NEAR"), priceTicketInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupDescription"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "Start Date Lottery"), startDateInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Label, null, "End Date Lottery"), endDateInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "d-grid",
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "primary",
    onClick: addLottery
  }, "Add to Lottery"))))));
}

/***/ }),

/***/ "./src/modals/lottery/BuyLotteryModal.jsx":
/*!************************************************!*\
  !*** ./src/modals/lottery/BuyLotteryModal.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BuyLotteryModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");















function BuyLotteryModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      nftid = _ref.nftid,
      nftrecid = _ref.nftrecid,
      ToAddress = _ref.ToAddress,
      price = _ref.price,
      ticketnumber = _ref.ticketnumber;

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_10__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _UseFormInput = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__["default"])({
    type: 'text',
    placeholder: ''
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      Quantity = _UseFormInput2[0],
      amountTicketInput = _UseFormInput2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Totalamount = _useState2[0],
      setTotalamount = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    setTotalamount(Quantity * price);
  }, [Quantity]);

  function buyLottery() {
    return _buyLottery.apply(this, arguments);
  }

  function _buyLottery() {
    _buyLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(BuyingLottery(Totalamount, ToAddress), {
                pending: "Buying Lottery Ticket...",
                error: "Please try again later",
                success: "success!"
              });

            case 3:
              _context.next = 5;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(CreatingOnAirtable(Totalamount, ToAddress), {
                pending: "Updating Lottery Ticket on Airtable...",
                error: "Please try again later",
                success: "Success!"
              });

            case 5:
              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _buyLottery.apply(this, arguments);
  }

  function BuyingLottery(_x, _x2) {
    return _BuyingLottery.apply(this, arguments);
  }

  function _BuyingLottery() {
    _BuyingLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(Amount, ToAddress) {
      var buttonProps, config, near, account, amountInYocto;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              buttonProps = document.getElementsByClassName("btn btn-primary")[0];

              if (!(window.walletAccount.isSignedIn() == false)) {
                _context2.next = 9;
                break;
              }

              buttonProps.innerText = "Connect to NEAR wallet";
              _context2.next = 6;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.warn("Not connected with NEAR wallet! Connecting...");

            case 6:
              _context2.next = 8;
              return window.walletAccount.requestSignIn(window.nearConfig.contractName, 'Demeter');

            case 8:
              return _context2.abrupt("return");

            case 9:
              config = {
                networkId: "testnet",
                keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_8__.keyStores.BrowserLocalStorageKeyStore(),
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org"
              }; // sends NEAR tokens

              _context2.next = 12;
              return near_api_js__WEBPACK_IMPORTED_MODULE_8__.connect(config);

            case 12:
              near = _context2.sent;
              _context2.next = 15;
              return near.account(walletAccount.getAccountId());

            case 15:
              account = _context2.sent;
              //const amountInYocto = nearAPI.utils.format.formatNearAmount(Amount);
              amountInYocto = (Number(Amount) * 1000000000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context2.next = 19;
              return account.sendMoney(ToAddress, // receiver account
              amountInYocto // amount in yoctoNEAR
              ).catch(function (error) {
                console.error("error:", error);
                console.log(error);
              });

            case 19:
              _context2.next = 23;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](0);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 21]]);
    }));
    return _BuyingLottery.apply(this, arguments);
  }

  function CreatingOnAirtable() {
    return _CreatingOnAirtable.apply(this, arguments);
  }

  function _CreatingOnAirtable() {
    _CreatingOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
      var Airtable, base, currentWallet, endnumber, i, users, participated, done;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');

              if (ticketnumber == null) {
                ticketnumber = 0;
              }

              currentWallet = window.walletAccount._authData.accountId;
              endnumber = Number(ticketnumber) + Number(Quantity);
              i = Number(ticketnumber);

            case 7:
              if (!(i < endnumber)) {
                _context6.next = 13;
                break;
              }

              _context6.next = 10;
              return base('lotteryBought').create([{
                "fields": {
                  "nftid": Number(nftid),
                  "user": currentWallet,
                  "userWallet": signerAddress,
                  "number": i
                }
              }]);

            case 10:
              i++;
              _context6.next = 7;
              break;

            case 13:
              users = '';
              participated = 0;
              done = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default())( /*#__PURE__*/function () {
                var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4(resolve, reject) {
                  var _context3;

                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = base('nfts')).call(_context3, nftrecid, /*#__PURE__*/function () {
                            var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(err, record) {
                              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context4) {
                                while (1) {
                                  switch (_context4.prev = _context4.next) {
                                    case 0:
                                      users = record.get('isbought');

                                      if (record.get('participated') != "" && record.get('participated') != null) {
                                        participated = record.get('participated');
                                      }

                                      resolve(participated);

                                    case 3:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }
                              }, _callee3);
                            }));

                            return function (_x5, _x6) {
                              return _ref3.apply(this, arguments);
                            };
                          }());

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }()).then(function (e) {
                return e;
              });
              console.log(done);
              users = users + ", " + window.walletAccount._authData.accountId;
              _context6.next = 20;
              return base('nfts').update([{
                "id": nftrecid,
                "fields": {
                  "isbought": users,
                  "participated": participated + 1,
                  "ticketnumber": endnumber
                }
              }]);

            case 20:
              window.location.reload();

            case 21:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee5);
    }));
    return _CreatingOnAirtable.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "gg",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_11__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Buy Lottery Ticket")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "Total tickets"), amountTicketInput, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("span", null, "Total price ", Totalamount, " NEAR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "d-grid",
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "primary",
    onClick: buyLottery
  }, "Buy Ticket"))))));
}

/***/ }),

/***/ "./src/pages/donation/auction/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/donation/auction/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Auction; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var _components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/components/modals/BidNFTModal */ "./src/components/components/modals/BidNFTModal.jsx");
/* harmony import */ var _components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/components/modals/ViewBidNFTModal */ "./src/components/components/modals/ViewBidNFTModal.jsx");
/* harmony import */ var _components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/components/modals/DonateNFTModal */ "./src/components/components/modals/DonateNFTModal.jsx");
/* harmony import */ var _modals_lottery_AddLotteryModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/modals/lottery/AddLotteryModal */ "./src/modals/lottery/AddLotteryModal.jsx");
/* harmony import */ var _modals_lottery_BuyLotteryModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/modals/lottery/BuyLotteryModal */ "./src/modals/lottery/BuyLotteryModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");

















function Auction() {
  var regex = /\[(.*)\]/g;
  var str = window.location.search;
  var m;
  var id = "";

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    id = m[1];
  }

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_15__["default"])('ERC721'),
      contract = _useContract.contract,
      contractCelo = _useContract.contractCelo,
      signerAddress = _useContract.signerAddress;

  console.log("id => ", id);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      CreatemodalShow = _useState2[0],
      setDonateModalShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      AddLotterymodalShow = _useState4[0],
      setAddLotteryModalShow = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      BuyLotterymodalShow = _useState6[0],
      setBuyLotteryModalShow = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(id),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      eventId = _useState8[0],
      setEventId = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      RealEventId = _useState10[0],
      setRealEventId = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      list = _useState12[0],
      setList = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      title = _useState14[0],
      setTitle = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      goalusd = _useState16[0],
      setgoalusd = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      goal = _useState18[0],
      setgoal = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState20 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
      dateleft = _useState20[0],
      setdateleft = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState22 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState21, 2),
      date = _useState22[0],
      setdate = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState24 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState23, 2),
      dateleftBid = _useState24[0],
      setdateleftBid = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState26 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState25, 2),
      logo = _useState26[0],
      setlogo = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState28 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState27, 2),
      selectid = _useState28[0],
      setselectid = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState30 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState29, 2),
      selectrecid = _useState30[0],
      setselectrecid = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState32 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState31, 2),
      selecttitle = _useState32[0],
      setselecttitle = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState34 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState33, 2),
      selecttype = _useState34[0],
      setselecttype = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      _useState36 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState35, 2),
      Eventwallet = _useState36[0],
      setEventwallet = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState38 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState37, 2),
      selectwallet = _useState38[0],
      setselectwallet = _useState38[1];

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState40 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState39, 2),
      walletType = _useState40[0],
      setWalletType = _useState40[1];

  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState42 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState41, 2),
      selectbid = _useState42[0],
      setselectbid = _useState42[1];

  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState44 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState43, 2),
      selectprice = _useState44[0],
      setselectprice = _useState44[1];

  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState46 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState45, 2),
      LotteryNumber = _useState46[0],
      setLotteryNumber = _useState46[1];

  var boolTrue = true;

  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState48 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState47, 2),
      modalShow = _useState48[0],
      setModalShow = _useState48[1];

  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState50 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState49, 2),
      ViewmodalShow = _useState50[0],
      setViewModalShow = _useState50[1];

  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState52 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState51, 2),
      currentWallet = _useState52[0],
      setCurrentWallet = _useState52[1];

  var currentWalletBought = [];
  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
  }

  function LeftDateBid(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s";
  }

  function AuctionfetchContractData() {
    return _AuctionfetchContractData.apply(this, arguments);
  }

  function _AuctionfetchContractData() {
    _AuctionfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var _context, nearPrice, nearCurrencyUrl, currency_options, celoPrice, celoCurrencyUrl, _currency_options, Airtable, base;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(id && window.location.pathname == "/donation/auction")) {
                _context5.next = 32;
                break;
              }

              console.log("started chekcing");
              nearPrice = 0; //NEAR currency

              _context5.prev = 3;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context5.next = 8;
              return fetch(nearCurrencyUrl, currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 8:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context5.next = 15;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](3);
              console.log(_context5.t0);
              nearPrice = 0;

            case 15:
              celoPrice = 0; //CELO currency

              _context5.prev = 16;
              celoCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=celo&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              _currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context5.next = 21;
              return fetch(celoCurrencyUrl, _currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return celoPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 21:
              celoPrice = celoPrice.data.marketPairs[0].price;
              _context5.next = 28;
              break;

            case 24:
              _context5.prev = 24;
              _context5.t1 = _context5["catch"](16);
              console.log(_context5.t1);
              celoPrice = 0;

            case 28:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              _context5.next = 32;
              return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context = base('events')).call(_context, id, /*#__PURE__*/function () {
                var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(err, record) {
                  var usdprice;
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!err) {
                            _context4.next = 3;
                            break;
                          }

                          console.error(err);
                          return _context4.abrupt("return");

                        case 3:
                          setEventId(record.getId());
                          setRealEventId(record.get('id'));
                          setTitle(record.get("title"));
                          setWalletType(record.get("wallettype"));
                          setselectwallet(record.get('wallet'));
                          setEventwallet(record.get('wallet'));
                          usdprice = 0;
                          if (record.get("wallettype") == "NEAR") usdprice = formatter.format(Number(Number(record.get("Goal")) * nearPrice));
                          if (record.get("wallettype") == "CELO") usdprice = formatter.format(Number(Number(record.get("Goal")) * celoPrice));
                          setgoalusd(usdprice);
                          setgoal(Number(record.get("Goal")));
                          setdateleft(LeftDate(record.get("endDate")));
                          setdate(record.get("endDate"));
                          setdateleftBid(LeftDateBid(record.get("endDate")));
                          setlogo(record.get("logolink"));
                          console.log('Retrieved', record.getId());
                          _context4.next = 21;
                          return base('nfts').select({
                            filterByFormula: "({eventid} = '".concat(Number(record.get('id')), "')"),
                            // Selecting the first 10 records in Grid view:
                            maxRecords: 10,
                            sort: [{
                              field: "price",
                              direction: "desc"
                            }],
                            view: "Grid view"
                          }).eachPage(function page(records, fetchNextPage) {
                            // This function (`page`) will get called for each page of records.
                            var arr = [];
                            records.forEach( /*#__PURE__*/function () {
                              var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(record) {
                                var currentAcc, isbought, _context2, goalPrice2usd;

                                return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context3) {
                                  while (1) {
                                    switch (_context3.prev = _context3.next) {
                                      case 0:
                                        if (walletType == "NEAR") {
                                          setCurrentWallet(walletAccount._authData.accountId);
                                        } else if (walletType == "CELO") {
                                          setCurrentWallet(window.ethereum.selectedAddress);
                                        }

                                        currentAcc = walletAccount._authData.accountId;
                                        isbought = false;

                                        try {
                                          if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = record.get("isbought")).call(_context2, currentAcc)) {
                                            isbought = true;
                                          }
                                        } catch (_unused) {}

                                        goalPrice2usd = 0;
                                        goalPrice2usd = Number(Number(record.get("price")) * nearPrice);
                                        arr.push({
                                          recId: record.id,
                                          Id: record.get("id"),
                                          name: record.get("name"),
                                          description: record.get("description"),
                                          Bidprice: goalPrice2usd,
                                          price: Number(record.get("price")),
                                          type: record.get("type"),
                                          image: record.get("image"),
                                          lottery: record.get("lottery"),
                                          isbought: isbought,
                                          ticketnumber: record.get("ticketnumber"),
                                          ownerWallet: record.get("ownerWallet")
                                        });

                                      case 7:
                                      case "end":
                                        return _context3.stop();
                                    }
                                  }
                                }, _callee);
                              }));

                              return function (_x4) {
                                return _ref2.apply(this, arguments);
                              };
                            }());
                            setList(arr);
                            if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none";
                          }, function done(err) {
                            if (err) {
                              console.error(err);
                              return;
                            }
                          });

                        case 21:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x2, _x3) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 32:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee3, null, [[3, 11], [16, 24]]);
    }));
    return _AuctionfetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    AuctionfetchContractData();
  }, []);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_9__["default"].push("/login?[/donation]");
    }

    try {
      var allDates = document.getElementsByName("dateleft");

      for (var i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }

      var allDates = document.getElementsByName("date");

      for (var _i = 0; _i < allDates.length; _i++) {
        var date = allDates[_i].getAttribute("date");

        allDates[_i].innerHTML = LeftDateBid(date);
      }
    } catch (error) {}
  }

  function activateViewBidModal(e) {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_9__["default"].push("/login?[/donation]");
    }

    setselectrecid(e.target.getAttribute("recid"));
    setselectid(e.target.getAttribute("tokenid"));
    setselecttitle(e.target.getAttribute("title"));
    setViewModalShow(true);
  }

  function activateBidNFTModal(e) {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_9__["default"].push("/login?[/donation]");
    }

    setselectrecid(e.target.getAttribute("recid"));
    setselectid(e.target.getAttribute("tokenid"));
    setselectbid(e.target.getAttribute("highestbid"));
    console.log(selectbid);
    setselecttype("NFT");
    setModalShow(true);
  }

  function addtoLottery(e) {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_9__["default"].push("/login?[/donation]");
    }

    setselectid(e.target.getAttribute("tokenid"));
    setselectrecid(e.target.getAttribute("recid"));
    setAddLotteryModalShow(true);
  }

  function BuyLottery(_x) {
    return _BuyLottery.apply(this, arguments);
  }

  function _BuyLottery() {
    _BuyLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(e) {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setselectid(e.target.getAttribute("tokenid"));
              setselectrecid(e.target.getAttribute("recid"));
              setselectprice(e.target.getAttribute("price"));
              setselectwallet(e.target.getAttribute("wallet"));
              setLotteryNumber(e.target.getAttribute("ticketnumber"));
              setBuyLotteryModalShow(true);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee4);
    }));
    return _BuyLottery.apply(this, arguments);
  }

  function activateCreateNFTModal(e) {
    setselecttype("NFT");
    setDonateModalShow(true);
  }

  function Topbutton() {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        style: {
          color: 'white',
          overflow: 'hidden',
          background: 'rgb(236, 201, 0)',
          textAlign: 'center',
          cursor: 'pointer',
          height: '72px',
          width: '244px',
          float: 'right',
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.NavLink, {
        to: "/login?[/donation]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '34px'
        }
      }, "Login"))));
    }

    if (window.localStorage.getItem('Type') == "user") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        style: {
          display: 'flex',
          gap: '14px',
          position: 'absolute',
          right: '25px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        onClick: activateCreateNFTModal,
        className: "card",
        style: {
          color: 'white',
          overflow: 'hidden',
          background: 'rgb(236, 201, 0)',
          textAlign: 'center',
          width: '172px',
          cursor: 'pointer',
          height: '48px',
          margin: '0',
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        onClick: activateCreateNFTModal,
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '21px',
          fontSize: '21px'
        }
      }, "Donate NFT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.NavLink, {
        to: "/lottery?[".concat(RealEventId, "]")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        style: {
          display: 'flex',
          gap: '14px',
          position: 'absolute',
          right: '208px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "card",
        style: {
          color: 'white',
          overflow: 'hidden',
          background: 'rgb(236, 201, 0)',
          textAlign: 'center',
          width: '172px',
          cursor: 'pointer',
          height: '48px',
          margin: '0',
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '21px',
          fontSize: '21px'
        }
      }, "Go to lottery")))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.NavLink, {
      to: "/lottery?[".concat(RealEventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        display: 'flex',
        gap: '14px',
        position: 'absolute',
        right: '80px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "card",
      style: {
        color: 'white',
        overflow: 'hidden',
        background: 'rgb(236, 201, 0)',
        textAlign: 'center',
        width: '172px',
        cursor: 'pointer',
        height: '48px',
        margin: '0',
        padding: '0px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "card-body",
      style: {
        height: '100%',
        paddingTop: '21px',
        fontSize: '21px'
      }
    }, "Go to lottery")))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: "row EventContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("img", {
    src: logo,
    className: "AuctionImage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: "DetialsContainer",
    style: {
      rowGap: '16px',
      paddingTop: '70px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, "Goal: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, "$ ", goalusd, " (", goal, " ", walletType, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      fontSize: '2vw'
    },
    name: "dateleft",
    date: date
  }, dateleft))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(Topbutton, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      key: listItem.Id,
      className: "row ElementsContainer bgWhite"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '100%',
        display: 'flex'
      }
    }, listItem.type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage pixel"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "DetialsContainer",
      style: {
        rowGap: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h2", {
      style: {
        fontSize: '2vw'
      }
    }, listItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        color: "rgb(211 187 51)",
        fontSize: '1.7vw'
      }
    }, "Type: NFT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "TextContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        color: "rgb(211 187 51)",
        fontSize: '1.7vw'
      }
    }, listItem.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "ElementBottomContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        maxWidth: "216px"
      }
    }, listItem.lottery != "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h3", {
      style: {
        fontSize: '1vw'
      },
      className: "smallgrey"
    }, "Current bid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      },
      className: "bidprice"
    }, "$ ", listItem.Bidprice.toFixed(2), " (", listItem.price, " ", walletType, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h7", {
      style: {
        fontSize: '1vw'
      },
      name: "date",
      date: date,
      className: "smallgrey"
    }, dateleftBid)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h3", {
      style: {
        fontSize: '1vw'
      },
      className: "smallgrey"
    }, "Ticket price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      },
      className: "bidprice"
    }, "$ ", listItem.Bidprice.toFixed(2), " (", listItem.price, " ", walletType, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "BidAllcontainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "Bidsbutton"
    }, listItem.lottery != "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, window.localStorage.getItem("Type") == "user" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '168px'
      },
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      onClick: activateViewBidModal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      className: "card-body bidbuttonText"
    }, "View"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '168px'
      },
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      goalScore: goal,
      className: "Bidcontainer col",
      onClick: activateBidNFTModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card-body bidbuttonText"
    }, "Bid")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null), window.localStorage.getItem("Type") == "manager" && selectwallet == currentWallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '224px'
      },
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      goalScore: goal,
      className: "Bidcontainer col",
      onClick: addtoLottery
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card BidcontainerCard",
      onClick: addtoLottery
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card-body bidbuttonText",
      onClick: addtoLottery
    }, "Add to Lottery"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null)) : listItem.isbought == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.NavLink, {
      to: "/lottery?[".concat(RealEventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '224px'
      },
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      goalScore: goal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      className: "card-body bidbuttonText"
    }, "Go to lottery"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '251px'
      },
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      ticketnumber: listItem.ticketnumber,
      price: listItem.price,
      goalScore: goal,
      ownerWallet: listItem.ownerWallet,
      onClick: BuyLottery,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      ticketnumber: listItem.ticketnumber,
      ownerWallet: listItem.ownerWallet,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      ticketnumber: listItem.ticketnumber,
      ownerWallet: listItem.ownerWallet,
      className: "card-body bidbuttonText"
    }, "Buy lottery ticket"))))))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: modalShow,
    onHide: function onHide() {
      setModalShow(false);
      AuctionfetchContractData();
    },
    tokenId: selectid,
    recid: selectrecid,
    type: selecttype,
    ToAddress: selectwallet,
    eventId: eventId,
    RealEventId: RealEventId,
    Highestbid: selectbid,
    walletType: walletType,
    goal: goal,
    contract: contract,
    contractCelo: contractCelo,
    senderAddress: signerAddress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    show: ViewmodalShow,
    onHide: function onHide() {
      setViewModalShow(false);
      AuctionfetchContractData();
    },
    id: selectid,
    walletType: walletType,
    title: selecttitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    show: CreatemodalShow,
    onHide: function onHide() {
      setDonateModalShow(false);
    },
    EventID: RealEventId,
    EventeRecID: eventId,
    type: selecttype,
    SelectedTitle: title,
    enddate: date
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_modals_lottery_AddLotteryModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    show: AddLotterymodalShow,
    onHide: function onHide() {
      setAddLotteryModalShow(false);
    },
    nftrecid: selectrecid,
    nftid: selectid,
    eventid: RealEventId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_modals_lottery_BuyLotteryModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    show: BuyLotterymodalShow,
    onHide: function onHide() {
      setBuyLotteryModalShow(false);
    },
    nftid: selectid,
    ToAddress: Eventwallet,
    nftrecid: selectrecid,
    price: selectprice,
    ticketnumber: LotteryNumber
  }));
}

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/find.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/find.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.find */ "./node_modules/core-js-pure/modules/es.array.find.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').find;


/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/includes.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/includes.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.includes */ "./node_modules/core-js-pure/modules/es.array.includes.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').includes;


/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/find.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var find = __webpack_require__(/*! ../array/virtual/find */ "./node_modules/core-js-pure/es/array/virtual/find.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find : own;
};


/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/includes.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayIncludes = __webpack_require__(/*! ../array/virtual/includes */ "./node_modules/core-js-pure/es/array/virtual/includes.js");
var stringIncludes = __webpack_require__(/*! ../string/virtual/includes */ "./node_modules/core-js-pure/es/string/virtual/includes.js");

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.includes)) return arrayIncludes;
  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {
    return stringIncludes;
  } return own;
};


/***/ }),

/***/ "./node_modules/core-js-pure/es/object/get-own-property-symbols.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/get-own-property-symbols.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.symbol */ "./node_modules/core-js-pure/modules/es.symbol.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = path.Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js-pure/es/object/keys.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/keys.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.keys */ "./node_modules/core-js-pure/modules/es.object.keys.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = path.Object.keys;


/***/ }),

/***/ "./node_modules/core-js-pure/es/string/virtual/includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/string/virtual/includes.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.string.includes */ "./node_modules/core-js-pure/modules/es.string.includes.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('String').includes;


/***/ }),

/***/ "./node_modules/core-js-pure/features/instance/index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/index-of.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../stable/instance/index-of */ "./node_modules/core-js-pure/stable/instance/index-of.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/features/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/assign.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../stable/object/assign */ "./node_modules/core-js-pure/stable/object/assign.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/features/object/get-own-property-symbols.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/get-own-property-symbols.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../stable/object/get-own-property-symbols */ "./node_modules/core-js-pure/stable/object/get-own-property-symbols.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/features/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/keys.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../stable/object/keys */ "./node_modules/core-js-pure/stable/object/keys.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-is-regexp-logic.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-is-regexp-logic.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-regexp.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/not-a-regexp.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/not-a-regexp.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js-pure/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.find.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.find.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js-pure/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js-pure/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.includes.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.includes.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js-pure/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js-pure/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.keys.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.keys.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js-pure/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.includes.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js-pure/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js-pure/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js-pure/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~toString(requireObjectCoercible(this))
      .indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/find.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/find.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/find */ "./node_modules/core-js-pure/es/instance/find.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/includes.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/includes */ "./node_modules/core-js-pure/es/instance/includes.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/get-own-property-symbols.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/get-own-property-symbols.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/get-own-property-symbols */ "./node_modules/core-js-pure/es/object/get-own-property-symbols.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/keys.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/keys */ "./node_modules/core-js-pure/es/object/keys.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Icon/index.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Icon/index.scss ***!
  \****************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon {\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  overflow: visible;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  padding: 0;\n  background-color: transparent;\n  display: inline-block;\n  fill: currentcolor;\n  line-height: 0;\n}", "",{"version":3,"sources":["webpack://./src/components/common/Icon/index.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,UAAA;EACA,6BAAA;EACA,qBAAA;EACA,kBAAA;EACA,cAAA;AACJ","sourcesContent":[".icon {\n    margin: 0;\n    border: none;\n    border-radius: 0;\n    overflow: visible;\n    font: inherit;\n    color: inherit;\n    text-transform: none;\n    padding: 0;\n    background-color: transparent;\n    display: inline-block;\n    fill: currentcolor;\n    line-height: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/common/Icon/index.scss":
/*!***********************************************!*\
  !*** ./src/components/common/Icon/index.scss ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Icon/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Icon/index.scss",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Icon/index.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js/object/assign.js");

function _extends() {
  _extends = _babel_runtime_corejs3_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js");
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose.js");



function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__["default"])(source, excluded);
  var key, i;

  if (_babel_runtime_corejs3_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__) {
    var sourceSymbolKeys = _babel_runtime_corejs3_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (_babel_runtime_corejs3_core_js_instance_index_of__WEBPACK_IMPORTED_MODULE_1__(excluded).call(excluded, key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js");


function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _babel_runtime_corejs3_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (_babel_runtime_corejs3_core_js_instance_index_of__WEBPACK_IMPORTED_MODULE_1__(excluded).call(excluded, key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c3fb5c7890a56c2549f1"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmQ4N2JiNjUyNTFkNmYwMWZkMDU5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxvSUFBNkQ7Ozs7Ozs7Ozs7QUNBN0QsNElBQWlFOzs7Ozs7Ozs7O0FDQWpFLGdKQUFtRTs7Ozs7Ozs7OztBQ0FuRSx3SUFBK0Q7Ozs7Ozs7Ozs7QUNBL0QsNEtBQWlGOzs7Ozs7Ozs7O0FDQWpGLG9JQUE2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBN0Q7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQVdPLFNBQVNJLElBQVQsQ0FBY0MsS0FBZCxFQUFvRDtBQUN2RCxNQUNJQyxTQURKLEdBT0lELEtBUEosQ0FDSUMsU0FESjtBQUFBLHlCQU9JRCxLQVBKLENBRUlFLFNBRko7QUFBQSxNQUVlQyxTQUZmLGlDQUUyQixNQUYzQjtBQUFBLG1CQU9JSCxLQVBKLENBR0lJLEdBSEo7QUFBQSxNQUdJQSxHQUhKLDJCQUdVUCxtRUFIVjtBQUFBLE1BSUlRLElBSkosR0FPSUwsS0FQSixDQUlJSyxJQUpKO0FBQUEscUJBT0lMLEtBUEosQ0FLSU0sS0FMSjtBQUFBLE1BS0lBLEtBTEosNkJBS1ksQ0FMWjtBQUFBLE1BTU9DLFNBTlAsc0dBT0lQLEtBUEo7O0FBU0EsTUFBSSxDQUFDSyxJQUFMLEVBQVc7QUFDUCxXQUFPLElBQVA7QUFDSDs7QUFFRCxNQUFNRyxHQUFHLEdBQUdKLEdBQUcsQ0FBQ04sZ0RBQVEsQ0FBQ08sSUFBRCxDQUFULENBQWYsQ0FkdUQsQ0FnQnZEOztBQUNBLHNCQUNJLGlEQUFDLFNBQUQ7QUFDSSxhQUFTLEVBQUVULGlEQUFVLENBQ2pCLE1BRGlCLEVBRWpCSyxTQUZpQjtBQUR6QixLQUtRTSxTQUxSLEdBT0tDLEdBQUcsaUJBQUksaURBQUMsR0FBRDtBQUFLLFNBQUssRUFBRUY7QUFBWixJQVBaLENBREo7QUFXSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NEOztBQUVBLFNBQVNH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QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCc0U7QUFDa0I7QUFDekU7QUFDZjtBQUNBOztBQUVBLG1CQUFtQix1RUFBWTs7QUFFL0I7O0FBRUEsY0FBYyx1QkFBdUI7QUFDckM7QUFDQSxRQUFRLDZFQUF3QjtBQUNoQztBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDakJBLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9maW5kLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9pbnN0YW5jZS9pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9JY29uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0ljb24vbGliLnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9WaWV3QmlkTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvbW9kYWxzL2xvdHRlcnkvQWRkTG90dGVyeU1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL21vZGFscy9sb3R0ZXJ5L0J1eUxvdHRlcnlNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9hcnJheS92aXJ0dWFsL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvdmlydHVhbC9pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9maW5kLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2luc3RhbmNlL2luY2x1ZGVzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvc3RyaW5nL3ZpcnR1YWwvaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvaW5zdGFuY2UvaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jb3JyZWN0LWlzLXJlZ2V4cC1sb2dpYy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtcmVnZXhwLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9ub3QtYS1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvZmluZC5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5zY3NzIiwid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5zY3NzP2FmOGIiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvZmluZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2luY2x1ZGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9mZWF0dXJlcy9pbnN0YW5jZS9pbmRleC1vZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2Fzc2lnblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2tleXNcIik7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgbGlicmFyeSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0ljb24vbGliJ1xuaW1wb3J0IHsgY2FtZWxpZnkgfSBmcm9tICdAL3V0aWxzJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyBleHRlbmRzIFJlYWN0LkFsbEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gICAgY29tcG9uZW50PzogUmVhY3QuRWxlbWVudFR5cGU7XG4gICAgbGliPzogUmVjb3JkPHN0cmluZywgUmVhY3QuRWxlbWVudFR5cGU+O1xuICAgIGljb246IHN0cmluZztcbiAgICByYXRpbz86IG51bWJlcjtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gSWNvbihwcm9wczogSWNvblByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY29tcG9uZW50OiBDb21wb25lbnQgPSAnc3BhbicsXG4gICAgICAgIGxpYiA9IGxpYnJhcnksXG4gICAgICAgIGljb24sXG4gICAgICAgIHJhdGlvID0gMSxcbiAgICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICBpZiAoIWljb24pIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBJY28gPSBsaWJbY2FtZWxpZnkoaWNvbildXG5cbiAgICAvLyBSZW5kZXJcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgJ2ljb24nLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICB7SWNvICYmIDxJY28gcmF0aW89e3JhdGlvfSAvPn1cbiAgICAgICAgPC9Db21wb25lbnQ+XG4gICAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIGdldFNpemUoaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHJhdGlvOiBudW1iZXIgPSAxKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiByYXRpbyxcbiAgICAgICAgd2lkdGg6IHdpZHRoICogcmF0aW8sXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGZpbGw6ICdub25lJyxcbiAgICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbn1cblxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3QgbGlicmFyeTogUmVjb3JkPHN0cmluZywgUmVhY3QuRWxlbWVudFR5cGU+ID0ge1xuICAgIGFycm93RG93bjogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+IDxzdmcgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgey4uLmdldFNpemUoMjAsIDIwLCByYXRpbyl9PjxwYXRoIGQ9XCJNMTAgMTIuNUw1IDcuNUgxNUwxMCAxMi41WlwiLz48L3N2Zz4sXG4gICAgZXh0ZXJuYWxMaW5rOiAoeyByYXRpbywgLi4ucHJvcHMgfSkgPT4gPHN2ZyB7Li4uZGVmYXVsdFByb3BzfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5nZXRTaXplKDIwLCAyMCwgcmF0aW8pfT48cGF0aCBkPVwiTTUxMS41LDAuOXYyNTUuNWgtMzQuNFY2My4yTDE1OS40LDM4MWwtMjQuMi0yNC4yTDQ1Ny42LDM0LjRIMjU2VjBoMjU1LjVWMC45eiBNMzc0LjksNDc3LjZIMzQuOFYxMzcuNSBoMjIzLjl2LTM0LjRIMC41VjUxMmg0MDguOVYyNDloLTM0LjRWNDc3LjZ6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsxLjZ9Lz48L3N2Zz4sXG4gICAgY2xvc2U6ICh7IHJhdGlvLCAuLi5wcm9wcyB9KSA9PiA8c3ZnIHsuLi5kZWZhdWx0UHJvcHN9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCA0MCA0MFwiIHsuLi5nZXRTaXplKDQwLCA0MCwgcmF0aW8pfT48cGF0aCBkPVwiTTE0IDE0TDIwIDIwTTIwIDIwTDE0IDI2TTIwIDIwTDI2IDE0TTIwIDIwTDI2IDI2XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9Lz48L3N2Zz4sXG4gICAgY29uZmlnOiAoeyByYXRpbywgLi4ucHJvcHMgfSkgPT4gPHN2ZyB7Li4uZGVmYXVsdFByb3BzfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4uZ2V0U2l6ZSgyNCwgMjQsIHJhdGlvKX0+PHBhdGggZD1cIk0xNy4wNDU4IDIwLjI0OTFDMTcuODEwNCAxOS43NjQgMTguNTAzIDE5LjE3MjQgMTkuMTAzMSAxOC40OTQxTDIxLjI2NjYgMTkuNzYyN0wyMy4yMzY1IDE2LjI5OEwyMS4wNzc0IDE1LjAzMjFDMjEuMzUxOSAxNC4xODEgMjEuNTEzNCAxMy4yNzgzIDIxLjU0MzYgMTIuMzQyNkwyNCAxMS45MDI4TDIzLjMxNTYgNy45NjI5TDIwLjg1OTcgOC40MDI2OUMyMC41MjAzIDcuNTQ4NTIgMjAuMDY0OSA2Ljc1NDI3IDE5LjUxMjcgNi4wNDA0OUwyMS4xMTgxIDQuMDk3OThMMTguMDk5OSAxLjUyNjU3TDE2LjQ5NTkgMy40Njc0MkMxNS43MTI0IDMuMDQxMTIgMTQuODY0IDIuNzIyNDUgMTMuOTY5OCAyLjUzMTIyVjBMMTAuMDMgMFYyLjUzMTIyQzkuMTM1NzMgMi43MjI0NSA4LjI4NzMgMy4wNDExMiA3LjUwMzc1IDMuNDY3NDJMNS44OTk3OSAxLjUyNjU3TDIuODgxNjIgNC4wOTgwN0w0LjQ4Njg1IDYuMDQwNThDMy45MzQ3MyA2Ljc1NDM2IDMuNDc5MzggNy41NDg3MSAzLjEzOTk3IDguNDAyNzlMMC42ODQwNTcgNy45NjI5OUwwIDExLjkwMjlMMi40NTYwMSAxMi4zNDI3QzIuNDg2MjggMTMuMjc4NSAyLjY0Nzg1IDE0LjE4MSAyLjkyMjM4IDE1LjAzMjRMMC43NjMwMzUgMTYuMjk4MkwyLjczMzA2IDE5Ljc2MjhMNC44OTY2NSAxOC40OTQ2QzUuNDk2NTggMTkuMTcyNSA2LjE4OTEzIDE5Ljc2NDMgNi45NTM4OCAyMC4yNDk0TDYuMDk5ODUgMjIuNjMxN0w5LjgwMjI1IDIzLjk5OThMMTAuNjU1MSAyMS42MjA3QzExLjA5NDYgMjEuNjgzOSAxMS41NDM1IDIxLjcxNzQgMTEuOTk5OSAyMS43MTc0QzEyLjQ1NjMgMjEuNzE3NCAxMi45MDUzIDIxLjY4NCAxMy4zNDQ4IDIxLjYyMDdMMTQuMTk3NiAyNEwxNy44OTk4IDIyLjYzMTVMMTcuMDQ1OCAyMC4yNDkxWk0xMS45OTk3IDE4QzguNjg2MSAxNy45OTk5IDYgMTUuMzEzNiA2IDEyQzYgOC42ODYyOSA4LjY4NjI5IDYgMTIgNkMxNS4zMTM3IDYgMTggOC42ODYyOSAxOCAxMkMxOCAxNS4zMTM4IDE1LjMxMzUgMTguMDAwMiAxMS45OTk3IDE4WlwiLz48L3N2Zz4sXG4gICAgaW5mbzogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+IDxzdmcgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgey4uLmdldFNpemUoMjAsIDIwLCByYXRpbyl9PjxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMThDMTQuNDE4MyAxOCAxOCAxNC40MTgzIDE4IDEwQzE4IDUuNTgxNzIgMTQuNDE4MyAyIDEwIDJDNS41ODE3MiAyIDIgNS41ODE3MiAyIDEwQzIgMTQuNDE4MyA1LjU4MTcyIDE4IDEwIDE4Wk0xMCAxN0MxMy44NjYgMTcgMTcgMTMuODY2IDE3IDEwQzE3IDYuMTM0MDEgMTMuODY2IDMgMTAgM0M2LjEzNDAxIDMgMyA2LjEzNDAxIDMgMTBDMyAxMy44NjYgNi4xMzQwMSAxNyAxMCAxN1pNMTAuNzUgOVYxNEg5LjI1VjlIMTAuNzVaTTEwLjc1IDdWNS41SDkuMjVWN0gxMC43NVpcIi8+PC9zdmc+LFxuICAgIGxpbms6ICh7IHJhdGlvLCAuLi5wcm9wcyB9KSA9PiA8c3ZnIHsuLi5kZWZhdWx0UHJvcHN9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAyMCAyMFwiIHsuLi5nZXRTaXplKDIwLCAyMCwgcmF0aW8pfT48cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsxLjF9IGQ9XCJNMTAuNjI1LDEyLjM3NSBMNy41MjUsMTUuNDc1IEM2LjgyNSwxNi4xNzUgNS45MjUsMTYuMTc1IDUuMjI1LDE1LjQ3NSBMNC41MjUsMTQuNzc1IEMzLjgyNSwxNC4wNzQgMy44MjUsMTMuMTc1IDQuNTI1LDEyLjQ3NSBMNy42MjUsOS4zNzVcIi8+PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17MS4xfSBkPVwiTTkuMzI1LDcuMzc1IEwxMi40MjUsNC4yNzUgQzEzLjEyNSwzLjU3NSAxNC4wMjUsMy41NzUgMTQuNzI0LDQuMjc1IEwxNS40MjUsNC45NzUgQzE2LjEyNSw1LjY3NSAxNi4xMjUsNi41NzUgMTUuNDI1LDcuMjc1IEwxMi4zMjUsMTAuMzc1XCIvPjxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezEuMX0gZD1cIk03LjkyNSwxMS44NzUgTDExLjkyNSw3Ljk3NVwiLz48L3N2Zz4sXG4gICAgbG9hZGVyOiAoeyByYXRpbywgLi4ucHJvcHMgfSkgPT4gPHN2ZyB7Li4uZGVmYXVsdFByb3BzfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgMjIgMjJcIiB7Li4uZ2V0U2l6ZSgyMiwgMjIsIHJhdGlvKX0+PHBhdGggZD1cIk0xMSAyMkMxNy4wOTU5IDIyIDIyIDE3LjA5NTkgMjIgMTFDMjIgNy4xMjEzNCAyMC4wMTQ2IDMuNzI1MTQgMTcgMS43Njc3M0wxNiAzLjQ1NTQzQzE4LjQzNDUgNS4wNDI2OCAyMCA3Ljc4OTc1IDIwIDExQzIwIDE2LjA3OTkgMTYuMDc5OSAyMCAxMSAyMEM1LjkyMDExIDIwIDIgMTYuMDc5OSAyIDExQzIgNS45MjAxMSA1LjkyMDExIDIgMTEgMlYwQzQuOTA0MTMgMCAwIDQuOTA0MTMgMCAxMUMwIDE3LjA5NTkgNC45MDQxMyAyMiAxMSAyMlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPixcbiAgICBsb2dvdXQ6ICh7IHJhdGlvLCAuLi5wcm9wcyB9KSA9PiA8c3ZnIHsuLi5kZWZhdWx0UHJvcHN9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAzMiAzMlwiIHsuLi5nZXRTaXplKDMyLCAzMiwgcmF0aW8pfT48cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4LjQ3NTMgMTguMjkwM0gxOS4yOTVIMjAuMTE0NlYyMS41MTYyVjIzLjkzNTVIMTUuMTk2NkwxNS4xOTY3IDI3TDEzLjA0OTIgMjYuMjc5OUw4LjExNjMzIDI0LjY2MkM3LjQ0NTkgMjQuNDMzIDcgMjQuMjc4MiA3IDI0LjI3ODJWN0g4LjYzOTM4QzguNjYxOTYgNyA4LjY4Mzc4IDcuMDA0NTkgOC43MDU1OCA3LjAwOTE5QzguNzIyNDggNy4wMTI3NSA4LjczOTM2IDcuMDE2MyA4Ljc1NjU5IDcuMDE3NzJDOC43NjkyOSA3LjAxNjA1IDguNzgxMjUgNy4wMTI2NyA4Ljc5MzE1IDcuMDA5MzFDOC44MDk2OCA3LjAwNDY0IDguODI2MSA3IDguODQ0MjQgN0gxNy42NTU2SDIwLjExNDZWMTEuODM4N0gxOS4yOTVIMTguNDc1M0wxOC40NzU0IDguNjEyNjdMMTcuNjU1NiA4LjYxMjgxSDEzLjgzNzZIMTEuOTE4TDE1LjE5NjYgOS40MTkzNlYyMi4zMjI2SDE4LjQ3NTNWMjEuNTE2MlYxOC4yOTAzWk0yMy4xNTMgMTEuMjY4NkwyNyAxNS4wNjQ0QzI3IDE1LjA2NDQgMjYuNzUyMiAxNS4zMTk0IDI2LjQzMTggMTUuNjM0NkwyMy4xNTMgMTguODYwNUwyMS43NTQxIDIwLjIyNTdMMjEuNzUzOSAxNS44NzA5SDE3LjY1NTZWMTUuMDY0NVYxNC4yNTgxSDIxLjc1MzlMMjEuNzU0MSA5LjkwMzAxTDIzLjE1MyAxMS4yNjg2WlwiLz48L3N2Zz4sXG4gICAgcGx1czogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+IDxzdmcgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDM2IDM2XCIgey4uLmdldFNpemUoMzYsIDM2LCByYXRpbyl9PjxwYXRoIGQ9XCJNMTggMjdWOVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfS8+PHBhdGggZD1cIk05IDE4TDI3IDE4XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9Lz48L3N2Zz4sXG4gICAgcHVsbDogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+IDxzdmcgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDIyIDIxXCIgey4uLmdldFNpemUoMjEsIDIyLCByYXRpbyl9PjxwYXRoIGQ9XCJNMTEgMFYxMy4zMzMzTTExIDEzLjMzMzNMMTYgOC4zMzMzM00xMSAxMy4zMzMzTDYgOC4zMzMzM1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfS8+PHBhdGggZD1cIk0xLjgzMzM0IDEyLjVWMTkuMTY2N0gyMC4xNjY3VjEyLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0vPjwvc3ZnPixcbiAgICBwdXNoOiAoeyByYXRpbywgLi4ucHJvcHMgfSkgPT4gPHN2ZyB7Li4uZGVmYXVsdFByb3BzfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgMjIgMjFcIiB7Li4uZ2V0U2l6ZSgyMSwgMjIsIHJhdGlvKX0+PHBhdGggZD1cIk0xMSAxNC4zMzRMMTEgMi4wMDA2NU0xMSAyLjAwMDY1TDYgNy4wMDA2NU0xMSAyLjAwMDY1TDE2IDcuMDAwNjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD17Mn0vPjxwYXRoIGQ9XCJNMS44MzMzNCAxMi41VjE5LjE2NjdIMjAuMTY2N1YxMi41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9ezJ9Lz48L3N2Zz4sXG4gICAgcmVtb3ZlOiAoeyByYXRpbywgLi4ucHJvcHMgfSkgPT4gPHN2ZyB7Li4uZGVmYXVsdFByb3BzfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgMTQgMTRcIiB7Li4uZ2V0U2l6ZSgxNCwgMTQsIHJhdGlvKX0+PHBhdGggZD1cIk0xIDFMNyA3TTcgN0wxIDEzTTcgN0wxMyAxTTcgN0wxMyAxM1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsyfS8+PC9zdmc+LFxuICAgIHJldmVyc2U6ICh7IHJhdGlvLCAuLi5wcm9wcyB9KSA9PiA8c3ZnIHsuLi5kZWZhdWx0UHJvcHN9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAzNiAzNlwiIHsuLi5nZXRTaXplKDM2LCAzNiwgcmF0aW8pfT48cGF0aCBkPVwiTTE2IDI0TDEyIDI4TTEyIDI4TDggMjRNMTIgMjhDMTIgMjggMTIgMjAuNjg2MyAxMiAxNkMxMiAxMy42NjY3IDE2IDEyIDE2IDEyXCIgc3Ryb2tlV2lkdGg9ezEuNH0vPjxwYXRoIGQ9XCJNMjAgMTJMMjQgOE0yNCA4TDI4IDEyTTI0IDhDMjQgOCAyNCAxNS4zMTM3IDI0IDIwQzI0IDIyLjMzMzMgMjAgMjQgMjAgMjRcIiBzdHJva2VXaWR0aD17MS40fS8+PC9zdmc+LFxuICAgIHJldmVyc2VIb3Jpem9udGFsOiAoeyByYXRpbywgLi4ucHJvcHMgfSkgPT4gPHN2ZyB7Li4uZGVmYXVsdFByb3BzfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB7Li4uZ2V0U2l6ZSgyNCwgMjQsIHJhdGlvKX0+PHBhdGggZD1cIk0xNS42MDAxIDEzLjIwMDJMMTguMDAwMSAxNS42MDAyTTE4LjAwMDEgMTUuNjAwMkwxNS42MDAxIDE4LjAwMDJNMTguMDAwMSAxNS42MDAyQzE4LjAwMDEgMTUuNjAwMiAxMy42MTE5IDE1LjYwMDIgMTAuODAwMSAxNS42MDAyQzkuNDAwMTUgMTUuNjAwMiA4LjQwMDE1IDEzLjIwMDIgOC40MDAxNSAxMy4yMDAyXCIgc3Ryb2tlV2lkdGg9ezEuNH0vPjxwYXRoIGQ9XCJNOC4zOTk4NSAxMC43OTk4TDUuOTk5ODUgOC4zOTk4TTUuOTk5ODUgOC4zOTk4TDguMzk5ODUgNS45OTk4TTUuOTk5ODUgOC4zOTk4QzUuOTk5ODUgOC4zOTk4IDEwLjM4ODEgOC4zOTk4IDEzLjE5OTkgOC4zOTk4QzE0LjU5OTkgOC4zOTk4IDE1LjU5OTkgMTAuNzk5OCAxNS41OTk5IDEwLjc5OThcIiBzdHJva2VXaWR0aD17MS40fS8+PC9zdmc+LFxuICAgIHN0YXI6ICh7IHJhdGlvLCAuLi5wcm9wcyB9KSA9PiA8c3ZnIHsuLi5kZWZhdWx0UHJvcHN9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAyNCAyNFwiIHsuLi5nZXRTaXplKDI0LCAyNCwgcmF0aW8pfT48cGF0aCBkPVwiTTE0LjYyNTggOC44MjMwNkwxNC43ODU3IDkuMjQwNTFMMTUuMjMxNyA5LjI3MDk3TDIyLjI3NzkgOS43NTIyTDE2Ljg0NjUgMTQuNTM2M0wxNi41Mjg0IDE0LjgxNjVMMTYuNjI5NCAxNS4yMjgzTDE4LjM5NzggMjIuNDM5MkwxMi4zNzk0IDE4LjQ4NzRMMTEuOTk1MiAxOC4yMzUxTDExLjYxMSAxOC40ODc0TDUuNTkyNzIgMjIuNDM5Mkw3LjM2MTE0IDE1LjIyODNMNy40NjIwNCAxNC44MTY4TDcuMTQ0MzMgMTQuNTM2NkwxLjcyMDI5IDkuNzUyMkw4Ljc1ODc2IDkuMjcwOTZMOS4yMDQ3MyA5LjI0MDQ3TDkuMzY0NjcgOC44MjMwNkwxMS45OTUyIDEuOTU3ODVMMTQuNjI1OCA4LjgyMzA2WlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPXsxLjR9Lz48L3N2Zz4sXG4gICAgdXNlcjogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+IDxzdmcgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgey4uLmdldFNpemUoMjAsIDIwLCByYXRpbyl9PjxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNiA2QzYgMy43OTQ0IDcuNzk0NCAyIDEwIDJDMTIuMjA1NiAyIDE0IDMuNzk0NCAxNCA2QzE0IDguMjA1NiAxMi4yMDU2IDEwIDEwIDEwQzcuNzk0NCAxMCA2IDguMjA1NiA2IDZaTTEwLjkzMzMgMTEuMzc1QzEyLjU1MTQgMTEuMzc1IDE0LjA3NTcgMTIuMDIwOCAxNS4yMjU2IDEzLjE5MzZDMTYuMzY5OCAxNC4zNjA2IDE3IDE1LjkwMSAxNyAxNy41MzEyQzE3IDE3Ljc5MDEgMTYuNzkxMSAxOCAxNi41MzMzIDE4SDMuNDY2NjdDMy4yMDg5NCAxOCAzIDE3Ljc5MDEgMyAxNy41MzEyQzMgMTUuOTAxIDMuNjMwMTYgMTQuMzYwNiA0Ljc3NDM5IDEzLjE5MzZDNS45MjQyNiAxMi4wMjA4IDcuNDQ4NjQgMTEuMzc1IDkuMDY2NjcgMTEuMzc1SDEwLjkzMzNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz48L3N2Zz4sXG4gICAgd2FybmluZzogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+IDxzdmcgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgey4uLmdldFNpemUoMjQsIDI0LCByYXRpbyl9PjxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuOTM1NCAzLjU1OTA4QzEyLjUxMTcgMi44NTI4OSAxMS40ODgzIDIuODUyODkgMTEuMDY0NiAzLjU1OTA4TDAuOTkxMzA2IDIwLjM0NzhDMC41NTUwMzYgMjEuMDc0OSAxLjA3ODggMjIgMS45MjY3NSAyMkgyMi4wNzMyQzIyLjkyMTIgMjIgMjMuNDQ1IDIxLjA3NDkgMjMuMDA4NyAyMC4zNDc4TDEyLjkzNTQgMy41NTkwOFpcIiBmaWxsPVwiI0VCNDM2MVwiIGZpbGxPcGFjaXR5PVwiMC4zMlwiIC8+PHBhdGggZD1cIk0xMC42MyAyMEgxMy4zOEwxMy4zOCAxN0gxMC42M0wxMC42MyAyMFpcIiBmaWxsPVwiI0VCNDM2MVwiLz48cGF0aCBkPVwiTTEwLjYzIDE1SDEzLjM4TDEzLjM4IDdIMTAuNjNMMTAuNjMgMTVaXCIgZmlsbD1cIiNFQjQzNjFcIi8+PC9zdmc+LFxuICAgIGNoZWNrOiAoeyByYXRpbywgLi4ucHJvcHMgfSkgPT4gPHN2ZyB7Li4uZGVmYXVsdFByb3BzfSB7Li4ucHJvcHN9IHZpZXdCb3g9XCIwIDAgMTAgOFwiIHsuLi5nZXRTaXplKDEwLCA4LCByYXRpbyl9PjxwYXRoIGQ9XCJNMS41IDRMNCA2LjVMOC41IDFcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjEuOFwiLz48L3N2Zz4sXG4gICAgZGlyZWN0aW9uUmlnaHQ6ICh7IHJhdGlvLCAuLi5wcm9wcyB9KSA9PiA8c3ZnIHsuLi5kZWZhdWx0UHJvcHN9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAyOCAxNFwiIHsuLi5nZXRTaXplKDI4LCAxNCwgcmF0aW8pfT48cGF0aCBkPVwiTTIwIDFMMjYgN00yNiA3TDIwIDEzTTI2IDdIMFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZU9wYWNpdHk9ezAuNDh9IHN0cm9rZVdpZHRoPXsxLjZ9IC8+PC9zdmc+LFxuICAgIHN1Y2Nlc3M6ICh7IHJhdGlvLCAuLi5wcm9wcyB9KSA9PiA8c3ZnIHsuLi5kZWZhdWx0UHJvcHN9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCA2NCA2NFwiIHsuLi5nZXRTaXplKDY0LCA2NCwgcmF0aW8pfT48cGF0aCBkPVwiTTUuMzMzNSAzMy43MDE3TDIzLjU5NzIgNTIuMDAwMkw1OC42NjY4IDE2Ljk2NTJMNTMuNjMyIDEyTDIzLjU5NzIgNDJMMTAuMjk4NiAyOC43MDE1TDUuMzMzNSAzMy43MDE3WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAvPjwvc3ZnPixcbiAgICBpbmZvRmlsbDogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+IDxzdmcgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLmdldFNpemUoMTYsIDE2LCByYXRpbyl9PjxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAxNkMxMi40MTgzIDE2IDE2IDEyLjQxODMgMTYgOEMxNiAzLjU4MTcyIDEyLjQxODMgMCA4IDBDMy41ODE3MiAwIDAgMy41ODE3MiAwIDhDMCAxMi40MTgzIDMuNTgxNzIgMTYgOCAxNlpNNi44NzUgNS4yNVYzSDkuMTI1VjUuMjVINi44NzVaTTYuODc1IDEzLjYyNVY2Ljg3NUg5LjEyNVYxMy42MjVINi44NzVaXCIgZmlsbD1cIndoaXRlXCIgZmlsbE9wYWNpdHk9XCIwLjQ4XCIgLz48L3N2Zz4sXG4gICAgY29weTogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+IDxzdmcgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgey4uLmdldFNpemUoMjAsIDIwLCByYXRpbyl9PjxwYXRoIGQ9XCJNMTYgMTNWNEg4TTQgMTdIMTIuNlY3SDRWMTdaXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIxLjRcIi8+PC9zdmc+LFxuICAgIHR3aXR0ZXI6ICh7IHJhdGlvLCAuLi5wcm9wcyB9KSA9PiA8c3ZnIHsuLi5kZWZhdWx0UHJvcHN9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAyMCAyMFwiIHsuLi5nZXRTaXplKDIwLCAyMCwgcmF0aW8pfT48cGF0aCBkPVwiTTE5IDQuNzc1NzdDMTguMzMwNiA1LjA3NjkyIDE3LjYxNzQgNS4yNzY1NCAxNi44NzM3IDUuMzczNDZDMTcuNjM4OCA0LjkwNSAxOC4yMjI2IDQuMTY4ODUgMTguNDk3MSAzLjI4MTU0QzE3Ljc4MzkgMy43MTc2OSAxNi45OTY0IDQuMDI1NzcgMTYuMTU3MSA0LjE5NzY5QzE1LjQ3OTkgMy40NTgwOCAxNC41MTQ2IDMgMTMuNDYxNiAzQzExLjQxODYgMyA5Ljc3Mzg3IDQuNzAwNzcgOS43NzM4NyA2Ljc4NTc3QzkuNzczODcgNy4wODU3NyA5Ljc5ODYyIDcuMzc0MjMgOS44NTkzOCA3LjY0ODg1QzYuNzkxNSA3LjQ5NTM4IDQuMDc2ODcgNS45ODczMSAyLjI1MzI1IDMuNjlDMS45MzQ4NyA0LjI1NjU0IDEuNzQ4MTMgNC45MDUgMS43NDgxMyA1LjYwMzA4QzEuNzQ4MTMgNi45MTM4NSAyLjQwNjI1IDguMDc1NzcgMy4zODcyNSA4Ljc0ODQ2QzIuNzk0MzcgOC43MzY5MiAyLjIxMjc1IDguNTYwMzggMS43MiA4LjI4MjMxQzEuNzIgOC4yOTM4NSAxLjcyIDguMzA4ODUgMS43MiA4LjMyMzg1QzEuNzIgMTAuMTYzMSAyLjk5OTEyIDExLjY5MDggNC42NzY1IDEyLjA0MjdDNC4zNzYxMiAxMi4xMjY5IDQuMDQ4NzUgMTIuMTY3MyAzLjcwOSAxMi4xNjczQzMuNDcyNzUgMTIuMTY3MyAzLjIzNDI1IDEyLjE1MzUgMy4wMTAzOCAxMi4xMDI3QzMuNDg4NSAxMy42MDE1IDQuODQ1MjUgMTQuNzAzNSA2LjQ1ODUgMTQuNzM5MkM1LjIwMyAxNS43NDY1IDMuNjA4ODggMTYuMzUzNSAxLjg4MzEzIDE2LjM1MzVDMS41ODA1IDE2LjM1MzUgMS4yOTAyNSAxNi4zMzk2IDEgMTYuMzAxNUMyLjYzNDYyIDE3LjM4MjcgNC41NzE4OCAxOCA2LjY2MSAxOEMxMy40NTE1IDE4IDE3LjE2NCAxMi4yMzA4IDE3LjE2NCA3LjIzQzE3LjE2NCA3LjA2MjY5IDE3LjE1ODQgNi45MDExNSAxNy4xNTA1IDYuNzQwNzdDMTcuODgyOSA2LjIwNzY5IDE4LjQ5ODIgNS41NDE5MiAxOSA0Ljc3NTc3WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PC9zdmc+LFxuICAgIGdpdGh1YjogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+IDxzdmcgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgey4uLmdldFNpemUoMjAsIDIwLCByYXRpbyl9PjxwYXRoIGQ9XCJNMTAgMUM1LjAyNzUgMSAxIDUuMTMyMTEgMSAxMC4yMjg0QzEgMTQuMzA2NSAzLjU3ODUgMTcuNzY0OCA3LjE1Mzc1IDE4Ljk4NDFDNy42MDM3NSAxOS4wNzA5IDcuNzY4NzUgMTguNzg1MyA3Ljc2ODc1IDE4LjU0MDNDNy43Njg3NSAxOC4zMjEyIDcuNzYxMjUgMTcuNzQwNSA3Ljc1NzUgMTYuOTcxMkM1LjI1NCAxNy41Mjc3IDQuNzI2IDE1LjczMzIgNC43MjYgMTUuNzMzMkM0LjMxNjUgMTQuNjY4MSAzLjcyNDc1IDE0LjM4MzIgMy43MjQ3NSAxNC4zODMyQzIuOTA5NSAxMy44MTExIDMuNzg3NzUgMTMuODIyOSAzLjc4Nzc1IDEzLjgyMjlDNC42OTE1IDEzLjg4NyA1LjE2NjI1IDE0Ljc3MzcgNS4xNjYyNSAxNC43NzM3QzUuOTY4NzUgMTYuMTg0NyA3LjI3MyAxNS43NzcgNy43ODc1IDE1LjU0MTRDNy44Njg1IDE0Ljk0NDMgOC4xMDAyNSAxNC41MzgxIDguMzU3NSAxNC4zMDczQzYuMzU4NzUgMTQuMDc2NCA0LjI1OCAxMy4yODI5IDQuMjU4IDkuNzQ3MDlDNC4yNTggOC43Mzk4OCA0LjYwNjc1IDcuOTE2NTkgNS4xODQyNSA3LjI3MDk1QzUuMDgzIDcuMDM3NzQgNC43NzkyNSA2LjA5OTQgNS4yNjMgNC44Mjg0NkM1LjI2MyA0LjgyODQ2IDYuMDE2NzUgNC41ODExNiA3LjczOCA1Ljc3NDYyQzguNDU4IDUuNTY5NTggOS4yMjMgNS40Njc4NSA5Ljk4OCA1LjQ2MzE1QzEwLjc1MyA1LjQ2Nzg1IDExLjUxOCA1LjU2OTU4IDEyLjIzOCA1Ljc3NDYyQzEzLjk0OCA0LjU4MTE2IDE0LjcwMTcgNC44Mjg0NiAxNC43MDE3IDQuODI4NDZDMTUuMTg1NSA2LjA5OTQgMTQuODgxOCA3LjAzNzc0IDE0Ljc5MTcgNy4yNzA5NUMxNS4zNjU1IDcuOTE2NTkgMTUuNzE0MiA4LjczOTg4IDE1LjcxNDIgOS43NDcwOUMxNS43MTQyIDEzLjI5MjMgMTMuNjEwNSAxNC4wNzI1IDExLjYwOCAxNC4yOTk1QzExLjkyMyAxNC41NzY1IDEyLjIxNTUgMTUuMTQyMyAxMi4yMTU1IDE2LjAwNzFDMTIuMjE1NSAxNy4yNDIgMTIuMjA0MyAxOC4yMzQ0IDEyLjIwNDMgMTguNTM0MUMxMi4yMDQzIDE4Ljc3NTkgMTIuMzYxNyAxOS4wNjQ3IDEyLjgyMyAxOC45NzIzQzE2LjQyMzcgMTcuNzYwOSAxOSAxNC4zMDAyIDE5IDEwLjIyODRDMTkgNS4xMzIxMSAxNC45NzAzIDEgMTAgMVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPixcbiAgICBtZWRpdW06ICh7IHJhdGlvLCAuLi5wcm9wcyB9KSA9PiA8c3ZnIHsuLi5kZWZhdWx0UHJvcHN9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAyMCAyMFwiIHsuLi5nZXRTaXplKDIwLCAyMCwgcmF0aW8pfT48cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM5NTMgOS42OTc2N0MxMS4zOTUzIDEyLjg0NDQgOC44NDQ0MSAxNS4zOTUzIDUuNjk3NjcgMTUuMzk1M0MyLjU1MDk0IDE1LjM5NTMgMCAxMi44NDQ0IDAgOS42OTc2N0MwIDYuNTUwOTQgMi41NTA5NCA0IDUuNjk3NjcgNEM4Ljg0NDQxIDQgMTEuMzk1MyA2LjU1MDk0IDExLjM5NTMgOS42OTc2N1pNMTcuNDQxOSA5LjY5NzY3QzE3LjQ0MTkgMTIuNzE2IDE2LjE5MjQgMTUuMTYyOCAxNC42NTEyIDE1LjE2MjhDMTMuMTA5OSAxNS4xNjI4IDExLjg2MDUgMTIuNzE2IDExLjg2MDUgOS42OTc2N0MxMS44NjA1IDYuNjc5MzcgMTMuMTA5OSA0LjIzMjU2IDE0LjY1MTIgNC4yMzI1NkMxNi4xOTI0IDQuMjMyNTYgMTcuNDQxOSA2LjY3OTM3IDE3LjQ0MTkgOS42OTc2N1pNMTguOTUzNSAxNC40NjUxQzE5LjUzMTUgMTQuNDY1MSAyMCAxMi4yNzg2IDIwIDkuNTgxNEMyMCA2Ljg4NDE5IDE5LjUzMTUgNC42OTc2NyAxOC45NTM1IDQuNjk3NjdDMTguMzc1NSA0LjY5NzY3IDE3LjkwNyA2Ljg4NDE5IDE3LjkwNyA5LjU4MTRDMTcuOTA3IDEyLjI3ODYgMTguMzc1NSAxNC40NjUxIDE4Ljk1MzUgMTQuNDY1MVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPixcbiAgICB0ZWxlZ3JhbTogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+IDxzdmcgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgey4uLmdldFNpemUoMjAsIDIwLCByYXRpbyl9PjxwYXRoIGQ9XCJNMy4wOTk5MiA5LjAyNjk3QzcuMzk0ODcgNy4wNTEyNiAxMC4yNTg5IDUuNzQ4NzUgMTEuNjkxOSA1LjExOTQ0QzE1Ljc4MzQgMy4zMjI2NCAxNi42MzM1IDMuMDEwNTIgMTcuMTg3NyAzLjAwMDFDMTcuMzA5NSAyLjk5Nzk0IDE3LjU4MiAzLjAyOTgzIDE3Ljc1ODYgMy4xODEwNkMxNy45MDc2IDMuMzA4NzYgMTcuOTQ4NiAzLjQ4MTI1IDE3Ljk2ODMgMy42MDIzMkMxNy45ODc5IDMuNzIzMzkgMTguMDEyMyAzLjk5OTE5IDE3Ljk5MjkgNC4yMTQ2OUMxNy43NzEyIDYuNjc0MzcgMTYuODExOCAxMi42NDM0IDE2LjMyMzcgMTUuMzk4M0MxNi4xMTcyIDE2LjU2NCAxNS43MTA1IDE2Ljk1NDggMTUuMzE2OCAxNi45OTMxQzE0LjQ2MTMgMTcuMDc2MiAxMy44MTE2IDE2LjM5NjEgMTIuOTgyOSAxNS44MjI2QzExLjY4NjIgMTQuOTI1MSAxMC45NTM3IDE0LjM2NjQgOS42OTUwMyAxMy40OTA3QzguMjQwNDIgMTIuNDc4NiA5LjE4MzM4IDExLjkyMjQgMTAuMDEyNCAxMS4wMTMzQzEwLjIyOTMgMTAuNzc1NCAxMy45OTkgNy4xNTUxNiAxNC4wNzE5IDYuODI2NzVDMTQuMDgxMSA2Ljc4NTY4IDE0LjA4OTUgNi42MzI1OCAxNC4wMDM0IDYuNTUxNzNDMTMuOTE3MiA2LjQ3MDg5IDEzLjc5MDEgNi40OTg1MyAxMy42OTgzIDYuNTIwNTJDMTMuNTY4MyA2LjU1MTY5IDExLjQ5NjggNy45OTczIDcuNDgzODkgMTAuODU3M0M2Ljg5NTkxIDExLjI4MzYgNi4zNjMzMyAxMS40OTEzIDUuODg2MTYgMTEuNDgwNUM1LjM2MDEyIDExLjQ2ODUgNC4zNDgyMiAxMS4xNjY0IDMuNTk1OTggMTAuOTA4M0MyLjY3MzMzIDEwLjU5MTYgMS45NDAwMiAxMC40MjQyIDIuMDAzODggOS44ODYzOEMyLjAzNzE0IDkuNjA2MjcgMi40MDI0OCA5LjMxOTggMy4wOTk5MiA5LjAyNjk3WlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+PC9zdmc+LFxuICAgIGhlYXJ0U2VsZWN0ZWQ6ICh7IHJhdGlvLCAuLi5wcm9wcyB9KSA9PiA8c3ZnIHsuLi5kZWZhdWx0UHJvcHN9IHsuLi5wcm9wc30gdmlld0JveD1cIjAgMCAxNiAxNlwiIHsuLi5nZXRTaXplKDE2LCAxNiwgcmF0aW8pfT5cbiAgICA8cGF0aCBkPVwiTTcuOTk5OTQgMTZMNy42NTU0NCAxNS43NUM2LjAxNzkzIDE0LjU1OTYgMy45NDU5NyAxMy4yMTQyIDIuNDExNDIgMTEuMjM2N0MwLjc5NDE5NiA5LjE1MzMzIDAuMDE4MzEwOCA3LjAxMzc1IDAuMDM4MjE1MSA0LjY5NUMwLjA2MjMyOTkgMi4xMDU4MyAxLjk2OTcgMCA0LjI5MDA4IDBDNi4xMzE2MSAwIDcuMzU2MTEgMS4xNjY2NyA3Ljk5OTk0IDIuMDA4NzVDOC42NDM3NyAxLjE2NjY3IDkuODY4MjYgMCAxMS43MDk4IDBDMTQuMDMwMiAwIDE1LjkzNzUgMi4xMDU4MyAxNS45NjE3IDQuNjkzNzVDMTUuOTgzMSA3LjAxMzc1IDE1LjIwNzIgOS4xNTIwOCAxMy41ODg1IDExLjIzNTRDMTIuMDUzOSAxMy4yMTQyIDkuOTgxOTUgMTQuNTU5NiA4LjM0NDQzIDE1Ljc1TDcuOTk5OTQgMTZaXCIgZmlsbD1cIiNFQzZENUZcIi8+PC9zdmc+LFxuICAgIGhlYXJ0VW5zZWxlY3RlZDogKHsgcmF0aW8sIC4uLnByb3BzIH0pID0+PHN2ZyAgey4uLmRlZmF1bHRQcm9wc30gey4uLnByb3BzfSB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLmdldFNpemUoMTYsIDE2LCByYXRpbyl9PlxuICAgIDxwYXRoIGQ9XCJNNy45OTk5NCAxNkw3LjY1NTQ0IDE1Ljc1QzYuMDE3OTMgMTQuNTU5NiAzLjk0NTk3IDEzLjIxNDIgMi40MTE0MiAxMS4yMzY3QzAuNzk0MTk2IDkuMTUzMzMgMC4wMTgzMTA4IDcuMDEzNzUgMC4wMzgyMTUxIDQuNjk1QzAuMDYyMzI5OSAyLjEwNTgzIDEuOTY5NyAwIDQuMjkwMDggMEM2LjEzMTYxIDAgNy4zNTYxMSAxLjE2NjY3IDcuOTk5OTQgMi4wMDg3NUM4LjY0Mzc3IDEuMTY2NjcgOS44NjgyNiAwIDExLjcwOTggMEMxNC4wMzAyIDAgMTUuOTM3NSAyLjEwNTgzIDE1Ljk2MTcgNC42OTM3NUMxNS45ODMxIDcuMDEzNzUgMTUuMjA3MiA5LjE1MjA4IDEzLjU4ODUgMTEuMjM1NEMxMi4wNTM5IDEzLjIxNDIgOS45ODE5NSAxNC41NTk2IDguMzQ0NDMgMTUuNzVMNy45OTk5NCAxNlpcIiBmaWxsPVwiI0E5QkJDOVwiLz48L3N2Zz5cbiAgICAsXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsaWJyYXJ5XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVCaWQsIFJlZHVjZUNhdGVnb3J5IH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvdG9rZW4nXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9JY29uJ1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllc2J5ZXZlbnRpZCwgZXZlbnRnZXRieWlkIH0gZnJvbSAnLi4vLi4vLi4vcGFnZXMvRXZlbnRzL2V2ZW50J1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlkTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdFRvQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0cmVjaWQsXG5cdFJlYWxFdmVudElkLFxuXHRIaWdoZXN0YmlkLFxuXHR3YWxsZXRUeXBlLFxuXHRjb250cmFjdCxcblx0Y29udHJhY3RDZWxvLFxuXHRzZW5kZXJBZGRyZXNzLFxuXHRldmVudElkLFxufSkge1xuXHR2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuXHR2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cdGNvbnN0IFtBbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXHRjb25zdCBbRXZlbnRHb2FsLCBzZXRFdmVudEdvYWxdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuXG5cdGNvbnN0IFthbGxTZWxlY3RlZCwgc2V0QWxsU2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbb3RoZXJTZWxlY3RlZCwgc2V0T3RoZXJTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKFtdKTtcblxuXHRjb25zdCBbb3RoZXJDYXRlZ29yeSwgc2V0T3RoZXJDYXRlZ29yeV0gPSB1c2VTdGF0ZSgtMSk7XG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoKSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRhbGVydEVMTS5zdHlsZSA9ICdjb250ZW50cyc7XG5cdFx0c2V0QWxlcnQoYEFtb3VudCBjYW5ub3QgYmUgdW5kZXIgJHtIaWdoZXN0YmlkfSBORUFSYClcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBmZXRjaENhdGVnb3JpZXMoKSB7XG5cdFx0aWYgKGNhdGVnb3JpZXMubGVuZ3RoID09IDApIHtcblx0XHRcdHZhciBuZWFyUHJpY2UgPSAwO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuXHRcdFx0XHRsZXQgb3B0aW9ucyA9IHtcblx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0YXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0XHRcdC50aGVuKGpzb24gPT4gbmVhclByaWNlID0ganNvbilcblx0XHRcdFx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcblx0XHRcdFx0bmVhclByaWNlID0gbmVhclByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG5cdFx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0XHR2YXIgbmVhclByaWNlID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKEV2ZW50R29hbCA9PSAwKSB7XG5cdFx0XHRcdGF3YWl0IGJhc2UoJ2V2ZW50cycpLmZpbmQoZXZlbnRJZCwgZnVuY3Rpb24gKGVyciwgcmVjb3JkKSB7XG5cdFx0XHRcdFx0c2V0RXZlbnRHb2FsKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGlmIChSZWFsRXZlbnRJZCAhPSAwKSB7XG5cdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHRiYXNlKCdldmVudGNhdGVnb3JpZXMnKS5zZWxlY3Qoe1xuXHRcdFx0XHRcdFx0ZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICR7UmVhbEV2ZW50SWR9KWAsXG5cdFx0XHRcdFx0XHR2aWV3OiBcIkdyaWQgdmlld1wiXG5cdFx0XHRcdFx0fSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG5cdFx0XHRcdFx0XHR2YXIgc3Vtb2ZtYWluID0gMDtcblx0XHRcdFx0XHRcdHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG5cdFx0XHRcdFx0XHRcdGNhdGVnb3JpZXMucHVzaChyZWNvcmQuZmllbGRzKTtcblx0XHRcdFx0XHRcdFx0c3Vtb2ZtYWluICs9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIE51bWJlcihyZWNvcmQuZ2V0KFwiYW1vdW50XCIpKSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHNldE90aGVyQ2F0ZWdvcnkocGFyc2VJbnQoRXZlbnRHb2FsICogbmVhclByaWNlKSAtIHN1bW9mbWFpbik7XG5cblx0XHRcdFx0XHRcdC8vIHNldENhdGVnb3JpZXMocmVjb3Jkc1swXS5maWVsZHMpO1xuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7IH1cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaENhdGVnb3JpZXMoKTtcblx0fSwgW2NhdGVnb3JpZXNdKTtcblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXHRcdGlmIChOdW1iZXIoQW1vdW50KSA8IE51bWJlcihIaWdoZXN0YmlkKSkge1xuXHRcdFx0YWN0aXZhdGVXYXJuaW5nTW9kYWwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHdhbGxldFR5cGUgPT0gXCJDRUxPXCIpIHtcblx0XHRcdGF3YWl0IHRvYXN0LnByb21pc2UoYmlkTkZUYnlDRUxPLCB7XG5cdFx0XHRcdHBlbmRpbmc6IGBCaWRkaW5nLi4uYCxcblx0XHRcdFx0ZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuXHRcdFx0XHRzdWNjZXNzOiBgU3VjY2VzcyEhIWBcblx0XHRcdH0pO1xuXG5cdFx0fSBlbHNlIGlmICh3YWxsZXRUeXBlID09IFwiTkVBUlwiKSB7XG5cdFx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKGJpZE5GVGJ5TkVBUiwge1xuXHRcdFx0XHRwZW5kaW5nOiBgQmlkZGluZy4uLmAsXG5cdFx0XHRcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHRcdFx0c3VjY2VzczogYFN1Y2Nlc3MhISFgXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0YXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ09uQWlyVGFibGUsIHtcblx0XHRcdHBlbmRpbmc6IGBVcGRhdGluZyBvbiBBaXJ0YWJsZS4uLmAsXG5cdFx0XHRlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG5cdFx0XHRzdWNjZXNzOiBgVXBkYXRlZCBvbiBBaXJ0YWJsZWBcblx0XHR9KTtcblxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nT25BaXJUYWJsZSgpIHtcblx0XHR2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuXHRcdHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cdFx0bGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblx0XHRhd2FpdCBiYXNlKCd0b2tlbmJpZCcpLmNyZWF0ZShbXG5cdFx0XHR7XG5cdFx0XHRcdFwiZmllbGRzXCI6IHtcblx0XHRcdFx0XHRcIlRva2VuaWRcIjogdG9rZW5JZCxcblx0XHRcdFx0XHRcIkRhdGVcIjogY3VycmVudERhdGUsXG5cdFx0XHRcdFx0XCJVc2VyTmFtZVwiOiB3YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XCJCaWRwcmljZVwiOiBBbW91bnRcblx0XHRcdFx0fVxuXHRcdFx0fV0pO1xuXHRcdHRvYXN0LnN1Y2Nlc3MoXCJCaWQgY3JlYXRlZCBvbiBBaXJ0YWJsZVwiKTtcblx0XHRhd2FpdCBVcGRhdGVBaXJ0YWJsZSgpO1xuXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gVXBkYXRlQWlydGFibGUoKSB7XG5cdFx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0XHR2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cdFx0YXdhaXQgYmFzZSgnbmZ0cycpLnVwZGF0ZShbXG5cdFx0XHR7XG5cdFx0XHRcdFwiaWRcIjogcmVjaWQsXG5cdFx0XHRcdFwiZmllbGRzXCI6IHtcblx0XHRcdFx0XHRcInByaWNlXCI6IEFtb3VudFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XSk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0YXdhaXQgYmFzZSgnZXZlbnRjYXRlZ29yaWVzJykuc2VsZWN0KHtcblx0XHRcdFx0ZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtzZWxlY3RlZENhdGVnb3J5W2ldfScpYCxcblx0XHRcdFx0c29ydDogW3sgZmllbGQ6IFwicHJpY2VcIiwgZGlyZWN0aW9uOiBcImRlc2NcIiB9XSxcblx0XHRcdFx0dmlldzogXCJHcmlkIHZpZXdcIlxuXHRcdFx0fSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG5cdFx0XHRcdC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cblxuXHRcdFx0XHRhd2FpdCByZWNvcmRzLmZvckVhY2goYXN5bmMgZnVuY3Rpb24gKHJlY29yZCkge1xuXHRcdFx0XHRcdHZhciBldmVudGNhdGVnb3J5SUQgPSByZWNvcmQuaWQ7XG5cdFx0XHRcdFx0Y29uc3QgcGVycGVpY2UgPSBwYXJzZUludChOdW1iZXIocmVjb3JkLmdldCgncHJpY2UnKSkgLyBOdW1iZXIocmVjb3JkLmdldCgnYW1vdW50JykpKTtcblx0XHRcdFx0XHR2YXIgdXBkYXRlZHByaWNlID0gTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSkgLSBwZXJwZWljZTtcblx0XHRcdFx0XHR2YXIgVXBkYXRlZGFtb3VudCA9IE51bWJlcihyZWNvcmQuZ2V0KCdhbW91bnQnKSkgLSAxO1xuXHRcdFx0XHRcdGF3YWl0IGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLnVwZGF0ZShbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogZXZlbnRjYXRlZ29yeUlELFxuXHRcdFx0XHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XHRcdFx0XCJwcmljZVwiOiB1cGRhdGVkcHJpY2UudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcdFx0XHRcImFtb3VudFwiOiBVcGRhdGVkYW1vdW50LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlY29yZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSwgZnVuY3Rpb24gZG9uZShlcnIpIHtcblx0XHRcdFx0aWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuXHRcdFx0fSk7XG5cdFx0XHQvL1x0YXdhaXQgUmVkdWNlQ2F0ZWdvcnkoc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0fVxuXG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlRieU5FQVIoKSB7XG5cblx0XHR2YXIgYnV0dG9uUHJvcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuIGJ0bi1wcmltYXJ5XCIpWzBdO1xuXHRcdGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcblx0XHRcdGJ1dHRvblByb3BzLmlubmVyVGV4dCA9IFwiQ29ubmVjdCB0byBORUFSIHdhbGxldFwiXG5cdFx0XHRhd2FpdCB0b2FzdC53YXJuKFwiTm90IGNvbm5lY3RlZCB3aXRoIE5FQVIgd2FsbGV0ISBDb25uZWN0aW5nLi4uXCIpO1xuXHRcdFx0YXdhaXQgd2luZG93LndhbGxldEFjY291bnQucmVxdWVzdFNpZ25Jbihcblx0XHRcdFx0d2luZG93Lm5lYXJDb25maWcuY29udHJhY3ROYW1lLFxuXHRcdFx0XHQnRGVtZXRlcicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBXZSBjYWxsIHNheSBIaSBhbmQgdGhlbiB1cGRhdGUgd2hvIHNhaWQgSGkgbGFzdC5cblx0XHQvLyB3aW5kb3cuY29udHJhY3Quc2F5SGkoKS50aGVuKHVwZGF0ZVdob1NhaWRIaSk7XG5cdFx0Y29uc3QgY29uZmlnID0ge1xuXHRcdFx0bmV0d29ya0lkOiBcInRlc3RuZXRcIixcblx0XHRcdGtleVN0b3JlOiBuZXcgbmVhckFQSS5rZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCksXG5cdFx0XHRub2RlVXJsOiBcImh0dHBzOi8vcnBjLnRlc3RuZXQubmVhci5vcmdcIixcblx0XHRcdHdhbGxldFVybDogXCJodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0XHRoZWxwZXJVcmw6IFwiaHR0cHM6Ly9oZWxwZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdFx0ZXhwbG9yZXJVcmw6IFwiaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0fTtcblx0XHQvLyBzZW5kcyBORUFSIHRva2Vuc1xuXHRcdGNvbnN0IG5lYXIgPSBhd2FpdCBuZWFyQVBJLmNvbm5lY3QoY29uZmlnKTtcblx0XHRjb25zdCBhY2NvdW50ID0gYXdhaXQgbmVhci5hY2NvdW50KHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkpO1xuXHRcdGNvbnN0IGFtb3VudEluWW9jdG8gPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblxuXHRcdGF3YWl0IGFjY291bnQuc2VuZE1vbmV5KFxuXHRcdFx0VG9BZGRyZXNzLCAvLyByZWNlaXZlciBhY2NvdW50XG5cdFx0XHRhbW91bnRJbllvY3RvIC8vIGFtb3VudCBpbiB5b2N0b05FQVJcblx0XHQpLmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yOlwiLCBlcnJvcik7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSlcblx0fVxuXG5cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUYnlDRUxPKCkge1xuXHRcdHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG5cdFx0aWYgKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCAmJiB3aW5kb3cuZXRoZXJldW0ubmV0d29ya1ZlcnNpb24gPT0gNDQ3ODcgJiYgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIikgIT0gXCJcIikge1xuXHRcdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdFx0XCJUb2tlbmlkXCI6IHRva2VuSWQsXG5cdFx0XHRcdFwiQmlkcHJpY2VcIjogQW1vdW50XG5cdFx0XHR9XG5cdFxuXHRcdFx0bGV0IENFTE9pbkZ1bGwgPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblx0XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdENlbG8uY3JlYXRlQmlkKHRva2VuSWQsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpLCB7XG5cdFx0XHRcdGZyb206IHNlbmRlckFkZHJlc3MsXG5cdFx0XHRcdGdhc1ByaWNlOiAxMDAwMDAwMDAwMDAwLCB2YWx1ZTogQ0VMT2luRnVsbFxuXHRcdFx0fSk7XG5cdFx0XHR0cnl7XG5jb25zb2xlLmxvZyhyZXN1bHQpO1x0XHRcblx0XHRcdH1jYXRjaCAoZSl7XG5cdFx0XHRcdHRvYXN0LmVycm9yKFwiSW5zdWZmaWNpZW50IGZ1bmRzXCIpXG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9ZWxzZXtcblx0XHRcdGJ1dHRvblByb3BzLmlubmVyVGV4dCA9IFwiQ29ubmVjdCB0byBDRUxPIHdhbGxldFwiXG5cdFx0XHRhd2FpdCB0b2FzdC53YXJuKFwiTm90IGNvbm5lY3RlZCB3aXRoIENFTE8gd2FsbGV0ISBDb25uZWN0aW5nLi4uXCIpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2xvZ2luWy9kb25hdGlvbl1gO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGNvbm5lY3RlZCB3aXRoIENFTE8gd2FsbGV0IVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFxuXHR9XG5cblxuXG5cdGNvbnN0IHNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5X2lkKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJjYXRlZ29yeV9pZFwiKTtcblx0XHRjb25zb2xlLmxvZyhjYXRlZ29yeV9pZCk7XG5cdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pO1xuXHRcdH1cblx0XHR0ZW1wX2Fyci5wdXNoKGNhdGVnb3J5X2lkKTtcblx0XHRjb25zb2xlLmxvZyh0ZW1wX2Fycik7XG5cblx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0fVxuXHRjb25zdCB1bnNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5X2lkKSA9PiB7XG5cdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoc2VsZWN0ZWRDYXRlZ29yeVtpXSAhPSBjYXRlZ29yeV9pZClcblx0XHRcdFx0dGVtcF9hcnIucHVzaChzZWxlY3RlZENhdGVnb3J5W2ldKTtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2codGVtcF9hcnIpO1xuXHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHR9XG5cblx0Y29uc3Qgc2VsZWN0QWxsQ2F0ZWdvcnkgPSAoKSA9PiB7XG5cdFx0aWYgKGFsbFNlbGVjdGVkKSB7XG5cdFx0XHRzZXRBbGxTZWxlY3RlZChmYWxzZSk7XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KFtdKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRzZXRBbGxTZWxlY3RlZCh0cnVlKTtcblx0XHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRlbXBfYXJyLnB1c2goY2F0ZWdvcmllc1tpXS5pZClcblx0XHRcdH1cblx0XHRcdHRlbXBfYXJyLnB1c2goLTEpO1xuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdFx0fVxuXG5cdH1cblx0Y29uc3Qgb3RoZXJTZWxlY3QgPSAoKSA9PiB7XG5cdFx0aWYgKG90aGVyU2VsZWN0ZWQpIHtcblx0XHRcdHNldE90aGVyU2VsZWN0ZWQoZmFsc2UpO1xuXHRcdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHNlbGVjdGVkQ2F0ZWdvcnlbaV0gIT0gLTEpXG5cdFx0XHRcdFx0dGVtcF9hcnIucHVzaChzZWxlY3RlZENhdGVnb3J5W2ldKVxuXHRcdFx0fVxuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldE90aGVyU2VsZWN0ZWQodHJ1ZSk7XG5cdFx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pXG5cdFx0XHR9XG5cdFx0XHR0ZW1wX2Fyci5wdXNoKC0xKTtcblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0c2hvdz17c2hvd31cblx0XHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRcdG9uU2hvdz17ZmV0Y2hDYXRlZ29yaWVzfVxuXHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRcdGNlbnRlcmVkXG5cdFx0XHQ+XG5cdFx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPSdhbGVydCcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuXHRcdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4ge3dhbGxldFR5cGV9PC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0XHR7QW1vdW50SW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0Q2F0ZWdvcnlBbGwnPlxuXHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5DaG9vc2Ugd2hlcmUgeW91IHdhbnQgdG8gZ2l2ZSBzdXBwb3J0PC9oND5cblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiNXB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgYmFja2dyb3VuZDogXCJiaXNxdWVcIiwgaGVpZ2h0OiBcIjQwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IG9uQ2xpY2s9eygpID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdEFsbENhdGVnb3J5KCk7XG5cdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBhbGlnblNlbGY6IFwiY2VudGVyXCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+U3VwcG9ydCBpbiBnZW5lcmFsIDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0e2FsbFNlbGVjdGVkID9cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiMTBweFwiLCB0b3A6IFwiLTdweFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0U2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+IDpcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiMTBweFwiLCB0b3A6IFwiLTdweFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0VW5zZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj59XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2VsZWN0Q2F0ZWdvcnknIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiLTEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiLTEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0KHNlbGVjdGVkQ2F0ZWdvcnkuaW5kZXhPZihjYXRlZ29yeS5pZCkgIT09IC0xKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCg8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGtleT17Y2F0ZWdvcnkuaWR9IG9uQ2xpY2s9eygpID0+IHVuc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2NhdGVnb3J5LnRpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IGFzcGVjdFJhdGlvOiAnMScsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57Y2F0ZWdvcnkuYW1vdW50ICogY2F0ZWdvcnkucHJpY2V9IFVTRDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pih7Y2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRTZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCg8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGtleT17Y2F0ZWdvcnkuaWR9IG9uQ2xpY2s9eygpID0+IHNlbGVjdENhdGVnb3J5KGNhdGVnb3J5LmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiOHB4IDE1cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntjYXRlZ29yeS50aXRsZX08L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2NhdGVnb3J5LmltYWdlfSBzdHlsZT17eyBhc3BlY3RSYXRpbzogJzEnLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e2NhdGVnb3J5LmFtb3VudCAqIGNhdGVnb3J5LnByaWNlfSBVU0Q8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT4oe2NhdGVnb3J5LmFtb3VudH0gcGllY2VzKTwvaDU+XG5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFVuc2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Pilcblx0XHRcdFx0XHRcdFx0XHQpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19IG9uQ2xpY2s9eygpID0+IG90aGVyU2VsZWN0KCl9PlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdChjYXRlZ29yaWVzLmxlbmd0aCA+IDApID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0KDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19Pk90aGVyIHN1cHBvcnQ8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3RoZXJDYXRlZ29yeVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gVVNEPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoc2VsZWN0ZWRDYXRlZ29yeS5pbmRleE9mKC0xKSAhPT0gLTEpID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0U2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0VW5zZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KSA6IG51bGxcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtiaWRORlR9PlxuXHRcdFx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdFx0PC9Nb2RhbD5cblxuXHRcdDwvPlxuXHQpO1xufVxuIiwiXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB7IGJpZHNnZXRieXRva2VuaWQgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy90b2tlbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld21vZGFsU2hvdyh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0aWQsXG5cdHdhbGxldFR5cGUsXG5cdHRpdGxlXG59KSB7XG5cdGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXHRmdW5jdGlvbiBhZGRaZXJvKG51bSkge1xuXHRcdHJldHVybiBudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bTtcblx0fVxuXHRmdW5jdGlvbiBBbVBNKG51bSkge1xuXHRcdHJldHVybiBudW0gPCAxMiA/ICdBTScgOiAnUE0nO1xuXHR9XG5cdGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG5cdFx0bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuXHRcdG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcblx0fSk7XG5cblxuXHRhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGlkKSB7XG5cdFx0XHRcdGxldCBuZWFyUHJpY2UgPSAwO1xuXHRcdFx0XHQvL05FQVIgY3VycmVuY3lcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG5cdFx0XHRcdFx0Y29uc3QgY3VycmVuY3lfb3B0aW9ucyA9IHtcblx0XHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIGN1cnJlbmN5X29wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0XHRcdFx0XHQudGhlbihqc29uID0+IG5lYXJQcmljZSA9IGpzb24pXG5cdFx0XHRcdFx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcblx0XHRcdFx0XHRuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblx0XHRcdFx0fSBjYXRjaCAoZXgpIHtcblx0XHRcdFx0XHRuZWFyUHJpY2UgPSAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXdhaXQgYmFzZSgndG9rZW5iaWQnKS5zZWxlY3Qoe1xuXHRcdFx0XHRcdGZpbHRlckJ5Rm9ybXVsYTogYCh7VG9rZW5pZH0gPSAnJHtpZH0nKWAsXG5cdFx0XHRcdFx0Ly8gU2VsZWN0aW5nIHRoZSBmaXJzdCAxMCByZWNvcmRzIGluIEdyaWQgdmlldzpcblx0XHRcdFx0XHRtYXhSZWNvcmRzOiAxMCxcblx0XHRcdFx0XHRzb3J0OiBbeyBmaWVsZDogXCJCaWRwcmljZVwiLCBkaXJlY3Rpb246IFwiZGVzY1wiIH1dLFxuXHRcdFx0XHRcdHZpZXc6IFwiR3JpZCB2aWV3XCJcblx0XHRcdFx0fSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuXHRcdFx0XHRcdHZhciBhcnIgPSBbXTtcblx0XHRcdFx0XHRhd2FpdCByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuXHRcdFx0XHRcdFx0dmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xuXHRcdFx0XHRcdFx0Z29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcIkJpZHByaWNlXCIpKSAqIG5lYXJQcmljZSk7XG5cdFx0XHRcdFx0XHRjb25zdCBEYXRldGltZSA9IG5ldyBEYXRlKHJlY29yZC5nZXQoXCJEYXRlXCIpKTtcblx0XHRcdFx0XHRcdGxldCBjdXJyZW50ZGF0ZSA9IGAke2FkZFplcm8oRGF0ZXRpbWUuZ2V0RGF0ZSgpKX0vJHthZGRaZXJvKERhdGV0aW1lLmdldE1vbnRoKCkgKyAxKX0vJHthZGRaZXJvKERhdGV0aW1lLmdldEZ1bGxZZWFyKCkpfSAke2FkZFplcm8oRGF0ZXRpbWUuZ2V0SG91cnMoKSl9OiR7YWRkWmVybyhEYXRldGltZS5nZXRNaW51dGVzKCkpfToke2FkZFplcm8oRGF0ZXRpbWUuZ2V0U2Vjb25kcygpKX0gJHtBbVBNKERhdGV0aW1lLmdldEhvdXJzKCkpfWBcblxuXHRcdFx0XHRcdFx0YXJyLnB1c2goe1xuXHRcdFx0XHRcdFx0XHREYXRlOiBjdXJyZW50ZGF0ZSxcblx0XHRcdFx0XHRcdFx0VXNlck5hbWU6IHJlY29yZC5nZXQoXCJVc2VyTmFtZVwiKSxcblx0XHRcdFx0XHRcdFx0YmlkcHJpY2V1c2Q6IGZvcm1hdHRlci5mb3JtYXQoZ29hbFByaWNlMnVzZCksXG5cdFx0XHRcdFx0XHRcdEJpZHByaWNlOiByZWNvcmQuZ2V0KFwiQmlkcHJpY2VcIilcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0c2V0TGlzdChhcnIpO1xuXHRcdFx0XHRcdC8vIGZldGNoTmV4dFBhZ2UoKTtcblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nVmlld1wiKSlcblx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1ZpZXdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmd0YWJsZVwiKSkge1xuXHRcdFx0XHRcdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmd0YWJsZVwiKTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUgPSBcImRpc3BsYXk6YmxvY2tcIjtcblx0XHRcdFx0XHRcdChlbGVtZW50KS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlwiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuXG5cdFx0XHRcdH0pO1xuXG5cblxuXG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoQ29udHJhY3REYXRhKCk7XG5cblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRvblNob3c9e2ZldGNoQ29udHJhY3REYXRhfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0c2l6ZT1cInhsXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRWaWV3IEJpZCAtIHt0aXRsZX1cblx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PGRpdiBpZD0nTG9hZGluZ1ZpZXcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG5cdFx0XHRcdFx0PGgxPkxvYWRpbmcuLi48L2gxPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD0nTG9hZGluZ3RhYmxlJyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlSGVhZGVyJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZUhlYWRlckNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZWhlYWRlckRhdGVDb250YWluZXInID5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiaGVhZGVyXCI+RGF0ZTwvaDQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYmxlaGVhZGVyVXNlckNvbnRhaW5lclwiID5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiaGVhZGVyXCI+VXNlciBOYW1lPC9oND5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGVoZWFkZXJCaWRDb250YWluZXJcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImhlYWRlclwiPkJpZDwvaDQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L2Rpdj4ge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9J3RhYmxlRnVsbFJvd0NvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbENvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVSb3dDZWxsRGF0ZUNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjZWxsXCI+e2xpc3RJdGVtLkRhdGV9PC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbFVzZXJDb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2VsbFwiPntsaXN0SXRlbS5Vc2VyTmFtZX08L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93Q2VsbEJpZENvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2VsbFwiPiR7bGlzdEl0ZW0uYmlkcHJpY2V1c2R9ICh7bGlzdEl0ZW0uQmlkcHJpY2V9IE5FQVIpPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PikpfVxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0PC9Nb2RhbD5cblx0KTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcbmltcG9ydCB7IGNyZWF0ZVRva2VuQVBJIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvdG9rZW4nO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCB7IFdhbGxldEFjY291bnQgfSBmcm9tICduZWFyLWFwaS1qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZExvdHRlcnlNb2RhbCh7XG4gICAgc2hvdyxcbiAgICBvbkhpZGUsXG4gICAgbmZ0aWQsXG4gICAgbmZ0cmVjaWQsXG4gICAgZXZlbnRpZCxcbn0pIHtcblxuICAgIGNvbnN0IFtwcmljZSwgcHJpY2VUaWNrZXRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnUHJpY2UgVGlja2V0J1xuICAgIH0pO1xuICAgIGNvbnN0IFtzdGFydERhdGUsIHN0YXJ0RGF0ZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ2RhdGV0aW1lLWxvY2FsJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdTdGFydCBEYXRlIExvdHRlcnkgJyxcbiAgICAgICAgaWQ6ICdzdGFydGRhdGUnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW2VuZERhdGUsIGVuZERhdGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICdkYXRldGltZS1sb2NhbCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRW5kIERhdGUgTG90dGVyeSAnLFxuICAgICAgICBpZDogJ2VuZGRhdGUnLFxuICAgIH0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gYWRkTG90dGVyeSgpIHtcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ09uQWlydGFibGUsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiQ3JlYXRpbmcgTG90dGVyeS4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJDcmVhdGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShVcGRhdGVPbkFpcnRhYmxlLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIlVwZGF0aW5nIE5GVC4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJVcGRhdGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdPbkFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeScpLmNyZWF0ZShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm5mdGlkXCI6IE51bWJlcihuZnRpZCksXG4gICAgICAgICAgICAgICAgICAgIFwiZXZlbnRpZFwiOiBldmVudGlkLFxuICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6cHJpY2UsXG4gICAgICAgICAgICAgICAgICAgIFwic3RhcnREYXRlXCI6IHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6IGVuZERhdGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZU9uQWlydGFibGUoKSB7XG5cbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykudXBkYXRlKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6bmZ0cmVjaWQsXG4gICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImxvdHRlcnlcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcblxuICAgIH1cbiAgICByZXR1cm4gKDw+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgc2hvdz17c2hvd31cbiAgICAgICAgICAgIG9uSGlkZT17b25IaWRlfVxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuICAgICAgICAgICAgc2l6ZT1cImdnXCJcbiAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgID5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgQWRkIHRvIExvdHRlcnlcbiAgICAgICAgICAgICAgICA8L01vZGFsLlRpdGxlPlxuXG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+UHJpY2UgVGlja2V0IGluIE5FQVI8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJpY2VUaWNrZXRJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlN0YXJ0IERhdGUgTG90dGVyeTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGFydERhdGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+RW5kIERhdGUgTG90dGVyeTwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbmREYXRlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgIG9uQ2xpY2s9e2FkZExvdHRlcnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBMb3R0ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgPC8+XG5cblxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVUb2tlbkFQSSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL3Rva2VuJztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5pbXBvcnQgeyBXYWxsZXRBY2NvdW50IH0gZnJvbSAnbmVhci1hcGktanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXlMb3R0ZXJ5TW9kYWwoe1xuICAgIHNob3csXG4gICAgb25IaWRlLFxuICAgIG5mdGlkLFxuICAgIG5mdHJlY2lkLFxuICAgIFRvQWRkcmVzcyxcbiAgICBwcmljZSxcbiAgICB0aWNrZXRudW1iZXJcbn0pIHtcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG5cbiAgICBjb25zdCBbUXVhbnRpdHksIGFtb3VudFRpY2tldElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnXG4gICAgfSk7XG4gICAgY29uc3QgW1RvdGFsYW1vdW50LCBzZXRUb3RhbGFtb3VudF0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VG90YWxhbW91bnQoUXVhbnRpdHkgKiBwcmljZSk7XG4gICAgfSwgW1F1YW50aXR5XSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBidXlMb3R0ZXJ5KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShCdXlpbmdMb3R0ZXJ5KFRvdGFsYW1vdW50LCBUb0FkZHJlc3MpLCB7XG4gICAgICAgICAgICAgICAgcGVuZGluZzogXCJCdXlpbmcgTG90dGVyeSBUaWNrZXQuLi5cIixcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogXCJzdWNjZXNzIVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ09uQWlydGFibGUoVG90YWxhbW91bnQsIFRvQWRkcmVzcyksIHtcbiAgICAgICAgICAgICAgICBwZW5kaW5nOiBcIlVwZGF0aW5nIExvdHRlcnkgVGlja2V0IG9uIEFpcnRhYmxlLi4uXCIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IFwiU3VjY2VzcyFcIlxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBCdXlpbmdMb3R0ZXJ5KEFtb3VudCwgVG9BZGRyZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uUHJvcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuIGJ0bi1wcmltYXJ5XCIpWzBdO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvblByb3BzLmlubmVyVGV4dCA9IFwiQ29ubmVjdCB0byBORUFSIHdhbGxldFwiXG4gICAgICAgICAgICAgICAgYXdhaXQgdG9hc3Qud2FybihcIk5vdCBjb25uZWN0ZWQgd2l0aCBORUFSIHdhbGxldCEgQ29ubmVjdGluZy4uLlwiKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cud2FsbGV0QWNjb3VudC5yZXF1ZXN0U2lnbkluKFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmVhckNvbmZpZy5jb250cmFjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdEZW1ldGVyJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG5ldHdvcmtJZDogXCJ0ZXN0bmV0XCIsXG4gICAgICAgICAgICAgICAga2V5U3RvcmU6IG5ldyBuZWFyQVBJLmtleVN0b3Jlcy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUoKSxcbiAgICAgICAgICAgICAgICBub2RlVXJsOiBcImh0dHBzOi8vcnBjLnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgICAgICAgICB3YWxsZXRVcmw6IFwiaHR0cHM6Ly93YWxsZXQudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICAgICAgICAgICAgICAgIGhlbHBlclVybDogXCJodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG4gICAgICAgICAgICAgICAgZXhwbG9yZXJVcmw6IFwiaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gc2VuZHMgTkVBUiB0b2tlbnNcbiAgICAgICAgICAgIGNvbnN0IG5lYXIgPSBhd2FpdCBuZWFyQVBJLmNvbm5lY3QoY29uZmlnKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBuZWFyLmFjY291bnQod2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKSk7XG4gICAgICAgICAgICAvL2NvbnN0IGFtb3VudEluWW9jdG8gPSBuZWFyQVBJLnV0aWxzLmZvcm1hdC5mb3JtYXROZWFyQW1vdW50KEFtb3VudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFtb3VudEluWW9jdG8gPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblxuICAgICAgICAgICAgYXdhaXQgYWNjb3VudC5zZW5kTW9uZXkoXG4gICAgICAgICAgICAgICAgVG9BZGRyZXNzLCAvLyByZWNlaXZlciBhY2NvdW50XG4gICAgICAgICAgICAgICAgYW1vdW50SW5Zb2N0byAvLyBhbW91bnQgaW4geW9jdG9ORUFSXG4gICAgICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nT25BaXJ0YWJsZSgpIHtcblxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgIGlmICh0aWNrZXRudW1iZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGlja2V0bnVtYmVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudFdhbGxldCA9IHdpbmRvdy53YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQ7XG4gICAgICAgIHZhciBlbmRudW1iZXIgPSBOdW1iZXIodGlja2V0bnVtYmVyKSArIE51bWJlcihRdWFudGl0eSk7XG4gICAgICAgIGZvciAobGV0IGkgPSBOdW1iZXIodGlja2V0bnVtYmVyKTsgaSA8IGVuZG51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5Qm91Z2h0JykuY3JlYXRlKFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmZ0aWRcIjogTnVtYmVyKG5mdGlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlclwiOiBjdXJyZW50V2FsbGV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyV2FsbGV0XCI6IHNpZ25lckFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWJlclwiOiBpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2VycyA9ICcnO1xuICAgICAgICBsZXQgcGFydGljaXBhdGVkID0gMDtcbiAgICAgICAgdmFyIGRvbmUgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuZmluZChuZnRyZWNpZCwgYXN5bmMgZnVuY3Rpb24gKGVyciwgcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgdXNlcnMgPSByZWNvcmQuZ2V0KCdpc2JvdWdodCcpO1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKSAhPSBcIlwiICYmIHJlY29yZC5nZXQoJ3BhcnRpY2lwYXRlZCcpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVkID0gcmVjb3JkLmdldCgncGFydGljaXBhdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocGFydGljaXBhdGVkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhkb25lKTtcblxuICAgICAgICB1c2VycyA9IHVzZXJzICsgXCIsIFwiICsgd2luZG93LndhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLnVwZGF0ZShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBuZnRyZWNpZCxcbiAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaXNib3VnaHRcIjogdXNlcnMsXG4gICAgICAgICAgICAgICAgICAgIFwicGFydGljaXBhdGVkXCI6IHBhcnRpY2lwYXRlZCArIDEsXG4gICAgICAgICAgICAgICAgICAgIFwidGlja2V0bnVtYmVyXCI6IGVuZG51bWJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cblxuICAgIHJldHVybiAoPD5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBzaG93PXtzaG93fVxuICAgICAgICAgICAgb25IaWRlPXtvbkhpZGV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG4gICAgICAgICAgICBzaXplPVwiZ2dcIlxuICAgICAgICAgICAgY2VudGVyZWRcbiAgICAgICAgPlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBCdXkgTG90dGVyeSBUaWNrZXRcbiAgICAgICAgICAgICAgICA8L01vZGFsLlRpdGxlPlxuXG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VG90YWwgdGlja2V0czwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthbW91bnRUaWNrZXRJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsIHByaWNlIHtUb3RhbGFtb3VudH0gTkVBUjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtidXlMb3R0ZXJ5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXkgVGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgPC8+XG5cblxuICAgICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbCc7XG5pbXBvcnQgVmlld0JpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvVmlld0JpZE5GVE1vZGFsJztcblxuaW1wb3J0IERvbmF0ZU5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwnO1xuaW1wb3J0IEFkZExvdHRlcnlNb2RhbCBmcm9tICdAL21vZGFscy9sb3R0ZXJ5L0FkZExvdHRlcnlNb2RhbCc7XG5pbXBvcnQgQnV5TG90dGVyeU1vZGFsIGZyb20gJ0AvbW9kYWxzL2xvdHRlcnkvQnV5TG90dGVyeU1vZGFsJztcblxuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVjdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBsZXQgbTtcbiAgICBsZXQgaWQgPSBcIlwiO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcbiAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWQgPSBtWzFdO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY29udHJhY3QsY29udHJhY3RDZWxvLCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG4gICAgY29uc29sZS5sb2coXCJpZCA9PiBcIiwgaWQpO1xuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldERvbmF0ZU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW0FkZExvdHRlcnltb2RhbFNob3csIHNldEFkZExvdHRlcnlNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtCdXlMb3R0ZXJ5bW9kYWxTaG93LCBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKGlkKTtcbiAgICBjb25zdCBbUmVhbEV2ZW50SWQsIHNldFJlYWxFdmVudElkXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWx1c2QsIHNldGdvYWx1c2RdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnb2FsLCBzZXRnb2FsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnQsIHNldGRhdGVsZWZ0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZSwgc2V0ZGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGVsZWZ0QmlkLCBzZXRkYXRlbGVmdEJpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2xvZ28sIHNldGxvZ29dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3NlbGVjdHJlY2lkLCBzZXRzZWxlY3RyZWNpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHRpdGxlLCBzZXRzZWxlY3R0aXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHR5cGUsIHNldHNlbGVjdHR5cGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtFdmVudHdhbGxldCwgc2V0RXZlbnR3YWxsZXRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3NlbGVjdHdhbGxldCwgc2V0c2VsZWN0d2FsbGV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbd2FsbGV0VHlwZSwgc2V0V2FsbGV0VHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZWxlY3RwcmljZSwgc2V0c2VsZWN0cHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW0xvdHRlcnlOdW1iZXIsIHNldExvdHRlcnlOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgYm9vbFRydWUgPSB0cnVlO1xuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjdXJyZW50V2FsbGV0LCBzZXRDdXJyZW50V2FsbGV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBsZXQgY3VycmVudFdhbGxldEJvdWdodCA9IFtdXG5cbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZUJpZChkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcImQgXCIgKyBoLnRvU3RyaW5nKCkgKyBcImggXCIgKyBtLnRvU3RyaW5nKCkgKyBcIm0gXCIgKyBzLnRvU3RyaW5nKCkgKyBcInNcIik7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2RvbmF0aW9uL2F1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydGVkIGNoZWtjaW5nXCIpO1xuICAgICAgICAgICAgbGV0IG5lYXJQcmljZSA9IDA7XG4gICAgICAgICAgICAvL05FQVIgY3VycmVuY3lcbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lfb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgY3VycmVuY3lfb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBuZWFyUHJpY2UgPSBqc29uKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XG5cbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2Vsb1ByaWNlID0gMDtcbiAgICAgICAgICAgIC8vQ0VMTyBjdXJyZW5jeVxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIHZhciBjZWxvQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1jZWxvJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeV9vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2goY2Vsb0N1cnJlbmN5VXJsLCBjdXJyZW5jeV9vcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IGNlbG9QcmljZSA9IGpzb24pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgICAgICAgICBjZWxvUHJpY2UgPSBjZWxvUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XG5cbiAgICAgICAgICAgICAgICBjZWxvUHJpY2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLmZpbmQoaWQsIGFzeW5jIGZ1bmN0aW9uIChlcnIsIHJlY29yZCkge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICBzZXRFdmVudElkKHJlY29yZC5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICBzZXRSZWFsRXZlbnRJZChyZWNvcmQuZ2V0KCdpZCcpKTtcbiAgICAgICAgICAgICAgICBzZXRUaXRsZShyZWNvcmQuZ2V0KFwidGl0bGVcIikpO1xuICAgICAgICAgICAgICAgIHNldFdhbGxldFR5cGUocmVjb3JkLmdldChcIndhbGxldHR5cGVcIikpO1xuICAgICAgICAgICAgICAgIHNldHNlbGVjdHdhbGxldChyZWNvcmQuZ2V0KCd3YWxsZXQnKSk7XG4gICAgICAgICAgICAgICAgc2V0RXZlbnR3YWxsZXQocmVjb3JkLmdldCgnd2FsbGV0JykpO1xuICAgICAgICAgICAgICAgIGxldCB1c2RwcmljZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiTkVBUlwiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBuZWFyUHJpY2UpKTtcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmdldChcIndhbGxldHR5cGVcIikgPT0gXCJDRUxPXCIpIHVzZHByaWNlID0gZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSAqIGNlbG9QcmljZSkpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0Z29hbHVzZCh1c2RwcmljZSk7XG4gICAgICAgICAgICAgICAgc2V0Z29hbChOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdChMZWZ0RGF0ZShyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSkpO1xuICAgICAgICAgICAgICAgIHNldGRhdGUocmVjb3JkLmdldChcImVuZERhdGVcIikpO1xuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKSk7XG4gICAgICAgICAgICAgICAgc2V0bG9nbyhyZWNvcmQuZ2V0KFwibG9nb2xpbmtcIikpO1xuXG5cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQnLCByZWNvcmQuZ2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7ZXZlbnRpZH0gPSAnJHtOdW1iZXIocmVjb3JkLmdldCgnaWQnKSl9JylgLFxuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IDEwIHJlY29yZHMgaW4gR3JpZCB2aWV3OlxuICAgICAgICAgICAgICAgICAgICBtYXhSZWNvcmRzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogW3sgZmllbGQ6IFwicHJpY2VcIiwgZGlyZWN0aW9uOiBcImRlc2NcIiB9XSxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGFzeW5jIGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YWxsZXRUeXBlID09IFwiTkVBUlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFdhbGxldCh3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgIGlmICh3YWxsZXRUeXBlID09IFwiQ0VMT1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50V2FsbGV0KHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2MgPSAod2FsbGV0QWNjb3VudC5fYXV0aERhdGEuYWNjb3VudElkKTtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNib3VnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJpc2JvdWdodFwiKS5pbmNsdWRlcyhjdXJyZW50QWNjKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2JvdWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIG5lYXJQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjSWQ6IHJlY29yZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZDogcmVjb3JkLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZ2V0KFwiZGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlkcHJpY2U6IGdvYWxQcmljZTJ1c2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcihyZWNvcmQuZ2V0KFwicHJpY2VcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlY29yZC5nZXQoXCJ0eXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZWNvcmQuZ2V0KFwiaW1hZ2VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG90dGVyeTogcmVjb3JkLmdldChcImxvdHRlcnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNib3VnaHQ6IGlzYm91Z2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldG51bWJlcjogcmVjb3JkLmdldChcInRpY2tldG51bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcldhbGxldDogcmVjb3JkLmdldChcIm93bmVyV2FsbGV0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG5cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgfSwgMTAwMCk7XG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVWaWV3QmlkTW9kYWwoZSkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0dGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikpO1xuXG4gICAgICAgIHNldFZpZXdNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbChlKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RiaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaGlnaGVzdGJpZFwiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGJpZCk7XG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkdG9Mb3R0ZXJ5KGUpIHtcblxuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0QWRkTG90dGVyeU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBCdXlMb3R0ZXJ5KGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0cHJpY2UoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicHJpY2VcIikpO1xuICAgICAgICBzZXRzZWxlY3R3YWxsZXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwid2FsbGV0XCIpKTtcbiAgICAgICAgc2V0TG90dGVyeU51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aWNrZXRudW1iZXJcIikpO1xuICAgICAgICBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93KHRydWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcblxuICAgICAgICBzZXREb25hdGVNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBUb3BidXR0b24oKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzJweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzBweCdcbiAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svZG9uYXRpb25dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMzRweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcInVzZXJcIikpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzI1cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+RG9uYXRlIE5GVDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvbG90dGVyeT9bJHtSZWFsRXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMjA4cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPD5cblxuICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvbG90dGVyeT9bJHtSZWFsRXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICc4MHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIGxvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvPilcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBFdmVudENvbnRhaW5lclwiID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dHYXA6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICc3MHB4J1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gPnt0aXRsZX08L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkdvYWw6IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiQge2dvYWx1c2R9ICh7Z29hbH0ge3dhbGxldFR5cGV9KTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gbmFtZT0nZGF0ZWxlZnQnIGRhdGU9e2RhdGV9PntkYXRlbGVmdH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VG9wYnV0dG9uIC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uSWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0udHlwZSA9PSBcIkNyeXB0b3B1bmtcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZSBwaXhlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogXCI1cHhcIiB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogJzJ2dycgfX0gPntsaXN0SXRlbS5uYW1lfTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMTEgMTg3IDUxKVwiLCBmb250U2l6ZTogJzEuN3Z3JyB9fT5UeXBlOiBORlQ8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMTEgMTg3IDUxKVwiLCBmb250U2l6ZTogJzEuN3Z3JyB9fT57bGlzdEl0ZW0uZGVzY3JpcHRpb259PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0VsZW1lbnRCb3R0b21Db250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIxNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0ubG90dGVyeSAhPSBcInRydWVcIiA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+Q3VycmVudCBiaWQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fSBjbGFzc05hbWU9J2JpZHByaWNlJz4kIHtsaXN0SXRlbS5CaWRwcmljZS50b0ZpeGVkKDIpfSAoe2xpc3RJdGVtLnByaWNlfSB7d2FsbGV0VHlwZX0pPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDcgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IG5hbWU9XCJkYXRlXCIgZGF0ZT17ZGF0ZX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+e2RhdGVsZWZ0QmlkfTwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5UaWNrZXQgcHJpY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fSBjbGFzc05hbWU9J2JpZHByaWNlJz4kIHtsaXN0SXRlbS5CaWRwcmljZS50b0ZpeGVkKDIpfSAoe2xpc3RJdGVtLnByaWNlfSB7d2FsbGV0VHlwZX0pPC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRBbGxjb250YWluZXInID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRzYnV0dG9uJz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmxvdHRlcnkgIT0gXCJ0cnVlXCIgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwidXNlclwiKSA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzE2OHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gb25DbGljaz17YWN0aXZhdGVWaWV3QmlkTW9kYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5WaWV3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxNjhweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPkJpZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoPD48Lz4pfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSA9PSBcIm1hbmFnZXJcIikgJiYgKHNlbGVjdHdhbGxldCA9PSBjdXJyZW50V2FsbGV0KSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMjRweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiBvbkNsaWNrPXthZGR0b0xvdHRlcnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIiBvbkNsaWNrPXthZGR0b0xvdHRlcnl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCIgb25DbGljaz17YWRkdG9Mb3R0ZXJ5fT5BZGQgdG8gTG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSA6ICg8PjwvPikpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKChsaXN0SXRlbS5pc2JvdWdodCA9PSB0cnVlKSA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9sb3R0ZXJ5P1ske1JlYWxFdmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMjRweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gZ29hbFNjb3JlPXtnb2FsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiA+R28gdG8gbG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzI1MXB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gZ29hbFNjb3JlPXtnb2FsfSBvd25lcldhbGxldD17bGlzdEl0ZW0ub3duZXJXYWxsZXR9IG9uQ2xpY2s9e0J1eUxvdHRlcnl9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IHRpY2tldG51bWJlcj17bGlzdEl0ZW0udGlja2V0bnVtYmVyfSBvd25lcldhbGxldD17bGlzdEl0ZW0ub3duZXJXYWxsZXR9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IHRpY2tldG51bWJlcj17bGlzdEl0ZW0udGlja2V0bnVtYmVyfSBvd25lcldhbGxldD17bGlzdEl0ZW0ub3duZXJXYWxsZXR9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCIgPkJ1eSBsb3R0ZXJ5IHRpY2tldDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxCaWRORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0b2tlbklkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICByZWNpZD17c2VsZWN0cmVjaWR9XG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0dHlwZX1cbiAgICAgICAgICAgICAgICBUb0FkZHJlc3M9e3NlbGVjdHdhbGxldH1cbiAgICAgICAgICAgICAgICBldmVudElkPXtldmVudElkfVxuICAgICAgICAgICAgICAgIFJlYWxFdmVudElkPXtSZWFsRXZlbnRJZH1cbiAgICAgICAgICAgICAgICBIaWdoZXN0YmlkPXtzZWxlY3RiaWR9XG4gICAgICAgICAgICAgICAgd2FsbGV0VHlwZT17d2FsbGV0VHlwZX1cbiAgICAgICAgICAgICAgICBnb2FsPXtnb2FsfVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cbiAgICAgICAgICAgICAgICBjb250cmFjdENlbG89e2NvbnRyYWN0Q2Vsb31cbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxuXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Vmlld0JpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Vmlld21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Vmlld01vZGFsU2hvdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgd2FsbGV0VHlwZT17d2FsbGV0VHlwZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17c2VsZWN0dGl0bGV9XG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtDcmVhdGVtb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIEV2ZW50SUQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgICAgIEV2ZW50ZVJlY0lEPXtldmVudElkfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUaXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxBZGRMb3R0ZXJ5TW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtBZGRMb3R0ZXJ5bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmZ0cmVjaWQ9e3NlbGVjdHJlY2lkfVxuICAgICAgICAgICAgICAgIG5mdGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBldmVudGlkPXtSZWFsRXZlbnRJZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV5TG90dGVyeU1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17QnV5TG90dGVyeW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgc2V0QnV5TG90dGVyeU1vZGFsU2hvdyhmYWxzZSkgfX1cbiAgICAgICAgICAgICAgICBuZnRpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgVG9BZGRyZXNzPXtFdmVudHdhbGxldH1cbiAgICAgICAgICAgICAgICBuZnRyZWNpZD17c2VsZWN0cmVjaWR9XG4gICAgICAgICAgICAgICAgcHJpY2U9e3NlbGVjdHByaWNlfVxuICAgICAgICAgICAgICAgIHRpY2tldG51bWJlcj17TG90dGVyeU51bWJlcn1cbiAgICAgICAgICAgIC8+PC8+XG4gICAgKTtcbn1cbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkuZmluZCcpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLmZpbmQ7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LmluY2x1ZGVzJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykuaW5jbHVkZXM7XG4iLCJ2YXIgZmluZCA9IHJlcXVpcmUoJy4uL2FycmF5L3ZpcnR1YWwvZmluZCcpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5maW5kO1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuZmluZCkgPyBmaW5kIDogb3duO1xufTtcbiIsInZhciBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9pbmNsdWRlcycpO1xudmFyIHN0cmluZ0luY2x1ZGVzID0gcmVxdWlyZSgnLi4vc3RyaW5nL3ZpcnR1YWwvaW5jbHVkZXMnKTtcblxudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xudmFyIFN0cmluZ1Byb3RvdHlwZSA9IFN0cmluZy5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5pbmNsdWRlcztcbiAgaWYgKGl0ID09PSBBcnJheVByb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBBcnJheSAmJiBvd24gPT09IEFycmF5UHJvdG90eXBlLmluY2x1ZGVzKSkgcmV0dXJuIGFycmF5SW5jbHVkZXM7XG4gIGlmICh0eXBlb2YgaXQgPT09ICdzdHJpbmcnIHx8IGl0ID09PSBTdHJpbmdQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgU3RyaW5nICYmIG93biA9PT0gU3RyaW5nUHJvdG90eXBlLmluY2x1ZGVzKSkge1xuICAgIHJldHVybiBzdHJpbmdJbmNsdWRlcztcbiAgfSByZXR1cm4gb3duO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuc3ltYm9sJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFscy9wYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aC5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5vYmplY3Qua2V5cycpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguT2JqZWN0LmtleXM7XG4iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLnN0cmluZy5pbmNsdWRlcycpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdTdHJpbmcnKS5pbmNsdWRlcztcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9zdGFibGUvaW5zdGFuY2UvaW5kZXgtb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vc3RhYmxlL29iamVjdC9hc3NpZ24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vc3RhYmxlL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vc3RhYmxlL29iamVjdC9rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHZhciByZWdleHAgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgIHRyeSB7XG4gICAgICByZWdleHBbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gJy8uLydbTUVUSE9EX05BTUVdKHJlZ2V4cCk7XG4gICAgfSBjYXRjaCAoZXJyb3IyKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG4vLyBgSXNSZWdFeHBgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc3JlZ2V4cFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY2xhc3NvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsInZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzUmVnRXhwKGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIlRoZSBtZXRob2QgZG9lc24ndCBhY2NlcHQgcmVndWxhciBleHByZXNzaW9uc1wiKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5jbHVkZXM7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygnaW5jbHVkZXMnKTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlS2V5cygxKTsgfSk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFjb3JyZWN0SXNSZWdFeHBMb2dpYygnaW5jbHVkZXMnKSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+dG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSlcbiAgICAgIC5pbmRleE9mKHRvU3RyaW5nKG5vdEFSZWdFeHAoc2VhcmNoU3RyaW5nKSksIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2UvZmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9lcy9pbnN0YW5jZS9pbmNsdWRlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsInZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi8uLi9lcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwidmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uLy4uL2VzL29iamVjdC9rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaWNvbiB7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZpbGw6IGN1cnJlbnRjb2xvcjtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vSWNvbi9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmljb24ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZmlsbDogY3VycmVudGNvbG9yO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgX09iamVjdCRhc3NpZ24gZnJvbSBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9vYmplY3QvYXNzaWduXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBfT2JqZWN0JGFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgX09iamVjdCRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzXCI7XG5pbXBvcnQgX2luZGV4T2ZJbnN0YW5jZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvaW5zdGFuY2UvaW5kZXgtb2ZcIjtcbmltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoX09iamVjdCRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IF9PYmplY3QkZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChfaW5kZXhPZkluc3RhbmNlUHJvcGVydHkoZXhjbHVkZWQpLmNhbGwoZXhjbHVkZWQsIGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBfT2JqZWN0JGtleXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9vYmplY3Qva2V5c1wiO1xuaW1wb3J0IF9pbmRleE9mSW5zdGFuY2VQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL2luc3RhbmNlL2luZGV4LW9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgdmFyIHNvdXJjZUtleXMgPSBfT2JqZWN0JGtleXMoc291cmNlKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoX2luZGV4T2ZJbnN0YW5jZVByb3BlcnR5KGV4Y2x1ZGVkKS5jYWxsKGV4Y2x1ZGVkLCBrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJjM2ZiNWM3ODkwYTU2YzI1NDlmMVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiY2xhc3NOYW1lcyIsImxpYnJhcnkiLCJjYW1lbGlmeSIsIkljb24iLCJwcm9wcyIsImNsYXNzTmFtZSIsImNvbXBvbmVudCIsIkNvbXBvbmVudCIsImxpYiIsImljb24iLCJyYXRpbyIsInJlc3RQcm9wcyIsIkljbyIsImdldFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsImRlZmF1bHRQcm9wcyIsImZpbGwiLCJ4bWxucyIsImFycm93RG93biIsImV4dGVybmFsTGluayIsImNsb3NlIiwiY29uZmlnIiwiaW5mbyIsImxpbmsiLCJsb2FkZXIiLCJsb2dvdXQiLCJwbHVzIiwicHVsbCIsInB1c2giLCJyZW1vdmUiLCJyZXZlcnNlIiwicmV2ZXJzZUhvcml6b250YWwiLCJzdGFyIiwidXNlciIsIndhcm5pbmciLCJjaGVjayIsImRpcmVjdGlvblJpZ2h0Iiwic3VjY2VzcyIsImluZm9GaWxsIiwiY29weSIsInR3aXR0ZXIiLCJnaXRodWIiLCJtZWRpdW0iLCJ0ZWxlZ3JhbSIsImhlYXJ0U2VsZWN0ZWQiLCJoZWFydFVuc2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiTW9kYWwiLCJGb3JtIiwiQnV0dG9uIiwidG9hc3QiLCJ1c2VDb250cmFjdCIsIlVzZUZvcm1JbnB1dCIsImNyZWF0ZUJpZCIsIlJlZHVjZUNhdGVnb3J5IiwiZ2V0Q2F0ZWdvcmllc2J5ZXZlbnRpZCIsImV2ZW50Z2V0YnlpZCIsIm5lYXJBUEkiLCJCaWRORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJUb0FkZHJlc3MiLCJ0b2tlbklkIiwicmVjaWQiLCJSZWFsRXZlbnRJZCIsIkhpZ2hlc3RiaWQiLCJ3YWxsZXRUeXBlIiwiY29udHJhY3QiLCJjb250cmFjdENlbG8iLCJzZW5kZXJBZGRyZXNzIiwiZXZlbnRJZCIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJBbGVydCIsInNldEFsZXJ0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJFdmVudEdvYWwiLCJzZXRFdmVudEdvYWwiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImFsbFNlbGVjdGVkIiwic2V0QWxsU2VsZWN0ZWQiLCJvdGhlclNlbGVjdGVkIiwic2V0T3RoZXJTZWxlY3RlZCIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5Iiwib3RoZXJDYXRlZ29yeSIsInNldE90aGVyQ2F0ZWdvcnkiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsImFsZXJ0RUxNIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZmV0Y2hDYXRlZ29yaWVzIiwibGVuZ3RoIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsInJlY29yZCIsIk51bWJlciIsImdldCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsInN1bW9mbWFpbiIsImZvckVhY2giLCJmaWVsZHMiLCJkb25lIiwiYmlkTkZUIiwicHJvbWlzZSIsImJpZE5GVGJ5Q0VMTyIsInBlbmRpbmciLCJiaWRORlRieU5FQVIiLCJDcmVhdGluZ09uQWlyVGFibGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNyZWF0ZSIsIndhbGxldEFjY291bnQiLCJnZXRBY2NvdW50SWQiLCJ0b1N0cmluZyIsIlVwZGF0ZUFpcnRhYmxlIiwidXBkYXRlIiwiaSIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsImV2ZW50Y2F0ZWdvcnlJRCIsImlkIiwicGVycGVpY2UiLCJ1cGRhdGVkcHJpY2UiLCJVcGRhdGVkYW1vdW50IiwibG9nIiwiYnV0dG9uUHJvcHMiLCJpc1NpZ25lZEluIiwiaW5uZXJUZXh0Iiwid2FybiIsInJlcXVlc3RTaWduSW4iLCJuZWFyQ29uZmlnIiwiY29udHJhY3ROYW1lIiwibmV0d29ya0lkIiwia2V5U3RvcmUiLCJrZXlTdG9yZXMiLCJCcm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUiLCJub2RlVXJsIiwid2FsbGV0VXJsIiwiaGVscGVyVXJsIiwiZXhwbG9yZXJVcmwiLCJjb25uZWN0IiwibmVhciIsImFjY291bnQiLCJhbW91bnRJbllvY3RvIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsInNlbmRNb25leSIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwibmV0d29ya1ZlcnNpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3JlYXRlZE9iamVjdCIsIkNFTE9pbkZ1bGwiLCJmcm9tIiwiZ2FzUHJpY2UiLCJ2YWx1ZSIsInJlc3VsdCIsImUiLCJocmVmIiwiRXJyb3IiLCJzZWxlY3RDYXRlZ29yeSIsImNhdGVnb3J5X2lkIiwidGVtcF9hcnIiLCJ1bnNlbGVjdENhdGVnb3J5Iiwic2VsZWN0QWxsQ2F0ZWdvcnkiLCJvdGhlclNlbGVjdCIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25TZWxmIiwiY29sb3IiLCJyaWdodCIsInRvcCIsIm1hcmdpblRvcCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJmbGV4V3JhcCIsImNhdGVnb3J5IiwiYm9yZGVyIiwidGV4dEFsaWduIiwidGl0bGUiLCJpbWFnZSIsImFzcGVjdFJhdGlvIiwibGluZUhlaWdodCIsImFtb3VudCIsIkNvbCIsIkltYWdlIiwiYmlkc2dldGJ5dG9rZW5pZCIsIlZpZXdtb2RhbFNob3ciLCJsaXN0Iiwic2V0TGlzdCIsImFkZFplcm8iLCJudW0iLCJBbVBNIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsImZldGNoQ29udHJhY3REYXRhIiwiY3VycmVuY3lfb3B0aW9ucyIsIm1heFJlY29yZHMiLCJhcnIiLCJnb2FsUHJpY2UydXNkIiwiRGF0ZXRpbWUiLCJjdXJyZW50ZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIlVzZXJOYW1lIiwiYmlkcHJpY2V1c2QiLCJmb3JtYXQiLCJCaWRwcmljZSIsImVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJsaXN0SXRlbSIsIklkIiwiY3JlYXRlVG9rZW5BUEkiLCJXYWxsZXRBY2NvdW50IiwiQWRkTG90dGVyeU1vZGFsIiwibmZ0aWQiLCJuZnRyZWNpZCIsImV2ZW50aWQiLCJwcmljZVRpY2tldElucHV0IiwiZGVmYXVsdFZhbHVlIiwic3RhcnREYXRlIiwic3RhcnREYXRlSW5wdXQiLCJlbmREYXRlIiwiZW5kRGF0ZUlucHV0IiwiYWRkTG90dGVyeSIsIkNyZWF0aW5nT25BaXJ0YWJsZSIsIlVwZGF0ZU9uQWlydGFibGUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsIkJ1eUxvdHRlcnlNb2RhbCIsInRpY2tldG51bWJlciIsInNpZ25lckFkZHJlc3MiLCJRdWFudGl0eSIsImFtb3VudFRpY2tldElucHV0IiwiVG90YWxhbW91bnQiLCJzZXRUb3RhbGFtb3VudCIsImJ1eUxvdHRlcnkiLCJCdXlpbmdMb3R0ZXJ5IiwiY3VycmVudFdhbGxldCIsIl9hdXRoRGF0YSIsImFjY291bnRJZCIsImVuZG51bWJlciIsInVzZXJzIiwicGFydGljaXBhdGVkIiwicmVzb2x2ZSIsInJlamVjdCIsIk5hdkxpbmsiLCJSb3V0ZXIiLCJWaWV3QmlkTkZUTW9kYWwiLCJEb25hdGVORlRNb2RhbCIsIkF1Y3Rpb24iLCJyZWdleCIsInN0ciIsInNlYXJjaCIsIm0iLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJDcmVhdGVtb2RhbFNob3ciLCJzZXREb25hdGVNb2RhbFNob3ciLCJBZGRMb3R0ZXJ5bW9kYWxTaG93Iiwic2V0QWRkTG90dGVyeU1vZGFsU2hvdyIsIkJ1eUxvdHRlcnltb2RhbFNob3ciLCJzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93Iiwic2V0RXZlbnRJZCIsInNldFJlYWxFdmVudElkIiwic2V0VGl0bGUiLCJnb2FsdXNkIiwic2V0Z29hbHVzZCIsImdvYWwiLCJzZXRnb2FsIiwiZGF0ZWxlZnQiLCJzZXRkYXRlbGVmdCIsImRhdGUiLCJzZXRkYXRlIiwiZGF0ZWxlZnRCaWQiLCJzZXRkYXRlbGVmdEJpZCIsImxvZ28iLCJzZXRsb2dvIiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdHJlY2lkIiwic2V0c2VsZWN0cmVjaWQiLCJzZWxlY3R0aXRsZSIsInNldHNlbGVjdHRpdGxlIiwic2VsZWN0dHlwZSIsInNldHNlbGVjdHR5cGUiLCJFdmVudHdhbGxldCIsInNldEV2ZW50d2FsbGV0Iiwic2VsZWN0d2FsbGV0Iiwic2V0c2VsZWN0d2FsbGV0Iiwic2V0V2FsbGV0VHlwZSIsInNlbGVjdGJpZCIsInNldHNlbGVjdGJpZCIsInNlbGVjdHByaWNlIiwic2V0c2VsZWN0cHJpY2UiLCJMb3R0ZXJ5TnVtYmVyIiwic2V0TG90dGVyeU51bWJlciIsImJvb2xUcnVlIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93Iiwic2V0Vmlld01vZGFsU2hvdyIsInNldEN1cnJlbnRXYWxsZXQiLCJjdXJyZW50V2FsbGV0Qm91Z2h0IiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJzIiwiTGVmdERhdGVCaWQiLCJBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEiLCJwYXRobmFtZSIsImNlbG9QcmljZSIsImNlbG9DdXJyZW5jeVVybCIsImdldElkIiwidXNkcHJpY2UiLCJjdXJyZW50QWNjIiwiaXNib3VnaHQiLCJyZWNJZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxvdHRlcnkiLCJvd25lcldhbGxldCIsInNldEludGVydmFsIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWN0aXZhdGVWaWV3QmlkTW9kYWwiLCJ0YXJnZXQiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiYWRkdG9Mb3R0ZXJ5IiwiQnV5TG90dGVyeSIsImFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwiLCJUb3BidXR0b24iLCJvdmVyZmxvdyIsImN1cnNvciIsImZsb2F0IiwicGFkZGluZ1RvcCIsImdhcCIsIm1hcmdpbiIsImZvbnRTaXplIiwicm93R2FwIiwibWF4V2lkdGgiLCJ0b0ZpeGVkIiwid2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==