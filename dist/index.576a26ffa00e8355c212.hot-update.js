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

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
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

  var currentWallet2 = "";
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
      var _context, nearPrice, nearCurrencyUrl, currency_options, celoPrice, celoCurrencyUrl, _currency_options, Airtable, base;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(id && window.location.pathname == "/donation/auction")) {
                _context5.next = 32;
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
              celoPrice = 0; //CELO currency

              _context5.prev = 16;
              celoCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=celo&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              _currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context5.next = 21;
              return fetch(celoCurrencyUrl, _currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return celoPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 21:
              celoPrice = celoPrice.data.marketPairs[0].price;
              _context5.next = 28;
              break;

            case 24:
              _context5.prev = 24;
              _context5.t1 = _context5["catch"](16);
              console.log(_context5.t1);
              celoPrice = 0;

            case 28:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              _context5.next = 32;
              return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_4___default()(_context = base('events')).call(_context, id, /*#__PURE__*/function () {
                var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(err, record) {
                  var usdprice;
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
                          _context4.next = 8;
                          return setWalletType(record.get("wallettype"));

                        case 8:
                          setselectwallet(record.get('wallet'));
                          setEventwallet(record.get('wallet'));
                          usdprice = 0;
                          if (record.get("wallettype") == "NEAR") usdprice = formatter.format(Number(Number(record.get("Goal")) * nearPrice));
                          if (record.get("wallettype") == "CELO") usdprice = formatter.format(Number(Number(record.get("Goal")) * celoPrice));
                          setgoalusd(usdprice);
                          setgoal(Number(record.get("Goal")));
                          setdateleft(LeftDate(record.get("endDate")));
                          setdate(record.get("endDate"));
                          setdateleftBid(LeftDateBid(record.get("endDate")));
                          setlogo(record.get("logolink"));
                          console.log('Retrieved', record.getId());
                          _context4.next = 22;
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
                                        if (record.get("wallettype") == "NEAR") {
                                          setCurrentWallet(walletAccount._authData.accountId);
                                          currentWallet2 = walletAccount._authData.accountId;
                                        } else if (record.get("wallettype") == "CELO") {
                                          setCurrentWallet(window.ethereum.selectedAddress);
                                          currentWallet2 = walletAccount._authData.accountId;
                                        }

                                        currentAcc = walletAccount._authData.accountId;
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

                              return function (_x4) {
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

                        case 22:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x2, _x3) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 32:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee3, null, [[3, 11], [16, 24]]);
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
    contractCelo: contractCelo,
    senderAddress: signerAddress
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
/******/ 	__webpack_require__.h = function() { return "d4dd173fb45d230eca7a"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjU3NmEyNmZmYTAwZTgzNTVjMjEyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ2UsU0FBU2EsT0FBVCxHQUFtQjtBQUM5QixNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUE1QjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR0wsS0FBSyxDQUFDTyxJQUFOLENBQVdOLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlJLENBQUMsQ0FBQ0csS0FBRixLQUFZUixLQUFLLENBQUNTLFNBQXRCLEVBQWlDO0FBQzdCVCxNQUFBQSxLQUFLLENBQUNTLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBRUQscUJBQWtEUCxrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRWSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlIsRUFBdEI7O0FBQ0Esa0JBQThDbkIsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQUE7QUFBQSxNQUFPNEIsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQXNEN0IsK0NBQVEsQ0FBQyxLQUFELENBQTlEO0FBQUE7QUFBQSxNQUFPOEIsbUJBQVA7QUFBQSxNQUE0QkMsc0JBQTVCOztBQUNBLG1CQUFzRC9CLCtDQUFRLENBQUMs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QUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsa0JBQWtCLENBQUMsS0FBRCxDQUFsQjtBQUVILEtBTEw7QUFNSSxXQUFPLEVBQUVPLFdBTmI7QUFPSSxlQUFXLEVBQUVGLE9BUGpCO0FBUUksUUFBSSxFQUFFMEIsVUFSVjtBQVNJLGlCQUFhLEVBQUVwQixLQVRuQjtBQVVJLFdBQU8sRUFBRVE7QUFWYixJQTdKSixlQTBLSSxpREFBQyx3RUFBRDtBQUNJLFFBQUksRUFBRWxCLG1CQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLHNCQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFFSCxLQUxMO0FBTUksWUFBUSxFQUFFeUIsV0FOZDtBQU9JLFNBQUssRUFBRUYsUUFQWDtBQVFJLFdBQU8sRUFBRWxCO0FBUmIsSUExS0osZUFvTEksaURBQUMsd0VBQUQ7QUFDSSxRQUFJLEVBQUVKLG1CQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQUVDLE1BQUFBLHNCQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFBK0IsS0FGbkQ7QUFHSSxTQUFLLEVBQUVxQixRQUhYO0FBSUksYUFBUyxFQUFFUSxXQUpmO0FBS0ksWUFBUSxFQUFFTixXQUxkO0FBTUksU0FBSyxFQUFFYyxXQU5YO0FBT0ksZ0JBQVksRUFBRUU7QUFQbEIsSUFwTEosQ0FESjtBQStMSDs7Ozs7Ozs7VUNqaUJELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwnO1xuaW1wb3J0IFZpZXdCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbCc7XG5cbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcbmltcG9ydCBBZGRMb3R0ZXJ5TW9kYWwgZnJvbSAnQC9tb2RhbHMvbG90dGVyeS9BZGRMb3R0ZXJ5TW9kYWwnO1xuaW1wb3J0IEJ1eUxvdHRlcnlNb2RhbCBmcm9tICdAL21vZGFscy9sb3R0ZXJ5L0J1eUxvdHRlcnlNb2RhbCc7XG5cblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1Y3Rpb24oKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbnRyYWN0LCBjb250cmFjdENlbG8sIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBjb25zb2xlLmxvZyhcImlkID0+IFwiLCBpZCk7XG4gICAgY29uc3QgW0NyZWF0ZW1vZGFsU2hvdywgc2V0RG9uYXRlTW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbQWRkTG90dGVyeW1vZGFsU2hvdywgc2V0QWRkTG90dGVyeU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW0J1eUxvdHRlcnltb2RhbFNob3csIHNldEJ1eUxvdHRlcnlNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW2V2ZW50SWQsIHNldEV2ZW50SWRdID0gdXNlU3RhdGUoaWQpO1xuICAgIGNvbnN0IFtSZWFsRXZlbnRJZCwgc2V0UmVhbEV2ZW50SWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2VsZWN0cmVjaWQsIHNldHNlbGVjdHJlY2lkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dGl0bGUsIHNldHNlbGVjdHRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dHlwZSwgc2V0c2VsZWN0dHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0V2ZW50d2FsbGV0LCBzZXRFdmVudHdhbGxldF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc2VsZWN0d2FsbGV0LCBzZXRzZWxlY3R3YWxsZXRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt3YWxsZXRUeXBlLCBzZXRXYWxsZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzZWxlY3RiaWQsIHNldHNlbGVjdGJpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2VsZWN0cHJpY2UsIHNldHNlbGVjdHByaWNlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtMb3R0ZXJ5TnVtYmVyLCBzZXRMb3R0ZXJ5TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGJvb2xUcnVlID0gdHJ1ZTtcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtWaWV3bW9kYWxTaG93LCBzZXRWaWV3TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY3VycmVudFdhbGxldCwgc2V0Q3VycmVudFdhbGxldF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgbGV0IGN1cnJlbnRXYWxsZXQyID0gXCJcIjtcbiAgICBsZXQgY3VycmVudFdhbGxldEJvdWdodCA9IFtdXG5cbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZUJpZChkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcImQgXCIgKyBoLnRvU3RyaW5nKCkgKyBcImggXCIgKyBtLnRvU3RyaW5nKCkgKyBcIm0gXCIgKyBzLnRvU3RyaW5nKCkgKyBcInNcIik7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2RvbmF0aW9uL2F1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydGVkIGNoZWtjaW5nXCIpO1xuICAgICAgICAgICAgbGV0IG5lYXJQcmljZSA9IDA7XG4gICAgICAgICAgICAvL05FQVIgY3VycmVuY3lcbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lfb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgY3VycmVuY3lfb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBuZWFyUHJpY2UgPSBqc29uKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XG5cbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2Vsb1ByaWNlID0gMDtcbiAgICAgICAgICAgIC8vQ0VMTyBjdXJyZW5jeVxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIHZhciBjZWxvQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1jZWxvJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeV9vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2goY2Vsb0N1cnJlbmN5VXJsLCBjdXJyZW5jeV9vcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IGNlbG9QcmljZSA9IGpzb24pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgICAgIGNlbG9QcmljZSA9IGNlbG9QcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcblxuICAgICAgICAgICAgICAgIGNlbG9QcmljZSA9IDA7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRzJykuZmluZChpZCwgYXN5bmMgZnVuY3Rpb24gKGVyciwgcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIHNldEV2ZW50SWQocmVjb3JkLmdldElkKCkpO1xuICAgICAgICAgICAgICAgIHNldFJlYWxFdmVudElkKHJlY29yZC5nZXQoJ2lkJykpO1xuICAgICAgICAgICAgICAgIHNldFRpdGxlKHJlY29yZC5nZXQoXCJ0aXRsZVwiKSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBzZXRXYWxsZXRUeXBlKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpKTtcbiAgICAgICAgICAgICAgICBzZXRzZWxlY3R3YWxsZXQocmVjb3JkLmdldCgnd2FsbGV0JykpO1xuICAgICAgICAgICAgICAgIHNldEV2ZW50d2FsbGV0KHJlY29yZC5nZXQoJ3dhbGxldCcpKTtcbiAgICAgICAgICAgICAgICBsZXQgdXNkcHJpY2UgPSAwO1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKSA9PSBcIk5FQVJcIikgdXNkcHJpY2UgPSBmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpICogbmVhclByaWNlKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiQ0VMT1wiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBjZWxvUHJpY2UpKTtcblxuICAgICAgICAgICAgICAgIHNldGdvYWx1c2QodXNkcHJpY2UpO1xuICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSk7XG4gICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnQoTGVmdERhdGUocmVjb3JkLmdldChcImVuZERhdGVcIikpKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZChyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSkpO1xuICAgICAgICAgICAgICAgIHNldGxvZ28ocmVjb3JkLmdldChcImxvZ29saW5rXCIpKTtcblxuXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmV0cmlldmVkJywgcmVjb3JkLmdldElkKCkpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2V2ZW50aWR9ID0gJyR7TnVtYmVyKHJlY29yZC5nZXQoJ2lkJykpfScpYCxcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0aW5nIHRoZSBmaXJzdCAxMCByZWNvcmRzIGluIEdyaWQgdmlldzpcbiAgICAgICAgICAgICAgICAgICAgbWF4UmVjb3JkczogMTAsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IFt7IGZpZWxkOiBcInByaWNlXCIsIGRpcmVjdGlvbjogXCJkZXNjXCIgfV0sXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChhc3luYyBmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmdldChcIndhbGxldHR5cGVcIikgPT0gXCJORUFSXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50V2FsbGV0KHdhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFdhbGxldDIgPSB3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiQ0VMT1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFdhbGxldCh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2FsbGV0MiA9IHdhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QWNjID0gKHdhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc2JvdWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmdldChcImlzYm91Z2h0XCIpLmluY2x1ZGVzKGN1cnJlbnRBY2MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzYm91Z2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIHsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ29hbFByaWNlMnVzZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBnb2FsUHJpY2UydXNkID0gTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwicHJpY2VcIikpICogbmVhclByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNJZDogcmVjb3JkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkOiByZWNvcmQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlY29yZC5nZXQoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWRwcmljZTogZ29hbFByaWNlMnVzZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVjb3JkLmdldChcInR5cGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHJlY29yZC5nZXQoXCJpbWFnZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3R0ZXJ5OiByZWNvcmQuZ2V0KFwibG90dGVyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2JvdWdodDogaXNib3VnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0bnVtYmVyOiByZWNvcmQuZ2V0KFwidGlja2V0bnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyV2FsbGV0OiByZWNvcmQuZ2V0KFwib3duZXJXYWxsZXRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpLnN0eWxlID0gXCJkaXNwbGF5Om5vbmVcIjtcblxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcblxuICAgIH0sIFtdKTtcblxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICB9LCAxMDAwKTtcblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVZpZXdCaWRNb2RhbChlKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3R0aXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSk7XG5cbiAgICAgICAgc2V0Vmlld01vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZE5GVE1vZGFsKGUpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGJpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJoaWdoZXN0YmlkXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0YmlkKTtcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGR0b0xvdHRlcnkoZSkge1xuXG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIEJ1eUxvdHRlcnkoZSkge1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RwcmljZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwcmljZVwiKSk7XG4gICAgICAgIHNldHNlbGVjdHdhbGxldChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ3YWxsZXRcIikpO1xuICAgICAgICBzZXRMb3R0ZXJ5TnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpY2tldG51bWJlclwiKSk7XG4gICAgICAgIHNldEJ1eUxvdHRlcnlNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwoZSkge1xuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xuXG4gICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIFRvcGJ1dHRvbigpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MnB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4J1xuICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9naW4/Wy9kb25hdGlvbl1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICczNHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwidXNlclwiKSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMjVweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5Eb25hdGUgTkZUPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9sb3R0ZXJ5P1ske1JlYWxFdmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIGxvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8PlxuXG4gICAgICAgICAgICA8TmF2TGluayB0bz17YC9sb3R0ZXJ5P1ske1JlYWxFdmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzgwcHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+R28gdG8gbG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC8+KVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXVjdGlvbkltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0dhcDogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzcwcHgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+e3RpdGxlfTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+R29hbDogPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+JCB7Z29hbHVzZH0gKHtnb2FsfSB7d2FsbGV0VHlwZX0pPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBuYW1lPSdkYXRlbGVmdCcgZGF0ZT17ZGF0ZX0+e2RhdGVsZWZ0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BidXR0b24gLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IEVsZW1lbnRzQ29udGFpbmVyIGJnV2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50eXBlID09IFwiQ3J5cHRvcHVua1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlIHBpeGVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiAnMnZ3JyB9fSA+e2xpc3RJdGVtLm5hbWV9PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDIxMSAxODcgNTEpXCIsIGZvbnRTaXplOiAnMS43dncnIH19PlR5cGU6IE5GVDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDIxMSAxODcgNTEpXCIsIGZvbnRTaXplOiAnMS43dncnIH19PntsaXN0SXRlbS5kZXNjcmlwdGlvbn08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRWxlbWVudEJvdHRvbUNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMjE2cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5sb3R0ZXJ5ICE9IFwidHJ1ZVwiID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5DdXJyZW50IGJpZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlLnRvRml4ZWQoMil9ICh7bGlzdEl0ZW0ucHJpY2V9IHt3YWxsZXRUeXBlfSk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gbmFtZT1cImRhdGVcIiBkYXRlPXtkYXRlfSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj57ZGF0ZWxlZnRCaWR9PC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPlRpY2tldCBwcmljZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlLnRvRml4ZWQoMil9ICh7bGlzdEl0ZW0ucHJpY2V9IHt3YWxsZXRUeXBlfSk8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZHNidXR0b24nPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0ubG90dGVyeSAhPSBcInRydWVcIiA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJ1c2VyXCIpID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTY4cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPlZpZXc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzE2OHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FjdGl2YXRlQmlkTkZUTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+QmlkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PjwvPil9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwibWFuYWdlclwiKSAmJiAoc2VsZWN0d2FsbGV0ID09IGN1cnJlbnRXYWxsZXQpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiBvbkNsaWNrPXthZGR0b0xvdHRlcnl9PkFkZCB0byBMb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogKDw+PC8+KSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoKGxpc3RJdGVtLmlzYm91Z2h0ID09IHRydWUpID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiID5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjUxcHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aWNrZXRudW1iZXI9e2xpc3RJdGVtLnRpY2tldG51bWJlcn0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gb25DbGljaz17QnV5TG90dGVyeX0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiA+QnV5IGxvdHRlcnkgdGlja2V0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRva2VuSWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcz17c2VsZWN0d2FsbGV0fVxuICAgICAgICAgICAgICAgIGV2ZW50SWQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgUmVhbEV2ZW50SWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgICAgIEhpZ2hlc3RiaWQ9e3NlbGVjdGJpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIGdvYWw9e2dvYWx9XG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0Q2Vsbz17Y29udHJhY3RDZWxvfVxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XG5cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxWaWV3QmlkTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtWaWV3bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3TW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3R0aXRsZX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxEb25hdGVORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgRXZlbnRJRD17UmVhbEV2ZW50SWR9XG4gICAgICAgICAgICAgICAgRXZlbnRlUmVjSUQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0dHlwZX1cbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBlbmRkYXRlPXtkYXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEFkZExvdHRlcnlNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0FkZExvdHRlcnltb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFkZExvdHRlcnlNb2RhbFNob3coZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuZnRyZWNpZD17c2VsZWN0cmVjaWR9XG4gICAgICAgICAgICAgICAgbmZ0aWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIGV2ZW50aWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXlMb3R0ZXJ5TW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtCdXlMb3R0ZXJ5bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93KGZhbHNlKSB9fVxuICAgICAgICAgICAgICAgIG5mdGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBUb0FkZHJlc3M9e0V2ZW50d2FsbGV0fVxuICAgICAgICAgICAgICAgIG5mdHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICBwcmljZT17c2VsZWN0cHJpY2V9XG4gICAgICAgICAgICAgICAgdGlja2V0bnVtYmVyPXtMb3R0ZXJ5TnVtYmVyfVxuICAgICAgICAgICAgLz48Lz5cbiAgICApO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImQ0ZGQxNzNmYjQ1ZDIzMGVjYTdhXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJ0b2FzdCIsIm5lYXJBUEkiLCJSb3V0ZXIiLCJCaWRORlRNb2RhbCIsIlZpZXdCaWRORlRNb2RhbCIsIkRvbmF0ZU5GVE1vZGFsIiwiQWRkTG90dGVyeU1vZGFsIiwiQnV5TG90dGVyeU1vZGFsIiwidXNlQ29udHJhY3QiLCJBdWN0aW9uIiwicmVnZXgiLCJzdHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm0iLCJpZCIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImNvbnRyYWN0IiwiY29udHJhY3RDZWxvIiwic2lnbmVyQWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJDcmVhdGVtb2RhbFNob3ciLCJzZXREb25hdGVNb2RhbFNob3ciLCJBZGRMb3R0ZXJ5bW9kYWxTaG93Iiwic2V0QWRkTG90dGVyeU1vZGFsU2hvdyIsIkJ1eUxvdHRlcnltb2RhbFNob3ciLCJzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93IiwiZXZlbnRJZCIsInNldEV2ZW50SWQiLCJSZWFsRXZlbnRJZCIsInNldFJlYWxFdmVudElkIiwibGlzdCIsInNldExpc3QiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJnb2FsIiwic2V0Z29hbCIsImRhdGVsZWZ0Iiwic2V0ZGF0ZWxlZnQiLCJkYXRlIiwic2V0ZGF0ZSIsImRhdGVsZWZ0QmlkIiwic2V0ZGF0ZWxlZnRCaWQiLCJsb2dvIiwic2V0bG9nbyIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3RyZWNpZCIsInNldHNlbGVjdHJlY2lkIiwic2VsZWN0dGl0bGUiLCJzZXRzZWxlY3R0aXRsZSIsInNlbGVjdHR5cGUiLCJzZXRzZWxlY3R0eXBlIiwiRXZlbnR3YWxsZXQiLCJzZXRFdmVudHdhbGxldCIsInNlbGVjdHdhbGxldCIsInNldHNlbGVjdHdhbGxldCIsIndhbGxldFR5cGUiLCJzZXRXYWxsZXRUeXBlIiwic2VsZWN0YmlkIiwic2V0c2VsZWN0YmlkIiwic2VsZWN0cHJpY2UiLCJzZXRzZWxlY3RwcmljZSIsIkxvdHRlcnlOdW1iZXIiLCJzZXRMb3R0ZXJ5TnVtYmVyIiwiYm9vbFRydWUiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJWaWV3bW9kYWxTaG93Iiwic2V0Vmlld01vZGFsU2hvdyIsImN1cnJlbnRXYWxsZXQiLCJzZXRDdXJyZW50V2FsbGV0IiwiY3VycmVudFdhbGxldDIiLCJjdXJyZW50V2FsbGV0Qm91Z2h0IiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiRGF0ZSIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsInMiLCJ0b1N0cmluZyIsIkxlZnREYXRlQmlkIiwiQXVjdGlvbmZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJuZWFyUHJpY2UiLCJuZWFyQ3VycmVuY3lVcmwiLCJjdXJyZW5jeV9vcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImVycm9yIiwiZGF0YSIsIm1hcmtldFBhaXJzIiwicHJpY2UiLCJjZWxvUHJpY2UiLCJjZWxvQ3VycmVuY3lVcmwiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwicmVjb3JkIiwiZ2V0SWQiLCJnZXQiLCJ1c2RwcmljZSIsImZvcm1hdCIsIk51bWJlciIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsIm1heFJlY29yZHMiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJ2aWV3IiwiZWFjaFBhZ2UiLCJwYWdlIiwicmVjb3JkcyIsImZldGNoTmV4dFBhZ2UiLCJhcnIiLCJmb3JFYWNoIiwid2FsbGV0QWNjb3VudCIsIl9hdXRoRGF0YSIsImFjY291bnRJZCIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwiY3VycmVudEFjYyIsImlzYm91Z2h0IiwiZ29hbFByaWNlMnVzZCIsInB1c2giLCJyZWNJZCIsIklkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiQmlkcHJpY2UiLCJ0eXBlIiwiaW1hZ2UiLCJsb3R0ZXJ5IiwidGlja2V0bnVtYmVyIiwib3duZXJXYWxsZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkb25lIiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFjdGl2YXRlVmlld0JpZE1vZGFsIiwiZSIsInRhcmdldCIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJhZGR0b0xvdHRlcnkiLCJCdXlMb3R0ZXJ5IiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsIlRvcGJ1dHRvbiIsImNvbG9yIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwiY3Vyc29yIiwiaGVpZ2h0Iiwid2lkdGgiLCJmbG9hdCIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwiZGlzcGxheSIsImdhcCIsInBvc2l0aW9uIiwicmlnaHQiLCJtYXJnaW4iLCJmb250U2l6ZSIsInJvd0dhcCIsImxpc3RJdGVtIiwibWF4V2lkdGgiLCJ0b0ZpeGVkIiwid2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==