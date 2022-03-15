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
  }, 2000);

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
/******/ 	__webpack_require__.h = function() { return "8ad5bfa3e93ccf2ac45d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmY5NTU4ZmU1NjViNDBkMzdhMWRhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUdPLFNBQVNLLEdBQVQsR0FBNEI7QUFDL0Isa0JBQXNCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUI7QUFBQTtBQUFBLE1BQU9LLEdBQVA7QUFBQSxNQUFZQyxNQUFaOztBQUNBLG1CQUFzQ04sK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPTyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLG1CQUE4QlIsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPUyxRQUFQO0FBQUEsTUFBaUJDLFNBQWpCOztBQUorQixXQUtwQkMsT0FMb0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BS25DLGlCQUF1QkMsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGtCQUFJQSxJQUFJLElBQUksTUFBWixFQUFtQixDQUVsQjs7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUxtQztBQUFBO0FBQUE7O0FBQUEsV0FXaEJDLFNBWGdCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBNQVcvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1FDLGNBQUFBLFFBRFIsR0FDbUIsSUFEbkI7O0FBQUE7QUFBQSxtQkFFV0EsUUFGWDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUlZQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxhQUFQLENBQXFCQyxVQUFyQixFQUFaO0FBSlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFRZ0NoQixnREFBQSxDQUFnQiwyRkFBYztBQUFFa0IsZ0JBQUFBLElBQUksRUFBRTtBQUFFQyxrQkFBQUEsUUFBUSxFQUFFLElBQUluQiw4RUFBSjtBQUFaO0FBQVIsZUFBZCxF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QUFBLEtBQUssRUFBRSx1QkFBVDtBQUFrQ0YsTUFBQUEsUUFBUSxFQUFFLEVBQTVDO0FBQWdEQyxNQUFBQSxhQUFhLEVBQUU7QUFBL0Q7QUFBeEMsS0FDS25ELFdBREwsQ0FKSixDQUZKLGVBVUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsbUJBQU07QUFBRVUsTUFBQUEsTUFBTSxDQUFDMEIsWUFBUCxDQUFvQmlCLE9BQXBCLENBQTRCLE1BQTVCLEVBQW9DLEVBQXBDO0FBQTBDM0MsTUFBQUEsTUFBTSxDQUFDMEIsWUFBUCxDQUFvQmlCLE9BQXBCLENBQTRCLG1CQUE1QixFQUFnRCxFQUFoRDtBQUFxRDNDLE1BQUFBLE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQjJDLE9BQXJCO0FBQWdDNUMsTUFBQUEsTUFBTSxDQUFDNkMsUUFBUCxDQUFnQkMsTUFBaEI7QUFBMEIsS0FBaE07QUFBa00sYUFBUyxFQUFDLGdCQUE1TTtBQUE2TixTQUFLLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBcE8sa0JBQ0k7QUFBTSxhQUFTLEVBQUM7QUFBaEIsa0JBQ0k7QUFBSyxTQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBTyxFQUFDLFdBQWhEO0FBQTRELFVBQU0sRUFBRSxFQUFwRTtBQUF3RSxTQUFLLEVBQUUsRUFBL0U7QUFBbUYsU0FBSyxFQUFFO0FBQUVDLE1BQUFBLElBQUksRUFBRTtBQUFSO0FBQTFGLGtCQUNJO0FBQ0ksWUFBUSxFQUFDLFNBRGI7QUFFSSxZQUFRLEVBQUMsU0FGYjtBQUdJLEtBQUMsRUFBQztBQUhOLElBREosQ0FESixDQURKLENBVkosQ0FESixDQURKLENBYkosQ0FISixDQURKLENBREo7QUFvREg7Ozs7Ozs7O1VDeEtELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTmF2L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7Q29udGVudExvYWRlcn0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50TG9hZGVyJ1xuaW1wb3J0IHsgdXNlSW50bCB9IGZyb20gJ3JlYWN0LWludGwnXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5pbXBvcnQgJ0AvbmVhci1jb250cmFjdHMvY29udHJhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwiQC9jb25maWdcIlxuXG5leHBvcnQgZnVuY3Rpb24gTmF2KCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBbYWNjLCBzZXRBY2NdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtOZWFyQmFsYW5jZSwgc2V0TmVhckJhbGFuY2VdID0gdXNlU3RhdGUoJycpO1xuICAgIFxuICAgIGNvbnN0IFtpc1NpZ25lZCwgc2V0U2lnbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbmFzeW5jIGZ1bmN0aW9uIHNldEljb24odHlwZSl7XG4gICAgaWYgKHR5cGUgPT0gXCJORUFSXCIpe1xuXG4gICAgfVxufVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hJbmZvKCkge1xuICAgICAgICB2YXIgYm9vbHRydWUgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoYm9vbHRydWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXppbmcgY29ubmVjdGlvbiB0byB0aGUgTkVBUiBub2RlLlxuICAgICAgICAgICAgICAgIHdpbmRvdy5uZWFyID0gYXdhaXQgbmVhckFQSS5jb25uZWN0KE9iamVjdC5hc3NpZ24oeyBkZXBzOiB7IGtleVN0b3JlOiBuZXcgbmVhckFQSS5rZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCkgfSB9LCBuZWFyQ29uZmlnKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXppbmcgV2FsbGV0IGJhc2VkIEFjY291bnQuIEl0IGNhbiB3b3JrIHdpdGggTkVBUiBUZXN0TmV0IHdhbGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gaXMgaG9zdGVkIGF0IGh0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmdcbiAgICAgICAgICAgICAgICB3aW5kb3cud2FsbGV0QWNjb3VudCA9IG5ldyBuZWFyQVBJLldhbGxldEFjY291bnQod2luZG93Lm5lYXIpO1xuXG5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgYWNjb3VuID0gYXdhaXQgbmVhci5hY2NvdW50KHdpbmRvdy53YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpKTtcbiAgICAgICAgICAgIGF3YWl0IHNldEFjYyh3aW5kb3cud2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKSk7XG4gICAgICAgICAgICB2YXIgQmFsYW5jZSA9IGF3YWl0IGFjY291bi5nZXRBY2NvdW50QmFsYW5jZSgpO1xuICAgICAgICAgICAgbGV0IHByaWNlID0gYXdhaXQgTnVtYmVyKEJhbGFuY2UudG90YWwgLyAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKTtcblxuICAgICAgICAgICAgc2V0TmVhckJhbGFuY2UocHJpY2UudG9TdHJpbmcoKSArIFwiIE5FQVJcIik7XG4gICAgICAgICAgICBzZXRJY29uKClcbiAgICAgICAgICAgIHNldFNpZ25lZCh0cnVlKTtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpdGhvdXRTaWduXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpdGhTaWduXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGF3YWl0IHNldEFjYyggIHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MudG9TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMjUpICsgXCIuLi5cIik7XG4gICAgICAgICAgICBsZXQgQmxjID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FsZmFqb3Jlcy1ibG9ja3Njb3V0LmNlbG8tdGVzdG5ldC5vcmcvYXBpL2V0aC1ycGNcIiwge1xuICAgICAgICAgICAgICAgIFwiaGVhZGVyc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0LCAqLyo7IHE9MC4wMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFjY2VwdC1sYW5ndWFnZVwiOiBcImVuLVVTLGVuO3E9MC45XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY2FjaGUtY29udHJvbFwiOiBcIm5vLWNhY2hlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImJvZHlcIjogXCJ7XFxcImlkXFxcIjowLFxcXCJqc29ucnBjXFxcIjpcXFwiMi4wXFxcIixcXFwibWV0aG9kXFxcIjpcXFwiZXRoX2dldEJhbGFuY2VcXFwiLFxcXCJwYXJhbXNcXFwiOltcXFwiXCIgKyB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzICsgXCJcXFwiLFxcXCJsYXRlc3RcXFwiXX1cIixcbiAgICAgICAgICAgICAgICBcIm1ldGhvZFwiOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJjb3JzXCIsXG4gICAgICAgICAgICAgICAgXCJjcmVkZW50aWFsc1wiOiBcIm9taXRcIlxuICAgICAgICAgICAgfSkudGhlbihlPT5lLmpzb24oKSkudGhlbihlPT5lLnJlc3VsdCk7XG4gICAgICAgICAgIGxldCBwcmljZT0gcGFyc2VJbnQoQmxjKS8xMDAwMDAwMDAwMDAwMDAwMDAwXG4gICAgICAgICAgIFxuICAgICAgICAgICAgc2V0TmVhckJhbGFuY2UocHJpY2UudG9TdHJpbmcoKSArIFwiIENFTE9cIik7XG4gICAgICAgICAgICBzZXRTaWduZWQodHJ1ZSk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRob3V0U2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aXRoU2lnblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEluZm8oKTtcbiAgICB9LCAyMDAwKTtcbiAgICBmdW5jdGlvbiBOYXZCdXR0b25zKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gbnVsbCB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvbmF0aW9uXCIgaWQ9XCJkb25hdGlvbmJ0bk5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9DcmVhdGVFdmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudHNcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8Lz4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwidXNlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9kb25hdGlvblwiIGlkPVwiZG9uYXRpb25idG5OYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPjwvPik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2RvbmF0aW9uXCIgaWQ9XCJkb25hdGlvbmJ0bk5hdlwiPlxuICAgICAgICAgICAgICAgICAgICBEb25hdGlvblxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvQ3JlYXRlRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudHNcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8Lz4pXG4gICAgfVxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW5hdlwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxOYXZCdXR0b25zIC8+XG5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3dpdGhvdXRTaWduJyBjbGFzc05hbWU9XCJ3YWxsZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svZG9uYXRpb25dXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBhcmlhLWRpc2FibGVkPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3aXRoU2lnblwiIGNsYXNzTmFtZT1cIndhbGxldHNcIiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCIgc3R5bGU9e3sgaGVpZ2h0OiA0OCwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX3dyYXBwZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0X19pbmZvXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsZXRfX2FkZHJlc3NcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGxldHRlclNwYWNpbmc6IFwiMC41cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldF9fYmFsYW5jZVwiIHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMzYgMTkwIDMzIC8gNTAlKVwiLCBmb250U2l6ZTogMTIsIGxldHRlclNwYWNpbmc6IFwiMC42cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7TmVhckJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVHlwZVwiLCBcIlwiKTsgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIsXCJcIik7IHdpbmRvdy53YWxsZXRBY2NvdW50LnNpZ25PdXQoKTsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpIH19IGNsYXNzTmFtZT1cImJ0biBidG4tbG9nb3V0XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgaGVpZ2h0PXszMn0gd2lkdGg9ezMyfSBzdHlsZT17eyBmaWxsOiBcInJnYigxOTcsIDIyOCwgMjQzKVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE4LjQ3NTMgMTguMjkwM0gxOS4yOTVIMjAuMTE0NlYyMS41MTYyVjIzLjkzNTVIMTUuMTk2NkwxNS4xOTY3IDI3TDEzLjA0OTIgMjYuMjc5OUw4LjExNjMzIDI0LjY2MkM3LjQ0NTkgMjQuNDMzIDcgMjQuMjc4MiA3IDI0LjI3ODJWN0g4LjYzOTM4QzguNjYxOTYgNyA4LjY4Mzc4IDcuMDA0NTkgOC43MDU1OCA3LjAwOTE5QzguNzIyNDggNy4wMTI3NSA4LjczOTM2IDcuMDE2MyA4Ljc1NjU5IDcuMDE3NzJDOC43NjkyOSA3LjAxNjA1IDguNzgxMjUgNy4wMTI2NyA4Ljc5MzE1IDcuMDA5MzFDOC44MDk2OCA3LjAwNDY0IDguODI2MSA3IDguODQ0MjQgN0gxNy42NTU2SDIwLjExNDZWMTEuODM4N0gxOS4yOTVIMTguNDc1M0wxOC40NzU0IDguNjEyNjdMMTcuNjU1NiA4LjYxMjgxSDEzLjgzNzZIMTEuOTE4TDE1LjE5NjYgOS40MTkzNlYyMi4zMjI2SDE4LjQ3NTNWMjEuNTE2MlYxOC4yOTAzWk0yMy4xNTMgMTEuMjY4NkwyNyAxNS4wNjQ0QzI3IDE1LjA2NDQgMjYuNzUyMiAxNS4zMTk0IDI2LjQzMTggMTUuNjM0NkwyMy4xNTMgMTguODYwNUwyMS43NTQxIDIwLjIyNTdMMjEuNzUzOSAxNS44NzA5SDE3LjY1NTZWMTUuMDY0NVYxNC4yNTgxSDIxLjc1MzlMMjEuNzU0MSA5LjkwMzAxTDIzLjE1MyAxMS4yNjg2WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuXG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI4YWQ1YmZhM2U5M2NjZjJhYzQ1ZFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZMaW5rIiwibmVhckFQSSIsIk5hdiIsImFjYyIsInNldEFjYyIsIk5lYXJCYWxhbmNlIiwic2V0TmVhckJhbGFuY2UiLCJpc1NpZ25lZCIsInNldFNpZ25lZCIsInNldEljb24iLCJ0eXBlIiwiZmV0Y2hJbmZvIiwiYm9vbHRydWUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwid2FsbGV0QWNjb3VudCIsImlzU2lnbmVkSW4iLCJjb25uZWN0IiwiZGVwcyIsImtleVN0b3JlIiwia2V5U3RvcmVzIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibmVhckNvbmZpZyIsIm5lYXIiLCJXYWxsZXRBY2NvdW50IiwiYWNjb3VudCIsImdldEFjY291bnRJZCIsImFjY291biIsImdldEFjY291bnRCYWxhbmNlIiwiQmFsYW5jZSIsIk51bWJlciIsInRvdGFsIiwicHJpY2UiLCJ0b1N0cmluZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJldGhlcmV1bSIsInNlbGVjdGVkQWRkcmVzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdWJzdHJpbmciLCJmZXRjaCIsInRoZW4iLCJlIiwianNvbiIsInJlc3VsdCIsIkJsYyIsIk5hdkJ1dHRvbnMiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJoZWlnaHQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJzZXRJdGVtIiwic2lnbk91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwicGFkZGluZyIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9