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
    _LotteryfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!(id && window.location.pathname == "/lottery")) {
                _context8.next = 7;
                break;
              }

              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              base = new Airtable({
                apiKey: 'keyR1Rrcl9O2s9bTs'
              }).base('appgbRCpbkzmdcucO');
              _context8.next = 5;
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

                        case 1:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee);
                }));

                function page(_x, _x2) {
                  return _page.apply(this, arguments);
                }

                return page;
              }());

            case 5:
              _context8.next = 7;
              return base('lottery').select({
                filterByFormula: "({eventid} = '".concat(id, "')"),
                sort: [{
                  field: "startDate",
                  direction: "asc"
                }],
                view: "Grid view"
              }).eachPage( /*#__PURE__*/function () {
                var _page2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(records, fetchNextPage) {
                  var arr;
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          // This function (`page`) will get called for each page of records.
                          arr = [];
                          _context7.next = 3;
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
                          _context7.next = 6;
                          return NFTsfetchContractData();

                        case 6:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee2);
                }));

                function page(_x3, _x4) {
                  return _page2.apply(this, arguments);
                }

                return page;
              }());

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee3);
    }));
    return _LotteryfetchContractData.apply(this, arguments);
  }

  function NFTsfetchContractData() {
    return _NFTsfetchContractData.apply(this, arguments);
  }

  function _NFTsfetchContractData() {
    _NFTsfetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var arr, Airtable, base, currentList, i, eList, test, done, value;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(id && window.location.pathname == "/lottery")) {
                _context9.next = 31;
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
                _context9.next = 31;
                break;
              }

              eList = lotteryNFTDatelist[i - 1];
              currentList = eList;
              arr = [];
              _context9.next = 11;
              return base('nfts').select({
                filterByFormula: "({id} = '".concat(eList.nftid, "')"),
                view: "Grid view"
              });

            case 11:
              test = _context9.sent;
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
              _context9.next = 15;
              return done;

            case 15:
              value = _context9.sent;
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
              _context9.next = 5;
              break;

            case 31:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee4);
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
    _distributeLottery = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var _context10;

      var arr, test, done, value, winnerNo, receiverAddress;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              arr = [];
              _context11.next = 3;
              return base('lotteryBought').select({
                filterByFormula: "({nftid} = '".concat(currentNFTid, "')"),
                view: "Grid view"
              });

            case 3:
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
                      user: record.get('user'),
                      userWallet: record.get('userWallet')
                    });
                  });
                  resolve(arr);
                });
              }).then(function (e) {
                return e;
              });
              _context11.next = 7;
              return done;

            case 7:
              value = _context11.sent;
              lotteryBought = value;
              console.log(value);
              winnerNo = Math.floor(Math.random() * value.length);
              console.log(winnerNo);
              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context10 = "Winner ".concat(value[winnerNo].user, "/")).call(_context10, value[winnerNo].userWallet, "!"));
              receiverAddress = value[winnerNo].userWallet;
              winnerInfo = value[winnerNo];

            case 15:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee5);
    }));
    return _distributeLottery.apply(this, arguments);
  }

  function TransferringNFTtoWinner() {
    return _TransferringNFTtoWinner.apply(this, arguments);
  }

  function _TransferringNFTtoWinner() {
    _TransferringNFTtoWinner = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var receiverAddress, result;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              receiverAddress = winnerInfo.userWallet;
              _context12.next = 3;
              return contract['safeTransferFrom(address,address,uint256)'](senderAddress, receiverAddress, currentTokenid - 1);

            case 3:
              result = _context12.sent;
              window.open("https://explorer.testnet.aurora.dev/tx/".concat(result.hash), "_blank");
              console.log(result);

            case 6:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee6);
    }));
    return _TransferringNFTtoWinner.apply(this, arguments);
  }

  function UpdatingOnAirtable() {
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function _UpdatingOnAirtable() {
    _UpdatingOnAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
      var Airtable, base;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context16.next = 5;
              return NFTslist.forEach( /*#__PURE__*/function () {
                var _ref = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7(NFT) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          if (!(NFT.id = currentNFTid)) {
                            _context13.next = 3;
                            break;
                          }

                          _context13.next = 3;
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
                          return _context13.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x5) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 5:
              _context16.next = 7;
              return lotteryNFTDatelist.forEach( /*#__PURE__*/function () {
                var _ref2 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8(Lottery) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          if (!(Lottery.nftid == currentNFTid)) {
                            _context14.next = 3;
                            break;
                          }

                          _context14.next = 3;
                          return base('lottery').destroy([Lottery.recid], function (err, deletedRecords) {
                            if (err) {
                              console.error(err);
                              return;
                            }

                            console.log('Deleted', deletedRecords.length, 'records');
                          });

                        case 3:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function (_x6) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 7:
              _context16.next = 9;
              return lotteryBought.forEach( /*#__PURE__*/function () {
                var _ref3 = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9(Person) {
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          if (!(Person.nftid == currentNFTid)) {
                            _context15.next = 3;
                            break;
                          }

                          _context15.next = 3;
                          return base('lotteryBought').destroy([Person.recid], function (err, deletedRecords) {
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

                return function (_x7) {
                  return _ref3.apply(this, arguments);
                };
              }());

            case 9:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee10);
    }));
    return _UpdatingOnAirtable.apply(this, arguments);
  }

  function distribute() {
    return _distribute.apply(this, arguments);
  }

  function _distribute() {
    _distribute = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(distributeLottery, {
                pending: "Distributing...",
                error: "Please try again later",
                success: "Distributed successfully!"
              });

            case 2:
              _context17.next = 4;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(TransferringNFTtoWinner, {
                pending: "Transferring NFT to winner",
                error: "Please try again later",
                success: "Transferred successfully!"
              });

            case 4:
              _context17.next = 6;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(UpdatingOnAirtable, {
                pending: "Updating on Airtable",
                error: "Please try again later",
                success: "Updated successfully!"
              });

            case 6:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee11);
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
/******/ 	__webpack_require__.h = function() { return "6187829d27bcb188dc92"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjE5MzJkYTg0NzJkNGMzZTAyYzM2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLE9BQVQsR0FBbUI7QUFDOUIsTUFBTUMsS0FBSyxHQUFHLFdBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBNUI7QUFDQSxNQUFJQyxDQUFKO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLEVBQVQ7O0FBQ0EsU0FBTyxDQUFDRCxDQUFDLEdBQUdMLEtBQUssQ0FBQ08sSUFBTixDQUFXTixHQUFYLENBQUwsTUFBMEIsSUFBakMsRUFBdUM7QUFDbkM7QUFDQSxRQUFJSSxDQUFDLENBQUNHLEtBQUYsS0FBWVIsS0FBSyxDQUFDUyxTQUF0QixFQUFpQztBQUM3QlQsTUFBQUEsS0FBSyxDQUFDUyxTQUFOO0FBQ0g7O0FBQ0RILElBQUFBLEVBQUUsR0FBR0QsQ0FBQyxDQUFDLENBQUQsQ0FBTjtBQUNIOztBQUNELE1BQUlLLGtCQUFrQixHQUFHLEVBQXpCLENBWjhCLENBYTlCOztBQUNBLHFCQUFvQ1osaUVBQVcsQ0FBQyxRQUFELENBQS9DO0FBQUEsTUFBUWEsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLGtCQUE0Q3JCLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT3NCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUFrRHZCLCtDQUFRLENBQUMsQ0FBRCxDQUExRDtBQUFBO0FBQUEsTUFBT3dCLGlCQUFQO0FBQUEsTUFBMEJDLG9CQUExQjs7QUFDQSxtQkFBc0R6QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUQ7QUFBQTtBQUFBLE1BQU8wQixtQkFBUDtBQUFBLE1BQTRCQyxzQkFBNUI7O0FBQ0EsbUJBQWtEM0IsK0NBQVEsQ0FBQyxFQUFELENBQTFEO0FBQUE7QUFBQSxNQUFPNEIsaUJBQVA7QUFBQSxNQUEwQkMsb0JBQTFCOztBQUNBLG1CQUEwQzdCLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBTzhCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLE1BQUlDLGFBQWEsR0FBRyxFQUFwQjs7QUFHQSxNQUFJQyxRQUFRLEdBQUdDLG1CQUFPLENBQUMseURBQUQsQ0FBdEI7O0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQjtBQUNmQyxJQUFBQSxXQUFXLEVBQUUsMEJBREU7QUFFZkMsSUFBQUEsTUFBTSxFQUFFO0FBRk8sR0FBbkI7O0FBSUEsTUFBTUMsSUFBSSxHQUFHSixtRkFBQSxDQUF5QixtQkFBekIsQ0FBYjs7QUFFQSxvQkFBd0NsQywrQ0FBUSxDQUFDLENBQUQsQ0FBaEQ7QUFBQTtBQUFBLE1BQU91QyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG9CQUE0Q3hDLCtDQUFRLENBQUMsQ0FBRCxDQUFwRDtBQUFBO0FBQUEsTUFBT3lDLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG9CQUFvQzFDLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBO0FBQUEsTUFBTzJDLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUEsb0JBQThCNUMsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQUE7QUFBQSxNQUFLNkMsUUFBTDtBQUFBLE1BQWVDLFdBQWY7O0FBRUEsV0FBU0MsU0FBVCxHQUFxQjtBQUNqQixRQUFJQyxPQUFPLEdBQUcsSUFBSUMsSUFBSixFQUFkO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLElBQUlELElBQUosQ0FBU3JCLGlCQUFULENBQWpCO0FBQ0EsUUFBSXVCLFNBQVMsR0FBR0QsVUFBVSxHQUFHRixPQUE3Qjs7QUFDQSxRQUFJRyxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDZixhQUFPLElBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPLEtBQVA7QUFDSDtBQUNKOztBQTdDNkIsV0ErQ2ZDLHdCQS9DZTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5TkErQzlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNRckMsRUFBRSxJQUFJSixNQUFNLENBQUNDLFFBQVAsQ0FBZ0J5QyxRQUFoQixJQUE0QixVQUQxQztBQUFBO0FBQUE7QUFBQTs7QUFHWXBCLGNBQUFBLFFBSFosR0FHdUJDLG1CQUFPLENBQUMseURBQUQsQ0FIOUI7QUFJWUksY0FBQUEsSUFKWixHQUltQixJQUFJTCxRQUFKLENBQWE7QUFBRUksZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBQWIsRUFBOENDLElBQTlDLENBQW1ELG1CQUFuRCxDQUpuQjtBQUFBO0FBQUEscUJBTWFBLElBQUksQ0FBQyxRQUFELENBQUosQ0FBZWdCLE1BQWYsQ0FBc0I7QUFDdkJDLGdCQUFBQSxlQUFlLHFCQUFjeEMsRUFBZCxPQURRO0FBRXZCeUMsZ0JBQUFBLElBQUksRUFBRTtBQUZpQixlQUF0QixFQUdGQyxRQUhFO0FBQUEscU5BR08saUJBQW9CQyxPQUFwQixFQUE2QkMsYUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSO0FBQ0FmLDBCQUFBQSxhQUFhLENBQUNjLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0UsS0FBWCxFQUFELENBQWI7O0FBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSFA7O0FBQUEseUJBR3NCQyxJQUh0QjtBQUFBO0FBQUE7O0FBQUEsdUJBR3NCQSxJQUh0QjtBQUFBLGtCQU5iOztBQUFBO0FBQUE7QUFBQSxxQkFlY3ZCLElBQUksQ0FBQyxTQUFELENBQUosQ0FBZ0JnQixNQUFoQixDQUF1QjtBQUN6QkMsZ0JBQUFBLGVBQWUsMEJBQW1CeEMsRUFBbkIsT0FEVTtBQUV6QitDLGdCQUFBQSxJQUFJLEVBQUUsQ0FBQztBQUFFQyxrQkFBQUEsS0FBSyxFQUFFLFdBQVQ7QUFBc0JDLGtCQUFBQSxTQUFTLEVBQUU7QUFBakMsaUJBQUQsQ0FGbUI7QUFHekJSLGdCQUFBQSxJQUFJLEVBQUU7QUFIbUIsZUFBdkIsRUFJSEMsUUFKRztBQUFBLHNOQUlNLGtCQUFvQkMsT0FBcEIsRUFBNkJDLGFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSO0FBQ0lNLDBCQUFBQSxHQUZJLEdBRUUsRUFGRjtBQUFBO0FBQUEsaUNBR0ZQLE9BQU8sQ0FBQ1EsT0FBUixDQUFnQixVQUFVQyxNQUFWLEVBQWtCO0FBQ3BDRiw0QkFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVM7QUFDTEMsOEJBQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDUCxLQUFQLEVBREY7QUFFTFUsOEJBQUFBLEtBQUssRUFBRUgsTUFBTSxDQUFDSSxHQUFQLENBQVcsT0FBWCxDQUZGO0FBR0xDLDhCQUFBQSxTQUFTLEVBQUVMLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFdBQVgsQ0FITjtBQUlMRSw4QkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNJLEdBQVAsQ0FBVyxTQUFYO0FBSkosNkJBQVQ7QUFNSCwyQkFQSyxDQUhFOztBQUFBO0FBWVJwRCwwQkFBQUEsa0JBQWtCLEdBQUk4QyxHQUF0QjtBQVpRO0FBQUEsaUNBYUZTLHFCQUFxQixFQWJuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKTjs7QUFBQSx5QkFJcUJiLElBSnJCO0FBQUE7QUFBQTs7QUFBQSx1QkFJcUJBLElBSnJCO0FBQUEsa0JBZmQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EvQzhCO0FBQUE7QUFBQTs7QUFBQSxXQW1GZmEscUJBbkZlO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHNOQW1GOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ1EzRCxFQUFFLElBQUlKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnlDLFFBQWhCLElBQTRCLFVBRDFDO0FBQUE7QUFBQTtBQUFBOztBQUVZWSxjQUFBQSxHQUZaLEdBRWtCLEVBRmxCO0FBR1loQyxjQUFBQSxRQUhaLEdBR3VCQyxtQkFBTyxDQUFDLHlEQUFELENBSDlCO0FBSVlJLGNBQUFBLElBSlosR0FJbUIsSUFBSUwsUUFBSixDQUFhO0FBQUVJLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUFiLEVBQThDQyxJQUE5QyxDQUFtRCxtQkFBbkQsQ0FKbkI7QUFNaUJxQyxjQUFBQSxDQU5qQixHQU1xQnhELGtCQUFrQixDQUFDeUQsTUFOeEM7O0FBQUE7QUFBQSxvQkFNZ0RELENBQUMsR0FBRyxDQU5wRDtBQUFBO0FBQUE7QUFBQTs7QUFPZ0JFLGNBQUFBLEtBUGhCLEdBT3dCMUQsa0JBQWtCLENBQUN3RCxDQUFDLEdBQUcsQ0FBTCxDQVAxQztBQVFZRyxjQUFBQSxXQUFXLEdBQUdELEtBQWQ7QUFDSVosY0FBQUEsR0FUaEIsR0FTc0IsRUFUdEI7QUFBQTtBQUFBLHFCQVU2QjNCLElBQUksQ0FBQyxNQUFELENBQUosQ0FBYWdCLE1BQWIsQ0FBb0I7QUFDakNDLGdCQUFBQSxlQUFlLHFCQUFjc0IsS0FBSyxDQUFDUCxLQUFwQixPQURrQjtBQUVqQ2QsZ0JBQUFBLElBQUksRUFBRTtBQUYyQixlQUFwQixDQVY3Qjs7QUFBQTtBQVVnQnVCLGNBQUFBLElBVmhCO0FBY2dCQyxjQUFBQSxJQWRoQixHQWN1QixJQUFJLHVGQUFRLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN4Q0gsZ0JBQUFBLElBQUksQ0FBQ0ksU0FBTCxDQUFlLFVBQUNDLEdBQUQsRUFBTTFCLE9BQU4sRUFBa0I7QUFDN0Isc0JBQUkwQixHQUFKLEVBQVM7QUFDTEMsb0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsMkJBQU9GLE1BQU0sQ0FBQyxFQUFELENBQWI7QUFDSDs7QUFFRHhCLGtCQUFBQSxPQUFPLENBQUNRLE9BQVIsQ0FBZ0IsVUFBVUMsTUFBVixFQUFrQjtBQUM5QkYsb0JBQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTO0FBQ0xDLHNCQUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQ1AsS0FBUCxFQURGO0FBRUw3QyxzQkFBQUEsRUFBRSxFQUFFb0QsTUFBTSxDQUFDSSxHQUFQLENBQVcsSUFBWCxDQUZDO0FBR0xnQixzQkFBQUEsSUFBSSxFQUFFcEIsTUFBTSxDQUFDSSxHQUFQLENBQVcsTUFBWCxDQUhEO0FBSUxpQixzQkFBQUEsV0FBVyxFQUFFckIsTUFBTSxDQUFDSSxHQUFQLENBQVcsYUFBWCxDQUpSO0FBS0xrQixzQkFBQUEsS0FBSyxFQUFFdEIsTUFBTSxDQUFDSSxHQUFQLENBQVcsT0FBWCxDQUxGO0FBTUxtQixzQkFBQUEsS0FBSyxFQUFFdkIsTUFBTSxDQUFDSSxHQUFQLENBQVcsT0FBWCxDQU5GO0FBT0xDLHNCQUFBQSxTQUFTLEVBQUVNLFdBQVcsQ0FBQ04sU0FQbEI7QUFRTEMsc0JBQUFBLE9BQU8sRUFBRUssV0FBVyxDQUFDTCxPQVJoQjtBQVNMa0Isc0JBQUFBLFlBQVksRUFBRXhCLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLGNBQVgsQ0FUVDtBQVVMcUIsc0JBQUFBLFdBQVcsRUFBRXpCLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLGFBQVgsQ0FWUjtBQVdMc0Isc0JBQUFBLE9BQU8sRUFBRTFCLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFNBQVg7QUFYSixxQkFBVDtBQWFILG1CQWREO0FBZUFVLGtCQUFBQSxPQUFPLENBQUNoQixHQUFELENBQVA7QUFDSCxpQkF0QkQ7QUF1QkgsZUF4QlUsRUF3QlI2QixJQXhCUSxDQXdCSCxVQUFBQyxDQUFDLEVBQUk7QUFBRSx1QkFBT0EsQ0FBUDtBQUFVLGVBeEJkLENBZHZCO0FBQUE7QUFBQSxxQkF1QzhCZixJQXZDOUI7O0FBQUE7QUF1Q2dCZ0IsY0FBQUEsS0F2Q2hCO0FBd0NZbkQsY0FBQUEsUUFBUSxDQUFDdUIsSUFBVCxDQUFjNEIsS0FBSyxDQUFDLENBQUQsQ0FBbkI7QUFDQVgsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl6QyxRQUFaO0FBQ0F0QixjQUFBQSxpQkFBaUIsQ0FBQzBDLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT3NCLElBQVIsQ0FBakI7QUFDQTlELGNBQUFBLG9CQUFvQixDQUFDd0MsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPMEIsWUFBUixDQUFwQjtBQUNBOUQsY0FBQUEsb0JBQW9CLENBQUNvQyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9RLE9BQVIsQ0FBcEI7QUFDQWpDLGNBQUFBLGVBQWUsQ0FBQ3lCLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT2xELEVBQVIsQ0FBZjtBQUNBWSxjQUFBQSxzQkFBc0IsQ0FBQ3NDLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT08sU0FBUixDQUF0QjtBQUNBekMsY0FBQUEsZ0JBQWdCLENBQUNrQyxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU8yQixXQUFSLENBQWhCO0FBQ0FsRCxjQUFBQSxpQkFBaUIsQ0FBQ3VCLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBTzRCLE9BQVIsQ0FBakI7QUFDQUksY0FBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DQyxLQUFuQyxDQUF5Q0MsT0FBekMsR0FBbUQsTUFBbkQ7QUFDQUgsY0FBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDQyxLQUF2QyxDQUE2Q0MsT0FBN0MsR0FBdUQsTUFBdkQ7QUFDQUgsY0FBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixFQUE4Q0MsS0FBOUMsQ0FBb0RDLE9BQXBELEdBQThELEVBQTlEOztBQW5EWjtBQU11RHpCLGNBQUFBLENBQUMsRUFOeEQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkY4QjtBQUFBO0FBQUE7O0FBZ0o5QjFFLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNabUQsSUFBQUEsd0JBQXdCO0FBQzNCLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFLQSxNQUFJaUQsVUFBSjs7QUFySjhCLFdBc0pmQyxpQkF0SmU7QUFBQTtBQUFBOztBQUFBO0FBQUEsa05Bc0o5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUXJDLGNBQUFBLEdBRFIsR0FDYyxFQURkO0FBQUE7QUFBQSxxQkFFcUIzQixJQUFJLENBQUMsZUFBRCxDQUFKLENBQXNCZ0IsTUFBdEIsQ0FBNkI7QUFDMUNDLGdCQUFBQSxlQUFlLHdCQUFpQmhCLFlBQWpCLE9BRDJCO0FBRTFDaUIsZ0JBQUFBLElBQUksRUFBRTtBQUZvQyxlQUE3QixDQUZyQjs7QUFBQTtBQUVRdUIsY0FBQUEsSUFGUjtBQU1RQyxjQUFBQSxJQU5SLEdBTWUsSUFBSSx1RkFBUSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDeENILGdCQUFBQSxJQUFJLENBQUNJLFNBQUwsQ0FBZSxVQUFDQyxHQUFELEVBQU0xQixPQUFOLEVBQWtCO0FBQzdCLHNCQUFJMEIsR0FBSixFQUFTO0FBQ0xDLG9CQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLDJCQUFPRixNQUFNLENBQUMsRUFBRCxDQUFiO0FBQ0g7O0FBQ0R4QixrQkFBQUEsT0FBTyxDQUFDUSxPQUFSLENBQWdCLFVBQVVDLE1BQVYsRUFBa0I7QUFDOUJGLG9CQUFBQSxHQUFHLENBQUNHLElBQUosQ0FBUztBQUNMQyxzQkFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNQLEtBQVAsRUFERjtBQUVMN0Msc0JBQUFBLEVBQUUsRUFBRW9ELE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLElBQVgsQ0FGQztBQUdMZ0Msc0JBQUFBLElBQUksRUFBRXBDLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLE1BQVgsQ0FIRDtBQUlMaUMsc0JBQUFBLFVBQVUsRUFBRXJDLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFlBQVg7QUFKUCxxQkFBVDtBQU1ILG1CQVBEO0FBUUFVLGtCQUFBQSxPQUFPLENBQUNoQixHQUFELENBQVA7QUFDSCxpQkFkRDtBQWVILGVBaEJVLEVBZ0JSNkIsSUFoQlEsQ0FnQkgsVUFBQUMsQ0FBQyxFQUFJO0FBQUUsdUJBQU9BLENBQVA7QUFBVSxlQWhCZCxDQU5mO0FBQUE7QUFBQSxxQkF1QnNCZixJQXZCdEI7O0FBQUE7QUF1QlFnQixjQUFBQSxLQXZCUjtBQXdCSWhFLGNBQUFBLGFBQWEsR0FBR2dFLEtBQWhCO0FBQ0FYLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxLQUFaO0FBQ0lTLGNBQUFBLFFBMUJSLEdBMEJtQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQlosS0FBSyxDQUFDcEIsTUFBakMsQ0ExQm5CO0FBMkJJUyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW1CLFFBQVo7QUFDQXJHLGNBQUFBLHlEQUFBLDRIQUF3QjRGLEtBQUssQ0FBQ1MsUUFBRCxDQUFMLENBQWdCRixJQUF4Qyx5QkFBZ0RQLEtBQUssQ0FBQ1MsUUFBRCxDQUFMLENBQWdCRCxVQUFoRTtBQUNJTSxjQUFBQSxlQTdCUixHQTZCMEJkLEtBQUssQ0FBQ1MsUUFBRCxDQUFMLENBQWdCRCxVQTdCMUM7QUE4QklILGNBQUFBLFVBQVUsR0FBR0wsS0FBSyxDQUFDUyxRQUFELENBQWxCOztBQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXRKOEI7QUFBQTtBQUFBOztBQUFBLFdBdUxmTSx1QkF2TGU7QUFBQTtBQUFBOztBQUFBO0FBQUEsd05BdUw5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUUQsY0FBQUEsZUFGUixHQUUwQlQsVUFBVSxDQUFDRyxVQUZyQztBQUFBO0FBQUEscUJBR3lCcEYsUUFBUSxDQUN6QiwyQ0FEeUIsQ0FBUixDQUVuQlUsYUFGbUIsRUFFSmdGLGVBRkksRUFFYXJFLGNBQWMsR0FBRyxDQUY5QixDQUh6Qjs7QUFBQTtBQUdVdUUsY0FBQUEsTUFIVjtBQU1JckcsY0FBQUEsTUFBTSxDQUFDc0csSUFBUCxrREFBc0RELE1BQU0sQ0FBQ0UsSUFBN0QsR0FBcUUsUUFBckU7QUFFQTdCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMEIsTUFBWjs7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXZMOEI7QUFBQTtBQUFBOztBQUFBLFdBa01mRyxrQkFsTWU7QUFBQTtBQUFBOztBQUFBO0FBQUEsbU5Ba005QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUWxGLGNBQUFBLFFBRlIsR0FFbUJDLG1CQUFPLENBQUMseURBQUQsQ0FGMUI7QUFHSUQsY0FBQUEsUUFBUSxDQUFDRSxTQUFULENBQW1CO0FBQ2ZDLGdCQUFBQSxXQUFXLEVBQUUsMEJBREU7QUFFZkMsZ0JBQUFBLE1BQU0sRUFBRTtBQUZPLGVBQW5CO0FBSU1DLGNBQUFBLElBUFYsR0FPaUJKLG1GQUFBLENBQXlCLG1CQUF6QixDQVBqQjtBQUFBO0FBQUEscUJBVVVXLFFBQVEsQ0FBQ3FCLE9BQVQ7QUFBQSxvTkFBaUIsa0JBQU9rRCxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDZkEsR0FBRyxDQUFDckcsRUFBSixHQUFTd0IsWUFETTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlDQUVURCxJQUFJLENBQUMsTUFBRCxDQUFKLENBQWErRSxPQUFiLENBQXFCLENBQUNELEdBQUcsQ0FBQy9DLEtBQUwsQ0FBckIsRUFBa0MsVUFBVWUsR0FBVixFQUFla0MsY0FBZixFQUErQjtBQUNuRSxnQ0FBSWxDLEdBQUosRUFBUztBQUNMQyw4QkFBQUEsT0FBTyxDQUFDa0MsS0FBUixDQUFjbkMsR0FBZDtBQUNBO0FBQ0g7O0FBQ0RDLDRCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCZ0MsY0FBYyxDQUFDMUMsTUFBdEMsRUFBOEMsU0FBOUM7QUFDQWpFLDRCQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0I0RyxJQUFoQixDQUFxQixXQUFyQjtBQUNILDJCQVBLLENBRlM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWpCOztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZWOztBQUFBO0FBQUE7QUFBQSxxQkF5QlVyRyxrQkFBa0IsQ0FBQytDLE9BQW5CO0FBQUEscU5BQTJCLGtCQUFPMUQsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQ3pCQSxPQUFPLENBQUM4RCxLQUFSLElBQWlCL0IsWUFEUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlDQUVuQkQsSUFBSSxDQUFDLFNBQUQsQ0FBSixDQUFnQitFLE9BQWhCLENBQXdCLENBQUM3RyxPQUFPLENBQUM2RCxLQUFULENBQXhCLEVBQXlDLFVBQVVlLEdBQVYsRUFBZWtDLGNBQWYsRUFBK0I7QUFDMUUsZ0NBQUlsQyxHQUFKLEVBQVM7QUFDTEMsOEJBQUFBLE9BQU8sQ0FBQ2tDLEtBQVIsQ0FBY25DLEdBQWQ7QUFDQTtBQUNIOztBQUNEQyw0QkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QmdDLGNBQWMsQ0FBQzFDLE1BQXRDLEVBQThDLFNBQTlDO0FBQ0gsMkJBTkssQ0FGbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTNCOztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXpCVjs7QUFBQTtBQUFBO0FBQUEscUJBcUNVNUMsYUFBYSxDQUFDa0MsT0FBZDtBQUFBLHFOQUFzQixrQkFBT3VELE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUNwQkEsTUFBTSxDQUFDbkQsS0FBUCxJQUFnQi9CLFlBREk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxpQ0FFZEQsSUFBSSxDQUFDLGVBQUQsQ0FBSixDQUFzQitFLE9BQXRCLENBQThCLENBQUNJLE1BQU0sQ0FBQ3BELEtBQVIsQ0FBOUIsRUFBOEMsVUFBVWUsR0FBVixFQUFla0MsY0FBZixFQUErQjtBQUMvRSxnQ0FBSWxDLEdBQUosRUFBUztBQUNMQyw4QkFBQUEsT0FBTyxDQUFDa0MsS0FBUixDQUFjbkMsR0FBZDtBQUNBO0FBQ0g7O0FBQ0RDLDRCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCZ0MsY0FBYyxDQUFDMUMsTUFBdEMsRUFBOEMsU0FBOUM7QUFDSCwyQkFOSyxDQUZjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQ1Y7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FsTThCO0FBQUE7QUFBQTs7QUFBQSxXQXNQZjhDLFVBdFBlO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJNQXNQOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1V0SCx5REFBQSxDQUFja0csaUJBQWQsRUFBaUM7QUFDbkNzQixnQkFBQUEsT0FBTyxFQUFFLGlCQUQwQjtBQUVuQ0wsZ0JBQUFBLEtBQUssRUFBRSx3QkFGNEI7QUFHbkNWLGdCQUFBQSxPQUFPLEVBQUU7QUFIMEIsZUFBakMsQ0FEVjs7QUFBQTtBQUFBO0FBQUEscUJBTVV6Ryx5REFBQSxDQUFjMkcsdUJBQWQsRUFBdUM7QUFDekNhLGdCQUFBQSxPQUFPLEVBQUUsNEJBRGdDO0FBRXpDTCxnQkFBQUEsS0FBSyxFQUFFLHdCQUZrQztBQUd6Q1YsZ0JBQUFBLE9BQU8sRUFBRTtBQUhnQyxlQUF2QyxDQU5WOztBQUFBO0FBQUE7QUFBQSxxQkFXVXpHLHlEQUFBLENBQWMrRyxrQkFBZCxFQUFrQztBQUNwQ1MsZ0JBQUFBLE9BQU8sRUFBRSxzQkFEMkI7QUFFcENMLGdCQUFBQSxLQUFLLEVBQUUsd0JBRjZCO0FBR3BDVixnQkFBQUEsT0FBTyxFQUFFO0FBSDJCLGVBQWxDLENBWFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F0UDhCO0FBQUE7QUFBQTs7QUEwUTlCLFdBQVNnQixpQkFBVCxHQUE2QjtBQUN6QixRQUFJO0FBQ0EsVUFBSUMsUUFBUSxHQUFHN0IsUUFBUSxDQUFDOEIsaUJBQVQsQ0FBMkIscUJBQTNCLENBQWY7O0FBQ0EsV0FBSyxJQUFJcEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21ELFFBQVEsQ0FBQ2xELE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDLFlBQUlxRCxJQUFJLEdBQUlGLFFBQVEsQ0FBQ25ELENBQUQsQ0FBVCxDQUFjc0QsWUFBZCxDQUEyQixNQUEzQixDQUFYO0FBQ0FILFFBQUFBLFFBQVEsQ0FBQ25ELENBQUQsQ0FBUixDQUFZdUQsU0FBWixHQUF3QkMsUUFBUSxDQUFDSCxJQUFELENBQWhDO0FBQ0g7O0FBQ0QsVUFBSUYsUUFBUSxHQUFHN0IsUUFBUSxDQUFDOEIsaUJBQVQsQ0FBMkIsTUFBM0IsQ0FBZjs7QUFDQSxXQUFLLElBQUlwRCxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHbUQsUUFBUSxDQUFDbEQsTUFBN0IsRUFBcUNELEVBQUMsRUFBdEMsRUFBMEM7QUFDdEMsWUFBSXFELElBQUksR0FBSUYsUUFBUSxDQUFDbkQsRUFBRCxDQUFULENBQWNzRCxZQUFkLENBQTJCLE1BQTNCLENBQVg7O0FBQ0FILFFBQUFBLFFBQVEsQ0FBQ25ELEVBQUQsQ0FBUixDQUFZdUQsU0FBWixHQUF3QkUsV0FBVyxDQUFDSixJQUFELENBQW5DO0FBQ0g7QUFDSixLQVhELENBV0UsT0FBT1QsS0FBUCxFQUFjLENBQUc7QUFDdEI7O0FBQ0RjLEVBQUFBLFdBQVcsQ0FBQyxZQUFZO0FBQ3BCLFFBQUkxSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0J5QyxRQUFoQixJQUE0QixVQUFoQyxFQUE0QztBQUN4QyxVQUFJTixTQUFTLElBQUksS0FBakIsRUFBd0I7QUFDcEI4RSxRQUFBQSxpQkFBaUI7QUFDcEIsT0FGRCxNQUVPO0FBQ0g1QixRQUFBQSxRQUFRLENBQUM4QixpQkFBVCxDQUEyQixxQkFBM0IsRUFBa0QsQ0FBbEQsRUFBcUQ1QixLQUFyRCxDQUEyREMsT0FBM0QsR0FBcUUsTUFBckU7QUFDSDtBQUVKO0FBRUosR0FWVSxFQVVSLElBVlEsQ0FBWDs7QUFXQSxXQUFTK0IsUUFBVCxDQUFrQkcsUUFBbEIsRUFBNEI7QUFDeEIsUUFBSUMsQ0FBQyxHQUFHLElBQUl0RixJQUFKLENBQVNxRixRQUFULEVBQW1CRSxPQUFuQixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLElBQUl4RixJQUFKLEdBQVd1RixPQUFYLEVBQVI7QUFDQSxRQUFJRSxDQUFDLEdBQUdILENBQUMsR0FBR0UsQ0FBWjtBQUNBLFFBQUlFLEVBQUUsR0FBR2pDLElBQUksQ0FBQ0MsS0FBTCxDQUFXK0IsQ0FBQyxJQUFJLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBckIsQ0FBWixDQUFUO0FBQ0EsUUFBSUUsQ0FBQyxHQUFHbEMsSUFBSSxDQUFDQyxLQUFMLENBQVkrQixDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFGLElBQStCLE9BQU8sRUFBUCxHQUFZLEVBQTNDLENBQVgsQ0FBUjtBQUNBLFFBQUk1SCxDQUFDLEdBQUc0RixJQUFJLENBQUNDLEtBQUwsQ0FBWStCLENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFGLElBQTBCLE9BQU8sRUFBakMsQ0FBWCxDQUFSO0FBQ0EsUUFBSUcsQ0FBQyxHQUFHbkMsSUFBSSxDQUFDQyxLQUFMLENBQVkrQixDQUFDLElBQUksT0FBTyxFQUFYLENBQUYsR0FBb0IsSUFBL0IsQ0FBUjtBQUNBLFdBQVFDLEVBQUUsQ0FBQ0csUUFBSCxLQUFnQixJQUFoQixHQUF1QkYsQ0FBQyxDQUFDRSxRQUFGLEVBQXZCLEdBQXNDLElBQXRDLEdBQTZDaEksQ0FBQyxDQUFDZ0ksUUFBRixFQUE3QyxHQUE0RCxJQUE1RCxHQUFtRUQsQ0FBQyxDQUFDQyxRQUFGLEVBQW5FLEdBQWtGLEdBQTFGO0FBQ0g7O0FBQ0QsV0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEJDLEtBQTVCLEVBQW1DQyxLQUFuQyxFQUEwQztBQUFBOztBQUN0QyxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxRQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxRQUFJTCxLQUFLLEdBQUcsRUFBWixFQUFnQjtBQUNaSyxNQUFBQSxJQUFJLEdBQUcsSUFBUDs7QUFDQSxVQUFJTCxLQUFLLEdBQUcsRUFBWixFQUFnQjtBQUNaRyxRQUFBQSxVQUFVLGNBQU9ILEtBQVAsQ0FBVjtBQUNILE9BRkQsTUFFTztBQUNIRyxRQUFBQSxVQUFVLGFBQU1ILEtBQU4sQ0FBVjtBQUNIO0FBQ0osS0FQRCxNQU9PO0FBQ0gsVUFBSU0sUUFBUSxHQUFHTixLQUFLLEdBQUcsQ0FBdkI7QUFDQUssTUFBQUEsSUFBSSxHQUFHLElBQVA7O0FBQ0EsVUFBSUMsUUFBUSxHQUFHLEVBQWYsRUFBbUI7QUFDZkgsUUFBQUEsVUFBVSxjQUFPRyxRQUFQLENBQVY7QUFDSCxPQUZELE1BRU87QUFDSEgsUUFBQUEsVUFBVSxhQUFNRyxRQUFOLENBQVY7QUFDSDtBQUNKOztBQUNELFFBQUlMLEtBQUssR0FBRyxFQUFaLEVBQWdCO0FBQ1pHLE1BQUFBLFVBQVUsY0FBT0gsS0FBUCxDQUFWO0FBQ0gsS0FGRCxNQUVPO0FBQ0hHLE1BQUFBLFVBQVUsYUFBTUgsS0FBTixDQUFWO0FBQ0g7O0FBRUQsc09BQVVFLFVBQVYsd0JBQXdCQyxVQUF4Qix1QkFBc0NDLElBQXRDO0FBQ0g7O0FBQ0QsV0FBU0UsU0FBVCxDQUFtQmpCLFFBQW5CLEVBQTZCO0FBQUE7O0FBQ3pCLFFBQUlJLENBQUMsR0FBRyxJQUFJekYsSUFBSixDQUFTcUYsUUFBVCxFQUFtQmtCLE9BQW5CLEVBQVI7QUFDQSxRQUFJMUksQ0FBQyxHQUFHLElBQUltQyxJQUFKLENBQVNxRixRQUFULEVBQW1CbUIsUUFBbkIsRUFBUjtBQUNBLFFBQUlDLENBQUMsR0FBRyxJQUFJekcsSUFBSixDQUFTcUYsUUFBVCxFQUFtQnFCLFdBQW5CLEVBQVI7QUFDQSxRQUFJZixDQUFDLEdBQUcsSUFBSTNGLElBQUosQ0FBU3FGLFFBQVQsRUFBbUJzQixRQUFuQixFQUFSO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLElBQUk1RyxJQUFKLENBQVNxRixRQUFULEVBQW1Cd0IsVUFBbkIsRUFBVDtBQUNBLFFBQUlqQixDQUFDLEdBQUcsSUFBSTVGLElBQUosQ0FBU3FGLFFBQVQsRUFBbUJ5QixVQUFuQixFQUFSO0FBRUEsZ1ZBQVdyQixDQUFDLENBQUNJLFFBQUYsRUFBWCx3QkFBMkJoSSxDQUFDLENBQUNnSSxRQUFGLEVBQTNCLHdCQUEyQ1ksQ0FBQyxDQUFDWixRQUFGLEVBQTNDLHdCQUEyREMsV0FBVyxDQUFDSCxDQUFELEVBQUlpQixFQUFKLEVBQVFoQixDQUFSLENBQXRFO0FBQ0g7O0FBQ0Qsc0JBQ0ksaUhBQ0ksaURBQUMsc0RBQUQ7QUFBUyxNQUFFLCtCQUF3QmxHLFVBQXhCO0FBQVgsa0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CNEQsTUFBQUEsR0FBRyxFQUFFLE1BQXhCO0FBQWdDQyxNQUFBQSxRQUFRLEVBQUUsVUFBMUM7QUFBc0RDLE1BQUFBLEtBQUssRUFBRTtBQUE3RDtBQUFaLGtCQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsU0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxRQUFRLEVBQUUsUUFBNUI7QUFBc0NDLE1BQUFBLFVBQVUsRUFBRSxrQkFBbEQ7QUFBc0VDLE1BQUFBLFNBQVMsRUFBRSxRQUFqRjtBQUEyRkMsTUFBQUEsS0FBSyxFQUFFLE9BQWxHO0FBQTJHQyxNQUFBQSxNQUFNLEVBQUUsU0FBbkg7QUFBOEhDLE1BQUFBLE1BQU0sRUFBRSxNQUF0STtBQUE4SUMsTUFBQUEsTUFBTSxFQUFFLEdBQXRKO0FBQTJKQyxNQUFBQSxPQUFPLEVBQUU7QUFBcEs7QUFBN0Isa0JBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUEyQixTQUFLLEVBQUU7QUFBRUYsTUFBQUEsTUFBTSxFQUFFLE1BQVY7QUFBa0JHLE1BQUFBLFVBQVUsRUFBRSxNQUE5QjtBQUFzQ0MsTUFBQUEsUUFBUSxFQUFFO0FBQWhEO0FBQWxDLHFCQURKLENBREosQ0FESixDQURKLGVBUUk7QUFDSSxTQUFLLEVBQUU7QUFDSE4sTUFBQUEsS0FBSyxFQUFFLE9BREo7QUFFSEUsTUFBQUEsTUFBTSxFQUFFLE9BRkw7QUFHSEssTUFBQUEsU0FBUyxFQUFFLFFBSFI7QUFJSEMsTUFBQUEsZUFBZSxFQUFFLHlEQUpkO0FBS0hDLE1BQUFBLFlBQVksRUFBRSxLQUxYO0FBTUhaLE1BQUFBLFFBQVEsRUFBRSxRQU5QO0FBT0hNLE1BQUFBLE1BQU0sRUFBRSxFQVBMO0FBUUhPLE1BQUFBLFFBQVEsRUFBRSxZQVJQO0FBU0hDLE1BQUFBLFlBQVksRUFBRSxRQVRYO0FBVUhDLE1BQUFBLFVBQVUsRUFBRTtBQVZUO0FBRFgsa0JBY0k7QUFBSyxTQUFLLEVBQUU7QUFBRVosTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJFLE1BQUFBLE1BQU0sRUFBRSxPQUF6QjtBQUFrQ0UsTUFBQUEsT0FBTyxFQUFFO0FBQTNDO0FBQVosa0JBQ0k7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFzQixTQUFLLEVBQUU7QUFBRUosTUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0UsTUFBQUEsTUFBTSxFQUFFLEdBQXRCO0FBQTJCckUsTUFBQUEsT0FBTyxFQUFFLE1BQXBDO0FBQTRDNkQsTUFBQUEsUUFBUSxFQUFFLFVBQXREO0FBQWtFbUIsTUFBQUEsWUFBWSxFQUFFLFFBQWhGO0FBQTBGQyxNQUFBQSxjQUFjLEVBQUUsUUFBMUc7QUFBb0hGLE1BQUFBLFVBQVUsRUFBRTtBQUFoSTtBQUE3QixrQkFDSTtBQUFJLFNBQUssRUFBRTtBQUFFbEIsTUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFBWCxrQkFESixDQURKLGVBTUk7QUFBSyxNQUFFLEVBQUMsb0JBQVI7QUFBNkIsU0FBSyxFQUFFO0FBQUU3RCxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFwQyxrQkFDSTtBQUFJLFNBQUssRUFBRTtBQUFFa0UsTUFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJILE1BQUFBLEtBQUssRUFBRSxVQUE5QjtBQUEwQ21CLE1BQUFBLFNBQVMsRUFBRTtBQUFyRDtBQUFYLEtBQ0toSyxjQURMLENBREosZUFJSTtBQUNJLFNBQUssRUFBRTtBQUNIZ0osTUFBQUEsU0FBUyxFQUFFLFFBRFI7QUFFSEgsTUFBQUEsS0FBSyxFQUFFLE9BRko7QUFHSG1CLE1BQUFBLFNBQVMsRUFBRSxFQUhSO0FBSUhULE1BQUFBLFFBQVEsRUFBRTtBQUpQO0FBRFgsMEJBSkosZUFjSTtBQUNJLFNBQUssRUFBRTtBQUNIekUsTUFBQUEsT0FBTyxFQUFFLE1BRE47QUFFSGdGLE1BQUFBLFlBQVksRUFBRSxRQUZYO0FBR0hDLE1BQUFBLGNBQWMsRUFBRTtBQUhiO0FBRFgsa0JBT0k7QUFDSSxTQUFLLEVBQUU7QUFDSGYsTUFBQUEsU0FBUyxFQUFFLFFBRFI7QUFFSFMsTUFBQUEsZUFBZSxFQUFFLDBDQUZkO0FBR0haLE1BQUFBLEtBQUssRUFBRSxPQUhKO0FBSUhtQixNQUFBQSxTQUFTLEVBQUUsRUFKUjtBQUtIZixNQUFBQSxLQUFLLEVBQUUsS0FMSjtBQU1ITSxNQUFBQSxRQUFRLEVBQUUsRUFOUDtBQU9ISixNQUFBQSxNQUFNLEVBQUUsS0FQTDtBQVFITyxNQUFBQSxZQUFZLEVBQUUsS0FSWDtBQVNITyxNQUFBQSxNQUFNLEVBQUU7QUFUTDtBQURYLEtBYUsvSixpQkFiTCxDQVBKLENBZEosZUFxQ0k7QUFBSSxRQUFJLEVBQUMscUJBQVQ7QUFBK0IsU0FBSyxFQUFFO0FBQUU4SSxNQUFBQSxTQUFTLEVBQUUsUUFBYjtBQUF1QmdCLE1BQUFBLFNBQVMsRUFBRTtBQUFsQyxLQUF0QztBQUFrRixRQUFJLEVBQUUxSjtBQUF4RixLQUE0R3VHLFFBQVEsQ0FBQ3ZHLGlCQUFELENBQXBILENBckNKLGVBc0NJO0FBQUssV0FBTyxFQUFFOEYsVUFBZDtBQUEwQixNQUFFLEVBQUMsWUFBN0I7QUFBMEMsU0FBSyxFQUFFO0FBQUU2QyxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQm5FLE1BQUFBLE9BQU8sRUFBRSxNQUExQjtBQUFrQytFLE1BQUFBLFVBQVUsRUFBRSxRQUE5QztBQUF3REMsTUFBQUEsWUFBWSxFQUFFLFFBQXRFO0FBQWdGQyxNQUFBQSxjQUFjLEVBQUUsUUFBaEc7QUFBMEdDLE1BQUFBLFNBQVMsRUFBRTtBQUFySDtBQUFqRCxrQkFDSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyxpQkFBaEM7QUFBa0QsU0FBSyxFQUFFO0FBQUVmLE1BQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNTLE1BQUFBLFlBQVksRUFBRTtBQUE1QjtBQUF6RCxrQkFESixDQXRDSixDQU5KLENBZEosQ0FSSixlQStFSTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQWtCLGFBQVMsRUFBQztBQUE1QixrQkFDSSwwRUFESixDQS9FSixFQWtGSywrRkFBQW5JLFFBQVEsTUFBUixDQUFBQSxRQUFRLEVBQVMsVUFBQzJJLFFBQUQ7QUFBQSx3QkFDZDtBQUFLLFNBQUcsRUFBRUEsUUFBUSxDQUFDekssRUFBbkI7QUFBdUIsZUFBUyxFQUFDLCtCQUFqQztBQUFpRSxXQUFLLEVBQUU7QUFBRWdLLFFBQUFBLGVBQWUsRUFBRSwyQ0FBbkI7QUFBZ0VPLFFBQUFBLFNBQVMsRUFBRTtBQUEzRTtBQUF4RSxvQkFDSTtBQUFLLFNBQUcsRUFBRUUsUUFBUSxDQUFDekssRUFBbkI7QUFBdUIsV0FBSyxFQUFFO0FBQUV3SixRQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQm5FLFFBQUFBLE9BQU8sRUFBRTtBQUExQjtBQUE5QixvQkFDSTtBQUNJLFNBQUcsRUFBRW9GLFFBQVEsQ0FBQzlGLEtBRGxCO0FBRUksZUFBUyxFQUFDLGlCQUZkO0FBR0ksV0FBSyxFQUFFO0FBQUUyRSxRQUFBQSxVQUFVLEVBQUU7QUFBZDtBQUhYLE1BREosZUFNSTtBQUFLLFdBQUssRUFBRTtBQUFFRSxRQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQm5FLFFBQUFBLE9BQU8sRUFBRSxNQUExQjtBQUFrQzZELFFBQUFBLFFBQVEsRUFBRSxVQUE1QztBQUF3RHdCLFFBQUFBLGFBQWEsRUFBRSxLQUF2RTtBQUE4RUosUUFBQUEsY0FBYyxFQUFFLFlBQTlGO0FBQTRHRCxRQUFBQSxZQUFZLEVBQUU7QUFBMUg7QUFBWixvQkFDSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFrQyxXQUFLLEVBQUU7QUFBRU0sUUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFBekMsb0JBQ0k7QUFBSSxXQUFLLEVBQUU7QUFBRWIsUUFBQUEsUUFBUSxFQUFFLEtBQVo7QUFBbUJWLFFBQUFBLEtBQUssRUFBRTtBQUExQjtBQUFYLE9BQWlEcUIsUUFBUSxDQUFDakcsSUFBMUQsQ0FESixlQUVJO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0k7QUFBSSxXQUFLLEVBQUU7QUFBRTRFLFFBQUFBLEtBQUssRUFBRSxrQkFBVDtBQUE2QlUsUUFBQUEsUUFBUSxFQUFFO0FBQXZDO0FBQVgsT0FDS1csUUFBUSxDQUFDaEcsV0FEZCxDQURKLENBRkosZUFPSTtBQUFJLFdBQUssRUFBRTtBQUFFMkUsUUFBQUEsS0FBSyxFQUFFLGtCQUFUO0FBQTZCVSxRQUFBQSxRQUFRLEVBQUU7QUFBdkM7QUFBWCx1QkFDaUJ0QixTQUFTLENBQUNpQyxRQUFRLENBQUNoSCxTQUFWLENBRDFCLENBUEosZUFVSTtBQUFJLFdBQUssRUFBRTtBQUFFMkYsUUFBQUEsS0FBSyxFQUFFLGtCQUFUO0FBQTZCVSxRQUFBQSxRQUFRLEVBQUU7QUFBdkM7QUFBWCx1QkFDaUJ0QixTQUFTLENBQUNpQyxRQUFRLENBQUMvRyxPQUFWLENBRDFCLENBVkosQ0FESixlQWdCSTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUF3QyxXQUFLLEVBQUU7QUFBRWdHLFFBQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCRixRQUFBQSxLQUFLLEVBQUUsT0FBekI7QUFBa0NHLFFBQUFBLE1BQU0sRUFBRTtBQUExQztBQUEvQyxvQkFDSTtBQUFLLFdBQUssRUFBRTtBQUFFSCxRQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQm5FLFFBQUFBLE9BQU8sRUFBRSxNQUExQjtBQUFrQ2tFLFFBQUFBLFNBQVMsRUFBRSxPQUE3QztBQUFzRHFCLFFBQUFBLFlBQVksRUFBRSxNQUFwRTtBQUE0RVAsUUFBQUEsWUFBWSxFQUFFLFFBQTFGO0FBQW9HQyxRQUFBQSxjQUFjLEVBQUUsUUFBcEg7QUFBOEhGLFFBQUFBLFVBQVUsRUFBRTtBQUExSTtBQUFaLG9CQUNJO0FBQ0ksV0FBSyxFQUFFO0FBQUVaLFFBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCYSxRQUFBQSxZQUFZLEVBQUUsUUFBaEM7QUFBMENELFFBQUFBLFVBQVUsRUFBRSxRQUF0RDtBQUFnRUgsUUFBQUEsWUFBWSxFQUFFLEtBQTlFO0FBQXFGWixRQUFBQSxRQUFRLEVBQUU7QUFBL0Y7QUFEWCxvQkFFSTtBQUNJLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxVQUFVLEVBQUUsaUJBQWQ7QUFBaUNFLFFBQUFBLEtBQUssRUFBRSxNQUF4QztBQUFnREUsUUFBQUEsTUFBTSxFQUFFLE1BQXhEO0FBQWdFTixRQUFBQSxLQUFLLEVBQUU7QUFBdkU7QUFEWCxvQkFFSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQXlCLFdBQUssRUFBRTtBQUFFVSxRQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQkosUUFBQUEsTUFBTSxFQUFFLE1BQXhCO0FBQWdDSCxRQUFBQSxTQUFTLEVBQUUsUUFBM0M7QUFBcURzQixRQUFBQSxVQUFVLEVBQUUsS0FBakU7QUFBd0VaLFFBQUFBLFlBQVksRUFBRTtBQUF0RjtBQUFoQyxPQUNNekksWUFBWSxJQUFJaUosUUFBUSxDQUFDekssRUFBMUIsZ0JBQWlDLDJHQUFNd0ksU0FBUyxDQUFDaUMsUUFBUSxDQUFDaEgsU0FBVixDQUFmLENBQWpDLGdCQUE2RSxrSEFEbEYsQ0FGSixDQUZKLENBREosQ0FESixDQWhCSixDQU5KLENBREosQ0FEYztBQUFBLEdBQVQsQ0FsRmIsQ0FESjtBQXVJSDs7Ozs7Ozs7VUNuZUQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9wYWdlcy9sb3R0ZXJ5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG90dGVyeSgpIHtcbiAgICBjb25zdCByZWdleCA9IC9cXFsoLiopXFxdL2c7XG4gICAgY29uc3Qgc3RyID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBsZXQgbTtcbiAgICBsZXQgaWQgPSBcIlwiO1xuICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoc3RyKSkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gYXZvaWQgaW5maW5pdGUgbG9vcHMgd2l0aCB6ZXJvLXdpZHRoIG1hdGNoZXNcbiAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xuICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWQgPSBtWzFdO1xuICAgIH1cbiAgICBsZXQgbG90dGVyeU5GVERhdGVsaXN0ID0gW107XG4gICAgLy8gbGV0IGN1cnJlbnRORlRuYW1lID0gXCJcIjtcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG4gICAgY29uc3QgW2N1cnJlbnRORlRuYW1lLCBzZXRjdXJyZW50TkZUbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3RvdGFsUGFydGljaXBhdGVkLCBzZXR0b3RhbFBhcnRpY2lwYXRlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbY3VycmVudE5GVHN0YXJ0RGF0ZSwgc2V0Y3VycmVudE5GVHN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2N1cnJlbnRORlRlbmREYXRlLCBzZXRjdXJyZW50TkZUZW5kRGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbmRlckFkZHJlc3MsIHNldHNlbmRlckFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICAgIGxldCBsb3R0ZXJ5Qm91Z2h0ID0gW107XG5cblxuICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgQWlydGFibGUuY29uZmlndXJlKHtcbiAgICAgICAgZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICB9KTtcbiAgICBjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG4gICAgY29uc3QgW2N1cnJlbnRORlRpZCwgc2V0Y3VycmVudE5GVGlkXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtjdXJyZW50VG9rZW5pZCwgc2V0Y3VycmVudFRva2VuaWRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW1JlY0V2ZW50SUQsIHNldFJlY0V2ZW50SURdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdmFyIFtORlRzbGlzdCwgc2V0TkZUc2xpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tUaW1lKCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBORlRFbmREYXRlID0gbmV3IERhdGUoY3VycmVudE5GVGVuZERhdGUpO1xuICAgICAgICB2YXIgZGlmZmVyY25lID0gTkZURW5kRGF0ZSAtIGN1cnJlbnQ7XG4gICAgICAgIGlmIChkaWZmZXJjbmUgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIExvdHRlcnlmZXRjaENvbnRyYWN0RGF0YSgpIHtcbiAgICAgICAgaWYgKGlkICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb3R0ZXJ5XCIpIHtcblxuICAgICAgICAgICAgdmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gbmV3IEFpcnRhYmxlKHsgYXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnIH0pLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cbiAgICAgICAgICBhd2FpdCAgYmFzZSgnZXZlbnRzJykuc2VsZWN0KHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2lkfScpYCxcbiAgICAgICAgICAgICAgICB2aWV3OiBcIkdyaWQgdmlld1wiXG4gICAgICAgICAgICB9KS5lYWNoUGFnZShhc3luYyBmdW5jdGlvbiBwYWdlKHJlY29yZHMsIGZldGNoTmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIChgcGFnZWApIHdpbGwgZ2V0IGNhbGxlZCBmb3IgZWFjaCBwYWdlIG9mIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgc2V0UmVjRXZlbnRJRChyZWNvcmRzWzBdLmdldElkKCkpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXdhaXQgYmFzZSgnbG90dGVyeScpLnNlbGVjdCh7XG4gICAgICAgICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgKHtldmVudGlkfSA9ICcke2lkfScpYCxcbiAgICAgICAgICAgICAgICBzb3J0OiBbeyBmaWVsZDogXCJzdGFydERhdGVcIiwgZGlyZWN0aW9uOiBcImFzY1wiIH1dLFxuICAgICAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgICAgIH0pLmVhY2hQYWdlKGFzeW5jIGZ1bmN0aW9uIHBhZ2UocmVjb3JkcywgZmV0Y2hOZXh0UGFnZSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gKGBwYWdlYCkgd2lsbCBnZXQgY2FsbGVkIGZvciBlYWNoIHBhZ2Ugb2YgcmVjb3Jkcy5cbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgYXdhaXQgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmZ0aWQ6IHJlY29yZC5nZXQoXCJuZnRpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogcmVjb3JkLmdldChcInN0YXJ0RGF0ZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IHJlY29yZC5nZXQoXCJlbmREYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbG90dGVyeU5GVERhdGVsaXN0ID0gKGFycik7XG4gICAgICAgICAgICAgICAgYXdhaXQgTkZUc2ZldGNoQ29udHJhY3REYXRhKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBORlRzZmV0Y2hDb250cmFjdERhdGEoKSB7XG4gICAgICAgIGlmIChpZCAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG90dGVyeVwiKSB7XG4gICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICB2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50TGlzdDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsb3R0ZXJ5TkZURGF0ZWxpc3QubGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVMaXN0ID0gbG90dGVyeU5GVERhdGVsaXN0W2kgLSAxXTtcbiAgICAgICAgICAgICAgICBjdXJyZW50TGlzdCA9IGVMaXN0O1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9IGF3YWl0IGJhc2UoJ25mdHMnKS5zZWxlY3Qoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGAoe2lkfSA9ICcke2VMaXN0Lm5mdGlkfScpYCxcbiAgICAgICAgICAgICAgICAgICAgdmlldzogXCJHcmlkIHZpZXdcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdmFyIGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3QuZmlyc3RQYWdlKChlcnIsIHJlY29yZHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Qoe30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVjb3JkLmdldCgnaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmdldCgnbmFtZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVjb3JkLmdldCgnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHJlY29yZC5nZXQoJ3ByaWNlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiByZWNvcmQuZ2V0KCdpbWFnZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IGN1cnJlbnRMaXN0LnN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogY3VycmVudExpc3QuZW5kRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVkOiByZWNvcmQuZ2V0KCdwYXJ0aWNpcGF0ZWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJXYWxsZXQ6IHJlY29yZC5nZXQoJ293bmVyV2FsbGV0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRva2VuaUQ6IHJlY29yZC5nZXQoJ1Rva2VuSUQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKGUgPT4geyByZXR1cm4gZSB9KTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhd2FpdCBkb25lO1xuICAgICAgICAgICAgICAgIE5GVHNsaXN0LnB1c2godmFsdWVbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE5GVHNsaXN0KTtcbiAgICAgICAgICAgICAgICBzZXRjdXJyZW50TkZUbmFtZShhcnJbMF0ubmFtZSk7XG4gICAgICAgICAgICAgICAgc2V0dG90YWxQYXJ0aWNpcGF0ZWQoYXJyWzBdLnBhcnRpY2lwYXRlZCk7XG4gICAgICAgICAgICAgICAgc2V0Y3VycmVudE5GVGVuZERhdGUoYXJyWzBdLmVuZERhdGUpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRpZChhcnJbMF0uaWQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRORlRzdGFydERhdGUoYXJyWzBdLnN0YXJ0RGF0ZSk7XG4gICAgICAgICAgICAgICAgc2V0c2VuZGVyQWRkcmVzcyhhcnJbMF0ub3duZXJXYWxsZXQpO1xuICAgICAgICAgICAgICAgIHNldGN1cnJlbnRUb2tlbmlkKGFyclswXS5Ub2tlbmlEKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9hZGluZ0RhdGUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvdHRlcnlJbmZvcm1hdGlvbicpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXdhaXQgbG90dGVyeU5GVERhdGVsaXN0LmZvckVhY2goYXN5bmMgKGVMaXN0KSA9PiB7XG5cbiAgICAgICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIExvdHRlcnlmZXRjaENvbnRyYWN0RGF0YSgpO1xuICAgIH0sIFtdKTtcblxuXG4gICAgbGV0IHdpbm5lckluZm87XG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzdHJpYnV0ZUxvdHRlcnkoKSB7XG4gICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgdmFyIHRlc3QgPSBhd2FpdCBiYXNlKCdsb3R0ZXJ5Qm91Z2h0Jykuc2VsZWN0KHtcbiAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYCh7bmZ0aWR9ID0gJyR7Y3VycmVudE5GVGlkfScpYCxcbiAgICAgICAgICAgIHZpZXc6IFwiR3JpZCB2aWV3XCJcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0ZXN0LmZpcnN0UGFnZSgoZXJyLCByZWNvcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHt9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWQ6IHJlY29yZC5nZXRJZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlY29yZC5nZXQoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiByZWNvcmQuZ2V0KCd1c2VyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyV2FsbGV0OiByZWNvcmQuZ2V0KCd1c2VyV2FsbGV0JylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSBhd2FpdCBkb25lO1xuICAgICAgICBsb3R0ZXJ5Qm91Z2h0ID0gdmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgdmFyIHdpbm5lck5vID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2cod2lubmVyTm8pO1xuICAgICAgICB0b2FzdC5zdWNjZXNzKGBXaW5uZXIgJHt2YWx1ZVt3aW5uZXJOb10udXNlcn0vJHt2YWx1ZVt3aW5uZXJOb10udXNlcldhbGxldH0hYCk7XG4gICAgICAgIGxldCByZWNlaXZlckFkZHJlc3MgPSB2YWx1ZVt3aW5uZXJOb10udXNlcldhbGxldDtcbiAgICAgICAgd2lubmVySW5mbyA9IHZhbHVlW3dpbm5lck5vXTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBUcmFuc2ZlcnJpbmdORlR0b1dpbm5lcigpIHtcblxuICAgICAgICBsZXQgcmVjZWl2ZXJBZGRyZXNzID0gd2lubmVySW5mby51c2VyV2FsbGV0O1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdFtcbiAgICAgICAgICAgICdzYWZlVHJhbnNmZXJGcm9tKGFkZHJlc3MsYWRkcmVzcyx1aW50MjU2KSdcbiAgICAgICAgXShzZW5kZXJBZGRyZXNzLCByZWNlaXZlckFkZHJlc3MsIGN1cnJlbnRUb2tlbmlkIC0gMSk7XG4gICAgICAgIHdpbmRvdy5vcGVuKGBodHRwczovL2V4cGxvcmVyLnRlc3RuZXQuYXVyb3JhLmRldi90eC8ke3Jlc3VsdC5oYXNofWAsIFwiX2JsYW5rXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gVXBkYXRpbmdPbkFpcnRhYmxlKCkge1xuXG4gICAgICAgIHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG4gICAgICAgIEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG4gICAgICAgICAgICBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cblxuICAgICAgICBhd2FpdCBORlRzbGlzdC5mb3JFYWNoKGFzeW5jIChORlQpID0+IHtcbiAgICAgICAgICAgIGlmIChORlQuaWQgPSBjdXJyZW50TkZUaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBiYXNlKCduZnRzJykuZGVzdHJveShbTkZULnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZignL2RvbmF0aW9uJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG5cbiAgICAgICAgYXdhaXQgbG90dGVyeU5GVERhdGVsaXN0LmZvckVhY2goYXN5bmMgKExvdHRlcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChMb3R0ZXJ5Lm5mdGlkID09IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnknKS5kZXN0cm95KFtMb3R0ZXJ5LnJlY2lkXSwgZnVuY3Rpb24gKGVyciwgZGVsZXRlZFJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJywgZGVsZXRlZFJlY29yZHMubGVuZ3RoLCAncmVjb3JkcycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IGxvdHRlcnlCb3VnaHQuZm9yRWFjaChhc3luYyAoUGVyc29uKSA9PiB7XG4gICAgICAgICAgICBpZiAoUGVyc29uLm5mdGlkID09IGN1cnJlbnRORlRpZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJhc2UoJ2xvdHRlcnlCb3VnaHQnKS5kZXN0cm95KFtQZXJzb24ucmVjaWRdLCBmdW5jdGlvbiAoZXJyLCBkZWxldGVkUmVjb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZWQnLCBkZWxldGVkUmVjb3Jkcy5sZW5ndGgsICdyZWNvcmRzJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBkaXN0cmlidXRlKCkge1xuICAgICAgICBhd2FpdCB0b2FzdC5wcm9taXNlKGRpc3RyaWJ1dGVMb3R0ZXJ5LCB7XG4gICAgICAgICAgICBwZW5kaW5nOiBcIkRpc3RyaWJ1dGluZy4uLlwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJEaXN0cmlidXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShUcmFuc2ZlcnJpbmdORlR0b1dpbm5lciwge1xuICAgICAgICAgICAgcGVuZGluZzogXCJUcmFuc2ZlcnJpbmcgTkZUIHRvIHdpbm5lclwiLFxuICAgICAgICAgICAgZXJyb3I6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiLFxuICAgICAgICAgICAgc3VjY2VzczogXCJUcmFuc2ZlcnJlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdG9hc3QucHJvbWlzZShVcGRhdGluZ09uQWlydGFibGUsIHtcbiAgICAgICAgICAgIHBlbmRpbmc6IFwiVXBkYXRpbmcgb24gQWlydGFibGVcIixcbiAgICAgICAgICAgIGVycm9yOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IFwiVXBkYXRlZCBzdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVGltZUxlZnQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0SW5mb3JtYXRpb25cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGVCaWQoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICB9XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvdHRlcnlcIikge1xuICAgICAgICAgICAgaWYgKGNoZWNrVGltZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZVRpbWVMZWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRJbmZvcm1hdGlvblwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSwgMTAwMCk7XG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgZCA9IGMgLSBuO1xuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCJkIFwiICsgaC50b1N0cmluZygpICsgXCJoIFwiICsgbS50b1N0cmluZygpICsgXCJtIFwiICsgcy50b1N0cmluZygpICsgXCJzXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXREYXRlVGltZShoVGV4dCwgbVRleHQsIHNUZXh0KSB7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRIID0gXCJcIjtcbiAgICAgICAgbGV0IGNvbnZlcnRlZE0gPSBcIlwiO1xuICAgICAgICBsZXQgQW1QTSA9IFwiXCI7XG4gICAgICAgIGlmIChoVGV4dCA8IDEyKSB7XG4gICAgICAgICAgICBBbVBNID0gXCJBTVwiO1xuICAgICAgICAgICAgaWYgKGhUZXh0IDwgMTApIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYDAke2hUZXh0fWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnZlcnRlZEggPSBgJHtoVGV4dH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRpdmlkZWRIID0gaFRleHQgLyAyO1xuICAgICAgICAgICAgQW1QTSA9IFwiUE1cIjtcbiAgICAgICAgICAgIGlmIChkaXZpZGVkSCA8IDEwKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVkSCA9IGAwJHtkaXZpZGVkSH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZWRIID0gYCR7ZGl2aWRlZEh9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobVRleHQgPCAxMCkge1xuICAgICAgICAgICAgY29udmVydGVkTSA9IGAwJHttVGV4dH1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udmVydGVkTSA9IGAke21UZXh0fWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7Y29udmVydGVkSH06JHtjb252ZXJ0ZWRNfSAke0FtUE19YDtcbiAgICB9XG4gICAgZnVuY3Rpb24gQ2hlY2tEYXRlKGRhdGV0ZXh0KSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldERhdGUoKTtcbiAgICAgICAgdmFyIG0gPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0TW9udGgoKTtcbiAgICAgICAgdmFyIHkgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdmFyIGggPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0SG91cnMoKTtcbiAgICAgICAgdmFyIG1uID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgdmFyIHMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0U2Vjb25kcygpO1xuXG4gICAgICAgIHJldHVybiAoYCR7ZC50b1N0cmluZygpfS8ke20udG9TdHJpbmcoKX0vJHt5LnRvU3RyaW5nKCl9ICR7Z2V0RGF0ZVRpbWUoaCwgbW4sIHMpfWApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvZG9uYXRpb24vYXVjdGlvbj9bJHtSZWNFdmVudElEfV1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTRweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzIwOHB4JyB9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBvdmVyZmxvdzogJ2hpZGRlbicsIGJhY2tncm91bmQ6ICdyZ2IoMjM2LCAyMDEsIDApJywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6ICcxNzJweCcsIGN1cnNvcjogJ3BvaW50ZXInLCBoZWlnaHQ6ICc0OHB4JywgbWFyZ2luOiAnMCcsIHBhZGRpbmc6ICcwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZ1RvcDogJzIxcHgnLCBmb250U2l6ZTogJzIxcHgnIH19PkdvIHRvIEF1Y3Rpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjByZW1cIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQocmdiKDExIDIxNCAxOTApIDAlLCByZ2IoMjU1IDE0MSAwKSA3NyUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNjcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhGbG93OiBcInJvdyBub3dyYXBcIixcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwcmVtXCIsIHBhZGRpbmc6IFwiM3JlbVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiTG9hZGluZ0RhdGVcIiBzdHlsZT17eyB3aWR0aDogMjgwLCBoZWlnaHQ6IDI3OSwgZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nTG90dGVyeUluZm9ybWF0aW9uJyBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcImRhcmtibHVlXCIsIG1hcmdpblRvcDogMzQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRORlRuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBwYXJ0aWNpcGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmMDBiMSwgIzAwZmY4OSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMzgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiIzVkMWZmZiBzb2xpZCAxcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdGFsUGFydGljaXBhdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBuYW1lPSdkYXRlbGVmdEluZm9ybWF0aW9uJyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcyN3B4JyB9fSBkYXRlPXtjdXJyZW50TkZUZW5kRGF0ZX0+e0xlZnREYXRlKGN1cnJlbnRORlRlbmREYXRlKX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtkaXN0cmlidXRlfSBpZD1cImRpc3RyaWJ1dGVcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBhbGlnbkNvbnRlbnQ6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IDQxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7IHdpZHRoOiAxODQsIGJvcmRlclJhZGl1czogNTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc3RyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7TkZUc2xpc3QuZmxhdE1hcCgobGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uaWR9IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcImxpbmVhci1ncmFkaWVudCgyOTVkZWcsICMwYmQ2YmUsICNhMjQxZGYpXCIsIG1hcmdpblRvcDogMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLmlkfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGlzdEl0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGZvbnRTaXplOiBcIjJ2d1wiLCBjb2xvcjogXCJ3aGl0ZVwiIH19PntsaXN0SXRlbS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IERhdGU6IHtDaGVja0RhdGUobGlzdEl0ZW0uc3RhcnREYXRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxOTkgMTk0IDE5NClcIiwgZm9udFNpemU6IFwiMS43dndcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVuZCBEYXRlOiAgIHtDaGVja0RhdGUobGlzdEl0ZW0uZW5kRGF0ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVsZW1lbnRCb3R0b21Db250YWluZXJcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICc1NjVweCcsIG1hcmdpbjogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgdGV4dEFsaWduOiAncmlnaHQnLCBtYXJnaW5Cb3R0b206ICczM3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI2N3B4JywgYWxpZ25Db250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJvcmRlclJhZGl1czogJzhweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdyZ2IoMTcsIDM0LCA0NyknLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgY29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJiaWRwcmljZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyNCwgaGVpZ2h0OiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBsaW5lSGVpZ2h0OiBcIjMuNlwiLCBib3JkZXJSYWRpdXM6IDQwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjdXJyZW50TkZUaWQgIT0gbGlzdEl0ZW0uaWQpID8gKDw+QXQge0NoZWNrRGF0ZShsaXN0SXRlbS5zdGFydERhdGUpfTwvPikgOiAoPD5JbiBQcm9ncmVzczwvPil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuXG5cblxuXG5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNjE4NzgyOWQyN2JjYjE4OGRjOTJcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUGFyYW1zIiwiTmF2TGluayIsInRvYXN0IiwibmVhckFQSSIsIkJ1dHRvbiIsInVzZUNvbnRyYWN0IiwiTG90dGVyeSIsInJlZ2V4Iiwic3RyIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJtIiwiaWQiLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJsb3R0ZXJ5TkZURGF0ZWxpc3QiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJjdXJyZW50TkZUbmFtZSIsInNldGN1cnJlbnRORlRuYW1lIiwidG90YWxQYXJ0aWNpcGF0ZWQiLCJzZXR0b3RhbFBhcnRpY2lwYXRlZCIsImN1cnJlbnRORlRzdGFydERhdGUiLCJzZXRjdXJyZW50TkZUc3RhcnREYXRlIiwiY3VycmVudE5GVGVuZERhdGUiLCJzZXRjdXJyZW50TkZUZW5kRGF0ZSIsInNlbmRlckFkZHJlc3MiLCJzZXRzZW5kZXJBZGRyZXNzIiwibG90dGVyeUJvdWdodCIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImNvbmZpZ3VyZSIsImVuZHBvaW50VXJsIiwiYXBpS2V5IiwiYmFzZSIsImN1cnJlbnRORlRpZCIsInNldGN1cnJlbnRORlRpZCIsImN1cnJlbnRUb2tlbmlkIiwic2V0Y3VycmVudFRva2VuaWQiLCJSZWNFdmVudElEIiwic2V0UmVjRXZlbnRJRCIsIk5GVHNsaXN0Iiwic2V0TkZUc2xpc3QiLCJjaGVja1RpbWUiLCJjdXJyZW50IiwiRGF0ZSIsIk5GVEVuZERhdGUiLCJkaWZmZXJjbmUiLCJMb3R0ZXJ5ZmV0Y2hDb250cmFjdERhdGEiLCJwYXRobmFtZSIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsInZpZXciLCJlYWNoUGFnZSIsInJlY29yZHMiLCJmZXRjaE5leHRQYWdlIiwiZ2V0SWQiLCJwYWdlIiwic29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwiYXJyIiwiZm9yRWFjaCIsInJlY29yZCIsInB1c2giLCJyZWNpZCIsIm5mdGlkIiwiZ2V0Iiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIk5GVHNmZXRjaENvbnRyYWN0RGF0YSIsImkiLCJsZW5ndGgiLCJlTGlzdCIsImN1cnJlbnRMaXN0IiwidGVzdCIsImRvbmUiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmlyc3RQYWdlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaW1hZ2UiLCJwYXJ0aWNpcGF0ZWQiLCJvd25lcldhbGxldCIsIlRva2VuaUQiLCJ0aGVuIiwiZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIndpbm5lckluZm8iLCJkaXN0cmlidXRlTG90dGVyeSIsInVzZXIiLCJ1c2VyV2FsbGV0Iiwid2lubmVyTm8iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdWNjZXNzIiwicmVjZWl2ZXJBZGRyZXNzIiwiVHJhbnNmZXJyaW5nTkZUdG9XaW5uZXIiLCJyZXN1bHQiLCJvcGVuIiwiaGFzaCIsIlVwZGF0aW5nT25BaXJ0YWJsZSIsIk5GVCIsImRlc3Ryb3kiLCJkZWxldGVkUmVjb3JkcyIsImVycm9yIiwiaHJlZiIsIlBlcnNvbiIsImRpc3RyaWJ1dGUiLCJwcm9taXNlIiwicGVuZGluZyIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImRhdGUiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJMZWZ0RGF0ZSIsIkxlZnREYXRlQmlkIiwic2V0SW50ZXJ2YWwiLCJkYXRldGV4dCIsImMiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsImgiLCJzIiwidG9TdHJpbmciLCJnZXREYXRlVGltZSIsImhUZXh0IiwibVRleHQiLCJzVGV4dCIsImNvbnZlcnRlZEgiLCJjb252ZXJ0ZWRNIiwiQW1QTSIsImRpdmlkZWRIIiwiQ2hlY2tEYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwieSIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJtbiIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ2FwIiwicG9zaXRpb24iLCJyaWdodCIsImNvbG9yIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kIiwidGV4dEFsaWduIiwid2lkdGgiLCJjdXJzb3IiLCJoZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsImZvbnRTaXplIiwiYWxpZ25TZWxmIiwiYmFja2dyb3VuZEltYWdlIiwiYm9yZGVyUmFkaXVzIiwiZmxleEZsb3ciLCJwbGFjZUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJsaXN0SXRlbSIsImZsZXhEaXJlY3Rpb24iLCJyb3dHYXAiLCJtYXJnaW5Cb3R0b20iLCJsaW5lSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==