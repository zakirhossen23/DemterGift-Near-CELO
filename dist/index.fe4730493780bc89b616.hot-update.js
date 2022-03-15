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
                _context3.next = 17;
                break;
              }

              amounttotal = (Number(Amount) * 1000000000000000000).toString(16); //Signing Tx

              transactionParameters = {
                from: signerAddress,
                to: ToAddress,
                value: amounttotal,
                gasPrice: '0x09184e72a000',
                gas: '61A8'
              };
              _context3.prev = 5;
              _context3.next = 8;
              return ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters]
              });

            case 8:
              txHash = _context3.sent;
              console.log(txHash);
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](5);
              throw new Error(_context3.t0);

            case 15:
              _context3.next = 23;
              break;

            case 17:
              buttonProps.innerText = "Connect to CELO wallet";
              _context3.next = 20;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.warn("Not connected with CELO wallet! Connecting...");

            case 20:
              window.location.href = "/login[/donation]";
              throw new Error("Not connected with CELO wallet!");

            case 23:
              _context3.next = 27;
              break;

            case 25:
              _context3.prev = 25;
              _context3.t1 = _context3["catch"](0);

            case 27:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 25], [5, 12]]);
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

              if (walletType == "CELO") {
                currentWallet = window.ethereum.window.ethereum.selectedAddress;
              }

              endnumber = Number(ticketnumber) + Number(Quantity);
              i = Number(ticketnumber);

            case 8:
              if (!(i < endnumber)) {
                _context7.next = 14;
                break;
              }

              _context7.next = 11;
              return base('lotteryBought').create([{
                "fields": {
                  "nftid": Number(nftid),
                  "user": currentWallet,
                  "userWallet": signerAddress,
                  "number": i
                }
              }]);

            case 11:
              i++;
              _context7.next = 8;
              break;

            case 14:
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
              _context7.next = 21;
              return base('nfts').update([{
                "id": nftrecid,
                "fields": {
                  "isbought": users,
                  "participated": participated + 1,
                  "ticketnumber": endnumber
                }
              }]);

            case 21:
              window.location.reload();

            case 22:
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
/******/ 	__webpack_require__.h = function() { return "9e00dc21d2b2ee03f60e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmZlNDczMDQ5Mzc4MGJjODliNjE2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFZSxTQUFTWSxlQUFULE9BU1o7QUFBQSxNQVJDQyxJQVFELFFBUkNBLElBUUQ7QUFBQSxNQVBDQyxNQU9ELFFBUENBLE1BT0Q7QUFBQSxNQU5DQyxLQU1ELFFBTkNBLEtBTUQ7QUFBQSxNQUxDQyxRQUtELFFBTENBLFFBS0Q7QUFBQSxNQUpDQyxTQUlELFFBSkNBLFNBSUQ7QUFBQSxNQUhDQyxLQUdELFFBSENBLEtBR0Q7QUFBQSxNQUZDQyxVQUVELFFBRkNBLFVBRUQ7QUFBQSxNQURDQyxZQUNELFFBRENBLFlBQ0Q7O0FBQ0MscUJBQWtEVixrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRVyxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFFQSxzQkFBc0NqQiwrRUFBWSxDQUFDO0FBQy9Da0IsSUFBQUEsSUFBSSxFQUFFLE1BRHlDO0FBRS9DQyxJQUFBQSxXQUFXLEVBQUU7QUFGa0MsR0FBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxpQkFBakI7O0FBSUEsa0JBQXNDMUIsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPMkIsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFFQTNCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaMkIsSUFBQUEsY0FBYyxDQUFDSCxRQUFRLEdBQUdSLEtBQVosQ0FBZDtBQUNILEdBRlEsRUFFTixDQUFDUSxRQUFELENBRk0sQ0FBVDs7QUFURCxXQWFnQkksVUFiaEI7QUFBQTtBQUFBOztBQUFBO0FBQUEsMk1BYUM7QUFB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UUFBSSxFQUFFckcsSUFEVjtBQUVJLFVBQU0sRUFBRUMsTUFGWjtBQUdJLHVCQUFnQiwrQkFIcEI7QUFJSSxRQUFJLEVBQUMsSUFKVDtBQUtJLFlBQVE7QUFMWixrQkFPSSxpREFBQyxxRUFBRDtBQUFjLGVBQVc7QUFBekIsa0JBQ0ksaURBQUMsb0VBQUQ7QUFBYSxNQUFFLEVBQUM7QUFBaEIsMEJBREosQ0FQSixlQWFJLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDO0FBQXRCLGtCQUNJLGlEQUFDLDZEQUFELHFCQUNJLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDSSxpREFBQyxtRUFBRCx3QkFESixFQUVLYSxpQkFGTCxlQUdJLCtFQUFtQkMsV0FBbkIsT0FBaUNULFVBQWpDLENBSEosQ0FESixlQU9JO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUVnRyxNQUFBQSxTQUFTLEVBQUU7QUFBYjtBQUEvQixrQkFDSSxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVyRjtBQUFuQyxrQkFESixDQVBKLENBREosQ0FiSixDQURJLENBQVI7QUFtQ0g7Ozs7Ozs7O1VDL09ELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvbW9kYWxzL2xvdHRlcnkvQnV5TG90dGVyeU1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVUb2tlbkFQSSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL3Rva2VuJztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5pbXBvcnQgeyBXYWxsZXRBY2NvdW50IH0gZnJvbSAnbmVhci1hcGktanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXlMb3R0ZXJ5TW9kYWwoe1xuICAgIHNob3csXG4gICAgb25IaWRlLFxuICAgIG5mdGlkLFxuICAgIG5mdHJlY2lkLFxuICAgIFRvQWRkcmVzcyxcbiAgICBwcmljZSxcbiAgICB3YWxsZXRUeXBlLFxuICAgIHRpY2tldG51bWJlclxufSkge1xuICAgIGNvbnN0IHsgY29udHJhY3QsIGNvbnRyYWN0Q2Vsbywgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuXG4gICAgY29uc3QgW1F1YW50aXR5LCBhbW91bnRUaWNrZXRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtUb3RhbGFtb3VudCwgc2V0VG90YWxhbW91bnRdID0gdXNlU3RhdGUoMClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRvdGFsYW1vdW50KFF1YW50aXR5ICogcHJpY2UpO1xuICAgIH0sIFtRdWFudGl0eV0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gYnV5TG90dGVyeSgpIHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgaWYgKHdhbGxldFR5cGUgPT0gXCJORUFSXCIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKEJ1eWluZ0xvdHRlcnkoVG90YWxhbW91bnQsIFRvQWRkcmVzcyksIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZzogXCJCdXlpbmcgTG90dGVyeSBUaWNrZXQuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBcInN1Y2Nlc3MhXCJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh3YWxsZXRUeXBlID09IFwiQ0VMT1wiKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShCdXlpbmdMb3R0ZXJ5Q2VsbyhUb3RhbGFtb3VudCwgVG9BZGRyZXNzKSwge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nOiBcIkJ1eWluZyBMb3R0ZXJ5IFRpY2tldC4uLlwiLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IFwic3VjY2VzcyFcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nT25BaXJ0YWJsZShUb3RhbGFtb3VudCwgVG9BZGRyZXNzKSwge1xuICAgICAgICAgICAgICAgIHBlbmRpbmc6IFwiVXBkYXRpbmcgTG90dGVyeSBUaWNrZXQgb24gQWlydGFibGUuLi5cIixcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogXCJTdWNjZXNzIVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIEJ1eWluZ0xvdHRlcnkoQW1vdW50LCBUb0FkZHJlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG4gICAgICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uUHJvcHMuaW5uZXJUZXh0ID0gXCJDb25uZWN0IHRvIE5FQVIgd2FsbGV0XCJcbiAgICAgICAgICAgICAgICBhd2FpdCB0b2FzdC53YXJuKFwiTm90IGNvbm5lY3RlZCB3aXRoIE5FQVIgd2FsbGV0ISBDb25uZWN0aW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ0RlbWV0ZXInKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbmV0d29ya0lkOiBcInRlc3RuZXRcIixcbiAgICAgICAgICAgICAgICBrZXlTdG9yZTogbmV3IG5lYXJBUEkua2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpLFxuICAgICAgICAgICAgICAgIG5vZGVVcmw6IFwiaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICAgICAgICAgICAgICAgIHdhbGxldFVybDogXCJodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnXCIsXG4gICAgICAgICAgICAgICAgaGVscGVyVXJsOiBcImh0dHBzOi8vaGVscGVyLnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgICAgICAgICBleHBsb3JlclVybDogXCJodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBzZW5kcyBORUFSIHRva2Vuc1xuICAgICAgICAgICAgY29uc3QgbmVhciA9IGF3YWl0IG5lYXJBUEkuY29ubmVjdChjb25maWcpO1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IG5lYXIuYWNjb3VudCh3YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpKTtcbiAgICAgICAgICAgIC8vY29uc3QgYW1vdW50SW5Zb2N0byA9IG5lYXJBUEkudXRpbHMuZm9ybWF0LmZvcm1hdE5lYXJBbW91bnQoQW1vdW50KTtcblxuICAgICAgICAgICAgY29uc3QgYW1vdW50SW5Zb2N0byA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCdmdWxsd2lkZScsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICBhd2FpdCBhY2NvdW50LnNlbmRNb25leShcbiAgICAgICAgICAgICAgICBUb0FkZHJlc3MsIC8vIHJlY2VpdmVyIGFjY291bnRcbiAgICAgICAgICAgICAgICBhbW91bnRJbllvY3RvIC8vIGFtb3VudCBpbiB5b2N0b05FQVJcbiAgICAgICAgICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gQnV5aW5nTG90dGVyeUNlbG8oQW1vdW50LCBUb0FkZHJlc3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG4gICAgICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyAhPSBudWxsICYmIHdpbmRvdy5ldGhlcmV1bS5uZXR3b3JrVmVyc2lvbiA9PSA0NDc4NyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiKSAhPSBcIlwiKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbW91bnR0b3RhbCA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDApLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgICAgICAvL1NpZ25pbmcgVHhcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvblBhcmFtZXRlcnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IHNpZ25lckFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIHRvOiBUb0FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhbW91bnR0b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgZ2FzUHJpY2U6ICcweDA5MTg0ZTcyYTAwMCcsXG4gICAgICAgICAgICAgICAgICAgIGdhczogJzYxQTgnLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0eEhhc2ggaXMgYSBoZXggc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzIHdpdGggYW55IFJQQyBjYWxsLCBpdCBtYXkgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHhIYXNoID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdldGhfc2VuZFRyYW5zYWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW3RyYW5zYWN0aW9uUGFyYW1ldGVyc10sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eEhhc2gpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvblByb3BzLmlubmVyVGV4dCA9IFwiQ29ubmVjdCB0byBDRUxPIHdhbGxldFwiXG4gICAgICAgICAgICAgICAgYXdhaXQgdG9hc3Qud2FybihcIk5vdCBjb25uZWN0ZWQgd2l0aCBDRUxPIHdhbGxldCEgQ29ubmVjdGluZy4uLlwiKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbG9naW5bL2RvbmF0aW9uXWA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGNvbm5lY3RlZCB3aXRoIENFTE8gd2FsbGV0IVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdPbkFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgaWYgKHRpY2tldG51bWJlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aWNrZXRudW1iZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50V2FsbGV0ID0gd2luZG93LndhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICAgICAgaWYgKHdhbGxldFR5cGUgPT0gXCJDRUxPXCIpe1xuICAgICAgICAgICAgY3VycmVudFdhbGxldD13aW5kb3cuZXRoZXJldW0ud2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW5kbnVtYmVyID0gTnVtYmVyKHRpY2tldG51bWJlcikgKyBOdW1iZXIoUXVhbnRpdHkpO1xuICAgICAgICBmb3IgKGxldCBpID0gTnVtYmVyKHRpY2tldG51bWJlcik7IGkgPCBlbmRudW1iZXI7IGkrKykge1xuICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLmNyZWF0ZShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5mdGlkXCI6IE51bWJlcihuZnRpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJcIjogY3VycmVudFdhbGxldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcldhbGxldFwiOiBzaWduZXJBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJudW1iZXJcIjogaVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXNlcnMgPSAnJztcbiAgICAgICAgbGV0IHBhcnRpY2lwYXRlZCA9IDA7XG4gICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLmZpbmQobmZ0cmVjaWQsIGFzeW5jIGZ1bmN0aW9uIChlcnIsIHJlY29yZCkge1xuICAgICAgICAgICAgICAgIHVzZXJzID0gcmVjb3JkLmdldCgnaXNib3VnaHQnKTtcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmdldCgncGFydGljaXBhdGVkJykgIT0gXCJcIiAmJiByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlZCA9IHJlY29yZC5nZXQoJ3BhcnRpY2lwYXRlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHBhcnRpY2lwYXRlZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coZG9uZSk7XG5cbiAgICAgICAgdXNlcnMgPSB1c2VycyArIFwiLCBcIiArIHdpbmRvdy53YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQ7XG4gICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS51cGRhdGUoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogbmZ0cmVjaWQsXG4gICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlzYm91Z2h0XCI6IHVzZXJzLFxuICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYXRlZFwiOiBwYXJ0aWNpcGF0ZWQgKyAxLFxuICAgICAgICAgICAgICAgICAgICBcInRpY2tldG51bWJlclwiOiBlbmRudW1iZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKDw+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgc2hvdz17c2hvd31cbiAgICAgICAgICAgIG9uSGlkZT17b25IaWRlfVxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuICAgICAgICAgICAgc2l6ZT1cImdnXCJcbiAgICAgICAgICAgIGNlbnRlcmVkXG4gICAgICAgID5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgQnV5IExvdHRlcnkgVGlja2V0XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cblxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlRvdGFsIHRpY2tldHM8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YW1vdW50VGlja2V0SW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbCBwcmljZSB7VG90YWxhbW91bnR9IHt3YWxsZXRUeXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtidXlMb3R0ZXJ5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXkgVGlja2V0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgPC8+XG5cblxuICAgICk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOWUwMGRjMjFkMmIyZWUwM2Y2MGVcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJGb3JtIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwiY3JlYXRlVG9rZW5BUEkiLCJuZWFyQVBJIiwidG9hc3QiLCJ1c2VDb250cmFjdCIsIldhbGxldEFjY291bnQiLCJCdXlMb3R0ZXJ5TW9kYWwiLCJzaG93Iiwib25IaWRlIiwibmZ0aWQiLCJuZnRyZWNpZCIsIlRvQWRkcmVzcyIsInByaWNlIiwid2FsbGV0VHlwZSIsInRpY2tldG51bWJlciIsImNvbnRyYWN0IiwiY29udHJhY3RDZWxvIiwic2lnbmVyQWRkcmVzcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsIlF1YW50aXR5IiwiYW1vdW50VGlja2V0SW5wdXQiLCJUb3RhbGFtb3VudCIsInNldFRvdGFsYW1vdW50IiwiYnV5TG90dGVyeSIsInByb21pc2UiLCJCdXlpbmdMb3R0ZXJ5IiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsIkJ1eWluZ0xvdHRlcnlDZWxvIiwiQ3JlYXRpbmdPbkFpcnRhYmxlIiwiQW1vdW50IiwiYnV0dG9uUHJvcHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ3aW5kb3ciLCJ3YWxsZXRBY2NvdW50IiwiaXNTaWduZWRJbiIsImlubmVyVGV4dCIsIndhcm4iLCJyZXF1ZXN0U2lnbkluIiwibmVhckNvbmZpZyIsImNvbnRyYWN0TmFtZSIsImNvbmZpZyIsIm5ldHdvcmtJZCIsImtleVN0b3JlIiwia2V5U3RvcmVzIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibm9kZVVybCIsIndhbGxldFVybCIsImhlbHBlclVybCIsImV4cGxvcmVyVXJsIiwiY29ubmVjdCIsIm5lYXIiLCJhY2NvdW50IiwiZ2V0QWNjb3VudElkIiwiYW1vdW50SW5Zb2N0byIsIk51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJzZW5kTW9uZXkiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJldGhlcmV1bSIsInNlbGVjdGVkQWRkcmVzcyIsIm5ldHdvcmtWZXJzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFtb3VudHRvdGFsIiwidG9TdHJpbmciLCJ0cmFuc2FjdGlvblBhcmFtZXRlcnMiLCJmcm9tIiwidG8iLCJ2YWx1ZSIsImdhc1ByaWNlIiwiZ2FzIiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtcyIsInR4SGFzaCIsIkVycm9yIiwibG9jYXRpb24iLCJocmVmIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiY3VycmVudFdhbGxldCIsIl9hdXRoRGF0YSIsImFjY291bnRJZCIsImVuZG51bWJlciIsImkiLCJjcmVhdGUiLCJ1c2VycyIsInBhcnRpY2lwYXRlZCIsImRvbmUiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwicmVjb3JkIiwiZ2V0IiwidGhlbiIsImUiLCJ1cGRhdGUiLCJyZWxvYWQiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9