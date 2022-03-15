"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/components/components/modals/BidNFTModal.jsx":
/*!**********************************************************!*\
  !*** ./src/components/components/modals/BidNFTModal.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BidNFTModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/index-of */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");
/* harmony import */ var _components_common_Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/common/Icon */ "./src/components/common/Icon/index.tsx");
/* harmony import */ var _pages_Events_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../pages/Events/event */ "./src/pages/Events/event.jsx");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_15__);



















function BidNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      ToAddress = _ref.ToAddress,
      tokenId = _ref.tokenId,
      recid = _ref.recid,
      RealEventId = _ref.RealEventId,
      Highestbid = _ref.Highestbid,
      walletType = _ref.walletType,
      contract = _ref.contract,
      contractCelo = _ref.contractCelo,
      senderAddress = _ref.senderAddress,
      eventId = _ref.eventId;

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  var base = new Airtable({
    apiKey: 'keyR1Rrcl9O2s9bTs'
  }).base('appgbRCpbkzmdcucO');

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_11__["default"])({
    type: 'text',
    placeholder: 'Amount'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      Amount = _UseFormInput2[0],
      AmountInput = _UseFormInput2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      EventGoal = _useState4[0],
      setEventGoal = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      categories = _useState6[0],
      setCategories = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      allSelected = _useState8[0],
      setAllSelected = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      otherSelected = _useState10[0],
      setOtherSelected = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      selectedCategory = _useState12[0],
      setSelectedCategory = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(-1),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      otherCategory = _useState14[0],
      setOtherCategory = _useState14[1];

  function activateWarningModal() {
    var alertELM = document.getElementById("alert");
    alertELM.style = 'contents';
    setAlert("Amount cannot be under ".concat(Highestbid, " NEAR"));
  }

  function fetchCategories() {
    return _fetchCategories.apply(this, arguments);
  }

  function _fetchCategories() {
    _fetchCategories = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var nearPrice, nearCurrencyUrl, options, _context;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(categories.length == 0)) {
                _context2.next = 17;
                break;
              }

              nearPrice = 0;
              _context2.prev = 2;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context2.next = 7;
              return fetch(nearCurrencyUrl, options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 7:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);
              nearPrice = 0;

            case 13:
              if (!(EventGoal == 0)) {
                _context2.next = 16;
                break;
              }

              _context2.next = 16;
              return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(_context = base('events')).call(_context, eventId, function (err, record) {
                setEventGoal(Number(record.get("Goal")));
              });

            case 16:
              if (RealEventId != 0) {
                try {
                  base('eventcategories').select({
                    filterByFormula: "({eventid} = ".concat(RealEventId, ")"),
                    view: "Grid view"
                  }).eachPage(function page(records, fetchNextPage) {
                    var sumofmain = 0;
                    records.forEach(function (record) {
                      categories.push(record.fields);
                      sumofmain += Number(Number(record.get("price")) * Number(record.get("amount")));
                    });
                    setOtherCategory(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(EventGoal * nearPrice) - sumofmain); // setCategories(records[0].fields);
                  }, function done(err) {
                    console.error(err);
                  });
                } catch (error) {}
              }

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));
    return _fetchCategories.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    fetchCategories();
  }, [categories]);

  function bidNFT() {
    return _bidNFT.apply(this, arguments);
  }

  function _bidNFT() {
    _bidNFT = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(Number(Amount) < Number(Highestbid))) {
                _context3.next = 3;
                break;
              }

              activateWarningModal();
              return _context3.abrupt("return");

            case 3:
              if (!(walletType == "CELO")) {
                _context3.next = 8;
                break;
              }

              _context3.next = 6;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(bidNFTbyCELO, {
                pending: "Bidding...",
                error: "Please try again later",
                success: "Success!!!"
              });

            case 6:
              _context3.next = 11;
              break;

            case 8:
              if (!(walletType == "NEAR")) {
                _context3.next = 11;
                break;
              }

              _context3.next = 11;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(bidNFTbyNEAR, {
                pending: "Bidding...",
                error: "Please try again later",
                success: "Success!!!"
              });

            case 11:
              _context3.next = 13;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.promise(CreatingOnAirTable, {
                pending: "Updating on Airtable...",
                error: "Please try again later",
                success: "Updated on Airtable"
              });

            case 13:
              window.location.reload();
              window.document.getElementsByClassName("btn-close")[0].click();

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2);
    }));
    return _bidNFT.apply(this, arguments);
  }

  function CreatingOnAirTable() {
    return _CreatingOnAirTable.apply(this, arguments);
  }

  function _CreatingOnAirTable() {
    _CreatingOnAirTable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var Airtable, base, currentDate;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              currentDate = new Date();
              _context4.next = 5;
              return base('tokenbid').create([{
                "fields": {
                  "Tokenid": tokenId,
                  "Date": currentDate,
                  "UserName": walletAccount.getAccountId().toString(),
                  "Bidprice": Amount
                }
              }]);

            case 5:
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success("Bid created on Airtable");
              _context4.next = 8;
              return UpdateAirtable();

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    }));
    return _CreatingOnAirTable.apply(this, arguments);
  }

  function UpdateAirtable() {
    return _UpdateAirtable.apply(this, arguments);
  }

  function _UpdateAirtable() {
    _UpdateAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var Airtable, base, i;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              _context7.next = 4;
              return base('nfts').update([{
                "id": recid,
                "fields": {
                  "price": Amount
                }
              }]);

            case 4:
              i = 0;

            case 5:
              if (!(i < selectedCategory.length)) {
                _context7.next = 11;
                break;
              }

              _context7.next = 8;
              return base('eventcategories').select({
                filterByFormula: "({id} = '".concat(selectedCategory[i], "')"),
                sort: [{
                  field: "price",
                  direction: "desc"
                }],
                view: "Grid view"
              }).eachPage( /*#__PURE__*/function () {
                var _page = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(records, fetchNextPage) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return records.forEach( /*#__PURE__*/function () {
                            var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(record) {
                              var eventcategoryID, perpeice, updatedprice, Updatedamount;
                              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context5) {
                                while (1) {
                                  switch (_context5.prev = _context5.next) {
                                    case 0:
                                      eventcategoryID = record.id;
                                      perpeice = _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(Number(record.get('price')) / Number(record.get('amount')));
                                      updatedprice = Number(record.get("price")) - perpeice;
                                      Updatedamount = Number(record.get('amount')) - 1;
                                      _context5.next = 6;
                                      return base('eventcategories').update([{
                                        "id": eventcategoryID,
                                        "fields": {
                                          "price": updatedprice.toString(),
                                          "amount": Updatedamount.toString()
                                        }
                                      }]);

                                    case 6:
                                      console.log(record);

                                    case 7:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }
                              }, _callee4);
                            }));

                            return function (_x3) {
                              return _ref2.apply(this, arguments);
                            };
                          }());

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee5);
                }));

                function page(_x, _x2) {
                  return _page.apply(this, arguments);
                }

                return page;
              }(), function done(err) {
                if (err) {
                  console.error(err);
                  return;
                }
              });

            case 8:
              i++;
              _context7.next = 5;
              break;

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee6);
    }));
    return _UpdateAirtable.apply(this, arguments);
  }

  function bidNFTbyNEAR() {
    return _bidNFTbyNEAR.apply(this, arguments);
  }

  function _bidNFTbyNEAR() {
    _bidNFTbyNEAR = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      var buttonProps, config, near, account, amountInYocto;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              buttonProps = document.getElementsByClassName("btn btn-primary")[0];

              if (!(window.walletAccount.isSignedIn() == false)) {
                _context8.next = 8;
                break;
              }

              buttonProps.innerText = "Connect to NEAR wallet";
              _context8.next = 5;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.warn("Not connected with NEAR wallet! Connecting...");

            case 5:
              _context8.next = 7;
              return window.walletAccount.requestSignIn(window.nearConfig.contractName, 'Demeter');

            case 7:
              return _context8.abrupt("return");

            case 8:
              // We call say Hi and then update who said Hi last.
              // window.contract.sayHi().then(updateWhoSaidHi);
              config = {
                networkId: "testnet",
                keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_15__.keyStores.BrowserLocalStorageKeyStore(),
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org"
              }; // sends NEAR tokens

              _context8.next = 11;
              return near_api_js__WEBPACK_IMPORTED_MODULE_15__.connect(config);

            case 11:
              near = _context8.sent;
              _context8.next = 14;
              return near.account(walletAccount.getAccountId());

            case 14:
              account = _context8.sent;
              amountInYocto = (Number(Amount) * 1000000000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context8.next = 18;
              return account.sendMoney(ToAddress, // receiver account
              amountInYocto // amount in yoctoNEAR
              ).catch(function (error) {
                console.error("error:", error);
                console.log(error);
                return;
              });

            case 18:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee7);
    }));
    return _bidNFTbyNEAR.apply(this, arguments);
  }

  function bidNFTbyCELO() {
    return _bidNFTbyCELO.apply(this, arguments);
  }

  function _bidNFTbyCELO() {
    _bidNFTbyCELO = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
      var buttonProps, createdObject, CELOinFull, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              buttonProps = document.getElementsByClassName("btn btn-primary")[0];

              if (!(window.ethereum.selectedAddress != null && window.ethereum.networkVersion == 44787 && window.localStorage.getItem("ConnectedMetaCelo") != "")) {
                _context9.next = 10;
                break;
              }

              createdObject = {
                "Tokenid": tokenId,
                "Bidprice": Amount
              };
              CELOinFull = (Number(Amount) * 1000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context9.next = 6;
              return contractCelo.createBid(tokenId, _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_7___default()(createdObject), {
                from: senderAddress,
                gasPrice: 1000000000000,
                value: CELOinFull
              });

            case 6:
              result = _context9.sent;

              try {
                console.log(result);
              } catch (e) {
                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error("Insufficient funds");
              }

              _context9.next = 16;
              break;

            case 10:
              buttonProps.innerText = "Connect to CELO wallet";
              _context9.next = 13;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.warn("Not connected with CELO wallet! Connecting...");

            case 13:
              window.location.href = "/login[/donation]";
              throw new Error("Not connected with CELO wallet!");

            case 16:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee8);
    }));
    return _bidNFTbyCELO.apply(this, arguments);
  }

  var selectCategory = function selectCategory(category_id) {
    console.log("category_id");
    console.log(category_id);
    var temp_arr = [];

    for (var i = 0; i < selectedCategory.length; i++) {
      temp_arr.push(selectedCategory[i]);
    }

    temp_arr.push(category_id);
    console.log(temp_arr);
    setSelectedCategory(temp_arr);
  };

  var unselectCategory = function unselectCategory(category_id) {
    var temp_arr = [];

    for (var i = 0; i < selectedCategory.length; i++) {
      if (selectedCategory[i] != category_id) temp_arr.push(selectedCategory[i]);
    }

    console.log(temp_arr);
    setSelectedCategory(temp_arr);
  };

  var selectAllCategory = function selectAllCategory() {
    if (allSelected) {
      setAllSelected(false);
      setSelectedCategory([]);
    } else {
      setAllSelected(true);
      var temp_arr = [];

      for (var i = 0; i < categories.length; i++) {
        temp_arr.push(categories[i].id);
      }

      temp_arr.push(-1);
      setSelectedCategory(temp_arr);
    }
  };

  var otherSelect = function otherSelect() {
    if (otherSelected) {
      setOtherSelected(false);
      var temp_arr = [];

      for (var i = 0; i < selectedCategory.length; i++) {
        if (selectedCategory[i] != -1) temp_arr.push(selectedCategory[i]);
      }

      setSelectedCategory(temp_arr);
    } else {
      setOtherSelected(true);
      var temp_arr = [];

      for (var i = 0; i < selectedCategory.length; i++) {
        temp_arr.push(selectedCategory[i]);
      }

      temp_arr.push(-1);
      setSelectedCategory(temp_arr);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    show: show,
    onHide: onHide,
    onShow: fetchCategories,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_16__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    id: "alert",
    style: {
      display: 'none'
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Label, null, "Bid Amount in ", walletType), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    className: "selectCategoryAll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Choose where you want to give support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      width: "100%",
      padding: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      background: "bisque",
      height: "40px",
      borderRadius: "5px",
      marginBottom: "10px"
    },
    onClick: function onClick() {
      selectAllCategory();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
    style: {
      alignSelf: "center",
      color: "black"
    }
  }, "Support in general "), allSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      position: "absolute",
      right: "10px",
      top: "-7px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
    icon: "heartSelected"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      position: "absolute",
      right: "10px",
      top: "-7px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
    icon: "heartUnselected"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    className: "selectCategory",
    style: {
      marginLeft: "-10px",
      marginRight: "-10px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(categories).call(categories, function (category) {
    return _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4___default()(selectedCategory).call(selectedCategory, category.id) !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        width: "33%",
        padding: "0 10px",
        marginBottom: "10px"
      },
      key: category.id,
      onClick: function onClick() {
        return unselectCategory(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        background: "white",
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
      style: {
        marginBottom: "10px",
        color: "#151F28",
        textAlign: "center"
      }
    }, category.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("img", {
      src: category.image,
      style: {
        aspectRatio: '1',
        borderRadius: "5px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        marginTop: "10px",
        lineHeight: "14px"
      }
    }, category.amount * category.price, " USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        lineHeight: "14px"
      }
    }, "(", category.amount, " pieces)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        marginTop: "10px",
        display: "flex",
        width: "32px",
        height: "32px",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "16px",
        background: "#EEF1F4"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
      icon: "heartSelected"
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        width: "33%",
        padding: "0 10px",
        marginBottom: "10px"
      },
      key: category.id,
      onClick: function onClick() {
        return selectCategory(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        background: "white",
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
      style: {
        marginBottom: "10px",
        color: "#151F28",
        textAlign: "center"
      }
    }, category.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("img", {
      src: category.image,
      style: {
        aspectRatio: '1',
        borderRadius: "5px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        marginTop: "10px",
        lineHeight: "14px"
      }
    }, category.amount * category.price, " USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        lineHeight: "14px"
      }
    }, "(", category.amount, " pieces)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        marginTop: "10px",
        display: "flex",
        width: "32px",
        height: "32px",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "16px",
        background: "#EEF1F4"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
      icon: "heartUnselected"
    })))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      width: "33%",
      padding: "0 10px",
      display: "flex",
      flexDirection: "column"
    },
    onClick: function onClick() {
      return otherSelect();
    }
  }, categories.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      background: "white",
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "5px",
      alignItems: "center",
      marginBottom: "15px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "#151F28",
      textAlign: "center"
    }
  }, "Other support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h5", {
    style: {
      color: "#151F28",
      textAlign: "center",
      marginTop: "10px",
      lineHeight: "14px"
    }
  }, otherCategory, " USD"), _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4___default()(selectedCategory).call(selectedCategory, -1) !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
    icon: "heartSelected"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      marginTop: "10px",
      display: "flex",
      width: "32px",
      height: "32px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "16px",
      background: "#EEF1F4"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_13__.Icon, {
    icon: "heartUnselected"
  })))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT"))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8bfa41434b1284d8ce94"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjExYTUwNzhkMTdlZjI1YjVlNmNhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2dCLFdBQVQsT0FhWjtBQUFBLE1BWkZDLElBWUUsUUFaRkEsSUFZRTtBQUFBLE1BWEZDLE1BV0UsUUFYRkEsTUFXRTtBQUFBLE1BVkZDLFNBVUUsUUFWRkEsU0FVRTtBQUFBLE1BVEZDLE9BU0UsUUFURkEsT0FTRTtBQUFBLE1BUkZDLEtBUUUsUUFSRkEsS0FRRTtBQUFBLE1BUEZDLFdBT0UsUUFQRkEsV0FPRTtBQUFBLE1BTkZDLFVBTUUsUUFORkEsVUFNRTtBQUFBLE1BTEZDLFVBS0UsUUFMRkEsVUFLRTtBQUFBLE1BSkZDLFFBSUUsUUFKRkEsUUFJRTtBQUFBLE1BSEZDLFlBR0UsUUFIRkEsWUFHRTtBQUFBLE1BRkZDLGFBRUUsUUFGRkEsYUFFRTtBQUFBLE1BREZDLE9BQ0UsUUFERkEsT0FDRTs7QUFDRixNQUFJQyxRQUFRLEdBQUdDLG1CQUFPLENBQUMseURBQUQsQ0FBdEI7O0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQUlGLFFBQUosQ0FBYTtBQUFFRyxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUFiLEVBQThDRCxJQUE5QyxDQUFtRCxtQkFBbkQsQ0FBWDs7QUFFQSxrQkFBMEI5QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQTtBQUFBLE1BQU9nQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxzQkFBOEJ6QiwwREFBWSxDQUFDO0FBQzFDMEIsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDQyxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBSUEsbUJBQWtDckMsK0NBQVEsQ0FBQyxDQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPc0MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0N2QywrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQTtBQUFBLE1BQU93QyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUdBLG1CQUFzQ3pDLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUFBO0FBQUEsTUFBTzBDLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQTBDM0MsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPNEMsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0Esb0JBQWdEN0MsK0NBQVEsQ0FBQyxFQUFELENBQXhEO0FBQUE7QUFBQSxNQUFPOEMsZ0JBQVA7QUFBQSxNQUF5QkMsbUJBQXpCOztBQUVBLG9CQUEwQy9DLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQWxEO0FBQUE7QUFBQSxNQUFPZ0QsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBRUEsV0FBU0Msb0JBQVQsR0FBZ0M7QUFDL0IsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLEtBQVQsR0FBaUIsVUFBakI7QUFDQXJCLElBQUFBLFFBQVEsa0NBQTJCWCxVQUEzQixXQUFSO0FBQ0E7O0FBdkJDLFdBd0JhaUMsZUF4QmI7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ05Bd0JGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDS2YsVUFBVSxDQUFDZ0IsTUFBWCxJQUFxQixDQUQxQjtBQUFBO0FBQUE7QUFBQTs7QUFFTUMsY0FBQUEsU0FGTixHQUVrQixDQUZsQjtBQUFBO0FBSU9DLGNBQUFBLGVBSlAsR0FJeUIsc0pBSnpCO0FBS09DLGNBQUFBLE9BTFAsR0FLaUI7QUFDYkMsZ0JBQUFBLE1BQU0sRUFBRSxLQURLO0FBRWJDLGdCQUFBQSxPQUFPLEVBQUU7QUFDUixrQ0FBZ0Isa0JBRFI7QUFFUkMsa0JBQUFBLE1BQU0sRUFBRTtBQUZBO0FBRkksZUFMakI7QUFBQTtBQUFBLHFCQVlTQyxLQUFLLENBQUNMLGVBQUQsRUFBa0JDLE9BQWxCLENBQUwsQ0FBZ0NLLElBQWhDLENBQXFDLFVBQUFDLEdBQUc7QUFBQSx1QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxlQUF4QyxFQUNKRixJQURJLENBQ0MsVUFBQUUsSUFBSTtBQUFBLHVCQUFJVCxTQUFTLEdBQUdTLElBQWhCO0FBQUEsZUFETCxFQUVKQyxLQUZJLENBRUUsVUFBQUMsR0FBRztBQUFBLHVCQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxXQUFXRixHQUF6QixDQUFKO0FBQUEsZUFGTCxDQVpUOztBQUFBO0FBZUdYLGNBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDYyxJQUFWLENBQWVDLFdBQWYsQ0FBMkIsQ0FBM0IsRUFBOEJDLEtBQTFDO0FBZkg7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQk9oQixjQUFBQSxTQWpCUCxHQWlCbUIsQ0FqQm5COztBQUFBO0FBQUEsb0JBb0JNbkIsU0FBUyxJQUFJLENBcEJuQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQXFCUyxzR0FBQVIsSUFBSSxDQUFDLFFBQUQsQ0FBSixpQkFBb0JILE9BQXBCLEVBQTZCLFVBQVV5QyxHQUFWLEVBQWVNLE1BQWYsRUFBdUI7QUFDekRuQyxnQkFBQUEsWUFBWSxDQUFDb0MsTUFBTSxDQUFDRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxNQUFYLENBQUQsQ0FBUCxDQUFaO0FBQ0EsZUFGSyxDQXJCVDs7QUFBQTtBQXlCRSxrQkFBSXZELFdBQVcsSUFBSSxDQUFuQixFQUFzQjtBQUNyQixvQkFBSTtBQUVIUyxrQkFBQUEsSUFBSSxDQUFDLGlCQUFELENBQUosQ0FBd0IrQyxNQUF4QixDQUErQjtBQUM5QkMsb0JBQUFBLGVBQWUseUJBQWtCekQsV0FBbEIsTUFEZTtBQUU5QjBELG9CQUFBQSxJQUFJLEVBQUU7QUFGd0IsbUJBQS9CLEVBR0dDLFFBSEgsQ0FHWSxTQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBdUJDLGFBQXZCLEVBQXNDO0FBQ2pELHdCQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFDQUYsb0JBQUFBLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFVWCxNQUFWLEVBQWtCO0FBQ2pDbEMsc0JBQUFBLFVBQVUsQ0FBQzhDLElBQVgsQ0FBZ0JaLE1BQU0sQ0FBQ2EsTUFBdkI7QUFDQUgsc0JBQUFBLFNBQVMsSUFBSVQsTUFBTSxDQUFDQSxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE9BQVgsQ0FBRCxDQUFOLEdBQThCRCxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFFBQVgsQ0FBRCxDQUFyQyxDQUFuQjtBQUNBLHFCQUhEO0FBSUEzQixvQkFBQUEsZ0JBQWdCLENBQUMsdUZBQVNYLFNBQVMsR0FBR21CLFNBQXJCLElBQWtDMkIsU0FBbkMsQ0FBaEIsQ0FOaUQsQ0FRakQ7QUFDQSxtQkFaRCxFQVlHLFNBQVNJLElBQVQsQ0FBY3BCLEdBQWQsRUFBbUI7QUFDckJDLG9CQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNBLG1CQWREO0FBZUEsaUJBakJELENBaUJFLE9BQU9FLEtBQVAsRUFBYyxDQUFHO0FBQ25COztBQTVDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXhCRTtBQUFBO0FBQUE7O0FBMEVGckUsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2ZzRCxJQUFBQSxlQUFlO0FBQ2YsR0FGUSxFQUVOLENBQUNmLFVBQUQsQ0FGTSxDQUFUOztBQTFFRSxXQTZFYWlELE1BN0ViO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVNQTZFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0tkLE1BQU0sQ0FBQ3ZDLE1BQUQsQ0FBTixHQUFpQnVDLE1BQU0sQ0FBQ3JELFVBQUQsQ0FENUI7QUFBQTtBQUFBO0FBQUE7O0FBRUU0QixjQUFBQSxvQkFBb0I7QUFGdEI7O0FBQUE7QUFBQSxvQkFLSzNCLFVBQVUsSUFBSSxNQUxuQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQU1RakIseURBQUEsQ0FBY3FGLFlBQWQsRUFBNEI7QUFDakNDLGdCQUFBQSxPQUFPLGNBRDBCO0FBRWpDdEIsZ0JBQUFBLEtBQUssRUFBRSx3QkFGMEI7QUFHakN1QixnQkFBQUEsT0FBTztBQUgwQixlQUE1QixDQU5SOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9CQVlZdEUsVUFBVSxJQUFJLE1BWjFCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBYVFqQix5REFBQSxDQUFjd0YsWUFBZCxFQUE0QjtBQUNqQ0YsZ0JBQUFBLE9BQU8sY0FEMEI7QUFFakN0QixnQkFBQUEsS0FBSyxFQUFFLHdCQUYwQjtBQUdqQ3VCLGdCQUFBQSxPQUFPO0FBSDBCLGVBQTVCLENBYlI7O0FBQUE7QUFBQTtBQUFBLHFCQW1CT3ZGLHlEQUFBLENBQWN5RixrQkFBZCxFQUFrQztBQUN2Q0gsZ0JBQUFBLE9BQU8sMkJBRGdDO0FBRXZDdEIsZ0JBQUFBLEtBQUssRUFBRSx3QkFGZ0M7QUFHdkN1QixnQkFBQUEsT0FBTztBQUhnQyxlQUFsQyxDQW5CUDs7QUFBQTtBQXlCQ0csY0FBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNBRixjQUFBQSxNQUFNLENBQUM1QyxRQUFQLENBQWdCK0Msc0JBQWhCLENBQXVDLFdBQXZDLEVBQW9ELENBQXBELEVBQXVEQyxLQUF2RDs7QUExQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3RUU7QUFBQTtBQUFBOztBQUFBLFdBeUdhTCxrQkF6R2I7QUFBQTtBQUFBOztBQUFBO0FBQUEsbU5BeUdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLbkUsY0FBQUEsUUFETCxHQUNnQkMsbUJBQU8sQ0FBQyx5REFBRCxDQUR2QjtBQUVLQyxjQUFBQSxJQUZMLEdBRVksSUFBSUYsUUFBSixDQUFhO0FBQUVHLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUFiLEVBQThDRCxJQUE5QyxDQUFtRCxtQkFBbkQsQ0FGWjtBQUdLdUUsY0FBQUEsV0FITCxHQUdtQixJQUFJQyxJQUFKLEVBSG5CO0FBQUE7QUFBQSxxQkFJT3hFLElBQUksQ0FBQyxVQUFELENBQUosQ0FBaUJ5RSxNQUFqQixDQUF3QixDQUM3QjtBQUNDLDBCQUFVO0FBQ1QsNkJBQVdwRixPQURGO0FBRVQsMEJBQVFrRixXQUZDO0FBR1QsOEJBQVlHLGFBQWEsQ0FBQ0MsWUFBZCxHQUE2QkMsUUFBN0IsRUFISDtBQUlULDhCQUFZdEU7QUFKSDtBQURYLGVBRDZCLENBQXhCLENBSlA7O0FBQUE7QUFhQzlCLGNBQUFBLHlEQUFBLENBQWMseUJBQWQ7QUFiRDtBQUFBLHFCQWNPcUcsY0FBYyxFQWRyQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXpHRTtBQUFBO0FBQUE7O0FBQUEsV0EwSGFBLGNBMUhiO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtNQTBIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSy9FLGNBQUFBLFFBREwsR0FDZ0JDLG1CQUFPLENBQUMseURBQUQsQ0FEdkI7QUFFS0MsY0FBQUEsSUFGTCxHQUVZLElBQUlGLFFBQUosQ0FBYTtBQUFFRyxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBYixFQUE4Q0QsSUFBOUMsQ0FBbUQsbUJBQW5ELENBRlo7QUFBQTtBQUFBLHFCQUlPQSxJQUFJLENBQUMsTUFBRCxDQUFKLENBQWE4RSxNQUFiLENBQW9CLENBQ3pCO0FBQ0Msc0JBQU14RixLQURQO0FBRUMsMEJBQVU7QUFDVCwyQkFBU2dCO0FBREE7QUFGWCxlQUR5QixDQUFwQixDQUpQOztBQUFBO0FBYVV5RSxjQUFBQSxDQWJWLEdBYWMsQ0FiZDs7QUFBQTtBQUFBLG9CQWFpQkEsQ0FBQyxHQUFHL0QsZ0JBQWdCLENBQUNVLE1BYnRDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBZVExQixJQUFJLENBQUMsaUJBQUQsQ0FBSixDQUF3QitDLE1BQXhCLENBQStCO0FBQ3BDQyxnQkFBQUEsZUFBZSxxQkFBY2hDLGdCQUFnQixDQUFDK0QsQ0FBRCxDQUE5QixPQURxQjtBQUVwQ0MsZ0JBQUFBLElBQUksRUFBRSxDQUFDO0FBQUVDLGtCQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsa0JBQUFBLFNBQVMsRUFBRTtBQUE3QixpQkFBRCxDQUY4QjtBQUdwQ2pDLGdCQUFBQSxJQUFJLEVBQUU7QUFIOEIsZUFBL0IsRUFJSEMsUUFKRztBQUFBLHFOQUlNLGtCQUFvQkUsT0FBcEIsRUFBNkJDLGFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUdMRCxPQUFPLENBQUNHLE9BQVI7QUFBQSxpT0FBZ0Isa0JBQWdCWCxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJ1QyxzQ0FBQUEsZUFEaUIsR0FDQ3ZDLE1BQU0sQ0FBQ3dDLEVBRFI7QUFFZkMsc0NBQUFBLFFBRmUsR0FFSix1RkFBU3hDLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsT0FBWCxDQUFELENBQU4sR0FBOEJELE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsUUFBWCxDQUFELENBQTdDLENBRkk7QUFHakJ3QyxzQ0FBQUEsWUFIaUIsR0FHRnpDLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsT0FBWCxDQUFELENBQU4sR0FBOEJ1QyxRQUg1QjtBQUlqQkUsc0NBQUFBLGFBSmlCLEdBSUQxQyxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFFBQVgsQ0FBRCxDQUFOLEdBQStCLENBSjlCO0FBQUE7QUFBQSw2Q0FLZjlDLElBQUksQ0FBQyxpQkFBRCxDQUFKLENBQXdCOEUsTUFBeEIsQ0FBK0IsQ0FDcEM7QUFDQyw4Q0FBTUssZUFEUDtBQUVDLGtEQUFVO0FBQ1QsbURBQVNHLFlBQVksQ0FBQ1YsUUFBYixFQURBO0FBRVQsb0RBQVVXLGFBQWEsQ0FBQ1gsUUFBZDtBQUZEO0FBRlgsdUNBRG9DLENBQS9CLENBTGU7O0FBQUE7QUFjckJyQyxzQ0FBQUEsT0FBTyxDQUFDaUQsR0FBUixDQUFZNUMsTUFBWjs7QUFkcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQWhCOztBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUhLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpOOztBQUFBLHlCQUlxQk8sSUFKckI7QUFBQTtBQUFBOztBQUFBLHVCQUlxQkEsSUFKckI7QUFBQSxtQkF1QkgsU0FBU08sSUFBVCxDQUFjcEIsR0FBZCxFQUFtQjtBQUNyQixvQkFBSUEsR0FBSixFQUFTO0FBQUVDLGtCQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUFvQjtBQUFTO0FBQ3hDLGVBekJLLENBZlI7O0FBQUE7QUFhOEN5QyxjQUFBQSxDQUFDLEVBYi9DO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTFIRTtBQUFBO0FBQUE7O0FBQUEsV0F3S2FmLFlBeEtiO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZNQXdLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFS3lCLGNBQUFBLFdBRkwsR0FFbUJuRSxRQUFRLENBQUMrQyxzQkFBVCxDQUFnQyxpQkFBaEMsRUFBbUQsQ0FBbkQsQ0FGbkI7O0FBQUEsb0JBR0tILE1BQU0sQ0FBQ1EsYUFBUCxDQUFxQmdCLFVBQXJCLE1BQXFDLEtBSDFDO0FBQUE7QUFBQTtBQUFBOztBQUlFRCxjQUFBQSxXQUFXLENBQUNFLFNBQVosR0FBd0Isd0JBQXhCO0FBSkY7QUFBQSxxQkFLUW5ILHNEQUFBLENBQVcsK0NBQVgsQ0FMUjs7QUFBQTtBQUFBO0FBQUEscUJBTVEwRixNQUFNLENBQUNRLGFBQVAsQ0FBcUJtQixhQUFyQixDQUNMM0IsTUFBTSxDQUFDNEIsVUFBUCxDQUFrQkMsWUFEYixFQUVMLFNBRkssQ0FOUjs7QUFBQTtBQUFBOztBQUFBO0FBV0M7QUFDQTtBQUNNQyxjQUFBQSxNQWJQLEdBYWdCO0FBQ2RDLGdCQUFBQSxTQUFTLEVBQUUsU0FERztBQUVkQyxnQkFBQUEsUUFBUSxFQUFFLElBQUlsSCwrRUFBSixFQUZJO0FBR2RxSCxnQkFBQUEsT0FBTyxFQUFFLDhCQUhLO0FBSWRDLGdCQUFBQSxTQUFTLEVBQUUsaUNBSkc7QUFLZEMsZ0JBQUFBLFNBQVMsRUFBRSxpQ0FMRztBQU1kQyxnQkFBQUEsV0FBVyxFQUFFO0FBTkMsZUFiaEIsRUFxQkM7O0FBckJEO0FBQUEscUJBc0JvQnhILGlEQUFBLENBQWdCZ0gsTUFBaEIsQ0F0QnBCOztBQUFBO0FBc0JPVSxjQUFBQSxJQXRCUDtBQUFBO0FBQUEscUJBdUJ1QkEsSUFBSSxDQUFDQyxPQUFMLENBQWFqQyxhQUFhLENBQUNDLFlBQWQsRUFBYixDQXZCdkI7O0FBQUE7QUF1Qk9nQyxjQUFBQSxPQXZCUDtBQXdCT0MsY0FBQUEsYUF4QlAsR0F3QnVCLENBQUMvRCxNQUFNLENBQUN2QyxNQUFELENBQU4sR0FBaUIseUJBQWxCLEVBQTZDdUcsY0FBN0MsQ0FBNEQsVUFBNUQsRUFBd0U7QUFBRUMsZ0JBQUFBLFdBQVcsRUFBRTtBQUFmLGVBQXhFLENBeEJ2QjtBQUFBO0FBQUEscUJBMEJPSCxPQUFPLENBQUNJLFNBQVIsQ0FDTDNILFNBREssRUFDTTtBQUNYd0gsY0FBQUEsYUFGSyxDQUVTO0FBRlQsZ0JBR0p2RSxLQUhJLENBR0UsVUFBQ0csS0FBRCxFQUFXO0FBQ2xCRCxnQkFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsUUFBZCxFQUF3QkEsS0FBeEI7QUFDQUQsZ0JBQUFBLE9BQU8sQ0FBQ2lELEdBQVIsQ0FBWWhELEtBQVo7QUFDQTtBQUNBLGVBUEssQ0ExQlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F4S0U7QUFBQTtBQUFBOztBQUFBLFdBNk1hcUIsWUE3TWI7QUFBQTtBQUFBOztBQUFBO0FBQUEsNk1BNk1GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLNEIsY0FBQUEsV0FETCxHQUNtQm5FLFFBQVEsQ0FBQytDLHNCQUFULENBQWdDLGlCQUFoQyxFQUFtRCxDQUFuRCxDQURuQjs7QUFBQSxvQkFFS0gsTUFBTSxDQUFDOEMsUUFBUCxDQUFnQkMsZUFBaEIsSUFBbUMsSUFBbkMsSUFBMkMvQyxNQUFNLENBQUM4QyxRQUFQLENBQWdCRSxjQUFoQixJQUFrQyxLQUE3RSxJQUFzRmhELE1BQU0sQ0FBQ2lELFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLG1CQUE1QixLQUFvRCxFQUYvSTtBQUFBO0FBQUE7QUFBQTs7QUFHUUMsY0FBQUEsYUFIUixHQUd3QjtBQUNyQiwyQkFBV2hJLE9BRFU7QUFFckIsNEJBQVlpQjtBQUZTLGVBSHhCO0FBUU1nSCxjQUFBQSxVQVJOLEdBUW1CLENBQUN6RSxNQUFNLENBQUN2QyxNQUFELENBQU4sR0FBaUIsbUJBQWxCLEVBQXVDdUcsY0FBdkMsQ0FBc0QsVUFBdEQsRUFBa0U7QUFBRUMsZ0JBQUFBLFdBQVcsRUFBRTtBQUFmLGVBQWxFLENBUm5CO0FBQUE7QUFBQSxxQkFVdUJuSCxZQUFZLENBQUNoQixTQUFiLENBQXVCVSxPQUF2QixFQUFnQyw0RkFBZWdJLGFBQWYsQ0FBaEMsRUFBK0Q7QUFDbkZFLGdCQUFBQSxJQUFJLEVBQUUzSCxhQUQ2RTtBQUVuRjRILGdCQUFBQSxRQUFRLEVBQUUsYUFGeUU7QUFFMURDLGdCQUFBQSxLQUFLLEVBQUVIO0FBRm1ELGVBQS9ELENBVnZCOztBQUFBO0FBVVFJLGNBQUFBLE1BVlI7O0FBY0Usa0JBQUc7QUFDTm5GLGdCQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVlrQyxNQUFaO0FBQ0ksZUFGRCxDQUVDLE9BQU9DLENBQVAsRUFBUztBQUNUbkosZ0JBQUFBLHVEQUFBLENBQVksb0JBQVo7QUFDQTs7QUFsQkg7QUFBQTs7QUFBQTtBQXFCRWlILGNBQUFBLFdBQVcsQ0FBQ0UsU0FBWixHQUF3Qix3QkFBeEI7QUFyQkY7QUFBQSxxQkFzQlFuSCxzREFBQSxDQUFXLCtDQUFYLENBdEJSOztBQUFBO0FBdUJFMEYsY0FBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCeUQsSUFBaEI7QUF2QkYsb0JBd0JRLElBQUlDLEtBQUosQ0FBVSxpQ0FBVixDQXhCUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTdNRTtBQUFBO0FBQUE7O0FBNk9GLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRCxFQUFpQjtBQUN2Q3hGLElBQUFBLE9BQU8sQ0FBQ2lELEdBQVIsQ0FBWSxhQUFaO0FBQ0FqRCxJQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVl1QyxXQUFaO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsU0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRy9ELGdCQUFnQixDQUFDVSxNQUFyQyxFQUE2Q3FELENBQUMsRUFBOUMsRUFBa0Q7QUFDakRpRCxNQUFBQSxRQUFRLENBQUN4RSxJQUFULENBQWN4QyxnQkFBZ0IsQ0FBQytELENBQUQsQ0FBOUI7QUFDQTs7QUFDRGlELElBQUFBLFFBQVEsQ0FBQ3hFLElBQVQsQ0FBY3VFLFdBQWQ7QUFDQXhGLElBQUFBLE9BQU8sQ0FBQ2lELEdBQVIsQ0FBWXdDLFFBQVo7QUFFQS9HLElBQUFBLG1CQUFtQixDQUFDK0csUUFBRCxDQUFuQjtBQUNBLEdBWEQ7O0FBWUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDRixXQUFELEVBQWlCO0FBQ3pDLFFBQUlDLFFBQVEsR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSWpELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcvRCxnQkFBZ0IsQ0FBQ1UsTUFBckMsRUFBNkNxRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2pELFVBQUkvRCxnQkFBZ0IsQ0FBQytELENBQUQsQ0FBaEIsSUFBdUJnRCxXQUEzQixFQUNDQyxRQUFRLENBQUN4RSxJQUFULENBQWN4QyxnQkFBZ0IsQ0FBQytELENBQUQsQ0FBOUI7QUFDRDs7QUFDRHhDLElBQUFBLE9BQU8sQ0FBQ2lELEdBQVIsQ0FBWXdDLFFBQVo7QUFDQS9HLElBQUFBLG1CQUFtQixDQUFDK0csUUFBRCxDQUFuQjtBQUNBLEdBUkQ7O0FBVUEsTUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQy9CLFFBQUl0SCxXQUFKLEVBQWlCO0FBQ2hCQyxNQUFBQSxjQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FJLE1BQUFBLG1CQUFtQixDQUFDLEVBQUQsQ0FBbkI7QUFDQSxLQUhELE1BR087QUFFTkosTUFBQUEsY0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNBLFVBQUltSCxRQUFRLEdBQUcsRUFBZjs7QUFDQSxXQUFLLElBQUlqRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHckUsVUFBVSxDQUFDZ0IsTUFBL0IsRUFBdUNxRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzNDaUQsUUFBQUEsUUFBUSxDQUFDeEUsSUFBVCxDQUFjOUMsVUFBVSxDQUFDcUUsQ0FBRCxDQUFWLENBQWNLLEVBQTVCO0FBQ0E7O0FBQ0Q0QyxNQUFBQSxRQUFRLENBQUN4RSxJQUFULENBQWMsQ0FBQyxDQUFmO0FBQ0F2QyxNQUFBQSxtQkFBbUIsQ0FBQytHLFFBQUQsQ0FBbkI7QUFDQTtBQUVELEdBZkQ7O0FBZ0JBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekIsUUFBSXJILGFBQUosRUFBbUI7QUFDbEJDLE1BQUFBLGdCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDQSxVQUFJaUgsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsV0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRy9ELGdCQUFnQixDQUFDVSxNQUFyQyxFQUE2Q3FELENBQUMsRUFBOUMsRUFBa0Q7QUFDakQsWUFBSS9ELGdCQUFnQixDQUFDK0QsQ0FBRCxDQUFoQixJQUF1QixDQUFDLENBQTVCLEVBQ0NpRCxRQUFRLENBQUN4RSxJQUFULENBQWN4QyxnQkFBZ0IsQ0FBQytELENBQUQsQ0FBOUI7QUFDRDs7QUFDRDlELE1BQUFBLG1CQUFtQixDQUFDK0csUUFBRCxDQUFuQjtBQUNBLEtBUkQsTUFRTztBQUNOakgsTUFBQUEsZ0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNBLFVBQUlpSCxRQUFRLEdBQUcsRUFBZjs7QUFDQSxXQUFLLElBQUlqRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHL0QsZ0JBQWdCLENBQUNVLE1BQXJDLEVBQTZDcUQsQ0FBQyxFQUE5QyxFQUFrRDtBQUNqRGlELFFBQUFBLFFBQVEsQ0FBQ3hFLElBQVQsQ0FBY3hDLGdCQUFnQixDQUFDK0QsQ0FBRCxDQUE5QjtBQUNBOztBQUNEaUQsTUFBQUEsUUFBUSxDQUFDeEUsSUFBVCxDQUFjLENBQUMsQ0FBZjtBQUNBdkMsTUFBQUEsbUJBQW1CLENBQUMrRyxRQUFELENBQW5CO0FBQ0E7QUFDRCxHQWxCRDs7QUFtQkEsc0JBQ0MsaUhBQ0MsaURBQUMsOERBQUQ7QUFDQyxRQUFJLEVBQUU5SSxJQURQO0FBRUMsVUFBTSxFQUFFQyxNQUZUO0FBR0MsVUFBTSxFQUFFc0MsZUFIVDtBQUlDLHVCQUFnQiwrQkFKakI7QUFLQyxZQUFRO0FBTFQsa0JBT0MsaURBQUMscUVBQUQ7QUFBYyxlQUFXO0FBQXpCLGtCQUNDLGlEQUFDLG9FQUFEO0FBQWEsTUFBRSxFQUFDO0FBQWhCLGVBREQsQ0FQRCxlQVlDLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDO0FBQXRCLGtCQUNDLGlEQUFDLDZEQUFELHFCQUNDO0FBQUssTUFBRSxFQUFDLE9BQVI7QUFBZ0IsU0FBSyxFQUFFO0FBQUUyRyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUF2QjtBQUE0QyxhQUFTLEVBQUMsb0JBQXREO0FBQTJFLFFBQUksRUFBQztBQUFoRixLQUNFbEksS0FERixDQURELGVBSUMsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLG1FQUFELDBCQUEyQlQsVUFBM0IsQ0FERCxFQUVFYyxXQUZGLENBSkQsZUFRQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUksU0FBSyxFQUFFO0FBQUU4SCxNQUFBQSxZQUFZLEVBQUU7QUFBaEI7QUFBWCw2Q0FERCxlQUVDO0FBQUssU0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxNQUFBQSxPQUFPLEVBQUUsS0FBMUI7QUFBaUNILE1BQUFBLE9BQU8sRUFBRSxNQUExQztBQUFrREksTUFBQUEsY0FBYyxFQUFFLFFBQWxFO0FBQTRFQyxNQUFBQSxVQUFVLEVBQUUsUUFBeEY7QUFBa0dDLE1BQUFBLFFBQVEsRUFBRSxVQUE1RztBQUF3SEMsTUFBQUEsVUFBVSxFQUFFLFFBQXBJO0FBQThJQyxNQUFBQSxNQUFNLEVBQUUsTUFBdEo7QUFBOEpDLE1BQUFBLFlBQVksRUFBRSxLQUE1SztBQUFtTFIsTUFBQUEsWUFBWSxFQUFFO0FBQWpNLEtBQVo7QUFBdU4sV0FBTyxFQUFFLG1CQUFNO0FBRXJPSCxNQUFBQSxpQkFBaUI7QUFDakI7QUFIRCxrQkFJQztBQUFJLFNBQUssRUFBRTtBQUFFWSxNQUFBQSxTQUFTLEVBQUUsUUFBYjtBQUF1QkMsTUFBQUEsS0FBSyxFQUFFO0FBQTlCO0FBQVgsMkJBSkQsRUFLRW5JLFdBQVcsZ0JBQ1g7QUFBSyxTQUFLLEVBQUU7QUFBRThILE1BQUFBLFFBQVEsRUFBRSxVQUFaO0FBQXdCTSxNQUFBQSxLQUFLLEVBQUUsTUFBL0I7QUFBdUNDLE1BQUFBLEdBQUcsRUFBRTtBQUE1QztBQUFaLGtCQUNDO0FBQUssU0FBSyxFQUFFO0FBQ1hDLE1BQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLE1BQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLE1BQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLE1BQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLE1BQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLE1BQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLE1BQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLE1BQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLE1BQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosa0JBVUcsaURBQUMsMERBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxJQVZILENBREQsQ0FEVyxnQkFjWDtBQUFLLFNBQUssRUFBRTtBQUFFRCxNQUFBQSxRQUFRLEVBQUUsVUFBWjtBQUF3Qk0sTUFBQUEsS0FBSyxFQUFFLE1BQS9CO0FBQXVDQyxNQUFBQSxHQUFHLEVBQUU7QUFBNUM7QUFBWixrQkFDQztBQUFLLFNBQUssRUFBRTtBQUNYQyxNQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYZCxNQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYRSxNQUFBQSxLQUFLLEVBQUUsTUFISTtBQUlYTSxNQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixNQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxNQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixNQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxNQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixNQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLGtCQVVHLGlEQUFDLDBEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsSUFWSCxDQURELENBbkJGLENBRkQsQ0FSRCxlQTRDQztBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxTQUFLLEVBQUU7QUFBRVMsTUFBQUEsVUFBVSxFQUFFLE9BQWQ7QUFBdUJDLE1BQUFBLFdBQVcsRUFBRSxPQUFwQztBQUE2Q2pCLE1BQUFBLE9BQU8sRUFBRSxNQUF0RDtBQUE4RGUsTUFBQUEsYUFBYSxFQUFFLEtBQTdFO0FBQW9GRyxNQUFBQSxRQUFRLEVBQUU7QUFBOUY7QUFBdkMsS0FFRSwwRkFBQTVJLFVBQVUsTUFBVixDQUFBQSxVQUFVLEVBQUssVUFBQzZJLFFBQUQ7QUFBQSxXQUNiLCtGQUFBdkksZ0JBQWdCLE1BQWhCLENBQUFBLGdCQUFnQixFQUFTdUksUUFBUSxDQUFDbkUsRUFBbEIsQ0FBaEIsS0FBMEMsQ0FBQyxDQUE1QyxnQkFDRTtBQUFLLFdBQUssRUFBRTtBQUFFa0QsUUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFFBQUFBLE9BQU8sRUFBRSxRQUF6QjtBQUFtQ0YsUUFBQUEsWUFBWSxFQUFFO0FBQWpELE9BQVo7QUFBdUUsU0FBRyxFQUFFa0IsUUFBUSxDQUFDbkUsRUFBckY7QUFBeUYsYUFBTyxFQUFFO0FBQUEsZUFBTTZDLGdCQUFnQixDQUFDc0IsUUFBUSxDQUFDbkUsRUFBVixDQUF0QjtBQUFBO0FBQWxHLG9CQUNBO0FBQUssV0FBSyxFQUFFO0FBQUV1RCxRQUFBQSxVQUFVLEVBQUUsT0FBZDtBQUF1QkosUUFBQUEsT0FBTyxFQUFFLFVBQWhDO0FBQTRDaUIsUUFBQUEsTUFBTSxFQUFFLHVCQUFwRDtBQUE2RVgsUUFBQUEsWUFBWSxFQUFFLEtBQTNGO0FBQWtHSixRQUFBQSxVQUFVLEVBQUU7QUFBOUc7QUFBWixvQkFDQztBQUFJLFdBQUssRUFBRTtBQUFFSixRQUFBQSxZQUFZLEVBQUUsTUFBaEI7QUFBd0JVLFFBQUFBLEtBQUssRUFBRSxTQUEvQjtBQUEwQ1UsUUFBQUEsU0FBUyxFQUFFO0FBQXJEO0FBQVgsT0FBNkVGLFFBQVEsQ0FBQ0csS0FBdEYsQ0FERCxlQUVDO0FBQUssU0FBRyxFQUFFSCxRQUFRLENBQUNJLEtBQW5CO0FBQTBCLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxXQUFXLEVBQUUsR0FBZjtBQUFvQmYsUUFBQUEsWUFBWSxFQUFFO0FBQWxDO0FBQWpDLE1BRkQsZUFHQztBQUFJLFdBQUssRUFBRTtBQUFFRSxRQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQlUsUUFBQUEsU0FBUyxFQUFFLFFBQS9CO0FBQXlDUCxRQUFBQSxTQUFTLEVBQUUsTUFBcEQ7QUFBNERXLFFBQUFBLFVBQVUsRUFBRTtBQUF4RTtBQUFYLE9BQThGTixRQUFRLENBQUNPLE1BQVQsR0FBa0JQLFFBQVEsQ0FBQzVHLEtBQXpILFNBSEQsZUFJQztBQUFJLFdBQUssRUFBRTtBQUFFb0csUUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JVLFFBQUFBLFNBQVMsRUFBRSxRQUEvQjtBQUF5Q0ksUUFBQUEsVUFBVSxFQUFFO0FBQXJEO0FBQVgsWUFBNEVOLFFBQVEsQ0FBQ08sTUFBckYsYUFKRCxlQUtDO0FBQUssV0FBSyxFQUFFO0FBQUUxQixRQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkksUUFBQUEsY0FBYyxFQUFFO0FBQW5DO0FBQVosb0JBQ0M7QUFBSyxXQUFLLEVBQUU7QUFDWFUsUUFBQUEsU0FBUyxFQUFFLE1BREE7QUFFWGQsUUFBQUEsT0FBTyxFQUFFLE1BRkU7QUFHWEUsUUFBQUEsS0FBSyxFQUFFLE1BSEk7QUFJWE0sUUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEosUUFBQUEsY0FBYyxFQUFFLFFBTEw7QUFNWFcsUUFBQUEsYUFBYSxFQUFFLFFBTko7QUFPWFYsUUFBQUEsVUFBVSxFQUFFLFFBUEQ7QUFRWEksUUFBQUEsWUFBWSxFQUFFLE1BUkg7QUFTWEYsUUFBQUEsVUFBVSxFQUFFO0FBVEQ7QUFBWixvQkFXRyxpREFBQywwREFBRDtBQUFNLFVBQUksRUFBQztBQUFYLE1BWEgsQ0FERCxDQUxELENBREEsQ0FERixnQkF3QkU7QUFBSyxXQUFLLEVBQUU7QUFBRUwsUUFBQUEsS0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFFBQUFBLE9BQU8sRUFBRSxRQUF6QjtBQUFtQ0YsUUFBQUEsWUFBWSxFQUFFO0FBQWpELE9BQVo7QUFBdUUsU0FBRyxFQUFFa0IsUUFBUSxDQUFDbkUsRUFBckY7QUFBeUYsYUFBTyxFQUFFO0FBQUEsZUFBTTBDLGNBQWMsQ0FBQ3lCLFFBQVEsQ0FBQ25FLEVBQVYsQ0FBcEI7QUFBQTtBQUFsRyxvQkFDQTtBQUFLLFdBQUssRUFBRTtBQUFFdUQsUUFBQUEsVUFBVSxFQUFFLE9BQWQ7QUFBdUJKLFFBQUFBLE9BQU8sRUFBRSxVQUFoQztBQUE0Q2lCLFFBQUFBLE1BQU0sRUFBRSx1QkFBcEQ7QUFBNkVYLFFBQUFBLFlBQVksRUFBRSxLQUEzRjtBQUFrR0osUUFBQUEsVUFBVSxFQUFFO0FBQTlHO0FBQVosb0JBQ0M7QUFBSSxXQUFLLEVBQUU7QUFBRUosUUFBQUEsWUFBWSxFQUFFLE1BQWhCO0FBQXdCVSxRQUFBQSxLQUFLLEVBQUUsU0FBL0I7QUFBMENVLFFBQUFBLFNBQVMsRUFBRTtBQUFyRDtBQUFYLE9BQTZFRixRQUFRLENBQUNHLEtBQXRGLENBREQsZUFFQztBQUFLLFNBQUcsRUFBRUgsUUFBUSxDQUFDSSxLQUFuQjtBQUEwQixXQUFLLEVBQUU7QUFBRUMsUUFBQUEsV0FBVyxFQUFFLEdBQWY7QUFBb0JmLFFBQUFBLFlBQVksRUFBRTtBQUFsQztBQUFqQyxNQUZELGVBR0M7QUFBSSxXQUFLLEVBQUU7QUFBRUUsUUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JVLFFBQUFBLFNBQVMsRUFBRSxRQUEvQjtBQUF5Q1AsUUFBQUEsU0FBUyxFQUFFLE1BQXBEO0FBQTREVyxRQUFBQSxVQUFVLEVBQUU7QUFBeEU7QUFBWCxPQUE4Rk4sUUFBUSxDQUFDTyxNQUFULEdBQWtCUCxRQUFRLENBQUM1RyxLQUF6SCxTQUhELGVBSUM7QUFBSSxXQUFLLEVBQUU7QUFBRW9HLFFBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CVSxRQUFBQSxTQUFTLEVBQUUsUUFBL0I7QUFBeUNJLFFBQUFBLFVBQVUsRUFBRTtBQUFyRDtBQUFYLFlBQTRFTixRQUFRLENBQUNPLE1BQXJGLGFBSkQsZUFPQztBQUFLLFdBQUssRUFBRTtBQUFFMUIsUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJJLFFBQUFBLGNBQWMsRUFBRTtBQUFuQztBQUFaLG9CQUNDO0FBQUssV0FBSyxFQUFFO0FBQ1hVLFFBQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLFFBQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLFFBQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLFFBQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLFFBQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLFFBQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLFFBQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLFFBQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLFFBQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosb0JBVUcsaURBQUMsMERBQUQ7QUFBTSxVQUFJLEVBQUM7QUFBWCxNQVZILENBREQsQ0FQRCxDQURBLENBekJZO0FBQUEsR0FBTCxDQUZaLGVBb0RDO0FBQUssU0FBSyxFQUFFO0FBQUVMLE1BQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCQyxNQUFBQSxPQUFPLEVBQUUsUUFBekI7QUFBbUNILE1BQUFBLE9BQU8sRUFBRSxNQUE1QztBQUFvRGUsTUFBQUEsYUFBYSxFQUFFO0FBQW5FLEtBQVo7QUFBMkYsV0FBTyxFQUFFO0FBQUEsYUFBTWhCLFdBQVcsRUFBakI7QUFBQTtBQUFwRyxLQUVHekgsVUFBVSxDQUFDZ0IsTUFBWCxHQUFvQixDQUFyQixnQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFFaUgsTUFBQUEsVUFBVSxFQUFFLE9BQWQ7QUFBdUJKLE1BQUFBLE9BQU8sRUFBRSxNQUFoQztBQUF3Q2lCLE1BQUFBLE1BQU0sRUFBRSx1QkFBaEQ7QUFBeUVYLE1BQUFBLFlBQVksRUFBRSxLQUF2RjtBQUE4RkosTUFBQUEsVUFBVSxFQUFFLFFBQTFHO0FBQW9ISixNQUFBQSxZQUFZLEVBQUU7QUFBbEk7QUFBWixrQkFDQTtBQUFJLFNBQUssRUFBRTtBQUFFQSxNQUFBQSxZQUFZLEVBQUUsTUFBaEI7QUFBd0JVLE1BQUFBLEtBQUssRUFBRSxTQUEvQjtBQUEwQ1UsTUFBQUEsU0FBUyxFQUFFO0FBQXJEO0FBQVgscUJBREEsZUFFQTtBQUFJLFNBQUssRUFBRTtBQUFFVixNQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQlUsTUFBQUEsU0FBUyxFQUFFLFFBQS9CO0FBQXlDUCxNQUFBQSxTQUFTLEVBQUUsTUFBcEQ7QUFBNERXLE1BQUFBLFVBQVUsRUFBRTtBQUF4RTtBQUFYLEtBQ0MzSSxhQURELFNBRkEsRUFNRSwrRkFBQUYsZ0JBQWdCLE1BQWhCLENBQUFBLGdCQUFnQixFQUFTLENBQUMsQ0FBVixDQUFoQixLQUFpQyxDQUFDLENBQW5DLGdCQUNDO0FBQUssU0FBSyxFQUFFO0FBQUVvSCxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkksTUFBQUEsY0FBYyxFQUFFO0FBQW5DO0FBQVosa0JBQ0M7QUFBSyxTQUFLLEVBQUU7QUFDWFUsTUFBQUEsU0FBUyxFQUFFLE1BREE7QUFFWGQsTUFBQUEsT0FBTyxFQUFFLE1BRkU7QUFHWEUsTUFBQUEsS0FBSyxFQUFFLE1BSEk7QUFJWE0sTUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEosTUFBQUEsY0FBYyxFQUFFLFFBTEw7QUFNWFcsTUFBQUEsYUFBYSxFQUFFLFFBTko7QUFPWFYsTUFBQUEsVUFBVSxFQUFFLFFBUEQ7QUFRWEksTUFBQUEsWUFBWSxFQUFFLE1BUkg7QUFTWEYsTUFBQUEsVUFBVSxFQUFFO0FBVEQ7QUFBWixrQkFXRyxpREFBQywwREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLElBWEgsQ0FERCxDQURELGdCQWVDO0FBQUssU0FBSyxFQUFFO0FBQUVQLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CSSxNQUFBQSxjQUFjLEVBQUU7QUFBbkM7QUFBWixrQkFDQztBQUFLLFNBQUssRUFBRTtBQUNYVSxNQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYZCxNQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYRSxNQUFBQSxLQUFLLEVBQUUsTUFISTtBQUlYTSxNQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixNQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxNQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixNQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxNQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixNQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLGtCQVdHLGlEQUFDLDBEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsSUFYSCxDQURELENBckJGLENBREYsR0FzQ1csSUF4Q2IsQ0FwREQsQ0E1Q0QsZUE2SUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVoRjtBQUFuQyxlQURELENBN0lELENBREQsQ0FaRCxDQURELENBREQ7QUF3S0E7Ozs7Ozs7O1VDemVELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlQmlkLCBSZWR1Y2VDYXRlZ29yeSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL3Rva2VuJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vSWNvbidcbmltcG9ydCB7IGdldENhdGVnb3JpZXNieWV2ZW50aWQsIGV2ZW50Z2V0YnlpZCB9IGZyb20gJy4uLy4uLy4uL3BhZ2VzL0V2ZW50cy9ldmVudCdcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRUb0FkZHJlc3MsXG5cdHRva2VuSWQsXG5cdHJlY2lkLFxuXHRSZWFsRXZlbnRJZCxcblx0SGlnaGVzdGJpZCxcblx0d2FsbGV0VHlwZSxcblx0Y29udHJhY3QsXG5cdGNvbnRyYWN0Q2Vsbyxcblx0c2VuZGVyQWRkcmVzcyxcblx0ZXZlbnRJZCxcbn0pIHtcblx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXHRjb25zdCBbQWxlcnQsIHNldEFsZXJ0XSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW0Ftb3VudCwgQW1vdW50SW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdBbW91bnQnLFxuXHR9KTtcblx0Y29uc3QgW0V2ZW50R29hbCwgc2V0RXZlbnRHb2FsXSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG5cblxuXHRjb25zdCBbYWxsU2VsZWN0ZWQsIHNldEFsbFNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW290aGVyU2VsZWN0ZWQsIHNldE90aGVyU2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShbXSk7XG5cblx0Y29uc3QgW290aGVyQ2F0ZWdvcnksIHNldE90aGVyQ2F0ZWdvcnldID0gdXNlU3RhdGUoLTEpO1xuXG5cdGZ1bmN0aW9uIGFjdGl2YXRlV2FybmluZ01vZGFsKCkge1xuXHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIik7XG5cdFx0YWxlcnRFTE0uc3R5bGUgPSAnY29udGVudHMnO1xuXHRcdHNldEFsZXJ0KGBBbW91bnQgY2Fubm90IGJlIHVuZGVyICR7SGlnaGVzdGJpZH0gTkVBUmApXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gZmV0Y2hDYXRlZ29yaWVzKCkge1xuXHRcdGlmIChjYXRlZ29yaWVzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHR2YXIgbmVhclByaWNlID0gMDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBuZWFyQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1uZWFyLXByb3RvY29sJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcblx0XHRcdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblx0XHRcdFx0XHQudGhlbihqc29uID0+IG5lYXJQcmljZSA9IGpzb24pXG5cdFx0XHRcdFx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG5cdFx0XHRcdG5lYXJQcmljZSA9IG5lYXJQcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuXHRcdFx0fSBjYXRjaCAoZXgpIHtcblx0XHRcdFx0dmFyIG5lYXJQcmljZSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChFdmVudEdvYWwgPT0gMCkge1xuXHRcdFx0XHRhd2FpdCBiYXNlKCdldmVudHMnKS5maW5kKGV2ZW50SWQsIGZ1bmN0aW9uIChlcnIsIHJlY29yZCkge1xuXHRcdFx0XHRcdHNldEV2ZW50R29hbChOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoUmVhbEV2ZW50SWQgIT0gMCkge1xuXHRcdFx0XHR0cnkge1xuXG5cdFx0XHRcdFx0YmFzZSgnZXZlbnRjYXRlZ29yaWVzJykuc2VsZWN0KHtcblx0XHRcdFx0XHRcdGZpbHRlckJ5Rm9ybXVsYTogYCh7ZXZlbnRpZH0gPSAke1JlYWxFdmVudElkfSlgLFxuXHRcdFx0XHRcdFx0dmlldzogXCJHcmlkIHZpZXdcIlxuXHRcdFx0XHRcdH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuXHRcdFx0XHRcdFx0dmFyIHN1bW9mbWFpbiA9IDA7XG5cdFx0XHRcdFx0XHRyZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuXHRcdFx0XHRcdFx0XHRjYXRlZ29yaWVzLnB1c2gocmVjb3JkLmZpZWxkcyk7XG5cdFx0XHRcdFx0XHRcdHN1bW9mbWFpbiArPSBOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSkgKiBOdW1iZXIocmVjb3JkLmdldChcImFtb3VudFwiKSkpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRzZXRPdGhlckNhdGVnb3J5KHBhcnNlSW50KEV2ZW50R29hbCAqIG5lYXJQcmljZSkgLSBzdW1vZm1haW4pO1xuXG5cdFx0XHRcdFx0XHQvLyBzZXRDYXRlZ29yaWVzKHJlY29yZHNbMF0uZmllbGRzKTtcblx0XHRcdFx0XHR9LCBmdW5jdGlvbiBkb25lKGVycikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikgeyB9XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2hDYXRlZ29yaWVzKCk7XG5cdH0sIFtjYXRlZ29yaWVzXSk7XG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVCgpIHtcblx0XHRpZiAoTnVtYmVyKEFtb3VudCkgPCBOdW1iZXIoSGlnaGVzdGJpZCkpIHtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICh3YWxsZXRUeXBlID09IFwiQ0VMT1wiKSB7XG5cdFx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKGJpZE5GVGJ5Q0VMTywge1xuXHRcdFx0XHRwZW5kaW5nOiBgQmlkZGluZy4uLmAsXG5cdFx0XHRcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHRcdFx0c3VjY2VzczogYFN1Y2Nlc3MhISFgXG5cdFx0XHR9KTtcblxuXHRcdH0gZWxzZSBpZiAod2FsbGV0VHlwZSA9PSBcIk5FQVJcIikge1xuXHRcdFx0YXdhaXQgdG9hc3QucHJvbWlzZShiaWRORlRieU5FQVIsIHtcblx0XHRcdFx0cGVuZGluZzogYEJpZGRpbmcuLi5gLFxuXHRcdFx0XHRlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG5cdFx0XHRcdHN1Y2Nlc3M6IGBTdWNjZXNzISEhYFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdPbkFpclRhYmxlLCB7XG5cdFx0XHRwZW5kaW5nOiBgVXBkYXRpbmcgb24gQWlydGFibGUuLi5gLFxuXHRcdFx0ZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuXHRcdFx0c3VjY2VzczogYFVwZGF0ZWQgb24gQWlydGFibGVgXG5cdFx0fSk7XG5cblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBDcmVhdGluZ09uQWlyVGFibGUoKSB7XG5cdFx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0XHR2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXHRcdGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0YXdhaXQgYmFzZSgndG9rZW5iaWQnKS5jcmVhdGUoW1xuXHRcdFx0e1xuXHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XCJUb2tlbmlkXCI6IHRva2VuSWQsXG5cdFx0XHRcdFx0XCJEYXRlXCI6IGN1cnJlbnREYXRlLFxuXHRcdFx0XHRcdFwiVXNlck5hbWVcIjogd2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKS50b1N0cmluZygpLFxuXHRcdFx0XHRcdFwiQmlkcHJpY2VcIjogQW1vdW50XG5cdFx0XHRcdH1cblx0XHRcdH1dKTtcblx0XHR0b2FzdC5zdWNjZXNzKFwiQmlkIGNyZWF0ZWQgb24gQWlydGFibGVcIik7XG5cdFx0YXdhaXQgVXBkYXRlQWlydGFibGUoKTtcblxuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUFpcnRhYmxlKCkge1xuXHRcdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdFx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXHRcdGF3YWl0IGJhc2UoJ25mdHMnKS51cGRhdGUoW1xuXHRcdFx0e1xuXHRcdFx0XHRcImlkXCI6IHJlY2lkLFxuXHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XCJwcmljZVwiOiBBbW91bnRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0pO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdGF3YWl0IGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLnNlbGVjdCh7XG5cdFx0XHRcdGZpbHRlckJ5Rm9ybXVsYTogYCh7aWR9ID0gJyR7c2VsZWN0ZWRDYXRlZ29yeVtpXX0nKWAsXG5cdFx0XHRcdHNvcnQ6IFt7IGZpZWxkOiBcInByaWNlXCIsIGRpcmVjdGlvbjogXCJkZXNjXCIgfV0sXG5cdFx0XHRcdHZpZXc6IFwiR3JpZCB2aWV3XCJcblx0XHRcdH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuXHRcdFx0XHQvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG5cblx0XHRcdFx0YXdhaXQgcmVjb3Jkcy5mb3JFYWNoKGFzeW5jIGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0XHRcdFx0XHR2YXIgZXZlbnRjYXRlZ29yeUlEID0gcmVjb3JkLmlkO1xuXHRcdFx0XHRcdGNvbnN0IHBlcnBlaWNlID0gcGFyc2VJbnQoTnVtYmVyKHJlY29yZC5nZXQoJ3ByaWNlJykpIC8gTnVtYmVyKHJlY29yZC5nZXQoJ2Ftb3VudCcpKSk7XG5cdFx0XHRcdFx0dmFyIHVwZGF0ZWRwcmljZSA9IE51bWJlcihyZWNvcmQuZ2V0KFwicHJpY2VcIikpIC0gcGVycGVpY2U7XG5cdFx0XHRcdFx0dmFyIFVwZGF0ZWRhbW91bnQgPSBOdW1iZXIocmVjb3JkLmdldCgnYW1vdW50JykpIC0gMTtcblx0XHRcdFx0XHRhd2FpdCBiYXNlKCdldmVudGNhdGVnb3JpZXMnKS51cGRhdGUoW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IGV2ZW50Y2F0ZWdvcnlJRCxcblx0XHRcdFx0XHRcdFx0XCJmaWVsZHNcIjoge1xuXHRcdFx0XHRcdFx0XHRcdFwicHJpY2VcIjogdXBkYXRlZHByaWNlLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XHRcdFx0XCJhbW91bnRcIjogVXBkYXRlZGFtb3VudC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZWNvcmQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG5cdFx0XHRcdGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cblx0XHRcdH0pO1xuXHRcdFx0Ly9cdGF3YWl0IFJlZHVjZUNhdGVnb3J5KHNlbGVjdGVkQ2F0ZWdvcnlbaV0pO1xuXHRcdH1cblxuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUYnlORUFSKCkge1xuXG5cdFx0dmFyIGJ1dHRvblByb3BzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0biBidG4tcHJpbWFyeVwiKVswXTtcblx0XHRpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XG5cdFx0XHRidXR0b25Qcm9wcy5pbm5lclRleHQgPSBcIkNvbm5lY3QgdG8gTkVBUiB3YWxsZXRcIlxuXHRcdFx0YXdhaXQgdG9hc3Qud2FybihcIk5vdCBjb25uZWN0ZWQgd2l0aCBORUFSIHdhbGxldCEgQ29ubmVjdGluZy4uLlwiKTtcblx0XHRcdGF3YWl0IHdpbmRvdy53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oXG5cdFx0XHRcdHdpbmRvdy5uZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSxcblx0XHRcdFx0J0RlbWV0ZXInKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gV2UgY2FsbCBzYXkgSGkgYW5kIHRoZW4gdXBkYXRlIHdobyBzYWlkIEhpIGxhc3QuXG5cdFx0Ly8gd2luZG93LmNvbnRyYWN0LnNheUhpKCkudGhlbih1cGRhdGVXaG9TYWlkSGkpO1xuXHRcdGNvbnN0IGNvbmZpZyA9IHtcblx0XHRcdG5ldHdvcmtJZDogXCJ0ZXN0bmV0XCIsXG5cdFx0XHRrZXlTdG9yZTogbmV3IG5lYXJBUEkua2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpLFxuXHRcdFx0bm9kZVVybDogXCJodHRwczovL3JwYy50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0XHR3YWxsZXRVcmw6IFwiaHR0cHM6Ly93YWxsZXQudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdFx0aGVscGVyVXJsOiBcImh0dHBzOi8vaGVscGVyLnRlc3RuZXQubmVhci5vcmdcIixcblx0XHRcdGV4cGxvcmVyVXJsOiBcImh0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdH07XG5cdFx0Ly8gc2VuZHMgTkVBUiB0b2tlbnNcblx0XHRjb25zdCBuZWFyID0gYXdhaXQgbmVhckFQSS5jb25uZWN0KGNvbmZpZyk7XG5cdFx0Y29uc3QgYWNjb3VudCA9IGF3YWl0IG5lYXIuYWNjb3VudCh3YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpKTtcblx0XHRjb25zdCBhbW91bnRJbllvY3RvID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cblx0XHRhd2FpdCBhY2NvdW50LnNlbmRNb25leShcblx0XHRcdFRvQWRkcmVzcywgLy8gcmVjZWl2ZXIgYWNjb3VudFxuXHRcdFx0YW1vdW50SW5Zb2N0byAvLyBhbW91bnQgaW4geW9jdG9ORUFSXG5cdFx0KS5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvcjpcIiwgZXJyb3IpO1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0pXG5cdH1cblxuXG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVGJ5Q0VMTygpIHtcblx0XHR2YXIgYnV0dG9uUHJvcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuIGJ0bi1wcmltYXJ5XCIpWzBdO1xuXHRcdGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzICE9IG51bGwgJiYgd2luZG93LmV0aGVyZXVtLm5ldHdvcmtWZXJzaW9uID09IDQ0Nzg3ICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIpICE9IFwiXCIpIHtcblx0XHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHRcdFwiVG9rZW5pZFwiOiB0b2tlbklkLFxuXHRcdFx0XHRcIkJpZHByaWNlXCI6IEFtb3VudFxuXHRcdFx0fVxuXHRcblx0XHRcdGxldCBDRUxPaW5GdWxsID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cdFxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RDZWxvLmNyZWF0ZUJpZCh0b2tlbklkLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KSwge1xuXHRcdFx0XHRmcm9tOiBzZW5kZXJBZGRyZXNzLFxuXHRcdFx0XHRnYXNQcmljZTogMTAwMDAwMDAwMDAwMCwgdmFsdWU6IENFTE9pbkZ1bGxcblx0XHRcdH0pO1xuXHRcdFx0dHJ5e1xuY29uc29sZS5sb2cocmVzdWx0KTtcdFx0XG5cdFx0XHR9Y2F0Y2ggKGUpe1xuXHRcdFx0XHR0b2FzdC5lcnJvcihcIkluc3VmZmljaWVudCBmdW5kc1wiKVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fWVsc2V7XG5cdFx0XHRidXR0b25Qcm9wcy5pbm5lclRleHQgPSBcIkNvbm5lY3QgdG8gQ0VMTyB3YWxsZXRcIlxuXHRcdFx0YXdhaXQgdG9hc3Qud2FybihcIk5vdCBjb25uZWN0ZWQgd2l0aCBDRUxPIHdhbGxldCEgQ29ubmVjdGluZy4uLlwiKTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9sb2dpblsvZG9uYXRpb25dYDtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBjb25uZWN0ZWQgd2l0aCBDRUxPIHdhbGxldCFcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcblx0fVxuXG5cblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeV9pZCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiY2F0ZWdvcnlfaWRcIik7XG5cdFx0Y29uc29sZS5sb2coY2F0ZWdvcnlfaWQpO1xuXHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGVtcF9hcnIucHVzaChzZWxlY3RlZENhdGVnb3J5W2ldKTtcblx0XHR9XG5cdFx0dGVtcF9hcnIucHVzaChjYXRlZ29yeV9pZCk7XG5cdFx0Y29uc29sZS5sb2codGVtcF9hcnIpO1xuXG5cdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdH1cblx0Y29uc3QgdW5zZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeV9pZCkgPT4ge1xuXHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHNlbGVjdGVkQ2F0ZWdvcnlbaV0gIT0gY2F0ZWdvcnlfaWQpXG5cdFx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHRlbXBfYXJyKTtcblx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0fVxuXG5cdGNvbnN0IHNlbGVjdEFsbENhdGVnb3J5ID0gKCkgPT4ge1xuXHRcdGlmIChhbGxTZWxlY3RlZCkge1xuXHRcdFx0c2V0QWxsU2VsZWN0ZWQoZmFsc2UpO1xuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeShbXSk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0c2V0QWxsU2VsZWN0ZWQodHJ1ZSk7XG5cdFx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0ZW1wX2Fyci5wdXNoKGNhdGVnb3JpZXNbaV0uaWQpXG5cdFx0XHR9XG5cdFx0XHR0ZW1wX2Fyci5wdXNoKC0xKTtcblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHRcdH1cblxuXHR9XG5cdGNvbnN0IG90aGVyU2VsZWN0ID0gKCkgPT4ge1xuXHRcdGlmIChvdGhlclNlbGVjdGVkKSB7XG5cdFx0XHRzZXRPdGhlclNlbGVjdGVkKGZhbHNlKTtcblx0XHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChzZWxlY3RlZENhdGVnb3J5W2ldICE9IC0xKVxuXHRcdFx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSlcblx0XHRcdH1cblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRPdGhlclNlbGVjdGVkKHRydWUpO1xuXHRcdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGVtcF9hcnIucHVzaChzZWxlY3RlZENhdGVnb3J5W2ldKVxuXHRcdFx0fVxuXHRcdFx0dGVtcF9hcnIucHVzaCgtMSk7XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0XHRvblNob3c9e2ZldGNoQ2F0ZWdvcmllc31cblx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0XHRjZW50ZXJlZFxuXHRcdFx0PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdFx0PGRpdiBpZD0nYWxlcnQnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cblx0XHRcdFx0XHRcdFx0e0FsZXJ0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5CaWQgQW1vdW50IGluIHt3YWxsZXRUeXBlfTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlbGVjdENhdGVnb3J5QWxsJz5cblx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q2hvb3NlIHdoZXJlIHlvdSB3YW50IHRvIGdpdmUgc3VwcG9ydDwvaDQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiBcIjVweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGJhY2tncm91bmQ6IFwiYmlzcXVlXCIsIGhlaWdodDogXCI0MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBvbkNsaWNrPXsoKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RBbGxDYXRlZ29yeSgpO1xuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgYWxpZ25TZWxmOiBcImNlbnRlclwiLCBjb2xvcjogXCJibGFja1wiIH19PlN1cHBvcnQgaW4gZ2VuZXJhbCA8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdHthbGxTZWxlY3RlZCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjEwcHhcIiwgdG9wOiBcIi03cHhcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiA6XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjEwcHhcIiwgdG9wOiBcIi03cHhcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFVuc2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlbGVjdENhdGVnb3J5JyBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsIG1hcmdpblJpZ2h0OiBcIi0xMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdChzZWxlY3RlZENhdGVnb3J5LmluZGV4T2YoY2F0ZWdvcnkuaWQpICE9PSAtMSkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQoPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2NhdGVnb3J5LmlkfSBvbkNsaWNrPXsoKSA9PiB1bnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5LmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiOHB4IDE1cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntjYXRlZ29yeS50aXRsZX08L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2NhdGVnb3J5LmltYWdlfSBzdHlsZT17eyBhc3BlY3RSYXRpbzogJzEnLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e2NhdGVnb3J5LmFtb3VudCAqIGNhdGVnb3J5LnByaWNlfSBVU0Q8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT4oe2NhdGVnb3J5LmFtb3VudH0gcGllY2VzKTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ICA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0U2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Pilcblx0XHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2NhdGVnb3J5LmlkfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RDYXRlZ29yeShjYXRlZ29yeS5pZCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57Y2F0ZWdvcnkudGl0bGV9PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtjYXRlZ29yeS5pbWFnZX0gc3R5bGU9e3sgYXNwZWN0UmF0aW86ICcxJywgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntjYXRlZ29yeS5hbW91bnQgKiBjYXRlZ29yeS5wcmljZX0gVVNEPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtjYXRlZ29yeS5hbW91bnR9IHBpZWNlcyk8L2g1PlxuXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pXG5cdFx0XHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fSBvbkNsaWNrPXsoKSA9PiBvdGhlclNlbGVjdCgpfT5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQoY2F0ZWdvcmllcy5sZW5ndGggPiAwKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCg8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IFwiMTVweFwiIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5PdGhlciBzdXBwb3J0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG90aGVyQ2F0ZWdvcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IFVTRDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHNlbGVjdGVkQ2F0ZWdvcnkuaW5kZXhPZigtMSkgIT09IC0xKSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFVuc2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PikgOiBudWxsXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHRcdDwvTW9kYWw+XG5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI4YmZhNDE0MzRiMTI4NGQ4Y2U5NFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsInRvYXN0IiwidXNlQ29udHJhY3QiLCJVc2VGb3JtSW5wdXQiLCJjcmVhdGVCaWQiLCJSZWR1Y2VDYXRlZ29yeSIsIkljb24iLCJnZXRDYXRlZ29yaWVzYnlldmVudGlkIiwiZXZlbnRnZXRieWlkIiwibmVhckFQSSIsIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsIlRvQWRkcmVzcyIsInRva2VuSWQiLCJyZWNpZCIsIlJlYWxFdmVudElkIiwiSGlnaGVzdGJpZCIsIndhbGxldFR5cGUiLCJjb250cmFjdCIsImNvbnRyYWN0Q2VsbyIsInNlbmRlckFkZHJlc3MiLCJldmVudElkIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsIkFsZXJ0Iiwic2V0QWxlcnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJBbW91bnQiLCJBbW91bnRJbnB1dCIsIkV2ZW50R29hbCIsInNldEV2ZW50R29hbCIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiYWxsU2VsZWN0ZWQiLCJzZXRBbGxTZWxlY3RlZCIsIm90aGVyU2VsZWN0ZWQiLCJzZXRPdGhlclNlbGVjdGVkIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJvdGhlckNhdGVnb3J5Iiwic2V0T3RoZXJDYXRlZ29yeSIsImFjdGl2YXRlV2FybmluZ01vZGFsIiwiYWxlcnRFTE0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJmZXRjaENhdGVnb3JpZXMiLCJsZW5ndGgiLCJuZWFyUHJpY2UiLCJuZWFyQ3VycmVuY3lVcmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImRhdGEiLCJtYXJrZXRQYWlycyIsInByaWNlIiwicmVjb3JkIiwiTnVtYmVyIiwiZ2V0Iiwic2VsZWN0IiwiZmlsdGVyQnlGb3JtdWxhIiwidmlldyIsImVhY2hQYWdlIiwicGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwic3Vtb2ZtYWluIiwiZm9yRWFjaCIsInB1c2giLCJmaWVsZHMiLCJkb25lIiwiYmlkTkZUIiwicHJvbWlzZSIsImJpZE5GVGJ5Q0VMTyIsInBlbmRpbmciLCJzdWNjZXNzIiwiYmlkTkZUYnlORUFSIiwiQ3JlYXRpbmdPbkFpclRhYmxlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGUiLCJ3YWxsZXRBY2NvdW50IiwiZ2V0QWNjb3VudElkIiwidG9TdHJpbmciLCJVcGRhdGVBaXJ0YWJsZSIsInVwZGF0ZSIsImkiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJldmVudGNhdGVnb3J5SUQiLCJpZCIsInBlcnBlaWNlIiwidXBkYXRlZHByaWNlIiwiVXBkYXRlZGFtb3VudCIsImxvZyIsImJ1dHRvblByb3BzIiwiaXNTaWduZWRJbiIsImlubmVyVGV4dCIsIndhcm4iLCJyZXF1ZXN0U2lnbkluIiwibmVhckNvbmZpZyIsImNvbnRyYWN0TmFtZSIsImNvbmZpZyIsIm5ldHdvcmtJZCIsImtleVN0b3JlIiwia2V5U3RvcmVzIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibm9kZVVybCIsIndhbGxldFVybCIsImhlbHBlclVybCIsImV4cGxvcmVyVXJsIiwiY29ubmVjdCIsIm5lYXIiLCJhY2NvdW50IiwiYW1vdW50SW5Zb2N0byIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJzZW5kTW9uZXkiLCJldGhlcmV1bSIsInNlbGVjdGVkQWRkcmVzcyIsIm5ldHdvcmtWZXJzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNyZWF0ZWRPYmplY3QiLCJDRUxPaW5GdWxsIiwiZnJvbSIsImdhc1ByaWNlIiwidmFsdWUiLCJyZXN1bHQiLCJlIiwiaHJlZiIsIkVycm9yIiwic2VsZWN0Q2F0ZWdvcnkiLCJjYXRlZ29yeV9pZCIsInRlbXBfYXJyIiwidW5zZWxlY3RDYXRlZ29yeSIsInNlbGVjdEFsbENhdGVnb3J5Iiwib3RoZXJTZWxlY3QiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25TZWxmIiwiY29sb3IiLCJyaWdodCIsInRvcCIsIm1hcmdpblRvcCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJmbGV4V3JhcCIsImNhdGVnb3J5IiwiYm9yZGVyIiwidGV4dEFsaWduIiwidGl0bGUiLCJpbWFnZSIsImFzcGVjdFJhdGlvIiwibGluZUhlaWdodCIsImFtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=