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

    var usdEventGoal = Number(NearPriceUSD) * Number(EventGoal);
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
              CurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
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
/******/ 	__webpack_require__.h = function() { return "d84558242b6749f9fc26"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljk1MzcwN2RmMjk0NWVjODc4NTcxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUVBYyxNQUFNLENBQUNDLFVBQVAsR0FBb0JILCtDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSCxrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSLENBRG1DLENBRW5DOzs7QUFFQSxzQkFBc0NWLCtFQUFZLENBQUM7QUFDL0NXLElBQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLEVBQUUsRUFBRTtBQUoyQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQU9BLHVCQUFvQ2hCLCtFQUFZLENBQUM7QUFDN0NXLElBQUFBLFlBQVksRUFBRSxFQUQrQjtBQUU3Q0MsSUFBQUEsSUFBSSxFQUFFLGdCQUZ1QztBQUc3Q0MsSUFBQUEsV0FBVyxFQUFFLGlCQUhnQztBQUk3Q0MsSUFBQUEsRUFBRSxFQUFFO0FBSnlDLEdBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9HLFNBQVA7QUFBQSxNQUFrQkMsY0FBbEI7O0FBTUEsdUJBQWdEbEIsK0VBQVksQ0FBQztBQUN6RFcsSUFBQUEsWUFBWSxFQUFFLE1BRDJDO0FBRXpEQyxJQUFBQSxJQUFJLEVBQUUsUUFGbUQ7QUFHekRFLElBQUFBLEVBQUUsRUFBRSxZQUhxRDtBQUl6REssSUFBQUEsY0FBYyxFQUFFLENBQUM7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFB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Q0FYSixlQXFCSTtBQUFLLFNBQUssRUFBRTtBQUFFbUgsTUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBWixrQkFDSTtBQUFJLFNBQUssRUFBRTtBQUFFUSxNQUFBQSxZQUFZLEVBQUUsTUFBaEI7QUFBd0JXLE1BQUFBLEtBQUssRUFBRTtBQUEvQjtBQUFYLHdCQURKLGVBRUksaURBQUMscUVBQUQ7QUFDSSxTQUFLLEVBQUVwSCxnQkFEWDtBQUVJLGVBQVcsRUFBRSxnQkFGakI7QUFHSSxZQUFRLEVBQUUsa0JBQUN1RSxDQUFEO0FBQUEsYUFBT3RFLG1CQUFtQixDQUFDc0UsQ0FBQyxDQUFDRSxNQUFGLENBQVMzRixLQUFWLENBQTFCO0FBQUEsS0FIZDtBQUlJLFFBQUksRUFBRSxRQUpWO0FBS0ksTUFBRSxFQUFFO0FBTFIsSUFGSixDQXJCSixlQStCSTtBQUFLLFNBQUssRUFBRTtBQUFFbUgsTUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBWixrQkFDSTtBQUFJLFNBQUssRUFBRTtBQUFFUSxNQUFBQSxZQUFZLEVBQUUsTUFBaEI7QUFBd0JXLE1BQUFBLEtBQUssRUFBRTtBQUEvQjtBQUFYLDJCQURKLGVBRUksaURBQUMscUVBQUQ7QUFDSSxTQUFLLEVBQUV0SCxrQkFEWDtBQUVJLGVBQVcsRUFBRSxxQkFGakI7QUFHSSxZQUFRLEVBQUUsa0JBQUN5RSxDQUFEO0FBQUEsYUFBT3hFLHFCQUFxQixDQUFDd0UsQ0FBQyxDQUFDRSxNQUFGLENBQVMzRixLQUFWLENBQTVCO0FBQUEsS0FIZDtBQUlJLFFBQUksRUFBRSxNQUpWO0FBS0ksTUFBRSxFQUFFO0FBTFIsSUFGSixDQS9CSixlQXlDSSxpREFBQyxvQkFBRCxPQXpDSixDQVBKLENBekdGLENBQUYsQ0FESjtBQStKSDs7Ozs7Ozs7VUNoZUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9DcmVhdGVFdmVudHMvaW5kZXgudHN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJ0AvY29tcG9uZW50cy9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVFdmVudEFQSSwgY3JlYXRlRXZlbnRDYXRlZ29yeUFQSSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL2V2ZW50JztcbmltcG9ydCB7IENyZWF0ZVBsdWdpbiB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL2V2ZW50JztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0ljb24nXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCB7XG4gICAgQnVpbGRlckZpZWxkLFxuICAgIEJ1aWxkZXJTdWJtaXRCdXR0b24sXG4gICAgQnVpbGRlclRyYW5zYWN0aW9uLFxufSBmcm9tICdAL21vZHVsZXMvQnVpbGRlci9jb21wb25lbnRzJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5cbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIkAvY29uZmlnXCJcblxuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG53aW5kb3cubmVhckNvbmZpZyA9IGdldENvbmZpZyhcImRldmVsb3BtZW50XCIpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgY29udHJhY3QgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICAvLyBBcHBsaWNhdGlvbiBpbml0aWFsaXphdGlvblxuXG4gICAgY29uc3QgW0V2ZW50VGl0bGUsIEV2ZW50VGl0bGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBUaXRsZScsXG4gICAgICAgIGlkOiAnJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgW0V2ZW50RGF0ZSwgRXZlbnREYXRlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAnZGF0ZXRpbWUtbG9jYWwnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IEVuZCBEYXRlICcsXG4gICAgICAgIGlkOiAnZW5kZGF0ZScsXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50V2FsbGV0VHlwZSwgRXZlbnRXYWxsZXRUeXBlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIkNFTE9cIixcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIGlkOiAnd2FsbGV0VHlwZScsXG4gICAgICAgIHNlbGVjdF9vcHRpb25zOiBbeyB2YWx1ZTogXCJDRUxPXCIsIHRleHQ6IFwiQ0VMT1wiIH0sIHsgdmFsdWU6IFwiTkVBUlwiLCB0ZXh0OiBcIk5FQVJcIiB9XVxuICAgIH0pO1xuICAgIGNvbnN0IFtFdmVudFdhbGxldEFkZHJlc3MsIEV2ZW50V2FsbGV0QWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1dhbGxldCcsXG4gICAgICAgIGlkOiAnd2FsbGV0JyxcbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnRHb2FsLCBzZXRFdmVudEdvYWxdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBbRXZlbnRMb2dvLCBFdmVudExvZ29JbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBMb2dvIExpbmsnLFxuICAgICAgICBpZDogJ2xvZ28nXG4gICAgfSk7XG4gICAgY29uc3QgW2V2ZW50Q2F0ZWdvcmllcywgc2V0RXZlbnRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY3JlYXRlQ2F0ZWdvcnlNb2RhbCwgc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW25ld0NhdGVnb3J5VGl0bGUsIHNldE5ld0NhdGVnb3J5VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW25ld0NhdGVnb3J5SW1nTGluaywgc2V0TmV3Q2F0ZWdvcnlJbWdMaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtuZXdDYXRlZ29yeVByaWNlLCBzZXROZXdDYXRlZ29yeVByaWNlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtuZXdDYXRlZ29yeUFtb3VudCwgc2V0TmV3Q2F0ZWdvcnlBbW91bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW290aGVyQ2F0ZWdvcnksIHNldE90aGVyQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW05lYXJQcmljZVVTRCwgc2V0TmVhclByaWNlVVNEXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtDZWxvUHJpY2VVU0QsIHNldENlbG9QcmljZVVTRF0gPSB1c2VTdGF0ZSgwKTtcblxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRwcmljZSh0eXBlKXtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJORUFSXCIpe1xuICAgICAgICAgICAgcmV0dXJuIE5lYXJQcmljZVVTRDtcbiAgICAgICAgfWVsc2UgaWYgKHR5cGUgPT0gXCJDRUxPXCIpe1xuICAgICAgICAgICAgcmV0dXJuIENlbG9QcmljZVVTRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0ZUV2ZW50KCkge1xuICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0b2FzdC53YXJuaW5nKFwiUGxlYXNlIGNvbm5lY3QgTmVhciBBY2NvdW50IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudEFpcnRhYmxlLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEFpcnRhYmxlLi4uXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IGhhcyBjcmVhdGVkIG9uIEFpcnRhYmxlIVwiXG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ0V2ZW50LCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEF1cm9yYS4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBoYXMgY3JlYXRlZCBvbiBBdXJvcmEhXCJcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kb25hdGlvblwiO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlQ2F0ZUNhdGVnb3JpZXMoZXZlbnRJRCkge1xuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudGNhdGVnb3JpZXMnKS5jcmVhdGUoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudGlkXCI6IGV2ZW50SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogZXZlbnRDYXRlZ29yaWVzW2ldLnByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIjogZXZlbnRDYXRlZ29yaWVzW2ldLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogZXZlbnRDYXRlZ29yaWVzW2ldLmltYWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLCBmdW5jdGlvbiAoZXJyLCByZWNvcmRzKSB7IGNvbnNvbGUuZXJyb3IoZXJyKSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGluZ0V2ZW50QWlydGFibGUoKSB7XG5cbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5jcmVhdGUoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBFdmVudFRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOiBFdmVudERhdGUsXG4gICAgICAgICAgICAgICAgICAgIFwiR29hbFwiOiBFdmVudEdvYWwsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nb2xpbmtcIjogRXZlbnRMb2dvLFxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldFwiOiBFdmVudFdhbGxldEFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0dHlwZVwiOiBcIk5FQVJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSwgYXN5bmMgZnVuY3Rpb24gKGVyciwgcmVjb3Jkcykge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVnaW5cIikuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENyZWF0ZVBsdWdpbihgaHR0cHM6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9kb25hdGlvbi9hdWN0aW9uP1ske3JlY29yZHNbMF0uZ2V0SWQoKX1dYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVnaW5cIikuY2hlY2tlZClcbiAgICAgICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0ZUNhdGVDYXRlZ29yaWVzKHJlY29yZHNbMF0uZmllbGRzLmlkKSwge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IENhdGVnb3JpZXMgYXJlIGNyZWF0aW5nIG9uIEFpcnRhYmxlLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBDYXRlZ29yaWVzIGhhcyBjcmVhdGVkIG9uIEFpcnRhYmxlIVwiXG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3QgQ3JlYXRpbmdFdmVudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gIENvbnRyYWN0XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRyYWN0KTtcbiAgICAgICAgY29uc3QgY3JlYXRlZE9iamVjdCA9IHtcbiAgICAgICAgICAgIFRpdGxlOiBFdmVudFRpdGxlLFxuICAgICAgICAgICAgRGF0ZTogRXZlbnREYXRlLFxuICAgICAgICAgICAgQWRkcmVzczogRXZlbnRXYWxsZXRBZGRyZXNzLFxuICAgICAgICAgICAgR29hbDogRXZlbnRHb2FsLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUV2ZW50KFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdClcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgfTtcblxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgY29uc3QgQ3JlYXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgICAgIHZhciBuZXdfY2F0ZWdvcnkgPSB7XG4gICAgICAgICAgICB0aXRsZTogbmV3Q2F0ZWdvcnlUaXRsZSxcbiAgICAgICAgICAgIHByaWNlOiBuZXdDYXRlZ29yeVByaWNlLFxuICAgICAgICAgICAgYW1vdW50OiBuZXdDYXRlZ29yeUFtb3VudCxcbiAgICAgICAgICAgIGltYWdlOiBuZXdDYXRlZ29yeUltZ0xpbmtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGVtcF9hcnIgPSBldmVudENhdGVnb3JpZXM7XG4gICAgICAgIHRlbXBfYXJyLnB1c2gobmV3X2NhdGVnb3J5KTtcbiAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcF9hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSB0ZW1wX2FycltpXS5wcmljZSAqIHRlbXBfYXJyW2ldLmFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXNkRXZlbnRHb2FsID0gTnVtYmVyKE5lYXJQcmljZVVTRCkgKiBOdW1iZXIoRXZlbnRHb2FsKTtcbiAgICAgICAgdmFyIFR3b0RlY2ltYWwgPSBmb3JtYXR0ZXIuZm9ybWF0KHVzZEV2ZW50R29hbCAtIHN1bSk7XG4gICAgICAgIHNldE90aGVyQ2F0ZWdvcnkoVHdvRGVjaW1hbC50b1N0cmluZygpKTtcbiAgICAgICAgc2V0RXZlbnRDYXRlZ29yaWVzKHRlbXBfYXJyKTtcbiAgICAgICAgc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbChmYWxzZSk7XG4gICAgICAgIHNldE5ld0NhdGVnb3J5VGl0bGUoXCJcIik7XG4gICAgICAgIHNldE5ld0NhdGVnb3J5SW1nTGluayhcIlwiKTtcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlQcmljZSgwKTtcbiAgICAgICAgc2V0TmV3Q2F0ZWdvcnlBbW91bnQoMCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZUNhdGVnb3J5ID0gKGUpID0+IHtcbiAgICAgICAgdmFyIGNhdGVnb3J5X2lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2F0ZWdvcnlpZFwiKTtcbiAgICAgICAgdmFyIHRlbXBfYXJyID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAhPSBjYXRlZ29yeV9pZCkge1xuICAgICAgICAgICAgICAgIHRlbXBfYXJyLnB1c2goZXZlbnRDYXRlZ29yaWVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRFdmVudENhdGVnb3JpZXModGVtcF9hcnIpO1xuICAgIH1cbiAgICBjb25zdCBldmVudEdvYWxDaGFuZ2VkID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldEV2ZW50R29hbCh2YWx1ZSk7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtICs9IGV2ZW50Q2F0ZWdvcmllc1tpXS5wcmljZSAqIGV2ZW50Q2F0ZWdvcmllc1tpXS5hbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0T3RoZXJDYXRlZ29yeShFdmVudEdvYWwgLSBzdW0pO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG5cbiAgICAgICAgLy9OZWFyIGN1cnJlbmN5XG4gICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhbGxuZWFyRGF0YTtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IGFsbG5lYXJEYXRhID0ganNvbilcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgIG5lYXJQcmljZSA9IGFsbG5lYXJEYXRhLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB2YXIgbmVhclByaWNlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBzZXROZWFyUHJpY2VVU0QobmVhclByaWNlKTtcblxuICAgICAgICAvL0NlbG8gY3VycmVuY3lcbiAgICAgICAgdmFyIFByaWNlID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBhbGxEYXRhO1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2goQ3VycmVuY3lVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBhbGxEYXRhID0ganNvbilcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgIFByaWNlID0gYWxsRGF0YS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdmFyIFByaWNlID0gMDtcbiAgICAgICAgfVxuICAgICAgICBzZXRDZWxvUHJpY2VVU0QoUHJpY2UpO1xuXG5cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBDcmVhdGVDYXRlZ29yeUJ1dHRvbigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpICE9IFwibWFuYWdlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9naW4/Wy9DcmVhdGVFdmVudHNdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIGFzIEV2ZW50IE1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICA8Lz4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fSBvbkNsaWNrPXtDcmVhdGVDYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIENhdGVnb3J5XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC8+KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIENyZWF0ZUV2ZW50QnV0dG9uKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgIT0gXCJtYW5hZ2VyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL0NyZWF0ZUV2ZW50c11cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gYXMgRXZlbnQgTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cblxuICAgICAgICAgICAgPC8+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gb25DbGljaz17Q3JlYXRlRXZlbnR9PlxuICAgICAgICAgICAgICAgIENyZWF0ZSBFdmVudFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvPilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Pjw+XG4gICAgICAgICAgICA8Um93PlxuXG4gICAgICAgICAgICAgICAgPENvbCA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiNDV2d1wiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCAzMHB4IDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNyZWF0ZSBFdmVudDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgVGl0bGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFRpdGxlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgRW5kIERhdGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudERhdGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+V2FsbGV0IFR5cGU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldFR5cGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0VHlwZSA9PSBcIk5FQVJcIiA/ICg8PjxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkFjY291bnQgSUQgb2Yge0V2ZW50V2FsbGV0VHlwZX0gd2FsbGV0PC9oND48Lz4pIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PiA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgQWRkcmVzcyBpbiB7RXZlbnRXYWxsZXRUeXBlfTwvaDQ+PC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldEFkZHJlc3NJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+RXZlbnQgR29hbCBpbiB7RXZlbnRXYWxsZXRUeXBlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17RXZlbnRHb2FsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YEV2ZW50IEdvYWwgaW4gJHtFdmVudFdhbGxldFR5cGV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBldmVudEdvYWxDaGFuZ2VkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiZ29hbFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkNhdGVnb3JpZXMgZm9yIFN1cHBvcnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMTBweFwiLCBtYXJnaW5SaWdodDogXCItMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudENhdGVnb3JpZXMubWFwKChldmVudENhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0ga2V5PXtpbmRleH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCI4cHggMTVweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pY29uIHBvcHVwLWNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVDYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeWlkPXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiwgZm9udFNpemU6IDIwLCBjb2xvcjogXCJibGFja1wiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e2V2ZW50Q2F0ZWdvcnkudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtldmVudENhdGVnb3J5LmltYWdlfSBzdHlsZT17eyBhc3BlY3RSYXRpbzogJzEnLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e2V2ZW50Q2F0ZWdvcnkucHJpY2UgKiBldmVudENhdGVnb3J5LmFtb3VudH0gVVNEPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+KHtldmVudENhdGVnb3J5LmFtb3VudH0gcGllY2VzKTwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGggPiAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiODBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19Pk90aGVyIHN1cHBvcnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiB9fT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBVU0Q8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBoZWlnaHQ6IFwiODBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0gb25DbGljaz17KCkgPT4gc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbCh0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiM3NTc1NzVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjE0cHhcIiwgZm9udFNpemU6IFwiNTBweFwiIH19Pis8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IExvZ28gTGluazwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50TG9nb0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcxOHB4IDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAnNXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInBsdWdpblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkdlbmVyYXRlIFBsdWdpbj88L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUV2ZW50QnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtjcmVhdGVDYXRlZ29yeU1vZGFsfVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgc2l6ZT0nbGcnXG4gICAgICAgICAgICAgICAgY2VudGVyZWQgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PkNhdGVnb3J5IFRpdGxlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBUaXRsZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Q2F0ZWdvcnlUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3RpdGxlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5BbW91bnQ8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJBbW91bnRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9waWVjZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+UHJpY2Ugb2YgQSBQaWVjZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5UHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgUHJpY2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5UHJpY2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X3ByaWNlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5DYXRlZ29yeSBJbWFnZSBMaW5rPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlJbWdMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IEltYWdlIExpbmtcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5SW1nTGluayhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e1wiY2F0X2ltYWdlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUNhdGVnb3J5QnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz48Lz5cbiAgICApO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJkODQ1NTgyNDJiNjc0OWY5ZmMyNlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3ciLCJ0b2FzdCIsIkNvbCIsIkJ1dHRvbiIsIlVzZUZvcm1JbnB1dCIsIkNyZWF0ZVBsdWdpbiIsIk5hdkxpbmsiLCJNb2RhbCIsIkZvcm0iLCJnZXRDb25maWciLCJ1c2VDb250cmFjdCIsIndpbmRvdyIsIm5lYXJDb25maWciLCJDcmVhdGVFdmVudHMiLCJjb250cmFjdCIsImRlZmF1bHRWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiRXZlbnRUaXRsZSIsIkV2ZW50VGl0bGVJbnB1dCIsIkV2ZW50RGF0ZSIsIkV2ZW50RGF0ZUlucHV0Iiwic2VsZWN0X29wdGlvbnMiLCJ2YWx1ZSIsInRleHQiLCJFdmVudFdhbGxldFR5cGUiLCJFdmVudFdhbGxldFR5cGVJbnB1dCIsIkV2ZW50V2FsbGV0QWRkcmVzcyIsIkV2ZW50V2FsbGV0QWRkcmVzc0lucHV0IiwiRXZlbnRHb2FsIiwic2V0RXZlbnRHb2FsIiwiRXZlbnRMb2dvIiwiRXZlbnRMb2dvSW5wdXQiLCJldmVudENhdGVnb3JpZXMiLCJzZXRFdmVudENhdGVnb3JpZXMiLCJjcmVhdGVDYXRlZ29yeU1vZGFsIiwic2V0Q3JlYXRlQ2F0ZWdvcnlNb2RhbCIsIm5ld0NhdGVnb3J5VGl0bGUiLCJzZXROZXdDYXRlZ29yeVRpdGxlIiwibmV3Q2F0ZWdvcnlJbWdMaW5rIiwic2V0TmV3Q2F0ZWdvcnlJbWdMaW5rIiwibmV3Q2F0ZWdvcnlQcmljZSIsInNldE5ld0NhdGVnb3J5UHJpY2UiLCJuZXdDYXRlZ29yeUFtb3VudCIsInNldE5ld0NhdGVnb3J5QW1vdW50Iiwib3RoZXJDYXRlZ29yeSIsInNldE90aGVyQ2F0ZWdvcnkiLCJOZWFyUHJpY2VVU0QiLCJzZXROZWFyUHJpY2VVU0QiLCJDZWxvUHJpY2VVU0QiLCJzZXRDZWxvUHJpY2VVU0QiLCJnZXRwcmljZSIsIkNyZWF0ZUV2ZW50Iiwid2FsbGV0QWNjb3VudCIsImlzU2lnbmVkSW4iLCJ3YXJuaW5nIiwicHJvbWlzZSIsIkNyZWF0aW5nRXZlbnRBaXJ0YWJsZSIsInBlbmRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJDcmVhdGluZ0V2ZW50IiwibG9jYXRpb24iLCJocmVmIiwiQ3JlYXRlQ2F0ZUNhdGVnb3JpZXMiLCJldmVudElEIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiaSIsImxlbmd0aCIsImNyZWF0ZSIsInRpdGxlIiwicHJpY2UiLCJhbW91bnQiLCJpbWFnZSIsImVyciIsInJlY29yZHMiLCJjb25zb2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrZWQiLCJob3N0IiwiZ2V0SWQiLCJmaWVsZHMiLCJsb2ciLCJjcmVhdGVkT2JqZWN0IiwiVGl0bGUiLCJEYXRlIiwiQWRkcmVzcyIsIkdvYWwiLCJjcmVhdGVFdmVudCIsInJlc3VsdCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJDcmVhdGVDYXRlZ29yeSIsIm5ld19jYXRlZ29yeSIsInRlbXBfYXJyIiwicHVzaCIsInN1bSIsInVzZEV2ZW50R29hbCIsIk51bWJlciIsIlR3b0RlY2ltYWwiLCJmb3JtYXQiLCJ0b1N0cmluZyIsInJlbW92ZUNhdGVnb3J5IiwiZSIsImNhdGVnb3J5X2lkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZXZlbnRHb2FsQ2hhbmdlZCIsImZldGNoRGF0YSIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImFsbG5lYXJEYXRhIiwiY2F0Y2giLCJkYXRhIiwibWFya2V0UGFpcnMiLCJQcmljZSIsIkN1cnJlbmN5VXJsIiwiYWxsRGF0YSIsIkNyZWF0ZUNhdGVnb3J5QnV0dG9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1hcmdpbiIsIndpZHRoIiwiQ3JlYXRlRXZlbnRCdXR0b24iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJldmVudENhdGVnb3J5IiwiaW5kZXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwiYXNwZWN0UmF0aW8iLCJtYXJnaW5Ub3AiLCJsaW5lSGVpZ2h0IiwiYWxpZ25Db250ZW50IiwiZ2FwIl0sInNvdXJjZVJvb3QiOiIifQ==