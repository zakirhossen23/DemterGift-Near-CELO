"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/pages/donation/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/donation/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Donation; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components/modals/DonateNFTModal */ "./src/components/components/modals/DonateNFTModal.jsx");
/* harmony import */ var _donation_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./donation.css */ "./src/pages/donation/donation.css");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");










function Donation() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      CreatemodalShow = _useState2[0],
      setModalShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      selectid = _useState6[0],
      setselectid = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      selectEventeRecID = _useState8[0],
      setslectEventeRecID = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      selectedtype = _useState10[0],
      setselectedtype = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
      SelectedTitle = _useState12[0],
      setSelectedTitle = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
      SelectedendDate = _useState14[0],
      setSelectedendDate = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState15, 2),
      selectedWallet = _useState16[0],
      setSelectedWallet = _useState16[1];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchContractData();
  }, []);

  function calculateTimeLeft() {
    try {
      var allDates = document.getElementsByName("DateCount");

      for (var i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }
    } catch (error) {}
  }

  setInterval(function () {
    calculateTimeLeft();
  }, 1000);
  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      var nearPrice, nearCurrencyUrl, options, Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //Near currency
              nearPrice = 0;
              _context.prev = 1;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context.next = 6;
              return fetch(nearCurrencyUrl, options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 6:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              nearPrice = 0;

            case 12:
              try {
                Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
                base = new Airtable({
                  apiKey: 'keyR1Rrcl9O2s9bTs'
                }).base('appgbRCpbkzmdcucO');
                base('events').select({
                  // Selecting the first 3 records in Grid view:
                  maxRecords: 10,
                  sort: [{
                    field: "endDate",
                    direction: "asc"
                  }],
                  view: "Grid view"
                }).eachPage(function page(records, fetchNextPage) {
                  // This function (`page`) will get called for each page of records.
                  var arr = [];
                  records.forEach(function (record) {
                    var goalPrice2usd = 0;
                    goalPrice2usd = Number(Number(record.get("Goal")) * nearPrice);
                    arr.push({
                      id: record.id,
                      eventId: record.get("id"),
                      Title: record.get("title"),
                      Date: record.get("endDate"),
                      Goalusd: formatter.format(goalPrice2usd),
                      Goal: record.get("Goal"),
                      logo: record.get("logolink"),
                      wallettype: record.get("wallettype")
                    });
                  });
                  setList(arr); // To fetch the next page of records, call `fetchNextPage`.
                  // If there are more records, `page` will get called again.
                  // If there are no more records, `done` will get called.
                  // fetchNextPage();

                  if (document.getElementById("Loading")) {
                    document.getElementById("Loading").style = "display:none";
                  }
                }, function done(err) {
                  if (err) {
                    console.error(err);
                    return;
                  }
                });
              } catch (error) {
                console.error(error);
              }

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  function activateCreateNFTModal(e) {
    setselectid(e.target.getAttribute("eventid"));
    setslectEventeRecID(e.target.getAttribute("recid"));
    setSelectedTitle(e.target.getAttribute("eventtitle"));
    setSelectedendDate(e.target.getAttribute("date"));
    setSelectedWallet(e.target.getAttribute("wallettype"));
    setselectedtype(e.target.getAttribute("wallettype"));
    setModalShow(true);
  }

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    var output = da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds"; // if ("-" in output) {
    //     output = "Expired!"
    // }

    return output;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "row DonationBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
    to: "?q=All"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("a", {
    className: "DonationBarLink active"
  }, "All")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
    to: "?q=Today"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("a", {
    className: "DonationBarLink"
  }, "Today")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
    to: "?q=This Month"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("a", {
    className: "DonationBarLink"
  }, "This Month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(list).call(list, function (listItem) {
    var _ref;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      key: listItem.eventId,
      className: "row",
      style: {
        height: '397px',
        margin: '28px',
        display: 'flex',
        background: 'white',
        color: 'black',
        overflow: 'hidden',
        padding: '14px 7px',
        alignItems: 'flex-start',
        alignContent: 'flex-start'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        padding: '18px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
      style: {
        fontSize: '2.0vw',
        float: 'left'
      },
      name: "DateCount",
      date: listItem.Date
    }, LeftDate(listItem.Date))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        padding: '38px 18px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        width: '33%',
        height: '238px',
        marginTop: '-37px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("img", {
      src: listItem.logo,
      style: {
        maxHeight: '259px'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        marginLeft: '50px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        rowGap: '10px',
        alignContent: 'stretch'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      }
    }, listItem.Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        display: "flex",
        "whiteSpace": "pre-wrap"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      }
    }, "Goal:  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      }
    }, "$", listItem.Goalusd, " (", listItem.Goal, " ", listItem.wallettype, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        display: 'flex',
        height: '100%',
        float: 'right',
        alignItems: 'flex-start',
        marginLeft: '0px',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        "display": "flex",
        gap: "14px"
      }
    }, window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        color: 'white',
        overflow: 'hidden',
        background: 'rgb(236, 201, 0)',
        textAlign: 'center',
        cursor: 'pointer',
        height: '72px',
        width: '244px',
        float: 'right',
        padding: '0px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
      to: "/login?[/donation]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "card-body",
      style: {
        height: '100%',
        paddingTop: '34px'
      }
    }, "Login"))) : window.localStorage.getItem('Type') == "user" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        color: 'white',
        overflow: 'hidden',
        background: 'rgb(236, 201, 0)',
        textAlign: 'center',
        cursor: 'pointer',
        height: '72px',
        width: '244px',
        float: 'right',
        padding: '0px'
      },
      recid: listItem.id,
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      className: "card",
      wallettype: listItem.wallettype,
      onClick: activateCreateNFTModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      recid: listItem.id,
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      className: "card-body",
      style: {
        height: '100%',
        paddingTop: '34px'
      },
      wallettype: listItem.wallettype
    }, "Donate NFT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        color: 'white',
        overflow: 'hidden',
        background: 'rgb(236, 201, 0)',
        textAlign: 'center',
        cursor: 'pointer',
        width: '244px',
        float: 'right',
        padding: '0'
      },
      className: "card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
      to: "/donation/auction?[".concat(listItem.id, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "card-body",
      style: {
        height: '100%',
        paddingTop: '34px'
      }
    }, "Go to auction")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      style: {
        color: 'white',
        overflow: 'hidden',
        background: 'rgb(236, 201, 0)',
        textAlign: 'center',
        cursor: 'pointer',
        width: '244px',
        float: 'right',
        padding: '0'
      },
      className: "card"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.NavLink, {
      to: "/donation/auction?[".concat(listItem.id, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "card-body",
      style: (_ref = {
        height: '100%'
      }, (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "height", '68px'), (0,_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "paddingTop", '34px'), _ref)
    }, "Go to auction"))))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: CreatemodalShow,
    onHide: function onHide() {
      setModalShow(false);
    },
    EventID: selectid,
    EventeRecID: selectEventeRecID,
    type: selectedtype,
    SelectedTitle: SelectedTitle,
    selectedWallet: selectedWallet,
    enddate: SelectedendDate
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cf1d8fdc40496a76481d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmE4MGE4NmZhZTY3YWNkN2M0YjZjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNNLFFBQVQsR0FBb0I7QUFDL0Isa0JBQXdDTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9NLGVBQVA7QUFBQSxNQUF3QkMsWUFBeEI7O0FBRUEsbUJBQXdCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9RLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFnQ1QsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPVSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFpRFgsK0NBQVEsQ0FBQyxFQUFELENBQXpEO0FBQUE7QUFBQSxNQUFPWSxpQkFBUDtBQUFBLE1BQTBCQyxtQkFBMUI7O0FBQ0EsbUJBQXdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9jLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0Esb0JBQTBDZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU9nQixhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxvQkFBOENqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9rQixlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxvQkFBNENuQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQTtBQUFBLE1BQU9vQixjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFHQXBCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNacUIsSUFBQUEsaUJBQWlCO0FBQ3BCLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsaUJBQVQsR0FBNkI7QUFDekIsUUFBSTtBQUNBLFVBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxpQkFBVCxDQUEyQixXQUEzQixDQUFmOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsUUFBUSxDQUFDSSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxZQUFJRSxJQUFJLEdBQUlMLFFBQVEsQ0FBQ0csQ0FBRCxDQUFULENBQWNHLFlBQWQsQ0FBMkIsTUFBM0IsQ0FBWDtBQUNBTixRQUFBQSxRQUFRLENBQUNHLENBQUQsQ0FBUixDQUFZSSxTQUFaLEdBQXdCQyxRQUFRLENBQUNILElBQUQsQ0FBaEM7QUFDSDtBQUNKLEtBTkQsQ0FNRSxPQUFPSSxLQUFQLEVBQWMsQ0FFZjtBQUVKOztBQUNEQyxFQUFBQSxXQUFXLENBQUMsWUFBWTtBQUNwQlgsSUFBQUEsaUJBQWlCO0FBQ3BCLEdBRlUsRUFFUixJQUZRLENBQVg7QUFHQSxNQUFNWSxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQzdDQyxJQUFBQSxxQkFBcUIsRUFBRSxDQURzQjtBQUU3Q0MsSUFBQUEscUJBQXFCLEVBQUU7QUFGc0IsR0FBL0IsQ0FBbEI7O0FBL0IrQixXQW9DaEJqQixpQkFwQ2dCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtOQW9DL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUk7QUFDSWtCLGNBQUFBLFNBSFIsR0FHb0IsQ0FIcEI7QUFBQTtBQUtZQyxjQUFBQSxlQUxaLEdBSzhCLHNKQUw5QjtBQU1ZQyxjQUFBQSxPQU5aLEdBTXNCO0FBQ1ZDLGdCQUFBQSxNQUFNLEVBQUUsS0FERTtBQUVWQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ0wsa0NBQWdCLGtCQURYO0FBRUxDLGtCQUFBQSxNQUFNLEVBQUU7QUFGSDtBQUZDLGVBTnRCO0FBQUE7QUFBQSxxQkFhY0MsS0FBSyxDQUFDTCxlQUFELEVBQWtCQyxPQUFsQixDQUFMLENBQWdDSyxJQUFoQyxDQUFxQyxVQUFBQyxHQUFHO0FBQUEsdUJBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsZUFBeEMsRUFDREYsSUFEQyxDQUNJLFVBQUFFLElBQUk7QUFBQSx1QkFBSVQsU0FBUyxHQUFHUyxJQUFoQjtBQUFBLGVBRFIsRUFFREMsS0FGQyxDQUVLLFVBQUFDLEdBQUc7QUFBQSx1QkFBSUMsT0FBTyxDQUFDbkIsS0FBUixDQUFjLFdBQVdrQixHQUF6QixDQUFKO0FBQUEsZUFGUixDQWJkOztBQUFBO0FBZ0JRWCxjQUFBQSxTQUFTLEdBQUdBLFNBQVMsQ0FBQ2EsSUFBVixDQUFlQyxXQUFmLENBQTJCLENBQTNCLEVBQThCQyxLQUExQztBQWhCUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCWWYsY0FBQUEsU0FsQlosR0FrQndCLENBbEJ4Qjs7QUFBQTtBQW9CSSxrQkFBSTtBQUNJZ0IsZ0JBQUFBLFFBREosR0FDZUMsbUJBQU8sQ0FBQyx5REFBRCxDQUR0QjtBQUVJQyxnQkFBQUEsSUFGSixHQUVXLElBQUlGLFFBQUosQ0FBYTtBQUFFRyxrQkFBQUEsTUFBTSxFQUFFO0FBQVYsaUJBQWIsRUFBOENELElBQTlDLENBQW1ELG1CQUFuRCxDQUZYO0FBSUFBLGdCQUFBQSxJQUFJLENBQUMsUUFBRCxDQUFKLENBQWVFLE1BQWYsQ0FBc0I7QUFDbEI7QUFDQUMsa0JBQUFBLFVBQVUsRUFBRSxFQUZNO0FBR2xCQyxrQkFBQUEsSUFBSSxFQUFFLENBQUM7QUFBRUMsb0JBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxvQkFBQUEsU0FBUyxFQUFFO0FBQS9CLG1CQUFELENBSFk7QUFJbEJDLGtCQUFBQSxJQUFJLEVBQUU7QUFKWSxpQkFBdEIsRUFLR0MsUUFMSCxDQUtZLFNBQVNDLElBQVQsQ0FBY0MsT0FBZCxFQUF1QkMsYUFBdkIsRUFBc0M7QUFDOUM7QUFDQSxzQkFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQUYsa0JBQUFBLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFVQyxNQUFWLEVBQWtCO0FBQzlCLHdCQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQUEsb0JBQUFBLGFBQWEsR0FBR0MsTUFBTSxDQUFDQSxNQUFNLENBQUNGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLE1BQVgsQ0FBRCxDQUFOLEdBQTZCbkMsU0FBOUIsQ0FBdEI7QUFDQThCLG9CQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBUztBQUNMQyxzQkFBQUEsRUFBRSxFQUFFTCxNQUFNLENBQUNLLEVBRE47QUFFTEMsc0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDRyxHQUFQLENBQVcsSUFBWCxDQUZKO0FBR0xJLHNCQUFBQSxLQUFLLEVBQUVQLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLE9BQVgsQ0FIRjtBQUlMSyxzQkFBQUEsSUFBSSxFQUFFUixNQUFNLENBQUNHLEdBQVAsQ0FBVyxTQUFYLENBSkQ7QUFLTE0sc0JBQUFBLE9BQU8sRUFBRTlDLFNBQVMsQ0FBQytDLE1BQVYsQ0FBaUJULGFBQWpCLENBTEo7QUFNTFUsc0JBQUFBLElBQUksRUFBRVgsTUFBTSxDQUFDRyxHQUFQLENBQVcsTUFBWCxDQU5EO0FBT0xTLHNCQUFBQSxJQUFJLEVBQUVaLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQVgsQ0FQRDtBQVFMVSxzQkFBQUEsVUFBVSxFQUFFYixNQUFNLENBQUNHLEdBQVAsQ0FBVyxZQUFYO0FBUlAscUJBQVQ7QUFVSCxtQkFiRDtBQWVBbEUsa0JBQUFBLE9BQU8sQ0FBQzZELEdBQUQsQ0FBUCxDQWxCOEMsQ0FtQjlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFJN0MsUUFBUSxDQUFDNkQsY0FBVCxDQUF3QixTQUF4QixDQUFKLEVBQXdDO0FBQ3BDN0Qsb0JBQUFBLFFBQVEsQ0FBQzZELGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLEtBQW5DLEdBQTJDLGNBQTNDO0FBQ0g7QUFDSixpQkFoQ0QsRUFnQ0csU0FBU0MsSUFBVCxDQUFjckMsR0FBZCxFQUFtQjtBQUNsQixzQkFBSUEsR0FBSixFQUFTO0FBQUVDLG9CQUFBQSxPQUFPLENBQUNuQixLQUFSLENBQWNrQixHQUFkO0FBQW9CO0FBQVM7QUFDM0MsaUJBbENEO0FBcUNILGVBekNELENBeUNFLE9BQU9sQixLQUFQLEVBQWM7QUFDWm1CLGdCQUFBQSxPQUFPLENBQUNuQixLQUFSLENBQWNBLEtBQWQ7QUFDSDs7QUEvREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FwQytCO0FBQUE7QUFBQTs7QUFxRy9CLFdBQVN3RCxzQkFBVCxDQUFnQ0MsQ0FBaEMsRUFBbUM7QUFDL0IvRSxJQUFBQSxXQUFXLENBQUMrRSxDQUFDLENBQUNDLE1BQUYsQ0FBUzdELFlBQVQsQ0FBc0IsU0FBdEIsQ0FBRCxDQUFYO0FBQ0FqQixJQUFBQSxtQkFBbUIsQ0FBQzZFLENBQUMsQ0FBQ0MsTUFBRixDQUFTN0QsWUFBVCxDQUFzQixPQUF0QixDQUFELENBQW5CO0FBQ0FiLElBQUFBLGdCQUFnQixDQUFDeUUsQ0FBQyxDQUFDQyxNQUFGLENBQVM3RCxZQUFULENBQXNCLFlBQXRCLENBQUQsQ0FBaEI7QUFDQVgsSUFBQUEsa0JBQWtCLENBQUN1RSxDQUFDLENBQUNDLE1BQUYsQ0FBUzdELFlBQVQsQ0FBc0IsTUFBdEIsQ0FBRCxDQUFsQjtBQUNBVCxJQUFBQSxpQkFBaUIsQ0FBQ3FFLENBQUMsQ0FBQ0MsTUFBRixDQUFTN0QsWUFBVCxDQUFzQixZQUF0QixDQUFELENBQWpCO0FBQ0FmLElBQUFBLGVBQWUsQ0FBQzJFLENBQUMsQ0FBQ0MsTUFBRixDQUFTN0QsWUFBVCxDQUFzQixZQUF0QixDQUFELENBQWY7QUFFQXZCLElBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDSDs7QUFHRCxXQUFTeUIsUUFBVCxDQUFrQjRELFFBQWxCLEVBQTRCO0FBQ3hCLFFBQUlDLENBQUMsR0FBRyxJQUFJYixJQUFKLENBQVNZLFFBQVQsRUFBbUJFLE9BQW5CLEVBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsSUFBSWYsSUFBSixHQUFXYyxPQUFYLEVBQVI7QUFDQSxRQUFJRSxDQUFDLEdBQUdILENBQUMsR0FBR0UsQ0FBWjtBQUNBLFFBQUlFLEVBQUUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQVosQ0FBVDtBQUNBLFFBQUlJLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQUYsSUFBK0IsT0FBTyxFQUFQLEdBQVksRUFBM0MsQ0FBWCxDQUFSO0FBQ0EsUUFBSUssQ0FBQyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQUYsSUFBMEIsT0FBTyxFQUFqQyxDQUFYLENBQVI7QUFDQSxRQUFJTSxDQUFDLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFYLENBQUYsR0FBb0IsSUFBL0IsQ0FBUjtBQUNBLFFBQUlPLE1BQU0sR0FBR04sRUFBRSxDQUFDTyxRQUFILEtBQWdCLFFBQWhCLEdBQTJCSixDQUFDLENBQUNJLFFBQUYsRUFBM0IsR0FBMEMsU0FBMUMsR0FBc0RILENBQUMsQ0FBQ0csUUFBRixFQUF0RCxHQUFxRSxXQUFyRSxHQUFtRkYsQ0FBQyxDQUFDRSxRQUFGLEVBQW5GLEdBQWtHLFVBQS9HLENBUndCLENBU3hCO0FBQ0E7QUFDQTs7QUFDQSxXQUFRRCxNQUFSO0FBQ0g7O0FBR0Qsc0JBQ0ksaUhBRUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxpREFBQyxxREFBRDtBQUFTLE1BQUUsRUFBQztBQUFaLGtCQUNJO0FBQUcsYUFBUyxFQUFDO0FBQWIsV0FESixDQURKLGVBTUksaURBQUMscURBQUQ7QUFBUyxNQUFFLEVBQUM7QUFBWixrQkFDSTtBQUFHLGFBQVMsRUFBQztBQUFiLGFBREosQ0FOSixlQVdJLGlEQUFDLHFEQUFEO0FBQVMsTUFBRSxFQUFDO0FBQVosa0JBQ0k7QUFBRyxhQUFTLEVBQUM7QUFBYixrQkFESixDQVhKLENBRkosZUFtQkk7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixhQUFTLEVBQUM7QUFBNUIsa0JBQ0ksMEVBREosQ0FuQkosRUF3QkssMEZBQUEvRixJQUFJLE1BQUosQ0FBQUEsSUFBSSxFQUFLLFVBQUNpRyxRQUFEO0FBQUE7O0FBQUEsd0JBQ047QUFBSyxTQUFHLEVBQUVBLFFBQVEsQ0FBQzNCLE9BQW5CO0FBQTRCLGVBQVMsRUFBQyxLQUF0QztBQUE0QyxXQUFLLEVBQUU7QUFDL0M0QixRQUFBQSxNQUFNLEVBQUUsT0FEdUM7QUFFL0NDLFFBQUFBLE1BQU0sRUFBRSxNQUZ1QztBQUcvQ0MsUUFBQUEsT0FBTyxFQUFFLE1BSHNDO0FBSS9DQyxRQUFBQSxVQUFVLEVBQUUsT0FKbUM7QUFLL0NDLFFBQUFBLEtBQUssRUFBRSxPQUx3QztBQU0vQ0MsUUFBQUEsUUFBUSxFQUFFLFFBTnFDO0FBTy9DQyxRQUFBQSxPQUFPLEVBQUUsVUFQc0M7QUFRL0NDLFFBQUFBLFVBQVUsRUFBRSxZQVJtQztBQVMvQ0MsUUFBQUEsWUFBWSxFQUFFO0FBVGlDO0FBQW5ELG9CQVdJO0FBQUssV0FBSyxFQUFFO0FBQ1JOLFFBQUFBLE9BQU8sRUFBRSxNQUREO0FBRVJPLFFBQUFBLEtBQUssRUFBRSxNQUZDO0FBR1JILFFBQUFBLE9BQU8sRUFBRTtBQUhEO0FBQVosb0JBSUc7QUFBSSxXQUFLLEVBQUU7QUFDVkksUUFBQUEsUUFBUSxFQUFFLE9BREE7QUFFVkMsUUFBQUEsS0FBSyxFQUFFO0FBRkcsT0FBWDtBQUdBLFVBQUksRUFBQyxXQUhMO0FBR2lCLFVBQUksRUFBRVosUUFBUSxDQUFDekI7QUFIaEMsT0FHdUNoRCxRQUFRLENBQUN5RSxRQUFRLENBQUN6QixJQUFWLENBSC9DLENBSkgsQ0FYSixlQW1CSTtBQUFLLFdBQUssRUFBRTtBQUNSNEIsUUFBQUEsT0FBTyxFQUFFLE1BREQ7QUFFUk8sUUFBQUEsS0FBSyxFQUFFLE1BRkM7QUFHUkgsUUFBQUEsT0FBTyxFQUFFO0FBSEQ7QUFBWixvQkFLSTtBQUFLLFdBQUssRUFBRTtBQUFFRyxRQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQlQsUUFBQUEsTUFBTSxFQUFFLE9BQXhCO0FBQWlDWSxRQUFBQSxTQUFTLEVBQUU7QUFBNUM7QUFBWixvQkFDSTtBQUFLLFNBQUcsRUFBRWIsUUFBUSxDQUFDckIsSUFBbkI7QUFBeUIsV0FBSyxFQUFFO0FBRTVCbUMsUUFBQUEsU0FBUyxFQUFFO0FBRmlCO0FBQWhDLE1BREosQ0FMSixlQVdJO0FBQUssV0FBSyxFQUFFO0FBQ1JDLFFBQUFBLFVBQVUsRUFBRSxNQURKO0FBRVJaLFFBQUFBLE9BQU8sRUFBRSxNQUZEO0FBR1JhLFFBQUFBLGFBQWEsRUFBRSxRQUhQO0FBSVJOLFFBQUFBLEtBQUssRUFBRSxNQUpDO0FBS1JPLFFBQUFBLE1BQU0sRUFBRSxNQUxBO0FBTVJSLFFBQUFBLFlBQVksRUFBRTtBQU5OO0FBQVosb0JBUUk7QUFBSSxXQUFLLEVBQUU7QUFBRUUsUUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBWCxPQUFtQ1gsUUFBUSxDQUFDMUIsS0FBNUMsQ0FSSixlQVNJO0FBQUssV0FBSyxFQUFFO0FBQUU2QixRQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQixzQkFBYztBQUFqQztBQUFaLG9CQUNJO0FBQUksV0FBSyxFQUFFO0FBQUVRLFFBQUFBLFFBQVEsRUFBRTtBQUFaO0FBQVgsaUJBREosZUFFSTtBQUFJLFdBQUssRUFBRTtBQUFFQSxRQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUFYLFlBQW9DWCxRQUFRLENBQUN4QixPQUE3QyxRQUF3RHdCLFFBQVEsQ0FBQ3RCLElBQWpFLE9BQXdFc0IsUUFBUSxDQUFDcEIsVUFBakYsTUFGSixDQVRKLGVBY0k7QUFBSyxXQUFLLEVBQUU7QUFDUnVCLFFBQUFBLE9BQU8sRUFBRSxNQUREO0FBRVJGLFFBQUFBLE1BQU0sRUFBRSxNQUZBO0FBR1JXLFFBQUFBLEtBQUssRUFBRSxPQUhDO0FBSVJKLFFBQUFBLFVBQVUsRUFBRSxZQUpKO0FBS1JPLFFBQUFBLFVBQVUsRUFBRSxLQUxKO0FBTVJDLFFBQUFBLGFBQWEsRUFBRSxRQU5QO0FBT1JOLFFBQUFBLEtBQUssRUFBRSxNQVBDO0FBUVJRLFFBQUFBLGNBQWMsRUFBRTtBQVJSO0FBQVosb0JBVUk7QUFBSyxXQUFLLEVBQUU7QUFBRSxtQkFBVyxNQUFiO0FBQXFCQyxRQUFBQSxHQUFHLEVBQUU7QUFBMUI7QUFBWixPQUNNQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEtBQXVDLEVBQXZDLElBQTZDRixNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEtBQXVDLElBQXJGLGdCQUVHO0FBQUssV0FBSyxFQUFFO0FBQ1JqQixRQUFBQSxLQUFLLEVBQUUsT0FEQztBQUVSQyxRQUFBQSxRQUFRLEVBQUUsUUFGRjtBQUdSRixRQUFBQSxVQUFVLEVBQUUsa0JBSEo7QUFJUm1CLFFBQUFBLFNBQVMsRUFBRSxRQUpIO0FBS1JDLFFBQUFBLE1BQU0sRUFBRSxTQUxBO0FBTVJ2QixRQUFBQSxNQUFNLEVBQUUsTUFOQTtBQU9SUyxRQUFBQSxLQUFLLEVBQUUsT0FQQztBQVFSRSxRQUFBQSxLQUFLLEVBQUUsT0FSQztBQVNSTCxRQUFBQSxPQUFPLEVBQUU7QUFURDtBQUFaLG9CQVdJLGlEQUFDLHFEQUFEO0FBQVMsUUFBRSxFQUFDO0FBQVosb0JBQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFLLEVBQUU7QUFBRU4sUUFBQUEsTUFBTSxFQUFFLE1BQVY7QUFBa0J3QixRQUFBQSxVQUFVLEVBQUU7QUFBOUI7QUFBbEMsZUFESixDQVhKLENBRkgsR0FvQklMLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsTUFBdkMsZ0JBQWlELGlIQUNsRDtBQUFLLFdBQUssRUFBRTtBQUNSakIsUUFBQUEsS0FBSyxFQUFFLE9BREM7QUFFUkMsUUFBQUEsUUFBUSxFQUFFLFFBRkY7QUFHUkYsUUFBQUEsVUFBVSxFQUFFLGtCQUhKO0FBSVJtQixRQUFBQSxTQUFTLEVBQUUsUUFKSDtBQUtSQyxRQUFBQSxNQUFNLEVBQUUsU0FMQTtBQU1SdkIsUUFBQUEsTUFBTSxFQUFFLE1BTkE7QUFPUlMsUUFBQUEsS0FBSyxFQUFFLE9BUEM7QUFRUkUsUUFBQUEsS0FBSyxFQUFFLE9BUkM7QUFTUkwsUUFBQUEsT0FBTyxFQUFFO0FBVEQsT0FBWjtBQVVHLFdBQUssRUFBRVAsUUFBUSxDQUFDNUIsRUFWbkI7QUFVdUIsYUFBTyxFQUFFNEIsUUFBUSxDQUFDM0IsT0FWekM7QUFVa0QsVUFBSSxFQUFFMkIsUUFBUSxDQUFDekIsSUFWakU7QUFVdUUsZ0JBQVUsRUFBRXlCLFFBQVEsQ0FBQzFCLEtBVjVGO0FBVW1HLGVBQVMsRUFBQyxNQVY3RztBQVVvSCxnQkFBVSxFQUFFMEIsUUFBUSxDQUFDcEIsVUFWekk7QUFVcUosYUFBTyxFQUFFSTtBQVY5SixvQkFXSTtBQUFLLFdBQUssRUFBRWdCLFFBQVEsQ0FBQzVCLEVBQXJCO0FBQXlCLGFBQU8sRUFBRTRCLFFBQVEsQ0FBQzNCLE9BQTNDO0FBQW9ELFVBQUksRUFBRTJCLFFBQVEsQ0FBQ3pCLElBQW5FO0FBQXlFLGdCQUFVLEVBQUV5QixRQUFRLENBQUMxQixLQUE5RjtBQUFxRyxlQUFTLEVBQUMsV0FBL0c7QUFBMkgsV0FBSyxFQUFFO0FBQzlIMkIsUUFBQUEsTUFBTSxFQUFFLE1BRHNIO0FBRTlId0IsUUFBQUEsVUFBVSxFQUFFO0FBRmtILE9BQWxJO0FBR0csZ0JBQVUsRUFBRXpCLFFBQVEsQ0FBQ3BCO0FBSHhCLG9CQVhKLENBRGtELGVBbUJsRDtBQUFLLFdBQUssRUFBRTtBQUNSeUIsUUFBQUEsS0FBSyxFQUFFLE9BREM7QUFFUkMsUUFBQUEsUUFBUSxFQUFFLFFBRkY7QUFHUkYsUUFBQUEsVUFBVSxFQUFFLGtCQUhKO0FBSVJtQixRQUFBQSxTQUFTLEVBQUUsUUFKSDtBQUtSQyxRQUFBQSxNQUFNLEVBQUUsU0FMQTtBQU1SZCxRQUFBQSxLQUFLLEVBQUUsT0FOQztBQU9SRSxRQUFBQSxLQUFLLEVBQUUsT0FQQztBQVFSTCxRQUFBQSxPQUFPLEVBQUU7QUFSRCxPQUFaO0FBU0csZUFBUyxFQUFDO0FBVGIsb0JBVUksaURBQUMscURBQUQ7QUFBUyxRQUFFLCtCQUF3QlAsUUFBUSxDQUFDNUIsRUFBakM7QUFBWCxvQkFFSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQTJCLFdBQUssRUFBRTtBQUM5QjZCLFFBQUFBLE1BQU0sRUFBRSxNQURzQjtBQUU5QndCLFFBQUFBLFVBQVUsRUFBRTtBQUZrQjtBQUFsQyx1QkFGSixDQVZKLENBbkJrRCxDQUFqRCxnQkF3Q0Q7QUFBSyxXQUFLLEVBQUU7QUFDUnBCLFFBQUFBLEtBQUssRUFBRSxPQURDO0FBRVJDLFFBQUFBLFFBQVEsRUFBRSxRQUZGO0FBR1JGLFFBQUFBLFVBQVUsRUFBRSxrQkFISjtBQUlSbUIsUUFBQUEsU0FBUyxFQUFFLFFBSkg7QUFLUkMsUUFBQUEsTUFBTSxFQUFFLFNBTEE7QUFNUmQsUUFBQUEsS0FBSyxFQUFFLE9BTkM7QUFPUkUsUUFBQUEsS0FBSyxFQUFFLE9BUEM7QUFRUkwsUUFBQUEsT0FBTyxFQUFFO0FBUkQsT0FBWjtBQVNHLGVBQVMsRUFBQztBQVRiLG9CQVVJLGlEQUFDLHFEQUFEO0FBQVMsUUFBRSwrQkFBd0JQLFFBQVEsQ0FBQzVCLEVBQWpDO0FBQVgsb0JBRUk7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFLO0FBQzVCNkIsUUFBQUEsTUFBTSxFQUFFO0FBRG9CLG1IQUVwQixNQUZvQixpSEFHaEIsTUFIZ0I7QUFBaEMsdUJBRkosQ0FWSixDQTdEUixDQVZKLENBZEosQ0FYSixDQW5CSixDQURNO0FBQUEsR0FBTCxDQXhCVCxlQTBLSSxpREFBQyxvRkFBRDtBQUNJLFFBQUksRUFBRXBHLGVBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUVILEtBTEw7QUFNSSxXQUFPLEVBQUVHLFFBTmI7QUFPSSxlQUFXLEVBQUVFLGlCQVBqQjtBQVFJLFFBQUksRUFBRUUsWUFSVjtBQVNJLGlCQUFhLEVBQUVFLGFBVG5CO0FBVUksa0JBQWMsRUFBRUksY0FWcEI7QUFXSSxXQUFPLEVBQUVGO0FBWGIsSUExS0osQ0FESjtBQTBMSDs7Ozs7Ozs7VUNoVUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9kb25hdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcbmltcG9ydCAnLi9kb25hdGlvbi5jc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbmF0aW9uKCkge1xuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdEV2ZW50ZVJlY0lELCBzZXRzbGVjdEV2ZW50ZVJlY0lEXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWR0eXBlLCBzZXRzZWxlY3RlZHR5cGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtTZWxlY3RlZFRpdGxlLCBzZXRTZWxlY3RlZFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbU2VsZWN0ZWRlbmREYXRlLCBzZXRTZWxlY3RlZGVuZERhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFdhbGxldCwgc2V0U2VsZWN0ZWRXYWxsZXRdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIkRhdGVDb3VudFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgIH0sIDEwMDApO1xuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XG5cbiAgICAgICAgLy9OZWFyIGN1cnJlbmN5XG4gICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IG5lYXJQcmljZSA9IGpzb24pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG4gICAgICAgICAgICBuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICAgICAgYmFzZSgnZXZlbnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IDMgcmVjb3JkcyBpbiBHcmlkIHZpZXc6XG4gICAgICAgICAgICAgICAgbWF4UmVjb3JkczogMTAsXG4gICAgICAgICAgICAgICAgc29ydDogW3sgZmllbGQ6IFwiZW5kRGF0ZVwiLCBkaXJlY3Rpb246IFwiYXNjXCIgfV0sXG4gICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgfSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ29hbFByaWNlMnVzZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGdvYWxQcmljZTJ1c2QgPSBOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSAqIG5lYXJQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudElkOiByZWNvcmQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZTogcmVjb3JkLmdldChcInRpdGxlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZTogcmVjb3JkLmdldChcImVuZERhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsdXNkOiBmb3JtYXR0ZXIuZm9ybWF0KGdvYWxQcmljZTJ1c2QpLFxuICAgICAgICAgICAgICAgICAgICAgICAgR29hbDogcmVjb3JkLmdldChcIkdvYWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiByZWNvcmQuZ2V0KFwibG9nb2xpbmtcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXR0eXBlOiByZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICAvLyBUbyBmZXRjaCB0aGUgbmV4dCBwYWdlIG9mIHJlY29yZHMsIGNhbGwgYGZldGNoTmV4dFBhZ2VgLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIHJlY29yZHMsIGBwYWdlYCB3aWxsIGdldCBjYWxsZWQgYWdhaW4uXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIG1vcmUgcmVjb3JkcywgYGRvbmVgIHdpbGwgZ2V0IGNhbGxlZC5cbiAgICAgICAgICAgICAgICAvLyBmZXRjaE5leHRQYWdlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnRpZFwiKSk7XG4gICAgICAgIHNldHNsZWN0RXZlbnRlUmVjSUQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpXG4gICAgICAgIHNldFNlbGVjdGVkVGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnR0aXRsZVwiKSk7XG4gICAgICAgIHNldFNlbGVjdGVkZW5kRGF0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRXYWxsZXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwid2FsbGV0dHlwZVwiKSk7XG4gICAgICAgIHNldHNlbGVjdGVkdHlwZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ3YWxsZXR0eXBlXCIpKTtcblxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICB2YXIgb3V0cHV0ID0gZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCI7XG4gICAgICAgIC8vIGlmIChcIi1cIiBpbiBvdXRwdXQpIHtcbiAgICAgICAgLy8gICAgIG91dHB1dCA9IFwiRXhwaXJlZCFcIlxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiAob3V0cHV0KTtcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgRG9uYXRpb25CYXInPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1BbGwnPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayBhY3RpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWxsXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPVRvZGF5Jz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgVG9kYXlcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9VGhpcyBNb250aCc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgTW9udGhcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmV2ZW50SWR9IGNsYXNzTmFtZT0ncm93JyBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczOTdweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzI4cHgnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNHB4IDdweCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnZmxleC1zdGFydCdcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxOHB4J1xuICAgICAgICAgICAgICAgICAgICB9fT48aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMi4wdncnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICB9fSBuYW1lPVwiRGF0ZUNvdW50XCIgZGF0ZT17bGlzdEl0ZW0uRGF0ZX0+e0xlZnREYXRlKGxpc3RJdGVtLkRhdGUpfTwvaDQ+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMzhweCAxOHB4J1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICczMyUnLCBoZWlnaHQ6ICcyMzhweCcsIG1hcmdpblRvcDogJy0zN3B4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0ubG9nb30gc3R5bGU9e3tcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcyNTlweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzUwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0dhcDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ3N0cmV0Y2gnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0+e2xpc3RJdGVtLlRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgXCJ3aGl0ZVNwYWNlXCI6IFwicHJlLXdyYXBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19PkdvYWw6ICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0+JHtsaXN0SXRlbS5Hb2FsdXNkfSAoe2xpc3RJdGVtLkdvYWx9IHtsaXN0SXRlbS53YWxsZXR0eXBlfSk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiLCBnYXA6IFwiMTRweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpID8gKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9naW4/Wy9kb25hdGlvbl1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICczNHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJ1c2VyXCIgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0NHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gcmVjaWQ9e2xpc3RJdGVtLmlkfSBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZFwiIHdhbGxldHR5cGU9e2xpc3RJdGVtLndhbGxldHR5cGV9IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlY2lkPXtsaXN0SXRlbS5pZH0gZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICczNHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSB3YWxsZXR0eXBlPXtsaXN0SXRlbS53YWxsZXR0eXBlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0ZSBORlRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0NHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJjYXJkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9kb25hdGlvbi9hdWN0aW9uP1ske2xpc3RJdGVtLmlkfV1gfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICczNHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0NHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJjYXJkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9kb25hdGlvbi9hdWN0aW9uP1ske2xpc3RJdGVtLmlkfV1gfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzY4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICczNHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxEb25hdGVORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgRXZlbnRJRD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgRXZlbnRlUmVjSUQ9e3NlbGVjdEV2ZW50ZVJlY0lEfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdGVkdHlwZX1cbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRpdGxlPXtTZWxlY3RlZFRpdGxlfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkV2FsbGV0PXtzZWxlY3RlZFdhbGxldH1cbiAgICAgICAgICAgICAgICBlbmRkYXRlPXtTZWxlY3RlZGVuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImNmMWQ4ZmRjNDA0OTZhNzY0ODFkXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJEb25hdGVORlRNb2RhbCIsIlJvdXRlciIsIkRvbmF0aW9uIiwiQ3JlYXRlbW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwibGlzdCIsInNldExpc3QiLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0RXZlbnRlUmVjSUQiLCJzZXRzbGVjdEV2ZW50ZVJlY0lEIiwic2VsZWN0ZWR0eXBlIiwic2V0c2VsZWN0ZWR0eXBlIiwiU2VsZWN0ZWRUaXRsZSIsInNldFNlbGVjdGVkVGl0bGUiLCJTZWxlY3RlZGVuZERhdGUiLCJzZXRTZWxlY3RlZGVuZERhdGUiLCJzZWxlY3RlZFdhbGxldCIsInNldFNlbGVjdGVkV2FsbGV0IiwiZmV0Y2hDb250cmFjdERhdGEiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJsZW5ndGgiLCJkYXRlIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiTGVmdERhdGUiLCJlcnJvciIsInNldEludGVydmFsIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImRhdGEiLCJtYXJrZXRQYWlycyIsInByaWNlIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsInNlbGVjdCIsIm1heFJlY29yZHMiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJ2aWV3IiwiZWFjaFBhZ2UiLCJwYWdlIiwicmVjb3JkcyIsImZldGNoTmV4dFBhZ2UiLCJhcnIiLCJmb3JFYWNoIiwicmVjb3JkIiwiZ29hbFByaWNlMnVzZCIsIk51bWJlciIsImdldCIsInB1c2giLCJpZCIsImV2ZW50SWQiLCJUaXRsZSIsIkRhdGUiLCJHb2FsdXNkIiwiZm9ybWF0IiwiR29hbCIsImxvZ28iLCJ3YWxsZXR0eXBlIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRvbmUiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiZSIsInRhcmdldCIsImRhdGV0ZXh0IiwiYyIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwib3V0cHV0IiwidG9TdHJpbmciLCJsaXN0SXRlbSIsImhlaWdodCIsIm1hcmdpbiIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJvdmVyZmxvdyIsInBhZGRpbmciLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50Iiwid2lkdGgiLCJmb250U2l6ZSIsImZsb2F0IiwibWFyZ2luVG9wIiwibWF4SGVpZ2h0IiwibWFyZ2luTGVmdCIsImZsZXhEaXJlY3Rpb24iLCJyb3dHYXAiLCJqdXN0aWZ5Q29udGVudCIsImdhcCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJwYWRkaW5nVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==