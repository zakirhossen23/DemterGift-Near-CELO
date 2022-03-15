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
    setselectedtype("NFT");
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
/******/ 	__webpack_require__.h = function() { return "a80a86fae67acd7c4b6c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjBkNmFiMTJlNDE5YjZhYmZjOGFlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNNLFFBQVQsR0FBb0I7QUFDL0Isa0JBQXdDTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9NLGVBQVA7QUFBQSxNQUF3QkMsWUFBeEI7O0FBRUEsbUJBQXdCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9RLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFnQ1QsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPVSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFpRFgsK0NBQVEsQ0FBQyxFQUFELENBQXpEO0FBQUE7QUFBQSxNQUFPWSxpQkFBUDtBQUFBLE1BQTBCQyxtQkFBMUI7O0FBQ0EsbUJBQXdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9jLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0Esb0JBQTBDZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU9nQixhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxvQkFBOENqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9rQixlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxvQkFBNENuQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQTtBQUFBLE1BQU9vQixjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFHQXBCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNacUIsSUFBQUEsaUJBQWlCO0FBQ3BCLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsaUJBQVQsR0FBNkI7QUFDekIsUUFBSTtBQUNBLFVBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxpQkFBVCxDQUEyQixXQUEzQixDQUFmOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsUUFBUSxDQUFDSSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN0QyxZQUFJRSxJQUFJLEdBQUlMLFFBQVEsQ0FBQ0csQ0FBRCxDQUFULENBQWNHLFlBQWQsQ0FBMkIsTUFBM0IsQ0FBWDtBQUNBTixRQUFBQSxRQUFRLENBQUNHLENBQUQsQ0FBUixDQUFZSSxTQUFaLEdBQXdCQyxRQUFRLENBQUNILElBQUQsQ0FBaEM7QUFDSDtBQUNKLEtBTkQsQ0FNRSxPQUFPSSxLQUFQLEVBQWMsQ0FFZjtBQUVKOztBQUNEQyxFQUFBQSxXQUFXLENBQUMsWUFBWTtBQUNwQlgsSUFBQUEsaUJBQWlCO0FBQ3BCLEdBRlUsRUFFUixJQUZRLENBQVg7QUFHQSxNQUFNWSxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQzdDQyxJQUFBQSxxQkFBcUIsRUFBRSxDQURzQjtBQUU3Q0MsSUFBQUEscUJBQXFCLEVBQUU7QUFGc0IsR0FBL0IsQ0FBbEI7O0FBL0IrQixXQW9DaEJqQixpQkFwQ2dCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtOQW9DL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUk7QUFDSWtCLGNBQUFBLFNBSFIsR0FHb0IsQ0FIcEI7QUFBQTtBQUtZQyxjQUFBQSxlQUxaLEdBSzhCLHNKQUw5QjtBQU1ZQyxjQUFBQSxPQU5aLEdBTXNCO0FBQ1ZDLGdCQUFBQSxNQUFNLEVBQUUsS0FERTtBQUVWQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ0wsa0NBQWdCLGtCQURYO0FBRUxDLGtCQUFBQSxNQUFNLEVBQUU7QUFGSDtBQUZDLGVBTnRCO0FBQUE7QUFBQSxxQkFhY0MsS0FBSyxDQUFDTCxlQUFELEVBQWtCQyxPQUFsQixDQUFMLENBQWdDSyxJQUFoQyxDQUFxQyxVQUFBQyxHQUFHO0FBQUEsdUJBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsZUFBeEMsRUFDREYsSUFEQyxDQUNJLFVBQUFFLElBQUk7QUFBQSx1QkFBSVQsU0FBUyxHQUFHUyxJQUFoQjtBQUFBLGVBRFIsRUFFREMsS0FGQyxDQUVLLFVBQUFDLEdBQUc7QUFBQSx1QkFBSUMsT0FBTyxDQUFDbkIsS0FBUixDQUFjLFdBQVdrQixHQUF6QixDQUFKO0FBQUEsZUFGUixDQWJkOztBQUFBO0FBZ0JRWCxjQUFBQSxTQUFTLEdBQUdBLFNBQVMsQ0FBQ2EsSUFBVixDQUFlQyxXQUFmLENBQTJCLENBQTNCLEVBQThCQyxLQUExQztBQWhCUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCWWYsY0FBQUEsU0FsQlosR0FrQndCLENBbEJ4Qjs7QUFBQTtBQW9CSSxrQkFBSTtBQUNJZ0IsZ0JBQUFBLFFBREosR0FDZUMsbUJBQU8sQ0FBQyx5REFBRCxDQUR0QjtBQUVJQyxnQkFBQUEsSUFGSixHQUVXLElBQUlGLFFBQUosQ0FBYTtBQUFFRyxrQkFBQUEsTUFBTSxFQUFFO0FBQVYsaUJBQWIsRUFBOENELElBQTlDLENBQW1ELG1CQUFuRCxDQUZYO0FBSUFBLGdCQUFBQSxJQUFJLENBQUMsUUFBRCxDQUFKLENBQWVFLE1BQWYsQ0FBc0I7QUFDbEI7QUFDQUMsa0JBQUFBLFVBQVUsRUFBRSxFQUZNO0FBR2xCQyxrQkFBQUEsSUFBSSxFQUFFLENBQUM7QUFBRUMsb0JBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CQyxvQkFBQUEsU0FBUyxFQUFFO0FBQS9CLG1CQUFELENBSFk7QUFJbEJDLGtCQUFBQSxJQUFJLEVBQUU7QUFKWSxpQkFBdEIsRUFLR0MsUUFMSCxDQUtZLFNBQVNDLElBQVQsQ0FBY0MsT0FBZCxFQUF1QkMsYUFBdkIsRUFBc0M7QUFDOUM7QUFDQSxzQkFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQUYsa0JBQUFBLE9BQU8sQ0FBQ0csT0FBUixDQUFnQixVQUFVQyxNQUFWLEVBQWtCO0FBQzlCLHdCQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQUEsb0JBQUFBLGFBQWEsR0FBR0MsTUFBTSxDQUFDQSxNQUFNLENBQUNGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLE1BQVgsQ0FBRCxDQUFOLEdBQTZCbkMsU0FBOUIsQ0FBdEI7QUFDQThCLG9CQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBUztBQUNMQyxzQkFBQUEsRUFBRSxFQUFFTCxNQUFNLENBQUNLLEVBRE47QUFFTEMsc0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDRyxHQUFQLENBQVcsSUFBWCxDQUZKO0FBR0xJLHNCQUFBQSxLQUFLLEVBQUVQLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLE9BQVgsQ0FIRjtBQUlMSyxzQkFBQUEsSUFBSSxFQUFFUixNQUFNLENBQUNHLEdBQVAsQ0FBVyxTQUFYLENBSkQ7QUFLTE0sc0JBQUFBLE9BQU8sRUFBRTlDLFNBQVMsQ0FBQytDLE1BQVYsQ0FBaUJULGFBQWpCLENBTEo7QUFNTFUsc0JBQUFBLElBQUksRUFBRVgsTUFBTSxDQUFDRyxHQUFQLENBQVcsTUFBWCxDQU5EO0FBT0xTLHNCQUFBQSxJQUFJLEVBQUVaLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQVgsQ0FQRDtBQVFMVSxzQkFBQUEsVUFBVSxFQUFFYixNQUFNLENBQUNHLEdBQVAsQ0FBVyxZQUFYO0FBUlAscUJBQVQ7QUFVSCxtQkFiRDtBQWVBbEUsa0JBQUFBLE9BQU8sQ0FBQzZELEdBQUQsQ0FBUCxDQWxCOEMsQ0FtQjlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFJN0MsUUFBUSxDQUFDNkQsY0FBVCxDQUF3QixTQUF4QixDQUFKLEVBQXdDO0FBQ3BDN0Qsb0JBQUFBLFFBQVEsQ0FBQzZELGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLEtBQW5DLEdBQTJDLGNBQTNDO0FBQ0g7QUFDSixpQkFoQ0QsRUFnQ0csU0FBU0MsSUFBVCxDQUFjckMsR0FBZCxFQUFtQjtBQUNsQixzQkFBSUEsR0FBSixFQUFTO0FBQUVDLG9CQUFBQSxPQUFPLENBQUNuQixLQUFSLENBQWNrQixHQUFkO0FBQW9CO0FBQVM7QUFDM0MsaUJBbENEO0FBcUNILGVBekNELENBeUNFLE9BQU9sQixLQUFQLEVBQWM7QUFDWm1CLGdCQUFBQSxPQUFPLENBQUNuQixLQUFSLENBQWNBLEtBQWQ7QUFDSDs7QUEvREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FwQytCO0FBQUE7QUFBQTs7QUFxRy9CLFdBQVN3RCxzQkFBVCxDQUFnQ0MsQ0FBaEMsRUFBbUM7QUFDL0IvRSxJQUFBQSxXQUFXLENBQUMrRSxDQUFDLENBQUNDLE1BQUYsQ0FBUzdELFlBQVQsQ0FBc0IsU0FBdEIsQ0FBRCxDQUFYO0FBQ0FqQixJQUFBQSxtQkFBbUIsQ0FBQzZFLENBQUMsQ0FBQ0MsTUFBRixDQUFTN0QsWUFBVCxDQUFzQixPQUF0QixDQUFELENBQW5CO0FBQ0FiLElBQUFBLGdCQUFnQixDQUFDeUUsQ0FBQyxDQUFDQyxNQUFGLENBQVM3RCxZQUFULENBQXNCLFlBQXRCLENBQUQsQ0FBaEI7QUFDQVgsSUFBQUEsa0JBQWtCLENBQUN1RSxDQUFDLENBQUNDLE1BQUYsQ0FBUzdELFlBQVQsQ0FBc0IsTUFBdEIsQ0FBRCxDQUFsQjtBQUNBVCxJQUFBQSxpQkFBaUIsQ0FBQ3FFLENBQUMsQ0FBQ0MsTUFBRixDQUFTN0QsWUFBVCxDQUFzQixZQUF0QixDQUFELENBQWpCO0FBQ0FmLElBQUFBLGVBQWUsQ0FBQyxLQUFELENBQWY7QUFFQVIsSUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUdELFdBQVN5QixRQUFULENBQWtCNEQsUUFBbEIsRUFBNEI7QUFDeEIsUUFBSUMsQ0FBQyxHQUFHLElBQUliLElBQUosQ0FBU1ksUUFBVCxFQUFtQkUsT0FBbkIsRUFBUjtBQUNBLFFBQUlDLENBQUMsR0FBRyxJQUFJZixJQUFKLEdBQVdjLE9BQVgsRUFBUjtBQUNBLFFBQUlFLENBQUMsR0FBR0gsQ0FBQyxHQUFHRSxDQUFaO0FBQ0EsUUFBSUUsRUFBRSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBWixDQUFUO0FBQ0EsUUFBSUksQ0FBQyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBRixJQUErQixPQUFPLEVBQVAsR0FBWSxFQUEzQyxDQUFYLENBQVI7QUFDQSxRQUFJSyxDQUFDLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBaEIsQ0FBRixJQUEwQixPQUFPLEVBQWpDLENBQVgsQ0FBUjtBQUNBLFFBQUlNLENBQUMsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQVlILENBQUMsSUFBSSxPQUFPLEVBQVgsQ0FBRixHQUFvQixJQUEvQixDQUFSO0FBQ0EsUUFBSU8sTUFBTSxHQUFHTixFQUFFLENBQUNPLFFBQUgsS0FBZ0IsUUFBaEIsR0FBMkJKLENBQUMsQ0FBQ0ksUUFBRixFQUEzQixHQUEwQyxTQUExQyxHQUFzREgsQ0FBQyxDQUFDRyxRQUFGLEVBQXRELEdBQXFFLFdBQXJFLEdBQW1GRixDQUFDLENBQUNFLFFBQUYsRUFBbkYsR0FBa0csVUFBL0csQ0FSd0IsQ0FTeEI7QUFDQTtBQUNBOztBQUNBLFdBQVFELE1BQVI7QUFDSDs7QUFHRCxzQkFDSSxpSEFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLGlEQUFDLHFEQUFEO0FBQVMsTUFBRSxFQUFDO0FBQVosa0JBQ0k7QUFBRyxhQUFTLEVBQUM7QUFBYixXQURKLENBREosZUFNSSxpREFBQyxxREFBRDtBQUFTLE1BQUUsRUFBQztBQUFaLGtCQUNJO0FBQUcsYUFBUyxFQUFDO0FBQWIsYUFESixDQU5KLGVBV0ksaURBQUMscURBQUQ7QUFBUyxNQUFFLEVBQUM7QUFBWixrQkFDSTtBQUFHLGFBQVMsRUFBQztBQUFiLGtCQURKLENBWEosQ0FGSixlQW1CSTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQWtCLGFBQVMsRUFBQztBQUE1QixrQkFDSSwwRUFESixDQW5CSixFQXdCSywwRkFBQS9GLElBQUksTUFBSixDQUFBQSxJQUFJLEVBQUssVUFBQ2lHLFFBQUQ7QUFBQTs7QUFBQSx3QkFDTjtBQUFLLFNBQUcsRUFBRUEsUUFBUSxDQUFDM0IsT0FBbkI7QUFBNEIsZUFBUyxFQUFDLEtBQXRDO0FBQTRDLFdBQUssRUFBRTtBQUMvQzRCLFFBQUFBLE1BQU0sRUFBRSxPQUR1QztBQUUvQ0MsUUFBQUEsTUFBTSxFQUFFLE1BRnVDO0FBRy9DQyxRQUFBQSxPQUFPLEVBQUUsTUFIc0M7QUFJL0NDLFFBQUFBLFVBQVUsRUFBRSxPQUptQztBQUsvQ0MsUUFBQUEsS0FBSyxFQUFFLE9BTHdDO0FBTS9DQyxRQUFBQSxRQUFRLEVBQUUsUUFOcUM7QUFPL0NDLFFBQUFBLE9BQU8sRUFBRSxVQVBzQztBQVEvQ0MsUUFBQUEsVUFBVSxFQUFFLFlBUm1DO0FBUy9DQyxRQUFBQSxZQUFZLEVBQUU7QUFUaUM7QUFBbkQsb0JBV0k7QUFBSyxXQUFLLEVBQUU7QUFDUk4sUUFBQUEsT0FBTyxFQUFFLE1BREQ7QUFFUk8sUUFBQUEsS0FBSyxFQUFFLE1BRkM7QUFHUkgsUUFBQUEsT0FBTyxFQUFFO0FBSEQ7QUFBWixvQkFJRztBQUFJLFdBQUssRUFBRTtBQUNWSSxRQUFBQSxRQUFRLEVBQUUsT0FEQTtBQUVWQyxRQUFBQSxLQUFLLEVBQUU7QUFGRyxPQUFYO0FBR0EsVUFBSSxFQUFDLFdBSEw7QUFHaUIsVUFBSSxFQUFFWixRQUFRLENBQUN6QjtBQUhoQyxPQUd1Q2hELFFBQVEsQ0FBQ3lFLFFBQVEsQ0FBQ3pCLElBQVYsQ0FIL0MsQ0FKSCxDQVhKLGVBbUJJO0FBQUssV0FBSyxFQUFFO0FBQ1I0QixRQUFBQSxPQUFPLEVBQUUsTUFERDtBQUVSTyxRQUFBQSxLQUFLLEVBQUUsTUFGQztBQUdSSCxRQUFBQSxPQUFPLEVBQUU7QUFIRDtBQUFaLG9CQUtJO0FBQUssV0FBSyxFQUFFO0FBQUVHLFFBQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCVCxRQUFBQSxNQUFNLEVBQUUsT0FBeEI7QUFBaUNZLFFBQUFBLFNBQVMsRUFBRTtBQUE1QztBQUFaLG9CQUNJO0FBQUssU0FBRyxFQUFFYixRQUFRLENBQUNyQixJQUFuQjtBQUF5QixXQUFLLEVBQUU7QUFFNUJtQyxRQUFBQSxTQUFTLEVBQUU7QUFGaUI7QUFBaEMsTUFESixDQUxKLGVBV0k7QUFBSyxXQUFLLEVBQUU7QUFDUkMsUUFBQUEsVUFBVSxFQUFFLE1BREo7QUFFUlosUUFBQUEsT0FBTyxFQUFFLE1BRkQ7QUFHUmEsUUFBQUEsYUFBYSxFQUFFLFFBSFA7QUFJUk4sUUFBQUEsS0FBSyxFQUFFLE1BSkM7QUFLUk8sUUFBQUEsTUFBTSxFQUFFLE1BTEE7QUFNUlIsUUFBQUEsWUFBWSxFQUFFO0FBTk47QUFBWixvQkFRSTtBQUFJLFdBQUssRUFBRTtBQUFFRSxRQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUFYLE9BQW1DWCxRQUFRLENBQUMxQixLQUE1QyxDQVJKLGVBU0k7QUFBSyxXQUFLLEVBQUU7QUFBRTZCLFFBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CLHNCQUFjO0FBQWpDO0FBQVosb0JBQ0k7QUFBSSxXQUFLLEVBQUU7QUFBRVEsUUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBWCxpQkFESixlQUVJO0FBQUksV0FBSyxFQUFFO0FBQUVBLFFBQUFBLFFBQVEsRUFBRTtBQUFaO0FBQVgsWUFBb0NYLFFBQVEsQ0FBQ3hCLE9BQTdDLFFBQXdEd0IsUUFBUSxDQUFDdEIsSUFBakUsT0FBd0VzQixRQUFRLENBQUNwQixVQUFqRixNQUZKLENBVEosZUFjSTtBQUFLLFdBQUssRUFBRTtBQUNSdUIsUUFBQUEsT0FBTyxFQUFFLE1BREQ7QUFFUkYsUUFBQUEsTUFBTSxFQUFFLE1BRkE7QUFHUlcsUUFBQUEsS0FBSyxFQUFFLE9BSEM7QUFJUkosUUFBQUEsVUFBVSxFQUFFLFlBSko7QUFLUk8sUUFBQUEsVUFBVSxFQUFFLEtBTEo7QUFNUkMsUUFBQUEsYUFBYSxFQUFFLFFBTlA7QUFPUk4sUUFBQUEsS0FBSyxFQUFFLE1BUEM7QUFRUlEsUUFBQUEsY0FBYyxFQUFFO0FBUlI7QUFBWixvQkFVSTtBQUFLLFdBQUssRUFBRTtBQUFFLG1CQUFXLE1BQWI7QUFBcUJDLFFBQUFBLEdBQUcsRUFBRTtBQUExQjtBQUFaLE9BQ01DLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsRUFBdkMsSUFBNkNGLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsSUFBckYsZ0JBRUc7QUFBSyxXQUFLLEVBQUU7QUFDUmpCLFFBQUFBLEtBQUssRUFBRSxPQURDO0FBRVJDLFFBQUFBLFFBQVEsRUFBRSxRQUZGO0FBR1JGLFFBQUFBLFVBQVUsRUFBRSxrQkFISjtBQUlSbUIsUUFBQUEsU0FBUyxFQUFFLFFBSkg7QUFLUkMsUUFBQUEsTUFBTSxFQUFFLFNBTEE7QUFNUnZCLFFBQUFBLE1BQU0sRUFBRSxNQU5BO0FBT1JTLFFBQUFBLEtBQUssRUFBRSxPQVBDO0FBUVJFLFFBQUFBLEtBQUssRUFBRSxPQVJDO0FBU1JMLFFBQUFBLE9BQU8sRUFBRTtBQVREO0FBQVosb0JBV0ksaURBQUMscURBQUQ7QUFBUyxRQUFFLEVBQUM7QUFBWixvQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQTJCLFdBQUssRUFBRTtBQUFFTixRQUFBQSxNQUFNLEVBQUUsTUFBVjtBQUFrQndCLFFBQUFBLFVBQVUsRUFBRTtBQUE5QjtBQUFsQyxlQURKLENBWEosQ0FGSCxHQW9CSUwsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QixLQUF1QyxNQUF2QyxnQkFBaUQsaUhBQ2xEO0FBQUssV0FBSyxFQUFFO0FBQ1JqQixRQUFBQSxLQUFLLEVBQUUsT0FEQztBQUVSQyxRQUFBQSxRQUFRLEVBQUUsUUFGRjtBQUdSRixRQUFBQSxVQUFVLEVBQUUsa0JBSEo7QUFJUm1CLFFBQUFBLFNBQVMsRUFBRSxRQUpIO0FBS1JDLFFBQUFBLE1BQU0sRUFBRSxTQUxBO0FBTVJ2QixRQUFBQSxNQUFNLEVBQUUsTUFOQTtBQU9SUyxRQUFBQSxLQUFLLEVBQUUsT0FQQztBQVFSRSxRQUFBQSxLQUFLLEVBQUUsT0FSQztBQVNSTCxRQUFBQSxPQUFPLEVBQUU7QUFURCxPQUFaO0FBVUcsV0FBSyxFQUFFUCxRQUFRLENBQUM1QixFQVZuQjtBQVV1QixhQUFPLEVBQUU0QixRQUFRLENBQUMzQixPQVZ6QztBQVVrRCxVQUFJLEVBQUUyQixRQUFRLENBQUN6QixJQVZqRTtBQVV1RSxnQkFBVSxFQUFFeUIsUUFBUSxDQUFDMUIsS0FWNUY7QUFVbUcsZUFBUyxFQUFDLE1BVjdHO0FBVW9ILGdCQUFVLEVBQUUwQixRQUFRLENBQUNwQixVQVZ6STtBQVVxSixhQUFPLEVBQUVJO0FBVjlKLG9CQVdJO0FBQUssV0FBSyxFQUFFZ0IsUUFBUSxDQUFDNUIsRUFBckI7QUFBeUIsYUFBTyxFQUFFNEIsUUFBUSxDQUFDM0IsT0FBM0M7QUFBb0QsVUFBSSxFQUFFMkIsUUFBUSxDQUFDekIsSUFBbkU7QUFBeUUsZ0JBQVUsRUFBRXlCLFFBQVEsQ0FBQzFCLEtBQTlGO0FBQXFHLGVBQVMsRUFBQyxXQUEvRztBQUEySCxXQUFLLEVBQUU7QUFDOUgyQixRQUFBQSxNQUFNLEVBQUUsTUFEc0g7QUFFOUh3QixRQUFBQSxVQUFVLEVBQUU7QUFGa0gsT0FBbEk7QUFHRyxnQkFBVSxFQUFFekIsUUFBUSxDQUFDcEI7QUFIeEIsb0JBWEosQ0FEa0QsZUFtQmxEO0FBQUssV0FBSyxFQUFFO0FBQ1J5QixRQUFBQSxLQUFLLEVBQUUsT0FEQztBQUVSQyxRQUFBQSxRQUFRLEVBQUUsUUFGRjtBQUdSRixRQUFBQSxVQUFVLEVBQUUsa0JBSEo7QUFJUm1CLFFBQUFBLFNBQVMsRUFBRSxRQUpIO0FBS1JDLFFBQUFBLE1BQU0sRUFBRSxTQUxBO0FBTVJkLFFBQUFBLEtBQUssRUFBRSxPQU5DO0FBT1JFLFFBQUFBLEtBQUssRUFBRSxPQVBDO0FBUVJMLFFBQUFBLE9BQU8sRUFBRTtBQVJELE9BQVo7QUFTRyxlQUFTLEVBQUM7QUFUYixvQkFVSSxpREFBQyxxREFBRDtBQUFTLFFBQUUsK0JBQXdCUCxRQUFRLENBQUM1QixFQUFqQztBQUFYLG9CQUVJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBSyxFQUFFO0FBQzlCNkIsUUFBQUEsTUFBTSxFQUFFLE1BRHNCO0FBRTlCd0IsUUFBQUEsVUFBVSxFQUFFO0FBRmtCO0FBQWxDLHVCQUZKLENBVkosQ0FuQmtELENBQWpELGdCQXdDRDtBQUFLLFdBQUssRUFBRTtBQUNScEIsUUFBQUEsS0FBSyxFQUFFLE9BREM7QUFFUkMsUUFBQUEsUUFBUSxFQUFFLFFBRkY7QUFHUkYsUUFBQUEsVUFBVSxFQUFFLGtCQUhKO0FBSVJtQixRQUFBQSxTQUFTLEVBQUUsUUFKSDtBQUtSQyxRQUFBQSxNQUFNLEVBQUUsU0FMQTtBQU1SZCxRQUFBQSxLQUFLLEVBQUUsT0FOQztBQU9SRSxRQUFBQSxLQUFLLEVBQUUsT0FQQztBQVFSTCxRQUFBQSxPQUFPLEVBQUU7QUFSRCxPQUFaO0FBU0csZUFBUyxFQUFDO0FBVGIsb0JBVUksaURBQUMscURBQUQ7QUFBUyxRQUFFLCtCQUF3QlAsUUFBUSxDQUFDNUIsRUFBakM7QUFBWCxvQkFFSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQTJCLFdBQUs7QUFDNUI2QixRQUFBQSxNQUFNLEVBQUU7QUFEb0IsbUhBRXBCLE1BRm9CLGlIQUdoQixNQUhnQjtBQUFoQyx1QkFGSixDQVZKLENBN0RSLENBVkosQ0FkSixDQVhKLENBbkJKLENBRE07QUFBQSxHQUFMLENBeEJULGVBMEtJLGlEQUFDLG9GQUFEO0FBQ0ksUUFBSSxFQUFFcEcsZUFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBRUgsS0FMTDtBQU1JLFdBQU8sRUFBRUcsUUFOYjtBQU9JLGVBQVcsRUFBRUUsaUJBUGpCO0FBUUksUUFBSSxFQUFFRSxZQVJWO0FBU0ksaUJBQWEsRUFBRUUsYUFUbkI7QUFVSSxrQkFBYyxFQUFFSSxjQVZwQjtBQVdJLFdBQU8sRUFBRUY7QUFYYixJQTFLSixDQURKO0FBMExIOzs7Ozs7OztVQ2hVRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2RvbmF0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IERvbmF0ZU5GVE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwnO1xuaW1wb3J0ICcuL2RvbmF0aW9uLmNzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9uYXRpb24oKSB7XG4gICAgY29uc3QgW0NyZWF0ZW1vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0RXZlbnRlUmVjSUQsIHNldHNsZWN0RXZlbnRlUmVjSURdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RlZHR5cGUsIHNldHNlbGVjdGVkdHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW1NlbGVjdGVkVGl0bGUsIHNldFNlbGVjdGVkVGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtTZWxlY3RlZGVuZERhdGUsIHNldFNlbGVjdGVkZW5kRGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkV2FsbGV0LCBzZXRTZWxlY3RlZFdhbGxldF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiRGF0ZUNvdW50XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgfSwgMTAwMCk7XG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcblxuICAgICAgICAvL05lYXIgY3VycmVuY3lcbiAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBvcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gbmVhclByaWNlID0ganNvbilcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgIG5lYXJQcmljZSA9IG5lYXJQcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdmFyIG5lYXJQcmljZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgICAgICBiYXNlKCdldmVudHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgIC8vIFNlbGVjdGluZyB0aGUgZmlyc3QgMyByZWNvcmRzIGluIEdyaWQgdmlldzpcbiAgICAgICAgICAgICAgICBtYXhSZWNvcmRzOiAxMCxcbiAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJlbmREYXRlXCIsIGRpcmVjdGlvbjogXCJhc2NcIiB9XSxcbiAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICB9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnb2FsUHJpY2UydXNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZ29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpICogbmVhclByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SWQ6IHJlY29yZC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOiByZWNvcmQuZ2V0KFwidGl0bGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRlOiByZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWx1c2Q6IGZvcm1hdHRlci5mb3JtYXQoZ29hbFByaWNlMnVzZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsOiByZWNvcmQuZ2V0KFwiR29hbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ286IHJlY29yZC5nZXQoXCJsb2dvbGlua1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldHR5cGU6IHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xuICAgICAgICAgICAgICAgIC8vIFRvIGZldGNoIHRoZSBuZXh0IHBhZ2Ugb2YgcmVjb3JkcywgY2FsbCBgZmV0Y2hOZXh0UGFnZWAuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgcmVjb3JkcywgYHBhZ2VgIHdpbGwgZ2V0IGNhbGxlZCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gbW9yZSByZWNvcmRzLCBgZG9uZWAgd2lsbCBnZXQgY2FsbGVkLlxuICAgICAgICAgICAgICAgIC8vIGZldGNoTmV4dFBhZ2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwoZSkge1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudGlkXCIpKTtcbiAgICAgICAgc2V0c2xlY3RFdmVudGVSZWNJRChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSlcbiAgICAgICAgc2V0U2VsZWN0ZWRUaXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudHRpdGxlXCIpKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRlbmREYXRlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGVcIikpO1xuICAgICAgICBzZXRTZWxlY3RlZFdhbGxldChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ3YWxsZXR0eXBlXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0ZWR0eXBlKFwiTkZUXCIpO1xuXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHZhciBvdXRwdXQgPSBkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIjtcbiAgICAgICAgLy8gaWYgKFwiLVwiIGluIG91dHB1dCkge1xuICAgICAgICAvLyAgICAgb3V0cHV0ID0gXCJFeHBpcmVkIVwiXG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIChvdXRwdXQpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBEb25hdGlvbkJhcic+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPUFsbCc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rIGFjdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9VG9kYXknPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1UaGlzIE1vbnRoJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBNb250aFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uZXZlbnRJZH0gY2xhc3NOYW1lPSdyb3cnIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM5N3B4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMjhweCcsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE0cHggN3B4JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LXN0YXJ0J1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE4cHgnXG4gICAgICAgICAgICAgICAgICAgIH19PjxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyLjB2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnXG4gICAgICAgICAgICAgICAgICAgIH19IG5hbWU9XCJEYXRlQ291bnRcIiBkYXRlPXtsaXN0SXRlbS5EYXRlfT57TGVmdERhdGUobGlzdEl0ZW0uRGF0ZSl9PC9oND48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczOHB4IDE4cHgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzMzJScsIGhlaWdodDogJzIzOHB4JywgbWFyZ2luVG9wOiAnLTM3cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5sb2dvfSBzdHlsZT17e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzI1OXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93R2FwOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnc3RyZXRjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fT57bGlzdEl0ZW0uVGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBcIndoaXRlU3BhY2VcIjogXCJwcmUtd3JhcFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0+R29hbDogIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fT4ke2xpc3RJdGVtLkdvYWx1c2R9ICh7bGlzdEl0ZW0uR29hbH0ge2xpc3RJdGVtLndhbGxldHR5cGV9KTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJmbGV4XCIsIGdhcDogXCIxNHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkgPyAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0NHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL2RvbmF0aW9uXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzM0cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcInVzZXJcIiA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSByZWNpZD17bGlzdEl0ZW0uaWR9IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkXCIgd2FsbGV0dHlwZT17bGlzdEl0ZW0ud2FsbGV0dHlwZX0gb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVjaWQ9e2xpc3RJdGVtLmlkfSBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzM0cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHdhbGxldHR5cGU9e2xpc3RJdGVtLndhbGxldHR5cGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlIE5GVFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImNhcmRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7bGlzdEl0ZW0uaWR9XWB9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzM0cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyB0byBhdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImNhcmRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7bGlzdEl0ZW0uaWR9XWB9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNjhweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzM0cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyB0byBhdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPERvbmF0ZU5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Q3JlYXRlbW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBFdmVudElEPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBFdmVudGVSZWNJRD17c2VsZWN0RXZlbnRlUmVjSUR9XG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0ZWR0eXBlfVxuICAgICAgICAgICAgICAgIFNlbGVjdGVkVGl0bGU9e1NlbGVjdGVkVGl0bGV9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRXYWxsZXQ9e3NlbGVjdGVkV2FsbGV0fVxuICAgICAgICAgICAgICAgIGVuZGRhdGU9e1NlbGVjdGVkZW5kRGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYTgwYTg2ZmFlNjdhY2Q3YzRiNmNcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2TGluayIsIkRvbmF0ZU5GVE1vZGFsIiwiUm91dGVyIiwiRG9uYXRpb24iLCJDcmVhdGVtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJsaXN0Iiwic2V0TGlzdCIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3RFdmVudGVSZWNJRCIsInNldHNsZWN0RXZlbnRlUmVjSUQiLCJzZWxlY3RlZHR5cGUiLCJzZXRzZWxlY3RlZHR5cGUiLCJTZWxlY3RlZFRpdGxlIiwic2V0U2VsZWN0ZWRUaXRsZSIsIlNlbGVjdGVkZW5kRGF0ZSIsInNldFNlbGVjdGVkZW5kRGF0ZSIsInNlbGVjdGVkV2FsbGV0Iiwic2V0U2VsZWN0ZWRXYWxsZXQiLCJmZXRjaENvbnRyYWN0RGF0YSIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImRhdGUiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJMZWZ0RGF0ZSIsImVycm9yIiwic2V0SW50ZXJ2YWwiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZGF0YSIsIm1hcmtldFBhaXJzIiwicHJpY2UiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5Iiwic2VsZWN0IiwibWF4UmVjb3JkcyIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsInZpZXciLCJlYWNoUGFnZSIsInBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImFyciIsImZvckVhY2giLCJyZWNvcmQiLCJnb2FsUHJpY2UydXNkIiwiTnVtYmVyIiwiZ2V0IiwicHVzaCIsImlkIiwiZXZlbnRJZCIsIlRpdGxlIiwiRGF0ZSIsIkdvYWx1c2QiLCJmb3JtYXQiLCJHb2FsIiwibG9nbyIsIndhbGxldHR5cGUiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZG9uZSIsImFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwiLCJlIiwidGFyZ2V0IiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJvdXRwdXQiLCJ0b1N0cmluZyIsImxpc3RJdGVtIiwiaGVpZ2h0IiwibWFyZ2luIiwiZGlzcGxheSIsImJhY2tncm91bmQiLCJjb2xvciIsIm92ZXJmbG93IiwicGFkZGluZyIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJ3aWR0aCIsImZvbnRTaXplIiwiZmxvYXQiLCJtYXJnaW5Ub3AiLCJtYXhIZWlnaHQiLCJtYXJnaW5MZWZ0IiwiZmxleERpcmVjdGlvbiIsInJvd0dhcCIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRleHRBbGlnbiIsImN1cnNvciIsInBhZGRpbmdUb3AiXSwic291cmNlUm9vdCI6IiJ9