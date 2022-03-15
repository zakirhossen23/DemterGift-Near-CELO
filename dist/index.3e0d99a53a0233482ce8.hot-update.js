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
    contract: null,
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
                  contract: null,
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
/******/ 	__webpack_require__.h = function() { return "1222b17f4be5ec6cd629"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjNlMGQ5OWE1M2EwMjMzNDgyY2U4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTSSxlQUFULENBQXlCQyxZQUF6QixFQUF1QztBQUNyRCxrQkFBZ0RMLCtDQUFRLENBQUM7QUFDeERNLElBQUFBLFFBQVEsRUFBRSxJQUQ4QztBQUV4REMsSUFBQUEsYUFBYSxFQUFFO0FBRnlDLEdBQUQsQ0FBeEQ7QUFBQTtBQUFBLE1BQU9DLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFLQVIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTVMsU0FBUztBQUFBLDBNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZDLGdCQUFBQSxRQUZVLEdBRUMsSUFBSVQsZ0RBQUosQ0FBa0NZLE1BQU0sQ0FBQ0MsUUFBekMsQ0FGRDtBQUdWQyxnQkFBQUEsTUFIVSxHQUdETCxRQUFRLENBQUNNLFNBQVQsRUFIQztBQUlWWCxnQkFBQUEsUUFKVSxHQUlDO0FBQUVBLGtCQUFBQSxRQUFRLEVBQUUsSUFBWjtBQUFrQkMsa0JBQUFBLGFBQWEsRUFBRTtBQUFqQyxpQkFKRCxFQU1oQjtBQUNBOztBQVBnQiw4QkFRUkYsWUFSUTtBQUFBLGdEQVNWLFFBVFU7QUFBQTs7QUFBQTtBQVVkQyxnQkFBQUEsUUFBUSxDQUFDQSxRQUFULEdBQW9CSCxnRUFBZSxDQUFDYSxNQUFELENBQW5DO0FBVmM7O0FBQUE7QUFhZEUsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBYmM7O0FBQUE7QUFBQTtBQUFBLHVCQWlCZUgsTUFBTSxDQUFDSSxVQUFQLEVBakJmOztBQUFBO0FBaUJoQmQsZ0JBQUFBLFFBQVEsQ0FBQ0MsYUFqQk87QUFtQmhCRSxnQkFBQUEsbUJBQW1CLENBQUNILFFBQUQsQ0FBbkI7QUFuQmdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBcUJoQlksZ0JBQUFBLE9BQU8sQ0FBQ0csS0FBUjs7QUFyQmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRYLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUF5QkFBLElBQUFBLFNBQVM7QUFFVEksSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCTyxFQUFoQixDQUFtQixpQkFBbkIsRUFBc0NaLFNBQXRDO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQk8sRUFBaEIsQ0FBbUIsY0FBbkIsRUFBbUNaLFNBQW5DO0FBRUEsV0FBTyxZQUFNO0FBQ1pJLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlEsY0FBaEIsQ0FBK0IsaUJBQS9CLEVBQWtEYixTQUFsRDtBQUNBSSxNQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JRLGNBQWhCLENBQStCLGNBQS9CLEVBQStDYixTQUEvQztBQUNBLEtBSEQ7QUFJQSxHQW5DUSxFQW1DTixFQW5DTSxDQUFUO0FBcUNBLFNBQU9GLGdCQUFQO0FBQ0E7Ozs7Ozs7O1VDakRELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zZXJ2aWNlcy91c2VDb250cmFjdENlbG8uanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5cbmltcG9ydCBFUkM3MjFTaW5nbGV0b24gZnJvbSAnLi9FUkM3MjFTaW5nbGV0b25DZWxvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ29udHJhY3RDZWxvKGNvbnRyYWN0TmFtZSkge1xuXHRjb25zdCBbY29udHJhY3RJbnN0YW5jZSwgc2V0Q29udHJhY3RJbnN0YW5jZV0gPSB1c2VTdGF0ZSh7XG5cdFx0Y29udHJhY3Q6IG51bGwsXG5cdFx0c2lnbmVyQWRkcmVzczogbnVsbCxcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuXHRcdFx0XHRjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcblx0XHRcdFx0Y29uc3QgY29udHJhY3QgPSB7IGNvbnRyYWN0OiBudWxsLCBzaWduZXJBZGRyZXNzOiBudWxsIH07XG5cblx0XHRcdFx0Ly8gU2V0cyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHNwZWNpZmljIGNvbnRyYWN0IHBlciBhcHBsaWNhdGlvblxuXHRcdFx0XHQvLyBVc2VmdWwgZm9yIHN3aXRjaGluZyBhY3Jvc3MgbXVsdGlwbGUgY29udHJhY3RzIGluIGEgc2luZ2xlIGFwcGxpY2F0aW9uXG5cdFx0XHRcdHN3aXRjaCAoY29udHJhY3ROYW1lKSB7XG5cdFx0XHRcdFx0Y2FzZSAnRVJDNzIxJzpcblx0XHRcdFx0XHRcdGNvbnRyYWN0LmNvbnRyYWN0ID0gRVJDNzIxU2luZ2xldG9uKHNpZ25lcik7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ludmFsaWQgY29udHJhY3QnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udHJhY3Quc2lnbmVyQWRkcmVzcyA9IGF3YWl0IHNpZ25lci5nZXRBZGRyZXNzKCk7XG5cblx0XHRcdFx0c2V0Q29udHJhY3RJbnN0YW5jZShjb250cmFjdCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0ZmV0Y2hEYXRhKCk7XG5cblx0XHR3aW5kb3cuZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGZldGNoRGF0YSk7XG5cdFx0d2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCBmZXRjaERhdGEpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgZmV0Y2hEYXRhKTtcblx0XHRcdHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY2hhaW5DaGFuZ2VkJywgZmV0Y2hEYXRhKTtcblx0XHR9O1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIGNvbnRyYWN0SW5zdGFuY2U7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMTIyMmIxN2Y0YmU1ZWM2Y2Q2MjlcIjsgfSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsIkVSQzcyMVNpbmdsZXRvbiIsInVzZUNvbnRyYWN0Q2VsbyIsImNvbnRyYWN0TmFtZSIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsImNvbnRyYWN0SW5zdGFuY2UiLCJzZXRDb250cmFjdEluc3RhbmNlIiwiZmV0Y2hEYXRhIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnNvbGUiLCJsb2ciLCJnZXRBZGRyZXNzIiwiZXJyb3IiLCJvbiIsInJlbW92ZUxpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==