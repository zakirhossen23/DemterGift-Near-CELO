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
      contractCelo = _useContract.contractCelo,
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

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      _useState16 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
      EventWalletType = _useState16[0],
      setEventWalletType = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),
      _useState18 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
      NFTslist = _useState18[0],
      setNFTslist = _useState18[1];

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
                                      setEventWalletType(records[0].get("wallettype"));
                                      resolve(records[0]);

                                    case 3:
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
      var arr, test, done, value, winnerNo, _context16;

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

              if (EventWalletType == "NEAR") {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context16 = "Winner ".concat(value[winnerNo].user, "/")).call(_context16, value[winnerNo].userWallet, "!"));
              } else if (EventWalletType == "CELO") {
                react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success("Winner ".concat(value[winnerNo].user, "!"));
              }

              winnerInfo = value[winnerNo];

            case 14:
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

  function TransferringNFTtoWinnerCelo() {
    return _TransferringNFTtoWinnerCelo.apply(this, arguments);
  }

  function _TransferringNFTtoWinnerCelo() {
    _TransferringNFTtoWinnerCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee12() {
      var receiverAddress, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee12$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              receiverAddress = winnerInfo.userWallet;
              _context19.next = 3;
              return contractCelo['safeTransferFrom(address,address,uint256)'](senderAddress, receiverAddress, currentTokenid);

            case 3:
              result = _context19.sent;
              window.open("https://alfajores-blockscout.celo-testnet.org/tx/".concat(result.hash), "_blank");
              console.log(result);

            case 6:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee12);
    }));
    return _TransferringNFTtoWinnerCelo.apply(this, arguments);
  }

  function UpdatingOnAirtable() {
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function _UpdatingOnAirtable() {
    _UpdatingOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee16() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee16$(_context23) {
        while (1) {
          switch (_context23.prev = _context23.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context23.next = 5;
              return NFTslist.forEach( /*#__PURE__*/function () {
                var _ref6 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee13(NFT) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee13$(_context20) {
                    while (1) {
                      switch (_context20.prev = _context20.next) {
                        case 0:
                          if (!(NFT.id = currentNFTid)) {
                            _context20.next = 3;
                            break;
                          }

                          _context20.next = 3;
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
                          return _context20.stop();
                      }
                    }
                  }, _callee13);
                }));

                return function (_x11) {
                  return _ref6.apply(this, arguments);
                };
              }());

            case 5:
              _context23.next = 7;
              return lotteryNFTDatelist.forEach( /*#__PURE__*/function () {
                var _ref7 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee14(Lottery) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee14$(_context21) {
                    while (1) {
                      switch (_context21.prev = _context21.next) {
                        case 0:
                          if (!(Lottery.nftid == currentNFTid)) {
                            _context21.next = 3;
                            break;
                          }

                          _context21.next = 3;
                          return base('lottery').destroy([Lottery.recid], function (err, deletedRecords) {
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

                return function (_x12) {
                  return _ref7.apply(this, arguments);
                };
              }());

            case 7:
              _context23.next = 9;
              return lotteryBought.forEach( /*#__PURE__*/function () {
                var _ref8 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee15(Person) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee15$(_context22) {
                    while (1) {
                      switch (_context22.prev = _context22.next) {
                        case 0:
                          if (!(Person.nftid == currentNFTid)) {
                            _context22.next = 3;
                            break;
                          }

                          _context22.next = 3;
                          return base('lotteryBought').destroy([Person.recid], function (err, deletedRecords) {
                            if (err) {
                              console.error(err);
                              return;
                            }

                            console.log('Deleted', deletedRecords.length, 'records');
                          });

                        case 3:
                        case "end":
                          return _context22.stop();
                      }
                    }
                  }, _callee15);
                }));

                return function (_x13) {
                  return _ref8.apply(this, arguments);
                };
              }());

            case 9:
            case "end":
              return _context23.stop();
          }
        }
      }, _callee16);
    }));
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function distribute() {
    return _distribute.apply(this, arguments);
  }

  function _distribute() {
    _distribute = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee17() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee17$(_context24) {
        while (1) {
          switch (_context24.prev = _context24.next) {
            case 0:
              _context24.next = 2;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(distributeLottery, {
                pending: "Distributing...",
                error: "Please try again later",
                success: "Distributed successfully!"
              });

            case 2:
              if (!(EventWalletType == "NEAR")) {
                _context24.next = 7;
                break;
              }

              _context24.next = 5;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(TransferringNFTtoWinner, {
                pending: "Transferring NFT to winner",
                error: "Please try again later",
                success: "Transferred successfully!"
              });

            case 5:
              _context24.next = 10;
              break;

            case 7:
              if (!(EventWalletType == "CELO")) {
                _context24.next = 10;
                break;
              }

              _context24.next = 10;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(TransferringNFTtoWinnerCelo, {
                pending: "Transferring NFT to winner",
                error: "Please try again later",
                success: "Transferred successfully!"
              });

            case 10:
              _context24.next = 12;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(UpdatingOnAirtable, {
                pending: "Updating on Airtable",
                error: "Please try again later",
                success: "Updated successfully!"
              });

            case 12:
            case "end":
              return _context24.stop();
          }
        }
      }, _callee17);
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
        width: '285px',
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
/******/ 	__webpack_require__.h = function() { return "c75d87a4f897a6c840b3"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmZhNmUzMTI1MWQwMjVlZmZjYWI1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFqQixDQUFyQjtBQUNBLE1BQUlDLENBQUo7QUFDQSxNQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFPLENBQUNELENBQUMsR0FBR04sS0FBSyxDQUFDUSxJQUFOLENBQVdQLEdBQVgsQ0FBTCxNQUEwQixJQUFqQyxFQUF1QztBQUNuQztBQUNBLFFBQUlLLENBQUMsQ0FBQ0csS0FBRixLQUFZVCxLQUFLLENBQUNVLFNBQXRCLEVBQWlDO0FBQzdCVixNQUFBQSxLQUFLLENBQUNVLFNBQU47QUFDSDs7QUFDREgsSUFBQUEsRUFBRSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFOO0FBQ0g7O0FBQ0QsTUFBSUssa0JBQWtCLEdBQUcsRUFBekI7O0FBQ0Esa0JBQTBDcEIsK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQUE7QUFBQSxNQUFLcUIsY0FBTDtBQUFBLE1BQXFCQyxpQkFBckI7O0FBQ0EsbUJBQWtEdEIsK0NBQVEsQ0FBQyxFQUFELENBQTFEO0FBQUE7QUFBQSxNQUFPdUIsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLHFCQUFrRGpCLGlFQUFXLENBQUMsUUFBRCxDQUE3RDtBQUFBLE1BQVFrQixRQUFSLGdCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLFlBQWxCLGdCQUFrQkEsWUFBbEI7QUFBQSxNQUFnQ0MsYUFBaEMsZ0JBQWdDQSxhQUFoQzs7QUFFQSxtQkFBa0QzQiwrQ0FBUSxDQUFDLENBQUQsQ0FBMUQ7QUFBQTtBQUFBLE1BQU80Qixp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dEQ7QUFBZ0VILFFBQUFBLFlBQVksRUFBRSxLQUE5RTtBQUFxRlosUUFBQUEsUUFBUSxFQUFFO0FBQS9GO0FBRFgsb0JBRUk7QUFDSSxXQUFLLEVBQUU7QUFBRUMsUUFBQUEsVUFBVSxFQUFFLGlCQUFkO0FBQWlDRSxRQUFBQSxLQUFLLEVBQUUsTUFBeEM7QUFBZ0RFLFFBQUFBLE1BQU0sRUFBRSxNQUF4RDtBQUFnRU4sUUFBQUEsS0FBSyxFQUFFO0FBQXZFO0FBRFgsb0JBRUk7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUF5QixXQUFLLEVBQUU7QUFBRVUsUUFBQUEsUUFBUSxFQUFFLEVBQVo7QUFBZ0JKLFFBQUFBLE1BQU0sRUFBRSxNQUF4QjtBQUFnQ0gsUUFBQUEsU0FBUyxFQUFFLFFBQTNDO0FBQXFEc0IsUUFBQUEsVUFBVSxFQUFFLEtBQWpFO0FBQXdFWixRQUFBQSxZQUFZLEVBQUU7QUFBdEY7QUFBaEMsT0FDTWxKLFlBQVksSUFBSTBKLFFBQVEsQ0FBQ2pMLEVBQTFCLGdCQUFpQywyR0FBTWdKLFNBQVMsQ0FBQ2lDLFFBQVEsQ0FBQ2xILFNBQVYsQ0FBZixDQUFqQyxnQkFBNkUsa0hBRGxGLENBRkosQ0FGSixDQURKLENBREosQ0FoQkosQ0FOSixDQURKLENBRFU7QUFBQSxHQUFMLENBbEZiLENBREo7QUF1SUg7Ozs7Ozs7O1VDaGhCRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL3BhZ2VzL2xvdHRlcnkvaW5kZXguanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb3R0ZXJ5KCkge1xuICAgIGNvbnN0IHJlZ2V4ID0gL1xcWyguKilcXF0vZztcbiAgICBjb25zdCBzdHIgPSBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgbGV0IG07XG4gICAgbGV0IGlkID0gXCJcIjtcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG4gICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gbVsxXTtcbiAgICB9XG4gICAgbGV0IGxvdHRlcnlORlREYXRlbGlzdCA9IFtdO1xuICAgIGxldCBbY3VycmVudE5GVG5hbWUsIHNldGN1cnJlbnRORlRuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjdXJyZW50TkZUZW5kRGF0ZSwgc2V0Y3VycmVudE5GVGVuZERhdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IHsgY29udHJhY3QsIGNvbnRyYWN0Q2Vsbywgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xuXG4gICAgY29uc3QgW3RvdGFsUGFydGljaXBhdGVkLCBzZXR0b3RhbFBhcnRpY2lwYXRlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICB2YXIgW3NlbmRlckFkZHJlc3MsIHNldHNlbmRlckFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgbGV0IGxvdHRlcnlCb3VnaHQgPSBbXTtcblxuXG4gICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICBBaXJ0YWJsZS5jb25maWd1cmUoe1xuICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgIH0pO1xuICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICBjb25zdCBbY3VycmVudE5GVGlkLCBzZXRjdXJyZW50TkZUaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2N1cnJlbnRUb2tlbmlkLCBzZXRjdXJyZW50VG9rZW5pZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbUmVjRXZlbnRJRCwgc2V0UmVjRXZlbnRJRF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0V2ZW50V2FsbGV0VHlwZSwgc2V0RXZlbnRXYWxsZXRUeXBlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICB2YXIgW05GVHNsaXN0LCBzZXRORlRzbGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIExvdHRlcnlmZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcblxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgICAgIHZhciBmaW5kRXZlbnRzID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2V2ZW50cycpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7aWR9ID0gJyR7aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgc2V0UmVjRXZlbnRJRChyZWNvcmRzWzBdLmdldElkKCkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFdmVudFdhbGxldFR5cGUocmVjb3Jkc1swXS5nZXQoXCJ3YWxsZXR0eXBlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRzWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRFdmVudCA9IGF3YWl0IGZpbmRFdmVudHM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEV2ZW50KTtcblxuICAgICAgICAgICAgdmFyIGZpbmRMb3R0ZXJ5ID0gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2V2ZW50aWR9ID0gJyR7aWR9JylgLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJzdGFydERhdGVcIiwgZGlyZWN0aW9uOiBcImFzY1wiIH1dLFxuICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgfSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSByZWNvcmRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnRpZDogcmVjb3JkLmdldChcIm5mdGlkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogcmVjb3JkLmdldChcInN0YXJ0RGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiByZWNvcmQuZ2V0KFwiZW5kRGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG90dGVyeU5GVERhdGVsaXN0ID0gKGFycik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBmaW5kTG90dGVyeSk7XG4gICAgICAgICAgICBhd2FpdCBORlRzZmV0Y2hDb250cmFjdERhdGEoKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIE5GVHNmZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgICAgICB2YXIgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJyB9KS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRMaXN0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb3R0ZXJ5TkZURGF0ZWxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZUxpc3QgPSBsb3R0ZXJ5TkZURGF0ZWxpc3RbaV07XG4gICAgICAgICAgICAgICAgY3VycmVudExpc3QgPSBlTGlzdDtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgZmluZE5GVFMgPSBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtpZH0gPSAnJHtlTGlzdC5uZnRpZH0nKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICAgICAgICAgIH0pLmVhY2hQYWdlKGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmRzKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RORlQgPSBhd2FpdCBmaW5kTkZUUztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RORlQpO1xuXG5cbiAgICAgICAgICAgICAgICB2YXIgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RORlQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNvcmQgPSBzZWxlY3RORlRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVjb3JkLmdldCgnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogcmVjb3JkLmdldCgncHJpY2UnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogcmVjb3JkLmdldCgnaW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IGN1cnJlbnRMaXN0LnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiBjdXJyZW50TGlzdC5lbmREYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRlZDogcmVjb3JkLmdldCgncGFydGljaXBhdGVkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJXYWxsZXQ6IHJlY29yZC5nZXQoJ293bmVyV2FsbGV0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9rZW5pRDogcmVjb3JkLmdldCgnVG9rZW5JRCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIE5GVHNsaXN0LnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0dG90YWxQYXJ0aWNpcGF0ZWQoYXJyWzBdLnBhcnRpY2lwYXRlZCk7XG4gICAgICAgICAgICBzZXRjdXJyZW50TkZUbmFtZShhcnJbMF0ubmFtZSlcbiAgICAgICAgICAgIHNldGN1cnJlbnRORlRlbmREYXRlKGFyclswXS5lbmREYXRlKTtcbiAgICAgICAgICAgIHNldGN1cnJlbnRORlRpZChhcnJbMF0uaWQpO1xuICAgICAgICAgICAgc2V0c2VuZGVyQWRkcmVzcyhhcnJbMF0ub3duZXJXYWxsZXQpO1xuICAgICAgICAgICAgc2V0Y3VycmVudFRva2VuaWQoYXJyWzBdLlRva2VuaUQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZ0RhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG90dGVyeUluZm9ybWF0aW9uJykuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEoKTtcbiAgICB9LCBbXSk7XG5cblxuICAgIGxldCB3aW5uZXJJbmZvO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3RyaWJ1dGVMb3R0ZXJ5KCkge1xuICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgIHZhciB0ZXN0ID0gYXdhaXQgYmFzZSgnbG90dGVyeUJvdWdodCcpLnNlbGVjdCh7XG4gICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe25mdGlkfSA9ICcke2N1cnJlbnRORlRpZH0nKWAsXG4gICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGVzdC5maXJzdFBhZ2UoKGVyciwgcmVjb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lkOiByZWNvcmQuZ2V0SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuZ2V0KCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVjb3JkLmdldCgndXNlcicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcldhbGxldDogcmVjb3JkLmdldCgndXNlcldhbGxldCcpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgdmFyIHZhbHVlID0gYXdhaXQgZG9uZTtcbiAgICAgICAgbG90dGVyeUJvdWdodCA9IHZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIHZhciB3aW5uZXJObyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbm5lck5vKTtcbiAgICAgICAgaWYgKEV2ZW50V2FsbGV0VHlwZSA9PSBcIk5FQVJcIil7XG4gICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhgV2lubmVyICR7dmFsdWVbd2lubmVyTm9dLnVzZXJ9LyR7dmFsdWVbd2lubmVyTm9dLnVzZXJXYWxsZXR9IWApO1xuICAgICAgICB9ZWxzZSBpZiAoRXZlbnRXYWxsZXRUeXBlID09IFwiQ0VMT1wiKXtcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoYFdpbm5lciAke3ZhbHVlW3dpbm5lck5vXS51c2VyfSFgKTtcbiAgICAgICAgfVxuICAgICAgIHdpbm5lckluZm8gPSB2YWx1ZVt3aW5uZXJOb107XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIoKSB7XG5cbiAgICAgICAgbGV0IHJlY2VpdmVyQWRkcmVzcyA9IHdpbm5lckluZm8udXNlcldhbGxldDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RbXG4gICAgICAgICAgICAnc2FmZVRyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1NiknXG4gICAgICAgIF0oc2VuZGVyQWRkcmVzcywgcmVjZWl2ZXJBZGRyZXNzLCBjdXJyZW50VG9rZW5pZCAtIDEpO1xuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0LmF1cm9yYS5kZXYvdHgvJHtyZXN1bHQuaGFzaH1gLCBcIl9ibGFua1wiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIFRyYW5zZmVycmluZ05GVHRvV2lubmVyQ2VsbygpIHtcblxuICAgICAgICBsZXQgcmVjZWl2ZXJBZGRyZXNzID0gd2lubmVySW5mby51c2VyV2FsbGV0O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdENlbG9bXG4gICAgICAgICAgICAnc2FmZVRyYW5zZmVyRnJvbShhZGRyZXNzLGFkZHJlc3MsdWludDI1NiknXG4gICAgICAgIF0oc2VuZGVyQWRkcmVzcywgcmVjZWl2ZXJBZGRyZXNzLCBjdXJyZW50VG9rZW5pZCApO1xuICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly9hbGZham9yZXMtYmxvY2tzY291dC5jZWxvLXRlc3RuZXQub3JnL3R4LyR7cmVzdWx0Lmhhc2h9YCwgXCJfYmxhbmtcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBVcGRhdGluZ09uQWlydGFibGUoKSB7XG5cbiAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcbiAgICAgICAgICAgIGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXG4gICAgICAgIGF3YWl0IE5GVHNsaXN0LmZvckVhY2goYXN5bmMgKE5GVCkgPT4ge1xuICAgICAgICAgICAgaWYgKE5GVC5pZCA9IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ25mdHMnKS5kZXN0cm95KFtORlQucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmKCcvZG9uYXRpb24nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgYXdhaXQgbG90dGVyeU5GVERhdGVsaXN0LmZvckVhY2goYXN5bmMgKExvdHRlcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChMb3R0ZXJ5Lm5mdGlkID09IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5kZXN0cm95KFtMb3R0ZXJ5LnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IGxvdHRlcnlCb3VnaHQuZm9yRWFjaChhc3luYyAoUGVyc29uKSA9PiB7XG4gICAgICAgICAgICBpZiAoUGVyc29uLm5mdGlkID09IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5kZXN0cm95KFtQZXJzb24ucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBkaXN0cmlidXRlKCkge1xuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKGRpc3RyaWJ1dGVMb3R0ZXJ5LCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIkRpc3RyaWJ1dGluZy4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJEaXN0cmlidXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKEV2ZW50V2FsbGV0VHlwZSA9PSBcIk5FQVJcIil7XG4gICAgICAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShUcmFuc2ZlcnJpbmdORlR0b1dpbm5lciwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJUcmFuc2ZlcnJpbmcgTkZUIHRvIHdpbm5lclwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSk7XG4gICAgICAgIH1lbHNlIGlmIChFdmVudFdhbGxldFR5cGUgPT0gXCJDRUxPXCIpe1xuICAgICAgICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKFRyYW5zZmVycmluZ05GVHRvV2lubmVyQ2Vsbywge1xuICAgICAgICAgICAgcGVuZGluZzogXCJUcmFuc2ZlcnJpbmcgTkZUIHRvIHdpbm5lclwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShVcGRhdGluZ09uQWlydGFibGUsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiVXBkYXRpbmcgb24gQWlydGFibGVcIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiVXBkYXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICB9XG4gICAgbGV0IGxhc3R0aW1lID0gMDtcbiAgICBmdW5jdGlvbiBjaGVja1RpbWUoKSB7XG4gICAgICAgIGlmIChORlRzbGlzdFswXSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIE5GVEVuZERhdGUgPSBuZXcgRGF0ZShORlRzbGlzdFswXS5lbmREYXRlKTtcbiAgICAgICAgICAgIGlmIChORlRzbGlzdFswXS5wYXJ0aWNpcGF0ZWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNldHRvdGFsUGFydGljaXBhdGVkKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXR0b3RhbFBhcnRpY2lwYXRlZChORlRzbGlzdFswXS5wYXJ0aWNpcGF0ZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGlmZmVyY25lID0gTkZURW5kRGF0ZSAtIGN1cnJlbnQ7XG4gICAgICAgICAgICBsYXN0dGltZSA9IGRpZmZlcmNuZTtcbiAgICAgICAgICAgIGlmIChkaWZmZXJjbmUgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tUaW1lKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlbGVmdEluZm9ybWF0aW9uXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzdHJpYnV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoZWNrVGltZSgpID09IGZhbHNlICYmIGxhc3R0aW1lIDwgMCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRJbmZvcm1hdGlvblwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXN0cmlidXRlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9LCAxMDAwKTtcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkID0gYyAtIG47XG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcImQgXCIgKyBoLnRvU3RyaW5nKCkgKyBcImggXCIgKyBtLnRvU3RyaW5nKCkgKyBcIm0gXCIgKyBzLnRvU3RyaW5nKCkgKyBcInNcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldERhdGVUaW1lKGhUZXh0LCBtVGV4dCwgc1RleHQpIHtcbiAgICAgICAgbGV0IGNvbnZlcnRlZEggPSBcIlwiO1xuICAgICAgICBsZXQgY29udmVydGVkTSA9IFwiXCI7XG4gICAgICAgIGxldCBBbVBNID0gXCJcIjtcbiAgICAgICAgaWYgKGhUZXh0IDwgMTIpIHtcbiAgICAgICAgICAgIEFtUE0gPSBcIkFNXCI7XG4gICAgICAgICAgICBpZiAoaFRleHQgPCAxMCkge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgMCR7aFRleHR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAke2hUZXh0fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZGl2aWRlZEggPSBoVGV4dCAvIDI7XG4gICAgICAgICAgICBBbVBNID0gXCJQTVwiO1xuICAgICAgICAgICAgaWYgKGRpdmlkZWRIIDwgMTApIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYDAke2RpdmlkZWRIfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgJHtkaXZpZGVkSH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtVGV4dCA8IDEwKSB7XG4gICAgICAgICAgICBjb252ZXJ0ZWRNID0gYDAke21UZXh0fWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb252ZXJ0ZWRNID0gYCR7bVRleHR9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgJHtjb252ZXJ0ZWRIfToke2NvbnZlcnRlZE19ICR7QW1QTX1gO1xuICAgIH1cbiAgICBmdW5jdGlvbiBDaGVja0RhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbSA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRNb250aCgpO1xuICAgICAgICB2YXIgeSA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB2YXIgaCA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRIb3VycygpO1xuICAgICAgICB2YXIgbW4gPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0TWludXRlcygpO1xuICAgICAgICB2YXIgcyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRTZWNvbmRzKCk7XG5cbiAgICAgICAgcmV0dXJuIChgJHtkLnRvU3RyaW5nKCl9LyR7bS50b1N0cmluZygpfS8ke3kudG9TdHJpbmcoKX0gJHtnZXREYXRlVGltZShoLCBtbiwgcyl9YCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2TGluayB0bz17YC9kb25hdGlvbi9hdWN0aW9uP1ske1JlY0V2ZW50SUR9XWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxNHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAnMjA4cHgnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIG92ZXJmbG93OiAnaGlkZGVuJywgYmFja2dyb3VuZDogJ3JnYigyMzYsIDIwMSwgMCknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzE3MnB4JywgY3Vyc29yOiAncG9pbnRlcicsIGhlaWdodDogJzQ4cHgnLCBtYXJnaW46ICcwJywgcGFkZGluZzogJzBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBwYWRkaW5nVG9wOiAnMjFweCcsIGZvbnRTaXplOiAnMjFweCcgfX0+R28gdG8gQXVjdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHJlbVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudChyZ2IoMTEgMjE0IDE5MCkgMCUsIHJnYigyNTUgMTQxIDApIDc3JSlcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2NyxcbiAgICAgICAgICAgICAgICAgICAgZmxleEZsb3c6IFwicm93IG5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTByZW1cIiwgcGFkZGluZzogXCIzcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJMb2FkaW5nRGF0ZVwiIHN0eWxlPXt7IHdpZHRoOiAyODAsIGhlaWdodDogMjc5LCBkaXNwbGF5OiBcImZsZXhcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdMb3R0ZXJ5SW5mb3JtYXRpb24nIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiZGFya2JsdWVcIiwgbWFyZ2luVG9wOiAzNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudE5GVG5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvdGFsIHBhcnRpY2lwYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmYwMGIxLCAjMDBmZjg5KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxOCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIjNWQxZmZmIHNvbGlkIDFweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG90YWxQYXJ0aWNpcGF0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIG5hbWU9J2RhdGVsZWZ0SW5mb3JtYXRpb24nIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzI3cHgnIH19IGRhdGU9e2N1cnJlbnRORlRlbmREYXRlfT57TGVmdERhdGUoY3VycmVudE5GVGVuZERhdGUpfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2Rpc3RyaWJ1dGV9IGlkPVwiZGlzdHJpYnV0ZVwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTogXCJub25lXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIG1hcmdpblRvcDogNDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgc3R5bGU9e3sgd2lkdGg6IDE4NCwgYm9yZGVyUmFkaXVzOiA1MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzdHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtORlRzbGlzdC5tYXAoKGxpc3RJdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoMjk1ZGVnLCAjMGJkNmJlLCAjYTI0MWRmKVwiLCBtYXJnaW5Ub3A6IDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5pZH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xpc3RJdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbGV4RGlyZWN0aW9uOiAncm93JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JywgYWxpZ25Db250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIiBzdHlsZT17eyByb3dHYXA6IDUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBmb250U2l6ZTogXCIydndcIiwgY29sb3I6IFwid2hpdGVcIiB9fT57bGlzdEl0ZW0ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBEYXRlOiB7Q2hlY2tEYXRlKGxpc3RJdGVtLnN0YXJ0RGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTk5IDE5NCAxOTQpXCIsIGZvbnRTaXplOiBcIjEuN3Z3XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmQgRGF0ZTogICB7Q2hlY2tEYXRlKGxpc3RJdGVtLmVuZERhdGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFbGVtZW50Qm90dG9tQ29udGFpbmVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnNTY1cHgnLCBtYXJnaW46ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIHRleHRBbGlnbjogJ3JpZ2h0JywgbWFyZ2luQm90dG9tOiAnMzNweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyODVweCcsIGFsaWduQ29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBib3JkZXJSYWRpdXM6ICc4cHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAncmdiKDE3LCAzNCwgNDcpJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmlkcHJpY2VcIiBzdHlsZT17eyBmb250U2l6ZTogMjQsIGhlaWdodDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbGluZUhlaWdodDogXCIzLjZcIiwgYm9yZGVyUmFkaXVzOiA0MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY3VycmVudE5GVGlkICE9IGxpc3RJdGVtLmlkKSA/ICg8PkF0IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX08Lz4pIDogKDw+SW4gUHJvZ3Jlc3M8Lz4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG5cblxuXG5cblxuXG4gICAgICAgIDwvPlxuICAgICk7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImM3NWQ4N2E0Zjg5N2E2Yzg0MGIzXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhcmFtcyIsIk5hdkxpbmsiLCJ0b2FzdCIsIm5lYXJBUEkiLCJCdXR0b24iLCJ1c2VDb250cmFjdCIsIkxvdHRlcnkiLCJyZWdleCIsInN0ciIsImRlY29kZVVSSSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibSIsImlkIiwiZXhlYyIsImluZGV4IiwibGFzdEluZGV4IiwibG90dGVyeU5GVERhdGVsaXN0IiwiY3VycmVudE5GVG5hbWUiLCJzZXRjdXJyZW50TkZUbmFtZSIsImN1cnJlbnRORlRlbmREYXRlIiwic2V0Y3VycmVudE5GVGVuZERhdGUiLCJjb250cmFjdCIsImNvbnRyYWN0Q2VsbyIsInNpZ25lckFkZHJlc3MiLCJ0b3RhbFBhcnRpY2lwYXRlZCIsInNldHRvdGFsUGFydGljaXBhdGVkIiwic2VuZGVyQWRkcmVzcyIsInNldHNlbmRlckFkZHJlc3MiLCJsb3R0ZXJ5Qm91Z2h0IiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiY3VycmVudE5GVGlkIiwic2V0Y3VycmVudE5GVGlkIiwiY3VycmVudFRva2VuaWQiLCJzZXRjdXJyZW50VG9rZW5pZCIsIlJlY0V2ZW50SUQiLCJzZXRSZWNFdmVudElEIiwiRXZlbnRXYWxsZXRUeXBlIiwic2V0RXZlbnRXYWxsZXRUeXBlIiwiTkZUc2xpc3QiLCJzZXRORlRzbGlzdCIsIkxvdHRlcnlmZXRjaENvbnRyYWN0RGF0YSIsInBhdGhuYW1lIiwiZmluZEV2ZW50cyIsInJlc29sdmUiLCJyZWplY3QiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJ2aWV3IiwiZWFjaFBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImdldElkIiwiZ2V0IiwicGFnZSIsInRoZW4iLCJlIiwic2VsZWN0ZWRFdmVudCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kTG90dGVyeSIsInNvcnQiLCJmaWVsZCIsImRpcmVjdGlvbiIsImFyciIsImkiLCJsZW5ndGgiLCJyZWNvcmQiLCJwdXNoIiwicmVjaWQiLCJuZnRpZCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJORlRzZmV0Y2hDb250cmFjdERhdGEiLCJlTGlzdCIsImN1cnJlbnRMaXN0IiwiZmluZE5GVFMiLCJzZWxlY3RORlQiLCJkb25lIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJpbWFnZSIsInBhcnRpY2lwYXRlZCIsIm93bmVyV2FsbGV0IiwiVG9rZW5pRCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5uZXJJbmZvIiwiZGlzdHJpYnV0ZUxvdHRlcnkiLCJ0ZXN0IiwiZmlyc3RQYWdlIiwiZXJyIiwiZm9yRWFjaCIsInVzZXIiLCJ1c2VyV2FsbGV0IiwidmFsdWUiLCJ3aW5uZXJObyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInN1Y2Nlc3MiLCJUcmFuc2ZlcnJpbmdORlR0b1dpbm5lciIsInJlY2VpdmVyQWRkcmVzcyIsInJlc3VsdCIsIm9wZW4iLCJoYXNoIiwiVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXJDZWxvIiwiVXBkYXRpbmdPbkFpcnRhYmxlIiwiTkZUIiwiZGVzdHJveSIsImRlbGV0ZWRSZWNvcmRzIiwiZXJyb3IiLCJocmVmIiwiUGVyc29uIiwiZGlzdHJpYnV0ZSIsInByb21pc2UiLCJwZW5kaW5nIiwiY2FsY3VsYXRlVGltZUxlZnQiLCJhbGxEYXRlcyIsImdldEVsZW1lbnRzQnlOYW1lIiwiZGF0ZSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIkxlZnREYXRlIiwiTGVmdERhdGVCaWQiLCJsYXN0dGltZSIsImNoZWNrVGltZSIsImN1cnJlbnQiLCJEYXRlIiwiTkZURW5kRGF0ZSIsImRpZmZlcmNuZSIsInNldEludGVydmFsIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJoIiwicyIsInRvU3RyaW5nIiwiZ2V0RGF0ZVRpbWUiLCJoVGV4dCIsIm1UZXh0Iiwic1RleHQiLCJjb252ZXJ0ZWRIIiwiY29udmVydGVkTSIsIkFtUE0iLCJkaXZpZGVkSCIsIkNoZWNrRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsInkiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwibW4iLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdhcCIsInBvc2l0aW9uIiwicmlnaHQiLCJjb2xvciIsIm92ZXJmbG93IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsIndpZHRoIiwiY3Vyc29yIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJmb250U2l6ZSIsImFsaWduU2VsZiIsImJhY2tncm91bmRJbWFnZSIsImJvcmRlclJhZGl1cyIsImZsZXhGbG93IiwicGxhY2VDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwibGlzdEl0ZW0iLCJmbGV4RGlyZWN0aW9uIiwicm93R2FwIiwibWFyZ2luQm90dG9tIiwibGluZUhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=