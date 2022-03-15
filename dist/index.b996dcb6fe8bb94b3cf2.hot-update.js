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
    _AuctionfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var nearPrice, nearCurrencyUrl, currency_options, celoPrice, celoCurrencyUrl, _currency_options, Airtable, base, findEvents;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!(id && window.location.pathname == "/donation/auction")) {
                _context8.next = 31;
                break;
              }

              console.log("started chekcing");
              nearPrice = 0; //NEAR currency

              _context8.prev = 3;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context8.next = 8;
              return fetch(nearCurrencyUrl, currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 8:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context8.next = 15;
              break;

            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8["catch"](3);
              console.log(_context8.t0);
              nearPrice = 0;

            case 15:
              celoPrice = 0; //CELO currency

              _context8.prev = 16;
              celoCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=celo&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              _currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context8.next = 21;
              return fetch(celoCurrencyUrl, _currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return celoPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 21:
              celoPrice = celoPrice.data.marketPairs[0].price;
              _context8.next = 28;
              break;

            case 24:
              _context8.prev = 24;
              _context8.t1 = _context8["catch"](16);
              console.log(_context8.t1);
              celoPrice = 0;

            case 28:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              findEvents = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default())( /*#__PURE__*/function () {
                var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(resolve, reject) {
                  var _context, _context5;

                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(_context = base('events')).call(_context, id, /*#__PURE__*/function () {
                            var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(err, record) {
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
                                      resolve(record.fields);
                                      console.log('Retrieved', record.getId());
                                      _context4.next = 23;
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
                                          var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(record) {
                                            var currentAcc, isbought, _context2, goalPrice2usd;

                                            return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context3) {
                                              while (1) {
                                                switch (_context3.prev = _context3.next) {
                                                  case 0:
                                                    currentAcc = "";

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

                                                    isbought = false;

                                                    try {
                                                      if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_6___default()(_context2 = record.get("isbought")).call(_context2, currentAcc)) {
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

                                          return function (_x6) {
                                            return _ref3.apply(this, arguments);
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

                                    case 23:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }
                              }, _callee2);
                            }));

                            return function (_x4, _x5) {
                              return _ref2.apply(this, arguments);
                            };
                          }());

                        case 2:
                          _context7.next = 4;
                          return _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_5___default()(_context5 = base('nfts')).call(_context5, nftrecid, /*#__PURE__*/function () {
                            var _ref4 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(err, record) {
                              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      users = record.get('isbought');

                                      if (record.get('participated') != "" && record.get('participated') != null) {
                                        participated = record.get('participated');
                                      }

                                    case 2:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee3);
                            }));

                            return function (_x7, _x8) {
                              return _ref4.apply(this, arguments);
                            };
                          }());

                        case 4:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x2, _x3) {
                  return _ref.apply(this, arguments);
                };
              }()).then(function (e) {
                return e;
              });

            case 31:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee5, null, [[3, 11], [16, 24]]);
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
    _BuyLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6(e) {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              setselectid(e.target.getAttribute("tokenid"));
              setselectrecid(e.target.getAttribute("recid"));
              setselectprice(e.target.getAttribute("price"));
              setselectwallet(e.target.getAttribute("wallet"));
              setLotteryNumber(e.target.getAttribute("ticketnumber"));
              setBuyLotteryModalShow(true);

            case 6:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee6);
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
/******/ 	__webpack_require__.h = function() { return "40071de14ec84b3605fc"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmI5OTZkY2I2ZmU4YmI5NGIzY2YyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ2UsU0FBU2EsT0FBVCxHQUFtQjtBQUM5QixNQUFNQyxLQUFLLEdBQUcsV0FBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUE1QjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR0wsS0FBSyxDQUFDTyxJQUFOLENBQVdOLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlJLENBQUMsQ0FBQ0csS0FBRixLQUFZUixLQUFLLENBQUNTLFNBQXRCLEVBQWlDO0FBQzdCVCxNQUFBQSxLQUFLLENBQUNTLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBRUQscUJBQWtEUCxrRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRWSxRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlIsRUFBdEI7O0FBQ0Esa0JBQThDbkIsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQUE7QUFBQSxNQUFPNEIsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBQ0EsbUJBQXNEN0IsK0NBQVEsQ0FBQyxLQUFELENBQTlEO0FBQUE7QUFBQSxNQUFPOEIsbUJBQVA7QUFBQSxNQUE0QkMsc0JBQTVCOztBQUNBLG1CQUFzRC9CLCtDQUFRLENB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QUFEO0FBQ0ksUUFBSSxFQUFFOUIsZUFEVjtBQUVJLFVBQU0sRUFBRSxrQkFBTTtBQUNWQyxNQUFBQSxrQkFBa0IsQ0FBQyxLQUFELENBQWxCO0FBRUgsS0FMTDtBQU1JLFdBQU8sRUFBRU8sV0FOYjtBQU9JLGVBQVcsRUFBRUYsT0FQakI7QUFRSSxRQUFJLEVBQUUwQixVQVJWO0FBU0ksaUJBQWEsRUFBRXBCLEtBVG5CO0FBVUksV0FBTyxFQUFFUTtBQVZiLElBN0pKLGVBMEtJLGlEQUFDLHdFQUFEO0FBQ0ksUUFBSSxFQUFFbEIsbUJBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFDVkMsTUFBQUEsc0JBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUVILEtBTEw7QUFNSSxZQUFRLEVBQUV5QixXQU5kO0FBT0ksU0FBSyxFQUFFRixRQVBYO0FBUUksV0FBTyxFQUFFbEI7QUFSYixJQTFLSixlQW9MSSxpREFBQyx3RUFBRDtBQUNJLFFBQUksRUFBRUosbUJBRFY7QUFFSSxVQUFNLEVBQUUsa0JBQU07QUFBRUMsTUFBQUEsc0JBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUErQixLQUZuRDtBQUdJLFNBQUssRUFBRXFCLFFBSFg7QUFJSSxhQUFTLEVBQUVRLFdBSmY7QUFLSSxZQUFRLEVBQUVOLFdBTGQ7QUFNSSxTQUFLLEVBQUVjLFdBTlg7QUFPSSxnQkFBWSxFQUFFRTtBQVBsQixJQXBMSixDQURKO0FBK0xIOzs7Ozs7OztVQ3pqQkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbCc7XG5pbXBvcnQgVmlld0JpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvVmlld0JpZE5GVE1vZGFsJztcblxuaW1wb3J0IERvbmF0ZU5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwnO1xuaW1wb3J0IEFkZExvdHRlcnlNb2RhbCBmcm9tICdAL21vZGFscy9sb3R0ZXJ5L0FkZExvdHRlcnlNb2RhbCc7XG5pbXBvcnQgQnV5TG90dGVyeU1vZGFsIGZyb20gJ0AvbW9kYWxzL2xvdHRlcnkvQnV5TG90dGVyeU1vZGFsJztcblxuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVjdGlvbigpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBsZXQgbTtcbiAgICBsZXQgaWQgPSBcIlwiO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcbiAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWQgPSBtWzFdO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY29udHJhY3QsIGNvbnRyYWN0Q2Vsbywgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnNvbGUubG9nKFwiaWQgPT4gXCIsIGlkKTtcbiAgICBjb25zdCBbQ3JlYXRlbW9kYWxTaG93LCBzZXREb25hdGVNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtBZGRMb3R0ZXJ5bW9kYWxTaG93LCBzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbQnV5TG90dGVyeW1vZGFsU2hvdywgc2V0QnV5TG90dGVyeU1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBbZXZlbnRJZCwgc2V0RXZlbnRJZF0gPSB1c2VTdGF0ZShpZCk7XG4gICAgY29uc3QgW1JlYWxFdmVudElkLCBzZXRSZWFsRXZlbnRJZF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtnb2FsdXNkLCBzZXRnb2FsdXNkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZ29hbCwgc2V0Z29hbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGVsZWZ0LCBzZXRkYXRlbGVmdF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGUsIHNldGRhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkYXRlbGVmdEJpZCwgc2V0ZGF0ZWxlZnRCaWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsb2dvLCBzZXRsb2dvXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZWxlY3RyZWNpZCwgc2V0c2VsZWN0cmVjaWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3R0aXRsZSwgc2V0c2VsZWN0dGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZWxlY3R0eXBlLCBzZXRzZWxlY3R0eXBlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbRXZlbnR3YWxsZXQsIHNldEV2ZW50d2FsbGV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtzZWxlY3R3YWxsZXQsIHNldHNlbGVjdHdhbGxldF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3dhbGxldFR5cGUsIHNldFdhbGxldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZWxlY3RwcmljZSwgc2V0c2VsZWN0cHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW0xvdHRlcnlOdW1iZXIsIHNldExvdHRlcnlOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgYm9vbFRydWUgPSB0cnVlO1xuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtTYW1lV2FsbGV0LCBzZXRTYW1lV2FsbGV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBsZXQgW2N1cnJlbnRXYWxsZXQsIHNldEN1cnJlbnRXYWxsZXRdID0gdXNlU3RhdGUoJycpO1xuICAgIGxldCBjdXJyZW50V2FsbGV0MiA9IFwiXCI7XG4gICAgbGV0IGN1cnJlbnRXYWxsZXRCb3VnaHQgPSBbXVxuXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTGVmdERhdGVCaWQoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIEF1Y3Rpb25mZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9kb25hdGlvbi9hdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhcnRlZCBjaGVrY2luZ1wiKTtcbiAgICAgICAgICAgIGxldCBuZWFyUHJpY2UgPSAwO1xuICAgICAgICAgICAgLy9ORUFSIGN1cnJlbmN5XG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgdmFyIG5lYXJDdXJyZW5jeVVybCA9IFwiaHR0cHM6Ly9hcGkuY29pbm1hcmtldGNhcC5jb20vZGF0YS1hcGkvdjMvY3J5cHRvY3VycmVuY3kvbWFya2V0LXBhaXJzL2xhdGVzdD9zbHVnPW5lYXItcHJvdG9jb2wmc3RhcnQ9MSZsaW1pdD0xJmNhdGVnb3J5PXNwb3Qmc29ydD1jbWNfcmFua19hZHZhbmNlZFwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5X29wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIGN1cnJlbmN5X29wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4gbmVhclByaWNlID0ganNvbilcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdlcnJvcjonICsgZXJyKSk7XG4gICAgICAgICAgICAgICAgbmVhclByaWNlID0gbmVhclByaWNlLmRhdGEubWFya2V0UGFpcnNbMF0ucHJpY2U7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpO1xuXG4gICAgICAgICAgICAgICAgbmVhclByaWNlID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNlbG9QcmljZSA9IDA7XG4gICAgICAgICAgICAvL0NFTE8gY3VycmVuY3lcbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY2Vsb0N1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9Y2VsbyZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lfb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoKGNlbG9DdXJyZW5jeVVybCwgY3VycmVuY3lfb3B0aW9ucykudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiBjZWxvUHJpY2UgPSBqc29uKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcbiAgICAgICAgICAgICAgICBjZWxvUHJpY2UgPSBjZWxvUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleCk7XG5cbiAgICAgICAgICAgICAgICBjZWxvUHJpY2UgPSAwO1xuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgICAgIHZhciBmaW5kRXZlbnRzID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLmZpbmQoaWQsIGFzeW5jIGZ1bmN0aW9uIChlcnIsIHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50SWQocmVjb3JkLmdldElkKCkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRSZWFsRXZlbnRJZChyZWNvcmQuZ2V0KCdpZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUocmVjb3JkLmdldChcInRpdGxlXCIpKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2V0V2FsbGV0VHlwZShyZWNvcmQuZ2V0KFwid2FsbGV0dHlwZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldHNlbGVjdHdhbGxldChyZWNvcmQuZ2V0KCd3YWxsZXQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEV2ZW50d2FsbGV0KHJlY29yZC5nZXQoJ3dhbGxldCcpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZHByaWNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiTkVBUlwiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBuZWFyUHJpY2UpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ3YWxsZXR0eXBlXCIpID09IFwiQ0VMT1wiKSB1c2RwcmljZSA9IGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKE51bWJlcihyZWNvcmQuZ2V0KFwiR29hbFwiKSkgKiBjZWxvUHJpY2UpKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0Z29hbHVzZCh1c2RwcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKHJlY29yZC5nZXQoXCJHb2FsXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0KExlZnREYXRlKHJlY29yZC5nZXQoXCJlbmREYXRlXCIpKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldGRhdGUocmVjb3JkLmdldChcImVuZERhdGVcIikpO1xuICAgICAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdEJpZChMZWZ0RGF0ZUJpZChyZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKSkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRsb2dvKHJlY29yZC5nZXQoXCJsb2dvbGlua1wiKSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjb3JkLmZpZWxkcyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQnLCByZWNvcmQuZ2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICcke051bWJlcihyZWNvcmQuZ2V0KCdpZCcpKX0nKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3RpbmcgdGhlIGZpcnN0IDEwIHJlY29yZHMgaW4gR3JpZCB2aWV3OlxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4UmVjb3JkczogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJwcmljZVwiLCBkaXJlY3Rpb246IFwiZGVzY1wiIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChhc3luYyBmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY2MgPVwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJ0eXBlXCIpID09IFwiTkVBUlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRXYWxsZXQod2FsbGV0QWNjb3VudC5fYXV0aERhdGEuYWNjb3VudElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2FtZVdhbGxldCh3YWxsZXRBY2NvdW50Ll9hdXRoRGF0YS5hY2NvdW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50V2FsbGV0MiA9IHdhbGxldEFjY291bnQuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjYyA9ICAod2FsbGV0QWNjb3VudC5fYXV0aERhdGEuYWNjb3VudElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC5nZXQoXCJ0eXBlXCIpID09IFwiQ0VMT1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRXYWxsZXQod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXYWxsZXQyID0gd2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjYyA9ICB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzOztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzYm91Z2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5nZXQoXCJpc2JvdWdodFwiKS5pbmNsdWRlcyhjdXJyZW50QWNjKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNib3VnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCB7IH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ29hbFByaWNlMnVzZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSAqIG5lYXJQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNJZDogcmVjb3JkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZDogcmVjb3JkLmdldChcImlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZWNvcmQuZ2V0KFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlY29yZC5nZXQoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlkcHJpY2U6IGdvYWxQcmljZTJ1c2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBOdW1iZXIocmVjb3JkLmdldChcInByaWNlXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVjb3JkLmdldChcInR5cGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZWNvcmQuZ2V0KFwiaW1hZ2VcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvdHRlcnk6IHJlY29yZC5nZXQoXCJsb3R0ZXJ5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2JvdWdodDogaXNib3VnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tldG51bWJlcjogcmVjb3JkLmdldChcInRpY2tldG51bWJlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJXYWxsZXQ6IHJlY29yZC5nZXQoXCJvd25lcldhbGxldFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcblxuXG5cblxuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5maW5kKG5mdHJlY2lkLCBhc3luYyBmdW5jdGlvbiAoZXJyLCByZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcnMgPSByZWNvcmQuZ2V0KCdpc2JvdWdodCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmdldCgncGFydGljaXBhdGVkJykgIT0gXCJcIiAmJiByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZWQgPSByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG5cblxuXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcblxuICAgIH0sIFtdKTtcblxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICB9LCAxMDAwKTtcblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVZpZXdCaWRNb2RhbChlKSB7XG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRzZWxlY3RyZWNpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyZWNpZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3R0aXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSk7XG5cbiAgICAgICAgc2V0Vmlld01vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZE5GVE1vZGFsKGUpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpbj9bL2RvbmF0aW9uXVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldHNlbGVjdHJlY2lkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJlY2lkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XG4gICAgICAgIHNldHNlbGVjdGJpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJoaWdoZXN0YmlkXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0YmlkKTtcbiAgICAgICAgc2V0c2VsZWN0dHlwZShcIk5GVFwiKTtcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGR0b0xvdHRlcnkoZSkge1xuXG4gICAgICAgIGlmICgod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUeXBlJykgPT0gXCJcIiB8fCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBudWxsKSkge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW4/Wy9kb25hdGlvbl1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRBZGRMb3R0ZXJ5TW9kYWxTaG93KHRydWUpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIEJ1eUxvdHRlcnkoZSkge1xuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcbiAgICAgICAgc2V0c2VsZWN0cmVjaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicmVjaWRcIikpO1xuICAgICAgICBzZXRzZWxlY3RwcmljZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwcmljZVwiKSk7XG4gICAgICAgIHNldHNlbGVjdHdhbGxldChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ3YWxsZXRcIikpO1xuICAgICAgICBzZXRMb3R0ZXJ5TnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpY2tldG51bWJlclwiKSk7XG4gICAgICAgIHNldEJ1eUxvdHRlcnlNb2RhbFNob3codHJ1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQ3JlYXRlTkZUTW9kYWwoZSkge1xuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiTkZUXCIpO1xuXG4gICAgICAgIHNldERvbmF0ZU1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIFRvcGJ1dHRvbigpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1R5cGUnKSA9PSBcIlwiIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MnB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNDRweCcsXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4J1xuICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9naW4/Wy9kb25hdGlvbl1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICczNHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVHlwZScpID09IFwidXNlclwiKSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMjVweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2FjdGl2YXRlQ3JlYXRlTkZUTW9kYWx9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5Eb25hdGUgTkZUPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9sb3R0ZXJ5P1ske1JlYWxFdmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIGxvdHRlcnk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICg8PlxuXG4gICAgICAgICAgICA8TmF2TGluayB0bz17YC9sb3R0ZXJ5P1ske1JlYWxFdmVudElkfV1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzgwcHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+R28gdG8gbG90dGVyeTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC8+KVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXVjdGlvbkltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0dhcDogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzcwcHgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+e3RpdGxlfTwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+R29hbDogPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcydncnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+JCB7Z29hbHVzZH0gKHtnb2FsfSB7d2FsbGV0VHlwZX0pPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBuYW1lPSdkYXRlbGVmdCcgZGF0ZT17ZGF0ZX0+e2RhdGVsZWZ0fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BidXR0b24gLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IEVsZW1lbnRzQ29udGFpbmVyIGJnV2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50eXBlID09IFwiQ3J5cHRvcHVua1wiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlIHBpeGVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpc3RJdGVtLmltYWdlfSBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiAnMnZ3JyB9fSA+e2xpc3RJdGVtLm5hbWV9PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDIxMSAxODcgNTEpXCIsIGZvbnRTaXplOiAnMS43dncnIH19PlR5cGU6IE5GVDwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDIxMSAxODcgNTEpXCIsIGZvbnRTaXplOiAnMS43dncnIH19PntsaXN0SXRlbS5kZXNjcmlwdGlvbn08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRWxlbWVudEJvdHRvbUNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMjE2cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5sb3R0ZXJ5ICE9IFwidHJ1ZVwiID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAnMXZ3JyB9fSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5DdXJyZW50IGJpZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlLnRvRml4ZWQoMil9ICh7bGlzdEl0ZW0ucHJpY2V9IHt3YWxsZXRUeXBlfSk8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNyBzdHlsZT17eyBmb250U2l6ZTogJzF2dycgfX0gbmFtZT1cImRhdGVcIiBkYXRlPXtkYXRlfSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj57ZGF0ZWxlZnRCaWR9PC9oNz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPikgOiAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPlRpY2tldCBwcmljZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGZvbnRTaXplOiAnMS43dncnIH19IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlLnRvRml4ZWQoMil9ICh7bGlzdEl0ZW0ucHJpY2V9IHt3YWxsZXRUeXBlfSk8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZHNidXR0b24nPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0ubG90dGVyeSAhPSBcInRydWVcIiA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlR5cGVcIikgPT0gXCJ1c2VyXCIpID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTY4cHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPlZpZXc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzE2OHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FjdGl2YXRlQmlkTkZUTW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+QmlkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PjwvPil9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUeXBlXCIpID09IFwibWFuYWdlclwiKSAmJiAoc2VsZWN0d2FsbGV0ID09IGN1cnJlbnRXYWxsZXQpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGdvYWxTY29yZT17Z29hbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiIG9uQ2xpY2s9e2FkZHRvTG90dGVyeX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiBvbkNsaWNrPXthZGR0b0xvdHRlcnl9PkFkZCB0byBMb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogKDw+PC8+KSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoKGxpc3RJdGVtLmlzYm91Z2h0ID09IHRydWUpID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2xvdHRlcnk/WyR7UmVhbEV2ZW50SWR9XWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzIyNHB4JyB9fSB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gd2FsbGV0PXtsaXN0SXRlbS53YWxsZXR9IHJlY2lkPXtsaXN0SXRlbS5yZWNJZH0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiID5HbyB0byBsb3R0ZXJ5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KSA6ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjUxcHgnIH19IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB3YWxsZXQ9e2xpc3RJdGVtLndhbGxldH0gcmVjaWQ9e2xpc3RJdGVtLnJlY0lkfSB0aWNrZXRudW1iZXI9e2xpc3RJdGVtLnRpY2tldG51bWJlcn0gcHJpY2U9e2xpc3RJdGVtLnByaWNlfSBnb2FsU2NvcmU9e2dvYWx9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gb25DbGljaz17QnV5TG90dGVyeX0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHdhbGxldD17bGlzdEl0ZW0ud2FsbGV0fSByZWNpZD17bGlzdEl0ZW0ucmVjSWR9IHByaWNlPXtsaXN0SXRlbS5wcmljZX0gdGlja2V0bnVtYmVyPXtsaXN0SXRlbS50aWNrZXRudW1iZXJ9IG93bmVyV2FsbGV0PXtsaXN0SXRlbS5vd25lcldhbGxldH0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIiA+QnV5IGxvdHRlcnkgdGlja2V0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHRva2VuSWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxuICAgICAgICAgICAgICAgIFRvQWRkcmVzcz17c2VsZWN0d2FsbGV0fVxuICAgICAgICAgICAgICAgIGV2ZW50SWQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgUmVhbEV2ZW50SWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgICAgIEhpZ2hlc3RiaWQ9e3NlbGVjdGJpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIGdvYWw9e2dvYWx9XG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxuICAgICAgICAgICAgICAgIGNvbnRyYWN0Q2Vsbz17Y29udHJhY3RDZWxvfVxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XG5cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxWaWV3QmlkTkZUTW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtWaWV3bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3TW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICB3YWxsZXRUeXBlPXt3YWxsZXRUeXBlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3R0aXRsZX1cblxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxEb25hdGVORlRNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RG9uYXRlTW9kYWxTaG93KGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgRXZlbnRJRD17UmVhbEV2ZW50SWR9XG4gICAgICAgICAgICAgICAgRXZlbnRlUmVjSUQ9e2V2ZW50SWR9XG4gICAgICAgICAgICAgICAgdHlwZT17c2VsZWN0dHlwZX1cbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBlbmRkYXRlPXtkYXRlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEFkZExvdHRlcnlNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e0FkZExvdHRlcnltb2RhbFNob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFkZExvdHRlcnlNb2RhbFNob3coZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBuZnRyZWNpZD17c2VsZWN0cmVjaWR9XG4gICAgICAgICAgICAgICAgbmZ0aWQ9e3NlbGVjdGlkfVxuICAgICAgICAgICAgICAgIGV2ZW50aWQ9e1JlYWxFdmVudElkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXlMb3R0ZXJ5TW9kYWxcbiAgICAgICAgICAgICAgICBzaG93PXtCdXlMb3R0ZXJ5bW9kYWxTaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4geyBzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93KGZhbHNlKSB9fVxuICAgICAgICAgICAgICAgIG5mdGlkPXtzZWxlY3RpZH1cbiAgICAgICAgICAgICAgICBUb0FkZHJlc3M9e0V2ZW50d2FsbGV0fVxuICAgICAgICAgICAgICAgIG5mdHJlY2lkPXtzZWxlY3RyZWNpZH1cbiAgICAgICAgICAgICAgICBwcmljZT17c2VsZWN0cHJpY2V9XG4gICAgICAgICAgICAgICAgdGlja2V0bnVtYmVyPXtMb3R0ZXJ5TnVtYmVyfVxuICAgICAgICAgICAgLz48Lz5cbiAgICApO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjQwMDcxZGUxNGVjODRiMzYwNWZjXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdkxpbmsiLCJ0b2FzdCIsIm5lYXJBUEkiLCJSb3V0ZXIiLCJCaWRORlRNb2RhbCIsIlZpZXdCaWRORlRNb2RhbCIsIkRvbmF0ZU5GVE1vZGFsIiwiQWRkTG90dGVyeU1vZGFsIiwiQnV5TG90dGVyeU1vZGFsIiwidXNlQ29udHJhY3QiLCJBdWN0aW9uIiwicmVnZXgiLCJzdHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm0iLCJpZCIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImNvbnRyYWN0IiwiY29udHJhY3RDZWxvIiwic2lnbmVyQWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJDcmVhdGVtb2RhbFNob3ciLCJzZXREb25hdGVNb2RhbFNob3ciLCJBZGRMb3R0ZXJ5bW9kYWxTaG93Iiwic2V0QWRkTG90dGVyeU1vZGFsU2hvdyIsIkJ1eUxvdHRlcnltb2RhbFNob3ciLCJzZXRCdXlMb3R0ZXJ5TW9kYWxTaG93IiwiZXZlbnRJZCIsInNldEV2ZW50SWQiLCJSZWFsRXZlbnRJZCIsInNldFJlYWxFdmVudElkIiwibGlzdCIsInNldExpc3QiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJnb2FsIiwic2V0Z29hbCIsImRhdGVsZWZ0Iiwic2V0ZGF0ZWxlZnQiLCJkYXRlIiwic2V0ZGF0ZSIsImRhdGVsZWZ0QmlkIiwic2V0ZGF0ZWxlZnRCaWQiLCJsb2dvIiwic2V0bG9nbyIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3RyZWNpZCIsInNldHNlbGVjdHJlY2lkIiwic2VsZWN0dGl0bGUiLCJzZXRzZWxlY3R0aXRsZSIsInNlbGVjdHR5cGUiLCJzZXRzZWxlY3R0eXBlIiwiRXZlbnR3YWxsZXQiLCJzZXRFdmVudHdhbGxldCIsInNlbGVjdHdhbGxldCIsInNldHNlbGVjdHdhbGxldCIsIndhbGxldFR5cGUiLCJzZXRXYWxsZXRUeXBlIiwic2VsZWN0YmlkIiwic2V0c2VsZWN0YmlkIiwic2VsZWN0cHJpY2UiLCJzZXRzZWxlY3RwcmljZSIsIkxvdHRlcnlOdW1iZXIiLCJzZXRMb3R0ZXJ5TnVtYmVyIiwiYm9vbFRydWUiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJWaWV3bW9kYWxTaG93Iiwic2V0Vmlld01vZGFsU2hvdyIsIlNhbWVXYWxsZXQiLCJzZXRTYW1lV2FsbGV0IiwiY3VycmVudFdhbGxldCIsInNldEN1cnJlbnRXYWxsZXQiLCJjdXJyZW50V2FsbGV0MiIsImN1cnJlbnRXYWxsZXRCb3VnaHQiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJEYXRlIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwicyIsInRvU3RyaW5nIiwiTGVmdERhdGVCaWQiLCJBdWN0aW9uZmV0Y2hDb250cmFjdERhdGEiLCJwYXRobmFtZSIsIm5lYXJQcmljZSIsIm5lYXJDdXJyZW5jeVVybCIsImN1cnJlbmN5X29wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsImNlbG9QcmljZSIsImNlbG9DdXJyZW5jeVVybCIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImJhc2UiLCJhcGlLZXkiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsImdldElkIiwiZ2V0IiwidXNkcHJpY2UiLCJmb3JtYXQiLCJOdW1iZXIiLCJmaWVsZHMiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJtYXhSZWNvcmRzIiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwidmlldyIsImVhY2hQYWdlIiwicGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiYXJyIiwiZm9yRWFjaCIsImN1cnJlbnRBY2MiLCJ3YWxsZXRBY2NvdW50IiwiX2F1dGhEYXRhIiwiYWNjb3VudElkIiwiZXRoZXJldW0iLCJzZWxlY3RlZEFkZHJlc3MiLCJpc2JvdWdodCIsImdvYWxQcmljZTJ1c2QiLCJwdXNoIiwicmVjSWQiLCJJZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkJpZHByaWNlIiwidHlwZSIsImltYWdlIiwibG90dGVyeSIsInRpY2tldG51bWJlciIsIm93bmVyV2FsbGV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZG9uZSIsIm5mdHJlY2lkIiwidXNlcnMiLCJwYXJ0aWNpcGF0ZWQiLCJlIiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFjdGl2YXRlVmlld0JpZE1vZGFsIiwidGFyZ2V0IiwiYWN0aXZhdGVCaWRORlRNb2RhbCIsImFkZHRvTG90dGVyeSIsIkJ1eUxvdHRlcnkiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiVG9wYnV0dG9uIiwiY29sb3IiLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJoZWlnaHQiLCJ3aWR0aCIsImZsb2F0IiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJkaXNwbGF5IiwiZ2FwIiwicG9zaXRpb24iLCJyaWdodCIsIm1hcmdpbiIsImZvbnRTaXplIiwicm93R2FwIiwibGlzdEl0ZW0iLCJtYXhXaWR0aCIsInRvRml4ZWQiLCJ3YWxsZXQiXSwic291cmNlUm9vdCI6IiJ9