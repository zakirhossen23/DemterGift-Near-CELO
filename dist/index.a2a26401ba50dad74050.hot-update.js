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

  var lotteryNFTDatelist = []; // let currentNFTname = "";

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_9__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      currentNFTname = _useState2[0],
      setcurrentNFTname = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      totalParticipated = _useState4[0],
      settotalParticipated = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      currentNFTstartDate = _useState6[0],
      setcurrentNFTstartDate = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      currentNFTendDate = _useState8[0],
      setcurrentNFTendDate = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      senderAddress = _useState10[0],
      setsenderAddress = _useState10[1];

  var lotteryBought = [];

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyR1Rrcl9O2s9bTs'
  });

  var base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      currentNFTid = _useState12[0],
      setcurrentNFTid = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState14 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
      currentTokenid = _useState14[0],
      setcurrentTokenid = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      RecEventID = _useState16[0],
      setRecEventID = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      NFTslist = _useState18[0],
      setNFTslist = _useState18[1];

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
    _NFTsfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var arr, Airtable, base, currentList, i, eList, test, done, value;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (!(id && window.location.pathname == "/lottery")) {
                _context11.next = 31;
                break;
              }

              arr = [];
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              i = lotteryNFTDatelist.length;

            case 5:
              if (!(i > 0)) {
                _context11.next = 31;
                break;
              }

              eList = lotteryNFTDatelist[i - 1];
              currentList = eList;
              arr = [];
              _context11.next = 11;
              return base('nfts').select({
                filterByFormula: "({id} = '".concat(eList.nftid, "')"),
                view: "Grid view"
              });

            case 11:
              test = _context11.sent;
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
                  });
                  resolve(arr);
                });
              }).then(function (e) {
                return e;
              });
              _context11.next = 15;
              return done;

            case 15:
              value = _context11.sent;
              NFTslist.push(value[0]);
              console.log(NFTslist);
              setcurrentNFTname(arr[0].name);
              settotalParticipated(arr[0].participated);
              setcurrentNFTendDate(arr[0].endDate);
              setcurrentNFTid(arr[0].id);
              setcurrentNFTstartDate(arr[0].startDate);
              setsenderAddress(arr[0].ownerWallet);
              setcurrentTokenid(arr[0].TokeniD);
              document.getElementById('Loading').style.display = "none";
              document.getElementById('LoadingDate').style.display = "none";
              document.getElementById('LotteryInformation').style.display = "";

            case 28:
              i--;
              _context11.next = 5;
              break;

            case 31:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee6);
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
    _distributeLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      var _context12;

      var arr, test, done, value, winnerNo, receiverAddress;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              arr = [];
              _context13.next = 3;
              return base('lotteryBought').select({
                filterByFormula: "({nftid} = '".concat(currentNFTid, "')"),
                view: "Grid view"
              });

            case 3:
              test = _context13.sent;
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
              _context13.next = 7;
              return done;

            case 7:
              value = _context13.sent;
              lotteryBought = value;
              console.log(value);
              winnerNo = Math.floor(Math.random() * value.length);
              console.log(winnerNo);
              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context12 = "Winner ".concat(value[winnerNo].user, "/")).call(_context12, value[winnerNo].userWallet, "!"));
              receiverAddress = value[winnerNo].userWallet;
              winnerInfo = value[winnerNo];

            case 15:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee7);
    }));
    return _distributeLottery.apply(this, arguments);
  }

  function TransferringNFTtoWinner() {
    return _TransferringNFTtoWinner.apply(this, arguments);
  }

  function _TransferringNFTtoWinner() {
    _TransferringNFTtoWinner = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
      var receiverAddress, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              receiverAddress = winnerInfo.userWallet;
              _context14.next = 3;
              return contract['safeTransferFrom(address,address,uint256)'](senderAddress, receiverAddress, currentTokenid - 1);

            case 3:
              result = _context14.sent;
              window.open("https://explorer.testnet.aurora.dev/tx/".concat(result.hash), "_blank");
              console.log(result);

            case 6:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee8);
    }));
    return _TransferringNFTtoWinner.apply(this, arguments);
  }

  function UpdatingOnAirtable() {
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function _UpdatingOnAirtable() {
    _UpdatingOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context18.next = 5;
              return NFTslist.forEach( /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9(NFT) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          if (!(NFT.id = currentNFTid)) {
                            _context15.next = 3;
                            break;
                          }

                          _context15.next = 3;
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
                          return _context15.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function (_x9) {
                  return _ref3.apply(this, arguments);
                };
              }());

            case 5:
              _context18.next = 7;
              return lotteryNFTDatelist.forEach( /*#__PURE__*/function () {
                var _ref4 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10(Lottery) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          if (!(Lottery.nftid == currentNFTid)) {
                            _context16.next = 3;
                            break;
                          }

                          _context16.next = 3;
                          return base('lottery').destroy([Lottery.recid], function (err, deletedRecords) {
                            if (err) {
                              console.error(err);
                              return;
                            }

                            console.log('Deleted', deletedRecords.length, 'records');
                          });

                        case 3:
                        case "end":
                          return _context16.stop();
                      }
                    }
                  }, _callee10);
                }));

                return function (_x10) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 7:
              _context18.next = 9;
              return lotteryBought.forEach( /*#__PURE__*/function () {
                var _ref5 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11(Person) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context17) {
                    while (1) {
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          if (!(Person.nftid == currentNFTid)) {
                            _context17.next = 3;
                            break;
                          }

                          _context17.next = 3;
                          return base('lotteryBought').destroy([Person.recid], function (err, deletedRecords) {
                            if (err) {
                              console.error(err);
                              return;
                            }

                            console.log('Deleted', deletedRecords.length, 'records');
                          });

                        case 3:
                        case "end":
                          return _context17.stop();
                      }
                    }
                  }, _callee11);
                }));

                return function (_x11) {
                  return _ref5.apply(this, arguments);
                };
              }());

            case 9:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee12);
    }));
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function distribute() {
    return _distribute.apply(this, arguments);
  }

  function _distribute() {
    _distribute = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(distributeLottery, {
                pending: "Distributing...",
                error: "Please try again later",
                success: "Distributed successfully!"
              });

            case 2:
              _context19.next = 4;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(TransferringNFTtoWinner, {
                pending: "Transferring NFT to winner",
                error: "Please try again later",
                success: "Transferred successfully!"
              });

            case 4:
              _context19.next = 6;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(UpdatingOnAirtable, {
                pending: "Updating on Airtable",
                error: "Please try again later",
                success: "Updated successfully!"
              });

            case 6:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee13);
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
    var current = new Date();
    var NFTEndDate = new Date(currentNFTendDate);
    var differcne = NFTEndDate - current;

    if (differcne > 0) {
      return false;
    } else {
      return true;
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (window.location.pathname == "/lottery") {
      if (checkTime == false) {
        calculateTimeLeft();
      } else {
        document.getElementsByName("dateleftInformation")[0].style.display = "none";
      }
    }
  });

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
/******/ 	__webpack_require__.h = function() { return "92bfd736ba6080bc656c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmEyYTI2NDAxYmE1MGRhZDc0MDUwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUNELE1BQUlLLGtCQUFrQixHQUFHLEVBQXpCLENBWjhCLENBYTlCOztBQUNBLHFCQUFvQ1osaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUWEsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLGtCQUE0Q3JCLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT3NCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUFrRHZCLCtDQUFRLENBQUMsQ0FBRCxDQUExRDtBQUFBO0FBQUEsTUFBT3dCLGlCQUFQO0FBQUEsTUFBMEJDLG9CQUExQjs7QUFDQSxtQkFBc0R6QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUQ7QUFBQTtBQUFBLE1BQU8wQixtQkFBUDtBQUFBLE1BQTRCQyxzQkFBNUI7O0FBQ0EsbUJBQWtEM0Is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QVUsRUFBRSxpQkFBZDtBQUFpQ0UsUUFBQUEsS0FBSyxFQUFFLE1BQXhDO0FBQWdERSxRQUFBQSxNQUFNLEVBQUUsTUFBeEQ7QUFBZ0VOLFFBQUFBLEtBQUssRUFBRTtBQUF2RTtBQURYLG9CQUVJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBeUIsV0FBSyxFQUFFO0FBQUVVLFFBQUFBLFFBQVEsRUFBRSxFQUFaO0FBQWdCSixRQUFBQSxNQUFNLEVBQUUsTUFBeEI7QUFBZ0NILFFBQUFBLFNBQVMsRUFBRSxRQUEzQztBQUFxRHNCLFFBQUFBLFVBQVUsRUFBRSxLQUFqRTtBQUF3RVosUUFBQUEsWUFBWSxFQUFFO0FBQXRGO0FBQWhDLE9BQ00zSSxZQUFZLElBQUltSixRQUFRLENBQUMzSyxFQUExQixnQkFBaUMsMkdBQU0wSSxTQUFTLENBQUNpQyxRQUFRLENBQUM3RyxTQUFWLENBQWYsQ0FBakMsZ0JBQTZFLGtIQURsRixDQUZKLENBRkosQ0FESixDQURKLENBaEJKLENBTkosQ0FESixDQURjO0FBQUEsR0FBVCxDQWxGYixDQURKO0FBdUlIOzs7Ozs7OztVQ2hmRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2xvdHRlcnkvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb3R0ZXJ5KCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcbiAgICBjb25zdCBzdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuICAgIGxldCBsb3R0ZXJ5TkZURGF0ZWxpc3QgPSBbXTtcbiAgICAvLyBsZXQgY3VycmVudE5GVG5hbWUgPSBcIlwiO1xuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBjb25zdCBbY3VycmVudE5GVG5hbWUsIHNldGN1cnJlbnRORlRuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdG90YWxQYXJ0aWNpcGF0ZWQsIHNldHRvdGFsUGFydGljaXBhdGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtjdXJyZW50TkZUc3RhcnREYXRlLCBzZXRjdXJyZW50TkZUc3RhcnREYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY3VycmVudE5GVGVuZERhdGUsIHNldGN1cnJlbnRORlRlbmREYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc2VuZGVyQWRkcmVzcywgc2V0c2VuZGVyQWRkcmVzc10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgbGV0IGxvdHRlcnlCb3VnaHQgPSBbXTtcblxuXG4gICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgIH0pO1xuICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICBjb25zdCBbY3VycmVudE5GVGlkLCBzZXRjdXJyZW50TkZUaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRUb2tlbmlkLCBzZXRjdXJyZW50VG9rZW5pZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbUmVjRXZlbnRJRCwgc2V0UmVjRXZlbnRJRF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICB2YXIgW05GVHNsaXN0LCBzZXRORlRzbGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIExvdHRlcnlmZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcblxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgICAgIHZhciBmaW5kRXZlbnRzID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7aWR9ID0gJyR7aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgc2V0UmVjRXZlbnRJRChyZWNvcmRzWzBdLmdldElkKCkpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZHNbMF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEV2ZW50ID0gYXdhaXQgZmluZEV2ZW50cztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRXZlbnQpO1xuXG4gICAgICAgICAgICB2YXIgZmluZExvdHRlcnkgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeScpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7ZXZlbnRpZH0gPSAnJHtpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IFt7IGZpZWxkOiBcInN0YXJ0RGF0ZVwiLCBkaXJlY3Rpb246IFwiYXNjXCIgfV0sXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShhc3luYyBmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IHJlY29yZHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5mdGlkOiByZWNvcmQuZ2V0KFwibmZ0aWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiByZWNvcmQuZ2V0KFwic3RhcnREYXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IHJlY29yZC5nZXQoXCJlbmREYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb3R0ZXJ5TkZURGF0ZWxpc3QgPSAoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KS50aGVuKGU9PntyZXR1cm4gZX0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgZmluZExvdHRlcnkpO1xuICAgICAgICAgICAgYXdhaXQgTkZUc2ZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBORlRzZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG4gICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50TGlzdDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsb3R0ZXJ5TkZURGF0ZWxpc3QubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVMaXN0ID0gbG90dGVyeU5GVERhdGVsaXN0W2kgLSAxXTtcbiAgICAgICAgICAgICAgICBjdXJyZW50TGlzdCA9IGVMaXN0O1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9IGF3YWl0IGJhc2UoJ25mdHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2VMaXN0Lm5mdGlkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdmFyIGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3QuZmlyc3RQYWdlKChlcnIsIHJlY29yZHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Qoe30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmdldCgnaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmdldCgnbmFtZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVjb3JkLmdldCgnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHJlY29yZC5nZXQoJ3ByaWNlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZWNvcmQuZ2V0KCdpbWFnZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IGN1cnJlbnRMaXN0LnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogY3VycmVudExpc3QuZW5kRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVkOiByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJXYWxsZXQ6IHJlY29yZC5nZXQoJ293bmVyV2FsbGV0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuaUQ6IHJlY29yZC5nZXQoJ1Rva2VuSUQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhd2FpdCBkb25lO1xuICAgICAgICAgICAgICAgIE5GVHNsaXN0LnB1c2godmFsdWVbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE5GVHNsaXN0KTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUbmFtZShhcnJbMF0ubmFtZSk7XG4gICAgICAgICAgICAgICAgc2V0dG90YWxQYXJ0aWNpcGF0ZWQoYXJyWzBdLnBhcnRpY2lwYXRlZCk7XG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudE5GVGVuZERhdGUoYXJyWzBdLmVuZERhdGUpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRpZChhcnJbMF0uaWQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRzdGFydERhdGUoYXJyWzBdLnN0YXJ0RGF0ZSk7XG4gICAgICAgICAgICAgICAgc2V0c2VuZGVyQWRkcmVzcyhhcnJbMF0ub3duZXJXYWxsZXQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRUb2tlbmlkKGFyclswXS5Ub2tlbmlEKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZ0RhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvdHRlcnlJbmZvcm1hdGlvbicpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXdhaXQgbG90dGVyeU5GVERhdGVsaXN0LmZvckVhY2goYXN5bmMgKGVMaXN0KSA9PiB7XG5cbiAgICAgICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIExvdHRlcnlmZXRjaENvbnRyYWN0RGF0YSgpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgbGV0IHdpbm5lckluZm87XG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzdHJpYnV0ZUxvdHRlcnkoKSB7XG4gICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgdmFyIHRlc3QgPSBhd2FpdCBiYXNlKCdsb3R0ZXJ5Qm91Z2h0Jykuc2VsZWN0KHtcbiAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7bmZ0aWR9ID0gJyR7Y3VycmVudE5GVGlkfScpYCxcbiAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0ZXN0LmZpcnN0UGFnZSgoZXJyLCByZWNvcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHt9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5nZXQoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiByZWNvcmQuZ2V0KCd1c2VyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyV2FsbGV0OiByZWNvcmQuZ2V0KCd1c2VyV2FsbGV0JylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSBhd2FpdCBkb25lO1xuICAgICAgICBsb3R0ZXJ5Qm91Z2h0ID0gdmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgdmFyIHdpbm5lck5vID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2cod2lubmVyTm8pO1xuICAgICAgICB0b2FzdC5zdWNjZXNzKGBXaW5uZXIgJHt2YWx1ZVt3aW5uZXJOb10udXNlcn0vJHt2YWx1ZVt3aW5uZXJOb10udXNlcldhbGxldH0hYCk7XG4gICAgICAgIGxldCByZWNlaXZlckFkZHJlc3MgPSB2YWx1ZVt3aW5uZXJOb10udXNlcldhbGxldDtcbiAgICAgICAgd2lubmVySW5mbyA9IHZhbHVlW3dpbm5lck5vXTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBUcmFuc2ZlcnJpbmdORlR0b1dpbm5lcigpIHtcblxuICAgICAgICBsZXQgcmVjZWl2ZXJBZGRyZXNzID0gd2lubmVySW5mby51c2VyV2FsbGV0O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdFtcbiAgICAgICAgICAgICdzYWZlVHJhbnNmZXJGcm9tKGFkZHJlc3MsYWRkcmVzcyx1aW50MjU2KSdcbiAgICAgICAgXShzZW5kZXJBZGRyZXNzLCByZWNlaXZlckFkZHJlc3MsIGN1cnJlbnRUb2tlbmlkIC0gMSk7XG4gICAgICAgIHdpbmRvdy5vcGVuKGBodHRwczovL2V4cGxvcmVyLnRlc3RuZXQuYXVyb3JhLmRldi90eC8ke3Jlc3VsdC5oYXNofWAsIFwiX2JsYW5rXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gVXBkYXRpbmdPbkFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cblxuICAgICAgICBhd2FpdCBORlRzbGlzdC5mb3JFYWNoKGFzeW5jIChORlQpID0+IHtcbiAgICAgICAgICAgIGlmIChORlQuaWQgPSBjdXJyZW50TkZUaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuZGVzdHJveShbTkZULnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZignL2RvbmF0aW9uJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgYXdhaXQgbG90dGVyeU5GVERhdGVsaXN0LmZvckVhY2goYXN5bmMgKExvdHRlcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChMb3R0ZXJ5Lm5mdGlkID09IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5kZXN0cm95KFtMb3R0ZXJ5LnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IGxvdHRlcnlCb3VnaHQuZm9yRWFjaChhc3luYyAoUGVyc29uKSA9PiB7XG4gICAgICAgICAgICBpZiAoUGVyc29uLm5mdGlkID09IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5kZXN0cm95KFtQZXJzb24ucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBkaXN0cmlidXRlKCkge1xuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKGRpc3RyaWJ1dGVMb3R0ZXJ5LCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIkRpc3RyaWJ1dGluZy4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJEaXN0cmlidXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShUcmFuc2ZlcnJpbmdORlR0b1dpbm5lciwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJUcmFuc2ZlcnJpbmcgTkZUIHRvIHdpbm5lclwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShVcGRhdGluZ09uQWlydGFibGUsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiVXBkYXRpbmcgb24gQWlydGFibGVcIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiVXBkYXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1RpbWUoKSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIE5GVEVuZERhdGUgPSBuZXcgRGF0ZShjdXJyZW50TkZUZW5kRGF0ZSk7XG4gICAgICAgIHZhciBkaWZmZXJjbmUgPSBORlRFbmREYXRlIC0gY3VycmVudDtcbiAgICAgICAgaWYgKGRpZmZlcmNuZSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcbiAgICAgICAgICAgIGlmIChjaGVja1RpbWUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoaFRleHQsIG1UZXh0LCBzVGV4dCkge1xuICAgICAgICBsZXQgY29udmVydGVkSCA9IFwiXCI7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRNID0gXCJcIjtcbiAgICAgICAgbGV0IEFtUE0gPSBcIlwiO1xuICAgICAgICBpZiAoaFRleHQgPCAxMikge1xuICAgICAgICAgICAgQW1QTSA9IFwiQU1cIjtcbiAgICAgICAgICAgIGlmIChoVGV4dCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtoVGV4dH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7aFRleHR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXZpZGVkSCA9IGhUZXh0IC8gMjtcbiAgICAgICAgICAgIEFtUE0gPSBcIlBNXCI7XG4gICAgICAgICAgICBpZiAoZGl2aWRlZEggPCAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgMCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAke2RpdmlkZWRIfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1UZXh0IDwgMTApIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgMCR7bVRleHR9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgJHttVGV4dH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2NvbnZlcnRlZEh9OiR7Y29udmVydGVkTX0gJHtBbVBNfWA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENoZWNrRGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1vbnRoKCk7XG4gICAgICAgIHZhciB5ID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBoID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEhvdXJzKCk7XG4gICAgICAgIHZhciBtbiA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHZhciBzID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFNlY29uZHMoKTtcblxuICAgICAgICByZXR1cm4gKGAke2QudG9TdHJpbmcoKX0vJHttLnRvU3RyaW5nKCl9LyR7eS50b1N0cmluZygpfSAke2dldERhdGVUaW1lKGgsIG1uLCBzKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7UmVjRXZlbnRJRH1dYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBBdWN0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHJnYigxMSAyMTQgMTkwKSAwJSwgcmdiKDI1NSAxNDEgMCkgNzclKVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDY3LFxuICAgICAgICAgICAgICAgICAgICBmbGV4RmxvdzogXCJyb3cgbm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMHJlbVwiLCBwYWRkaW5nOiBcIjNyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkxvYWRpbmdEYXRlXCIgc3R5bGU9e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAyNzksIGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J0xvdHRlcnlJbmZvcm1hdGlvbicgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJkYXJrYmx1ZVwiLCBtYXJnaW5Ub3A6IDM0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TkZUbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgcGFydGljaXBhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjAwYjEsICMwMGZmODkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDM4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIiM1ZDFmZmYgc29saWQgMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbFBhcnRpY2lwYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgbmFtZT0nZGF0ZWxlZnRJbmZvcm1hdGlvbicgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMjdweCcgfX0gZGF0ZT17Y3VycmVudE5GVGVuZERhdGV9PntMZWZ0RGF0ZShjdXJyZW50TkZUZW5kRGF0ZSl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZGlzdHJpYnV0ZX0gaWQ9XCJkaXN0cmlidXRlXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiA0MSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogMTg0LCBib3JkZXJSYWRpdXM6IDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge05GVHNsaXN0LmZsYXRNYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoMjk1ZGVnLCAjMGJkNmJlLCAjYTI0MWRmKVwiLCBtYXJnaW5Ub3A6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5pZH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xpc3RJdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbGV4RGlyZWN0aW9uOiAncm93JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JywgYWxpZ25Db250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogXCIydndcIiwgY29sb3I6IFwid2hpdGVcIiB9fT57bGlzdEl0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBEYXRlOiB7Q2hlY2tEYXRlKGxpc3RJdGVtLnN0YXJ0RGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQgRGF0ZTogICB7Q2hlY2tEYXRlKGxpc3RJdGVtLmVuZERhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFbGVtZW50Qm90dG9tQ29udGFpbmVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnNTY1cHgnLCBtYXJnaW46ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgbWFyZ2luQm90dG9tOiAnMzNweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyNjdweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDE3LCAzNCwgNDcpJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmlkcHJpY2VcIiBzdHlsZT17eyBmb250U2l6ZTogMjQsIGhlaWdodDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIzLjZcIiwgYm9yZGVyUmFkaXVzOiA0MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY3VycmVudE5GVGlkICE9IGxpc3RJdGVtLmlkKSA/ICg8PkF0IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX08Lz4pIDogKDw+SW4gUHJvZ3Jlc3M8Lz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG5cblxuXG5cblxuXG4gICAgICAgIDwvPlxuICAgICk7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjkyYmZkNzM2YmE2MDgwYmM2NTZjXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsIk5hdkxpbmsiLCJ0b2FzdCIsIm5lYXJBUEkiLCJCdXR0b24iLCJ1c2VDb250cmFjdCIsIkxvdHRlcnkiLCJyZWdleCIsInN0ciIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsImlkIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwibG90dGVyeU5GVERhdGVsaXN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwiY3VycmVudE5GVG5hbWUiLCJzZXRjdXJyZW50TkZUbmFtZSIsInRvdGFsUGFydGljaXBhdGVkIiwic2V0dG90YWxQYXJ0aWNpcGF0ZWQiLCJjdXJyZW50TkZUc3RhcnREYXRlIiwic2V0Y3VycmVudE5GVHN0YXJ0RGF0ZSIsImN1cnJlbnRORlRlbmREYXRlIiwic2V0Y3VycmVudE5GVGVuZERhdGUiLCJzZW5kZXJBZGRyZXNzIiwic2V0c2VuZGVyQWRkcmVzcyIsImxvdHRlcnlCb3VnaHQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50TkZUaWQiLCJzZXRjdXJyZW50TkZUaWQiLCJjdXJyZW50VG9rZW5pZCIsInNldGN1cnJlbnRUb2tlbmlkIiwiUmVjRXZlbnRJRCIsInNldFJlY0V2ZW50SUQiLCJORlRzbGlzdCIsInNldE5GVHNsaXN0IiwiTG90dGVyeWZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiZ2V0SWQiLCJwYWdlIiwidGhlbiIsImUiLCJzZWxlY3RlZEV2ZW50IiwiY29uc29sZSIsImxvZyIsImZpbmRMb3R0ZXJ5Iiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiYXJyIiwiaSIsImxlbmd0aCIsInJlY29yZCIsInB1c2giLCJyZWNpZCIsIm5mdGlkIiwiZ2V0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIk5GVHNmZXRjaENvbnRyYWN0RGF0YSIsImVMaXN0IiwiY3VycmVudExpc3QiLCJ0ZXN0IiwiZG9uZSIsImZpcnN0UGFnZSIsImVyciIsImZvckVhY2giLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlIiwicGFydGljaXBhdGVkIiwib3duZXJXYWxsZXQiLCJUb2tlbmlEIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lubmVySW5mbyIsImRpc3RyaWJ1dGVMb3R0ZXJ5IiwidXNlciIsInVzZXJXYWxsZXQiLCJ3aW5uZXJObyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN1Y2Nlc3MiLCJyZWNlaXZlckFkZHJlc3MiLCJUcmFuc2ZlcnJpbmdORlR0b1dpbm5lciIsInJlc3VsdCIsIm9wZW4iLCJoYXNoIiwiVXBkYXRpbmdPbkFpcnRhYmxlIiwiTkZUIiwiZGVzdHJveSIsImRlbGV0ZWRSZWNvcmRzIiwiZXJyb3IiLCJocmVmIiwiUGVyc29uIiwiZGlzdHJpYnV0ZSIsInByb21pc2UiLCJwZW5kaW5nIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwiZGF0ZSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkxlZnREYXRlIiwiTGVmdERhdGVCaWQiLCJjaGVja1RpbWUiLCJjdXJyZW50IiwiRGF0ZSIsIk5GVEVuZERhdGUiLCJkaWZmZXJjbmUiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsImgiLCJzIiwidG9TdHJpbmciLCJnZXREYXRlVGltZSIsImhUZXh0IiwibVRleHQiLCJzVGV4dCIsImNvbnZlcnRlZEgiLCJjb252ZXJ0ZWRNIiwiQW1QTSIsImRpdmlkZWRIIiwiQ2hlY2tEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwieSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJtbiIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2FwIiwicG9zaXRpb24iLCJyaWdodCIsImNvbG9yIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwid2lkdGgiLCJjdXJzb3IiLCJoZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwiYWxpZ25TZWxmIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyUmFkaXVzIiwiZmxleEZsb3ciLCJwbGFjZUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJsaXN0SXRlbSIsImZsZXhEaXJlY3Rpb24iLCJyb3dHYXAiLCJtYXJnaW5Cb3R0b20iLCJsaW5lSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==