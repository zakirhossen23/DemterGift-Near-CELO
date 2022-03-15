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

  function activateCreateCryptopunkModal(e) {
    setselectid(e.target.getAttribute("eventid"));
    setslectEventeRecID(e.target.getAttribute("recid"));
    setSelectedTitle(e.target.getAttribute("eventtitle"));
    setSelectedendDate(e.target.getAttribute("date"));
    setselectedtype("Cryptopunk");
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

  function EventButtons() {
    if (window.localStorage.getItem("Type") == "" || window.localStorage.getItem("Type") == null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null);
    }

    if (window.localStorage.getItem("Type") == "user") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null);
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
/******/ 	__webpack_require__.h = function() { return "bebac83316ccb8cd779b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjA4NjA3MDMzMzg2M2Y0YWQ3ZTZhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNNLFFBQVQsR0FBb0I7QUFDL0Isa0JBQXdDTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9NLGVBQVA7QUFBQSxNQUF3QkMsWUFBeEI7O0FBRUEsbUJBQXdCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9RLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFnQ1QsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPVSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFpRFgsK0NBQVEsQ0FBQyxFQUFELENBQXpEO0FBQUE7QUFBQSxNQUFPWSxpQkFBUDtBQUFBLE1BQTBCQyxtQkFBMUI7O0FBQ0EsbUJBQXdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9jLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0Esb0JBQTBDZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU9nQixhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxvQkFBOENqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9rQixlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxvQkFBNENuQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQTtBQUFBLE1BQU9vQixjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFHQXBCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNacUIsSUFBQUEsaUJBQWlCO0FBQ3BCLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsaUJBQVQsR0FBNkI7QUFDekIsUUFBSTtBQUNBLFVBQUlDLFFBQVEsR0FBR0MsUUFBUSxD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QSxRQUFRLEVBQUUsUUFGRjtBQUdSRixRQUFBQSxVQUFVLEVBQUUsa0JBSEo7QUFJUmdCLFFBQUFBLFNBQVMsRUFBRSxRQUpIO0FBS1JDLFFBQUFBLE1BQU0sRUFBRSxTQUxBO0FBTVJYLFFBQUFBLEtBQUssRUFBRSxPQU5DO0FBT1JFLFFBQUFBLEtBQUssRUFBRSxPQVBDO0FBUVJMLFFBQUFBLE9BQU8sRUFBRTtBQVJELE9BQVo7QUFTRyxlQUFTLEVBQUM7QUFUYixvQkFVSSxpREFBQyxxREFBRDtBQUFTLFFBQUUsK0JBQXdCUCxRQUFRLENBQUNqQyxFQUFqQztBQUFYLG9CQUVJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBSztBQUM1QmtDLFFBQUFBLE1BQU0sRUFBRTtBQURvQixtSEFFcEIsTUFGb0IsaUhBR2hCLE1BSGdCO0FBQWhDLHVCQUZKLENBVkosQ0E3RFIsQ0FWSixDQWRKLENBWEosQ0FuQkosQ0FETTtBQUFBLEdBQUwsQ0F4QlQsZUEwS0ksaURBQUMsb0ZBQUQ7QUFDSSxRQUFJLEVBQUV6RyxlQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFFSCxLQUxMO0FBTUksV0FBTyxFQUFFRyxRQU5iO0FBT0ksZUFBVyxFQUFFRSxpQkFQakI7QUFRSSxRQUFJLEVBQUVFLFlBUlY7QUFTSSxpQkFBYSxFQUFFRSxhQVRuQjtBQVVJLGtCQUFjLEVBQUVJLGNBVnBCO0FBV0ksV0FBTyxFQUFFRjtBQVhiLElBMUtKLENBREo7QUEwTEg7Ozs7Ozs7O1VDL1ZELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvZG9uYXRpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgRG9uYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbCc7XG5pbXBvcnQgJy4vZG9uYXRpb24uY3NzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGlvbigpIHtcbiAgICBjb25zdCBbQ3JlYXRlbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RFdmVudGVSZWNJRCwgc2V0c2xlY3RFdmVudGVSZWNJRF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkdHlwZSwgc2V0c2VsZWN0ZWR0eXBlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbU2VsZWN0ZWRUaXRsZSwgc2V0U2VsZWN0ZWRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW1NlbGVjdGVkZW5kRGF0ZSwgc2V0U2VsZWN0ZWRlbmREYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRXYWxsZXQsIHNldFNlbGVjdGVkV2FsbGV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJEYXRlQ291bnRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICB9LCAxMDAwKTtcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xuXG4gICAgICAgIC8vTmVhciBjdXJyZW5jeVxuICAgICAgICB2YXIgbmVhclByaWNlID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBuZWFyQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1uZWFyLXByb3RvY29sJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBuZWFyUHJpY2UgPSBqc29uKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgbmVhclByaWNlID0gbmVhclByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICB2YXIgbmVhclByaWNlID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgICAgIGJhc2UoJ2V2ZW50cycpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgLy8gU2VsZWN0aW5nIHRoZSBmaXJzdCAzIHJlY29yZHMgaW4gR3JpZCB2aWV3OlxuICAgICAgICAgICAgICAgIG1heFJlY29yZHM6IDEwLFxuICAgICAgICAgICAgICAgIHNvcnQ6IFt7IGZpZWxkOiBcImVuZERhdGVcIiwgZGlyZWN0aW9uOiBcImFzY1wiIH1dLFxuICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICBnb2FsUHJpY2UydXNkID0gTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBuZWFyUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRJZDogcmVjb3JkLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGU6IHJlY29yZC5nZXQoXCJ0aXRsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGU6IHJlY29yZC5nZXQoXCJlbmREYXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgR29hbHVzZDogZm9ybWF0dGVyLmZvcm1hdChnb2FsUHJpY2UydXNkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvYWw6IHJlY29yZC5nZXQoXCJHb2FsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogcmVjb3JkLmdldChcImxvZ29saW5rXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0dHlwZTogcmVjb3JkLmdldChcIndhbGxldHR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XG4gICAgICAgICAgICAgICAgLy8gVG8gZmV0Y2ggdGhlIG5leHQgcGFnZSBvZiByZWNvcmRzLCBjYWxsIGBmZXRjaE5leHRQYWdlYC5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbW9yZSByZWNvcmRzLCBgcGFnZWAgd2lsbCBnZXQgY2FsbGVkIGFnYWluLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBtb3JlIHJlY29yZHMsIGBkb25lYCB3aWxsIGdldCBjYWxsZWQuXG4gICAgICAgICAgICAgICAgLy8gZmV0Y2hOZXh0UGFnZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVORlRNb2RhbChlKSB7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50aWRcIikpO1xuICAgICAgICBzZXRzbGVjdEV2ZW50ZVJlY0lEKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKVxuICAgICAgICBzZXRTZWxlY3RlZFRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImV2ZW50dGl0bGVcIikpO1xuICAgICAgICBzZXRTZWxlY3RlZGVuZERhdGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKSk7XG4gICAgICAgIHNldFNlbGVjdGVkV2FsbGV0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcIndhbGxldHR5cGVcIikpO1xuICAgICAgICBzZXRzZWxlY3RlZHR5cGUoXCJORlRcIik7XG5cbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnRpZFwiKSk7XG4gICAgICAgIHNldHNsZWN0RXZlbnRlUmVjSUQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpXG4gICAgICAgIHNldFNlbGVjdGVkVGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnR0aXRsZVwiKSk7XG4gICAgICAgIHNldFNlbGVjdGVkZW5kRGF0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0ZWR0eXBlKFwiQ3J5cHRvcHVua1wiKTtcblxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICB2YXIgb3V0cHV0ID0gZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCI7XG4gICAgICAgIC8vIGlmIChcIi1cIiBpbiBvdXRwdXQpIHtcbiAgICAgICAgLy8gICAgIG91dHB1dCA9IFwiRXhwaXJlZCFcIlxuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiAob3V0cHV0KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIEV2ZW50QnV0dG9ucygpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cblxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cblxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICg8PlxuXG5cbiAgICAgICAgPC8+KVxuXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IERvbmF0aW9uQmFyJz5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9QWxsJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsgYWN0aXZlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFsbFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1Ub2RheSc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRvZGF5XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPVRoaXMgTW9udGgnPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIE1vbnRoXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5ldmVudElkfSBjbGFzc05hbWU9J3Jvdycgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzk3cHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcyOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTRweCA3cHgnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2ZsZXgtc3RhcnQnXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMThweCdcbiAgICAgICAgICAgICAgICAgICAgfX0+PGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIuMHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAnbGVmdCdcbiAgICAgICAgICAgICAgICAgICAgfX0gbmFtZT1cIkRhdGVDb3VudFwiIGRhdGU9e2xpc3RJdGVtLkRhdGV9PntMZWZ0RGF0ZShsaXN0SXRlbS5EYXRlKX08L2g0PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzM4cHggMThweCdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMzMlJywgaGVpZ2h0OiAnMjM4cHgnLCBtYXJnaW5Ub3A6ICctMzdweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmxvZ299IHN0eWxlPXt7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMjU5cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dHYXA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdzdHJldGNoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19PntsaXN0SXRlbS5UaXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIFwid2hpdGVTcGFjZVwiOiBcInByZS13cmFwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fT5Hb2FsOiAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19PiR7bGlzdEl0ZW0uR29hbHVzZH0gKHtsaXN0SXRlbS5Hb2FsfSB7bGlzdEl0ZW0ud2FsbGV0dHlwZX0pPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiwgZ2FwOiBcIjE0cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSA/IChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svZG9uYXRpb25dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMzRweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwidXNlclwiID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHJlY2lkPXtsaXN0SXRlbS5pZH0gZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZGF0ZT17bGlzdEl0ZW0uRGF0ZX0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IGNsYXNzTmFtZT1cImNhcmRcIiB3YWxsZXR0eXBlPXtsaXN0SXRlbS53YWxsZXR0eXBlfSBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWNpZD17bGlzdEl0ZW0uaWR9IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gd2FsbGV0dHlwZT17bGlzdEl0ZW0ud2FsbGV0dHlwZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGUgTkZUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiY2FyZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvZG9uYXRpb24vYXVjdGlvbj9bJHtsaXN0SXRlbS5pZH1dYH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIGF1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiY2FyZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvZG9uYXRpb24vYXVjdGlvbj9bJHtsaXN0SXRlbS5pZH1dYH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc2OHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIGF1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtDcmVhdGVtb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIEV2ZW50SUQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIEV2ZW50ZVJlY0lEPXtzZWxlY3RFdmVudGVSZWNJRH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3RlZHR5cGV9XG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUaXRsZT17U2VsZWN0ZWRUaXRsZX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFdhbGxldD17c2VsZWN0ZWRXYWxsZXR9XG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17U2VsZWN0ZWRlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJiZWJhYzgzMzE2Y2NiOGNkNzc5YlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZMaW5rIiwiRG9uYXRlTkZUTW9kYWwiLCJSb3V0ZXIiLCJEb25hdGlvbiIsIkNyZWF0ZW1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsImxpc3QiLCJzZXRMaXN0Iiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdEV2ZW50ZVJlY0lEIiwic2V0c2xlY3RFdmVudGVSZWNJRCIsInNlbGVjdGVkdHlwZSIsInNldHNlbGVjdGVkdHlwZSIsIlNlbGVjdGVkVGl0bGUiLCJzZXRTZWxlY3RlZFRpdGxlIiwiU2VsZWN0ZWRlbmREYXRlIiwic2V0U2VsZWN0ZWRlbmREYXRlIiwic2VsZWN0ZWRXYWxsZXQiLCJzZXRTZWxlY3RlZFdhbGxldCIsImZldGNoQ29udHJhY3REYXRhIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwiZGF0ZSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkxlZnREYXRlIiwiZXJyb3IiLCJzZXRJbnRlcnZhbCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJuZWFyUHJpY2UiLCJuZWFyQ3VycmVuY3lVcmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJzZWxlY3QiLCJtYXhSZWNvcmRzIiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwidmlldyIsImVhY2hQYWdlIiwicGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiYXJyIiwiZm9yRWFjaCIsInJlY29yZCIsImdvYWxQcmljZTJ1c2QiLCJOdW1iZXIiLCJnZXQiLCJwdXNoIiwiaWQiLCJldmVudElkIiwiVGl0bGUiLCJEYXRlIiwiR29hbHVzZCIsImZvcm1hdCIsIkdvYWwiLCJsb2dvIiwid2FsbGV0dHlwZSIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkb25lIiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsImUiLCJ0YXJnZXQiLCJhY3RpdmF0ZUNyZWF0ZUNyeXB0b3B1bmtNb2RhbCIsImRhdGV0ZXh0IiwiYyIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwib3V0cHV0IiwidG9TdHJpbmciLCJFdmVudEJ1dHRvbnMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGlzdEl0ZW0iLCJoZWlnaHQiLCJtYXJnaW4iLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImNvbG9yIiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsIndpZHRoIiwiZm9udFNpemUiLCJmbG9hdCIsIm1hcmdpblRvcCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJmbGV4RGlyZWN0aW9uIiwicm93R2FwIiwianVzdGlmeUNvbnRlbnQiLCJnYXAiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJwYWRkaW5nVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==