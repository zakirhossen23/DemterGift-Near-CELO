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

              if (currentWallet2 == selectwallet) {
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
/******/ 	__webpack_require__.h = function() { return "a9faafd742f0921de9ab"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmZmMmViNjE0MDFlNmUxMzNkYmIwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ2UsU0FBU2EsT0FBVCxHQUFtQjtBQUM5QixNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUE1QjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR0wsS0FBSyxDQUFDTyxJQUFOLENBQVdOLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlJLENBQUMsQ0FBQ0csS0FBRixLQUFZUixLQUFLLENBQUNTLFNBQXRCLEVBQWlDO0FBQzdCVCxNQUFBQSxLQUFLLENBQUNTLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBRUQscUJBQWtEUCxrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRWSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlIsRUFBdEI7O0FBQ0Esa0JBQThDbkIsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQUE7QUFBQSxNQUFPNEIsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQXNEN0IsK0NBQVEsQ0FBQyxLQUFELENBQTlEO0FBQUE7QUFBQSxNQUFPOEIsbUJBQVA7QUFBQSxNQUE0QkMsc0JBQTVCOztBQUNBLG1CQUFzRC9CLCtDQUFR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QUssRUFBRVQ7QUFUWCxJQWpKSixlQTZKSSxpREFBQyxxRkFBRDtBQUNJLFFBQUksRUFBRTlCLGVBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsa0JBQWtCLENBQUMsS0FBRCxDQUFsQjtBQUVILEtBTEw7QUFNSSxXQUFPLEVBQUVPLFdBTmI7QUFPSSxlQUFXLEVBQUVGLE9BUGpCO0FBUUksUUFBSSxFQUFFMEIsVUFSVjtBQVNJLGlCQUFhLEVBQUVwQixLQVRuQjtBQVVJLFdBQU8sRUFBRVE7QUFWYixJQTdKSixlQTBLSSxpREFBQyx3RUFBRDtBQUNJLFFBQUksRUFBRWxCLG1CQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLHNCQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFFSCxLQUxMO0FBTUksWUFBUSxFQUFFeUIsV0FOZDtBQU9JLFNBQUssRUFBRUYsUUFQWDtBQVFJLFdBQU8sRUFBRWxCO0FBUmIsSUExS0osZUFvTEksaURBQUMsd0VBQUQ7QUFDSSxRQUFJLEVBQUVKLG1CQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQUVDLE1BQUFBLHNCQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFBK0IsS0FGbkQ7QUFHSSxTQUFLLEVBQUVxQixRQUhYO0FBSUksYUFBUyxFQUFFUSxXQUpmO0FBS0ksWUFBUSxFQUFFTixXQUxkO0FBTUksU0FBSyxFQUFFZSxXQU5YO0FBT0ksZ0JBQVksRUFBRUU7QUFQbEIsSUFwTEosQ0FESjtBQStMSDs7Ozs7Ozs7VUNuakJELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwnO1xuaW1wb3J0IFZpZXdCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbCc7XG5cbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcbmltcG9ydCBBZGRMb3R0ZXJ5TW9kYWwgZnJvbSAnQC9tb2RhbHMvbG90dGVyeS9BZGRMb3R0ZXJ5TW9kYWwnO1xuaW1wb3J0IEJ1eUxvdHRlcnlNb2RhbCBmcm9tICdAL21vZGFscy9sb3R0ZXJ5L0J1eUxvdHRlcnlNb2RhbCc7XG5cblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1Y3Rpb24oKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbnRyYWN0LCBjb250cmFjdENlbG8sIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBjb25zb2xlLmxvZyhcImlkID0+IFwiLCBpZCk7XG4gICAgY29uc3QgW0NyZWF0ZW1vZGFsU2hvdywgc2V0RG9uYXRlTW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbQWRkTG90dGVyeW1vZGFsU2hvdywgc2V0QWRkTG90dGVyeU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW0J1eUxvdHRlcnltb2RhbFNob3csIHNldEJ1eUxvdHRlcnlNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW2V2ZW50SWQsIHNldEV2ZW50SWRdID0gdXNlU3RhdGUoaWQpO1xuICAgIGNvbnN0IFtSZWFsRXZlbnRJZCwgc2V0UmVhbEV2ZW50SWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2VsZWN0cmVjaWQsIHNldHNlbGVjdHJlY2lkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dGl0bGUsIHNldHNlbGVjdHRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dHlwZSwgc2V0c2VsZWN0dHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0V2ZW50d2FsbGV0LCBzZXRFdmVudHdhbGxldF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBsZXQgc2VsZWN0d2FsbGV0MiA9IFwiXCI7XG4gICAgY29uc3QgW3NlbGVjdHdhbGxldCwgc2V0c2VsZWN0d2FsbGV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbd2FsbGV0VHlwZSwgc2V0V2FsbGV0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc2VsZWN0YmlkLCBzZXRzZWxlY3RiaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3NlbGVjdHByaWNlLCBzZXRzZWxlY3RwcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbTG90dGVyeU51bWJlciwgc2V0TG90dGVyeU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBib29sVHJ1ZSA9IHRydWU7XG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbVmlld21vZGFsU2hvdywgc2V0Vmlld01vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1NhbWVXYWxsZXQsIHNldFNhbWVXYWxsZXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGxldCBjdXJyZW50V2FsbGV0MiA9IFwiXCI7XG5cbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZUJpZChkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcImQgXCIgKyBoLnRvU3RyaW5nKCkgKyBcImggXCIgKyBtLnRvU3RyaW5nKCkgKyBcIm0gXCIgKyBzLnRvU3RyaW5nKCkgKyBcInNcIik7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2RvbmF0aW9uL2F1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydGVkIGNoZWtjaW5nXCIpO1xuICAgICAgICAgICAgbGV0IG5lYXJQcmljZSA9IDA7XG4gICAgICAgICAgICAvL05FQVIgY3VycmVuY3lcbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lfb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoKG5lYXJDdXJyZW5jeVVybCwgY3VycmVuY3lfb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBuZWFyUHJpY2UgPSBqc29uKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XG5cbiAgICAgICAgICAgICAgICBuZWFyUHJpY2UgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2Vsb1ByaWNlID0gMDtcbiAgICAgICAgICAgIC8vQ0VMTyBjdXJyZW5jeVxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIHZhciBjZWxvQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1jZWxvJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeV9vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2goY2Vsb0N1cnJlbmN5VXJsLCBjdXJyZW5jeV9vcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IGNlbG9QcmljZSA9IGpzb24pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgICAgIGNlbG9QcmljZSA9IGNlbG9QcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcblxuICAgICAgICAgICAgICAgIGNlbG9QcmljZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgICAgICB2YXIgZmluZEV2ZW50cyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5maW5kKGlkLCBhc3luYyBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBzZXRFdmVudElkKHJlY29yZC5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVhbEV2ZW50SWQocmVjb3JkLmdldCgnaWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKHJlY29yZC5nZXQoXCJ0aXRsZVwiKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2V0V2FsbGV0VHlwZShyZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldHNlbGVjdHdhbGxldChyZWNvcmQuZ2V0KCd3YWxsZXQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50d2FsbGV0KHJlY29yZC5nZXQoJ3dhbGxldCcpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZHByaWNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiTkVBUlwiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBuZWFyUHJpY2UpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiQ0VMT1wiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBjZWxvUHJpY2UpKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRnb2FsdXNkKHVzZHByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Z29hbChOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnQoTGVmdERhdGUocmVjb3JkLmdldChcImVuZERhdGVcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0ZGF0ZShyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGxvZ28ocmVjb3JkLmdldChcImxvZ29saW5rXCIpKTtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZCk7XG5cbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cbiAgICAgICAgICAgIGxldCBldmVudHMgPSBhd2FpdCBmaW5kRXZlbnRzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHJpZXZlZCcsIGV2ZW50cyk7XG4gICAgICAgICAgICB2YXIgZmluZE5GVHMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICcke051bWJlcihhd2FpdCBldmVudHMuZ2V0KCdpZCcpKX0nKWAsXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdGluZyB0aGUgZmlyc3QgMTAgcmVjb3JkcyBpbiBHcmlkIHZpZXc6XG4gICAgICAgICAgICAgICAgICAgIG1heFJlY29yZHM6IDEwLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJwcmljZVwiLCBkaXJlY3Rpb246IFwiZGVzY1wiIH1dLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGlyID0gMDsgaXIgPCByZWNvcmRzLmxlbmd0aDsgaXIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IHJlY29yZHNbaXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2MgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ0eXBlXCIpID09IFwiTkVBUlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIG5lYXJQcmljZSk7ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFdhbGxldDIgPSB3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjYyA9ICh3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQuZ2V0KFwidHlwZVwiKSA9PSBcIkNFTE9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWxQcmljZTJ1c2QgPSBOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSkgKiBjZWxvUHJpY2UpOyAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFdhbGxldDIgPSB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2MgPSB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzOztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzYm91Z2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZ2V0KFwiaXNib3VnaHRcIikuaW5jbHVkZXMoY3VycmVudEFjYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNib3VnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggeyB9ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNJZDogcmVjb3JkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkOiByZWNvcmQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlY29yZC5nZXQoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWRwcmljZTogZ29hbFByaWNlMnVzZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVjb3JkLmdldChcInR5cGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHJlY29yZC5nZXQoXCJpbWFnZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3R0ZXJ5OiByZWNvcmQuZ2V0KFwibG90dGVyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2JvdWdodDogaXNib3VnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0bnVtYmVyOiByZWNvcmQuZ2V0KFwidGlja2V0bnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyV2FsbGV0OiByZWNvcmQuZ2V0KFwib3duZXJXYWxsZXRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcblxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7O1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBmaW5kTkZUcyk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50V2FsbGV0MiA9PSBzZWxlY3R3YWxsZXQpe1xuICAgICAgICAgICAgICAgIHNldFNhbWVXYWxsZXQodHJ1ZSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBzZXRTYW1lV2FsbGV0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgIH0sIDEwMDApO1xuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlVmlld0JpZE1vZGFsKGUpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpKTtcblxuICAgICAgICBzZXRWaWV3TW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoZSkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RiaWQpO1xuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZHRvTG90dGVyeShlKSB7XG5cbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldEFkZExvdHRlcnlNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQnV5TG90dGVyeShlKSB7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHByaWNlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInByaWNlXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0d2FsbGV0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcIndhbGxldFwiKSk7XG4gICAgICAgIHNldExvdHRlcnlOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGlja2V0bnVtYmVyXCIpKTtcbiAgICAgICAgc2V0QnV5TG90dGVyeU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVORlRNb2RhbChlKSB7XG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XG5cbiAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gVG9wYnV0dG9uKCkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcycHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0NHB4JyxcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnXG4gICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL2RvbmF0aW9uXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzM0cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJ1c2VyXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyNXB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkRvbmF0ZSBORlQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzIwOHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+R28gdG8gbG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDw+XG5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnODBweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8Lz4pXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgRXZlbnRDb250YWluZXJcIiA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJBdWN0aW9uSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93R2FwOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnNzBweCdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID57dGl0bGV9PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Hb2FsOiA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4kIHtnb2FsdXNkfSAoe2dvYWx9IHt3YWxsZXRUeXBlfSk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG5hbWU9J2RhdGVsZWZ0JyBkYXRlPXtkYXRlfT57ZGF0ZWxlZnR9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcGJ1dHRvbiAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2UgcGl4ZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IFwiNXB4XCIgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFNpemU6ICcydncnIH19ID57bGlzdEl0ZW0ubmFtZX08L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMjExIDE4NyA1MSlcIiwgZm9udFNpemU6ICcxLjd2dycgfX0+VHlwZTogTkZUPC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMjExIDE4NyA1MSlcIiwgZm9udFNpemU6ICcxLjd2dycgfX0+e2xpc3RJdGVtLmRlc2NyaXB0aW9ufTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdFbGVtZW50Qm90dG9tQ29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogXCIyMTZweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmxvdHRlcnkgIT0gXCJ0cnVlXCIgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPkN1cnJlbnQgYmlkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0gY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2UudG9GaXhlZCgyKX0gKHtsaXN0SXRlbS5wcmljZX0ge3dhbGxldFR5cGV9KTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBuYW1lPVwiZGF0ZVwiIGRhdGU9e2RhdGV9IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPntkYXRlbGVmdEJpZH08L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+VGlja2V0IHByaWNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0gY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2UudG9GaXhlZCgyKX0gKHtsaXN0SXRlbS5wcmljZX0ge3dhbGxldFR5cGV9KTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkQWxsY29udGFpbmVyJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkc2J1dHRvbic+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5sb3R0ZXJ5ICE9IFwidHJ1ZVwiID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSA9PSBcInVzZXJcIikgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxNjhweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IG9uQ2xpY2s9e2FjdGl2YXRlVmlld0JpZE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+VmlldzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTY4cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gZ29hbFNjb3JlPXtnb2FsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgb25DbGljaz17YWN0aXZhdGVCaWRORlRNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogKDw+PC8+KX1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJtYW5hZ2VyXCIpICYmIFNhbWVXYWxsZXQgPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMjRweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiBvbkNsaWNrPXthZGR0b0xvdHRlcnl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIiBvbkNsaWNrPXthZGR0b0xvdHRlcnl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCIgb25DbGljaz17YWRkdG9Mb3R0ZXJ5fT5BZGQgdG8gTG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSA6ICg8PjwvPikpfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKChsaXN0SXRlbS5pc2JvdWdodCA9PSB0cnVlKSA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9sb3R0ZXJ5P1ske1JlYWxFdmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyMjRweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gZ29hbFNjb3JlPXtnb2FsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiA+R28gdG8gbG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzI1MXB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gZ29hbFNjb3JlPXtnb2FsfSBvd25lcldhbGxldD17bGlzdEl0ZW0ub3duZXJXYWxsZXR9IG9uQ2xpY2s9e0J1eUxvdHRlcnl9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IHRpY2tldG51bWJlcj17bGlzdEl0ZW0udGlja2V0bnVtYmVyfSBvd25lcldhbGxldD17bGlzdEl0ZW0ub3duZXJXYWxsZXR9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IHRpY2tldG51bWJlcj17bGlzdEl0ZW0udGlja2V0bnVtYmVyfSBvd25lcldhbGxldD17bGlzdEl0ZW0ub3duZXJXYWxsZXR9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCIgPkJ1eSBsb3R0ZXJ5IHRpY2tldDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxCaWRORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0b2tlbklkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICByZWNpZD17c2VsZWN0cmVjaWR9XG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0dHlwZX1cbiAgICAgICAgICAgICAgICBUb0FkZHJlc3M9e3NlbGVjdHdhbGxldH1cbiAgICAgICAgICAgICAgICBldmVudElkPXtldmVudElkfVxuICAgICAgICAgICAgICAgIFJlYWxFdmVudElkPXtSZWFsRXZlbnRJZH1cbiAgICAgICAgICAgICAgICBIaWdoZXN0YmlkPXtzZWxlY3RiaWR9XG4gICAgICAgICAgICAgICAgd2FsbGV0VHlwZT17d2FsbGV0VHlwZX1cbiAgICAgICAgICAgICAgICBnb2FsPXtnb2FsfVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cbiAgICAgICAgICAgICAgICBjb250cmFjdENlbG89e2NvbnRyYWN0Q2Vsb31cbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxuXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8Vmlld0JpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Vmlld21vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Vmlld01vZGFsU2hvdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgd2FsbGV0VHlwZT17d2FsbGV0VHlwZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17c2VsZWN0dGl0bGV9XG5cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtDcmVhdGVtb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIEV2ZW50SUQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgICAgIEV2ZW50ZVJlY0lEPXtldmVudElkfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XG4gICAgICAgICAgICAgICAgU2VsZWN0ZWRUaXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgZW5kZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxBZGRMb3R0ZXJ5TW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtBZGRMb3R0ZXJ5bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbmZ0cmVjaWQ9e3NlbGVjdHJlY2lkfVxuICAgICAgICAgICAgICAgIG5mdGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBldmVudGlkPXtSZWFsRXZlbnRJZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV5TG90dGVyeU1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17QnV5TG90dGVyeW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHsgc2V0QnV5TG90dGVyeU1vZGFsU2hvdyhmYWxzZSkgfX1cbiAgICAgICAgICAgICAgICBuZnRpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgVG9BZGRyZXNzPXtFdmVudHdhbGxldH1cbiAgICAgICAgICAgICAgICBuZnRyZWNpZD17c2VsZWN0cmVjaWR9XG4gICAgICAgICAgICAgICAgcHJpY2U9e3NlbGVjdHByaWNlfVxuICAgICAgICAgICAgICAgIHRpY2tldG51bWJlcj17TG90dGVyeU51bWJlcn1cbiAgICAgICAgICAgIC8+PC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJhOWZhYWZkNzQyZjA5MjFkZTlhYlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZMaW5rIiwidG9hc3QiLCJuZWFyQVBJIiwiUm91dGVyIiwiQmlkTkZUTW9kYWwiLCJWaWV3QmlkTkZUTW9kYWwiLCJEb25hdGVORlRNb2RhbCIsIkFkZExvdHRlcnlNb2RhbCIsIkJ1eUxvdHRlcnlNb2RhbCIsInVzZUNvbnRyYWN0IiwiQXVjdGlvbiIsInJlZ2V4Iiwic3RyIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJjb250cmFjdCIsImNvbnRyYWN0Q2VsbyIsInNpZ25lckFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRlbW9kYWxTaG93Iiwic2V0RG9uYXRlTW9kYWxTaG93IiwiQWRkTG90dGVyeW1vZGFsU2hvdyIsInNldEFkZExvdHRlcnlNb2RhbFNob3ciLCJCdXlMb3R0ZXJ5bW9kYWxTaG93Iiwic2V0QnV5TG90dGVyeU1vZGFsU2hvdyIsImV2ZW50SWQiLCJzZXRFdmVudElkIiwiUmVhbEV2ZW50SWQiLCJzZXRSZWFsRXZlbnRJZCIsImxpc3QiLCJzZXRMaXN0IiwidGl0bGUiLCJzZXRUaXRsZSIsImdvYWx1c2QiLCJzZXRnb2FsdXNkIiwiZ29hbCIsInNldGdvYWwiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwiZGF0ZSIsInNldGRhdGUiLCJkYXRlbGVmdEJpZCIsInNldGRhdGVsZWZ0QmlkIiwibG9nbyIsInNldGxvZ28iLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0cmVjaWQiLCJzZXRzZWxlY3RyZWNpZCIsInNlbGVjdHRpdGxlIiwic2V0c2VsZWN0dGl0bGUiLCJzZWxlY3R0eXBlIiwic2V0c2VsZWN0dHlwZSIsIkV2ZW50d2FsbGV0Iiwic2V0RXZlbnR3YWxsZXQiLCJzZWxlY3R3YWxsZXQyIiwic2VsZWN0d2FsbGV0Iiwic2V0c2VsZWN0d2FsbGV0Iiwid2FsbGV0VHlwZSIsInNldFdhbGxldFR5cGUiLCJzZWxlY3RiaWQiLCJzZXRzZWxlY3RiaWQiLCJzZWxlY3RwcmljZSIsInNldHNlbGVjdHByaWNlIiwiTG90dGVyeU51bWJlciIsInNldExvdHRlcnlOdW1iZXIiLCJib29sVHJ1ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlZpZXdtb2RhbFNob3ciLCJzZXRWaWV3TW9kYWxTaG93IiwiU2FtZVdhbGxldCIsInNldFNhbWVXYWxsZXQiLCJjdXJyZW50V2FsbGV0MiIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJMZWZ0RGF0ZSIsImRhdGV0ZXh0IiwiYyIsIkRhdGUiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJzIiwidG9TdHJpbmciLCJMZWZ0RGF0ZUJpZCIsIkF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSIsInBhdGhuYW1lIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwiY3VycmVuY3lfb3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImRhdGEiLCJtYXJrZXRQYWlycyIsInByaWNlIiwiY2Vsb1ByaWNlIiwiY2Vsb0N1cnJlbmN5VXJsIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsImZpbmRFdmVudHMiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwiZ2V0SWQiLCJnZXQiLCJ1c2RwcmljZSIsImZvcm1hdCIsIk51bWJlciIsImUiLCJldmVudHMiLCJmaW5kTkZUcyIsImZpZWxkIiwiZGlyZWN0aW9uIiwiZmlsdGVyQnlGb3JtdWxhIiwibWF4UmVjb3JkcyIsInNvcnQiLCJ2aWV3Iiwic2VsZWN0IiwiZWFjaFBhZ2UiLCJwYWdlIiwicmVjb3JkcyIsImZldGNoTmV4dFBhZ2UiLCJhcnIiLCJpciIsImxlbmd0aCIsImN1cnJlbnRBY2MiLCJnb2FsUHJpY2UydXNkIiwid2FsbGV0QWNjb3VudCIsIl9hdXRoRGF0YSIsImFjY291bnRJZCIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwiaXNib3VnaHQiLCJwdXNoIiwicmVjSWQiLCJJZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkJpZHByaWNlIiwidHlwZSIsImltYWdlIiwibG90dGVyeSIsInRpY2tldG51bWJlciIsIm93bmVyV2FsbGV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZG9uZSIsInNldEludGVydmFsIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWxsRGF0ZXMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhY3RpdmF0ZVZpZXdCaWRNb2RhbCIsInRhcmdldCIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJhZGR0b0xvdHRlcnkiLCJCdXlMb3R0ZXJ5IiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsIlRvcGJ1dHRvbiIsImNvbG9yIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwiY3Vyc29yIiwiaGVpZ2h0Iiwid2lkdGgiLCJmbG9hdCIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwiZGlzcGxheSIsImdhcCIsInBvc2l0aW9uIiwicmlnaHQiLCJtYXJnaW4iLCJmb250U2l6ZSIsInJvd0dhcCIsImxpc3RJdGVtIiwibWF4V2lkdGgiLCJ0b0ZpeGVkIiwid2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==