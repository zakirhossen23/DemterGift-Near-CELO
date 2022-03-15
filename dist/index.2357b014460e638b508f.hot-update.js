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

  var selectwallet2 = "";

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

  var currentWallet2 = "";
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
                _context6.next = 43;
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
                                      selectwallet2 = record.get('wallet');
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

                                    case 21:
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
                          return events.get('id');

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
                              var record = records[ir];
                              var currentAcc = "";
                              var goalPrice2usd = 0;

                              if (record.get("type") == "NEAR") {
                                goalPrice2usd = Number(Number(record.get("price")) * nearPrice);
                                currentWallet2 = walletAccount._authData.accountId;
                                currentAcc = walletAccount._authData.accountId;
                              } else if (record.get("type") == "CELO") {
                                goalPrice2usd = Number(Number(record.get("price")) * celoPrice);
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

              if (currentWallet2.toUpperCase() == selectwallet2.toUpperCase()) {
                setSameWallet(true);
              } else {
                setSameWallet(false);
              }

            case 43:
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
    }, "Bid")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null), window.localStorage.getItem("Type") == "manager" && SameWallet == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", {
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
/******/ 	__webpack_require__.h = function() { return "918761e14c5eb55eada8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjIzNTdiMDE0NDYwZTYzOGI1MDhmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ2UsU0FBU2EsT0FBVCxHQUFtQjtBQUM5QixNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUE1QjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR0wsS0FBSyxDQUFDTyxJQUFOLENBQVdOLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlJLENBQUMsQ0FBQ0csS0FBRixLQUFZUixLQUFLLENBQUNTLFNBQXRCLEVBQWlDO0FBQzdCVCxNQUFBQSxLQUFLLENBQUNTLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBRUQscUJBQWtEUCxrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRWSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlIsRUFBdEI7O0FBQ0Esa0JBQThDbkIsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQUE7QUFBQSxNQUFPNEIsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQXNEN0IsK0NBQVEsQ0FBQyxLQUFELENBQTlEO0FBQUE7QUFBQSxNQUFPOEIsbUJBQVA7QUFBQSxNQUE0QkMsc0JBQTVCOztBQUNBLG1CQUFzRC9CLCtDQUFRLENBQUMsS0FBRCxDQUE5RDtBQUFBO0FBQUEsTUFBT2dDLG1CQUFQO0FBQUEsTUFBNEJDLHNCQUE1Qjs7QUFFQSxtQkFBOEJqQywrQ0FBUSxDQUFDbUIsRUFBRCxDQUF0QztBQUFBO0FBQUEsTUFBT2UsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBc0NuQywrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU9vQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLG9CQUF3QnJDLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBO0FBQUEsTUFBT3NDLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLG9CQUEwQnZDLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBO0FBQUEsTUFBT3dDLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG9CQUE4QnpDLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBO0FBQUEsTUFBTzBDLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0Esb0JBQXdCM0MsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUE7QUFBQSxNQUFPNEMsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0Esb0JBQWdDN0MsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPOEMsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxvQkFBd0IvQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9nRCxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxvQkFBc0NqRCwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU9rRCxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG9CQUF3Qm5ELCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBO0FBQUEsTUFBT29ELElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG9CQUFnQ3JELCtDQUFRLENBQUMsQ0FBRCxDQUF4QztBQUFBO0FBQUEsTUFBT3NELFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0Esb0JBQXNDdkQsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPd0QsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxvQkFBc0N6RCwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU8wRCxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG9CQUFvQzNELCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBO0FBQUEsTUFBTzRELFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0Esb0JBQXNDN0QsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPOEQsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxNQUFJQyxhQUFhLEdBQUcsRUFBcEI7O0FBQ0Esb0JBQXdDaEUsK0NBQVEsQ0FBQyxFQUFELENBQWhEO0FBQUE7QUFBQSxNQUFPaUUsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxvQkFBb0NsRSwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQTtBQUFBLE1BQU9tRSxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG9CQUFrQ3BFLCtDQUFRLENBQUMsQ0FBRCxDQUExQztBQUFBO0FBQUEsTUFBT3FFLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0Esb0JBQXNDdEUsK0NBQVEsQ0FBQyxDQUFELENBQTlDO0FBQUE7QUFBQSxNQUFPdUUsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxvQkFBMEN4RSwrQ0FBUSxDQUFDLENBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU95RSxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBakI7O0FBQ0Esb0JBQWtDM0UsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPNEUsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxvQkFBMEM3RSwrQ0FBUSxDQUFDLEtBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQU84RSxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxvQkFBb0MvRSwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFBQTtBQUFBLE1BQU9nRixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLE1BQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUVBLE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDN0NDLElBQUFBLHFCQUFxQixFQUFFLENBRHNCO0FBRTdDQyxJQUFBQSxxQkFBcUIsRUFBRTtBQUZzQixHQUEvQixDQUFsQjs7QUFLQSxXQUFTQyxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUN4QixRQUFJQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixDQUFTRixRQUFULEVBQW1CRyxPQUFuQixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLElBQUlGLElBQUosR0FBV0MsT0FBWCxFQUFSO0FBQ0EsUUFBSUUsQ0FBQyxHQUFHSixDQUFDLEdBQUdHLENBQVo7QUFDQSxRQUFJRSxFQUFFLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFaLENBQVQ7QUFDQSxRQUFJSSxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFGLElBQStCLE9BQU8sRUFBUCxHQUFZLEVBQTNDLENBQVgsQ0FBUjtBQUNBLFFBQUk1RSxDQUFDLEdBQUc4RSxJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQWhCLENBQUYsSUFBMEIsT0FBTyxFQUFqQyxDQUFYLENBQVI7QUFDQSxRQUFJSyxDQUFDLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFYLENBQUYsR0FBb0IsSUFBL0IsQ0FBUjtBQUNBLFdBQVFDLEVBQUUsQ0FBQ0ssUUFBSCxLQUFnQixRQUFoQixHQUEyQkYsQ0FBQyxDQUFDRSxRQUFGLEVBQTNCLEdBQTBDLFNBQTFDLEdBQXNEbEYsQ0FBQyxDQUFDa0YsUUFBRixFQUF0RCxHQUFxRSxXQUFyRSxHQUFtRkQsQ0FBQyxDQUFDQyxRQUFGLEVBQW5GLEdBQWtHLFVBQTFHO0FBQ0g7O0FBQ0QsV0FBU0MsV0FBVCxDQUFxQlosUUFBckIsRUFBK0I7QUFDM0IsUUFBSUMsQ0FBQyxHQUFHLElBQUlDLElBQUosQ0FBU0YsUUFBVCxFQUFtQkcsT0FBbkIsRUFBUjtBQUNBLFFBQUlDLENBQUMsR0FBRyxJQUFJRixJQUFKLEdBQVdDLE9BQVgsRUFBUjtBQUNBLFFBQUlFLENBQUMsR0FBR0osQ0FBQyxHQUFHRyxDQUFaO0FBQ0EsUUFBSUUsRUFBRSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBWixDQUFUO0FBQ0EsUUFBSUksQ0FBQyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBRixJQUErQixPQUFPLEVBQVAsR0FBWSxFQUEzQyxDQUFYLENBQVI7QUFDQSxRQUFJNUUsQ0FBQyxHQUFHOEUsSUFBSSxDQUFDQyxLQUFMLENBQVlILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFGLElBQTBCLE9BQU8sRUFBakMsQ0FBWCxDQUFSO0FBQ0EsUUFBSUssQ0FBQyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBWCxDQUFGLEdBQW9CLElBQS9CLENBQVI7QUFDQSxXQUFRQyxFQUFFLENBQUNLLFFBQUgsS0FBZ0IsSUFBaEIsR0FBdUJGLENBQUMsQ0FBQ0UsUUFBRixFQUF2QixHQUFzQyxJQUF0QyxHQUE2Q2xGLENBQUMsQ0FBQ2tGLFFBQUYsRUFBN0MsR0FBNEQsSUFBNUQsR0FBbUVELENBQUMsQ0FBQ0MsUUFBRixFQUFuRSxHQUFrRixHQUExRjtBQUNIOztBQXhFNkIsV0EwRWZFLHdCQTFFZTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5TkEwRTlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDUW5GLEVBQUUsSUFBSUosTUFBTSxDQUFDQyxRQUFQLENBQWdCdUYsUUFBaEIsSUFBNEIsbUJBRDFDO0FBQUE7QUFBQTtBQUFBOztBQUVRN0UsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDSTZFLGNBQUFBLFNBSFosR0FHd0IsQ0FIeEIsRUFJUTs7QUFKUjtBQU9nQkMsY0FBQUEsZUFQaEIsR0FPa0Msc0pBUGxDO0FBUWtCQyxjQUFBQSxnQkFSbEIsR0FRcUM7QUFDckJDLGdCQUFBQSxNQUFNLEVBQUUsS0FEYTtBQUVyQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUNMLGtDQUFnQixrQkFEWDtBQUVMQyxrQkFBQUEsTUFBTSxFQUFFO0FBRkg7QUFGWSxlQVJyQztBQUFBO0FBQUEscUJBZWtCQyxLQUFLLENBQUNMLGVBQUQsRUFBa0JDLGdCQUFsQixDQUFMLENBQXlDSyxJQUF6QyxDQUE4QyxVQUFBQyxHQUFHO0FBQUEsdUJBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsZUFBakQsRUFDREYsSUFEQyxDQUNJLFVBQUFFLElBQUk7QUFBQSx1QkFBSVQsU0FBUyxHQUFHUyxJQUFoQjtBQUFBLGVBRFIsRUFFREMsS0FGQyxDQUVLLFVBQUFDLEdBQUc7QUFBQSx1QkFBSXpGLE9BQU8sQ0FBQzBGLEtBQVIsQ0FBYyxXQUFXRCxHQUF6QixDQUFKO0FBQUEsZUFGUixDQWZsQjs7QUFBQTtBQWtCWVgsY0FBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNhLElBQVYsQ0FBZUMsV0FBZixDQUEyQixDQUEzQixFQUE4QkMsS0FBMUM7QUFsQlo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFxQlk3RixjQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFFQTZFLGNBQUFBLFNBQVMsR0FBRyxDQUFaOztBQXZCWjtBQTBCWWdCLGNBQUFBLFNBMUJaLEdBMEJ3QixDQTFCeEIsRUEyQlE7O0FBM0JSO0FBOEJnQkMsY0FBQUEsZUE5QmhCLEdBOEJrQyw2SUE5QmxDO0FBK0JrQmYsY0FBQUEsaUJBL0JsQixHQStCcUM7QUFDckJDLGdCQUFBQSxNQUFNLEVBQUUsS0FEYTtBQUVyQkMsZ0JBQUFBLE9BQU8sRUFBRTtBQUNMLGtDQUFnQixrQkFEWDtBQUVMQyxrQkFBQUEsTUFBTSxFQUFFO0FBRkg7QUFGWSxlQS9CckM7QUFBQTtBQUFBLHFCQXNDa0JDLEtBQUssQ0FBQ1csZUFBRCxFQUFrQmYsaUJBQWxCLENBQUwsQ0FBeUNLLElBQXpDLENBQThDLFVBQUFDLEdBQUc7QUFBQSx1QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxlQUFqRCxFQUNERixJQURDLENBQ0ksVUFBQUUsSUFBSTtBQUFBLHVCQUFJTyxTQUFTLEdBQUdQLElBQWhCO0FBQUEsZUFEUixFQUVEQyxLQUZDLENBRUssVUFBQUMsR0FBRztBQUFBLHVCQUFJekYsT0FBTyxDQUFDMEYsS0FBUixDQUFjLFdBQVdELEdBQXpCLENBQUo7QUFBQSxlQUZSLENBdENsQjs7QUFBQTtBQXlDWUssY0FBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNILElBQVYsQ0FBZUMsV0FBZixDQUEyQixDQUEzQixFQUE4QkMsS0FBMUM7QUF6Q1o7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE0Q1k3RixjQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFFQTZGLGNBQUFBLFNBQVMsR0FBRyxDQUFaOztBQTlDWjtBQWlEWUUsY0FBQUEsUUFqRFosR0FpRHVCQyxtQkFBTyxDQUFDLHlEQUFELENBakQ5QjtBQWtEWUMsY0FBQUEsSUFsRFosR0FrRG1CLElBQUlGLFFBQUosQ0FBYTtBQUFFRyxnQkFBQUEsTUFBTSxFQUFFO0FBQVYsZUFBYixFQUE4Q0QsSUFBOUMsQ0FBbUQsbUJBQW5ELENBbERuQjtBQW9EWUUsY0FBQUEsVUFwRFosR0FvRHlCLElBQUk7QUFBSixvTkFBWSxrQkFBT0MsT0FBUCxFQUFnQkMsTUFBaEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQ25CLHNHQUFBSixJQUFJLENBQUMsUUFBRCxDQUFKLGlCQUFvQnpHLEVBQXBCO0FBQUEsaU9BQXdCLGlCQUFnQmdHLEdBQWhCLEVBQXFCYyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FDdEJkLEdBRHNCO0FBQUE7QUFBQTtBQUFBOztBQUNmekYsc0NBQUFBLE9BQU8sQ0FBQzBGLEtBQVIsQ0FBY0QsR0FBZDtBQURlOztBQUFBO0FBRTFCaEYsc0NBQUFBLFVBQVUsQ0FBQzhGLE1BQU0sQ0FBQ0MsS0FBUCxFQUFELENBQVY7QUFDQTdGLHNDQUFBQSxjQUFjLENBQUM0RixNQUFNLENBQUNFLEdBQVAsQ0FBVyxJQUFYLENBQUQsQ0FBZDtBQUNBMUYsc0NBQUFBLFFBQVEsQ0FBQ3dGLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE9BQVgsQ0FBRCxDQUFSO0FBSjBCO0FBQUEsNkNBTXBCL0QsYUFBYSxDQUFDNkQsTUFBTSxDQUFDRSxHQUFQLENBQVcsWUFBWCxDQUFELENBTk87O0FBQUE7QUFPMUJqRSxzQ0FBQUEsZUFBZSxDQUFDK0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsUUFBWCxDQUFELENBQWY7QUFDQW5FLHNDQUFBQSxhQUFhLEdBQUdpRSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxRQUFYLENBQWhCO0FBQ0FwRSxzQ0FBQUEsY0FBYyxDQUFDa0UsTUFBTSxDQUFDRSxHQUFQLENBQVcsUUFBWCxDQUFELENBQWQ7QUFDSUMsc0NBQUFBLFFBVnNCLEdBVVgsQ0FWVztBQVcxQiwwQ0FBSUgsTUFBTSxDQUFDRSxHQUFQLENBQVcsWUFBWCxLQUE0QixNQUFoQyxFQUF3Q0MsUUFBUSxHQUFHakQsU0FBUyxDQUFDa0QsTUFBVixDQUFpQkMsTUFBTSxDQUFDQSxNQUFNLENBQUNMLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE1BQVgsQ0FBRCxDQUFOLEdBQTZCM0IsU0FBOUIsQ0FBdkIsQ0FBWDtBQUN4QywwQ0FBSXlCLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFlBQVgsS0FBNEIsTUFBaEMsRUFBd0NDLFFBQVEsR0FBR2pELFNBQVMsQ0FBQ2tELE1BQVYsQ0FBaUJDLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDTCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxNQUFYLENBQUQsQ0FBTixHQUE2QlgsU0FBOUIsQ0FBdkIsQ0FBWDtBQUV4QzdFLHNDQUFBQSxVQUFVLENBQUN5RixRQUFELENBQVY7QUFDQXZGLHNDQUFBQSxPQUFPLENBQUN5RixNQUFNLENBQUNMLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE1BQVgsQ0FBRCxDQUFQLENBQVA7QUFDQXBGLHNDQUFBQSxXQUFXLENBQUN5QyxRQUFRLENBQUN5QyxNQUFNLENBQUNFLEdBQVAsQ0FBVyxTQUFYLENBQUQsQ0FBVCxDQUFYO0FBQ0FsRixzQ0FBQUEsT0FBTyxDQUFDZ0YsTUFBTSxDQUFDRSxHQUFQLENBQVcsU0FBWCxDQUFELENBQVA7QUFDQWhGLHNDQUFBQSxjQUFjLENBQUNrRCxXQUFXLENBQUM0QixNQUFNLENBQUNFLEdBQVAsQ0FBVyxTQUFYLENBQUQsQ0FBWixDQUFkO0FBQ0E5RSxzQ0FBQUEsT0FBTyxDQUFDNEUsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBWCxDQUFELENBQVA7QUFFQUosc0NBQUFBLE9BQU8sQ0FBQ0UsTUFBRCxDQUFQOztBQXJCMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXVCSGxCLElBdkJHLENBdUJFLFVBQUF3QixDQUFDLEVBQUk7QUFBRSxtQ0FBT0EsQ0FBUDtBQUFVLDJCQXZCbkIsQ0FEbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMEJkeEIsSUExQmMsQ0EwQlQsVUFBQXdCLENBQUMsRUFBSTtBQUFFLHVCQUFPQSxDQUFQO0FBQVUsZUExQlIsQ0FwRHpCO0FBQUE7QUFBQSxxQkFnRjJCVCxVQWhGM0I7O0FBQUE7QUFnRllVLGNBQUFBLE1BaEZaO0FBaUZROUcsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QjZHLE1BQXpCO0FBQ0lDLGNBQUFBLFFBbEZaLEdBa0Z1QixJQUFJO0FBQUoscU5BQVksa0JBQU9WLE9BQVAsRUFBZ0JDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FFakJKLElBQUksQ0FBQyxNQUFELENBRmE7QUFBQTtBQUFBLHlDQUdlVSxNQUhmO0FBQUE7QUFBQSxpQ0FHNEJFLE1BQU0sQ0FBQ0wsR0FBUCxDQUFXLElBQVgsQ0FINUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FNYixDQUFDO0FBQUVPLDRCQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsNEJBQUFBLFNBQVMsRUFBRTtBQUE3QiwyQkFBRCxDQU5hO0FBQUE7QUFHbkJDLDRCQUFBQSxlQUhtQjtBQUtuQkMsNEJBQUFBLFVBTG1CLEVBS1AsRUFMTztBQU1uQkMsNEJBQUFBLElBTm1CO0FBT25CQyw0QkFBQUEsSUFQbUIsRUFPYjtBQVBhO0FBQUE7QUFBQSw4Q0FFSkMsTUFGSSxrQ0FRcEJDLFFBUm9CLENBUVgsU0FBU0MsSUFBVCxDQUFjQyxPQUFkLEVBQXVCQyxhQUF2QixFQUFzQztBQUM5QztBQUNBLGdDQUFJQyxHQUFHLEdBQUcsRUFBVjs7QUFFQSxpQ0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHSCxPQUFPLENBQUNJLE1BQTlCLEVBQXNDRCxFQUFFLEVBQXhDLEVBQTRDO0FBQ3hDLGtDQUFJckIsTUFBTSxHQUFHa0IsT0FBTyxDQUFDRyxFQUFELENBQXBCO0FBQ0Esa0NBQUlFLFVBQVUsR0FBRyxFQUFqQjtBQUNBLGtDQUFJQyxhQUFhLEdBQUcsQ0FBcEI7O0FBQ0Esa0NBQUl4QixNQUFNLENBQUNFLEdBQVAsQ0FBVyxNQUFYLEtBQXNCLE1BQTFCLEVBQWtDO0FBQzlCc0IsZ0NBQUFBLGFBQWEsR0FBR25CLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDTCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxPQUFYLENBQUQsQ0FBTixHQUE4QjNCLFNBQS9CLENBQXRCO0FBQ0F0QixnQ0FBQUEsY0FBYyxHQUFHd0UsYUFBYSxDQUFDQyxTQUFkLENBQXdCQyxTQUF6QztBQUNBSixnQ0FBQUEsVUFBVSxHQUFJRSxhQUFhLENBQUNDLFNBQWQsQ0FBd0JDLFNBQXRDO0FBQ0gsK0JBSkQsTUFJTyxJQUFJM0IsTUFBTSxDQUFDRSxHQUFQLENBQVcsTUFBWCxLQUFzQixNQUExQixFQUFrQztBQUNyQ3NCLGdDQUFBQSxhQUFhLEdBQUduQixNQUFNLENBQUNBLE1BQU0sQ0FBQ0wsTUFBTSxDQUFDRSxHQUFQLENBQVcsT0FBWCxDQUFELENBQU4sR0FBOEJYLFNBQS9CLENBQXRCO0FBQ0F0QyxnQ0FBQUEsY0FBYyxHQUFHbkUsTUFBTSxDQUFDOEksUUFBUCxDQUFnQkMsZUFBakM7QUFDQU4sZ0NBQUFBLFVBQVUsR0FBR3pJLE1BQU0sQ0FBQzhJLFFBQVAsQ0FBZ0JDLGVBQTdCO0FBQTZDO0FBQ2hEOztBQUVELGtDQUFJQyxRQUFRLEdBQUcsS0FBZjs7QUFDQSxrQ0FBSTtBQUFBOztBQUNBLG9DQUFJLDJHQUFBOUIsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBWCxtQkFBZ0NxQixVQUFoQyxDQUFKLEVBQWlEO0FBQzdDTyxrQ0FBQUEsUUFBUSxHQUFHLElBQVg7QUFDSDtBQUNKLCtCQUpELENBSUUsZ0JBQU0sQ0FBRzs7QUFFWFYsOEJBQUFBLEdBQUcsQ0FBQ1csSUFBSixDQUFTO0FBQ0xDLGdDQUFBQSxLQUFLLEVBQUVoQyxNQUFNLENBQUM5RyxFQURUO0FBRUwrSSxnQ0FBQUEsRUFBRSxFQUFFakMsTUFBTSxDQUFDRSxHQUFQLENBQVcsSUFBWCxDQUZDO0FBR0xnQyxnQ0FBQUEsSUFBSSxFQUFFbEMsTUFBTSxDQUFDRSxHQUFQLENBQVcsTUFBWCxDQUhEO0FBSUxpQyxnQ0FBQUEsV0FBVyxFQUFFbkMsTUFBTSxDQUFDRSxHQUFQLENBQVcsYUFBWCxDQUpSO0FBS0xrQyxnQ0FBQUEsUUFBUSxFQUFFWixhQUxMO0FBTUxsQyxnQ0FBQUEsS0FBSyxFQUFFZSxNQUFNLENBQUNMLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE9BQVgsQ0FBRCxDQU5SO0FBT0xtQyxnQ0FBQUEsSUFBSSxFQUFFckMsTUFBTSxDQUFDRSxHQUFQLENBQVcsTUFBWCxDQVBEO0FBUUxvQyxnQ0FBQUEsS0FBSyxFQUFFdEMsTUFBTSxDQUFDRSxHQUFQLENBQVcsT0FBWCxDQVJGO0FBU0xxQyxnQ0FBQUEsT0FBTyxFQUFFdkMsTUFBTSxDQUFDRSxHQUFQLENBQVcsU0FBWCxDQVRKO0FBVUw0QixnQ0FBQUEsUUFBUSxFQUFFQSxRQVZMO0FBV0xVLGdDQUFBQSxZQUFZLEVBQUV4QyxNQUFNLENBQUNFLEdBQVAsQ0FBVyxjQUFYLENBWFQ7QUFZTHVDLGdDQUFBQSxXQUFXLEVBQUV6QyxNQUFNLENBQUNFLEdBQVAsQ0FBVyxhQUFYO0FBWlIsK0JBQVQ7QUFjSDs7QUFFRDVGLDRCQUFBQSxPQUFPLENBQUM4RyxHQUFELENBQVA7QUFDQSxnQ0FBSXNCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFKLEVBQ0lELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0MsS0FBbkMsR0FBMkMsY0FBM0M7QUFDSjlDLDRCQUFBQSxPQUFPLENBQUNzQixHQUFELENBQVA7QUFFSCwyQkF0RHNCLEVBc0RwQixTQUFTeUIsSUFBVCxDQUFjM0QsR0FBZCxFQUFtQjtBQUNsQixnQ0FBSUEsR0FBSixFQUFTO0FBQUV6Riw4QkFBQUEsT0FBTyxDQUFDMEYsS0FBUixDQUFjRCxHQUFkO0FBQW9CO0FBQVM7QUFDM0MsMkJBeERzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEwRFpKLElBMURZLENBMERQLFVBQUF3QixDQUFDLEVBQUk7QUFBRSx1QkFBT0EsQ0FBUDtBQUFVLGVBMURWLENBbEZ2QjtBQTRJbUM7QUE1SW5DLDZCQThJUTdHLE9BOUlSO0FBQUE7QUFBQSxxQkE4STBCK0csUUE5STFCOztBQUFBO0FBQUE7O0FBQUEsMkJBOElnQjlHLEdBOUloQjs7QUFnSlEsa0JBQUl1RCxjQUFjLENBQUM2RixXQUFmLE1BQWdDL0csYUFBYSxDQUFDK0csV0FBZCxFQUFwQyxFQUFnRTtBQUM1RDlGLGdCQUFBQSxhQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0gsZUFGRCxNQUVLO0FBQ0RBLGdCQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0g7O0FBcEpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMUU4QjtBQUFBO0FBQUE7O0FBa085QmhGLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNacUcsSUFBQUEsd0JBQXdCO0FBRTNCLEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQTBFLEVBQUFBLFdBQVcsQ0FBQyxZQUFZO0FBQ3BCQyxJQUFBQSxpQkFBaUI7QUFDcEIsR0FGVSxFQUVSLElBRlEsQ0FBWDs7QUFLQSxXQUFTQSxpQkFBVCxHQUE2QjtBQUN6QixRQUFLbEssTUFBTSxDQUFDbUssWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsRUFBdkMsSUFBNkNwSyxNQUFNLENBQUNtSyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QixLQUF1QyxJQUF6RixFQUFnRztBQUM1RjlLLE1BQUFBLHlEQUFBLENBQVksb0JBQVo7QUFDSDs7QUFDRCxRQUFJO0FBQ0EsVUFBSStLLFFBQVEsR0FBR1QsUUFBUSxDQUFDVSxpQkFBVCxDQUEyQixVQUEzQixDQUFmOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsUUFBUSxDQUFDN0IsTUFBN0IsRUFBcUMrQixDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFlBQUl0SSxJQUFJLEdBQUlvSSxRQUFRLENBQUNFLENBQUQsQ0FBVCxDQUFjQyxZQUFkLENBQTJCLE1BQTNCLENBQVg7QUFDQUgsUUFBQUEsUUFBUSxDQUFDRSxDQUFELENBQVIsQ0FBWUUsU0FBWixHQUF3QmhHLFFBQVEsQ0FBQ3hDLElBQUQsQ0FBaEM7QUFDSDs7QUFDRCxVQUFJb0ksUUFBUSxHQUFHVCxRQUFRLENBQUNVLGlCQUFULENBQTJCLE1BQTNCLENBQWY7O0FBQ0EsV0FBSyxJQUFJQyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHRixRQUFRLENBQUM3QixNQUE3QixFQUFxQytCLEVBQUMsRUFBdEMsRUFBMEM7QUFDdEMsWUFBSXRJLElBQUksR0FBSW9JLFFBQVEsQ0FBQ0UsRUFBRCxDQUFULENBQWNDLFlBQWQsQ0FBMkIsTUFBM0IsQ0FBWDs7QUFDQUgsUUFBQUEsUUFBUSxDQUFDRSxFQUFELENBQVIsQ0FBWUUsU0FBWixHQUF3Qm5GLFdBQVcsQ0FBQ3JELElBQUQsQ0FBbkM7QUFDSDtBQUNKLEtBWEQsQ0FXRSxPQUFPb0UsS0FBUCxFQUFjLENBQUc7QUFDdEI7O0FBRUQsV0FBU3FFLG9CQUFULENBQThCbEQsQ0FBOUIsRUFBaUM7QUFDN0IsUUFBS3hILE1BQU0sQ0FBQ21LLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEtBQXVDLEVBQXZDLElBQTZDcEssTUFBTSxDQUFDbUssWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsSUFBekYsRUFBZ0c7QUFDNUY5SyxNQUFBQSx5REFBQSxDQUFZLG9CQUFaO0FBQ0g7O0FBRURvRCxJQUFBQSxjQUFjLENBQUM4RSxDQUFDLENBQUNtRCxNQUFGLENBQVNILFlBQVQsQ0FBc0IsT0FBdEIsQ0FBRCxDQUFkO0FBQ0FoSSxJQUFBQSxXQUFXLENBQUNnRixDQUFDLENBQUNtRCxNQUFGLENBQVNILFlBQVQsQ0FBc0IsU0FBdEIsQ0FBRCxDQUFYO0FBQ0E1SCxJQUFBQSxjQUFjLENBQUM0RSxDQUFDLENBQUNtRCxNQUFGLENBQVNILFlBQVQsQ0FBc0IsT0FBdEIsQ0FBRCxDQUFkO0FBRUF4RyxJQUFBQSxnQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0g7O0FBRUQsV0FBUzRHLG1CQUFULENBQTZCcEQsQ0FBN0IsRUFBZ0M7QUFDNUIsUUFBS3hILE1BQU0sQ0FBQ21LLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEtBQXVDLEVBQXZDLElBQTZDcEssTUFBTSxDQUFDbUssWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsSUFBekYsRUFBZ0c7QUFDNUY5SyxNQUFBQSx5REFBQSxDQUFZLG9CQUFaO0FBQ0g7O0FBRURvRCxJQUFBQSxjQUFjLENBQUM4RSxDQUFDLENBQUNtRCxNQUFGLENBQVNILFlBQVQsQ0FBc0IsT0FBdEIsQ0FBRCxDQUFkO0FBQ0FoSSxJQUFBQSxXQUFXLENBQUNnRixDQUFDLENBQUNtRCxNQUFGLENBQVNILFlBQVQsQ0FBc0IsU0FBdEIsQ0FBRCxDQUFYO0FBQ0FqSCxJQUFBQSxZQUFZLENBQUNpRSxDQUFDLENBQUNtRCxNQUFGLENBQVNILFlBQVQsQ0FBc0IsWUFBdEIsQ0FBRCxDQUFaO0FBQ0E3SixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTBDLFNBQVo7QUFDQVIsSUFBQUEsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBZ0IsSUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUNELFdBQVMrRyxZQUFULENBQXNCckQsQ0FBdEIsRUFBeUI7QUFFckIsUUFBS3hILE1BQU0sQ0FBQ21LLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEtBQXVDLEVBQXZDLElBQTZDcEssTUFBTSxDQUFDbUssWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsSUFBekYsRUFBZ0c7QUFDNUY5SyxNQUFBQSx5REFBQSxDQUFZLG9CQUFaO0FBQ0g7O0FBRURrRCxJQUFBQSxXQUFXLENBQUNnRixDQUFDLENBQUNtRCxNQUFGLENBQVNILFlBQVQsQ0FBc0IsU0FBdEIsQ0FBRCxDQUFYO0FBQ0E5SCxJQUFBQSxjQUFjLENBQUM4RSxDQUFDLENBQUNtRCxNQUFGLENBQVNILFlBQVQsQ0FBc0IsT0FBdEIsQ0FBRCxDQUFkO0FBQ0F4SixJQUFBQSxzQkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBQ0g7O0FBL1I2QixXQWlTZjhKLFVBalNlO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJNQWlTOUIsa0JBQTBCdEQsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJaEYsY0FBQUEsV0FBVyxDQUFDZ0YsQ0FBQyxDQUFDbUQsTUFBRixDQUFTSCxZQUFULENBQXNCLFNBQXRCLENBQUQsQ0FBWDtBQUNBOUgsY0FBQUEsY0FBYyxDQUFDOEUsQ0FBQyxDQUFDbUQsTUFBRixDQUFTSCxZQUFULENBQXNCLE9BQXRCLENBQUQsQ0FBZDtBQUNBL0csY0FBQUEsY0FBYyxDQUFDK0QsQ0FBQyxDQUFDbUQsTUFBRixDQUFTSCxZQUFULENBQXNCLE9BQXRCLENBQUQsQ0FBZDtBQUNBckgsY0FBQUEsZUFBZSxDQUFDcUUsQ0FBQyxDQUFDbUQsTUFBRixDQUFTSCxZQUFULENBQXNCLFFBQXRCLENBQUQsQ0FBZjtBQUNBN0csY0FBQUEsZ0JBQWdCLENBQUM2RCxDQUFDLENBQUNtRCxNQUFGLENBQVNILFlBQVQsQ0FBc0IsY0FBdEIsQ0FBRCxDQUFoQjtBQUNBdEosY0FBQUEsc0JBQXNCLENBQUMsSUFBRCxDQUF0Qjs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpTOEI7QUFBQTtBQUFBOztBQXlTOUIsV0FBUzZKLHNCQUFULENBQWdDdkQsQ0FBaEMsRUFBbUM7QUFDL0IxRSxJQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBRUFoQyxJQUFBQSxrQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0g7O0FBR0QsV0FBU2tLLFNBQVQsR0FBcUI7QUFDakIsUUFBS2hMLE1BQU0sQ0FBQ21LLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEtBQXVDLEVBQXZDLElBQTZDcEssTUFBTSxDQUFDbUssWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsSUFBekYsRUFBZ0c7QUFDNUYsMEJBQVEsaUhBQ0o7QUFBSyxhQUFLLEVBQUU7QUFDUmEsVUFBQUEsS0FBSyxFQUFFLE9BREM7QUFFUkMsVUFBQUEsUUFBUSxFQUFFLFFBRkY7QUFHUkMsVUFBQUEsVUFBVSxFQUFFLGtCQUhKO0FBSVJDLFVBQUFBLFNBQVMsRUFBRSxRQUpIO0FBS1JDLFVBQUFBLE1BQU0sRUFBRSxTQUxBO0FBTVJDLFVBQUFBLE1BQU0sRUFBRSxNQU5BO0FBT1JDLFVBQUFBLEtBQUssRUFBRSxPQVBDO0FBUVJDLFVBQUFBLEtBQUssRUFBRSxPQVJDO0FBU1JDLFVBQUFBLE9BQU8sRUFBRTtBQVREO0FBQVosc0JBV0ksaURBQUMsc0RBQUQ7QUFBUyxVQUFFLEVBQUM7QUFBWixzQkFDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUEyQixhQUFLLEVBQUU7QUFBRUgsVUFBQUEsTUFBTSxFQUFFLE1BQVY7QUFBa0JJLFVBQUFBLFVBQVUsRUFBRTtBQUE5QjtBQUFsQyxpQkFESixDQVhKLENBREksQ0FBUjtBQW9CSDs7QUFDRCxRQUFLMUwsTUFBTSxDQUFDbUssWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsS0FBdUMsTUFBNUMsRUFBcUQ7QUFDakQsMEJBQVEsaUhBQ0o7QUFBSyxhQUFLLEVBQUU7QUFBRXVCLFVBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxVQUFBQSxHQUFHLEVBQUUsTUFBeEI7QUFBZ0NDLFVBQUFBLFFBQVEsRUFBRSxVQUExQztBQUFzREMsVUFBQUEsS0FBSyxFQUFFO0FBQTdEO0FBQVosc0JBQ0k7QUFBSyxlQUFPLEVBQUVmLHNCQUFkO0FBQXNDLGlCQUFTLEVBQUMsTUFBaEQ7QUFBdUQsYUFBSyxFQUFFO0FBQUVFLFVBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxVQUFBQSxRQUFRLEVBQUUsUUFBNUI7QUFBc0NDLFVBQUFBLFVBQVUsRUFBRSxrQkFBbEQ7QUFBc0VDLFVBQUFBLFNBQVMsRUFBRSxRQUFqRjtBQUEyRkcsVUFBQUEsS0FBSyxFQUFFLE9BQWxHO0FBQTJHRixVQUFBQSxNQUFNLEVBQUUsU0FBbkg7QUFBOEhDLFVBQUFBLE1BQU0sRUFBRSxNQUF0STtBQUE4SVMsVUFBQUEsTUFBTSxFQUFFLEdBQXRKO0FBQTJKTixVQUFBQSxPQUFPLEVBQUU7QUFBcEs7QUFBOUQsc0JBQ0k7QUFBSyxlQUFPLEVBQUVWLHNCQUFkO0FBQXNDLGlCQUFTLEVBQUMsV0FBaEQ7QUFBNEQsYUFBSyxFQUFFO0FBQUVPLFVBQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCSSxVQUFBQSxVQUFVLEVBQUUsTUFBOUI7QUFBc0NNLFVBQUFBLFFBQVEsRUFBRTtBQUFoRDtBQUFuRSxzQkFESixDQURKLENBREksZUFRSixpREFBQyxzREFBRDtBQUFTLFVBQUUsc0JBQWUzSyxXQUFmO0FBQVgsc0JBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBRXNLLFVBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxVQUFBQSxHQUFHLEVBQUUsTUFBeEI7QUFBZ0NDLFVBQUFBLFFBQVEsRUFBRSxVQUExQztBQUFzREMsVUFBQUEsS0FBSyxFQUFFO0FBQTdEO0FBQVosc0JBQ0k7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBc0IsYUFBSyxFQUFFO0FBQUViLFVBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxVQUFBQSxRQUFRLEVBQUUsUUFBNUI7QUFBc0NDLFVBQUFBLFVBQVUsRUFBRSxrQkFBbEQ7QUFBc0VDLFVBQUFBLFNBQVMsRUFBRSxRQUFqRjtBQUEyRkcsVUFBQUEsS0FBSyxFQUFFLE9BQWxHO0FBQTJHRixVQUFBQSxNQUFNLEVBQUUsU0FBbkg7QUFBOEhDLFVBQUFBLE1BQU0sRUFBRSxNQUF0STtBQUE4SVMsVUFBQUEsTUFBTSxFQUFFLEdBQXRKO0FBQTJKTixVQUFBQSxPQUFPLEVBQUU7QUFBcEs7QUFBN0Isc0JBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBMkIsYUFBSyxFQUFFO0FBQUVILFVBQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCSSxVQUFBQSxVQUFVLEVBQUUsTUFBOUI7QUFBc0NNLFVBQUFBLFFBQVEsRUFBRTtBQUFoRDtBQUFsQyx5QkFESixDQURKLENBREosQ0FSSSxDQUFSO0FBZ0JIOztBQUNELHdCQUFRLGlIQUVKLGlEQUFDLHNEQUFEO0FBQVMsUUFBRSxzQkFBZTNLLFdBQWY7QUFBWCxvQkFDSTtBQUFLLFdBQUssRUFBRTtBQUFFc0ssUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLFFBQUFBLEdBQUcsRUFBRSxNQUF4QjtBQUFnQ0MsUUFBQUEsUUFBUSxFQUFFLFVBQTFDO0FBQXNEQyxRQUFBQSxLQUFLLEVBQUU7QUFBN0Q7QUFBWixvQkFDSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQXNCLFdBQUssRUFBRTtBQUFFYixRQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsUUFBQUEsUUFBUSxFQUFFLFFBQTVCO0FBQXNDQyxRQUFBQSxVQUFVLEVBQUUsa0JBQWxEO0FBQXNFQyxRQUFBQSxTQUFTLEVBQUUsUUFBakY7QUFBMkZHLFFBQUFBLEtBQUssRUFBRSxPQUFsRztBQUEyR0YsUUFBQUEsTUFBTSxFQUFFLFNBQW5IO0FBQThIQyxRQUFBQSxNQUFNLEVBQUUsTUFBdEk7QUFBOElTLFFBQUFBLE1BQU0sRUFBRSxHQUF0SjtBQUEySk4sUUFBQUEsT0FBTyxFQUFFO0FBQXBLO0FBQTdCLG9CQUNJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBSyxFQUFFO0FBQUVILFFBQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCSSxRQUFBQSxVQUFVLEVBQUUsTUFBOUI7QUFBc0NNLFFBQUFBLFFBQVEsRUFBRTtBQUFoRDtBQUFsQyx1QkFESixDQURKLENBREosQ0FGSSxDQUFSO0FBV0g7O0FBRUQsc0JBQ0ksaUhBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLFNBQUssRUFBRTtBQUNSTCxNQUFBQSxPQUFPLEVBQUUsTUFERDtBQUVSSixNQUFBQSxLQUFLLEVBQUUsTUFGQztBQUdSTSxNQUFBQSxRQUFRLEVBQUU7QUFIRjtBQUFaLGtCQUtJO0FBQUssT0FBRyxFQUFFeEosSUFBVjtBQUFnQixhQUFTLEVBQUM7QUFBMUIsSUFMSixlQU1JO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQWtDLFNBQUssRUFBRTtBQUNyQzRKLE1BQUFBLE1BQU0sRUFBRSxNQUQ2QjtBQUVyQ1AsTUFBQUEsVUFBVSxFQUFFO0FBRnlCO0FBQXpDLGtCQUlJO0FBQUksU0FBSyxFQUFFO0FBQ1BNLE1BQUFBLFFBQVEsRUFBRTtBQURIO0FBQVgsS0FFS3ZLLEtBRkwsQ0FKSixlQVFJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSSxTQUFLLEVBQUU7QUFDUHVLLE1BQUFBLFFBQVEsRUFBRTtBQURIO0FBQVgsY0FESixlQUlJO0FBQUksU0FBSyxFQUFFO0FBQ1BBLE1BQUFBLFFBQVEsRUFBRTtBQURIO0FBQVgsV0FFTXJLLE9BRk4sUUFFaUJFLElBRmpCLE9BRXdCdUIsVUFGeEIsTUFKSixDQVJKLGVBZ0JJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSSxTQUFLLEVBQUU7QUFDUDRJLE1BQUFBLFFBQVEsRUFBRTtBQURILEtBQVg7QUFFRyxRQUFJLEVBQUMsVUFGUjtBQUVtQixRQUFJLEVBQUUvSjtBQUZ6QixLQUVnQ0YsUUFGaEMsQ0FESixDQWhCSixDQU5KLGVBNEJJLGlEQUFDLFNBQUQsT0E1QkosQ0FESixDQURKLGVBa0NJO0FBQUssTUFBRSxFQUFDLFNBQVI7QUFBa0IsYUFBUyxFQUFDO0FBQTVCLGtCQUNJLDBFQURKLENBbENKLEVBcUNLLDBGQUFBUixJQUFJLE1BQUosQ0FBQUEsSUFBSSxFQUFLLFVBQUMySyxRQUFEO0FBQUEsd0JBQ047QUFBSyxTQUFHLEVBQUVBLFFBQVEsQ0FBQy9DLEVBQW5CO0FBQXVCLGVBQVMsRUFBQztBQUFqQyxvQkFDSTtBQUFLLFdBQUssRUFBRTtBQUNSb0MsUUFBQUEsS0FBSyxFQUFFLE1BREM7QUFFUkksUUFBQUEsT0FBTyxFQUFFO0FBRkQ7QUFBWixPQUlLTyxRQUFRLENBQUMzQyxJQUFULElBQWlCLFlBQWpCLGdCQUNHO0FBQUssU0FBRyxFQUFFMkMsUUFBUSxDQUFDMUMsS0FBbkI7QUFBMEIsZUFBUyxFQUFDO0FBQXBDLE1BREgsZ0JBR0c7QUFBSyxTQUFHLEVBQUUwQyxRQUFRLENBQUMxQyxLQUFuQjtBQUEwQixlQUFTLEVBQUM7QUFBcEMsTUFQUixlQVVJO0FBQUssV0FBSyxFQUFFO0FBQUUrQixRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFaLG9CQUNJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQWtDLFdBQUssRUFBRTtBQUFFVSxRQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUF6QyxvQkFDSTtBQUFJLFdBQUssRUFBRTtBQUFFRCxRQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUFYLE9BQWtDRSxRQUFRLENBQUM5QyxJQUEzQyxDQURKLGVBR0k7QUFBSSxXQUFLLEVBQUU7QUFBRTZCLFFBQUFBLEtBQUssRUFBRSxpQkFBVDtBQUE0QmUsUUFBQUEsUUFBUSxFQUFFO0FBQXRDO0FBQVgsbUJBSEosZUFLSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQUksV0FBSyxFQUFFO0FBQUVmLFFBQUFBLEtBQUssRUFBRSxpQkFBVDtBQUE0QmUsUUFBQUEsUUFBUSxFQUFFO0FBQXRDO0FBQVgsT0FBNkRFLFFBQVEsQ0FBQzdDLFdBQXRFLENBREosQ0FMSixDQURKLGVBVUk7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFLLFdBQUssRUFBRTtBQUFFOEMsUUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBWixPQUNLRCxRQUFRLENBQUN6QyxPQUFULElBQW9CLE1BQXBCLGdCQUE4QixpSEFDM0I7QUFBSSxXQUFLLEVBQUU7QUFBRXVDLFFBQUFBLFFBQVEsRUFBRTtBQUFaLE9BQVg7QUFBZ0MsZUFBUyxFQUFDO0FBQTFDLHFCQUQyQixlQUUzQjtBQUFJLFdBQUssRUFBRTtBQUFFQSxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFYO0FBQWtDLGVBQVMsRUFBQztBQUE1QyxhQUEwREUsUUFBUSxDQUFDNUMsUUFBVCxDQUFrQjhDLE9BQWxCLENBQTBCLENBQTFCLENBQTFELFFBQTBGRixRQUFRLENBQUMxRixLQUFuRyxPQUEyR3BELFVBQTNHLE1BRjJCLGVBRzNCO0FBQUksV0FBSyxFQUFFO0FBQUU0SSxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFYO0FBQWdDLFVBQUksRUFBQyxNQUFyQztBQUE0QyxVQUFJLEVBQUUvSixJQUFsRDtBQUF3RCxlQUFTLEVBQUM7QUFBbEUsT0FBK0VFLFdBQS9FLENBSDJCLENBQTlCLGdCQUlPLGlIQUNKO0FBQUksV0FBSyxFQUFFO0FBQUU2SixRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFYO0FBQWdDLGVBQVMsRUFBQztBQUExQyxzQkFESSxlQUVKO0FBQUksV0FBSyxFQUFFO0FBQUVBLFFBQUFBLFFBQVEsRUFBRTtBQUFaLE9BQVg7QUFBa0MsZUFBUyxFQUFDO0FBQTVDLGFBQTBERSxRQUFRLENBQUM1QyxRQUFULENBQWtCOEMsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBMUQsUUFBMEZGLFFBQVEsQ0FBQzFGLEtBQW5HLE9BQTJHcEQsVUFBM0csTUFGSSxDQUxaLENBREosZUFZSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FHSzhJLFFBQVEsQ0FBQ3pDLE9BQVQsSUFBb0IsTUFBcEIsZ0JBQThCLG9HQUN6QnpKLE1BQU0sQ0FBQ21LLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEtBQXVDLE1BQXhDLGdCQUFtRCxpSEFDaEQ7QUFBSyxXQUFLLEVBQUU7QUFBRW1CLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQVo7QUFBZ0MsYUFBTyxFQUFFVyxRQUFRLENBQUMvQyxFQUFsRDtBQUFzRCxXQUFLLEVBQUUrQyxRQUFRLENBQUNoRCxLQUF0RTtBQUE2RSxXQUFLLEVBQUVnRCxRQUFRLENBQUM5QyxJQUE3RjtBQUFtRyxhQUFPLEVBQUVzQixvQkFBNUc7QUFBa0ksZUFBUyxFQUFDO0FBQTVJLG9CQUNJO0FBQUssYUFBTyxFQUFFd0IsUUFBUSxDQUFDL0MsRUFBdkI7QUFBMkIsV0FBSyxFQUFFK0MsUUFBUSxDQUFDaEQsS0FBM0M7QUFBa0QsV0FBSyxFQUFFZ0QsUUFBUSxDQUFDOUMsSUFBbEU7QUFBd0UsZUFBUyxFQUFDO0FBQWxGLG9CQUNJO0FBQUssYUFBTyxFQUFFOEMsUUFBUSxDQUFDL0MsRUFBdkI7QUFBMkIsV0FBSyxFQUFFK0MsUUFBUSxDQUFDaEQsS0FBM0M7QUFBa0QsV0FBSyxFQUFFZ0QsUUFBUSxDQUFDOUMsSUFBbEU7QUFBd0UsZUFBUyxFQUFDO0FBQWxGLGNBREosQ0FESixDQURnRCxlQU1oRDtBQUFLLFdBQUssRUFBRTtBQUFFbUMsUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FBWjtBQUFnQyxhQUFPLEVBQUVXLFFBQVEsQ0FBQy9DLEVBQWxEO0FBQXNELFlBQU0sRUFBRStDLFFBQVEsQ0FBQ0csTUFBdkU7QUFBK0UsV0FBSyxFQUFFSCxRQUFRLENBQUNoRCxLQUEvRjtBQUFzRyxnQkFBVSxFQUFFZ0QsUUFBUSxDQUFDMUYsS0FBM0g7QUFBa0ksZUFBUyxFQUFFM0UsSUFBN0k7QUFBbUosZUFBUyxFQUFDLGtCQUE3SjtBQUFnTCxhQUFPLEVBQUUrSTtBQUF6TCxvQkFDSTtBQUFLLGFBQU8sRUFBRXNCLFFBQVEsQ0FBQy9DLEVBQXZCO0FBQTJCLFlBQU0sRUFBRStDLFFBQVEsQ0FBQ0csTUFBNUM7QUFBb0QsV0FBSyxFQUFFSCxRQUFRLENBQUNoRCxLQUFwRTtBQUEyRSxnQkFBVSxFQUFFZ0QsUUFBUSxDQUFDMUYsS0FBaEc7QUFBdUcsZUFBUyxFQUFDO0FBQWpILG9CQUNJO0FBQUssYUFBTyxFQUFFMEYsUUFBUSxDQUFDL0MsRUFBdkI7QUFBMkIsWUFBTSxFQUFFK0MsUUFBUSxDQUFDRyxNQUE1QztBQUFvRCxXQUFLLEVBQUVILFFBQVEsQ0FBQ2hELEtBQXBFO0FBQTJFLGdCQUFVLEVBQUVnRCxRQUFRLENBQUMxRixLQUFoRztBQUF1RyxlQUFTLEVBQUM7QUFBakgsYUFESixDQURKLENBTmdELENBQW5ELGdCQVdPLG1HQVptQixFQWV4QnhHLE1BQU0sQ0FBQ21LLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLEtBQXVDLFNBQXhDLElBQXNEbkcsVUFBVSxJQUFJLElBQXBFLGdCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVzSCxRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUFaO0FBQWdDLGFBQU8sRUFBRVcsUUFBUSxDQUFDL0MsRUFBbEQ7QUFBc0QsWUFBTSxFQUFFK0MsUUFBUSxDQUFDRyxNQUF2RTtBQUErRSxXQUFLLEVBQUVILFFBQVEsQ0FBQ2hELEtBQS9GO0FBQXNHLGdCQUFVLEVBQUVnRCxRQUFRLENBQUMxRixLQUEzSDtBQUFrSSxlQUFTLEVBQUUzRSxJQUE3STtBQUFtSixlQUFTLEVBQUMsa0JBQTdKO0FBQWdMLGFBQU8sRUFBRWdKO0FBQXpMLG9CQUNJO0FBQUssYUFBTyxFQUFFcUIsUUFBUSxDQUFDL0MsRUFBdkI7QUFBMkIsWUFBTSxFQUFFK0MsUUFBUSxDQUFDRyxNQUE1QztBQUFvRCxXQUFLLEVBQUVILFFBQVEsQ0FBQ2hELEtBQXBFO0FBQTJFLGdCQUFVLEVBQUVnRCxRQUFRLENBQUMxRixLQUFoRztBQUF1RyxlQUFTLEVBQUMsdUJBQWpIO0FBQXlJLGFBQU8sRUFBRXFFO0FBQWxKLG9CQUNJO0FBQUssYUFBTyxFQUFFcUIsUUFBUSxDQUFDL0MsRUFBdkI7QUFBMkIsWUFBTSxFQUFFK0MsUUFBUSxDQUFDRyxNQUE1QztBQUFvRCxXQUFLLEVBQUVILFFBQVEsQ0FBQ2hELEtBQXBFO0FBQTJFLGdCQUFVLEVBQUVnRCxRQUFRLENBQUMxRixLQUFoRztBQUF1RyxlQUFTLEVBQUMseUJBQWpIO0FBQTJJLGFBQU8sRUFBRXFFO0FBQXBKLHdCQURKLENBREosQ0FERixnQkFLYSxtR0FwQlksQ0FBOUIsR0F3QktxQixRQUFRLENBQUNsRCxRQUFULElBQXFCLElBQXRCLGdCQUErQixpSEFDaEMsaURBQUMsc0RBQUQ7QUFBUyxRQUFFLHNCQUFlM0gsV0FBZjtBQUFYLG9CQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVrSyxRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUFaO0FBQWdDLGFBQU8sRUFBRVcsUUFBUSxDQUFDL0MsRUFBbEQ7QUFBc0QsWUFBTSxFQUFFK0MsUUFBUSxDQUFDRyxNQUF2RTtBQUErRSxXQUFLLEVBQUVILFFBQVEsQ0FBQ2hELEtBQS9GO0FBQXNHLFdBQUssRUFBRWdELFFBQVEsQ0FBQzFGLEtBQXRIO0FBQTZILGVBQVMsRUFBRTNFLElBQXhJO0FBQThJLGVBQVMsRUFBQztBQUF4SixvQkFDSTtBQUFLLGFBQU8sRUFBRXFLLFFBQVEsQ0FBQy9DLEVBQXZCO0FBQTJCLFlBQU0sRUFBRStDLFFBQVEsQ0FBQ0csTUFBNUM7QUFBb0QsV0FBSyxFQUFFSCxRQUFRLENBQUNoRCxLQUFwRTtBQUEyRSxXQUFLLEVBQUVnRCxRQUFRLENBQUMxRixLQUEzRjtBQUFrRyxlQUFTLEVBQUM7QUFBNUcsb0JBQ0k7QUFBSyxhQUFPLEVBQUUwRixRQUFRLENBQUMvQyxFQUF2QjtBQUEyQixZQUFNLEVBQUUrQyxRQUFRLENBQUNHLE1BQTVDO0FBQW9ELFdBQUssRUFBRUgsUUFBUSxDQUFDaEQsS0FBcEU7QUFBMkUsV0FBSyxFQUFFZ0QsUUFBUSxDQUFDMUYsS0FBM0Y7QUFBa0csZUFBUyxFQUFDO0FBQTVHLHVCQURKLENBREosQ0FESixDQURnQyxDQUEvQixnQkFTRyxpSEFDSjtBQUFLLFdBQUssRUFBRTtBQUFFK0UsUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FBWjtBQUFnQyxhQUFPLEVBQUVXLFFBQVEsQ0FBQy9DLEVBQWxEO0FBQXNELFlBQU0sRUFBRStDLFFBQVEsQ0FBQ0csTUFBdkU7QUFBK0UsV0FBSyxFQUFFSCxRQUFRLENBQUNoRCxLQUEvRjtBQUFzRyxrQkFBWSxFQUFFZ0QsUUFBUSxDQUFDeEMsWUFBN0g7QUFBMkksV0FBSyxFQUFFd0MsUUFBUSxDQUFDMUYsS0FBM0o7QUFBa0ssZUFBUyxFQUFFM0UsSUFBN0s7QUFBbUwsaUJBQVcsRUFBRXFLLFFBQVEsQ0FBQ3ZDLFdBQXpNO0FBQXNOLGFBQU8sRUFBRW1CLFVBQS9OO0FBQTJPLGVBQVMsRUFBQztBQUFyUCxvQkFDSTtBQUFLLGFBQU8sRUFBRW9CLFFBQVEsQ0FBQy9DLEVBQXZCO0FBQTJCLFlBQU0sRUFBRStDLFFBQVEsQ0FBQ0csTUFBNUM7QUFBb0QsV0FBSyxFQUFFSCxRQUFRLENBQUNoRCxLQUFwRTtBQUEyRSxXQUFLLEVBQUVnRCxRQUFRLENBQUMxRixLQUEzRjtBQUFrRyxrQkFBWSxFQUFFMEYsUUFBUSxDQUFDeEMsWUFBekg7QUFBdUksaUJBQVcsRUFBRXdDLFFBQVEsQ0FBQ3ZDLFdBQTdKO0FBQTBLLGVBQVMsRUFBQztBQUFwTCxvQkFDSTtBQUFLLGFBQU8sRUFBRXVDLFFBQVEsQ0FBQy9DLEVBQXZCO0FBQTJCLFlBQU0sRUFBRStDLFFBQVEsQ0FBQ0csTUFBNUM7QUFBb0QsV0FBSyxFQUFFSCxRQUFRLENBQUNoRCxLQUFwRTtBQUEyRSxXQUFLLEVBQUVnRCxRQUFRLENBQUMxRixLQUEzRjtBQUFrRyxrQkFBWSxFQUFFMEYsUUFBUSxDQUFDeEMsWUFBekg7QUFBdUksaUJBQVcsRUFBRXdDLFFBQVEsQ0FBQ3ZDLFdBQTdKO0FBQTBLLGVBQVMsRUFBQztBQUFwTCw0QkFESixDQURKLENBREksQ0FwQ1osQ0FESixDQVpKLENBVkosQ0FWSixDQURKLENBRE07QUFBQSxHQUFMLENBckNULGVBNEhJLGlEQUFDLGtGQUFEO0FBQ0ksUUFBSSxFQUFFOUYsU0FEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0F5QixNQUFBQSx3QkFBd0I7QUFDM0IsS0FMTDtBQU1JLFdBQU8sRUFBRWhELFFBTmI7QUFPSSxTQUFLLEVBQUVFLFdBUFg7QUFRSSxRQUFJLEVBQUVJLFVBUlY7QUFTSSxhQUFTLEVBQUVLLFlBVGY7QUFVSSxXQUFPLEVBQUUvQixPQVZiO0FBV0ksZUFBVyxFQUFFRSxXQVhqQjtBQVlJLGNBQVUsRUFBRWlDLFNBWmhCO0FBYUksY0FBVSxFQUFFRixVQWJoQjtBQWNJLFFBQUksRUFBRXZCLElBZFY7QUFlSSxZQUFRLEVBQUVyQixRQWZkO0FBZ0JJLGdCQUFZLEVBQUVDLFlBaEJsQjtBQWlCSSxpQkFBYSxFQUFFQztBQWpCbkIsSUE1SEosZUFpSkksaURBQUMsc0ZBQUQ7QUFDSSxRQUFJLEVBQUVxRCxhQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLGdCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFFQXVCLE1BQUFBLHdCQUF3QjtBQUMzQixLQU5MO0FBT0ksTUFBRSxFQUFFaEQsUUFQUjtBQVFJLGNBQVUsRUFBRWEsVUFSaEI7QUFTSSxTQUFLLEVBQUVUO0FBVFgsSUFqSkosZUE2SkksaURBQUMscUZBQUQ7QUFDSSxRQUFJLEVBQUU5QixlQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLGtCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFFSCxLQUxMO0FBTUksV0FBTyxFQUFFTyxXQU5iO0FBT0ksZUFBVyxFQUFFRixPQVBqQjtBQVFJLFFBQUksRUFBRTBCLFVBUlY7QUFTSSxpQkFBYSxFQUFFcEIsS0FUbkI7QUFVSSxXQUFPLEVBQUVRO0FBVmIsSUE3SkosZUEwS0ksaURBQUMsd0VBQUQ7QUFDSSxRQUFJLEVBQUVsQixtQkFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCO0FBRUgsS0FMTDtBQU1JLFlBQVEsRUFBRXlCLFdBTmQ7QUFPSSxTQUFLLEVBQUVGLFFBUFg7QUFRSSxXQUFPLEVBQUVsQjtBQVJiLElBMUtKLGVBb0xJLGlEQUFDLHdFQUFEO0FBQ0ksUUFBSSxFQUFFSixtQkFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUFFQyxNQUFBQSxzQkFBc0IsQ0FBQyxLQUFELENBQXRCO0FBQStCLEtBRm5EO0FBR0ksU0FBSyxFQUFFcUIsUUFIWDtBQUlJLGFBQVMsRUFBRVEsV0FKZjtBQUtJLFlBQVEsRUFBRU4sV0FMZDtBQU1JLFNBQUssRUFBRWUsV0FOWDtBQU9JLGdCQUFZLEVBQUVFO0FBUGxCLElBcExKLENBREo7QUErTEg7Ozs7Ozs7O1VDcGpCRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcbmltcG9ydCBWaWV3QmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9WaWV3QmlkTkZUTW9kYWwnO1xuXG5pbXBvcnQgRG9uYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbCc7XG5pbXBvcnQgQWRkTG90dGVyeU1vZGFsIGZyb20gJ0AvbW9kYWxzL2xvdHRlcnkvQWRkTG90dGVyeU1vZGFsJztcbmltcG9ydCBCdXlMb3R0ZXJ5TW9kYWwgZnJvbSAnQC9tb2RhbHMvbG90dGVyeS9CdXlMb3R0ZXJ5TW9kYWwnO1xuXG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWN0aW9uKCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcbiAgICBjb25zdCBzdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuXG4gICAgY29uc3QgeyBjb250cmFjdCwgY29udHJhY3RDZWxvLCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG4gICAgY29uc29sZS5sb2coXCJpZCA9PiBcIiwgaWQpO1xuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldERvbmF0ZU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW0FkZExvdHRlcnltb2RhbFNob3csIHNldEFkZExvdHRlcnlNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtCdXlMb3R0ZXJ5bW9kYWxTaG93LCBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFtldmVudElkLCBzZXRFdmVudElkXSA9IHVzZVN0YXRlKGlkKTtcbiAgICBjb25zdCBbUmVhbEV2ZW50SWQsIHNldFJlYWxFdmVudElkXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWx1c2QsIHNldGdvYWx1c2RdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnb2FsLCBzZXRnb2FsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnQsIHNldGRhdGVsZWZ0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZSwgc2V0ZGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGVsZWZ0QmlkLCBzZXRkYXRlbGVmdEJpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2xvZ28sIHNldGxvZ29dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3RpZCwgc2V0c2VsZWN0aWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3NlbGVjdHJlY2lkLCBzZXRzZWxlY3RyZWNpZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHRpdGxlLCBzZXRzZWxlY3R0aXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdHR5cGUsIHNldHNlbGVjdHR5cGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtFdmVudHdhbGxldCwgc2V0RXZlbnR3YWxsZXRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgbGV0IHNlbGVjdHdhbGxldDIgPSBcIlwiO1xuICAgIGNvbnN0IFtzZWxlY3R3YWxsZXQsIHNldHNlbGVjdHdhbGxldF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3dhbGxldFR5cGUsIHNldFdhbGxldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZWxlY3RwcmljZSwgc2V0c2VsZWN0cHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW0xvdHRlcnlOdW1iZXIsIHNldExvdHRlcnlOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgYm9vbFRydWUgPSB0cnVlO1xuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtTYW1lV2FsbGV0LCBzZXRTYW1lV2FsbGV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBsZXQgY3VycmVudFdhbGxldDIgPSBcIlwiO1xuXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTGVmdERhdGVCaWQoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9kb25hdGlvbi9hdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRlZCBjaGVrY2luZ1wiKTtcbiAgICAgICAgICAgIGxldCBuZWFyUHJpY2UgPSAwO1xuICAgICAgICAgICAgLy9ORUFSIGN1cnJlbmN5XG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5X29wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIGN1cnJlbmN5X29wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gbmVhclByaWNlID0ganNvbilcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG4gICAgICAgICAgICAgICAgbmVhclByaWNlID0gbmVhclByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xuXG4gICAgICAgICAgICAgICAgbmVhclByaWNlID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNlbG9QcmljZSA9IDA7XG4gICAgICAgICAgICAvL0NFTE8gY3VycmVuY3lcbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY2Vsb0N1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9Y2VsbyZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lfb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoKGNlbG9DdXJyZW5jeVVybCwgY3VycmVuY3lfb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBjZWxvUHJpY2UgPSBqc29uKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgICAgICBjZWxvUHJpY2UgPSBjZWxvUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XG5cbiAgICAgICAgICAgICAgICBjZWxvUHJpY2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICAgICAgdmFyIGZpbmRFdmVudHMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRzJykuZmluZChpZCwgYXN5bmMgZnVuY3Rpb24gKGVyciwgcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgc2V0RXZlbnRJZChyZWNvcmQuZ2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFJlYWxFdmVudElkKHJlY29yZC5nZXQoJ2lkJykpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZShyZWNvcmQuZ2V0KFwidGl0bGVcIikpO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNldFdhbGxldFR5cGUocmVjb3JkLmdldChcIndhbGxldHR5cGVcIikpO1xuICAgICAgICAgICAgICAgICAgICBzZXRzZWxlY3R3YWxsZXQocmVjb3JkLmdldCgnd2FsbGV0JykpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3R3YWxsZXQyID0gcmVjb3JkLmdldCgnd2FsbGV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50d2FsbGV0KHJlY29yZC5nZXQoJ3dhbGxldCcpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZHByaWNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiTkVBUlwiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBuZWFyUHJpY2UpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiQ0VMT1wiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBjZWxvUHJpY2UpKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRnb2FsdXNkKHVzZHByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Z29hbChOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnQoTGVmdERhdGUocmVjb3JkLmdldChcImVuZERhdGVcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0ZGF0ZShyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGxvZ28ocmVjb3JkLmdldChcImxvZ29saW5rXCIpKTtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZCk7XG5cbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cbiAgICAgICAgICAgIGxldCBldmVudHMgPSBhd2FpdCBmaW5kRXZlbnRzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHJpZXZlZCcsIGV2ZW50cyk7XG4gICAgICAgICAgICB2YXIgZmluZE5GVHMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICcke051bWJlcihhd2FpdCBldmVudHMuZ2V0KCdpZCcpKX0nKWAsXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdGluZyB0aGUgZmlyc3QgMTAgcmVjb3JkcyBpbiBHcmlkIHZpZXc6XG4gICAgICAgICAgICAgICAgICAgIG1heFJlY29yZHM6IDEwLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJwcmljZVwiLCBkaXJlY3Rpb246IFwiZGVzY1wiIH1dLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGlyID0gMDsgaXIgPCByZWNvcmRzLmxlbmd0aDsgaXIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IHJlY29yZHNbaXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2MgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ0eXBlXCIpID09IFwiTkVBUlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIG5lYXJQcmljZSk7ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFdhbGxldDIgPSB3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjYyA9ICh3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQuZ2V0KFwidHlwZVwiKSA9PSBcIkNFTE9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWxQcmljZTJ1c2QgPSBOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSkgKiBjZWxvUHJpY2UpOyAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFdhbGxldDIgPSB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2MgPSB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzOztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzYm91Z2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZ2V0KFwiaXNib3VnaHRcIikuaW5jbHVkZXMoY3VycmVudEFjYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNib3VnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggeyB9ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNJZDogcmVjb3JkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkOiByZWNvcmQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlY29yZC5nZXQoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWRwcmljZTogZ29hbFByaWNlMnVzZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVjb3JkLmdldChcInR5cGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHJlY29yZC5nZXQoXCJpbWFnZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3R0ZXJ5OiByZWNvcmQuZ2V0KFwibG90dGVyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2JvdWdodDogaXNib3VnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0bnVtYmVyOiByZWNvcmQuZ2V0KFwidGlja2V0bnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyV2FsbGV0OiByZWNvcmQuZ2V0KFwib3duZXJXYWxsZXRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcblxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7O1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBmaW5kTkZUcyk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50V2FsbGV0Mi50b1VwcGVyQ2FzZSgpID09IHNlbGVjdHdhbGxldDIudG9VcHBlckNhc2UoKSl7XG4gICAgICAgICAgICAgICAgc2V0U2FtZVdhbGxldCh0cnVlKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNldFNhbWVXYWxsZXQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgfSwgMTAwMCk7XG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVWaWV3QmlkTW9kYWwoZSkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0dGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikpO1xuXG4gICAgICAgIHNldFZpZXdNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbChlKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RiaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaGlnaGVzdGJpZFwiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGJpZCk7XG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkdG9Mb3R0ZXJ5KGUpIHtcblxuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0QWRkTG90dGVyeU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBCdXlMb3R0ZXJ5KGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0cHJpY2UoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicHJpY2VcIikpO1xuICAgICAgICBzZXRzZWxlY3R3YWxsZXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwid2FsbGV0XCIpKTtcbiAgICAgICAgc2V0TG90dGVyeU51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aWNrZXRudW1iZXJcIikpO1xuICAgICAgICBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93KHRydWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcblxuICAgICAgICBzZXREb25hdGVNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBUb3BidXR0b24oKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzJweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzBweCdcbiAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svZG9uYXRpb25dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMzRweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcInVzZXJcIikpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzI1cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+RG9uYXRlIE5GVDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvbG90dGVyeT9bJHtSZWFsRXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMjA4cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPD5cblxuICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvbG90dGVyeT9bJHtSZWFsRXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICc4MHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIGxvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvPilcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBFdmVudENvbnRhaW5lclwiID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dHYXA6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICc3MHB4J1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gPnt0aXRsZX08L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkdvYWw6IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiQge2dvYWx1c2R9ICh7Z29hbH0ge3dhbGxldFR5cGV9KTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gbmFtZT0nZGF0ZWxlZnQnIGRhdGU9e2RhdGV9PntkYXRlbGVmdH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VG9wYnV0dG9uIC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uSWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0udHlwZSA9PSBcIkNyeXB0b3B1bmtcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZSBwaXhlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogXCI1cHhcIiB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogJzJ2dycgfX0gPntsaXN0SXRlbS5uYW1lfTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMTEgMTg3IDUxKVwiLCBmb250U2l6ZTogJzEuN3Z3JyB9fT5UeXBlOiBORlQ8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMTEgMTg3IDUxKVwiLCBmb250U2l6ZTogJzEuN3Z3JyB9fT57bGlzdEl0ZW0uZGVzY3JpcHRpb259PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0VsZW1lbnRCb3R0b21Db250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIxNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0ubG90dGVyeSAhPSBcInRydWVcIiA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+Q3VycmVudCBiaWQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fSBjbGFzc05hbWU9J2JpZHByaWNlJz4kIHtsaXN0SXRlbS5CaWRwcmljZS50b0ZpeGVkKDIpfSAoe2xpc3RJdGVtLnByaWNlfSB7d2FsbGV0VHlwZX0pPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDcgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IG5hbWU9XCJkYXRlXCIgZGF0ZT17ZGF0ZX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+e2RhdGVsZWZ0QmlkfTwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5UaWNrZXQgcHJpY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fSBjbGFzc05hbWU9J2JpZHByaWNlJz4kIHtsaXN0SXRlbS5CaWRwcmljZS50b0ZpeGVkKDIpfSAoe2xpc3RJdGVtLnByaWNlfSB7d2FsbGV0VHlwZX0pPC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRBbGxjb250YWluZXInID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRzYnV0dG9uJz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmxvdHRlcnkgIT0gXCJ0cnVlXCIgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwidXNlclwiKSA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzE2OHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gb25DbGljaz17YWN0aXZhdGVWaWV3QmlkTW9kYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5WaWV3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxNjhweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPkJpZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoPD48Lz4pfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSA9PSBcIm1hbmFnZXJcIikgJiYgU2FtZVdhbGxldCA9PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiBvbkNsaWNrPXthZGR0b0xvdHRlcnl9PkFkZCB0byBMb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogKDw+PC8+KSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoKGxpc3RJdGVtLmlzYm91Z2h0ID09IHRydWUpID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiID5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjUxcHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aWNrZXRudW1iZXI9e2xpc3RJdGVtLnRpY2tldG51bWJlcn0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gb25DbGljaz17QnV5TG90dGVyeX0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiA+QnV5IGxvdHRlcnkgdGlja2V0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRva2VuSWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcz17c2VsZWN0d2FsbGV0fVxuICAgICAgICAgICAgICAgIGV2ZW50SWQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgUmVhbEV2ZW50SWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgICAgIEhpZ2hlc3RiaWQ9e3NlbGVjdGJpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIGdvYWw9e2dvYWx9XG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0Q2Vsbz17Y29udHJhY3RDZWxvfVxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XG5cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxWaWV3QmlkTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtWaWV3bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3TW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3R0aXRsZX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxEb25hdGVORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgRXZlbnRJRD17UmVhbEV2ZW50SWR9XG4gICAgICAgICAgICAgICAgRXZlbnRlUmVjSUQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0dHlwZX1cbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBlbmRkYXRlPXtkYXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEFkZExvdHRlcnlNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0FkZExvdHRlcnltb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFkZExvdHRlcnlNb2RhbFNob3coZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuZnRyZWNpZD17c2VsZWN0cmVjaWR9XG4gICAgICAgICAgICAgICAgbmZ0aWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIGV2ZW50aWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXlMb3R0ZXJ5TW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtCdXlMb3R0ZXJ5bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93KGZhbHNlKSB9fVxuICAgICAgICAgICAgICAgIG5mdGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBUb0FkZHJlc3M9e0V2ZW50d2FsbGV0fVxuICAgICAgICAgICAgICAgIG5mdHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICBwcmljZT17c2VsZWN0cHJpY2V9XG4gICAgICAgICAgICAgICAgdGlja2V0bnVtYmVyPXtMb3R0ZXJ5TnVtYmVyfVxuICAgICAgICAgICAgLz48Lz5cbiAgICApO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjkxODc2MWUxNGM1ZWI1NWVhZGE4XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJ0b2FzdCIsIm5lYXJBUEkiLCJSb3V0ZXIiLCJCaWRORlRNb2RhbCIsIlZpZXdCaWRORlRNb2RhbCIsIkRvbmF0ZU5GVE1vZGFsIiwiQWRkTG90dGVyeU1vZGFsIiwiQnV5TG90dGVyeU1vZGFsIiwidXNlQ29udHJhY3QiLCJBdWN0aW9uIiwicmVnZXgiLCJzdHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm0iLCJpZCIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImNvbnRyYWN0IiwiY29udHJhY3RDZWxvIiwic2lnbmVyQWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJDcmVhdGVtb2RhbFNob3ciLCJzZXREb25hdGVNb2RhbFNob3ciLCJBZGRMb3R0ZXJ5bW9kYWxTaG93Iiwic2V0QWRkTG90dGVyeU1vZGFsU2hvdyIsIkJ1eUxvdHRlcnltb2RhbFNob3ciLCJzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93IiwiZXZlbnRJZCIsInNldEV2ZW50SWQiLCJSZWFsRXZlbnRJZCIsInNldFJlYWxFdmVudElkIiwibGlzdCIsInNldExpc3QiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJnb2FsIiwic2V0Z29hbCIsImRhdGVsZWZ0Iiwic2V0ZGF0ZWxlZnQiLCJkYXRlIiwic2V0ZGF0ZSIsImRhdGVsZWZ0QmlkIiwic2V0ZGF0ZWxlZnRCaWQiLCJsb2dvIiwic2V0bG9nbyIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3RyZWNpZCIsInNldHNlbGVjdHJlY2lkIiwic2VsZWN0dGl0bGUiLCJzZXRzZWxlY3R0aXRsZSIsInNlbGVjdHR5cGUiLCJzZXRzZWxlY3R0eXBlIiwiRXZlbnR3YWxsZXQiLCJzZXRFdmVudHdhbGxldCIsInNlbGVjdHdhbGxldDIiLCJzZWxlY3R3YWxsZXQiLCJzZXRzZWxlY3R3YWxsZXQiLCJ3YWxsZXRUeXBlIiwic2V0V2FsbGV0VHlwZSIsInNlbGVjdGJpZCIsInNldHNlbGVjdGJpZCIsInNlbGVjdHByaWNlIiwic2V0c2VsZWN0cHJpY2UiLCJMb3R0ZXJ5TnVtYmVyIiwic2V0TG90dGVyeU51bWJlciIsImJvb2xUcnVlIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiVmlld21vZGFsU2hvdyIsInNldFZpZXdNb2RhbFNob3ciLCJTYW1lV2FsbGV0Iiwic2V0U2FtZVdhbGxldCIsImN1cnJlbnRXYWxsZXQyIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiRGF0ZSIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsInMiLCJ0b1N0cmluZyIsIkxlZnREYXRlQmlkIiwiQXVjdGlvbmZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJuZWFyUHJpY2UiLCJuZWFyQ3VycmVuY3lVcmwiLCJjdXJyZW5jeV9vcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImVycm9yIiwiZGF0YSIsIm1hcmtldFBhaXJzIiwicHJpY2UiLCJjZWxvUHJpY2UiLCJjZWxvQ3VycmVuY3lVcmwiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJiYXNlIiwiYXBpS2V5IiwiZmluZEV2ZW50cyIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJnZXRJZCIsImdldCIsInVzZHByaWNlIiwiZm9ybWF0IiwiTnVtYmVyIiwiZSIsImV2ZW50cyIsImZpbmRORlRzIiwiZmllbGQiLCJkaXJlY3Rpb24iLCJmaWx0ZXJCeUZvcm11bGEiLCJtYXhSZWNvcmRzIiwic29ydCIsInZpZXciLCJzZWxlY3QiLCJlYWNoUGFnZSIsInBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImFyciIsImlyIiwibGVuZ3RoIiwiY3VycmVudEFjYyIsImdvYWxQcmljZTJ1c2QiLCJ3YWxsZXRBY2NvdW50IiwiX2F1dGhEYXRhIiwiYWNjb3VudElkIiwiZXRoZXJldW0iLCJzZWxlY3RlZEFkZHJlc3MiLCJpc2JvdWdodCIsInB1c2giLCJyZWNJZCIsIklkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiQmlkcHJpY2UiLCJ0eXBlIiwiaW1hZ2UiLCJsb3R0ZXJ5IiwidGlja2V0bnVtYmVyIiwib3duZXJXYWxsZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkb25lIiwidG9VcHBlckNhc2UiLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWN0aXZhdGVWaWV3QmlkTW9kYWwiLCJ0YXJnZXQiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiYWRkdG9Mb3R0ZXJ5IiwiQnV5TG90dGVyeSIsImFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwiLCJUb3BidXR0b24iLCJjb2xvciIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImN1cnNvciIsImhlaWdodCIsIndpZHRoIiwiZmxvYXQiLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJnYXAiLCJwb3NpdGlvbiIsInJpZ2h0IiwibWFyZ2luIiwiZm9udFNpemUiLCJyb3dHYXAiLCJsaXN0SXRlbSIsIm1heFdpZHRoIiwidG9GaXhlZCIsIndhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=