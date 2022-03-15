"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./services/ERC721SingletonCelo.js":
/*!*****************************************!*\
  !*** ./services/ERC721SingletonCelo.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ERC721SingletonCelo; }
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/contracts/lib.esm/index.js");
/* harmony import */ var _contractsCelo_deployments_celo_alfajores_CeloERC721_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contractsCelo/deployments/celo_alfajores/CeloERC721.json */ "./contractsCelo/deployments/celo_alfajores/CeloERC721.json");


function ERC721SingletonCelo(signer) {
  if (!ERC721SingletonCelo._instance) {
    ERC721SingletonCelo._instance = new ethers__WEBPACK_IMPORTED_MODULE_1__.Contract(_contractsCelo_deployments_celo_alfajores_CeloERC721_json__WEBPACK_IMPORTED_MODULE_0__.address, _contractsCelo_deployments_celo_alfajores_CeloERC721_json__WEBPACK_IMPORTED_MODULE_0__.abi, signer);
  }

  return ERC721SingletonCelo._instance;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2439e483f1f7bff767d0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmVkNmUzZTQ4Mzc5OTM0ODg5ZjU5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdlLFNBQVNFLG1CQUFULENBQTZCQyxNQUE3QixFQUFxQztBQUNuRCxNQUFJLENBQUNELG1CQUFtQixDQUFDRSxTQUF6QixFQUFvQztBQUNuQ0YsSUFBQUEsbUJBQW1CLENBQUNFLFNBQXBCLEdBQWdDLElBQUlKLDRDQUFKLENBQy9CQyw4RkFEK0IsRUFFL0JBLDBGQUYrQixFQUcvQkUsTUFIK0IsQ0FBaEM7QUFLQTs7QUFFRCxTQUFPRCxtQkFBbUIsQ0FBQ0UsU0FBM0I7QUFDQTs7Ozs7Ozs7VUNmRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc2VydmljZXMvRVJDNzIxU2luZ2xldG9uQ2Vsby5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuXG5pbXBvcnQgZXJjNzIxQ2VsbyBmcm9tICcuLi9jb250cmFjdHNDZWxvL2RlcGxveW1lbnRzL2NlbG9fYWxmYWpvcmVzL0NlbG9FUkM3MjEuanNvbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRVJDNzIxU2luZ2xldG9uQ2VsbyhzaWduZXIpIHtcblx0aWYgKCFFUkM3MjFTaW5nbGV0b25DZWxvLl9pbnN0YW5jZSkge1xuXHRcdEVSQzcyMVNpbmdsZXRvbkNlbG8uX2luc3RhbmNlID0gbmV3IGV0aGVycy5Db250cmFjdChcblx0XHRcdGVyYzcyMUNlbG8uYWRkcmVzcyxcblx0XHRcdGVyYzcyMUNlbG8uYWJpLFxuXHRcdFx0c2lnbmVyXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiBFUkM3MjFTaW5nbGV0b25DZWxvLl9pbnN0YW5jZTtcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjI0MzllNDgzZjFmN2JmZjc2N2QwXCI7IH0iXSwibmFtZXMiOlsiZXRoZXJzIiwiZXJjNzIxQ2VsbyIsIkVSQzcyMVNpbmdsZXRvbkNlbG8iLCJzaWduZXIiLCJfaW5zdGFuY2UiLCJDb250cmFjdCIsImFkZHJlc3MiLCJhYmkiXSwic291cmNlUm9vdCI6IiJ9