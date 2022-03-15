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
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_components_UseFormInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/components/UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/pages/Events/event */ "./src/pages/Events/event.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");



















window.nearConfig = _config__WEBPACK_IMPORTED_MODULE_11___default()("development");
function CreateEvents() {
  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_12__["default"])('ERC721'),
      contract = _useContract.contract,
      contractCelo = _useContract.contractCelo; // Application initialization


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
                  "wallettype": EventWalletType
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.NavLink, {
        to: "/login?[/CreateEvents]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: {
          margin: "17px 0 0px 0px",
          width: "100%"
        }
      }, "Login as Event Manager")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      style: {
        margin: "17px 0 0px 0px",
        width: "100%"
      },
      onClick: CreateCategory
    }, "Create Category"));
  }

  function CreateEventButton() {
    if (window.localStorage.getItem("Type") != "manager") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.NavLink, {
        to: "/login?[/CreateEvents]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        style: {
          margin: "17px 0 0px 0px",
          width: "100%"
        }
      }, "Login as Event Manager")));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
      style: {
        margin: "17px 0 0px 0px",
        width: "100%"
      },
      onClick: CreateEvent
    }, "Create Event"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
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
  }, "Event Goal in ", EventWalletType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Control, {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", null, "Generate Plugin?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(CreateEventButton, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_18__["default"], {
    show: createCategoryModal,
    onHide: function onHide() {
      return setCreateCategoryModal(false);
    },
    size: "lg",
    centered: true,
    style: {
      padding: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_18__["default"].Header, {
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
  }, "Category Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Control, {
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
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Control, {
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
  }, "Price of A Piece"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Control, {
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
  }, "Category Image Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_17__["default"].Control, {
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
/******/ 	__webpack_require__.h = function() { return "27dffb9acf5c8a8db11e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjExZDE4ZmJkN2U2YTg0YWJlY2I1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUVBYyxNQUFNLENBQUNDLFVBQVAsR0FBb0JILCtDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQW1DSCxrRUFBVyxDQUFDLFFBQUQsQ0FBOUM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEIsQ0FEbUMsQ0FFbkM7OztBQUVBLHNCQUFzQ1gsK0VBQVksQ0FBQztBQUMvQ1ksSUFBQUEsWUFBWSxFQUFFLEVBRGlDO0FBRS9DQyxJQUFBQSxJQUFJLEVBQUUsTUFGeUM7QUFHL0NDLElBQUFBLFdBQVcsRUFBRSxhQUhrQztBQUkvQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSjJDLEdBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsZUFBbkI7O0FBT0EsdUJBQW9DakIsK0VBQVksQ0FBQztBQUM3Q1ksSUFBQUEsWUFBWSxFQUFFLEVBRCtCO0FBRTdDQyxJQUFBQSxJQUFJLEVBQUUsZ0JBRnVDO0FBRzdDQyxJQUFBQSxXQUFXLEVBQUUsaUJBSGdDO0FBSTdDQyxJQUFBQSxFQUFFLEVBQUU7QUFKeUMsR0FBRCxDQUFoRDtBQUFBO0FBQUEsTUFBT0csU0FBUDtBQUFBLE1BQWtCQyxjQUFsQjs7QUFNQSx1QkFBZ0RuQiwrRUFBWSxDQUFDO0FBQ3pEWSxJQUFBQSxZQUFZLEVBQUUsTUFEMkM7QUFFekRDLElBQUFBLElBQUksRUFBRSxRQUZtRDtBQUd6REUsSUFBQUEsRUFBRSxFQUFFLFlBSHFEO0FBSXpESyxJQUFBQSxjQUFjLEVBQUUsQ0FBQztBQUFFQyxN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QUFEO0FBQUEsYUFBTzFFLG1CQUFtQixDQUFDMEUsQ0FBQyxDQUFDRSxNQUFGLENBQVMvRixLQUFWLENBQTFCO0FBQUEsS0FIZDtBQUlJLFFBQUksRUFBRSxRQUpWO0FBS0ksTUFBRSxFQUFFO0FBTFIsSUFGSixDQXJCSixlQStCSTtBQUFLLFNBQUssRUFBRTtBQUFFdUgsTUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBWixrQkFDSTtBQUFJLFNBQUssRUFBRTtBQUFFUSxNQUFBQSxZQUFZLEVBQUUsTUFBaEI7QUFBd0JXLE1BQUFBLEtBQUssRUFBRTtBQUEvQjtBQUFYLDJCQURKLGVBRUksaURBQUMscUVBQUQ7QUFDSSxTQUFLLEVBQUUxSCxrQkFEWDtBQUVJLGVBQVcsRUFBRSxxQkFGakI7QUFHSSxZQUFRLEVBQUUsa0JBQUM2RSxDQUFEO0FBQUEsYUFBTzVFLHFCQUFxQixDQUFDNEUsQ0FBQyxDQUFDRSxNQUFGLENBQVMvRixLQUFWLENBQTVCO0FBQUEsS0FIZDtBQUlJLFFBQUksRUFBRSxNQUpWO0FBS0ksTUFBRSxFQUFFO0FBTFIsSUFGSixDQS9CSixlQXlDSSxpREFBQyxvQkFBRCxPQXpDSixDQVBKLENBekdGLENBQUYsQ0FESjtBQStKSDs7Ozs7Ozs7VUMzZkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9DcmVhdGVFdmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJ0AvY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVFdmVudEFQSSwgY3JlYXRlRXZlbnRDYXRlZ29yeUFQSSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL2V2ZW50JztcbmltcG9ydCB7IENyZWF0ZVBsdWdpbiB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL2V2ZW50JztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0ljb24nXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCB7XG4gICAgQnVpbGRlckZpZWxkLFxuICAgIEJ1aWxkZXJTdWJtaXRCdXR0b24sXG4gICAgQnVpbGRlclRyYW5zYWN0aW9uLFxufSBmcm9tICdAL21vZHVsZXMvQnVpbGRlci9jb21wb25lbnRzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5cbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIkAvY29uZmlnXCJcblxuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG53aW5kb3cubmVhckNvbmZpZyA9IGdldENvbmZpZyhcImRldmVsb3BtZW50XCIpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgY29udHJhY3QsIGNvbnRyYWN0Q2VsbyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIC8vIEFwcGxpY2F0aW9uIGluaXRpYWxpemF0aW9uXG5cbiAgICBjb25zdCBbRXZlbnRUaXRsZSwgRXZlbnRUaXRsZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IFRpdGxlJyxcbiAgICAgICAgaWQ6ICcnXG4gICAgfSk7XG5cbiAgICBjb25zdCBbRXZlbnREYXRlLCBFdmVudERhdGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICdkYXRldGltZS1sb2NhbCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgRW5kIERhdGUgJyxcbiAgICAgICAgaWQ6ICdlbmRkYXRlJyxcbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnRXYWxsZXRUeXBlLCBFdmVudFdhbGxldFR5cGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiQ0VMT1wiLFxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgaWQ6ICd3YWxsZXRUeXBlJyxcbiAgICAgICAgc2VsZWN0X29wdGlvbnM6IFt7IHZhbHVlOiBcIkNFTE9cIiwgdGV4dDogXCJDRUxPXCIgfSwgeyB2YWx1ZTogXCJORUFSXCIsIHRleHQ6IFwiTkVBUlwiIH1dXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50V2FsbGV0QWRkcmVzcywgRXZlbnRXYWxsZXRBZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnV2FsbGV0JyxcbiAgICAgICAgaWQ6ICd3YWxsZXQnLFxuICAgIH0pO1xuICAgIGNvbnN0IFtFdmVudEdvYWwsIHNldEV2ZW50R29hbF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IFtFdmVudExvZ28sIEV2ZW50TG9nb0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IExvZ28gTGluaycsXG4gICAgICAgIGlkOiAnbG9nbydcbiAgICB9KTtcbiAgICBjb25zdCBbZXZlbnRDYXRlZ29yaWVzLCBzZXRFdmVudENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjcmVhdGVDYXRlZ29yeU1vZGFsLCBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlUaXRsZSwgc2V0TmV3Q2F0ZWdvcnlUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlJbWdMaW5rLCBzZXROZXdDYXRlZ29yeUltZ0xpbmtdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW25ld0NhdGVnb3J5UHJpY2UsIHNldE5ld0NhdGVnb3J5UHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW25ld0NhdGVnb3J5QW1vdW50LCBzZXROZXdDYXRlZ29yeUFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbb3RoZXJDYXRlZ29yeSwgc2V0T3RoZXJDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbTmVhclByaWNlVVNELCBzZXROZWFyUHJpY2VVU0RdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW0NlbG9QcmljZVVTRCwgc2V0Q2Vsb1ByaWNlVVNEXSA9IHVzZVN0YXRlKDApO1xuXG5cblxuICAgIGZ1bmN0aW9uIGdldHByaWNlKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJORUFSXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBOZWFyUHJpY2VVU0Q7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIkNFTE9cIikge1xuICAgICAgICAgICAgcmV0dXJuIENlbG9QcmljZVVTRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0ZUV2ZW50KCkge1xuICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlICYmIHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIlBsZWFzZSBjb25uZWN0IE5lYXIgQWNjb3VudCFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nRXZlbnRBaXJ0YWJsZSwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJFdmVudCBpcyBjcmVhdGluZyBvbiBBaXJ0YWJsZS4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBoYXMgY3JlYXRlZCBvbiBBaXJ0YWJsZSFcIlxuICAgICAgICB9KVxuICAgICAgICBpZiAoRXZlbnRXYWxsZXRUeXBlID09IFwiTkVBUlwiKSB7XG4gICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nRXZlbnQsIHtcbiAgICAgICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEF1cm9yYS4uLlwiLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IGhhcyBjcmVhdGVkIG9uIEF1cm9yYSFcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudENFTE8sIHtcbiAgICAgICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIENFTE8uLi5cIixcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBoYXMgY3JlYXRlZCBvbiBDRUxPIVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kb25hdGlvblwiO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlQ2F0ZUNhdGVnb3JpZXMoZXZlbnRJRCkge1xuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudGNhdGVnb3JpZXMnKS5jcmVhdGUoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudGlkXCI6IGV2ZW50SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogZXZlbnRDYXRlZ29yaWVzW2ldLnByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIjogZXZlbnRDYXRlZ29yaWVzW2ldLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogZXZlbnRDYXRlZ29yaWVzW2ldLmltYWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLCBmdW5jdGlvbiAoZXJyLCByZWNvcmRzKSB7IGNvbnNvbGUuZXJyb3IoZXJyKSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGluZ0V2ZW50QWlydGFibGUoKSB7XG5cbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5jcmVhdGUoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBFdmVudFRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOiBFdmVudERhdGUsXG4gICAgICAgICAgICAgICAgICAgIFwiR29hbFwiOiBFdmVudEdvYWwsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nb2xpbmtcIjogRXZlbnRMb2dvLFxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldFwiOiBFdmVudFdhbGxldEFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0dHlwZVwiOiBFdmVudFdhbGxldFR5cGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0sIGFzeW5jIGZ1bmN0aW9uIChlcnIsIHJlY29yZHMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1Z2luXCIpLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBDcmVhdGVQbHVnaW4oYGh0dHBzOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vZG9uYXRpb24vYXVjdGlvbj9bJHtyZWNvcmRzWzBdLmdldElkKCl9XWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1Z2luXCIpLmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGVDYXRlQ2F0ZWdvcmllcyhyZWNvcmRzWzBdLmZpZWxkcy5pZCksIHtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZzogXCJFdmVudCBDYXRlZ29yaWVzIGFyZSBjcmVhdGluZyBvbiBBaXJ0YWJsZS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRXZlbnQgQ2F0ZWdvcmllcyBoYXMgY3JlYXRlZCBvbiBBaXJ0YWJsZSFcIlxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNvbnN0IENyZWF0aW5nRXZlbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vICBDb250cmFjdFxuICAgICAgICBjb25zb2xlLmxvZyhjb250cmFjdCk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG4gICAgICAgICAgICBUaXRsZTogRXZlbnRUaXRsZSxcbiAgICAgICAgICAgIERhdGU6IEV2ZW50RGF0ZSxcbiAgICAgICAgICAgIEFkZHJlc3M6IEV2ZW50V2FsbGV0QWRkcmVzcyxcbiAgICAgICAgICAgIEdvYWw6IEV2ZW50R29hbCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVFdmVudChcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIH07XG5cbiAgICBjb25zdCBDcmVhdGluZ0V2ZW50Q0VMTyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gIENvbnRyYWN0XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG4gICAgICAgICAgICBUaXRsZTogRXZlbnRUaXRsZSxcbiAgICAgICAgICAgIERhdGU6IEV2ZW50RGF0ZSxcbiAgICAgICAgICAgIEFkZHJlc3M6IEV2ZW50V2FsbGV0QWRkcmVzcyxcbiAgICAgICAgICAgIEdvYWw6IEV2ZW50R29hbCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdENlbG8uY3JlYXRlRXZlbnQoXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICB9O1xuXG5cbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcblxuICAgIGNvbnN0IENyZWF0ZUNhdGVnb3J5ID0gKCkgPT4ge1xuICAgICAgICB2YXIgbmV3X2NhdGVnb3J5ID0ge1xuICAgICAgICAgICAgdGl0bGU6IG5ld0NhdGVnb3J5VGl0bGUsXG4gICAgICAgICAgICBwcmljZTogbmV3Q2F0ZWdvcnlQcmljZSxcbiAgICAgICAgICAgIGFtb3VudDogbmV3Q2F0ZWdvcnlBbW91bnQsXG4gICAgICAgICAgICBpbWFnZTogbmV3Q2F0ZWdvcnlJbWdMaW5rXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRlbXBfYXJyID0gZXZlbnRDYXRlZ29yaWVzO1xuICAgICAgICB0ZW1wX2Fyci5wdXNoKG5ld19jYXRlZ29yeSk7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBfYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gdGVtcF9hcnJbaV0ucHJpY2UgKiB0ZW1wX2FycltpXS5hbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IFByaWNlVVNEID0gTnVtYmVyKGdldHByaWNlKEV2ZW50V2FsbGV0VHlwZSkpXG4gICAgICAgIHZhciB1c2RFdmVudEdvYWwgPSBQcmljZVVTRCAqIE51bWJlcihFdmVudEdvYWwpO1xuICAgICAgICB2YXIgVHdvRGVjaW1hbCA9IGZvcm1hdHRlci5mb3JtYXQodXNkRXZlbnRHb2FsIC0gc3VtKTtcbiAgICAgICAgc2V0T3RoZXJDYXRlZ29yeShUd29EZWNpbWFsLnRvU3RyaW5nKCkpO1xuICAgICAgICBzZXRFdmVudENhdGVnb3JpZXModGVtcF9hcnIpO1xuICAgICAgICBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKGZhbHNlKTtcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlUaXRsZShcIlwiKTtcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rKFwiXCIpO1xuICAgICAgICBzZXROZXdDYXRlZ29yeVByaWNlKDApO1xuICAgICAgICBzZXROZXdDYXRlZ29yeUFtb3VudCgwKTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlQ2F0ZWdvcnkgPSAoZSkgPT4ge1xuICAgICAgICB2YXIgY2F0ZWdvcnlfaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjYXRlZ29yeWlkXCIpO1xuICAgICAgICB2YXIgdGVtcF9hcnIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICE9IGNhdGVnb3J5X2lkKSB7XG4gICAgICAgICAgICAgICAgdGVtcF9hcnIucHVzaChldmVudENhdGVnb3JpZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldEV2ZW50Q2F0ZWdvcmllcyh0ZW1wX2Fycik7XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50R29hbENoYW5nZWQgPSAodmFsdWUpID0+IHtcbiAgICAgICAgc2V0RXZlbnRHb2FsKHZhbHVlKTtcbiAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gZXZlbnRDYXRlZ29yaWVzW2ldLnByaWNlICogZXZlbnRDYXRlZ29yaWVzW2ldLmFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBzZXRPdGhlckNhdGVnb3J5KEV2ZW50R29hbCAtIHN1bSk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcblxuICAgICAgICAvL05lYXIgY3VycmVuY3lcbiAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFsbG5lYXJEYXRhO1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gYWxsbmVhckRhdGEgPSBqc29uKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgbmVhclByaWNlID0gYWxsbmVhckRhdGEuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHNldE5lYXJQcmljZVVTRChuZWFyUHJpY2UpO1xuXG4gICAgICAgIC8vQ2VsbyBjdXJyZW5jeVxuICAgICAgICB2YXIgUHJpY2UgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIEN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9Y2VsbyZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFsbERhdGE7XG4gICAgICAgICAgICBhd2FpdCBmZXRjaChDdXJyZW5jeVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IGFsbERhdGEgPSBqc29uKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgUHJpY2UgPSBhbGxEYXRhLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB2YXIgUHJpY2UgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHNldENlbG9QcmljZVVTRChQcmljZSk7XG5cblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIENyZWF0ZUNhdGVnb3J5QnV0dG9uKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgIT0gXCJtYW5hZ2VyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL0NyZWF0ZUV2ZW50c11cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gYXMgRXZlbnQgTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG5cbiAgICAgICAgICAgIDwvPik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19IG9uQ2xpY2s9e0NyZWF0ZUNhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICBDcmVhdGUgQ2F0ZWdvcnlcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz4pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQ3JlYXRlRXZlbnRCdXR0b24oKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSAhPSBcIm1hbmFnZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svQ3JlYXRlRXZlbnRzXVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiBhcyBFdmVudCBNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICA8Lz4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fSBvbkNsaWNrPXtDcmVhdGVFdmVudH0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC8+KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+PD5cbiAgICAgICAgICAgIDxSb3c+XG5cbiAgICAgICAgICAgICAgICA8Q29sID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NXZ3XCIsIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZzogXCIxOXB4XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOiBcIndoaXRlIHNvbGlkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDMwcHggMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q3JlYXRlIEV2ZW50PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBUaXRsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50VGl0bGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBFbmQgRGF0ZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50RGF0ZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgVHlwZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0VHlwZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRUeXBlID09IFwiTkVBUlwiID8gKDw+PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+QWNjb3VudCBJRCBvZiB7RXZlbnRXYWxsZXRUeXBlfSB3YWxsZXQ8L2g0PjwvPikgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+IDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PldhbGxldCBBZGRyZXNzIGluIHtFdmVudFdhbGxldFR5cGV9PC9oND48Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0QWRkcmVzc0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBHb2FsIGluIHtFdmVudFdhbGxldFR5cGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtFdmVudEdvYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRXZlbnQgR29hbCBpbiAke0V2ZW50V2FsbGV0VHlwZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGV2ZW50R29hbENoYW5nZWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJnb2FsXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q2F0ZWdvcmllcyBmb3IgU3VwcG9ydDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsIG1hcmdpblJpZ2h0OiBcIi0xMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Q2F0ZWdvcmllcy5tYXAoKGV2ZW50Q2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2luZGV4fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWljb24gcG9wdXAtY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5aWQ9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLCBmb250U2l6ZTogMjAsIGNvbG9yOiBcImJsYWNrXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57ZXZlbnRDYXRlZ29yeS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2V2ZW50Q2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IGFzcGVjdFJhdGlvOiAnMScsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57ZXZlbnRDYXRlZ29yeS5wcmljZSAqIGV2ZW50Q2F0ZWdvcnkuYW1vdW50fSBVU0Q8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT4oe2V2ZW50Q2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnRDYXRlZ29yaWVzLmxlbmd0aCA+IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCI4MHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+T3RoZXIgc3VwcG9ydDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlckNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFVTRDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCI4MHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKHRydWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiIzc1NzU3NVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiLCBmb250U2l6ZTogXCI1MHB4XCIgfX0+KzwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgTG9nbyBMaW5rPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRMb2dvSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzE4cHggMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6ICc1cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicGx1Z2luXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R2VuZXJhdGUgUGx1Z2luPzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlRXZlbnRCdXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e2NyZWF0ZUNhdGVnb3J5TW9kYWx9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBzaXplPSdsZydcbiAgICAgICAgICAgICAgICBjZW50ZXJlZCBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBuZXcgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+Q2F0ZWdvcnkgVGl0bGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeVRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IFRpdGxlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeVRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfdGl0bGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkFtb3VudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkFtb3VudFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlBbW91bnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3BpZWNlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5QcmljZSBvZiBBIFBpZWNlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBQcmljZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlQcmljZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfcHJpY2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkNhdGVnb3J5IEltYWdlIExpbms8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeUltZ0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgSW1hZ2UgTGlua1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfaW1hZ2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlQ2F0ZWdvcnlCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPjwvPlxuICAgICk7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjI3ZGZmYjlhY2Y1YzhhOGRiMTFlXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdyIsInRvYXN0IiwiQ29sIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwiQ3JlYXRlUGx1Z2luIiwiTmF2TGluayIsIk1vZGFsIiwiRm9ybSIsImdldENvbmZpZyIsInVzZUNvbnRyYWN0Iiwid2luZG93IiwibmVhckNvbmZpZyIsIkNyZWF0ZUV2ZW50cyIsImNvbnRyYWN0IiwiY29udHJhY3RDZWxvIiwiZGVmYXVsdFZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiLCJFdmVudFRpdGxlIiwiRXZlbnRUaXRsZUlucHV0IiwiRXZlbnREYXRlIiwiRXZlbnREYXRlSW5wdXQiLCJzZWxlY3Rfb3B0aW9ucyIsInZhbHVlIiwidGV4dCIsIkV2ZW50V2FsbGV0VHlwZSIsIkV2ZW50V2FsbGV0VHlwZUlucHV0IiwiRXZlbnRXYWxsZXRBZGRyZXNzIiwiRXZlbnRXYWxsZXRBZGRyZXNzSW5wdXQiLCJFdmVudEdvYWwiLCJzZXRFdmVudEdvYWwiLCJFdmVudExvZ28iLCJFdmVudExvZ29JbnB1dCIsImV2ZW50Q2F0ZWdvcmllcyIsInNldEV2ZW50Q2F0ZWdvcmllcyIsImNyZWF0ZUNhdGVnb3J5TW9kYWwiLCJzZXRDcmVhdGVDYXRlZ29yeU1vZGFsIiwibmV3Q2F0ZWdvcnlUaXRsZSIsInNldE5ld0NhdGVnb3J5VGl0bGUiLCJuZXdDYXRlZ29yeUltZ0xpbmsiLCJzZXROZXdDYXRlZ29yeUltZ0xpbmsiLCJuZXdDYXRlZ29yeVByaWNlIiwic2V0TmV3Q2F0ZWdvcnlQcmljZSIsIm5ld0NhdGVnb3J5QW1vdW50Iiwic2V0TmV3Q2F0ZWdvcnlBbW91bnQiLCJvdGhlckNhdGVnb3J5Iiwic2V0T3RoZXJDYXRlZ29yeSIsIk5lYXJQcmljZVVTRCIsInNldE5lYXJQcmljZVVTRCIsIkNlbG9QcmljZVVTRCIsInNldENlbG9QcmljZVVTRCIsImdldHByaWNlIiwiQ3JlYXRlRXZlbnQiLCJ3YWxsZXRBY2NvdW50IiwiaXNTaWduZWRJbiIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwid2FybmluZyIsInByb21pc2UiLCJDcmVhdGluZ0V2ZW50QWlydGFibGUiLCJwZW5kaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiQ3JlYXRpbmdFdmVudCIsIkNyZWF0aW5nRXZlbnRDRUxPIiwibG9jYXRpb24iLCJocmVmIiwiQ3JlYXRlQ2F0ZUNhdGVnb3JpZXMiLCJldmVudElEIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiaSIsImxlbmd0aCIsImNyZWF0ZSIsInRpdGxlIiwicHJpY2UiLCJhbW91bnQiLCJpbWFnZSIsImVyciIsInJlY29yZHMiLCJjb25zb2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrZWQiLCJob3N0IiwiZ2V0SWQiLCJmaWVsZHMiLCJsb2ciLCJjcmVhdGVkT2JqZWN0IiwiVGl0bGUiLCJEYXRlIiwiQWRkcmVzcyIsIkdvYWwiLCJjcmVhdGVFdmVudCIsInJlc3VsdCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJDcmVhdGVDYXRlZ29yeSIsIm5ld19jYXRlZ29yeSIsInRlbXBfYXJyIiwicHVzaCIsInN1bSIsIlByaWNlVVNEIiwiTnVtYmVyIiwidXNkRXZlbnRHb2FsIiwiVHdvRGVjaW1hbCIsImZvcm1hdCIsInRvU3RyaW5nIiwicmVtb3ZlQ2F0ZWdvcnkiLCJlIiwiY2F0ZWdvcnlfaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJldmVudEdvYWxDaGFuZ2VkIiwiZmV0Y2hEYXRhIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYWxsbmVhckRhdGEiLCJjYXRjaCIsImRhdGEiLCJtYXJrZXRQYWlycyIsIlByaWNlIiwiQ3VycmVuY3lVcmwiLCJhbGxEYXRhIiwiQ3JlYXRlQ2F0ZWdvcnlCdXR0b24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWFyZ2luIiwid2lkdGgiLCJDcmVhdGVFdmVudEJ1dHRvbiIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImV2ZW50Q2F0ZWdvcnkiLCJpbmRleCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJhc3BlY3RSYXRpbyIsIm1hcmdpblRvcCIsImxpbmVIZWlnaHQiLCJhbGlnbkNvbnRlbnQiLCJnYXAiXSwic291cmNlUm9vdCI6IiJ9