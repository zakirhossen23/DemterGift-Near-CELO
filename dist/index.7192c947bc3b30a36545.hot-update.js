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
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../services/useContract'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");
/* harmony import */ var _components_common_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/common/Icon */ "./src/components/common/Icon/index.tsx");
/* harmony import */ var _pages_Events_event__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../pages/Events/event */ "./src/pages/Events/event.jsx");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_14__);


















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

  var _useContract = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../services/useContract'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('ERC721'),
      contract = _useContract.contract,
      contractCelo = _useContract.contractCelo;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      Alert = _useState2[0],
      setAlert = _useState2[1];

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_10__["default"])({
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
                keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_14__.keyStores.BrowserLocalStorageKeyStore(),
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org"
              }; // sends NEAR tokens

              _context8.next = 11;
              return near_api_js__WEBPACK_IMPORTED_MODULE_14__.connect(config);

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
      var buttonProps, ContractKit;
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
              window.location.href = "/login[".concat(window.location.pathname + window.location.search, "]");
              throw new Error("Not connected with CELO wallet!");

            case 8:
              ContractKit = __webpack_require__(/*! @celo/contractkit */ "./node_modules/@celo/contractkit/lib/index.js");

            case 9:
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    show: show,
    onHide: onHide,
    onShow: fetchCategories,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_15__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_15__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Bid NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_15__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    id: "alert",
    style: {
      display: 'none'
    },
    className: "alert alert-danger",
    role: "alert"
  }, Alert), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_16__["default"].Label, null, "Bid Amount in ", walletType), AmountInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_12__.Icon, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_12__.Icon, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_12__.Icon, {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_12__.Icon, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_12__.Icon, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_common_Icon__WEBPACK_IMPORTED_MODULE_12__.Icon, {
    icon: "heartUnselected"
  })))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    className: "d-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "primary",
    onClick: bidNFT
  }, "Bid NFT"))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0a59b2d94760ff6cbdda"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjcxOTJjOTQ3YmMzYjMwYTM2NTQ1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU2dCLFdBQVQsT0FVWjtBQUFBLE1BVEZDLElBU0UsUUFURkEsSUFTRTtBQUFBLE1BUkZDLE1BUUUsUUFSRkEsTUFRRTtBQUFBLE1BUEZDLFNBT0UsUUFQRkEsU0FPRTtBQUFBLE1BTkZDLE9BTUUsUUFORkEsT0FNRTtBQUFBLE1BTEZDLEtBS0UsUUFMRkEsS0FLRTtBQUFBLE1BSkZDLFdBSUUsUUFKRkEsV0FJRTtBQUFBLE1BSEZDLFVBR0UsUUFIRkEsVUFHRTtBQUFBLE1BRkZDLFVBRUUsUUFGRkEsVUFFRTtBQUFBLE1BREZDLE9BQ0UsUUFERkEsT0FDRTs7QUFDRixNQUFJQyxRQUFRLEdBQUdDLG1CQUFPLENBQUMseURBQUQsQ0FBdEI7O0FBQ0EsTUFBSUMsSUFBSSxHQUFHLElBQUlGLFFBQUosQ0FBYTtBQUFFRyxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUFiLEVBQThDRCxJQUE5QyxDQUFtRCxtQkFBbkQsQ0FBWDs7QUFDQSxxQkFBbUNwQiw0SkFBVyxDQUFDLFFBQUQsQ0FBOUM7QUFBQSxNQUFRc0IsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxZQUFsQixnQkFBa0JBLFlBQWxCOztBQUNBLGtCQUEwQjlCLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBTytCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLHNCQUE4QnhCLDBEQUFZLENBQUM7QUFDMUN5QixJQUFBQSxJQUFJLEVBQUUsTUFEb0M7QUFFMUNDLElBQUFBLFdBQVcsRUFBRTtBQUY2QixHQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsV0FBZjs7QUFJQSxt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TDtBQU1YVyxNQUFBQSxhQUFhLEVBQUUsUUFOSjtBQU9YVixNQUFBQSxVQUFVLEVBQUUsUUFQRDtBQVFYSSxNQUFBQSxZQUFZLEVBQUUsTUFSSDtBQVNYRixNQUFBQSxVQUFVLEVBQUU7QUFURDtBQUFaLGtCQVdHLGlEQUFDLDBEQUFEO0FBQU0sUUFBSSxFQUFDO0FBQVgsSUFYSCxDQURELENBckJGLENBREYsR0FzQ1csSUF4Q2IsQ0FwREQsQ0E1Q0QsZUE2SUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUV2RTtBQUFuQyxlQURELENBN0lELENBREQsQ0FaRCxDQURELENBREQ7QUF3S0E7Ozs7Ozs7O1VDeGRELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlQmlkLCBSZWR1Y2VDYXRlZ29yeSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL3Rva2VuJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vSWNvbidcbmltcG9ydCB7IGdldENhdGVnb3JpZXNieWV2ZW50aWQsIGV2ZW50Z2V0YnlpZCB9IGZyb20gJy4uLy4uLy4uL3BhZ2VzL0V2ZW50cy9ldmVudCdcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRUb0FkZHJlc3MsXG5cdHRva2VuSWQsXG5cdHJlY2lkLFxuXHRSZWFsRXZlbnRJZCxcblx0SGlnaGVzdGJpZCxcblx0d2FsbGV0VHlwZSxcblx0ZXZlbnRJZCxcbn0pIHtcblx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblx0Y29uc3QgeyBjb250cmFjdCwgY29udHJhY3RDZWxvIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG5cdGNvbnN0IFtBbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXHRjb25zdCBbRXZlbnRHb2FsLCBzZXRFdmVudEdvYWxdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuXG5cdGNvbnN0IFthbGxTZWxlY3RlZCwgc2V0QWxsU2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbb3RoZXJTZWxlY3RlZCwgc2V0T3RoZXJTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKFtdKTtcblxuXHRjb25zdCBbb3RoZXJDYXRlZ29yeSwgc2V0T3RoZXJDYXRlZ29yeV0gPSB1c2VTdGF0ZSgtMSk7XG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoKSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRhbGVydEVMTS5zdHlsZSA9ICdjb250ZW50cyc7XG5cdFx0c2V0QWxlcnQoYEFtb3VudCBjYW5ub3QgYmUgdW5kZXIgJHtIaWdoZXN0YmlkfSBORUFSYClcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBmZXRjaENhdGVnb3JpZXMoKSB7XG5cdFx0aWYgKGNhdGVnb3JpZXMubGVuZ3RoID09IDApIHtcblx0XHRcdHZhciBuZWFyUHJpY2UgPSAwO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuXHRcdFx0XHRsZXQgb3B0aW9ucyA9IHtcblx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0YXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHRcdFx0XHRcdC50aGVuKGpzb24gPT4gbmVhclByaWNlID0ganNvbilcblx0XHRcdFx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcblx0XHRcdFx0bmVhclByaWNlID0gbmVhclByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG5cdFx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0XHR2YXIgbmVhclByaWNlID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKEV2ZW50R29hbCA9PSAwKSB7XG5cdFx0XHRcdGF3YWl0IGJhc2UoJ2V2ZW50cycpLmZpbmQoZXZlbnRJZCwgZnVuY3Rpb24gKGVyciwgcmVjb3JkKSB7XG5cdFx0XHRcdFx0c2V0RXZlbnRHb2FsKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGlmIChSZWFsRXZlbnRJZCAhPSAwKSB7XG5cdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHRiYXNlKCdldmVudGNhdGVnb3JpZXMnKS5zZWxlY3Qoe1xuXHRcdFx0XHRcdFx0ZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICR7UmVhbEV2ZW50SWR9KWAsXG5cdFx0XHRcdFx0XHR2aWV3OiBcIkdyaWQgdmlld1wiXG5cdFx0XHRcdFx0fSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG5cdFx0XHRcdFx0XHR2YXIgc3Vtb2ZtYWluID0gMDtcblx0XHRcdFx0XHRcdHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG5cdFx0XHRcdFx0XHRcdGNhdGVnb3JpZXMucHVzaChyZWNvcmQuZmllbGRzKTtcblx0XHRcdFx0XHRcdFx0c3Vtb2ZtYWluICs9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIE51bWJlcihyZWNvcmQuZ2V0KFwiYW1vdW50XCIpKSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHNldE90aGVyQ2F0ZWdvcnkocGFyc2VJbnQoRXZlbnRHb2FsICogbmVhclByaWNlKSAtIHN1bW9mbWFpbik7XG5cblx0XHRcdFx0XHRcdC8vIHNldENhdGVnb3JpZXMocmVjb3Jkc1swXS5maWVsZHMpO1xuXHRcdFx0XHRcdH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7IH1cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaENhdGVnb3JpZXMoKTtcblx0fSwgW2NhdGVnb3JpZXNdKTtcblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXHRcdGlmIChOdW1iZXIoQW1vdW50KSA8IE51bWJlcihIaWdoZXN0YmlkKSkge1xuXHRcdFx0YWN0aXZhdGVXYXJuaW5nTW9kYWwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5pZiAod2FsbGV0VHlwZSA9PSBcIkNFTE9cIil7XG5cdGF3YWl0IHRvYXN0LnByb21pc2UoYmlkTkZUYnlDRUxPLCB7XG5cdFx0XHRwZW5kaW5nOiBgQmlkZGluZy4uLmAsXG5cdFx0XHRlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG5cdFx0XHRzdWNjZXNzOiBgU3VjY2VzcyEhIWBcblx0XHR9KTtcblxufWVsc2UgaWYgKHdhbGxldFR5cGUgPT0gXCJORUFSXCIpe1xuXHRcdGF3YWl0IHRvYXN0LnByb21pc2UoYmlkTkZUYnlORUFSLCB7XG5cdFx0XHRwZW5kaW5nOiBgQmlkZGluZy4uLmAsXG5cdFx0XHRlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG5cdFx0XHRzdWNjZXNzOiBgU3VjY2VzcyEhIWBcblx0XHR9KTtcbn1cblx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nT25BaXJUYWJsZSwge1xuXHRcdFx0cGVuZGluZzogYFVwZGF0aW5nIG9uIEFpcnRhYmxlLi4uYCxcblx0XHRcdGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcblx0XHRcdHN1Y2Nlc3M6IGBVcGRhdGVkIG9uIEFpcnRhYmxlYFxuXHRcdH0pO1xuXG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdPbkFpclRhYmxlKCkge1xuXHRcdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdFx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblx0XHRsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGF3YWl0IGJhc2UoJ3Rva2VuYmlkJykuY3JlYXRlKFtcblx0XHRcdHtcblx0XHRcdFx0XCJmaWVsZHNcIjoge1xuXHRcdFx0XHRcdFwiVG9rZW5pZFwiOiB0b2tlbklkLFxuXHRcdFx0XHRcdFwiRGF0ZVwiOiBjdXJyZW50RGF0ZSxcblx0XHRcdFx0XHRcIlVzZXJOYW1lXCI6IHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcIkJpZHByaWNlXCI6IEFtb3VudFxuXHRcdFx0XHR9XG5cdFx0XHR9XSk7XG5cdFx0dG9hc3Quc3VjY2VzcyhcIkJpZCBjcmVhdGVkIG9uIEFpcnRhYmxlXCIpO1xuXHRcdGF3YWl0IFVwZGF0ZUFpcnRhYmxlKCk7XG5cblx0fVxuXHRhc3luYyBmdW5jdGlvbiBVcGRhdGVBaXJ0YWJsZSgpIHtcblx0XHR2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuXHRcdHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cblx0XHRhd2FpdCBiYXNlKCduZnRzJykudXBkYXRlKFtcblx0XHRcdHtcblx0XHRcdFx0XCJpZFwiOiByZWNpZCxcblx0XHRcdFx0XCJmaWVsZHNcIjoge1xuXHRcdFx0XHRcdFwicHJpY2VcIjogQW1vdW50XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRhd2FpdCBiYXNlKCdldmVudGNhdGVnb3JpZXMnKS5zZWxlY3Qoe1xuXHRcdFx0XHRmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke3NlbGVjdGVkQ2F0ZWdvcnlbaV19JylgLFxuXHRcdFx0XHRzb3J0OiBbeyBmaWVsZDogXCJwcmljZVwiLCBkaXJlY3Rpb246IFwiZGVzY1wiIH1dLFxuXHRcdFx0XHR2aWV3OiBcIkdyaWQgdmlld1wiXG5cdFx0XHR9KS5lYWNoUGFnZShhc3luYyBmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcblx0XHRcdFx0Ly8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuXG5cdFx0XHRcdGF3YWl0IHJlY29yZHMuZm9yRWFjaChhc3luYyBmdW5jdGlvbiAocmVjb3JkKSB7XG5cdFx0XHRcdFx0dmFyIGV2ZW50Y2F0ZWdvcnlJRCA9IHJlY29yZC5pZDtcblx0XHRcdFx0XHRjb25zdCBwZXJwZWljZSA9IHBhcnNlSW50KE51bWJlcihyZWNvcmQuZ2V0KCdwcmljZScpKSAvIE51bWJlcihyZWNvcmQuZ2V0KCdhbW91bnQnKSkpO1xuXHRcdFx0XHRcdHZhciB1cGRhdGVkcHJpY2UgPSBOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAtIHBlcnBlaWNlO1xuXHRcdFx0XHRcdHZhciBVcGRhdGVkYW1vdW50ID0gTnVtYmVyKHJlY29yZC5nZXQoJ2Ftb3VudCcpKSAtIDE7XG5cdFx0XHRcdFx0YXdhaXQgYmFzZSgnZXZlbnRjYXRlZ29yaWVzJykudXBkYXRlKFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiBldmVudGNhdGVnb3J5SUQsXG5cdFx0XHRcdFx0XHRcdFwiZmllbGRzXCI6IHtcblx0XHRcdFx0XHRcdFx0XHRcInByaWNlXCI6IHVwZGF0ZWRwcmljZS50b1N0cmluZygpLFxuXHRcdFx0XHRcdFx0XHRcdFwiYW1vdW50XCI6IFVwZGF0ZWRhbW91bnQudG9TdHJpbmcoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVjb3JkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LCBmdW5jdGlvbiBkb25lKGVycikge1xuXHRcdFx0XHRpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG5cdFx0XHR9KTtcblx0XHRcdC8vXHRhd2FpdCBSZWR1Y2VDYXRlZ29yeShzZWxlY3RlZENhdGVnb3J5W2ldKTtcblx0XHR9XG5cblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGJpZE5GVGJ5TkVBUigpIHtcblxuXHRcdHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG5cdFx0aWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSkge1xuXHRcdFx0YnV0dG9uUHJvcHMuaW5uZXJUZXh0ID0gXCJDb25uZWN0IHRvIE5FQVIgd2FsbGV0XCJcblx0XHRcdGF3YWl0IHRvYXN0Lndhcm4oXCJOb3QgY29ubmVjdGVkIHdpdGggTkVBUiB3YWxsZXQhIENvbm5lY3RpbmcuLi5cIik7XG5cdFx0XHRhd2FpdCB3aW5kb3cud2FsbGV0QWNjb3VudC5yZXF1ZXN0U2lnbkluKFxuXHRcdFx0XHR3aW5kb3cubmVhckNvbmZpZy5jb250cmFjdE5hbWUsXG5cdFx0XHRcdCdEZW1ldGVyJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIFdlIGNhbGwgc2F5IEhpIGFuZCB0aGVuIHVwZGF0ZSB3aG8gc2FpZCBIaSBsYXN0LlxuXHRcdC8vIHdpbmRvdy5jb250cmFjdC5zYXlIaSgpLnRoZW4odXBkYXRlV2hvU2FpZEhpKTtcblx0XHRjb25zdCBjb25maWcgPSB7XG5cdFx0XHRuZXR3b3JrSWQ6IFwidGVzdG5ldFwiLFxuXHRcdFx0a2V5U3RvcmU6IG5ldyBuZWFyQVBJLmtleVN0b3Jlcy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUoKSxcblx0XHRcdG5vZGVVcmw6IFwiaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZ1wiLFxuXHRcdFx0d2FsbGV0VXJsOiBcImh0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmdcIixcblx0XHRcdGhlbHBlclVybDogXCJodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG5cdFx0XHRleHBsb3JlclVybDogXCJodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmdcIixcblx0XHR9O1xuXHRcdC8vIHNlbmRzIE5FQVIgdG9rZW5zXG5cdFx0Y29uc3QgbmVhciA9IGF3YWl0IG5lYXJBUEkuY29ubmVjdChjb25maWcpO1xuXHRcdGNvbnN0IGFjY291bnQgPSBhd2FpdCBuZWFyLmFjY291bnQod2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKSk7XG5cdFx0Y29uc3QgYW1vdW50SW5Zb2N0byA9IChOdW1iZXIoQW1vdW50KSAqIDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCdmdWxsd2lkZScsIHsgdXNlR3JvdXBpbmc6IGZhbHNlIH0pO1xuXG5cdFx0YXdhaXQgYWNjb3VudC5zZW5kTW9uZXkoXG5cdFx0XHRUb0FkZHJlc3MsIC8vIHJlY2VpdmVyIGFjY291bnRcblx0XHRcdGFtb3VudEluWW9jdG8gLy8gYW1vdW50IGluIHlvY3RvTkVBUlxuXHRcdCkuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3I6XCIsIGVycm9yKTtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdHJldHVybjtcblx0XHR9KVxuXHR9XG5cblxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlRieUNFTE8oKSB7XG5cblx0XHR2YXIgYnV0dG9uUHJvcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuIGJ0bi1wcmltYXJ5XCIpWzBdO1xuXHRcdGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcblx0XHRcdGJ1dHRvblByb3BzLmlubmVyVGV4dCA9IFwiQ29ubmVjdCB0byBDRUxPIHdhbGxldFwiXG5cblx0XHRcdGF3YWl0IHRvYXN0Lndhcm4oXCJOb3QgY29ubmVjdGVkIHdpdGggQ0VMTyB3YWxsZXQhIENvbm5lY3RpbmcuLi5cIik7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZj1gL2xvZ2luWyR7IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2h9XWA7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgY29ubmVjdGVkIHdpdGggQ0VMTyB3YWxsZXQhXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBDb250cmFjdEtpdCA9IHJlcXVpcmUoJ0BjZWxvL2NvbnRyYWN0a2l0JylcblxuXG5cdH1cblxuXG5cblx0Y29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnlfaWQpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcImNhdGVnb3J5X2lkXCIpO1xuXHRcdGNvbnNvbGUubG9nKGNhdGVnb3J5X2lkKTtcblx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSk7XG5cdFx0fVxuXHRcdHRlbXBfYXJyLnB1c2goY2F0ZWdvcnlfaWQpO1xuXHRcdGNvbnNvbGUubG9nKHRlbXBfYXJyKTtcblxuXHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkodGVtcF9hcnIpO1xuXHR9XG5cdGNvbnN0IHVuc2VsZWN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnlfaWQpID0+IHtcblx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkQ2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChzZWxlY3RlZENhdGVnb3J5W2ldICE9IGNhdGVnb3J5X2lkKVxuXHRcdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyh0ZW1wX2Fycik7XG5cdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdH1cblxuXHRjb25zdCBzZWxlY3RBbGxDYXRlZ29yeSA9ICgpID0+IHtcblx0XHRpZiAoYWxsU2VsZWN0ZWQpIHtcblx0XHRcdHNldEFsbFNlbGVjdGVkKGZhbHNlKTtcblx0XHRcdHNldFNlbGVjdGVkQ2F0ZWdvcnkoW10pO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHNldEFsbFNlbGVjdGVkKHRydWUpO1xuXHRcdFx0dmFyIHRlbXBfYXJyID0gW107XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGVtcF9hcnIucHVzaChjYXRlZ29yaWVzW2ldLmlkKVxuXHRcdFx0fVxuXHRcdFx0dGVtcF9hcnIucHVzaCgtMSk7XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9XG5cblx0fVxuXHRjb25zdCBvdGhlclNlbGVjdCA9ICgpID0+IHtcblx0XHRpZiAob3RoZXJTZWxlY3RlZCkge1xuXHRcdFx0c2V0T3RoZXJTZWxlY3RlZChmYWxzZSk7XG5cdFx0XHR2YXIgdGVtcF9hcnIgPSBbXTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRDYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoc2VsZWN0ZWRDYXRlZ29yeVtpXSAhPSAtMSlcblx0XHRcdFx0XHR0ZW1wX2Fyci5wdXNoKHNlbGVjdGVkQ2F0ZWdvcnlbaV0pXG5cdFx0XHR9XG5cdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KHRlbXBfYXJyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0T3RoZXJTZWxlY3RlZCh0cnVlKTtcblx0XHRcdHZhciB0ZW1wX2FyciA9IFtdO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZENhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRlbXBfYXJyLnB1c2goc2VsZWN0ZWRDYXRlZ29yeVtpXSlcblx0XHRcdH1cblx0XHRcdHRlbXBfYXJyLnB1c2goLTEpO1xuXHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeSh0ZW1wX2Fycik7XG5cdFx0fVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdFx0b25TaG93PXtmZXRjaENhdGVnb3JpZXN9XG5cdFx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdFx0Y2VudGVyZWRcblx0XHRcdD5cblx0XHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHRcdDxkaXYgaWQ9J2FsZXJ0JyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHRcdHtBbGVydH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QmlkIEFtb3VudCBpbiB7d2FsbGV0VHlwZX08L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtBbW91bnRJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RDYXRlZ29yeUFsbCc+XG5cdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNob29zZSB3aGVyZSB5b3Ugd2FudCB0byBnaXZlIHN1cHBvcnQ8L2g0PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZzogXCI1cHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBiYWNrZ3JvdW5kOiBcImJpc3F1ZVwiLCBoZWlnaHQ6IFwiNDBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0gb25DbGljaz17KCkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0QWxsQ2F0ZWdvcnkoKTtcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7IGFsaWduU2VsZjogXCJjZW50ZXJcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5TdXBwb3J0IGluIGdlbmVyYWwgPC9oND5cblx0XHRcdFx0XHRcdFx0XHR7YWxsU2VsZWN0ZWQgP1xuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxMHB4XCIsIHRvcDogXCItN3B4XCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRTZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gOlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCIxMHB4XCIsIHRvcDogXCItN3B4XCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzZWxlY3RDYXRlZ29yeScgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMTBweFwiLCBtYXJnaW5SaWdodDogXCItMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQoc2VsZWN0ZWRDYXRlZ29yeS5pbmRleE9mKGNhdGVnb3J5LmlkKSAhPT0gLTEpID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0KDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtjYXRlZ29yeS5pZH0gb25DbGljaz17KCkgPT4gdW5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeS5pZCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57Y2F0ZWdvcnkudGl0bGV9PC9oND5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtjYXRlZ29yeS5pbWFnZX0gc3R5bGU9e3sgYXNwZWN0UmF0aW86ICcxJywgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntjYXRlZ29yeS5hbW91bnQgKiBjYXRlZ29yeS5wcmljZX0gVVNEPC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtjYXRlZ29yeS5hbW91bnR9IHBpZWNlcyk8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9fSAgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjEwcHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIiNFRUYxRjRcIlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PjxJY29uIGljb249XCJoZWFydFNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0KDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtjYXRlZ29yeS5pZH0gb25DbGljaz17KCkgPT4gc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkuaWQpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2NhdGVnb3J5LnRpdGxlfTwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17Y2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IGFzcGVjdFJhdGlvOiAnMScsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57Y2F0ZWdvcnkuYW1vdW50ICogY2F0ZWdvcnkucHJpY2V9IFVTRDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pih7Y2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cblxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH19ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IFwiMzJweFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjRUVGMUY0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+PEljb24gaWNvbj1cImhlYXJ0VW5zZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+KVxuXHRcdFx0XHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0gb25DbGljaz17KCkgPT4gb3RoZXJTZWxlY3QoKX0+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0KGNhdGVnb3JpZXMubGVuZ3RoID4gMCkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQoPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgbWFyZ2luQm90dG9tOiBcIjE1cHhcIiB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+T3RoZXIgc3VwcG9ydDwvaDQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdGhlckNhdGVnb3J5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBVU0Q8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChzZWxlY3RlZENhdGVnb3J5LmluZGV4T2YoLTEpICE9PSAtMSkgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRTZWxlY3RlZFwiIC8+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PikgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogXCIxMHB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBcIjMycHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogXCIzMnB4XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjE2cHhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiI0VFRjFGNFwiXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT48SWNvbiBpY29uPVwiaGVhcnRVbnNlbGVjdGVkXCIgLz48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4pIDogbnVsbFxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvRm9ybT5cblx0XHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0XHQ8L01vZGFsPlxuXG5cdFx0PC8+XG5cdCk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMGE1OWIyZDk0NzYwZmY2Y2JkZGFcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJ0b2FzdCIsInVzZUNvbnRyYWN0IiwiVXNlRm9ybUlucHV0IiwiY3JlYXRlQmlkIiwiUmVkdWNlQ2F0ZWdvcnkiLCJJY29uIiwiZ2V0Q2F0ZWdvcmllc2J5ZXZlbnRpZCIsImV2ZW50Z2V0YnlpZCIsIm5lYXJBUEkiLCJCaWRORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJUb0FkZHJlc3MiLCJ0b2tlbklkIiwicmVjaWQiLCJSZWFsRXZlbnRJZCIsIkhpZ2hlc3RiaWQiLCJ3YWxsZXRUeXBlIiwiZXZlbnRJZCIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJjb250cmFjdCIsImNvbnRyYWN0Q2VsbyIsIkFsZXJ0Iiwic2V0QWxlcnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJBbW91bnQiLCJBbW91bnRJbnB1dCIsIkV2ZW50R29hbCIsInNldEV2ZW50R29hbCIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiYWxsU2VsZWN0ZWQiLCJzZXRBbGxTZWxlY3RlZCIsIm90aGVyU2VsZWN0ZWQiLCJzZXRPdGhlclNlbGVjdGVkIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJvdGhlckNhdGVnb3J5Iiwic2V0T3RoZXJDYXRlZ29yeSIsImFjdGl2YXRlV2FybmluZ01vZGFsIiwiYWxlcnRFTE0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJmZXRjaENhdGVnb3JpZXMiLCJsZW5ndGgiLCJuZWFyUHJpY2UiLCJuZWFyQ3VycmVuY3lVcmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImRhdGEiLCJtYXJrZXRQYWlycyIsInByaWNlIiwicmVjb3JkIiwiTnVtYmVyIiwiZ2V0Iiwic2VsZWN0IiwiZmlsdGVyQnlGb3JtdWxhIiwidmlldyIsImVhY2hQYWdlIiwicGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwic3Vtb2ZtYWluIiwiZm9yRWFjaCIsInB1c2giLCJmaWVsZHMiLCJkb25lIiwiYmlkTkZUIiwicHJvbWlzZSIsImJpZE5GVGJ5Q0VMTyIsInBlbmRpbmciLCJzdWNjZXNzIiwiYmlkTkZUYnlORUFSIiwiQ3JlYXRpbmdPbkFpclRhYmxlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGUiLCJ3YWxsZXRBY2NvdW50IiwiZ2V0QWNjb3VudElkIiwidG9TdHJpbmciLCJVcGRhdGVBaXJ0YWJsZSIsInVwZGF0ZSIsImkiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJldmVudGNhdGVnb3J5SUQiLCJpZCIsInBlcnBlaWNlIiwidXBkYXRlZHByaWNlIiwiVXBkYXRlZGFtb3VudCIsImxvZyIsImJ1dHRvblByb3BzIiwiaXNTaWduZWRJbiIsImlubmVyVGV4dCIsIndhcm4iLCJyZXF1ZXN0U2lnbkluIiwibmVhckNvbmZpZyIsImNvbnRyYWN0TmFtZSIsImNvbmZpZyIsIm5ldHdvcmtJZCIsImtleVN0b3JlIiwia2V5U3RvcmVzIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibm9kZVVybCIsIndhbGxldFVybCIsImhlbHBlclVybCIsImV4cGxvcmVyVXJsIiwiY29ubmVjdCIsIm5lYXIiLCJhY2NvdW50IiwiYW1vdW50SW5Zb2N0byIsInRvTG9jYWxlU3RyaW5nIiwidXNlR3JvdXBpbmciLCJzZW5kTW9uZXkiLCJocmVmIiwicGF0aG5hbWUiLCJzZWFyY2giLCJFcnJvciIsIkNvbnRyYWN0S2l0Iiwic2VsZWN0Q2F0ZWdvcnkiLCJjYXRlZ29yeV9pZCIsInRlbXBfYXJyIiwidW5zZWxlY3RDYXRlZ29yeSIsInNlbGVjdEFsbENhdGVnb3J5Iiwib3RoZXJTZWxlY3QiLCJkaXNwbGF5IiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25TZWxmIiwiY29sb3IiLCJyaWdodCIsInRvcCIsIm1hcmdpblRvcCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJmbGV4V3JhcCIsImNhdGVnb3J5IiwiYm9yZGVyIiwidGV4dEFsaWduIiwidGl0bGUiLCJpbWFnZSIsImFzcGVjdFJhdGlvIiwibGluZUhlaWdodCIsImFtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=