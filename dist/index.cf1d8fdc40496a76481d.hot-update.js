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
    setSelectedWallet(e.target.getAttribute("wallet"));
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
      wallet: listItem.wallet,
      eventid: listItem.eventId,
      date: listItem.Date,
      eventtitle: listItem.Title,
      className: "card",
      wallettype: listItem.wallettype,
      onClick: activateCreateNFTModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      recid: listItem.id,
      wallet: listItem.wallet,
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
/******/ 	__webpack_require__.h = function() { return "fe28dd99e375e1ca891e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmNmMWQ4ZmRjNDA0OTZhNzY0ODFkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNNLFFBQVQsR0FBb0I7QUFDL0Isa0JBQXdDTCwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9NLGVBQVA7QUFBQSxNQUF3QkMsWUFBeEI7O0FBRUEsbUJBQXdCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9RLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUFnQ1QsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPVSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFpRFgsK0NBQVEsQ0FBQyxFQUFELENBQXpEO0FBQUE7QUFBQSxNQUFPWSxpQkFBUDtBQUFBLE1BQTBCQyxtQkFBMUI7O0FBQ0EsbUJBQXdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9jLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0Esb0JBQTBDZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU9nQixhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxvQkFBOENqQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9rQixlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxvQkFBNENuQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEQ7QUFBQTtBQUFBLE1BQU9vQixjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFHQXBCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNacUIsSUFBQUEsaUJBQWlCO0FBQ3BCLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsaUJBQVQsR0FBNkI7QUFDekIsUUFBSTtBQUNBLFVBQUlDLFFBQVEsR0FBR0MsUUFBUSxD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LGlCQUFhLEVBQUVFLGFBVG5CO0FBVUksa0JBQWMsRUFBRUksY0FWcEI7QUFXSSxXQUFPLEVBQUVGO0FBWGIsSUExS0osQ0FESjtBQTBMSDs7Ozs7Ozs7VUNoVUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9kb25hdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcbmltcG9ydCAnLi9kb25hdGlvbi5jc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbmF0aW9uKCkge1xuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdEV2ZW50ZVJlY0lELCBzZXRzbGVjdEV2ZW50ZVJlY0lEXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0ZWR0eXBlLCBzZXRzZWxlY3RlZHR5cGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtTZWxlY3RlZFRpdGxlLCBzZXRTZWxlY3RlZFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbU2VsZWN0ZWRlbmREYXRlLCBzZXRTZWxlY3RlZGVuZERhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RlZFdhbGxldCwgc2V0U2VsZWN0ZWRXYWxsZXRdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcIkRhdGVDb3VudFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgIH0sIDEwMDApO1xuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XG5cbiAgICAgICAgLy9OZWFyIGN1cnJlbmN5XG4gICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IG5lYXJQcmljZSA9IGpzb24pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG4gICAgICAgICAgICBuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHZhciBuZWFyUHJpY2UgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICAgICAgYmFzZSgnZXZlbnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IDMgcmVjb3JkcyBpbiBHcmlkIHZpZXc6XG4gICAgICAgICAgICAgICAgbWF4UmVjb3JkczogMTAsXG4gICAgICAgICAgICAgICAgc29ydDogW3sgZmllbGQ6IFwiZW5kRGF0ZVwiLCBkaXJlY3Rpb246IFwiYXNjXCIgfV0sXG4gICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgfSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ29hbFByaWNlMnVzZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGdvYWxQcmljZTJ1c2QgPSBOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSAqIG5lYXJQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudElkOiByZWNvcmQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZTogcmVjb3JkLmdldChcInRpdGxlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZTogcmVjb3JkLmdldChcImVuZERhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBHb2FsdXNkOiBmb3JtYXR0ZXIuZm9ybWF0KGdvYWxQcmljZTJ1c2QpLFxuICAgICAgICAgICAgICAgICAgICAgICAgR29hbDogcmVjb3JkLmdldChcIkdvYWxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiByZWNvcmQuZ2V0KFwibG9nb2xpbmtcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXR0eXBlOiByZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICAvLyBUbyBmZXRjaCB0aGUgbmV4dCBwYWdlIG9mIHJlY29yZHMsIGNhbGwgYGZldGNoTmV4dFBhZ2VgLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIHJlY29yZHMsIGBwYWdlYCB3aWxsIGdldCBjYWxsZWQgYWdhaW4uXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIG1vcmUgcmVjb3JkcywgYGRvbmVgIHdpbGwgZ2V0IGNhbGxlZC5cbiAgICAgICAgICAgICAgICAvLyBmZXRjaE5leHRQYWdlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnRpZFwiKSk7XG4gICAgICAgIHNldHNsZWN0RXZlbnRlUmVjSUQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpXG4gICAgICAgIHNldFNlbGVjdGVkVGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnR0aXRsZVwiKSk7XG4gICAgICAgIHNldFNlbGVjdGVkZW5kRGF0ZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRXYWxsZXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwid2FsbGV0XCIpKTtcbiAgICAgICAgc2V0c2VsZWN0ZWR0eXBlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcIndhbGxldHR5cGVcIikpO1xuXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHZhciBvdXRwdXQgPSBkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIjtcbiAgICAgICAgLy8gaWYgKFwiLVwiIGluIG91dHB1dCkge1xuICAgICAgICAvLyAgICAgb3V0cHV0ID0gXCJFeHBpcmVkIVwiXG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIChvdXRwdXQpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBEb25hdGlvbkJhcic+XG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89Jz9xPUFsbCc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rIGFjdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz0nP3E9VG9kYXknPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayc+XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPSc/cT1UaGlzIE1vbnRoJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBNb250aFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uZXZlbnRJZH0gY2xhc3NOYW1lPSdyb3cnIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzM5N3B4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMjhweCcsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE0cHggN3B4JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LXN0YXJ0J1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE4cHgnXG4gICAgICAgICAgICAgICAgICAgIH19PjxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyLjB2dycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ2xlZnQnXG4gICAgICAgICAgICAgICAgICAgIH19IG5hbWU9XCJEYXRlQ291bnRcIiBkYXRlPXtsaXN0SXRlbS5EYXRlfT57TGVmdERhdGUobGlzdEl0ZW0uRGF0ZSl9PC9oND48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczOHB4IDE4cHgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzMzJScsIGhlaWdodDogJzIzOHB4JywgbWFyZ2luVG9wOiAnLTM3cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5sb2dvfSBzdHlsZT17e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzI1OXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93R2FwOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnc3RyZXRjaCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fT57bGlzdEl0ZW0uVGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBcIndoaXRlU3BhY2VcIjogXCJwcmUtd3JhcFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0+R29hbDogIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fT4ke2xpc3RJdGVtLkdvYWx1c2R9ICh7bGlzdEl0ZW0uR29hbH0ge2xpc3RJdGVtLndhbGxldHR5cGV9KTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJmbGV4XCIsIGdhcDogXCIxNHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkgPyAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0NHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL2RvbmF0aW9uXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzM0cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcInVzZXJcIiA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSByZWNpZD17bGlzdEl0ZW0uaWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBkYXRlPXtsaXN0SXRlbS5EYXRlfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZFwiIHdhbGxldHR5cGU9e2xpc3RJdGVtLndhbGxldHR5cGV9IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlY2lkPXtsaXN0SXRlbS5pZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGRhdGU9e2xpc3RJdGVtLkRhdGV9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gd2FsbGV0dHlwZT17bGlzdEl0ZW0ud2FsbGV0dHlwZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGUgTkZUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiY2FyZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvZG9uYXRpb24vYXVjdGlvbj9bJHtsaXN0SXRlbS5pZH1dYH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIGF1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiY2FyZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvZG9uYXRpb24vYXVjdGlvbj9bJHtsaXN0SXRlbS5pZH1dYH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc2OHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMzRweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIGF1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtDcmVhdGVtb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIEV2ZW50SUQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIEV2ZW50ZVJlY0lEPXtzZWxlY3RFdmVudGVSZWNJRH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3RlZHR5cGV9XG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUaXRsZT17U2VsZWN0ZWRUaXRsZX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZFdhbGxldD17c2VsZWN0ZWRXYWxsZXR9XG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17U2VsZWN0ZWRlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJmZTI4ZGQ5OWUzNzVlMWNhODkxZVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZMaW5rIiwiRG9uYXRlTkZUTW9kYWwiLCJSb3V0ZXIiLCJEb25hdGlvbiIsIkNyZWF0ZW1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsImxpc3QiLCJzZXRMaXN0Iiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdEV2ZW50ZVJlY0lEIiwic2V0c2xlY3RFdmVudGVSZWNJRCIsInNlbGVjdGVkdHlwZSIsInNldHNlbGVjdGVkdHlwZSIsIlNlbGVjdGVkVGl0bGUiLCJzZXRTZWxlY3RlZFRpdGxlIiwiU2VsZWN0ZWRlbmREYXRlIiwic2V0U2VsZWN0ZWRlbmREYXRlIiwic2VsZWN0ZWRXYWxsZXQiLCJzZXRTZWxlY3RlZFdhbGxldCIsImZldGNoQ29udHJhY3REYXRhIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwiZGF0ZSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkxlZnREYXRlIiwiZXJyb3IiLCJzZXRJbnRlcnZhbCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJuZWFyUHJpY2UiLCJuZWFyQ3VycmVuY3lVcmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJzZWxlY3QiLCJtYXhSZWNvcmRzIiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwidmlldyIsImVhY2hQYWdlIiwicGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiYXJyIiwiZm9yRWFjaCIsInJlY29yZCIsImdvYWxQcmljZTJ1c2QiLCJOdW1iZXIiLCJnZXQiLCJwdXNoIiwiaWQiLCJldmVudElkIiwiVGl0bGUiLCJEYXRlIiwiR29hbHVzZCIsImZvcm1hdCIsIkdvYWwiLCJsb2dvIiwid2FsbGV0dHlwZSIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkb25lIiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsImUiLCJ0YXJnZXQiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJtIiwicyIsIm91dHB1dCIsInRvU3RyaW5nIiwibGlzdEl0ZW0iLCJoZWlnaHQiLCJtYXJnaW4iLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImNvbG9yIiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsIndpZHRoIiwiZm9udFNpemUiLCJmbG9hdCIsIm1hcmdpblRvcCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJmbGV4RGlyZWN0aW9uIiwicm93R2FwIiwianVzdGlmeUNvbnRlbnQiLCJnYXAiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGV4dEFsaWduIiwiY3Vyc29yIiwicGFkZGluZ1RvcCIsIndhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=