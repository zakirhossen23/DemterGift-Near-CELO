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

              amounttotal = (Number(Amount) * 1000000000000000000).toString(16);
              transactionParameters = {
                from: signerAddress,
                to: ToAddress,
                value: amounttotal,
                gasPrice: '0x09184e72a000',
                gas: '61A8'
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
/******/ 	__webpack_require__.h = function() { return "0511ac19794cf7002dfc"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljg0YWExODhiZWM4YmU5MTIyOWFkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFZSxTQUFTWSxlQUFULE9BU1o7QUFBQSxNQVJDQyxJQVFELFFBUkNBLElBUUQ7QUFBQSxNQVBDQyxNQU9ELFFBUENBLE1BT0Q7QUFBQSxNQU5DQyxLQU1ELFFBTkNBLEtBTUQ7QUFBQSxNQUxDQyxRQUtELFFBTENBLFFBS0Q7QUFBQSxNQUpDQyxTQUlELFFBSkNBLFNBSUQ7QUFBQSxNQUhDQyxLQUdELFFBSENBLEtBR0Q7QUFBQSxNQUZDQyxVQUVELFFBRkNBLFVBRUQ7QUFBQSxNQURDQyxZQUNELFFBRENBLFlBQ0Q7O0FBQ0MscUJBQWtEVixrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRVyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFFQSxzQkFBc0NqQiwrRUFBWSxDQUFDO0FBQy9Da0IsSUFBQUEsSUFBSSxFQUFFLE1BRHlDO0FBRS9DQyxJQUFBQSxXQUFXLEVBQUU7QUFGa0MsR0FBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxpQkFBakI7O0FBSUEsa0JBQXNDMUIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPMkIsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFFQTNCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaMkIsSUFBQUEsY0FBYyxDQUFDSCxRQUFRLEdBQUdSLEtBQVosQ0FBZDtBQUNILEdBRlEsRUFFTixDQUFDUSxRQUFELENBRk0sQ0FBVDs7QUFURCxXQWFnQkksVUFiaEI7QUFBQTtBQUFBOztBQUFBO0FBQUEsMk1BYUM7QUFB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QUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNJLGlEQUFDLG1FQUFELHdCQURKLEVBRUthLGlCQUZMLGVBR0ksK0VBQW1CQyxXQUFuQixPQUFpQ1QsVUFBakMsQ0FISixDQURKLGVBT0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRWdHLE1BQUFBLFNBQVMsRUFBRTtBQUFiO0FBQS9CLGtCQUNJLGlEQUFDLCtEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRXJGO0FBQW5DLGtCQURKLENBUEosQ0FESixDQWJKLENBREksQ0FBUjtBQW1DSDs7Ozs7Ozs7VUN6T0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9tb2RhbHMvbG90dGVyeS9CdXlMb3R0ZXJ5TW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcbmltcG9ydCB7IGNyZWF0ZVRva2VuQVBJIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvdG9rZW4nO1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCB7IFdhbGxldEFjY291bnQgfSBmcm9tICduZWFyLWFwaS1qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1eUxvdHRlcnlNb2RhbCh7XG4gICAgc2hvdyxcbiAgICBvbkhpZGUsXG4gICAgbmZ0aWQsXG4gICAgbmZ0cmVjaWQsXG4gICAgVG9BZGRyZXNzLFxuICAgIHByaWNlLFxuICAgIHdhbGxldFR5cGUsXG4gICAgdGlja2V0bnVtYmVyXG59KSB7XG4gICAgY29uc3QgeyBjb250cmFjdCwgY29udHJhY3RDZWxvLCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG5cbiAgICBjb25zdCBbUXVhbnRpdHksIGFtb3VudFRpY2tldElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnXG4gICAgfSk7XG4gICAgY29uc3QgW1RvdGFsYW1vdW50LCBzZXRUb3RhbGFtb3VudF0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VG90YWxhbW91bnQoUXVhbnRpdHkgKiBwcmljZSk7XG4gICAgfSwgW1F1YW50aXR5XSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBidXlMb3R0ZXJ5KCkge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBpZiAod2FsbGV0VHlwZSA9PSBcIk5FQVJcIikge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQnV5aW5nTG90dGVyeShUb3RhbGFtb3VudCwgVG9BZGRyZXNzKSwge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nOiBcIkJ1eWluZyBMb3R0ZXJ5IFRpY2tldC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IFwic3VjY2VzcyFcIlxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdhbGxldFR5cGUgPT0gXCJDRUxPXCIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKEJ1eWluZ0xvdHRlcnlDZWxvKFRvdGFsYW1vdW50LCBUb0FkZHJlc3MpLCB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmc6IFwiQnV5aW5nIExvdHRlcnkgVGlja2V0Li4uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogXCJzdWNjZXNzIVwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdPbkFpcnRhYmxlKFRvdGFsYW1vdW50LCBUb0FkZHJlc3MpLCB7XG4gICAgICAgICAgICAgICAgcGVuZGluZzogXCJVcGRhdGluZyBMb3R0ZXJ5IFRpY2tldCBvbiBBaXJ0YWJsZS4uLlwiLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBcIlN1Y2Nlc3MhXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gQnV5aW5nTG90dGVyeShBbW91bnQsIFRvQWRkcmVzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGJ1dHRvblByb3BzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0biBidG4tcHJpbWFyeVwiKVswXTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBidXR0b25Qcm9wcy5pbm5lclRleHQgPSBcIkNvbm5lY3QgdG8gTkVBUiB3YWxsZXRcIlxuICAgICAgICAgICAgICAgIGF3YWl0IHRvYXN0Lndhcm4oXCJOb3QgY29ubmVjdGVkIHdpdGggTkVBUiB3YWxsZXQhIENvbm5lY3RpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LndhbGxldEFjY291bnQucmVxdWVzdFNpZ25JbihcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5lYXJDb25maWcuY29udHJhY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAnRGVtZXRlcicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBuZXR3b3JrSWQ6IFwidGVzdG5ldFwiLFxuICAgICAgICAgICAgICAgIGtleVN0b3JlOiBuZXcgbmVhckFQSS5rZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCksXG4gICAgICAgICAgICAgICAgbm9kZVVybDogXCJodHRwczovL3JwYy50ZXN0bmV0Lm5lYXIub3JnXCIsXG4gICAgICAgICAgICAgICAgd2FsbGV0VXJsOiBcImh0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgICAgICAgICBoZWxwZXJVcmw6IFwiaHR0cHM6Ly9oZWxwZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICAgICAgICAgICAgICAgIGV4cGxvcmVyVXJsOiBcImh0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHNlbmRzIE5FQVIgdG9rZW5zXG4gICAgICAgICAgICBjb25zdCBuZWFyID0gYXdhaXQgbmVhckFQSS5jb25uZWN0KGNvbmZpZyk7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgbmVhci5hY2NvdW50KHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkpO1xuICAgICAgICAgICAgLy9jb25zdCBhbW91bnRJbllvY3RvID0gbmVhckFQSS51dGlscy5mb3JtYXQuZm9ybWF0TmVhckFtb3VudChBbW91bnQpO1xuXG4gICAgICAgICAgICBjb25zdCBhbW91bnRJbllvY3RvID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IGFjY291bnQuc2VuZE1vbmV5KFxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcywgLy8gcmVjZWl2ZXIgYWNjb3VudFxuICAgICAgICAgICAgICAgIGFtb3VudEluWW9jdG8gLy8gYW1vdW50IGluIHlvY3RvTkVBUlxuICAgICAgICAgICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBCdXlpbmdMb3R0ZXJ5Q2VsbyhBbW91bnQsIFRvQWRkcmVzcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGJ1dHRvblByb3BzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0biBidG4tcHJpbWFyeVwiKVswXTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzICE9IG51bGwgJiYgd2luZG93LmV0aGVyZXVtLm5ldHdvcmtWZXJzaW9uID09IDQ0Nzg3ICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIpICE9IFwiXCIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudHRvdGFsID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9TdHJpbmcoMTYpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25QYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBzaWduZXJBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICB0bzogVG9BZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYW1vdW50dG90YWwsXG4gICAgICAgICAgICAgICAgICAgIGdhc1ByaWNlOiAnMHgwOTE4NGU3MmEwMDAnLFxuICAgICAgICAgICAgICAgICAgICBnYXM6ICc2MUE4JyxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gdHhIYXNoIGlzIGEgaGV4IHN0cmluZ1xuICAgICAgICAgICAgICAgIC8vIEFzIHdpdGggYW55IFJQQyBjYWxsLCBpdCBtYXkgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICBjb25zdCB0eEhhc2ggPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnZXRoX3NlbmRUcmFuc2FjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogW3RyYW5zYWN0aW9uUGFyYW1ldGVyc10sXG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b25Qcm9wcy5pbm5lclRleHQgPSBcIkNvbm5lY3QgdG8gQ0VMTyB3YWxsZXRcIlxuICAgICAgICAgICAgICAgIGF3YWl0IHRvYXN0Lndhcm4oXCJOb3QgY29ubmVjdGVkIHdpdGggQ0VMTyB3YWxsZXQhIENvbm5lY3RpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2xvZ2luWy9kb25hdGlvbl1gO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBjb25uZWN0ZWQgd2l0aCBDRUxPIHdhbGxldCFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nT25BaXJ0YWJsZSgpIHtcblxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgIGlmICh0aWNrZXRudW1iZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGlja2V0bnVtYmVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudFdhbGxldCA9IHdpbmRvdy53YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQ7XG4gICAgICAgIHZhciBlbmRudW1iZXIgPSBOdW1iZXIodGlja2V0bnVtYmVyKSArIE51bWJlcihRdWFudGl0eSk7XG4gICAgICAgIGZvciAobGV0IGkgPSBOdW1iZXIodGlja2V0bnVtYmVyKTsgaSA8IGVuZG51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5Qm91Z2h0JykuY3JlYXRlKFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmZ0aWRcIjogTnVtYmVyKG5mdGlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlclwiOiBjdXJyZW50V2FsbGV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyV2FsbGV0XCI6IHNpZ25lckFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm51bWJlclwiOiBpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2VycyA9ICcnO1xuICAgICAgICBsZXQgcGFydGljaXBhdGVkID0gMDtcbiAgICAgICAgdmFyIGRvbmUgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuZmluZChuZnRyZWNpZCwgYXN5bmMgZnVuY3Rpb24gKGVyciwgcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgdXNlcnMgPSByZWNvcmQuZ2V0KCdpc2JvdWdodCcpO1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKSAhPSBcIlwiICYmIHJlY29yZC5nZXQoJ3BhcnRpY2lwYXRlZCcpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVkID0gcmVjb3JkLmdldCgncGFydGljaXBhdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocGFydGljaXBhdGVkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhkb25lKTtcblxuICAgICAgICB1c2VycyA9IHVzZXJzICsgXCIsIFwiICsgd2luZG93LndhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLnVwZGF0ZShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBuZnRyZWNpZCxcbiAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaXNib3VnaHRcIjogdXNlcnMsXG4gICAgICAgICAgICAgICAgICAgIFwicGFydGljaXBhdGVkXCI6IHBhcnRpY2lwYXRlZCArIDEsXG4gICAgICAgICAgICAgICAgICAgIFwidGlja2V0bnVtYmVyXCI6IGVuZG51bWJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cblxuICAgIHJldHVybiAoPD5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBzaG93PXtzaG93fVxuICAgICAgICAgICAgb25IaWRlPXtvbkhpZGV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG4gICAgICAgICAgICBzaXplPVwiZ2dcIlxuICAgICAgICAgICAgY2VudGVyZWRcbiAgICAgICAgPlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICBCdXkgTG90dGVyeSBUaWNrZXRcbiAgICAgICAgICAgICAgICA8L01vZGFsLlRpdGxlPlxuXG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+VG90YWwgdGlja2V0czwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthbW91bnRUaWNrZXRJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsIHByaWNlIHtUb3RhbGFtb3VudH0ge3dhbGxldFR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2J1eUxvdHRlcnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1eSBUaWNrZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgIDwvTW9kYWw+XG5cbiAgICA8Lz5cblxuXG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIwNTExYWMxOTc5NGNmNzAwMmRmY1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJVc2VGb3JtSW5wdXQiLCJjcmVhdGVUb2tlbkFQSSIsIm5lYXJBUEkiLCJ0b2FzdCIsInVzZUNvbnRyYWN0IiwiV2FsbGV0QWNjb3VudCIsIkJ1eUxvdHRlcnlNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJuZnRpZCIsIm5mdHJlY2lkIiwiVG9BZGRyZXNzIiwicHJpY2UiLCJ3YWxsZXRUeXBlIiwidGlja2V0bnVtYmVyIiwiY29udHJhY3QiLCJjb250cmFjdENlbG8iLCJzaWduZXJBZGRyZXNzIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiUXVhbnRpdHkiLCJhbW91bnRUaWNrZXRJbnB1dCIsIlRvdGFsYW1vdW50Iiwic2V0VG90YWxhbW91bnQiLCJidXlMb3R0ZXJ5IiwicHJvbWlzZSIsIkJ1eWluZ0xvdHRlcnkiLCJwZW5kaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiQnV5aW5nTG90dGVyeUNlbG8iLCJDcmVhdGluZ09uQWlydGFibGUiLCJBbW91bnQiLCJidXR0b25Qcm9wcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIndpbmRvdyIsIndhbGxldEFjY291bnQiLCJpc1NpZ25lZEluIiwiaW5uZXJUZXh0Iiwid2FybiIsInJlcXVlc3RTaWduSW4iLCJuZWFyQ29uZmlnIiwiY29udHJhY3ROYW1lIiwiY29uZmlnIiwibmV0d29ya0lkIiwia2V5U3RvcmUiLCJrZXlTdG9yZXMiLCJCcm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUiLCJub2RlVXJsIiwid2FsbGV0VXJsIiwiaGVscGVyVXJsIiwiZXhwbG9yZXJVcmwiLCJjb25uZWN0IiwibmVhciIsImFjY291bnQiLCJnZXRBY2NvdW50SWQiLCJhbW91bnRJbllvY3RvIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsInNlbmRNb25leSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwibmV0d29ya1ZlcnNpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYW1vdW50dG90YWwiLCJ0b1N0cmluZyIsInRyYW5zYWN0aW9uUGFyYW1ldGVycyIsImZyb20iLCJ0byIsInZhbHVlIiwiZ2FzUHJpY2UiLCJnYXMiLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zIiwidHhIYXNoIiwibG9jYXRpb24iLCJocmVmIiwiRXJyb3IiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50V2FsbGV0IiwiX2F1dGhEYXRhIiwiYWNjb3VudElkIiwiZW5kbnVtYmVyIiwiaSIsImNyZWF0ZSIsInVzZXJzIiwicGFydGljaXBhdGVkIiwiZG9uZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJyZWNvcmQiLCJnZXQiLCJ0aGVuIiwiZSIsInVwZGF0ZSIsInJlbG9hZCIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=