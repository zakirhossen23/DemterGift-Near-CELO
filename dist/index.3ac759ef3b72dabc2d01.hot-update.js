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

  function CreateEvent() {
    return _CreateEvent.apply(this, arguments);
  }

  function _CreateEvent() {
    _CreateEvent = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(window.walletAccount.isSignedIn() == false)) {
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
    _fetchData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var nearPrice, nearCurrencyUrl, options, allnearData;
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
              setNearPriceUSD(nearPrice);

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee6, null, [[1, 9]]);
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
/******/ 	__webpack_require__.h = function() { return "5a0c8e561755489e5c85"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjNhYzc1OWVmM2I3MmRhYmMyZDAxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUVBYyxNQUFNLENBQUNDLFVBQVAsR0FBb0JILCtDQUFTLENBQUMsYUFBRCxDQUE3QjtBQUNlLFNBQVNJLFlBQVQsR0FBd0I7QUFDbkMscUJBQXFCSCxrRUFBVyxDQUFDLFFBQUQsQ0FBaEM7QUFBQSxNQUFRSSxRQUFSLGdCQUFRQSxRQUFSLENBRG1DLENBRW5DOzs7QUFFQSxzQkFBc0NWLCtFQUFZLENBQUM7QUFDL0NXLElBQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRnlDO0FBRy9DQyxJQUFBQSxXQUFXLEVBQUUsYUFIa0M7QUFJL0NDLElBQUFBLEVBQUUsRUFBRTtBQUoyQyxHQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGVBQW5COztBQU9BLHVCQUFvQ2hCLCtFQUFZLENBQUM7QUFDN0NXLElBQUFBLFlBQVksRUFBRSxFQUQrQjtBQUU3Q0MsSUFBQUEsSUFBSSxFQUFFLGdCQUZ1QztBQUc3Q0MsSUFBQUEsV0FBVyxFQUFFLGlCQUhnQztBQUk3Q0MsSUFBQUEsRUFBRSxFQUFFO0FBSnlDLEdBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9HLFNBQVA7QUFBQSxNQUFrQkMsY0FBbEI7O0FBTUEsdUJBQWdEbEIsK0VBQVksQ0FBQztBQUN6RFcsSUFBQUEsWUFBWSxFQUFFLE1BRDJDO0FBRXpEQyxJQUFBQSxJQUFJLEVBQUUsUUFGbUQ7QUFHekRFLElBQUFBLEVBQUUsRUFBRSxZQUhxRDtBQUl6REssSUFBQUEsY0FBYyxFQUFFLENBQUM7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUFB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QVgsd0JBREosZUFFSSxpREFBQyxxRUFBRDtBQUNJLFNBQUssRUFBRTlHLGdCQURYO0FBRUksZUFBVyxFQUFFLGdCQUZqQjtBQUdJLFlBQVEsRUFBRSxrQkFBQ29FLENBQUQ7QUFBQSxhQUFPbkUsbUJBQW1CLENBQUNtRSxDQUFDLENBQUNFLE1BQUYsQ0FBU3hGLEtBQVYsQ0FBMUI7QUFBQSxLQUhkO0FBSUksUUFBSSxFQUFFLFFBSlY7QUFLSSxNQUFFLEVBQUU7QUFMUixJQUZKLENBckJKLGVBK0JJO0FBQUssU0FBSyxFQUFFO0FBQUU2RyxNQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUFaLGtCQUNJO0FBQUksU0FBSyxFQUFFO0FBQUVRLE1BQUFBLFlBQVksRUFBRSxNQUFoQjtBQUF3QlcsTUFBQUEsS0FBSyxFQUFFO0FBQS9CO0FBQVgsMkJBREosZUFFSSxpREFBQyxxRUFBRDtBQUNJLFNBQUssRUFBRWhILGtCQURYO0FBRUksZUFBVyxFQUFFLHFCQUZqQjtBQUdJLFlBQVEsRUFBRSxrQkFBQ3NFLENBQUQ7QUFBQSxhQUFPckUscUJBQXFCLENBQUNxRSxDQUFDLENBQUNFLE1BQUYsQ0FBU3hGLEtBQVYsQ0FBNUI7QUFBQSxLQUhkO0FBSUksUUFBSSxFQUFFLE1BSlY7QUFLSSxNQUFFLEVBQUU7QUFMUixJQUZKLENBL0JKLGVBeUNJLGlEQUFDLG9CQUFELE9BekNKLENBUEosQ0F6R0YsQ0FBRixDQURKO0FBK0pIOzs7Ozs7OztVQ2pjRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL0NyZWF0ZUV2ZW50cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnQC9jb21wb25lbnRzL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcbmltcG9ydCB7IGNyZWF0ZUV2ZW50QVBJLCBjcmVhdGVFdmVudENhdGVnb3J5QVBJIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvZXZlbnQnO1xuaW1wb3J0IHsgQ3JlYXRlUGx1Z2luIH0gZnJvbSAnQC9wYWdlcy9FdmVudHMvZXZlbnQnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vSWNvbidcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IHtcbiAgICBCdWlsZGVyRmllbGQsXG4gICAgQnVpbGRlclN1Ym1pdEJ1dHRvbixcbiAgICBCdWlsZGVyVHJhbnNhY3Rpb24sXG59IGZyb20gJ0AvbW9kdWxlcy9CdWlsZGVyL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcblxuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwiQC9jb25maWdcIlxuXG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5cbndpbmRvdy5uZWFyQ29uZmlnID0gZ2V0Q29uZmlnKFwiZGV2ZWxvcG1lbnRcIik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XG4gICAgY29uc3QgeyBjb250cmFjdCB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIC8vIEFwcGxpY2F0aW9uIGluaXRpYWxpemF0aW9uXG5cbiAgICBjb25zdCBbRXZlbnRUaXRsZSwgRXZlbnRUaXRsZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IFRpdGxlJyxcbiAgICAgICAgaWQ6ICcnXG4gICAgfSk7XG5cbiAgICBjb25zdCBbRXZlbnREYXRlLCBFdmVudERhdGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICdkYXRldGltZS1sb2NhbCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgRW5kIERhdGUgJyxcbiAgICAgICAgaWQ6ICdlbmRkYXRlJyxcbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnRXYWxsZXRUeXBlLCBFdmVudFdhbGxldFR5cGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiQ0VMT1wiLFxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgaWQ6ICd3YWxsZXRUeXBlJyxcbiAgICAgICAgc2VsZWN0X29wdGlvbnM6IFt7IHZhbHVlOiBcIkNFTE9cIiwgdGV4dDogXCJDRUxPXCIgfSx7IHZhbHVlOiBcIk5FQVJcIiwgdGV4dDogXCJORUFSXCIgfV1cbiAgICB9KTtcbiAgICBjb25zdCBbRXZlbnRXYWxsZXRBZGRyZXNzLCBFdmVudFdhbGxldEFkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdXYWxsZXQnLFxuICAgICAgICBpZDogJ3dhbGxldCcsXG4gICAgfSk7XG4gICAgY29uc3QgW0V2ZW50R29hbCwgc2V0RXZlbnRHb2FsXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgW0V2ZW50TG9nbywgRXZlbnRMb2dvSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgTG9nbyBMaW5rJyxcbiAgICAgICAgaWQ6ICdsb2dvJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtldmVudENhdGVnb3JpZXMsIHNldEV2ZW50Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2NyZWF0ZUNhdGVnb3J5TW9kYWwsIHNldENyZWF0ZUNhdGVnb3J5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtuZXdDYXRlZ29yeVRpdGxlLCBzZXROZXdDYXRlZ29yeVRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtuZXdDYXRlZ29yeUltZ0xpbmssIHNldE5ld0NhdGVnb3J5SW1nTGlua10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlQcmljZSwgc2V0TmV3Q2F0ZWdvcnlQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbmV3Q2F0ZWdvcnlBbW91bnQsIHNldE5ld0NhdGVnb3J5QW1vdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtvdGhlckNhdGVnb3J5LCBzZXRPdGhlckNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtOZWFyUHJpY2VVU0QsIHNldE5lYXJQcmljZVVTRF0gPSB1c2VTdGF0ZSgwKTtcblxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBDcmVhdGVFdmVudCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdG9hc3Qud2FybmluZyhcIlBsZWFzZSBjb25uZWN0IE5lYXIgQWNjb3VudCFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nRXZlbnRBaXJ0YWJsZSwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJFdmVudCBpcyBjcmVhdGluZyBvbiBBaXJ0YWJsZS4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJFdmVudCBoYXMgY3JlYXRlZCBvbiBBaXJ0YWJsZSFcIlxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdFdmVudCwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJFdmVudCBpcyBjcmVhdGluZyBvbiBBdXJvcmEuLi5cIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRXZlbnQgaGFzIGNyZWF0ZWQgb24gQXVyb3JhIVwiXG4gICAgICAgIH0pXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZG9uYXRpb25cIjtcblxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0ZUNhdGVDYXRlZ29yaWVzKGV2ZW50SUQpIHtcbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRjYXRlZ29yaWVzJykuY3JlYXRlKFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXZlbnRpZFwiOiBldmVudElELFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBldmVudENhdGVnb3JpZXNbaV0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByaWNlXCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYW1vdW50XCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlXCI6IGV2ZW50Q2F0ZWdvcmllc1tpXS5pbWFnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSwgZnVuY3Rpb24gKGVyciwgcmVjb3JkcykgeyBjb25zb2xlLmVycm9yKGVycikgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdFdmVudEFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRzJykuY3JlYXRlKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImZpZWxkc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogRXZlbnRUaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcImVuZERhdGVcIjogRXZlbnREYXRlLFxuICAgICAgICAgICAgICAgICAgICBcIkdvYWxcIjogRXZlbnRHb2FsLFxuICAgICAgICAgICAgICAgICAgICBcImxvZ29saW5rXCI6IEV2ZW50TG9nbyxcbiAgICAgICAgICAgICAgICAgICAgXCJ3YWxsZXRcIjogRXZlbnRXYWxsZXRBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBcIndhbGxldHR5cGVcIjogXCJORUFSXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0sIGFzeW5jIGZ1bmN0aW9uIChlcnIsIHJlY29yZHMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGx1Z2luXCIpLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgIGF3YWl0IENyZWF0ZVBsdWdpbihgaHR0cHM6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9kb25hdGlvbi9hdWN0aW9uP1ske3JlY29yZHNbMF0uZ2V0SWQoKX1dYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVnaW5cIikuY2hlY2tlZClcbiAgICAgICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRlQ2F0ZUNhdGVnb3JpZXMocmVjb3Jkc1swXS5maWVsZHMuaWQpLCB7XG4gICAgICAgICAgICAgICAgcGVuZGluZzogXCJFdmVudCBDYXRlZ29yaWVzIGFyZSBjcmVhdGluZyBvbiBBaXJ0YWJsZS4uLlwiLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBcIkV2ZW50IENhdGVnb3JpZXMgaGFzIGNyZWF0ZWQgb24gQWlydGFibGUhXCJcbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNvbnN0IENyZWF0aW5nRXZlbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vICBDb250cmFjdFxuICAgICAgICBjb25zb2xlLmxvZyhjb250cmFjdCk7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG4gICAgICAgICAgICBUaXRsZTogRXZlbnRUaXRsZSxcbiAgICAgICAgICAgIERhdGU6IEV2ZW50RGF0ZSxcbiAgICAgICAgICAgIEFkZHJlc3M6IEV2ZW50V2FsbGV0QWRkcmVzcyxcbiAgICAgICAgICAgIEdvYWw6IEV2ZW50R29hbCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVFdmVudChcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgIH07XG5cbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcblxuICAgIGNvbnN0IENyZWF0ZUNhdGVnb3J5ID0gKCkgPT4ge1xuICAgICAgICB2YXIgbmV3X2NhdGVnb3J5ID0ge1xuICAgICAgICAgICAgdGl0bGU6IG5ld0NhdGVnb3J5VGl0bGUsXG4gICAgICAgICAgICBwcmljZTogbmV3Q2F0ZWdvcnlQcmljZSxcbiAgICAgICAgICAgIGFtb3VudDogbmV3Q2F0ZWdvcnlBbW91bnQsXG4gICAgICAgICAgICBpbWFnZTogbmV3Q2F0ZWdvcnlJbWdMaW5rXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRlbXBfYXJyID0gZXZlbnRDYXRlZ29yaWVzO1xuICAgICAgICB0ZW1wX2Fyci5wdXNoKG5ld19jYXRlZ29yeSk7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBfYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdW0gKz0gdGVtcF9hcnJbaV0ucHJpY2UgKiB0ZW1wX2FycltpXS5hbW91bnQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVzZEV2ZW50R29hbCA9IE51bWJlcihOZWFyUHJpY2VVU0QpICogTnVtYmVyKEV2ZW50R29hbCk7XG4gICAgICAgIHZhciBUd29EZWNpbWFsID0gZm9ybWF0dGVyLmZvcm1hdCh1c2RFdmVudEdvYWwgLSBzdW0pO1xuICAgICAgICBzZXRPdGhlckNhdGVnb3J5KFR3b0RlY2ltYWwudG9TdHJpbmcoKSk7XG4gICAgICAgIHNldEV2ZW50Q2F0ZWdvcmllcyh0ZW1wX2Fycik7XG4gICAgICAgIHNldENyZWF0ZUNhdGVnb3J5TW9kYWwoZmFsc2UpO1xuICAgICAgICBzZXROZXdDYXRlZ29yeVRpdGxlKFwiXCIpO1xuICAgICAgICBzZXROZXdDYXRlZ29yeUltZ0xpbmsoXCJcIik7XG4gICAgICAgIHNldE5ld0NhdGVnb3J5UHJpY2UoMCk7XG4gICAgICAgIHNldE5ld0NhdGVnb3J5QW1vdW50KDApO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVDYXRlZ29yeSA9IChlKSA9PiB7XG4gICAgICAgIHZhciBjYXRlZ29yeV9pZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNhdGVnb3J5aWRcIik7XG4gICAgICAgIHZhciB0ZW1wX2FyciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50Q2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgIT0gY2F0ZWdvcnlfaWQpIHtcbiAgICAgICAgICAgICAgICB0ZW1wX2Fyci5wdXNoKGV2ZW50Q2F0ZWdvcmllc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0RXZlbnRDYXRlZ29yaWVzKHRlbXBfYXJyKTtcbiAgICB9XG4gICAgY29uc3QgZXZlbnRHb2FsQ2hhbmdlZCA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRFdmVudEdvYWwodmFsdWUpO1xuICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudENhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1bSArPSBldmVudENhdGVnb3JpZXNbaV0ucHJpY2UgKiBldmVudENhdGVnb3JpZXNbaV0uYW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIHNldE90aGVyQ2F0ZWdvcnkoRXZlbnRHb2FsIC0gc3VtKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuXG4gICAgICAgIC8vTmVhciBjdXJyZW5jeVxuICAgICAgICB2YXIgbmVhclByaWNlID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBuZWFyQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1uZWFyLXByb3RvY29sJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgYWxsbmVhckRhdGE7XG4gICAgICAgICAgICBhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBhbGxuZWFyRGF0YSA9IGpzb24pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG4gICAgICAgICAgICBuZWFyUHJpY2UgPSBhbGxuZWFyRGF0YS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TmVhclByaWNlVVNEKG5lYXJQcmljZSk7XG5cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBDcmVhdGVDYXRlZ29yeUJ1dHRvbigpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpICE9IFwibWFuYWdlclwiKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL0NyZWF0ZUV2ZW50c11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIExvZ2luIGFzIEV2ZW50IE1hbmFnZXJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19IG9uQ2xpY2s9e0NyZWF0ZUNhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICBDcmVhdGUgQ2F0ZWdvcnlcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz4pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQ3JlYXRlRXZlbnRCdXR0b24oKTogSlNYLkVsZW1lbnQge1xuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSAhPSBcIm1hbmFnZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svQ3JlYXRlRXZlbnRzXVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogXCIxN3B4IDAgMHB4IDBweFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiBhcyBFdmVudCBNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICA8Lz4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgbWFyZ2luOiBcIjE3cHggMCAwcHggMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiB9fSBvbkNsaWNrPXtDcmVhdGVFdmVudH0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC8+KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+PD5cbiAgICAgICAgICAgIDxSb3c+XG5cbiAgICAgICAgICAgICAgICA8Q29sID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI0NXZ3XCIsIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiwgcGFkZGluZzogXCIxOXB4XCIsIGJvcmRlclJhZGl1czogXCI0cHhcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyOiBcIndoaXRlIHNvbGlkXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDMwcHggMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q3JlYXRlIEV2ZW50PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBUaXRsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50VGl0bGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBFbmQgRGF0ZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50RGF0ZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5XYWxsZXQgVHlwZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0VHlwZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRXYWxsZXRUeXBlID09IFwiTkVBUlwiID8gKDw+PGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+QWNjb3VudCBJRCBvZiB7RXZlbnRXYWxsZXRUeXBlfSB3YWxsZXQ8L2g0PjwvPikgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+IDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PldhbGxldCBBZGRyZXNzIGluIHtFdmVudFdhbGxldFR5cGV9PC9oND48Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50V2FsbGV0QWRkcmVzc0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBHb2FsIGluIHtFdmVudFdhbGxldFR5cGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtFdmVudEdvYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRXZlbnQgR29hbCBpbiAke0V2ZW50V2FsbGV0VHlwZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGV2ZW50R29hbENoYW5nZWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJnb2FsXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+Q2F0ZWdvcmllcyBmb3IgU3VwcG9ydDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsIG1hcmdpblJpZ2h0OiBcIi0xMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogXCJ3cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Q2F0ZWdvcmllcy5tYXAoKGV2ZW50Q2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiwgcGFkZGluZzogXCIwIDEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fSBrZXk9e2luZGV4fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBwYWRkaW5nOiBcIjhweCAxNXB4XCIsIGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWljb24gcG9wdXAtY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5aWQ9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLCBmb250U2l6ZTogMjAsIGNvbG9yOiBcImJsYWNrXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57ZXZlbnRDYXRlZ29yeS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2V2ZW50Q2F0ZWdvcnkuaW1hZ2V9IHN0eWxlPXt7IGFzcGVjdFJhdGlvOiAnMScsYm9yZGVyUmFkaXVzOiBcIjVweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogXCIxMHB4XCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19PntldmVudENhdGVnb3J5LnByaWNlICogZXZlbnRDYXRlZ29yeS5hbW91bnR9IFVTRDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzE1MUYyOFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMTRweFwiIH19Pih7ZXZlbnRDYXRlZ29yeS5hbW91bnR9IHBpZWNlcyk8L2g1PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMzMlXCIsIHBhZGRpbmc6IFwiMCAxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldmVudENhdGVnb3JpZXMubGVuZ3RoID4gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5PdGhlciBzdXBwb3J0PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCIjMTUxRjI4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbGluZUhlaWdodDogXCIxNHB4XCIgfX0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gVVNEPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19IG9uQ2xpY2s9eygpID0+IHNldENyZWF0ZUNhdGVnb3J5TW9kYWwodHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjNzU3NTc1XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIxNHB4XCIsIGZvbnRTaXplOiBcIjUwcHhcIiB9fT4rPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5FdmVudCBMb2dvIExpbms8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudExvZ29JbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMThweCAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogJzVweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJwbHVnaW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5HZW5lcmF0ZSBQbHVnaW4/PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVFdmVudEJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17Y3JlYXRlQ2F0ZWdvcnlNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHNldENyZWF0ZUNhdGVnb3J5TW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgIHNpemU9J2xnJ1xuICAgICAgICAgICAgICAgIGNlbnRlcmVkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIG5ldyBjYXRlZ29yeVxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5DYXRlZ29yeSBUaXRsZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQ2F0ZWdvcnkgVGl0bGVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0NhdGVnb3J5VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF90aXRsZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+QW1vdW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3Q2F0ZWdvcnlBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiQW1vdW50XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeUFtb3VudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJudW1iZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17XCJjYXRfcGllY2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjb2xvcjogXCJibGFja1wiIH19PlByaWNlIG9mIEEgUGllY2U8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdDYXRlZ29yeVByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIkNhdGVnb3J5IFByaWNlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeVByaWNlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtcIm51bWJlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9wcmljZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+Q2F0ZWdvcnkgSW1hZ2UgTGluazwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld0NhdGVnb3J5SW1nTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJDYXRlZ29yeSBJbWFnZSBMaW5rXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdDYXRlZ29yeUltZ0xpbmsoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtcImNhdF9pbWFnZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxDcmVhdGVDYXRlZ29yeUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC8+PC8+XG4gICAgKTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNWEwYzhlNTYxNzU1NDg5ZTVjODVcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUm93IiwidG9hc3QiLCJDb2wiLCJCdXR0b24iLCJVc2VGb3JtSW5wdXQiLCJDcmVhdGVQbHVnaW4iLCJOYXZMaW5rIiwiTW9kYWwiLCJGb3JtIiwiZ2V0Q29uZmlnIiwidXNlQ29udHJhY3QiLCJ3aW5kb3ciLCJuZWFyQ29uZmlnIiwiQ3JlYXRlRXZlbnRzIiwiY29udHJhY3QiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIkV2ZW50VGl0bGUiLCJFdmVudFRpdGxlSW5wdXQiLCJFdmVudERhdGUiLCJFdmVudERhdGVJbnB1dCIsInNlbGVjdF9vcHRpb25zIiwidmFsdWUiLCJ0ZXh0IiwiRXZlbnRXYWxsZXRUeXBlIiwiRXZlbnRXYWxsZXRUeXBlSW5wdXQiLCJFdmVudFdhbGxldEFkZHJlc3MiLCJFdmVudFdhbGxldEFkZHJlc3NJbnB1dCIsIkV2ZW50R29hbCIsInNldEV2ZW50R29hbCIsIkV2ZW50TG9nbyIsIkV2ZW50TG9nb0lucHV0IiwiZXZlbnRDYXRlZ29yaWVzIiwic2V0RXZlbnRDYXRlZ29yaWVzIiwiY3JlYXRlQ2F0ZWdvcnlNb2RhbCIsInNldENyZWF0ZUNhdGVnb3J5TW9kYWwiLCJuZXdDYXRlZ29yeVRpdGxlIiwic2V0TmV3Q2F0ZWdvcnlUaXRsZSIsIm5ld0NhdGVnb3J5SW1nTGluayIsInNldE5ld0NhdGVnb3J5SW1nTGluayIsIm5ld0NhdGVnb3J5UHJpY2UiLCJzZXROZXdDYXRlZ29yeVByaWNlIiwibmV3Q2F0ZWdvcnlBbW91bnQiLCJzZXROZXdDYXRlZ29yeUFtb3VudCIsIm90aGVyQ2F0ZWdvcnkiLCJzZXRPdGhlckNhdGVnb3J5IiwiTmVhclByaWNlVVNEIiwic2V0TmVhclByaWNlVVNEIiwiQ3JlYXRlRXZlbnQiLCJ3YWxsZXRBY2NvdW50IiwiaXNTaWduZWRJbiIsIndhcm5pbmciLCJwcm9taXNlIiwiQ3JlYXRpbmdFdmVudEFpcnRhYmxlIiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsIkNyZWF0aW5nRXZlbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJDcmVhdGVDYXRlQ2F0ZWdvcmllcyIsImV2ZW50SUQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJpIiwibGVuZ3RoIiwiY3JlYXRlIiwidGl0bGUiLCJwcmljZSIsImFtb3VudCIsImltYWdlIiwiZXJyIiwicmVjb3JkcyIsImNvbnNvbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsImhvc3QiLCJnZXRJZCIsImZpZWxkcyIsImxvZyIsImNyZWF0ZWRPYmplY3QiLCJUaXRsZSIsIkRhdGUiLCJBZGRyZXNzIiwiR29hbCIsImNyZWF0ZUV2ZW50IiwicmVzdWx0IiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkNyZWF0ZUNhdGVnb3J5IiwibmV3X2NhdGVnb3J5IiwidGVtcF9hcnIiLCJwdXNoIiwic3VtIiwidXNkRXZlbnRHb2FsIiwiTnVtYmVyIiwiVHdvRGVjaW1hbCIsImZvcm1hdCIsInRvU3RyaW5nIiwicmVtb3ZlQ2F0ZWdvcnkiLCJlIiwiY2F0ZWdvcnlfaWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJldmVudEdvYWxDaGFuZ2VkIiwiZmV0Y2hEYXRhIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYWxsbmVhckRhdGEiLCJjYXRjaCIsImRhdGEiLCJtYXJrZXRQYWlycyIsIkNyZWF0ZUNhdGVnb3J5QnV0dG9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1hcmdpbiIsIndpZHRoIiwiQ3JlYXRlRXZlbnRCdXR0b24iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJldmVudENhdGVnb3J5IiwiaW5kZXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsImNvbG9yIiwidGV4dEFsaWduIiwiYXNwZWN0UmF0aW8iLCJtYXJnaW5Ub3AiLCJsaW5lSGVpZ2h0IiwiYWxpZ25Db250ZW50IiwiZ2FwIl0sInNvdXJjZVJvb3QiOiIifQ==