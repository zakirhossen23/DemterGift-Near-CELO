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

  function checkTime() {
    var current = new Date();
    var NFTEndDate = new Date(currentNFTendDate);
    var differcne = NFTEndDate - current;

    if (differcne > 0) {
      return true;
    } else {
      return false;
    }
  }

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

  setInterval(function () {
    if (window.location.pathname == "/lottery") {
      if (checkTime == false) {
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
/******/ 	__webpack_require__.h = function() { return "bf46f51c1cc2a4d16760"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmVlNDkyNGVhNTg3NDU4ZWEyNTI2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUNELE1BQUlLLGtCQUFrQixHQUFHLEVBQXpCLENBWjhCLENBYTlCOztBQUNBLHFCQUFvQ1osaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUWEsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLGtCQUE0Q3JCLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT3NCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUFrRHZCLCtDQUFRLENBQUMsQ0FBRCxDQUExRDtBQUFBO0FBQUEsTUFBT3dCLGlCQUFQO0FBQUEsTUFBMEJDLG9CQUExQjs7QUFDQSxtQkFBc0R6QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUQ7QUFBQTtBQUFBLE1BQU8wQixtQkFBUDtBQUFBLE1BQTRCQyxzQkFBNUI7O0FBQ0EsbUJBQWtEM0Is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b0JBRUk7QUFDSSxXQUFLLEVBQUU7QUFBRUMsUUFBQUEsVUFBVSxFQUFFLGlCQUFkO0FBQWlDRSxRQUFBQSxLQUFLLEVBQUUsTUFBeEM7QUFBZ0RFLFFBQUFBLE1BQU0sRUFBRSxNQUF4RDtBQUFnRU4sUUFBQUEsS0FBSyxFQUFFO0FBQXZFO0FBRFgsb0JBRUk7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUF5QixXQUFLLEVBQUU7QUFBRVUsUUFBQUEsUUFBUSxFQUFFLEVBQVo7QUFBZ0JKLFFBQUFBLE1BQU0sRUFBRSxNQUF4QjtBQUFnQ0gsUUFBQUEsU0FBUyxFQUFFLFFBQTNDO0FBQXFEc0IsUUFBQUEsVUFBVSxFQUFFLEtBQWpFO0FBQXdFWixRQUFBQSxZQUFZLEVBQUU7QUFBdEY7QUFBaEMsT0FDTTVJLFlBQVksSUFBSW9KLFFBQVEsQ0FBQzVLLEVBQTFCLGdCQUFpQywyR0FBTTJJLFNBQVMsQ0FBQ2lDLFFBQVEsQ0FBQ3pHLFNBQVYsQ0FBZixDQUFqQyxnQkFBNkUsa0hBRGxGLENBRkosQ0FGSixDQURKLENBREosQ0FoQkosQ0FOSixDQURKLENBRGM7QUFBQSxHQUFULENBbEZiLENBREo7QUF1SUg7Ozs7Ozs7O1VDOWVELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvbG90dGVyeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvdHRlcnkoKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG4gICAgbGV0IGxvdHRlcnlORlREYXRlbGlzdCA9IFtdO1xuICAgIC8vIGxldCBjdXJyZW50TkZUbmFtZSA9IFwiXCI7XG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnN0IFtjdXJyZW50TkZUbmFtZSwgc2V0Y3VycmVudE5GVG5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt0b3RhbFBhcnRpY2lwYXRlZCwgc2V0dG90YWxQYXJ0aWNpcGF0ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRORlRzdGFydERhdGUsIHNldGN1cnJlbnRORlRzdGFydERhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjdXJyZW50TkZUZW5kRGF0ZSwgc2V0Y3VycmVudE5GVGVuZERhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZW5kZXJBZGRyZXNzLCBzZXRzZW5kZXJBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBsZXQgbG90dGVyeUJvdWdodCA9IFtdO1xuXG5cbiAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgfSk7XG4gICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgIGNvbnN0IFtjdXJyZW50TkZUaWQsIHNldGN1cnJlbnRORlRpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY3VycmVudFRva2VuaWQsIHNldGN1cnJlbnRUb2tlbmlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtSZWNFdmVudElELCBzZXRSZWNFdmVudElEXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHZhciBbTkZUc2xpc3QsIHNldE5GVHNsaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrVGltZSgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgTkZURW5kRGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRORlRlbmREYXRlKTtcbiAgICAgICAgdmFyIGRpZmZlcmNuZSA9IE5GVEVuZERhdGUgLSBjdXJyZW50O1xuICAgICAgICBpZiAoZGlmZmVyY25lID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG5cbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgICAgICB2YXIgZmluZEV2ZW50cyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2lkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHNldFJlY0V2ZW50SUQocmVjb3Jkc1swXS5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRzWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRFdmVudCA9IGF3YWl0IGZpbmRFdmVudHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEV2ZW50KTtcblxuICAgICAgICAgICAgdmFyIGZpbmRMb3R0ZXJ5ID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2V2ZW50aWR9ID0gJyR7aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJzdGFydERhdGVcIiwgZGlyZWN0aW9uOiBcImFzY1wiIH1dLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSByZWNvcmRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnRpZDogcmVjb3JkLmdldChcIm5mdGlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogcmVjb3JkLmdldChcInN0YXJ0RGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiByZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG90dGVyeU5GVERhdGVsaXN0ID0gKGFycik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlPT57cmV0dXJuIGV9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IGZpbmRMb3R0ZXJ5KTtcbiAgICAgICAgICAgIGF3YWl0IE5GVHNmZXRjaENvbnRyYWN0RGF0YSgpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gTkZUc2ZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudExpc3Q7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbG90dGVyeU5GVERhdGVsaXN0Lmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGxldCBlTGlzdCA9IGxvdHRlcnlORlREYXRlbGlzdFtpIC0gMV07XG4gICAgICAgICAgICAgICAgY3VycmVudExpc3QgPSBlTGlzdDtcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSBhd2FpdCBiYXNlKCduZnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtlTGlzdC5uZnRpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0LmZpcnN0UGFnZSgoZXJyLCByZWNvcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5nZXQoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlY29yZC5nZXQoJ2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiByZWNvcmQuZ2V0KCdwcmljZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcmVjb3JkLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiBjdXJyZW50TGlzdC5zdGFydERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IGN1cnJlbnRMaXN0LmVuZERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlZDogcmVjb3JkLmdldCgncGFydGljaXBhdGVkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyV2FsbGV0OiByZWNvcmQuZ2V0KCdvd25lcldhbGxldCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbmlEOiByZWNvcmQuZ2V0KCdUb2tlbklEJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYXdhaXQgZG9uZTtcbiAgICAgICAgICAgICAgICBORlRzbGlzdC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhORlRzbGlzdCk7XG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudE5GVG5hbWUoYXJyWzBdLm5hbWUpO1xuICAgICAgICAgICAgICAgIHNldHRvdGFsUGFydGljaXBhdGVkKGFyclswXS5wYXJ0aWNpcGF0ZWQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRlbmREYXRlKGFyclswXS5lbmREYXRlKTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUaWQoYXJyWzBdLmlkKTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUc3RhcnREYXRlKGFyclswXS5zdGFydERhdGUpO1xuICAgICAgICAgICAgICAgIHNldHNlbmRlckFkZHJlc3MoYXJyWzBdLm93bmVyV2FsbGV0KTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50VG9rZW5pZChhcnJbMF0uVG9rZW5pRCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvYWRpbmdEYXRlJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb3R0ZXJ5SW5mb3JtYXRpb24nKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGF3YWl0IGxvdHRlcnlORlREYXRlbGlzdC5mb3JFYWNoKGFzeW5jIChlTGlzdCkgPT4ge1xuXG4gICAgICAgICAgICAvLyB9KTtcblxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIGxldCB3aW5uZXJJbmZvO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGVMb3R0ZXJ5KCkge1xuICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgIHZhciB0ZXN0ID0gYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLnNlbGVjdCh7XG4gICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe25mdGlkfSA9ICcke2N1cnJlbnRORlRpZH0nKWAsXG4gICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGVzdC5maXJzdFBhZ2UoKGVyciwgcmVjb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVjb3JkLmdldCgndXNlcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcldhbGxldDogcmVjb3JkLmdldCgndXNlcldhbGxldCcpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgdmFyIHZhbHVlID0gYXdhaXQgZG9uZTtcbiAgICAgICAgbG90dGVyeUJvdWdodCA9IHZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIHZhciB3aW5uZXJObyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbm5lck5vKTtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgV2lubmVyICR7dmFsdWVbd2lubmVyTm9dLnVzZXJ9LyR7dmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXR9IWApO1xuICAgICAgICBsZXQgcmVjZWl2ZXJBZGRyZXNzID0gdmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXQ7XG4gICAgICAgIHdpbm5lckluZm8gPSB2YWx1ZVt3aW5uZXJOb107XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIoKSB7XG5cbiAgICAgICAgbGV0IHJlY2VpdmVyQWRkcmVzcyA9IHdpbm5lckluZm8udXNlcldhbGxldDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RbXG4gICAgICAgICAgICAnc2FmZVRyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1NiknXG4gICAgICAgIF0oc2VuZGVyQWRkcmVzcywgcmVjZWl2ZXJBZGRyZXNzLCBjdXJyZW50VG9rZW5pZCAtIDEpO1xuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0LmF1cm9yYS5kZXYvdHgvJHtyZXN1bHQuaGFzaH1gLCBcIl9ibGFua1wiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIFVwZGF0aW5nT25BaXJ0YWJsZSgpIHtcblxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cbiAgICAgICAgYXdhaXQgTkZUc2xpc3QuZm9yRWFjaChhc3luYyAoTkZUKSA9PiB7XG4gICAgICAgICAgICBpZiAoTkZULmlkID0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLmRlc3Ryb3koW05GVC5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYoJy9kb25hdGlvbicpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGF3YWl0IGxvdHRlcnlORlREYXRlbGlzdC5mb3JFYWNoKGFzeW5jIChMb3R0ZXJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoTG90dGVyeS5uZnRpZCA9PSBjdXJyZW50TkZUaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5JykuZGVzdHJveShbTG90dGVyeS5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBsb3R0ZXJ5Qm91Z2h0LmZvckVhY2goYXN5bmMgKFBlcnNvbikgPT4ge1xuICAgICAgICAgICAgaWYgKFBlcnNvbi5uZnRpZCA9PSBjdXJyZW50TkZUaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5Qm91Z2h0JykuZGVzdHJveShbUGVyc29uLnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzdHJpYnV0ZSgpIHtcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShkaXN0cmlidXRlTG90dGVyeSwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJEaXN0cmlidXRpbmcuLi5cIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRGlzdHJpYnV0ZWQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiVHJhbnNmZXJyaW5nIE5GVCB0byB3aW5uZXJcIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiVHJhbnNmZXJyZWQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoVXBkYXRpbmdPbkFpcnRhYmxlLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIlVwZGF0aW5nIG9uIEFpcnRhYmxlXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIlVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdEluZm9ybWF0aW9uXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG4gICAgfVxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcbiAgICAgICAgICAgIGlmIChjaGVja1RpbWUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0sIDEwMDApO1xuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoaFRleHQsIG1UZXh0LCBzVGV4dCkge1xuICAgICAgICBsZXQgY29udmVydGVkSCA9IFwiXCI7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRNID0gXCJcIjtcbiAgICAgICAgbGV0IEFtUE0gPSBcIlwiO1xuICAgICAgICBpZiAoaFRleHQgPCAxMikge1xuICAgICAgICAgICAgQW1QTSA9IFwiQU1cIjtcbiAgICAgICAgICAgIGlmIChoVGV4dCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtoVGV4dH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7aFRleHR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXZpZGVkSCA9IGhUZXh0IC8gMjtcbiAgICAgICAgICAgIEFtUE0gPSBcIlBNXCI7XG4gICAgICAgICAgICBpZiAoZGl2aWRlZEggPCAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgMCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAke2RpdmlkZWRIfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1UZXh0IDwgMTApIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgMCR7bVRleHR9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgJHttVGV4dH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2NvbnZlcnRlZEh9OiR7Y29udmVydGVkTX0gJHtBbVBNfWA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENoZWNrRGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1vbnRoKCk7XG4gICAgICAgIHZhciB5ID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBoID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEhvdXJzKCk7XG4gICAgICAgIHZhciBtbiA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHZhciBzID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFNlY29uZHMoKTtcblxuICAgICAgICByZXR1cm4gKGAke2QudG9TdHJpbmcoKX0vJHttLnRvU3RyaW5nKCl9LyR7eS50b1N0cmluZygpfSAke2dldERhdGVUaW1lKGgsIG1uLCBzKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7UmVjRXZlbnRJRH1dYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBBdWN0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHJnYigxMSAyMTQgMTkwKSAwJSwgcmdiKDI1NSAxNDEgMCkgNzclKVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDY3LFxuICAgICAgICAgICAgICAgICAgICBmbGV4RmxvdzogXCJyb3cgbm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMHJlbVwiLCBwYWRkaW5nOiBcIjNyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkxvYWRpbmdEYXRlXCIgc3R5bGU9e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAyNzksIGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J0xvdHRlcnlJbmZvcm1hdGlvbicgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJkYXJrYmx1ZVwiLCBtYXJnaW5Ub3A6IDM0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TkZUbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgcGFydGljaXBhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjAwYjEsICMwMGZmODkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDM4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIiM1ZDFmZmYgc29saWQgMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbFBhcnRpY2lwYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgbmFtZT0nZGF0ZWxlZnRJbmZvcm1hdGlvbicgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMjdweCcgfX0gZGF0ZT17Y3VycmVudE5GVGVuZERhdGV9PntMZWZ0RGF0ZShjdXJyZW50TkZUZW5kRGF0ZSl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZGlzdHJpYnV0ZX0gaWQ9XCJkaXN0cmlidXRlXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiA0MSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogMTg0LCBib3JkZXJSYWRpdXM6IDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge05GVHNsaXN0LmZsYXRNYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoMjk1ZGVnLCAjMGJkNmJlLCAjYTI0MWRmKVwiLCBtYXJnaW5Ub3A6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5pZH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xpc3RJdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbGV4RGlyZWN0aW9uOiAncm93JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JywgYWxpZ25Db250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogXCIydndcIiwgY29sb3I6IFwid2hpdGVcIiB9fT57bGlzdEl0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBEYXRlOiB7Q2hlY2tEYXRlKGxpc3RJdGVtLnN0YXJ0RGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQgRGF0ZTogICB7Q2hlY2tEYXRlKGxpc3RJdGVtLmVuZERhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFbGVtZW50Qm90dG9tQ29udGFpbmVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnNTY1cHgnLCBtYXJnaW46ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgbWFyZ2luQm90dG9tOiAnMzNweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyNjdweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDE3LCAzNCwgNDcpJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmlkcHJpY2VcIiBzdHlsZT17eyBmb250U2l6ZTogMjQsIGhlaWdodDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIzLjZcIiwgYm9yZGVyUmFkaXVzOiA0MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY3VycmVudE5GVGlkICE9IGxpc3RJdGVtLmlkKSA/ICg8PkF0IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX08Lz4pIDogKDw+SW4gUHJvZ3Jlc3M8Lz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG5cblxuXG5cblxuXG4gICAgICAgIDwvPlxuICAgICk7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImJmNDZmNTFjMWNjMmE0ZDE2NzYwXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsIk5hdkxpbmsiLCJ0b2FzdCIsIm5lYXJBUEkiLCJCdXR0b24iLCJ1c2VDb250cmFjdCIsIkxvdHRlcnkiLCJyZWdleCIsInN0ciIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsImlkIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwibG90dGVyeU5GVERhdGVsaXN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwiY3VycmVudE5GVG5hbWUiLCJzZXRjdXJyZW50TkZUbmFtZSIsInRvdGFsUGFydGljaXBhdGVkIiwic2V0dG90YWxQYXJ0aWNpcGF0ZWQiLCJjdXJyZW50TkZUc3RhcnREYXRlIiwic2V0Y3VycmVudE5GVHN0YXJ0RGF0ZSIsImN1cnJlbnRORlRlbmREYXRlIiwic2V0Y3VycmVudE5GVGVuZERhdGUiLCJzZW5kZXJBZGRyZXNzIiwic2V0c2VuZGVyQWRkcmVzcyIsImxvdHRlcnlCb3VnaHQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50TkZUaWQiLCJzZXRjdXJyZW50TkZUaWQiLCJjdXJyZW50VG9rZW5pZCIsInNldGN1cnJlbnRUb2tlbmlkIiwiUmVjRXZlbnRJRCIsInNldFJlY0V2ZW50SUQiLCJORlRzbGlzdCIsInNldE5GVHNsaXN0IiwiY2hlY2tUaW1lIiwiY3VycmVudCIsIkRhdGUiLCJORlRFbmREYXRlIiwiZGlmZmVyY25lIiwiTG90dGVyeWZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiZ2V0SWQiLCJwYWdlIiwidGhlbiIsImUiLCJzZWxlY3RlZEV2ZW50IiwiY29uc29sZSIsImxvZyIsImZpbmRMb3R0ZXJ5Iiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiYXJyIiwiaSIsImxlbmd0aCIsInJlY29yZCIsInB1c2giLCJyZWNpZCIsIm5mdGlkIiwiZ2V0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIk5GVHNmZXRjaENvbnRyYWN0RGF0YSIsImVMaXN0IiwiY3VycmVudExpc3QiLCJ0ZXN0IiwiZG9uZSIsImZpcnN0UGFnZSIsImVyciIsImZvckVhY2giLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlIiwicGFydGljaXBhdGVkIiwib3duZXJXYWxsZXQiLCJUb2tlbmlEIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lubmVySW5mbyIsImRpc3RyaWJ1dGVMb3R0ZXJ5IiwidXNlciIsInVzZXJXYWxsZXQiLCJ3aW5uZXJObyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN1Y2Nlc3MiLCJyZWNlaXZlckFkZHJlc3MiLCJUcmFuc2ZlcnJpbmdORlR0b1dpbm5lciIsInJlc3VsdCIsIm9wZW4iLCJoYXNoIiwiVXBkYXRpbmdPbkFpcnRhYmxlIiwiTkZUIiwiZGVzdHJveSIsImRlbGV0ZWRSZWNvcmRzIiwiZXJyb3IiLCJocmVmIiwiUGVyc29uIiwiZGlzdHJpYnV0ZSIsInByb21pc2UiLCJwZW5kaW5nIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwiZGF0ZSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkxlZnREYXRlIiwiTGVmdERhdGVCaWQiLCJzZXRJbnRlcnZhbCIsImRhdGV0ZXh0IiwiYyIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiaCIsInMiLCJ0b1N0cmluZyIsImdldERhdGVUaW1lIiwiaFRleHQiLCJtVGV4dCIsInNUZXh0IiwiY29udmVydGVkSCIsImNvbnZlcnRlZE0iLCJBbVBNIiwiZGl2aWRlZEgiLCJDaGVja0RhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJ5IiwiZ2V0RnVsbFllYXIiLCJnZXRIb3VycyIsIm1uIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnYXAiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY29sb3IiLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsImN1cnNvciIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwiZm9udFNpemUiLCJhbGlnblNlbGYiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXJSYWRpdXMiLCJmbGV4RmxvdyIsInBsYWNlQ29udGVudCIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImJvcmRlciIsImxpc3RJdGVtIiwiZmxleERpcmVjdGlvbiIsInJvd0dhcCIsIm1hcmdpbkJvdHRvbSIsImxpbmVIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9