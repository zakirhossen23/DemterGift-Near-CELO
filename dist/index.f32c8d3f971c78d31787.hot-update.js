"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/pages/lottery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/lottery/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Lottery; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/flat-map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/flat-map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");













function Lottery() {
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

  var lotteryNFTDatelist = [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      currentNFTname = _useState2[0],
      setcurrentNFTname = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      currentNFTendDate = _useState4[0],
      setcurrentNFTendDate = _useState4[1];

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_9__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      totalParticipated = _useState6[0],
      settotalParticipated = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      senderAddress = _useState8[0],
      setsenderAddress = _useState8[1];

  var lotteryBought = [];

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyR1Rrcl9O2s9bTs'
  });

  var base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      currentNFTid = _useState10[0],
      setcurrentNFTid = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      currentTokenid = _useState12[0],
      setcurrentTokenid = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      RecEventID = _useState14[0],
      setRecEventID = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      NFTslist = _useState16[0],
      setNFTslist = _useState16[1];

  function LotteryfetchContractData() {
    return _LotteryfetchContractData.apply(this, arguments);
  }

  function _LotteryfetchContractData() {
    _LotteryfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var Airtable, base, findEvents, selectedEvent, findLottery;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (!(id && window.location.pathname == "/lottery")) {
                _context10.next = 16;
                break;
              }

              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              findEvents = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5___default())( /*#__PURE__*/function () {
                var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(resolve, reject) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return base('events').select({
                            filterByFormula: "({id} = '".concat(id, "')"),
                            view: "Grid view"
                          }).eachPage( /*#__PURE__*/function () {
                            var _page = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(records, fetchNextPage) {
                              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      // This function (`page`) will get called for each page of records.
                                      setRecEventID(records[0].getId());
                                      resolve(records[0]);

                                    case 2:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            function page(_x3, _x4) {
                              return _page.apply(this, arguments);
                            }

                            return page;
                          }());

                        case 2:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }()).then(function (e) {
                return e;
              });
              _context10.next = 6;
              return findEvents;

            case 6:
              selectedEvent = _context10.sent;
              console.log(selectedEvent);
              findLottery = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5___default())( /*#__PURE__*/function () {
                var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(resolve, reject) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return base('lottery').select({
                            filterByFormula: "({eventid} = '".concat(id, "')"),
                            sort: [{
                              field: "startDate",
                              direction: "asc"
                            }],
                            view: "Grid view"
                          }).eachPage( /*#__PURE__*/function () {
                            var _page2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(records, fetchNextPage) {
                              var arr, i, record;
                              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context8) {
                                while (1) {
                                  switch (_context8.prev = _context8.next) {
                                    case 0:
                                      // This function (`page`) will get called for each page of records.
                                      arr = [];

                                      for (i = 0; i < records.length; i++) {
                                        record = records[i];
                                        arr.push({
                                          recid: record.getId(),
                                          nftid: record.get("nftid"),
                                          startDate: record.get("startDate"),
                                          endDate: record.get("endDate")
                                        });
                                      }

                                      lotteryNFTDatelist = arr;
                                      resolve(arr);

                                    case 4:
                                    case "end":
                                      return _context8.stop();
                                  }
                                }
                              }, _callee3);
                            }));

                            function page(_x7, _x8) {
                              return _page2.apply(this, arguments);
                            }

                            return page;
                          }());

                        case 2:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x5, _x6) {
                  return _ref2.apply(this, arguments);
                };
              }()).then(function (e) {
                return e;
              });
              _context10.t0 = console;
              _context10.next = 12;
              return findLottery;

            case 12:
              _context10.t1 = _context10.sent;

              _context10.t0.log.call(_context10.t0, _context10.t1);

              _context10.next = 16;
              return NFTsfetchContractData();

            case 16:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee5);
    }));
    return _LotteryfetchContractData.apply(this, arguments);
  }

  function NFTsfetchContractData() {
    return _NFTsfetchContractData.apply(this, arguments);
  }

  function _NFTsfetchContractData() {
    _NFTsfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      var arr, Airtable, base, currentList, _loop, i, findNFTS, done, value;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              if (!(id && window.location.pathname == "/lottery")) {
                _context13.next = 11;
                break;
              }

              arr = [];
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              _loop = /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _loop(i) {
                var eList, selectNFT;
                return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _loop$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        eList = lotteryNFTDatelist[i - 1];
                        currentList = eList;
                        arr = [];
                        findNFTS = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5___default())( /*#__PURE__*/function () {
                          var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6(resolve, reject) {
                            return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context11) {
                              while (1) {
                                switch (_context11.prev = _context11.next) {
                                  case 0:
                                    _context11.next = 2;
                                    return base('nfts').select({
                                      filterByFormula: "({id} = '".concat(eList.nftid, "')"),
                                      view: "Grid view"
                                    }).eachPage(function page(records, fetchNextPage) {
                                      resolve(records);
                                    });

                                  case 2:
                                  case "end":
                                    return _context11.stop();
                                }
                              }
                            }, _callee6);
                          }));

                          return function (_x9, _x10) {
                            return _ref3.apply(this, arguments);
                          };
                        }()).then(function (e) {
                          return e;
                        });
                        _context12.next = 6;
                        return findNFTS;

                      case 6:
                        selectNFT = _context12.sent;
                        console.log(selectNFT);
                        done = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5___default())(function (resolve, reject) {
                          for (var _i2 = 0; _i2 < selectNFT.length; _i2++) {
                            var record = selectNFT[_i2];
                            arr.push({
                              recid: record.getId(),
                              id: record.get('id'),
                              name: record.get('name'),
                              description: record.get('description'),
                              price: record.get('price'),
                              image: record.get('image'),
                              startDate: currentList.startDate,
                              endDate: currentList.endDate,
                              participated: record.get('participated'),
                              ownerWallet: record.get('ownerWallet'),
                              TokeniD: record.get('TokenID')
                            });
                          }

                          resolve(arr);
                        }).then(function (e) {
                          return e;
                        });
                        _context12.next = 11;
                        return done;

                      case 11:
                        value = _context12.sent;
                        NFTslist.push(value[0]);
                        console.log(NFTslist);
                        settotalParticipated(arr[0].participated);
                        setcurrentNFTname(arr[0].name);
                        setcurrentNFTendDate(arr[0].endDate);
                        setcurrentNFTid(arr[0].id);
                        setsenderAddress(arr[0].ownerWallet);
                        setcurrentTokenid(arr[0].TokeniD);
                        document.getElementById('Loading').style.display = "none";
                        document.getElementById('LoadingDate').style.display = "none";
                        document.getElementById('LotteryInformation').style.display = "";

                      case 23:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _loop);
              });
              i = lotteryNFTDatelist.length;

            case 6:
              if (!(i > 0)) {
                _context13.next = 11;
                break;
              }

              return _context13.delegateYield(_loop(i), "t0", 8);

            case 8:
              i--;
              _context13.next = 6;
              break;

            case 11:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee7);
    }));
    return _NFTsfetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    LotteryfetchContractData();
  }, []);
  var winnerInfo;

  function distributeLottery() {
    return _distributeLottery.apply(this, arguments);
  }

  function _distributeLottery() {
    _distributeLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
      var _context14;

      var arr, test, done, value, winnerNo, receiverAddress;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              arr = [];
              _context15.next = 3;
              return base('lotteryBought').select({
                filterByFormula: "({nftid} = '".concat(currentNFTid, "')"),
                view: "Grid view"
              });

            case 3:
              test = _context15.sent;
              done = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_5___default())(function (resolve, reject) {
                test.firstPage(function (err, records) {
                  if (err) {
                    console.log(err);
                    return reject({});
                  }

                  records.forEach(function (record) {
                    arr.push({
                      recid: record.getId(),
                      id: record.get('id'),
                      user: record.get('user'),
                      userWallet: record.get('userWallet')
                    });
                  });
                  resolve(arr);
                });
              }).then(function (e) {
                return e;
              });
              _context15.next = 7;
              return done;

            case 7:
              value = _context15.sent;
              lotteryBought = value;
              console.log(value);
              winnerNo = Math.floor(Math.random() * value.length);
              console.log(winnerNo);
              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context14 = "Winner ".concat(value[winnerNo].user, "/")).call(_context14, value[winnerNo].userWallet, "!"));
              receiverAddress = value[winnerNo].userWallet;
              winnerInfo = value[winnerNo];

            case 15:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee8);
    }));
    return _distributeLottery.apply(this, arguments);
  }

  function TransferringNFTtoWinner() {
    return _TransferringNFTtoWinner.apply(this, arguments);
  }

  function _TransferringNFTtoWinner() {
    _TransferringNFTtoWinner = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
      var receiverAddress, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              receiverAddress = winnerInfo.userWallet;
              _context16.next = 3;
              return contract['safeTransferFrom(address,address,uint256)'](senderAddress, receiverAddress, currentTokenid - 1);

            case 3:
              result = _context16.sent;
              window.open("https://explorer.testnet.aurora.dev/tx/".concat(result.hash), "_blank");
              console.log(result);

            case 6:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee9);
    }));
    return _TransferringNFTtoWinner.apply(this, arguments);
  }

  function UpdatingOnAirtable() {
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function _UpdatingOnAirtable() {
    _UpdatingOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context20.next = 5;
              return NFTslist.forEach( /*#__PURE__*/function () {
                var _ref4 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10(NFT) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context17) {
                    while (1) {
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          if (!(NFT.id = currentNFTid)) {
                            _context17.next = 3;
                            break;
                          }

                          _context17.next = 3;
                          return base('nfts').destroy([NFT.recid], function (err, deletedRecords) {
                            if (err) {
                              console.error(err);
                              return;
                            }

                            console.log('Deleted', deletedRecords.length, 'records');
                            window.location.href('/donation');
                          });

                        case 3:
                        case "end":
                          return _context17.stop();
                      }
                    }
                  }, _callee10);
                }));

                return function (_x11) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 5:
              _context20.next = 7;
              return lotteryNFTDatelist.forEach( /*#__PURE__*/function () {
                var _ref5 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11(Lottery) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context18) {
                    while (1) {
                      switch (_context18.prev = _context18.next) {
                        case 0:
                          if (!(Lottery.nftid == currentNFTid)) {
                            _context18.next = 3;
                            break;
                          }

                          _context18.next = 3;
                          return base('lottery').destroy([Lottery.recid], function (err, deletedRecords) {
                            if (err) {
                              console.error(err);
                              return;
                            }

                            console.log('Deleted', deletedRecords.length, 'records');
                          });

                        case 3:
                        case "end":
                          return _context18.stop();
                      }
                    }
                  }, _callee11);
                }));

                return function (_x12) {
                  return _ref5.apply(this, arguments);
                };
              }());

            case 7:
              _context20.next = 9;
              return lotteryBought.forEach( /*#__PURE__*/function () {
                var _ref6 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12(Person) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context19) {
                    while (1) {
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          if (!(Person.nftid == currentNFTid)) {
                            _context19.next = 3;
                            break;
                          }

                          _context19.next = 3;
                          return base('lotteryBought').destroy([Person.recid], function (err, deletedRecords) {
                            if (err) {
                              console.error(err);
                              return;
                            }

                            console.log('Deleted', deletedRecords.length, 'records');
                          });

                        case 3:
                        case "end":
                          return _context19.stop();
                      }
                    }
                  }, _callee12);
                }));

                return function (_x13) {
                  return _ref6.apply(this, arguments);
                };
              }());

            case 9:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee13);
    }));
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function distribute() {
    return _distribute.apply(this, arguments);
  }

  function _distribute() {
    _distribute = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee14() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee14$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              _context21.next = 2;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(distributeLottery, {
                pending: "Distributing...",
                error: "Please try again later",
                success: "Distributed successfully!"
              });

            case 2:
              _context21.next = 4;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(TransferringNFTtoWinner, {
                pending: "Transferring NFT to winner",
                error: "Please try again later",
                success: "Transferred successfully!"
              });

            case 4:
              _context21.next = 6;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(UpdatingOnAirtable, {
                pending: "Updating on Airtable",
                error: "Please try again later",
                success: "Updated successfully!"
              });

            case 6:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee14);
    }));
    return _distribute.apply(this, arguments);
  }

  function calculateTimeLeft() {
    try {
      var allDates = document.getElementsByName("dateleftInformation");

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

  function checkTime() {
    if (NFTslist[0]) {
      var current = new Date();
      var NFTEndDate = new Date(NFTslist[0].endDate);
      var differcne = NFTEndDate - current;

      if (differcne > 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  setInterval(function () {
    if (window.location.pathname == "/lottery") {
      if (checkTime() == false) {
        calculateTimeLeft();
      } else {
        document.getElementsByName("dateleftInformation")[0].style.display = "none";
      }
    }
  }, 1000);

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s";
  }

  function getDateTime(hText, mText, sText) {
    var _context, _context2;

    var convertedH = "";
    var convertedM = "";
    var AmPM = "";

    if (hText < 12) {
      AmPM = "AM";

      if (hText < 10) {
        convertedH = "0".concat(hText);
      } else {
        convertedH = "".concat(hText);
      }
    } else {
      var dividedH = hText / 2;
      AmPM = "PM";

      if (dividedH < 10) {
        convertedH = "0".concat(dividedH);
      } else {
        convertedH = "".concat(dividedH);
      }
    }

    if (mText < 10) {
      convertedM = "0".concat(mText);
    } else {
      convertedM = "".concat(mText);
    }

    return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = "".concat(convertedH, ":")).call(_context2, convertedM, " ")).call(_context, AmPM);
  }

  function CheckDate(datetext) {
    var _context3, _context4, _context5;

    var d = new Date(datetext).getDate();
    var m = new Date(datetext).getMonth();
    var y = new Date(datetext).getFullYear();
    var h = new Date(datetext).getHours();
    var mn = new Date(datetext).getMinutes();
    var s = new Date(datetext).getSeconds();
    return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context5 = "".concat(d.toString(), "/")).call(_context5, m.toString(), "/")).call(_context4, y.toString(), " ")).call(_context3, getDateTime(h, mn, s));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink, {
    to: "/donation/auction?[".concat(RecEventID, "]")
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
  }, "Go to Auction")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      width: "20rem",
      height: "20rem",
      alignSelf: 'center',
      backgroundImage: "linear-gradient(rgb(11 214 190) 0%, rgb(255 141 0) 77%)",
      borderRadius: "50%",
      overflow: "hidden",
      margin: 67,
      flexFlow: "row nowrap",
      placeContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      width: "100%",
      height: "10rem",
      padding: "3rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    id: "LoadingDate",
    style: {
      width: 280,
      height: 279,
      display: "flex",
      position: "absolute",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", {
    style: {
      position: "absolute"
    }
  }, "Loading...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    id: "LotteryInformation",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", {
    style: {
      textAlign: "center",
      color: "darkblue",
      marginTop: 34
    }
  }, currentNFTname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h3", {
    style: {
      textAlign: "center",
      color: "black",
      marginTop: 23,
      fontSize: 23
    }
  }, "Total participated"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    style: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", {
    style: {
      textAlign: "center",
      backgroundImage: "linear-gradient(45deg, #ff00b1, #00ff89)",
      color: "white",
      marginTop: 13,
      width: "18%",
      fontSize: 38,
      height: "20%",
      borderRadius: "50%",
      border: "#5d1fff solid 1px"
    }
  }, totalParticipated)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", {
    name: "dateleftInformation",
    style: {
      textAlign: 'center',
      marginTop: '27px'
    },
    date: currentNFTendDate
  }, LeftDate(currentNFTendDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    onClick: distribute,
    id: "distribute",
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      marginTop: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    style: {
      width: 184,
      borderRadius: 50
    }
  }, "Distribute"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    id: "Loading",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_4___default()(NFTslist).call(NFTslist, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      key: listItem.id,
      className: "row ElementsContainer bgWhite",
      style: {
        backgroundImage: "linear-gradient(295deg, #0bd6be, #a241df)",
        marginTop: 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      key: listItem.id,
      style: {
        width: "100%",
        display: "flex"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("img", {
      src: listItem.image,
      className: "AuctionBidImage",
      style: {
        background: "transparent"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "DetialsContainer",
      style: {
        rowGap: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h2", {
      style: {
        fontSize: "2vw",
        color: "white"
      }
    }, listItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "TextContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        color: "rgb(199 194 194)",
        fontSize: "1.7vw"
      }
    }, listItem.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        color: "rgb(199 194 194)",
        fontSize: "1.7vw"
      }
    }, "Start Date: ", CheckDate(listItem.startDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      style: {
        color: "rgb(199 194 194)",
        fontSize: "1.7vw"
      }
    }, "End Date:   ", CheckDate(listItem.endDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      className: "ElementBottomContainer",
      style: {
        height: '100%',
        width: '565px',
        margin: '0'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        textAlign: 'right',
        marginBottom: '33px',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        width: '267px',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
      style: {
        background: 'rgb(17, 34, 47)',
        width: '100%',
        height: '100%',
        color: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h4", {
      className: "bidprice",
      style: {
        fontSize: 24,
        height: "100%",
        textAlign: "center",
        lineHeight: "3.6",
        borderRadius: 40
      }
    }, currentNFTid != listItem.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, "At ", CheckDate(listItem.startDate)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, "In Progress")))))))));
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "eafb706388bedb681aea"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmYzMmM4ZDNmOTcxYzc4ZDMxNzg3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUNELE1BQUlLLGtCQUFrQixHQUFHLEVBQXpCOztBQUNBLGtCQUEwQ25CLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBS29CLGNBQUw7QUFBQSxNQUFxQkMsaUJBQXJCOztBQUNBLG1CQUFvRHJCLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBO0FBQUEsTUFBT3NCLGlCQUFQO0FBQUEsTUFBMkJDLG9CQUEzQjs7QUFDQSxxQkFBb0NoQixpRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRaUIsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUVBLG1CQUFrRHpCLCtDQUFRLENBQUMsQ0FBRCxDQUExRDtBQUFBO0FBQUEsTUFBTzBCLGlCQUFQO0FBQUEsTUFBMEJDLG9CQUExQjs7QUFDQSxtQkFBd0MzQiwrQ0FBUSxDQUFD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QTdDO0FBQXNEcUIsUUFBQUEsWUFBWSxFQUFFLE1BQXBFO0FBQTRFUCxRQUFBQSxZQUFZLEVBQUUsUUFBMUY7QUFBb0dDLFFBQUFBLGNBQWMsRUFBRSxRQUFwSDtBQUE4SEYsUUFBQUEsVUFBVSxFQUFFO0FBQTFJO0FBQVosb0JBQ0k7QUFDSSxXQUFLLEVBQUU7QUFBRVosUUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JhLFFBQUFBLFlBQVksRUFBRSxRQUFoQztBQUEwQ0QsUUFBQUEsVUFBVSxFQUFFLFFBQXREO0FBQWdFSCxRQUFBQSxZQUFZLEVBQUUsS0FBOUU7QUFBcUZaLFFBQUFBLFFBQVEsRUFBRTtBQUEvRjtBQURYLG9CQUVJO0FBQ0ksV0FBSyxFQUFFO0FBQUVDLFFBQUFBLFVBQVUsRUFBRSxpQkFBZDtBQUFpQ0UsUUFBQUEsS0FBSyxFQUFFLE1BQXhDO0FBQWdERSxRQUFBQSxNQUFNLEVBQUUsTUFBeEQ7QUFBZ0VOLFFBQUFBLEtBQUssRUFBRTtBQUF2RTtBQURYLG9CQUVJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBeUIsV0FBSyxFQUFFO0FBQUVVLFFBQUFBLFFBQVEsRUFBRSxFQUFaO0FBQWdCSixRQUFBQSxNQUFNLEVBQUUsTUFBeEI7QUFBZ0NILFFBQUFBLFNBQVMsRUFBRSxRQUEzQztBQUFxRHNCLFFBQUFBLFVBQVUsRUFBRSxLQUFqRTtBQUF3RVosUUFBQUEsWUFBWSxFQUFFO0FBQXRGO0FBQWhDLE9BQ005SSxZQUFZLElBQUlzSixRQUFRLENBQUM1SyxFQUExQixnQkFBaUMsMkdBQU0ySSxTQUFTLENBQUNpQyxRQUFRLENBQUNoSCxTQUFWLENBQWYsQ0FBakMsZ0JBQTZFLGtIQURsRixDQUZKLENBRkosQ0FESixDQURKLENBaEJKLENBTkosQ0FESixDQURjO0FBQUEsR0FBVCxDQWxGYixDQURKO0FBdUlIOzs7Ozs7OztVQ2pmRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2xvdHRlcnkvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb3R0ZXJ5KCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcbiAgICBjb25zdCBzdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuICAgIGxldCBsb3R0ZXJ5TkZURGF0ZWxpc3QgPSBbXTtcbiAgICBsZXQgW2N1cnJlbnRORlRuYW1lLCBzZXRjdXJyZW50TkZUbmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbY3VycmVudE5GVGVuZERhdGUgLCBzZXRjdXJyZW50TkZUZW5kRGF0ZSBdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIFxuICAgIGNvbnN0IFt0b3RhbFBhcnRpY2lwYXRlZCwgc2V0dG90YWxQYXJ0aWNpcGF0ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgdmFyIFtzZW5kZXJBZGRyZXNzLCBzZXRzZW5kZXJBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGxldCBsb3R0ZXJ5Qm91Z2h0ID0gW107XG5cblxuICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICB9KTtcbiAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgY29uc3QgW2N1cnJlbnRORlRpZCwgc2V0Y3VycmVudE5GVGlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtjdXJyZW50VG9rZW5pZCwgc2V0Y3VycmVudFRva2VuaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW1JlY0V2ZW50SUQsIHNldFJlY0V2ZW50SURdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdmFyIFtORlRzbGlzdCwgc2V0TkZUc2xpc3RdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG5cbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgICAgICB2YXIgZmluZEV2ZW50cyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2lkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHNldFJlY0V2ZW50SUQocmVjb3Jkc1swXS5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRzWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRFdmVudCA9IGF3YWl0IGZpbmRFdmVudHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEV2ZW50KTtcblxuICAgICAgICAgICAgdmFyIGZpbmRMb3R0ZXJ5ID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2V2ZW50aWR9ID0gJyR7aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJzdGFydERhdGVcIiwgZGlyZWN0aW9uOiBcImFzY1wiIH1dLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSByZWNvcmRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnRpZDogcmVjb3JkLmdldChcIm5mdGlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogcmVjb3JkLmdldChcInN0YXJ0RGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiByZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG90dGVyeU5GVERhdGVsaXN0ID0gKGFycik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBmaW5kTG90dGVyeSk7XG4gICAgICAgICAgICBhd2FpdCBORlRzZmV0Y2hDb250cmFjdERhdGEoKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIE5GVHNmZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRMaXN0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxvdHRlcnlORlREYXRlbGlzdC5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgZUxpc3QgPSBsb3R0ZXJ5TkZURGF0ZWxpc3RbaSAtIDFdO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0ID0gZUxpc3Q7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBmaW5kTkZUUyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2VMaXN0Lm5mdGlkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZHMpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdE5GVCA9IGF3YWl0IGZpbmRORlRTO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdE5GVCk7XG5cblxuICAgICAgICAgICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdE5GVC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IHNlbGVjdE5GVFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpZDogcmVjb3JkLmdldElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5nZXQoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmdldCgnbmFtZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZ2V0KCdkZXNjcmlwdGlvbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiByZWNvcmQuZ2V0KCdwcmljZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZWNvcmQuZ2V0KCdpbWFnZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogY3VycmVudExpc3Quc3RhcnREYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IGN1cnJlbnRMaXN0LmVuZERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVkOiByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcldhbGxldDogcmVjb3JkLmdldCgnb3duZXJXYWxsZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbmlEOiByZWNvcmQuZ2V0KCdUb2tlbklEJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFycik7XG4gICAgICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cblxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGF3YWl0IGRvbmU7XG4gICAgICAgICAgICAgICAgTkZUc2xpc3QucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coTkZUc2xpc3QpOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0dG90YWxQYXJ0aWNpcGF0ZWQoYXJyWzBdLnBhcnRpY2lwYXRlZCk7XG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudE5GVG5hbWUoYXJyWzBdLm5hbWUpXG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudE5GVGVuZERhdGUoYXJyWzBdLmVuZERhdGUpXG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudE5GVGlkKGFyclswXS5pZCk7XG4gICAgICAgICAgICAgICAgc2V0c2VuZGVyQWRkcmVzcyhhcnJbMF0ub3duZXJXYWxsZXQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRUb2tlbmlkKGFyclswXS5Ub2tlbmlEKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZ0RhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvdHRlcnlJbmZvcm1hdGlvbicpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgTG90dGVyeWZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgfSwgW10pO1xuXG5cbiAgICBsZXQgd2lubmVySW5mbztcbiAgICBhc3luYyBmdW5jdGlvbiBkaXN0cmlidXRlTG90dGVyeSgpIHtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICB2YXIgdGVzdCA9IGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtuZnRpZH0gPSAnJHtjdXJyZW50TkZUaWR9JylgLFxuICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICB9KVxuICAgICAgICB2YXIgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRlc3QuZmlyc3RQYWdlKChlcnIsIHJlY29yZHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Qoe30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNpZDogcmVjb3JkLmdldElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmdldCgnaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHJlY29yZC5nZXQoJ3VzZXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJXYWxsZXQ6IHJlY29yZC5nZXQoJ3VzZXJXYWxsZXQnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGFycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF3YWl0IGRvbmU7XG4gICAgICAgIGxvdHRlcnlCb3VnaHQgPSB2YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICB2YXIgd2lubmVyTm8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWx1ZS5sZW5ndGgpO1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5uZXJObyk7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoYFdpbm5lciAke3ZhbHVlW3dpbm5lck5vXS51c2VyfS8ke3ZhbHVlW3dpbm5lck5vXS51c2VyV2FsbGV0fSFgKTtcbiAgICAgICAgbGV0IHJlY2VpdmVyQWRkcmVzcyA9IHZhbHVlW3dpbm5lck5vXS51c2VyV2FsbGV0O1xuICAgICAgICB3aW5uZXJJbmZvID0gdmFsdWVbd2lubmVyTm9dO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIFRyYW5zZmVycmluZ05GVHRvV2lubmVyKCkge1xuXG4gICAgICAgIGxldCByZWNlaXZlckFkZHJlc3MgPSB3aW5uZXJJbmZvLnVzZXJXYWxsZXQ7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0W1xuICAgICAgICAgICAgJ3NhZmVUcmFuc2ZlckZyb20oYWRkcmVzcyxhZGRyZXNzLHVpbnQyNTYpJ1xuICAgICAgICBdKHNlbmRlckFkZHJlc3MsIHJlY2VpdmVyQWRkcmVzcywgY3VycmVudFRva2VuaWQgLSAxKTtcbiAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5hdXJvcmEuZGV2L3R4LyR7cmVzdWx0Lmhhc2h9YCwgXCJfYmxhbmtcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBVcGRhdGluZ09uQWlydGFibGUoKSB7XG5cbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXG4gICAgICAgIGF3YWl0IE5GVHNsaXN0LmZvckVhY2goYXN5bmMgKE5GVCkgPT4ge1xuICAgICAgICAgICAgaWYgKE5GVC5pZCA9IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5kZXN0cm95KFtORlQucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmKCcvZG9uYXRpb24nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cblxuICAgICAgICBhd2FpdCBsb3R0ZXJ5TkZURGF0ZWxpc3QuZm9yRWFjaChhc3luYyAoTG90dGVyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKExvdHRlcnkubmZ0aWQgPT0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeScpLmRlc3Ryb3koW0xvdHRlcnkucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgbG90dGVyeUJvdWdodC5mb3JFYWNoKGFzeW5jIChQZXJzb24pID0+IHtcbiAgICAgICAgICAgIGlmIChQZXJzb24ubmZ0aWQgPT0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLmRlc3Ryb3koW1BlcnNvbi5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGUoKSB7XG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoZGlzdHJpYnV0ZUxvdHRlcnksIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRGlzdHJpYnV0aW5nLi4uXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkRpc3RyaWJ1dGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFRyYW5zZmVycmluZ05GVHRvV2lubmVyLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIlRyYW5zZmVycmluZyBORlQgdG8gd2lubmVyXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIlRyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFVwZGF0aW5nT25BaXJ0YWJsZSwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJVcGRhdGluZyBvbiBBaXJ0YWJsZVwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJVcGRhdGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVGltZSgpIHtcbiAgICAgICAgaWYgKE5GVHNsaXN0WzBdKXtcbiAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgTkZURW5kRGF0ZSA9IG5ldyBEYXRlKE5GVHNsaXN0WzBdLmVuZERhdGUpO1xuICAgICAgICB2YXIgZGlmZmVyY25lID0gTkZURW5kRGF0ZSAtIGN1cnJlbnQ7XG4gICAgICAgIGlmIChkaWZmZXJjbmUgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcbiAgICAgICAgICAgIGlmIChjaGVja1RpbWUoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRJbmZvcm1hdGlvblwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSwgMTAwMCk7XG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXREYXRlVGltZShoVGV4dCwgbVRleHQsIHNUZXh0KSB7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRIID0gXCJcIjtcbiAgICAgICAgbGV0IGNvbnZlcnRlZE0gPSBcIlwiO1xuICAgICAgICBsZXQgQW1QTSA9IFwiXCI7XG4gICAgICAgIGlmIChoVGV4dCA8IDEyKSB7XG4gICAgICAgICAgICBBbVBNID0gXCJBTVwiO1xuICAgICAgICAgICAgaWYgKGhUZXh0IDwgMTApIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYDAke2hUZXh0fWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgJHtoVGV4dH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRpdmlkZWRIID0gaFRleHQgLyAyO1xuICAgICAgICAgICAgQW1QTSA9IFwiUE1cIjtcbiAgICAgICAgICAgIGlmIChkaXZpZGVkSCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtkaXZpZGVkSH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobVRleHQgPCAxMCkge1xuICAgICAgICAgICAgY29udmVydGVkTSA9IGAwJHttVGV4dH1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udmVydGVkTSA9IGAke21UZXh0fWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7Y29udmVydGVkSH06JHtjb252ZXJ0ZWRNfSAke0FtUE19YDtcbiAgICB9XG4gICAgZnVuY3Rpb24gQ2hlY2tEYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldERhdGUoKTtcbiAgICAgICAgdmFyIG0gPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0TW9udGgoKTtcbiAgICAgICAgdmFyIHkgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdmFyIGggPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0SG91cnMoKTtcbiAgICAgICAgdmFyIG1uID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgdmFyIHMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0U2Vjb25kcygpO1xuXG4gICAgICAgIHJldHVybiAoYCR7ZC50b1N0cmluZygpfS8ke20udG9TdHJpbmcoKX0vJHt5LnRvU3RyaW5nKCl9ICR7Z2V0RGF0ZVRpbWUoaCwgbW4sIHMpfWApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvZG9uYXRpb24vYXVjdGlvbj9bJHtSZWNFdmVudElEfV1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzIwOHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIEF1Y3Rpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQocmdiKDExIDIxNCAxOTApIDAlLCByZ2IoMjU1IDE0MSAwKSA3NyUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNjcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhGbG93OiBcInJvdyBub3dyYXBcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwcmVtXCIsIHBhZGRpbmc6IFwiM3JlbVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiTG9hZGluZ0RhdGVcIiBzdHlsZT17eyB3aWR0aDogMjgwLCBoZWlnaHQ6IDI3OSwgZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nTG90dGVyeUluZm9ybWF0aW9uJyBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcImRhcmtibHVlXCIsIG1hcmdpblRvcDogMzQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRORlRuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBwYXJ0aWNpcGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmMDBiMSwgIzAwZmY4OSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMzgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiIzVkMWZmZiBzb2xpZCAxcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsUGFydGljaXBhdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBuYW1lPSdkYXRlbGVmdEluZm9ybWF0aW9uJyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcyN3B4JyB9fSBkYXRlPXtjdXJyZW50TkZUZW5kRGF0ZX0+e0xlZnREYXRlKGN1cnJlbnRORlRlbmREYXRlKX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtkaXN0cmlidXRlfSBpZD1cImRpc3RyaWJ1dGVcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IDQxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiAxODQsIGJvcmRlclJhZGl1czogNTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3RyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7TkZUc2xpc3QuZmxhdE1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uaWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCgyOTVkZWcsICMwYmQ2YmUsICNhMjQxZGYpXCIsIG1hcmdpblRvcDogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGlzdEl0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJ2d1wiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PntsaXN0SXRlbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IERhdGU6IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZCBEYXRlOiAgIHtDaGVja0RhdGUobGlzdEl0ZW0uZW5kRGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVsZW1lbnRCb3R0b21Db250YWluZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICc1NjVweCcsIG1hcmdpbjogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgdGV4dEFsaWduOiAncmlnaHQnLCBtYXJnaW5Cb3R0b206ICczM3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI2N3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJvcmRlclJhZGl1czogJzhweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMTcsIDM0LCA0NyknLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiaWRwcmljZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyNCwgaGVpZ2h0OiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjMuNlwiLCBib3JkZXJSYWRpdXM6IDQwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjdXJyZW50TkZUaWQgIT0gbGlzdEl0ZW0uaWQpID8gKDw+QXQge0NoZWNrRGF0ZShsaXN0SXRlbS5zdGFydERhdGUpfTwvPikgOiAoPD5JbiBQcm9ncmVzczwvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuXG5cblxuXG5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZWFmYjcwNjM4OGJlZGI2ODFhZWFcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiTmF2TGluayIsInRvYXN0IiwibmVhckFQSSIsIkJ1dHRvbiIsInVzZUNvbnRyYWN0IiwiTG90dGVyeSIsInJlZ2V4Iiwic3RyIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJsb3R0ZXJ5TkZURGF0ZWxpc3QiLCJjdXJyZW50TkZUbmFtZSIsInNldGN1cnJlbnRORlRuYW1lIiwiY3VycmVudE5GVGVuZERhdGUiLCJzZXRjdXJyZW50TkZUZW5kRGF0ZSIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInRvdGFsUGFydGljaXBhdGVkIiwic2V0dG90YWxQYXJ0aWNpcGF0ZWQiLCJzZW5kZXJBZGRyZXNzIiwic2V0c2VuZGVyQWRkcmVzcyIsImxvdHRlcnlCb3VnaHQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50TkZUaWQiLCJzZXRjdXJyZW50TkZUaWQiLCJjdXJyZW50VG9rZW5pZCIsInNldGN1cnJlbnRUb2tlbmlkIiwiUmVjRXZlbnRJRCIsInNldFJlY0V2ZW50SUQiLCJORlRzbGlzdCIsInNldE5GVHNsaXN0IiwiTG90dGVyeWZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiZ2V0SWQiLCJwYWdlIiwidGhlbiIsImUiLCJzZWxlY3RlZEV2ZW50IiwiY29uc29sZSIsImxvZyIsImZpbmRMb3R0ZXJ5Iiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiYXJyIiwiaSIsImxlbmd0aCIsInJlY29yZCIsInB1c2giLCJyZWNpZCIsIm5mdGlkIiwiZ2V0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIk5GVHNmZXRjaENvbnRyYWN0RGF0YSIsImVMaXN0IiwiY3VycmVudExpc3QiLCJmaW5kTkZUUyIsInNlbGVjdE5GVCIsImRvbmUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlIiwicGFydGljaXBhdGVkIiwib3duZXJXYWxsZXQiLCJUb2tlbmlEIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lubmVySW5mbyIsImRpc3RyaWJ1dGVMb3R0ZXJ5IiwidGVzdCIsImZpcnN0UGFnZSIsImVyciIsImZvckVhY2giLCJ1c2VyIiwidXNlcldhbGxldCIsIndpbm5lck5vIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3VjY2VzcyIsInJlY2VpdmVyQWRkcmVzcyIsIlRyYW5zZmVycmluZ05GVHRvV2lubmVyIiwicmVzdWx0Iiwib3BlbiIsImhhc2giLCJVcGRhdGluZ09uQWlydGFibGUiLCJORlQiLCJkZXN0cm95IiwiZGVsZXRlZFJlY29yZHMiLCJlcnJvciIsImhyZWYiLCJQZXJzb24iLCJkaXN0cmlidXRlIiwicHJvbWlzZSIsInBlbmRpbmciLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJkYXRlIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiTGVmdERhdGUiLCJMZWZ0RGF0ZUJpZCIsImNoZWNrVGltZSIsImN1cnJlbnQiLCJEYXRlIiwiTkZURW5kRGF0ZSIsImRpZmZlcmNuZSIsInNldEludGVydmFsIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJoIiwicyIsInRvU3RyaW5nIiwiZ2V0RGF0ZVRpbWUiLCJoVGV4dCIsIm1UZXh0Iiwic1RleHQiLCJjb252ZXJ0ZWRIIiwiY29udmVydGVkTSIsIkFtUE0iLCJkaXZpZGVkSCIsIkNoZWNrRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsInkiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwibW4iLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdhcCIsInBvc2l0aW9uIiwicmlnaHQiLCJjb2xvciIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsIndpZHRoIiwiY3Vyc29yIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJmb250U2l6ZSIsImFsaWduU2VsZiIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlclJhZGl1cyIsImZsZXhGbG93IiwicGxhY2VDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwibGlzdEl0ZW0iLCJmbGV4RGlyZWN0aW9uIiwicm93R2FwIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=