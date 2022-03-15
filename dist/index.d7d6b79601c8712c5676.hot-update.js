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
      var arr, Airtable, base, currentList, _loop, i, findNFTS, done, _i2;

      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee9$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              if (!(id && window.location.pathname == "/lottery")) {
                _context15.next = 21;
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
                        _context14.next = 5;
                        return findNFTS;

                      case 5:
                        selectNFT = _context14.sent;
                        console.log(selectNFT);
                        done = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_4___default())(function (resolve, reject) {
                          for (var _i3 = 0; _i3 < selectNFT.length; _i3++) {
                            var record = selectNFT[_i3];
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

                      case 8:
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
              for (_i2 = 0; _i2 < arr.length; _i2++) {
                NFTslist.push(arr[_i2]);
              }

              settotalParticipated(arr[0].participated);
              setcurrentNFTname(arr[0].name);
              setcurrentNFTendDate(arr[0].endDate);
              setcurrentNFTid(arr[0].id);
              setsenderAddress(arr[0].ownerWallet);
              setcurrentTokenid(arr[0].TokeniD);
              document.getElementById('Loading').style.display = "none";
              document.getElementById('LoadingDate').style.display = "none";
              document.getElementById('LotteryInformation').style.display = "";

            case 21:
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
/******/ 	__webpack_require__.h = function() { return "4a4286309018c0f2a9e3"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmQ3ZDZiNzk2MDFjODcxMmM1Njc2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFqQixDQUFyQjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR04sS0FBSyxDQUFDUSxJQUFOLENBQVdQLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlLLENBQUMsQ0FBQ0csS0FBRixLQUFZVCxLQUFLLENBQUNVLFNBQXRCLEVBQWlDO0FBQzdCVixNQUFBQSxLQUFLLENBQUNVLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBQ0QsTUFBSUssa0JBQWtCLEdBQUcsRUFBekI7O0FBQ0Esa0JBQTBDcEIsK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQUE7QUFBQSxNQUFLcUIsY0FBTDtBQUFBLE1BQXFCQyxpQkFBckI7O0FBQ0EsbUJBQWtEdEIsK0NBQVEsQ0FBQyxFQUFELENBQTFEO0FBQUE7QUFBQSxNQUFPdUIsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLHFCQUFvQ2pCLGlFQUFXLENBQUMsUUFBRCxDQUEvQztBQUFBLE1BQVFrQixRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLGdCQUFrQkEsYUFBbEI7O0FBRUEsbUJBQWtEMUIsK0NBQVEsQ0FBQyxDQUFELENBQTFEO0FBQUE7QUFBQSxNQUFPMkIsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLG1C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cUZaLFFBQUFBLFFBQVEsRUFBRTtBQUEvRjtBQURYLG9CQUVJO0FBQ0ksV0FBSyxFQUFFO0FBQUVDLFFBQUFBLFVBQVUsRUFBRSxpQkFBZDtBQUFpQ0UsUUFBQUEsS0FBSyxFQUFFLE1BQXhDO0FBQWdERSxRQUFBQSxNQUFNLEVBQUUsTUFBeEQ7QUFBZ0VOLFFBQUFBLEtBQUssRUFBRTtBQUF2RTtBQURYLG9CQUVJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBeUIsV0FBSyxFQUFFO0FBQUVVLFFBQUFBLFFBQVEsRUFBRSxFQUFaO0FBQWdCSixRQUFBQSxNQUFNLEVBQUUsTUFBeEI7QUFBZ0NILFFBQUFBLFNBQVMsRUFBRSxRQUEzQztBQUFxRHNCLFFBQUFBLFVBQVUsRUFBRSxLQUFqRTtBQUF3RVosUUFBQUEsWUFBWSxFQUFFO0FBQXRGO0FBQWhDLE9BQ00vSSxZQUFZLElBQUl1SixRQUFRLENBQUM3SyxFQUExQixnQkFBaUMsMkdBQU00SSxTQUFTLENBQUNpQyxRQUFRLENBQUNqSCxTQUFWLENBQWYsQ0FBakMsZ0JBQTZFLGtIQURsRixDQUZKLENBRkosQ0FESixDQURKLENBaEJKLENBTkosQ0FESixDQURVO0FBQUEsR0FBTCxDQWxGYixDQURKO0FBdUlIOzs7Ozs7OztVQ3hmRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2xvdHRlcnkvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb3R0ZXJ5KCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcbiAgICBjb25zdCBzdHIgPSBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG4gICAgbGV0IGxvdHRlcnlORlREYXRlbGlzdCA9IFtdO1xuICAgIGxldCBbY3VycmVudE5GVG5hbWUsIHNldGN1cnJlbnRORlRuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjdXJyZW50TkZUZW5kRGF0ZSwgc2V0Y3VycmVudE5GVGVuZERhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblxuICAgIGNvbnN0IFt0b3RhbFBhcnRpY2lwYXRlZCwgc2V0dG90YWxQYXJ0aWNpcGF0ZWRdID0gdXNlU3RhdGUoMCk7XG4gICAgdmFyIFtzZW5kZXJBZGRyZXNzLCBzZXRzZW5kZXJBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGxldCBsb3R0ZXJ5Qm91Z2h0ID0gW107XG5cblxuICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICB9KTtcbiAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgY29uc3QgW2N1cnJlbnRORlRpZCwgc2V0Y3VycmVudE5GVGlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtjdXJyZW50VG9rZW5pZCwgc2V0Y3VycmVudFRva2VuaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW1JlY0V2ZW50SUQsIHNldFJlY0V2ZW50SURdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdmFyIFtORlRzbGlzdCwgc2V0TkZUc2xpc3RdID0gdXNlU3RhdGUoW10pO1xuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG5cbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgICAgICAgICB2YXIgZmluZEV2ZW50cyA9IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCdldmVudHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2lkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgIHNldFJlY0V2ZW50SUQocmVjb3Jkc1swXS5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRzWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRFdmVudCA9IGF3YWl0IGZpbmRFdmVudHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEV2ZW50KTtcblxuICAgICAgICAgICAgdmFyIGZpbmRMb3R0ZXJ5ID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2V2ZW50aWR9ID0gJyR7aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJzdGFydERhdGVcIiwgZGlyZWN0aW9uOiBcImFzY1wiIH1dLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSByZWNvcmRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnRpZDogcmVjb3JkLmdldChcIm5mdGlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogcmVjb3JkLmdldChcInN0YXJ0RGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiByZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG90dGVyeU5GVERhdGVsaXN0ID0gKGFycik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBmaW5kTG90dGVyeSk7XG4gICAgICAgICAgICBhd2FpdCBORlRzZmV0Y2hDb250cmFjdERhdGEoKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIE5GVHNmZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRMaXN0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb3R0ZXJ5TkZURGF0ZWxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZUxpc3QgPSBsb3R0ZXJ5TkZURGF0ZWxpc3RbaV07XG4gICAgICAgICAgICAgICAgY3VycmVudExpc3QgPSBlTGlzdDtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgZmluZE5GVFMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtlTGlzdC5uZnRpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRzKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RORlQgPSBhd2FpdCBmaW5kTkZUUztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RORlQpO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RORlQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSBzZWxlY3RORlRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVjb3JkLmdldCgnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogcmVjb3JkLmdldCgncHJpY2UnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcmVjb3JkLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IGN1cnJlbnRMaXN0LnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiBjdXJyZW50TGlzdC5lbmREYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlZDogcmVjb3JkLmdldCgncGFydGljaXBhdGVkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJXYWxsZXQ6IHJlY29yZC5nZXQoJ293bmVyV2FsbGV0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW5pRDogcmVjb3JkLmdldCgnVG9rZW5JRCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIE5GVHNsaXN0LnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0dG90YWxQYXJ0aWNpcGF0ZWQoYXJyWzBdLnBhcnRpY2lwYXRlZCk7XG4gICAgICAgICAgICBzZXRjdXJyZW50TkZUbmFtZShhcnJbMF0ubmFtZSlcbiAgICAgICAgICAgIHNldGN1cnJlbnRORlRlbmREYXRlKGFyclswXS5lbmREYXRlKTtcbiAgICAgICAgICAgIHNldGN1cnJlbnRORlRpZChhcnJbMF0uaWQpO1xuICAgICAgICAgICAgc2V0c2VuZGVyQWRkcmVzcyhhcnJbMF0ub3duZXJXYWxsZXQpO1xuICAgICAgICAgICAgc2V0Y3VycmVudFRva2VuaWQoYXJyWzBdLlRva2VuaUQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZ0RhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG90dGVyeUluZm9ybWF0aW9uJykuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIGxldCB3aW5uZXJJbmZvO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGVMb3R0ZXJ5KCkge1xuICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgIHZhciB0ZXN0ID0gYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLnNlbGVjdCh7XG4gICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe25mdGlkfSA9ICcke2N1cnJlbnRORlRpZH0nKWAsXG4gICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGVzdC5maXJzdFBhZ2UoKGVyciwgcmVjb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVjb3JkLmdldCgndXNlcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcldhbGxldDogcmVjb3JkLmdldCgndXNlcldhbGxldCcpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgdmFyIHZhbHVlID0gYXdhaXQgZG9uZTtcbiAgICAgICAgbG90dGVyeUJvdWdodCA9IHZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIHZhciB3aW5uZXJObyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbm5lck5vKTtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhgV2lubmVyICR7dmFsdWVbd2lubmVyTm9dLnVzZXJ9LyR7dmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXR9IWApO1xuICAgICAgICBsZXQgcmVjZWl2ZXJBZGRyZXNzID0gdmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXQ7XG4gICAgICAgIHdpbm5lckluZm8gPSB2YWx1ZVt3aW5uZXJOb107XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIoKSB7XG5cbiAgICAgICAgbGV0IHJlY2VpdmVyQWRkcmVzcyA9IHdpbm5lckluZm8udXNlcldhbGxldDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RbXG4gICAgICAgICAgICAnc2FmZVRyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1NiknXG4gICAgICAgIF0oc2VuZGVyQWRkcmVzcywgcmVjZWl2ZXJBZGRyZXNzLCBjdXJyZW50VG9rZW5pZCAtIDEpO1xuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0LmF1cm9yYS5kZXYvdHgvJHtyZXN1bHQuaGFzaH1gLCBcIl9ibGFua1wiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIFVwZGF0aW5nT25BaXJ0YWJsZSgpIHtcblxuICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICAgICAgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cbiAgICAgICAgYXdhaXQgTkZUc2xpc3QuZm9yRWFjaChhc3luYyAoTkZUKSA9PiB7XG4gICAgICAgICAgICBpZiAoTkZULmlkID0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbmZ0cycpLmRlc3Ryb3koW05GVC5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYoJy9kb25hdGlvbicpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBhd2FpdCBsb3R0ZXJ5TkZURGF0ZWxpc3QuZm9yRWFjaChhc3luYyAoTG90dGVyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKExvdHRlcnkubmZ0aWQgPT0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeScpLmRlc3Ryb3koW0xvdHRlcnkucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgbG90dGVyeUJvdWdodC5mb3JFYWNoKGFzeW5jIChQZXJzb24pID0+IHtcbiAgICAgICAgICAgIGlmIChQZXJzb24ubmZ0aWQgPT0gY3VycmVudE5GVGlkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLmRlc3Ryb3koW1BlcnNvbi5yZWNpZF0sIGZ1bmN0aW9uIChlcnIsIGRlbGV0ZWRSZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGVsZXRlZCcsIGRlbGV0ZWRSZWNvcmRzLmxlbmd0aCwgJ3JlY29yZHMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGUoKSB7XG4gICAgICAgIGF3YWl0IHRvYXN0LnByb21pc2UoZGlzdHJpYnV0ZUxvdHRlcnksIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiRGlzdHJpYnV0aW5nLi4uXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIkRpc3RyaWJ1dGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFRyYW5zZmVycmluZ05GVHRvV2lubmVyLCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIlRyYW5zZmVycmluZyBORlQgdG8gd2lubmVyXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJQbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBcIlRyYW5zZmVycmVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFVwZGF0aW5nT25BaXJ0YWJsZSwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJVcGRhdGluZyBvbiBBaXJ0YWJsZVwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJVcGRhdGVkIHN1Y2Nlc3NmdWxseSFcIlxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIH1cbiAgICBsZXQgbGFzdHRpbWUgPSAwO1xuICAgIGZ1bmN0aW9uIGNoZWNrVGltZSgpIHtcbiAgICAgICAgaWYgKE5GVHNsaXN0WzBdKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgTkZURW5kRGF0ZSA9IG5ldyBEYXRlKE5GVHNsaXN0WzBdLmVuZERhdGUpO1xuICAgICAgICAgICAgaWYgKE5GVHNsaXN0WzBdLnBhcnRpY2lwYXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2V0dG90YWxQYXJ0aWNpcGF0ZWQoMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldHRvdGFsUGFydGljaXBhdGVkKE5GVHNsaXN0WzBdLnBhcnRpY2lwYXRlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkaWZmZXJjbmUgPSBORlRFbmREYXRlIC0gY3VycmVudDtcbiAgICAgICAgICAgIGxhc3R0aW1lID0gZGlmZmVyY25lO1xuICAgICAgICAgICAgaWYgKGRpZmZlcmNuZSA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbChhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG5cbiAgICAgICAgICAgIGlmIChjaGVja1RpbWUoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIilbMF0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXN0cmlidXRlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hlY2tUaW1lKCkgPT0gZmFsc2UgJiYgbGFzdHRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdEluZm9ybWF0aW9uXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3RyaWJ1dGVcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0sIDEwMDApO1xuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0RGF0ZVRpbWUoaFRleHQsIG1UZXh0LCBzVGV4dCkge1xuICAgICAgICBsZXQgY29udmVydGVkSCA9IFwiXCI7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRNID0gXCJcIjtcbiAgICAgICAgbGV0IEFtUE0gPSBcIlwiO1xuICAgICAgICBpZiAoaFRleHQgPCAxMikge1xuICAgICAgICAgICAgQW1QTSA9IFwiQU1cIjtcbiAgICAgICAgICAgIGlmIChoVGV4dCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtoVGV4dH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7aFRleHR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkaXZpZGVkSCA9IGhUZXh0IC8gMjtcbiAgICAgICAgICAgIEFtUE0gPSBcIlBNXCI7XG4gICAgICAgICAgICBpZiAoZGl2aWRlZEggPCAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgMCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAke2RpdmlkZWRIfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1UZXh0IDwgMTApIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgMCR7bVRleHR9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZE0gPSBgJHttVGV4dH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke2NvbnZlcnRlZEh9OiR7Y29udmVydGVkTX0gJHtBbVBNfWA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIENoZWNrRGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1vbnRoKCk7XG4gICAgICAgIHZhciB5ID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBoID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldEhvdXJzKCk7XG4gICAgICAgIHZhciBtbiA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRNaW51dGVzKCk7XG4gICAgICAgIHZhciBzID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFNlY29uZHMoKTtcblxuICAgICAgICByZXR1cm4gKGAke2QudG9TdHJpbmcoKX0vJHttLnRvU3RyaW5nKCl9LyR7eS50b1N0cmluZygpfSAke2dldERhdGVUaW1lKGgsIG1uLCBzKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7UmVjRXZlbnRJRH1dYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE0cHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6ICcyMDhweCcgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBiYWNrZ3JvdW5kOiAncmdiKDIzNiwgMjAxLCAwKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAnMTcycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgaGVpZ2h0OiAnNDhweCcsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHBhZGRpbmdUb3A6ICcyMXB4JywgZm9udFNpemU6ICcyMXB4JyB9fT5HbyB0byBBdWN0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHJnYigxMSAyMTQgMTkwKSAwJSwgcmdiKDI1NSAxNDEgMCkgNzclKVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDY3LFxuICAgICAgICAgICAgICAgICAgICBmbGV4RmxvdzogXCJyb3cgbm93cmFwXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMHJlbVwiLCBwYWRkaW5nOiBcIjNyZW1cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkxvYWRpbmdEYXRlXCIgc3R5bGU9e3sgd2lkdGg6IDI4MCwgaGVpZ2h0OiAyNzksIGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J0xvdHRlcnlJbmZvcm1hdGlvbicgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJkYXJrYmx1ZVwiLCBtYXJnaW5Ub3A6IDM0IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TkZUbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWwgcGFydGljaXBhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjAwYjEsICMwMGZmODkpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDM4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIiM1ZDFmZmYgc29saWQgMXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3RhbFBhcnRpY2lwYXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgbmFtZT0nZGF0ZWxlZnRJbmZvcm1hdGlvbicgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMjdweCcgfX0gZGF0ZT17Y3VycmVudE5GVGVuZERhdGV9PntMZWZ0RGF0ZShjdXJyZW50TkZUZW5kRGF0ZSl9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17ZGlzdHJpYnV0ZX0gaWQ9XCJkaXN0cmlidXRlXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcIm5vbmVcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiA0MSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBzdHlsZT17eyB3aWR0aDogMTg0LCBib3JkZXJSYWRpdXM6IDUwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXN0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge05GVHNsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uaWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCgyOTVkZWcsICMwYmQ2YmUsICNhMjQxZGYpXCIsIG1hcmdpblRvcDogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGlzdEl0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJ2d1wiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PntsaXN0SXRlbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IERhdGU6IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZCBEYXRlOiAgIHtDaGVja0RhdGUobGlzdEl0ZW0uZW5kRGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVsZW1lbnRCb3R0b21Db250YWluZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICc1NjVweCcsIG1hcmdpbjogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgdGV4dEFsaWduOiAncmlnaHQnLCBtYXJnaW5Cb3R0b206ICczM3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI2N3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJvcmRlclJhZGl1czogJzhweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMTcsIDM0LCA0NyknLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiaWRwcmljZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyNCwgaGVpZ2h0OiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjMuNlwiLCBib3JkZXJSYWRpdXM6IDQwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjdXJyZW50TkZUaWQgIT0gbGlzdEl0ZW0uaWQpID8gKDw+QXQge0NoZWNrRGF0ZShsaXN0SXRlbS5zdGFydERhdGUpfTwvPikgOiAoPD5JbiBQcm9ncmVzczwvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuXG5cblxuXG5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNGE0Mjg2MzA5MDE4YzBmMmE5ZTNcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiTmF2TGluayIsInRvYXN0IiwibmVhckFQSSIsIkJ1dHRvbiIsInVzZUNvbnRyYWN0IiwiTG90dGVyeSIsInJlZ2V4Iiwic3RyIiwiZGVjb2RlVVJJIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJsb3R0ZXJ5TkZURGF0ZWxpc3QiLCJjdXJyZW50TkZUbmFtZSIsInNldGN1cnJlbnRORlRuYW1lIiwiY3VycmVudE5GVGVuZERhdGUiLCJzZXRjdXJyZW50TkZUZW5kRGF0ZSIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInRvdGFsUGFydGljaXBhdGVkIiwic2V0dG90YWxQYXJ0aWNpcGF0ZWQiLCJzZW5kZXJBZGRyZXNzIiwic2V0c2VuZGVyQWRkcmVzcyIsImxvdHRlcnlCb3VnaHQiLCJBaXJ0YWJsZSIsInJlcXVpcmUiLCJjb25maWd1cmUiLCJlbmRwb2ludFVybCIsImFwaUtleSIsImJhc2UiLCJjdXJyZW50TkZUaWQiLCJzZXRjdXJyZW50TkZUaWQiLCJjdXJyZW50VG9rZW5pZCIsInNldGN1cnJlbnRUb2tlbmlkIiwiUmVjRXZlbnRJRCIsInNldFJlY0V2ZW50SUQiLCJORlRzbGlzdCIsInNldE5GVHNsaXN0IiwiTG90dGVyeWZldGNoQ29udHJhY3REYXRhIiwicGF0aG5hbWUiLCJmaW5kRXZlbnRzIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiZ2V0SWQiLCJwYWdlIiwidGhlbiIsImUiLCJzZWxlY3RlZEV2ZW50IiwiY29uc29sZSIsImxvZyIsImZpbmRMb3R0ZXJ5Iiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiYXJyIiwiaSIsImxlbmd0aCIsInJlY29yZCIsInB1c2giLCJyZWNpZCIsIm5mdGlkIiwiZ2V0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIk5GVHNmZXRjaENvbnRyYWN0RGF0YSIsImVMaXN0IiwiY3VycmVudExpc3QiLCJmaW5kTkZUUyIsInNlbGVjdE5GVCIsImRvbmUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlIiwicGFydGljaXBhdGVkIiwib3duZXJXYWxsZXQiLCJUb2tlbmlEIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIndpbm5lckluZm8iLCJkaXN0cmlidXRlTG90dGVyeSIsInRlc3QiLCJmaXJzdFBhZ2UiLCJlcnIiLCJmb3JFYWNoIiwidXNlciIsInVzZXJXYWxsZXQiLCJ2YWx1ZSIsIndpbm5lck5vIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3VjY2VzcyIsInJlY2VpdmVyQWRkcmVzcyIsIlRyYW5zZmVycmluZ05GVHRvV2lubmVyIiwicmVzdWx0Iiwib3BlbiIsImhhc2giLCJVcGRhdGluZ09uQWlydGFibGUiLCJORlQiLCJkZXN0cm95IiwiZGVsZXRlZFJlY29yZHMiLCJlcnJvciIsImhyZWYiLCJQZXJzb24iLCJkaXN0cmlidXRlIiwicHJvbWlzZSIsInBlbmRpbmciLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJkYXRlIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiTGVmdERhdGUiLCJMZWZ0RGF0ZUJpZCIsImxhc3R0aW1lIiwiY2hlY2tUaW1lIiwiY3VycmVudCIsIkRhdGUiLCJORlRFbmREYXRlIiwiZGlmZmVyY25lIiwic2V0SW50ZXJ2YWwiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsImgiLCJzIiwidG9TdHJpbmciLCJnZXREYXRlVGltZSIsImhUZXh0IiwibVRleHQiLCJzVGV4dCIsImNvbnZlcnRlZEgiLCJjb252ZXJ0ZWRNIiwiQW1QTSIsImRpdmlkZWRIIiwiQ2hlY2tEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwieSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJtbiIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2FwIiwicG9zaXRpb24iLCJyaWdodCIsImNvbG9yIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwid2lkdGgiLCJjdXJzb3IiLCJoZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwiYWxpZ25TZWxmIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyUmFkaXVzIiwiZmxleEZsb3ciLCJwbGFjZUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJsaXN0SXRlbSIsImZsZXhEaXJlY3Rpb24iLCJyb3dHYXAiLCJtYXJnaW5Cb3R0b20iLCJsaW5lSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==