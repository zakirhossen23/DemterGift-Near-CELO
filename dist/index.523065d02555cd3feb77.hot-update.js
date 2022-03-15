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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");
/* harmony import */ var _components_common_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/common/Icon */ "./src/components/common/Icon/index.tsx");
/* harmony import */ var _pages_Events_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../pages/Events/event */ "./src/pages/Events/event.jsx");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_13__);

















function BidNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      ToAddress = _ref.ToAddress,
      tokenId = _ref.tokenId,
      recid = _ref.recid,
      RealEventId = _ref.RealEventId,
      Highestbid = _ref.Highestbid,
      walletType = _ref.walletType,
      eventId = _ref.eventId;

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  var base = new Airtable({
    apiKey: 'keyR1Rrcl9O2s9bTs'
  }).base('appgbRCpbkzmdcucO');

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_9__["default"])({
    type: 'text',
    placeholder: 'Amount'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      Amount = _UseFormInput2[0],
      AmountInput = _UseFormInput2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      EventGoal = _useState4[0],
      setEventGoal = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      categories = _useState6[0],
      setCategories = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      allSelected = _useState8[0],
      setAllSelected = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      otherSelected = _useState10[0],
      setOtherSelected = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      selectedCategory = _useState12[0],
      setSelectedCategory = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(-1),
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

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
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
              return react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.promise(bidNFTbyCELO, {
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
              return react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.promise(bidNFTbyNEAR, {
                pending: "Bidding...",
                error: "Please try again later",
                success: "Success!!!"
              });

            case 11:
              _context3.next = 13;
              return react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.promise(CreatingOnAirTable, {
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
              react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Bid created on Airtable");
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
              return react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.warn("Not connected with NEAR wallet! Connecting...");

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
                keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_13__.keyStores.BrowserLocalStorageKeyStore(),
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org"
              }; // sends NEAR tokens

              _context8.next = 11;
              return near_api_js__WEBPACK_IMPORTED_MODULE_13__.connect(config);

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
      var buttonProps, config, near, account, amountInYocto;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              buttonProps = document.getElementsByClassName("btn btn-primary")[0];

              if (!(window.walletAccount.isSignedIn() == false)) {
                _context9.next = 8;
                break;
              }

              buttonProps.innerText = "Connect to CELO wallet";
              _context9.next = 5;
              return react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.warn("Not connected with CELO wallet! Connecting...");

            case 5:
              window.location.href = "/login";
              throw new Error("Not connected with CELO wallet!");

            case 8:
              // We call say Hi and then update who said Hi last.
              // window.contract.sayHi().then(updateWhoSaidHi);
              config = {
                networkId: "testnet",
                keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_13__.keyStores.BrowserLocalStorageKeyStore(),
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org"
              }; // sends NEAR tokens

              _context9.next = 11;
              return near_api_js__WEBPACK_IMPORTED_MODULE_13__.connect(config);

            case 11:
              near = _context9.sent;
              _context9.next = 14;
              return near.account(walletAccount.getAccountId());

            case 14:
              account = _context9.sent;
              amountInYocto = (Number(Amount) * 1000000000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context9.next = 18;
              return account.sendMoney(ToAddress, // receiver account
              amountInYocto // amount in yoctoNEAR
              ).catch(function (error) {
                console.error("error:", error);
                console.log(error);
                return;
              });

            case 18:
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    show: show,
    onHide: onHide,
    onShow: fetchCategories,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_14__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_14__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_14__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    id: "alert",
    style: {
      display: 'none'
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_15__["default"].Label, null, "Bid Amount in ", walletType), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    className: "selectCategoryAll"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Choose where you want to give support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
    style: {
      alignSelf: "center",
      color: "black"
    }
  }, "Support in general "), allSelected ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    style: {
      position: "absolute",
      right: "10px",
      top: "-7px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    icon: "heartSelected"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    style: {
      position: "absolute",
      right: "10px",
      top: "-7px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    icon: "heartUnselected"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    className: "selectCategory",
    style: {
      marginLeft: "-10px",
      marginRight: "-10px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(categories).call(categories, function (category) {
    return _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4___default()(selectedCategory).call(selectedCategory, category.id) !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        width: "33%",
        padding: "0 10px",
        marginBottom: "10px"
      },
      key: category.id,
      onClick: function onClick() {
        return unselectCategory(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        background: "white",
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
      style: {
        marginBottom: "10px",
        color: "#151F28",
        textAlign: "center"
      }
    }, category.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("img", {
      src: category.image,
      style: {
        aspectRatio: '1',
        borderRadius: "5px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        marginTop: "10px",
        lineHeight: "14px"
      }
    }, category.amount * category.price, " USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        lineHeight: "14px"
      }
    }, "(", category.amount, " pieces)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      icon: "heartSelected"
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        width: "33%",
        padding: "0 10px",
        marginBottom: "10px"
      },
      key: category.id,
      onClick: function onClick() {
        return selectCategory(category.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        background: "white",
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
      style: {
        marginBottom: "10px",
        color: "#151F28",
        textAlign: "center"
      }
    }, category.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("img", {
      src: category.image,
      style: {
        aspectRatio: '1',
        borderRadius: "5px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        marginTop: "10px",
        lineHeight: "14px"
      }
    }, category.amount * category.price, " USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        lineHeight: "14px"
      }
    }, "(", category.amount, " pieces)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
      icon: "heartUnselected"
    })))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    style: {
      width: "33%",
      padding: "0 10px",
      display: "flex",
      flexDirection: "column"
    },
    onClick: function onClick() {
      return otherSelect();
    }
  }, categories.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    style: {
      background: "white",
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "5px",
      alignItems: "center",
      marginBottom: "15px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "#151F28",
      textAlign: "center"
    }
  }, "Other support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h5", {
    style: {
      color: "#151F28",
      textAlign: "center",
      marginTop: "10px",
      lineHeight: "14px"
    }
  }, otherCategory, " USD"), _babel_runtime_corejs3_core_js_stable_instance_index_of__WEBPACK_IMPORTED_MODULE_4___default()(selectedCategory).call(selectedCategory, -1) !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    icon: "heartSelected"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_11__.Icon, {
    icon: "heartUnselected"
  })))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT"))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2b793bce602a4ee36da1"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjUyMzA2NWQwMjU1NWNkM2ZlYjc3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2UsV0FBVCxPQVVaO0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsU0FPRSxRQVBGQSxTQU9FO0FBQUEsTUFORkMsT0FNRSxRQU5GQSxPQU1FO0FBQUEsTUFMRkMsS0FLRSxRQUxGQSxLQUtFO0FBQUEsTUFKRkMsV0FJRSxRQUpGQSxXQUlFO0FBQUEsTUFIRkMsVUFHRSxRQUhGQSxVQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFO0FBQUEsTUFERkMsT0FDRSxRQURGQSxPQUNFOztBQUNGLE1BQUlDLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyx5REFBRCxDQUF0Qjs7QUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBSUYsUUFBSixDQUFhO0FBQUVHLElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBQWIsRUFBOENELElBQTlDLENBQW1ELG1CQUFuRCxDQUFYOztBQUVBLGtCQUEwQjFCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBTzRCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLHNCQUE4QnRCLHlEQUFZLENBQUM7QUFDMUN1QixJQUFBQSxJQUFJLEVBQUUsTUFEb0M7QUFFMUNDLElBQUFBLFdBQVcsRUFBRTtBQUY2QixHQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsV0FBZjs7QUFJQSxtQkFBa0NqQywrQ0FBUSxDQUFDLENBQUQsQ0FBMUM7QUFBQTtBQUFBLE1BQU9rQyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFvQ25DLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBO0FBQUEsTUFBT29DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBR0EsbUJBQXNDckMsK0NBQVEsQ0FBQyxLQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPc0MsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBMEN2QywrQ0FBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU93QyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxvQkFBZ0R6QywrQ0FBUSxDQUFDLEVBQUQsQ0FBeEQ7QUFBQTtBQUFBLE1BQU8wQyxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBRUEsb0JBQTBDM0MsK0NBQVEsQ0FBQyxDQUFDLENBQUYsQ0FBbEQ7QUFBQTtBQUFBLE1BQU80QyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFFQSxXQUFTQyxvQkFBVCxHQUFnQztBQUMvQixRQUFJQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFmO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQ0csS0FBVCxHQUFpQixVQUFqQjtBQUNBckIsSUFBQUEsUUFBUSxrQ0FBMkJSLFVBQTNCLFdBQVI7QUFDQTs7QUF2QkMsV0F3QmE4QixlQXhCYjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxnTkF3QkY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNLZixVQUFVLENBQUNnQixNQUFYLElBQXFCLENBRDFCO0FBQUE7QUFBQTtBQUFBOztBQUVNQyxjQUFBQSxTQUZOLEdBRWtCLENBRmxCO0FBQUE7QUFJT0MsY0FBQUEsZUFKUCxHQUl5QixzSkFKekI7QUFLT0MsY0FBQUEsT0FMUCxHQUtpQjtBQUNiQyxnQkFBQUEsTUFBTSxFQUFFLEtBREs7QUFFYkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUNSLGtDQUFnQixrQkFEUjtBQUVSQyxrQkFBQUEsTUFBTSxFQUFFO0FBRkE7QUFGSSxlQUxqQjtBQUFBO0FBQUEscUJBWVNDLEtBQUssQ0FBQ0wsZUFBRCxFQUFrQkMsT0FBbEIsQ0FBTCxDQUFnQ0ssSUFBaEMsQ0FBcUMsVUFBQUMsR0FBRztBQUFBLHVCQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLGVBQXhDLEVBQ0pGLElBREksQ0FDQyxVQUFBRSxJQUFJO0FBQUEsdUJBQUlULFNBQVMsR0FBR1MsSUFBaEI7QUFBQSxlQURMLEVBRUpDLEtBRkksQ0FFRSxVQUFBQyxHQUFHO0FBQUEsdUJBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFdBQVdGLEdBQXpCLENBQUo7QUFBQSxlQUZMLENBWlQ7O0FBQUE7QUFlR1gsY0FBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNjLElBQVYsQ0FBZUMsV0FBZixDQUEyQixDQUEzQixFQUE4QkMsS0FBMUM7QUFmSDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWlCT2hCLGNBQUFBLFNBakJQLEdBaUJtQixDQWpCbkI7O0FBQUE7QUFBQSxvQkFvQk1uQixTQUFTLElBQUksQ0FwQm5CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBcUJTLHNHQUFBUixJQUFJLENBQUMsUUFBRCxDQUFKLGlCQUFvQkgsT0FBcEIsRUFBNkIsVUFBVXlDLEdBQVYsRUFBZU0sTUFBZixFQUF1QjtBQUN6RG5DLGdCQUFBQSxZQUFZLENBQUNvQyxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE1BQVgsQ0FBRCxDQUFQLENBQVo7QUFDQSxlQUZLLENBckJUOztBQUFBO0FBeUJFLGtCQUFJcEQsV0FBVyxJQUFJLENBQW5CLEVBQXNCO0FBQ3JCLG9CQUFJO0FBRUhNLGtCQUFBQSxJQUFJLENBQUMsaUJBQUQsQ0FBSixDQUF3QitDLE1BQXhCLENBQStCO0FBQzlCQyxvQkFBQUEsZUFBZSx5QkFBa0J0RCxXQUFsQixNQURlO0FBRTlCdUQsb0JBQUFBLElBQUksRUFBRTtBQUZ3QixtQkFBL0IsRUFHR0MsUUFISCxDQUdZLFNBQVNDLElBQVQsQ0FBY0MsT0FBZCxFQUF1QkMsYUFBdkIsRUFBc0M7QUFDakQsd0JBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBRixvQkFBQUEsT0FBTyxDQUFDRyxPQUFSLENBQWdCLFVBQVVYLE1BQVYsRUFBa0I7QUFDakNsQyxzQkFBQUEsVUFBVSxDQUFDOEMsSUFBWCxDQUFnQlosTUFBTSxDQUFDYSxNQUF2QjtBQUNBSCxzQkFBQUEsU0FBUyxJQUFJVCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsT0FBWCxDQUFELENBQU4sR0FBOEJELE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsUUFBWCxDQUFELENBQXJDLENBQW5CO0FBQ0EscUJBSEQ7QUFJQTNCLG9CQUFBQSxnQkFBZ0IsQ0FBQyx1RkFBU1gsU0FBUyxHQUFHbUIsU0FBckIsSUFBa0MyQixTQUFuQyxDQUFoQixDQU5pRCxDQVFqRDtBQUNBLG1CQVpELEVBWUcsU0FBU0ksSUFBVCxDQUFjcEIsR0FBZCxFQUFtQjtBQUNyQkMsb0JBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0EsbUJBZEQ7QUFlQSxpQkFqQkQsQ0FpQkUsT0FBT0UsS0FBUCxFQUFjLENBQUc7QUFDbkI7O0FBNUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBeEJFO0FBQUE7QUFBQTs7QUEwRUZqRSxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZmtELElBQUFBLGVBQWU7QUFDZixHQUZRLEVBRU4sQ0FBQ2YsVUFBRCxDQUZNLENBQVQ7O0FBMUVFLFdBNkVhaUQsTUE3RWI7QUFBQTtBQUFBOztBQUFBO0FBQUEsdU1BNkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDS2QsTUFBTSxDQUFDdkMsTUFBRCxDQUFOLEdBQWlCdUMsTUFBTSxDQUFDbEQsVUFBRCxDQUQ1QjtBQUFBO0FBQUE7QUFBQTs7QUFFRXlCLGNBQUFBLG9CQUFvQjtBQUZ0Qjs7QUFBQTtBQUFBLG9CQUtHeEIsVUFBVSxJQUFJLE1BTGpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBTU1oQix5REFBQSxDQUFjaUYsWUFBZCxFQUE0QjtBQUNoQ0MsZ0JBQUFBLE9BQU8sY0FEeUI7QUFFaEN0QixnQkFBQUEsS0FBSyxFQUFFLHdCQUZ5QjtBQUdoQ3VCLGdCQUFBQSxPQUFPO0FBSHlCLGVBQTVCLENBTk47O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsb0JBWVNuRSxVQUFVLElBQUksTUFadkI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFhT2hCLHlEQUFBLENBQWNvRixZQUFkLEVBQTRCO0FBQ2pDRixnQkFBQUEsT0FBTyxjQUQwQjtBQUVqQ3RCLGdCQUFBQSxLQUFLLEVBQUUsd0JBRjBCO0FBR2pDdUIsZ0JBQUFBLE9BQU87QUFIMEIsZUFBNUIsQ0FiUDs7QUFBQTtBQUFBO0FBQUEscUJBbUJPbkYseURBQUEsQ0FBY3FGLGtCQUFkLEVBQWtDO0FBQ3ZDSCxnQkFBQUEsT0FBTywyQkFEZ0M7QUFFdkN0QixnQkFBQUEsS0FBSyxFQUFFLHdCQUZnQztBQUd2Q3VCLGdCQUFBQSxPQUFPO0FBSGdDLGVBQWxDLENBbkJQOztBQUFBO0FBeUJDRyxjQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0FGLGNBQUFBLE1BQU0sQ0FBQzVDLFFBQVAsQ0FBZ0IrQyxzQkFBaEIsQ0FBdUMsV0FBdkMsRUFBb0QsQ0FBcEQsRUFBdURDLEtBQXZEOztBQTFCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTdFRTtBQUFBO0FBQUE7O0FBQUEsV0F5R2FMLGtCQXpHYjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtTkF5R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0tuRSxjQUFBQSxRQURMLEdBQ2dCQyxtQkFBTyxDQUFDLHlEQUFELENBRHZCO0FBRUtDLGNBQUFBLElBRkwsR0FFWSxJQUFJRixRQUFKLENBQWE7QUFBRUcsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQWIsRUFBOENELElBQTlDLENBQW1ELG1CQUFuRCxDQUZaO0FBR0t1RSxjQUFBQSxXQUhMLEdBR21CLElBQUlDLElBQUosRUFIbkI7QUFBQTtBQUFBLHFCQUlPeEUsSUFBSSxDQUFDLFVBQUQsQ0FBSixDQUFpQnlFLE1BQWpCLENBQXdCLENBQzdCO0FBQ0MsMEJBQVU7QUFDVCw2QkFBV2pGLE9BREY7QUFFVCwwQkFBUStFLFdBRkM7QUFHVCw4QkFBWUcsYUFBYSxDQUFDQyxZQUFkLEdBQTZCQyxRQUE3QixFQUhIO0FBSVQsOEJBQVl0RTtBQUpIO0FBRFgsZUFENkIsQ0FBeEIsQ0FKUDs7QUFBQTtBQWFDMUIsY0FBQUEseURBQUEsQ0FBYyx5QkFBZDtBQWJEO0FBQUEscUJBY09pRyxjQUFjLEVBZHJCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBekdFO0FBQUE7QUFBQTs7QUFBQSxXQTBIYUEsY0ExSGI7QUFBQTtBQUFBOztBQUFBO0FBQUEsK01BMEhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNLL0UsY0FBQUEsUUFETCxHQUNnQkMsbUJBQU8sQ0FBQyx5REFBRCxDQUR2QjtBQUVLQyxjQUFBQSxJQUZMLEdBRVksSUFBSUYsUUFBSixDQUFhO0FBQUVHLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUFiLEVBQThDRCxJQUE5QyxDQUFtRCxtQkFBbkQsQ0FGWjtBQUFBO0FBQUEscUJBSU9BLElBQUksQ0FBQyxNQUFELENBQUosQ0FBYThFLE1BQWIsQ0FBb0IsQ0FDekI7QUFDQyxzQkFBTXJGLEtBRFA7QUFFQywwQkFBVTtBQUNULDJCQUFTYTtBQURBO0FBRlgsZUFEeUIsQ0FBcEIsQ0FKUDs7QUFBQTtBQWFVeUUsY0FBQUEsQ0FiVixHQWFjLENBYmQ7O0FBQUE7QUFBQSxvQkFhaUJBLENBQUMsR0FBRy9ELGdCQUFnQixDQUFDVSxNQWJ0QztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQWVRMUIsSUFBSSxDQUFDLGlCQUFELENBQUosQ0FBd0IrQyxNQUF4QixDQUErQjtBQUNwQ0MsZ0JBQUFBLGVBQWUscUJBQWNoQyxnQkFBZ0IsQ0FBQytELENBQUQsQ0FBOUIsT0FEcUI7QUFFcENDLGdCQUFBQSxJQUFJLEVBQUUsQ0FBQztBQUFFQyxrQkFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JDLGtCQUFBQSxTQUFTLEVBQUU7QUFBN0IsaUJBQUQsQ0FGOEI7QUFHcENqQyxnQkFBQUEsSUFBSSxFQUFFO0FBSDhCLGVBQS9CLEVBSUhDLFFBSkc7QUFBQSxxTkFJTSxrQkFBb0JFLE9BQXBCLEVBQTZCQyxhQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FHTEQsT0FBTyxDQUFDRyxPQUFSO0FBQUEsaU9BQWdCLGtCQUFnQlgsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCdUMsc0NBQUFBLGVBRGlCLEdBQ0N2QyxNQUFNLENBQUN3QyxFQURSO0FBRWZDLHNDQUFBQSxRQUZlLEdBRUosdUZBQVN4QyxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE9BQVgsQ0FBRCxDQUFOLEdBQThCRCxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFFBQVgsQ0FBRCxDQUE3QyxDQUZJO0FBR2pCd0Msc0NBQUFBLFlBSGlCLEdBR0Z6QyxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE9BQVgsQ0FBRCxDQUFOLEdBQThCdUMsUUFINUI7QUFJakJFLHNDQUFBQSxhQUppQixHQUlEMUMsTUFBTSxDQUFDRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxRQUFYLENBQUQsQ0FBTixHQUErQixDQUo5QjtBQUFBO0FBQUEsNkNBS2Y5QyxJQUFJLENBQUMsaUJBQUQsQ0FBSixDQUF3QjhFLE1BQXhCLENBQStCLENBQ3BDO0FBQ0MsOENBQU1LLGVBRFA7QUFFQyxrREFBVTtBQUNULG1EQUFTRyxZQUFZLENBQUNWLFFBQWIsRUFEQTtBQUVULG9EQUFVVyxhQUFhLENBQUNYLFFBQWQ7QUFGRDtBQUZYLHVDQURvQyxDQUEvQixDQUxlOztBQUFBO0FBY3JCckMsc0NBQUFBLE9BQU8sQ0FBQ2lELEdBQVIsQ0FBWTVDLE1BQVo7O0FBZHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFISzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKTjs7QUFBQSx5QkFJcUJPLElBSnJCO0FBQUE7QUFBQTs7QUFBQSx1QkFJcUJBLElBSnJCO0FBQUEsbUJBdUJILFNBQVNPLElBQVQsQ0FBY3BCLEdBQWQsRUFBbUI7QUFDckIsb0JBQUlBLEdBQUosRUFBUztBQUFFQyxrQkFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFBb0I7QUFBUztBQUN4QyxlQXpCSyxDQWZSOztBQUFBO0FBYThDeUMsY0FBQUEsQ0FBQyxFQWIvQztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0ExSEU7QUFBQTtBQUFBOztBQUFBLFdBd0thZixZQXhLYjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2TUF3S0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUt5QixjQUFBQSxXQUZMLEdBRW1CbkUsUUFBUSxDQUFDK0Msc0JBQVQsQ0FBZ0MsaUJBQWhDLEVBQW1ELENBQW5ELENBRm5COztBQUFBLG9CQUdLSCxNQUFNLENBQUNRLGFBQVAsQ0FBcUJnQixVQUFyQixNQUFxQyxLQUgxQztBQUFBO0FBQUE7QUFBQTs7QUFJRUQsY0FBQUEsV0FBVyxDQUFDRSxTQUFaLEdBQXdCLHdCQUF4QjtBQUpGO0FBQUEscUJBS1EvRyxzREFBQSxDQUFXLCtDQUFYLENBTFI7O0FBQUE7QUFBQTtBQUFBLHFCQU1Rc0YsTUFBTSxDQUFDUSxhQUFQLENBQXFCbUIsYUFBckIsQ0FDTDNCLE1BQU0sQ0FBQzRCLFVBQVAsQ0FBa0JDLFlBRGIsRUFFTCxTQUZLLENBTlI7O0FBQUE7QUFBQTs7QUFBQTtBQVdDO0FBQ0E7QUFDTUMsY0FBQUEsTUFiUCxHQWFnQjtBQUNkQyxnQkFBQUEsU0FBUyxFQUFFLFNBREc7QUFFZEMsZ0JBQUFBLFFBQVEsRUFBRSxJQUFJL0csK0VBQUosRUFGSTtBQUdka0gsZ0JBQUFBLE9BQU8sRUFBRSw4QkFISztBQUlkQyxnQkFBQUEsU0FBUyxFQUFFLGlDQUpHO0FBS2RDLGdCQUFBQSxTQUFTLEVBQUUsaUNBTEc7QUFNZEMsZ0JBQUFBLFdBQVcsRUFBRTtBQU5DLGVBYmhCLEVBcUJDOztBQXJCRDtBQUFBLHFCQXNCb0JySCxpREFBQSxDQUFnQjZHLE1BQWhCLENBdEJwQjs7QUFBQTtBQXNCT1UsY0FBQUEsSUF0QlA7QUFBQTtBQUFBLHFCQXVCdUJBLElBQUksQ0FBQ0MsT0FBTCxDQUFhakMsYUFBYSxDQUFDQyxZQUFkLEVBQWIsQ0F2QnZCOztBQUFBO0FBdUJPZ0MsY0FBQUEsT0F2QlA7QUF3Qk9DLGNBQUFBLGFBeEJQLEdBd0J1QixDQUFDL0QsTUFBTSxDQUFDdkMsTUFBRCxDQUFOLEdBQWlCLHlCQUFsQixFQUE2Q3VHLGNBQTdDLENBQTRELFVBQTVELEVBQXdFO0FBQUVDLGdCQUFBQSxXQUFXLEVBQUU7QUFBZixlQUF4RSxDQXhCdkI7QUFBQTtBQUFBLHFCQTBCT0gsT0FBTyxDQUFDSSxTQUFSLENBQ0x4SCxTQURLLEVBQ007QUFDWHFILGNBQUFBLGFBRkssQ0FFUztBQUZULGdCQUdKdkUsS0FISSxDQUdFLFVBQUNHLEtBQUQsRUFBVztBQUNsQkQsZ0JBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFFBQWQsRUFBd0JBLEtBQXhCO0FBQ0FELGdCQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVloRCxLQUFaO0FBQ0E7QUFDQSxlQVBLLENBMUJQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBeEtFO0FBQUE7QUFBQTs7QUFBQSxXQTZNYXFCLFlBN01iO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZNQTZNRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSzRCLGNBQUFBLFdBRkwsR0FFbUJuRSxRQUFRLENBQUMrQyxzQkFBVCxDQUFnQyxpQkFBaEMsRUFBbUQsQ0FBbkQsQ0FGbkI7O0FBQUEsb0JBR0tILE1BQU0sQ0FBQ1EsYUFBUCxDQUFxQmdCLFVBQXJCLE1BQXFDLEtBSDFDO0FBQUE7QUFBQTtBQUFBOztBQUlFRCxjQUFBQSxXQUFXLENBQUNFLFNBQVosR0FBd0Isd0JBQXhCO0FBSkY7QUFBQSxxQkFLUS9HLHNEQUFBLENBQVcsK0NBQVgsQ0FMUjs7QUFBQTtBQU1Fc0YsY0FBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCNkMsSUFBaEIsR0FBcUIsUUFBckI7QUFORixvQkFPUSxJQUFJQyxLQUFKLENBQVUsaUNBQVYsQ0FQUjs7QUFBQTtBQVVDO0FBQ0E7QUFDTWpCLGNBQUFBLE1BWlAsR0FZZ0I7QUFDZEMsZ0JBQUFBLFNBQVMsRUFBRSxTQURHO0FBRWRDLGdCQUFBQSxRQUFRLEVBQUUsSUFBSS9HLCtFQUFKLEVBRkk7QUFHZGtILGdCQUFBQSxPQUFPLEVBQUUsOEJBSEs7QUFJZEMsZ0JBQUFBLFNBQVMsRUFBRSxpQ0FKRztBQUtkQyxnQkFBQUEsU0FBUyxFQUFFLGlDQUxHO0FBTWRDLGdCQUFBQSxXQUFXLEVBQUU7QUFOQyxlQVpoQixFQW9CQzs7QUFwQkQ7QUFBQSxxQkFxQm9CckgsaURBQUEsQ0FBZ0I2RyxNQUFoQixDQXJCcEI7O0FBQUE7QUFxQk9VLGNBQUFBLElBckJQO0FBQUE7QUFBQSxxQkFzQnVCQSxJQUFJLENBQUNDLE9BQUwsQ0FBYWpDLGFBQWEsQ0FBQ0MsWUFBZCxFQUFiLENBdEJ2Qjs7QUFBQTtBQXNCT2dDLGNBQUFBLE9BdEJQO0FBdUJPQyxjQUFBQSxhQXZCUCxHQXVCdUIsQ0FBQy9ELE1BQU0sQ0FBQ3ZDLE1BQUQsQ0FBTixHQUFpQix5QkFBbEIsRUFBNkN1RyxjQUE3QyxDQUE0RCxVQUE1RCxFQUF3RTtBQUFFQyxnQkFBQUEsV0FBVyxFQUFFO0FBQWYsZUFBeEUsQ0F2QnZCO0FBQUE7QUFBQSxxQkF5Qk9ILE9BQU8sQ0FBQ0ksU0FBUixDQUNMeEgsU0FESyxFQUNNO0FBQ1hxSCxjQUFBQSxhQUZLLENBRVM7QUFGVCxnQkFHSnZFLEtBSEksQ0FHRSxVQUFDRyxLQUFELEVBQVc7QUFDbEJELGdCQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxRQUFkLEVBQXdCQSxLQUF4QjtBQUNBRCxnQkFBQUEsT0FBTyxDQUFDaUQsR0FBUixDQUFZaEQsS0FBWjtBQUNBO0FBQ0EsZUFQSyxDQXpCUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTdNRTtBQUFBO0FBQUE7O0FBcVBGLE1BQU0wRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFdBQUQsRUFBaUI7QUFDdkM1RSxJQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVksYUFBWjtBQUNBakQsSUFBQUEsT0FBTyxDQUFDaUQsR0FBUixDQUFZMkIsV0FBWjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSXJDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcvRCxnQkFBZ0IsQ0FBQ1UsTUFBckMsRUFBNkNxRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2pEcUMsTUFBQUEsUUFBUSxDQUFDNUQsSUFBVCxDQUFjeEMsZ0JBQWdCLENBQUMrRCxDQUFELENBQTlCO0FBQ0E7O0FBQ0RxQyxJQUFBQSxRQUFRLENBQUM1RCxJQUFULENBQWMyRCxXQUFkO0FBQ0E1RSxJQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVk0QixRQUFaO0FBRUFuRyxJQUFBQSxtQkFBbUIsQ0FBQ21HLFFBQUQsQ0FBbkI7QUFDQSxHQVhEOztBQVlBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0YsV0FBRCxFQUFpQjtBQUN6QyxRQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxTQUFLLElBQUlyQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHL0QsZ0JBQWdCLENBQUNVLE1BQXJDLEVBQTZDcUQsQ0FBQyxFQUE5QyxFQUFrRDtBQUNqRCxVQUFJL0QsZ0JBQWdCLENBQUMrRCxDQUFELENBQWhCLElBQXVCb0MsV0FBM0IsRUFDQ0MsUUFBUSxDQUFDNUQsSUFBVCxDQUFjeEMsZ0JBQWdCLENBQUMrRCxDQUFELENBQTlCO0FBQ0Q7O0FBQ0R4QyxJQUFBQSxPQUFPLENBQUNpRCxHQUFSLENBQVk0QixRQUFaO0FBQ0FuRyxJQUFBQSxtQkFBbUIsQ0FBQ21HLFFBQUQsQ0FBbkI7QUFDQSxHQVJEOztBQVVBLE1BQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUMvQixRQUFJMUcsV0FBSixFQUFpQjtBQUNoQkMsTUFBQUEsY0FBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBSSxNQUFBQSxtQkFBbUIsQ0FBQyxFQUFELENBQW5CO0FBQ0EsS0FIRCxNQUdPO0FBRU5KLE1BQUFBLGNBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQSxVQUFJdUcsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsV0FBSyxJQUFJckMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3JFLFVBQVUsQ0FBQ2dCLE1BQS9CLEVBQXVDcUQsQ0FBQyxFQUF4QyxFQUE0QztBQUMzQ3FDLFFBQUFBLFFBQVEsQ0FBQzVELElBQVQsQ0FBYzlDLFVBQVUsQ0FBQ3FFLENBQUQsQ0FBVixDQUFjSyxFQUE1QjtBQUNBOztBQUNEZ0MsTUFBQUEsUUFBUSxDQUFDNUQsSUFBVCxDQUFjLENBQUMsQ0FBZjtBQUNBdkMsTUFBQUEsbUJBQW1CLENBQUNtRyxRQUFELENBQW5CO0FBQ0E7QUFFRCxHQWZEOztBQWdCQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCLFFBQUl6RyxhQUFKLEVBQW1CO0FBQ2xCQyxNQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0EsVUFBSXFHLFFBQVEsR0FBRyxFQUFmOztBQUNBLFdBQUssSUFBSXJDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcvRCxnQkFBZ0IsQ0FBQ1UsTUFBckMsRUFBNkNxRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2pELFlBQUkvRCxnQkFBZ0IsQ0FBQytELENBQUQsQ0FBaEIsSUFBdUIsQ0FBQyxDQUE1QixFQUNDcUMsUUFBUSxDQUFDNUQsSUFBVCxDQUFjeEMsZ0JBQWdCLENBQUMrRCxDQUFELENBQTlCO0FBQ0Q7O0FBQ0Q5RCxNQUFBQSxtQkFBbUIsQ0FBQ21HLFFBQUQsQ0FBbkI7QUFDQSxLQVJELE1BUU87QUFDTnJHLE1BQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQSxVQUFJcUcsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsV0FBSyxJQUFJckMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRy9ELGdCQUFnQixDQUFDVSxNQUFyQyxFQUE2Q3FELENBQUMsRUFBOUMsRUFBa0Q7QUFDakRxQyxRQUFBQSxRQUFRLENBQUM1RCxJQUFULENBQWN4QyxnQkFBZ0IsQ0FBQytELENBQUQsQ0FBOUI7QUFDQTs7QUFDRHFDLE1BQUFBLFFBQVEsQ0FBQzVELElBQVQsQ0FBYyxDQUFDLENBQWY7QUFDQXZDLE1BQUFBLG1CQUFtQixDQUFDbUcsUUFBRCxDQUFuQjtBQUNBO0FBQ0QsR0FsQkQ7O0FBbUJBLHNCQUNDLGlIQUNDLGlEQUFDLDhEQUFEO0FBQ0MsUUFBSSxFQUFFL0gsSUFEUDtBQUVDLFVBQU0sRUFBRUMsTUFGVDtBQUdDLFVBQU0sRUFBRW1DLGVBSFQ7QUFJQyx1QkFBZ0IsK0JBSmpCO0FBS0MsWUFBUTtBQUxULGtCQU9DLGlEQUFDLHFFQUFEO0FBQWMsZUFBVztBQUF6QixrQkFDQyxpREFBQyxvRUFBRDtBQUFhLE1BQUUsRUFBQztBQUFoQixlQURELENBUEQsZUFZQyxpREFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBQztBQUF0QixrQkFDQyxpREFBQyw2REFBRCxxQkFDQztBQUFLLE1BQUUsRUFBQyxPQUFSO0FBQWdCLFNBQUssRUFBRTtBQUFFK0YsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBdkI7QUFBNEMsYUFBUyxFQUFDLG9CQUF0RDtBQUEyRSxRQUFJLEVBQUM7QUFBaEYsS0FDRXRILEtBREYsQ0FERCxlQUlDLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxtRUFBRCwwQkFBMkJOLFVBQTNCLENBREQsRUFFRVcsV0FGRixDQUpELGVBUUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLFNBQUssRUFBRTtBQUFFa0gsTUFBQUEsWUFBWSxFQUFFO0FBQWhCO0FBQVgsNkNBREQsZUFFQztBQUFLLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsT0FBTyxFQUFFLEtBQTFCO0FBQWlDSCxNQUFBQSxPQUFPLEVBQUUsTUFBMUM7QUFBa0RJLE1BQUFBLGNBQWMsRUFBRSxRQUFsRTtBQUE0RUMsTUFBQUEsVUFBVSxFQUFFLFFBQXhGO0FBQWtHQyxNQUFBQSxRQUFRLEVBQUUsVUFBNUc7QUFBd0hDLE1BQUFBLFVBQVUsRUFBRSxRQUFwSTtBQUE4SUMsTUFBQUEsTUFBTSxFQUFFLE1BQXRKO0FBQThKQyxNQUFBQSxZQUFZLEVBQUUsS0FBNUs7QUFBbUxSLE1BQUFBLFlBQVksRUFBRTtBQUFqTSxLQUFaO0FBQXVOLFdBQU8sRUFBRSxtQkFBTTtBQUVyT0gsTUFBQUEsaUJBQWlCO0FBQ2pCO0FBSEQsa0JBSUM7QUFBSSxTQUFLLEVBQUU7QUFBRVksTUFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJDLE1BQUFBLEtBQUssRUFBRTtBQUE5QjtBQUFYLDJCQUpELEVBS0V2SCxXQUFXLGdCQUNYO0FBQUssU0FBSyxFQUFFO0FBQUVrSCxNQUFBQSxRQUFRLEVBQUUsVUFBWjtBQUF3Qk0sTUFBQUEsS0FBSyxFQUFFLE1BQS9CO0FBQXVDQyxNQUFBQSxHQUFHLEVBQUU7QUFBNUM7QUFBWixrQkFDQztBQUFLLFNBQUssRUFBRTtBQUNYQyxNQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYZCxNQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYRSxNQUFBQSxLQUFLLEVBQUUsTUFISTtBQUlYTSxNQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixNQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxNQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixNQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxNQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixNQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLGtCQVVHLGlEQUFDLDBEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsSUFWSCxDQURELENBRFcsZ0JBY1g7QUFBSyxTQUFLLEVBQUU7QUFBRUQsTUFBQUEsUUFBUSxFQUFFLFVBQVo7QUFBd0JNLE1BQUFBLEtBQUssRUFBRSxNQUEvQjtBQUF1Q0MsTUFBQUEsR0FBRyxFQUFFO0FBQTVDO0FBQVosa0JBQ0M7QUFBSyxTQUFLLEVBQUU7QUFDWEMsTUFBQUEsU0FBUyxFQUFFLE1BREE7QUFFWGQsTUFBQUEsT0FBTyxFQUFFLE1BRkU7QUFHWEUsTUFBQUEsS0FBSyxFQUFFLE1BSEk7QUFJWE0sTUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEosTUFBQUEsY0FBYyxFQUFFLFFBTEw7QUFNWFcsTUFBQUEsYUFBYSxFQUFFLFFBTko7QUFPWFYsTUFBQUEsVUFBVSxFQUFFLFFBUEQ7QUFRWEksTUFBQUEsWUFBWSxFQUFFLE1BUkg7QUFTWEYsTUFBQUEsVUFBVSxFQUFFO0FBVEQ7QUFBWixrQkFVRyxpREFBQywwREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLElBVkgsQ0FERCxDQW5CRixDQUZELENBUkQsZUE0Q0M7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsU0FBSyxFQUFFO0FBQUVTLE1BQUFBLFVBQVUsRUFBRSxPQUFkO0FBQXVCQyxNQUFBQSxXQUFXLEVBQUUsT0FBcEM7QUFBNkNqQixNQUFBQSxPQUFPLEVBQUUsTUFBdEQ7QUFBOERlLE1BQUFBLGFBQWEsRUFBRSxLQUE3RTtBQUFvRkcsTUFBQUEsUUFBUSxFQUFFO0FBQTlGO0FBQXZDLEtBRUUsMEZBQUFoSSxVQUFVLE1BQVYsQ0FBQUEsVUFBVSxFQUFLLFVBQUNpSSxRQUFEO0FBQUEsV0FDYiwrRkFBQTNILGdCQUFnQixNQUFoQixDQUFBQSxnQkFBZ0IsRUFBUzJILFFBQVEsQ0FBQ3ZELEVBQWxCLENBQWhCLEtBQTBDLENBQUMsQ0FBNUMsZ0JBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRXNDLFFBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCQyxRQUFBQSxPQUFPLEVBQUUsUUFBekI7QUFBbUNGLFFBQUFBLFlBQVksRUFBRTtBQUFqRCxPQUFaO0FBQXVFLFNBQUcsRUFBRWtCLFFBQVEsQ0FBQ3ZELEVBQXJGO0FBQXlGLGFBQU8sRUFBRTtBQUFBLGVBQU1pQyxnQkFBZ0IsQ0FBQ3NCLFFBQVEsQ0FBQ3ZELEVBQVYsQ0FBdEI7QUFBQTtBQUFsRyxvQkFDQTtBQUFLLFdBQUssRUFBRTtBQUFFMkMsUUFBQUEsVUFBVSxFQUFFLE9BQWQ7QUFBdUJKLFFBQUFBLE9BQU8sRUFBRSxVQUFoQztBQUE0Q2lCLFFBQUFBLE1BQU0sRUFBRSx1QkFBcEQ7QUFBNkVYLFFBQUFBLFlBQVksRUFBRSxLQUEzRjtBQUFrR0osUUFBQUEsVUFBVSxFQUFFO0FBQTlHO0FBQVosb0JBQ0M7QUFBSSxXQUFLLEVBQUU7QUFBRUosUUFBQUEsWUFBWSxFQUFFLE1BQWhCO0FBQXdCVSxRQUFBQSxLQUFLLEVBQUUsU0FBL0I7QUFBMENVLFFBQUFBLFNBQVMsRUFBRTtBQUFyRDtBQUFYLE9BQTZFRixRQUFRLENBQUNHLEtBQXRGLENBREQsZUFFQztBQUFLLFNBQUcsRUFBRUgsUUFBUSxDQUFDSSxLQUFuQjtBQUEwQixXQUFLLEVBQUU7QUFBRUMsUUFBQUEsV0FBVyxFQUFFLEdBQWY7QUFBb0JmLFFBQUFBLFlBQVksRUFBRTtBQUFsQztBQUFqQyxNQUZELGVBR0M7QUFBSSxXQUFLLEVBQUU7QUFBRUUsUUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JVLFFBQUFBLFNBQVMsRUFBRSxRQUEvQjtBQUF5Q1AsUUFBQUEsU0FBUyxFQUFFLE1BQXBEO0FBQTREVyxRQUFBQSxVQUFVLEVBQUU7QUFBeEU7QUFBWCxPQUE4Rk4sUUFBUSxDQUFDTyxNQUFULEdBQWtCUCxRQUFRLENBQUNoRyxLQUF6SCxTQUhELGVBSUM7QUFBSSxXQUFLLEVBQUU7QUFBRXdGLFFBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CVSxRQUFBQSxTQUFTLEVBQUUsUUFBL0I7QUFBeUNJLFFBQUFBLFVBQVUsRUFBRTtBQUFyRDtBQUFYLFlBQTRFTixRQUFRLENBQUNPLE1BQXJGLGFBSkQsZUFLQztBQUFLLFdBQUssRUFBRTtBQUFFMUIsUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJJLFFBQUFBLGNBQWMsRUFBRTtBQUFuQztBQUFaLG9CQUNDO0FBQUssV0FBSyxFQUFFO0FBQ1hVLFFBQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLFFBQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLFFBQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLFFBQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLFFBQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLFFBQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLFFBQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLFFBQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLFFBQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosb0JBV0csaURBQUMsMERBQUQ7QUFBTSxVQUFJLEVBQUM7QUFBWCxNQVhILENBREQsQ0FMRCxDQURBLENBREYsZ0JBd0JFO0FBQUssV0FBSyxFQUFFO0FBQUVMLFFBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCQyxRQUFBQSxPQUFPLEVBQUUsUUFBekI7QUFBbUNGLFFBQUFBLFlBQVksRUFBRTtBQUFqRCxPQUFaO0FBQXVFLFNBQUcsRUFBRWtCLFFBQVEsQ0FBQ3ZELEVBQXJGO0FBQXlGLGFBQU8sRUFBRTtBQUFBLGVBQU04QixjQUFjLENBQUN5QixRQUFRLENBQUN2RCxFQUFWLENBQXBCO0FBQUE7QUFBbEcsb0JBQ0E7QUFBSyxXQUFLLEVBQUU7QUFBRTJDLFFBQUFBLFVBQVUsRUFBRSxPQUFkO0FBQXVCSixRQUFBQSxPQUFPLEVBQUUsVUFBaEM7QUFBNENpQixRQUFBQSxNQUFNLEVBQUUsdUJBQXBEO0FBQTZFWCxRQUFBQSxZQUFZLEVBQUUsS0FBM0Y7QUFBa0dKLFFBQUFBLFVBQVUsRUFBRTtBQUE5RztBQUFaLG9CQUNDO0FBQUksV0FBSyxFQUFFO0FBQUVKLFFBQUFBLFlBQVksRUFBRSxNQUFoQjtBQUF3QlUsUUFBQUEsS0FBSyxFQUFFLFNBQS9CO0FBQTBDVSxRQUFBQSxTQUFTLEVBQUU7QUFBckQ7QUFBWCxPQUE2RUYsUUFBUSxDQUFDRyxLQUF0RixDQURELGVBRUM7QUFBSyxTQUFHLEVBQUVILFFBQVEsQ0FBQ0ksS0FBbkI7QUFBMEIsV0FBSyxFQUFFO0FBQUVDLFFBQUFBLFdBQVcsRUFBRSxHQUFmO0FBQW9CZixRQUFBQSxZQUFZLEVBQUU7QUFBbEM7QUFBakMsTUFGRCxlQUdDO0FBQUksV0FBSyxFQUFFO0FBQUVFLFFBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CVSxRQUFBQSxTQUFTLEVBQUUsUUFBL0I7QUFBeUNQLFFBQUFBLFNBQVMsRUFBRSxNQUFwRDtBQUE0RFcsUUFBQUEsVUFBVSxFQUFFO0FBQXhFO0FBQVgsT0FBOEZOLFFBQVEsQ0FBQ08sTUFBVCxHQUFrQlAsUUFBUSxDQUFDaEcsS0FBekgsU0FIRCxlQUlDO0FBQUksV0FBSyxFQUFFO0FBQUV3RixRQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQlUsUUFBQUEsU0FBUyxFQUFFLFFBQS9CO0FBQXlDSSxRQUFBQSxVQUFVLEVBQUU7QUFBckQ7QUFBWCxZQUE0RU4sUUFBUSxDQUFDTyxNQUFyRixhQUpELGVBT0M7QUFBSyxXQUFLLEVBQUU7QUFBRTFCLFFBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CSSxRQUFBQSxjQUFjLEVBQUU7QUFBbkM7QUFBWixvQkFDQztBQUFLLFdBQUssRUFBRTtBQUNYVSxRQUFBQSxTQUFTLEVBQUUsTUFEQTtBQUVYZCxRQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYRSxRQUFBQSxLQUFLLEVBQUUsTUFISTtBQUlYTSxRQUFBQSxNQUFNLEVBQUUsTUFKRztBQUtYSixRQUFBQSxjQUFjLEVBQUUsUUFMTDtBQU1YVyxRQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixRQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxRQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixRQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLG9CQVVHLGlEQUFDLDBEQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVgsTUFWSCxDQURELENBUEQsQ0FEQSxDQXpCWTtBQUFBLEdBQUwsQ0FGWixlQW9EQztBQUFLLFNBQUssRUFBRTtBQUFFTCxNQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkMsTUFBQUEsT0FBTyxFQUFFLFFBQXpCO0FBQW1DSCxNQUFBQSxPQUFPLEVBQUUsTUFBNUM7QUFBb0RlLE1BQUFBLGFBQWEsRUFBRTtBQUFuRSxLQUFaO0FBQTJGLFdBQU8sRUFBRTtBQUFBLGFBQU1oQixXQUFXLEVBQWpCO0FBQUE7QUFBcEcsS0FFRzdHLFVBQVUsQ0FBQ2dCLE1BQVgsR0FBb0IsQ0FBckIsZ0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRXFHLE1BQUFBLFVBQVUsRUFBRSxPQUFkO0FBQXVCSixNQUFBQSxPQUFPLEVBQUUsTUFBaEM7QUFBd0NpQixNQUFBQSxNQUFNLEVBQUUsdUJBQWhEO0FBQXlFWCxNQUFBQSxZQUFZLEVBQUUsS0FBdkY7QUFBOEZKLE1BQUFBLFVBQVUsRUFBRSxRQUExRztBQUFvSEosTUFBQUEsWUFBWSxFQUFFO0FBQWxJO0FBQVosa0JBQ0E7QUFBSSxTQUFLLEVBQUU7QUFBRUEsTUFBQUEsWUFBWSxFQUFFLE1BQWhCO0FBQXdCVSxNQUFBQSxLQUFLLEVBQUUsU0FBL0I7QUFBMENVLE1BQUFBLFNBQVMsRUFBRTtBQUFyRDtBQUFYLHFCQURBLGVBRUE7QUFBSSxTQUFLLEVBQUU7QUFBRVYsTUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JVLE1BQUFBLFNBQVMsRUFBRSxRQUEvQjtBQUF5Q1AsTUFBQUEsU0FBUyxFQUFFLE1BQXBEO0FBQTREVyxNQUFBQSxVQUFVLEVBQUU7QUFBeEU7QUFBWCxLQUNDL0gsYUFERCxTQUZBLEVBTUUsK0ZBQUFGLGdCQUFnQixNQUFoQixDQUFBQSxnQkFBZ0IsRUFBUyxDQUFDLENBQVYsQ0FBaEIsS0FBaUMsQ0FBQyxDQUFuQyxnQkFDQztBQUFLLFNBQUssRUFBRTtBQUFFd0csTUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJJLE1BQUFBLGNBQWMsRUFBRTtBQUFuQztBQUFaLGtCQUNDO0FBQUssU0FBSyxFQUFFO0FBQ1hVLE1BQUFBLFNBQVMsRUFBRSxNQURBO0FBRVhkLE1BQUFBLE9BQU8sRUFBRSxNQUZFO0FBR1hFLE1BQUFBLEtBQUssRUFBRSxNQUhJO0FBSVhNLE1BQUFBLE1BQU0sRUFBRSxNQUpHO0FBS1hKLE1BQUFBLGNBQWMsRUFBRSxRQUxMO0FBTVhXLE1BQUFBLGFBQWEsRUFBRSxRQU5KO0FBT1hWLE1BQUFBLFVBQVUsRUFBRSxRQVBEO0FBUVhJLE1BQUFBLFlBQVksRUFBRSxNQVJIO0FBU1hGLE1BQUFBLFVBQVUsRUFBRTtBQVREO0FBQVosa0JBV0csaURBQUMsMERBQUQ7QUFBTSxRQUFJLEVBQUM7QUFBWCxJQVhILENBREQsQ0FERCxnQkFlQztBQUFLLFNBQUssRUFBRTtBQUFFUCxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkksTUFBQUEsY0FBYyxFQUFFO0FBQW5DO0FBQVosa0JBQ0M7QUFBSyxTQUFLLEVBQUU7QUFDWFUsTUFBQUEsU0FBUyxFQUFFLE1BREE7QUFFWGQsTUFBQUEsT0FBTyxFQUFFLE1BRkU7QUFHWEUsTUFBQUEsS0FBSyxFQUFFLE1BSEk7QUFJWE0sTUFBQUEsTUFBTSxFQUFFLE1BSkc7QUFLWEosTUFBQUEsY0FBYyxFQUFFLFFBTEw7QUFNWFcsTUFBQUEsYUFBYSxFQUFFLFFBTko7QUFPWFYsTUFBQUEsVUFBVSxFQUFFLFFBUEQ7QUFRWEksTUFBQUEsWUFBWSxFQUFFLE1BUkg7QUFTWEYsTUFBQUEsVUFBVSxFQUFFO0FBVEQ7QUFBWixrQkFXRyxpREFBQywwREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLElBWEgsQ0FERCxDQXJCRixDQURGLEdBc0NXLElBeENiLENBcERELENBNUNELGVBNklDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsaURBQUMsK0RBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBMEIsV0FBTyxFQUFFcEU7QUFBbkMsZUFERCxDQTdJRCxDQURELENBWkQsQ0FERCxDQUREO0FBd0tBOzs7Ozs7OztVQzVlRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcbmltcG9ydCB7IGNyZWF0ZUJpZCwgUmVkdWNlQ2F0ZWdvcnkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy90b2tlbidcbmltcG9ydCB7IEljb24gfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0ljb24nXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzYnlldmVudGlkLCBldmVudGdldGJ5aWQgfSBmcm9tICcuLi8uLi8uLi9wYWdlcy9FdmVudHMvZXZlbnQnXG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWRORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0VG9BZGRyZXNzLFxuXHR0b2tlbklkLFxuXHRyZWNpZCxcblx0UmVhbEV2ZW50SWQsXG5cdEhpZ2hlc3RiaWQsXG5cdHdhbGxldFR5cGUsXG5cdGV2ZW50SWQsXG59KSB7XG5cdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cblx0Y29uc3QgW0FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cdGNvbnN0IFtFdmVudEdvYWwsIHNldEV2ZW50R29hbF0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuXG5cblx0Y29uc3QgW2FsbFNlbGVjdGVkLCBzZXRBbGxTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtvdGhlclNlbGVjdGVkLCBzZXRPdGhlclNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IFtvdGhlckNhdGVnb3J5LCBzZXRPdGhlckNhdGVnb3J5XSA9IHVzZVN0YXRlKC0xKTtcblxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpIHtcblx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpO1xuXHRcdGFsZXJ0RUxNLnN0eWxlID0gJ2NvbnRlbnRzJztcblx0XHRzZXRBbGVydChgQW1vdW50IGNhbm5vdCBiZSB1bmRlciAke0hpZ2hlc3RiaWR9IE5FQVJgKVxuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIGZldGNoQ2F0ZWdvcmllcygpIHtcblx0XHRpZiAoY2F0ZWdvcmllcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0dmFyIG5lYXJQcmljZSA9IDA7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG5cdFx0XHRcdGxldCBvcHRpb25zID0ge1xuXHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0XHRcdFx0LnRoZW4oanNvbiA9PiBuZWFyUHJpY2UgPSBqc29uKVxuXHRcdFx0XHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuXHRcdFx0XHRuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdHZhciBuZWFyUHJpY2UgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoRXZlbnRHb2FsID09IDApIHtcblx0XHRcdFx0YXdhaXQgYmFzZSgnZXZlbnRzJykuZmluZChldmVudElkLCBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcblx0XHRcdFx0XHRzZXRFdmVudEdvYWwoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFJlYWxFdmVudElkICE9IDApIHtcblx0XHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRcdGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLnNlbGVjdCh7XG5cdFx0XHRcdFx0XHRmaWx0ZXJCeUZvcm11bGE6IGAoe2V2ZW50aWR9ID0gJHtSZWFsRXZlbnRJZH0pYCxcblx0XHRcdFx0XHRcdHZpZXc6IFwiR3JpZCB2aWV3XCJcblx0XHRcdFx0XHR9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcblx0XHRcdFx0XHRcdHZhciBzdW1vZm1haW4gPSAwO1xuXHRcdFx0XHRcdFx0cmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0XHRcdFx0XHRcdFx0Y2F0ZWdvcmllcy5wdXNoKHJlY29yZC5maWVsZHMpO1xuXHRcdFx0XHRcdFx0XHRzdW1vZm1haW4gKz0gTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwicHJpY2VcIikpICogTnVtYmVyKHJlY29yZC5nZXQoXCJhbW91bnRcIikpKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0c2V0T3RoZXJDYXRlZ29yeShwYXJzZUludChFdmVudEdvYWwgKiBuZWFyUHJpY2UpIC0gc3Vtb2ZtYWluKTtcblxuXHRcdFx0XHRcdFx0Ly8gc2V0Q2F0ZWdvcmllcyhyZWNvcmRzWzBdLmZpZWxkcyk7XG5cdFx0XHRcdFx0fSwgZnVuY3Rpb24gZG9uZShlcnIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHsgfVxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoQ2F0ZWdvcmllcygpO1xuXHR9LCBbY2F0ZWdvcmllc10pO1xuXHRhc3luYyBmdW5jdGlvbiBiaWRORlQoKSB7XG5cdFx0aWYgKE51bWJlcihBbW91bnQpIDwgTnVtYmVyKEhpZ2hlc3RiaWQpKSB7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cbmlmICh3YWxsZXRUeXBlID09IFwiQ0VMT1wiKXtcblx0YXdhaXQgdG9hc3QucHJvbWlzZShiaWRORlRieUNFTE8sIHtcblx0XHRcdHBlbmRpbmc6IGBCaWRkaW5nLi4uYCxcblx0XHRcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHRcdHN1Y2Nlc3M6IGBTdWNjZXNzISEhYFxuXHRcdH0pO1xuXG59ZWxzZSBpZiAod2FsbGV0VHlwZSA9PSBcIk5FQVJcIil7XG5cdFx0YXdhaXQgdG9hc3QucHJvbWlzZShiaWRORlRieU5FQVIsIHtcblx0XHRcdHBlbmRpbmc6IGBCaWRkaW5nLi4uYCxcblx0XHRcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHRcdHN1Y2Nlc3M6IGBTdWNjZXNzISEhYFxuXHRcdH0pO1xufVxuXHRcdGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdPbkFpclRhYmxlLCB7XG5cdFx0XHRwZW5kaW5nOiBgVXBkYXRpbmcgb24gQWlydGFibGUuLi5gLFxuXHRcdFx0ZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuXHRcdFx0c3VjY2VzczogYFVwZGF0ZWQgb24gQWlydGFibGVgXG5cdFx0fSk7XG5cblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBDcmVhdGluZ09uQWlyVGFibGUoKSB7XG5cdFx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0XHR2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXHRcdGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0YXdhaXQgYmFzZSgndG9rZW5iaWQnKS5jcmVhdGUoW1xuXHRcdFx0e1xuXHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XCJUb2tlbmlkXCI6IHRva2VuSWQsXG5cdFx0XHRcdFx0XCJEYXRlXCI6IGN1cnJlbnREYXRlLFxuXHRcdFx0XHRcdFwiVXNlck5hbWVcIjogd2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKS50b1N0cmluZygpLFxuXHRcdFx0XHRcdFwiQmlkcHJpY2VcIjogQW1vdW50XG5cdFx0XHRcdH1cblx0XHRcdH1dKTtcblx0XHR0b2FzdC5zdWNjZXNzKFwiQmlkIGNyZWF0ZWQgb24gQWlydGFibGVcIik7XG5cdFx0YXdhaXQgVXBkYXRlQWlydGFibGUoKTtcblxuXHR9XG5cdGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZUFpcnRhYmxlKCkge1xuXHRcdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdFx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXHRcdGF3YWl0IGJhc2UoJ25mdHMnKS51cGRhdGUoW1xuXHRcdFx0e1xuXHRcdFx0XHRcImlkXCI6IHJlY2lkLFxuXHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XCJwcmljZVwiOiBBbW91bnRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0pO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdGF3YWl0IGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLnNlbGVjdCh7XG5cdFx0XHRcdGZpbHRlckJ5Rm9ybXVsYTogYCh7aWR9ID0gJyR7c2VsZWN0ZWRDYXRlZ29yeVtpXX0nKWAsXG5cdFx0XHRcdHNvcnQ6IFt7IGZpZWxkOiBcInByaWNlXCIsIGRpcmVjdGlvbjogXCJkZXNjXCIgfV0sXG5cdFx0XHRcdHZpZXc6IFwiR3JpZCB2aWV3XCJcblx0XHRcdH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuXHRcdFx0XHQvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG5cblx0XHRcdFx0YXdhaXQgcmVjb3Jkcy5mb3JFYWNoKGFzeW5jIGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0XHRcdFx0XHR2YXIgZXZlbnRjYXRlZ29yeUlEID0gcmVjb3JkLmlkO1xuXHRcdFx0XHRcdGNvbnN0IHBlcnBlaWNlID0gcGFyc2VJbnQoTnVtYmVyKHJlY29yZC5nZXQoJ3ByaWNlJykpIC8gTnVtYmVyKHJlY29yZC5nZXQoJ2Ftb3VudCcpKSk7XG5cdFx0XHRcdFx0dmFyIHVwZGF0ZWRwcmljZSA9IE51bWJlcihyZWNvcmQuZ2V0KFwicHJpY2VcIikpIC0gcGVycGVpY2U7XG5cdFx0XHRcdFx0dmFyIFVwZGF0ZWRhbW91bnQgPSBOdW1iZXIocmVjb3JkLmdldCgnYW1vdW50JykpIC0gMTtcblx0XHRcdFx0XHRhd2FpdCBiYXNlKCdldmVudGNhdGVnb3JpZXMnKS51cGRhdGUoW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcImlkXCI6IGV2ZW50Y2F0ZWdvcnlJRCxcblx0XHRcdFx0XHRcdFx0XCJmaWVsZHNcIjoge1xuXHRcdFx0XHRcdFx0XHRcdFwicHJpY2VcIjogdXBkYXRlZHByaWNlLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XHRcdFx0XCJhbW91bnRcIjogVXBkYXRlZGFtb3VudC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZWNvcmQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG5cdFx0XHRcdGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cblx0XHRcdH0pO1xuXHRcdFx0Ly9cdGF3YWl0IFJlZHVjZUNhdGVnb3J5KHNlbGVjdGVkQ2F0ZWdvcnlbaV0pO1xuXHRcdH1cblxuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUYnlORUFSKCkge1xuXG5cdFx0dmFyIGJ1dHRvblByb3BzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0biBidG4tcHJpbWFyeVwiKVswXTtcblx0XHRpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XG5cdFx0XHRidXR0b25Qcm9wcy5pbm5lclRleHQgPSBcIkNvbm5lY3QgdG8gTkVBUiB3YWxsZXRcIlxuXHRcdFx0YXdhaXQgdG9hc3Qud2FybihcIk5vdCBjb25uZWN0ZWQgd2l0aCBORUFSIHdhbGxldCEgQ29ubmVjdGluZy4uLlwiKTtcblx0XHRcdGF3YWl0IHdpbmRvdy53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oXG5cdFx0XHRcdHdpbmRvdy5uZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSxcblx0XHRcdFx0J0RlbWV0ZXInKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gV2UgY2FsbCBzYXkgSGkgYW5kIHRoZW4gdXBkYXRlIHdobyBzYWlkIEhpIGxhc3QuXG5cdFx0Ly8gd2luZG93LmNvbnRyYWN0LnNheUhpKCkudGhlbih1cGRhdGVXaG9TYWlkSGkpO1xuXHRcdGNvbnN0IGNvbmZpZyA9IHtcblx0XHRcdG5ldHdvcmtJZDogXCJ0ZXN0bmV0XCIsXG5cdFx0XHRrZXlTdG9yZTogbmV3IG5lYXJBUEkua2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpLFxuXHRcdFx0bm9kZVVybDogXCJodHRwczovL3JwYy50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0XHR3YWxsZXRVcmw6IFwiaHR0cHM6Ly93YWxsZXQudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdFx0aGVscGVyVXJsOiBcImh0dHBzOi8vaGVscGVyLnRlc3RuZXQubmVhci5vcmdcIixcblx0XHRcdGV4cGxvcmVyVXJsOiBcImh0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdH07XG5cdFx0Ly8gc2VuZHMgTkVBUiB0b2tlbnNcblx0XHRjb25zdCBuZWFyID0gYXdhaXQgbmVhckFQSS5jb25uZWN0KGNvbmZpZyk7XG5cdFx0Y29uc3QgYWNjb3VudCA9IGF3YWl0IG5lYXIuYWNjb3VudCh3YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpKTtcblx0XHRjb25zdCBhbW91bnRJbllvY3RvID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cblx0XHRhd2FpdCBhY2NvdW50LnNlbmRNb25leShcblx0XHRcdFRvQWRkcmVzcywgLy8gcmVjZWl2ZXIgYWNjb3VudFxuXHRcdFx0YW1vdW50SW5Zb2N0byAvLyBhbW91bnQgaW4geW9jdG9ORUFSXG5cdFx0KS5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvcjpcIiwgZXJyb3IpO1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0pXG5cdH1cblxuXG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVGJ5Q0VMTygpIHtcblxuXHRcdHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG5cdFx0aWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSkge1xuXHRcdFx0YnV0dG9uUHJvcHMuaW5uZXJUZXh0ID0gXCJDb25uZWN0IHRvIENFTE8gd2FsbGV0XCJcblx0XHRcdGF3YWl0IHRvYXN0Lndhcm4oXCJOb3QgY29ubmVjdGVkIHdpdGggQ0VMTyB3YWxsZXQhIENvbm5lY3RpbmcuLi5cIik7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZj1cIi9sb2dpblwiO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGNvbm5lY3RlZCB3aXRoIENFTE8gd2FsbGV0IVwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gV2UgY2FsbCBzYXkgSGkgYW5kIHRoZW4gdXBkYXRlIHdobyBzYWlkIEhpIGxhc3QuXG5cdFx0Ly8gd2luZG93LmNvbnRyYWN0LnNheUhpKCkudGhlbih1cGRhdGVXaG9TYWlkSGkpO1xuXHRcdGNvbnN0IGNvbmZpZyA9IHtcblx0XHRcdG5ldHdvcmtJZDogXCJ0ZXN0bmV0XCIsXG5cdFx0XHRrZXlTdG9yZTogbmV3IG5lYXJBUEkua2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpLFxuXHRcdFx0bm9kZVVybDogXCJodHRwczovL3JwYy50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0XHR3YWxsZXRVcmw6IFwiaHR0cHM6Ly93YWxsZXQudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdFx0aGVscGVyVXJsOiBcImh0dHBzOi8vaGVscGVyLnRlc3RuZXQubmVhci5vcmdcIixcblx0XHRcdGV4cGxvcmVyVXJsOiBcImh0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdH07XG5cdFx0Ly8gc2VuZHMgTkVBUiB0b2tlbnNcblx0XHRjb25zdCBuZWFyID0gYXdhaXQgbmVhckFQSS5jb25uZWN0KGNvbmZpZyk7XG5cdFx0Y29uc3QgYWNjb3VudCA9IGF3YWl0IG5lYXIuYWNjb3VudCh3YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpKTtcblx0XHRjb25zdCBhbW91bnRJbllvY3RvID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cblx0XHRhd2FpdCBhY2NvdW50LnNlbmRNb25leShcblx0XHRcdFRvQWRkcmVzcywgLy8gcmVjZWl2ZXIgYWNjb3VudFxuXHRcdFx0YW1vdW50SW5Zb2N0byAvLyBhbW91bnQgaW4geW9jdG9ORUFSXG5cdFx0KS5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvcjpcIiwgZXJyb3IpO1xuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0pXG5cdH1cblxuXG5cblxuXG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnlfaWQpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcImNhdGVnb3J5X2lkXCIpO1xuXHRcdGNvbnNvbGUubG9nKGNhdGVnb3J5X2lkKTtcblx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0fVxuXHRcdHRlbXBfYXJyLnB1c2goY2F0ZWdvcnlfaWQpO1xuXHRcdGNvbnNvbGUubG9nKHRlbXBfYXJyKTtcblxuXHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHR9XG5cdGNvbnN0IHVuc2VsZWN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnlfaWQpID0+IHtcblx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChzZWxlY3RlZENhdGVnb3J5W2ldICE9IGNhdGVnb3J5X2lkKVxuXHRcdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh0ZW1wX2Fycik7XG5cdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdH1cblxuXHRjb25zdCBzZWxlY3RBbGxDYXRlZ29yeSA9ICgpID0+IHtcblx0XHRpZiAoYWxsU2VsZWN0ZWQpIHtcblx0XHRcdHNldEFsbFNlbGVjdGVkKGZhbHNlKTtcblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkoW10pO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHNldEFsbFNlbGVjdGVkKHRydWUpO1xuXHRcdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGVtcF9hcnIucHVzaChjYXRlZ29yaWVzW2ldLmlkKVxuXHRcdFx0fVxuXHRcdFx0dGVtcF9hcnIucHVzaCgtMSk7XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9XG5cblx0fVxuXHRjb25zdCBvdGhlclNlbGVjdCA9ICgpID0+IHtcblx0XHRpZiAob3RoZXJTZWxlY3RlZCkge1xuXHRcdFx0c2V0T3RoZXJTZWxlY3RlZChmYWxzZSk7XG5cdFx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoc2VsZWN0ZWRDYXRlZ29yeVtpXSAhPSAtMSlcblx0XHRcdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pXG5cdFx0XHR9XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0T3RoZXJTZWxlY3RlZCh0cnVlKTtcblx0XHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSlcblx0XHRcdH1cblx0XHRcdHRlbXBfYXJyLnB1c2goLTEpO1xuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdFx0b25TaG93PXtmZXRjaENhdGVnb3JpZXN9XG5cdFx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdFx0Y2VudGVyZWRcblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9J2FsZXJ0JyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHRcdHtBbGVydH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QmlkIEFtb3VudCBpbiB7d2FsbGV0VHlwZX08L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtBbW91bnRJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RDYXRlZ29yeUFsbCc+XG5cdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNob29zZSB3aGVyZSB5b3Ugd2FudCB0byBnaXZlIHN1cHBvcnQ8L2g0PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZzogXCI1cHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBiYWNrZ3JvdW5kOiBcImJpc3F1ZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0gb25DbGljaz17KCkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0QWxsQ2F0ZWdvcnkoKTtcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5TdXBwb3J0IGluIGdlbmVyYWwgPC9oND5cblx0XHRcdFx0XHRcdFx0XHR7YWxsU2VsZWN0ZWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxMHB4XCIsIHRvcDogXCItN3B4XCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRTZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxMHB4XCIsIHRvcDogXCItN3B4XCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RDYXRlZ29yeScgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMTBweFwiLCBtYXJnaW5SaWdodDogXCItMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQoc2VsZWN0ZWRDYXRlZ29yeS5pbmRleE9mKGNhdGVnb3J5LmlkKSAhPT0gLTEpID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0KDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtjYXRlZ29yeS5pZH0gb25DbGljaz17KCkgPT4gdW5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeS5pZCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57Y2F0ZWdvcnkudGl0bGV9PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtjYXRlZ29yeS5pbWFnZX0gc3R5bGU9e3sgYXNwZWN0UmF0aW86ICcxJywgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntjYXRlZ29yeS5hbW91bnQgKiBjYXRlZ29yeS5wcmljZX0gVVNEPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtjYXRlZ29yeS5hbW91bnR9IHBpZWNlcyk8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSAgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0KDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtjYXRlZ29yeS5pZH0gb25DbGljaz17KCkgPT4gc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2NhdGVnb3J5LnRpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IGFzcGVjdFJhdGlvOiAnMScsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57Y2F0ZWdvcnkuYW1vdW50ICogY2F0ZWdvcnkucHJpY2V9IFVTRDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pih7Y2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cblxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0VW5zZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KVxuXHRcdFx0XHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0gb25DbGljaz17KCkgPT4gb3RoZXJTZWxlY3QoKX0+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0KGNhdGVnb3JpZXMubGVuZ3RoID4gMCkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQoPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiBcIjE1cHhcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+T3RoZXIgc3VwcG9ydDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdGhlckNhdGVnb3J5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBVU0Q8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChzZWxlY3RlZENhdGVnb3J5LmluZGV4T2YoLTEpICE9PSAtMSkgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRTZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PikgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pIDogbnVsbFxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvRm9ybT5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0XHQ8L01vZGFsPlxuXG5cdFx0PC8+XG5cdCk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMmI3OTNiY2U2MDJhNGVlMzZkYTFcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJ0b2FzdCIsIlVzZUZvcm1JbnB1dCIsImNyZWF0ZUJpZCIsIlJlZHVjZUNhdGVnb3J5IiwiSWNvbiIsImdldENhdGVnb3JpZXNieWV2ZW50aWQiLCJldmVudGdldGJ5aWQiLCJuZWFyQVBJIiwiQmlkTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwiVG9BZGRyZXNzIiwidG9rZW5JZCIsInJlY2lkIiwiUmVhbEV2ZW50SWQiLCJIaWdoZXN0YmlkIiwid2FsbGV0VHlwZSIsImV2ZW50SWQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwiQWxlcnQiLCJzZXRBbGVydCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIkFtb3VudCIsIkFtb3VudElucHV0IiwiRXZlbnRHb2FsIiwic2V0RXZlbnRHb2FsIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJhbGxTZWxlY3RlZCIsInNldEFsbFNlbGVjdGVkIiwib3RoZXJTZWxlY3RlZCIsInNldE90aGVyU2VsZWN0ZWQiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsIm90aGVyQ2F0ZWdvcnkiLCJzZXRPdGhlckNhdGVnb3J5IiwiYWN0aXZhdGVXYXJuaW5nTW9kYWwiLCJhbGVydEVMTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImZldGNoQ2F0ZWdvcmllcyIsImxlbmd0aCIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsIm1hcmtldFBhaXJzIiwicHJpY2UiLCJyZWNvcmQiLCJOdW1iZXIiLCJnZXQiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJ2aWV3IiwiZWFjaFBhZ2UiLCJwYWdlIiwicmVjb3JkcyIsImZldGNoTmV4dFBhZ2UiLCJzdW1vZm1haW4iLCJmb3JFYWNoIiwicHVzaCIsImZpZWxkcyIsImRvbmUiLCJiaWRORlQiLCJwcm9taXNlIiwiYmlkTkZUYnlDRUxPIiwicGVuZGluZyIsInN1Y2Nlc3MiLCJiaWRORlRieU5FQVIiLCJDcmVhdGluZ09uQWlyVGFibGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNyZWF0ZSIsIndhbGxldEFjY291bnQiLCJnZXRBY2NvdW50SWQiLCJ0b1N0cmluZyIsIlVwZGF0ZUFpcnRhYmxlIiwidXBkYXRlIiwiaSIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsImV2ZW50Y2F0ZWdvcnlJRCIsImlkIiwicGVycGVpY2UiLCJ1cGRhdGVkcHJpY2UiLCJVcGRhdGVkYW1vdW50IiwibG9nIiwiYnV0dG9uUHJvcHMiLCJpc1NpZ25lZEluIiwiaW5uZXJUZXh0Iiwid2FybiIsInJlcXVlc3RTaWduSW4iLCJuZWFyQ29uZmlnIiwiY29udHJhY3ROYW1lIiwiY29uZmlnIiwibmV0d29ya0lkIiwia2V5U3RvcmUiLCJrZXlTdG9yZXMiLCJCcm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUiLCJub2RlVXJsIiwid2FsbGV0VXJsIiwiaGVscGVyVXJsIiwiZXhwbG9yZXJVcmwiLCJjb25uZWN0IiwibmVhciIsImFjY291bnQiLCJhbW91bnRJbllvY3RvIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsInNlbmRNb25leSIsImhyZWYiLCJFcnJvciIsInNlbGVjdENhdGVnb3J5IiwiY2F0ZWdvcnlfaWQiLCJ0ZW1wX2FyciIsInVuc2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RBbGxDYXRlZ29yeSIsIm90aGVyU2VsZWN0IiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImFsaWduU2VsZiIsImNvbG9yIiwicmlnaHQiLCJ0b3AiLCJtYXJnaW5Ub3AiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZmxleFdyYXAiLCJjYXRlZ29yeSIsImJvcmRlciIsInRleHRBbGlnbiIsInRpdGxlIiwiaW1hZ2UiLCJhc3BlY3RSYXRpbyIsImxpbmVIZWlnaHQiLCJhbW91bnQiXSwic291cmNlUm9vdCI6IiJ9