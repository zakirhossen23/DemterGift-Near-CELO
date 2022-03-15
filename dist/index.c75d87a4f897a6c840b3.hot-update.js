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
  var str = decodeURI(window.location.search);
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
                          }());

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
    type: walletType,
    SelectedTitle: title,
    enddate: date
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_modals_lottery_AddLotteryModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
    show: AddLotterymodalShow,
    onHide: function onHide() {
      setAddLotteryModalShow(false);
    },
    nftrecid: selectrecid,
    nftid: selectid,
    eventid: RealEventId,
    walletType: walletType
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_modals_lottery_BuyLotteryModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
    show: BuyLotterymodalShow,
    onHide: function onHide() {
      setBuyLotteryModalShow(false);
    },
    nftid: selectid,
    ToAddress: Eventwallet,
    nftrecid: selectrecid,
    price: selectprice,
    ticketnumber: LotteryNumber,
    walletType: walletType
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3df9ca6343afc3134d40"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmM3NWQ4N2E0Zjg5N2E2Yzg0MGIzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ2UsU0FBU2EsT0FBVCxHQUFtQjtBQUM5QixNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWpCLENBQXJCO0FBQ0EsTUFBSUMsQ0FBSjtBQUNBLE1BQUlDLEVBQUUsR0FBRyxFQUFUOztBQUNBLFNBQU8sQ0FBQ0QsQ0FBQyxHQUFHTixLQUFLLENBQUNRLElBQU4sQ0FBV1AsR0FBWCxDQUFMLE1BQTBCLElBQWpDLEVBQXVDO0FBQ25DO0FBQ0EsUUFBSUssQ0FBQyxDQUFDRyxLQUFGLEtBQVlULEtBQUssQ0FBQ1UsU0FBdEIsRUFBaUM7QUFDN0JWLE1BQUFBLEtBQUssQ0FBQ1UsU0FBTjtBQUNIOztBQUNESCxJQUFBQSxFQUFFLEdBQUdELENBQUMsQ0FBQyxDQUFELENBQU47QUFDSDs7QUFFRCxxQkFBa0RSLGtFQUFXLENBQUMsUUFBRCxDQUE3RDtBQUFBLE1BQVFhLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsWUFBbEIsZ0JBQWtCQSxZQUFsQjtBQUFBLE1BQWdDQyxhQUFoQyxnQkFBZ0NBLGFBQWhDOztBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCUixFQUF0Qjs7QUFDQSxrQkFBOENwQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU82QixlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxtQkFBc0Q5QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBOUQ7QUFBQTtBQUFBLE1BQU8rQixtQkFBUDtBQUFBLE1BQTRCQyxzQkFBNUI7O0FB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RWhELFFBUFI7QUFRSSxjQUFVLEVBQUVhLFVBUmhCO0FBU0ksU0FBSyxFQUFFVDtBQVRYLElBakpKLGVBNkpJLGlEQUFDLHFGQUFEO0FBQ0ksUUFBSSxFQUFFOUIsZUFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxrQkFBa0IsQ0FBQyxLQUFELENBQWxCO0FBRUgsS0FMTDtBQU1JLFdBQU8sRUFBRU8sV0FOYjtBQU9JLGVBQVcsRUFBRUYsT0FQakI7QUFRSSxRQUFJLEVBQUVpQyxVQVJWO0FBU0ksaUJBQWEsRUFBRTNCLEtBVG5CO0FBVUksV0FBTyxFQUFFUTtBQVZiLElBN0pKLGVBMEtJLGlEQUFDLHdFQUFEO0FBQ0ksUUFBSSxFQUFFbEIsbUJBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsc0JBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUVILEtBTEw7QUFNSSxZQUFRLEVBQUV5QixXQU5kO0FBT0ksU0FBSyxFQUFFRixRQVBYO0FBUUksV0FBTyxFQUFFbEIsV0FSYjtBQVNJLGNBQVUsRUFBRStCO0FBVGhCLElBMUtKLGVBcUxJLGlEQUFDLHdFQUFEO0FBQ0ksUUFBSSxFQUFFbkMsbUJBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFBRUMsTUFBQUEsc0JBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUErQixLQUZuRDtBQUdJLFNBQUssRUFBRXFCLFFBSFg7QUFJSSxhQUFTLEVBQUVRLFdBSmY7QUFLSSxZQUFRLEVBQUVOLFdBTGQ7QUFNSSxTQUFLLEVBQUVlLFdBTlg7QUFPSSxnQkFBWSxFQUFFRSxhQVBsQjtBQVFJLGNBQVUsRUFBRU47QUFSaEIsSUFyTEosQ0FESjtBQWlNSDs7Ozs7Ozs7VUN0akJELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwnO1xuaW1wb3J0IFZpZXdCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbCc7XG5cbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcbmltcG9ydCBBZGRMb3R0ZXJ5TW9kYWwgZnJvbSAnQC9tb2RhbHMvbG90dGVyeS9BZGRMb3R0ZXJ5TW9kYWwnO1xuaW1wb3J0IEJ1eUxvdHRlcnlNb2RhbCBmcm9tICdAL21vZGFscy9sb3R0ZXJ5L0J1eUxvdHRlcnlNb2RhbCc7XG5cblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1Y3Rpb24oKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xuICAgIGNvbnN0IHN0ciA9IGRlY29kZVVSSSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICBsZXQgbTtcbiAgICBsZXQgaWQgPSBcIlwiO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcbiAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWQgPSBtWzFdO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY29udHJhY3QsIGNvbnRyYWN0Q2Vsbywgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnNvbGUubG9nKFwiaWQgPT4gXCIsIGlkKTtcbiAgICBjb25zdCBbQ3JlYXRlbW9kYWxTaG93LCBzZXREb25hdGVNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtBZGRMb3R0ZXJ5bW9kYWxTaG93LCBzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbQnV5TG90dGVyeW1vZGFsU2hvdywgc2V0QnV5TG90dGVyeU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBbZXZlbnRJZCwgc2V0RXZlbnRJZF0gPSB1c2VTdGF0ZShpZCk7XG4gICAgY29uc3QgW1JlYWxFdmVudElkLCBzZXRSZWFsRXZlbnRJZF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnb2FsdXNkLCBzZXRnb2FsdXNkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbCwgc2V0Z29hbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGVsZWZ0LCBzZXRkYXRlbGVmdF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGUsIHNldGRhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdEJpZCwgc2V0ZGF0ZWxlZnRCaWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2dvLCBzZXRsb2dvXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZWxlY3RyZWNpZCwgc2V0c2VsZWN0cmVjaWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3R0aXRsZSwgc2V0c2VsZWN0dGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3R0eXBlLCBzZXRzZWxlY3R0eXBlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbRXZlbnR3YWxsZXQsIHNldEV2ZW50d2FsbGV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGxldCBzZWxlY3R3YWxsZXQyID0gXCJcIjtcbiAgICBjb25zdCBbc2VsZWN0d2FsbGV0LCBzZXRzZWxlY3R3YWxsZXRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt3YWxsZXRUeXBlLCBzZXRXYWxsZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzZWxlY3RiaWQsIHNldHNlbGVjdGJpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2VsZWN0cHJpY2UsIHNldHNlbGVjdHByaWNlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtMb3R0ZXJ5TnVtYmVyLCBzZXRMb3R0ZXJ5TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGJvb2xUcnVlID0gdHJ1ZTtcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtWaWV3bW9kYWxTaG93LCBzZXRWaWV3TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbU2FtZVdhbGxldCwgc2V0U2FtZVdhbGxldF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgbGV0IGN1cnJlbnRXYWxsZXQyID0gXCJcIjtcblxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIExlZnREYXRlQmlkKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvZG9uYXRpb24vYXVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0ZWQgY2hla2NpbmdcIik7XG4gICAgICAgICAgICBsZXQgbmVhclByaWNlID0gMDtcbiAgICAgICAgICAgIC8vTkVBUiBjdXJyZW5jeVxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIHZhciBuZWFyQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1uZWFyLXByb3RvY29sJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeV9vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBjdXJyZW5jeV9vcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IG5lYXJQcmljZSA9IGpzb24pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IG5lYXJQcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcblxuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjZWxvUHJpY2UgPSAwO1xuICAgICAgICAgICAgLy9DRUxPIGN1cnJlbmN5XG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGNlbG9DdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPWNlbG8mc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5X29wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChjZWxvQ3VycmVuY3lVcmwsIGN1cnJlbmN5X29wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gY2Vsb1ByaWNlID0ganNvbilcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG4gICAgICAgICAgICAgICAgY2Vsb1ByaWNlID0gY2Vsb1ByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xuXG4gICAgICAgICAgICAgICAgY2Vsb1ByaWNlID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgICAgIHZhciBmaW5kRXZlbnRzID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLmZpbmQoaWQsIGFzeW5jIGZ1bmN0aW9uIChlcnIsIHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50SWQocmVjb3JkLmdldElkKCkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRSZWFsRXZlbnRJZChyZWNvcmQuZ2V0KCdpZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUocmVjb3JkLmdldChcInRpdGxlXCIpKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZXRXYWxsZXRUeXBlKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0c2VsZWN0d2FsbGV0KHJlY29yZC5nZXQoJ3dhbGxldCcpKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0d2FsbGV0MiA9IHJlY29yZC5nZXQoJ3dhbGxldCcpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFdmVudHdhbGxldChyZWNvcmQuZ2V0KCd3YWxsZXQnKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2RwcmljZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKSA9PSBcIk5FQVJcIikgdXNkcHJpY2UgPSBmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpICogbmVhclByaWNlKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKSA9PSBcIkNFTE9cIikgdXNkcHJpY2UgPSBmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpICogY2Vsb1ByaWNlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0Z29hbHVzZCh1c2RwcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0KExlZnREYXRlKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGRhdGUocmVjb3JkLmdldChcImVuZERhdGVcIikpO1xuICAgICAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZChyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRsb2dvKHJlY29yZC5nZXQoXCJsb2dvbGlua1wiKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmQpO1xuXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cbiAgICAgICAgICAgIGxldCBldmVudHMgPSBhd2FpdCBmaW5kRXZlbnRzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHJpZXZlZCcsIGV2ZW50cyk7XG4gICAgICAgICAgICB2YXIgZmluZE5GVHMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICcke051bWJlcihhd2FpdCBldmVudHMuZ2V0KCdpZCcpKX0nKWAsXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdGluZyB0aGUgZmlyc3QgMTAgcmVjb3JkcyBpbiBHcmlkIHZpZXc6XG4gICAgICAgICAgICAgICAgICAgIG1heFJlY29yZHM6IDEwLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJwcmljZVwiLCBkaXJlY3Rpb246IFwiZGVzY1wiIH1dLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGlyID0gMDsgaXIgPCByZWNvcmRzLmxlbmd0aDsgaXIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IHJlY29yZHNbaXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2MgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ0eXBlXCIpID09IFwiTkVBUlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIG5lYXJQcmljZSk7ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFdhbGxldDIgPSB3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjYyA9ICh3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQuZ2V0KFwidHlwZVwiKSA9PSBcIkNFTE9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvYWxQcmljZTJ1c2QgPSBOdW1iZXIoTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSkgKiBjZWxvUHJpY2UpOyAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFdhbGxldDIgPSB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY2MgPSB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzOztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzYm91Z2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuZ2V0KFwiaXNib3VnaHRcIikuaW5jbHVkZXMoY3VycmVudEFjYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNib3VnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggeyB9ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNJZDogcmVjb3JkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkOiByZWNvcmQuZ2V0KFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmdldChcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlY29yZC5nZXQoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWRwcmljZTogZ29hbFByaWNlMnVzZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogTnVtYmVyKHJlY29yZC5nZXQoXCJwcmljZVwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVjb3JkLmdldChcInR5cGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHJlY29yZC5nZXQoXCJpbWFnZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb3R0ZXJ5OiByZWNvcmQuZ2V0KFwibG90dGVyeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2JvdWdodDogaXNib3VnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja2V0bnVtYmVyOiByZWNvcmQuZ2V0KFwidGlja2V0bnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyV2FsbGV0OiByZWNvcmQuZ2V0KFwib3duZXJXYWxsZXRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcblxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7O1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBmaW5kTkZUcyk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50V2FsbGV0Mi50b1VwcGVyQ2FzZSgpID09IHNlbGVjdHdhbGxldDIudG9VcHBlckNhc2UoKSl7XG4gICAgICAgICAgICAgICAgc2V0U2FtZVdhbGxldCh0cnVlKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNldFNhbWVXYWxsZXQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgQXVjdGlvbmZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgfSwgMTAwMCk7XG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVWaWV3QmlkTW9kYWwoZSkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0dGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikpO1xuXG4gICAgICAgIHNldFZpZXdNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbChlKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RiaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaGlnaGVzdGJpZFwiKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGJpZCk7XG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkdG9Mb3R0ZXJ5KGUpIHtcblxuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0QWRkTG90dGVyeU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBCdXlMb3R0ZXJ5KGUpIHtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0cHJpY2UoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicHJpY2VcIikpO1xuICAgICAgICBzZXRzZWxlY3R3YWxsZXQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwid2FsbGV0XCIpKTtcbiAgICAgICAgc2V0TG90dGVyeU51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aWNrZXRudW1iZXJcIikpO1xuICAgICAgICBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93KHRydWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsKGUpIHtcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcblxuICAgICAgICBzZXREb25hdGVNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBUb3BidXR0b24oKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzJweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjQ0cHgnLFxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzBweCdcbiAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvZ2luP1svZG9uYXRpb25dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMzRweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcInVzZXJcIikpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzI1cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+RG9uYXRlIE5GVDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvbG90dGVyeT9bJHtSZWFsRXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMjA4cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoPD5cblxuICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvbG90dGVyeT9bJHtSZWFsRXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICc4MHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIGxvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvPilcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBFdmVudENvbnRhaW5lclwiID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dHYXA6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICc3MHB4J1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gPnt0aXRsZX08L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkdvYWw6IDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PiQge2dvYWx1c2R9ICh7Z29hbH0ge3dhbGxldFR5cGV9KTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gbmFtZT0nZGF0ZWxlZnQnIGRhdGU9e2RhdGV9PntkYXRlbGVmdH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8VG9wYnV0dG9uIC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uSWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0udHlwZSA9PSBcIkNyeXB0b3B1bmtcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZSBwaXhlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogXCI1cHhcIiB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogJzJ2dycgfX0gPntsaXN0SXRlbS5uYW1lfTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMTEgMTg3IDUxKVwiLCBmb250U2l6ZTogJzEuN3Z3JyB9fT5UeXBlOiBORlQ8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigyMTEgMTg3IDUxKVwiLCBmb250U2l6ZTogJzEuN3Z3JyB9fT57bGlzdEl0ZW0uZGVzY3JpcHRpb259PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0VsZW1lbnRCb3R0b21Db250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBcIjIxNnB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0ubG90dGVyeSAhPSBcInRydWVcIiA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+Q3VycmVudCBiaWQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fSBjbGFzc05hbWU9J2JpZHByaWNlJz4kIHtsaXN0SXRlbS5CaWRwcmljZS50b0ZpeGVkKDIpfSAoe2xpc3RJdGVtLnByaWNlfSB7d2FsbGV0VHlwZX0pPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDcgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IG5hbWU9XCJkYXRlXCIgZGF0ZT17ZGF0ZX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+e2RhdGVsZWZ0QmlkfTwvaDc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5UaWNrZXQgcHJpY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogJzEuN3Z3JyB9fSBjbGFzc05hbWU9J2JpZHByaWNlJz4kIHtsaXN0SXRlbS5CaWRwcmljZS50b0ZpeGVkKDIpfSAoe2xpc3RJdGVtLnByaWNlfSB7d2FsbGV0VHlwZX0pPC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRBbGxjb250YWluZXInID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRzYnV0dG9uJz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmxvdHRlcnkgIT0gXCJ0cnVlXCIgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwidXNlclwiKSA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzE2OHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gb25DbGljaz17YWN0aXZhdGVWaWV3QmlkTW9kYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5WaWV3PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxNjhweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPkJpZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoPD48Lz4pfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSA9PSBcIm1hbmFnZXJcIikgJiYgU2FtZVdhbGxldCA9PSB0cnVlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiBvbkNsaWNrPXthZGR0b0xvdHRlcnl9PkFkZCB0byBMb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogKDw+PC8+KSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoKGxpc3RJdGVtLmlzYm91Z2h0ID09IHRydWUpID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiID5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjUxcHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aWNrZXRudW1iZXI9e2xpc3RJdGVtLnRpY2tldG51bWJlcn0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gb25DbGljaz17QnV5TG90dGVyeX0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiA+QnV5IGxvdHRlcnkgdGlja2V0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRva2VuSWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcz17c2VsZWN0d2FsbGV0fVxuICAgICAgICAgICAgICAgIGV2ZW50SWQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgUmVhbEV2ZW50SWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgICAgIEhpZ2hlc3RiaWQ9e3NlbGVjdGJpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIGdvYWw9e2dvYWx9XG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0Q2Vsbz17Y29udHJhY3RDZWxvfVxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XG5cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxWaWV3QmlkTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtWaWV3bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3TW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3R0aXRsZX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxEb25hdGVORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgRXZlbnRJRD17UmVhbEV2ZW50SWR9XG4gICAgICAgICAgICAgICAgRXZlbnRlUmVjSUQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgdHlwZT17d2FsbGV0VHlwZX1cbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBlbmRkYXRlPXtkYXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEFkZExvdHRlcnlNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0FkZExvdHRlcnltb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFkZExvdHRlcnlNb2RhbFNob3coZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuZnRyZWNpZD17c2VsZWN0cmVjaWR9XG4gICAgICAgICAgICAgICAgbmZ0aWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIGV2ZW50aWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgICAgIHdhbGxldFR5cGU9e3dhbGxldFR5cGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1eUxvdHRlcnlNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0J1eUxvdHRlcnltb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHNldEJ1eUxvdHRlcnlNb2RhbFNob3coZmFsc2UpIH19XG4gICAgICAgICAgICAgICAgbmZ0aWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcz17RXZlbnR3YWxsZXR9XG4gICAgICAgICAgICAgICAgbmZ0cmVjaWQ9e3NlbGVjdHJlY2lkfVxuICAgICAgICAgICAgICAgIHByaWNlPXtzZWxlY3RwcmljZX1cbiAgICAgICAgICAgICAgICB0aWNrZXRudW1iZXI9e0xvdHRlcnlOdW1iZXJ9XG4gICAgICAgICAgICAgICAgd2FsbGV0VHlwZT17d2FsbGV0VHlwZX1cbiAgICAgICAgICAgIC8+PC8+XG4gICAgKTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIzZGY5Y2E2MzQzYWZjMzEzNGQ0MFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOYXZMaW5rIiwidG9hc3QiLCJuZWFyQVBJIiwiUm91dGVyIiwiQmlkTkZUTW9kYWwiLCJWaWV3QmlkTkZUTW9kYWwiLCJEb25hdGVORlRNb2RhbCIsIkFkZExvdHRlcnlNb2RhbCIsIkJ1eUxvdHRlcnlNb2RhbCIsInVzZUNvbnRyYWN0IiwiQXVjdGlvbiIsInJlZ2V4Iiwic3RyIiwiZGVjb2RlVVJJIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJjb250cmFjdCIsImNvbnRyYWN0Q2VsbyIsInNpZ25lckFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRlbW9kYWxTaG93Iiwic2V0RG9uYXRlTW9kYWxTaG93IiwiQWRkTG90dGVyeW1vZGFsU2hvdyIsInNldEFkZExvdHRlcnlNb2RhbFNob3ciLCJCdXlMb3R0ZXJ5bW9kYWxTaG93Iiwic2V0QnV5TG90dGVyeU1vZGFsU2hvdyIsImV2ZW50SWQiLCJzZXRFdmVudElkIiwiUmVhbEV2ZW50SWQiLCJzZXRSZWFsRXZlbnRJZCIsImxpc3QiLCJzZXRMaXN0IiwidGl0bGUiLCJzZXRUaXRsZSIsImdvYWx1c2QiLCJzZXRnb2FsdXNkIiwiZ29hbCIsInNldGdvYWwiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwiZGF0ZSIsInNldGRhdGUiLCJkYXRlbGVmdEJpZCIsInNldGRhdGVsZWZ0QmlkIiwibG9nbyIsInNldGxvZ28iLCJzZWxlY3RpZCIsInNldHNlbGVjdGlkIiwic2VsZWN0cmVjaWQiLCJzZXRzZWxlY3RyZWNpZCIsInNlbGVjdHRpdGxlIiwic2V0c2VsZWN0dGl0bGUiLCJzZWxlY3R0eXBlIiwic2V0c2VsZWN0dHlwZSIsIkV2ZW50d2FsbGV0Iiwic2V0RXZlbnR3YWxsZXQiLCJzZWxlY3R3YWxsZXQyIiwic2VsZWN0d2FsbGV0Iiwic2V0c2VsZWN0d2FsbGV0Iiwid2FsbGV0VHlwZSIsInNldFdhbGxldFR5cGUiLCJzZWxlY3RiaWQiLCJzZXRzZWxlY3RiaWQiLCJzZWxlY3RwcmljZSIsInNldHNlbGVjdHByaWNlIiwiTG90dGVyeU51bWJlciIsInNldExvdHRlcnlOdW1iZXIiLCJib29sVHJ1ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlZpZXdtb2RhbFNob3ciLCJzZXRWaWV3TW9kYWxTaG93IiwiU2FtZVdhbGxldCIsInNldFNhbWVXYWxsZXQiLCJjdXJyZW50V2FsbGV0MiIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJMZWZ0RGF0ZSIsImRhdGV0ZXh0IiwiYyIsIkRhdGUiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJzIiwidG9TdHJpbmciLCJMZWZ0RGF0ZUJpZCIsIkF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSIsInBhdGhuYW1lIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwiY3VycmVuY3lfb3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImRhdGEiLCJtYXJrZXRQYWlycyIsInByaWNlIiwiY2Vsb1ByaWNlIiwiY2Vsb0N1cnJlbmN5VXJsIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsImZpbmRFdmVudHMiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwiZ2V0SWQiLCJnZXQiLCJ1c2RwcmljZSIsImZvcm1hdCIsIk51bWJlciIsImUiLCJldmVudHMiLCJmaW5kTkZUcyIsImZpZWxkIiwiZGlyZWN0aW9uIiwiZmlsdGVyQnlGb3JtdWxhIiwibWF4UmVjb3JkcyIsInNvcnQiLCJ2aWV3Iiwic2VsZWN0IiwiZWFjaFBhZ2UiLCJwYWdlIiwicmVjb3JkcyIsImZldGNoTmV4dFBhZ2UiLCJhcnIiLCJpciIsImxlbmd0aCIsImN1cnJlbnRBY2MiLCJnb2FsUHJpY2UydXNkIiwid2FsbGV0QWNjb3VudCIsIl9hdXRoRGF0YSIsImFjY291bnRJZCIsImV0aGVyZXVtIiwic2VsZWN0ZWRBZGRyZXNzIiwiaXNib3VnaHQiLCJwdXNoIiwicmVjSWQiLCJJZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkJpZHByaWNlIiwidHlwZSIsImltYWdlIiwibG90dGVyeSIsInRpY2tldG51bWJlciIsIm93bmVyV2FsbGV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZG9uZSIsInRvVXBwZXJDYXNlIiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFjdGl2YXRlVmlld0JpZE1vZGFsIiwidGFyZ2V0IiwiYWN0aXZhdGVCaWRORlRNb2RhbCIsImFkZHRvTG90dGVyeSIsIkJ1eUxvdHRlcnkiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiVG9wYnV0dG9uIiwiY29sb3IiLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJoZWlnaHQiLCJ3aWR0aCIsImZsb2F0IiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJkaXNwbGF5IiwiZ2FwIiwicG9zaXRpb24iLCJyaWdodCIsIm1hcmdpbiIsImZvbnRTaXplIiwicm93R2FwIiwibGlzdEl0ZW0iLCJtYXhXaWR0aCIsInRvRml4ZWQiLCJ3YWxsZXQiXSwic291cmNlUm9vdCI6IiJ9