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
                "Date": currentDate,
                "UserName": walletAccount.getAccountId().toString(),
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
              console.log(result);
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
/******/ 	__webpack_require__.h = function() { return "bdcd2725cf5c7ec5625d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjYzMDFkZmJhZDBhYzFhZTEwOTMwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2dCLFdBQVQsT0FZWjtBQUFBLE1BWEZDLElBV0UsUUFYRkEsSUFXRTtBQUFBLE1BVkZDLE1BVUUsUUFWRkEsTUFVRTtBQUFBLE1BVEZDLFNBU0UsUUFURkEsU0FTRTtBQUFBLE1BUkZDLE9BUUUsUUFSRkEsT0FRRTtBQUFBLE1BUEZDLEtBT0UsUUFQRkEsS0FPRTtBQUFBLE1BTkZDLFdBTUUsUUFORkEsV0FNRTtBQUFBLE1BTEZDLFVBS0UsUUFMRkEsVUFLRTtBQUFBLE1BSkZDLFVBSUUsUUFKRkEsVUFJRTtBQUFBLE1BSEZDLFFBR0UsUUFIRkEsUUFHRTtBQUFBLE1BRkZDLFlBRUUsUUFGRkEsWUFFRTtBQUFBLE1BREZDLE9BQ0UsUUFERkEsT0FDRTs7QUFDRixNQUFJQyxRQUFRLEdBQUdDLG1CQUFPLENBQUMseURBQUQsQ0FBdEI7O0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQUlGLFFBQUosQ0FBYTtBQUFFRyxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUFiLEVBQThDRCxJQUE5QyxDQUFtRCxtQkFBbkQsQ0FBWDs7QUFFQSxrQkFBMEI3QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQTtBQUFBLE1BQU8rQixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxzQkFBOEJ4QiwwREFBWSxDQUFDO0FBQzFDeUIsSUFBQUEsSUFBSSxFQUFFLE1BRG9DO0FBRTFDQyxJQUFBQSxXQUFXLEVBQUU7QUFGNkIsR0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFdBQWY7O0FBSUEsbUJBQWtDcEMsK0NBQVEsQ0FBQyxDQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPcUMsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0N0QywrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQTtBQUFBLE1BQU91QyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUdBLG1CQUFzQ3hDLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUFBO0FBQUEsTUFBT3lDLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQTBDMUMsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPMkMsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0Esb0JBQWdENUMsK0NBQVEsQ0FBQyxFQUFELENBQXhEO0FBQUE7QUFBQSxNQUFPNkMsZ0JBQVA7QUFBQSxNQUF5QkMsbUJBQXpCOztBQUVBLG9CQUEwQzlDLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBQWxEO0FBQUE7QUFBQSxNQUFPK0MsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBRUEsV0FBU0Msb0JBQVQsR0FBZ0M7QUFDL0IsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLEtBQVQsR0FBaUIsVUFBakI7QUFDQXJCLElBQUFBLFFBQVEsa0NBQTJCVixVQUEzQixXQUFSO0FBQ0E7O0FBdkJDLFdBd0JhZ0MsZUF4QmI7QUFBQTtBQUFBOztBQUFBO0FBQUEsZ05Bd0JGO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDS2YsVUFBVSxDQUFDZ0IsTUFBWCxJQUFxQixDQUQxQjtBQUFBO0FBQUE7QUFBQTs7QUFFTUMsY0FBQUEsU0FGTixHQUVrQixDQUZsQjtBQUFBO0FBSU9DLGNBQUFBLGVBSlAsR0FJeUIsc0pBSnpCO0FBS09DLGNBQUFBLE9BTFAsR0FLaUI7QUFDYkMsZ0JBQUFBLE1BQU0sRUFBRSxLQURLO0FBRWJDLGdCQUFBQSxPQUFPLEVBQUU7QUFDUixrQ0FBZ0Isa0JBRFI7QUFFUkMsa0JBQUFBLE1BQU0sRUFBRTtBQUZBO0FBRkksZUFMakI7QUFBQTtBQUFBLHFCQVlTQyxLQUFLLENBQUNMLGVBQUQsRUFBa0JDLE9BQWxCLENBQUwsQ0FBZ0NLLElBQWhDLENBQXFDLFVBQUFDLEdBQUc7QUFBQSx1QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxlQUF4QyxFQUNKRixJQURJLENBQ0MsVUFBQUUsSUFBSTtBQUFBLHVCQUFJVCxTQUFTLEdBQUdTLElBQWhCO0FBQUEsZUFETCxFQUVKQyxLQUZJLENBRUUsVUFBQUMsR0FBRztBQUFBLHVCQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxXQUFXRixHQUF6QixDQUFKO0FBQUEsZUFGTCxDQVpUOztBQUFBO0FBZUdYLGNBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDYyxJQUFWLENBQWVDLFdBQWYsQ0FBMkIsQ0FBM0IsRUFBOEJDLEtBQTFDO0FBZkg7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQk9oQixjQUFBQSxTQWpCUCxHQWlCbUIsQ0FqQm5COztBQUFBO0FBQUEsb0JBb0JNbkIsU0FBUyxJQUFJLENBcEJuQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQXFCUyxzR0FBQVIsSUFBSSxDQUFDLFFBQUQsQ0FBSixpQkFBb0JILE9BQXBCLEVBQTZCLFVBQVV5QyxHQUFWLEVBQWVNLE1BQWYsRUFBdUI7QUFDekRuQyxnQkFBQUEsWUFBWSxDQUFDb0MsTUFBTSxDQUFDRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxNQUFYLENBQUQsQ0FBUCxDQUFaO0FBQ0EsZUFGSyxDQXJCVDs7QUFBQTtBQXlCRSxrQkFBSXRELFdBQVcsSUFBSSxDQUFuQixFQUFzQjtBQUNyQixvQkFBSTtBQUVIUSxrQkFBQUEsSUFBSSxDQUFDLGlCQUFELENBQUosQ0FBd0IrQyxNQUF4QixDQUErQjtBQUM5QkMsb0JBQUFBLGVBQWUseUJBQWtCeEQsV0FBbEIsTUFEZTtBQUU5QnlELG9CQUFBQSxJQUFJLEVBQUU7QUFGd0IsbUJBQS9CLEVBR0dDLFFBSEgsQ0FHWSxTQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBdUJDLGFBQXZCLEVBQXNDO0FBQ2pELHdCQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFDQUYsb0JBQUFBLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFVWCxNQUFWLEVBQWtCO0FBQ2pDbEMsc0JBQUFBLFVBQVUsQ0FBQzhDLElBQVgsQ0FBZ0JaLE1BQU0sQ0FBQ2EsTUFBdkI7QUFDQUgsc0JBQUFBLFNBQVMsSUFBSVQsTUFBTSxDQUFDQSxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE9BQVgsQ0FBRCxDQUFOLEdBQThCRCxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFFBQVgsQ0FBRCxDQUFyQyxDQUFuQjtBQUNBLHFCQUhEO0FBSUEzQixvQkFBQUEsZ0JBQWdCLENBQUMsdUZBQVNYLFNBQVMsR0FBR21CLFNBQXJCLElBQWtDMkIsU0FBbkMsQ0FBaEIsQ0FOaUQsQ0FRakQ7QUFDQSxtQkFaRCxFQVlHLFNBQVNJLElBQVQsQ0FBY3BCLEdBQWQsRUFBbUI7QUFDckJDLG9CQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNBLG1CQWREO0FBZUEsaUJBakJELENBaUJFLE9BQU9FLEtBQVAsRUFBYyxDQUFHO0FBQ25COztBQTVDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXhCRTtBQUFBO0FBQUE7O0FBMEVGcEUsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2ZxRCxJQUFBQSxlQUFlO0FBQ2YsR0FGUSxFQUVOLENBQUNmLFVBQUQsQ0FGTSxDQUFUOztBQTFFRSxXQTZFYWlELE1BN0ViO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVNQTZFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0tkLE1BQU0sQ0FBQ3ZDLE1BQUQsQ0FBTixHQUFpQnVDLE1BQU0sQ0FBQ3BELFVBQUQsQ0FENUI7QUFBQTtBQUFBO0FBQUE7O0FBRUUyQixjQUFBQSxvQkFBb0I7QUFGdEI7O0FBQUE7QUFBQSxvQkFLSzFCLFVBQVUsSUFBSSxNQUxuQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQU1RakIseURBQUEsQ0FBY29GLFlBQWQsRUFBNEI7QUFDakNDLGdCQUFBQSxPQUFPLGNBRDBCO0FBRWpDdEIsZ0JBQUFBLEtBQUssRUFBRSx3QkFGMEI7QUFHakN1QixnQkFBQUEsT0FBTztBQUgwQixlQUE1QixDQU5SOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9CQVlZckUsVUFBVSxJQUFJLE1BWjFCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBYVFqQix5REFBQSxDQUFjdUYsWUFBZCxFQUE0QjtBQUNqQ0YsZ0JBQUFBLE9BQU8sY0FEMEI7QUFFakN0QixnQkFBQUEsS0FBSyxFQUFFLHdCQUYwQjtBQUdqQ3VCLGdCQUFBQSxPQUFPO0FBSDBCLGVBQTVCLENBYlI7O0FBQUE7QUFBQTtBQUFBLHFCQW1CT3RGLHlEQUFBLENBQWN3RixrQkFBZCxFQUFrQztBQUN2Q0gsZ0JBQUFBLE9BQU8sMkJBRGdDO0FBRXZDdEIsZ0JBQUFBLEtBQUssRUFBRSx3QkFGZ0M7QUFHdkN1QixnQkFBQUEsT0FBTztBQUhnQyxlQUFsQyxDQW5CUDs7QUFBQTtBQXlCQ0csY0FBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNBRixjQUFBQSxNQUFNLENBQUM1QyxRQUFQLENBQWdCK0Msc0JBQWhCLENBQXVDLFdBQXZDLEVBQW9ELENBQXBELEVBQXVEQyxLQUF2RDs7QUExQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3RUU7QUFBQTtBQUFBOztBQUFBLFdBeUdhTCxrQkF6R2I7QUFBQTtBQUFBOztBQUFBO0FBQUEsbU5BeUdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLbkUsY0FBQUEsUUFETCxHQUNnQkMsbUJBQU8sQ0FBQyx5REFBRCxDQUR2QjtBQUVLQyxjQUFBQSxJQUZMLEdBRVksSUFBSUYsUUFBSixDQUFhO0FBQUVHLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUFiLEVBQThDRCxJQUE5QyxDQUFtRCxtQkFBbkQsQ0FGWjtBQUdLdUUsY0FBQUEsV0FITCxHQUdtQixJQUFJQyxJQUFKLEVBSG5CO0FBQUE7QUFBQSxxQkFJT3hFLElBQUksQ0FBQyxVQUFELENBQUosQ0FBaUJ5RSxNQUFqQixDQUF3QixDQUM3QjtBQUNDLDBCQUFVO0FBQ1QsNkJBQVduRixPQURGO0FBRVQsMEJBQVFpRixXQUZDO0FBR1QsOEJBQVlHLGFBQWEsQ0FBQ0MsWUFBZCxHQUE2QkMsUUFBN0IsRUFISDtBQUlULDhCQUFZdEU7QUFKSDtBQURYLGVBRDZCLENBQXhCLENBSlA7O0FBQUE7QUFhQzdCLGNBQUFBLHlEQUFBLENBQWMseUJBQWQ7QUFiRDtBQUFBLHFCQWNPb0csY0FBYyxFQWRyQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXpHRTtBQUFBO0FBQUE7O0FBQUEsV0EwSGFBLGNBMUhiO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtNQTBIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSy9FLGNBQUFBLFFBREwsR0FDZ0JDLG1CQUFPLENBQUMseURBQUQsQ0FEdkI7QUFFS0MsY0FBQUEsSUFGTCxHQUVZLElBQUlGLFFBQUosQ0FBYTtBQUFFRyxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBYixFQUE4Q0QsSUFBOUMsQ0FBbUQsbUJBQW5ELENBRlo7QUFBQTtBQUFBLHFCQUlPQSxJQUFJLENBQUMsTUFBRCxDQUFKLENBQWE4RSxNQUFiLENBQW9CLENBQ3pCO0FBQ0Msc0JBQU12RixLQURQO0FBRUMsMEJBQVU7QUFDVCwyQkFBU2U7QUFEQTtBQUZYLGVBRHlCLENBQXBCLENBSlA7O0FBQUE7QUFhVXlFLGNBQUFBLENBYlYsR0FhYyxDQWJkOztBQUFBO0FBQUEsb0JBYWlCQSxDQUFDLEdBQUcvRCxnQkFBZ0IsQ0FBQ1UsTUFidEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFlUTFCLElBQUksQ0FBQyxpQkFBRCxDQUFKLENBQXdCK0MsTUFBeEIsQ0FBK0I7QUFDcENDLGdCQUFBQSxlQUFlLHFCQUFjaEMsZ0JBQWdCLENBQUMrRCxDQUFELENBQTlCLE9BRHFCO0FBRXBDQyxnQkFBQUEsSUFBSSxFQUFFLENBQUM7QUFBRUMsa0JBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxrQkFBQUEsU0FBUyxFQUFFO0FBQTdCLGlCQUFELENBRjhCO0FBR3BDakMsZ0JBQUFBLElBQUksRUFBRTtBQUg4QixlQUEvQixFQUlIQyxRQUpHO0FBQUEscU5BSU0sa0JBQW9CRSxPQUFwQixFQUE2QkMsYUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBR0xELE9BQU8sQ0FBQ0csT0FBUjtBQUFBLGlPQUFnQixrQkFBZ0JYLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQnVDLHNDQUFBQSxlQURpQixHQUNDdkMsTUFBTSxDQUFDd0MsRUFEUjtBQUVmQyxzQ0FBQUEsUUFGZSxHQUVKLHVGQUFTeEMsTUFBTSxDQUFDRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxPQUFYLENBQUQsQ0FBTixHQUE4QkQsTUFBTSxDQUFDRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxRQUFYLENBQUQsQ0FBN0MsQ0FGSTtBQUdqQndDLHNDQUFBQSxZQUhpQixHQUdGekMsTUFBTSxDQUFDRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxPQUFYLENBQUQsQ0FBTixHQUE4QnVDLFFBSDVCO0FBSWpCRSxzQ0FBQUEsYUFKaUIsR0FJRDFDLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsUUFBWCxDQUFELENBQU4sR0FBK0IsQ0FKOUI7QUFBQTtBQUFBLDZDQUtmOUMsSUFBSSxDQUFDLGlCQUFELENBQUosQ0FBd0I4RSxNQUF4QixDQUErQixDQUNwQztBQUNDLDhDQUFNSyxlQURQO0FBRUMsa0RBQVU7QUFDVCxtREFBU0csWUFBWSxDQUFDVixRQUFiLEVBREE7QUFFVCxvREFBVVcsYUFBYSxDQUFDWCxRQUFkO0FBRkQ7QUFGWCx1Q0FEb0MsQ0FBL0IsQ0FMZTs7QUFBQTtBQWNyQnJDLHNDQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVk1QyxNQUFaOztBQWRxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSEs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSk47O0FBQUEseUJBSXFCTyxJQUpyQjtBQUFBO0FBQUE7O0FBQUEsdUJBSXFCQSxJQUpyQjtBQUFBLG1CQXVCSCxTQUFTTyxJQUFULENBQWNwQixHQUFkLEVBQW1CO0FBQ3JCLG9CQUFJQSxHQUFKLEVBQVM7QUFBRUMsa0JBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQW9CO0FBQVM7QUFDeEMsZUF6QkssQ0FmUjs7QUFBQTtBQWE4Q3lDLGNBQUFBLENBQUMsRUFiL0M7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMUhFO0FBQUE7QUFBQTs7QUFBQSxXQXdLYWYsWUF4S2I7QUFBQTtBQUFBOztBQUFBO0FBQUEsNk1Bd0tGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVLeUIsY0FBQUEsV0FGTCxHQUVtQm5FLFFBQVEsQ0FBQytDLHNCQUFULENBQWdDLGlCQUFoQyxFQUFtRCxDQUFuRCxDQUZuQjs7QUFBQSxvQkFHS0gsTUFBTSxDQUFDUSxhQUFQLENBQXFCZ0IsVUFBckIsTUFBcUMsS0FIMUM7QUFBQTtBQUFBO0FBQUE7O0FBSUVELGNBQUFBLFdBQVcsQ0FBQ0UsU0FBWixHQUF3Qix3QkFBeEI7QUFKRjtBQUFBLHFCQUtRbEgsc0RBQUEsQ0FBVywrQ0FBWCxDQUxSOztBQUFBO0FBQUE7QUFBQSxxQkFNUXlGLE1BQU0sQ0FBQ1EsYUFBUCxDQUFxQm1CLGFBQXJCLENBQ0wzQixNQUFNLENBQUM0QixVQUFQLENBQWtCQyxZQURiLEVBRUwsU0FGSyxDQU5SOztBQUFBO0FBQUE7O0FBQUE7QUFXQztBQUNBO0FBQ01DLGNBQUFBLE1BYlAsR0FhZ0I7QUFDZEMsZ0JBQUFBLFNBQVMsRUFBRSxTQURHO0FBRWRDLGdCQUFBQSxRQUFRLEVBQUUsSUFBSWpILCtFQUFKLEVBRkk7QUFHZG9ILGdCQUFBQSxPQUFPLEVBQUUsOEJBSEs7QUFJZEMsZ0JBQUFBLFNBQVMsRUFBRSxpQ0FKRztBQUtkQyxnQkFBQUEsU0FBUyxFQUFFLGlDQUxHO0FBTWRDLGdCQUFBQSxXQUFXLEVBQUU7QUFOQyxlQWJoQixFQXFCQzs7QUFyQkQ7QUFBQSxxQkFzQm9CdkgsaURBQUEsQ0FBZ0IrRyxNQUFoQixDQXRCcEI7O0FBQUE7QUFzQk9VLGNBQUFBLElBdEJQO0FBQUE7QUFBQSxxQkF1QnVCQSxJQUFJLENBQUNDLE9BQUwsQ0FBYWpDLGFBQWEsQ0FBQ0MsWUFBZCxFQUFiLENBdkJ2Qjs7QUFBQTtBQXVCT2dDLGNBQUFBLE9BdkJQO0FBd0JPQyxjQUFBQSxhQXhCUCxHQXdCdUIsQ0FBQy9ELE1BQU0sQ0FBQ3ZDLE1BQUQsQ0FBTixHQUFpQix5QkFBbEIsRUFBNkN1RyxjQUE3QyxDQUE0RCxVQUE1RCxFQUF3RTtBQUFFQyxnQkFBQUEsV0FBVyxFQUFFO0FBQWYsZUFBeEUsQ0F4QnZCO0FBQUE7QUFBQSxxQkEwQk9ILE9BQU8sQ0FBQ0ksU0FBUixDQUNMMUgsU0FESyxFQUNNO0FBQ1h1SCxjQUFBQSxhQUZLLENBRVM7QUFGVCxnQkFHSnZFLEtBSEksQ0FHRSxVQUFDRyxLQUFELEVBQVc7QUFDbEJELGdCQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxRQUFkLEVBQXdCQSxLQUF4QjtBQUNBRCxnQkFBQUEsT0FBTyxDQUFDaUQsR0FBUixDQUFZaEQsS0FBWjtBQUNBO0FBQ0EsZUFQSyxDQTFCUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXhLRTtBQUFBO0FBQUE7O0FBQUEsV0E2TWFxQixZQTdNYjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2TUE2TUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0s0QixjQUFBQSxXQURMLEdBQ21CbkUsUUFBUSxDQUFDK0Msc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELENBQW5ELENBRG5COztBQUFBLG9CQUVLSCxNQUFNLENBQUM4QyxRQUFQLENBQWdCQyxlQUFoQixJQUFtQyxJQUFuQyxJQUEyQy9DLE1BQU0sQ0FBQzhDLFFBQVAsQ0FBZ0JFLGNBQWhCLElBQWtDLEtBQTdFLElBQXNGaEQsTUFBTSxDQUFDaUQsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsbUJBQTVCLEtBQW9ELEVBRi9JO0FBQUE7QUFBQTtBQUFBOztBQUdRQyxjQUFBQSxhQUhSLEdBR3dCO0FBQ3JCLDJCQUFXL0gsT0FEVTtBQUVyQix3QkFBUWlGLFdBRmE7QUFHckIsNEJBQVlHLGFBQWEsQ0FBQ0MsWUFBZCxHQUE2QkMsUUFBN0IsRUFIUztBQUlyQiw0QkFBWXRFO0FBSlMsZUFIeEI7QUFVTWdILGNBQUFBLFVBVk4sR0FVbUIsQ0FBQ3pFLE1BQU0sQ0FBQ3ZDLE1BQUQsQ0FBTixHQUFpQixtQkFBbEIsRUFBdUN1RyxjQUF2QyxDQUFzRCxVQUF0RCxFQUFrRTtBQUFFQyxnQkFBQUEsV0FBVyxFQUFFO0FBQWYsZUFBbEUsQ0FWbkI7QUFBQTtBQUFBLHFCQVl1QmxILFlBQVksQ0FBQ2hCLFNBQWIsQ0FBdUJVLE9BQXZCLEVBQWdDLDRGQUFlK0gsYUFBZixDQUFoQyxFQUErRDtBQUNuRkUsZ0JBQUFBLElBQUksRUFBRUMsYUFENkU7QUFFbkZDLGdCQUFBQSxRQUFRLEVBQUUsWUFGeUU7QUFFM0RDLGdCQUFBQSxLQUFLLEVBQUVKO0FBRm9ELGVBQS9ELENBWnZCOztBQUFBO0FBWVFLLGNBQUFBLE1BWlI7QUFnQkVwRixjQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVltQyxNQUFaO0FBaEJGO0FBQUE7O0FBQUE7QUFrQkVsQyxjQUFBQSxXQUFXLENBQUNFLFNBQVosR0FBd0Isd0JBQXhCO0FBbEJGO0FBQUEscUJBbUJRbEgsc0RBQUEsQ0FBVywrQ0FBWCxDQW5CUjs7QUFBQTtBQW9CRXlGLGNBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnlELElBQWhCO0FBcEJGLG9CQXFCUSxJQUFJQyxLQUFKLENBQVUsaUNBQVYsQ0FyQlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3TUU7QUFBQTtBQUFBOztBQTBPRixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFdBQUQsRUFBaUI7QUFDdkN4RixJQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVksYUFBWjtBQUNBakQsSUFBQUEsT0FBTyxDQUFDaUQsR0FBUixDQUFZdUMsV0FBWjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSWpELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcvRCxnQkFBZ0IsQ0FBQ1UsTUFBckMsRUFBNkNxRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2pEaUQsTUFBQUEsUUFBUSxDQUFDeEUsSUFBVCxDQUFjeEMsZ0JBQWdCLENBQUMrRCxDQUFELENBQTlCO0FBQ0E7O0FBQ0RpRCxJQUFBQSxRQUFRLENBQUN4RSxJQUFULENBQWN1RSxXQUFkO0FBQ0F4RixJQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVl3QyxRQUFaO0FBRUEvRyxJQUFBQSxtQkFBbUIsQ0FBQytHLFFBQUQsQ0FBbkI7QUFDQSxHQVhEOztBQVlBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0YsV0FBRCxFQUFpQjtBQUN6QyxRQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxTQUFLLElBQUlqRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHL0QsZ0JBQWdCLENBQUNVLE1BQXJDLEVBQTZDcUQsQ0FBQyxFQUE5QyxFQUFrRDtBQUNqRCxVQUFJL0QsZ0JBQWdCLENBQUMrRCxDQUFELENBQWhCLElBQXVCZ0QsV0FBM0IsRUFDQ0MsUUFBUSxDQUFDeEUsSUFBVCxDQUFjeEMsZ0JBQWdCLENBQUMrRCxDQUFELENBQTlCO0FBQ0Q7O0FBQ0R4QyxJQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVl3QyxRQUFaO0FBQ0EvRyxJQUFBQSxtQkFBbUIsQ0FBQytHLFFBQUQsQ0FBbkI7QUFDQSxHQVJEOztBQVVBLE1BQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUMvQixRQUFJdEgsV0FBSixFQUFpQjtBQUNoQkMsTUFBQUEsY0FBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBSSxNQUFBQSxtQkFBbUIsQ0FBQyxFQUFELENBQW5CO0FBQ0EsS0FIRCxNQUdPO0FBRU5KLE1BQUFBLGNBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQSxVQUFJbUgsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsV0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3JFLFVBQVUsQ0FBQ2dCLE1BQS9CLEVBQXVDcUQsQ0FBQyxFQUF4QyxFQUE0QztBQUMzQ2lELFFBQUFBLFFBQVEsQ0FBQ3hFLElBQVQsQ0FBYzlDLFVBQVUsQ0FBQ3FFLENBQUQsQ0FBVixDQUFjSyxFQUE1QjtBQUNBOztBQUNENEMsTUFBQUEsUUFBUSxDQUFDeEUsSUFBVCxDQUFjLENBQUMsQ0FBZjtBQUNBdkMsTUFBQUEsbUJBQW1CLENBQUMrRyxRQUFELENBQW5CO0FBQ0E7QUFFRCxHQWZEOztBQWdCQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCLFFBQUlySCxhQUFKLEVBQW1CO0FBQ2xCQyxNQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0EsVUFBSWlILFFBQVEsR0FBRyxFQUFmOztBQUNBLFdBQUssSUFBSWpELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcvRCxnQkFBZ0IsQ0FBQ1UsTUFBckMsRUFBNkNxRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2pELFlBQUkvRCxnQkFBZ0IsQ0FBQytELENBQUQsQ0FBaEIsSUFBdUIsQ0FBQyxDQUE1QixFQUNDaUQsUUFBUSxDQUFDeEUsSUFBVCxDQUFjeEMsZ0JBQWdCLENBQUMrRCxDQUFELENBQTlCO0FBQ0Q7O0FBQ0Q5RCxNQUFBQSxtQkFBbUIsQ0FBQytHLFFBQUQsQ0FBbkI7QUFDQSxLQVJELE1BUU87QUFDTmpILE1BQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQSxVQUFJaUgsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsV0FBSyxJQUFJakQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRy9ELGdCQUFnQixDQUFDVSxNQUFyQyxFQUE2Q3FELENBQUMsRUFBOUMsRUFBa0Q7QUFDakRpRCxRQUFBQSxRQUFRLENBQUN4RSxJQUFULENBQWN4QyxnQkFBZ0IsQ0FBQytELENBQUQsQ0FBOUI7QUFDQTs7QUFDRGlELE1BQUFBLFFBQVEsQ0FBQ3hFLElBQVQsQ0FBYyxDQUFDLENBQWY7QUFDQXZDLE1BQUFBLG1CQUFtQixDQUFDK0csUUFBRCxDQUFuQjtBQUNBO0FBQ0QsR0FsQkQ7O0FBbUJBLHNCQUNDLGlIQUNDLGlEQUFDLDhEQUFEO0FBQ0MsUUFBSSxFQUFFN0ksSUFEUDtBQUVDLFVBQU0sRUFBRUMsTUFGVDtBQUdDLFVBQU0sRUFBRXFDLGVBSFQ7QUFJQyx1QkFBZ0IsK0JBSmpCO0FBS0MsWUFBUTtBQUxULGtCQU9DLGlEQUFDLHFFQUFEO0FBQWMsZUFBVztBQUF6QixrQkFDQyxpREFBQyxvRUFBRDtBQUFhLE1BQUUsRUFBQztBQUFoQixlQURELENBUEQsZUFZQyxpREFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBQztBQUF0QixrQkFDQyxpREFBQyw2REFBRCxxQkFDQztBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLFNBQUssRUFBRTtBQUFFMkcsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBdkI7QUFBNEMsYUFBUyxFQUFDLG9CQUF0RDtBQUEyRSxRQUFJLEVBQUM7QUFBaEYsS0FDRWxJLEtBREYsQ0FERCxlQUlDLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxtRUFBRCwwQkFBMkJSLFVBQTNCLENBREQsRUFFRWEsV0FGRixDQUpELGVBUUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLFNBQUssRUFBRTtBQUFFOEgsTUFBQUEsWUFBWSxFQUFFO0FBQWhCO0FBQVgsNkNBREQsZUFFQztBQUFLLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsT0FBTyxFQUFFLEtBQTFCO0FBQWlDSCxNQUFBQSxPQUFPLEVBQUUsTUFBMUM7QUFBa0RJLE1BQUFBLGNBQWMsRUFBRSxRQUFsRTtBQUE0RUMsTUFBQUEsVUFBVSxFQUFFLFFBQXhGO0FBQWtHQyxNQUFBQSxRQUFRLEVBQUUsVUFBNUc7QUFBd0hDLE1BQUFBLFVBQVUsRUFBRSxRQUFwSTtBQUE4SUMsTUFBQUEsTUFBTSxFQUFFLE1BQXRKO0FBQThKQyxNQUFBQSxZQUFZLEVBQUUsS0FBNUs7QUFBbUxSLE1BQUFBLFlBQVksRUFBRTtBQUFqTSxLQUFaO0FBQXVOLFdBQU8sRUFBRSxtQkFBTTtBQUVyT0gsTUFBQUEsaUJBQWlCO0FBQ2pCO0FBSEQsa0JBSUM7QUFBSSxTQUFLLEVBQUU7QUFBRVksTUFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJDLE1BQUFBLEtBQUssRUFBRTtBQUE5QjtBQUFYLDJCQUpELEVBS0VuSSxXQUFXLGdCQUNYO0FBQUssU0FBSyxFQUFFO0FBQUU4SCxNQUFBQSxRQUFRLEVBQUUsVUFBWjtBQUF3Qk0sTUFBQUEsS0FBSyxFQUFFLE1BQS9CO0FBQXVDQyxNQUFBQSxHQUFHLEVBQUU7QUFBNUM7QUFBWixrQkFDQztBQUFLLFNBQUssRUFBRTtBQUNYQyxNQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYZCxNQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYRSxNQUFBQSxLQUFLLEVBQUUsTUFISTtBQUlYTSxNQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixNQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxNQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixNQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxNQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixNQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLGtCQVVHLGlEQUFDLDBEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsSUFWSCxDQURELENBRFcsZ0JBY1g7QUFBSyxTQUFLLEVBQUU7QUFBRUQsTUFBQUEsUUFBUSxFQUFFLFVBQVo7QUFBd0JNLE1BQUFBLEtBQUssRUFBRSxNQUEvQjtBQUF1Q0MsTUFBQUEsR0FBRyxFQUFFO0FBQTVDO0FBQVosa0JBQ0M7QUFBSyxTQUFLLEVBQUU7QUFDWEMsTUFBQUEsU0FBUyxFQUFFLE1BREE7QUFFWGQsTUFBQUEsT0FBTyxFQUFFLE1BRkU7QUFHWEUsTUFBQUEsS0FBSyxFQUFFLE1BSEk7QUFJWE0sTUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEosTUFBQUEsY0FBYyxFQUFFLFFBTEw7QUFNWFcsTUFBQUEsYUFBYSxFQUFFLFFBTko7QUFPWFYsTUFBQUEsVUFBVSxFQUFFLFFBUEQ7QUFRWEksTUFBQUEsWUFBWSxFQUFFLE1BUkg7QUFTWEYsTUFBQUEsVUFBVSxFQUFFO0FBVEQ7QUFBWixrQkFVRyxpREFBQywwREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLElBVkgsQ0FERCxDQW5CRixDQUZELENBUkQsZUE0Q0M7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsU0FBSyxFQUFFO0FBQUVTLE1BQUFBLFVBQVUsRUFBRSxPQUFkO0FBQXVCQyxNQUFBQSxXQUFXLEVBQUUsT0FBcEM7QUFBNkNqQixNQUFBQSxPQUFPLEVBQUUsTUFBdEQ7QUFBOERlLE1BQUFBLGFBQWEsRUFBRSxLQUE3RTtBQUFvRkcsTUFBQUEsUUFBUSxFQUFFO0FBQTlGO0FBQXZDLEtBRUUsMEZBQUE1SSxVQUFVLE1BQVYsQ0FBQUEsVUFBVSxFQUFLLFVBQUM2SSxRQUFEO0FBQUEsV0FDYiwrRkFBQXZJLGdCQUFnQixNQUFoQixDQUFBQSxnQkFBZ0IsRUFBU3VJLFFBQVEsQ0FBQ25FLEVBQWxCLENBQWhCLEtBQTBDLENBQUMsQ0FBNUMsZ0JBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRWtELFFBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCQyxRQUFBQSxPQUFPLEVBQUUsUUFBekI7QUFBbUNGLFFBQUFBLFlBQVksRUFBRTtBQUFqRCxPQUFaO0FBQXVFLFNBQUcsRUFBRWtCLFFBQVEsQ0FBQ25FLEVBQXJGO0FBQXlGLGFBQU8sRUFBRTtBQUFBLGVBQU02QyxnQkFBZ0IsQ0FBQ3NCLFFBQVEsQ0FBQ25FLEVBQVYsQ0FBdEI7QUFBQTtBQUFsRyxvQkFDQTtBQUFLLFdBQUssRUFBRTtBQUFFdUQsUUFBQUEsVUFBVSxFQUFFLE9BQWQ7QUFBdUJKLFFBQUFBLE9BQU8sRUFBRSxVQUFoQztBQUE0Q2lCLFFBQUFBLE1BQU0sRUFBRSx1QkFBcEQ7QUFBNkVYLFFBQUFBLFlBQVksRUFBRSxLQUEzRjtBQUFrR0osUUFBQUEsVUFBVSxFQUFFO0FBQTlHO0FBQVosb0JBQ0M7QUFBSSxXQUFLLEVBQUU7QUFBRUosUUFBQUEsWUFBWSxFQUFFLE1BQWhCO0FBQXdCVSxRQUFBQSxLQUFLLEVBQUUsU0FBL0I7QUFBMENVLFFBQUFBLFNBQVMsRUFBRTtBQUFyRDtBQUFYLE9BQTZFRixRQUFRLENBQUNHLEtBQXRGLENBREQsZUFFQztBQUFLLFNBQUcsRUFBRUgsUUFBUSxDQUFDSSxLQUFuQjtBQUEwQixXQUFLLEVBQUU7QUFBRUMsUUFBQUEsV0FBVyxFQUFFLEdBQWY7QUFBb0JmLFFBQUFBLFlBQVksRUFBRTtBQUFsQztBQUFqQyxNQUZELGVBR0M7QUFBSSxXQUFLLEVBQUU7QUFBRUUsUUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JVLFFBQUFBLFNBQVMsRUFBRSxRQUEvQjtBQUF5Q1AsUUFBQUEsU0FBUyxFQUFFLE1BQXBEO0FBQTREVyxRQUFBQSxVQUFVLEVBQUU7QUFBeEU7QUFBWCxPQUE4Rk4sUUFBUSxDQUFDTyxNQUFULEdBQWtCUCxRQUFRLENBQUM1RyxLQUF6SCxTQUhELGVBSUM7QUFBSSxXQUFLLEVBQUU7QUFBRW9HLFFBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CVSxRQUFBQSxTQUFTLEVBQUUsUUFBL0I7QUFBeUNJLFFBQUFBLFVBQVUsRUFBRTtBQUFyRDtBQUFYLFlBQTRFTixRQUFRLENBQUNPLE1BQXJGLGFBSkQsZUFLQztBQUFLLFdBQUssRUFBRTtBQUFFMUIsUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJJLFFBQUFBLGNBQWMsRUFBRTtBQUFuQztBQUFaLG9CQUNDO0FBQUssV0FBSyxFQUFFO0FBQ1hVLFFBQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLFFBQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLFFBQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLFFBQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLFFBQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLFFBQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLFFBQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLFFBQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLFFBQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosb0JBV0csaURBQUMsMERBQUQ7QUFBTSxVQUFJLEVBQUM7QUFBWCxNQVhILENBREQsQ0FMRCxDQURBLENBREYsZ0JBd0JFO0FBQUssV0FBSyxFQUFFO0FBQUVMLFFBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCQyxRQUFBQSxPQUFPLEVBQUUsUUFBekI7QUFBbUNGLFFBQUFBLFlBQVksRUFBRTtBQUFqRCxPQUFaO0FBQXVFLFNBQUcsRUFBRWtCLFFBQVEsQ0FBQ25FLEVBQXJGO0FBQXlGLGFBQU8sRUFBRTtBQUFBLGVBQU0wQyxjQUFjLENBQUN5QixRQUFRLENBQUNuRSxFQUFWLENBQXBCO0FBQUE7QUFBbEcsb0JBQ0E7QUFBSyxXQUFLLEVBQUU7QUFBRXVELFFBQUFBLFVBQVUsRUFBRSxPQUFkO0FBQXVCSixRQUFBQSxPQUFPLEVBQUUsVUFBaEM7QUFBNENpQixRQUFBQSxNQUFNLEVBQUUsdUJBQXBEO0FBQTZFWCxRQUFBQSxZQUFZLEVBQUUsS0FBM0Y7QUFBa0dKLFFBQUFBLFVBQVUsRUFBRTtBQUE5RztBQUFaLG9CQUNDO0FBQUksV0FBSyxFQUFFO0FBQUVKLFFBQUFBLFlBQVksRUFBRSxNQUFoQjtBQUF3QlUsUUFBQUEsS0FBSyxFQUFFLFNBQS9CO0FBQTBDVSxRQUFBQSxTQUFTLEVBQUU7QUFBckQ7QUFBWCxPQUE2RUYsUUFBUSxDQUFDRyxLQUF0RixDQURELGVBRUM7QUFBSyxTQUFHLEVBQUVILFFBQVEsQ0FBQ0ksS0FBbkI7QUFBMEIsV0FBSyxFQUFFO0FBQUVDLFFBQUFBLFdBQVcsRUFBRSxHQUFmO0FBQW9CZixRQUFBQSxZQUFZLEVBQUU7QUFBbEM7QUFBakMsTUFGRCxlQUdDO0FBQUksV0FBSyxFQUFFO0FBQUVFLFFBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CVSxRQUFBQSxTQUFTLEVBQUUsUUFBL0I7QUFBeUNQLFFBQUFBLFNBQVMsRUFBRSxNQUFwRDtBQUE0RFcsUUFBQUEsVUFBVSxFQUFFO0FBQXhFO0FBQVgsT0FBOEZOLFFBQVEsQ0FBQ08sTUFBVCxHQUFrQlAsUUFBUSxDQUFDNUcsS0FBekgsU0FIRCxlQUlDO0FBQUksV0FBSyxFQUFFO0FBQUVvRyxRQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQlUsUUFBQUEsU0FBUyxFQUFFLFFBQS9CO0FBQXlDSSxRQUFBQSxVQUFVLEVBQUU7QUFBckQ7QUFBWCxZQUE0RU4sUUFBUSxDQUFDTyxNQUFyRixhQUpELGVBT0M7QUFBSyxXQUFLLEVBQUU7QUFBRTFCLFFBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CSSxRQUFBQSxjQUFjLEVBQUU7QUFBbkM7QUFBWixvQkFDQztBQUFLLFdBQUssRUFBRTtBQUNYVSxRQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYZCxRQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYRSxRQUFBQSxLQUFLLEVBQUUsTUFISTtBQUlYTSxRQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixRQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxRQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixRQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxRQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixRQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLG9CQVVHLGlEQUFDLDBEQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVgsTUFWSCxDQURELENBUEQsQ0FEQSxDQXpCWTtBQUFBLEdBQUwsQ0FGWixlQW9EQztBQUFLLFNBQUssRUFBRTtBQUFFTCxNQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsTUFBQUEsT0FBTyxFQUFFLFFBQXpCO0FBQW1DSCxNQUFBQSxPQUFPLEVBQUUsTUFBNUM7QUFBb0RlLE1BQUFBLGFBQWEsRUFBRTtBQUFuRSxLQUFaO0FBQTJGLFdBQU8sRUFBRTtBQUFBLGFBQU1oQixXQUFXLEVBQWpCO0FBQUE7QUFBcEcsS0FFR3pILFVBQVUsQ0FBQ2dCLE1BQVgsR0FBb0IsQ0FBckIsZ0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRWlILE1BQUFBLFVBQVUsRUFBRSxPQUFkO0FBQXVCSixNQUFBQSxPQUFPLEVBQUUsTUFBaEM7QUFBd0NpQixNQUFBQSxNQUFNLEVBQUUsdUJBQWhEO0FBQXlFWCxNQUFBQSxZQUFZLEVBQUUsS0FBdkY7QUFBOEZKLE1BQUFBLFVBQVUsRUFBRSxRQUExRztBQUFvSEosTUFBQUEsWUFBWSxFQUFFO0FBQWxJO0FBQVosa0JBQ0E7QUFBSSxTQUFLLEVBQUU7QUFBRUEsTUFBQUEsWUFBWSxFQUFFLE1BQWhCO0FBQXdCVSxNQUFBQSxLQUFLLEVBQUUsU0FBL0I7QUFBMENVLE1BQUFBLFNBQVMsRUFBRTtBQUFyRDtBQUFYLHFCQURBLGVBRUE7QUFBSSxTQUFLLEVBQUU7QUFBRVYsTUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JVLE1BQUFBLFNBQVMsRUFBRSxRQUEvQjtBQUF5Q1AsTUFBQUEsU0FBUyxFQUFFLE1BQXBEO0FBQTREVyxNQUFBQSxVQUFVLEVBQUU7QUFBeEU7QUFBWCxLQUNDM0ksYUFERCxTQUZBLEVBTUUsK0ZBQUFGLGdCQUFnQixNQUFoQixDQUFBQSxnQkFBZ0IsRUFBUyxDQUFDLENBQVYsQ0FBaEIsS0FBaUMsQ0FBQyxDQUFuQyxnQkFDQztBQUFLLFNBQUssRUFBRTtBQUFFb0gsTUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJJLE1BQUFBLGNBQWMsRUFBRTtBQUFuQztBQUFaLGtCQUNDO0FBQUssU0FBSyxFQUFFO0FBQ1hVLE1BQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLE1BQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLE1BQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLE1BQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLE1BQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLE1BQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLE1BQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLE1BQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLE1BQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosa0JBV0csaURBQUMsMERBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxJQVhILENBREQsQ0FERCxnQkFlQztBQUFLLFNBQUssRUFBRTtBQUFFUCxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkksTUFBQUEsY0FBYyxFQUFFO0FBQW5DO0FBQVosa0JBQ0M7QUFBSyxTQUFLLEVBQUU7QUFDWFUsTUFBQUEsU0FBUyxFQUFFLE1BREE7QUFFWGQsTUFBQUEsT0FBTyxFQUFFLE1BRkU7QUFHWEUsTUFBQUEsS0FBSyxFQUFFLE1BSEk7QUFJWE0sTUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEosTUFBQUEsY0FBYyxFQUFFLFFBTEw7QUFNWFcsTUFBQUEsYUFBYSxFQUFFLFFBTko7QUFPWFYsTUFBQUEsVUFBVSxFQUFFLFFBUEQ7QUFRWEksTUFBQUEsWUFBWSxFQUFFLE1BUkg7QUFTWEYsTUFBQUEsVUFBVSxFQUFFO0FBVEQ7QUFBWixrQkFXRyxpREFBQywwREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLElBWEgsQ0FERCxDQXJCRixDQURGLEdBc0NXLElBeENiLENBcERELENBNUNELGVBNklDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsaURBQUMsK0RBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFaEY7QUFBbkMsZUFERCxDQTdJRCxDQURELENBWkQsQ0FERCxDQUREO0FBd0tBOzs7Ozs7OztVQ3JlRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcbmltcG9ydCB7IGNyZWF0ZUJpZCwgUmVkdWNlQ2F0ZWdvcnkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy90b2tlbidcbmltcG9ydCB7IEljb24gfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0ljb24nXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzYnlldmVudGlkLCBldmVudGdldGJ5aWQgfSBmcm9tICcuLi8uLi8uLi9wYWdlcy9FdmVudHMvZXZlbnQnXG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWRORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0VG9BZGRyZXNzLFxuXHR0b2tlbklkLFxuXHRyZWNpZCxcblx0UmVhbEV2ZW50SWQsXG5cdEhpZ2hlc3RiaWQsXG5cdHdhbGxldFR5cGUsXG5cdGNvbnRyYWN0LFxuXHRjb250cmFjdENlbG8sXG5cdGV2ZW50SWQsXG59KSB7XG5cdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cblx0Y29uc3QgW0FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cdGNvbnN0IFtFdmVudEdvYWwsIHNldEV2ZW50R29hbF0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuXG5cblx0Y29uc3QgW2FsbFNlbGVjdGVkLCBzZXRBbGxTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtvdGhlclNlbGVjdGVkLCBzZXRPdGhlclNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IFtvdGhlckNhdGVnb3J5LCBzZXRPdGhlckNhdGVnb3J5XSA9IHVzZVN0YXRlKC0xKTtcblxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpIHtcblx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpO1xuXHRcdGFsZXJ0RUxNLnN0eWxlID0gJ2NvbnRlbnRzJztcblx0XHRzZXRBbGVydChgQW1vdW50IGNhbm5vdCBiZSB1bmRlciAke0hpZ2hlc3RiaWR9IE5FQVJgKVxuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIGZldGNoQ2F0ZWdvcmllcygpIHtcblx0XHRpZiAoY2F0ZWdvcmllcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0dmFyIG5lYXJQcmljZSA9IDA7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG5cdFx0XHRcdGxldCBvcHRpb25zID0ge1xuXHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0XHRcdFx0LnRoZW4oanNvbiA9PiBuZWFyUHJpY2UgPSBqc29uKVxuXHRcdFx0XHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuXHRcdFx0XHRuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdHZhciBuZWFyUHJpY2UgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoRXZlbnRHb2FsID09IDApIHtcblx0XHRcdFx0YXdhaXQgYmFzZSgnZXZlbnRzJykuZmluZChldmVudElkLCBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcblx0XHRcdFx0XHRzZXRFdmVudEdvYWwoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFJlYWxFdmVudElkICE9IDApIHtcblx0XHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRcdGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLnNlbGVjdCh7XG5cdFx0XHRcdFx0XHRmaWx0ZXJCeUZvcm11bGE6IGAoe2V2ZW50aWR9ID0gJHtSZWFsRXZlbnRJZH0pYCxcblx0XHRcdFx0XHRcdHZpZXc6IFwiR3JpZCB2aWV3XCJcblx0XHRcdFx0XHR9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcblx0XHRcdFx0XHRcdHZhciBzdW1vZm1haW4gPSAwO1xuXHRcdFx0XHRcdFx0cmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0XHRcdFx0XHRcdFx0Y2F0ZWdvcmllcy5wdXNoKHJlY29yZC5maWVsZHMpO1xuXHRcdFx0XHRcdFx0XHRzdW1vZm1haW4gKz0gTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwicHJpY2VcIikpICogTnVtYmVyKHJlY29yZC5nZXQoXCJhbW91bnRcIikpKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0c2V0T3RoZXJDYXRlZ29yeShwYXJzZUludChFdmVudEdvYWwgKiBuZWFyUHJpY2UpIC0gc3Vtb2ZtYWluKTtcblxuXHRcdFx0XHRcdFx0Ly8gc2V0Q2F0ZWdvcmllcyhyZWNvcmRzWzBdLmZpZWxkcyk7XG5cdFx0XHRcdFx0fSwgZnVuY3Rpb24gZG9uZShlcnIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHsgfVxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoQ2F0ZWdvcmllcygpO1xuXHR9LCBbY2F0ZWdvcmllc10pO1xuXHRhc3luYyBmdW5jdGlvbiBiaWRORlQoKSB7XG5cdFx0aWYgKE51bWJlcihBbW91bnQpIDwgTnVtYmVyKEhpZ2hlc3RiaWQpKSB7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAod2FsbGV0VHlwZSA9PSBcIkNFTE9cIikge1xuXHRcdFx0YXdhaXQgdG9hc3QucHJvbWlzZShiaWRORlRieUNFTE8sIHtcblx0XHRcdFx0cGVuZGluZzogYEJpZGRpbmcuLi5gLFxuXHRcdFx0XHRlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG5cdFx0XHRcdHN1Y2Nlc3M6IGBTdWNjZXNzISEhYFxuXHRcdFx0fSk7XG5cblx0XHR9IGVsc2UgaWYgKHdhbGxldFR5cGUgPT0gXCJORUFSXCIpIHtcblx0XHRcdGF3YWl0IHRvYXN0LnByb21pc2UoYmlkTkZUYnlORUFSLCB7XG5cdFx0XHRcdHBlbmRpbmc6IGBCaWRkaW5nLi4uYCxcblx0XHRcdFx0ZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuXHRcdFx0XHRzdWNjZXNzOiBgU3VjY2VzcyEhIWBcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nT25BaXJUYWJsZSwge1xuXHRcdFx0cGVuZGluZzogYFVwZGF0aW5nIG9uIEFpcnRhYmxlLi4uYCxcblx0XHRcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHRcdHN1Y2Nlc3M6IGBVcGRhdGVkIG9uIEFpcnRhYmxlYFxuXHRcdH0pO1xuXG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdPbkFpclRhYmxlKCkge1xuXHRcdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdFx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblx0XHRsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGF3YWl0IGJhc2UoJ3Rva2VuYmlkJykuY3JlYXRlKFtcblx0XHRcdHtcblx0XHRcdFx0XCJmaWVsZHNcIjoge1xuXHRcdFx0XHRcdFwiVG9rZW5pZFwiOiB0b2tlbklkLFxuXHRcdFx0XHRcdFwiRGF0ZVwiOiBjdXJyZW50RGF0ZSxcblx0XHRcdFx0XHRcIlVzZXJOYW1lXCI6IHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcIkJpZHByaWNlXCI6IEFtb3VudFxuXHRcdFx0XHR9XG5cdFx0XHR9XSk7XG5cdFx0dG9hc3Quc3VjY2VzcyhcIkJpZCBjcmVhdGVkIG9uIEFpcnRhYmxlXCIpO1xuXHRcdGF3YWl0IFVwZGF0ZUFpcnRhYmxlKCk7XG5cblx0fVxuXHRhc3luYyBmdW5jdGlvbiBVcGRhdGVBaXJ0YWJsZSgpIHtcblx0XHR2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuXHRcdHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cblx0XHRhd2FpdCBiYXNlKCduZnRzJykudXBkYXRlKFtcblx0XHRcdHtcblx0XHRcdFx0XCJpZFwiOiByZWNpZCxcblx0XHRcdFx0XCJmaWVsZHNcIjoge1xuXHRcdFx0XHRcdFwicHJpY2VcIjogQW1vdW50XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRhd2FpdCBiYXNlKCdldmVudGNhdGVnb3JpZXMnKS5zZWxlY3Qoe1xuXHRcdFx0XHRmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke3NlbGVjdGVkQ2F0ZWdvcnlbaV19JylgLFxuXHRcdFx0XHRzb3J0OiBbeyBmaWVsZDogXCJwcmljZVwiLCBkaXJlY3Rpb246IFwiZGVzY1wiIH1dLFxuXHRcdFx0XHR2aWV3OiBcIkdyaWQgdmlld1wiXG5cdFx0XHR9KS5lYWNoUGFnZShhc3luYyBmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcblx0XHRcdFx0Ly8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuXG5cdFx0XHRcdGF3YWl0IHJlY29yZHMuZm9yRWFjaChhc3luYyBmdW5jdGlvbiAocmVjb3JkKSB7XG5cdFx0XHRcdFx0dmFyIGV2ZW50Y2F0ZWdvcnlJRCA9IHJlY29yZC5pZDtcblx0XHRcdFx0XHRjb25zdCBwZXJwZWljZSA9IHBhcnNlSW50KE51bWJlcihyZWNvcmQuZ2V0KCdwcmljZScpKSAvIE51bWJlcihyZWNvcmQuZ2V0KCdhbW91bnQnKSkpO1xuXHRcdFx0XHRcdHZhciB1cGRhdGVkcHJpY2UgPSBOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAtIHBlcnBlaWNlO1xuXHRcdFx0XHRcdHZhciBVcGRhdGVkYW1vdW50ID0gTnVtYmVyKHJlY29yZC5nZXQoJ2Ftb3VudCcpKSAtIDE7XG5cdFx0XHRcdFx0YXdhaXQgYmFzZSgnZXZlbnRjYXRlZ29yaWVzJykudXBkYXRlKFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiBldmVudGNhdGVnb3J5SUQsXG5cdFx0XHRcdFx0XHRcdFwiZmllbGRzXCI6IHtcblx0XHRcdFx0XHRcdFx0XHRcInByaWNlXCI6IHVwZGF0ZWRwcmljZS50b1N0cmluZygpLFxuXHRcdFx0XHRcdFx0XHRcdFwiYW1vdW50XCI6IFVwZGF0ZWRhbW91bnQudG9TdHJpbmcoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVjb3JkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LCBmdW5jdGlvbiBkb25lKGVycikge1xuXHRcdFx0XHRpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG5cdFx0XHR9KTtcblx0XHRcdC8vXHRhd2FpdCBSZWR1Y2VDYXRlZ29yeShzZWxlY3RlZENhdGVnb3J5W2ldKTtcblx0XHR9XG5cblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVGJ5TkVBUigpIHtcblxuXHRcdHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG5cdFx0aWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSkge1xuXHRcdFx0YnV0dG9uUHJvcHMuaW5uZXJUZXh0ID0gXCJDb25uZWN0IHRvIE5FQVIgd2FsbGV0XCJcblx0XHRcdGF3YWl0IHRvYXN0Lndhcm4oXCJOb3QgY29ubmVjdGVkIHdpdGggTkVBUiB3YWxsZXQhIENvbm5lY3RpbmcuLi5cIik7XG5cdFx0XHRhd2FpdCB3aW5kb3cud2FsbGV0QWNjb3VudC5yZXF1ZXN0U2lnbkluKFxuXHRcdFx0XHR3aW5kb3cubmVhckNvbmZpZy5jb250cmFjdE5hbWUsXG5cdFx0XHRcdCdEZW1ldGVyJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIFdlIGNhbGwgc2F5IEhpIGFuZCB0aGVuIHVwZGF0ZSB3aG8gc2FpZCBIaSBsYXN0LlxuXHRcdC8vIHdpbmRvdy5jb250cmFjdC5zYXlIaSgpLnRoZW4odXBkYXRlV2hvU2FpZEhpKTtcblx0XHRjb25zdCBjb25maWcgPSB7XG5cdFx0XHRuZXR3b3JrSWQ6IFwidGVzdG5ldFwiLFxuXHRcdFx0a2V5U3RvcmU6IG5ldyBuZWFyQVBJLmtleVN0b3Jlcy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUoKSxcblx0XHRcdG5vZGVVcmw6IFwiaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdFx0d2FsbGV0VXJsOiBcImh0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmdcIixcblx0XHRcdGhlbHBlclVybDogXCJodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0XHRleHBsb3JlclVybDogXCJodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmdcIixcblx0XHR9O1xuXHRcdC8vIHNlbmRzIE5FQVIgdG9rZW5zXG5cdFx0Y29uc3QgbmVhciA9IGF3YWl0IG5lYXJBUEkuY29ubmVjdChjb25maWcpO1xuXHRcdGNvbnN0IGFjY291bnQgPSBhd2FpdCBuZWFyLmFjY291bnQod2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKSk7XG5cdFx0Y29uc3QgYW1vdW50SW5Zb2N0byA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCdmdWxsd2lkZScsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXG5cdFx0YXdhaXQgYWNjb3VudC5zZW5kTW9uZXkoXG5cdFx0XHRUb0FkZHJlc3MsIC8vIHJlY2VpdmVyIGFjY291bnRcblx0XHRcdGFtb3VudEluWW9jdG8gLy8gYW1vdW50IGluIHlvY3RvTkVBUlxuXHRcdCkuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3I6XCIsIGVycm9yKTtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdHJldHVybjtcblx0XHR9KVxuXHR9XG5cblxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlRieUNFTE8oKSB7XG5cdFx0dmFyIGJ1dHRvblByb3BzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0biBidG4tcHJpbWFyeVwiKVswXTtcblx0XHRpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyAhPSBudWxsICYmIHdpbmRvdy5ldGhlcmV1bS5uZXR3b3JrVmVyc2lvbiA9PSA0NDc4NyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiKSAhPSBcIlwiKSB7XG5cdFx0XHRjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdFx0XHRcIlRva2VuaWRcIjogdG9rZW5JZCxcblx0XHRcdFx0XCJEYXRlXCI6IGN1cnJlbnREYXRlLFxuXHRcdFx0XHRcIlVzZXJOYW1lXCI6IHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkudG9TdHJpbmcoKSxcblx0XHRcdFx0XCJCaWRwcmljZVwiOiBBbW91bnRcblx0XHRcdH1cblx0XG5cdFx0XHRsZXQgQ0VMT2luRnVsbCA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCdmdWxsd2lkZScsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXHRcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0Q2Vsby5jcmVhdGVCaWQodG9rZW5JZCwgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdCksIHtcblx0XHRcdFx0ZnJvbTogc2VuZGVyQWRkcmVzcyxcblx0XHRcdFx0Z2FzUHJpY2U6IDEwMDAwMDAwMDAwMCwgdmFsdWU6IENFTE9pbkZ1bGxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcdFx0XG5cdFx0fWVsc2V7XG5cdFx0XHRidXR0b25Qcm9wcy5pbm5lclRleHQgPSBcIkNvbm5lY3QgdG8gQ0VMTyB3YWxsZXRcIlxuXHRcdFx0YXdhaXQgdG9hc3Qud2FybihcIk5vdCBjb25uZWN0ZWQgd2l0aCBDRUxPIHdhbGxldCEgQ29ubmVjdGluZy4uLlwiKTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9sb2dpblsvZG9uYXRpb25dYDtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBjb25uZWN0ZWQgd2l0aCBDRUxPIHdhbGxldCFcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcblx0fVxuXG5cblxuXHRjb25zdCBzZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeV9pZCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiY2F0ZWdvcnlfaWRcIik7XG5cdFx0Y29uc29sZS5sb2coY2F0ZWdvcnlfaWQpO1xuXHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGVtcF9hcnIucHVzaChzZWxlY3RlZENhdGVnb3J5W2ldKTtcblx0XHR9XG5cdFx0dGVtcF9hcnIucHVzaChjYXRlZ29yeV9pZCk7XG5cdFx0Y29uc29sZS5sb2codGVtcF9hcnIpO1xuXG5cdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdH1cblx0Y29uc3QgdW5zZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeV9pZCkgPT4ge1xuXHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHNlbGVjdGVkQ2F0ZWdvcnlbaV0gIT0gY2F0ZWdvcnlfaWQpXG5cdFx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKHRlbXBfYXJyKTtcblx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0fVxuXG5cdGNvbnN0IHNlbGVjdEFsbENhdGVnb3J5ID0gKCkgPT4ge1xuXHRcdGlmIChhbGxTZWxlY3RlZCkge1xuXHRcdFx0c2V0QWxsU2VsZWN0ZWQoZmFsc2UpO1xuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeShbXSk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0c2V0QWxsU2VsZWN0ZWQodHJ1ZSk7XG5cdFx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0ZW1wX2Fyci5wdXNoKGNhdGVnb3JpZXNbaV0uaWQpXG5cdFx0XHR9XG5cdFx0XHR0ZW1wX2Fyci5wdXNoKC0xKTtcblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHRcdH1cblxuXHR9XG5cdGNvbnN0IG90aGVyU2VsZWN0ID0gKCkgPT4ge1xuXHRcdGlmIChvdGhlclNlbGVjdGVkKSB7XG5cdFx0XHRzZXRPdGhlclNlbGVjdGVkKGZhbHNlKTtcblx0XHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChzZWxlY3RlZENhdGVnb3J5W2ldICE9IC0xKVxuXHRcdFx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSlcblx0XHRcdH1cblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRPdGhlclNlbGVjdGVkKHRydWUpO1xuXHRcdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGVtcF9hcnIucHVzaChzZWxlY3RlZENhdGVnb3J5W2ldKVxuXHRcdFx0fVxuXHRcdFx0dGVtcF9hcnIucHVzaCgtMSk7XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0XHRvblNob3c9e2ZldGNoQ2F0ZWdvcmllc31cblx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0XHRjZW50ZXJlZFxuXHRcdFx0PlxuXHRcdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdFx0PGRpdiBpZD0nYWxlcnQnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cblx0XHRcdFx0XHRcdFx0e0FsZXJ0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5CaWQgQW1vdW50IGluIHt3YWxsZXRUeXBlfTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlbGVjdENhdGVnb3J5QWxsJz5cblx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q2hvb3NlIHdoZXJlIHlvdSB3YW50IHRvIGdpdmUgc3VwcG9ydDwvaDQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nOiBcIjVweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGJhY2tncm91bmQ6IFwiYmlzcXVlXCIsIGhlaWdodDogXCI0MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBvbkNsaWNrPXsoKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RBbGxDYXRlZ29yeSgpO1xuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgYWxpZ25TZWxmOiBcImNlbnRlclwiLCBjb2xvcjogXCJibGFja1wiIH19PlN1cHBvcnQgaW4gZ2VuZXJhbCA8L2g0PlxuXHRcdFx0XHRcdFx0XHRcdHthbGxTZWxlY3RlZCA/XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjEwcHhcIiwgdG9wOiBcIi03cHhcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PiA6XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjEwcHhcIiwgdG9wOiBcIi03cHhcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFVuc2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlbGVjdENhdGVnb3J5JyBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsIG1hcmdpblJpZ2h0OiBcIi0xMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdChzZWxlY3RlZENhdGVnb3J5LmluZGV4T2YoY2F0ZWdvcnkuaWQpICE9PSAtMSkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQoPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2NhdGVnb3J5LmlkfSBvbkNsaWNrPXsoKSA9PiB1bnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5LmlkKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiOHB4IDE1cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntjYXRlZ29yeS50aXRsZX08L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2NhdGVnb3J5LmltYWdlfSBzdHlsZT17eyBhc3BlY3RSYXRpbzogJzEnLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e2NhdGVnb3J5LmFtb3VudCAqIGNhdGVnb3J5LnByaWNlfSBVU0Q8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT4oe2NhdGVnb3J5LmFtb3VudH0gcGllY2VzKTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ICA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IFwiMTBweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0U2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Pilcblx0XHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2NhdGVnb3J5LmlkfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RDYXRlZ29yeShjYXRlZ29yeS5pZCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57Y2F0ZWdvcnkudGl0bGV9PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtjYXRlZ29yeS5pbWFnZX0gc3R5bGU9e3sgYXNwZWN0UmF0aW86ICcxJywgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntjYXRlZ29yeS5hbW91bnQgKiBjYXRlZ29yeS5wcmljZX0gVVNEPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtjYXRlZ29yeS5hbW91bnR9IHBpZWNlcyk8L2g1PlxuXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pXG5cdFx0XHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fSBvbkNsaWNrPXsoKSA9PiBvdGhlclNlbGVjdCgpfT5cblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQoY2F0ZWdvcmllcy5sZW5ndGggPiAwKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCg8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206IFwiMTVweFwiIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5PdGhlciBzdXBwb3J0PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG90aGVyQ2F0ZWdvcnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IFVTRDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHNlbGVjdGVkQ2F0ZWdvcnkuaW5kZXhPZigtMSkgIT09IC0xKSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTZweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFVuc2VsZWN0ZWRcIiAvPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PikgOiBudWxsXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0XHQ8L01vZGFsLkJvZHk+XG5cblx0XHRcdDwvTW9kYWw+XG5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJiZGNkMjcyNWNmNWM3ZWM1NjI1ZFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsIk1vZGFsIiwiRm9ybSIsIkJ1dHRvbiIsInRvYXN0IiwidXNlQ29udHJhY3QiLCJVc2VGb3JtSW5wdXQiLCJjcmVhdGVCaWQiLCJSZWR1Y2VDYXRlZ29yeSIsIkljb24iLCJnZXRDYXRlZ29yaWVzYnlldmVudGlkIiwiZXZlbnRnZXRieWlkIiwibmVhckFQSSIsIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsIlRvQWRkcmVzcyIsInRva2VuSWQiLCJyZWNpZCIsIlJlYWxFdmVudElkIiwiSGlnaGVzdGJpZCIsIndhbGxldFR5cGUiLCJjb250cmFjdCIsImNvbnRyYWN0Q2VsbyIsImV2ZW50SWQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwiQWxlcnQiLCJzZXRBbGVydCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIkFtb3VudCIsIkFtb3VudElucHV0IiwiRXZlbnRHb2FsIiwic2V0RXZlbnRHb2FsIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJhbGxTZWxlY3RlZCIsInNldEFsbFNlbGVjdGVkIiwib3RoZXJTZWxlY3RlZCIsInNldE90aGVyU2VsZWN0ZWQiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsIm90aGVyQ2F0ZWdvcnkiLCJzZXRPdGhlckNhdGVnb3J5IiwiYWN0aXZhdGVXYXJuaW5nTW9kYWwiLCJhbGVydEVMTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImZldGNoQ2F0ZWdvcmllcyIsImxlbmd0aCIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsIm1hcmtldFBhaXJzIiwicHJpY2UiLCJyZWNvcmQiLCJOdW1iZXIiLCJnZXQiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJ2aWV3IiwiZWFjaFBhZ2UiLCJwYWdlIiwicmVjb3JkcyIsImZldGNoTmV4dFBhZ2UiLCJzdW1vZm1haW4iLCJmb3JFYWNoIiwicHVzaCIsImZpZWxkcyIsImRvbmUiLCJiaWRORlQiLCJwcm9taXNlIiwiYmlkTkZUYnlDRUxPIiwicGVuZGluZyIsInN1Y2Nlc3MiLCJiaWRORlRieU5FQVIiLCJDcmVhdGluZ09uQWlyVGFibGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNyZWF0ZSIsIndhbGxldEFjY291bnQiLCJnZXRBY2NvdW50SWQiLCJ0b1N0cmluZyIsIlVwZGF0ZUFpcnRhYmxlIiwidXBkYXRlIiwiaSIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsImV2ZW50Y2F0ZWdvcnlJRCIsImlkIiwicGVycGVpY2UiLCJ1cGRhdGVkcHJpY2UiLCJVcGRhdGVkYW1vdW50IiwibG9nIiwiYnV0dG9uUHJvcHMiLCJpc1NpZ25lZEluIiwiaW5uZXJUZXh0Iiwid2FybiIsInJlcXVlc3RTaWduSW4iLCJuZWFyQ29uZmlnIiwiY29udHJhY3ROYW1lIiwiY29uZmlnIiwibmV0d29ya0lkIiwia2V5U3RvcmUiLCJrZXlTdG9yZXMiLCJCcm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUiLCJub2RlVXJsIiwid2FsbGV0VXJsIiwiaGVscGVyVXJsIiwiZXhwbG9yZXJVcmwiLCJjb25uZWN0IiwibmVhciIsImFjY291bnQiLCJhbW91bnRJbllvY3RvIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsInNlbmRNb25leSIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwibmV0d29ya1ZlcnNpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY3JlYXRlZE9iamVjdCIsIkNFTE9pbkZ1bGwiLCJmcm9tIiwic2VuZGVyQWRkcmVzcyIsImdhc1ByaWNlIiwidmFsdWUiLCJyZXN1bHQiLCJocmVmIiwiRXJyb3IiLCJzZWxlY3RDYXRlZ29yeSIsImNhdGVnb3J5X2lkIiwidGVtcF9hcnIiLCJ1bnNlbGVjdENhdGVnb3J5Iiwic2VsZWN0QWxsQ2F0ZWdvcnkiLCJvdGhlclNlbGVjdCIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJhbGlnblNlbGYiLCJjb2xvciIsInJpZ2h0IiwidG9wIiwibWFyZ2luVG9wIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImZsZXhXcmFwIiwiY2F0ZWdvcnkiLCJib3JkZXIiLCJ0ZXh0QWxpZ24iLCJ0aXRsZSIsImltYWdlIiwiYXNwZWN0UmF0aW8iLCJsaW5lSGVpZ2h0IiwiYW1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==