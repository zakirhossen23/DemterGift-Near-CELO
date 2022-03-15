"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./services/useContractCelo.js":
/*!*************************************!*\
  !*** ./services/useContractCelo.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useContractCelo; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/providers/lib.esm/web3-provider.js");
/* harmony import */ var _ERC721SingletonCelo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ERC721SingletonCelo */ "./services/ERC721SingletonCelo.js");






function useContractCelo(contractName) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    contractCelo: null,
    signerAddress: null
  }),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      contractInstance = _useState2[0],
      setContractInstance = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var provider, signer, contract;
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.Web3Provider(window.ethereum);
                signer = provider.getSigner();
                contract = {
                  contractCelo: null,
                  signerAddress: null
                }; // Sets a single instance of a specific contract per application
                // Useful for switching across multiple contracts in a single application

                _context.t0 = contractName;
                _context.next = _context.t0 === 'ERC721' ? 7 : 9;
                break;

              case 7:
                contract.contract = (0,_ERC721SingletonCelo__WEBPACK_IMPORTED_MODULE_4__["default"])(signer);
                return _context.abrupt("break", 11);

              case 9:
                console.log('Invalid contract');
                return _context.abrupt("break", 11);

              case 11:
                _context.next = 13;
                return signer.getAddress();

              case 13:
                contract.signerAddress = _context.sent;
                setContractInstance(contract);
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t1 = _context["catch"](0);
                console.error(_context.t1);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 17]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
    window.ethereum.on('accountsChanged', fetchData);
    window.ethereum.on('chainChanged', fetchData);
    return function () {
      window.ethereum.removeListener('accountsChanged', fetchData);
      window.ethereum.removeListener('chainChanged', fetchData);
    };
  }, []);
  return contractInstance;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ed6e3e48379934889f59"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjEyMjJiMTdmNGJlNWVjNmNkNjI5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTSSxlQUFULENBQXlCQyxZQUF6QixFQUF1QztBQUNyRCxrQkFBZ0RMLCtDQUFRLENBQUM7QUFDeERNLElBQUFBLFlBQVksRUFBRSxJQUQwQztBQUV4REMsSUFBQUEsYUFBYSxFQUFFO0FBRnlDLEdBQUQsQ0FBeEQ7QUFBQTtBQUFBLE1BQU9DLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFLQVIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTVMsU0FBUztBQUFBLDBNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZDLGdCQUFBQSxRQUZVLEdBRUMsSUFBSVQsZ0RBQUosQ0FBa0NZLE1BQU0sQ0FBQ0MsUUFBekMsQ0FGRDtBQUdWQyxnQkFBQUEsTUFIVSxHQUdETCxRQUFRLENBQUNNLFNBQVQsRUFIQztBQUlWQyxnQkFBQUEsUUFKVSxHQUlDO0FBQUVaLGtCQUFBQSxZQUFZLEVBQUUsSUFBaEI7QUFBc0JDLGtCQUFBQSxhQUFhLEVBQUU7QUFBckMsaUJBSkQsRUFNaEI7QUFDQTs7QUFQZ0IsOEJBUVJGLFlBUlE7QUFBQSxnREFTVixRQVRVO0FBQUE7O0FBQUE7QUFVZGEsZ0JBQUFBLFFBQVEsQ0FBQ0EsUUFBVCxHQUFvQmYsZ0VBQWUsQ0FBQ2EsTUFBRCxDQUFuQztBQVZjOztBQUFBO0FBYWRHLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQWJjOztBQUFBO0FBQUE7QUFBQSx1QkFpQmVKLE1BQU0sQ0FBQ0ssVUFBUCxFQWpCZjs7QUFBQTtBQWlCaEJILGdCQUFBQSxRQUFRLENBQUNYLGFBakJPO0FBbUJoQkUsZ0JBQUFBLG1CQUFtQixDQUFDUyxRQUFELENBQW5CO0FBbkJnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCaEJDLGdCQUFBQSxPQUFPLENBQUNHLEtBQVI7O0FBckJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUWixTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBeUJBQSxJQUFBQSxTQUFTO0FBRVRJLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlEsRUFBaEIsQ0FBbUIsaUJBQW5CLEVBQXNDYixTQUF0QztBQUNBSSxJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JRLEVBQWhCLENBQW1CLGNBQW5CLEVBQW1DYixTQUFuQztBQUVBLFdBQU8sWUFBTTtBQUNaSSxNQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JTLGNBQWhCLENBQStCLGlCQUEvQixFQUFrRGQsU0FBbEQ7QUFDQUksTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCUyxjQUFoQixDQUErQixjQUEvQixFQUErQ2QsU0FBL0M7QUFDQSxLQUhEO0FBSUEsR0FuQ1EsRUFtQ04sRUFuQ00sQ0FBVDtBQXFDQSxTQUFPRixnQkFBUDtBQUNBOzs7Ozs7OztVQ2pERCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc2VydmljZXMvdXNlQ29udHJhY3RDZWxvLmpzIiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuXG5pbXBvcnQgRVJDNzIxU2luZ2xldG9uIGZyb20gJy4vRVJDNzIxU2luZ2xldG9uQ2Vsbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNvbnRyYWN0Q2Vsbyhjb250cmFjdE5hbWUpIHtcblx0Y29uc3QgW2NvbnRyYWN0SW5zdGFuY2UsIHNldENvbnRyYWN0SW5zdGFuY2VdID0gdXNlU3RhdGUoe1xuXHRcdGNvbnRyYWN0Q2VsbzogbnVsbCxcblx0XHRzaWduZXJBZGRyZXNzOiBudWxsLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG5cdFx0XHRcdGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuXHRcdFx0XHRjb25zdCBjb250cmFjdCA9IHsgY29udHJhY3RDZWxvOiBudWxsLCBzaWduZXJBZGRyZXNzOiBudWxsIH07XG5cblx0XHRcdFx0Ly8gU2V0cyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHNwZWNpZmljIGNvbnRyYWN0IHBlciBhcHBsaWNhdGlvblxuXHRcdFx0XHQvLyBVc2VmdWwgZm9yIHN3aXRjaGluZyBhY3Jvc3MgbXVsdGlwbGUgY29udHJhY3RzIGluIGEgc2luZ2xlIGFwcGxpY2F0aW9uXG5cdFx0XHRcdHN3aXRjaCAoY29udHJhY3ROYW1lKSB7XG5cdFx0XHRcdFx0Y2FzZSAnRVJDNzIxJzpcblx0XHRcdFx0XHRcdGNvbnRyYWN0LmNvbnRyYWN0ID0gRVJDNzIxU2luZ2xldG9uKHNpZ25lcik7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ludmFsaWQgY29udHJhY3QnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udHJhY3Quc2lnbmVyQWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XG5cblx0XHRcdFx0c2V0Q29udHJhY3RJbnN0YW5jZShjb250cmFjdCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0ZmV0Y2hEYXRhKCk7XG5cblx0XHR3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGZldGNoRGF0YSk7XG5cdFx0d2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCBmZXRjaERhdGEpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgZmV0Y2hEYXRhKTtcblx0XHRcdHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY2hhaW5DaGFuZ2VkJywgZmV0Y2hEYXRhKTtcblx0XHR9O1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIGNvbnRyYWN0SW5zdGFuY2U7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZWQ2ZTNlNDgzNzk5MzQ4ODlmNTlcIjsgfSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsIkVSQzcyMVNpbmdsZXRvbiIsInVzZUNvbnRyYWN0Q2VsbyIsImNvbnRyYWN0TmFtZSIsImNvbnRyYWN0Q2VsbyIsInNpZ25lckFkZHJlc3MiLCJjb250cmFjdEluc3RhbmNlIiwic2V0Q29udHJhY3RJbnN0YW5jZSIsImZldGNoRGF0YSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsImNvbnNvbGUiLCJsb2ciLCJnZXRBZGRyZXNzIiwiZXJyb3IiLCJvbiIsInJlbW92ZUxpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==