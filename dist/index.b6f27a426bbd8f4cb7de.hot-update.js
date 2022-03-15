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
                document.getElementsByName("dateleftInformation")[0].style.display = "";
                document.getElementById("distribute").style.display = "none";
              } else {
                document.getElementsByName("dateleftInformation")[0].style.display = "none";
                document.getElementById("distribute").style.display = "";
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
/******/ 	__webpack_require__.h = function() { return "7829db5dbe13fa228975"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmI2ZjI3YTQyNmJiZDhmNGNiN2RlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUNELE1BQUlLLGtCQUFrQixHQUFHLEVBQXpCOztBQUNBLGtCQUEwQ25CLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBS29CLGNBQUw7QUFBQSxNQUFxQkMsaUJBQXJCOztBQUNBLG1CQUFvRHJCLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBO0FBQUEsTUFBT3NCLGlCQUFQO0FBQUEsTUFBMkJDLG9CQUEzQjs7QUFDQSxxQkFBb0NoQixpRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRaUIsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUVBLG1CQUFrRHpCLCtDQUFRLENBQUMsQ0FBRCxDQUExRDtBQUFBO0FBQUEsTUFBTzBCLGlCQUFQO0FBQUEsTUFBMEJDLG9CQUExQjs7QUFDQSxtQkFBd0MzQiwrQ0FBUSxDQUFD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LE1BQXhCO0FBQWdDSCxRQUFBQSxTQUFTLEVBQUUsUUFBM0M7QUFBcURzQixRQUFBQSxVQUFVLEVBQUUsS0FBakU7QUFBd0VaLFFBQUFBLFlBQVksRUFBRTtBQUF0RjtBQUFoQyxPQUNNOUksWUFBWSxJQUFJc0osUUFBUSxDQUFDNUssRUFBMUIsZ0JBQWlDLDJHQUFNMkksU0FBUyxDQUFDaUMsUUFBUSxDQUFDaEgsU0FBVixDQUFmLENBQWpDLGdCQUE2RSxrSEFEbEYsQ0FGSixDQUZKLENBREosQ0FESixDQWhCSixDQU5KLENBREosQ0FEYztBQUFBLEdBQVQsQ0FsRmIsQ0FESjtBQXVJSDs7Ozs7Ozs7VUNyZkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9sb3R0ZXJ5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG90dGVyeSgpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBsZXQgbTtcbiAgICBsZXQgaWQgPSBcIlwiO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcbiAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWQgPSBtWzFdO1xuICAgIH1cbiAgICBsZXQgbG90dGVyeU5GVERhdGVsaXN0ID0gW107XG4gICAgbGV0IFtjdXJyZW50TkZUbmFtZSwgc2V0Y3VycmVudE5GVG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2N1cnJlbnRORlRlbmREYXRlICwgc2V0Y3VycmVudE5GVGVuZERhdGUgXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG4gICAgXG4gICAgY29uc3QgW3RvdGFsUGFydGljaXBhdGVkLCBzZXR0b3RhbFBhcnRpY2lwYXRlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICB2YXIgW3NlbmRlckFkZHJlc3MsIHNldHNlbmRlckFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgbGV0IGxvdHRlcnlCb3VnaHQgPSBbXTtcblxuXG4gICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgIH0pO1xuICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICBjb25zdCBbY3VycmVudE5GVGlkLCBzZXRjdXJyZW50TkZUaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRUb2tlbmlkLCBzZXRjdXJyZW50VG9rZW5pZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbUmVjRXZlbnRJRCwgc2V0UmVjRXZlbnRJRF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICB2YXIgW05GVHNsaXN0LCBzZXRORlRzbGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIExvdHRlcnlmZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcblxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgICAgIHZhciBmaW5kRXZlbnRzID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7aWR9ID0gJyR7aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgc2V0UmVjRXZlbnRJRChyZWNvcmRzWzBdLmdldElkKCkpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZHNbMF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEV2ZW50ID0gYXdhaXQgZmluZEV2ZW50cztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRXZlbnQpO1xuXG4gICAgICAgICAgICB2YXIgZmluZExvdHRlcnkgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeScpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7ZXZlbnRpZH0gPSAnJHtpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IFt7IGZpZWxkOiBcInN0YXJ0RGF0ZVwiLCBkaXJlY3Rpb246IFwiYXNjXCIgfV0sXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShhc3luYyBmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IHJlY29yZHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5mdGlkOiByZWNvcmQuZ2V0KFwibmZ0aWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiByZWNvcmQuZ2V0KFwic3RhcnREYXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IHJlY29yZC5nZXQoXCJlbmREYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsb3R0ZXJ5TkZURGF0ZWxpc3QgPSAoYXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF3YWl0IGZpbmRMb3R0ZXJ5KTtcbiAgICAgICAgICAgIGF3YWl0IE5GVHNmZXRjaENvbnRyYWN0RGF0YSgpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gTkZUc2ZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudExpc3Q7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbG90dGVyeU5GVERhdGVsaXN0Lmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGxldCBlTGlzdCA9IGxvdHRlcnlORlREYXRlbGlzdFtpIC0gMV07XG4gICAgICAgICAgICAgICAgY3VycmVudExpc3QgPSBlTGlzdDtcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGZpbmRORlRTID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7aWR9ID0gJyR7ZUxpc3QubmZ0aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjb3JkcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0TkZUID0gYXdhaXQgZmluZE5GVFM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0TkZUKTtcblxuXG4gICAgICAgICAgICAgICAgdmFyIGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0TkZULmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjb3JkID0gc2VsZWN0TkZUW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmdldCgnaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZWNvcmQuZ2V0KCduYW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlY29yZC5nZXQoJ2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHJlY29yZC5nZXQoJ3ByaWNlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IHJlY29yZC5nZXQoJ2ltYWdlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiBjdXJyZW50TGlzdC5zdGFydERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogY3VycmVudExpc3QuZW5kRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0ZWQ6IHJlY29yZC5nZXQoJ3BhcnRpY2lwYXRlZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyV2FsbGV0OiByZWNvcmQuZ2V0KCdvd25lcldhbGxldCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuaUQ6IHJlY29yZC5nZXQoJ1Rva2VuSUQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYXdhaXQgZG9uZTtcbiAgICAgICAgICAgICAgICBORlRzbGlzdC5wdXNoKHZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhORlRzbGlzdCk7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXR0b3RhbFBhcnRpY2lwYXRlZChhcnJbMF0ucGFydGljaXBhdGVkKTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUbmFtZShhcnJbMF0ubmFtZSlcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUZW5kRGF0ZSggYXJyWzBdLmVuZERhdGUpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRpZChhcnJbMF0uaWQpO1xuICAgICAgICAgICAgICAgIHNldHNlbmRlckFkZHJlc3MoYXJyWzBdLm93bmVyV2FsbGV0KTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50VG9rZW5pZChhcnJbMF0uVG9rZW5pRCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvYWRpbmdEYXRlJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb3R0ZXJ5SW5mb3JtYXRpb24nKS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdChhc3luYygpID0+IHtcbiAgICAgICAgYXdhaXQgTG90dGVyeWZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgfSxbY3VycmVudE5GVGVuZERhdGVdKTtcblxuXG4gICAgbGV0IHdpbm5lckluZm87XG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzdHJpYnV0ZUxvdHRlcnkoKSB7XG4gICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgdmFyIHRlc3QgPSBhd2FpdCBiYXNlKCdsb3R0ZXJ5Qm91Z2h0Jykuc2VsZWN0KHtcbiAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7bmZ0aWR9ID0gJyR7Y3VycmVudE5GVGlkfScpYCxcbiAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0ZXN0LmZpcnN0UGFnZSgoZXJyLCByZWNvcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHt9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5nZXQoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiByZWNvcmQuZ2V0KCd1c2VyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyV2FsbGV0OiByZWNvcmQuZ2V0KCd1c2VyV2FsbGV0JylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSBhd2FpdCBkb25lO1xuICAgICAgICBsb3R0ZXJ5Qm91Z2h0ID0gdmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgdmFyIHdpbm5lck5vID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2cod2lubmVyTm8pO1xuICAgICAgICB0b2FzdC5zdWNjZXNzKGBXaW5uZXIgJHt2YWx1ZVt3aW5uZXJOb10udXNlcn0vJHt2YWx1ZVt3aW5uZXJOb10udXNlcldhbGxldH0hYCk7XG4gICAgICAgIGxldCByZWNlaXZlckFkZHJlc3MgPSB2YWx1ZVt3aW5uZXJOb10udXNlcldhbGxldDtcbiAgICAgICAgd2lubmVySW5mbyA9IHZhbHVlW3dpbm5lck5vXTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBUcmFuc2ZlcnJpbmdORlR0b1dpbm5lcigpIHtcblxuICAgICAgICBsZXQgcmVjZWl2ZXJBZGRyZXNzID0gd2lubmVySW5mby51c2VyV2FsbGV0O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdFtcbiAgICAgICAgICAgICdzYWZlVHJhbnNmZXJGcm9tKGFkZHJlc3MsYWRkcmVzcyx1aW50MjU2KSdcbiAgICAgICAgXShzZW5kZXJBZGRyZXNzLCByZWNlaXZlckFkZHJlc3MsIGN1cnJlbnRUb2tlbmlkIC0gMSk7XG4gICAgICAgIHdpbmRvdy5vcGVuKGBodHRwczovL2V4cGxvcmVyLnRlc3RuZXQuYXVyb3JhLmRldi90eC8ke3Jlc3VsdC5oYXNofWAsIFwiX2JsYW5rXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gVXBkYXRpbmdPbkFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cblxuICAgICAgICBhd2FpdCBORlRzbGlzdC5mb3JFYWNoKGFzeW5jIChORlQpID0+IHtcbiAgICAgICAgICAgIGlmIChORlQuaWQgPSBjdXJyZW50TkZUaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuZGVzdHJveShbTkZULnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZignL2RvbmF0aW9uJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgYXdhaXQgbG90dGVyeU5GVERhdGVsaXN0LmZvckVhY2goYXN5bmMgKExvdHRlcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChMb3R0ZXJ5Lm5mdGlkID09IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5kZXN0cm95KFtMb3R0ZXJ5LnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IGxvdHRlcnlCb3VnaHQuZm9yRWFjaChhc3luYyAoUGVyc29uKSA9PiB7XG4gICAgICAgICAgICBpZiAoUGVyc29uLm5mdGlkID09IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5kZXN0cm95KFtQZXJzb24ucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBkaXN0cmlidXRlKCkge1xuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKGRpc3RyaWJ1dGVMb3R0ZXJ5LCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIkRpc3RyaWJ1dGluZy4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJEaXN0cmlidXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShUcmFuc2ZlcnJpbmdORlR0b1dpbm5lciwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJUcmFuc2ZlcnJpbmcgTkZUIHRvIHdpbm5lclwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShVcGRhdGluZ09uQWlydGFibGUsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiVXBkYXRpbmcgb24gQWlydGFibGVcIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiVXBkYXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1RpbWUoKSB7XG4gICAgICAgIGlmIChORlRzbGlzdFswXSl7XG4gICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIE5GVEVuZERhdGUgPSBuZXcgRGF0ZShORlRzbGlzdFswXS5lbmREYXRlKTtcbiAgICAgICAgdmFyIGRpZmZlcmNuZSA9IE5GVEVuZERhdGUgLSBjdXJyZW50O1xuICAgICAgICBpZiAoZGlmZmVyY25lID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChjaGVja1RpbWUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIilbMF0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXN0cmlidXRlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdEluZm9ybWF0aW9uXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3RyaWJ1dGVcIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSwgMTAwMCk7XG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXREYXRlVGltZShoVGV4dCwgbVRleHQsIHNUZXh0KSB7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRIID0gXCJcIjtcbiAgICAgICAgbGV0IGNvbnZlcnRlZE0gPSBcIlwiO1xuICAgICAgICBsZXQgQW1QTSA9IFwiXCI7XG4gICAgICAgIGlmIChoVGV4dCA8IDEyKSB7XG4gICAgICAgICAgICBBbVBNID0gXCJBTVwiO1xuICAgICAgICAgICAgaWYgKGhUZXh0IDwgMTApIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYDAke2hUZXh0fWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgJHtoVGV4dH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRpdmlkZWRIID0gaFRleHQgLyAyO1xuICAgICAgICAgICAgQW1QTSA9IFwiUE1cIjtcbiAgICAgICAgICAgIGlmIChkaXZpZGVkSCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtkaXZpZGVkSH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobVRleHQgPCAxMCkge1xuICAgICAgICAgICAgY29udmVydGVkTSA9IGAwJHttVGV4dH1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udmVydGVkTSA9IGAke21UZXh0fWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7Y29udmVydGVkSH06JHtjb252ZXJ0ZWRNfSAke0FtUE19YDtcbiAgICB9XG4gICAgZnVuY3Rpb24gQ2hlY2tEYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldERhdGUoKTtcbiAgICAgICAgdmFyIG0gPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0TW9udGgoKTtcbiAgICAgICAgdmFyIHkgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdmFyIGggPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0SG91cnMoKTtcbiAgICAgICAgdmFyIG1uID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgdmFyIHMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0U2Vjb25kcygpO1xuXG4gICAgICAgIHJldHVybiAoYCR7ZC50b1N0cmluZygpfS8ke20udG9TdHJpbmcoKX0vJHt5LnRvU3RyaW5nKCl9ICR7Z2V0RGF0ZVRpbWUoaCwgbW4sIHMpfWApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvZG9uYXRpb24vYXVjdGlvbj9bJHtSZWNFdmVudElEfV1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzIwOHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIEF1Y3Rpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQocmdiKDExIDIxNCAxOTApIDAlLCByZ2IoMjU1IDE0MSAwKSA3NyUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNjcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhGbG93OiBcInJvdyBub3dyYXBcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwcmVtXCIsIHBhZGRpbmc6IFwiM3JlbVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiTG9hZGluZ0RhdGVcIiBzdHlsZT17eyB3aWR0aDogMjgwLCBoZWlnaHQ6IDI3OSwgZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nTG90dGVyeUluZm9ybWF0aW9uJyBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcImRhcmtibHVlXCIsIG1hcmdpblRvcDogMzQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRORlRuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBwYXJ0aWNpcGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmMDBiMSwgIzAwZmY4OSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMzgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiIzVkMWZmZiBzb2xpZCAxcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsUGFydGljaXBhdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBuYW1lPSdkYXRlbGVmdEluZm9ybWF0aW9uJyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcyN3B4JyB9fSBkYXRlPXtjdXJyZW50TkZUZW5kRGF0ZX0+e0xlZnREYXRlKGN1cnJlbnRORlRlbmREYXRlKX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtkaXN0cmlidXRlfSBpZD1cImRpc3RyaWJ1dGVcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IDQxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiAxODQsIGJvcmRlclJhZGl1czogNTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3RyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7TkZUc2xpc3QuZmxhdE1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uaWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCgyOTVkZWcsICMwYmQ2YmUsICNhMjQxZGYpXCIsIG1hcmdpblRvcDogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGlzdEl0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJ2d1wiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PntsaXN0SXRlbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IERhdGU6IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZCBEYXRlOiAgIHtDaGVja0RhdGUobGlzdEl0ZW0uZW5kRGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVsZW1lbnRCb3R0b21Db250YWluZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICc1NjVweCcsIG1hcmdpbjogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgdGV4dEFsaWduOiAncmlnaHQnLCBtYXJnaW5Cb3R0b206ICczM3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI2N3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJvcmRlclJhZGl1czogJzhweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMTcsIDM0LCA0NyknLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiaWRwcmljZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyNCwgaGVpZ2h0OiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjMuNlwiLCBib3JkZXJSYWRpdXM6IDQwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjdXJyZW50TkZUaWQgIT0gbGlzdEl0ZW0uaWQpID8gKDw+QXQge0NoZWNrRGF0ZShsaXN0SXRlbS5zdGFydERhdGUpfTwvPikgOiAoPD5JbiBQcm9ncmVzczwvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuXG5cblxuXG5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNzgyOWRiNWRiZTEzZmEyMjg5NzVcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiTmF2TGluayIsInRvYXN0IiwibmVhckFQSSIsIkJ1dHRvbiIsInVzZUNvbnRyYWN0IiwiTG90dGVyeSIsInJlZ2V4Iiwic3RyIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJsb3R0ZXJ5TkZURGF0ZWxpc3QiLCJjdXJyZW50TkZUbmFtZSIsInNldGN1cnJlbnRORlRuYW1lIiwiY3VycmVudE5GVGVuZERhdGUiLCJzZXRjdXJyZW50TkZUZW5kRGF0ZSIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInRvdGFsUGFydGljaXBhdGVkIiwic2V0dG90YWxQYXJ0aWNpcGF0ZWQiLCJzZW5kZXJBZGRyZXNzIiwic2V0c2VuZGVyQWRkcmVzcyIsImxvdHRlcnlCb3VnaHQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50TkZUaWQiLCJzZXRjdXJyZW50TkZUaWQiLCJjdXJyZW50VG9rZW5pZCIsInNldGN1cnJlbnRUb2tlbmlkIiwiUmVjRXZlbnRJRCIsInNldFJlY0V2ZW50SUQiLCJORlRzbGlzdCIsInNldE5GVHNsaXN0IiwiTG90dGVyeWZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiZ2V0SWQiLCJwYWdlIiwidGhlbiIsImUiLCJzZWxlY3RlZEV2ZW50IiwiY29uc29sZSIsImxvZyIsImZpbmRMb3R0ZXJ5Iiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiYXJyIiwiaSIsImxlbmd0aCIsInJlY29yZCIsInB1c2giLCJyZWNpZCIsIm5mdGlkIiwiZ2V0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIk5GVHNmZXRjaENvbnRyYWN0RGF0YSIsImVMaXN0IiwiY3VycmVudExpc3QiLCJmaW5kTkZUUyIsInNlbGVjdE5GVCIsImRvbmUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlIiwicGFydGljaXBhdGVkIiwib3duZXJXYWxsZXQiLCJUb2tlbmlEIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lubmVySW5mbyIsImRpc3RyaWJ1dGVMb3R0ZXJ5IiwidGVzdCIsImZpcnN0UGFnZSIsImVyciIsImZvckVhY2giLCJ1c2VyIiwidXNlcldhbGxldCIsIndpbm5lck5vIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3VjY2VzcyIsInJlY2VpdmVyQWRkcmVzcyIsIlRyYW5zZmVycmluZ05GVHRvV2lubmVyIiwicmVzdWx0Iiwib3BlbiIsImhhc2giLCJVcGRhdGluZ09uQWlydGFibGUiLCJORlQiLCJkZXN0cm95IiwiZGVsZXRlZFJlY29yZHMiLCJlcnJvciIsImhyZWYiLCJQZXJzb24iLCJkaXN0cmlidXRlIiwicHJvbWlzZSIsInBlbmRpbmciLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJkYXRlIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiTGVmdERhdGUiLCJMZWZ0RGF0ZUJpZCIsImNoZWNrVGltZSIsImN1cnJlbnQiLCJEYXRlIiwiTkZURW5kRGF0ZSIsImRpZmZlcmNuZSIsInNldEludGVydmFsIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJoIiwicyIsInRvU3RyaW5nIiwiZ2V0RGF0ZVRpbWUiLCJoVGV4dCIsIm1UZXh0Iiwic1RleHQiLCJjb252ZXJ0ZWRIIiwiY29udmVydGVkTSIsIkFtUE0iLCJkaXZpZGVkSCIsIkNoZWNrRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsInkiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwibW4iLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdhcCIsInBvc2l0aW9uIiwicmlnaHQiLCJjb2xvciIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsIndpZHRoIiwiY3Vyc29yIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJmb250U2l6ZSIsImFsaWduU2VsZiIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlclJhZGl1cyIsImZsZXhGbG93IiwicGxhY2VDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwibGlzdEl0ZW0iLCJmbGV4RGlyZWN0aW9uIiwicm93R2FwIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=