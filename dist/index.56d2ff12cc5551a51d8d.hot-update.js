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
                        setNFTslist(value);
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
              }

              if (checkTime() == false) {
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
/******/ 	__webpack_require__.h = function() { return "b87d9b17c60fa2d94e47"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjU2ZDJmZjEyY2M1NTUxYTUxZDhkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFqQixDQUFyQjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR04sS0FBSyxDQUFDUSxJQUFOLENBQVdQLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlLLENBQUMsQ0FBQ0csS0FBRixLQUFZVCxLQUFLLENBQUNVLFNBQXRCLEVBQWlDO0FBQzdCVixNQUFBQSxLQUFLLENBQUNVLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBQ0QsTUFBSUssa0JBQWtCLEdBQUcsRUFBekI7O0FBQ0Esa0JBQTBDcEIsK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQUE7QUFBQSxNQUFLcUIsY0FBTDtBQUFBLE1BQXFCQyxpQkFBckI7O0FBQ0EsbUJBQWtEdEIsK0NBQVEsQ0FBQyxFQUFELENBQTFEO0FBQUE7QUFBQSxNQUFPdUIsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLHFCQUFvQ2pCLGlFQUFXLENBQUMsUUFBRCxDQUEvQztBQUFBLE1BQVFrQixRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBRUEsbUJBQWtEMUIsK0NBQVEsQ0FBQyxDQUFELENBQTFEO0FBQUE7QUFBQSxNQUFPMkIsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLG1C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QUFBcUZaLFFBQUFBLFFBQVEsRUFBRTtBQUEvRjtBQURYLG9CQUVJO0FBQ0ksV0FBSyxFQUFFO0FBQUVDLFFBQUFBLFVBQVUsRUFBRSxpQkFBZDtBQUFpQ0UsUUFBQUEsS0FBSyxFQUFFLE1BQXhDO0FBQWdERSxRQUFBQSxNQUFNLEVBQUUsTUFBeEQ7QUFBZ0VOLFFBQUFBLEtBQUssRUFBRTtBQUF2RTtBQURYLG9CQUVJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBeUIsV0FBSyxFQUFFO0FBQUVVLFFBQUFBLFFBQVEsRUFBRSxFQUFaO0FBQWdCSixRQUFBQSxNQUFNLEVBQUUsTUFBeEI7QUFBZ0NILFFBQUFBLFNBQVMsRUFBRSxRQUEzQztBQUFxRHNCLFFBQUFBLFVBQVUsRUFBRSxLQUFqRTtBQUF3RVosUUFBQUEsWUFBWSxFQUFFO0FBQXRGO0FBQWhDLE9BQ00vSSxZQUFZLElBQUl1SixRQUFRLENBQUM3SyxFQUExQixnQkFBaUMsMkdBQU00SSxTQUFTLENBQUNpQyxRQUFRLENBQUNqSCxTQUFWLENBQWYsQ0FBakMsZ0JBQTZFLGtIQURsRixDQUZKLENBRkosQ0FESixDQURKLENBaEJKLENBTkosQ0FESixDQURjO0FBQUEsR0FBVCxDQWxGYixDQURKO0FBdUlIOzs7Ozs7OztVQzlmRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2xvdHRlcnkvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb3R0ZXJ5KCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcbiAgICBjb25zdCBzdHIgPSBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG4gICAgbGV0IGxvdHRlcnlORlREYXRlbGlzdCA9IFtdO1xuICAgIGxldCBbY3VycmVudE5GVG5hbWUsIHNldGN1cnJlbnRORlRuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjdXJyZW50TkZUZW5kRGF0ZSwgc2V0Y3VycmVudE5GVGVuZERhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblxuICAgIGNvbnN0IFt0b3RhbFBhcnRpY2lwYXRlZCwgc2V0dG90YWxQYXJ0aWNpcGF0ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgdmFyIFtzZW5kZXJBZGRyZXNzLCBzZXRzZW5kZXJBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGxldCBsb3R0ZXJ5Qm91Z2h0ID0gW107XG5cblxuICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICB9KTtcbiAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgY29uc3QgW2N1cnJlbnRORlRpZCwgc2V0Y3VycmVudE5GVGlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtjdXJyZW50VG9rZW5pZCwgc2V0Y3VycmVudFRva2VuaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW1JlY0V2ZW50SUQsIHNldFJlY0V2ZW50SURdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdmFyIFtORlRzbGlzdCwgc2V0TkZUc2xpc3RdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG5cbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgICAgICB2YXIgZmluZEV2ZW50cyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2lkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHNldFJlY0V2ZW50SUQocmVjb3Jkc1swXS5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRzWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRFdmVudCA9IGF3YWl0IGZpbmRFdmVudHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEV2ZW50KTtcblxuICAgICAgICAgICAgdmFyIGZpbmRMb3R0ZXJ5ID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2V2ZW50aWR9ID0gJyR7aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJzdGFydERhdGVcIiwgZGlyZWN0aW9uOiBcImFzY1wiIH1dLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSByZWNvcmRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnRpZDogcmVjb3JkLmdldChcIm5mdGlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogcmVjb3JkLmdldChcInN0YXJ0RGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiByZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG90dGVyeU5GVERhdGVsaXN0ID0gKGFycik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBmaW5kTG90dGVyeSk7XG4gICAgICAgICAgICBhd2FpdCBORlRzZmV0Y2hDb250cmFjdERhdGEoKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIE5GVHNmZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRMaXN0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxvdHRlcnlORlREYXRlbGlzdC5sZW5ndGg7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBsZXQgZUxpc3QgPSBsb3R0ZXJ5TkZURGF0ZWxpc3RbaSAtIDFdO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0ID0gZUxpc3Q7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBmaW5kTkZUUyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2VMaXN0Lm5mdGlkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY29yZHMpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdE5GVCA9IGF3YWl0IGZpbmRORlRTO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdE5GVCk7XG5cblxuICAgICAgICAgICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdE5GVC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY29yZCA9IHNlbGVjdE5GVFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpZDogcmVjb3JkLmdldElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5nZXQoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmdldCgnbmFtZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZWNvcmQuZ2V0KCdkZXNjcmlwdGlvbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiByZWNvcmQuZ2V0KCdwcmljZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZWNvcmQuZ2V0KCdpbWFnZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogY3VycmVudExpc3Quc3RhcnREYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IGN1cnJlbnRMaXN0LmVuZERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVkOiByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcldhbGxldDogcmVjb3JkLmdldCgnb3duZXJXYWxsZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbmlEOiByZWNvcmQuZ2V0KCdUb2tlbklEJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFycik7XG4gICAgICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cblxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGF3YWl0IGRvbmU7XG4gICAgICAgICAgICAgICAgc2V0TkZUc2xpc3QodmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE5GVHNsaXN0KTtcbiAgICAgICAgICAgICAgICBzZXR0b3RhbFBhcnRpY2lwYXRlZChhcnJbMF0ucGFydGljaXBhdGVkKTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUbmFtZShhcnJbMF0ubmFtZSlcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUZW5kRGF0ZShhcnJbMF0uZW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudE5GVGlkKGFyclswXS5pZCk7XG4gICAgICAgICAgICAgICAgc2V0c2VuZGVyQWRkcmVzcyhhcnJbMF0ub3duZXJXYWxsZXQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRUb2tlbmlkKGFyclswXS5Ub2tlbmlEKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZ0RhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvdHRlcnlJbmZvcm1hdGlvbicpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgTG90dGVyeWZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgfSwgW10pO1xuXG5cbiAgICBsZXQgd2lubmVySW5mbztcbiAgICBhc3luYyBmdW5jdGlvbiBkaXN0cmlidXRlTG90dGVyeSgpIHtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICB2YXIgdGVzdCA9IGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtuZnRpZH0gPSAnJHtjdXJyZW50TkZUaWR9JylgLFxuICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICB9KVxuICAgICAgICB2YXIgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRlc3QuZmlyc3RQYWdlKChlcnIsIHJlY29yZHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Qoe30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNpZDogcmVjb3JkLmdldElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmdldCgnaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IHJlY29yZC5nZXQoJ3VzZXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJXYWxsZXQ6IHJlY29yZC5nZXQoJ3VzZXJXYWxsZXQnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGFycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF3YWl0IGRvbmU7XG4gICAgICAgIGxvdHRlcnlCb3VnaHQgPSB2YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICB2YXIgd2lubmVyTm8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWx1ZS5sZW5ndGgpO1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5uZXJObyk7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoYFdpbm5lciAke3ZhbHVlW3dpbm5lck5vXS51c2VyfS8ke3ZhbHVlW3dpbm5lck5vXS51c2VyV2FsbGV0fSFgKTtcbiAgICAgICAgbGV0IHJlY2VpdmVyQWRkcmVzcyA9IHZhbHVlW3dpbm5lck5vXS51c2VyV2FsbGV0O1xuICAgICAgICB3aW5uZXJJbmZvID0gdmFsdWVbd2lubmVyTm9dO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIFRyYW5zZmVycmluZ05GVHRvV2lubmVyKCkge1xuXG4gICAgICAgIGxldCByZWNlaXZlckFkZHJlc3MgPSB3aW5uZXJJbmZvLnVzZXJXYWxsZXQ7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0W1xuICAgICAgICAgICAgJ3NhZmVUcmFuc2ZlckZyb20oYWRkcmVzcyxhZGRyZXNzLHVpbnQyNTYpJ1xuICAgICAgICBdKHNlbmRlckFkZHJlc3MsIHJlY2VpdmVyQWRkcmVzcywgY3VycmVudFRva2VuaWQgLSAxKTtcbiAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5hdXJvcmEuZGV2L3R4LyR7cmVzdWx0Lmhhc2h9YCwgXCJfYmxhbmtcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBVcGRhdGluZ09uQWlydGFibGUoKSB7XG5cbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXG4gICAgICAgIGF3YWl0IE5GVHNsaXN0LmZvckVhY2goYXN5bmMgKE5GVCkgPT4ge1xuICAgICAgICAgICAgaWYgKE5GVC5pZCA9IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5kZXN0cm95KFtORlQucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmKCcvZG9uYXRpb24nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cblxuICAgICAgICBhd2FpdCBsb3R0ZXJ5TkZURGF0ZWxpc3QuZm9yRWFjaChhc3luYyAoTG90dGVyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKExvdHRlcnkubmZ0aWQgPT0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeScpLmRlc3Ryb3koW0xvdHRlcnkucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgbG90dGVyeUJvdWdodC5mb3JFYWNoKGFzeW5jIChQZXJzb24pID0+IHtcbiAgICAgICAgICAgIGlmIChQZXJzb24ubmZ0aWQgPT0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLmRlc3Ryb3koW1BlcnNvbi5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGUoKSB7XG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoZGlzdHJpYnV0ZUxvdHRlcnksIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRGlzdHJpYnV0aW5nLi4uXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkRpc3RyaWJ1dGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFRyYW5zZmVycmluZ05GVHRvV2lubmVyLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIlRyYW5zZmVycmluZyBORlQgdG8gd2lubmVyXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIlRyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFVwZGF0aW5nT25BaXJ0YWJsZSwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJVcGRhdGluZyBvbiBBaXJ0YWJsZVwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJVcGRhdGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIH1cbmxldCBsYXN0dGltZSA9IDA7XG4gICAgZnVuY3Rpb24gY2hlY2tUaW1lKCkge1xuICAgICAgICBpZiAoTkZUc2xpc3RbMF0pIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBORlRFbmREYXRlID0gbmV3IERhdGUoTkZUc2xpc3RbMF0uZW5kRGF0ZSk7XG4gICAgICAgICAgICBpZiAoTkZUc2xpc3RbMF0ucGFydGljaXBhdGVkID09IG51bGwpe1xuICAgICAgICAgICAgICAgIHNldHRvdGFsUGFydGljaXBhdGVkKDApO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgIHNldHRvdGFsUGFydGljaXBhdGVkKE5GVHNsaXN0WzBdLnBhcnRpY2lwYXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGRpZmZlcmNuZSA9IE5GVEVuZERhdGUgLSBjdXJyZW50O1xuICAgICAgICAgICAgbGFzdHRpbWUgPSBkaWZmZXJjbmU7XG4gICAgICAgICAgICBpZiAoZGlmZmVyY25lIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tUaW1lKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdEluZm9ybWF0aW9uXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzdHJpYnV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYoY2hlY2tUaW1lKCkgPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdEluZm9ybWF0aW9uXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3RyaWJ1dGVcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0sIDEwMDApO1xuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoaFRleHQsIG1UZXh0LCBzVGV4dCkge1xuICAgICAgICBsZXQgY29udmVydGVkSCA9IFwiXCI7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRNID0gXCJcIjtcbiAgICAgICAgbGV0IEFtUE0gPSBcIlwiO1xuICAgICAgICBpZiAoaFRleHQgPCAxMikge1xuICAgICAgICAgICAgQW1QTSA9IFwiQU1cIjtcbiAgICAgICAgICAgIGlmIChoVGV4dCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtoVGV4dH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7aFRleHR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXZpZGVkSCA9IGhUZXh0IC8gMjtcbiAgICAgICAgICAgIEFtUE0gPSBcIlBNXCI7XG4gICAgICAgICAgICBpZiAoZGl2aWRlZEggPCAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgMCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAke2RpdmlkZWRIfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1UZXh0IDwgMTApIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgMCR7bVRleHR9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgJHttVGV4dH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2NvbnZlcnRlZEh9OiR7Y29udmVydGVkTX0gJHtBbVBNfWA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENoZWNrRGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1vbnRoKCk7XG4gICAgICAgIHZhciB5ID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBoID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEhvdXJzKCk7XG4gICAgICAgIHZhciBtbiA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHZhciBzID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFNlY29uZHMoKTtcblxuICAgICAgICByZXR1cm4gKGAke2QudG9TdHJpbmcoKX0vJHttLnRvU3RyaW5nKCl9LyR7eS50b1N0cmluZygpfSAke2dldERhdGVUaW1lKGgsIG1uLCBzKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7UmVjRXZlbnRJRH1dYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBBdWN0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHJnYigxMSAyMTQgMTkwKSAwJSwgcmdiKDI1NSAxNDEgMCkgNzclKVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDY3LFxuICAgICAgICAgICAgICAgICAgICBmbGV4RmxvdzogXCJyb3cgbm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMHJlbVwiLCBwYWRkaW5nOiBcIjNyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkxvYWRpbmdEYXRlXCIgc3R5bGU9e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAyNzksIGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J0xvdHRlcnlJbmZvcm1hdGlvbicgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJkYXJrYmx1ZVwiLCBtYXJnaW5Ub3A6IDM0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TkZUbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgcGFydGljaXBhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjAwYjEsICMwMGZmODkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDM4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIiM1ZDFmZmYgc29saWQgMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbFBhcnRpY2lwYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgbmFtZT0nZGF0ZWxlZnRJbmZvcm1hdGlvbicgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMjdweCcgfX0gZGF0ZT17Y3VycmVudE5GVGVuZERhdGV9PntMZWZ0RGF0ZShjdXJyZW50TkZUZW5kRGF0ZSl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZGlzdHJpYnV0ZX0gaWQ9XCJkaXN0cmlidXRlXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiA0MSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogMTg0LCBib3JkZXJSYWRpdXM6IDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge05GVHNsaXN0LmZsYXRNYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoMjk1ZGVnLCAjMGJkNmJlLCAjYTI0MWRmKVwiLCBtYXJnaW5Ub3A6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5pZH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xpc3RJdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbGV4RGlyZWN0aW9uOiAncm93JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JywgYWxpZ25Db250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogXCIydndcIiwgY29sb3I6IFwid2hpdGVcIiB9fT57bGlzdEl0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBEYXRlOiB7Q2hlY2tEYXRlKGxpc3RJdGVtLnN0YXJ0RGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQgRGF0ZTogICB7Q2hlY2tEYXRlKGxpc3RJdGVtLmVuZERhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFbGVtZW50Qm90dG9tQ29udGFpbmVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnNTY1cHgnLCBtYXJnaW46ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgbWFyZ2luQm90dG9tOiAnMzNweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyNjdweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDE3LCAzNCwgNDcpJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmlkcHJpY2VcIiBzdHlsZT17eyBmb250U2l6ZTogMjQsIGhlaWdodDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIzLjZcIiwgYm9yZGVyUmFkaXVzOiA0MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY3VycmVudE5GVGlkICE9IGxpc3RJdGVtLmlkKSA/ICg8PkF0IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX08Lz4pIDogKDw+SW4gUHJvZ3Jlc3M8Lz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG5cblxuXG5cblxuXG4gICAgICAgIDwvPlxuICAgICk7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImI4N2Q5YjE3YzYwZmEyZDk0ZTQ3XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsIk5hdkxpbmsiLCJ0b2FzdCIsIm5lYXJBUEkiLCJCdXR0b24iLCJ1c2VDb250cmFjdCIsIkxvdHRlcnkiLCJyZWdleCIsInN0ciIsImRlY29kZVVSSSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsImlkIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwibG90dGVyeU5GVERhdGVsaXN0IiwiY3VycmVudE5GVG5hbWUiLCJzZXRjdXJyZW50TkZUbmFtZSIsImN1cnJlbnRORlRlbmREYXRlIiwic2V0Y3VycmVudE5GVGVuZERhdGUiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJ0b3RhbFBhcnRpY2lwYXRlZCIsInNldHRvdGFsUGFydGljaXBhdGVkIiwic2VuZGVyQWRkcmVzcyIsInNldHNlbmRlckFkZHJlc3MiLCJsb3R0ZXJ5Qm91Z2h0IiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiY3VycmVudE5GVGlkIiwic2V0Y3VycmVudE5GVGlkIiwiY3VycmVudFRva2VuaWQiLCJzZXRjdXJyZW50VG9rZW5pZCIsIlJlY0V2ZW50SUQiLCJzZXRSZWNFdmVudElEIiwiTkZUc2xpc3QiLCJzZXRORlRzbGlzdCIsIkxvdHRlcnlmZXRjaENvbnRyYWN0RGF0YSIsInBhdGhuYW1lIiwiZmluZEV2ZW50cyIsInJlc29sdmUiLCJyZWplY3QiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJ2aWV3IiwiZWFjaFBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImdldElkIiwicGFnZSIsInRoZW4iLCJlIiwic2VsZWN0ZWRFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kTG90dGVyeSIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsImFyciIsImkiLCJsZW5ndGgiLCJyZWNvcmQiLCJwdXNoIiwicmVjaWQiLCJuZnRpZCIsImdldCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJORlRzZmV0Y2hDb250cmFjdERhdGEiLCJlTGlzdCIsImN1cnJlbnRMaXN0IiwiZmluZE5GVFMiLCJzZWxlY3RORlQiLCJkb25lIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpbWFnZSIsInBhcnRpY2lwYXRlZCIsIm93bmVyV2FsbGV0IiwiVG9rZW5pRCIsInZhbHVlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIndpbm5lckluZm8iLCJkaXN0cmlidXRlTG90dGVyeSIsInRlc3QiLCJmaXJzdFBhZ2UiLCJlcnIiLCJmb3JFYWNoIiwidXNlciIsInVzZXJXYWxsZXQiLCJ3aW5uZXJObyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN1Y2Nlc3MiLCJyZWNlaXZlckFkZHJlc3MiLCJUcmFuc2ZlcnJpbmdORlR0b1dpbm5lciIsInJlc3VsdCIsIm9wZW4iLCJoYXNoIiwiVXBkYXRpbmdPbkFpcnRhYmxlIiwiTkZUIiwiZGVzdHJveSIsImRlbGV0ZWRSZWNvcmRzIiwiZXJyb3IiLCJocmVmIiwiUGVyc29uIiwiZGlzdHJpYnV0ZSIsInByb21pc2UiLCJwZW5kaW5nIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwiZGF0ZSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkxlZnREYXRlIiwiTGVmdERhdGVCaWQiLCJsYXN0dGltZSIsImNoZWNrVGltZSIsImN1cnJlbnQiLCJEYXRlIiwiTkZURW5kRGF0ZSIsImRpZmZlcmNuZSIsInNldEludGVydmFsIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJoIiwicyIsInRvU3RyaW5nIiwiZ2V0RGF0ZVRpbWUiLCJoVGV4dCIsIm1UZXh0Iiwic1RleHQiLCJjb252ZXJ0ZWRIIiwiY29udmVydGVkTSIsIkFtUE0iLCJkaXZpZGVkSCIsIkNoZWNrRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsInkiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwibW4iLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdhcCIsInBvc2l0aW9uIiwicmlnaHQiLCJjb2xvciIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsIndpZHRoIiwiY3Vyc29yIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJmb250U2l6ZSIsImFsaWduU2VsZiIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlclJhZGl1cyIsImZsZXhGbG93IiwicGxhY2VDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwibGlzdEl0ZW0iLCJmbGV4RGlyZWN0aW9uIiwicm93R2FwIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=