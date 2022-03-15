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

              amounttotal = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              transactionParameters = {
                from: signerAddress,
                to: ToAddress,
                value: amounttotal,
                gasPrice: '0x09184e72a000',
                gas: '0x2710'
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
/******/ 	__webpack_require__.h = function() { return "820b73332c3de29f2db5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmVkZjJmZDNkODk5OWEyNzExODA1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFZSxTQUFTWSxlQUFULE9BU1o7QUFBQSxNQVJDQyxJQVFELFFBUkNBLElBUUQ7QUFBQSxNQVBDQyxNQU9ELFFBUENBLE1BT0Q7QUFBQSxNQU5DQyxLQU1ELFFBTkNBLEtBTUQ7QUFBQSxNQUxDQyxRQUtELFFBTENBLFFBS0Q7QUFBQSxNQUpDQyxTQUlELFFBSkNBLFNBSUQ7QUFBQSxNQUhDQyxLQUdELFFBSENBLEtBR0Q7QUFBQSxNQUZDQyxVQUVELFFBRkNBLFVBRUQ7QUFBQSxNQURDQyxZQUNELFFBRENBLFlBQ0Q7O0FBQ0MscUJBQWtEVixrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRVyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFFQSxzQkFBc0NqQiwrRUFBWSxDQUFDO0FBQy9Da0IsSUFBQUEsSUFBSSxFQUFFLE1BRHlDO0FBRS9DQyxJQUFBQSxXQUFXLEVBQUU7QUFGa0MsR0FBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxpQkFBakI7O0FBSUEsa0JBQXNDMUIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPMkIsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFFQTNCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaMkIsSUFBQUEsY0FBYyxDQUFDSCxRQUFRLEdBQUdSLEtBQVosQ0FBZDtBQUNILEdBRlEsRUFFTixDQUFDUSxRQUFELENBRk0sQ0FBVDs7QUFURCxXQWFnQkksVUFiaEI7QUFBQTtBQUFBOztBQUFBO0FBQUEsMk1BYUM7QUFB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QztBQUF0QixrQkFDSSxpREFBQyw2REFBRCxxQkFDSSxpREFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0ksaURBQUMsbUVBQUQsd0JBREosRUFFS2EsaUJBRkwsZUFHSSwrRUFBbUJDLFdBQW5CLE9BQWlDVCxVQUFqQyxDQUhKLENBREosZUFPSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFK0YsTUFBQUEsU0FBUyxFQUFFO0FBQWI7QUFBL0Isa0JBQ0ksaURBQUMsK0RBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFcEY7QUFBbkMsa0JBREosQ0FQSixDQURKLENBYkosQ0FESSxDQUFSO0FBbUNIOzs7Ozs7OztVQzFPRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL21vZGFscy9sb3R0ZXJ5L0J1eUxvdHRlcnlNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlVG9rZW5BUEkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy90b2tlbic7XG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QWNjb3VudCB9IGZyb20gJ25lYXItYXBpLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV5TG90dGVyeU1vZGFsKHtcbiAgICBzaG93LFxuICAgIG9uSGlkZSxcbiAgICBuZnRpZCxcbiAgICBuZnRyZWNpZCxcbiAgICBUb0FkZHJlc3MsXG4gICAgcHJpY2UsXG4gICAgd2FsbGV0VHlwZSxcbiAgICB0aWNrZXRudW1iZXJcbn0pIHtcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBjb250cmFjdENlbG8sIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblxuICAgIGNvbnN0IFtRdWFudGl0eSwgYW1vdW50VGlja2V0SW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJydcbiAgICB9KTtcbiAgICBjb25zdCBbVG90YWxhbW91bnQsIHNldFRvdGFsYW1vdW50XSA9IHVzZVN0YXRlKDApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUb3RhbGFtb3VudChRdWFudGl0eSAqIHByaWNlKTtcbiAgICB9LCBbUXVhbnRpdHldKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGJ1eUxvdHRlcnkoKSB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGlmICh3YWxsZXRUeXBlID09IFwiTkVBUlwiKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShCdXlpbmdMb3R0ZXJ5KFRvdGFsYW1vdW50LCBUb0FkZHJlc3MpLCB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmc6IFwiQnV5aW5nIExvdHRlcnkgVGlja2V0Li4uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogXCJzdWNjZXNzIVwiXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2FsbGV0VHlwZSA9PSBcIkNFTE9cIikge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQnV5aW5nTG90dGVyeUNlbG8oVG90YWxhbW91bnQsIFRvQWRkcmVzcyksIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZzogXCJCdXlpbmcgTG90dGVyeSBUaWNrZXQuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBcInN1Y2Nlc3MhXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ09uQWlydGFibGUoVG90YWxhbW91bnQsIFRvQWRkcmVzcyksIHtcbiAgICAgICAgICAgICAgICBwZW5kaW5nOiBcIlVwZGF0aW5nIExvdHRlcnkgVGlja2V0IG9uIEFpcnRhYmxlLi4uXCIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IFwiU3VjY2VzcyFcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBCdXlpbmdMb3R0ZXJ5KEFtb3VudCwgVG9BZGRyZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uUHJvcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuIGJ0bi1wcmltYXJ5XCIpWzBdO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvblByb3BzLmlubmVyVGV4dCA9IFwiQ29ubmVjdCB0byBORUFSIHdhbGxldFwiXG4gICAgICAgICAgICAgICAgYXdhaXQgdG9hc3Qud2FybihcIk5vdCBjb25uZWN0ZWQgd2l0aCBORUFSIHdhbGxldCEgQ29ubmVjdGluZy4uLlwiKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cud2FsbGV0QWNjb3VudC5yZXF1ZXN0U2lnbkluKFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmVhckNvbmZpZy5jb250cmFjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdEZW1ldGVyJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG5ldHdvcmtJZDogXCJ0ZXN0bmV0XCIsXG4gICAgICAgICAgICAgICAga2V5U3RvcmU6IG5ldyBuZWFyQVBJLmtleVN0b3Jlcy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUoKSxcbiAgICAgICAgICAgICAgICBub2RlVXJsOiBcImh0dHBzOi8vcnBjLnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgICAgICAgICB3YWxsZXRVcmw6IFwiaHR0cHM6Ly93YWxsZXQudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICAgICAgICAgICAgICAgIGhlbHBlclVybDogXCJodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG4gICAgICAgICAgICAgICAgZXhwbG9yZXJVcmw6IFwiaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gc2VuZHMgTkVBUiB0b2tlbnNcbiAgICAgICAgICAgIGNvbnN0IG5lYXIgPSBhd2FpdCBuZWFyQVBJLmNvbm5lY3QoY29uZmlnKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBuZWFyLmFjY291bnQod2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKSk7XG4gICAgICAgICAgICAvL2NvbnN0IGFtb3VudEluWW9jdG8gPSBuZWFyQVBJLnV0aWxzLmZvcm1hdC5mb3JtYXROZWFyQW1vdW50KEFtb3VudCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFtb3VudEluWW9jdG8gPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblxuICAgICAgICAgICAgYXdhaXQgYWNjb3VudC5zZW5kTW9uZXkoXG4gICAgICAgICAgICAgICAgVG9BZGRyZXNzLCAvLyByZWNlaXZlciBhY2NvdW50XG4gICAgICAgICAgICAgICAgYW1vdW50SW5Zb2N0byAvLyBhbW91bnQgaW4geW9jdG9ORUFSXG4gICAgICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIEJ1eWluZ0xvdHRlcnlDZWxvKEFtb3VudCwgVG9BZGRyZXNzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uUHJvcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuIGJ0bi1wcmltYXJ5XCIpWzBdO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCAmJiB3aW5kb3cuZXRoZXJldW0ubmV0d29ya1ZlcnNpb24gPT0gNDQ3ODcgJiYgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIikgIT0gXCJcIikge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYW1vdW50dG90YWwgPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25QYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBzaWduZXJBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICB0bzogVG9BZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYW1vdW50dG90YWwsXG4gICAgICAgICAgICAgICAgICAgIGdhc1ByaWNlOiAnMHgwOTE4NGU3MmEwMDAnLFxuICAgICAgICAgICAgICAgICAgICBnYXM6ICcweDI3MTAnLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyB0eEhhc2ggaXMgYSBoZXggc3RyaW5nXG4gICAgICAgICAgICAgICAgLy8gQXMgd2l0aCBhbnkgUlBDIGNhbGwsIGl0IG1heSB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4SGFzaCA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdldGhfc2VuZFRyYW5zYWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbdHJhbnNhY3Rpb25QYXJhbWV0ZXJzXSxcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvblByb3BzLmlubmVyVGV4dCA9IFwiQ29ubmVjdCB0byBDRUxPIHdhbGxldFwiXG4gICAgICAgICAgICAgICAgYXdhaXQgdG9hc3Qud2FybihcIk5vdCBjb25uZWN0ZWQgd2l0aCBDRUxPIHdhbGxldCEgQ29ubmVjdGluZy4uLlwiKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbG9naW5bL2RvbmF0aW9uXWA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGNvbm5lY3RlZCB3aXRoIENFTE8gd2FsbGV0IVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdPbkFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgaWYgKHRpY2tldG51bWJlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aWNrZXRudW1iZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50V2FsbGV0ID0gd2luZG93LndhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICAgICAgdmFyIGVuZG51bWJlciA9IE51bWJlcih0aWNrZXRudW1iZXIpICsgTnVtYmVyKFF1YW50aXR5KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IE51bWJlcih0aWNrZXRudW1iZXIpOyBpIDwgZW5kbnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5jcmVhdGUoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuZnRpZFwiOiBOdW1iZXIobmZ0aWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VyXCI6IGN1cnJlbnRXYWxsZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJXYWxsZXRcIjogc2lnbmVyQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtYmVyXCI6IGlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVzZXJzID0gJyc7XG4gICAgICAgIGxldCBwYXJ0aWNpcGF0ZWQgPSAwO1xuICAgICAgICB2YXIgZG9uZSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5maW5kKG5mdHJlY2lkLCBhc3luYyBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcbiAgICAgICAgICAgICAgICB1c2VycyA9IHJlY29yZC5nZXQoJ2lzYm91Z2h0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoJ3BhcnRpY2lwYXRlZCcpICE9IFwiXCIgJiYgcmVjb3JkLmdldCgncGFydGljaXBhdGVkJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZWQgPSByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwYXJ0aWNpcGF0ZWQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRvbmUpO1xuXG4gICAgICAgIHVzZXJzID0gdXNlcnMgKyBcIiwgXCIgKyB3aW5kb3cud2FsbGV0QWNjb3VudC5fYXV0aERhdGEuYWNjb3VudElkO1xuICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykudXBkYXRlKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IG5mdHJlY2lkLFxuICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpc2JvdWdodFwiOiB1c2VycyxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNpcGF0ZWRcIjogcGFydGljaXBhdGVkICsgMSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0aWNrZXRudW1iZXJcIjogZW5kbnVtYmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuICg8PlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHNob3c9e3Nob3d9XG4gICAgICAgICAgICBvbkhpZGU9e29uSGlkZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcbiAgICAgICAgICAgIHNpemU9XCJnZ1wiXG4gICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIEJ1eSBMb3R0ZXJ5IFRpY2tldFxuICAgICAgICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XG5cbiAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG4gICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Ub3RhbCB0aWNrZXRzPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Ftb3VudFRpY2tldElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VG90YWwgcHJpY2Uge1RvdGFsYW1vdW50fSB7d2FsbGV0VHlwZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YnV5TG90dGVyeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV5IFRpY2tldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgPC9Nb2RhbD5cblxuICAgIDwvPlxuXG5cbiAgICApO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjgyMGI3MzMzMmMzZGUyOWYyZGI1XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsImNyZWF0ZVRva2VuQVBJIiwibmVhckFQSSIsInRvYXN0IiwidXNlQ29udHJhY3QiLCJXYWxsZXRBY2NvdW50IiwiQnV5TG90dGVyeU1vZGFsIiwic2hvdyIsIm9uSGlkZSIsIm5mdGlkIiwibmZ0cmVjaWQiLCJUb0FkZHJlc3MiLCJwcmljZSIsIndhbGxldFR5cGUiLCJ0aWNrZXRudW1iZXIiLCJjb250cmFjdCIsImNvbnRyYWN0Q2VsbyIsInNpZ25lckFkZHJlc3MiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJRdWFudGl0eSIsImFtb3VudFRpY2tldElucHV0IiwiVG90YWxhbW91bnQiLCJzZXRUb3RhbGFtb3VudCIsImJ1eUxvdHRlcnkiLCJwcm9taXNlIiwiQnV5aW5nTG90dGVyeSIsInBlbmRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJCdXlpbmdMb3R0ZXJ5Q2VsbyIsIkNyZWF0aW5nT25BaXJ0YWJsZSIsIkFtb3VudCIsImJ1dHRvblByb3BzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwid2luZG93Iiwid2FsbGV0QWNjb3VudCIsImlzU2lnbmVkSW4iLCJpbm5lclRleHQiLCJ3YXJuIiwicmVxdWVzdFNpZ25JbiIsIm5lYXJDb25maWciLCJjb250cmFjdE5hbWUiLCJjb25maWciLCJuZXR3b3JrSWQiLCJrZXlTdG9yZSIsImtleVN0b3JlcyIsIkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSIsIm5vZGVVcmwiLCJ3YWxsZXRVcmwiLCJoZWxwZXJVcmwiLCJleHBsb3JlclVybCIsImNvbm5lY3QiLCJuZWFyIiwiYWNjb3VudCIsImdldEFjY291bnRJZCIsImFtb3VudEluWW9jdG8iLCJOdW1iZXIiLCJ0b0xvY2FsZVN0cmluZyIsInVzZUdyb3VwaW5nIiwic2VuZE1vbmV5IiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXRoZXJldW0iLCJzZWxlY3RlZEFkZHJlc3MiLCJuZXR3b3JrVmVyc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhbW91bnR0b3RhbCIsInRyYW5zYWN0aW9uUGFyYW1ldGVycyIsImZyb20iLCJ0byIsInZhbHVlIiwiZ2FzUHJpY2UiLCJnYXMiLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zIiwidHhIYXNoIiwibG9jYXRpb24iLCJocmVmIiwiRXJyb3IiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50V2FsbGV0IiwiX2F1dGhEYXRhIiwiYWNjb3VudElkIiwiZW5kbnVtYmVyIiwiaSIsImNyZWF0ZSIsInVzZXJzIiwicGFydGljaXBhdGVkIiwiZG9uZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJyZWNvcmQiLCJnZXQiLCJ0aGVuIiwiZSIsInVwZGF0ZSIsInJlbG9hZCIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=