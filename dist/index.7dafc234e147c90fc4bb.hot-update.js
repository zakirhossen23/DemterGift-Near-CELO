"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/pages/donation/auction/index.jsx":
/*!**********************************************!*\
  !*** ./src/pages/donation/auction/index.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Auction; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var _components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/components/modals/BidNFTModal */ "./src/components/components/modals/BidNFTModal.jsx");
/* harmony import */ var _components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/components/modals/ViewBidNFTModal */ "./src/components/components/modals/ViewBidNFTModal.jsx");
/* harmony import */ var _components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/components/modals/DonateNFTModal */ "./src/components/components/modals/DonateNFTModal.jsx");
/* harmony import */ var _modals_lottery_AddLotteryModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/modals/lottery/AddLotteryModal */ "./src/modals/lottery/AddLotteryModal.jsx");
/* harmony import */ var _modals_lottery_BuyLotteryModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/modals/lottery/BuyLotteryModal */ "./src/modals/lottery/BuyLotteryModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");

















function Auction() {
  var regex = /\[(.*)\]/g;
  var str = window.location.search;
  var m;
  var id = "";

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    id = m[1];
  }

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_15__["default"])('ERC721'),
      contract = _useContract.contract,
      contractCelo = _useContract.contractCelo,
      signerAddress = _useContract.signerAddress;

  console.log("id => ", id);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      CreatemodalShow = _useState2[0],
      setDonateModalShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      AddLotterymodalShow = _useState4[0],
      setAddLotteryModalShow = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      BuyLotterymodalShow = _useState6[0],
      setBuyLotteryModalShow = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(id),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      eventId = _useState8[0],
      setEventId = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      RealEventId = _useState10[0],
      setRealEventId = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      list = _useState12[0],
      setList = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      title = _useState14[0],
      setTitle = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      goalusd = _useState16[0],
      setgoalusd = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      goal = _useState18[0],
      setgoal = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState20 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
      dateleft = _useState20[0],
      setdateleft = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState22 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState21, 2),
      date = _useState22[0],
      setdate = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState24 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState23, 2),
      dateleftBid = _useState24[0],
      setdateleftBid = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState26 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState25, 2),
      logo = _useState26[0],
      setlogo = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState28 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState27, 2),
      selectid = _useState28[0],
      setselectid = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState30 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState29, 2),
      selectrecid = _useState30[0],
      setselectrecid = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState32 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState31, 2),
      selecttitle = _useState32[0],
      setselecttitle = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState34 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState33, 2),
      selecttype = _useState34[0],
      setselecttype = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      _useState36 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState35, 2),
      Eventwallet = _useState36[0],
      setEventwallet = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState38 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState37, 2),
      selectwallet = _useState38[0],
      setselectwallet = _useState38[1];

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState40 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState39, 2),
      walletType = _useState40[0],
      setWalletType = _useState40[1];

  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState42 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState41, 2),
      selectbid = _useState42[0],
      setselectbid = _useState42[1];

  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState44 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState43, 2),
      selectprice = _useState44[0],
      setselectprice = _useState44[1];

  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState46 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState45, 2),
      LotteryNumber = _useState46[0],
      setLotteryNumber = _useState46[1];

  var boolTrue = true;

  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState48 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState47, 2),
      modalShow = _useState48[0],
      setModalShow = _useState48[1];

  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState50 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState49, 2),
      ViewmodalShow = _useState50[0],
      setViewModalShow = _useState50[1];

  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState52 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState51, 2),
      currentWallet = _useState52[0],
      setCurrentWallet = _useState52[1];

  var currentWalletBought = [];
  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
  }

  function LeftDateBid(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s";
  }

  function AuctionfetchContractData() {
    return _AuctionfetchContractData.apply(this, arguments);
  }

  function _AuctionfetchContractData() {
    _AuctionfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var _context, nearPrice, nearCurrencyUrl, currency_options, Airtable, base;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(id && window.location.pathname == "/donation/auction")) {
                _context5.next = 19;
                break;
              }

              console.log("started chekcing");
              nearPrice = 0; //NEAR currency

              _context5.prev = 3;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context5.next = 8;
              return fetch(nearCurrencyUrl, currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 8:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context5.next = 15;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](3);
              console.log(_context5.t0);
              nearPrice = 0;

            case 15:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              _context5.next = 19;
              return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context = base('events')).call(_context, id, /*#__PURE__*/function () {
                var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(err, record) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!err) {
                            _context4.next = 3;
                            break;
                          }

                          console.error(err);
                          return _context4.abrupt("return");

                        case 3:
                          setEventId(record.getId());
                          setRealEventId(record.get('id'));
                          setTitle(record.get("title"));
                          setWalletType(record.get("wallettype"));
                          setselectwallet(record.get('wallet'));
                          setEventwallet(record.get('wallet'));
                          setgoalusd(formatter.format(Number(Number(record.get("Goal")) * nearPrice)));
                          setgoal(Number(record.get("Goal")));
                          setdateleft(LeftDate(record.get("endDate")));
                          setdate(record.get("endDate"));
                          setdateleftBid(LeftDateBid(record.get("endDate")));
                          setlogo(record.get("logolink"));
                          console.log('Retrieved', record.getId());
                          _context4.next = 18;
                          return base('nfts').select({
                            filterByFormula: "({eventid} = '".concat(Number(record.get('id')), "')"),
                            // Selecting the first 10 records in Grid view:
                            maxRecords: 10,
                            sort: [{
                              field: "price",
                              direction: "desc"
                            }],
                            view: "Grid view"
                          }).eachPage(function page(records, fetchNextPage) {
                            // This function (`page`) will get called for each page of records.
                            var arr = [];
                            records.forEach( /*#__PURE__*/function () {
                              var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(record) {
                                var currentAcc, isbought, _context2, goalPrice2usd;

                                return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context3) {
                                  while (1) {
                                    switch (_context3.prev = _context3.next) {
                                      case 0:
                                        currentAcc = walletAccount._authData.accountId;
                                        setCurrentWallet(walletAccount._authData.accountId);
                                        isbought = false;

                                        try {
                                          if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = record.get("isbought")).call(_context2, currentAcc)) {
                                            isbought = true;
                                          }
                                        } catch (_unused) {}

                                        goalPrice2usd = 0;
                                        goalPrice2usd = Number(Number(record.get("price")) * nearPrice);
                                        arr.push({
                                          recId: record.id,
                                          Id: record.get("id"),
                                          name: record.get("name"),
                                          description: record.get("description"),
                                          Bidprice: goalPrice2usd,
                                          price: Number(record.get("price")),
                                          type: record.get("type"),
                                          image: record.get("image"),
                                          lottery: record.get("lottery"),
                                          isbought: isbought,
                                          ticketnumber: record.get("ticketnumber"),
                                          ownerWallet: record.get("ownerWallet")
                                        });

                                      case 7:
                                      case "end":
                                        return _context3.stop();
                                    }
                                  }
                                }, _callee);
                              }));

                              return function (_x8) {
                                return _ref2.apply(this, arguments);
                              };
                            }());
                            setList(arr);
                            if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none";
                          }, function done(err) {
                            if (err) {
                              console.error(err);
                              return;
                            }
                          });

                        case 18:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x6, _x7) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 19:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee3, null, [[3, 11]]);
    }));
    return _AuctionfetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    AuctionfetchContractData();
  }, []);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_9__["default"].push("/login?[/donation]");
    }

    try {
      var allDates = document.getElementsByName("dateleft");

      for (var i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }

      var allDates = document.getElementsByName("date");

      for (var _i = 0; _i < allDates.length; _i++) {
        var date = allDates[_i].getAttribute("date");

        allDates[_i].innerHTML = LeftDateBid(date);
      }
    } catch (error) {}
  }

  function activateViewBidModal(e) {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_9__["default"].push("/login?[/donation]");
    }

    setselectrecid(e.target.getAttribute("recid"));
    setselectid(e.target.getAttribute("tokenid"));
    setselecttitle(e.target.getAttribute("title"));
    setViewModalShow(true);
  }

  function activateBidNFTModal(e) {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_9__["default"].push("/login?[/donation]");
    }

    setselectrecid(e.target.getAttribute("recid"));
    setselectid(e.target.getAttribute("tokenid"));
    setselectbid(e.target.getAttribute("highestbid"));
    console.log(selectbid);
    setselecttype("NFT");
    setModalShow(true);
  }

  function addtoLottery(e) {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_9__["default"].push("/login?[/donation]");
    }

    setselectid(e.target.getAttribute("tokenid"));
    setselectrecid(e.target.getAttribute("recid"));
    setAddLotteryModalShow(true);
  }

  function BuyLottery(_x) {
    return _BuyLottery.apply(this, arguments);
  }

  function _BuyLottery() {
    _BuyLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(e) {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setselectid(e.target.getAttribute("tokenid"));
              setselectrecid(e.target.getAttribute("recid"));
              setselectprice(e.target.getAttribute("price"));
              setselectwallet(e.target.getAttribute("wallet"));
              setLotteryNumber(e.target.getAttribute("ticketnumber"));
              setBuyLotteryModalShow(true);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee4);
    }));
    return _BuyLottery.apply(this, arguments);
  }

  function BuyingLottery(_x2, _x3) {
    return _BuyingLottery.apply(this, arguments);
  }

  function _BuyingLottery() {
    _BuyingLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(Amount, ToAddress) {
      var buttonProps, config, near, account, amountInYocto;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              buttonProps = document.getElementsByClassName("btn btn-primary")[0];

              if (!(window.walletAccount.isSignedIn() == false)) {
                _context7.next = 8;
                break;
              }

              buttonProps.innerText = "Connect to NEAR wallet";
              _context7.next = 5;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.warn("Not connected with NEAR wallet! Connecting...");

            case 5:
              _context7.next = 7;
              return window.walletAccount.requestSignIn(window.nearConfig.contractName, 'Demeter');

            case 7:
              return _context7.abrupt("return");

            case 8:
              config = {
                networkId: "testnet",
                keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_8__.keyStores.BrowserLocalStorageKeyStore(),
                nodeUrl: "https://rpc.testnet.near.org",
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org"
              }; // sends NEAR tokens

              _context7.next = 11;
              return near_api_js__WEBPACK_IMPORTED_MODULE_8__.connect(config);

            case 11:
              near = _context7.sent;
              _context7.next = 14;
              return near.account(walletAccount.getAccountId());

            case 14:
              account = _context7.sent;
              amountInYocto = (Number(Amount) * 1000000000000000000000000).toLocaleString('fullwide', {
                useGrouping: false
              });
              _context7.next = 18;
              return account.sendMoney(ToAddress, // receiver account
              amountInYocto // amount in yoctoNEAR
              ).catch(function (error) {
                console.error("error:", error);
                console.log(error);
                return;
              });

            case 18:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee5);
    }));
    return _BuyingLottery.apply(this, arguments);
  }

  function CreatingOnAirtable(_x4, _x5) {
    return _CreatingOnAirtable.apply(this, arguments);
  }

  function _CreatingOnAirtable() {
    _CreatingOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6(nftid, nftrecid) {
      var _context8;

      var Airtable, base, users, participated;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context9.next = 5;
              return base('lotteryBought').create([{
                "fields": {
                  "nftid": Number(nftid),
                  "user": currentWallet,
                  "userWallet": signerAddress
                }
              }]);

            case 5:
              users = '';
              participated = 0;
              _context9.next = 9;
              return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context8 = base('nfts')).call(_context8, nftrecid, function (err, record) {
                users = record.get('isbought');
                participated = record.get('participated');
              });

            case 9:
              users = users + ", " + window.walletAccount._authData.accountId;
              _context9.next = 12;
              return base('nfts').update([{
                "id": nftrecid,
                "fields": {
                  "isbought": users,
                  "participated": participated + 1
                }
              }]);

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee6);
    }));
    return _CreatingOnAirtable.apply(this, arguments);
  }

  function activateCreateNFTModal(e) {
    setselecttype("NFT");
    setDonateModalShow(true);
  }

  function Topbutton() {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.NavLink, {
        to: "/login?[/donation]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '34px'
        }
      }, "Login"))));
    }

    if (window.localStorage.getItem('Type') == "user") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        style: {
          display: 'flex',
          gap: '14px',
          position: 'absolute',
          right: '25px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        onClick: activateCreateNFTModal,
        className: "card",
        style: {
          color: 'white',
          overflow: 'hidden',
          background: 'rgb(236, 201, 0)',
          textAlign: 'center',
          width: '172px',
          cursor: 'pointer',
          height: '48px',
          margin: '0',
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        onClick: activateCreateNFTModal,
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '21px',
          fontSize: '21px'
        }
      }, "Donate NFT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.NavLink, {
        to: "/lottery?[".concat(RealEventId, "]")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        style: {
          display: 'flex',
          gap: '14px',
          position: 'absolute',
          right: '208px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "card",
        style: {
          color: 'white',
          overflow: 'hidden',
          background: 'rgb(236, 201, 0)',
          textAlign: 'center',
          width: '172px',
          cursor: 'pointer',
          height: '48px',
          margin: '0',
          padding: '0px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '21px',
          fontSize: '21px'
        }
      }, "Go to lottery")))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.NavLink, {
      to: "/lottery?[".concat(RealEventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        display: 'flex',
        gap: '14px',
        position: 'absolute',
        right: '80px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "card",
      style: {
        color: 'white',
        overflow: 'hidden',
        background: 'rgb(236, 201, 0)',
        textAlign: 'center',
        width: '172px',
        cursor: 'pointer',
        height: '48px',
        margin: '0',
        padding: '0px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "card-body",
      style: {
        height: '100%',
        paddingTop: '21px',
        fontSize: '21px'
      }
    }, "Go to lottery")))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: "row EventContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("img", {
    src: logo,
    className: "AuctionImage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: "DetialsContainer",
    style: {
      rowGap: '16px',
      paddingTop: '70px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, "Goal: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, "$ ", goalusd, " (", goal, " ", walletType, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
    style: {
      fontSize: '2vw'
    },
    name: "dateleft",
    date: date
  }, dateleft))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(Topbutton, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      key: listItem.Id,
      className: "row ElementsContainer bgWhite"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '100%',
        display: 'flex'
      }
    }, listItem.type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage pixel"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "DetialsContainer",
      style: {
        rowGap: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h2", {
      style: {
        fontSize: '2vw'
      }
    }, listItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        color: "rgb(211 187 51)",
        fontSize: '1.7vw'
      }
    }, "Type: NFT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "TextContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        color: "rgb(211 187 51)",
        fontSize: '1.7vw'
      }
    }, listItem.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "ElementBottomContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        maxWidth: "216px"
      }
    }, listItem.lottery != "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h3", {
      style: {
        fontSize: '1vw'
      },
      className: "smallgrey"
    }, "Current bid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      },
      className: "bidprice"
    }, "$ ", listItem.Bidprice.toFixed(2), " (", listItem.price, " ", walletType, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h7", {
      style: {
        fontSize: '1vw'
      },
      name: "date",
      date: date,
      className: "smallgrey"
    }, dateleftBid)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h3", {
      style: {
        fontSize: '1vw'
      },
      className: "smallgrey"
    }, "Ticket price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      },
      className: "bidprice"
    }, "$ ", listItem.Bidprice.toFixed(2), " (", listItem.price, " ", walletType, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "BidAllcontainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "Bidsbutton"
    }, listItem.lottery != "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, window.localStorage.getItem("Type") == "user" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '168px'
      },
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      onClick: activateViewBidModal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      className: "card-body bidbuttonText"
    }, "View"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '168px'
      },
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      goalScore: goal,
      className: "Bidcontainer col",
      onClick: activateBidNFTModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card-body bidbuttonText"
    }, "Bid")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null), window.localStorage.getItem("Type") == "manager" && selectwallet == currentWallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '224px'
      },
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      goalScore: goal,
      className: "Bidcontainer col",
      onClick: addtoLottery
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card BidcontainerCard",
      onClick: addtoLottery
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card-body bidbuttonText",
      onClick: addtoLottery
    }, "Add to Lottery"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null)) : listItem.isbought == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.NavLink, {
      to: "/lottery?[".concat(RealEventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '224px'
      },
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      goalScore: goal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      className: "card-body bidbuttonText"
    }, "Go to lottery"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '251px'
      },
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      ticketnumber: listItem.ticketnumber,
      price: listItem.price,
      goalScore: goal,
      ownerWallet: listItem.ownerWallet,
      onClick: BuyLottery,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      ticketnumber: listItem.ticketnumber,
      ownerWallet: listItem.ownerWallet,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      ticketnumber: listItem.ticketnumber,
      ownerWallet: listItem.ownerWallet,
      className: "card-body bidbuttonText"
    }, "Buy lottery ticket"))))))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: modalShow,
    onHide: function onHide() {
      setModalShow(false);
      AuctionfetchContractData();
    },
    tokenId: selectid,
    recid: selectrecid,
    type: selecttype,
    ToAddress: selectwallet,
    eventId: eventId,
    RealEventId: RealEventId,
    Highestbid: selectbid,
    walletType: walletType,
    goal: goal,
    contract: contract,
    contractCelo: contractCelo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    show: ViewmodalShow,
    onHide: function onHide() {
      setViewModalShow(false);
      AuctionfetchContractData();
    },
    id: selectid,
    walletType: walletType,
    title: selecttitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    show: CreatemodalShow,
    onHide: function onHide() {
      setDonateModalShow(false);
    },
    EventID: RealEventId,
    EventeRecID: eventId,
    type: selecttype,
    SelectedTitle: title,
    enddate: date
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_modals_lottery_AddLotteryModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    show: AddLotterymodalShow,
    onHide: function onHide() {
      setAddLotteryModalShow(false);
    },
    nftrecid: selectrecid,
    nftid: selectid,
    eventid: RealEventId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_modals_lottery_BuyLotteryModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    show: BuyLotterymodalShow,
    onHide: function onHide() {
      setBuyLotteryModalShow(false);
    },
    nftid: selectid,
    ToAddress: Eventwallet,
    nftrecid: selectrecid,
    price: selectprice,
    ticketnumber: LotteryNumber
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "94de75aa5d06e399abc5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjdkYWZjMjM0ZTE0N2M5MGZjNGJiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ2UsU0FBU2EsT0FBVCxHQUFtQjtBQUM5QixNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUE1QjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR0wsS0FBSyxDQUFDTyxJQUFOLENBQVdOLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlJLENBQUMsQ0FBQ0csS0FBRixLQUFZUixLQUFLLENBQUNTLFNBQXRCLEVBQWlDO0FBQzdCVCxNQUFBQSxLQUFLLENBQUNTLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBRUQscUJBQWlEUCxrRUFBVyxDQUFDLFFBQUQsQ0FBNUQ7QUFBQSxNQUFRWSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBaUJDLFlBQWpCLGdCQUFpQkEsWUFBakI7QUFBQSxNQUErQkMsYUFBL0IsZ0JBQStCQSxhQUEvQjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlIsRUFBdEI7O0FBQ0Esa0JBQThDbkIsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQUE7QUFBQSxNQUFPNEIsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQXNEN0IsK0NBQVEsQ0FBQyxLQUFELENBQTlEO0FBQUE7QUFBQSxNQUFPOEIsbUJBQVA7QUFBQSxNQUE0QkMsc0JBQTVCOztBQUNBLG1CQUFzRC9CLCtDQUFRLENBQUMs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UUFQUjtBQVFJLGNBQVUsRUFBRVksVUFSaEI7QUFTSSxTQUFLLEVBQUVSO0FBVFgsSUFoSkosZUE0SkksaURBQUMscUZBQUQ7QUFDSSxRQUFJLEVBQUU5QixlQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLGtCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFFSCxLQUxMO0FBTUksV0FBTyxFQUFFTyxXQU5iO0FBT0ksZUFBVyxFQUFFRixPQVBqQjtBQVFJLFFBQUksRUFBRTBCLFVBUlY7QUFTSSxpQkFBYSxFQUFFcEIsS0FUbkI7QUFVSSxXQUFPLEVBQUVRO0FBVmIsSUE1SkosZUF5S0ksaURBQUMsd0VBQUQ7QUFDSSxRQUFJLEVBQUVsQixtQkFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCO0FBRUgsS0FMTDtBQU1JLFlBQVEsRUFBRXlCLFdBTmQ7QUFPSSxTQUFLLEVBQUVGLFFBUFg7QUFRSSxXQUFPLEVBQUVsQjtBQVJiLElBektKLGVBbUxJLGlEQUFDLHdFQUFEO0FBQ0ksUUFBSSxFQUFFSixtQkFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUFFQyxNQUFBQSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCO0FBQStCLEtBRm5EO0FBR0ksU0FBSyxFQUFFcUIsUUFIWDtBQUlJLGFBQVMsRUFBRVEsV0FKZjtBQUtJLFlBQVEsRUFBRU4sV0FMZDtBQU1JLFNBQUssRUFBRWMsV0FOWDtBQU9JLGdCQUFZLEVBQUVFO0FBUGxCLElBbkxKLENBREo7QUE4TEg7Ozs7Ozs7O1VDL2pCRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcbmltcG9ydCBWaWV3QmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9WaWV3QmlkTkZUTW9kYWwnO1xuXG5pbXBvcnQgRG9uYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbCc7XG5pbXBvcnQgQWRkTG90dGVyeU1vZGFsIGZyb20gJ0AvbW9kYWxzL2xvdHRlcnkvQWRkTG90dGVyeU1vZGFsJztcbmltcG9ydCBCdXlMb3R0ZXJ5TW9kYWwgZnJvbSAnQC9tb2RhbHMvbG90dGVyeS9CdXlMb3R0ZXJ5TW9kYWwnO1xuXG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcbiAgICBjb25zdCBzdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb250cmFjdCxjb250cmFjdENlbG8sIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBjb25zb2xlLmxvZyhcImlkID0+IFwiLCBpZCk7XG4gICAgY29uc3QgW0NyZWF0ZW1vZGFsU2hvdywgc2V0RG9uYXRlTW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbQWRkTG90dGVyeW1vZGFsU2hvdywgc2V0QWRkTG90dGVyeU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW0J1eUxvdHRlcnltb2RhbFNob3csIHNldEJ1eUxvdHRlcnlNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW2V2ZW50SWQsIHNldEV2ZW50SWRdID0gdXNlU3RhdGUoaWQpO1xuICAgIGNvbnN0IFtSZWFsRXZlbnRJZCwgc2V0UmVhbEV2ZW50SWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2VsZWN0cmVjaWQsIHNldHNlbGVjdHJlY2lkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dGl0bGUsIHNldHNlbGVjdHRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dHlwZSwgc2V0c2VsZWN0dHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0V2ZW50d2FsbGV0LCBzZXRFdmVudHdhbGxldF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc2VsZWN0d2FsbGV0LCBzZXRzZWxlY3R3YWxsZXRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt3YWxsZXRUeXBlLCBzZXRXYWxsZXRUeXBlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0YmlkLCBzZXRzZWxlY3RiaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3NlbGVjdHByaWNlLCBzZXRzZWxlY3RwcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbTG90dGVyeU51bWJlciwgc2V0TG90dGVyeU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBib29sVHJ1ZSA9IHRydWU7XG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbVmlld21vZGFsU2hvdywgc2V0Vmlld01vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2N1cnJlbnRXYWxsZXQsIHNldEN1cnJlbnRXYWxsZXRdID0gdXNlU3RhdGUoJycpO1xuICAgIGxldCBjdXJyZW50V2FsbGV0Qm91Z2h0ID0gW11cblxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIExlZnREYXRlQmlkKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvZG9uYXRpb24vYXVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0ZWQgY2hla2NpbmdcIik7XG4gICAgICAgICAgICBsZXQgbmVhclByaWNlID0gMDtcbiAgICAgICAgICAgIC8vTkVBUiBjdXJyZW5jeVxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIHZhciBuZWFyQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1uZWFyLXByb3RvY29sJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeV9vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBjdXJyZW5jeV9vcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IG5lYXJQcmljZSA9IGpzb24pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IG5lYXJQcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcblxuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRzJykuZmluZChpZCwgYXN5bmMgZnVuY3Rpb24gKGVyciwgcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIHNldEV2ZW50SWQocmVjb3JkLmdldElkKCkpO1xuICAgICAgICAgICAgICAgIHNldFJlYWxFdmVudElkKHJlY29yZC5nZXQoJ2lkJykpO1xuICAgICAgICAgICAgICAgIHNldFRpdGxlKHJlY29yZC5nZXQoXCJ0aXRsZVwiKSk7XG4gICAgICAgICAgICAgICAgc2V0V2FsbGV0VHlwZShyZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKSk7XG4gICAgICAgICAgICAgICAgc2V0c2VsZWN0d2FsbGV0KHJlY29yZC5nZXQoJ3dhbGxldCcpKTtcbiAgICAgICAgICAgICAgICBzZXRFdmVudHdhbGxldChyZWNvcmQuZ2V0KCd3YWxsZXQnKSk7XG4gICAgICAgICAgICAgICAgc2V0Z29hbHVzZChmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpICogbmVhclByaWNlKSkpO1xuICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSk7XG4gICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnQoTGVmdERhdGUocmVjb3JkLmdldChcImVuZERhdGVcIikpKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZChyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSkpO1xuICAgICAgICAgICAgICAgIHNldGxvZ28ocmVjb3JkLmdldChcImxvZ29saW5rXCIpKTtcblxuXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmV0cmlldmVkJywgcmVjb3JkLmdldElkKCkpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2V2ZW50aWR9ID0gJyR7TnVtYmVyKHJlY29yZC5nZXQoJ2lkJykpfScpYCxcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0aW5nIHRoZSBmaXJzdCAxMCByZWNvcmRzIGluIEdyaWQgdmlldzpcbiAgICAgICAgICAgICAgICAgICAgbWF4UmVjb3JkczogMTAsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IFt7IGZpZWxkOiBcInByaWNlXCIsIGRpcmVjdGlvbjogXCJkZXNjXCIgfV0sXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChhc3luYyBmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEFjYyA9ICh3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFdhbGxldCh3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNib3VnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJpc2JvdWdodFwiKS5pbmNsdWRlcyhjdXJyZW50QWNjKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2JvdWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIG5lYXJQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjSWQ6IHJlY29yZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZDogcmVjb3JkLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZ2V0KFwiZGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlkcHJpY2U6IGdvYWxQcmljZTJ1c2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcihyZWNvcmQuZ2V0KFwicHJpY2VcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlY29yZC5nZXQoXCJ0eXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZWNvcmQuZ2V0KFwiaW1hZ2VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG90dGVyeTogcmVjb3JkLmdldChcImxvdHRlcnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNib3VnaHQ6IGlzYm91Z2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldG51bWJlcjogcmVjb3JkLmdldChcInRpY2tldG51bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcldhbGxldDogcmVjb3JkLmdldChcIm93bmVyV2FsbGV0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG5cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgfSwgMTAwMCk7XG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVWaWV3QmlkTW9kYWwoZSkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0dGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikpO1xuXG4gICAgICAgIHNldFZpZXdNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbChlKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RiaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaGlnaGVzdGJpZFwiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGJpZCk7XG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkdG9Mb3R0ZXJ5KGUpIHtcblxuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0QWRkTG90dGVyeU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBCdXlMb3R0ZXJ5KGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0cHJpY2UoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicHJpY2VcIikpO1xuICAgICAgICBzZXRzZWxlY3R3YWxsZXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwid2FsbGV0XCIpKTtcbiAgICAgICAgc2V0TG90dGVyeU51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aWNrZXRudW1iZXJcIikpO1xuICAgICAgICBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93KHRydWUpO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBCdXlpbmdMb3R0ZXJ5KEFtb3VudCwgVG9BZGRyZXNzKSB7XG4gICAgICAgIHZhciBidXR0b25Qcm9wcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4gYnRuLXByaW1hcnlcIilbMF07XG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvblByb3BzLmlubmVyVGV4dCA9IFwiQ29ubmVjdCB0byBORUFSIHdhbGxldFwiXG4gICAgICAgICAgICBhd2FpdCB0b2FzdC53YXJuKFwiTm90IGNvbm5lY3RlZCB3aXRoIE5FQVIgd2FsbGV0ISBDb25uZWN0aW5nLi4uXCIpO1xuICAgICAgICAgICAgYXdhaXQgd2luZG93LndhbGxldEFjY291bnQucmVxdWVzdFNpZ25JbihcbiAgICAgICAgICAgICAgICB3aW5kb3cubmVhckNvbmZpZy5jb250cmFjdE5hbWUsXG4gICAgICAgICAgICAgICAgJ0RlbWV0ZXInKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBuZXR3b3JrSWQ6IFwidGVzdG5ldFwiLFxuICAgICAgICAgICAga2V5U3RvcmU6IG5ldyBuZWFyQVBJLmtleVN0b3Jlcy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUoKSxcbiAgICAgICAgICAgIG5vZGVVcmw6IFwiaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICAgICAgICAgICAgd2FsbGV0VXJsOiBcImh0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgICAgIGhlbHBlclVybDogXCJodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnXCIsXG4gICAgICAgICAgICBleHBsb3JlclVybDogXCJodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmdcIixcbiAgICAgICAgfTtcbiAgICAgICAgLy8gc2VuZHMgTkVBUiB0b2tlbnNcbiAgICAgICAgY29uc3QgbmVhciA9IGF3YWl0IG5lYXJBUEkuY29ubmVjdChjb25maWcpO1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgbmVhci5hY2NvdW50KHdhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkpO1xuICAgICAgICBjb25zdCBhbW91bnRJbllvY3RvID0gKE51bWJlcihBbW91bnQpICogMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCkudG9Mb2NhbGVTdHJpbmcoJ2Z1bGx3aWRlJywgeyB1c2VHcm91cGluZzogZmFsc2UgfSk7XG5cbiAgICAgICAgYXdhaXQgYWNjb3VudC5zZW5kTW9uZXkoXG4gICAgICAgICAgICBUb0FkZHJlc3MsIC8vIHJlY2VpdmVyIGFjY291bnRcbiAgICAgICAgICAgIGFtb3VudEluWW9jdG8gLy8gYW1vdW50IGluIHlvY3RvTkVBUlxuICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nT25BaXJ0YWJsZShuZnRpZCwgbmZ0cmVjaWQpIHtcblxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5jcmVhdGUoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmllbGRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuZnRpZFwiOiBOdW1iZXIobmZ0aWQpLFxuICAgICAgICAgICAgICAgICAgICBcInVzZXJcIjogY3VycmVudFdhbGxldCxcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyV2FsbGV0XCI6IHNpZ25lckFkZHJlc3NcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgICBsZXQgdXNlcnMgPSAnJztcbiAgICAgICAgbGV0IHBhcnRpY2lwYXRlZCA9IDA7XG4gICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5maW5kKG5mdHJlY2lkLCBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcbiAgICAgICAgICAgIHVzZXJzID0gcmVjb3JkLmdldCgnaXNib3VnaHQnKTtcbiAgICAgICAgICAgIHBhcnRpY2lwYXRlZCA9IHJlY29yZC5nZXQoJ3BhcnRpY2lwYXRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgdXNlcnMgPSB1c2VycyArIFwiLCBcIiArIHdpbmRvdy53YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQ7XG4gICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS51cGRhdGUoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogbmZ0cmVjaWQsXG4gICAgICAgICAgICAgICAgXCJmaWVsZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlzYm91Z2h0XCI6IHVzZXJzLFxuICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYXRlZFwiOiBwYXJ0aWNpcGF0ZWQgKyAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwoZSkge1xuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xuXG4gICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIFRvcGJ1dHRvbigpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MnB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4J1xuICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9naW4/Wy9kb25hdGlvbl1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICczNHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwidXNlclwiKSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMjVweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5Eb25hdGUgTkZUPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9sb3R0ZXJ5P1ske1JlYWxFdmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIGxvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8PlxuXG4gICAgICAgICAgICA8TmF2TGluayB0bz17YC9sb3R0ZXJ5P1ske1JlYWxFdmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzgwcHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+R28gdG8gbG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC8+KVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXVjdGlvbkltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0dhcDogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzcwcHgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+e3RpdGxlfTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+R29hbDogPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+JCB7Z29hbHVzZH0gKHtnb2FsfSB7d2FsbGV0VHlwZX0pPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBuYW1lPSdkYXRlbGVmdCcgZGF0ZT17ZGF0ZX0+e2RhdGVsZWZ0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BidXR0b24gLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IEVsZW1lbnRzQ29udGFpbmVyIGJnV2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50eXBlID09IFwiQ3J5cHRvcHVua1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlIHBpeGVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiAnMnZ3JyB9fSA+e2xpc3RJdGVtLm5hbWV9PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDIxMSAxODcgNTEpXCIsIGZvbnRTaXplOiAnMS43dncnIH19PlR5cGU6IE5GVDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDIxMSAxODcgNTEpXCIsIGZvbnRTaXplOiAnMS43dncnIH19PntsaXN0SXRlbS5kZXNjcmlwdGlvbn08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRWxlbWVudEJvdHRvbUNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMjE2cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5sb3R0ZXJ5ICE9IFwidHJ1ZVwiID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5DdXJyZW50IGJpZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlLnRvRml4ZWQoMil9ICh7bGlzdEl0ZW0ucHJpY2V9IHt3YWxsZXRUeXBlfSk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gbmFtZT1cImRhdGVcIiBkYXRlPXtkYXRlfSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj57ZGF0ZWxlZnRCaWR9PC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPlRpY2tldCBwcmljZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlLnRvRml4ZWQoMil9ICh7bGlzdEl0ZW0ucHJpY2V9IHt3YWxsZXRUeXBlfSk8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZHNidXR0b24nPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0ubG90dGVyeSAhPSBcInRydWVcIiA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJ1c2VyXCIpID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTY4cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPlZpZXc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzE2OHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FjdGl2YXRlQmlkTkZUTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+QmlkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PjwvPil9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwibWFuYWdlclwiKSAmJiAoc2VsZWN0d2FsbGV0ID09IGN1cnJlbnRXYWxsZXQpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiBvbkNsaWNrPXthZGR0b0xvdHRlcnl9PkFkZCB0byBMb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogKDw+PC8+KSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoKGxpc3RJdGVtLmlzYm91Z2h0ID09IHRydWUpID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiID5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjUxcHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aWNrZXRudW1iZXI9e2xpc3RJdGVtLnRpY2tldG51bWJlcn0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gb25DbGljaz17QnV5TG90dGVyeX0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiA+QnV5IGxvdHRlcnkgdGlja2V0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRva2VuSWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcz17c2VsZWN0d2FsbGV0fVxuICAgICAgICAgICAgICAgIGV2ZW50SWQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgUmVhbEV2ZW50SWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgICAgIEhpZ2hlc3RiaWQ9e3NlbGVjdGJpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIGdvYWw9e2dvYWx9XG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0Q2Vsbz17Y29udHJhY3RDZWxvfVxuXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Vmlld0JpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Vmlld21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Vmlld01vZGFsU2hvdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgd2FsbGV0VHlwZT17d2FsbGV0VHlwZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17c2VsZWN0dGl0bGV9XG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtDcmVhdGVtb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIEV2ZW50SUQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgICAgIEV2ZW50ZVJlY0lEPXtldmVudElkfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUaXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxBZGRMb3R0ZXJ5TW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtBZGRMb3R0ZXJ5bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmZ0cmVjaWQ9e3NlbGVjdHJlY2lkfVxuICAgICAgICAgICAgICAgIG5mdGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBldmVudGlkPXtSZWFsRXZlbnRJZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV5TG90dGVyeU1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17QnV5TG90dGVyeW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgc2V0QnV5TG90dGVyeU1vZGFsU2hvdyhmYWxzZSkgfX1cbiAgICAgICAgICAgICAgICBuZnRpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgVG9BZGRyZXNzPXtFdmVudHdhbGxldH1cbiAgICAgICAgICAgICAgICBuZnRyZWNpZD17c2VsZWN0cmVjaWR9XG4gICAgICAgICAgICAgICAgcHJpY2U9e3NlbGVjdHByaWNlfVxuICAgICAgICAgICAgICAgIHRpY2tldG51bWJlcj17TG90dGVyeU51bWJlcn1cbiAgICAgICAgICAgIC8+PC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI5NGRlNzVhYTVkMDZlMzk5YWJjNVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZMaW5rIiwidG9hc3QiLCJuZWFyQVBJIiwiUm91dGVyIiwiQmlkTkZUTW9kYWwiLCJWaWV3QmlkTkZUTW9kYWwiLCJEb25hdGVORlRNb2RhbCIsIkFkZExvdHRlcnlNb2RhbCIsIkJ1eUxvdHRlcnlNb2RhbCIsInVzZUNvbnRyYWN0IiwiQXVjdGlvbiIsInJlZ2V4Iiwic3RyIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJjb250cmFjdCIsImNvbnRyYWN0Q2VsbyIsInNpZ25lckFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRlbW9kYWxTaG93Iiwic2V0RG9uYXRlTW9kYWxTaG93IiwiQWRkTG90dGVyeW1vZGFsU2hvdyIsInNldEFkZExvdHRlcnlNb2RhbFNob3ciLCJCdXlMb3R0ZXJ5bW9kYWxTaG93Iiwic2V0QnV5TG90dGVyeU1vZGFsU2hvdyIsImV2ZW50SWQiLCJzZXRFdmVudElkIiwiUmVhbEV2ZW50SWQiLCJzZXRSZWFsRXZlbnRJZCIsImxpc3QiLCJzZXRMaXN0IiwidGl0bGUiLCJzZXRUaXRsZSIsImdvYWx1c2QiLCJzZXRnb2FsdXNkIiwiZ29hbCIsInNldGdvYWwiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwiZGF0ZSIsInNldGRhdGUiLCJkYXRlbGVmdEJpZCIsInNldGRhdGVsZWZ0QmlkIiwibG9nbyIsInNldGxvZ28iLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0cmVjaWQiLCJzZXRzZWxlY3RyZWNpZCIsInNlbGVjdHRpdGxlIiwic2V0c2VsZWN0dGl0bGUiLCJzZWxlY3R0eXBlIiwic2V0c2VsZWN0dHlwZSIsIkV2ZW50d2FsbGV0Iiwic2V0RXZlbnR3YWxsZXQiLCJzZWxlY3R3YWxsZXQiLCJzZXRzZWxlY3R3YWxsZXQiLCJ3YWxsZXRUeXBlIiwic2V0V2FsbGV0VHlwZSIsInNlbGVjdGJpZCIsInNldHNlbGVjdGJpZCIsInNlbGVjdHByaWNlIiwic2V0c2VsZWN0cHJpY2UiLCJMb3R0ZXJ5TnVtYmVyIiwic2V0TG90dGVyeU51bWJlciIsImJvb2xUcnVlIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiVmlld21vZGFsU2hvdyIsInNldFZpZXdNb2RhbFNob3ciLCJjdXJyZW50V2FsbGV0Iiwic2V0Q3VycmVudFdhbGxldCIsImN1cnJlbnRXYWxsZXRCb3VnaHQiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJEYXRlIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwicyIsInRvU3RyaW5nIiwiTGVmdERhdGVCaWQiLCJBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEiLCJwYXRobmFtZSIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsImN1cnJlbmN5X29wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJyZWNvcmQiLCJnZXRJZCIsImdldCIsImZvcm1hdCIsIk51bWJlciIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsIm1heFJlY29yZHMiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJ2aWV3IiwiZWFjaFBhZ2UiLCJwYWdlIiwicmVjb3JkcyIsImZldGNoTmV4dFBhZ2UiLCJhcnIiLCJmb3JFYWNoIiwiY3VycmVudEFjYyIsIndhbGxldEFjY291bnQiLCJfYXV0aERhdGEiLCJhY2NvdW50SWQiLCJpc2JvdWdodCIsImdvYWxQcmljZTJ1c2QiLCJwdXNoIiwicmVjSWQiLCJJZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkJpZHByaWNlIiwidHlwZSIsImltYWdlIiwibG90dGVyeSIsInRpY2tldG51bWJlciIsIm93bmVyV2FsbGV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZG9uZSIsInNldEludGVydmFsIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWxsRGF0ZXMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhY3RpdmF0ZVZpZXdCaWRNb2RhbCIsImUiLCJ0YXJnZXQiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiYWRkdG9Mb3R0ZXJ5IiwiQnV5TG90dGVyeSIsIkJ1eWluZ0xvdHRlcnkiLCJBbW91bnQiLCJUb0FkZHJlc3MiLCJidXR0b25Qcm9wcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpc1NpZ25lZEluIiwiaW5uZXJUZXh0Iiwid2FybiIsInJlcXVlc3RTaWduSW4iLCJuZWFyQ29uZmlnIiwiY29udHJhY3ROYW1lIiwiY29uZmlnIiwibmV0d29ya0lkIiwia2V5U3RvcmUiLCJrZXlTdG9yZXMiLCJCcm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUiLCJub2RlVXJsIiwid2FsbGV0VXJsIiwiaGVscGVyVXJsIiwiZXhwbG9yZXJVcmwiLCJjb25uZWN0IiwibmVhciIsImFjY291bnQiLCJnZXRBY2NvdW50SWQiLCJhbW91bnRJbllvY3RvIiwidG9Mb2NhbGVTdHJpbmciLCJ1c2VHcm91cGluZyIsInNlbmRNb25leSIsIkNyZWF0aW5nT25BaXJ0YWJsZSIsIm5mdGlkIiwibmZ0cmVjaWQiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImNyZWF0ZSIsInVzZXJzIiwicGFydGljaXBhdGVkIiwidXBkYXRlIiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsIlRvcGJ1dHRvbiIsImNvbG9yIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwiY3Vyc29yIiwiaGVpZ2h0Iiwid2lkdGgiLCJmbG9hdCIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwiZGlzcGxheSIsImdhcCIsInBvc2l0aW9uIiwicmlnaHQiLCJtYXJnaW4iLCJmb250U2l6ZSIsInJvd0dhcCIsImxpc3RJdGVtIiwibWF4V2lkdGgiLCJ0b0ZpeGVkIiwid2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==