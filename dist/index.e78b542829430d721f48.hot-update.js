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
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
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
                        eList = lotteryNFTDatelist[i];
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
              i = 0;

            case 6:
              if (!(i < lotteryNFTDatelist.length)) {
                _context15.next = 11;
                break;
              }

              return _context15.delegateYield(_loop(i), "t0", 8);

            case 8:
              i++;
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
  })), []);
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

  var lasttime = 0;

  function checkTime() {
    if (NFTslist[0]) {
      var current = new Date();
      var NFTEndDate = new Date(NFTslist[0].endDate);

      if (NFTslist[0].participated == null) {
        settotalParticipated(0);
      } else {
        settotalParticipated(NFTslist[0].participated);
      }

      var differcne = NFTEndDate - current;
      lasttime = differcne;

      if (differcne < 0) {
        return false;
      } else {
        return true;
      }
    }

    return false;
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
              } else if (checkTime() == false && lasttime < 0) {
                document.getElementsByName("dateleftInformation")[0].style.display = "none";
                document.getElementById("distribute").style.display = "flex";
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
      display: "none",
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", null, "Loading...")), _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(NFTslist).call(NFTslist, function (listItem) {
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
/******/ 	__webpack_require__.h = function() { return "57ff70c9753396042601"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmU3OGI1NDI4Mjk0MzBkNzIxZjQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFqQixDQUFyQjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR04sS0FBSyxDQUFDUSxJQUFOLENBQVdQLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlLLENBQUMsQ0FBQ0csS0FBRixLQUFZVCxLQUFLLENBQUNVLFNBQXRCLEVBQWlDO0FBQzdCVixNQUFBQSxLQUFLLENBQUNVLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBQ0QsTUFBSUssa0JBQWtCLEdBQUcsRUFBekI7O0FBQ0Esa0JBQTBDcEIsK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQUE7QUFBQSxNQUFLcUIsY0FBTDtBQUFBLE1BQXFCQyxpQkFBckI7O0FBQ0EsbUJBQWtEdEIsK0NBQVEsQ0FBQyxFQUFELENBQTFEO0FBQUE7QUFBQSxNQUFPdUIsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLHFCQUFvQ2pCLGlFQUFXLENBQUMsUUFBRCxDQUEvQztBQUFBLE1BQVFrQixRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBRUEsbUJBQWtEMUIsK0NBQVEsQ0FBQyxDQUFELENBQTFEO0FBQUE7QUFBQSxNQUFPMkIsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLG1C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RSxRQUF0RDtBQUFnRUgsUUFBQUEsWUFBWSxFQUFFLEtBQTlFO0FBQXFGWixRQUFBQSxRQUFRLEVBQUU7QUFBL0Y7QUFEWCxvQkFFSTtBQUNJLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxVQUFVLEVBQUUsaUJBQWQ7QUFBaUNFLFFBQUFBLEtBQUssRUFBRSxNQUF4QztBQUFnREUsUUFBQUEsTUFBTSxFQUFFLE1BQXhEO0FBQWdFTixRQUFBQSxLQUFLLEVBQUU7QUFBdkU7QUFEWCxvQkFFSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQXlCLFdBQUssRUFBRTtBQUFFVSxRQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQkosUUFBQUEsTUFBTSxFQUFFLE1BQXhCO0FBQWdDSCxRQUFBQSxTQUFTLEVBQUUsUUFBM0M7QUFBcURzQixRQUFBQSxVQUFVLEVBQUUsS0FBakU7QUFBd0VaLFFBQUFBLFlBQVksRUFBRTtBQUF0RjtBQUFoQyxPQUNNL0ksWUFBWSxJQUFJdUosUUFBUSxDQUFDN0ssRUFBMUIsZ0JBQWlDLDJHQUFNNEksU0FBUyxDQUFDaUMsUUFBUSxDQUFDakgsU0FBVixDQUFmLENBQWpDLGdCQUE2RSxrSEFEbEYsQ0FGSixDQUZKLENBREosQ0FESixDQWhCSixDQU5KLENBREosQ0FEVTtBQUFBLEdBQUwsQ0FsRmIsQ0FESjtBQXVJSDs7Ozs7Ozs7VUN4ZkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9sb3R0ZXJ5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG90dGVyeSgpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XG4gICAgY29uc3Qgc3RyID0gZGVjb2RlVVJJKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGxldCBtO1xuICAgIGxldCBpZCA9IFwiXCI7XG4gICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xuICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZCA9IG1bMV07XG4gICAgfVxuICAgIGxldCBsb3R0ZXJ5TkZURGF0ZWxpc3QgPSBbXTtcbiAgICBsZXQgW2N1cnJlbnRORlRuYW1lLCBzZXRjdXJyZW50TkZUbmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbY3VycmVudE5GVGVuZERhdGUsIHNldGN1cnJlbnRORlRlbmREYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG5cbiAgICBjb25zdCBbdG90YWxQYXJ0aWNpcGF0ZWQsIHNldHRvdGFsUGFydGljaXBhdGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIHZhciBbc2VuZGVyQWRkcmVzcywgc2V0c2VuZGVyQWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBsZXQgbG90dGVyeUJvdWdodCA9IFtdO1xuXG5cbiAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgfSk7XG4gICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgIGNvbnN0IFtjdXJyZW50TkZUaWQsIHNldGN1cnJlbnRORlRpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY3VycmVudFRva2VuaWQsIHNldGN1cnJlbnRUb2tlbmlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtSZWNFdmVudElELCBzZXRSZWNFdmVudElEXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHZhciBbTkZUc2xpc3QsIHNldE5GVHNsaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gTG90dGVyeWZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuXG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICAgICAgdmFyIGZpbmRFdmVudHMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShhc3luYyBmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICBzZXRSZWNFdmVudElEKHJlY29yZHNbMF0uZ2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjb3Jkc1swXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRXZlbnQgPSBhd2FpdCBmaW5kRXZlbnRzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRFdmVudCk7XG5cbiAgICAgICAgICAgIHZhciBmaW5kTG90dGVyeSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5Jykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICcke2lkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogW3sgZmllbGQ6IFwic3RhcnREYXRlXCIsIGRpcmVjdGlvbjogXCJhc2NcIiB9XSxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjb3JkID0gcmVjb3Jkc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpZDogcmVjb3JkLmdldElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0aWQ6IHJlY29yZC5nZXQoXCJuZnRpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IHJlY29yZC5nZXQoXCJzdGFydERhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogcmVjb3JkLmdldChcImVuZERhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvdHRlcnlORlREYXRlbGlzdCA9IChhcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFycik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgZmluZExvdHRlcnkpO1xuICAgICAgICAgICAgYXdhaXQgTkZUc2ZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBORlRzZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG4gICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50TGlzdDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG90dGVyeU5GVERhdGVsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVMaXN0ID0gbG90dGVyeU5GVERhdGVsaXN0W2ldO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0ID0gZUxpc3Q7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBmaW5kTkZUUyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2VMaXN0Lm5mdGlkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZHMpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdE5GVCA9IGF3YWl0IGZpbmRORlRTO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdE5GVCk7XG5cblxuICAgICAgICAgICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdE5GVC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IHNlbGVjdE5GVFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpZDogcmVjb3JkLmdldElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5nZXQoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmdldCgnbmFtZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZ2V0KCdkZXNjcmlwdGlvbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiByZWNvcmQuZ2V0KCdwcmljZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZWNvcmQuZ2V0KCdpbWFnZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogY3VycmVudExpc3Quc3RhcnREYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IGN1cnJlbnRMaXN0LmVuZERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVkOiByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcldhbGxldDogcmVjb3JkLmdldCgnb3duZXJXYWxsZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbmlEOiByZWNvcmQuZ2V0KCdUb2tlbklEJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFycik7XG4gICAgICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cblxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGF3YWl0IGRvbmU7XG4gICAgICAgICAgICAgICAgTkZUc2xpc3QucHVzaCh2YWx1ZVswXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coTkZUc2xpc3QpO1xuICAgICAgICAgICAgICAgIHNldHRvdGFsUGFydGljaXBhdGVkKGFyclswXS5wYXJ0aWNpcGF0ZWQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRuYW1lKGFyclswXS5uYW1lKVxuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRlbmREYXRlKGFyclswXS5lbmREYXRlKTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUaWQoYXJyWzBdLmlkKTtcbiAgICAgICAgICAgICAgICBzZXRzZW5kZXJBZGRyZXNzKGFyclswXS5vd25lcldhbGxldCk7XG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudFRva2VuaWQoYXJyWzBdLlRva2VuaUQpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2FkaW5nRGF0ZScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG90dGVyeUluZm9ybWF0aW9uJykuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIGxldCB3aW5uZXJJbmZvO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGVMb3R0ZXJ5KCkge1xuICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgIHZhciB0ZXN0ID0gYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLnNlbGVjdCh7XG4gICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe25mdGlkfSA9ICcke2N1cnJlbnRORlRpZH0nKWAsXG4gICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGVzdC5maXJzdFBhZ2UoKGVyciwgcmVjb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVjb3JkLmdldCgndXNlcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcldhbGxldDogcmVjb3JkLmdldCgndXNlcldhbGxldCcpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgdmFyIHZhbHVlID0gYXdhaXQgZG9uZTtcbiAgICAgICAgbG90dGVyeUJvdWdodCA9IHZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIHZhciB3aW5uZXJObyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbm5lck5vKTtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgV2lubmVyICR7dmFsdWVbd2lubmVyTm9dLnVzZXJ9LyR7dmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXR9IWApO1xuICAgICAgICBsZXQgcmVjZWl2ZXJBZGRyZXNzID0gdmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXQ7XG4gICAgICAgIHdpbm5lckluZm8gPSB2YWx1ZVt3aW5uZXJOb107XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIoKSB7XG5cbiAgICAgICAgbGV0IHJlY2VpdmVyQWRkcmVzcyA9IHdpbm5lckluZm8udXNlcldhbGxldDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RbXG4gICAgICAgICAgICAnc2FmZVRyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1NiknXG4gICAgICAgIF0oc2VuZGVyQWRkcmVzcywgcmVjZWl2ZXJBZGRyZXNzLCBjdXJyZW50VG9rZW5pZCAtIDEpO1xuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0LmF1cm9yYS5kZXYvdHgvJHtyZXN1bHQuaGFzaH1gLCBcIl9ibGFua1wiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIFVwZGF0aW5nT25BaXJ0YWJsZSgpIHtcblxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cbiAgICAgICAgYXdhaXQgTkZUc2xpc3QuZm9yRWFjaChhc3luYyAoTkZUKSA9PiB7XG4gICAgICAgICAgICBpZiAoTkZULmlkID0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLmRlc3Ryb3koW05GVC5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYoJy9kb25hdGlvbicpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBhd2FpdCBsb3R0ZXJ5TkZURGF0ZWxpc3QuZm9yRWFjaChhc3luYyAoTG90dGVyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKExvdHRlcnkubmZ0aWQgPT0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeScpLmRlc3Ryb3koW0xvdHRlcnkucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgbG90dGVyeUJvdWdodC5mb3JFYWNoKGFzeW5jIChQZXJzb24pID0+IHtcbiAgICAgICAgICAgIGlmIChQZXJzb24ubmZ0aWQgPT0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLmRlc3Ryb3koW1BlcnNvbi5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGUoKSB7XG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoZGlzdHJpYnV0ZUxvdHRlcnksIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRGlzdHJpYnV0aW5nLi4uXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkRpc3RyaWJ1dGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFRyYW5zZmVycmluZ05GVHRvV2lubmVyLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIlRyYW5zZmVycmluZyBORlQgdG8gd2lubmVyXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIlRyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFVwZGF0aW5nT25BaXJ0YWJsZSwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJVcGRhdGluZyBvbiBBaXJ0YWJsZVwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJVcGRhdGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIH1cbiAgICBsZXQgbGFzdHRpbWUgPSAwO1xuICAgIGZ1bmN0aW9uIGNoZWNrVGltZSgpIHtcbiAgICAgICAgaWYgKE5GVHNsaXN0WzBdKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgTkZURW5kRGF0ZSA9IG5ldyBEYXRlKE5GVHNsaXN0WzBdLmVuZERhdGUpO1xuICAgICAgICAgICAgaWYgKE5GVHNsaXN0WzBdLnBhcnRpY2lwYXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2V0dG90YWxQYXJ0aWNpcGF0ZWQoMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldHRvdGFsUGFydGljaXBhdGVkKE5GVHNsaXN0WzBdLnBhcnRpY2lwYXRlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkaWZmZXJjbmUgPSBORlRFbmREYXRlIC0gY3VycmVudDtcbiAgICAgICAgICAgIGxhc3R0aW1lID0gZGlmZmVyY25lO1xuICAgICAgICAgICAgaWYgKGRpZmZlcmNuZSA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG5cbiAgICAgICAgICAgIGlmIChjaGVja1RpbWUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIilbMF0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXN0cmlidXRlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2tUaW1lKCkgPT0gZmFsc2UgJiYgbGFzdHRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdEluZm9ybWF0aW9uXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3RyaWJ1dGVcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0sIDEwMDApO1xuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoaFRleHQsIG1UZXh0LCBzVGV4dCkge1xuICAgICAgICBsZXQgY29udmVydGVkSCA9IFwiXCI7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRNID0gXCJcIjtcbiAgICAgICAgbGV0IEFtUE0gPSBcIlwiO1xuICAgICAgICBpZiAoaFRleHQgPCAxMikge1xuICAgICAgICAgICAgQW1QTSA9IFwiQU1cIjtcbiAgICAgICAgICAgIGlmIChoVGV4dCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtoVGV4dH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7aFRleHR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXZpZGVkSCA9IGhUZXh0IC8gMjtcbiAgICAgICAgICAgIEFtUE0gPSBcIlBNXCI7XG4gICAgICAgICAgICBpZiAoZGl2aWRlZEggPCAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgMCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAke2RpdmlkZWRIfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1UZXh0IDwgMTApIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgMCR7bVRleHR9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgJHttVGV4dH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2NvbnZlcnRlZEh9OiR7Y29udmVydGVkTX0gJHtBbVBNfWA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENoZWNrRGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1vbnRoKCk7XG4gICAgICAgIHZhciB5ID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBoID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEhvdXJzKCk7XG4gICAgICAgIHZhciBtbiA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHZhciBzID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFNlY29uZHMoKTtcblxuICAgICAgICByZXR1cm4gKGAke2QudG9TdHJpbmcoKX0vJHttLnRvU3RyaW5nKCl9LyR7eS50b1N0cmluZygpfSAke2dldERhdGVUaW1lKGgsIG1uLCBzKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7UmVjRXZlbnRJRH1dYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBBdWN0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHJnYigxMSAyMTQgMTkwKSAwJSwgcmdiKDI1NSAxNDEgMCkgNzclKVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDY3LFxuICAgICAgICAgICAgICAgICAgICBmbGV4RmxvdzogXCJyb3cgbm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMHJlbVwiLCBwYWRkaW5nOiBcIjNyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkxvYWRpbmdEYXRlXCIgc3R5bGU9e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAyNzksIGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J0xvdHRlcnlJbmZvcm1hdGlvbicgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJkYXJrYmx1ZVwiLCBtYXJnaW5Ub3A6IDM0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TkZUbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgcGFydGljaXBhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjAwYjEsICMwMGZmODkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDM4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIiM1ZDFmZmYgc29saWQgMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbFBhcnRpY2lwYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgbmFtZT0nZGF0ZWxlZnRJbmZvcm1hdGlvbicgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMjdweCcgfX0gZGF0ZT17Y3VycmVudE5GVGVuZERhdGV9PntMZWZ0RGF0ZShjdXJyZW50TkZUZW5kRGF0ZSl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZGlzdHJpYnV0ZX0gaWQ9XCJkaXN0cmlidXRlXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiA0MSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogMTg0LCBib3JkZXJSYWRpdXM6IDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge05GVHNsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uaWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCgyOTVkZWcsICMwYmQ2YmUsICNhMjQxZGYpXCIsIG1hcmdpblRvcDogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGlzdEl0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJ2d1wiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PntsaXN0SXRlbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IERhdGU6IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZCBEYXRlOiAgIHtDaGVja0RhdGUobGlzdEl0ZW0uZW5kRGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVsZW1lbnRCb3R0b21Db250YWluZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICc1NjVweCcsIG1hcmdpbjogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgdGV4dEFsaWduOiAncmlnaHQnLCBtYXJnaW5Cb3R0b206ICczM3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI2N3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJvcmRlclJhZGl1czogJzhweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMTcsIDM0LCA0NyknLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiaWRwcmljZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyNCwgaGVpZ2h0OiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjMuNlwiLCBib3JkZXJSYWRpdXM6IDQwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjdXJyZW50TkZUaWQgIT0gbGlzdEl0ZW0uaWQpID8gKDw+QXQge0NoZWNrRGF0ZShsaXN0SXRlbS5zdGFydERhdGUpfTwvPikgOiAoPD5JbiBQcm9ncmVzczwvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuXG5cblxuXG5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNTdmZjcwYzk3NTMzOTYwNDI2MDFcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiTmF2TGluayIsInRvYXN0IiwibmVhckFQSSIsIkJ1dHRvbiIsInVzZUNvbnRyYWN0IiwiTG90dGVyeSIsInJlZ2V4Iiwic3RyIiwiZGVjb2RlVVJJIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJsb3R0ZXJ5TkZURGF0ZWxpc3QiLCJjdXJyZW50TkZUbmFtZSIsInNldGN1cnJlbnRORlRuYW1lIiwiY3VycmVudE5GVGVuZERhdGUiLCJzZXRjdXJyZW50TkZUZW5kRGF0ZSIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInRvdGFsUGFydGljaXBhdGVkIiwic2V0dG90YWxQYXJ0aWNpcGF0ZWQiLCJzZW5kZXJBZGRyZXNzIiwic2V0c2VuZGVyQWRkcmVzcyIsImxvdHRlcnlCb3VnaHQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50TkZUaWQiLCJzZXRjdXJyZW50TkZUaWQiLCJjdXJyZW50VG9rZW5pZCIsInNldGN1cnJlbnRUb2tlbmlkIiwiUmVjRXZlbnRJRCIsInNldFJlY0V2ZW50SUQiLCJORlRzbGlzdCIsInNldE5GVHNsaXN0IiwiTG90dGVyeWZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiZ2V0SWQiLCJwYWdlIiwidGhlbiIsImUiLCJzZWxlY3RlZEV2ZW50IiwiY29uc29sZSIsImxvZyIsImZpbmRMb3R0ZXJ5Iiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiYXJyIiwiaSIsImxlbmd0aCIsInJlY29yZCIsInB1c2giLCJyZWNpZCIsIm5mdGlkIiwiZ2V0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIk5GVHNmZXRjaENvbnRyYWN0RGF0YSIsImVMaXN0IiwiY3VycmVudExpc3QiLCJmaW5kTkZUUyIsInNlbGVjdE5GVCIsImRvbmUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlIiwicGFydGljaXBhdGVkIiwib3duZXJXYWxsZXQiLCJUb2tlbmlEIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lubmVySW5mbyIsImRpc3RyaWJ1dGVMb3R0ZXJ5IiwidGVzdCIsImZpcnN0UGFnZSIsImVyciIsImZvckVhY2giLCJ1c2VyIiwidXNlcldhbGxldCIsIndpbm5lck5vIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3VjY2VzcyIsInJlY2VpdmVyQWRkcmVzcyIsIlRyYW5zZmVycmluZ05GVHRvV2lubmVyIiwicmVzdWx0Iiwib3BlbiIsImhhc2giLCJVcGRhdGluZ09uQWlydGFibGUiLCJORlQiLCJkZXN0cm95IiwiZGVsZXRlZFJlY29yZHMiLCJlcnJvciIsImhyZWYiLCJQZXJzb24iLCJkaXN0cmlidXRlIiwicHJvbWlzZSIsInBlbmRpbmciLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJkYXRlIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiTGVmdERhdGUiLCJMZWZ0RGF0ZUJpZCIsImxhc3R0aW1lIiwiY2hlY2tUaW1lIiwiY3VycmVudCIsIkRhdGUiLCJORlRFbmREYXRlIiwiZGlmZmVyY25lIiwic2V0SW50ZXJ2YWwiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsImgiLCJzIiwidG9TdHJpbmciLCJnZXREYXRlVGltZSIsImhUZXh0IiwibVRleHQiLCJzVGV4dCIsImNvbnZlcnRlZEgiLCJjb252ZXJ0ZWRNIiwiQW1QTSIsImRpdmlkZWRIIiwiQ2hlY2tEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwieSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJtbiIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2FwIiwicG9zaXRpb24iLCJyaWdodCIsImNvbG9yIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwid2lkdGgiLCJjdXJzb3IiLCJoZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwiYWxpZ25TZWxmIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyUmFkaXVzIiwiZmxleEZsb3ciLCJwbGFjZUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJsaXN0SXRlbSIsImZsZXhEaXJlY3Rpb24iLCJyb3dHYXAiLCJtYXJnaW5Cb3R0b20iLCJsaW5lSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==