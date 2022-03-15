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
  }, "Donate ", type, " - ", SelectedTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_10__["default"].Body, {
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
  }, "Donate ", type))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "606de8c1c7ed8538dc99"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmZlMjhkZDk5ZTM3NWUxY2E4OTFlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRWUsU0FBU1csY0FBVCxPQVVaO0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsYUFPRSxRQVBGQSxhQU9FO0FBQUEsTUFORkMsSUFNRSxRQU5GQSxJQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsV0FJRSxRQUpGQSxXQUlFO0FBQUEsTUFIRkMsYUFHRSxRQUhGQSxhQUdFO0FBQUEsTUFGRkMsT0FFRSxRQUZGQSxPQUVFO0FBQUEsTUFERkMsY0FDRSxRQURGQSxjQUNFOztBQUVGLE1BQUlDLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyx5REFBRCxDQUF0Qjs7QUFDQUQsRUFBQUEsUUFBUSxDQUFDRSxTQUFULENBQW1CO0FBQ2xCQyxJQUFBQSxXQUFXLEVBQUUsMEJBREs7QUFFbEJDLElBQUFBLE1BQU0sRUFBRTtBQUZVLEdBQW5COztBQUlBLE1BQU1DLElBQUksR0FBR0osbUZBQUEsQ0FBeUIsbUJBQXpCLENBQWI7O0FBRUEscUJBQW9DYixpRUFBVyxDQUFDLFFBQUQsQ0FBL0M7QUFBQSxNQUFRa0IsUUFBUixnQkFBUUEsUUFBUjtBQUFBLE1BQWtCQyxhQUFsQixnQkFBa0JBLGFBQWxCOztBQUNBLE1BQUlDLFVBQVUsR0FBRyxDQUFqQjs7QUFFQSxzQkFBMEJ2Qix5REFBWSxDQUFDO0FBQ3RDUyxJQUFBQSxJQUFJLEVBQUUsTUFEZ0M7QUFFdENlLElBQUFBLFdBQVcsRUFBRTtBQUZ5QixHQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsU0FBYjs7QUFJQSx1QkFBd0MxQix5REFBWSxDQUFDO0FBQ3BEMkIs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RUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsbUVBQUQsc0JBREQsRUFFRUcsZ0JBRkYsQ0FMRCxlQVNDLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxtRUFBRCw2QkFBOEJwQixJQUE5QixDQURELEVBRUV3QixVQUZGLENBVEQsZUFjQyxpREFBQyxtRUFBRDtBQUFZLGFBQVMsRUFBQyxNQUF0QjtBQUE2QixhQUFTLEVBQUM7QUFBdkMsa0JBQ0MsaURBQUMsbUVBQUQsMEJBREQsRUFFRUYsUUFGRixDQWRELEVBa0JHdEIsSUFBSSxJQUFJLFlBQVQsZ0JBQ0EsaURBQUMsbUVBQUQ7QUFBWSxhQUFTLEVBQUMsTUFBdEI7QUFBNkIsYUFBUyxFQUFDO0FBQXZDLGtCQUNDLGlEQUFDLG1FQUFELDZCQURELEVBRUU0QixzQkFGRixDQURBLGdCQU1BLGlEQUFDLG1FQUFEO0FBQVksYUFBUyxFQUFDLE1BQXRCO0FBQTZCLGFBQVMsRUFBQztBQUF2QyxrQkFDQyxpREFBQyxtRUFBRCxzQkFERCxFQUVFRixlQUZGLENBeEJGLGVBZ0NDO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUV3QyxNQUFBQSxTQUFTLEVBQUU7QUFBYjtBQUEvQixrQkFDQyxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBQyxTQUFoQjtBQUEwQixXQUFPLEVBQUVyQztBQUFuQyxnQkFDUzdCLElBRFQsQ0FERCxDQWhDRCxDQURELENBYkQsQ0FETyxDQUFSO0FBNERBOzs7Ozs7OztVQ25ORCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwuanN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IHsgY3JlYXRlVG9rZW5BUEkgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy90b2tlbic7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QWNjb3VudCB9IGZyb20gJ25lYXItYXBpLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9uYXRlTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHR5cGUsXG5cdEV2ZW50SUQsXG5cdEV2ZW50ZVJlY0lELFxuXHRTZWxlY3RlZFRpdGxlLFxuXHRlbmRkYXRlLFxuXHRzZWxlY3RlZFdhbGxldFxufSkge1xuXG5cdHZhciBBaXJ0YWJsZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJyk7XG5cdEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG5cdFx0ZW5kcG9pbnRVcmw6ICdodHRwczovL2FwaS5haXJ0YWJsZS5jb20nLFxuXHRcdGFwaUtleTogJ2tleVIxUnJjbDlPMnM5YlRzJ1xuXHR9KTtcblx0Y29uc3QgYmFzZSA9IHJlcXVpcmUoJ2FpcnRhYmxlJykuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXHRjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XG5cdGxldCBOZXdUb2tlbklkID0gMDtcblxuXHRjb25zdCBbbmFtZSwgbmFtZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgbmFtZScsXG5cdH0pO1xuXHRjb25zdCBbZGVzY3JpcHRpb24sIGRlc2NyaXB0aW9uSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHRhczogJ3RleHRhcmVhJyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIGRlc2NyaXB0aW9uJyxcblx0fSk7XG5cdGNvbnN0IFt1cmwsIHVybElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgaW1hZ2UgdXJsJyxcblx0fSk7XG5cblx0Y29uc3QgW3ByaWNlLCBwcmljZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgUHJpY2UnLFxuXHR9KTtcblx0Y29uc3QgW05GVGFkZHJlc3MsIE5GVGFkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIE5GVCBhZGRyZXNzJyxcblx0fSk7XG5cdGNvbnN0IFtDcnlwdG9wdW5rYWRkcmVzcywgQ3J5cHRvcHVua2FkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIENyeXB0b3B1bmsgYWRkcmVzcycsXG5cdH0pO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5GVCgpIHtcblx0XHRhd2FpdCB0b2FzdC5wcm9taXNlKENyZWF0aW5nTkZUQWlydGFibGUsIHtcblx0XHRcdHBlbmRpbmc6IGBDcmVhdGluZyBORlQgb24gQWlydGFibGUuLi5gLFxuXHRcdFx0ZXJyb3I6IGBQbGVhc2UgdHJ5IGFnYWluYCxcblx0XHRcdHN1Y2Nlc3M6IGBDcmVhdGVkIE5GVCBvbiBBaXJ0YWJsZSFgXG5cdFx0fSk7XG5cdFx0YXdhaXQgdG9hc3QucHJvbWlzZShjcmVhdGluZ05GVG9uQXVyb3JhLCB7XG5cdFx0XHRwZW5kaW5nOiBgQ3JlYXRpbmcgTkZUIG9uIEF1cm9yYS4uLmAsXG5cdFx0XHRlcnJvcjogYFBsZWFzZSB0cnkgYWdhaW5gLFxuXHRcdFx0c3VjY2VzczogYENyZWF0ZWQgTkZUIG9uIEF1cm9yYSFgXG5cdFx0fSk7XG5cdH1cblx0bGV0IG5ld3Rva2VucmVjID0gJyc7XG5cdGFzeW5jIGZ1bmN0aW9uIENyZWF0aW5nTkZUQWlydGFibGUoKSB7XG5cblx0XHR2YXIgQWlydGFibGUgPSByZXF1aXJlKCdhaXJ0YWJsZScpO1xuXHRcdEFpcnRhYmxlLmNvbmZpZ3VyZSh7XG5cdFx0XHRlbmRwb2ludFVybDogJ2h0dHBzOi8vYXBpLmFpcnRhYmxlLmNvbScsXG5cdFx0XHRhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcydcblx0XHR9KTtcblx0XHRjb25zdCBiYXNlID0gcmVxdWlyZSgnYWlydGFibGUnKS5iYXNlKCdhcHBnYlJDcGJrem1kY3VjTycpO1xuXG5cblx0XHR2YXIgdGVzdCA9IGF3YWl0IGJhc2UoJ25mdHMnKS5jcmVhdGUoW1xuXHRcdFx0e1xuXHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IG5hbWUsXG5cdFx0XHRcdFx0XCJkZXNjcmlwdGlvblwiOiBkZXNjcmlwdGlvbixcblx0XHRcdFx0XHRcInByaWNlXCI6IHByaWNlLFxuXHRcdFx0XHRcdFwidHlwZVwiOiB0eXBlLFxuXHRcdFx0XHRcdFwiaW1hZ2VcIjogdXJsLFxuXHRcdFx0XHRcdFwiZXZlbnRpZFwiOiBOdW1iZXIoRXZlbnRJRCksXG5cdFx0XHRcdFx0XCJvd25lcldhbGxldFwiOiBzaWduZXJBZGRyZXNzXG5cdFx0XHRcdH1cblx0XHRcdH1dKVxuXHRcdHZhciBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0TmV3VG9rZW5JZCA9IHRlc3RbMF0uZ2V0KCdpZCcpO1xuXHRcdFx0bmV3dG9rZW5yZWMgPSB0ZXN0WzBdLmdldElkKCk7XG5cdFx0XHRyZXNvbHZlKE5ld1Rva2VuSWQpO1xuXHRcdH0pLnRoZW4oZSA9PiB7IHJldHVybiBlIH0pO1xuXHRcdGNvbnNvbGUubG9nKGF3YWl0IGRvbmUpO1xuXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gY3JlYXRpbmdORlRvbkF1cm9yYSgpIHtcblx0XHRsZXQgTG9nb3VybCA9IHVybDtcblx0XHR2YXIgdG9rZW5BZGRyZXNzID0gTkZUYWRkcmVzcztcblx0XHRpZiAoXCJDcnlwdG9wdW5rXCIgPT0gdHlwZSkge1xuXHRcdFx0dG9rZW5BZGRyZXNzID0gQ3J5cHRvcHVua2FkZHJlc3M7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHRcdGV2ZW50aWQ6IEV2ZW50SUQsXG5cdFx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcblx0XHRcdFx0QmlkcHJpY2U6IHByaWNlLFxuXHRcdFx0XHRwcmljZTogcHJpY2UsXG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGltYWdlOiBMb2dvdXJsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY2xhaW1Ub2tlbihcblx0XHRcdFx0c2lnbmVyQWRkcmVzcyxcblx0XHRcdFx0TmV3VG9rZW5JZCxcblx0XHRcdFx0RXZlbnRJRCxcblx0XHRcdFx0Y3JlYXRlZE9iamVjdFxuXHRcdFx0KTtcblxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblxuXHRcdFx0bGV0IFRva2VuSUQgPSBOdW1iZXIoYXdhaXQgY29udHJhY3QubGF0ZXN0VG9rZW5JRCgpKTtcblxuXHRcdFx0Y29uc29sZS5sb2coVG9rZW5JRCk7XG5cdFx0XHR2YXIgdGVzdCA9IGF3YWl0IGJhc2UoJ25mdHMnKS51cGRhdGUoW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJpZFwiOiBuZXd0b2tlbnJlYyxcblx0XHRcdFx0XHRcImZpZWxkc1wiOiB7XG5cdFx0XHRcdFx0XHRcIlRva2VuSURcIjogVG9rZW5JRFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XSk7XG5cdFx0XHRjb25zb2xlLmxvZyh0ZXN0KTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9kb25hdGlvbi9hdWN0aW9uP1ske0V2ZW50ZVJlY0lEfV1gO1xuXHRcdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIChlcnJvcik7XG5cdFx0fVxuXG5cblx0fVxuXG5cblx0cmV0dXJuICg8PlxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17c2hvd31cblx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0c2l6ZT1cImxnXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHREb25hdGUge3R5cGV9IC0ge1NlbGVjdGVkVGl0bGV9XG5cdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e25hbWVJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cERlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5EZXNjcmlwdGlvbjwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtkZXNjcmlwdGlvbklucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+T3BlbmluZyBwcmljZSBpbiB7dHlwZX08L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7cHJpY2VJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwSW1hZ2VVcmxcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkVudGVyIGltYWdlIFVSTDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHt1cmxJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5DcnlwdG9wdW5rIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtDcnlwdG9wdW5rYWRkcmVzc0lucHV0fVxuXHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwSW1hZ2VVcmxcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+TkZUIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtORlRhZGRyZXNzSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0KVxuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NyZWF0ZU5GVH0+XG5cdFx0XHRcdFx0XHRcdERvbmF0ZSB7dHlwZX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0PC9Nb2RhbD5cblxuXHQ8Lz5cblxuXG5cdCk7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNjA2ZGU4YzFjN2VkODUzOGRjOTlcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJGb3JtIiwiQnV0dG9uIiwiVXNlRm9ybUlucHV0IiwiY3JlYXRlVG9rZW5BUEkiLCJ0b2FzdCIsInVzZUNvbnRyYWN0IiwiV2FsbGV0QWNjb3VudCIsIkRvbmF0ZU5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsInNlbmRlckFkZHJlc3MiLCJ0eXBlIiwiRXZlbnRJRCIsIkV2ZW50ZVJlY0lEIiwiU2VsZWN0ZWRUaXRsZSIsImVuZGRhdGUiLCJzZWxlY3RlZFdhbGxldCIsIkFpcnRhYmxlIiwicmVxdWlyZSIsImNvbmZpZ3VyZSIsImVuZHBvaW50VXJsIiwiYXBpS2V5IiwiYmFzZSIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsIk5ld1Rva2VuSWQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJuYW1lSW5wdXQiLCJhcyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JbnB1dCIsInVybCIsInVybElucHV0IiwicHJpY2UiLCJwcmljZUlucHV0IiwiTkZUYWRkcmVzcyIsIk5GVGFkZHJlc3NJbnB1dCIsIkNyeXB0b3B1bmthZGRyZXNzIiwiQ3J5cHRvcHVua2FkZHJlc3NJbnB1dCIsImNyZWF0ZU5GVCIsInByb21pc2UiLCJDcmVhdGluZ05GVEFpcnRhYmxlIiwicGVuZGluZyIsImVycm9yIiwic3VjY2VzcyIsImNyZWF0aW5nTkZUb25BdXJvcmEiLCJuZXd0b2tlbnJlYyIsImNyZWF0ZSIsIk51bWJlciIsInRlc3QiLCJkb25lIiwicmVzb2x2ZSIsInJlamVjdCIsImdldCIsImdldElkIiwidGhlbiIsImUiLCJjb25zb2xlIiwibG9nIiwiTG9nb3VybCIsInRva2VuQWRkcmVzcyIsImNyZWF0ZWRPYmplY3QiLCJldmVudGlkIiwiQmlkcHJpY2UiLCJpbWFnZSIsImNsYWltVG9rZW4iLCJyZXN1bHQiLCJsYXRlc3RUb2tlbklEIiwiVG9rZW5JRCIsInVwZGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==