"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/modals/lottery/BuyLotteryModal.jsx":
/*!************************************************!*\
  !*** ./src/modals/lottery/BuyLotteryModal.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
      walletType = _ref.walletType,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__["default"].Label, null, "Total tickets"), amountTicketInput, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("span", null, "Total price ", Totalamount, " ", walletType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "d-grid",
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "primary",
    onClick: buyLottery
  }, "Buy Ticket"))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8cf0c4862ee490e310ea"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmIwMWY5ZDVjYjBlNGJlOGI5ZDY3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFZSxTQUFTWSxlQUFULE9BU1o7QUFBQSxNQVJDQyxJQVFELFFBUkNBLElBUUQ7QUFBQSxNQVBDQyxNQU9ELFFBUENBLE1BT0Q7QUFBQSxNQU5DQyxLQU1ELFFBTkNBLEtBTUQ7QUFBQSxNQUxDQyxRQUtELFFBTENBLFFBS0Q7QUFBQSxNQUpDQyxTQUlELFFBSkNBLFNBSUQ7QUFBQSxNQUhDQyxLQUdELFFBSENBLEtBR0Q7QUFBQSxNQUZDQyxVQUVELFFBRkNBLFVBRUQ7QUFBQSxNQURDQyxZQUNELFFBRENBLFlBQ0Q7O0FBQ0MscUJBQW9DVixrRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRVyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBRUEsc0JBQXNDaEIsK0VBQVksQ0FBQztBQUMvQ2lCLElBQUFBLElBQUksRUFBRSxNQUR5QztBQUUvQ0MsSUFBQUEsV0FBVyxFQUFFO0FBRmtDLEdBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsaUJBQWpCOztBQUlBLGtCQUFzQ3pCLCtDQUFRLENBQUMsQ0FBRCxDQUE5QztBQUFBO0FBQUEsTUFBTzBCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUExQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWjBCLElBQUFBLGNBQWMsQ0FBQ0gsUUFBUSxHQUFHUCxLQUFaLENBQWQ7QUFDSCxHQUZRLEVBRU4sQ0FBQ08sUUFBRCxDQUZNLENBQVQ7O0FBVEQsV0FhZ0JJLFVBYmhCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJNQWFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QUFBLE1BQU0sQ0FBQ29ELFFBQVAsQ0FBZ0JDLE1BQWhCOztBQXBESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXRFRDtBQUFBO0FBQUE7O0FBOEhDLHNCQUFRLGlIQUNKLGlEQUFDLDhEQUFEO0FBQ0ksUUFBSSxFQUFFaEYsSUFEVjtBQUVJLFVBQU0sRUFBRUMsTUFGWjtBQUdJLHVCQUFnQiwrQkFIcEI7QUFJSSxRQUFJLEVBQUMsSUFKVDtBQUtJLFlBQVE7QUFMWixrQkFPSSxpREFBQyxxRUFBRDtBQUFjLGVBQVc7QUFBekIsa0JBQ0ksaURBQUMsb0VBQUQ7QUFBYSxNQUFFLEVBQUM7QUFBaEIsMEJBREosQ0FQSixlQWFJLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDO0FBQXRCLGtCQUNJLGlEQUFDLDZEQUFELHFCQUNJLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDSSxpREFBQyxtRUFBRCx3QkFESixFQUVLWSxpQkFGTCxlQUdJLCtFQUFtQkMsV0FBbkIsT0FBaUNSLFVBQWpDLENBSEosQ0FESixlQU9JO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUUyRSxNQUFBQSxTQUFTLEVBQUU7QUFBYjtBQUEvQixrQkFDSSxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVqRTtBQUFuQyxrQkFESixDQVBKLENBREosQ0FiSixDQURJLENBQVI7QUFtQ0g7Ozs7Ozs7O1VDdkxELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvbW9kYWxzL2xvdHRlcnkvQnV5TG90dGVyeU1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVUb2tlbkFQSSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL3Rva2VuJztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5pbXBvcnQgeyBXYWxsZXRBY2NvdW50IH0gZnJvbSAnbmVhci1hcGktanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXlMb3R0ZXJ5TW9kYWwoe1xuICAgIHNob3csXG4gICAgb25IaWRlLFxuICAgIG5mdGlkLFxuICAgIG5mdHJlY2lkLFxuICAgIFRvQWRkcmVzcyxcbiAgICBwcmljZSxcbiAgICB3YWxsZXRUeXBlLFxuICAgIHRpY2tldG51bWJlclxufSkge1xuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblxuICAgIGNvbnN0IFtRdWFudGl0eSwgYW1vdW50VGlja2V0SW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJydcbiAgICB9KTtcbiAgICBjb25zdCBbVG90YWxhbW91bnQsIHNldFRvdGFsYW1vdW50XSA9IHVzZVN0YXRlKDApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUb3RhbGFtb3VudChRdWFudGl0eSAqIHByaWNlKTtcbiAgICB9LCBbUXVhbnRpdHldKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGJ1eUxvdHRlcnkoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKEJ1eWluZ0xvdHRlcnkoVG90YWxhbW91bnQsIFRvQWRkcmVzcyksIHtcbiAgICAgICAgICAgICAgICBwZW5kaW5nOiBcIkJ1eWluZyBMb3R0ZXJ5IFRpY2tldC4uLlwiLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBcInN1Y2Nlc3MhXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nT25BaXJ0YWJsZShUb3RhbGFtb3VudCwgVG9BZGRyZXNzKSwge1xuICAgICAgICAgICAgICAgIHBlbmRpbmc6IFwiVXBkYXRpbmcgTG90dGVyeSBUaWNrZXQgb24gQWlydGFibGUuLi5cIixcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogXCJTdWNjZXNzIVwiXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIEJ1eWluZ0xvdHRlcnkoQW1vdW50LCBUb0FkZHJlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG4gICAgICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uUHJvcHMuaW5uZXJUZXh0ID0gXCJDb25uZWN0IHRvIE5FQVIgd2FsbGV0XCJcbiAgICAgICAgICAgICAgICBhd2FpdCB0b2FzdC53YXJuKFwiTm90IGNvbm5lY3RlZCB3aXRoIE5FQVIgd2FsbGV0ISBDb25uZWN0aW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ0RlbWV0ZXInKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbmV0d29ya0lkOiBcInRlc3RuZXRcIixcbiAgICAgICAgICAgICAgICBrZXlTdG9yZTogbmV3IG5lYXJBUEkua2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpLFxuICAgICAgICAgICAgICAgIG5vZGVVcmw6IFwiaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICAgICAgICAgICAgICAgIHdhbGxldFVybDogXCJodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnXCIsXG4gICAgICAgICAgICAgICAgaGVscGVyVXJsOiBcImh0dHBzOi8vaGVscGVyLnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgICAgICAgICBleHBsb3JlclVybDogXCJodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBzZW5kcyBORUFSIHRva2Vuc1xuICAgICAgICAgICAgY29uc3QgbmVhciA9IGF3YWl0IG5lYXJBUEkuY29ubmVjdChjb25maWcpO1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IG5lYXIuYWNjb3VudCh3YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpKTtcbiAgICAgICAgICAgIC8vY29uc3QgYW1vdW50SW5Zb2N0byA9IG5lYXJBUEkudXRpbHMuZm9ybWF0LmZvcm1hdE5lYXJBbW91bnQoQW1vdW50KTtcblxuICAgICAgICAgICAgY29uc3QgYW1vdW50SW5Zb2N0byA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCdmdWxsd2lkZScsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCBhY2NvdW50LnNlbmRNb25leShcbiAgICAgICAgICAgICAgICBUb0FkZHJlc3MsIC8vIHJlY2VpdmVyIGFjY291bnRcbiAgICAgICAgICAgICAgICBhbW91bnRJbllvY3RvIC8vIGFtb3VudCBpbiB5b2N0b05FQVJcbiAgICAgICAgICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdPbkFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgaWYgKHRpY2tldG51bWJlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aWNrZXRudW1iZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50V2FsbGV0ID0gd2luZG93LndhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICAgICAgdmFyIGVuZG51bWJlciA9IE51bWJlcih0aWNrZXRudW1iZXIpICsgTnVtYmVyKFF1YW50aXR5KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IE51bWJlcih0aWNrZXRudW1iZXIpOyBpIDwgZW5kbnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5jcmVhdGUoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuZnRpZFwiOiBOdW1iZXIobmZ0aWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyXCI6IGN1cnJlbnRXYWxsZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJXYWxsZXRcIjogc2lnbmVyQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtYmVyXCI6IGlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVzZXJzID0gJyc7XG4gICAgICAgIGxldCBwYXJ0aWNpcGF0ZWQgPSAwO1xuICAgICAgICB2YXIgZG9uZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5maW5kKG5mdHJlY2lkLCBhc3luYyBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcbiAgICAgICAgICAgICAgICB1c2VycyA9IHJlY29yZC5nZXQoJ2lzYm91Z2h0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoJ3BhcnRpY2lwYXRlZCcpICE9IFwiXCIgJiYgcmVjb3JkLmdldCgncGFydGljaXBhdGVkJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZWQgPSByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwYXJ0aWNpcGF0ZWQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvbmUpO1xuXG4gICAgICAgIHVzZXJzID0gdXNlcnMgKyBcIiwgXCIgKyB3aW5kb3cud2FsbGV0QWNjb3VudC5fYXV0aERhdGEuYWNjb3VudElkO1xuICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykudXBkYXRlKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IG5mdHJlY2lkLFxuICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpc2JvdWdodFwiOiB1c2VycyxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNpcGF0ZWRcIjogcGFydGljaXBhdGVkICsgMSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0aWNrZXRudW1iZXJcIjogZW5kbnVtYmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuICg8PlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHNob3c9e3Nob3d9XG4gICAgICAgICAgICBvbkhpZGU9e29uSGlkZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcbiAgICAgICAgICAgIHNpemU9XCJnZ1wiXG4gICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIEJ1eSBMb3R0ZXJ5IFRpY2tldFxuICAgICAgICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XG5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Ub3RhbCB0aWNrZXRzPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Ftb3VudFRpY2tldElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VG90YWwgcHJpY2Uge1RvdGFsYW1vdW50fSB7d2FsbGV0VHlwZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YnV5TG90dGVyeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV5IFRpY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgPC9Nb2RhbD5cblxuICAgIDwvPlxuXG5cbiAgICApO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjhjZjBjNDg2MmVlNDkwZTMxMGVhXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsImNyZWF0ZVRva2VuQVBJIiwibmVhckFQSSIsInRvYXN0IiwidXNlQ29udHJhY3QiLCJXYWxsZXRBY2NvdW50IiwiQnV5TG90dGVyeU1vZGFsIiwic2hvdyIsIm9uSGlkZSIsIm5mdGlkIiwibmZ0cmVjaWQiLCJUb0FkZHJlc3MiLCJwcmljZSIsIndhbGxldFR5cGUiLCJ0aWNrZXRudW1iZXIiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJRdWFudGl0eSIsImFtb3VudFRpY2tldElucHV0IiwiVG90YWxhbW91bnQiLCJzZXRUb3RhbGFtb3VudCIsImJ1eUxvdHRlcnkiLCJwcm9taXNlIiwiQnV5aW5nTG90dGVyeSIsInBlbmRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJDcmVhdGluZ09uQWlydGFibGUiLCJBbW91bnQiLCJidXR0b25Qcm9wcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIndpbmRvdyIsIndhbGxldEFjY291bnQiLCJpc1NpZ25lZEluIiwiaW5uZXJUZXh0Iiwid2FybiIsInJlcXVlc3RTaWduSW4iLCJuZWFyQ29uZmlnIiwiY29udHJhY3ROYW1lIiwiY29uZmlnIiwibmV0d29ya0lkIiwia2V5U3RvcmUiLCJrZXlTdG9yZXMiLCJCcm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUiLCJub2RlVXJsIiwid2FsbGV0VXJsIiwiaGVscGVyVXJsIiwiZXhwbG9yZXJVcmwiLCJjb25uZWN0IiwibmVhciIsImFjY291bnQiLCJnZXRBY2NvdW50SWQiLCJhbW91bnRJbllvY3RvIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsInNlbmRNb25leSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImNvbmZpZ3VyZSIsImVuZHBvaW50VXJsIiwiYXBpS2V5IiwiYmFzZSIsImN1cnJlbnRXYWxsZXQiLCJfYXV0aERhdGEiLCJhY2NvdW50SWQiLCJlbmRudW1iZXIiLCJpIiwiY3JlYXRlIiwidXNlcnMiLCJwYXJ0aWNpcGF0ZWQiLCJkb25lIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsInJlY29yZCIsImdldCIsInRoZW4iLCJlIiwidXBkYXRlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9