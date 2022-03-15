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
    _CreateEvent = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(window.walletAccount.isSignedIn() == false && window.ethereum.selectedAddress == null)) {
                _context2.next = 3;
                break;
              }

              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.warning("Please connect Near Account!");
              return _context2.abrupt("return");

            case 3:
              _context2.next = 5;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(CreatingEventAirtable, {
                pending: "Event is creating on Airtable...",
                error: "Please try again later",
                success: "Event has created on Airtable!"
              });

            case 5:
              _context2.next = 7;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(CreatingEvent, {
                pending: "Event is creating on Aurora...",
                error: "Please try again later",
                success: "Event has created on Aurora!"
              });

            case 7:
              window.location.href = "/donation";

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _CreateEvent.apply(this, arguments);
  }

  function CreateCateCategories(_x) {
    return _CreateCateCategories.apply(this, arguments);
  }

  function _CreateCateCategories() {
    _CreateCateCategories = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(eventID) {
      var Airtable, base, i;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
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
                _context3.next = 10;
                break;
              }

              _context3.next = 7;
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
              _context3.next = 4;
              break;

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _CreateCateCategories.apply(this, arguments);
  }

  function CreatingEventAirtable() {
    return _CreatingEventAirtable.apply(this, arguments);
  }

  function _CreatingEventAirtable() {
    _CreatingEventAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context6.next = 5;
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
                var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(err, records) {
                  var _context4;

                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          if (!err) {
                            _context5.next = 3;
                            break;
                          }

                          console.error(err);
                          return _context5.abrupt("return");

                        case 3:
                          if (!document.getElementById("plugin").checked) {
                            _context5.next = 6;
                            break;
                          }

                          _context5.next = 6;
                          return (0,_pages_Events_event__WEBPACK_IMPORTED_MODULE_9__.CreatePlugin)(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context4 = "https://".concat(window.location.host, "/donation/auction?[")).call(_context4, records[0].getId(), "]"));

                        case 6:
                          if (!document.getElementById("plugin").checked) {
                            _context5.next = 9;
                            break;
                          }

                          _context5.next = 9;
                          return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(CreateCateCategories(records[0].fields.id), {
                            pending: "Event Categories are creating on Airtable...",
                            error: "Please try again later",
                            success: "Event Categories has created on Airtable!"
                          });

                        case 9:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x2, _x3) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee5);
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
    _fetchData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var nearPrice, nearCurrencyUrl, options, allnearData, Price, CurrencyUrl, _options, allData;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              //Near currency
              nearPrice = 0;
              _context7.prev = 1;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context7.next = 6;
              return fetch(nearCurrencyUrl, options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return allnearData = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 6:
              nearPrice = allnearData.data.marketPairs[0].price;
              _context7.next = 12;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](1);
              nearPrice = 0;

            case 12:
              setNearPriceUSD(nearPrice); //Celo currency

              Price = 0;
              _context7.prev = 14;
              CurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=celo&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              _options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context7.next = 19;
              return fetch(CurrencyUrl, _options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return allData = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 19:
              Price = allData.data.marketPairs[0].price;
              _context7.next = 25;
              break;

            case 22:
              _context7.prev = 22;
              _context7.t1 = _context7["catch"](14);
              Price = 0;

            case 25:
              setCeloPriceUSD(Price);

            case 26:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee6, null, [[1, 9], [14, 22]]);
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
/******/ 	__webpack_require__.h = function() { return "57bebc053045a7265d9b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjlmZmZmNzdhNjdmZmY0ZWNmY2UxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUdBYyxNQUFNLENBQUNDLFVBQVAsR0FBb0JILCtDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSCxrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSLENBRG1DLENBRW5DOzs7QUFFQSxzQkFBc0NWLCtFQUFZLENBQUM7QUFDL0NXLElBQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLEVBQUUsRUFBRTtBQUoyQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQU9BLHVCQUFvQ2hCLCtFQUFZLENBQUM7QUFDN0NXLElBQUFBLFlBQVksRUFBRSxFQUQrQjtBQUU3Q0MsSUFBQUEsSUFBSSxFQUFFLGdCQUZ1QztBQUc3Q0MsSUFBQUEsV0FBVyxFQUFFLGlCQUhnQztBQUk3Q0MsSUFBQUEsRUFBRSxFQUFFO0FBSnlDLEdBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9HLFNBQVA7QUFBQSxNQUFrQkMsY0FBbEI7O0FBTUEsdUJBQWdEbEIsK0VBQVksQ0FBQztBQUN6RFcsSUFBQUEsWUFBWSxFQUFFLE1BRDJDO0FBRXpEQyxJQUFBQSxJQUFJLEVBQUUsUUFGbUQ7QUFHekRFLElBQUFBLEVBQUUsRUFBRSxZQUhxRDtBQUl6REssSUFBQUEsY0FBYyxFQUFFLENBQUM7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFB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QUFLLEVBQUU7QUFBRXNILE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQVosa0JBQ0k7QUFBSSxTQUFLLEVBQUU7QUFBRVEsTUFBQUEsWUFBWSxFQUFFLE1BQWhCO0FBQXdCVyxNQUFBQSxLQUFLLEVBQUU7QUFBL0I7QUFBWCx3QkFESixlQUVJLGlEQUFDLHFFQUFEO0FBQ0ksU0FBSyxFQUFFdkgsZ0JBRFg7QUFFSSxlQUFXLEVBQUUsZ0JBRmpCO0FBR0ksWUFBUSxFQUFFLGtCQUFDMEUsQ0FBRDtBQUFBLGFBQU96RSxtQkFBbUIsQ0FBQ3lFLENBQUMsQ0FBQ0UsTUFBRixDQUFTOUYsS0FBVixDQUExQjtBQUFBLEtBSGQ7QUFJSSxRQUFJLEVBQUUsUUFKVjtBQUtJLE1BQUUsRUFBRTtBQUxSLElBRkosQ0FyQkosZUErQkk7QUFBSyxTQUFLLEVBQUU7QUFBRXNILE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQVosa0JBQ0k7QUFBSSxTQUFLLEVBQUU7QUFBRVEsTUFBQUEsWUFBWSxFQUFFLE1BQWhCO0FBQXdCVyxNQUFBQSxLQUFLLEVBQUU7QUFBL0I7QUFBWCwyQkFESixlQUVJLGlEQUFDLHFFQUFEO0FBQ0ksU0FBSyxFQUFFekgsa0JBRFg7QUFFSSxlQUFXLEVBQUUscUJBRmpCO0FBR0ksWUFBUSxFQUFFLGtCQUFDNEUsQ0FBRDtBQUFBLGFBQU8zRSxxQkFBcUIsQ0FBQzJFLENBQUMsQ0FBQ0UsTUFBRixDQUFTOUYsS0FBVixDQUE1QjtBQUFBLEtBSGQ7QUFJSSxRQUFJLEVBQUUsTUFKVjtBQUtJLE1BQUUsRUFBRTtBQUxSLElBRkosQ0EvQkosZUF5Q0ksaURBQUMsb0JBQUQsT0F6Q0osQ0FQSixDQXpHRixDQUFGLENBREo7QUErSkg7Ozs7Ozs7O1VDbGVELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvQ3JlYXRlRXZlbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICdAL2NvbXBvbmVudHMvY29tcG9uZW50cy9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlRXZlbnRBUEksIGNyZWF0ZUV2ZW50Q2F0ZWdvcnlBUEkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy9ldmVudCc7XG5pbXBvcnQgeyBDcmVhdGVQbHVnaW4gfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy9ldmVudCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9JY29uJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQge1xuICAgIEJ1aWxkZXJGaWVsZCxcbiAgICBCdWlsZGVyU3VibWl0QnV0dG9uLFxuICAgIEJ1aWxkZXJUcmFuc2FjdGlvbixcbn0gZnJvbSAnQC9tb2R1bGVzL0J1aWxkZXIvY29tcG9uZW50cydcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xuXG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJAL2NvbmZpZ1wiXG5cblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmltcG9ydCB1c2VDb250cmFjdENlbG8gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3RDZWxvJztcblxud2luZG93Lm5lYXJDb25maWcgPSBnZXRDb25maWcoXCJkZXZlbG9wbWVudFwiKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUV2ZW50cygpIHtcbiAgICBjb25zdCB7IGNvbnRyYWN0IH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG4gICAgLy8gQXBwbGljYXRpb24gaW5pdGlhbGl6YXRpb25cblxuICAgIGNvbnN0IFtFdmVudFRpdGxlLCBFdmVudFRpdGxlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgVGl0bGUnLFxuICAgICAgICBpZDogJydcbiAgICB9KTtcblxuICAgIGNvbnN0IFtFdmVudERhdGUsIEV2ZW50RGF0ZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ2RhdGV0aW1lLWxvY2FsJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBFbmQgRGF0ZSAnLFxuICAgICAgICBpZDogJ2VuZGRhdGUnLFxuICAgIH0pO1xuICAgIGNvbnN0IFtFdmVudFdhbGxldFR5cGUsIEV2ZW50V2FsbGV0VHlwZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJDRUxPXCIsXG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICBpZDogJ3dhbGxldFR5cGUnLFxuICAgICAgICBzZWxlY3Rfb3B0aW9uczogW3sgdmFsdWU6IFwiQ0VMT1wiLCB0ZXh0OiBcIkNFTE9cIiB9LCB7IHZhbHVlOiBcIk5FQVJcIiwgdGV4dDogXCJORUFSXCIgfV1cbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnRXYWxsZXRBZGRyZXNzLCBFdmVudFdhbGxldEFkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdXYWxsZXQnLFxuICAgICAgICBpZDogJ3dhbGxldCcsXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50R29hbCwgc2V0RXZlbnRHb2FsXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgW0V2ZW50TG9nbywgRXZlbnRMb2dvSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgTG9nbyBMaW5rJyxcbiAgICAgICAgaWQ6ICdsb2dvJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtldmVudENhdGVnb3JpZXMsIHNldEV2ZW50Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2NyZWF0ZUNhdGVnb3J5TW9kYWwsIHNldENyZWF0ZUNhdGVnb3J5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtuZXdDYXRlZ29yeVRpdGxlLCBzZXROZXdDYXRlZ29yeVRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtuZXdDYXRlZ29yeUltZ0xpbmssIHNldE5ld0NhdGVnb3J5SW1nTGlua10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlQcmljZSwgc2V0TmV3Q2F0ZWdvcnlQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlBbW91bnQsIHNldE5ld0NhdGVnb3J5QW1vdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtvdGhlckNhdGVnb3J5LCBzZXRPdGhlckNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtOZWFyUHJpY2VVU0QsIHNldE5lYXJQcmljZVVTRF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbQ2Vsb1ByaWNlVVNELCBzZXRDZWxvUHJpY2VVU0RdID0gdXNlU3RhdGUoMCk7XG5cblxuXG4gICAgIGZ1bmN0aW9uIGdldHByaWNlKHR5cGUpe1xuICAgICAgICBpZiAodHlwZSA9PSBcIk5FQVJcIil7XG4gICAgICAgICAgICByZXR1cm4gTmVhclByaWNlVVNEO1xuICAgICAgICB9ZWxzZSBpZiAodHlwZSA9PSBcIkNFTE9cIil7XG4gICAgICAgICAgICByZXR1cm4gQ2Vsb1ByaWNlVVNEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlRXZlbnQoKSB7XG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UgJiYgd2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0b2FzdC53YXJuaW5nKFwiUGxlYXNlIGNvbm5lY3QgTmVhciBBY2NvdW50IVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudEFpcnRhYmxlLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEFpcnRhYmxlLi4uXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IGhhcyBjcmVhdGVkIG9uIEFpcnRhYmxlIVwiXG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShDcmVhdGluZ0V2ZW50LCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IGlzIGNyZWF0aW5nIG9uIEF1cm9yYS4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBoYXMgY3JlYXRlZCBvbiBBdXJvcmEhXCJcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kb25hdGlvblwiO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRlQ2F0ZUNhdGVnb3JpZXMoZXZlbnRJRCkge1xuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRDYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudGNhdGVnb3JpZXMnKS5jcmVhdGUoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJldmVudGlkXCI6IGV2ZW50SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJpY2VcIjogZXZlbnRDYXRlZ29yaWVzW2ldLnByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIjogZXZlbnRDYXRlZ29yaWVzW2ldLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VcIjogZXZlbnRDYXRlZ29yaWVzW2ldLmltYWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLCBmdW5jdGlvbiAoZXJyLCByZWNvcmRzKSB7IGNvbnNvbGUuZXJyb3IoZXJyKSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGluZ0V2ZW50QWlydGFibGUoKSB7XG5cbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5jcmVhdGUoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBFdmVudFRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW5kRGF0ZVwiOiBFdmVudERhdGUsXG4gICAgICAgICAgICAgICAgICAgIFwiR29hbFwiOiBFdmVudEdvYWwsXG4gICAgICAgICAgICAgICAgICAgIFwibG9nb2xpbmtcIjogRXZlbnRMb2dvLFxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldFwiOiBFdmVudFdhbGxldEFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIFwid2FsbGV0dHlwZVwiOiBcIk5FQVJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSwgYXN5bmMgZnVuY3Rpb24gKGVyciwgcmVjb3Jkcykge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVnaW5cIikuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IENyZWF0ZVBsdWdpbihgaHR0cHM6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9kb25hdGlvbi9hdWN0aW9uP1ske3JlY29yZHNbMF0uZ2V0SWQoKX1dYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVnaW5cIikuY2hlY2tlZClcbiAgICAgICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0ZUNhdGVDYXRlZ29yaWVzKHJlY29yZHNbMF0uZmllbGRzLmlkKSwge1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nOiBcIkV2ZW50IENhdGVnb3JpZXMgYXJlIGNyZWF0aW5nIG9uIEFpcnRhYmxlLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBDYXRlZ29yaWVzIGhhcyBjcmVhdGVkIG9uIEFpcnRhYmxlIVwiXG4gICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgY29uc3QgQ3JlYXRpbmdFdmVudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gIENvbnRyYWN0XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRyYWN0KTtcbiAgICAgICAgY29uc3QgY3JlYXRlZE9iamVjdCA9IHtcbiAgICAgICAgICAgIFRpdGxlOiBFdmVudFRpdGxlLFxuICAgICAgICAgICAgRGF0ZTogRXZlbnREYXRlLFxuICAgICAgICAgICAgQWRkcmVzczogRXZlbnRXYWxsZXRBZGRyZXNzLFxuICAgICAgICAgICAgR29hbDogRXZlbnRHb2FsLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUV2ZW50KFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdClcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgfTtcblxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgY29uc3QgQ3JlYXRlQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gICAgICAgIHZhciBuZXdfY2F0ZWdvcnkgPSB7XG4gICAgICAgICAgICB0aXRsZTogbmV3Q2F0ZWdvcnlUaXRsZSxcbiAgICAgICAgICAgIHByaWNlOiBuZXdDYXRlZ29yeVByaWNlLFxuICAgICAgICAgICAgYW1vdW50OiBuZXdDYXRlZ29yeUFtb3VudCxcbiAgICAgICAgICAgIGltYWdlOiBuZXdDYXRlZ29yeUltZ0xpbmtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGVtcF9hcnIgPSBldmVudENhdGVnb3JpZXM7XG4gICAgICAgIHRlbXBfYXJyLnB1c2gobmV3X2NhdGVnb3J5KTtcbiAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcF9hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSB0ZW1wX2FycltpXS5wcmljZSAqIHRlbXBfYXJyW2ldLmFtb3VudDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgUHJpY2VVU0QgPSBOdW1iZXIoIGdldHByaWNlKEV2ZW50V2FsbGV0VHlwZSkpXG4gICAgICAgIHZhciB1c2RFdmVudEdvYWwgPVByaWNlVVNEICogTnVtYmVyKEV2ZW50R29hbCk7XG4gICAgICAgIHZhciBUd29EZWNpbWFsID0gZm9ybWF0dGVyLmZvcm1hdCh1c2RFdmVudEdvYWwgLSBzdW0pO1xuICAgICAgICBzZXRPdGhlckNhdGVnb3J5KFR3b0RlY2ltYWwudG9TdHJpbmcoKSk7XG4gICAgICAgIHNldEV2ZW50Q2F0ZWdvcmllcyh0ZW1wX2Fycik7XG4gICAgICAgIHNldENyZWF0ZUNhdGVnb3J5TW9kYWwoZmFsc2UpO1xuICAgICAgICBzZXROZXdDYXRlZ29yeVRpdGxlKFwiXCIpO1xuICAgICAgICBzZXROZXdDYXRlZ29yeUltZ0xpbmsoXCJcIik7XG4gICAgICAgIHNldE5ld0NhdGVnb3J5UHJpY2UoMCk7XG4gICAgICAgIHNldE5ld0NhdGVnb3J5QW1vdW50KDApO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVDYXRlZ29yeSA9IChlKSA9PiB7XG4gICAgICAgIHZhciBjYXRlZ29yeV9pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNhdGVnb3J5aWRcIik7XG4gICAgICAgIHZhciB0ZW1wX2FyciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgIT0gY2F0ZWdvcnlfaWQpIHtcbiAgICAgICAgICAgICAgICB0ZW1wX2Fyci5wdXNoKGV2ZW50Q2F0ZWdvcmllc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0RXZlbnRDYXRlZ29yaWVzKHRlbXBfYXJyKTtcbiAgICB9XG4gICAgY29uc3QgZXZlbnRHb2FsQ2hhbmdlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRFdmVudEdvYWwodmFsdWUpO1xuICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBldmVudENhdGVnb3JpZXNbaV0ucHJpY2UgKiBldmVudENhdGVnb3JpZXNbaV0uYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIHNldE90aGVyQ2F0ZWdvcnkoRXZlbnRHb2FsIC0gc3VtKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuXG4gICAgICAgIC8vTmVhciBjdXJyZW5jeVxuICAgICAgICB2YXIgbmVhclByaWNlID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBuZWFyQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1uZWFyLXByb3RvY29sJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYWxsbmVhckRhdGE7XG4gICAgICAgICAgICBhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBhbGxuZWFyRGF0YSA9IGpzb24pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG4gICAgICAgICAgICBuZWFyUHJpY2UgPSBhbGxuZWFyRGF0YS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TmVhclByaWNlVVNEKG5lYXJQcmljZSk7XG5cbiAgICAgICAgLy9DZWxvIGN1cnJlbmN5XG4gICAgICAgIHZhciBQcmljZSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1jZWxvJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYWxsRGF0YTtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKEN1cnJlbmN5VXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gYWxsRGF0YSA9IGpzb24pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG4gICAgICAgICAgICBQcmljZSA9IGFsbERhdGEuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHZhciBQcmljZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q2Vsb1ByaWNlVVNEKFByaWNlKTtcblxuXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gQ3JlYXRlQ2F0ZWdvcnlCdXR0b24oKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSAhPSBcIm1hbmFnZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svQ3JlYXRlRXZlbnRzXVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiBhcyBFdmVudCBNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cblxuICAgICAgICAgICAgPC8+KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0gb25DbGljaz17Q3JlYXRlQ2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgIENyZWF0ZSBDYXRlZ29yeVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvPilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBDcmVhdGVFdmVudEJ1dHRvbigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpICE9IFwibWFuYWdlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9naW4/Wy9DcmVhdGVFdmVudHNdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIGFzIEV2ZW50IE1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG5cbiAgICAgICAgICAgIDwvPik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19IG9uQ2xpY2s9e0NyZWF0ZUV2ZW50fT5cbiAgICAgICAgICAgICAgICBDcmVhdGUgRXZlbnRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz4pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD48PlxuICAgICAgICAgICAgPFJvdz5cblxuICAgICAgICAgICAgICAgIDxDb2wgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjQ1dndcIiwgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBwYWRkaW5nOiBcIjE5cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjRweFwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBib3JkZXI6IFwid2hpdGUgc29saWRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjBweCAwcHggMzBweCAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5DcmVhdGUgRXZlbnQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IFRpdGxlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRUaXRsZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IEVuZCBEYXRlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnREYXRlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PldhbGxldCBUeXBlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRUeXBlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudFdhbGxldFR5cGUgPT0gXCJORUFSXCIgPyAoPD48aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5BY2NvdW50IElEIG9mIHtFdmVudFdhbGxldFR5cGV9IHdhbGxldDwvaDQ+PC8+KSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4gPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+V2FsbGV0IEFkZHJlc3MgaW4ge0V2ZW50V2FsbGV0VHlwZX08L2g0PjwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRBZGRyZXNzSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PkV2ZW50IEdvYWwgaW4ge0V2ZW50V2FsbGV0VHlwZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0V2ZW50R29hbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BFdmVudCBHb2FsIGluICR7RXZlbnRXYWxsZXRUeXBlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZXZlbnRHb2FsQ2hhbmdlZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1wibnVtYmVyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImdvYWxcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5DYXRlZ29yaWVzIGZvciBTdXBwb3J0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiLTEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiLTEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRDYXRlZ29yaWVzLm1hcCgoZXZlbnRDYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjMzJVwiLCBwYWRkaW5nOiBcIjAgMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19IGtleT17aW5kZXh9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiOHB4IDE1cHhcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB0cmFuc3BhcmVudFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taWNvbiBwb3B1cC1jbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVtb3ZlQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlpZD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsIGZvbnRTaXplOiAyMCwgY29sb3I6IFwiYmxhY2tcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcIiMxNTFGMjhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntldmVudENhdGVnb3J5LnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZXZlbnRDYXRlZ29yeS5pbWFnZX0gc3R5bGU9e3sgYXNwZWN0UmF0aW86ICcxJywgYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntldmVudENhdGVnb3J5LnByaWNlICogZXZlbnRDYXRlZ29yeS5hbW91bnR9IFVTRDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pih7ZXZlbnRDYXRlZ29yeS5hbW91bnR9IHBpZWNlcyk8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldmVudENhdGVnb3JpZXMubGVuZ3RoID4gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5PdGhlciBzdXBwb3J0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gVVNEPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19IG9uQ2xpY2s9eygpID0+IHNldENyZWF0ZUNhdGVnb3J5TW9kYWwodHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjNzU3NTc1XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIsIGZvbnRTaXplOiBcIjUwcHhcIiB9fT4rPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBMb2dvIExpbms8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudExvZ29JbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMThweCAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogJzVweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJwbHVnaW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5HZW5lcmF0ZSBQbHVnaW4/PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVFdmVudEJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17Y3JlYXRlQ2F0ZWdvcnlNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldENyZWF0ZUNhdGVnb3J5TW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgIHNpemU9J2xnJ1xuICAgICAgICAgICAgICAgIGNlbnRlcmVkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIG5ldyBjYXRlZ29yeVxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5DYXRlZ29yeSBUaXRsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgVGl0bGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF90aXRsZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+QW1vdW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQW1vdW50XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeUFtb3VudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfcGllY2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PlByaWNlIG9mIEEgUGllY2U8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeVByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IFByaWNlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeVByaWNlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9wcmljZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+Q2F0ZWdvcnkgSW1hZ2UgTGluazwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5SW1nTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBJbWFnZSBMaW5rXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeUltZ0xpbmsoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9pbWFnZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxDcmVhdGVDYXRlZ29yeUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+PC8+XG4gICAgKTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNTdiZWJjMDUzMDQ1YTcyNjVkOWJcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm93IiwidG9hc3QiLCJDb2wiLCJCdXR0b24iLCJVc2VGb3JtSW5wdXQiLCJDcmVhdGVQbHVnaW4iLCJOYXZMaW5rIiwiTW9kYWwiLCJGb3JtIiwiZ2V0Q29uZmlnIiwidXNlQ29udHJhY3QiLCJ3aW5kb3ciLCJuZWFyQ29uZmlnIiwiQ3JlYXRlRXZlbnRzIiwiY29udHJhY3QiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIkV2ZW50VGl0bGUiLCJFdmVudFRpdGxlSW5wdXQiLCJFdmVudERhdGUiLCJFdmVudERhdGVJbnB1dCIsInNlbGVjdF9vcHRpb25zIiwidmFsdWUiLCJ0ZXh0IiwiRXZlbnRXYWxsZXRUeXBlIiwiRXZlbnRXYWxsZXRUeXBlSW5wdXQiLCJFdmVudFdhbGxldEFkZHJlc3MiLCJFdmVudFdhbGxldEFkZHJlc3NJbnB1dCIsIkV2ZW50R29hbCIsInNldEV2ZW50R29hbCIsIkV2ZW50TG9nbyIsIkV2ZW50TG9nb0lucHV0IiwiZXZlbnRDYXRlZ29yaWVzIiwic2V0RXZlbnRDYXRlZ29yaWVzIiwiY3JlYXRlQ2F0ZWdvcnlNb2RhbCIsInNldENyZWF0ZUNhdGVnb3J5TW9kYWwiLCJuZXdDYXRlZ29yeVRpdGxlIiwic2V0TmV3Q2F0ZWdvcnlUaXRsZSIsIm5ld0NhdGVnb3J5SW1nTGluayIsInNldE5ld0NhdGVnb3J5SW1nTGluayIsIm5ld0NhdGVnb3J5UHJpY2UiLCJzZXROZXdDYXRlZ29yeVByaWNlIiwibmV3Q2F0ZWdvcnlBbW91bnQiLCJzZXROZXdDYXRlZ29yeUFtb3VudCIsIm90aGVyQ2F0ZWdvcnkiLCJzZXRPdGhlckNhdGVnb3J5IiwiTmVhclByaWNlVVNEIiwic2V0TmVhclByaWNlVVNEIiwiQ2Vsb1ByaWNlVVNEIiwic2V0Q2Vsb1ByaWNlVVNEIiwiZ2V0cHJpY2UiLCJDcmVhdGVFdmVudCIsIndhbGxldEFjY291bnQiLCJpc1NpZ25lZEluIiwiZXRoZXJldW0iLCJzZWxlY3RlZEFkZHJlc3MiLCJ3YXJuaW5nIiwicHJvbWlzZSIsIkNyZWF0aW5nRXZlbnRBaXJ0YWJsZSIsInBlbmRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJDcmVhdGluZ0V2ZW50IiwibG9jYXRpb24iLCJocmVmIiwiQ3JlYXRlQ2F0ZUNhdGVnb3JpZXMiLCJldmVudElEIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiaSIsImxlbmd0aCIsImNyZWF0ZSIsInRpdGxlIiwicHJpY2UiLCJhbW91bnQiLCJpbWFnZSIsImVyciIsInJlY29yZHMiLCJjb25zb2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrZWQiLCJob3N0IiwiZ2V0SWQiLCJmaWVsZHMiLCJsb2ciLCJjcmVhdGVkT2JqZWN0IiwiVGl0bGUiLCJEYXRlIiwiQWRkcmVzcyIsIkdvYWwiLCJjcmVhdGVFdmVudCIsInJlc3VsdCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJDcmVhdGVDYXRlZ29yeSIsIm5ld19jYXRlZ29yeSIsInRlbXBfYXJyIiwicHVzaCIsInN1bSIsIlByaWNlVVNEIiwiTnVtYmVyIiwidXNkRXZlbnRHb2FsIiwiVHdvRGVjaW1hbCIsImZvcm1hdCIsInRvU3RyaW5nIiwicmVtb3ZlQ2F0ZWdvcnkiLCJlIiwiY2F0ZWdvcnlfaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJldmVudEdvYWxDaGFuZ2VkIiwiZmV0Y2hEYXRhIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYWxsbmVhckRhdGEiLCJjYXRjaCIsImRhdGEiLCJtYXJrZXRQYWlycyIsIlByaWNlIiwiQ3VycmVuY3lVcmwiLCJhbGxEYXRhIiwiQ3JlYXRlQ2F0ZWdvcnlCdXR0b24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWFyZ2luIiwid2lkdGgiLCJDcmVhdGVFdmVudEJ1dHRvbiIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImV2ZW50Q2F0ZWdvcnkiLCJpbmRleCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJhc3BlY3RSYXRpbyIsIm1hcmdpblRvcCIsImxpbmVIZWlnaHQiLCJhbGlnbkNvbnRlbnQiLCJnYXAiXSwic291cmNlUm9vdCI6IiJ9