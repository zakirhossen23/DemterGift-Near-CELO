self["webpackHotUpdatedemeter"]("/index",{

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/flat-map.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/flat-map.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/flat-map */ "./node_modules/core-js-pure/stable/instance/flat-map.js");

/***/ }),

/***/ "./src/pages/lottery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/lottery/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
                        currentNFTendDate = arr[0].endDate;
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

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {});
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
      LotteryfetchContractData();

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

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/flat-map.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/flat-map.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.flat-map */ "./node_modules/core-js-pure/modules/es.array.flat-map.js");
__webpack_require__(/*! ../../../modules/es.array.unscopables.flat-map */ "./node_modules/core-js-pure/modules/es.array.unscopables.flat-map.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').flatMap;


/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/flat-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/flat-map.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var flatMap = __webpack_require__(/*! ../array/virtual/flat-map */ "./node_modules/core-js-pure/es/array/virtual/flat-map.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.flatMap;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.flatMap) ? flatMap : own;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/flatten-into-array.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/flatten-into-array.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js-pure/internals/is-array.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.flat-map.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.flat-map.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var flattenIntoArray = __webpack_require__(/*! ../internals/flatten-into-array */ "./node_modules/core-js-pure/internals/flatten-into-array.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js-pure/internals/array-species-create.js");

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.unscopables.flat-map.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.unscopables.flat-map.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js-pure/internals/add-to-unscopables.js");

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/flat-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/flat-map.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/flat-map */ "./node_modules/core-js-pure/es/instance/flat-map.js");

module.exports = parent;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f14d0914f17cb119f097"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljk4NjE4YTdkOTJhNTJkNTA4NTU0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0SUFBaUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakU7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUyxPQUFULEdBQW1CO0FBQzlCLE1BQU1DLEtBQUssR0FBRyxXQUFkO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQTVCO0FBQ0EsTUFBSUMsQ0FBSjtBQUNBLE1BQUlDLEVBQUUsR0FBRyxFQUFUOztBQUNBLFNBQU8sQ0FBQ0QsQ0FBQyxHQUFHTCxLQUFLLENBQUNPLElBQU4sQ0FBV04sR0FBWCxDQUFMLE1BQTBCLElBQWpDLEVBQXVDO0FBQ25DO0FBQ0EsUUFBSUksQ0FBQyxDQUFDRyxLQUFGLEtBQVlSLEtBQUssQ0FBQ1MsU0FBdEIsRUFBaUM7QUFDN0JULE1BQUFBLEtBQUssQ0FBQ1MsU0FBTjtBQUNIOztBQUNESCxJQUFBQSxFQUFFLEdBQUdELENBQUMsQ0FBQyxDQUFELENBQU47QUFDSDs7QUFDRCxNQUFJSyxrQkFBa0IsR0FBRyxFQUF6Qjs7QUFDQSxrQkFBMENuQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQTtBQUFBLE1BQUtvQixjQUFMO0FBQUEsTUFBcUJDLGlCQUFyQjs7QUFDQSxtQkFBa0RyQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUQ7QUFBQTtBQUFBLE1BQUtzQixpQkFBTDtBQUFBLE1BQXlCQyxvQkFBekI7O0FBQ0EscUJBQW9DaEIsaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUWlCLFFBQVIsZ0JBQVFBLFFBQVI7QUFBQSxNQUFrQkMsYUFBbEIsZ0JBQWtCQSxhQUFsQjs7QUFFQSxtQkFBa0R6QiwrQ0FBUSxDQUFDLENBQUQsQ0FBMUQ7QUFBQTtBQUFBLE1BQU8wQixpQkFBUDtBQUFBLE1BQTBCQyxvQkFBMUI7O0FB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RTdEOzs7Ozs7Ozs7OztBQ0pBLGNBQWMsbUJBQU8sQ0FBQywyRkFBMkI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLGNBQWMsbUJBQU8sQ0FBQyxnRkFBdUI7QUFDN0MsZUFBZSxtQkFBTyxDQUFDLGtGQUF3QjtBQUMvQyxXQUFXLG1CQUFPLENBQUMsMEdBQW9DOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUMvQmE7QUFDYixRQUFRLG1CQUFPLENBQUMsNEVBQXFCO0FBQ3JDLHVCQUF1QixtQkFBTyxDQUFDLG9HQUFpQztBQUNoRSxlQUFlLG1CQUFPLENBQUMsa0ZBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyxrRkFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsb0ZBQXlCO0FBQ2pELHlCQUF5QixtQkFBTyxDQUFDLHdHQUFtQzs7QUFFcEU7QUFDQTtBQUNBLElBQUksOEJBQThCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcEJEO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQU8sQ0FBQyxvR0FBaUM7O0FBRWhFO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEEsYUFBYSxtQkFBTyxDQUFDLHVGQUE0Qjs7QUFFakQ7Ozs7Ozs7OztVQ0ZBLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9mbGF0LW1hcC5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2xvdHRlcnkvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2UvZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2ZsYXR0ZW4taW50by1hcnJheS5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmZsYXQtbWFwLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkudW5zY29wYWJsZXMuZmxhdC1tYXAuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL2ZsYXQtbWFwLmpzIiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvZmxhdC1tYXBcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICogYXMgbmVhckFQSSBmcm9tIFwibmVhci1hcGktanNcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvdHRlcnkoKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxbKC4qKVxcXS9nO1xuICAgIGNvbnN0IHN0ciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG4gICAgbGV0IGxvdHRlcnlORlREYXRlbGlzdCA9IFtdO1xuICAgIGxldCBbY3VycmVudE5GVG5hbWUsIHNldGN1cnJlbnRORlRuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGxldCBbY3VycmVudE5GVGVuZERhdGUgLCBzZXRjdXJyZW50TkZUZW5kRGF0ZSBdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcbiAgICBcbiAgICBjb25zdCBbdG90YWxQYXJ0aWNpcGF0ZWQsIHNldHRvdGFsUGFydGljaXBhdGVkXSA9IHVzZVN0YXRlKDApO1xuICAgIHZhciBbc2VuZGVyQWRkcmVzcywgc2V0c2VuZGVyQWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBsZXQgbG90dGVyeUJvdWdodCA9IFtdO1xuXG5cbiAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgfSk7XG4gICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgIGNvbnN0IFtjdXJyZW50TkZUaWQsIHNldGN1cnJlbnRORlRpZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY3VycmVudFRva2VuaWQsIHNldGN1cnJlbnRUb2tlbmlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtSZWNFdmVudElELCBzZXRSZWNFdmVudElEXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHZhciBbTkZUc2xpc3QsIHNldE5GVHNsaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gTG90dGVyeWZldGNoQ29udHJhY3REYXRhKCkge1xuICAgICAgICBpZiAoaWQgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuXG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuICAgICAgICAgICAgdmFyIGZpbmRFdmVudHMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnZXZlbnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgICAgICB9KS5lYWNoUGFnZShhc3luYyBmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICBzZXRSZWNFdmVudElEKHJlY29yZHNbMF0uZ2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjb3Jkc1swXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRXZlbnQgPSBhd2FpdCBmaW5kRXZlbnRzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRFdmVudCk7XG5cbiAgICAgICAgICAgIHZhciBmaW5kTG90dGVyeSA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdsb3R0ZXJ5Jykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICcke2lkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogW3sgZmllbGQ6IFwic3RhcnREYXRlXCIsIGRpcmVjdGlvbjogXCJhc2NcIiB9XSxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjb3JkID0gcmVjb3Jkc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpZDogcmVjb3JkLmdldElkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0aWQ6IHJlY29yZC5nZXQoXCJuZnRpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IHJlY29yZC5nZXQoXCJzdGFydERhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogcmVjb3JkLmdldChcImVuZERhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvdHRlcnlORlREYXRlbGlzdCA9IChhcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFycik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgZmluZExvdHRlcnkpO1xuICAgICAgICAgICAgYXdhaXQgTkZUc2ZldGNoQ29udHJhY3REYXRhKCk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBORlRzZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG4gICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50TGlzdDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsb3R0ZXJ5TkZURGF0ZWxpc3QubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVMaXN0ID0gbG90dGVyeU5GVERhdGVsaXN0W2kgLSAxXTtcbiAgICAgICAgICAgICAgICBjdXJyZW50TGlzdCA9IGVMaXN0O1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgZmluZE5GVFMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtlTGlzdC5uZnRpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRzKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RORlQgPSBhd2FpdCBmaW5kTkZUUztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RORlQpO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RORlQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSBzZWxlY3RORlRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVjb3JkLmdldCgnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogcmVjb3JkLmdldCgncHJpY2UnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcmVjb3JkLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IGN1cnJlbnRMaXN0LnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiBjdXJyZW50TGlzdC5lbmREYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlZDogcmVjb3JkLmdldCgncGFydGljaXBhdGVkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJXYWxsZXQ6IHJlY29yZC5nZXQoJ293bmVyV2FsbGV0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW5pRDogcmVjb3JkLmdldCgnVG9rZW5JRCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhd2FpdCBkb25lO1xuICAgICAgICAgICAgICAgIE5GVHNsaXN0LnB1c2godmFsdWVbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE5GVHNsaXN0KTsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldHRvdGFsUGFydGljaXBhdGVkKGFyclswXS5wYXJ0aWNpcGF0ZWQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRuYW1lKGFyclswXS5uYW1lKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRORlRlbmREYXRlID0gYXJyWzBdLmVuZERhdGU7XG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudE5GVGlkKGFyclswXS5pZCk7XG4gICAgICAgICAgICAgICAgc2V0c2VuZGVyQWRkcmVzcyhhcnJbMF0ub3duZXJXYWxsZXQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRUb2tlbmlkKGFyclswXS5Ub2tlbmlEKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZ0RhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvdHRlcnlJbmZvcm1hdGlvbicpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICBcbiAgICB9KTtcblxuXG4gICAgbGV0IHdpbm5lckluZm87XG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzdHJpYnV0ZUxvdHRlcnkoKSB7XG4gICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgdmFyIHRlc3QgPSBhd2FpdCBiYXNlKCdsb3R0ZXJ5Qm91Z2h0Jykuc2VsZWN0KHtcbiAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7bmZ0aWR9ID0gJyR7Y3VycmVudE5GVGlkfScpYCxcbiAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0ZXN0LmZpcnN0UGFnZSgoZXJyLCByZWNvcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHt9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5nZXQoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiByZWNvcmQuZ2V0KCd1c2VyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyV2FsbGV0OiByZWNvcmQuZ2V0KCd1c2VyV2FsbGV0JylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSBhd2FpdCBkb25lO1xuICAgICAgICBsb3R0ZXJ5Qm91Z2h0ID0gdmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgdmFyIHdpbm5lck5vID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2cod2lubmVyTm8pO1xuICAgICAgICB0b2FzdC5zdWNjZXNzKGBXaW5uZXIgJHt2YWx1ZVt3aW5uZXJOb10udXNlcn0vJHt2YWx1ZVt3aW5uZXJOb10udXNlcldhbGxldH0hYCk7XG4gICAgICAgIGxldCByZWNlaXZlckFkZHJlc3MgPSB2YWx1ZVt3aW5uZXJOb10udXNlcldhbGxldDtcbiAgICAgICAgd2lubmVySW5mbyA9IHZhbHVlW3dpbm5lck5vXTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBUcmFuc2ZlcnJpbmdORlR0b1dpbm5lcigpIHtcblxuICAgICAgICBsZXQgcmVjZWl2ZXJBZGRyZXNzID0gd2lubmVySW5mby51c2VyV2FsbGV0O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdFtcbiAgICAgICAgICAgICdzYWZlVHJhbnNmZXJGcm9tKGFkZHJlc3MsYWRkcmVzcyx1aW50MjU2KSdcbiAgICAgICAgXShzZW5kZXJBZGRyZXNzLCByZWNlaXZlckFkZHJlc3MsIGN1cnJlbnRUb2tlbmlkIC0gMSk7XG4gICAgICAgIHdpbmRvdy5vcGVuKGBodHRwczovL2V4cGxvcmVyLnRlc3RuZXQuYXVyb3JhLmRldi90eC8ke3Jlc3VsdC5oYXNofWAsIFwiX2JsYW5rXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gVXBkYXRpbmdPbkFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cblxuICAgICAgICBhd2FpdCBORlRzbGlzdC5mb3JFYWNoKGFzeW5jIChORlQpID0+IHtcbiAgICAgICAgICAgIGlmIChORlQuaWQgPSBjdXJyZW50TkZUaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuZGVzdHJveShbTkZULnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZignL2RvbmF0aW9uJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgYXdhaXQgbG90dGVyeU5GVERhdGVsaXN0LmZvckVhY2goYXN5bmMgKExvdHRlcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChMb3R0ZXJ5Lm5mdGlkID09IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5kZXN0cm95KFtMb3R0ZXJ5LnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IGxvdHRlcnlCb3VnaHQuZm9yRWFjaChhc3luYyAoUGVyc29uKSA9PiB7XG4gICAgICAgICAgICBpZiAoUGVyc29uLm5mdGlkID09IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5kZXN0cm95KFtQZXJzb24ucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBkaXN0cmlidXRlKCkge1xuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKGRpc3RyaWJ1dGVMb3R0ZXJ5LCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIkRpc3RyaWJ1dGluZy4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJEaXN0cmlidXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShUcmFuc2ZlcnJpbmdORlR0b1dpbm5lciwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJUcmFuc2ZlcnJpbmcgTkZUIHRvIHdpbm5lclwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShVcGRhdGluZ09uQWlydGFibGUsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiVXBkYXRpbmcgb24gQWlydGFibGVcIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiVXBkYXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1RpbWUoKSB7XG4gICAgICAgIGlmIChORlRzbGlzdFswXSl7XG4gICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIE5GVEVuZERhdGUgPSBuZXcgRGF0ZShORlRzbGlzdFswXS5lbmREYXRlKTtcbiAgICAgICAgdmFyIGRpZmZlcmNuZSA9IE5GVEVuZERhdGUgLSBjdXJyZW50O1xuICAgICAgICBpZiAoZGlmZmVyY25lID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG4gICAgICAgICAgICBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICAgICAgICAgIGlmIChjaGVja1RpbWUoKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRJbmZvcm1hdGlvblwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSwgMTAwMCk7XG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXREYXRlVGltZShoVGV4dCwgbVRleHQsIHNUZXh0KSB7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRIID0gXCJcIjtcbiAgICAgICAgbGV0IGNvbnZlcnRlZE0gPSBcIlwiO1xuICAgICAgICBsZXQgQW1QTSA9IFwiXCI7XG4gICAgICAgIGlmIChoVGV4dCA8IDEyKSB7XG4gICAgICAgICAgICBBbVBNID0gXCJBTVwiO1xuICAgICAgICAgICAgaWYgKGhUZXh0IDwgMTApIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYDAke2hUZXh0fWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgJHtoVGV4dH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRpdmlkZWRIID0gaFRleHQgLyAyO1xuICAgICAgICAgICAgQW1QTSA9IFwiUE1cIjtcbiAgICAgICAgICAgIGlmIChkaXZpZGVkSCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtkaXZpZGVkSH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobVRleHQgPCAxMCkge1xuICAgICAgICAgICAgY29udmVydGVkTSA9IGAwJHttVGV4dH1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udmVydGVkTSA9IGAke21UZXh0fWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7Y29udmVydGVkSH06JHtjb252ZXJ0ZWRNfSAke0FtUE19YDtcbiAgICB9XG4gICAgZnVuY3Rpb24gQ2hlY2tEYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldERhdGUoKTtcbiAgICAgICAgdmFyIG0gPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0TW9udGgoKTtcbiAgICAgICAgdmFyIHkgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdmFyIGggPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0SG91cnMoKTtcbiAgICAgICAgdmFyIG1uID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgdmFyIHMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0U2Vjb25kcygpO1xuXG4gICAgICAgIHJldHVybiAoYCR7ZC50b1N0cmluZygpfS8ke20udG9TdHJpbmcoKX0vJHt5LnRvU3RyaW5nKCl9ICR7Z2V0RGF0ZVRpbWUoaCwgbW4sIHMpfWApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvZG9uYXRpb24vYXVjdGlvbj9bJHtSZWNFdmVudElEfV1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzIwOHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIEF1Y3Rpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQocmdiKDExIDIxNCAxOTApIDAlLCByZ2IoMjU1IDE0MSAwKSA3NyUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNjcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhGbG93OiBcInJvdyBub3dyYXBcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwcmVtXCIsIHBhZGRpbmc6IFwiM3JlbVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiTG9hZGluZ0RhdGVcIiBzdHlsZT17eyB3aWR0aDogMjgwLCBoZWlnaHQ6IDI3OSwgZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nTG90dGVyeUluZm9ybWF0aW9uJyBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcImRhcmtibHVlXCIsIG1hcmdpblRvcDogMzQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRORlRuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBwYXJ0aWNpcGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmMDBiMSwgIzAwZmY4OSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMzgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiIzVkMWZmZiBzb2xpZCAxcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsUGFydGljaXBhdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBuYW1lPSdkYXRlbGVmdEluZm9ybWF0aW9uJyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcyN3B4JyB9fSBkYXRlPXtjdXJyZW50TkZUZW5kRGF0ZX0+e0xlZnREYXRlKGN1cnJlbnRORlRlbmREYXRlKX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtkaXN0cmlidXRlfSBpZD1cImRpc3RyaWJ1dGVcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IDQxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiAxODQsIGJvcmRlclJhZGl1czogNTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3RyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7TkZUc2xpc3QuZmxhdE1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uaWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCgyOTVkZWcsICMwYmQ2YmUsICNhMjQxZGYpXCIsIG1hcmdpblRvcDogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGlzdEl0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJ2d1wiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PntsaXN0SXRlbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IERhdGU6IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZCBEYXRlOiAgIHtDaGVja0RhdGUobGlzdEl0ZW0uZW5kRGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVsZW1lbnRCb3R0b21Db250YWluZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICc1NjVweCcsIG1hcmdpbjogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgdGV4dEFsaWduOiAncmlnaHQnLCBtYXJnaW5Cb3R0b206ICczM3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI2N3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJvcmRlclJhZGl1czogJzhweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMTcsIDM0LCA0NyknLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiaWRwcmljZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyNCwgaGVpZ2h0OiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjMuNlwiLCBib3JkZXJSYWRpdXM6IDQwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjdXJyZW50TkZUaWQgIT0gbGlzdEl0ZW0uaWQpID8gKDw+QXQge0NoZWNrRGF0ZShsaXN0SXRlbS5zdGFydERhdGUpfTwvPikgOiAoPD5JbiBQcm9ncmVzczwvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuXG5cblxuXG5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iLCJyZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LmZsYXQtbWFwJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi9tb2R1bGVzL2VzLmFycmF5LnVuc2NvcGFibGVzLmZsYXQtbWFwJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykuZmxhdE1hcDtcbiIsInZhciBmbGF0TWFwID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9mbGF0LW1hcCcpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5mbGF0TWFwO1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuZmxhdE1hcCkgPyBmbGF0TWFwIDogb3duO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcblxuLy8gYEZsYXR0ZW5JbnRvQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1mbGF0TWFwLyNzZWMtRmxhdHRlbkludG9BcnJheVxudmFyIGZsYXR0ZW5JbnRvQXJyYXkgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcmlnaW5hbCwgc291cmNlLCBzb3VyY2VMZW4sIHN0YXJ0LCBkZXB0aCwgbWFwcGVyLCB0aGlzQXJnKSB7XG4gIHZhciB0YXJnZXRJbmRleCA9IHN0YXJ0O1xuICB2YXIgc291cmNlSW5kZXggPSAwO1xuICB2YXIgbWFwRm4gPSBtYXBwZXIgPyBiaW5kKG1hcHBlciwgdGhpc0FyZywgMykgOiBmYWxzZTtcbiAgdmFyIGVsZW1lbnQ7XG5cbiAgd2hpbGUgKHNvdXJjZUluZGV4IDwgc291cmNlTGVuKSB7XG4gICAgaWYgKHNvdXJjZUluZGV4IGluIHNvdXJjZSkge1xuICAgICAgZWxlbWVudCA9IG1hcEZuID8gbWFwRm4oc291cmNlW3NvdXJjZUluZGV4XSwgc291cmNlSW5kZXgsIG9yaWdpbmFsKSA6IHNvdXJjZVtzb3VyY2VJbmRleF07XG5cbiAgICAgIGlmIChkZXB0aCA+IDAgJiYgaXNBcnJheShlbGVtZW50KSkge1xuICAgICAgICB0YXJnZXRJbmRleCA9IGZsYXR0ZW5JbnRvQXJyYXkodGFyZ2V0LCBvcmlnaW5hbCwgZWxlbWVudCwgdG9MZW5ndGgoZWxlbWVudC5sZW5ndGgpLCB0YXJnZXRJbmRleCwgZGVwdGggLSAxKSAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGFyZ2V0SW5kZXggPj0gMHgxRkZGRkZGRkZGRkZGRikgdGhyb3cgVHlwZUVycm9yKCdFeGNlZWQgdGhlIGFjY2VwdGFibGUgYXJyYXkgbGVuZ3RoJyk7XG4gICAgICAgIHRhcmdldFt0YXJnZXRJbmRleF0gPSBlbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB0YXJnZXRJbmRleCsrO1xuICAgIH1cbiAgICBzb3VyY2VJbmRleCsrO1xuICB9XG4gIHJldHVybiB0YXJnZXRJbmRleDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbkludG9BcnJheTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZsYXR0ZW5JbnRvQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmxhdHRlbi1pbnRvLWFycmF5Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mbGF0TWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZsYXRtYXBcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgZmxhdE1hcDogZnVuY3Rpb24gZmxhdE1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIHNvdXJjZUxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgQTtcbiAgICBhRnVuY3Rpb24oY2FsbGJhY2tmbik7XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICBBLmxlbmd0aCA9IGZsYXR0ZW5JbnRvQXJyYXkoQSwgTywgTywgc291cmNlTGVuLCAwLCAxLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiLy8gdGhpcyBtZXRob2Qgd2FzIGFkZGVkIHRvIHVuc2NvcGFibGVzIGFmdGVyIGltcGxlbWVudGF0aW9uXG4vLyBpbiBwb3B1bGFyIGVuZ2luZXMsIHNvIGl0J3MgbW92ZWQgdG8gYSBzZXBhcmF0ZSBtb2R1bGVcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdmbGF0TWFwJyk7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2UvZmxhdC1tYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZjE0ZDA5MTRmMTdjYjExOWYwOTdcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiTmF2TGluayIsInRvYXN0IiwibmVhckFQSSIsIkJ1dHRvbiIsInVzZUNvbnRyYWN0IiwiTG90dGVyeSIsInJlZ2V4Iiwic3RyIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJsb3R0ZXJ5TkZURGF0ZWxpc3QiLCJjdXJyZW50TkZUbmFtZSIsInNldGN1cnJlbnRORlRuYW1lIiwiY3VycmVudE5GVGVuZERhdGUiLCJzZXRjdXJyZW50TkZUZW5kRGF0ZSIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInRvdGFsUGFydGljaXBhdGVkIiwic2V0dG90YWxQYXJ0aWNpcGF0ZWQiLCJzZW5kZXJBZGRyZXNzIiwic2V0c2VuZGVyQWRkcmVzcyIsImxvdHRlcnlCb3VnaHQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50TkZUaWQiLCJzZXRjdXJyZW50TkZUaWQiLCJjdXJyZW50VG9rZW5pZCIsInNldGN1cnJlbnRUb2tlbmlkIiwiUmVjRXZlbnRJRCIsInNldFJlY0V2ZW50SUQiLCJORlRzbGlzdCIsInNldE5GVHNsaXN0IiwiTG90dGVyeWZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiZ2V0SWQiLCJwYWdlIiwidGhlbiIsImUiLCJzZWxlY3RlZEV2ZW50IiwiY29uc29sZSIsImxvZyIsImZpbmRMb3R0ZXJ5Iiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiYXJyIiwiaSIsImxlbmd0aCIsInJlY29yZCIsInB1c2giLCJyZWNpZCIsIm5mdGlkIiwiZ2V0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIk5GVHNmZXRjaENvbnRyYWN0RGF0YSIsImVMaXN0IiwiY3VycmVudExpc3QiLCJmaW5kTkZUUyIsInNlbGVjdE5GVCIsImRvbmUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlIiwicGFydGljaXBhdGVkIiwib3duZXJXYWxsZXQiLCJUb2tlbmlEIiwidmFsdWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5Iiwid2lubmVySW5mbyIsImRpc3RyaWJ1dGVMb3R0ZXJ5IiwidGVzdCIsImZpcnN0UGFnZSIsImVyciIsImZvckVhY2giLCJ1c2VyIiwidXNlcldhbGxldCIsIndpbm5lck5vIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3VjY2VzcyIsInJlY2VpdmVyQWRkcmVzcyIsIlRyYW5zZmVycmluZ05GVHRvV2lubmVyIiwicmVzdWx0Iiwib3BlbiIsImhhc2giLCJVcGRhdGluZ09uQWlydGFibGUiLCJORlQiLCJkZXN0cm95IiwiZGVsZXRlZFJlY29yZHMiLCJlcnJvciIsImhyZWYiLCJQZXJzb24iLCJkaXN0cmlidXRlIiwicHJvbWlzZSIsInBlbmRpbmciLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJkYXRlIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiTGVmdERhdGUiLCJMZWZ0RGF0ZUJpZCIsImNoZWNrVGltZSIsImN1cnJlbnQiLCJEYXRlIiwiTkZURW5kRGF0ZSIsImRpZmZlcmNuZSIsInNldEludGVydmFsIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJoIiwicyIsInRvU3RyaW5nIiwiZ2V0RGF0ZVRpbWUiLCJoVGV4dCIsIm1UZXh0Iiwic1RleHQiLCJjb252ZXJ0ZWRIIiwiY29udmVydGVkTSIsIkFtUE0iLCJkaXZpZGVkSCIsIkNoZWNrRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsInkiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwibW4iLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdhcCIsInBvc2l0aW9uIiwicmlnaHQiLCJjb2xvciIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsIndpZHRoIiwiY3Vyc29yIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJmb250U2l6ZSIsImFsaWduU2VsZiIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlclJhZGl1cyIsImZsZXhGbG93IiwicGxhY2VDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwibGlzdEl0ZW0iLCJmbGV4RGlyZWN0aW9uIiwicm93R2FwIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=