"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/components/components/modals/DonateNFTModal.jsx":
/*!*************************************************************!*\
  !*** ./src/components/components/modals/DonateNFTModal.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DonateNFTModal; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UseFormInput */ "./src/components/components/UseFormInput.jsx");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/useContract */ "./services/useContract.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_9__);













function DonateNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      senderAddress = _ref.senderAddress,
      type = _ref.type,
      EventID = _ref.EventID,
      EventeRecID = _ref.EventeRecID,
      SelectedTitle = _ref.SelectedTitle,
      enddate = _ref.enddate,
      selectedWallet = _ref.selectedWallet;

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyR1Rrcl9O2s9bTs'
  });

  var base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_8__["default"])('ERC721'),
      contract = _useContract.contract,
      contractCelo = _useContract.contractCelo,
      signerAddress = _useContract.signerAddress;

  var NewTokenId = 0;

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__["default"])({
    type: 'text',
    placeholder: 'Enter name'
  }),
      _UseFormInput2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput, 2),
      name = _UseFormInput2[0],
      nameInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__["default"])({
    as: 'textarea',
    placeholder: 'Enter description'
  }),
      _UseFormInput4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput3, 2),
      description = _UseFormInput4[0],
      descriptionInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__["default"])({
    type: 'text',
    placeholder: 'Enter image url'
  }),
      _UseFormInput6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput5, 2),
      url = _UseFormInput6[0],
      urlInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__["default"])({
    type: 'text',
    placeholder: 'Enter Price'
  }),
      _UseFormInput8 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput7, 2),
      price = _UseFormInput8[0],
      priceInput = _UseFormInput8[1];

  var _UseFormInput9 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__["default"])({
    type: 'text',
    placeholder: 'Enter NFT address'
  }),
      _UseFormInput10 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput9, 2),
      NFTaddress = _UseFormInput10[0],
      NFTaddressInput = _UseFormInput10[1];

  var _UseFormInput11 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__["default"])({
    type: 'text',
    placeholder: 'Enter Cryptopunk address'
  }),
      _UseFormInput12 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_UseFormInput11, 2),
      Cryptopunkaddress = _UseFormInput12[0],
      CryptopunkaddressInput = _UseFormInput12[1];

  function createNFT() {
    return _createNFT.apply(this, arguments);
  }

  function _createNFT() {
    _createNFT = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(CreatingNFTAirtable, {
                pending: "Creating NFT on Airtable...",
                error: "Please try again",
                success: "Created NFT on Airtable!"
              });

            case 2:
              if (!(type == "NEAR")) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(creatingNFTonAurora, {
                pending: "Creating NFT on Aurora...",
                error: "Please try again",
                success: "Created NFT on Aurora!"
              });

            case 5:
              _context.next = 10;
              break;

            case 7:
              if (!(type == "CELO")) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(creatingNFTonCELO, {
                pending: "Creating NFT on CELO...",
                error: "Please try again",
                success: "Created NFT on CELO!"
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _createNFT.apply(this, arguments);
  }

  var newtokenrec = '';

  function CreatingNFTAirtable() {
    return _CreatingNFTAirtable.apply(this, arguments);
  }

  function _CreatingNFTAirtable() {
    _CreatingNFTAirtable = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
      var Airtable, base, test, done;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");
              Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'keyR1Rrcl9O2s9bTs'
              });
              base = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js").base('appgbRCpbkzmdcucO');
              _context2.next = 5;
              return base('nfts').create([{
                "fields": {
                  "name": name,
                  "description": description,
                  "price": price,
                  "type": type,
                  "image": url,
                  "eventid": Number(EventID),
                  "ownerWallet": signerAddress
                }
              }]);

            case 5:
              test = _context2.sent;
              done = new (_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default())(function (resolve, reject) {
                NewTokenId = test[0].get('id');
                newtokenrec = test[0].getId();
                resolve(NewTokenId);
              }).then(function (e) {
                return e;
              });
              _context2.t0 = console;
              _context2.next = 10;
              return done;

            case 10:
              _context2.t1 = _context2.sent;

              _context2.t0.log.call(_context2.t0, _context2.t1);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _CreatingNFTAirtable.apply(this, arguments);
  }

  function creatingNFTonAurora() {
    return _creatingNFTonAurora.apply(this, arguments);
  }

  function _creatingNFTonAurora() {
    _creatingNFTonAurora = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
      var Logourl, tokenAddress, createdObject, result, TokenID, test;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              Logourl = url;
              tokenAddress = NFTaddress;

              if ("Cryptopunk" == type) {
                tokenAddress = Cryptopunkaddress;
              }

              _context3.prev = 3;
              createdObject = {
                eventid: EventID,
                name: name,
                description: description,
                Bidprice: price,
                price: price,
                type: type,
                image: Logourl
              };
              _context3.next = 7;
              return contract.claimToken(signerAddress, NewTokenId, EventID, createdObject);

            case 7:
              result = _context3.sent;
              console.log(result);
              _context3.t0 = Number;
              _context3.next = 12;
              return contract.latestTokenID();

            case 12:
              _context3.t1 = _context3.sent;
              TokenID = (0, _context3.t0)(_context3.t1);
              console.log(TokenID);
              _context3.next = 17;
              return base('nfts').update([{
                "id": newtokenrec,
                "fields": {
                  "TokenID": TokenID
                }
              }]);

            case 17:
              test = _context3.sent;
              console.log(test);
              window.location.href = "/donation/auction?[".concat(EventeRecID, "]");
              window.document.getElementsByClassName("btn-close")[0].click();
              _context3.next = 26;
              break;

            case 23:
              _context3.prev = 23;
              _context3.t2 = _context3["catch"](3);
              return _context3.abrupt("return", _context3.t2);

            case 26:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 23]]);
    }));
    return _creatingNFTonAurora.apply(this, arguments);
  }

  function creatingNFTonCELO() {
    return _creatingNFTonCELO.apply(this, arguments);
  }

  function _creatingNFTonCELO() {
    _creatingNFTonCELO = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {
      var Logourl, tokenAddress, createdObject, result, TokenID, test;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              Logourl = url;
              tokenAddress = NFTaddress;

              if ("Cryptopunk" == type) {
                tokenAddress = Cryptopunkaddress;
              }

              _context4.prev = 3;
              createdObject = {
                eventid: EventID,
                name: name,
                description: description,
                Bidprice: price,
                price: price,
                type: type,
                image: Logourl
              };
              _context4.next = 7;
              return contractCelo.claimToken(signerAddress, NewTokenId, EventID, createdObject);

            case 7:
              result = _context4.sent;
              console.log(result);
              _context4.t0 = Number;
              _context4.next = 12;
              return contractCelo.latestTokenID();

            case 12:
              _context4.t1 = _context4.sent;
              TokenID = (0, _context4.t0)(_context4.t1);
              console.log(TokenID);
              _context4.next = 17;
              return base('nfts').update([{
                "id": newtokenrec,
                "fields": {
                  "TokenID": TokenID
                }
              }]);

            case 17:
              test = _context4.sent;
              console.log(test);
              window.location.href = "/donation/auction?[".concat(EventeRecID, "]");
              window.document.getElementsByClassName("btn-close")[0].click();
              _context4.next = 26;
              break;

            case 23:
              _context4.prev = 23;
              _context4.t2 = _context4["catch"](3);
              return _context4.abrupt("return", _context4.t2);

            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 23]]);
    }));
    return _creatingNFTonCELO.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "lg",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "Donate NFT - ", SelectedTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, "Name"), nameInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupDescription"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, "Description"), descriptionInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, "Opening price in ", type), priceInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupImageUrl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, "Enter image URL"), urlInput), type == "Cryptopunk" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupImageUrl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, "Cryptopunk address"), CryptopunkaddressInput) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
    className: "mb-3",
    controlId: "formGroupImageUrl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, "NFT address"), NFTaddressInput), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "d-grid",
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "primary",
    onClick: createNFT
  }, "Donate NFT"))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "357c4823df64bbe79083"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjI3ZGZmYjlhY2Y1YzhhOGRiMTFlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRWUsU0FBU1csY0FBVCxPQVVaO0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsSUFNRSxRQU5GQSxJQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsV0FJRSxRQUpGQSxXQUlFO0FBQUEsTUFIRkMsYUFHRSxRQUhGQSxhQUdFO0FBQUEsTUFGRkMsT0FFRSxRQUZGQSxPQUVFO0FBQUEsTUFERkMsY0FDRSxRQURGQSxjQUNFOztBQUVGLE1BQUlDLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyx5REFBRCxDQUF0Qjs7QUFDQUQsRUFBQUEsUUFBUSxDQUFDRSxTQUFULENBQW1CO0FBQ2xCQyxJQUFBQSxXQUFXLEVBQUUsMEJBREs7QUFFbEJDLElBQUFBLE1BQU0sRUFBRTtBQUZVLEdBQW5COztBQUlBLE1BQU1DLElBQUksR0FBR0osbUZBQUEsQ0FBeUIsbUJBQXpCLENBQWI7O0FBRUEscUJBQWtEYixpRUFBVyxDQUFDLFFBQUQsQ0FBN0Q7QUFBQSxNQUFRa0IsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxZQUFsQixnQkFBa0JBLFlBQWxCO0FBQUEsTUFBZ0NDLGFBQWhDLGdCQUFnQ0EsYUFBaEM7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHLENBQWpCOztBQUVBLHNCQUEwQnhCLHlEQUFZLENBQUM7QUFDdENTLElBQUFBLElBQUksRUFBRSxNQURnQztBQUV0Q2dCLElBQUFBLFdBQVcsRUFBRTtBQUZ5QixHQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsU0FBYjs7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LEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLG1FQUFELDZCQURELEVBRUU2QixzQkFGRixDQURBLGdCQU1BLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxtRUFBRCxzQkFERCxFQUVFRixlQUZGLENBeEJGLGVBZ0NDO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUV5QyxNQUFBQSxTQUFTLEVBQUU7QUFBYjtBQUEvQixrQkFDQyxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUV0QztBQUFuQyxrQkFERCxDQWhDRCxDQURELENBYkQsQ0FETyxDQUFSO0FBNERBOzs7Ozs7OztVQzFRRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlVG9rZW5BUEkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy90b2tlbic7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QWNjb3VudCB9IGZyb20gJ25lYXItYXBpLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9uYXRlTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHR5cGUsXG5cdEV2ZW50SUQsXG5cdEV2ZW50ZVJlY0lELFxuXHRTZWxlY3RlZFRpdGxlLFxuXHRlbmRkYXRlLFxuXHRzZWxlY3RlZFdhbGxldFxufSkge1xuXG5cdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG5cdFx0ZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuXHRcdGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuXHR9KTtcblx0Y29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXHRjb25zdCB7IGNvbnRyYWN0LCBjb250cmFjdENlbG8sIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblx0bGV0IE5ld1Rva2VuSWQgPSAwO1xuXG5cdGNvbnN0IFtuYW1lLCBuYW1lSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBuYW1lJyxcblx0fSk7XG5cdGNvbnN0IFtkZXNjcmlwdGlvbiwgZGVzY3JpcHRpb25JbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdGFzOiAndGV4dGFyZWEnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgZGVzY3JpcHRpb24nLFxuXHR9KTtcblx0Y29uc3QgW3VybCwgdXJsSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBpbWFnZSB1cmwnLFxuXHR9KTtcblxuXHRjb25zdCBbcHJpY2UsIHByaWNlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBQcmljZScsXG5cdH0pO1xuXHRjb25zdCBbTkZUYWRkcmVzcywgTkZUYWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgTkZUIGFkZHJlc3MnLFxuXHR9KTtcblx0Y29uc3QgW0NyeXB0b3B1bmthZGRyZXNzLCBDcnlwdG9wdW5rYWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgQ3J5cHRvcHVuayBhZGRyZXNzJyxcblx0fSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gY3JlYXRlTkZUKCkge1xuXHRcdGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdORlRBaXJ0YWJsZSwge1xuXHRcdFx0cGVuZGluZzogYENyZWF0aW5nIE5GVCBvbiBBaXJ0YWJsZS4uLmAsXG5cdFx0XHRlcnJvcjogYFBsZWFzZSB0cnkgYWdhaW5gLFxuXHRcdFx0c3VjY2VzczogYENyZWF0ZWQgTkZUIG9uIEFpcnRhYmxlIWBcblx0XHR9KTtcblx0XHRpZiAoIHR5cGUgPT0gXCJORUFSXCIpe1xuXHRcdFx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKGNyZWF0aW5nTkZUb25BdXJvcmEsIHtcblx0XHRcdHBlbmRpbmc6IGBDcmVhdGluZyBORlQgb24gQXVyb3JhLi4uYCxcblx0XHRcdGVycm9yOiBgUGxlYXNlIHRyeSBhZ2FpbmAsXG5cdFx0XHRzdWNjZXNzOiBgQ3JlYXRlZCBORlQgb24gQXVyb3JhIWBcblx0XHR9KTtcblx0XHR9ZWxzZSBpZiAodHlwZSA9PSBcIkNFTE9cIil7XG5cdFx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKGNyZWF0aW5nTkZUb25DRUxPLCB7XG5cdFx0XHRcdHBlbmRpbmc6IGBDcmVhdGluZyBORlQgb24gQ0VMTy4uLmAsXG5cdFx0XHRcdGVycm9yOiBgUGxlYXNlIHRyeSBhZ2FpbmAsXG5cdFx0XHRcdHN1Y2Nlc3M6IGBDcmVhdGVkIE5GVCBvbiBDRUxPIWBcblx0XHRcdH0pO1xuXHRcdH1cblx0XG5cdH1cblx0bGV0IG5ld3Rva2VucmVjID0gJyc7XG5cdGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nTkZUQWlydGFibGUoKSB7XG5cblx0XHR2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuXHRcdEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG5cdFx0XHRlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG5cdFx0XHRhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcblx0XHR9KTtcblx0XHRjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cblx0XHR2YXIgdGVzdCA9IGF3YWl0IGJhc2UoJ25mdHMnKS5jcmVhdGUoW1xuXHRcdFx0e1xuXHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IG5hbWUsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBkZXNjcmlwdGlvbixcblx0XHRcdFx0XHRcInByaWNlXCI6IHByaWNlLFxuXHRcdFx0XHRcdFwidHlwZVwiOiB0eXBlLFxuXHRcdFx0XHRcdFwiaW1hZ2VcIjogdXJsLFxuXHRcdFx0XHRcdFwiZXZlbnRpZFwiOiBOdW1iZXIoRXZlbnRJRCksXG5cdFx0XHRcdFx0XCJvd25lcldhbGxldFwiOiBzaWduZXJBZGRyZXNzXG5cdFx0XHRcdH1cblx0XHRcdH1dKVxuXHRcdHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0TmV3VG9rZW5JZCA9IHRlc3RbMF0uZ2V0KCdpZCcpO1xuXHRcdFx0bmV3dG9rZW5yZWMgPSB0ZXN0WzBdLmdldElkKCk7XG5cdFx0XHRyZXNvbHZlKE5ld1Rva2VuSWQpO1xuXHRcdH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXHRcdGNvbnNvbGUubG9nKGF3YWl0IGRvbmUpO1xuXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gY3JlYXRpbmdORlRvbkF1cm9yYSgpIHtcblx0XHRsZXQgTG9nb3VybCA9IHVybDtcblx0XHR2YXIgdG9rZW5BZGRyZXNzID0gTkZUYWRkcmVzcztcblx0XHRpZiAoXCJDcnlwdG9wdW5rXCIgPT0gdHlwZSkge1xuXHRcdFx0dG9rZW5BZGRyZXNzID0gQ3J5cHRvcHVua2FkZHJlc3M7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHRcdGV2ZW50aWQ6IEV2ZW50SUQsXG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcblx0XHRcdFx0QmlkcHJpY2U6IHByaWNlLFxuXHRcdFx0XHRwcmljZTogcHJpY2UsXG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGltYWdlOiBMb2dvdXJsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY2xhaW1Ub2tlbihcblx0XHRcdFx0c2lnbmVyQWRkcmVzcyxcblx0XHRcdFx0TmV3VG9rZW5JZCxcblx0XHRcdFx0RXZlbnRJRCxcblx0XHRcdFx0Y3JlYXRlZE9iamVjdFxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblxuXHRcdFx0bGV0IFRva2VuSUQgPSBOdW1iZXIoYXdhaXQgY29udHJhY3QubGF0ZXN0VG9rZW5JRCgpKTtcblxuXHRcdFx0Y29uc29sZS5sb2coVG9rZW5JRCk7XG5cdFx0XHR2YXIgdGVzdCA9IGF3YWl0IGJhc2UoJ25mdHMnKS51cGRhdGUoW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiBuZXd0b2tlbnJlYyxcblx0XHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XHRcIlRva2VuSURcIjogVG9rZW5JRFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XSk7XG5cdFx0XHRjb25zb2xlLmxvZyh0ZXN0KTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9kb25hdGlvbi9hdWN0aW9uP1ske0V2ZW50ZVJlY0lEfV1gO1xuXHRcdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIChlcnJvcik7XG5cdFx0fVxuXG5cblx0fVxuXHRhc3luYyBmdW5jdGlvbiBjcmVhdGluZ05GVG9uQ0VMTygpIHtcblx0XHRsZXQgTG9nb3VybCA9IHVybDtcblx0XHR2YXIgdG9rZW5BZGRyZXNzID0gTkZUYWRkcmVzcztcblx0XHRpZiAoXCJDcnlwdG9wdW5rXCIgPT0gdHlwZSkge1xuXHRcdFx0dG9rZW5BZGRyZXNzID0gQ3J5cHRvcHVua2FkZHJlc3M7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHRcdGV2ZW50aWQ6IEV2ZW50SUQsXG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcblx0XHRcdFx0QmlkcHJpY2U6IHByaWNlLFxuXHRcdFx0XHRwcmljZTogcHJpY2UsXG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGltYWdlOiBMb2dvdXJsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3RDZWxvLmNsYWltVG9rZW4oXG5cdFx0XHRcdHNpZ25lckFkZHJlc3MsXG5cdFx0XHRcdE5ld1Rva2VuSWQsXG5cdFx0XHRcdEV2ZW50SUQsXG5cdFx0XHRcdGNyZWF0ZWRPYmplY3Rcblx0XHRcdCk7XG5cblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cblx0XHRcdGxldCBUb2tlbklEID0gTnVtYmVyKGF3YWl0IGNvbnRyYWN0Q2Vsby5sYXRlc3RUb2tlbklEKCkpO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhUb2tlbklEKTtcblx0XHRcdHZhciB0ZXN0ID0gYXdhaXQgYmFzZSgnbmZ0cycpLnVwZGF0ZShbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IG5ld3Rva2VucmVjLFxuXHRcdFx0XHRcdFwiZmllbGRzXCI6IHtcblx0XHRcdFx0XHRcdFwiVG9rZW5JRFwiOiBUb2tlbklEXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdKTtcblx0XHRcdGNvbnNvbGUubG9nKHRlc3QpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7RXZlbnRlUmVjSUR9XWA7XG5cdFx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gKGVycm9yKTtcblx0XHR9XG5cblxuXHR9XG5cblxuXHRyZXR1cm4gKDw+XG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRzaXplPVwibGdcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdERvbmF0ZSBORlQgLSB7U2VsZWN0ZWRUaXRsZX1cblx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPk5hbWU8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7bmFtZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwRGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkRlc2NyaXB0aW9uPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5PcGVuaW5nIHByaWNlIGluIHt0eXBlfTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtwcmljZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+RW50ZXIgaW1hZ2UgVVJMPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e3VybElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEltYWdlVXJsXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkNyeXB0b3B1bmsgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e0NyeXB0b3B1bmthZGRyZXNzSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5ORlQgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e05GVGFkZHJlc3NJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQpXG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17Y3JlYXRlTkZUfT5cblx0XHRcdFx0XHRcdFx0RG9uYXRlIE5GVFxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHQ8L01vZGFsPlxuXG5cdDwvPlxuXG5cblx0KTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIzNTdjNDgyM2RmNjRiYmU3OTA4M1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJVc2VGb3JtSW5wdXQiLCJjcmVhdGVUb2tlbkFQSSIsInRvYXN0IiwidXNlQ29udHJhY3QiLCJXYWxsZXRBY2NvdW50IiwiRG9uYXRlTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwic2VuZGVyQWRkcmVzcyIsInR5cGUiLCJFdmVudElEIiwiRXZlbnRlUmVjSUQiLCJTZWxlY3RlZFRpdGxlIiwiZW5kZGF0ZSIsInNlbGVjdGVkV2FsbGV0IiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiY29udHJhY3QiLCJjb250cmFjdENlbG8iLCJzaWduZXJBZGRyZXNzIiwiTmV3VG9rZW5JZCIsInBsYWNlaG9sZGVyIiwibmFtZSIsIm5hbWVJbnB1dCIsImFzIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbklucHV0IiwidXJsIiwidXJsSW5wdXQiLCJwcmljZSIsInByaWNlSW5wdXQiLCJORlRhZGRyZXNzIiwiTkZUYWRkcmVzc0lucHV0IiwiQ3J5cHRvcHVua2FkZHJlc3MiLCJDcnlwdG9wdW5rYWRkcmVzc0lucHV0IiwiY3JlYXRlTkZUIiwicHJvbWlzZSIsIkNyZWF0aW5nTkZUQWlydGFibGUiLCJwZW5kaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiY3JlYXRpbmdORlRvbkF1cm9yYSIsImNyZWF0aW5nTkZUb25DRUxPIiwibmV3dG9rZW5yZWMiLCJjcmVhdGUiLCJOdW1iZXIiLCJ0ZXN0IiwiZG9uZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJnZXRJZCIsInRoZW4iLCJlIiwiY29uc29sZSIsImxvZyIsIkxvZ291cmwiLCJ0b2tlbkFkZHJlc3MiLCJjcmVhdGVkT2JqZWN0IiwiZXZlbnRpZCIsIkJpZHByaWNlIiwiaW1hZ2UiLCJjbGFpbVRva2VuIiwicmVzdWx0IiwibGF0ZXN0VG9rZW5JRCIsIlRva2VuSUQiLCJ1cGRhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=