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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var _components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/components/modals/BidNFTModal */ "./src/components/components/modals/BidNFTModal.jsx");
/* harmony import */ var _components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/components/modals/ViewBidNFTModal */ "./src/components/components/modals/ViewBidNFTModal.jsx");
/* harmony import */ var _components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/components/modals/DonateNFTModal */ "./src/components/components/modals/DonateNFTModal.jsx");
/* harmony import */ var _modals_lottery_AddLotteryModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/modals/lottery/AddLotteryModal */ "./src/modals/lottery/AddLotteryModal.jsx");
/* harmony import */ var _modals_lottery_BuyLotteryModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/modals/lottery/BuyLotteryModal */ "./src/modals/lottery/BuyLotteryModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");



















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

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_17__["default"])('ERC721'),
      contract = _useContract.contract,
      contractCelo = _useContract.contractCelo,
      signerAddress = _useContract.signerAddress;

  console.log("id => ", id);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      CreatemodalShow = _useState2[0],
      setDonateModalShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      AddLotterymodalShow = _useState4[0],
      setAddLotteryModalShow = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      BuyLotterymodalShow = _useState6[0],
      setBuyLotteryModalShow = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(id),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      eventId = _useState8[0],
      setEventId = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      RealEventId = _useState10[0],
      setRealEventId = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      list = _useState12[0],
      setList = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      title = _useState14[0],
      setTitle = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      goalusd = _useState16[0],
      setgoalusd = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      goal = _useState18[0],
      setgoal = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState20 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
      dateleft = _useState20[0],
      setdateleft = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState22 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState21, 2),
      date = _useState22[0],
      setdate = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState24 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState23, 2),
      dateleftBid = _useState24[0],
      setdateleftBid = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState26 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState25, 2),
      logo = _useState26[0],
      setlogo = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      _useState28 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState27, 2),
      selectid = _useState28[0],
      setselectid = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState30 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState29, 2),
      selectrecid = _useState30[0],
      setselectrecid = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState32 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState31, 2),
      selecttitle = _useState32[0],
      setselecttitle = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState34 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState33, 2),
      selecttype = _useState34[0],
      setselecttype = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(""),
      _useState36 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState35, 2),
      Eventwallet = _useState36[0],
      setEventwallet = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState38 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState37, 2),
      selectwallet = _useState38[0],
      setselectwallet = _useState38[1];

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(""),
      _useState40 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState39, 2),
      walletType = _useState40[0],
      setWalletType = _useState40[1];

  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      _useState42 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState41, 2),
      selectbid = _useState42[0],
      setselectbid = _useState42[1];

  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      _useState44 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState43, 2),
      selectprice = _useState44[0],
      setselectprice = _useState44[1];

  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      _useState46 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState45, 2),
      LotteryNumber = _useState46[0],
      setLotteryNumber = _useState46[1];

  var boolTrue = true;

  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState48 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState47, 2),
      modalShow = _useState48[0],
      setModalShow = _useState48[1];

  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState50 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState49, 2),
      ViewmodalShow = _useState50[0],
      setViewModalShow = _useState50[1];

  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      _useState52 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState51, 2),
      SameWallet = _useState52[0],
      setSameWallet = _useState52[1];

  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      _useState54 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState53, 2),
      currentWallet = _useState54[0],
      setCurrentWallet = _useState54[1];

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
    _AuctionfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var nearPrice, nearCurrencyUrl, currency_options, celoPrice, celoCurrencyUrl, _currency_options, Airtable, base, findEvents, events, findNFTs;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(id && window.location.pathname == "/donation/auction")) {
                _context6.next = 42;
                break;
              }

              console.log("started chekcing");
              nearPrice = 0; //NEAR currency

              _context6.prev = 3;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context6.next = 8;
              return fetch(nearCurrencyUrl, currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 8:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context6.next = 15;
              break;

            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](3);
              console.log(_context6.t0);
              nearPrice = 0;

            case 15:
              celoPrice = 0; //CELO currency

              _context6.prev = 16;
              celoCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=celo&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              _currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context6.next = 21;
              return fetch(celoCurrencyUrl, _currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return celoPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 21:
              celoPrice = celoPrice.data.marketPairs[0].price;
              _context6.next = 28;
              break;

            case 24:
              _context6.prev = 24;
              _context6.t1 = _context6["catch"](16);
              console.log(_context6.t1);
              celoPrice = 0;

            case 28:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              findEvents = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default())( /*#__PURE__*/function () {
                var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(resolve, reject) {
                  var _context;

                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(_context = base('events')).call(_context, id, /*#__PURE__*/function () {
                            var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(err, record) {
                              var usdprice;
                              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context2) {
                                while (1) {
                                  switch (_context2.prev = _context2.next) {
                                    case 0:
                                      if (!err) {
                                        _context2.next = 3;
                                        break;
                                      }

                                      console.error(err);
                                      return _context2.abrupt("return");

                                    case 3:
                                      setEventId(record.getId());
                                      setRealEventId(record.get('id'));
                                      setTitle(record.get("title"));
                                      _context2.next = 8;
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
                                      resolve(record);

                                    case 20:
                                    case "end":
                                      return _context2.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            return function (_x4, _x5) {
                              return _ref2.apply(this, arguments);
                            };
                          }()).then(function (e) {
                            return e;
                          });

                        case 2:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x2, _x3) {
                  return _ref.apply(this, arguments);
                };
              }()).then(function (e) {
                return e;
              });
              _context6.next = 33;
              return findEvents;

            case 33:
              events = _context6.sent;
              console.log('Retrieved', events);
              findNFTs = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default())( /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(resolve, reject) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.t0 = base('nfts');
                          _context5.t1 = "({eventid} = '";
                          _context5.t2 = Number;
                          _context5.next = 5;
                          return findEvents.get('id');

                        case 5:
                          _context5.t3 = _context5.sent;
                          _context5.t4 = (0, _context5.t2)(_context5.t3);
                          _context5.t5 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_7___default()(_context5.t1).call(_context5.t1, _context5.t4, "')");
                          _context5.t6 = [{
                            field: "price",
                            direction: "desc"
                          }];
                          _context5.t7 = {
                            filterByFormula: _context5.t5,
                            maxRecords: 10,
                            sort: _context5.t6,
                            view: "Grid view"
                          };
                          _context5.next = 12;
                          return _context5.t0.select.call(_context5.t0, _context5.t7).eachPage(function page(records, fetchNextPage) {
                            // This function (`page`) will get called for each page of records.
                            var arr = [];

                            for (var ir = 0; ir < records.length; ir++) {
                              var record = records[0];
                              var currentAcc = "";

                              if (record.get("type") == "NEAR") {
                                setCurrentWallet(walletAccount._authData.accountId);
                                setSameWallet(walletAccount._authData.accountId);
                                currentWallet2 = walletAccount._authData.accountId;
                                currentAcc = walletAccount._authData.accountId;
                              } else if (record.get("type") == "CELO") {
                                setCurrentWallet(window.ethereum.selectedAddress);
                                currentWallet2 = window.ethereum.selectedAddress;
                                currentAcc = window.ethereum.selectedAddress;
                                ;
                              }

                              var isbought = false;

                              try {
                                var _context4;

                                if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_6___default()(_context4 = record.get("isbought")).call(_context4, currentAcc)) {
                                  isbought = true;
                                }
                              } catch (_unused) {}

                              var goalPrice2usd = 0;
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
                            }

                            setList(arr);
                            if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none";
                            resolve(arr);
                          }, function done(err) {
                            if (err) {
                              console.error(err);
                              return;
                            }
                          });

                        case 12:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x6, _x7) {
                  return _ref3.apply(this, arguments);
                };
              }()).then(function (e) {
                return e;
              });
              ;
              _context6.t2 = console;
              _context6.next = 40;
              return findNFTs;

            case 40:
              _context6.t3 = _context6.sent;

              _context6.t2.log.call(_context6.t2, _context6.t3);

            case 42:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee4, null, [[3, 11], [16, 24]]);
    }));
    return _AuctionfetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    AuctionfetchContractData();
  }, []);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_11__["default"].push("/login?[/donation]");
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
      next_router__WEBPACK_IMPORTED_MODULE_11__["default"].push("/login?[/donation]");
    }

    setselectrecid(e.target.getAttribute("recid"));
    setselectid(e.target.getAttribute("tokenid"));
    setselecttitle(e.target.getAttribute("title"));
    setViewModalShow(true);
  }

  function activateBidNFTModal(e) {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_11__["default"].push("/login?[/donation]");
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
      next_router__WEBPACK_IMPORTED_MODULE_11__["default"].push("/login?[/donation]");
    }

    setselectid(e.target.getAttribute("tokenid"));
    setselectrecid(e.target.getAttribute("recid"));
    setAddLotteryModalShow(true);
  }

  function BuyLottery(_x) {
    return _BuyLottery.apply(this, arguments);
  }

  function _BuyLottery() {
    _BuyLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(e) {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              setselectid(e.target.getAttribute("tokenid"));
              setselectrecid(e.target.getAttribute("recid"));
              setselectprice(e.target.getAttribute("price"));
              setselectwallet(e.target.getAttribute("wallet"));
              setLotteryNumber(e.target.getAttribute("ticketnumber"));
              setBuyLotteryModalShow(true);

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee5);
    }));
    return _BuyLottery.apply(this, arguments);
  }

  function activateCreateNFTModal(e) {
    setselecttype("NFT");
    setDonateModalShow(true);
  }

  function Topbutton() {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
        to: "/login?[/donation]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '34px'
        }
      }, "Login"))));
    }

    if (window.localStorage.getItem('Type') == "user") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        style: {
          display: 'flex',
          gap: '14px',
          position: 'absolute',
          right: '25px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        onClick: activateCreateNFTModal,
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '21px',
          fontSize: '21px'
        }
      }, "Donate NFT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
        to: "/lottery?[".concat(RealEventId, "]")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        style: {
          display: 'flex',
          gap: '14px',
          position: 'absolute',
          right: '208px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '21px',
          fontSize: '21px'
        }
      }, "Go to lottery")))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
      to: "/lottery?[".concat(RealEventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        display: 'flex',
        gap: '14px',
        position: 'absolute',
        right: '80px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "card-body",
      style: {
        height: '100%',
        paddingTop: '21px',
        fontSize: '21px'
      }
    }, "Go to lottery")))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    className: "row EventContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("img", {
    src: logo,
    className: "AuctionImage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    className: "DetialsContainer",
    style: {
      rowGap: '16px',
      paddingTop: '70px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, "Goal: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, "$ ", goalusd, " (", goal, " ", walletType, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
    style: {
      fontSize: '2vw'
    },
    name: "dateleft",
    date: date
  }, dateleft))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(Topbutton, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      key: listItem.Id,
      className: "row ElementsContainer bgWhite"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        width: '100%',
        display: 'flex'
      }
    }, listItem.type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage pixel"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "DetialsContainer",
      style: {
        rowGap: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h2", {
      style: {
        fontSize: '2vw'
      }
    }, listItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
      style: {
        color: "rgb(211 187 51)",
        fontSize: '1.7vw'
      }
    }, "Type: NFT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "TextContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
      style: {
        color: "rgb(211 187 51)",
        fontSize: '1.7vw'
      }
    }, listItem.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "ElementBottomContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        maxWidth: "216px"
      }
    }, listItem.lottery != "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h3", {
      style: {
        fontSize: '1vw'
      },
      className: "smallgrey"
    }, "Current bid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      },
      className: "bidprice"
    }, "$ ", listItem.Bidprice.toFixed(2), " (", listItem.price, " ", walletType, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h7", {
      style: {
        fontSize: '1vw'
      },
      name: "date",
      date: date,
      className: "smallgrey"
    }, dateleftBid)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h3", {
      style: {
        fontSize: '1vw'
      },
      className: "smallgrey"
    }, "Ticket price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      },
      className: "bidprice"
    }, "$ ", listItem.Bidprice.toFixed(2), " (", listItem.price, " ", walletType, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "BidAllcontainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      className: "Bidsbutton"
    }, listItem.lottery != "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, window.localStorage.getItem("Type") == "user" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        width: '168px'
      },
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      onClick: activateViewBidModal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      className: "card-body bidbuttonText"
    }, "View"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card-body bidbuttonText"
    }, "Bid")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null), window.localStorage.getItem("Type") == "manager" && selectwallet == currentWallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card BidcontainerCard",
      onClick: addtoLottery
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card-body bidbuttonText",
      onClick: addtoLottery
    }, "Add to Lottery"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null)) : listItem.isbought == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.NavLink, {
      to: "/lottery?[".concat(RealEventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      style: {
        width: '224px'
      },
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      goalScore: goal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      className: "card-body bidbuttonText"
    }, "Go to lottery"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      ticketnumber: listItem.ticketnumber,
      ownerWallet: listItem.ownerWallet,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      ticketnumber: listItem.ticketnumber,
      ownerWallet: listItem.ownerWallet,
      className: "card-body bidbuttonText"
    }, "Buy lottery ticket"))))))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    show: ViewmodalShow,
    onHide: function onHide() {
      setViewModalShow(false);
      AuctionfetchContractData();
    },
    id: selectid,
    walletType: walletType,
    title: selecttitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    show: CreatemodalShow,
    onHide: function onHide() {
      setDonateModalShow(false);
    },
    EventID: RealEventId,
    EventeRecID: eventId,
    type: selecttype,
    SelectedTitle: title,
    enddate: date
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_modals_lottery_AddLotteryModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    show: AddLotterymodalShow,
    onHide: function onHide() {
      setAddLotteryModalShow(false);
    },
    nftrecid: selectrecid,
    nftid: selectid,
    eventid: RealEventId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_modals_lottery_BuyLotteryModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
/******/ 	__webpack_require__.h = function() { return "c75457fa4b415efa5d9c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmRjMDk0OTNjNTVhMTJiYTNmYWE1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ2UsU0FBU2EsT0FBVCxHQUFtQjtBQUM5QixNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUE1QjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR0wsS0FBSyxDQUFDTyxJQUFOLENBQVdOLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlJLENBQUMsQ0FBQ0csS0FBRixLQUFZUixLQUFLLENBQUNTLFNBQXRCLEVBQWlDO0FBQzdCVCxNQUFBQSxLQUFLLENBQUNTLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBRUQscUJBQWtEUCxrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRWSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlIsRUFBdEI7O0FBQ0Esa0JBQThDbkIsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQUE7QUFBQSxNQUFPNEIsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQXNEN0IsK0NBQVEsQ0FBQyxLQUFELENBQTlEO0FBQUE7QUFBQSxNQUFPOEIsbUJBQVA7QUFBQSxNQUE0QkMsc0JBQTVCOztBQUNBLG1CQUFzRC9CLCtDQUFR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bEQsUUFQUjtBQVFJLGNBQVUsRUFBRVksVUFSaEI7QUFTSSxTQUFLLEVBQUVSO0FBVFgsSUFqSkosZUE2SkksaURBQUMscUZBQUQ7QUFDSSxRQUFJLEVBQUU5QixlQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLGtCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFFSCxLQUxMO0FBTUksV0FBTyxFQUFFTyxXQU5iO0FBT0ksZUFBVyxFQUFFRixPQVBqQjtBQVFJLFFBQUksRUFBRTBCLFVBUlY7QUFTSSxpQkFBYSxFQUFFcEIsS0FUbkI7QUFVSSxXQUFPLEVBQUVRO0FBVmIsSUE3SkosZUEwS0ksaURBQUMsd0VBQUQ7QUFDSSxRQUFJLEVBQUVsQixtQkFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCO0FBRUgsS0FMTDtBQU1JLFlBQVEsRUFBRXlCLFdBTmQ7QUFPSSxTQUFLLEVBQUVGLFFBUFg7QUFRSSxXQUFPLEVBQUVsQjtBQVJiLElBMUtKLGVBb0xJLGlEQUFDLHdFQUFEO0FBQ0ksUUFBSSxFQUFFSixtQkFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUFFQyxNQUFBQSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCO0FBQStCLEtBRm5EO0FBR0ksU0FBSyxFQUFFcUIsUUFIWDtBQUlJLGFBQVMsRUFBRVEsV0FKZjtBQUtJLFlBQVEsRUFBRU4sV0FMZDtBQU1JLFNBQUssRUFBRWMsV0FOWDtBQU9JLGdCQUFZLEVBQUVFO0FBUGxCLElBcExKLENBREo7QUErTEg7Ozs7Ozs7O1VDL2lCRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcbmltcG9ydCBWaWV3QmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9WaWV3QmlkTkZUTW9kYWwnO1xuXG5pbXBvcnQgRG9uYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbCc7XG5pbXBvcnQgQWRkTG90dGVyeU1vZGFsIGZyb20gJ0AvbW9kYWxzL2xvdHRlcnkvQWRkTG90dGVyeU1vZGFsJztcbmltcG9ydCBCdXlMb3R0ZXJ5TW9kYWwgZnJvbSAnQC9tb2RhbHMvbG90dGVyeS9CdXlMb3R0ZXJ5TW9kYWwnO1xuXG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcbiAgICBjb25zdCBzdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb250cmFjdCwgY29udHJhY3RDZWxvLCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG4gICAgY29uc29sZS5sb2coXCJpZCA9PiBcIiwgaWQpO1xuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldERvbmF0ZU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW0FkZExvdHRlcnltb2RhbFNob3csIHNldEFkZExvdHRlcnlNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtCdXlMb3R0ZXJ5bW9kYWxTaG93LCBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKGlkKTtcbiAgICBjb25zdCBbUmVhbEV2ZW50SWQsIHNldFJlYWxFdmVudElkXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWx1c2QsIHNldGdvYWx1c2RdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnb2FsLCBzZXRnb2FsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnQsIHNldGRhdGVsZWZ0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZSwgc2V0ZGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGVsZWZ0QmlkLCBzZXRkYXRlbGVmdEJpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2xvZ28sIHNldGxvZ29dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3NlbGVjdHJlY2lkLCBzZXRzZWxlY3RyZWNpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHRpdGxlLCBzZXRzZWxlY3R0aXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHR5cGUsIHNldHNlbGVjdHR5cGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtFdmVudHdhbGxldCwgc2V0RXZlbnR3YWxsZXRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3NlbGVjdHdhbGxldCwgc2V0c2VsZWN0d2FsbGV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbd2FsbGV0VHlwZSwgc2V0V2FsbGV0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc2VsZWN0YmlkLCBzZXRzZWxlY3RiaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3NlbGVjdHByaWNlLCBzZXRzZWxlY3RwcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbTG90dGVyeU51bWJlciwgc2V0TG90dGVyeU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBib29sVHJ1ZSA9IHRydWU7XG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbVmlld21vZGFsU2hvdywgc2V0Vmlld01vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1NhbWVXYWxsZXQsIHNldFNhbWVXYWxsZXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGxldCBbY3VycmVudFdhbGxldCwgc2V0Q3VycmVudFdhbGxldF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgbGV0IGN1cnJlbnRXYWxsZXQyID0gXCJcIjtcbiAgICBsZXQgY3VycmVudFdhbGxldEJvdWdodCA9IFtdXG5cbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZUJpZChkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcImQgXCIgKyBoLnRvU3RyaW5nKCkgKyBcImggXCIgKyBtLnRvU3RyaW5nKCkgKyBcIm0gXCIgKyBzLnRvU3RyaW5nKCkgKyBcInNcIik7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2RvbmF0aW9uL2F1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydGVkIGNoZWtjaW5nXCIpO1xuICAgICAgICAgICAgbGV0IG5lYXJQcmljZSA9IDA7XG4gICAgICAgICAgICAvL05FQVIgY3VycmVuY3lcbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lfb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgY3VycmVuY3lfb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBuZWFyUHJpY2UgPSBqc29uKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XG5cbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2Vsb1ByaWNlID0gMDtcbiAgICAgICAgICAgIC8vQ0VMTyBjdXJyZW5jeVxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIHZhciBjZWxvQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1jZWxvJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeV9vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2goY2Vsb0N1cnJlbmN5VXJsLCBjdXJyZW5jeV9vcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IGNlbG9QcmljZSA9IGpzb24pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgICAgIGNlbG9QcmljZSA9IGNlbG9QcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcblxuICAgICAgICAgICAgICAgIGNlbG9QcmljZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgICAgICB2YXIgZmluZEV2ZW50cyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5maW5kKGlkLCBhc3luYyBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBzZXRFdmVudElkKHJlY29yZC5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVhbEV2ZW50SWQocmVjb3JkLmdldCgnaWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKHJlY29yZC5nZXQoXCJ0aXRsZVwiKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2V0V2FsbGV0VHlwZShyZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldHNlbGVjdHdhbGxldChyZWNvcmQuZ2V0KCd3YWxsZXQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50d2FsbGV0KHJlY29yZC5nZXQoJ3dhbGxldCcpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZHByaWNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiTkVBUlwiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBuZWFyUHJpY2UpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiQ0VMT1wiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBjZWxvUHJpY2UpKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRnb2FsdXNkKHVzZHByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Z29hbChOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnQoTGVmdERhdGUocmVjb3JkLmdldChcImVuZERhdGVcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0ZGF0ZShyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGxvZ28ocmVjb3JkLmdldChcImxvZ29saW5rXCIpKTtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZCk7XG5cbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cbiAgICAgICAgICAgIGxldCBldmVudHMgPSBhd2FpdCBmaW5kRXZlbnRzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHJpZXZlZCcsIGV2ZW50cyk7XG4gICAgICAgICAgICB2YXIgZmluZE5GVHMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICcke051bWJlcihhd2FpdCBmaW5kRXZlbnRzLmdldCgnaWQnKSl9JylgLFxuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IDEwIHJlY29yZHMgaW4gR3JpZCB2aWV3OlxuICAgICAgICAgICAgICAgICAgICBtYXhSZWNvcmRzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogW3sgZmllbGQ6IFwicHJpY2VcIiwgZGlyZWN0aW9uOiBcImRlc2NcIiB9XSxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpciA9IDA7IGlyIDwgcmVjb3Jkcy5sZW5ndGg7IGlyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSByZWNvcmRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2MgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ0eXBlXCIpID09IFwiTkVBUlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFdhbGxldCh3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhbWVXYWxsZXQod2FsbGV0QWNjb3VudC5fYXV0aERhdGEuYWNjb3VudElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2FsbGV0MiA9IHdhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjID0gKHdhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC5nZXQoXCJ0eXBlXCIpID09IFwiQ0VMT1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFdhbGxldCh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2FsbGV0MiA9IHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjYyA9IHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3M7O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNib3VnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJpc2JvdWdodFwiKS5pbmNsdWRlcyhjdXJyZW50QWNjKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2JvdWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIG5lYXJQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjSWQ6IHJlY29yZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZDogcmVjb3JkLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZ2V0KFwiZGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlkcHJpY2U6IGdvYWxQcmljZTJ1c2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcihyZWNvcmQuZ2V0KFwicHJpY2VcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlY29yZC5nZXQoXCJ0eXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZWNvcmQuZ2V0KFwiaW1hZ2VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG90dGVyeTogcmVjb3JkLmdldChcImxvdHRlcnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNib3VnaHQ6IGlzYm91Z2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldG51bWJlcjogcmVjb3JkLmdldChcInRpY2tldG51bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcldhbGxldDogcmVjb3JkLmdldChcIm93bmVyV2FsbGV0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG5yZXNvbHZlKGFycik7XG5cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTs7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IGZpbmRORlRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcblxuICAgIH0sIFtdKTtcblxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICB9LCAxMDAwKTtcblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVZpZXdCaWRNb2RhbChlKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3R0aXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSk7XG5cbiAgICAgICAgc2V0Vmlld01vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZE5GVE1vZGFsKGUpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGJpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJoaWdoZXN0YmlkXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0YmlkKTtcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGR0b0xvdHRlcnkoZSkge1xuXG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIEJ1eUxvdHRlcnkoZSkge1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RwcmljZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwcmljZVwiKSk7XG4gICAgICAgIHNldHNlbGVjdHdhbGxldChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ3YWxsZXRcIikpO1xuICAgICAgICBzZXRMb3R0ZXJ5TnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpY2tldG51bWJlclwiKSk7XG4gICAgICAgIHNldEJ1eUxvdHRlcnlNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwoZSkge1xuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xuXG4gICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIFRvcGJ1dHRvbigpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MnB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4J1xuICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9naW4/Wy9kb25hdGlvbl1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICczNHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwidXNlclwiKSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMjVweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5Eb25hdGUgTkZUPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9sb3R0ZXJ5P1ske1JlYWxFdmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIGxvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8PlxuXG4gICAgICAgICAgICA8TmF2TGluayB0bz17YC9sb3R0ZXJ5P1ske1JlYWxFdmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzgwcHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+R28gdG8gbG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC8+KVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXVjdGlvbkltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0dhcDogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzcwcHgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+e3RpdGxlfTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+R29hbDogPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+JCB7Z29hbHVzZH0gKHtnb2FsfSB7d2FsbGV0VHlwZX0pPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBuYW1lPSdkYXRlbGVmdCcgZGF0ZT17ZGF0ZX0+e2RhdGVsZWZ0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BidXR0b24gLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IEVsZW1lbnRzQ29udGFpbmVyIGJnV2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50eXBlID09IFwiQ3J5cHRvcHVua1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlIHBpeGVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiAnMnZ3JyB9fSA+e2xpc3RJdGVtLm5hbWV9PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDIxMSAxODcgNTEpXCIsIGZvbnRTaXplOiAnMS43dncnIH19PlR5cGU6IE5GVDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDIxMSAxODcgNTEpXCIsIGZvbnRTaXplOiAnMS43dncnIH19PntsaXN0SXRlbS5kZXNjcmlwdGlvbn08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRWxlbWVudEJvdHRvbUNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMjE2cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5sb3R0ZXJ5ICE9IFwidHJ1ZVwiID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5DdXJyZW50IGJpZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlLnRvRml4ZWQoMil9ICh7bGlzdEl0ZW0ucHJpY2V9IHt3YWxsZXRUeXBlfSk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gbmFtZT1cImRhdGVcIiBkYXRlPXtkYXRlfSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj57ZGF0ZWxlZnRCaWR9PC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPlRpY2tldCBwcmljZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlLnRvRml4ZWQoMil9ICh7bGlzdEl0ZW0ucHJpY2V9IHt3YWxsZXRUeXBlfSk8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZHNidXR0b24nPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0ubG90dGVyeSAhPSBcInRydWVcIiA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJ1c2VyXCIpID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTY4cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPlZpZXc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzE2OHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FjdGl2YXRlQmlkTkZUTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+QmlkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PjwvPil9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwibWFuYWdlclwiKSAmJiAoc2VsZWN0d2FsbGV0ID09IGN1cnJlbnRXYWxsZXQpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiBvbkNsaWNrPXthZGR0b0xvdHRlcnl9PkFkZCB0byBMb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogKDw+PC8+KSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoKGxpc3RJdGVtLmlzYm91Z2h0ID09IHRydWUpID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiID5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjUxcHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aWNrZXRudW1iZXI9e2xpc3RJdGVtLnRpY2tldG51bWJlcn0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gb25DbGljaz17QnV5TG90dGVyeX0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiA+QnV5IGxvdHRlcnkgdGlja2V0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRva2VuSWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcz17c2VsZWN0d2FsbGV0fVxuICAgICAgICAgICAgICAgIGV2ZW50SWQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgUmVhbEV2ZW50SWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgICAgIEhpZ2hlc3RiaWQ9e3NlbGVjdGJpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIGdvYWw9e2dvYWx9XG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0Q2Vsbz17Y29udHJhY3RDZWxvfVxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XG5cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxWaWV3QmlkTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtWaWV3bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3TW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3R0aXRsZX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxEb25hdGVORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgRXZlbnRJRD17UmVhbEV2ZW50SWR9XG4gICAgICAgICAgICAgICAgRXZlbnRlUmVjSUQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0dHlwZX1cbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBlbmRkYXRlPXtkYXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEFkZExvdHRlcnlNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0FkZExvdHRlcnltb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFkZExvdHRlcnlNb2RhbFNob3coZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuZnRyZWNpZD17c2VsZWN0cmVjaWR9XG4gICAgICAgICAgICAgICAgbmZ0aWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIGV2ZW50aWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXlMb3R0ZXJ5TW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtCdXlMb3R0ZXJ5bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93KGZhbHNlKSB9fVxuICAgICAgICAgICAgICAgIG5mdGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBUb0FkZHJlc3M9e0V2ZW50d2FsbGV0fVxuICAgICAgICAgICAgICAgIG5mdHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICBwcmljZT17c2VsZWN0cHJpY2V9XG4gICAgICAgICAgICAgICAgdGlja2V0bnVtYmVyPXtMb3R0ZXJ5TnVtYmVyfVxuICAgICAgICAgICAgLz48Lz5cbiAgICApO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImM3NTQ1N2ZhNGI0MTVlZmE1ZDljXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJ0b2FzdCIsIm5lYXJBUEkiLCJSb3V0ZXIiLCJCaWRORlRNb2RhbCIsIlZpZXdCaWRORlRNb2RhbCIsIkRvbmF0ZU5GVE1vZGFsIiwiQWRkTG90dGVyeU1vZGFsIiwiQnV5TG90dGVyeU1vZGFsIiwidXNlQ29udHJhY3QiLCJBdWN0aW9uIiwicmVnZXgiLCJzdHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm0iLCJpZCIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImNvbnRyYWN0IiwiY29udHJhY3RDZWxvIiwic2lnbmVyQWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJDcmVhdGVtb2RhbFNob3ciLCJzZXREb25hdGVNb2RhbFNob3ciLCJBZGRMb3R0ZXJ5bW9kYWxTaG93Iiwic2V0QWRkTG90dGVyeU1vZGFsU2hvdyIsIkJ1eUxvdHRlcnltb2RhbFNob3ciLCJzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93IiwiZXZlbnRJZCIsInNldEV2ZW50SWQiLCJSZWFsRXZlbnRJZCIsInNldFJlYWxFdmVudElkIiwibGlzdCIsInNldExpc3QiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJnb2FsIiwic2V0Z29hbCIsImRhdGVsZWZ0Iiwic2V0ZGF0ZWxlZnQiLCJkYXRlIiwic2V0ZGF0ZSIsImRhdGVsZWZ0QmlkIiwic2V0ZGF0ZWxlZnRCaWQiLCJsb2dvIiwic2V0bG9nbyIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3RyZWNpZCIsInNldHNlbGVjdHJlY2lkIiwic2VsZWN0dGl0bGUiLCJzZXRzZWxlY3R0aXRsZSIsInNlbGVjdHR5cGUiLCJzZXRzZWxlY3R0eXBlIiwiRXZlbnR3YWxsZXQiLCJzZXRFdmVudHdhbGxldCIsInNlbGVjdHdhbGxldCIsInNldHNlbGVjdHdhbGxldCIsIndhbGxldFR5cGUiLCJzZXRXYWxsZXRUeXBlIiwic2VsZWN0YmlkIiwic2V0c2VsZWN0YmlkIiwic2VsZWN0cHJpY2UiLCJzZXRzZWxlY3RwcmljZSIsIkxvdHRlcnlOdW1iZXIiLCJzZXRMb3R0ZXJ5TnVtYmVyIiwiYm9vbFRydWUiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJWaWV3bW9kYWxTaG93Iiwic2V0Vmlld01vZGFsU2hvdyIsIlNhbWVXYWxsZXQiLCJzZXRTYW1lV2FsbGV0IiwiY3VycmVudFdhbGxldCIsInNldEN1cnJlbnRXYWxsZXQiLCJjdXJyZW50V2FsbGV0MiIsImN1cnJlbnRXYWxsZXRCb3VnaHQiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJEYXRlIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwicyIsInRvU3RyaW5nIiwiTGVmdERhdGVCaWQiLCJBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEiLCJwYXRobmFtZSIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsImN1cnJlbmN5X29wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsImNlbG9QcmljZSIsImNlbG9DdXJyZW5jeVVybCIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsImdldElkIiwiZ2V0IiwidXNkcHJpY2UiLCJmb3JtYXQiLCJOdW1iZXIiLCJlIiwiZXZlbnRzIiwiZmluZE5GVHMiLCJmaWVsZCIsImRpcmVjdGlvbiIsImZpbHRlckJ5Rm9ybXVsYSIsIm1heFJlY29yZHMiLCJzb3J0IiwidmlldyIsInNlbGVjdCIsImVhY2hQYWdlIiwicGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiYXJyIiwiaXIiLCJsZW5ndGgiLCJjdXJyZW50QWNjIiwid2FsbGV0QWNjb3VudCIsIl9hdXRoRGF0YSIsImFjY291bnRJZCIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwiaXNib3VnaHQiLCJnb2FsUHJpY2UydXNkIiwicHVzaCIsInJlY0lkIiwiSWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJCaWRwcmljZSIsInR5cGUiLCJpbWFnZSIsImxvdHRlcnkiLCJ0aWNrZXRudW1iZXIiLCJvd25lcldhbGxldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRvbmUiLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWN0aXZhdGVWaWV3QmlkTW9kYWwiLCJ0YXJnZXQiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiYWRkdG9Mb3R0ZXJ5IiwiQnV5TG90dGVyeSIsImFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwiLCJUb3BidXR0b24iLCJjb2xvciIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImN1cnNvciIsImhlaWdodCIsIndpZHRoIiwiZmxvYXQiLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJnYXAiLCJwb3NpdGlvbiIsInJpZ2h0IiwibWFyZ2luIiwiZm9udFNpemUiLCJyb3dHYXAiLCJsaXN0SXRlbSIsIm1heFdpZHRoIiwidG9GaXhlZCIsIndhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=