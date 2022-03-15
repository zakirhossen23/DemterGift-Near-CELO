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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var _components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/components/modals/BidNFTModal */ "./src/components/components/modals/BidNFTModal.jsx");
/* harmony import */ var _components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/components/modals/ViewBidNFTModal */ "./src/components/components/modals/ViewBidNFTModal.jsx");
/* harmony import */ var _components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/components/modals/DonateNFTModal */ "./src/components/components/modals/DonateNFTModal.jsx");
/* harmony import */ var _modals_lottery_AddLotteryModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/modals/lottery/AddLotteryModal */ "./src/modals/lottery/AddLotteryModal.jsx");
/* harmony import */ var _modals_lottery_BuyLotteryModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/modals/lottery/BuyLotteryModal */ "./src/modals/lottery/BuyLotteryModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");


















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

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_16__["default"])('ERC721'),
      contract = _useContract.contract,
      contractCelo = _useContract.contractCelo,
      signerAddress = _useContract.signerAddress;

  console.log("id => ", id);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      CreatemodalShow = _useState2[0],
      setDonateModalShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      AddLotterymodalShow = _useState4[0],
      setAddLotteryModalShow = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      BuyLotterymodalShow = _useState6[0],
      setBuyLotteryModalShow = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(id),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      eventId = _useState8[0],
      setEventId = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      RealEventId = _useState10[0],
      setRealEventId = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      list = _useState12[0],
      setList = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      title = _useState14[0],
      setTitle = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      goalusd = _useState16[0],
      setgoalusd = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      goal = _useState18[0],
      setgoal = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState20 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
      dateleft = _useState20[0],
      setdateleft = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState22 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState21, 2),
      date = _useState22[0],
      setdate = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState24 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState23, 2),
      dateleftBid = _useState24[0],
      setdateleftBid = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState26 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState25, 2),
      logo = _useState26[0],
      setlogo = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0),
      _useState28 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState27, 2),
      selectid = _useState28[0],
      setselectid = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState30 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState29, 2),
      selectrecid = _useState30[0],
      setselectrecid = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState32 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState31, 2),
      selecttitle = _useState32[0],
      setselecttitle = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState34 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState33, 2),
      selecttype = _useState34[0],
      setselecttype = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      _useState36 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState35, 2),
      Eventwallet = _useState36[0],
      setEventwallet = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
      _useState38 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState37, 2),
      selectwallet = _useState38[0],
      setselectwallet = _useState38[1];

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      _useState40 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState39, 2),
      walletType = _useState40[0],
      setWalletType = _useState40[1];

  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0),
      _useState42 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState41, 2),
      selectbid = _useState42[0],
      setselectbid = _useState42[1];

  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0),
      _useState44 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState43, 2),
      selectprice = _useState44[0],
      setselectprice = _useState44[1];

  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0),
      _useState46 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState45, 2),
      LotteryNumber = _useState46[0],
      setLotteryNumber = _useState46[1];

  var boolTrue = true;

  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      _useState48 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState47, 2),
      modalShow = _useState48[0],
      setModalShow = _useState48[1];

  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      _useState50 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState49, 2),
      ViewmodalShow = _useState50[0],
      setViewModalShow = _useState50[1];

  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      _useState52 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState51, 2),
      SameWallet = _useState52[0],
      setSameWallet = _useState52[1];

  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''),
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
      var nearPrice, nearCurrencyUrl, currency_options, celoPrice, celoCurrencyUrl, _currency_options, Airtable, base, findEvents, findNFTs;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(id && window.location.pathname == "/donation/auction")) {
                _context6.next = 34;
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
              }());
              console.log('Retrieved', findEvents.getId());
              findNFTs = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default())( /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(resolve, reject) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return base('nfts').select({
                            filterByFormula: "({eventid} = '".concat(Number(findEvents.get('id')), "')"),
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

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x6, _x7) {
                  return _ref3.apply(this, arguments);
                };
              }());
              console.log(findNFTs);

            case 34:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee4, null, [[3, 11], [16, 24]]);
    }));
    return _AuctionfetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    AuctionfetchContractData();
  }, []);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_10__["default"].push("/login?[/donation]");
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
      next_router__WEBPACK_IMPORTED_MODULE_10__["default"].push("/login?[/donation]");
    }

    setselectrecid(e.target.getAttribute("recid"));
    setselectid(e.target.getAttribute("tokenid"));
    setselecttitle(e.target.getAttribute("title"));
    setViewModalShow(true);
  }

  function activateBidNFTModal(e) {
    if (window.localStorage.getItem('Type') == "" || window.localStorage.getItem('Type') == null) {
      next_router__WEBPACK_IMPORTED_MODULE_10__["default"].push("/login?[/donation]");
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
      next_router__WEBPACK_IMPORTED_MODULE_10__["default"].push("/login?[/donation]");
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.NavLink, {
        to: "/login?[/donation]"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '34px'
        }
      }, "Login"))));
    }

    if (window.localStorage.getItem('Type') == "user") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        style: {
          display: 'flex',
          gap: '14px',
          position: 'absolute',
          right: '25px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        onClick: activateCreateNFTModal,
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '21px',
          fontSize: '21px'
        }
      }, "Donate NFT"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.NavLink, {
        to: "/lottery?[".concat(RealEventId, "]")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        style: {
          display: 'flex',
          gap: '14px',
          position: 'absolute',
          right: '208px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "card-body",
        style: {
          height: '100%',
          paddingTop: '21px',
          fontSize: '21px'
        }
      }, "Go to lottery")))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.NavLink, {
      to: "/lottery?[".concat(RealEventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        display: 'flex',
        gap: '14px',
        position: 'absolute',
        right: '80px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      className: "card-body",
      style: {
        height: '100%',
        paddingTop: '21px',
        fontSize: '21px'
      }
    }, "Go to lottery")))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    className: "row EventContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("img", {
    src: logo,
    className: "AuctionImage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    className: "DetialsContainer",
    style: {
      rowGap: '16px',
      paddingTop: '70px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, "Goal: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
    style: {
      fontSize: '2vw'
    }
  }, "$ ", goalusd, " (", goal, " ", walletType, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    className: "TextContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
    style: {
      fontSize: '2vw'
    },
    name: "dateleft",
    date: date
  }, dateleft))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Topbutton, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      key: listItem.Id,
      className: "row ElementsContainer bgWhite"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        width: '100%',
        display: 'flex'
      }
    }, listItem.type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage pixel"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      className: "DetialsContainer",
      style: {
        rowGap: "5px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h2", {
      style: {
        fontSize: '2vw'
      }
    }, listItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
      style: {
        color: "rgb(211 187 51)",
        fontSize: '1.7vw'
      }
    }, "Type: NFT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      className: "TextContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
      style: {
        color: "rgb(211 187 51)",
        fontSize: '1.7vw'
      }
    }, listItem.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      className: "ElementBottomContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        maxWidth: "216px"
      }
    }, listItem.lottery != "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h3", {
      style: {
        fontSize: '1vw'
      },
      className: "smallgrey"
    }, "Current bid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      },
      className: "bidprice"
    }, "$ ", listItem.Bidprice.toFixed(2), " (", listItem.price, " ", walletType, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h7", {
      style: {
        fontSize: '1vw'
      },
      name: "date",
      date: date,
      className: "smallgrey"
    }, dateleftBid)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h3", {
      style: {
        fontSize: '1vw'
      },
      className: "smallgrey"
    }, "Ticket price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h4", {
      style: {
        fontSize: '1.7vw'
      },
      className: "bidprice"
    }, "$ ", listItem.Bidprice.toFixed(2), " (", listItem.price, " ", walletType, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      className: "BidAllcontainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      className: "Bidsbutton"
    }, listItem.lottery != "true" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, window.localStorage.getItem("Type") == "user" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        width: '168px'
      },
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      onClick: activateViewBidModal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      tokenid: listItem.Id,
      recid: listItem.recId,
      title: listItem.name,
      className: "card-body bidbuttonText"
    }, "View"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card-body bidbuttonText"
    }, "Bid")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null), window.localStorage.getItem("Type") == "manager" && selectwallet == currentWallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card BidcontainerCard",
      onClick: addtoLottery
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      highestbid: listItem.price,
      className: "card-body bidbuttonText",
      onClick: addtoLottery
    }, "Add to Lottery"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null)) : listItem.isbought == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.NavLink, {
      to: "/lottery?[".concat(RealEventId, "]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      style: {
        width: '224px'
      },
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      goalScore: goal,
      className: "Bidcontainer col"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      className: "card-body bidbuttonText"
    }, "Go to lottery"))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      ticketnumber: listItem.ticketnumber,
      ownerWallet: listItem.ownerWallet,
      className: "card BidcontainerCard"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
      tokenid: listItem.Id,
      wallet: listItem.wallet,
      recid: listItem.recId,
      price: listItem.price,
      ticketnumber: listItem.ticketnumber,
      ownerWallet: listItem.ownerWallet,
      className: "card-body bidbuttonText"
    }, "Buy lottery ticket"))))))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    show: ViewmodalShow,
    onHide: function onHide() {
      setViewModalShow(false);
      AuctionfetchContractData();
    },
    id: selectid,
    walletType: walletType,
    title: selecttitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_components_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    show: CreatemodalShow,
    onHide: function onHide() {
      setDonateModalShow(false);
    },
    EventID: RealEventId,
    EventeRecID: eventId,
    type: selecttype,
    SelectedTitle: title,
    enddate: date
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_modals_lottery_AddLotteryModal__WEBPACK_IMPORTED_MODULE_14__["default"], {
    show: AddLotterymodalShow,
    onHide: function onHide() {
      setAddLotteryModalShow(false);
    },
    nftrecid: selectrecid,
    nftid: selectid,
    eventid: RealEventId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_modals_lottery_BuyLotteryModal__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
/******/ 	__webpack_require__.h = function() { return "ead597257e26e482ab12"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjQwMDcxZGUxNGVjODRiMzYwNWZjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ2UsU0FBU2EsT0FBVCxHQUFtQjtBQUM5QixNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUE1QjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR0wsS0FBSyxDQUFDTyxJQUFOLENBQVdOLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlJLENBQUMsQ0FBQ0csS0FBRixLQUFZUixLQUFLLENBQUNTLFNBQXRCLEVBQWlDO0FBQzdCVCxNQUFBQSxLQUFLLENBQUNTLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBRUQscUJBQWtEUCxrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRWSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlIsRUFBdEI7O0FBQ0Esa0JBQThDbkIsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQUE7QUFBQSxNQUFPNEIsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQXNEN0IsK0NBQVEsQ0FBQyxLQUFELENBQTlEO0FBQUE7QUFBQSxNQUFPOEIsbUJBQVA7QUFBQSxNQUE0QkMsc0JBQTVCOztBQUNBLG1CQUFzRC9CLCtDQUFRLENB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QVRuQjtBQVVJLFdBQU8sRUFBRVE7QUFWYixJQTdKSixlQTBLSSxpREFBQyx3RUFBRDtBQUNJLFFBQUksRUFBRWxCLG1CQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLE1BQUFBLHNCQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFFSCxLQUxMO0FBTUksWUFBUSxFQUFFeUIsV0FOZDtBQU9JLFNBQUssRUFBRUYsUUFQWDtBQVFJLFdBQU8sRUFBRWxCO0FBUmIsSUExS0osZUFvTEksaURBQUMsd0VBQUQ7QUFDSSxRQUFJLEVBQUVKLG1CQURWO0FBRUksVUFBTSxFQUFFLGtCQUFNO0FBQUVDLE1BQUFBLHNCQUFzQixDQUFDLEtBQUQsQ0FBdEI7QUFBK0IsS0FGbkQ7QUFHSSxTQUFLLEVBQUVxQixRQUhYO0FBSUksYUFBUyxFQUFFUSxXQUpmO0FBS0ksWUFBUSxFQUFFTixXQUxkO0FBTUksU0FBSyxFQUFFYyxXQU5YO0FBT0ksZ0JBQVksRUFBRUU7QUFQbEIsSUFwTEosQ0FESjtBQStMSDs7Ozs7Ozs7VUNqakJELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwnO1xuaW1wb3J0IFZpZXdCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbCc7XG5cbmltcG9ydCBEb25hdGVORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcbmltcG9ydCBBZGRMb3R0ZXJ5TW9kYWwgZnJvbSAnQC9tb2RhbHMvbG90dGVyeS9BZGRMb3R0ZXJ5TW9kYWwnO1xuaW1wb3J0IEJ1eUxvdHRlcnlNb2RhbCBmcm9tICdAL21vZGFscy9sb3R0ZXJ5L0J1eUxvdHRlcnlNb2RhbCc7XG5cblxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1Y3Rpb24oKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGNvbnRyYWN0LCBjb250cmFjdENlbG8sIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBjb25zb2xlLmxvZyhcImlkID0+IFwiLCBpZCk7XG4gICAgY29uc3QgW0NyZWF0ZW1vZGFsU2hvdywgc2V0RG9uYXRlTW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbQWRkTG90dGVyeW1vZGFsU2hvdywgc2V0QWRkTG90dGVyeU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW0J1eUxvdHRlcnltb2RhbFNob3csIHNldEJ1eUxvdHRlcnlNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW2V2ZW50SWQsIHNldEV2ZW50SWRdID0gdXNlU3RhdGUoaWQpO1xuICAgIGNvbnN0IFtSZWFsRXZlbnRJZCwgc2V0UmVhbEV2ZW50SWRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGF0ZWxlZnRCaWQsIHNldGRhdGVsZWZ0QmlkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2VsZWN0cmVjaWQsIHNldHNlbGVjdHJlY2lkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dGl0bGUsIHNldHNlbGVjdHRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0dHlwZSwgc2V0c2VsZWN0dHlwZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0V2ZW50d2FsbGV0LCBzZXRFdmVudHdhbGxldF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc2VsZWN0d2FsbGV0LCBzZXRzZWxlY3R3YWxsZXRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt3YWxsZXRUeXBlLCBzZXRXYWxsZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzZWxlY3RiaWQsIHNldHNlbGVjdGJpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc2VsZWN0cHJpY2UsIHNldHNlbGVjdHByaWNlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtMb3R0ZXJ5TnVtYmVyLCBzZXRMb3R0ZXJ5TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGJvb2xUcnVlID0gdHJ1ZTtcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtWaWV3bW9kYWxTaG93LCBzZXRWaWV3TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbU2FtZVdhbGxldCwgc2V0U2FtZVdhbGxldF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgbGV0IFtjdXJyZW50V2FsbGV0LCBzZXRDdXJyZW50V2FsbGV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBsZXQgY3VycmVudFdhbGxldDIgPSBcIlwiO1xuICAgIGxldCBjdXJyZW50V2FsbGV0Qm91Z2h0ID0gW11cblxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIExlZnREYXRlQmlkKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvZG9uYXRpb24vYXVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXJ0ZWQgY2hla2NpbmdcIik7XG4gICAgICAgICAgICBsZXQgbmVhclByaWNlID0gMDtcbiAgICAgICAgICAgIC8vTkVBUiBjdXJyZW5jeVxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIHZhciBuZWFyQ3VycmVuY3lVcmwgPSBcImh0dHBzOi8vYXBpLmNvaW5tYXJrZXRjYXAuY29tL2RhdGEtYXBpL3YzL2NyeXB0b2N1cnJlbmN5L21hcmtldC1wYWlycy9sYXRlc3Q/c2x1Zz1uZWFyLXByb3RvY29sJnN0YXJ0PTEmbGltaXQ9MSZjYXRlZ29yeT1zcG90JnNvcnQ9Y21jX3JhbmtfYWR2YW5jZWRcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeV9vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmVhckN1cnJlbmN5VXJsLCBjdXJyZW5jeV9vcHRpb25zKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IG5lYXJQcmljZSA9IGpzb24pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignZXJyb3I6JyArIGVycikpO1xuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IG5lYXJQcmljZS5kYXRhLm1hcmtldFBhaXJzWzBdLnByaWNlO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4KTtcblxuICAgICAgICAgICAgICAgIG5lYXJQcmljZSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjZWxvUHJpY2UgPSAwO1xuICAgICAgICAgICAgLy9DRUxPIGN1cnJlbmN5XG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGNlbG9DdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPWNlbG8mc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5X29wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChjZWxvQ3VycmVuY3lVcmwsIGN1cnJlbmN5X29wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gY2Vsb1ByaWNlID0ganNvbilcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG4gICAgICAgICAgICAgICAgY2Vsb1ByaWNlID0gY2Vsb1ByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xuXG4gICAgICAgICAgICAgICAgY2Vsb1ByaWNlID0gMDtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgICAgICB2YXIgZmluZEV2ZW50cyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5maW5kKGlkLCBhc3luYyBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICBzZXRFdmVudElkKHJlY29yZC5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVhbEV2ZW50SWQocmVjb3JkLmdldCgnaWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpdGxlKHJlY29yZC5nZXQoXCJ0aXRsZVwiKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2V0V2FsbGV0VHlwZShyZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldHNlbGVjdHdhbGxldChyZWNvcmQuZ2V0KCd3YWxsZXQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50d2FsbGV0KHJlY29yZC5nZXQoJ3dhbGxldCcpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZHByaWNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiTkVBUlwiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBuZWFyUHJpY2UpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiQ0VMT1wiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBjZWxvUHJpY2UpKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRnb2FsdXNkKHVzZHByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Z29hbChOdW1iZXIocmVjb3JkLmdldChcIkdvYWxcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnQoTGVmdERhdGUocmVjb3JkLmdldChcImVuZERhdGVcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0ZGF0ZShyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGxvZ28ocmVjb3JkLmdldChcImxvZ29saW5rXCIpKTtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZCk7XG5cbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHJpZXZlZCcsIGZpbmRFdmVudHMuZ2V0SWQoKSk7XG4gICAgICAgICAgICB2YXIgZmluZE5GVHMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICcke051bWJlcihmaW5kRXZlbnRzLmdldCgnaWQnKSl9JylgLFxuICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IDEwIHJlY29yZHMgaW4gR3JpZCB2aWV3OlxuICAgICAgICAgICAgICAgICAgICBtYXhSZWNvcmRzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogW3sgZmllbGQ6IFwicHJpY2VcIiwgZGlyZWN0aW9uOiBcImRlc2NcIiB9XSxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpciA9IDA7IGlyIDwgcmVjb3Jkcy5sZW5ndGg7IGlyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSByZWNvcmRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2MgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ0eXBlXCIpID09IFwiTkVBUlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFdhbGxldCh3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNhbWVXYWxsZXQod2FsbGV0QWNjb3VudC5fYXV0aERhdGEuYWNjb3VudElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2FsbGV0MiA9IHdhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50QWNjID0gKHdhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC5nZXQoXCJ0eXBlXCIpID09IFwiQ0VMT1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFdhbGxldCh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2FsbGV0MiA9IHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjYyA9IHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3M7O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNib3VnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJpc2JvdWdodFwiKS5pbmNsdWRlcyhjdXJyZW50QWNjKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2JvdWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIG5lYXJQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjSWQ6IHJlY29yZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZDogcmVjb3JkLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5nZXQoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZ2V0KFwiZGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlkcHJpY2U6IGdvYWxQcmljZTJ1c2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcihyZWNvcmQuZ2V0KFwicHJpY2VcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlY29yZC5nZXQoXCJ0eXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZWNvcmQuZ2V0KFwiaW1hZ2VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG90dGVyeTogcmVjb3JkLmdldChcImxvdHRlcnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNib3VnaHQ6IGlzYm91Z2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldG51bWJlcjogcmVjb3JkLmdldChcInRpY2tldG51bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcldhbGxldDogcmVjb3JkLmdldChcIm93bmVyV2FsbGV0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XG5yZXNvbHZlKGFycik7XG5cbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZmluZE5GVHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgIH0sIDEwMDApO1xuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlVmlld0JpZE1vZGFsKGUpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpKTtcblxuICAgICAgICBzZXRWaWV3TW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoZSkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luP1svZG9uYXRpb25dXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RiaWQpO1xuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZHRvTG90dGVyeShlKSB7XG5cbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldEFkZExvdHRlcnlNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gQnV5TG90dGVyeShlKSB7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdHByaWNlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInByaWNlXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0d2FsbGV0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcIndhbGxldFwiKSk7XG4gICAgICAgIHNldExvdHRlcnlOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGlja2V0bnVtYmVyXCIpKTtcbiAgICAgICAgc2V0QnV5TG90dGVyeU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVORlRNb2RhbChlKSB7XG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XG5cbiAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gVG9wYnV0dG9uKCkge1xuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwiXCIgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzcycHgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0NHB4JyxcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnXG4gICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9sb2dpbj9bL2RvbmF0aW9uXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzM0cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJ1c2VyXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyNXB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkRvbmF0ZSBORlQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzIwOHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+R28gdG8gbG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKDw+XG5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnODBweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8Lz4pXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgRXZlbnRDb250YWluZXJcIiA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJBdWN0aW9uSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93R2FwOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnNzBweCdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgIH19ID57dGl0bGV9PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5Hb2FsOiA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4kIHtnb2FsdXNkfSAoe2dvYWx9IHt3YWxsZXRUeXBlfSk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZ3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG5hbWU9J2RhdGVsZWZ0JyBkYXRlPXtkYXRlfT57ZGF0ZWxlZnR9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcGJ1dHRvbiAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2UgcGl4ZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IFwiNXB4XCIgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFNpemU6ICcydncnIH19ID57bGlzdEl0ZW0ubmFtZX08L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMjExIDE4NyA1MSlcIiwgZm9udFNpemU6ICcxLjd2dycgfX0+VHlwZTogTkZUPC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMjExIDE4NyA1MSlcIiwgZm9udFNpemU6ICcxLjd2dycgfX0+e2xpc3RJdGVtLmRlc2NyaXB0aW9ufTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdFbGVtZW50Qm90dG9tQ29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogXCIyMTZweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmxvdHRlcnkgIT0gXCJ0cnVlXCIgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPkN1cnJlbnQgYmlkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0gY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2UudG9GaXhlZCgyKX0gKHtsaXN0SXRlbS5wcmljZX0ge3dhbGxldFR5cGV9KTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBuYW1lPVwiZGF0ZVwiIGRhdGU9e2RhdGV9IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPntkYXRlbGVmdEJpZH08L2g3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+VGlja2V0IHByaWNlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjd2dycgfX0gY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2UudG9GaXhlZCgyKX0gKHtsaXN0SXRlbS5wcmljZX0ge3dhbGxldFR5cGV9KTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkQWxsY29udGFpbmVyJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkc2J1dHRvbic+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5sb3R0ZXJ5ICE9IFwidHJ1ZVwiID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVHlwZVwiKSA9PSBcInVzZXJcIikgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxNjhweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IG9uQ2xpY2s9e2FjdGl2YXRlVmlld0JpZE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+VmlldzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTY4cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gZ29hbFNjb3JlPXtnb2FsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgb25DbGljaz17YWN0aXZhdGVCaWRORlRNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogKDw+PC8+KX1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJtYW5hZ2VyXCIpICYmIChzZWxlY3R3YWxsZXQgPT0gY3VycmVudFdhbGxldCkgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjI0cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gZ29hbFNjb3JlPXtnb2FsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgb25DbGljaz17YWRkdG9Mb3R0ZXJ5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCIgb25DbGljaz17YWRkdG9Mb3R0ZXJ5fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0+QWRkIHRvIExvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikgOiAoPD48Lz4pKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICgobGlzdEl0ZW0uaXNib3VnaHQgPT0gdHJ1ZSkgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvbG90dGVyeT9bJHtSZWFsRXZlbnRJZH1dYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjI0cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCIgPkdvIHRvIGxvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pIDogKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyNTFweCcgfX0gdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpY2tldG51bWJlcj17bGlzdEl0ZW0udGlja2V0bnVtYmVyfSBwcmljZT17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gb3duZXJXYWxsZXQ9e2xpc3RJdGVtLm93bmVyV2FsbGV0fSBvbkNsaWNrPXtCdXlMb3R0ZXJ5fSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSB0aWNrZXRudW1iZXI9e2xpc3RJdGVtLnRpY2tldG51bWJlcn0gb3duZXJXYWxsZXQ9e2xpc3RJdGVtLm93bmVyV2FsbGV0fSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSB0aWNrZXRudW1iZXI9e2xpc3RJdGVtLnRpY2tldG51bWJlcn0gb3duZXJXYWxsZXQ9e2xpc3RJdGVtLm93bmVyV2FsbGV0fSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiID5CdXkgbG90dGVyeSB0aWNrZXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8QmlkTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdG9rZW5JZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgcmVjaWQ9e3NlbGVjdHJlY2lkfVxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XG4gICAgICAgICAgICAgICAgVG9BZGRyZXNzPXtzZWxlY3R3YWxsZXR9XG4gICAgICAgICAgICAgICAgZXZlbnRJZD17ZXZlbnRJZH1cbiAgICAgICAgICAgICAgICBSZWFsRXZlbnRJZD17UmVhbEV2ZW50SWR9XG4gICAgICAgICAgICAgICAgSGlnaGVzdGJpZD17c2VsZWN0YmlkfVxuICAgICAgICAgICAgICAgIHdhbGxldFR5cGU9e3dhbGxldFR5cGV9XG4gICAgICAgICAgICAgICAgZ29hbD17Z29hbH1cbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XG4gICAgICAgICAgICAgICAgY29udHJhY3RDZWxvPXtjb250cmFjdENlbG99XG4gICAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cblxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFZpZXdCaWRORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e1ZpZXdtb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZpZXdNb2RhbFNob3coZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIHdhbGxldFR5cGU9e3dhbGxldFR5cGV9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdHRpdGxlfVxuXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPERvbmF0ZU5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17Q3JlYXRlbW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXREb25hdGVNb2RhbFNob3coZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBFdmVudElEPXtSZWFsRXZlbnRJZH1cbiAgICAgICAgICAgICAgICBFdmVudGVSZWNJRD17ZXZlbnRJZH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxuICAgICAgICAgICAgICAgIFNlbGVjdGVkVGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgIGVuZGRhdGU9e2RhdGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8QWRkTG90dGVyeU1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17QWRkTG90dGVyeW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWRkTG90dGVyeU1vZGFsU2hvdyhmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG5mdHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICBuZnRpZD17c2VsZWN0aWR9XG4gICAgICAgICAgICAgICAgZXZlbnRpZD17UmVhbEV2ZW50SWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1eUxvdHRlcnlNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0J1eUxvdHRlcnltb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7IHNldEJ1eUxvdHRlcnlNb2RhbFNob3coZmFsc2UpIH19XG4gICAgICAgICAgICAgICAgbmZ0aWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcz17RXZlbnR3YWxsZXR9XG4gICAgICAgICAgICAgICAgbmZ0cmVjaWQ9e3NlbGVjdHJlY2lkfVxuICAgICAgICAgICAgICAgIHByaWNlPXtzZWxlY3RwcmljZX1cbiAgICAgICAgICAgICAgICB0aWNrZXRudW1iZXI9e0xvdHRlcnlOdW1iZXJ9XG4gICAgICAgICAgICAvPjwvPlxuICAgICk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZWFkNTk3MjU3ZTI2ZTQ4MmFiMTJcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2TGluayIsInRvYXN0IiwibmVhckFQSSIsIlJvdXRlciIsIkJpZE5GVE1vZGFsIiwiVmlld0JpZE5GVE1vZGFsIiwiRG9uYXRlTkZUTW9kYWwiLCJBZGRMb3R0ZXJ5TW9kYWwiLCJCdXlMb3R0ZXJ5TW9kYWwiLCJ1c2VDb250cmFjdCIsIkF1Y3Rpb24iLCJyZWdleCIsInN0ciIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsImlkIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwiY29udHJhY3QiLCJjb250cmFjdENlbG8iLCJzaWduZXJBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsIkNyZWF0ZW1vZGFsU2hvdyIsInNldERvbmF0ZU1vZGFsU2hvdyIsIkFkZExvdHRlcnltb2RhbFNob3ciLCJzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93IiwiQnV5TG90dGVyeW1vZGFsU2hvdyIsInNldEJ1eUxvdHRlcnlNb2RhbFNob3ciLCJldmVudElkIiwic2V0RXZlbnRJZCIsIlJlYWxFdmVudElkIiwic2V0UmVhbEV2ZW50SWQiLCJsaXN0Iiwic2V0TGlzdCIsInRpdGxlIiwic2V0VGl0bGUiLCJnb2FsdXNkIiwic2V0Z29hbHVzZCIsImdvYWwiLCJzZXRnb2FsIiwiZGF0ZWxlZnQiLCJzZXRkYXRlbGVmdCIsImRhdGUiLCJzZXRkYXRlIiwiZGF0ZWxlZnRCaWQiLCJzZXRkYXRlbGVmdEJpZCIsImxvZ28iLCJzZXRsb2dvIiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdHJlY2lkIiwic2V0c2VsZWN0cmVjaWQiLCJzZWxlY3R0aXRsZSIsInNldHNlbGVjdHRpdGxlIiwic2VsZWN0dHlwZSIsInNldHNlbGVjdHR5cGUiLCJFdmVudHdhbGxldCIsInNldEV2ZW50d2FsbGV0Iiwic2VsZWN0d2FsbGV0Iiwic2V0c2VsZWN0d2FsbGV0Iiwid2FsbGV0VHlwZSIsInNldFdhbGxldFR5cGUiLCJzZWxlY3RiaWQiLCJzZXRzZWxlY3RiaWQiLCJzZWxlY3RwcmljZSIsInNldHNlbGVjdHByaWNlIiwiTG90dGVyeU51bWJlciIsInNldExvdHRlcnlOdW1iZXIiLCJib29sVHJ1ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlZpZXdtb2RhbFNob3ciLCJzZXRWaWV3TW9kYWxTaG93IiwiU2FtZVdhbGxldCIsInNldFNhbWVXYWxsZXQiLCJjdXJyZW50V2FsbGV0Iiwic2V0Q3VycmVudFdhbGxldCIsImN1cnJlbnRXYWxsZXQyIiwiY3VycmVudFdhbGxldEJvdWdodCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJMZWZ0RGF0ZSIsImRhdGV0ZXh0IiwiYyIsIkRhdGUiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJzIiwidG9TdHJpbmciLCJMZWZ0RGF0ZUJpZCIsIkF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSIsInBhdGhuYW1lIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwiY3VycmVuY3lfb3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImRhdGEiLCJtYXJrZXRQYWlycyIsInByaWNlIiwiY2Vsb1ByaWNlIiwiY2Vsb0N1cnJlbmN5VXJsIiwiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsImZpbmRFdmVudHMiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwiZ2V0SWQiLCJnZXQiLCJ1c2RwcmljZSIsImZvcm1hdCIsIk51bWJlciIsImUiLCJmaW5kTkZUcyIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsIm1heFJlY29yZHMiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJ2aWV3IiwiZWFjaFBhZ2UiLCJwYWdlIiwicmVjb3JkcyIsImZldGNoTmV4dFBhZ2UiLCJhcnIiLCJpciIsImxlbmd0aCIsImN1cnJlbnRBY2MiLCJ3YWxsZXRBY2NvdW50IiwiX2F1dGhEYXRhIiwiYWNjb3VudElkIiwiZXRoZXJldW0iLCJzZWxlY3RlZEFkZHJlc3MiLCJpc2JvdWdodCIsImdvYWxQcmljZTJ1c2QiLCJwdXNoIiwicmVjSWQiLCJJZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkJpZHByaWNlIiwidHlwZSIsImltYWdlIiwibG90dGVyeSIsInRpY2tldG51bWJlciIsIm93bmVyV2FsbGV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZG9uZSIsInNldEludGVydmFsIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWxsRGF0ZXMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhY3RpdmF0ZVZpZXdCaWRNb2RhbCIsInRhcmdldCIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJhZGR0b0xvdHRlcnkiLCJCdXlMb3R0ZXJ5IiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsIlRvcGJ1dHRvbiIsImNvbG9yIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwiY3Vyc29yIiwiaGVpZ2h0Iiwid2lkdGgiLCJmbG9hdCIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwiZGlzcGxheSIsImdhcCIsInBvc2l0aW9uIiwicmlnaHQiLCJtYXJnaW4iLCJmb250U2l6ZSIsInJvd0dhcCIsImxpc3RJdGVtIiwibWF4V2lkdGgiLCJ0b0ZpeGVkIiwid2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==