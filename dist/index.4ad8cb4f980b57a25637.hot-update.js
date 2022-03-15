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
                                        currentAcc = "";

                                        if (record.get("type") == "NEAR") {
                                          setCurrentWallet(walletAccount._authData.accountId);
                                          currentWallet2 = walletAccount._authData.accountId;
                                          currentAcc = walletAccount._authData.accountId;
                                        } else if (record.get("type") == "CELO") {
                                          setCurrentWallet(window.ethereum.selectedAddress);
                                          currentWallet2 = window.ethereum.selectedAddress;
                                          currentAcc = walletAccount._authData.accountId;
                                        }

                                        isbought = false;

                                        try {
                                          if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = record.get("isbought")).call(_context2, currentWallet2)) {
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
/******/ 	__webpack_require__.h = function() { return "3c3759fc19b6e11f6296"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjRhZDhjYjRmOTgwYjU3YTI1NjM3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ2UsU0FBU2EsT0FBVCxHQUFtQjtBQUM5QixNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUE1QjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR0wsS0FBSyxDQUFDTyxJQUFOLENBQVdOLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlJLENBQUMsQ0FBQ0csS0FBRixLQUFZUixLQUFLLENBQUNTLFNBQXRCLEVBQWlDO0FBQzdCVCxNQUFBQSxLQUFLLENBQUNTLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBRUQscUJBQWtEUCxrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRWSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlIsRUFBdEI7O0FBQ0Esa0JBQThDbkIsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQUE7QUFBQSxNQUFPNEIsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQXNEN0IsK0NBQVEsQ0FBQyxLQUFELENBQTlEO0FBQUE7QUFBQSxNQUFPOEIsbUJBQVA7QUFBQSxNQUE0QkMsc0JBQTVCOztBQUNBLG1CQUFzRC9CLCtDQUFRLENBQUMs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LEVBQUVZLFVBUmhCO0FBU0ksU0FBSyxFQUFFUjtBQVRYLElBakpKLGVBNkpJLGlEQUFDLHFGQUFEO0FBQ0ksUUFBSSxFQUFFOUIsZUFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxrQkFBa0IsQ0FBQyxLQUFELENBQWxCO0FBRUgsS0FMTDtBQU1JLFdBQU8sRUFBRU8sV0FOYjtBQU9JLGVBQVcsRUFBRUYsT0FQakI7QUFRSSxRQUFJLEVBQUUwQixVQVJWO0FBU0ksaUJBQWEsRUFBRXBCLEtBVG5CO0FBVUksV0FBTyxFQUFFUTtBQVZiLElBN0pKLGVBMEtJLGlEQUFDLHdFQUFEO0FBQ0ksUUFBSSxFQUFFbEIsbUJBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsc0JBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUVILEtBTEw7QUFNSSxZQUFRLEVBQUV5QixXQU5kO0FBT0ksU0FBSyxFQUFFRixRQVBYO0FBUUksV0FBTyxFQUFFbEI7QUFSYixJQTFLSixlQW9MSSxpREFBQyx3RUFBRDtBQUNJLFFBQUksRUFBRUosbUJBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFBRUMsTUFBQUEsc0JBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUErQixLQUZuRDtBQUdJLFNBQUssRUFBRXFCLFFBSFg7QUFJSSxhQUFTLEVBQUVRLFdBSmY7QUFLSSxZQUFRLEVBQUVOLFdBTGQ7QUFNSSxTQUFLLEVBQUVjLFdBTlg7QUFPSSxnQkFBWSxFQUFFRTtBQVBsQixJQXBMSixDQURKO0FBK0xIOzs7Ozs7OztVQ3BpQkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbCc7XG5pbXBvcnQgVmlld0JpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvVmlld0JpZE5GVE1vZGFsJztcblxuaW1wb3J0IERvbmF0ZU5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwnO1xuaW1wb3J0IEFkZExvdHRlcnlNb2RhbCBmcm9tICdAL21vZGFscy9sb3R0ZXJ5L0FkZExvdHRlcnlNb2RhbCc7XG5pbXBvcnQgQnV5TG90dGVyeU1vZGFsIGZyb20gJ0AvbW9kYWxzL2xvdHRlcnkvQnV5TG90dGVyeU1vZGFsJztcblxuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVjdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBsZXQgbTtcbiAgICBsZXQgaWQgPSBcIlwiO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcbiAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWQgPSBtWzFdO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY29udHJhY3QsIGNvbnRyYWN0Q2Vsbywgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnNvbGUubG9nKFwiaWQgPT4gXCIsIGlkKTtcbiAgICBjb25zdCBbQ3JlYXRlbW9kYWxTaG93LCBzZXREb25hdGVNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtBZGRMb3R0ZXJ5bW9kYWxTaG93LCBzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbQnV5TG90dGVyeW1vZGFsU2hvdywgc2V0QnV5TG90dGVyeU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBbZXZlbnRJZCwgc2V0RXZlbnRJZF0gPSB1c2VTdGF0ZShpZCk7XG4gICAgY29uc3QgW1JlYWxFdmVudElkLCBzZXRSZWFsRXZlbnRJZF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnb2FsdXNkLCBzZXRnb2FsdXNkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbCwgc2V0Z29hbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGVsZWZ0LCBzZXRkYXRlbGVmdF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGUsIHNldGRhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdEJpZCwgc2V0ZGF0ZWxlZnRCaWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2dvLCBzZXRsb2dvXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZWxlY3RyZWNpZCwgc2V0c2VsZWN0cmVjaWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3R0aXRsZSwgc2V0c2VsZWN0dGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3R0eXBlLCBzZXRzZWxlY3R0eXBlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbRXZlbnR3YWxsZXQsIHNldEV2ZW50d2FsbGV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzZWxlY3R3YWxsZXQsIHNldHNlbGVjdHdhbGxldF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3dhbGxldFR5cGUsIHNldFdhbGxldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZWxlY3RwcmljZSwgc2V0c2VsZWN0cHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW0xvdHRlcnlOdW1iZXIsIHNldExvdHRlcnlOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgYm9vbFRydWUgPSB0cnVlO1xuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjdXJyZW50V2FsbGV0LCBzZXRDdXJyZW50V2FsbGV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBsZXQgY3VycmVudFdhbGxldDIgPSBcIlwiO1xuICAgIGxldCBjdXJyZW50V2FsbGV0Qm91Z2h0ID0gW11cblxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIExlZnREYXRlQmlkKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvZG9uYXRpb24vYXVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0ZWQgY2hla2NpbmdcIik7XG4gICAgICAgICAgICBsZXQgbmVhclByaWNlID0gMDtcbiAgICAgICAgICAgIC8vTkVBUiBjdXJyZW5jeVxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIHZhciBuZWFyQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1uZWFyLXByb3RvY29sJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeV9vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBjdXJyZW5jeV9vcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IG5lYXJQcmljZSA9IGpzb24pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IG5lYXJQcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcblxuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjZWxvUHJpY2UgPSAwO1xuICAgICAgICAgICAgLy9DRUxPIGN1cnJlbmN5XG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGNlbG9DdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPWNlbG8mc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5X29wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChjZWxvQ3VycmVuY3lVcmwsIGN1cnJlbmN5X29wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gY2Vsb1ByaWNlID0ganNvbilcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG4gICAgICAgICAgICAgICAgY2Vsb1ByaWNlID0gY2Vsb1ByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xuXG4gICAgICAgICAgICAgICAgY2Vsb1ByaWNlID0gMDtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5maW5kKGlkLCBhc3luYyBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgc2V0RXZlbnRJZChyZWNvcmQuZ2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgc2V0UmVhbEV2ZW50SWQocmVjb3JkLmdldCgnaWQnKSk7XG4gICAgICAgICAgICAgICAgc2V0VGl0bGUocmVjb3JkLmdldChcInRpdGxlXCIpKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHNldFdhbGxldFR5cGUocmVjb3JkLmdldChcIndhbGxldHR5cGVcIikpO1xuICAgICAgICAgICAgICAgIHNldHNlbGVjdHdhbGxldChyZWNvcmQuZ2V0KCd3YWxsZXQnKSk7XG4gICAgICAgICAgICAgICAgc2V0RXZlbnR3YWxsZXQocmVjb3JkLmdldCgnd2FsbGV0JykpO1xuICAgICAgICAgICAgICAgIGxldCB1c2RwcmljZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiTkVBUlwiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBuZWFyUHJpY2UpKTtcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmdldChcIndhbGxldHR5cGVcIikgPT0gXCJDRUxPXCIpIHVzZHByaWNlID0gZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSAqIGNlbG9QcmljZSkpO1xuXG4gICAgICAgICAgICAgICAgc2V0Z29hbHVzZCh1c2RwcmljZSk7XG4gICAgICAgICAgICAgICAgc2V0Z29hbChOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpKTtcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdChMZWZ0RGF0ZShyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSkpO1xuICAgICAgICAgICAgICAgIHNldGRhdGUocmVjb3JkLmdldChcImVuZERhdGVcIikpO1xuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKSk7XG4gICAgICAgICAgICAgICAgc2V0bG9nbyhyZWNvcmQuZ2V0KFwibG9nb2xpbmtcIikpO1xuXG5cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQnLCByZWNvcmQuZ2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7ZXZlbnRpZH0gPSAnJHtOdW1iZXIocmVjb3JkLmdldCgnaWQnKSl9JylgLFxuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IDEwIHJlY29yZHMgaW4gR3JpZCB2aWV3OlxuICAgICAgICAgICAgICAgICAgICBtYXhSZWNvcmRzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogW3sgZmllbGQ6IFwicHJpY2VcIiwgZGlyZWN0aW9uOiBcImRlc2NcIiB9XSxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGFzeW5jIGZ1bmN0aW9uIChyZWNvcmQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2MgPVwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmdldChcInR5cGVcIikgPT0gXCJORUFSXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50V2FsbGV0KHdhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFdhbGxldDIgPSB3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjYyA9ICAod2FsbGV0QWNjb3VudC5fYXV0aERhdGEuYWNjb3VudElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLmdldChcInR5cGVcIikgPT0gXCJDRUxPXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50V2FsbGV0KHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXYWxsZXQyID0gd2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjID0gICh3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNib3VnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJpc2JvdWdodFwiKS5pbmNsdWRlcyhjdXJyZW50V2FsbGV0MikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNib3VnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnb2FsUHJpY2UydXNkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvYWxQcmljZTJ1c2QgPSBOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSkgKiBuZWFyUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY0lkOiByZWNvcmQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWQ6IHJlY29yZC5nZXQoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZWNvcmQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVjb3JkLmdldChcImRlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZHByaWNlOiBnb2FsUHJpY2UydXNkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZWNvcmQuZ2V0KFwidHlwZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcmVjb3JkLmdldChcImltYWdlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvdHRlcnk6IHJlY29yZC5nZXQoXCJsb3R0ZXJ5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzYm91Z2h0OiBpc2JvdWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXRudW1iZXI6IHJlY29yZC5nZXQoXCJ0aWNrZXRudW1iZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJXYWxsZXQ6IHJlY29yZC5nZXQoXCJvd25lcldhbGxldFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gZG9uZShlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgIH0sIDEwMDApO1xuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlVmlld0JpZE1vZGFsKGUpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpKTtcblxuICAgICAgICBzZXRWaWV3TW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoZSkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RiaWQpO1xuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZHRvTG90dGVyeShlKSB7XG5cbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldEFkZExvdHRlcnlNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQnV5TG90dGVyeShlKSB7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHByaWNlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInByaWNlXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0d2FsbGV0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcIndhbGxldFwiKSk7XG4gICAgICAgIHNldExvdHRlcnlOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGlja2V0bnVtYmVyXCIpKTtcbiAgICAgICAgc2V0QnV5TG90dGVyeU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVORlRNb2RhbChlKSB7XG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XG5cbiAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gVG9wYnV0dG9uKCkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcycHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0NHB4JyxcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnXG4gICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL2RvbmF0aW9uXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzM0cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJ1c2VyXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyNXB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkRvbmF0ZSBORlQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzIwOHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+R28gdG8gbG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDw+XG5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnODBweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8Lz4pXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgRXZlbnRDb250YWluZXJcIiA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJBdWN0aW9uSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93R2FwOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnNzBweCdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID57dGl0bGV9PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Hb2FsOiA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4kIHtnb2FsdXNkfSAoe2dvYWx9IHt3YWxsZXRUeXBlfSk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG5hbWU9J2RhdGVsZWZ0JyBkYXRlPXtkYXRlfT57ZGF0ZWxlZnR9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcGJ1dHRvbiAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2UgcGl4ZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IFwiNXB4XCIgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFNpemU6ICcydncnIH19ID57bGlzdEl0ZW0ubmFtZX08L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMjExIDE4NyA1MSlcIiwgZm9udFNpemU6ICcxLjd2dycgfX0+VHlwZTogTkZUPC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMjExIDE4NyA1MSlcIiwgZm9udFNpemU6ICcxLjd2dycgfX0+e2xpc3RJdGVtLmRlc2NyaXB0aW9ufTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdFbGVtZW50Qm90dG9tQ29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogXCIyMTZweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmxvdHRlcnkgIT0gXCJ0cnVlXCIgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPkN1cnJlbnQgYmlkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0gY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2UudG9GaXhlZCgyKX0gKHtsaXN0SXRlbS5wcmljZX0ge3dhbGxldFR5cGV9KTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBuYW1lPVwiZGF0ZVwiIGRhdGU9e2RhdGV9IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPntkYXRlbGVmdEJpZH08L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+VGlja2V0IHByaWNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0gY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2UudG9GaXhlZCgyKX0gKHtsaXN0SXRlbS5wcmljZX0ge3dhbGxldFR5cGV9KTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkQWxsY29udGFpbmVyJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkc2J1dHRvbic+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5sb3R0ZXJ5ICE9IFwidHJ1ZVwiID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSA9PSBcInVzZXJcIikgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxNjhweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IG9uQ2xpY2s9e2FjdGl2YXRlVmlld0JpZE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+VmlldzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTY4cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gZ29hbFNjb3JlPXtnb2FsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgb25DbGljaz17YWN0aXZhdGVCaWRORlRNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogKDw+PC8+KX1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJtYW5hZ2VyXCIpICYmIChzZWxlY3R3YWxsZXQgPT0gY3VycmVudFdhbGxldCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjI0cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gZ29hbFNjb3JlPXtnb2FsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgb25DbGljaz17YWRkdG9Mb3R0ZXJ5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCIgb25DbGljaz17YWRkdG9Mb3R0ZXJ5fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0+QWRkIHRvIExvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikgOiAoPD48Lz4pKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICgobGlzdEl0ZW0uaXNib3VnaHQgPT0gdHJ1ZSkgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvbG90dGVyeT9bJHtSZWFsRXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjI0cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCIgPkdvIHRvIGxvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyNTFweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpY2tldG51bWJlcj17bGlzdEl0ZW0udGlja2V0bnVtYmVyfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gb3duZXJXYWxsZXQ9e2xpc3RJdGVtLm93bmVyV2FsbGV0fSBvbkNsaWNrPXtCdXlMb3R0ZXJ5fSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSB0aWNrZXRudW1iZXI9e2xpc3RJdGVtLnRpY2tldG51bWJlcn0gb3duZXJXYWxsZXQ9e2xpc3RJdGVtLm93bmVyV2FsbGV0fSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSB0aWNrZXRudW1iZXI9e2xpc3RJdGVtLnRpY2tldG51bWJlcn0gb3duZXJXYWxsZXQ9e2xpc3RJdGVtLm93bmVyV2FsbGV0fSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiID5CdXkgbG90dGVyeSB0aWNrZXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8QmlkTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdG9rZW5JZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgcmVjaWQ9e3NlbGVjdHJlY2lkfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XG4gICAgICAgICAgICAgICAgVG9BZGRyZXNzPXtzZWxlY3R3YWxsZXR9XG4gICAgICAgICAgICAgICAgZXZlbnRJZD17ZXZlbnRJZH1cbiAgICAgICAgICAgICAgICBSZWFsRXZlbnRJZD17UmVhbEV2ZW50SWR9XG4gICAgICAgICAgICAgICAgSGlnaGVzdGJpZD17c2VsZWN0YmlkfVxuICAgICAgICAgICAgICAgIHdhbGxldFR5cGU9e3dhbGxldFR5cGV9XG4gICAgICAgICAgICAgICAgZ29hbD17Z29hbH1cbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XG4gICAgICAgICAgICAgICAgY29udHJhY3RDZWxvPXtjb250cmFjdENlbG99XG4gICAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cblxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFZpZXdCaWRORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e1ZpZXdtb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZpZXdNb2RhbFNob3coZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIHdhbGxldFR5cGU9e3dhbGxldFR5cGV9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdHRpdGxlfVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPERvbmF0ZU5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Q3JlYXRlbW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXREb25hdGVNb2RhbFNob3coZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBFdmVudElEPXtSZWFsRXZlbnRJZH1cbiAgICAgICAgICAgICAgICBFdmVudGVSZWNJRD17ZXZlbnRJZH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxuICAgICAgICAgICAgICAgIFNlbGVjdGVkVGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgIGVuZGRhdGU9e2RhdGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8QWRkTG90dGVyeU1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17QWRkTG90dGVyeW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWRkTG90dGVyeU1vZGFsU2hvdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG5mdHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICBuZnRpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgZXZlbnRpZD17UmVhbEV2ZW50SWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1eUxvdHRlcnlNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0J1eUxvdHRlcnltb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHNldEJ1eUxvdHRlcnlNb2RhbFNob3coZmFsc2UpIH19XG4gICAgICAgICAgICAgICAgbmZ0aWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcz17RXZlbnR3YWxsZXR9XG4gICAgICAgICAgICAgICAgbmZ0cmVjaWQ9e3NlbGVjdHJlY2lkfVxuICAgICAgICAgICAgICAgIHByaWNlPXtzZWxlY3RwcmljZX1cbiAgICAgICAgICAgICAgICB0aWNrZXRudW1iZXI9e0xvdHRlcnlOdW1iZXJ9XG4gICAgICAgICAgICAvPjwvPlxuICAgICk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiM2MzNzU5ZmMxOWI2ZTExZjYyOTZcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2TGluayIsInRvYXN0IiwibmVhckFQSSIsIlJvdXRlciIsIkJpZE5GVE1vZGFsIiwiVmlld0JpZE5GVE1vZGFsIiwiRG9uYXRlTkZUTW9kYWwiLCJBZGRMb3R0ZXJ5TW9kYWwiLCJCdXlMb3R0ZXJ5TW9kYWwiLCJ1c2VDb250cmFjdCIsIkF1Y3Rpb24iLCJyZWdleCIsInN0ciIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsImlkIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiY29udHJhY3QiLCJjb250cmFjdENlbG8iLCJzaWduZXJBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsIkNyZWF0ZW1vZGFsU2hvdyIsInNldERvbmF0ZU1vZGFsU2hvdyIsIkFkZExvdHRlcnltb2RhbFNob3ciLCJzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93IiwiQnV5TG90dGVyeW1vZGFsU2hvdyIsInNldEJ1eUxvdHRlcnlNb2RhbFNob3ciLCJldmVudElkIiwic2V0RXZlbnRJZCIsIlJlYWxFdmVudElkIiwic2V0UmVhbEV2ZW50SWQiLCJsaXN0Iiwic2V0TGlzdCIsInRpdGxlIiwic2V0VGl0bGUiLCJnb2FsdXNkIiwic2V0Z29hbHVzZCIsImdvYWwiLCJzZXRnb2FsIiwiZGF0ZWxlZnQiLCJzZXRkYXRlbGVmdCIsImRhdGUiLCJzZXRkYXRlIiwiZGF0ZWxlZnRCaWQiLCJzZXRkYXRlbGVmdEJpZCIsImxvZ28iLCJzZXRsb2dvIiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdHJlY2lkIiwic2V0c2VsZWN0cmVjaWQiLCJzZWxlY3R0aXRsZSIsInNldHNlbGVjdHRpdGxlIiwic2VsZWN0dHlwZSIsInNldHNlbGVjdHR5cGUiLCJFdmVudHdhbGxldCIsInNldEV2ZW50d2FsbGV0Iiwic2VsZWN0d2FsbGV0Iiwic2V0c2VsZWN0d2FsbGV0Iiwid2FsbGV0VHlwZSIsInNldFdhbGxldFR5cGUiLCJzZWxlY3RiaWQiLCJzZXRzZWxlY3RiaWQiLCJzZWxlY3RwcmljZSIsInNldHNlbGVjdHByaWNlIiwiTG90dGVyeU51bWJlciIsInNldExvdHRlcnlOdW1iZXIiLCJib29sVHJ1ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlZpZXdtb2RhbFNob3ciLCJzZXRWaWV3TW9kYWxTaG93IiwiY3VycmVudFdhbGxldCIsInNldEN1cnJlbnRXYWxsZXQiLCJjdXJyZW50V2FsbGV0MiIsImN1cnJlbnRXYWxsZXRCb3VnaHQiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJEYXRlIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwicyIsInRvU3RyaW5nIiwiTGVmdERhdGVCaWQiLCJBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEiLCJwYXRobmFtZSIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsImN1cnJlbmN5X29wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsImNlbG9QcmljZSIsImNlbG9DdXJyZW5jeVVybCIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJyZWNvcmQiLCJnZXRJZCIsImdldCIsInVzZHByaWNlIiwiZm9ybWF0IiwiTnVtYmVyIiwic2VsZWN0IiwiZmlsdGVyQnlGb3JtdWxhIiwibWF4UmVjb3JkcyIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsInZpZXciLCJlYWNoUGFnZSIsInBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImFyciIsImZvckVhY2giLCJjdXJyZW50QWNjIiwid2FsbGV0QWNjb3VudCIsIl9hdXRoRGF0YSIsImFjY291bnRJZCIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwiaXNib3VnaHQiLCJnb2FsUHJpY2UydXNkIiwicHVzaCIsInJlY0lkIiwiSWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJCaWRwcmljZSIsInR5cGUiLCJpbWFnZSIsImxvdHRlcnkiLCJ0aWNrZXRudW1iZXIiLCJvd25lcldhbGxldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRvbmUiLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWN0aXZhdGVWaWV3QmlkTW9kYWwiLCJlIiwidGFyZ2V0IiwiYWN0aXZhdGVCaWRORlRNb2RhbCIsImFkZHRvTG90dGVyeSIsIkJ1eUxvdHRlcnkiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiVG9wYnV0dG9uIiwiY29sb3IiLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJoZWlnaHQiLCJ3aWR0aCIsImZsb2F0IiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJkaXNwbGF5IiwiZ2FwIiwicG9zaXRpb24iLCJyaWdodCIsIm1hcmdpbiIsImZvbnRTaXplIiwicm93R2FwIiwibGlzdEl0ZW0iLCJtYXhXaWR0aCIsInRvRml4ZWQiLCJ3YWxsZXQiXSwic291cmNlUm9vdCI6IiJ9