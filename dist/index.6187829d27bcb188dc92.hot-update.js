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
    _LotteryfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var Airtable, base, findEvents, selectedEvent;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(id && window.location.pathname == "/lottery")) {
                _context9.next = 10;
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
              _context9.next = 6;
              return findEvents;

            case 6:
              selectedEvent = _context9.sent;
              console.log(selectedEvent);
              _context9.next = 10;
              return base('lottery').select({
                filterByFormula: "({eventid} = '".concat(id, "')"),
                sort: [{
                  field: "startDate",
                  direction: "asc"
                }],
                view: "Grid view"
              }).eachPage( /*#__PURE__*/function () {
                var _page2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(records, fetchNextPage) {
                  var arr;
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          // This function (`page`) will get called for each page of records.
                          arr = [];
                          _context8.next = 3;
                          return records.forEach(function (record) {
                            arr.push({
                              recid: record.getId(),
                              nftid: record.get("nftid"),
                              startDate: record.get("startDate"),
                              endDate: record.get("endDate")
                            });
                          });

                        case 3:
                          lotteryNFTDatelist = arr;
                          _context8.next = 6;
                          return NFTsfetchContractData();

                        case 6:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee3);
                }));

                function page(_x5, _x6) {
                  return _page2.apply(this, arguments);
                }

                return page;
              }());

            case 10:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee4);
    }));
    return _LotteryfetchContractData.apply(this, arguments);
  }

  function NFTsfetchContractData() {
    return _NFTsfetchContractData.apply(this, arguments);
  }

  function _NFTsfetchContractData() {
    _NFTsfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var arr, Airtable, base, currentList, i, eList, test, done, value;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (!(id && window.location.pathname == "/lottery")) {
                _context10.next = 31;
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
                _context10.next = 31;
                break;
              }

              eList = lotteryNFTDatelist[i - 1];
              currentList = eList;
              arr = [];
              _context10.next = 11;
              return base('nfts').select({
                filterByFormula: "({id} = '".concat(eList.nftid, "')"),
                view: "Grid view"
              });

            case 11:
              test = _context10.sent;
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
              _context10.next = 15;
              return done;

            case 15:
              value = _context10.sent;
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
              _context10.next = 5;
              break;

            case 31:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee5);
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
    _distributeLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var _context11;

      var arr, test, done, value, winnerNo, receiverAddress;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              arr = [];
              _context12.next = 3;
              return base('lotteryBought').select({
                filterByFormula: "({nftid} = '".concat(currentNFTid, "')"),
                view: "Grid view"
              });

            case 3:
              test = _context12.sent;
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
              _context12.next = 7;
              return done;

            case 7:
              value = _context12.sent;
              lotteryBought = value;
              console.log(value);
              winnerNo = Math.floor(Math.random() * value.length);
              console.log(winnerNo);
              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context11 = "Winner ".concat(value[winnerNo].user, "/")).call(_context11, value[winnerNo].userWallet, "!"));
              receiverAddress = value[winnerNo].userWallet;
              winnerInfo = value[winnerNo];

            case 15:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee6);
    }));
    return _distributeLottery.apply(this, arguments);
  }

  function TransferringNFTtoWinner() {
    return _TransferringNFTtoWinner.apply(this, arguments);
  }

  function _TransferringNFTtoWinner() {
    _TransferringNFTtoWinner = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      var receiverAddress, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              receiverAddress = winnerInfo.userWallet;
              _context13.next = 3;
              return contract['safeTransferFrom(address,address,uint256)'](senderAddress, receiverAddress, currentTokenid - 1);

            case 3:
              result = _context13.sent;
              window.open("https://explorer.testnet.aurora.dev/tx/".concat(result.hash), "_blank");
              console.log(result);

            case 6:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee7);
    }));
    return _TransferringNFTtoWinner.apply(this, arguments);
  }

  function UpdatingOnAirtable() {
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function _UpdatingOnAirtable() {
    _UpdatingOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context17.next = 5;
              return NFTslist.forEach( /*#__PURE__*/function () {
                var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8(NFT) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          if (!(NFT.id = currentNFTid)) {
                            _context14.next = 3;
                            break;
                          }

                          _context14.next = 3;
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
                          return _context14.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function (_x7) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 5:
              _context17.next = 7;
              return lotteryNFTDatelist.forEach( /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9(Lottery) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          if (!(Lottery.nftid == currentNFTid)) {
                            _context15.next = 3;
                            break;
                          }

                          _context15.next = 3;
                          return base('lottery').destroy([Lottery.recid], function (err, deletedRecords) {
                            if (err) {
                              console.error(err);
                              return;
                            }

                            console.log('Deleted', deletedRecords.length, 'records');
                          });

                        case 3:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function (_x8) {
                  return _ref3.apply(this, arguments);
                };
              }());

            case 7:
              _context17.next = 9;
              return lotteryBought.forEach( /*#__PURE__*/function () {
                var _ref4 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10(Person) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          if (!(Person.nftid == currentNFTid)) {
                            _context16.next = 3;
                            break;
                          }

                          _context16.next = 3;
                          return base('lotteryBought').destroy([Person.recid], function (err, deletedRecords) {
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

                return function (_x9) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 9:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee11);
    }));
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function distribute() {
    return _distribute.apply(this, arguments);
  }

  function _distribute() {
    _distribute = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(distributeLottery, {
                pending: "Distributing...",
                error: "Please try again later",
                success: "Distributed successfully!"
              });

            case 2:
              _context18.next = 4;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(TransferringNFTtoWinner, {
                pending: "Transferring NFT to winner",
                error: "Please try again later",
                success: "Transferred successfully!"
              });

            case 4:
              _context18.next = 6;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(UpdatingOnAirtable, {
                pending: "Updating on Airtable",
                error: "Please try again later",
                success: "Updated successfully!"
              });

            case 6:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee12);
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
/******/ 	__webpack_require__.h = function() { return "ee4924ea587458ea2526"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjYxODc4MjlkMjdiY2IxODhkYzkyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUNELE1BQUlLLGtCQUFrQixHQUFHLEVBQXpCLENBWjhCLENBYTlCOztBQUNBLHFCQUFvQ1osaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUWEsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLGtCQUE0Q3JCLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT3NCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUFrRHZCLCtDQUFRLENBQUMsQ0FBRCxDQUExRDtBQUFBO0FBQUEsTUFBT3dCLGlCQUFQO0FBQUEsTUFBMEJDLG9CQUExQjs7QUFDQSxtQkFBc0R6QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUQ7QUFBQTtBQUFBLE1BQU8wQixtQkFBUDtBQUFBLE1BQTRCQyxzQkFBNUI7O0FBQ0EsbUJBQWtEM0Is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Q0FBQzFHLFNBQVYsQ0FBZixDQUFqQyxnQkFBNkUsa0hBRGxGLENBRkosQ0FGSixDQURKLENBREosQ0FoQkosQ0FOSixDQURKLENBRGM7QUFBQSxHQUFULENBbEZiLENBREo7QUF1SUg7Ozs7Ozs7O1VDdmVELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvbG90dGVyeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvdHRlcnkoKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG4gICAgbGV0IGxvdHRlcnlORlREYXRlbGlzdCA9IFtdO1xuICAgIC8vIGxldCBjdXJyZW50TkZUbmFtZSA9IFwiXCI7XG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuICAgIGNvbnN0IFtjdXJyZW50TkZUbmFtZSwgc2V0Y3VycmVudE5GVG5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt0b3RhbFBhcnRpY2lwYXRlZCwgc2V0dG90YWxQYXJ0aWNpcGF0ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRORlRzdGFydERhdGUsIHNldGN1cnJlbnRORlRzdGFydERhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjdXJyZW50TkZUZW5kRGF0ZSwgc2V0Y3VycmVudE5GVGVuZERhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZW5kZXJBZGRyZXNzLCBzZXRzZW5kZXJBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBsZXQgbG90dGVyeUJvdWdodCA9IFtdO1xuXG5cbiAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgfSk7XG4gICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgIGNvbnN0IFtjdXJyZW50TkZUaWQsIHNldGN1cnJlbnRORlRpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY3VycmVudFRva2VuaWQsIHNldGN1cnJlbnRUb2tlbmlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtSZWNFdmVudElELCBzZXRSZWNFdmVudElEXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHZhciBbTkZUc2xpc3QsIHNldE5GVHNsaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrVGltZSgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgTkZURW5kRGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRORlRlbmREYXRlKTtcbiAgICAgICAgdmFyIGRpZmZlcmNuZSA9IE5GVEVuZERhdGUgLSBjdXJyZW50O1xuICAgICAgICBpZiAoZGlmZmVyY25lID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG5cbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgICAgICB2YXIgZmluZEV2ZW50cyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2lkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHNldFJlY0V2ZW50SUQocmVjb3Jkc1swXS5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRzWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRFdmVudCA9IGF3YWl0IGZpbmRFdmVudHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEV2ZW50KTtcbiAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7ZXZlbnRpZH0gPSAnJHtpZH0nKWAsXG4gICAgICAgICAgICAgICAgc29ydDogW3sgZmllbGQ6IFwic3RhcnREYXRlXCIsIGRpcmVjdGlvbjogXCJhc2NcIiB9XSxcbiAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICB9KS5lYWNoUGFnZShhc3luYyBmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5mdGlkOiByZWNvcmQuZ2V0KFwibmZ0aWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IHJlY29yZC5nZXQoXCJzdGFydERhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiByZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxvdHRlcnlORlREYXRlbGlzdCA9IChhcnIpO1xuICAgICAgICAgICAgICAgIGF3YWl0IE5GVHNmZXRjaENvbnRyYWN0RGF0YSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gTkZUc2ZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudExpc3Q7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbG90dGVyeU5GVERhdGVsaXN0Lmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGxldCBlTGlzdCA9IGxvdHRlcnlORlREYXRlbGlzdFtpIC0gMV07XG4gICAgICAgICAgICAgICAgY3VycmVudExpc3QgPSBlTGlzdDtcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSBhd2FpdCBiYXNlKCduZnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtlTGlzdC5uZnRpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0LmZpcnN0UGFnZSgoZXJyLCByZWNvcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHt9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5nZXQoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlY29yZC5nZXQoJ2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiByZWNvcmQuZ2V0KCdwcmljZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcmVjb3JkLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiBjdXJyZW50TGlzdC5zdGFydERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IGN1cnJlbnRMaXN0LmVuZERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlZDogcmVjb3JkLmdldCgncGFydGljaXBhdGVkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyV2FsbGV0OiByZWNvcmQuZ2V0KCdvd25lcldhbGxldCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbmlEOiByZWNvcmQuZ2V0KCdUb2tlbklEJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYXdhaXQgZG9uZTtcbiAgICAgICAgICAgICAgICBORlRzbGlzdC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhORlRzbGlzdCk7XG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudE5GVG5hbWUoYXJyWzBdLm5hbWUpO1xuICAgICAgICAgICAgICAgIHNldHRvdGFsUGFydGljaXBhdGVkKGFyclswXS5wYXJ0aWNpcGF0ZWQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRlbmREYXRlKGFyclswXS5lbmREYXRlKTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUaWQoYXJyWzBdLmlkKTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUc3RhcnREYXRlKGFyclswXS5zdGFydERhdGUpO1xuICAgICAgICAgICAgICAgIHNldHNlbmRlckFkZHJlc3MoYXJyWzBdLm93bmVyV2FsbGV0KTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50VG9rZW5pZChhcnJbMF0uVG9rZW5pRCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvYWRpbmdEYXRlJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb3R0ZXJ5SW5mb3JtYXRpb24nKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGF3YWl0IGxvdHRlcnlORlREYXRlbGlzdC5mb3JFYWNoKGFzeW5jIChlTGlzdCkgPT4ge1xuXG4gICAgICAgICAgICAvLyB9KTtcblxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIGxldCB3aW5uZXJJbmZvO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGVMb3R0ZXJ5KCkge1xuICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgIHZhciB0ZXN0ID0gYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLnNlbGVjdCh7XG4gICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe25mdGlkfSA9ICcke2N1cnJlbnRORlRpZH0nKWAsXG4gICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGVzdC5maXJzdFBhZ2UoKGVyciwgcmVjb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVjb3JkLmdldCgndXNlcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcldhbGxldDogcmVjb3JkLmdldCgndXNlcldhbGxldCcpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgdmFyIHZhbHVlID0gYXdhaXQgZG9uZTtcbiAgICAgICAgbG90dGVyeUJvdWdodCA9IHZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIHZhciB3aW5uZXJObyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbm5lck5vKTtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgV2lubmVyICR7dmFsdWVbd2lubmVyTm9dLnVzZXJ9LyR7dmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXR9IWApO1xuICAgICAgICBsZXQgcmVjZWl2ZXJBZGRyZXNzID0gdmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXQ7XG4gICAgICAgIHdpbm5lckluZm8gPSB2YWx1ZVt3aW5uZXJOb107XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIoKSB7XG5cbiAgICAgICAgbGV0IHJlY2VpdmVyQWRkcmVzcyA9IHdpbm5lckluZm8udXNlcldhbGxldDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RbXG4gICAgICAgICAgICAnc2FmZVRyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1NiknXG4gICAgICAgIF0oc2VuZGVyQWRkcmVzcywgcmVjZWl2ZXJBZGRyZXNzLCBjdXJyZW50VG9rZW5pZCAtIDEpO1xuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0LmF1cm9yYS5kZXYvdHgvJHtyZXN1bHQuaGFzaH1gLCBcIl9ibGFua1wiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIFVwZGF0aW5nT25BaXJ0YWJsZSgpIHtcblxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cbiAgICAgICAgYXdhaXQgTkZUc2xpc3QuZm9yRWFjaChhc3luYyAoTkZUKSA9PiB7XG4gICAgICAgICAgICBpZiAoTkZULmlkID0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLmRlc3Ryb3koW05GVC5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYoJy9kb25hdGlvbicpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGF3YWl0IGxvdHRlcnlORlREYXRlbGlzdC5mb3JFYWNoKGFzeW5jIChMb3R0ZXJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoTG90dGVyeS5uZnRpZCA9PSBjdXJyZW50TkZUaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5JykuZGVzdHJveShbTG90dGVyeS5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBsb3R0ZXJ5Qm91Z2h0LmZvckVhY2goYXN5bmMgKFBlcnNvbikgPT4ge1xuICAgICAgICAgICAgaWYgKFBlcnNvbi5uZnRpZCA9PSBjdXJyZW50TkZUaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5Qm91Z2h0JykuZGVzdHJveShbUGVyc29uLnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzdHJpYnV0ZSgpIHtcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShkaXN0cmlidXRlTG90dGVyeSwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJEaXN0cmlidXRpbmcuLi5cIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRGlzdHJpYnV0ZWQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiVHJhbnNmZXJyaW5nIE5GVCB0byB3aW5uZXJcIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiVHJhbnNmZXJyZWQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoVXBkYXRpbmdPbkFpcnRhYmxlLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIlVwZGF0aW5nIG9uIEFpcnRhYmxlXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIlVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdEluZm9ybWF0aW9uXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG4gICAgfVxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcbiAgICAgICAgICAgIGlmIChjaGVja1RpbWUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0sIDEwMDApO1xuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoaFRleHQsIG1UZXh0LCBzVGV4dCkge1xuICAgICAgICBsZXQgY29udmVydGVkSCA9IFwiXCI7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRNID0gXCJcIjtcbiAgICAgICAgbGV0IEFtUE0gPSBcIlwiO1xuICAgICAgICBpZiAoaFRleHQgPCAxMikge1xuICAgICAgICAgICAgQW1QTSA9IFwiQU1cIjtcbiAgICAgICAgICAgIGlmIChoVGV4dCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtoVGV4dH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7aFRleHR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXZpZGVkSCA9IGhUZXh0IC8gMjtcbiAgICAgICAgICAgIEFtUE0gPSBcIlBNXCI7XG4gICAgICAgICAgICBpZiAoZGl2aWRlZEggPCAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgMCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAke2RpdmlkZWRIfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1UZXh0IDwgMTApIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgMCR7bVRleHR9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgJHttVGV4dH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2NvbnZlcnRlZEh9OiR7Y29udmVydGVkTX0gJHtBbVBNfWA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENoZWNrRGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1vbnRoKCk7XG4gICAgICAgIHZhciB5ID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBoID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEhvdXJzKCk7XG4gICAgICAgIHZhciBtbiA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHZhciBzID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFNlY29uZHMoKTtcblxuICAgICAgICByZXR1cm4gKGAke2QudG9TdHJpbmcoKX0vJHttLnRvU3RyaW5nKCl9LyR7eS50b1N0cmluZygpfSAke2dldERhdGVUaW1lKGgsIG1uLCBzKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7UmVjRXZlbnRJRH1dYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBBdWN0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHJnYigxMSAyMTQgMTkwKSAwJSwgcmdiKDI1NSAxNDEgMCkgNzclKVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDY3LFxuICAgICAgICAgICAgICAgICAgICBmbGV4RmxvdzogXCJyb3cgbm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMHJlbVwiLCBwYWRkaW5nOiBcIjNyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkxvYWRpbmdEYXRlXCIgc3R5bGU9e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAyNzksIGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J0xvdHRlcnlJbmZvcm1hdGlvbicgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJkYXJrYmx1ZVwiLCBtYXJnaW5Ub3A6IDM0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TkZUbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgcGFydGljaXBhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjAwYjEsICMwMGZmODkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDM4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIiM1ZDFmZmYgc29saWQgMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbFBhcnRpY2lwYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgbmFtZT0nZGF0ZWxlZnRJbmZvcm1hdGlvbicgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMjdweCcgfX0gZGF0ZT17Y3VycmVudE5GVGVuZERhdGV9PntMZWZ0RGF0ZShjdXJyZW50TkZUZW5kRGF0ZSl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZGlzdHJpYnV0ZX0gaWQ9XCJkaXN0cmlidXRlXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiA0MSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogMTg0LCBib3JkZXJSYWRpdXM6IDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge05GVHNsaXN0LmZsYXRNYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoMjk1ZGVnLCAjMGJkNmJlLCAjYTI0MWRmKVwiLCBtYXJnaW5Ub3A6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5pZH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xpc3RJdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbGV4RGlyZWN0aW9uOiAncm93JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JywgYWxpZ25Db250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogXCIydndcIiwgY29sb3I6IFwid2hpdGVcIiB9fT57bGlzdEl0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBEYXRlOiB7Q2hlY2tEYXRlKGxpc3RJdGVtLnN0YXJ0RGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQgRGF0ZTogICB7Q2hlY2tEYXRlKGxpc3RJdGVtLmVuZERhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFbGVtZW50Qm90dG9tQ29udGFpbmVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnNTY1cHgnLCBtYXJnaW46ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgbWFyZ2luQm90dG9tOiAnMzNweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyNjdweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDE3LCAzNCwgNDcpJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmlkcHJpY2VcIiBzdHlsZT17eyBmb250U2l6ZTogMjQsIGhlaWdodDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIzLjZcIiwgYm9yZGVyUmFkaXVzOiA0MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY3VycmVudE5GVGlkICE9IGxpc3RJdGVtLmlkKSA/ICg8PkF0IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX08Lz4pIDogKDw+SW4gUHJvZ3Jlc3M8Lz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG5cblxuXG5cblxuXG4gICAgICAgIDwvPlxuICAgICk7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImVlNDkyNGVhNTg3NDU4ZWEyNTI2XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsIk5hdkxpbmsiLCJ0b2FzdCIsIm5lYXJBUEkiLCJCdXR0b24iLCJ1c2VDb250cmFjdCIsIkxvdHRlcnkiLCJyZWdleCIsInN0ciIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsImlkIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwibG90dGVyeU5GVERhdGVsaXN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwiY3VycmVudE5GVG5hbWUiLCJzZXRjdXJyZW50TkZUbmFtZSIsInRvdGFsUGFydGljaXBhdGVkIiwic2V0dG90YWxQYXJ0aWNpcGF0ZWQiLCJjdXJyZW50TkZUc3RhcnREYXRlIiwic2V0Y3VycmVudE5GVHN0YXJ0RGF0ZSIsImN1cnJlbnRORlRlbmREYXRlIiwic2V0Y3VycmVudE5GVGVuZERhdGUiLCJzZW5kZXJBZGRyZXNzIiwic2V0c2VuZGVyQWRkcmVzcyIsImxvdHRlcnlCb3VnaHQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50TkZUaWQiLCJzZXRjdXJyZW50TkZUaWQiLCJjdXJyZW50VG9rZW5pZCIsInNldGN1cnJlbnRUb2tlbmlkIiwiUmVjRXZlbnRJRCIsInNldFJlY0V2ZW50SUQiLCJORlRzbGlzdCIsInNldE5GVHNsaXN0IiwiY2hlY2tUaW1lIiwiY3VycmVudCIsIkRhdGUiLCJORlRFbmREYXRlIiwiZGlmZmVyY25lIiwiTG90dGVyeWZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiZ2V0SWQiLCJwYWdlIiwidGhlbiIsImUiLCJzZWxlY3RlZEV2ZW50IiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsImFyciIsImZvckVhY2giLCJyZWNvcmQiLCJwdXNoIiwicmVjaWQiLCJuZnRpZCIsImdldCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJORlRzZmV0Y2hDb250cmFjdERhdGEiLCJpIiwibGVuZ3RoIiwiZUxpc3QiLCJjdXJyZW50TGlzdCIsInRlc3QiLCJkb25lIiwiZmlyc3RQYWdlIiwiZXJyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpbWFnZSIsInBhcnRpY2lwYXRlZCIsIm93bmVyV2FsbGV0IiwiVG9rZW5pRCIsInZhbHVlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIndpbm5lckluZm8iLCJkaXN0cmlidXRlTG90dGVyeSIsInVzZXIiLCJ1c2VyV2FsbGV0Iiwid2lubmVyTm8iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdWNjZXNzIiwicmVjZWl2ZXJBZGRyZXNzIiwiVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIiLCJyZXN1bHQiLCJvcGVuIiwiaGFzaCIsIlVwZGF0aW5nT25BaXJ0YWJsZSIsIk5GVCIsImRlc3Ryb3kiLCJkZWxldGVkUmVjb3JkcyIsImVycm9yIiwiaHJlZiIsIlBlcnNvbiIsImRpc3RyaWJ1dGUiLCJwcm9taXNlIiwicGVuZGluZyIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImRhdGUiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJMZWZ0RGF0ZSIsIkxlZnREYXRlQmlkIiwic2V0SW50ZXJ2YWwiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsImgiLCJzIiwidG9TdHJpbmciLCJnZXREYXRlVGltZSIsImhUZXh0IiwibVRleHQiLCJzVGV4dCIsImNvbnZlcnRlZEgiLCJjb252ZXJ0ZWRNIiwiQW1QTSIsImRpdmlkZWRIIiwiQ2hlY2tEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwieSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJtbiIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2FwIiwicG9zaXRpb24iLCJyaWdodCIsImNvbG9yIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwid2lkdGgiLCJjdXJzb3IiLCJoZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwiYWxpZ25TZWxmIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyUmFkaXVzIiwiZmxleEZsb3ciLCJwbGFjZUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJsaXN0SXRlbSIsImZsZXhEaXJlY3Rpb24iLCJyb3dHYXAiLCJtYXJnaW5Cb3R0b20iLCJsaW5lSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==