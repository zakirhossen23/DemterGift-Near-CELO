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
                _context9.next = 9;
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
                gasPrice: 100000000000,
                value: CELOinFull
              });

            case 6:
              result = _context9.sent;
              _context9.next = 15;
              break;

            case 9:
              buttonProps.innerText = "Connect to CELO wallet";
              _context9.next = 12;
              return react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.warn("Not connected with CELO wallet! Connecting...");

            case 12:
              window.location.href = "/login[/donation]";
              throw new Error("Not connected with CELO wallet!");

            case 15:
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
/******/ 	__webpack_require__.h = function() { return "11a5078d17ef25b5e6ca"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmU5MTgwNTcwYjFjYTEzOTE4OTAyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2dCLFdBQVQsT0FhWjtBQUFBLE1BWkZDLElBWUUsUUFaRkEsSUFZRTtBQUFBLE1BWEZDLE1BV0UsUUFYRkEsTUFXRTtBQUFBLE1BVkZDLFNBVUUsUUFWRkEsU0FVRTtBQUFBLE1BVEZDLE9BU0UsUUFURkEsT0FTRTtBQUFBLE1BUkZDLEtBUUUsUUFSRkEsS0FRRTtBQUFBLE1BUEZDLFdBT0UsUUFQRkEsV0FPRTtBQUFBLE1BTkZDLFVBTUUsUUFORkEsVUFNRTtBQUFBLE1BTEZDLFVBS0UsUUFMRkEsVUFLRTtBQUFBLE1BSkZDLFFBSUUsUUFKRkEsUUFJRTtBQUFBLE1BSEZDLFlBR0UsUUFIRkEsWUFHRTtBQUFBLE1BRkZDLGFBRUUsUUFGRkEsYUFFRTtBQUFBLE1BREZDLE9BQ0UsUUFERkEsT0FDRTs7QUFDRixNQUFJQyxRQUFRLEdBQUdDLG1CQUFPLENBQUMseURBQUQsQ0FBdEI7O0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQUlGLFFBQUosQ0FBYTtBQUFFRyxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUFiLEVBQThDRCxJQUE5QyxDQUFtRCxtQkFBbkQsQ0FBWDs7QUFFQSxrQkFBMEI5QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQTtBQUFBLE1BQU9nQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxzQkFBOEJ6QiwwREFBWSxDQUFDO0FBQzFDMEIsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDQyxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBSUEsbUJBQWtDckMsK0NBQVEs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UUFMTDtBQU1YVyxNQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixNQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxNQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixNQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLGtCQVdHLGlEQUFDLDBEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsSUFYSCxDQURELENBREQsZ0JBZUM7QUFBSyxTQUFLLEVBQUU7QUFBRVAsTUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJJLE1BQUFBLGNBQWMsRUFBRTtBQUFuQztBQUFaLGtCQUNDO0FBQUssU0FBSyxFQUFFO0FBQ1hVLE1BQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLE1BQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLE1BQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLE1BQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLE1BQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLE1BQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLE1BQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLE1BQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLE1BQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosa0JBV0csaURBQUMsMERBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxJQVhILENBREQsQ0FyQkYsQ0FERixHQXNDVyxJQXhDYixDQXBERCxDQTVDRCxlQTZJQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLGlEQUFDLCtEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRS9FO0FBQW5DLGVBREQsQ0E3SUQsQ0FERCxDQVpELENBREQsQ0FERDtBQXdLQTs7Ozs7Ozs7VUNwZUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsLmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVCaWQsIFJlZHVjZUNhdGVnb3J5IH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvdG9rZW4nXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9JY29uJ1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllc2J5ZXZlbnRpZCwgZXZlbnRnZXRieWlkIH0gZnJvbSAnLi4vLi4vLi4vcGFnZXMvRXZlbnRzL2V2ZW50J1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlkTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdFRvQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0cmVjaWQsXG5cdFJlYWxFdmVudElkLFxuXHRIaWdoZXN0YmlkLFxuXHR3YWxsZXRUeXBlLFxuXHRjb250cmFjdCxcblx0Y29udHJhY3RDZWxvLFxuXHRzZW5kZXJBZGRyZXNzLFxuXHRldmVudElkLFxufSkge1xuXHR2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuXHR2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cdGNvbnN0IFtBbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXHRjb25zdCBbRXZlbnRHb2FsLCBzZXRFdmVudEdvYWxdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuXG5cdGNvbnN0IFthbGxTZWxlY3RlZCwgc2V0QWxsU2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbb3RoZXJTZWxlY3RlZCwgc2V0T3RoZXJTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKFtdKTtcblxuXHRjb25zdCBbb3RoZXJDYXRlZ29yeSwgc2V0T3RoZXJDYXRlZ29yeV0gPSB1c2VTdGF0ZSgtMSk7XG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoKSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRhbGVydEVMTS5zdHlsZSA9ICdjb250ZW50cyc7XG5cdFx0c2V0QWxlcnQoYEFtb3VudCBjYW5ub3QgYmUgdW5kZXIgJHtIaWdoZXN0YmlkfSBORUFSYClcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBmZXRjaENhdGVnb3JpZXMoKSB7XG5cdFx0aWYgKGNhdGVnb3JpZXMubGVuZ3RoID09IDApIHtcblx0XHRcdHZhciBuZWFyUHJpY2UgPSAwO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuXHRcdFx0XHRsZXQgb3B0aW9ucyA9IHtcblx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0YXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0XHRcdC50aGVuKGpzb24gPT4gbmVhclByaWNlID0ganNvbilcblx0XHRcdFx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcblx0XHRcdFx0bmVhclByaWNlID0gbmVhclByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG5cdFx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0XHR2YXIgbmVhclByaWNlID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKEV2ZW50R29hbCA9PSAwKSB7XG5cdFx0XHRcdGF3YWl0IGJhc2UoJ2V2ZW50cycpLmZpbmQoZXZlbnRJZCwgZnVuY3Rpb24gKGVyciwgcmVjb3JkKSB7XG5cdFx0XHRcdFx0c2V0RXZlbnRHb2FsKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGlmIChSZWFsRXZlbnRJZCAhPSAwKSB7XG5cdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHRiYXNlKCdldmVudGNhdGVnb3JpZXMnKS5zZWxlY3Qoe1xuXHRcdFx0XHRcdFx0ZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICR7UmVhbEV2ZW50SWR9KWAsXG5cdFx0XHRcdFx0XHR2aWV3OiBcIkdyaWQgdmlld1wiXG5cdFx0XHRcdFx0fSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG5cdFx0XHRcdFx0XHR2YXIgc3Vtb2ZtYWluID0gMDtcblx0XHRcdFx0XHRcdHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG5cdFx0XHRcdFx0XHRcdGNhdGVnb3JpZXMucHVzaChyZWNvcmQuZmllbGRzKTtcblx0XHRcdFx0XHRcdFx0c3Vtb2ZtYWluICs9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIE51bWJlcihyZWNvcmQuZ2V0KFwiYW1vdW50XCIpKSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHNldE90aGVyQ2F0ZWdvcnkocGFyc2VJbnQoRXZlbnRHb2FsICogbmVhclByaWNlKSAtIHN1bW9mbWFpbik7XG5cblx0XHRcdFx0XHRcdC8vIHNldENhdGVnb3JpZXMocmVjb3Jkc1swXS5maWVsZHMpO1xuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7IH1cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaENhdGVnb3JpZXMoKTtcblx0fSwgW2NhdGVnb3JpZXNdKTtcblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXHRcdGlmIChOdW1iZXIoQW1vdW50KSA8IE51bWJlcihIaWdoZXN0YmlkKSkge1xuXHRcdFx0YWN0aXZhdGVXYXJuaW5nTW9kYWwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHdhbGxldFR5cGUgPT0gXCJDRUxPXCIpIHtcblx0XHRcdGF3YWl0IHRvYXN0LnByb21pc2UoYmlkTkZUYnlDRUxPLCB7XG5cdFx0XHRcdHBlbmRpbmc6IGBCaWRkaW5nLi4uYCxcblx0XHRcdFx0ZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuXHRcdFx0XHRzdWNjZXNzOiBgU3VjY2VzcyEhIWBcblx0XHRcdH0pO1xuXG5cdFx0fSBlbHNlIGlmICh3YWxsZXRUeXBlID09IFwiTkVBUlwiKSB7XG5cdFx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKGJpZE5GVGJ5TkVBUiwge1xuXHRcdFx0XHRwZW5kaW5nOiBgQmlkZGluZy4uLmAsXG5cdFx0XHRcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHRcdFx0c3VjY2VzczogYFN1Y2Nlc3MhISFgXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0YXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ09uQWlyVGFibGUsIHtcblx0XHRcdHBlbmRpbmc6IGBVcGRhdGluZyBvbiBBaXJ0YWJsZS4uLmAsXG5cdFx0XHRlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG5cdFx0XHRzdWNjZXNzOiBgVXBkYXRlZCBvbiBBaXJ0YWJsZWBcblx0XHR9KTtcblxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nT25BaXJUYWJsZSgpIHtcblx0XHR2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuXHRcdHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cdFx0bGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblx0XHRhd2FpdCBiYXNlKCd0b2tlbmJpZCcpLmNyZWF0ZShbXG5cdFx0XHR7XG5cdFx0XHRcdFwiZmllbGRzXCI6IHtcblx0XHRcdFx0XHRcIlRva2VuaWRcIjogdG9rZW5JZCxcblx0XHRcdFx0XHRcIkRhdGVcIjogY3VycmVudERhdGUsXG5cdFx0XHRcdFx0XCJVc2VyTmFtZVwiOiB3YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XCJCaWRwcmljZVwiOiBBbW91bnRcblx0XHRcdFx0fVxuXHRcdFx0fV0pO1xuXHRcdHRvYXN0LnN1Y2Nlc3MoXCJCaWQgY3JlYXRlZCBvbiBBaXJ0YWJsZVwiKTtcblx0XHRhd2FpdCBVcGRhdGVBaXJ0YWJsZSgpO1xuXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gVXBkYXRlQWlydGFibGUoKSB7XG5cdFx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0XHR2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cdFx0YXdhaXQgYmFzZSgnbmZ0cycpLnVwZGF0ZShbXG5cdFx0XHR7XG5cdFx0XHRcdFwiaWRcIjogcmVjaWQsXG5cdFx0XHRcdFwiZmllbGRzXCI6IHtcblx0XHRcdFx0XHRcInByaWNlXCI6IEFtb3VudFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XSk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0YXdhaXQgYmFzZSgnZXZlbnRjYXRlZ29yaWVzJykuc2VsZWN0KHtcblx0XHRcdFx0ZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtzZWxlY3RlZENhdGVnb3J5W2ldfScpYCxcblx0XHRcdFx0c29ydDogW3sgZmllbGQ6IFwicHJpY2VcIiwgZGlyZWN0aW9uOiBcImRlc2NcIiB9XSxcblx0XHRcdFx0dmlldzogXCJHcmlkIHZpZXdcIlxuXHRcdFx0fSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG5cdFx0XHRcdC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cblxuXHRcdFx0XHRhd2FpdCByZWNvcmRzLmZvckVhY2goYXN5bmMgZnVuY3Rpb24gKHJlY29yZCkge1xuXHRcdFx0XHRcdHZhciBldmVudGNhdGVnb3J5SUQgPSByZWNvcmQuaWQ7XG5cdFx0XHRcdFx0Y29uc3QgcGVycGVpY2UgPSBwYXJzZUludChOdW1iZXIocmVjb3JkLmdldCgncHJpY2UnKSkgLyBOdW1iZXIocmVjb3JkLmdldCgnYW1vdW50JykpKTtcblx0XHRcdFx0XHR2YXIgdXBkYXRlZHByaWNlID0gTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSkgLSBwZXJwZWljZTtcblx0XHRcdFx0XHR2YXIgVXBkYXRlZGFtb3VudCA9IE51bWJlcihyZWNvcmQuZ2V0KCdhbW91bnQnKSkgLSAxO1xuXHRcdFx0XHRcdGF3YWl0IGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLnVwZGF0ZShbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogZXZlbnRjYXRlZ29yeUlELFxuXHRcdFx0XHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XHRcdFx0XCJwcmljZVwiOiB1cGRhdGVkcHJpY2UudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcdFx0XHRcImFtb3VudFwiOiBVcGRhdGVkYW1vdW50LnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlY29yZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSwgZnVuY3Rpb24gZG9uZShlcnIpIHtcblx0XHRcdFx0aWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuXHRcdFx0fSk7XG5cdFx0XHQvL1x0YXdhaXQgUmVkdWNlQ2F0ZWdvcnkoc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0fVxuXG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlRieU5FQVIoKSB7XG5cblx0XHR2YXIgYnV0dG9uUHJvcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuIGJ0bi1wcmltYXJ5XCIpWzBdO1xuXHRcdGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcblx0XHRcdGJ1dHRvblByb3BzLmlubmVyVGV4dCA9IFwiQ29ubmVjdCB0byBORUFSIHdhbGxldFwiXG5cdFx0XHRhd2FpdCB0b2FzdC53YXJuKFwiTm90IGNvbm5lY3RlZCB3aXRoIE5FQVIgd2FsbGV0ISBDb25uZWN0aW5nLi4uXCIpO1xuXHRcdFx0YXdhaXQgd2luZG93LndhbGxldEFjY291bnQucmVxdWVzdFNpZ25Jbihcblx0XHRcdFx0d2luZG93Lm5lYXJDb25maWcuY29udHJhY3ROYW1lLFxuXHRcdFx0XHQnRGVtZXRlcicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBXZSBjYWxsIHNheSBIaSBhbmQgdGhlbiB1cGRhdGUgd2hvIHNhaWQgSGkgbGFzdC5cblx0XHQvLyB3aW5kb3cuY29udHJhY3Quc2F5SGkoKS50aGVuKHVwZGF0ZVdob1NhaWRIaSk7XG5cdFx0Y29uc3QgY29uZmlnID0ge1xuXHRcdFx0bmV0d29ya0lkOiBcInRlc3RuZXRcIixcblx0XHRcdGtleVN0b3JlOiBuZXcgbmVhckFQSS5rZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCksXG5cdFx0XHRub2RlVXJsOiBcImh0dHBzOi8vcnBjLnRlc3RuZXQubmVhci5vcmdcIixcblx0XHRcdHdhbGxldFVybDogXCJodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0XHRoZWxwZXJVcmw6IFwiaHR0cHM6Ly9oZWxwZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdFx0ZXhwbG9yZXJVcmw6IFwiaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0fTtcblx0XHQvLyBzZW5kcyBORUFSIHRva2Vuc1xuXHRcdGNvbnN0IG5lYXIgPSBhd2FpdCBuZWFyQVBJLmNvbm5lY3QoY29uZmlnKTtcblx0XHRjb25zdCBhY2NvdW50ID0gYXdhaXQgbmVhci5hY2NvdW50KHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkpO1xuXHRcdGNvbnN0IGFtb3VudEluWW9jdG8gPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblxuXHRcdGF3YWl0IGFjY291bnQuc2VuZE1vbmV5KFxuXHRcdFx0VG9BZGRyZXNzLCAvLyByZWNlaXZlciBhY2NvdW50XG5cdFx0XHRhbW91bnRJbllvY3RvIC8vIGFtb3VudCBpbiB5b2N0b05FQVJcblx0XHQpLmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yOlwiLCBlcnJvcik7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSlcblx0fVxuXG5cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUYnlDRUxPKCkge1xuXHRcdHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG5cdFx0aWYgKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCAmJiB3aW5kb3cuZXRoZXJldW0ubmV0d29ya1ZlcnNpb24gPT0gNDQ3ODcgJiYgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIikgIT0gXCJcIikge1xuXHRcdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdFx0XCJUb2tlbmlkXCI6IHRva2VuSWQsXG5cdFx0XHRcdFwiQmlkcHJpY2VcIjogQW1vdW50XG5cdFx0XHR9XG5cdFxuXHRcdFx0bGV0IENFTE9pbkZ1bGwgPSAoTnVtYmVyKEFtb3VudCkgKiAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0xvY2FsZVN0cmluZygnZnVsbHdpZGUnLCB7IHVzZUdyb3VwaW5nOiBmYWxzZSB9KTtcblx0XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdENlbG8uY3JlYXRlQmlkKHRva2VuSWQsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpLCB7XG5cdFx0XHRcdGZyb206IHNlbmRlckFkZHJlc3MsXG5cdFx0XHRcdGdhc1ByaWNlOiAxMDAwMDAwMDAwMDAsIHZhbHVlOiBDRUxPaW5GdWxsXG5cdFx0XHR9KTtcblx0XHRcdFxuXHRcdH1lbHNle1xuXHRcdFx0YnV0dG9uUHJvcHMuaW5uZXJUZXh0ID0gXCJDb25uZWN0IHRvIENFTE8gd2FsbGV0XCJcblx0XHRcdGF3YWl0IHRvYXN0Lndhcm4oXCJOb3QgY29ubmVjdGVkIHdpdGggQ0VMTyB3YWxsZXQhIENvbm5lY3RpbmcuLi5cIik7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvbG9naW5bL2RvbmF0aW9uXWA7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgY29ubmVjdGVkIHdpdGggQ0VMTyB3YWxsZXQhXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XG5cdH1cblxuXG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnlfaWQpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcImNhdGVnb3J5X2lkXCIpO1xuXHRcdGNvbnNvbGUubG9nKGNhdGVnb3J5X2lkKTtcblx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0fVxuXHRcdHRlbXBfYXJyLnB1c2goY2F0ZWdvcnlfaWQpO1xuXHRcdGNvbnNvbGUubG9nKHRlbXBfYXJyKTtcblxuXHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHR9XG5cdGNvbnN0IHVuc2VsZWN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnlfaWQpID0+IHtcblx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChzZWxlY3RlZENhdGVnb3J5W2ldICE9IGNhdGVnb3J5X2lkKVxuXHRcdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh0ZW1wX2Fycik7XG5cdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdH1cblxuXHRjb25zdCBzZWxlY3RBbGxDYXRlZ29yeSA9ICgpID0+IHtcblx0XHRpZiAoYWxsU2VsZWN0ZWQpIHtcblx0XHRcdHNldEFsbFNlbGVjdGVkKGZhbHNlKTtcblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkoW10pO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHNldEFsbFNlbGVjdGVkKHRydWUpO1xuXHRcdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGVtcF9hcnIucHVzaChjYXRlZ29yaWVzW2ldLmlkKVxuXHRcdFx0fVxuXHRcdFx0dGVtcF9hcnIucHVzaCgtMSk7XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9XG5cblx0fVxuXHRjb25zdCBvdGhlclNlbGVjdCA9ICgpID0+IHtcblx0XHRpZiAob3RoZXJTZWxlY3RlZCkge1xuXHRcdFx0c2V0T3RoZXJTZWxlY3RlZChmYWxzZSk7XG5cdFx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoc2VsZWN0ZWRDYXRlZ29yeVtpXSAhPSAtMSlcblx0XHRcdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pXG5cdFx0XHR9XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0T3RoZXJTZWxlY3RlZCh0cnVlKTtcblx0XHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSlcblx0XHRcdH1cblx0XHRcdHRlbXBfYXJyLnB1c2goLTEpO1xuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdFx0b25TaG93PXtmZXRjaENhdGVnb3JpZXN9XG5cdFx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdFx0Y2VudGVyZWRcblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9J2FsZXJ0JyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHRcdHtBbGVydH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QmlkIEFtb3VudCBpbiB7d2FsbGV0VHlwZX08L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtBbW91bnRJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RDYXRlZ29yeUFsbCc+XG5cdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNob29zZSB3aGVyZSB5b3Ugd2FudCB0byBnaXZlIHN1cHBvcnQ8L2g0PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZzogXCI1cHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBiYWNrZ3JvdW5kOiBcImJpc3F1ZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0gb25DbGljaz17KCkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0QWxsQ2F0ZWdvcnkoKTtcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5TdXBwb3J0IGluIGdlbmVyYWwgPC9oND5cblx0XHRcdFx0XHRcdFx0XHR7YWxsU2VsZWN0ZWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxMHB4XCIsIHRvcDogXCItN3B4XCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRTZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxMHB4XCIsIHRvcDogXCItN3B4XCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RDYXRlZ29yeScgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMTBweFwiLCBtYXJnaW5SaWdodDogXCItMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQoc2VsZWN0ZWRDYXRlZ29yeS5pbmRleE9mKGNhdGVnb3J5LmlkKSAhPT0gLTEpID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0KDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtjYXRlZ29yeS5pZH0gb25DbGljaz17KCkgPT4gdW5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeS5pZCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57Y2F0ZWdvcnkudGl0bGV9PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtjYXRlZ29yeS5pbWFnZX0gc3R5bGU9e3sgYXNwZWN0UmF0aW86ICcxJywgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntjYXRlZ29yeS5hbW91bnQgKiBjYXRlZ29yeS5wcmljZX0gVVNEPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtjYXRlZ29yeS5hbW91bnR9IHBpZWNlcyk8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSAgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0KDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtjYXRlZ29yeS5pZH0gb25DbGljaz17KCkgPT4gc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2NhdGVnb3J5LnRpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IGFzcGVjdFJhdGlvOiAnMScsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57Y2F0ZWdvcnkuYW1vdW50ICogY2F0ZWdvcnkucHJpY2V9IFVTRDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pih7Y2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cblxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0VW5zZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KVxuXHRcdFx0XHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0gb25DbGljaz17KCkgPT4gb3RoZXJTZWxlY3QoKX0+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0KGNhdGVnb3JpZXMubGVuZ3RoID4gMCkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQoPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiBcIjE1cHhcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+T3RoZXIgc3VwcG9ydDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdGhlckNhdGVnb3J5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBVU0Q8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChzZWxlY3RlZENhdGVnb3J5LmluZGV4T2YoLTEpICE9PSAtMSkgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRTZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PikgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pIDogbnVsbFxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvRm9ybT5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0XHQ8L01vZGFsPlxuXG5cdFx0PC8+XG5cdCk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMTFhNTA3OGQxN2VmMjViNWU2Y2FcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJ0b2FzdCIsInVzZUNvbnRyYWN0IiwiVXNlRm9ybUlucHV0IiwiY3JlYXRlQmlkIiwiUmVkdWNlQ2F0ZWdvcnkiLCJJY29uIiwiZ2V0Q2F0ZWdvcmllc2J5ZXZlbnRpZCIsImV2ZW50Z2V0YnlpZCIsIm5lYXJBUEkiLCJCaWRORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJUb0FkZHJlc3MiLCJ0b2tlbklkIiwicmVjaWQiLCJSZWFsRXZlbnRJZCIsIkhpZ2hlc3RiaWQiLCJ3YWxsZXRUeXBlIiwiY29udHJhY3QiLCJjb250cmFjdENlbG8iLCJzZW5kZXJBZGRyZXNzIiwiZXZlbnRJZCIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJBbGVydCIsInNldEFsZXJ0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJFdmVudEdvYWwiLCJzZXRFdmVudEdvYWwiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImFsbFNlbGVjdGVkIiwic2V0QWxsU2VsZWN0ZWQiLCJvdGhlclNlbGVjdGVkIiwic2V0T3RoZXJTZWxlY3RlZCIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5Iiwib3RoZXJDYXRlZ29yeSIsInNldE90aGVyQ2F0ZWdvcnkiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsImFsZXJ0RUxNIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZmV0Y2hDYXRlZ29yaWVzIiwibGVuZ3RoIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsInJlY29yZCIsIk51bWJlciIsImdldCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsInN1bW9mbWFpbiIsImZvckVhY2giLCJwdXNoIiwiZmllbGRzIiwiZG9uZSIsImJpZE5GVCIsInByb21pc2UiLCJiaWRORlRieUNFTE8iLCJwZW5kaW5nIiwic3VjY2VzcyIsImJpZE5GVGJ5TkVBUiIsIkNyZWF0aW5nT25BaXJUYWJsZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3JlYXRlIiwid2FsbGV0QWNjb3VudCIsImdldEFjY291bnRJZCIsInRvU3RyaW5nIiwiVXBkYXRlQWlydGFibGUiLCJ1cGRhdGUiLCJpIiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiZXZlbnRjYXRlZ29yeUlEIiwiaWQiLCJwZXJwZWljZSIsInVwZGF0ZWRwcmljZSIsIlVwZGF0ZWRhbW91bnQiLCJsb2ciLCJidXR0b25Qcm9wcyIsImlzU2lnbmVkSW4iLCJpbm5lclRleHQiLCJ3YXJuIiwicmVxdWVzdFNpZ25JbiIsIm5lYXJDb25maWciLCJjb250cmFjdE5hbWUiLCJjb25maWciLCJuZXR3b3JrSWQiLCJrZXlTdG9yZSIsImtleVN0b3JlcyIsIkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSIsIm5vZGVVcmwiLCJ3YWxsZXRVcmwiLCJoZWxwZXJVcmwiLCJleHBsb3JlclVybCIsImNvbm5lY3QiLCJuZWFyIiwiYWNjb3VudCIsImFtb3VudEluWW9jdG8iLCJ0b0xvY2FsZVN0cmluZyIsInVzZUdyb3VwaW5nIiwic2VuZE1vbmV5IiwiZXRoZXJldW0iLCJzZWxlY3RlZEFkZHJlc3MiLCJuZXR3b3JrVmVyc2lvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjcmVhdGVkT2JqZWN0IiwiQ0VMT2luRnVsbCIsImZyb20iLCJnYXNQcmljZSIsInZhbHVlIiwicmVzdWx0IiwiaHJlZiIsIkVycm9yIiwic2VsZWN0Q2F0ZWdvcnkiLCJjYXRlZ29yeV9pZCIsInRlbXBfYXJyIiwidW5zZWxlY3RDYXRlZ29yeSIsInNlbGVjdEFsbENhdGVnb3J5Iiwib3RoZXJTZWxlY3QiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25TZWxmIiwiY29sb3IiLCJyaWdodCIsInRvcCIsIm1hcmdpblRvcCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJmbGV4V3JhcCIsImNhdGVnb3J5IiwiYm9yZGVyIiwidGV4dEFsaWduIiwidGl0bGUiLCJpbWFnZSIsImFzcGVjdFJhdGlvIiwibGluZUhlaWdodCIsImFtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=