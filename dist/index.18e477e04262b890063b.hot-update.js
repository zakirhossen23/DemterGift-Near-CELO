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

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_9__["default"])('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      totalParticipated = _useState2[0],
      settotalParticipated = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(""),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      senderAddress = _useState4[0],
      setsenderAddress = _useState4[1];

  var lotteryBought = [];

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyR1Rrcl9O2s9bTs'
  });

  var base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      currentNFTid = _useState6[0],
      setcurrentNFTid = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      _useState8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
      currentTokenid = _useState8[0],
      setcurrentTokenid = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
      RecEventID = _useState10[0],
      setRecEventID = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      _useState12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
      NFTslist = _useState12[0],
      setNFTslist = _useState12[1];

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
                        setcurrentNFTid(arr[0].id);
                        setsenderAddress(arr[0].ownerWallet);
                        setcurrentTokenid(arr[0].TokeniD);
                        document.getElementById('Loading').style.display = "none";
                        document.getElementById('LoadingDate').style.display = "none";
                        document.getElementById('LotteryInformation').style.display = "";

                      case 21:
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
        return false;
      } else {
        return true;
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
/******/ 	__webpack_require__.h = function() { return "80b75673224daf8756f7"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjE4ZTQ3N2UwNDI2MmI4OTAwNjNiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUNELE1BQUlLLGtCQUFrQixHQUFHLEVBQXpCOztBQUNBLHFCQUFvQ1osaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUWEsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUVBLGtCQUFnRHJCLCtDQUFRLENBQUMsQ0FBRCxDQUF4RDtBQUFBO0FBQUEsTUFBS3NCLGlCQUFMO0FBQUEsTUFBd0JDLG9CQUF4Qjs7QUFDQSxtQkFBd0N2QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQUt3QixhQUFMO0FBQUEsTUFBb0JDLGdCQUFwQjs7QUFDQSxNQUFJQyxhQUFhLEdBQUcsRUFBcEI7O0FBR0EsTUFBSUMsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLHlEQUFELENBQXRCOztBQUNBRCxFQUFBQSxRQUFRLENBQUNFLFNBQVQsQ0FB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RFgsb0JBRUk7QUFDSSxXQUFLLEVBQUU7QUFBRUMsUUFBQUEsVUFBVSxFQUFFLGlCQUFkO0FBQWlDRSxRQUFBQSxLQUFLLEVBQUUsTUFBeEM7QUFBZ0RFLFFBQUFBLE1BQU0sRUFBRSxNQUF4RDtBQUFnRU4sUUFBQUEsS0FBSyxFQUFFO0FBQXZFO0FBRFgsb0JBRUk7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUF5QixXQUFLLEVBQUU7QUFBRVUsUUFBQUEsUUFBUSxFQUFFLEVBQVo7QUFBZ0JKLFFBQUFBLE1BQU0sRUFBRSxNQUF4QjtBQUFnQ0gsUUFBQUEsU0FBUyxFQUFFLFFBQTNDO0FBQXFEd0IsUUFBQUEsVUFBVSxFQUFFLEtBQWpFO0FBQXdFZCxRQUFBQSxZQUFZLEVBQUU7QUFBdEY7QUFBaEMsT0FDTTlJLFlBQVksSUFBSXdKLFFBQVEsQ0FBQzFLLEVBQTFCLGdCQUFpQywyR0FBTXVJLFNBQVMsQ0FBQ21DLFFBQVEsQ0FBQ2xILFNBQVYsQ0FBZixDQUFqQyxnQkFBNkUsa0hBRGxGLENBRkosQ0FGSixDQURKLENBREosQ0FoQkosQ0FOSixDQURKLENBRGM7QUFBQSxHQUFULENBbEZiLENBREo7QUF1SUg7Ozs7Ozs7O1VDN2VELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvcGFnZXMvbG90dGVyeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvdHRlcnkoKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG4gICAgbGV0IGxvdHRlcnlORlREYXRlbGlzdCA9IFtdO1xuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBcbiAgICB2YXIgW3RvdGFsUGFydGljaXBhdGVkLCBzZXR0b3RhbFBhcnRpY2lwYXRlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICB2YXIgW3NlbmRlckFkZHJlc3MsIHNldHNlbmRlckFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgbGV0IGxvdHRlcnlCb3VnaHQgPSBbXTtcblxuXG4gICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgIH0pO1xuICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICBjb25zdCBbY3VycmVudE5GVGlkLCBzZXRjdXJyZW50TkZUaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRUb2tlbmlkLCBzZXRjdXJyZW50VG9rZW5pZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbUmVjRXZlbnRJRCwgc2V0UmVjRXZlbnRJRF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICB2YXIgW05GVHNsaXN0LCBzZXRORlRzbGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIExvdHRlcnlmZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcblxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgICAgIHZhciBmaW5kRXZlbnRzID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7aWR9ID0gJyR7aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgc2V0UmVjRXZlbnRJRChyZWNvcmRzWzBdLmdldElkKCkpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZHNbMF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEV2ZW50ID0gYXdhaXQgZmluZEV2ZW50cztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRXZlbnQpO1xuXG4gICAgICAgICAgICB2YXIgZmluZExvdHRlcnkgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeScpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7ZXZlbnRpZH0gPSAnJHtpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IFt7IGZpZWxkOiBcInN0YXJ0RGF0ZVwiLCBkaXJlY3Rpb246IFwiYXNjXCIgfV0sXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShhc3luYyBmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IHJlY29yZHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5mdGlkOiByZWNvcmQuZ2V0KFwibmZ0aWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiByZWNvcmQuZ2V0KFwic3RhcnREYXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IHJlY29yZC5nZXQoXCJlbmREYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb3R0ZXJ5TkZURGF0ZWxpc3QgPSAoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IGZpbmRMb3R0ZXJ5KTtcbiAgICAgICAgICAgIGF3YWl0IE5GVHNmZXRjaENvbnRyYWN0RGF0YSgpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gTkZUc2ZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudExpc3Q7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbG90dGVyeU5GVERhdGVsaXN0Lmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGxldCBlTGlzdCA9IGxvdHRlcnlORlREYXRlbGlzdFtpIC0gMV07XG4gICAgICAgICAgICAgICAgY3VycmVudExpc3QgPSBlTGlzdDtcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGZpbmRORlRTID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7aWR9ID0gJyR7ZUxpc3QubmZ0aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjb3JkcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0TkZUID0gYXdhaXQgZmluZE5GVFM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0TkZUKTtcblxuXG4gICAgICAgICAgICAgICAgdmFyIGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0TkZULmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjb3JkID0gc2VsZWN0TkZUW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmdldCgnaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZWNvcmQuZ2V0KCduYW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlY29yZC5nZXQoJ2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHJlY29yZC5nZXQoJ3ByaWNlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHJlY29yZC5nZXQoJ2ltYWdlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiBjdXJyZW50TGlzdC5zdGFydERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogY3VycmVudExpc3QuZW5kRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZWQ6IHJlY29yZC5nZXQoJ3BhcnRpY2lwYXRlZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyV2FsbGV0OiByZWNvcmQuZ2V0KCdvd25lcldhbGxldCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuaUQ6IHJlY29yZC5nZXQoJ1Rva2VuSUQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYXdhaXQgZG9uZTtcbiAgICAgICAgICAgICAgICBORlRzbGlzdC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhORlRzbGlzdCk7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXR0b3RhbFBhcnRpY2lwYXRlZChhcnJbMF0ucGFydGljaXBhdGVkKTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUaWQoYXJyWzBdLmlkKTtcbiAgICAgICAgICAgICAgICBzZXRzZW5kZXJBZGRyZXNzKGFyclswXS5vd25lcldhbGxldCk7XG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudFRva2VuaWQoYXJyWzBdLlRva2VuaUQpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2FkaW5nRGF0ZScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG90dGVyeUluZm9ybWF0aW9uJykuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIGxldCB3aW5uZXJJbmZvO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGVMb3R0ZXJ5KCkge1xuICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgIHZhciB0ZXN0ID0gYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLnNlbGVjdCh7XG4gICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe25mdGlkfSA9ICcke2N1cnJlbnRORlRpZH0nKWAsXG4gICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGVzdC5maXJzdFBhZ2UoKGVyciwgcmVjb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVjb3JkLmdldCgndXNlcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcldhbGxldDogcmVjb3JkLmdldCgndXNlcldhbGxldCcpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgdmFyIHZhbHVlID0gYXdhaXQgZG9uZTtcbiAgICAgICAgbG90dGVyeUJvdWdodCA9IHZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIHZhciB3aW5uZXJObyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbm5lck5vKTtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgV2lubmVyICR7dmFsdWVbd2lubmVyTm9dLnVzZXJ9LyR7dmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXR9IWApO1xuICAgICAgICBsZXQgcmVjZWl2ZXJBZGRyZXNzID0gdmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXQ7XG4gICAgICAgIHdpbm5lckluZm8gPSB2YWx1ZVt3aW5uZXJOb107XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIoKSB7XG5cbiAgICAgICAgbGV0IHJlY2VpdmVyQWRkcmVzcyA9IHdpbm5lckluZm8udXNlcldhbGxldDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RbXG4gICAgICAgICAgICAnc2FmZVRyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1NiknXG4gICAgICAgIF0oc2VuZGVyQWRkcmVzcywgcmVjZWl2ZXJBZGRyZXNzLCBjdXJyZW50VG9rZW5pZCAtIDEpO1xuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0LmF1cm9yYS5kZXYvdHgvJHtyZXN1bHQuaGFzaH1gLCBcIl9ibGFua1wiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIFVwZGF0aW5nT25BaXJ0YWJsZSgpIHtcblxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cbiAgICAgICAgYXdhaXQgTkZUc2xpc3QuZm9yRWFjaChhc3luYyAoTkZUKSA9PiB7XG4gICAgICAgICAgICBpZiAoTkZULmlkID0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLmRlc3Ryb3koW05GVC5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYoJy9kb25hdGlvbicpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGF3YWl0IGxvdHRlcnlORlREYXRlbGlzdC5mb3JFYWNoKGFzeW5jIChMb3R0ZXJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoTG90dGVyeS5uZnRpZCA9PSBjdXJyZW50TkZUaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5JykuZGVzdHJveShbTG90dGVyeS5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBsb3R0ZXJ5Qm91Z2h0LmZvckVhY2goYXN5bmMgKFBlcnNvbikgPT4ge1xuICAgICAgICAgICAgaWYgKFBlcnNvbi5uZnRpZCA9PSBjdXJyZW50TkZUaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5Qm91Z2h0JykuZGVzdHJveShbUGVyc29uLnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzdHJpYnV0ZSgpIHtcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShkaXN0cmlidXRlTG90dGVyeSwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJEaXN0cmlidXRpbmcuLi5cIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiRGlzdHJpYnV0ZWQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiVHJhbnNmZXJyaW5nIE5GVCB0byB3aW5uZXJcIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiVHJhbnNmZXJyZWQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgIH0pXG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoVXBkYXRpbmdPbkFpcnRhYmxlLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIlVwZGF0aW5nIG9uIEFpcnRhYmxlXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIlVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IVwiXG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdEluZm9ybWF0aW9uXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tUaW1lKCkge1xuICAgICAgICBpZiAoTkZUc2xpc3RbMF0pe1xuICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBORlRFbmREYXRlID0gbmV3IERhdGUoTkZUc2xpc3RbMF0uZW5kRGF0ZSk7XG4gICAgICAgIHZhciBkaWZmZXJjbmUgPSBORlRFbmREYXRlIC0gY3VycmVudDtcbiAgICAgICAgaWYgKGRpZmZlcmNuZSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuICAgICAgICAgICAgaWYgKGNoZWNrVGltZSgpID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdEluZm9ybWF0aW9uXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9LCAxMDAwKTtcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcImQgXCIgKyBoLnRvU3RyaW5nKCkgKyBcImggXCIgKyBtLnRvU3RyaW5nKCkgKyBcIm0gXCIgKyBzLnRvU3RyaW5nKCkgKyBcInNcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldERhdGVUaW1lKGhUZXh0LCBtVGV4dCwgc1RleHQpIHtcbiAgICAgICAgbGV0IGNvbnZlcnRlZEggPSBcIlwiO1xuICAgICAgICBsZXQgY29udmVydGVkTSA9IFwiXCI7XG4gICAgICAgIGxldCBBbVBNID0gXCJcIjtcbiAgICAgICAgaWYgKGhUZXh0IDwgMTIpIHtcbiAgICAgICAgICAgIEFtUE0gPSBcIkFNXCI7XG4gICAgICAgICAgICBpZiAoaFRleHQgPCAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgMCR7aFRleHR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAke2hUZXh0fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGl2aWRlZEggPSBoVGV4dCAvIDI7XG4gICAgICAgICAgICBBbVBNID0gXCJQTVwiO1xuICAgICAgICAgICAgaWYgKGRpdmlkZWRIIDwgMTApIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYDAke2RpdmlkZWRIfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgJHtkaXZpZGVkSH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtVGV4dCA8IDEwKSB7XG4gICAgICAgICAgICBjb252ZXJ0ZWRNID0gYDAke21UZXh0fWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb252ZXJ0ZWRNID0gYCR7bVRleHR9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHtjb252ZXJ0ZWRIfToke2NvbnZlcnRlZE19ICR7QW1QTX1gO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDaGVja0RhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbSA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRNb250aCgpO1xuICAgICAgICB2YXIgeSA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB2YXIgaCA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRIb3VycygpO1xuICAgICAgICB2YXIgbW4gPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0TWludXRlcygpO1xuICAgICAgICB2YXIgcyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRTZWNvbmRzKCk7XG5cbiAgICAgICAgcmV0dXJuIChgJHtkLnRvU3RyaW5nKCl9LyR7bS50b1N0cmluZygpfS8ke3kudG9TdHJpbmcoKX0gJHtnZXREYXRlVGltZShoLCBtbiwgcyl9YCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2TGluayB0bz17YC9kb25hdGlvbi9hdWN0aW9uP1ske1JlY0V2ZW50SUR9XWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMjA4cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+R28gdG8gQXVjdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudChyZ2IoMTEgMjE0IDE5MCkgMCUsIHJnYigyNTUgMTQxIDApIDc3JSlcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2NyxcbiAgICAgICAgICAgICAgICAgICAgZmxleEZsb3c6IFwicm93IG5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTByZW1cIiwgcGFkZGluZzogXCIzcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJMb2FkaW5nRGF0ZVwiIHN0eWxlPXt7IHdpZHRoOiAyODAsIGhlaWdodDogMjc5LCBkaXNwbGF5OiBcImZsZXhcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdMb3R0ZXJ5SW5mb3JtYXRpb24nIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiZGFya2JsdWVcIiwgbWFyZ2luVG9wOiAzNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudE5GVG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIHBhcnRpY2lwYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmYwMGIxLCAjMDBmZjg5KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxOCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIjNWQxZmZmIHNvbGlkIDFweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxQYXJ0aWNpcGF0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIG5hbWU9J2RhdGVsZWZ0SW5mb3JtYXRpb24nIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzI3cHgnIH19IGRhdGU9e2N1cnJlbnRORlRlbmREYXRlfT57TGVmdERhdGUoY3VycmVudE5GVGVuZERhdGUpfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2Rpc3RyaWJ1dGV9IGlkPVwiZGlzdHJpYnV0ZVwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIG1hcmdpblRvcDogNDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IDE4NCwgYm9yZGVyUmFkaXVzOiA1MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzdHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtORlRzbGlzdC5mbGF0TWFwKChsaXN0SXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5pZH0gY2xhc3NOYW1lPVwicm93IEVsZW1lbnRzQ29udGFpbmVyIGJnV2hpdGVcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KDI5NWRlZywgIzBiZDZiZSwgI2EyNDFkZilcIiwgbWFyZ2luVG9wOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uaWR9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsaXN0SXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJBdWN0aW9uQmlkSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxleERpcmVjdGlvbjogJ3JvdycsIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiA1IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgZm9udFNpemU6IFwiMnZ3XCIsIGNvbG9yOiBcIndoaXRlXCIgfX0+e2xpc3RJdGVtLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDE5OSAxOTQgMTk0KVwiLCBmb250U2l6ZTogXCIxLjd2d1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDE5OSAxOTQgMTk0KVwiLCBmb250U2l6ZTogXCIxLjd2d1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgRGF0ZToge0NoZWNrRGF0ZShsaXN0SXRlbS5zdGFydERhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgY29sb3I6IFwicmdiKDE5OSAxOTQgMTk0KVwiLCBmb250U2l6ZTogXCIxLjd2d1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5kIERhdGU6ICAge0NoZWNrRGF0ZShsaXN0SXRlbS5lbmREYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWxlbWVudEJvdHRvbUNvbnRhaW5lclwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzU2NXB4JywgbWFyZ2luOiAnMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCB0ZXh0QWxpZ246ICdyaWdodCcsIG1hcmdpbkJvdHRvbTogJzMzcHgnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjY3cHgnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYm9yZGVyUmFkaXVzOiAnOHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3JnYigxNywgMzQsIDQ3KScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBjb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJpZHByaWNlXCIgc3R5bGU9e3sgZm9udFNpemU6IDI0LCBoZWlnaHQ6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGxpbmVIZWlnaHQ6IFwiMy42XCIsIGJvcmRlclJhZGl1czogNDAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGN1cnJlbnRORlRpZCAhPSBsaXN0SXRlbS5pZCkgPyAoPD5BdCB7Q2hlY2tEYXRlKGxpc3RJdGVtLnN0YXJ0RGF0ZSl9PC8+KSA6ICg8PkluIFByb2dyZXNzPC8+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuXG5cblxuXG5cblxuICAgICAgICA8Lz5cbiAgICApO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI4MGI3NTY3MzIyNGRhZjg3NTZmN1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VQYXJhbXMiLCJOYXZMaW5rIiwidG9hc3QiLCJuZWFyQVBJIiwiQnV0dG9uIiwidXNlQ29udHJhY3QiLCJMb3R0ZXJ5IiwicmVnZXgiLCJzdHIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsIm0iLCJpZCIsImV4ZWMiLCJpbmRleCIsImxhc3RJbmRleCIsImxvdHRlcnlORlREYXRlbGlzdCIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInRvdGFsUGFydGljaXBhdGVkIiwic2V0dG90YWxQYXJ0aWNpcGF0ZWQiLCJzZW5kZXJBZGRyZXNzIiwic2V0c2VuZGVyQWRkcmVzcyIsImxvdHRlcnlCb3VnaHQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50TkZUaWQiLCJzZXRjdXJyZW50TkZUaWQiLCJjdXJyZW50VG9rZW5pZCIsInNldGN1cnJlbnRUb2tlbmlkIiwiUmVjRXZlbnRJRCIsInNldFJlY0V2ZW50SUQiLCJORlRzbGlzdCIsInNldE5GVHNsaXN0IiwiTG90dGVyeWZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiZ2V0SWQiLCJwYWdlIiwidGhlbiIsImUiLCJzZWxlY3RlZEV2ZW50IiwiY29uc29sZSIsImxvZyIsImZpbmRMb3R0ZXJ5Iiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiYXJyIiwiaSIsImxlbmd0aCIsInJlY29yZCIsInB1c2giLCJyZWNpZCIsIm5mdGlkIiwiZ2V0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIk5GVHNmZXRjaENvbnRyYWN0RGF0YSIsImVMaXN0IiwiY3VycmVudExpc3QiLCJmaW5kTkZUUyIsInNlbGVjdE5GVCIsImRvbmUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlIiwicGFydGljaXBhdGVkIiwib3duZXJXYWxsZXQiLCJUb2tlbmlEIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lubmVySW5mbyIsImRpc3RyaWJ1dGVMb3R0ZXJ5IiwidGVzdCIsImZpcnN0UGFnZSIsImVyciIsImZvckVhY2giLCJ1c2VyIiwidXNlcldhbGxldCIsIndpbm5lck5vIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3VjY2VzcyIsInJlY2VpdmVyQWRkcmVzcyIsIlRyYW5zZmVycmluZ05GVHRvV2lubmVyIiwicmVzdWx0Iiwib3BlbiIsImhhc2giLCJVcGRhdGluZ09uQWlydGFibGUiLCJORlQiLCJkZXN0cm95IiwiZGVsZXRlZFJlY29yZHMiLCJlcnJvciIsImhyZWYiLCJQZXJzb24iLCJkaXN0cmlidXRlIiwicHJvbWlzZSIsInBlbmRpbmciLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJkYXRlIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiTGVmdERhdGUiLCJMZWZ0RGF0ZUJpZCIsImNoZWNrVGltZSIsImN1cnJlbnQiLCJEYXRlIiwiTkZURW5kRGF0ZSIsImRpZmZlcmNuZSIsInNldEludGVydmFsIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJoIiwicyIsInRvU3RyaW5nIiwiZ2V0RGF0ZVRpbWUiLCJoVGV4dCIsIm1UZXh0Iiwic1RleHQiLCJjb252ZXJ0ZWRIIiwiY29udmVydGVkTSIsIkFtUE0iLCJkaXZpZGVkSCIsIkNoZWNrRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsInkiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwibW4iLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdhcCIsInBvc2l0aW9uIiwicmlnaHQiLCJjb2xvciIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsIndpZHRoIiwiY3Vyc29yIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJmb250U2l6ZSIsImFsaWduU2VsZiIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlclJhZGl1cyIsImZsZXhGbG93IiwicGxhY2VDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiY3VycmVudE5GVG5hbWUiLCJib3JkZXIiLCJjdXJyZW50TkZUZW5kRGF0ZSIsImxpc3RJdGVtIiwiZmxleERpcmVjdGlvbiIsInJvd0dhcCIsIm1hcmdpbkJvdHRvbSIsImxpbmVIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9