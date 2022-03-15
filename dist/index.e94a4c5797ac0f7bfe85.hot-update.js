"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/components/layout/Nav/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/layout/Nav/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nav": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/components/layout/Nav/index.scss");
/* harmony import */ var _near_contracts_contract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/near-contracts/contract */ "./src/near-contracts/contract.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_8__);





 // import {ContentLoader} from '@/components/common/ContentLoader'





function Nav() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      acc = _useState2[0],
      setAcc = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      NearBalance = _useState4[0],
      setNearBalance = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      isSigned = _useState6[0],
      setSigned = _useState6[1];

  function setIcon(_x) {
    return _setIcon.apply(this, arguments);
  }

  function _setIcon() {
    _setIcon = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(type) {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (type == "NEAR") {}

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _setIcon.apply(this, arguments);
  }

  function fetchInfo() {
    return _fetchInfo.apply(this, arguments);
  }

  function _fetchInfo() {
    _fetchInfo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
      var booltrue, accoun, Balance, price, Blc, _price;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              booltrue = true;

            case 1:
              if (!booltrue) {
                _context2.next = 17;
                break;
              }

              _context2.prev = 2;
              console.log(window.walletAccount.isSignedIn());
              return _context2.abrupt("break", 17);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](2);
              _context2.next = 11;
              return near_api_js__WEBPACK_IMPORTED_MODULE_8__.connect(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({
                deps: {
                  keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_8__.keyStores.BrowserLocalStorageKeyStore()
                }
              }, nearConfig));

            case 11:
              window.near = _context2.sent;
              // Initializing Wallet based Account. It can work with NEAR TestNet wallet that
              // is hosted at https://wallet.testnet.near.org
              window.walletAccount = new near_api_js__WEBPACK_IMPORTED_MODULE_8__.WalletAccount(window.near);
              return _context2.abrupt("continue", 1);

            case 14:
              ;
              _context2.next = 1;
              break;

            case 17:
              if (!(window.walletAccount.isSignedIn() == true)) {
                _context2.next = 36;
                break;
              }

              _context2.next = 20;
              return near.account(window.walletAccount.getAccountId());

            case 20:
              accoun = _context2.sent;
              _context2.next = 23;
              return setAcc(window.walletAccount.getAccountId());

            case 23:
              _context2.next = 25;
              return accoun.getAccountBalance();

            case 25:
              Balance = _context2.sent;
              _context2.next = 28;
              return Number(Balance.total / 1000000000000000000000000);

            case 28:
              price = _context2.sent;
              setNearBalance(price.toString() + " NEAR");
              setIcon();
              setSigned(true);
              window.document.getElementById("withoutSign").style.display = "none";
              window.document.getElementById("withSign").style.display = "";
              _context2.next = 47;
              break;

            case 36:
              if (!(window.ethereum.selectedAddress != null && window.localStorage.getItem("ConnectedMetaCelo") != "")) {
                _context2.next = 47;
                break;
              }

              _context2.next = 39;
              return setAcc(window.ethereum.selectedAddress.toString().substring(0, 25) + "...");

            case 39:
              _context2.next = 41;
              return fetch("https://alfajores-blockscout.celo-testnet.org/api/eth-rpc", {
                "headers": {
                  "accept": "application/json, text/javascript, */*; q=0.01",
                  "accept-language": "en-US,en;q=0.9",
                  "cache-control": "no-cache",
                  "content-type": "application/json; charset=UTF-8"
                },
                "body": "{\"id\":0,\"jsonrpc\":\"2.0\",\"method\":\"eth_getBalance\",\"params\":[\"" + window.ethereum.selectedAddress + "\",\"latest\"]}",
                "method": "POST",
                "mode": "cors",
                "credentials": "omit"
              }).then(function (e) {
                return e.json();
              }).then(function (e) {
                return e.result;
              });

            case 41:
              Blc = _context2.sent;
              _price = _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(Blc) / 1000000000000000000;
              setNearBalance(_price.toString() + " CELO");
              setSigned(true);
              window.document.getElementById("withoutSign").style.display = "none";
              window.document.getElementById("withSign").style.display = "";

            case 47:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 7]]);
    }));
    return _fetchInfo.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchInfo();
  }, [2000]);

  function NavButtons() {
    if (window.localStorage.getItem("Type") == null || window.localStorage.getItem("Type") == "") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
        to: "/donation",
        id: "donationbtnNav"
      }, "Donation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
        to: "/CreateEvents"
      }, "Create Events")));
    }

    if (window.localStorage.getItem("Type") == "user") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
        to: "/donation",
        id: "donationbtnNav"
      }, "Donation")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
      to: "/donation",
      id: "donationbtnNav"
    }, "Donation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
      to: "/CreateEvents"
    }, "Create Events")));
  }

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      modalShow = _useState8[0],
      setModalShow = _useState8[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("nav", {
    className: "main-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(NavButtons, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "withoutSign",
    className: "wallets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "wallet"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
    to: "/login?[/donation]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "aria-disabled": "false"
  }, "Login")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "withSign",
    className: "wallets",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "wallet",
    style: {
      height: 48,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "wallet__wrapper",
    style: {
      display: "flex",
      alignItems: "center",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "wallet__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "wallet__address",
    style: {
      fontSize: 14,
      letterSpacing: "0.5px"
    }
  }, acc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "wallet__balance",
    style: {
      color: "rgb(236 190 33 / 50%)",
      fontSize: 12,
      letterSpacing: "0.6px"
    }
  }, NearBalance)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("button", {
    type: "button",
    onClick: function onClick() {
      window.localStorage.setItem("Type", "");
      window.localStorage.setItem("ConnectedMetaCelo", "");
      window.walletAccount.signOut();
      window.location.reload();
    },
    className: "btn btn-logout",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    height: 32,
    width: 32,
    style: {
      fill: "rgb(197, 228, 243)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"
  }))))))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f9558fe565b40d37a1da"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmU5NGE0YzU3OTdhYzBmN2JmZTg1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUdPLFNBQVNLLEdBQVQsR0FBNEI7QUFDL0Isa0JBQXNCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUI7QUFBQTtBQUFBLE1BQU9LLEdBQVA7QUFBQSxNQUFZQyxNQUFaOztBQUNBLG1CQUFzQ04sK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPTyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLG1CQUE4QlIsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPUyxRQUFQO0FBQUEsTUFBaUJDLFNBQWpCOztBQUorQixXQUtwQkMsT0FMb0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BS25DLGlCQUF1QkMsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGtCQUFJQSxJQUFJLElBQUksTUFBWixFQUFtQixDQUVsQjs7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUxtQztBQUFBO0FBQUE7O0FBQUEsV0FXaEJDLFNBWGdCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBNQVcvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGNBQUFBLFFBRFIsR0FDbUIsSUFEbkI7O0FBQUE7QUFBQSxtQkFFV0EsUUFGWDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUlZQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxhQUFQLENBQXFCQyxVQUFyQixFQUFaO0FBSlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFRZ0NoQixnREFBQSxDQUFnQiwyRkFBYztBQUFFa0IsZ0JBQUFBLElBQUksRUFBRTtBQUFFQyxrQkFBQUEsUUFBUSxFQUFFLElBQUluQiw4RUFBSjtBQUFaO0FBQVIsZUFBZCxF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O0FBQUVzRCxNQUFBQSxLQUFLLEVBQUUsdUJBQVQ7QUFBa0NGLE1BQUFBLFFBQVEsRUFBRSxFQUE1QztBQUFnREMsTUFBQUEsYUFBYSxFQUFFO0FBQS9EO0FBQXhDLEtBQ0tuRCxXQURMLENBSkosQ0FGSixlQVVJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFLG1CQUFNO0FBQUVVLE1BQUFBLE1BQU0sQ0FBQzBCLFlBQVAsQ0FBb0JpQixPQUFwQixDQUE0QixNQUE1QixFQUFvQyxFQUFwQztBQUEwQzNDLE1BQUFBLE1BQU0sQ0FBQzBCLFlBQVAsQ0FBb0JpQixPQUFwQixDQUE0QixtQkFBNUIsRUFBZ0QsRUFBaEQ7QUFBcUQzQyxNQUFBQSxNQUFNLENBQUNDLGFBQVAsQ0FBcUIyQyxPQUFyQjtBQUFnQzVDLE1BQUFBLE1BQU0sQ0FBQzZDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQTBCLEtBQWhNO0FBQWtNLGFBQVMsRUFBQyxnQkFBNU07QUFBNk4sU0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQXBPLGtCQUNJO0FBQU0sYUFBUyxFQUFDO0FBQWhCLGtCQUNJO0FBQUssU0FBSyxFQUFDLDRCQUFYO0FBQXdDLFdBQU8sRUFBQyxXQUFoRDtBQUE0RCxVQUFNLEVBQUUsRUFBcEU7QUFBd0UsU0FBSyxFQUFFLEVBQS9FO0FBQW1GLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUExRixrQkFDSTtBQUNJLFlBQVEsRUFBQyxTQURiO0FBRUksWUFBUSxFQUFDLFNBRmI7QUFHSSxLQUFDLEVBQUM7QUFITixJQURKLENBREosQ0FESixDQVZKLENBREosQ0FESixDQWJKLENBSEosQ0FESixDQURKO0FBb0RIOzs7Ozs7OztVQ3hLRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L05hdi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQge0NvbnRlbnRMb2FkZXJ9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vQ29udGVudExvYWRlcidcbmltcG9ydCB7IHVzZUludGwgfSBmcm9tICdyZWFjdC1pbnRsJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuaW1wb3J0ICdAL25lYXItY29udHJhY3RzL2NvbnRyYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIkAvY29uZmlnXCJcblxuZXhwb3J0IGZ1bmN0aW9uIE5hdigpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgW2FjYywgc2V0QWNjXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbTmVhckJhbGFuY2UsIHNldE5lYXJCYWxhbmNlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBcbiAgICBjb25zdCBbaXNTaWduZWQsIHNldFNpZ25lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5hc3luYyBmdW5jdGlvbiBzZXRJY29uKHR5cGUpe1xuICAgIGlmICh0eXBlID09IFwiTkVBUlwiKXtcblxuICAgIH1cbn1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSW5mbygpIHtcbiAgICAgICAgdmFyIGJvb2x0cnVlID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGJvb2x0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6aW5nIGNvbm5lY3Rpb24gdG8gdGhlIE5FQVIgbm9kZS5cbiAgICAgICAgICAgICAgICB3aW5kb3cubmVhciA9IGF3YWl0IG5lYXJBUEkuY29ubmVjdChPYmplY3QuYXNzaWduKHsgZGVwczogeyBrZXlTdG9yZTogbmV3IG5lYXJBUEkua2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpIH0gfSwgbmVhckNvbmZpZykpO1xuXG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6aW5nIFdhbGxldCBiYXNlZCBBY2NvdW50LiBJdCBjYW4gd29yayB3aXRoIE5FQVIgVGVzdE5ldCB3YWxsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGlzIGhvc3RlZCBhdCBodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnXG4gICAgICAgICAgICAgICAgd2luZG93LndhbGxldEFjY291bnQgPSBuZXcgbmVhckFQSS5XYWxsZXRBY2NvdW50KHdpbmRvdy5uZWFyKTtcblxuXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IGFjY291biA9IGF3YWl0IG5lYXIuYWNjb3VudCh3aW5kb3cud2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKSk7XG4gICAgICAgICAgICBhd2FpdCBzZXRBY2Mod2luZG93LndhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkpO1xuICAgICAgICAgICAgdmFyIEJhbGFuY2UgPSBhd2FpdCBhY2NvdW4uZ2V0QWNjb3VudEJhbGFuY2UoKTtcbiAgICAgICAgICAgIGxldCBwcmljZSA9IGF3YWl0IE51bWJlcihCYWxhbmNlLnRvdGFsIC8gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCk7XG5cbiAgICAgICAgICAgIHNldE5lYXJCYWxhbmNlKHByaWNlLnRvU3RyaW5nKCkgKyBcIiBORUFSXCIpO1xuICAgICAgICAgICAgc2V0SWNvbigpXG4gICAgICAgICAgICBzZXRTaWduZWQodHJ1ZSk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRob3V0U2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRoU2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzICE9IG51bGwgJiYgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIikgIT0gXCJcIikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhd2FpdCBzZXRBY2MoICB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDI1KSArIFwiLi4uXCIpO1xuICAgICAgICAgICAgbGV0IEJsYyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hbGZham9yZXMtYmxvY2tzY291dC5jZWxvLXRlc3RuZXQub3JnL2FwaS9ldGgtcnBjXCIsIHtcbiAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdCwgKi8qOyBxPTAuMDFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhY2NlcHQtbGFuZ3VhZ2VcIjogXCJlbi1VUyxlbjtxPTAuOVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNhY2hlLWNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJib2R5XCI6IFwie1xcXCJpZFxcXCI6MCxcXFwianNvbnJwY1xcXCI6XFxcIjIuMFxcXCIsXFxcIm1ldGhvZFxcXCI6XFxcImV0aF9nZXRCYWxhbmNlXFxcIixcXFwicGFyYW1zXFxcIjpbXFxcIlwiICsgd2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyArIFwiXFxcIixcXFwibGF0ZXN0XFxcIl19XCIsXG4gICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgXCJtb2RlXCI6IFwiY29yc1wiLFxuICAgICAgICAgICAgICAgIFwiY3JlZGVudGlhbHNcIjogXCJvbWl0XCJcbiAgICAgICAgICAgIH0pLnRoZW4oZT0+ZS5qc29uKCkpLnRoZW4oZT0+ZS5yZXN1bHQpO1xuICAgICAgICAgICBsZXQgcHJpY2U9IHBhcnNlSW50KEJsYykvMTAwMDAwMDAwMDAwMDAwMDAwMFxuICAgICAgICAgICBcbiAgICAgICAgICAgIHNldE5lYXJCYWxhbmNlKHByaWNlLnRvU3RyaW5nKCkgKyBcIiBDRUxPXCIpO1xuICAgICAgICAgICAgc2V0U2lnbmVkKHRydWUpO1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aG91dFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2l0aFNpZ25cIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hJbmZvKCk7XG4gICAgfSwgWzIwMDBdKTtcbiAgICBmdW5jdGlvbiBOYXZCdXR0b25zKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gbnVsbCB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvbmF0aW9uXCIgaWQ9XCJkb25hdGlvbmJ0bk5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9DcmVhdGVFdmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudHNcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8Lz4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwidXNlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb25hdGlvblwiIGlkPVwiZG9uYXRpb25idG5OYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPjwvPik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvbmF0aW9uXCIgaWQ9XCJkb25hdGlvbmJ0bk5hdlwiPlxuICAgICAgICAgICAgICAgICAgICBEb25hdGlvblxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvQ3JlYXRlRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudHNcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8Lz4pXG4gICAgfVxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW5hdlwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxOYXZCdXR0b25zIC8+XG5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3dpdGhvdXRTaWduJyBjbGFzc05hbWU9XCJ3YWxsZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svZG9uYXRpb25dXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBhcmlhLWRpc2FibGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aXRoU2lnblwiIGNsYXNzTmFtZT1cIndhbGxldHNcIiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCIgc3R5bGU9e3sgaGVpZ2h0OiA0OCwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX3dyYXBwZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0X19pbmZvXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX2FkZHJlc3NcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGxldHRlclNwYWNpbmc6IFwiMC41cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9fYmFsYW5jZVwiIHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMzYgMTkwIDMzIC8gNTAlKVwiLCBmb250U2l6ZTogMTIsIGxldHRlclNwYWNpbmc6IFwiMC42cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7TmVhckJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVHlwZVwiLCBcIlwiKTsgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIsXCJcIik7IHdpbmRvdy53YWxsZXRBY2NvdW50LnNpZ25PdXQoKTsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpIH19IGNsYXNzTmFtZT1cImJ0biBidG4tbG9nb3V0XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgaGVpZ2h0PXszMn0gd2lkdGg9ezMyfSBzdHlsZT17eyBmaWxsOiBcInJnYigxOTcsIDIyOCwgMjQzKVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE4LjQ3NTMgMTguMjkwM0gxOS4yOTVIMjAuMTE0NlYyMS41MTYyVjIzLjkzNTVIMTUuMTk2NkwxNS4xOTY3IDI3TDEzLjA0OTIgMjYuMjc5OUw4LjExNjMzIDI0LjY2MkM3LjQ0NTkgMjQuNDMzIDcgMjQuMjc4MiA3IDI0LjI3ODJWN0g4LjYzOTM4QzguNjYxOTYgNyA4LjY4Mzc4IDcuMDA0NTkgOC43MDU1OCA3LjAwOTE5QzguNzIyNDggNy4wMTI3NSA4LjczOTM2IDcuMDE2MyA4Ljc1NjU5IDcuMDE3NzJDOC43NjkyOSA3LjAxNjA1IDguNzgxMjUgNy4wMTI2NyA4Ljc5MzE1IDcuMDA5MzFDOC44MDk2OCA3LjAwNDY0IDguODI2MSA3IDguODQ0MjQgN0gxNy42NTU2SDIwLjExNDZWMTEuODM4N0gxOS4yOTVIMTguNDc1M0wxOC40NzU0IDguNjEyNjdMMTcuNjU1NiA4LjYxMjgxSDEzLjgzNzZIMTEuOTE4TDE1LjE5NjYgOS40MTkzNlYyMi4zMjI2SDE4LjQ3NTNWMjEuNTE2MlYxOC4yOTAzWk0yMy4xNTMgMTEuMjY4NkwyNyAxNS4wNjQ0QzI3IDE1LjA2NDQgMjYuNzUyMiAxNS4zMTk0IDI2LjQzMTggMTUuNjM0NkwyMy4xNTMgMTguODYwNUwyMS43NTQxIDIwLjIyNTdMMjEuNzUzOSAxNS44NzA5SDE3LjY1NTZWMTUuMDY0NVYxNC4yNTgxSDIxLjc1MzlMMjEuNzU0MSA5LjkwMzAxTDIzLjE1MyAxMS4yNjg2WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuXG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJmOTU1OGZlNTY1YjQwZDM3YTFkYVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZMaW5rIiwibmVhckFQSSIsIk5hdiIsImFjYyIsInNldEFjYyIsIk5lYXJCYWxhbmNlIiwic2V0TmVhckJhbGFuY2UiLCJpc1NpZ25lZCIsInNldFNpZ25lZCIsInNldEljb24iLCJ0eXBlIiwiZmV0Y2hJbmZvIiwiYm9vbHRydWUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwid2FsbGV0QWNjb3VudCIsImlzU2lnbmVkSW4iLCJjb25uZWN0IiwiZGVwcyIsImtleVN0b3JlIiwia2V5U3RvcmVzIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibmVhckNvbmZpZyIsIm5lYXIiLCJXYWxsZXRBY2NvdW50IiwiYWNjb3VudCIsImdldEFjY291bnRJZCIsImFjY291biIsImdldEFjY291bnRCYWxhbmNlIiwiQmFsYW5jZSIsIk51bWJlciIsInRvdGFsIiwicHJpY2UiLCJ0b1N0cmluZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJldGhlcmV1bSIsInNlbGVjdGVkQWRkcmVzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdWJzdHJpbmciLCJmZXRjaCIsInRoZW4iLCJlIiwianNvbiIsInJlc3VsdCIsIkJsYyIsIk5hdkJ1dHRvbnMiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJzZXRJdGVtIiwic2lnbk91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwicGFkZGluZyIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9