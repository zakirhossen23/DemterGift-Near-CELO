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
      contract = _useContract.contract; // Application initialization


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

  function getprice(_x) {
    return _getprice.apply(this, arguments);
  }

  function _getprice() {
    _getprice = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(type) {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(type == "NEAR")) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", NearPriceUSD);

            case 4:
              if (!(type == "CELO")) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", CeloPriceUSD);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getprice.apply(this, arguments);
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
              if (!(window.walletAccount.isSignedIn() == false)) {
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
              _context3.next = 7;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(CreatingEvent, {
                pending: "Event is creating on Aurora...",
                error: "Please try again later",
                success: "Event has created on Aurora!"
              });

            case 7:
              window.location.href = "/donation";

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _CreateEvent.apply(this, arguments);
  }

  function CreateCateCategories(_x2) {
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
                var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(err, records) {
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

                return function (_x3, _x4) {
                  return _ref2.apply(this, arguments);
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
/******/ 	__webpack_require__.h = function() { return "b4c23af5b4c06ae94782"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjRiNzM5Njk1ZGU2NDg0NTIxOWIwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUVBYyxNQUFNLENBQUNDLFVBQVAsR0FBb0JILCtDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSCxrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSLENBRG1DLENBRW5DOzs7QUFFQSxzQkFBc0NWLCtFQUFZLENBQUM7QUFDL0NXLElBQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLEVBQUUsRUFBRTtBQUoyQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQU9BLHVCQUFvQ2hCLCtFQUFZLENBQUM7QUFDN0NXLElBQUFBLFlBQVksRUFBRSxFQUQrQjtBQUU3Q0MsSUFBQUEsSUFBSSxFQUFFLGdCQUZ1QztBQUc3Q0MsSUFBQUEsV0FBVyxFQUFFLGlCQUhnQztBQUk3Q0MsSUFBQUEsRUFBRSxFQUFFO0FBSnlDLEdBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9HLFNBQVA7QUFBQSxNQUFrQkMsY0FBbEI7O0FBTUEsdUJBQWdEbEIsK0VBQVksQ0FBQztBQUN6RFcsSUFBQUEsWUFBWSxFQUFFLE1BRDJDO0FBRXpEQyxJQUFBQSxJQUFJLEVBQUUsUUFGbUQ7QUFHekRFLElBQUFBLEVBQUUsRUFBRSxZQUhxRDtBQUl6REssSUFBQUEsY0FBYyxFQUFFLENBQUM7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFB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QUlJLFFBQUksRUFBRSxRQUpWO0FBS0ksTUFBRSxFQUFFO0FBTFIsSUFGSixDQVhKLGVBcUJJO0FBQUssU0FBSyxFQUFFO0FBQUVvSCxNQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUFaLGtCQUNJO0FBQUksU0FBSyxFQUFFO0FBQUVRLE1BQUFBLFlBQVksRUFBRSxNQUFoQjtBQUF3QlcsTUFBQUEsS0FBSyxFQUFFO0FBQS9CO0FBQVgsd0JBREosZUFFSSxpREFBQyxxRUFBRDtBQUNJLFNBQUssRUFBRXJILGdCQURYO0FBRUksZUFBVyxFQUFFLGdCQUZqQjtBQUdJLFlBQVEsRUFBRSxrQkFBQ3dFLENBQUQ7QUFBQSxhQUFPdkUsbUJBQW1CLENBQUN1RSxDQUFDLENBQUNFLE1BQUYsQ0FBUzVGLEtBQVYsQ0FBMUI7QUFBQSxLQUhkO0FBSUksUUFBSSxFQUFFLFFBSlY7QUFLSSxNQUFFLEVBQUU7QUFMUixJQUZKLENBckJKLGVBK0JJO0FBQUssU0FBSyxFQUFFO0FBQUVvSCxNQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUFaLGtCQUNJO0FBQUksU0FBSyxFQUFFO0FBQUVRLE1BQUFBLFlBQVksRUFBRSxNQUFoQjtBQUF3QlcsTUFBQUEsS0FBSyxFQUFFO0FBQS9CO0FBQVgsMkJBREosZUFFSSxpREFBQyxxRUFBRDtBQUNJLFNBQUssRUFBRXZILGtCQURYO0FBRUksZUFBVyxFQUFFLHFCQUZqQjtBQUdJLFlBQVEsRUFBRSxrQkFBQzBFLENBQUQ7QUFBQSxhQUFPekUscUJBQXFCLENBQUN5RSxDQUFDLENBQUNFLE1BQUYsQ0FBUzVGLEtBQVYsQ0FBNUI7QUFBQSxLQUhkO0FBSUksUUFBSSxFQUFFLE1BSlY7QUFLSSxNQUFFLEVBQUU7QUFMUixJQUZKLENBL0JKLGVBeUNJLGlEQUFDLG9CQUFELE9BekNKLENBUEosQ0F6R0YsQ0FBRixDQURKO0FBK0pIOzs7Ozs7OztVQ2plRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL0NyZWF0ZUV2ZW50cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcbmltcG9ydCB7IGNyZWF0ZUV2ZW50QVBJLCBjcmVhdGVFdmVudENhdGVnb3J5QVBJIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvZXZlbnQnO1xuaW1wb3J0IHsgQ3JlYXRlUGx1Z2luIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvZXZlbnQnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vSWNvbidcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IHtcbiAgICBCdWlsZGVyRmllbGQsXG4gICAgQnVpbGRlclN1Ym1pdEJ1dHRvbixcbiAgICBCdWlsZGVyVHJhbnNhY3Rpb24sXG59IGZyb20gJ0AvbW9kdWxlcy9CdWlsZGVyL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcblxuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwiQC9jb25maWdcIlxuXG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5cbndpbmRvdy5uZWFyQ29uZmlnID0gZ2V0Q29uZmlnKFwiZGV2ZWxvcG1lbnRcIik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XG4gICAgY29uc3QgeyBjb250cmFjdCB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIC8vIEFwcGxpY2F0aW9uIGluaXRpYWxpemF0aW9uXG5cbiAgICBjb25zdCBbRXZlbnRUaXRsZSwgRXZlbnRUaXRsZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IFRpdGxlJyxcbiAgICAgICAgaWQ6ICcnXG4gICAgfSk7XG5cbiAgICBjb25zdCBbRXZlbnREYXRlLCBFdmVudERhdGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICdkYXRldGltZS1sb2NhbCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgRW5kIERhdGUgJyxcbiAgICAgICAgaWQ6ICdlbmRkYXRlJyxcbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnRXYWxsZXRUeXBlLCBFdmVudFdhbGxldFR5cGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiQ0VMT1wiLFxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgaWQ6ICd3YWxsZXRUeXBlJyxcbiAgICAgICAgc2VsZWN0X29wdGlvbnM6IFt7IHZhbHVlOiBcIkNFTE9cIiwgdGV4dDogXCJDRUxPXCIgfSwgeyB2YWx1ZTogXCJORUFSXCIsIHRleHQ6IFwiTkVBUlwiIH1dXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50V2FsbGV0QWRkcmVzcywgRXZlbnRXYWxsZXRBZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnV2FsbGV0JyxcbiAgICAgICAgaWQ6ICd3YWxsZXQnLFxuICAgIH0pO1xuICAgIGNvbnN0IFtFdmVudEdvYWwsIHNldEV2ZW50R29hbF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IFtFdmVudExvZ28sIEV2ZW50TG9nb0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IExvZ28gTGluaycsXG4gICAgICAgIGlkOiAnbG9nbydcbiAgICB9KTtcbiAgICBjb25zdCBbZXZlbnRDYXRlZ29yaWVzLCBzZXRFdmVudENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtjcmVhdGVDYXRlZ29yeU1vZGFsLCBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlUaXRsZSwgc2V0TmV3Q2F0ZWdvcnlUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlJbWdMaW5rLCBzZXROZXdDYXRlZ29yeUltZ0xpbmtdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW25ld0NhdGVnb3J5UHJpY2UsIHNldE5ld0NhdGVnb3J5UHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW25ld0NhdGVnb3J5QW1vdW50LCBzZXROZXdDYXRlZ29yeUFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbb3RoZXJDYXRlZ29yeSwgc2V0T3RoZXJDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbTmVhclByaWNlVVNELCBzZXROZWFyUHJpY2VVU0RdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW0NlbG9QcmljZVVTRCwgc2V0Q2Vsb1ByaWNlVVNEXSA9IHVzZVN0YXRlKDApO1xuXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldHByaWNlKHR5cGUpe1xuICAgICAgICBpZiAodHlwZSA9PSBcIk5FQVJcIil7XG4gICAgICAgICAgICByZXR1cm4gTmVhclByaWNlVVNEO1xuICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PSBcIkNFTE9cIil7XG4gICAgICAgICAgICByZXR1cm4gQ2Vsb1ByaWNlVVNEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlRXZlbnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJQbGVhc2UgY29ubmVjdCBOZWFyIEFjY291bnQhXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ0V2ZW50QWlydGFibGUsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRXZlbnQgaXMgY3JlYXRpbmcgb24gQWlydGFibGUuLi5cIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRXZlbnQgaGFzIGNyZWF0ZWQgb24gQWlydGFibGUhXCJcbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nRXZlbnQsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRXZlbnQgaXMgY3JlYXRpbmcgb24gQXVyb3JhLi4uXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IGhhcyBjcmVhdGVkIG9uIEF1cm9yYSFcIlxuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2RvbmF0aW9uXCI7XG5cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGVDYXRlQ2F0ZWdvcmllcyhldmVudElEKSB7XG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50Y2F0ZWdvcmllcycpLmNyZWF0ZShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50aWRcIjogZXZlbnRJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogZXZlbnRDYXRlZ29yaWVzW2ldLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmljZVwiOiBldmVudENhdGVnb3JpZXNbaV0ucHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiBldmVudENhdGVnb3JpZXNbaV0uYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBldmVudENhdGVnb3JpZXNbaV0uaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sIGZ1bmN0aW9uIChlcnIsIHJlY29yZHMpIHsgY29uc29sZS5lcnJvcihlcnIpIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nRXZlbnRBaXJ0YWJsZSgpIHtcblxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLmNyZWF0ZShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IEV2ZW50VGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbmREYXRlXCI6IEV2ZW50RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJHb2FsXCI6IEV2ZW50R29hbCxcbiAgICAgICAgICAgICAgICAgICAgXCJsb2dvbGlua1wiOiBFdmVudExvZ28sXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0XCI6IEV2ZW50V2FsbGV0QWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXR0eXBlXCI6IFwiTkVBUlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdLCBhc3luYyBmdW5jdGlvbiAoZXJyLCByZWNvcmRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdWdpblwiKS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgQ3JlYXRlUGx1Z2luKGBodHRwczovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L2RvbmF0aW9uL2F1Y3Rpb24/WyR7cmVjb3Jkc1swXS5nZXRJZCgpfV1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsdWdpblwiKS5jaGVja2VkKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRlQ2F0ZUNhdGVnb3JpZXMocmVjb3Jkc1swXS5maWVsZHMuaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmc6IFwiRXZlbnQgQ2F0ZWdvcmllcyBhcmUgY3JlYXRpbmcgb24gQWlydGFibGUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IENhdGVnb3JpZXMgaGFzIGNyZWF0ZWQgb24gQWlydGFibGUhXCJcbiAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBDcmVhdGluZ0V2ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyAgQ29udHJhY3RcbiAgICAgICAgY29uc29sZS5sb2coY29udHJhY3QpO1xuICAgICAgICBjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuICAgICAgICAgICAgVGl0bGU6IEV2ZW50VGl0bGUsXG4gICAgICAgICAgICBEYXRlOiBFdmVudERhdGUsXG4gICAgICAgICAgICBBZGRyZXNzOiBFdmVudFdhbGxldEFkZHJlc3MsXG4gICAgICAgICAgICBHb2FsOiBFdmVudEdvYWwsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlRXZlbnQoXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBDcmVhdGVDYXRlZ29yeSA9ICgpID0+IHtcbiAgICAgICAgdmFyIG5ld19jYXRlZ29yeSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBuZXdDYXRlZ29yeVRpdGxlLFxuICAgICAgICAgICAgcHJpY2U6IG5ld0NhdGVnb3J5UHJpY2UsXG4gICAgICAgICAgICBhbW91bnQ6IG5ld0NhdGVnb3J5QW1vdW50LFxuICAgICAgICAgICAgaW1hZ2U6IG5ld0NhdGVnb3J5SW1nTGlua1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZW1wX2FyciA9IGV2ZW50Q2F0ZWdvcmllcztcbiAgICAgICAgdGVtcF9hcnIucHVzaChuZXdfY2F0ZWdvcnkpO1xuICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wX2Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IHRlbXBfYXJyW2ldLnByaWNlICogdGVtcF9hcnJbaV0uYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIGxldCBQcmljZVVTRCA9IE51bWJlcihnZXRwcmljZShFdmVudFdhbGxldFR5cGUpKVxuICAgICAgICB2YXIgdXNkRXZlbnRHb2FsID1QcmljZVVTRCAqIE51bWJlcihFdmVudEdvYWwpO1xuICAgICAgICB2YXIgVHdvRGVjaW1hbCA9IGZvcm1hdHRlci5mb3JtYXQodXNkRXZlbnRHb2FsIC0gc3VtKTtcbiAgICAgICAgc2V0T3RoZXJDYXRlZ29yeShUd29EZWNpbWFsLnRvU3RyaW5nKCkpO1xuICAgICAgICBzZXRFdmVudENhdGVnb3JpZXModGVtcF9hcnIpO1xuICAgICAgICBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKGZhbHNlKTtcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlUaXRsZShcIlwiKTtcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rKFwiXCIpO1xuICAgICAgICBzZXROZXdDYXRlZ29yeVByaWNlKDApO1xuICAgICAgICBzZXROZXdDYXRlZ29yeUFtb3VudCgwKTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlQ2F0ZWdvcnkgPSAoZSkgPT4ge1xuICAgICAgICB2YXIgY2F0ZWdvcnlfaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjYXRlZ29yeWlkXCIpO1xuICAgICAgICB2YXIgdGVtcF9hcnIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICE9IGNhdGVnb3J5X2lkKSB7XG4gICAgICAgICAgICAgICAgdGVtcF9hcnIucHVzaChldmVudENhdGVnb3JpZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldEV2ZW50Q2F0ZWdvcmllcyh0ZW1wX2Fycik7XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50R29hbENoYW5nZWQgPSAodmFsdWUpID0+IHtcbiAgICAgICAgc2V0RXZlbnRHb2FsKHZhbHVlKTtcbiAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gZXZlbnRDYXRlZ29yaWVzW2ldLnByaWNlICogZXZlbnRDYXRlZ29yaWVzW2ldLmFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBzZXRPdGhlckNhdGVnb3J5KEV2ZW50R29hbCAtIHN1bSk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcblxuICAgICAgICAvL05lYXIgY3VycmVuY3lcbiAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFsbG5lYXJEYXRhO1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gYWxsbmVhckRhdGEgPSBqc29uKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgbmVhclByaWNlID0gYWxsbmVhckRhdGEuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHNldE5lYXJQcmljZVVTRChuZWFyUHJpY2UpO1xuXG4gICAgICAgIC8vQ2VsbyBjdXJyZW5jeVxuICAgICAgICB2YXIgUHJpY2UgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIEN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9Y2VsbyZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGFsbERhdGE7XG4gICAgICAgICAgICBhd2FpdCBmZXRjaChDdXJyZW5jeVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IGFsbERhdGEgPSBqc29uKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgUHJpY2UgPSBhbGxEYXRhLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB2YXIgUHJpY2UgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHNldENlbG9QcmljZVVTRChQcmljZSk7XG5cblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIENyZWF0ZUNhdGVnb3J5QnV0dG9uKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgIT0gXCJtYW5hZ2VyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL0NyZWF0ZUV2ZW50c11cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gYXMgRXZlbnQgTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG5cbiAgICAgICAgICAgIDwvPik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19IG9uQ2xpY2s9e0NyZWF0ZUNhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICBDcmVhdGUgQ2F0ZWdvcnlcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz4pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQ3JlYXRlRXZlbnRCdXR0b24oKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSAhPSBcIm1hbmFnZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svQ3JlYXRlRXZlbnRzXVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiBhcyBFdmVudCBNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICA8Lz4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fSBvbkNsaWNrPXtDcmVhdGVFdmVudH0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC8+KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+PD5cbiAgICAgICAgICAgIDxSb3c+XG5cbiAgICAgICAgICAgICAgICA8Q29sID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NXZ3XCIsIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZzogXCIxOXB4XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOiBcIndoaXRlIHNvbGlkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDMwcHggMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q3JlYXRlIEV2ZW50PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBUaXRsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50VGl0bGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBFbmQgRGF0ZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50RGF0ZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgVHlwZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0VHlwZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRUeXBlID09IFwiTkVBUlwiID8gKDw+PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+QWNjb3VudCBJRCBvZiB7RXZlbnRXYWxsZXRUeXBlfSB3YWxsZXQ8L2g0PjwvPikgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+IDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PldhbGxldCBBZGRyZXNzIGluIHtFdmVudFdhbGxldFR5cGV9PC9oND48Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0QWRkcmVzc0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBHb2FsIGluIHtFdmVudFdhbGxldFR5cGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtFdmVudEdvYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRXZlbnQgR29hbCBpbiAke0V2ZW50V2FsbGV0VHlwZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGV2ZW50R29hbENoYW5nZWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJnb2FsXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q2F0ZWdvcmllcyBmb3IgU3VwcG9ydDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsIG1hcmdpblJpZ2h0OiBcIi0xMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Q2F0ZWdvcmllcy5tYXAoKGV2ZW50Q2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2luZGV4fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWljb24gcG9wdXAtY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5aWQ9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLCBmb250U2l6ZTogMjAsIGNvbG9yOiBcImJsYWNrXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57ZXZlbnRDYXRlZ29yeS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2V2ZW50Q2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IGFzcGVjdFJhdGlvOiAnMScsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57ZXZlbnRDYXRlZ29yeS5wcmljZSAqIGV2ZW50Q2F0ZWdvcnkuYW1vdW50fSBVU0Q8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT4oe2V2ZW50Q2F0ZWdvcnkuYW1vdW50fSBwaWVjZXMpPC9oNT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnRDYXRlZ29yaWVzLmxlbmd0aCA+IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCI4MHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+T3RoZXIgc3VwcG9ydDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlckNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFVTRDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCI4MHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKHRydWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiIzc1NzU3NVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiLCBmb250U2l6ZTogXCI1MHB4XCIgfX0+KzwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgTG9nbyBMaW5rPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRMb2dvSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzE4cHggMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6ICc1cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicGx1Z2luXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R2VuZXJhdGUgUGx1Z2luPzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlRXZlbnRCdXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e2NyZWF0ZUNhdGVnb3J5TW9kYWx9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRDcmVhdGVDYXRlZ29yeU1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBzaXplPSdsZydcbiAgICAgICAgICAgICAgICBjZW50ZXJlZCBzdHlsZT17eyBwYWRkaW5nOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBuZXcgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+Q2F0ZWdvcnkgVGl0bGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeVRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IFRpdGxlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeVRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfdGl0bGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkFtb3VudDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkFtb3VudFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlBbW91bnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3BpZWNlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5QcmljZSBvZiBBIFBpZWNlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBQcmljZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlQcmljZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfcHJpY2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkNhdGVnb3J5IEltYWdlIExpbms8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeUltZ0xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgSW1hZ2UgTGlua1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfaW1hZ2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlQ2F0ZWdvcnlCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPjwvPlxuICAgICk7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImI0YzIzYWY1YjRjMDZhZTk0NzgyXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJvdyIsInRvYXN0IiwiQ29sIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwiQ3JlYXRlUGx1Z2luIiwiTmF2TGluayIsIk1vZGFsIiwiRm9ybSIsImdldENvbmZpZyIsInVzZUNvbnRyYWN0Iiwid2luZG93IiwibmVhckNvbmZpZyIsIkNyZWF0ZUV2ZW50cyIsImNvbnRyYWN0IiwiZGVmYXVsdFZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaWQiLCJFdmVudFRpdGxlIiwiRXZlbnRUaXRsZUlucHV0IiwiRXZlbnREYXRlIiwiRXZlbnREYXRlSW5wdXQiLCJzZWxlY3Rfb3B0aW9ucyIsInZhbHVlIiwidGV4dCIsIkV2ZW50V2FsbGV0VHlwZSIsIkV2ZW50V2FsbGV0VHlwZUlucHV0IiwiRXZlbnRXYWxsZXRBZGRyZXNzIiwiRXZlbnRXYWxsZXRBZGRyZXNzSW5wdXQiLCJFdmVudEdvYWwiLCJzZXRFdmVudEdvYWwiLCJFdmVudExvZ28iLCJFdmVudExvZ29JbnB1dCIsImV2ZW50Q2F0ZWdvcmllcyIsInNldEV2ZW50Q2F0ZWdvcmllcyIsImNyZWF0ZUNhdGVnb3J5TW9kYWwiLCJzZXRDcmVhdGVDYXRlZ29yeU1vZGFsIiwibmV3Q2F0ZWdvcnlUaXRsZSIsInNldE5ld0NhdGVnb3J5VGl0bGUiLCJuZXdDYXRlZ29yeUltZ0xpbmsiLCJzZXROZXdDYXRlZ29yeUltZ0xpbmsiLCJuZXdDYXRlZ29yeVByaWNlIiwic2V0TmV3Q2F0ZWdvcnlQcmljZSIsIm5ld0NhdGVnb3J5QW1vdW50Iiwic2V0TmV3Q2F0ZWdvcnlBbW91bnQiLCJvdGhlckNhdGVnb3J5Iiwic2V0T3RoZXJDYXRlZ29yeSIsIk5lYXJQcmljZVVTRCIsInNldE5lYXJQcmljZVVTRCIsIkNlbG9QcmljZVVTRCIsInNldENlbG9QcmljZVVTRCIsImdldHByaWNlIiwiQ3JlYXRlRXZlbnQiLCJ3YWxsZXRBY2NvdW50IiwiaXNTaWduZWRJbiIsIndhcm5pbmciLCJwcm9taXNlIiwiQ3JlYXRpbmdFdmVudEFpcnRhYmxlIiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsIkNyZWF0aW5nRXZlbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJDcmVhdGVDYXRlQ2F0ZWdvcmllcyIsImV2ZW50SUQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJpIiwibGVuZ3RoIiwiY3JlYXRlIiwidGl0bGUiLCJwcmljZSIsImFtb3VudCIsImltYWdlIiwiZXJyIiwicmVjb3JkcyIsImNvbnNvbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsImhvc3QiLCJnZXRJZCIsImZpZWxkcyIsImxvZyIsImNyZWF0ZWRPYmplY3QiLCJUaXRsZSIsIkRhdGUiLCJBZGRyZXNzIiwiR29hbCIsImNyZWF0ZUV2ZW50IiwicmVzdWx0IiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkNyZWF0ZUNhdGVnb3J5IiwibmV3X2NhdGVnb3J5IiwidGVtcF9hcnIiLCJwdXNoIiwic3VtIiwiUHJpY2VVU0QiLCJOdW1iZXIiLCJ1c2RFdmVudEdvYWwiLCJUd29EZWNpbWFsIiwiZm9ybWF0IiwidG9TdHJpbmciLCJyZW1vdmVDYXRlZ29yeSIsImUiLCJjYXRlZ29yeV9pZCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImV2ZW50R29hbENoYW5nZWQiLCJmZXRjaERhdGEiLCJuZWFyUHJpY2UiLCJuZWFyQ3VycmVuY3lVcmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJhbGxuZWFyRGF0YSIsImNhdGNoIiwiZGF0YSIsIm1hcmtldFBhaXJzIiwiUHJpY2UiLCJDdXJyZW5jeVVybCIsImFsbERhdGEiLCJDcmVhdGVDYXRlZ29yeUJ1dHRvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtYXJnaW4iLCJ3aWR0aCIsIkNyZWF0ZUV2ZW50QnV0dG9uIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJib3JkZXIiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwiZXZlbnRDYXRlZ29yeSIsImluZGV4IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJjb2xvciIsInRleHRBbGlnbiIsImFzcGVjdFJhdGlvIiwibWFyZ2luVG9wIiwibGluZUhlaWdodCIsImFsaWduQ29udGVudCIsImdhcCJdLCJzb3VyY2VSb290IjoiIn0=