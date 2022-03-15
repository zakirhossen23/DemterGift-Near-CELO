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
      contractCelo = _useContract.contractCelo,
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

              if (!(walletType == "NEAR")) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(BuyingLottery(Totalamount, ToAddress), {
                pending: "Buying Lottery Ticket...",
                error: "Please try again later",
                success: "success!"
              });

            case 4:
              _context.next = 9;
              break;

            case 6:
              if (!(walletType == "CELO")) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(BuyingLotteryCelo(Totalamount, ToAddress), {
                pending: "Buying Lottery Ticket...",
                error: "Please try again later",
                success: "success!"
              });

            case 9:
              _context.next = 11;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(CreatingOnAirtable(Totalamount, ToAddress), {
                pending: "Updating Lottery Ticket on Airtable...",
                error: "Please try again later",
                success: "Success!"
              });

            case 11:
              _context.next = 15;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
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

  function BuyingLotteryCelo(_x3, _x4) {
    return _BuyingLotteryCelo.apply(this, arguments);
  }

  function _BuyingLotteryCelo() {
    _BuyingLotteryCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(Amount, ToAddress) {
      var buttonProps, amounttotal, transactionParameters, txHash;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              buttonProps = document.getElementsByClassName("btn btn-primary")[0];

              if (!(window.ethereum.selectedAddress != null && window.ethereum.networkVersion == 44787 && window.localStorage.getItem("ConnectedMetaCelo") != "")) {
                _context3.next = 10;
                break;
              }

              amounttotal = (Number(Amount) * 100000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              transactionParameters = {
                from: signerAddress,
                to: ToAddress,
                value: amounttotal,
                gasPrice: '10000000000',
                gas: '1000000000'
              }; // txHash is a hex string
              // As with any RPC call, it may throw an error

              _context3.next = 7;
              return ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters]
              });

            case 7:
              txHash = _context3.sent;
              _context3.next = 16;
              break;

            case 10:
              buttonProps.innerText = "Connect to CELO wallet";
              _context3.next = 13;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.warn("Not connected with CELO wallet! Connecting...");

            case 13:
              window.location.href = "/login[/donation]";
              throw new Error("Not connected with CELO wallet!");

            case 16:
              _context3.next = 20;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](0);

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 18]]);
    }));
    return _BuyingLotteryCelo.apply(this, arguments);
  }

  function CreatingOnAirtable() {
    return _CreatingOnAirtable.apply(this, arguments);
  }

  function _CreatingOnAirtable() {
    _CreatingOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6() {
      var Airtable, base, currentWallet, endnumber, i, users, participated, done;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
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
                _context7.next = 13;
                break;
              }

              _context7.next = 10;
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
              _context7.next = 7;
              break;

            case 13:
              users = '';
              participated = 0;
              done = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default())( /*#__PURE__*/function () {
                var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5(resolve, reject) {
                  var _context4;

                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = base('nfts')).call(_context4, nftrecid, /*#__PURE__*/function () {
                            var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4(err, record) {
                              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      users = record.get('isbought');

                                      if (record.get('participated') != "" && record.get('participated') != null) {
                                        participated = record.get('participated');
                                      }

                                      resolve(participated);

                                    case 3:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee4);
                            }));

                            return function (_x7, _x8) {
                              return _ref3.apply(this, arguments);
                            };
                          }());

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x5, _x6) {
                  return _ref2.apply(this, arguments);
                };
              }()).then(function (e) {
                return e;
              });
              console.log(done);
              users = users + ", " + window.walletAccount._authData.accountId;
              _context7.next = 20;
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
              return _context7.stop();
          }
        }
      }, _callee6);
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
/******/ 	__webpack_require__.h = function() { return "119902363de690388f01"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmM2NTljYWI1ZTM2Mzg0ZDEyOTQzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFZSxTQUFTWSxlQUFULE9BU1o7QUFBQSxNQVJDQyxJQVFELFFBUkNBLElBUUQ7QUFBQSxNQVBDQyxNQU9ELFFBUENBLE1BT0Q7QUFBQSxNQU5DQyxLQU1ELFFBTkNBLEtBTUQ7QUFBQSxNQUxDQyxRQUtELFFBTENBLFFBS0Q7QUFBQSxNQUpDQyxTQUlELFFBSkNBLFNBSUQ7QUFBQSxNQUhDQyxLQUdELFFBSENBLEtBR0Q7QUFBQSxNQUZDQyxVQUVELFFBRkNBLFVBRUQ7QUFBQSxNQURDQyxZQUNELFFBRENBLFlBQ0Q7O0FBQ0MscUJBQWtEVixrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRVyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFFQSxzQkFBc0NqQiwrRUFBWSxDQUFDO0FBQy9Da0IsSUFBQUEsSUFBSSxFQUFFLE1BRHlDO0FBRS9DQyxJQUFBQSxXQUFXLEVBQUU7QUFGa0MsR0FBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxpQkFBakI7O0FBSUEsa0JBQXNDMUIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPMkIsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFFQTNCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaMkIsSUFBQUEsY0FBYyxDQUFDSCxRQUFRLEdBQUdSLEtBQVosQ0FBZDtBQUNILEdBRlEsRUFFTixDQUFDUSxRQUFELENBRk0sQ0FBVDs7QUFURCxXQWFnQkksVUFiaEI7QUFBQTtBQUFBOztBQUFBO0FBQUEsMk1BYUM7QUFB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O0FBQXRCLGtCQUNJLGlEQUFDLDZEQUFELHFCQUNJLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDSSxpREFBQyxtRUFBRCx3QkFESixFQUVLYSxpQkFGTCxlQUdJLCtFQUFtQkMsV0FBbkIsT0FBaUNULFVBQWpDLENBSEosQ0FESixlQU9JO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUUrRixNQUFBQSxTQUFTLEVBQUU7QUFBYjtBQUEvQixrQkFDSSxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVwRjtBQUFuQyxrQkFESixDQVBKLENBREosQ0FiSixDQURJLENBQVI7QUFtQ0g7Ozs7Ozs7O1VDMU9ELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvbW9kYWxzL2xvdHRlcnkvQnV5TG90dGVyeU1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVUb2tlbkFQSSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL3Rva2VuJztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5pbXBvcnQgeyBXYWxsZXRBY2NvdW50IH0gZnJvbSAnbmVhci1hcGktanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXlMb3R0ZXJ5TW9kYWwoe1xuICAgIHNob3csXG4gICAgb25IaWRlLFxuICAgIG5mdGlkLFxuICAgIG5mdHJlY2lkLFxuICAgIFRvQWRkcmVzcyxcbiAgICBwcmljZSxcbiAgICB3YWxsZXRUeXBlLFxuICAgIHRpY2tldG51bWJlclxufSkge1xuICAgIGNvbnN0IHsgY29udHJhY3QsIGNvbnRyYWN0Q2Vsbywgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuXG4gICAgY29uc3QgW1F1YW50aXR5LCBhbW91bnRUaWNrZXRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtUb3RhbGFtb3VudCwgc2V0VG90YWxhbW91bnRdID0gdXNlU3RhdGUoMClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRvdGFsYW1vdW50KFF1YW50aXR5ICogcHJpY2UpO1xuICAgIH0sIFtRdWFudGl0eV0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gYnV5TG90dGVyeSgpIHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgaWYgKHdhbGxldFR5cGUgPT0gXCJORUFSXCIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKEJ1eWluZ0xvdHRlcnkoVG90YWxhbW91bnQsIFRvQWRkcmVzcyksIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZzogXCJCdXlpbmcgTG90dGVyeSBUaWNrZXQuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBcInN1Y2Nlc3MhXCJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh3YWxsZXRUeXBlID09IFwiQ0VMT1wiKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShCdXlpbmdMb3R0ZXJ5Q2VsbyhUb3RhbGFtb3VudCwgVG9BZGRyZXNzKSwge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nOiBcIkJ1eWluZyBMb3R0ZXJ5IFRpY2tldC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IFwic3VjY2VzcyFcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nT25BaXJ0YWJsZShUb3RhbGFtb3VudCwgVG9BZGRyZXNzKSwge1xuICAgICAgICAgICAgICAgIHBlbmRpbmc6IFwiVXBkYXRpbmcgTG90dGVyeSBUaWNrZXQgb24gQWlydGFibGUuLi5cIixcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogXCJTdWNjZXNzIVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIEJ1eWluZ0xvdHRlcnkoQW1vdW50LCBUb0FkZHJlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG4gICAgICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uUHJvcHMuaW5uZXJUZXh0ID0gXCJDb25uZWN0IHRvIE5FQVIgd2FsbGV0XCJcbiAgICAgICAgICAgICAgICBhd2FpdCB0b2FzdC53YXJuKFwiTm90IGNvbm5lY3RlZCB3aXRoIE5FQVIgd2FsbGV0ISBDb25uZWN0aW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ0RlbWV0ZXInKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbmV0d29ya0lkOiBcInRlc3RuZXRcIixcbiAgICAgICAgICAgICAgICBrZXlTdG9yZTogbmV3IG5lYXJBUEkua2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpLFxuICAgICAgICAgICAgICAgIG5vZGVVcmw6IFwiaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICAgICAgICAgICAgICAgIHdhbGxldFVybDogXCJodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnXCIsXG4gICAgICAgICAgICAgICAgaGVscGVyVXJsOiBcImh0dHBzOi8vaGVscGVyLnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgICAgICAgICBleHBsb3JlclVybDogXCJodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBzZW5kcyBORUFSIHRva2Vuc1xuICAgICAgICAgICAgY29uc3QgbmVhciA9IGF3YWl0IG5lYXJBUEkuY29ubmVjdChjb25maWcpO1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IG5lYXIuYWNjb3VudCh3YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpKTtcbiAgICAgICAgICAgIC8vY29uc3QgYW1vdW50SW5Zb2N0byA9IG5lYXJBUEkudXRpbHMuZm9ybWF0LmZvcm1hdE5lYXJBbW91bnQoQW1vdW50KTtcblxuICAgICAgICAgICAgY29uc3QgYW1vdW50SW5Zb2N0byA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCdmdWxsd2lkZScsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCBhY2NvdW50LnNlbmRNb25leShcbiAgICAgICAgICAgICAgICBUb0FkZHJlc3MsIC8vIHJlY2VpdmVyIGFjY291bnRcbiAgICAgICAgICAgICAgICBhbW91bnRJbllvY3RvIC8vIGFtb3VudCBpbiB5b2N0b05FQVJcbiAgICAgICAgICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gQnV5aW5nTG90dGVyeUNlbG8oQW1vdW50LCBUb0FkZHJlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG4gICAgICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyAhPSBudWxsICYmIHdpbmRvdy5ldGhlcmV1bS5uZXR3b3JrVmVyc2lvbiA9PSA0NDc4NyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiKSAhPSBcIlwiKSB7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudHRvdGFsID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uUGFyYW1ldGVycyA9ICB7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IHNpZ25lckFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIHRvOiBUb0FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhbW91bnR0b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgZ2FzUHJpY2U6ICcxMDAwMDAwMDAwMCcsXG4gICAgICAgICAgICAgICAgICAgIGdhczogJzEwMDAwMDAwMDAnLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgLy8gdHhIYXNoIGlzIGEgaGV4IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgLy8gQXMgd2l0aCBhbnkgUlBDIGNhbGwsIGl0IG1heSB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgICAgICAgICAgY29uc3QgdHhIYXNoID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ2V0aF9zZW5kVHJhbnNhY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFt0cmFuc2FjdGlvblBhcmFtZXRlcnNdLFxuICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgYnV0dG9uUHJvcHMuaW5uZXJUZXh0ID0gXCJDb25uZWN0IHRvIENFTE8gd2FsbGV0XCJcbiAgICAgICAgICAgICAgICBhd2FpdCB0b2FzdC53YXJuKFwiTm90IGNvbm5lY3RlZCB3aXRoIENFTE8gd2FsbGV0ISBDb25uZWN0aW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9sb2dpblsvZG9uYXRpb25dYDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgY29ubmVjdGVkIHdpdGggQ0VMTyB3YWxsZXQhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICBcblxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdPbkFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgaWYgKHRpY2tldG51bWJlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aWNrZXRudW1iZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50V2FsbGV0ID0gd2luZG93LndhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICAgICAgdmFyIGVuZG51bWJlciA9IE51bWJlcih0aWNrZXRudW1iZXIpICsgTnVtYmVyKFF1YW50aXR5KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IE51bWJlcih0aWNrZXRudW1iZXIpOyBpIDwgZW5kbnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5jcmVhdGUoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuZnRpZFwiOiBOdW1iZXIobmZ0aWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyXCI6IGN1cnJlbnRXYWxsZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJXYWxsZXRcIjogc2lnbmVyQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtYmVyXCI6IGlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVzZXJzID0gJyc7XG4gICAgICAgIGxldCBwYXJ0aWNpcGF0ZWQgPSAwO1xuICAgICAgICB2YXIgZG9uZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5maW5kKG5mdHJlY2lkLCBhc3luYyBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcbiAgICAgICAgICAgICAgICB1c2VycyA9IHJlY29yZC5nZXQoJ2lzYm91Z2h0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoJ3BhcnRpY2lwYXRlZCcpICE9IFwiXCIgJiYgcmVjb3JkLmdldCgncGFydGljaXBhdGVkJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZWQgPSByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwYXJ0aWNpcGF0ZWQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvbmUpO1xuXG4gICAgICAgIHVzZXJzID0gdXNlcnMgKyBcIiwgXCIgKyB3aW5kb3cud2FsbGV0QWNjb3VudC5fYXV0aERhdGEuYWNjb3VudElkO1xuICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykudXBkYXRlKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IG5mdHJlY2lkLFxuICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpc2JvdWdodFwiOiB1c2VycyxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNpcGF0ZWRcIjogcGFydGljaXBhdGVkICsgMSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0aWNrZXRudW1iZXJcIjogZW5kbnVtYmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuICg8PlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHNob3c9e3Nob3d9XG4gICAgICAgICAgICBvbkhpZGU9e29uSGlkZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcbiAgICAgICAgICAgIHNpemU9XCJnZ1wiXG4gICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIEJ1eSBMb3R0ZXJ5IFRpY2tldFxuICAgICAgICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XG5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Ub3RhbCB0aWNrZXRzPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Ftb3VudFRpY2tldElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VG90YWwgcHJpY2Uge1RvdGFsYW1vdW50fSB7d2FsbGV0VHlwZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YnV5TG90dGVyeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV5IFRpY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgPC9Nb2RhbD5cblxuICAgIDwvPlxuXG5cbiAgICApO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjExOTkwMjM2M2RlNjkwMzg4ZjAxXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsImNyZWF0ZVRva2VuQVBJIiwibmVhckFQSSIsInRvYXN0IiwidXNlQ29udHJhY3QiLCJXYWxsZXRBY2NvdW50IiwiQnV5TG90dGVyeU1vZGFsIiwic2hvdyIsIm9uSGlkZSIsIm5mdGlkIiwibmZ0cmVjaWQiLCJUb0FkZHJlc3MiLCJwcmljZSIsIndhbGxldFR5cGUiLCJ0aWNrZXRudW1iZXIiLCJjb250cmFjdCIsImNvbnRyYWN0Q2VsbyIsInNpZ25lckFkZHJlc3MiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJRdWFudGl0eSIsImFtb3VudFRpY2tldElucHV0IiwiVG90YWxhbW91bnQiLCJzZXRUb3RhbGFtb3VudCIsImJ1eUxvdHRlcnkiLCJwcm9taXNlIiwiQnV5aW5nTG90dGVyeSIsInBlbmRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJCdXlpbmdMb3R0ZXJ5Q2VsbyIsIkNyZWF0aW5nT25BaXJ0YWJsZSIsIkFtb3VudCIsImJ1dHRvblByb3BzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwid2luZG93Iiwid2FsbGV0QWNjb3VudCIsImlzU2lnbmVkSW4iLCJpbm5lclRleHQiLCJ3YXJuIiwicmVxdWVzdFNpZ25JbiIsIm5lYXJDb25maWciLCJjb250cmFjdE5hbWUiLCJjb25maWciLCJuZXR3b3JrSWQiLCJrZXlTdG9yZSIsImtleVN0b3JlcyIsIkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSIsIm5vZGVVcmwiLCJ3YWxsZXRVcmwiLCJoZWxwZXJVcmwiLCJleHBsb3JlclVybCIsImNvbm5lY3QiLCJuZWFyIiwiYWNjb3VudCIsImdldEFjY291bnRJZCIsImFtb3VudEluWW9jdG8iLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInVzZUdyb3VwaW5nIiwic2VuZE1vbmV5IiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXRoZXJldW0iLCJzZWxlY3RlZEFkZHJlc3MiLCJuZXR3b3JrVmVyc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhbW91bnR0b3RhbCIsInRyYW5zYWN0aW9uUGFyYW1ldGVycyIsImZyb20iLCJ0byIsInZhbHVlIiwiZ2FzUHJpY2UiLCJnYXMiLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zIiwidHhIYXNoIiwibG9jYXRpb24iLCJocmVmIiwiRXJyb3IiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50V2FsbGV0IiwiX2F1dGhEYXRhIiwiYWNjb3VudElkIiwiZW5kbnVtYmVyIiwiaSIsImNyZWF0ZSIsInVzZXJzIiwicGFydGljaXBhdGVkIiwiZG9uZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJyZWNvcmQiLCJnZXQiLCJ0aGVuIiwiZSIsInVwZGF0ZSIsInJlbG9hZCIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=