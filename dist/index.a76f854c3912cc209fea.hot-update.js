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
              _context.next = 4;
              return react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.promise(creatingNFTonAurora, {
                pending: "Creating NFT on Aurora...",
                error: "Please try again",
                success: "Created NFT on Aurora!"
              });

            case 4:
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
/******/ 	__webpack_require__.h = function() { return "11d18fbd7e6a84abecb5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmE3NmY4NTRjMzkxMmNjMjA5ZmVhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRWUsU0FBU1csY0FBVCxPQVVaO0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsSUFNRSxRQU5GQSxJQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsV0FJRSxRQUpGQSxXQUlFO0FBQUEsTUFIRkMsYUFHRSxRQUhGQSxhQUdFO0FBQUEsTUFGRkMsT0FFRSxRQUZGQSxPQUVFO0FBQUEsTUFERkMsY0FDRSxRQURGQSxjQUNFOztBQUVGLE1BQUlDLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyx5REFBRCxDQUF0Qjs7QUFDQUQsRUFBQUEsUUFBUSxDQUFDRSxTQUFULENBQW1CO0FBQ2xCQyxJQUFBQSxXQUFXLEVBQUUsMEJBREs7QUFFbEJDLElBQUFBLE1BQU0sRUFBRTtBQUZVLEdBQW5COztBQUlBLE1BQU1DLElBQUksR0FBR0osbUZBQUEsQ0FBeUIsbUJBQXpCLENBQWI7O0FBRUEscUJBQW9DYixpRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRa0IsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLE1BQUlDLFVBQVUsR0FBRyxDQUFqQjs7QUFFQSxzQkFBMEJ2Qix5REFBWSxDQUFDO0FBQ3RDUyxJQUFBQSxJQUFJLEVBQUUsTUFEZ0M7QUFFdENlLElBQUFBLFdBQVcsRUFBRTtBQUZ5QixHQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsU0FBYjs7QUFJQSx1QkFBd0MxQix5REFBWSxDQUFDO0FBQ3BEMkIs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UyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxtRUFBRCxzQkFERCxFQUVFRyxnQkFGRixDQUxELGVBU0MsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLG1FQUFELDZCQUE4QnBCLElBQTlCLENBREQsRUFFRXdCLFVBRkYsQ0FURCxlQWNDLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxtRUFBRCwwQkFERCxFQUVFRixRQUZGLENBZEQsRUFrQkd0QixJQUFJLElBQUksWUFBVCxnQkFDQSxpREFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsbUVBQUQsNkJBREQsRUFFRTRCLHNCQUZGLENBREEsZ0JBTUEsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLG1FQUFELHNCQURELEVBRUVGLGVBRkYsQ0F4QkYsZUFnQ0M7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRXdDLE1BQUFBLFNBQVMsRUFBRTtBQUFiO0FBQS9CLGtCQUNDLGlEQUFDLCtEQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRXJDO0FBQW5DLGtCQURELENBaENELENBREQsQ0FiRCxDQURPLENBQVI7QUE0REE7Ozs7Ozs7O1VDcE5ELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnRzL21vZGFscy9Eb25hdGVORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgeyBjcmVhdGVUb2tlbkFQSSB9IGZyb20gJ0AvcGFnZXMvRXZlbnRzL3Rva2VuJztcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XG5pbXBvcnQgeyBXYWxsZXRBY2NvdW50IH0gZnJvbSAnbmVhci1hcGktanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGVORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0c2VuZGVyQWRkcmVzcyxcblx0dHlwZSxcblx0RXZlbnRJRCxcblx0RXZlbnRlUmVjSUQsXG5cdFNlbGVjdGVkVGl0bGUsXG5cdGVuZGRhdGUsXG5cdHNlbGVjdGVkV2FsbGV0XG59KSB7XG5cblx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0QWlydGFibGUuY29uZmlndXJlKHtcblx0XHRlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG5cdFx0YXBpS2V5OiAna2V5UjFScmNsOU8yczliVHMnXG5cdH0pO1xuXHRjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cdGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcblx0bGV0IE5ld1Rva2VuSWQgPSAwO1xuXG5cdGNvbnN0IFtuYW1lLCBuYW1lSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBuYW1lJyxcblx0fSk7XG5cdGNvbnN0IFtkZXNjcmlwdGlvbiwgZGVzY3JpcHRpb25JbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdGFzOiAndGV4dGFyZWEnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgZGVzY3JpcHRpb24nLFxuXHR9KTtcblx0Y29uc3QgW3VybCwgdXJsSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBpbWFnZSB1cmwnLFxuXHR9KTtcblxuXHRjb25zdCBbcHJpY2UsIHByaWNlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBQcmljZScsXG5cdH0pO1xuXHRjb25zdCBbTkZUYWRkcmVzcywgTkZUYWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgTkZUIGFkZHJlc3MnLFxuXHR9KTtcblx0Y29uc3QgW0NyeXB0b3B1bmthZGRyZXNzLCBDcnlwdG9wdW5rYWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgQ3J5cHRvcHVuayBhZGRyZXNzJyxcblx0fSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gY3JlYXRlTkZUKCkge1xuXHRcdGF3YWl0IHRvYXN0LnByb21pc2UoQ3JlYXRpbmdORlRBaXJ0YWJsZSwge1xuXHRcdFx0cGVuZGluZzogYENyZWF0aW5nIE5GVCBvbiBBaXJ0YWJsZS4uLmAsXG5cdFx0XHRlcnJvcjogYFBsZWFzZSB0cnkgYWdhaW5gLFxuXHRcdFx0c3VjY2VzczogYENyZWF0ZWQgTkZUIG9uIEFpcnRhYmxlIWBcblx0XHR9KTtcblx0XHRcblx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKGNyZWF0aW5nTkZUb25BdXJvcmEsIHtcblx0XHRcdHBlbmRpbmc6IGBDcmVhdGluZyBORlQgb24gQXVyb3JhLi4uYCxcblx0XHRcdGVycm9yOiBgUGxlYXNlIHRyeSBhZ2FpbmAsXG5cdFx0XHRzdWNjZXNzOiBgQ3JlYXRlZCBORlQgb24gQXVyb3JhIWBcblx0XHR9KTtcblx0fVxuXHRsZXQgbmV3dG9rZW5yZWMgPSAnJztcblx0YXN5bmMgZnVuY3Rpb24gQ3JlYXRpbmdORlRBaXJ0YWJsZSgpIHtcblxuXHRcdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdFx0QWlydGFibGUuY29uZmlndXJlKHtcblx0XHRcdGVuZHBvaW50VXJsOiAnaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tJyxcblx0XHRcdGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuXHRcdH0pO1xuXHRcdGNvbnN0IGJhc2UgPSByZXF1aXJlKCdhaXJ0YWJsZScpLmJhc2UoJ2FwcGdiUkNwYmt6bWRjdWNPJyk7XG5cblxuXHRcdHZhciB0ZXN0ID0gYXdhaXQgYmFzZSgnbmZ0cycpLmNyZWF0ZShbXG5cdFx0XHR7XG5cdFx0XHRcdFwiZmllbGRzXCI6IHtcblx0XHRcdFx0XHRcIm5hbWVcIjogbmFtZSxcblx0XHRcdFx0XHRcImRlc2NyaXB0aW9uXCI6IGRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFwicHJpY2VcIjogcHJpY2UsXG5cdFx0XHRcdFx0XCJ0eXBlXCI6IHR5cGUsXG5cdFx0XHRcdFx0XCJpbWFnZVwiOiB1cmwsXG5cdFx0XHRcdFx0XCJldmVudGlkXCI6IE51bWJlcihFdmVudElEKSxcblx0XHRcdFx0XHRcIm93bmVyV2FsbGV0XCI6IHNpZ25lckFkZHJlc3Ncblx0XHRcdFx0fVxuXHRcdFx0fV0pXG5cdFx0dmFyIGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHROZXdUb2tlbklkID0gdGVzdFswXS5nZXQoJ2lkJyk7XG5cdFx0XHRuZXd0b2tlbnJlYyA9IHRlc3RbMF0uZ2V0SWQoKTtcblx0XHRcdHJlc29sdmUoTmV3VG9rZW5JZCk7XG5cdFx0fSkudGhlbihlID0+IHsgcmV0dXJuIGUgfSk7XG5cdFx0Y29uc29sZS5sb2coYXdhaXQgZG9uZSk7XG5cblx0fVxuXHRhc3luYyBmdW5jdGlvbiBjcmVhdGluZ05GVG9uQXVyb3JhKCkge1xuXHRcdGxldCBMb2dvdXJsID0gdXJsO1xuXHRcdHZhciB0b2tlbkFkZHJlc3MgPSBORlRhZGRyZXNzO1xuXHRcdGlmIChcIkNyeXB0b3B1bmtcIiA9PSB0eXBlKSB7XG5cdFx0XHR0b2tlbkFkZHJlc3MgPSBDcnlwdG9wdW5rYWRkcmVzcztcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdFx0ZXZlbnRpZDogRXZlbnRJRCxcblx0XHRcdFx0bmFtZTogbmFtZSxcblx0XHRcdFx0ZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuXHRcdFx0XHRCaWRwcmljZTogcHJpY2UsXG5cdFx0XHRcdHByaWNlOiBwcmljZSxcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0aW1hZ2U6IExvZ291cmxcblx0XHRcdH07XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jbGFpbVRva2VuKFxuXHRcdFx0XHRzaWduZXJBZGRyZXNzLFxuXHRcdFx0XHROZXdUb2tlbklkLFxuXHRcdFx0XHRFdmVudElELFxuXHRcdFx0XHRjcmVhdGVkT2JqZWN0XG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG5cdFx0XHRsZXQgVG9rZW5JRCA9IE51bWJlcihhd2FpdCBjb250cmFjdC5sYXRlc3RUb2tlbklEKCkpO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhUb2tlbklEKTtcblx0XHRcdHZhciB0ZXN0ID0gYXdhaXQgYmFzZSgnbmZ0cycpLnVwZGF0ZShbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImlkXCI6IG5ld3Rva2VucmVjLFxuXHRcdFx0XHRcdFwiZmllbGRzXCI6IHtcblx0XHRcdFx0XHRcdFwiVG9rZW5JRFwiOiBUb2tlbklEXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdKTtcblx0XHRcdGNvbnNvbGUubG9nKHRlc3QpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2RvbmF0aW9uL2F1Y3Rpb24/WyR7RXZlbnRlUmVjSUR9XWA7XG5cdFx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gKGVycm9yKTtcblx0XHR9XG5cblxuXHR9XG5cblxuXHRyZXR1cm4gKDw+XG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRzaXplPVwibGdcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdERvbmF0ZSBORlQgLSB7U2VsZWN0ZWRUaXRsZX1cblx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPk5hbWU8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7bmFtZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwRGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkRlc2NyaXB0aW9uPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5PcGVuaW5nIHByaWNlIGluIHt0eXBlfTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtwcmljZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+RW50ZXIgaW1hZ2UgVVJMPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e3VybElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEltYWdlVXJsXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkNyeXB0b3B1bmsgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e0NyeXB0b3B1bmthZGRyZXNzSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5ORlQgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e05GVGFkZHJlc3NJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQpXG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17Y3JlYXRlTkZUfT5cblx0XHRcdFx0XHRcdFx0RG9uYXRlIE5GVFxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHQ8L01vZGFsPlxuXG5cdDwvPlxuXG5cblx0KTtcbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxMWQxOGZiZDdlNmE4NGFiZWNiNVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsIkZvcm0iLCJCdXR0b24iLCJVc2VGb3JtSW5wdXQiLCJjcmVhdGVUb2tlbkFQSSIsInRvYXN0IiwidXNlQ29udHJhY3QiLCJXYWxsZXRBY2NvdW50IiwiRG9uYXRlTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwic2VuZGVyQWRkcmVzcyIsInR5cGUiLCJFdmVudElEIiwiRXZlbnRlUmVjSUQiLCJTZWxlY3RlZFRpdGxlIiwiZW5kZGF0ZSIsInNlbGVjdGVkV2FsbGV0IiwiQWlydGFibGUiLCJyZXF1aXJlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJhcGlLZXkiLCJiYXNlIiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwiTmV3VG9rZW5JZCIsInBsYWNlaG9sZGVyIiwibmFtZSIsIm5hbWVJbnB1dCIsImFzIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbklucHV0IiwidXJsIiwidXJsSW5wdXQiLCJwcmljZSIsInByaWNlSW5wdXQiLCJORlRhZGRyZXNzIiwiTkZUYWRkcmVzc0lucHV0IiwiQ3J5cHRvcHVua2FkZHJlc3MiLCJDcnlwdG9wdW5rYWRkcmVzc0lucHV0IiwiY3JlYXRlTkZUIiwicHJvbWlzZSIsIkNyZWF0aW5nTkZUQWlydGFibGUiLCJwZW5kaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiY3JlYXRpbmdORlRvbkF1cm9yYSIsIm5ld3Rva2VucmVjIiwiY3JlYXRlIiwiTnVtYmVyIiwidGVzdCIsImRvbmUiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwiZ2V0SWQiLCJ0aGVuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJMb2dvdXJsIiwidG9rZW5BZGRyZXNzIiwiY3JlYXRlZE9iamVjdCIsImV2ZW50aWQiLCJCaWRwcmljZSIsImltYWdlIiwiY2xhaW1Ub2tlbiIsInJlc3VsdCIsImxhdGVzdFRva2VuSUQiLCJUb2tlbklEIiwidXBkYXRlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9