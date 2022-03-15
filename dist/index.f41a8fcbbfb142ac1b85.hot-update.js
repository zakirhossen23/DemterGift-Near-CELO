"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/pages/CreateEvents/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/CreateEvents/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateEvents; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/pages/Events/event */ "./src/pages/Events/event.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _services_useContractCelo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/useContractCelo */ "./services/useContractCelo.js");




















window.nearConfig = _config__WEBPACK_IMPORTED_MODULE_11___default()("development");
function CreateEvents() {
  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_12__["default"])('ERC721'),
      contract = _useContract.contract;

  var _useContractCelo = (0,_services_useContractCelo__WEBPACK_IMPORTED_MODULE_13__["default"])('ERC721'),
      contractCelo = _useContractCelo.contractCelo; // Application initialization


  var _UseFormInput = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Title',
    id: ''
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      EventTitle = _UseFormInput2[0],
      EventTitleInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__["default"])({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'Event End Date ',
    id: 'enddate'
  }),
      _UseFormInput4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput3, 2),
      EventDate = _UseFormInput4[0],
      EventDateInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__["default"])({
    defaultValue: "CELO",
    type: 'select',
    id: 'walletType',
    select_options: [{
      value: "CELO",
      text: "CELO"
    }, {
      value: "NEAR",
      text: "NEAR"
    }]
  }),
      _UseFormInput6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput5, 2),
      EventWalletType = _UseFormInput6[0],
      EventWalletTypeInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Wallet',
    id: 'wallet'
  }),
      _UseFormInput8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput7, 2),
      EventWalletAddress = _UseFormInput8[0],
      EventWalletAddressInput = _UseFormInput8[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      EventGoal = _useState2[0],
      setEventGoal = _useState2[1];

  var _UseFormInput9 = (0,_components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__["default"])({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Logo Link',
    id: 'logo'
  }),
      _UseFormInput10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput9, 2),
      EventLogo = _UseFormInput10[0],
      EventLogoInput = _UseFormInput10[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      eventCategories = _useState4[0],
      setEventCategories = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      createCategoryModal = _useState6[0],
      setCreateCategoryModal = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      newCategoryTitle = _useState8[0],
      setNewCategoryTitle = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      newCategoryImgLink = _useState10[0],
      setNewCategoryImgLink = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      newCategoryPrice = _useState12[0],
      setNewCategoryPrice = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      newCategoryAmount = _useState14[0],
      setNewCategoryAmount = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      otherCategory = _useState16[0],
      setOtherCategory = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      NearPriceUSD = _useState18[0],
      setNearPriceUSD = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState20 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
      CeloPriceUSD = _useState20[0],
      setCeloPriceUSD = _useState20[1];

  function getprice(type) {
    if (type == "NEAR") {
      return NearPriceUSD;
    } else if (type == "CELO") {
      return CeloPriceUSD;
    }
  }

  function CreateEvent() {
    return _CreateEvent.apply(this, arguments);
  }

  function _CreateEvent() {
    _CreateEvent = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(window.walletAccount.isSignedIn() == false && window.ethereum.selectedAddress == null)) {
                _context3.next = 3;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.warning("Please connect Near Account!");
              return _context3.abrupt("return");

            case 3:
              _context3.next = 5;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(CreatingEventAirtable, {
                pending: "Event is creating on Airtable...",
                error: "Please try again later",
                success: "Event has created on Airtable!"
              });

            case 5:
              if (!(EventWalletType == "NEAR")) {
                _context3.next = 10;
                break;
              }

              _context3.next = 8;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(CreatingEvent, {
                pending: "Event is creating on Aurora...",
                error: "Please try again later",
                success: "Event has created on Aurora!"
              });

            case 8:
              _context3.next = 12;
              break;

            case 10:
              _context3.next = 12;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(CreatingEventCELO, {
                pending: "Event is creating on CELO...",
                error: "Please try again later",
                success: "Event has created on CELO!"
              });

            case 12:
              window.location.href = "/donation";

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _CreateEvent.apply(this, arguments);
  }

  function CreateCateCategories(_x) {
    return _CreateCateCategories.apply(this, arguments);
  }

  function _CreateCateCategories() {
    _CreateCateCategories = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(eventID) {
      var Airtable, base, i;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              i = 0;

            case 4:
              if (!(i < eventCategories.length)) {
                _context4.next = 10;
                break;
              }

              _context4.next = 7;
              return base('eventcategories').create([{
                "fields": {
                  "eventid": eventID,
                  "title": eventCategories[i].title,
                  "price": eventCategories[i].price,
                  "amount": eventCategories[i].amount,
                  "image": eventCategories[i].image
                }
              }], function (err, records) {
                console.error(err);
              });

            case 7:
              i++;
              _context4.next = 4;
              break;

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _CreateCateCategories.apply(this, arguments);
  }

  function CreatingEventAirtable() {
    return _CreatingEventAirtable.apply(this, arguments);
  }

  function _CreatingEventAirtable() {
    _CreatingEventAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context7.next = 5;
              return base('events').create([{
                "fields": {
                  "title": EventTitle,
                  "description": "",
                  "endDate": EventDate,
                  "Goal": EventGoal,
                  "logolink": EventLogo,
                  "wallet": EventWalletAddress,
                  "wallettype": "NEAR"
                }
              }], /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(err, records) {
                  var _context5;

                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          if (!err) {
                            _context6.next = 3;
                            break;
                          }

                          console.error(err);
                          return _context6.abrupt("return");

                        case 3:
                          if (!document.getElementById("plugin").checked) {
                            _context6.next = 6;
                            break;
                          }

                          _context6.next = 6;
                          return (0,_pages_Events_event__WEBPACK_IMPORTED_MODULE_9__.CreatePlugin)(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context5 = "https://".concat(window.location.host, "/donation/auction?[")).call(_context5, records[0].getId(), "]"));

                        case 6:
                          if (!document.getElementById("plugin").checked) {
                            _context6.next = 9;
                            break;
                          }

                          _context6.next = 9;
                          return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(CreateCateCategories(records[0].fields.id), {
                            pending: "Event Categories are creating on Airtable...",
                            error: "Please try again later",
                            success: "Event Categories has created on Airtable!"
                          });

                        case 9:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x2, _x3) {
                  return _ref3.apply(this, arguments);
                };
              }());

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee6);
    }));
    return _CreatingEventAirtable.apply(this, arguments);
  }

  var CreatingEvent = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var createdObject, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //  Contract
              console.log(contract);
              createdObject = {
                Title: EventTitle,
                Date: EventDate,
                Address: EventWalletAddress,
                Goal: EventGoal
              };
              _context.next = 4;
              return contract.createEvent(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject));

            case 4:
              result = _context.sent;
              console.log(result);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function CreatingEvent() {
      return _ref.apply(this, arguments);
    };
  }();

  var CreatingEventCELO = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var createdObject, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //  Contract
              createdObject = {
                Title: EventTitle,
                Date: EventDate,
                Address: EventWalletAddress,
                Goal: EventGoal
              };
              _context2.next = 3;
              return contractCelo.createEvent(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(createdObject));

            case 3:
              result = _context2.sent;
              console.log(result);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function CreatingEventCELO() {
      return _ref2.apply(this, arguments);
    };
  }();

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  var CreateCategory = function CreateCategory() {
    var new_category = {
      title: newCategoryTitle,
      price: newCategoryPrice,
      amount: newCategoryAmount,
      image: newCategoryImgLink
    };
    var temp_arr = eventCategories;
    temp_arr.push(new_category);
    var sum = 0;

    for (var i = 0; i < temp_arr.length; i++) {
      sum += temp_arr[i].price * temp_arr[i].amount;
    }

    var PriceUSD = Number(getprice(EventWalletType));
    var usdEventGoal = PriceUSD * Number(EventGoal);
    var TwoDecimal = formatter.format(usdEventGoal - sum);
    setOtherCategory(TwoDecimal.toString());
    setEventCategories(temp_arr);
    setCreateCategoryModal(false);
    setNewCategoryTitle("");
    setNewCategoryImgLink("");
    setNewCategoryPrice(0);
    setNewCategoryAmount(0);
  };

  var removeCategory = function removeCategory(e) {
    var category_id = e.target.getAttribute("categoryid");
    var temp_arr = [];

    for (var i = 0; i < eventCategories.length; i++) {
      if (i != category_id) {
        temp_arr.push(eventCategories[i]);
      }
    }

    setEventCategories(temp_arr);
  };

  var eventGoalChanged = function eventGoalChanged(value) {
    setEventGoal(value);
    var sum = 0;

    for (var i = 0; i < eventCategories.length; i++) {
      sum += eventCategories[i].price * eventCategories[i].amount;
    }

    setOtherCategory(EventGoal - sum);
  };

  function fetchData() {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      var nearPrice, nearCurrencyUrl, options, allnearData, Price, CurrencyUrl, _options, allData;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              //Near currency
              nearPrice = 0;
              _context8.prev = 1;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context8.next = 6;
              return fetch(nearCurrencyUrl, options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return allnearData = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 6:
              nearPrice = allnearData.data.marketPairs[0].price;
              _context8.next = 12;
              break;

            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8["catch"](1);
              nearPrice = 0;

            case 12:
              setNearPriceUSD(nearPrice); //Celo currency

              Price = 0;
              _context8.prev = 14;
              CurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=celo&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              _options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context8.next = 19;
              return fetch(CurrencyUrl, _options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return allData = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 19:
              Price = allData.data.marketPairs[0].price;
              _context8.next = 25;
              break;

            case 22:
              _context8.prev = 22;
              _context8.t1 = _context8["catch"](14);
              Price = 0;

            case 25:
              setCeloPriceUSD(Price);

            case 26:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee7, null, [[1, 9], [14, 22]]);
    }));
    return _fetchData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    fetchData();
  }, []);

  function CreateCategoryButton() {
    if (window.localStorage.getItem("Type") != "manager") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.NavLink, {
        to: "/login?[/CreateEvents]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        style: {
          margin: "17px 0 0px 0px",
          width: "100%"
        }
      }, "Login as Event Manager")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
      style: {
        margin: "17px 0 0px 0px",
        width: "100%"
      },
      onClick: CreateCategory
    }, "Create Category"));
  }

  function CreateEventButton() {
    if (window.localStorage.getItem("Type") != "manager") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.NavLink, {
        to: "/login?[/CreateEvents]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        style: {
          margin: "17px 0 0px 0px",
          width: "100%"
        }
      }, "Login as Event Manager")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
      style: {
        margin: "17px 0 0px 0px",
        width: "100%"
      },
      onClick: CreateEvent
    }, "Create Event"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_17__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      width: "45vw",
      background: "transparent",
      padding: "19px",
      borderRadius: "4px",
      height: "100%",
      border: "white solid"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "0px 0px 30px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", {
    style: {
      marginBottom: "10px"
    }
  }, "Create Event")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Event Title"), EventTitleInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Event End Date"), EventDateInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Wallet Type"), EventWalletTypeInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, EventWalletType == "NEAR" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Account ID of ", EventWalletType, " wallet")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Wallet Address in ", EventWalletType)), EventWalletAddressInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Event Goal in ", EventWalletType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Control, {
    value: EventGoal,
    placeholder: "Event Goal in ".concat(EventWalletType),
    onChange: function onChange(e) {
      return eventGoalChanged(e.target.value);
    },
    type: "number",
    id: "goal"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Categories for Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      marginLeft: "-10px",
      marginRight: "-10px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    }
  }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(eventCategories).call(eventCategories, function (eventCategory, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: "33%",
        padding: "0 10px",
        marginBottom: "10px"
      },
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        background: "white",
        padding: "8px 15px",
        border: "1px solid transparent",
        borderRadius: "5px",
        alignItems: "center"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "btn btn-icon popup-close",
      onClick: removeCategory,
      categoryid: index,
      style: {
        display: "flex",
        justifyContent: "flex-end",
        fontSize: 20,
        color: "black"
      }
    }, "X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        marginBottom: "10px",
        color: "#151F28",
        textAlign: "center"
      }
    }, eventCategory.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("img", {
      src: eventCategory.image,
      style: {
        aspectRatio: '1',
        borderRadius: "5px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        marginTop: "10px",
        lineHeight: "14px"
      }
    }, eventCategory.price * eventCategory.amount, " USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h5", {
      style: {
        color: "#151F28",
        textAlign: "center",
        lineHeight: "14px"
      }
    }, "(", eventCategory.amount, " pieces)")));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      width: "33%",
      padding: "0 10px",
      display: "flex",
      flexDirection: "column"
    }
  }, eventCategories.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      background: "white",
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "5px",
      alignItems: "center",
      height: "80px",
      marginBottom: "15px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "#151F28",
      textAlign: "center"
    }
  }, "Other support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h5", {
    style: {
      color: "#151F28",
      textAlign: "center",
      marginTop: "10px",
      lineHeight: "14px"
    }
  }, otherCategory, " USD")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      background: "white",
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "5px",
      alignItems: "center",
      height: "80px",
      display: "flex",
      justifyContent: "center"
    },
    onClick: function onClick() {
      return setCreateCategoryModal(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", {
    style: {
      color: "#757575",
      textAlign: "center",
      lineHeight: "14px",
      fontSize: "50px"
    }
  }, "+"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px"
    }
  }, "Event Logo Link"), EventLogoInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: '18px 0px',
      display: 'flex',
      alignContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("input", {
    type: "checkbox",
    id: "plugin"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", null, "Generate Plugin?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(CreateEventButton, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_19__["default"], {
    show: createCategoryModal,
    onHide: function onHide() {
      return setCreateCategoryModal(false);
    },
    size: "lg",
    centered: true,
    style: {
      padding: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_19__["default"].Header, {
    closeButton: true
  }, "Create a new category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "black"
    }
  }, "Category Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Control, {
    value: newCategoryTitle,
    placeholder: "Category Title",
    onChange: function onChange(e) {
      return setNewCategoryTitle(e.target.value);
    },
    type: "text",
    id: "cat_title"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "black"
    }
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Control, {
    value: newCategoryAmount,
    placeholder: "Amount",
    onChange: function onChange(e) {
      return setNewCategoryAmount(e.target.value);
    },
    type: "number",
    id: "cat_piece"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "black"
    }
  }, "Price of A Piece"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Control, {
    value: newCategoryPrice,
    placeholder: "Category Price",
    onChange: function onChange(e) {
      return setNewCategoryPrice(e.target.value);
    },
    type: "number",
    id: "cat_price"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      margin: "18px 0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      marginBottom: "10px",
      color: "black"
    }
  }, "Category Image Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_18__["default"].Control, {
    value: newCategoryImgLink,
    placeholder: "Category Image Link",
    onChange: function onChange(e) {
      return setNewCategoryImgLink(e.target.value);
    },
    type: "text",
    id: "cat_image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(CreateCategoryButton, null)))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bb3ed0f5c22f2969f45f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmY0MWE4ZmNiYmZiMTQyYWMxYjg1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFPQTtBQUdBO0FBR0E7QUFDQTtBQUVBZSxNQUFNLENBQUNDLFVBQVAsR0FBb0JKLCtDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNLLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSixrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSyxRQUFSLGdCQUFRQSxRQUFSOztBQUNBLHlCQUF5Qkosc0VBQWUsQ0FBQyxRQUFELENBQXhDO0FBQUEsTUFBUUssWUFBUixvQkFBUUEsWUFBUixDQUZtQyxDQUduQzs7O0FBRUEsc0JBQXNDWiwrRUFBWSxDQUFDO0FBQy9DYSxJQUFBQSxZQUFZLEVBQUUsRUFEaUM7QUFFL0NDLElBQUFBLElBQUksRUFBRSxNQUZ5QztBQUcvQ0MsSUFBQUEsV0FBVyxFQUFFLGFBSGtDO0FBSS9DQyxJQUFBQSxFQUFFLEVBQUU7QUFKMkMsR0FBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxlQUFuQjs7QUFPQSx1QkFBb0NsQiwrRUFBWSxDQUFDO0FBQzdDYSxJQUFBQSxZQUFZLEVBQUUsRUFEK0I7QUFFN0NDLElBQUFBLElBQUksRUFBRSxnQkFGdUM7QUFHN0NDLElBQUFBLFdBQVcsRUFBRSxpQkFIZ0M7QUFJN0NDLElBQUFBLEVBQUUsRUFBRTtBQUp5QyxHQUFELENBQWhEO0FBQUE7QUFBQSxNQUFPRyxTQUFQO0FBQUEsTUFBa0JDLGNBQWxCOztBQU1BLHVCQUFnRHBCLCtFQUFZLENBQUM7QUFDekRhLElBQUFBLFlBQVksRUFBRSxNQUQyQztBQUV6REMsSUFBQUEsSUFBSSxFQUFFLFFBRm1EO0FBR3pERSxJQUFBQSxFQUFFLEVBQUUsWUFI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LEVBQUUsZ0JBRmpCO0FBR0ksWUFBUSxFQUFFLGtCQUFDMkUsQ0FBRDtBQUFBLGFBQU8xRSxtQkFBbUIsQ0FBQzBFLENBQUMsQ0FBQ0UsTUFBRixDQUFTL0YsS0FBVixDQUExQjtBQUFBLEtBSGQ7QUFJSSxRQUFJLEVBQUUsUUFKVjtBQUtJLE1BQUUsRUFBRTtBQUxSLElBRkosQ0FyQkosZUErQkk7QUFBSyxTQUFLLEVBQUU7QUFBRXVILE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQVosa0JBQ0k7QUFBSSxTQUFLLEVBQUU7QUFBRVEsTUFBQUEsWUFBWSxFQUFFLE1BQWhCO0FBQXdCVyxNQUFBQSxLQUFLLEVBQUU7QUFBL0I7QUFBWCwyQkFESixlQUVJLGlEQUFDLHFFQUFEO0FBQ0ksU0FBSyxFQUFFMUgsa0JBRFg7QUFFSSxlQUFXLEVBQUUscUJBRmpCO0FBR0ksWUFBUSxFQUFFLGtCQUFDNkUsQ0FBRDtBQUFBLGFBQU81RSxxQkFBcUIsQ0FBQzRFLENBQUMsQ0FBQ0UsTUFBRixDQUFTL0YsS0FBVixDQUE1QjtBQUFBLEtBSGQ7QUFJSSxRQUFJLEVBQUUsTUFKVjtBQUtJLE1BQUUsRUFBRTtBQUxSLElBRkosQ0EvQkosZUF5Q0ksaURBQUMsb0JBQUQsT0F6Q0osQ0FQSixDQXpHRixDQUFGLENBREo7QUErSkg7Ozs7Ozs7O1VDN2ZELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvQ3JlYXRlRXZlbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlRXZlbnRBUEksIGNyZWF0ZUV2ZW50Q2F0ZWdvcnlBUEkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy9ldmVudCc7XG5pbXBvcnQgeyBDcmVhdGVQbHVnaW4gfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy9ldmVudCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9JY29uJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQge1xuICAgIEJ1aWxkZXJGaWVsZCxcbiAgICBCdWlsZGVyU3VibWl0QnV0dG9uLFxuICAgIEJ1aWxkZXJUcmFuc2FjdGlvbixcbn0gZnJvbSAnQC9tb2R1bGVzL0J1aWxkZXIvY29tcG9uZW50cydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xuXG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJAL2NvbmZpZ1wiXG5cblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCB1c2VDb250cmFjdENlbG8gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3RDZWxvJztcblxud2luZG93Lm5lYXJDb25maWcgPSBnZXRDb25maWcoXCJkZXZlbG9wbWVudFwiKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUV2ZW50cygpIHtcbiAgICBjb25zdCB7IGNvbnRyYWN0IH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG4gICAgY29uc3QgeyBjb250cmFjdENlbG8gfSA9IHVzZUNvbnRyYWN0Q2VsbygnRVJDNzIxJyk7XG4gICAgLy8gQXBwbGljYXRpb24gaW5pdGlhbGl6YXRpb25cblxuICAgIGNvbnN0IFtFdmVudFRpdGxlLCBFdmVudFRpdGxlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgVGl0bGUnLFxuICAgICAgICBpZDogJydcbiAgICB9KTtcblxuICAgIGNvbnN0IFtFdmVudERhdGUsIEV2ZW50RGF0ZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ2RhdGV0aW1lLWxvY2FsJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBFbmQgRGF0ZSAnLFxuICAgICAgICBpZDogJ2VuZGRhdGUnLFxuICAgIH0pO1xuICAgIGNvbnN0IFtFdmVudFdhbGxldFR5cGUsIEV2ZW50V2FsbGV0VHlwZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJDRUxPXCIsXG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICBpZDogJ3dhbGxldFR5cGUnLFxuICAgICAgICBzZWxlY3Rfb3B0aW9uczogW3sgdmFsdWU6IFwiQ0VMT1wiLCB0ZXh0OiBcIkNFTE9cIiB9LCB7IHZhbHVlOiBcIk5FQVJcIiwgdGV4dDogXCJORUFSXCIgfV1cbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnRXYWxsZXRBZGRyZXNzLCBFdmVudFdhbGxldEFkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdXYWxsZXQnLFxuICAgICAgICBpZDogJ3dhbGxldCcsXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50R29hbCwgc2V0RXZlbnRHb2FsXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgW0V2ZW50TG9nbywgRXZlbnRMb2dvSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgTG9nbyBMaW5rJyxcbiAgICAgICAgaWQ6ICdsb2dvJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtldmVudENhdGVnb3JpZXMsIHNldEV2ZW50Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2NyZWF0ZUNhdGVnb3J5TW9kYWwsIHNldENyZWF0ZUNhdGVnb3J5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtuZXdDYXRlZ29yeVRpdGxlLCBzZXROZXdDYXRlZ29yeVRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtuZXdDYXRlZ29yeUltZ0xpbmssIHNldE5ld0NhdGVnb3J5SW1nTGlua10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlQcmljZSwgc2V0TmV3Q2F0ZWdvcnlQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlBbW91bnQsIHNldE5ld0NhdGVnb3J5QW1vdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtvdGhlckNhdGVnb3J5LCBzZXRPdGhlckNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtOZWFyUHJpY2VVU0QsIHNldE5lYXJQcmljZVVTRF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbQ2Vsb1ByaWNlVVNELCBzZXRDZWxvUHJpY2VVU0RdID0gdXNlU3RhdGUoMCk7XG5cblxuXG4gICAgZnVuY3Rpb24gZ2V0cHJpY2UodHlwZSkge1xuICAgICAgICBpZiAodHlwZSA9PSBcIk5FQVJcIikge1xuICAgICAgICAgICAgcmV0dXJuIE5lYXJQcmljZVVTRDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFwiQ0VMT1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gQ2Vsb1ByaWNlVVNEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlRXZlbnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UgJiYgd2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0b2FzdC53YXJuaW5nKFwiUGxlYXNlIGNvbm5lY3QgTmVhciBBY2NvdW50IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudEFpcnRhYmxlLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEFpcnRhYmxlLi4uXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IGhhcyBjcmVhdGVkIG9uIEFpcnRhYmxlIVwiXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChFdmVudFdhbGxldFR5cGUgPT0gXCJORUFSXCIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudCwge1xuICAgICAgICAgICAgICAgIHBlbmRpbmc6IFwiRXZlbnQgaXMgY3JlYXRpbmcgb24gQXVyb3JhLi4uXCIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRXZlbnQgaGFzIGNyZWF0ZWQgb24gQXVyb3JhIVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ0V2ZW50Q0VMTywge1xuICAgICAgICAgICAgICAgIHBlbmRpbmc6IFwiRXZlbnQgaXMgY3JlYXRpbmcgb24gQ0VMTy4uLlwiLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IGhhcyBjcmVhdGVkIG9uIENFTE8hXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2RvbmF0aW9uXCI7XG5cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGVDYXRlQ2F0ZWdvcmllcyhldmVudElEKSB7XG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLmNyZWF0ZShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50aWRcIjogZXZlbnRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogZXZlbnRDYXRlZ29yaWVzW2ldLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiBldmVudENhdGVnb3JpZXNbaV0ucHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiBldmVudENhdGVnb3JpZXNbaV0uYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBldmVudENhdGVnb3JpZXNbaV0uaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sIGZ1bmN0aW9uIChlcnIsIHJlY29yZHMpIHsgY29uc29sZS5lcnJvcihlcnIpIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nRXZlbnRBaXJ0YWJsZSgpIHtcblxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLmNyZWF0ZShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IEV2ZW50VGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6IEV2ZW50RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJHb2FsXCI6IEV2ZW50R29hbCxcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dvbGlua1wiOiBFdmVudExvZ28sXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0XCI6IEV2ZW50V2FsbGV0QWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXR0eXBlXCI6IFwiTkVBUlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdLCBhc3luYyBmdW5jdGlvbiAoZXJyLCByZWNvcmRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdWdpblwiKS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgQ3JlYXRlUGx1Z2luKGBodHRwczovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L2RvbmF0aW9uL2F1Y3Rpb24/WyR7cmVjb3Jkc1swXS5nZXRJZCgpfV1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdWdpblwiKS5jaGVja2VkKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRlQ2F0ZUNhdGVnb3JpZXMocmVjb3Jkc1swXS5maWVsZHMuaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmc6IFwiRXZlbnQgQ2F0ZWdvcmllcyBhcmUgY3JlYXRpbmcgb24gQWlydGFibGUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IENhdGVnb3JpZXMgaGFzIGNyZWF0ZWQgb24gQWlydGFibGUhXCJcbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBDcmVhdGluZ0V2ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyAgQ29udHJhY3RcbiAgICAgICAgY29uc29sZS5sb2coY29udHJhY3QpO1xuICAgICAgICBjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuICAgICAgICAgICAgVGl0bGU6IEV2ZW50VGl0bGUsXG4gICAgICAgICAgICBEYXRlOiBFdmVudERhdGUsXG4gICAgICAgICAgICBBZGRyZXNzOiBFdmVudFdhbGxldEFkZHJlc3MsXG4gICAgICAgICAgICBHb2FsOiBFdmVudEdvYWwsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlRXZlbnQoXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgQ3JlYXRpbmdFdmVudENFTE8gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vICBDb250cmFjdFxuICAgICAgICBjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuICAgICAgICAgICAgVGl0bGU6IEV2ZW50VGl0bGUsXG4gICAgICAgICAgICBEYXRlOiBFdmVudERhdGUsXG4gICAgICAgICAgICBBZGRyZXNzOiBFdmVudFdhbGxldEFkZHJlc3MsXG4gICAgICAgICAgICBHb2FsOiBFdmVudEdvYWwsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RDZWxvLmNyZWF0ZUV2ZW50KFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdClcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgfTtcblxuXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBDcmVhdGVDYXRlZ29yeSA9ICgpID0+IHtcbiAgICAgICAgdmFyIG5ld19jYXRlZ29yeSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBuZXdDYXRlZ29yeVRpdGxlLFxuICAgICAgICAgICAgcHJpY2U6IG5ld0NhdGVnb3J5UHJpY2UsXG4gICAgICAgICAgICBhbW91bnQ6IG5ld0NhdGVnb3J5QW1vdW50LFxuICAgICAgICAgICAgaW1hZ2U6IG5ld0NhdGVnb3J5SW1nTGlua1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZW1wX2FyciA9IGV2ZW50Q2F0ZWdvcmllcztcbiAgICAgICAgdGVtcF9hcnIucHVzaChuZXdfY2F0ZWdvcnkpO1xuICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wX2Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHRlbXBfYXJyW2ldLnByaWNlICogdGVtcF9hcnJbaV0uYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIGxldCBQcmljZVVTRCA9IE51bWJlcihnZXRwcmljZShFdmVudFdhbGxldFR5cGUpKVxuICAgICAgICB2YXIgdXNkRXZlbnRHb2FsID0gUHJpY2VVU0QgKiBOdW1iZXIoRXZlbnRHb2FsKTtcbiAgICAgICAgdmFyIFR3b0RlY2ltYWwgPSBmb3JtYXR0ZXIuZm9ybWF0KHVzZEV2ZW50R29hbCAtIHN1bSk7XG4gICAgICAgIHNldE90aGVyQ2F0ZWdvcnkoVHdvRGVjaW1hbC50b1N0cmluZygpKTtcbiAgICAgICAgc2V0RXZlbnRDYXRlZ29yaWVzKHRlbXBfYXJyKTtcbiAgICAgICAgc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbChmYWxzZSk7XG4gICAgICAgIHNldE5ld0NhdGVnb3J5VGl0bGUoXCJcIik7XG4gICAgICAgIHNldE5ld0NhdGVnb3J5SW1nTGluayhcIlwiKTtcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlQcmljZSgwKTtcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlBbW91bnQoMCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZUNhdGVnb3J5ID0gKGUpID0+IHtcbiAgICAgICAgdmFyIGNhdGVnb3J5X2lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlpZFwiKTtcbiAgICAgICAgdmFyIHRlbXBfYXJyID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAhPSBjYXRlZ29yeV9pZCkge1xuICAgICAgICAgICAgICAgIHRlbXBfYXJyLnB1c2goZXZlbnRDYXRlZ29yaWVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRFdmVudENhdGVnb3JpZXModGVtcF9hcnIpO1xuICAgIH1cbiAgICBjb25zdCBldmVudEdvYWxDaGFuZ2VkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldEV2ZW50R29hbCh2YWx1ZSk7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGV2ZW50Q2F0ZWdvcmllc1tpXS5wcmljZSAqIGV2ZW50Q2F0ZWdvcmllc1tpXS5hbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0T3RoZXJDYXRlZ29yeShFdmVudEdvYWwgLSBzdW0pO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG5cbiAgICAgICAgLy9OZWFyIGN1cnJlbmN5XG4gICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhbGxuZWFyRGF0YTtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IGFsbG5lYXJEYXRhID0ganNvbilcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgIG5lYXJQcmljZSA9IGFsbG5lYXJEYXRhLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB2YXIgbmVhclByaWNlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBzZXROZWFyUHJpY2VVU0QobmVhclByaWNlKTtcblxuICAgICAgICAvL0NlbG8gY3VycmVuY3lcbiAgICAgICAgdmFyIFByaWNlID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPWNlbG8mc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhbGxEYXRhO1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2goQ3VycmVuY3lVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBhbGxEYXRhID0ganNvbilcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgIFByaWNlID0gYWxsRGF0YS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdmFyIFByaWNlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBzZXRDZWxvUHJpY2VVU0QoUHJpY2UpO1xuXG5cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBDcmVhdGVDYXRlZ29yeUJ1dHRvbigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpICE9IFwibWFuYWdlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9naW4/Wy9DcmVhdGVFdmVudHNdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIGFzIEV2ZW50IE1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICA8Lz4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fSBvbkNsaWNrPXtDcmVhdGVDYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIENhdGVnb3J5XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC8+KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIENyZWF0ZUV2ZW50QnV0dG9uKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgIT0gXCJtYW5hZ2VyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL0NyZWF0ZUV2ZW50c11cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gYXMgRXZlbnQgTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cblxuICAgICAgICAgICAgPC8+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gb25DbGljaz17Q3JlYXRlRXZlbnR9PlxuICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvPilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Pjw+XG4gICAgICAgICAgICA8Um93PlxuXG4gICAgICAgICAgICAgICAgPENvbCA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDV2d1wiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCAzMHB4IDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNyZWF0ZSBFdmVudDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgVGl0bGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFRpdGxlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgRW5kIERhdGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudERhdGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+V2FsbGV0IFR5cGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldFR5cGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0VHlwZSA9PSBcIk5FQVJcIiA/ICg8PjxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkFjY291bnQgSUQgb2Yge0V2ZW50V2FsbGV0VHlwZX0gd2FsbGV0PC9oND48Lz4pIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PiA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgQWRkcmVzcyBpbiB7RXZlbnRXYWxsZXRUeXBlfTwvaDQ+PC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldEFkZHJlc3NJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgR29hbCBpbiB7RXZlbnRXYWxsZXRUeXBlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17RXZlbnRHb2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEV2ZW50IEdvYWwgaW4gJHtFdmVudFdhbGxldFR5cGV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBldmVudEdvYWxDaGFuZ2VkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiZ29hbFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNhdGVnb3JpZXMgZm9yIFN1cHBvcnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMTBweFwiLCBtYXJnaW5SaWdodDogXCItMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudENhdGVnb3JpZXMubWFwKChldmVudENhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtpbmRleH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pY29uIHBvcHVwLWNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVDYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeWlkPXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiwgZm9udFNpemU6IDIwLCBjb2xvcjogXCJibGFja1wiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2V2ZW50Q2F0ZWdvcnkudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtldmVudENhdGVnb3J5LmltYWdlfSBzdHlsZT17eyBhc3BlY3RSYXRpbzogJzEnLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e2V2ZW50Q2F0ZWdvcnkucHJpY2UgKiBldmVudENhdGVnb3J5LmFtb3VudH0gVVNEPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtldmVudENhdGVnb3J5LmFtb3VudH0gcGllY2VzKTwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGggPiAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiODBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19Pk90aGVyIHN1cHBvcnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBVU0Q8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiODBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0gb25DbGljaz17KCkgPT4gc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbCh0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiM3NTc1NzVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiwgZm9udFNpemU6IFwiNTBweFwiIH19Pis8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IExvZ28gTGluazwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50TG9nb0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxOHB4IDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAnNXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInBsdWdpblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkdlbmVyYXRlIFBsdWdpbj88L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUV2ZW50QnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtjcmVhdGVDYXRlZ29yeU1vZGFsfVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgc2l6ZT0nbGcnXG4gICAgICAgICAgICAgICAgY2VudGVyZWQgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkNhdGVnb3J5IFRpdGxlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBUaXRsZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3RpdGxlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5BbW91bnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJBbW91bnRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9waWVjZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+UHJpY2Ugb2YgQSBQaWVjZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgUHJpY2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5UHJpY2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3ByaWNlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5DYXRlZ29yeSBJbWFnZSBMaW5rPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlJbWdMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IEltYWdlIExpbmtcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5SW1nTGluayhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X2ltYWdlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUNhdGVnb3J5QnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz48Lz5cbiAgICApO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJiYjNlZDBmNWMyMmYyOTY5ZjQ1ZlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3ciLCJ0b2FzdCIsIkNvbCIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsIkNyZWF0ZVBsdWdpbiIsIk5hdkxpbmsiLCJNb2RhbCIsIkZvcm0iLCJnZXRDb25maWciLCJ1c2VDb250cmFjdCIsInVzZUNvbnRyYWN0Q2VsbyIsIndpbmRvdyIsIm5lYXJDb25maWciLCJDcmVhdGVFdmVudHMiLCJjb250cmFjdCIsImNvbnRyYWN0Q2VsbyIsImRlZmF1bHRWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiRXZlbnRUaXRsZSIsIkV2ZW50VGl0bGVJbnB1dCIsIkV2ZW50RGF0ZSIsIkV2ZW50RGF0ZUlucHV0Iiwic2VsZWN0X29wdGlvbnMiLCJ2YWx1ZSIsInRleHQiLCJFdmVudFdhbGxldFR5cGUiLCJFdmVudFdhbGxldFR5cGVJbnB1dCIsIkV2ZW50V2FsbGV0QWRkcmVzcyIsIkV2ZW50V2FsbGV0QWRkcmVzc0lucHV0IiwiRXZlbnRHb2FsIiwic2V0RXZlbnRHb2FsIiwiRXZlbnRMb2dvIiwiRXZlbnRMb2dvSW5wdXQiLCJldmVudENhdGVnb3JpZXMiLCJzZXRFdmVudENhdGVnb3JpZXMiLCJjcmVhdGVDYXRlZ29yeU1vZGFsIiwic2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbCIsIm5ld0NhdGVnb3J5VGl0bGUiLCJzZXROZXdDYXRlZ29yeVRpdGxlIiwibmV3Q2F0ZWdvcnlJbWdMaW5rIiwic2V0TmV3Q2F0ZWdvcnlJbWdMaW5rIiwibmV3Q2F0ZWdvcnlQcmljZSIsInNldE5ld0NhdGVnb3J5UHJpY2UiLCJuZXdDYXRlZ29yeUFtb3VudCIsInNldE5ld0NhdGVnb3J5QW1vdW50Iiwib3RoZXJDYXRlZ29yeSIsInNldE90aGVyQ2F0ZWdvcnkiLCJOZWFyUHJpY2VVU0QiLCJzZXROZWFyUHJpY2VVU0QiLCJDZWxvUHJpY2VVU0QiLCJzZXRDZWxvUHJpY2VVU0QiLCJnZXRwcmljZSIsIkNyZWF0ZUV2ZW50Iiwid2FsbGV0QWNjb3VudCIsImlzU2lnbmVkSW4iLCJldGhlcmV1bSIsInNlbGVjdGVkQWRkcmVzcyIsIndhcm5pbmciLCJwcm9taXNlIiwiQ3JlYXRpbmdFdmVudEFpcnRhYmxlIiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsIkNyZWF0aW5nRXZlbnQiLCJDcmVhdGluZ0V2ZW50Q0VMTyIsImxvY2F0aW9uIiwiaHJlZiIsIkNyZWF0ZUNhdGVDYXRlZ29yaWVzIiwiZXZlbnRJRCIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImNvbmZpZ3VyZSIsImVuZHBvaW50VXJsIiwiYXBpS2V5IiwiYmFzZSIsImkiLCJsZW5ndGgiLCJjcmVhdGUiLCJ0aXRsZSIsInByaWNlIiwiYW1vdW50IiwiaW1hZ2UiLCJlcnIiLCJyZWNvcmRzIiwiY29uc29sZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwiaG9zdCIsImdldElkIiwiZmllbGRzIiwibG9nIiwiY3JlYXRlZE9iamVjdCIsIlRpdGxlIiwiRGF0ZSIsIkFkZHJlc3MiLCJHb2FsIiwiY3JlYXRlRXZlbnQiLCJyZXN1bHQiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiQ3JlYXRlQ2F0ZWdvcnkiLCJuZXdfY2F0ZWdvcnkiLCJ0ZW1wX2FyciIsInB1c2giLCJzdW0iLCJQcmljZVVTRCIsIk51bWJlciIsInVzZEV2ZW50R29hbCIsIlR3b0RlY2ltYWwiLCJmb3JtYXQiLCJ0b1N0cmluZyIsInJlbW92ZUNhdGVnb3J5IiwiZSIsImNhdGVnb3J5X2lkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZXZlbnRHb2FsQ2hhbmdlZCIsImZldGNoRGF0YSIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImFsbG5lYXJEYXRhIiwiY2F0Y2giLCJkYXRhIiwibWFya2V0UGFpcnMiLCJQcmljZSIsIkN1cnJlbmN5VXJsIiwiYWxsRGF0YSIsIkNyZWF0ZUNhdGVnb3J5QnV0dG9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1hcmdpbiIsIndpZHRoIiwiQ3JlYXRlRXZlbnRCdXR0b24iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJldmVudENhdGVnb3J5IiwiaW5kZXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwiYXNwZWN0UmF0aW8iLCJtYXJnaW5Ub3AiLCJsaW5lSGVpZ2h0IiwiYWxpZ25Db250ZW50IiwiZ2FwIl0sInNvdXJjZVJvb3QiOiIifQ==