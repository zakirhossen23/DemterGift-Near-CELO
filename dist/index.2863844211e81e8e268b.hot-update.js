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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/flat-map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/flat-map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5__);
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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
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
    _LotteryfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee7() {
      var Airtable, base, findEvents, selectedEvent, findLottery;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee7$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              if (!(id && window.location.pathname == "/lottery")) {
                _context12.next = 16;
                break;
              }

              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              findEvents = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default())( /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee4(resolve, reject) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee4$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return base('events').select({
                            filterByFormula: "({id} = '".concat(id, "')"),
                            view: "Grid view"
                          }).eachPage( /*#__PURE__*/function () {
                            var _page = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3(records, fetchNextPage) {
                              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context8) {
                                while (1) {
                                  switch (_context8.prev = _context8.next) {
                                    case 0:
                                      // This function (`page`) will get called for each page of records.
                                      setRecEventID(records[0].getId());
                                      resolve(records[0]);

                                    case 2:
                                    case "end":
                                      return _context8.stop();
                                  }
                                }
                              }, _callee3);
                            }));

                            function page(_x3, _x4) {
                              return _page.apply(this, arguments);
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

                return function (_x, _x2) {
                  return _ref3.apply(this, arguments);
                };
              }()).then(function (e) {
                return e;
              });
              _context12.next = 6;
              return findEvents;

            case 6:
              selectedEvent = _context12.sent;
              console.log(selectedEvent);
              findLottery = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default())( /*#__PURE__*/function () {
                var _ref4 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee6(resolve, reject) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee6$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.next = 2;
                          return base('lottery').select({
                            filterByFormula: "({eventid} = '".concat(id, "')"),
                            sort: [{
                              field: "startDate",
                              direction: "asc"
                            }],
                            view: "Grid view"
                          }).eachPage( /*#__PURE__*/function () {
                            var _page2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee5(records, fetchNextPage) {
                              var arr, i, record;
                              return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee5$(_context10) {
                                while (1) {
                                  switch (_context10.prev = _context10.next) {
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
                                      return _context10.stop();
                                  }
                                }
                              }, _callee5);
                            }));

                            function page(_x7, _x8) {
                              return _page2.apply(this, arguments);
                            }

                            return page;
                          }());

                        case 2:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x5, _x6) {
                  return _ref4.apply(this, arguments);
                };
              }()).then(function (e) {
                return e;
              });
              _context12.t0 = console;
              _context12.next = 12;
              return findLottery;

            case 12:
              _context12.t1 = _context12.sent;

              _context12.t0.log.call(_context12.t0, _context12.t1);

              _context12.next = 16;
              return NFTsfetchContractData();

            case 16:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee7);
    }));
    return _LotteryfetchContractData.apply(this, arguments);
  }

  function NFTsfetchContractData() {
    return _NFTsfetchContractData.apply(this, arguments);
  }

  function _NFTsfetchContractData() {
    _NFTsfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee9() {
      var arr, Airtable, base, currentList, _loop, i, findNFTS, done, value;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee9$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              if (!(id && window.location.pathname == "/lottery")) {
                _context15.next = 11;
                break;
              }

              arr = [];
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              _loop = /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _loop(i) {
                var eList, selectNFT;
                return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _loop$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        eList = lotteryNFTDatelist[i - 1];
                        currentList = eList;
                        arr = [];
                        findNFTS = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default())( /*#__PURE__*/function () {
                          var _ref5 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee8(resolve, reject) {
                            return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee8$(_context13) {
                              while (1) {
                                switch (_context13.prev = _context13.next) {
                                  case 0:
                                    _context13.next = 2;
                                    return base('nfts').select({
                                      filterByFormula: "({id} = '".concat(eList.nftid, "')"),
                                      view: "Grid view"
                                    }).eachPage(function page(records, fetchNextPage) {
                                      resolve(records);
                                    });

                                  case 2:
                                  case "end":
                                    return _context13.stop();
                                }
                              }
                            }, _callee8);
                          }));

                          return function (_x9, _x10) {
                            return _ref5.apply(this, arguments);
                          };
                        }()).then(function (e) {
                          return e;
                        });
                        _context14.next = 6;
                        return findNFTS;

                      case 6:
                        selectNFT = _context14.sent;
                        console.log(selectNFT);
                        done = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default())(function (resolve, reject) {
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
                        _context14.next = 11;
                        return done;

                      case 11:
                        value = _context14.sent;
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
                        return _context14.stop();
                    }
                  }
                }, _loop);
              });
              i = lotteryNFTDatelist.length;

            case 6:
              if (!(i > 0)) {
                _context15.next = 11;
                break;
              }

              return _context15.delegateYield(_loop(i), "t0", 8);

            case 8:
              i--;
              _context15.next = 6;
              break;

            case 11:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee9);
    }));
    return _NFTsfetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)( /*#__PURE__*/(0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return LotteryfetchContractData();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [currentNFTendDate]);
  var winnerInfo;

  function distributeLottery() {
    return _distributeLottery.apply(this, arguments);
  }

  function _distributeLottery() {
    _distributeLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee10() {
      var _context16;

      var arr, test, done, value, winnerNo, receiverAddress;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee10$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              arr = [];
              _context17.next = 3;
              return base('lotteryBought').select({
                filterByFormula: "({nftid} = '".concat(currentNFTid, "')"),
                view: "Grid view"
              });

            case 3:
              test = _context17.sent;
              done = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default())(function (resolve, reject) {
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
              _context17.next = 7;
              return done;

            case 7:
              value = _context17.sent;
              lotteryBought = value;
              console.log(value);
              winnerNo = Math.floor(Math.random() * value.length);
              console.log(winnerNo);
              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context16 = "Winner ".concat(value[winnerNo].user, "/")).call(_context16, value[winnerNo].userWallet, "!"));
              receiverAddress = value[winnerNo].userWallet;
              winnerInfo = value[winnerNo];

            case 15:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee10);
    }));
    return _distributeLottery.apply(this, arguments);
  }

  function TransferringNFTtoWinner() {
    return _TransferringNFTtoWinner.apply(this, arguments);
  }

  function _TransferringNFTtoWinner() {
    _TransferringNFTtoWinner = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee11() {
      var receiverAddress, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee11$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              receiverAddress = winnerInfo.userWallet;
              _context18.next = 3;
              return contract['safeTransferFrom(address,address,uint256)'](senderAddress, receiverAddress, currentTokenid - 1);

            case 3:
              result = _context18.sent;
              window.open("https://explorer.testnet.aurora.dev/tx/".concat(result.hash), "_blank");
              console.log(result);

            case 6:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee11);
    }));
    return _TransferringNFTtoWinner.apply(this, arguments);
  }

  function UpdatingOnAirtable() {
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function _UpdatingOnAirtable() {
    _UpdatingOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee15() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee15$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context22.next = 5;
              return NFTslist.forEach( /*#__PURE__*/function () {
                var _ref6 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee12(NFT) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee12$(_context19) {
                    while (1) {
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          if (!(NFT.id = currentNFTid)) {
                            _context19.next = 3;
                            break;
                          }

                          _context19.next = 3;
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
                          return _context19.stop();
                      }
                    }
                  }, _callee12);
                }));

                return function (_x11) {
                  return _ref6.apply(this, arguments);
                };
              }());

            case 5:
              _context22.next = 7;
              return lotteryNFTDatelist.forEach( /*#__PURE__*/function () {
                var _ref7 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee13(Lottery) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee13$(_context20) {
                    while (1) {
                      switch (_context20.prev = _context20.next) {
                        case 0:
                          if (!(Lottery.nftid == currentNFTid)) {
                            _context20.next = 3;
                            break;
                          }

                          _context20.next = 3;
                          return base('lottery').destroy([Lottery.recid], function (err, deletedRecords) {
                            if (err) {
                              console.error(err);
                              return;
                            }

                            console.log('Deleted', deletedRecords.length, 'records');
                          });

                        case 3:
                        case "end":
                          return _context20.stop();
                      }
                    }
                  }, _callee13);
                }));

                return function (_x12) {
                  return _ref7.apply(this, arguments);
                };
              }());

            case 7:
              _context22.next = 9;
              return lotteryBought.forEach( /*#__PURE__*/function () {
                var _ref8 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee14(Person) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee14$(_context21) {
                    while (1) {
                      switch (_context21.prev = _context21.next) {
                        case 0:
                          if (!(Person.nftid == currentNFTid)) {
                            _context21.next = 3;
                            break;
                          }

                          _context21.next = 3;
                          return base('lotteryBought').destroy([Person.recid], function (err, deletedRecords) {
                            if (err) {
                              console.error(err);
                              return;
                            }

                            console.log('Deleted', deletedRecords.length, 'records');
                          });

                        case 3:
                        case "end":
                          return _context21.stop();
                      }
                    }
                  }, _callee14);
                }));

                return function (_x13) {
                  return _ref8.apply(this, arguments);
                };
              }());

            case 9:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee15);
    }));
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function distribute() {
    return _distribute.apply(this, arguments);
  }

  function _distribute() {
    _distribute = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee16() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee16$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              _context23.next = 2;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(distributeLottery, {
                pending: "Distributing...",
                error: "Please try again later",
                success: "Distributed successfully!"
              });

            case 2:
              _context23.next = 4;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(TransferringNFTtoWinner, {
                pending: "Transferring NFT to winner",
                error: "Please try again later",
                success: "Transferred successfully!"
              });

            case 4:
              _context23.next = 6;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(UpdatingOnAirtable, {
                pending: "Updating on Airtable",
                error: "Please try again later",
                success: "Updated successfully!"
              });

            case 6:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee16);
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

  setInterval( /*#__PURE__*/(0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (window.location.pathname == "/lottery") {
              if (checkTime() == true) {
                calculateTimeLeft();
              } else {
                document.getElementsByName("dateleftInformation")[0].style.display = "none";
              }
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), 1000);

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
    var _context3, _context4;

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

    return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context4 = "".concat(convertedH, ":")).call(_context4, convertedM, " ")).call(_context3, AmPM);
  }

  function CheckDate(datetext) {
    var _context5, _context6, _context7;

    var d = new Date(datetext).getDate();
    var m = new Date(datetext).getMonth();
    var y = new Date(datetext).getFullYear();
    var h = new Date(datetext).getHours();
    var mn = new Date(datetext).getMinutes();
    var s = new Date(datetext).getSeconds();
    return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context6 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context7 = "".concat(d.toString(), "/")).call(_context7, m.toString(), "/")).call(_context6, y.toString(), " ")).call(_context5, getDateTime(h, mn, s));
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_flat_map__WEBPACK_IMPORTED_MODULE_3___default()(NFTslist).call(NFTslist, function (listItem) {
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
/******/ 	__webpack_require__.h = function() { return "b7f625e0a4c893ed2a10"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjI4NjM4NDQyMTFlODFlOGUyNjhiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUNELE1BQUlLLGtCQUFrQixHQUFHLEVBQXpCOztBQUNBLGtCQUEwQ25CLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBS29CLGNBQUw7QUFBQSxNQUFxQkMsaUJBQXJCOztBQUNBLG1CQUFvRHJCLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBO0FBQUEsTUFBT3NCLGlCQUFQO0FBQUEsTUFBMkJDLG9CQUEzQjs7QUFDQSxxQkFBb0NoQixpRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRaUIsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUVBLG1CQUFrRHpCLCtDQUFRLENBQUMsQ0FBRCxDQUExRDtBQUFBO0FBQUEsTUFBTzBCLGlCQUFQO0FBQUEsTUFBMEJDLG9CQUExQjs7QUFDQSxtQkFBd0MzQiwrQ0FBUSxDQUFD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R0FBVCxDQWxGYixDQURKO0FBdUlIOzs7Ozs7OztVQ2xmRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2xvdHRlcnkvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb3R0ZXJ5KCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcbiAgICBjb25zdCBzdHIgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuICAgIGxldCBsb3R0ZXJ5TkZURGF0ZWxpc3QgPSBbXTtcbiAgICBsZXQgW2N1cnJlbnRORlRuYW1lLCBzZXRjdXJyZW50TkZUbmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbY3VycmVudE5GVGVuZERhdGUgLCBzZXRjdXJyZW50TkZUZW5kRGF0ZSBdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBcbiAgICBjb25zdCBbdG90YWxQYXJ0aWNpcGF0ZWQsIHNldHRvdGFsUGFydGljaXBhdGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIHZhciBbc2VuZGVyQWRkcmVzcywgc2V0c2VuZGVyQWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBsZXQgbG90dGVyeUJvdWdodCA9IFtdO1xuXG5cbiAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgfSk7XG4gICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgIGNvbnN0IFtjdXJyZW50TkZUaWQsIHNldGN1cnJlbnRORlRpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY3VycmVudFRva2VuaWQsIHNldGN1cnJlbnRUb2tlbmlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtSZWNFdmVudElELCBzZXRSZWNFdmVudElEXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHZhciBbTkZUc2xpc3QsIHNldE5GVHNsaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gTG90dGVyeWZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuXG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICAgICAgdmFyIGZpbmRFdmVudHMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShhc3luYyBmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICBzZXRSZWNFdmVudElEKHJlY29yZHNbMF0uZ2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjb3Jkc1swXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRXZlbnQgPSBhd2FpdCBmaW5kRXZlbnRzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRFdmVudCk7XG5cbiAgICAgICAgICAgIHZhciBmaW5kTG90dGVyeSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5Jykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICcke2lkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogW3sgZmllbGQ6IFwic3RhcnREYXRlXCIsIGRpcmVjdGlvbjogXCJhc2NcIiB9XSxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjb3JkID0gcmVjb3Jkc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpZDogcmVjb3JkLmdldElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0aWQ6IHJlY29yZC5nZXQoXCJuZnRpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IHJlY29yZC5nZXQoXCJzdGFydERhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogcmVjb3JkLmdldChcImVuZERhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvdHRlcnlORlREYXRlbGlzdCA9IChhcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFycik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgZmluZExvdHRlcnkpO1xuICAgICAgICAgICAgYXdhaXQgTkZUc2ZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBORlRzZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG4gICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50TGlzdDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsb3R0ZXJ5TkZURGF0ZWxpc3QubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVMaXN0ID0gbG90dGVyeU5GVERhdGVsaXN0W2kgLSAxXTtcbiAgICAgICAgICAgICAgICBjdXJyZW50TGlzdCA9IGVMaXN0O1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgZmluZE5GVFMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtlTGlzdC5uZnRpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRzKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RORlQgPSBhd2FpdCBmaW5kTkZUUztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RORlQpO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RORlQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSBzZWxlY3RORlRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVjb3JkLmdldCgnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogcmVjb3JkLmdldCgncHJpY2UnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcmVjb3JkLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IGN1cnJlbnRMaXN0LnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiBjdXJyZW50TGlzdC5lbmREYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlZDogcmVjb3JkLmdldCgncGFydGljaXBhdGVkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJXYWxsZXQ6IHJlY29yZC5nZXQoJ293bmVyV2FsbGV0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW5pRDogcmVjb3JkLmdldCgnVG9rZW5JRCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhd2FpdCBkb25lO1xuICAgICAgICAgICAgICAgIE5GVHNsaXN0LnB1c2godmFsdWVbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE5GVHNsaXN0KTsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldHRvdGFsUGFydGljaXBhdGVkKGFyclswXS5wYXJ0aWNpcGF0ZWQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRuYW1lKGFyclswXS5uYW1lKVxuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRlbmREYXRlKCBhcnJbMF0uZW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudE5GVGlkKGFyclswXS5pZCk7XG4gICAgICAgICAgICAgICAgc2V0c2VuZGVyQWRkcmVzcyhhcnJbMF0ub3duZXJXYWxsZXQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRUb2tlbmlkKGFyclswXS5Ub2tlbmlEKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZ0RhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvdHRlcnlJbmZvcm1hdGlvbicpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KGFzeW5jKCkgPT4ge1xuICAgICAgICBhd2FpdCBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICB9LFtjdXJyZW50TkZUZW5kRGF0ZV0pO1xuXG5cbiAgICBsZXQgd2lubmVySW5mbztcbiAgICBhc3luYyBmdW5jdGlvbiBkaXN0cmlidXRlTG90dGVyeSgpIHtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICB2YXIgdGVzdCA9IGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtuZnRpZH0gPSAnJHtjdXJyZW50TkZUaWR9JylgLFxuICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICB9KVxuICAgICAgICB2YXIgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRlc3QuZmlyc3RQYWdlKChlcnIsIHJlY29yZHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Qoe30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNpZDogcmVjb3JkLmdldElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmdldCgnaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHJlY29yZC5nZXQoJ3VzZXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJXYWxsZXQ6IHJlY29yZC5nZXQoJ3VzZXJXYWxsZXQnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGFycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF3YWl0IGRvbmU7XG4gICAgICAgIGxvdHRlcnlCb3VnaHQgPSB2YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICB2YXIgd2lubmVyTm8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWx1ZS5sZW5ndGgpO1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5uZXJObyk7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoYFdpbm5lciAke3ZhbHVlW3dpbm5lck5vXS51c2VyfS8ke3ZhbHVlW3dpbm5lck5vXS51c2VyV2FsbGV0fSFgKTtcbiAgICAgICAgbGV0IHJlY2VpdmVyQWRkcmVzcyA9IHZhbHVlW3dpbm5lck5vXS51c2VyV2FsbGV0O1xuICAgICAgICB3aW5uZXJJbmZvID0gdmFsdWVbd2lubmVyTm9dO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIFRyYW5zZmVycmluZ05GVHRvV2lubmVyKCkge1xuXG4gICAgICAgIGxldCByZWNlaXZlckFkZHJlc3MgPSB3aW5uZXJJbmZvLnVzZXJXYWxsZXQ7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0W1xuICAgICAgICAgICAgJ3NhZmVUcmFuc2ZlckZyb20oYWRkcmVzcyxhZGRyZXNzLHVpbnQyNTYpJ1xuICAgICAgICBdKHNlbmRlckFkZHJlc3MsIHJlY2VpdmVyQWRkcmVzcywgY3VycmVudFRva2VuaWQgLSAxKTtcbiAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5hdXJvcmEuZGV2L3R4LyR7cmVzdWx0Lmhhc2h9YCwgXCJfYmxhbmtcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBVcGRhdGluZ09uQWlydGFibGUoKSB7XG5cbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXG4gICAgICAgIGF3YWl0IE5GVHNsaXN0LmZvckVhY2goYXN5bmMgKE5GVCkgPT4ge1xuICAgICAgICAgICAgaWYgKE5GVC5pZCA9IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5kZXN0cm95KFtORlQucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmKCcvZG9uYXRpb24nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cblxuICAgICAgICBhd2FpdCBsb3R0ZXJ5TkZURGF0ZWxpc3QuZm9yRWFjaChhc3luYyAoTG90dGVyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKExvdHRlcnkubmZ0aWQgPT0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeScpLmRlc3Ryb3koW0xvdHRlcnkucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgbG90dGVyeUJvdWdodC5mb3JFYWNoKGFzeW5jIChQZXJzb24pID0+IHtcbiAgICAgICAgICAgIGlmIChQZXJzb24ubmZ0aWQgPT0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLmRlc3Ryb3koW1BlcnNvbi5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGUoKSB7XG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoZGlzdHJpYnV0ZUxvdHRlcnksIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRGlzdHJpYnV0aW5nLi4uXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkRpc3RyaWJ1dGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFRyYW5zZmVycmluZ05GVHRvV2lubmVyLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIlRyYW5zZmVycmluZyBORlQgdG8gd2lubmVyXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIlRyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFVwZGF0aW5nT25BaXJ0YWJsZSwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJVcGRhdGluZyBvbiBBaXJ0YWJsZVwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJVcGRhdGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVGltZSgpIHtcbiAgICAgICAgaWYgKE5GVHNsaXN0WzBdKXtcbiAgICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgTkZURW5kRGF0ZSA9IG5ldyBEYXRlKE5GVHNsaXN0WzBdLmVuZERhdGUpO1xuICAgICAgICB2YXIgZGlmZmVyY25lID0gTkZURW5kRGF0ZSAtIGN1cnJlbnQ7XG4gICAgICAgIGlmIChkaWZmZXJjbmUgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIHNldEludGVydmFsKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGNoZWNrVGltZSgpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0sIDEwMDApO1xuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoaFRleHQsIG1UZXh0LCBzVGV4dCkge1xuICAgICAgICBsZXQgY29udmVydGVkSCA9IFwiXCI7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRNID0gXCJcIjtcbiAgICAgICAgbGV0IEFtUE0gPSBcIlwiO1xuICAgICAgICBpZiAoaFRleHQgPCAxMikge1xuICAgICAgICAgICAgQW1QTSA9IFwiQU1cIjtcbiAgICAgICAgICAgIGlmIChoVGV4dCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtoVGV4dH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7aFRleHR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXZpZGVkSCA9IGhUZXh0IC8gMjtcbiAgICAgICAgICAgIEFtUE0gPSBcIlBNXCI7XG4gICAgICAgICAgICBpZiAoZGl2aWRlZEggPCAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgMCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAke2RpdmlkZWRIfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1UZXh0IDwgMTApIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgMCR7bVRleHR9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgJHttVGV4dH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2NvbnZlcnRlZEh9OiR7Y29udmVydGVkTX0gJHtBbVBNfWA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENoZWNrRGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1vbnRoKCk7XG4gICAgICAgIHZhciB5ID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBoID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEhvdXJzKCk7XG4gICAgICAgIHZhciBtbiA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHZhciBzID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFNlY29uZHMoKTtcblxuICAgICAgICByZXR1cm4gKGAke2QudG9TdHJpbmcoKX0vJHttLnRvU3RyaW5nKCl9LyR7eS50b1N0cmluZygpfSAke2dldERhdGVUaW1lKGgsIG1uLCBzKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7UmVjRXZlbnRJRH1dYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBBdWN0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHJnYigxMSAyMTQgMTkwKSAwJSwgcmdiKDI1NSAxNDEgMCkgNzclKVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDY3LFxuICAgICAgICAgICAgICAgICAgICBmbGV4RmxvdzogXCJyb3cgbm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMHJlbVwiLCBwYWRkaW5nOiBcIjNyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkxvYWRpbmdEYXRlXCIgc3R5bGU9e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAyNzksIGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J0xvdHRlcnlJbmZvcm1hdGlvbicgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJkYXJrYmx1ZVwiLCBtYXJnaW5Ub3A6IDM0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TkZUbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgcGFydGljaXBhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjAwYjEsICMwMGZmODkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDM4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIiM1ZDFmZmYgc29saWQgMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbFBhcnRpY2lwYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgbmFtZT0nZGF0ZWxlZnRJbmZvcm1hdGlvbicgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMjdweCcgfX0gZGF0ZT17Y3VycmVudE5GVGVuZERhdGV9PntMZWZ0RGF0ZShjdXJyZW50TkZUZW5kRGF0ZSl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZGlzdHJpYnV0ZX0gaWQ9XCJkaXN0cmlidXRlXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiA0MSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogMTg0LCBib3JkZXJSYWRpdXM6IDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge05GVHNsaXN0LmZsYXRNYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoMjk1ZGVnLCAjMGJkNmJlLCAjYTI0MWRmKVwiLCBtYXJnaW5Ub3A6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5pZH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xpc3RJdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbGV4RGlyZWN0aW9uOiAncm93JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JywgYWxpZ25Db250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogXCIydndcIiwgY29sb3I6IFwid2hpdGVcIiB9fT57bGlzdEl0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBEYXRlOiB7Q2hlY2tEYXRlKGxpc3RJdGVtLnN0YXJ0RGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQgRGF0ZTogICB7Q2hlY2tEYXRlKGxpc3RJdGVtLmVuZERhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFbGVtZW50Qm90dG9tQ29udGFpbmVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnNTY1cHgnLCBtYXJnaW46ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgbWFyZ2luQm90dG9tOiAnMzNweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyNjdweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDE3LCAzNCwgNDcpJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmlkcHJpY2VcIiBzdHlsZT17eyBmb250U2l6ZTogMjQsIGhlaWdodDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIzLjZcIiwgYm9yZGVyUmFkaXVzOiA0MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY3VycmVudE5GVGlkICE9IGxpc3RJdGVtLmlkKSA/ICg8PkF0IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX08Lz4pIDogKDw+SW4gUHJvZ3Jlc3M8Lz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG5cblxuXG5cblxuXG4gICAgICAgIDwvPlxuICAgICk7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImI3ZjYyNWUwYTRjODkzZWQyYTEwXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsIk5hdkxpbmsiLCJ0b2FzdCIsIm5lYXJBUEkiLCJCdXR0b24iLCJ1c2VDb250cmFjdCIsIkxvdHRlcnkiLCJyZWdleCIsInN0ciIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsImlkIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwibG90dGVyeU5GVERhdGVsaXN0IiwiY3VycmVudE5GVG5hbWUiLCJzZXRjdXJyZW50TkZUbmFtZSIsImN1cnJlbnRORlRlbmREYXRlIiwic2V0Y3VycmVudE5GVGVuZERhdGUiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJ0b3RhbFBhcnRpY2lwYXRlZCIsInNldHRvdGFsUGFydGljaXBhdGVkIiwic2VuZGVyQWRkcmVzcyIsInNldHNlbmRlckFkZHJlc3MiLCJsb3R0ZXJ5Qm91Z2h0IiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiY3VycmVudE5GVGlkIiwic2V0Y3VycmVudE5GVGlkIiwiY3VycmVudFRva2VuaWQiLCJzZXRjdXJyZW50VG9rZW5pZCIsIlJlY0V2ZW50SUQiLCJzZXRSZWNFdmVudElEIiwiTkZUc2xpc3QiLCJzZXRORlRzbGlzdCIsIkxvdHRlcnlmZXRjaENvbnRyYWN0RGF0YSIsInBhdGhuYW1lIiwiZmluZEV2ZW50cyIsInJlc29sdmUiLCJyZWplY3QiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJ2aWV3IiwiZWFjaFBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImdldElkIiwicGFnZSIsInRoZW4iLCJlIiwic2VsZWN0ZWRFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kTG90dGVyeSIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsImFyciIsImkiLCJsZW5ndGgiLCJyZWNvcmQiLCJwdXNoIiwicmVjaWQiLCJuZnRpZCIsImdldCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJORlRzZmV0Y2hDb250cmFjdERhdGEiLCJlTGlzdCIsImN1cnJlbnRMaXN0IiwiZmluZE5GVFMiLCJzZWxlY3RORlQiLCJkb25lIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpbWFnZSIsInBhcnRpY2lwYXRlZCIsIm93bmVyV2FsbGV0IiwiVG9rZW5pRCIsInZhbHVlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIndpbm5lckluZm8iLCJkaXN0cmlidXRlTG90dGVyeSIsInRlc3QiLCJmaXJzdFBhZ2UiLCJlcnIiLCJmb3JFYWNoIiwidXNlciIsInVzZXJXYWxsZXQiLCJ3aW5uZXJObyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN1Y2Nlc3MiLCJyZWNlaXZlckFkZHJlc3MiLCJUcmFuc2ZlcnJpbmdORlR0b1dpbm5lciIsInJlc3VsdCIsIm9wZW4iLCJoYXNoIiwiVXBkYXRpbmdPbkFpcnRhYmxlIiwiTkZUIiwiZGVzdHJveSIsImRlbGV0ZWRSZWNvcmRzIiwiZXJyb3IiLCJocmVmIiwiUGVyc29uIiwiZGlzdHJpYnV0ZSIsInByb21pc2UiLCJwZW5kaW5nIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwiZGF0ZSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkxlZnREYXRlIiwiTGVmdERhdGVCaWQiLCJjaGVja1RpbWUiLCJjdXJyZW50IiwiRGF0ZSIsIk5GVEVuZERhdGUiLCJkaWZmZXJjbmUiLCJzZXRJbnRlcnZhbCIsImRhdGV0ZXh0IiwiYyIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiaCIsInMiLCJ0b1N0cmluZyIsImdldERhdGVUaW1lIiwiaFRleHQiLCJtVGV4dCIsInNUZXh0IiwiY29udmVydGVkSCIsImNvbnZlcnRlZE0iLCJBbVBNIiwiZGl2aWRlZEgiLCJDaGVja0RhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJ5IiwiZ2V0RnVsbFllYXIiLCJnZXRIb3VycyIsIm1uIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnYXAiLCJwb3NpdGlvbiIsInJpZ2h0IiwiY29sb3IiLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsImN1cnNvciIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwiZm9udFNpemUiLCJhbGlnblNlbGYiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3JkZXJSYWRpdXMiLCJmbGV4RmxvdyIsInBsYWNlQ29udGVudCIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImJvcmRlciIsImxpc3RJdGVtIiwiZmxleERpcmVjdGlvbiIsInJvd0dhcCIsIm1hcmdpbkJvdHRvbSIsImxpbmVIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9