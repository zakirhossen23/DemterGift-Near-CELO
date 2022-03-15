"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/components/components/modals/ViewBidNFTModal.jsx":
/*!**************************************************************!*\
  !*** ./src/components/components/modals/ViewBidNFTModal.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewmodalShow; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pages_Events_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pages/Events/token */ "./src/pages/Events/token.jsx");











function ViewmodalShow(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      id = _ref.id,
      walletType = _ref.walletType,
      title = _ref.title;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var Airtable = __webpack_require__(/*! airtable */ "./node_modules/airtable/lib/airtable.js");

  var base = new Airtable({
    apiKey: 'keyR1Rrcl9O2s9bTs'
  }).base('appgbRCpbkzmdcucO');

  function addZero(num) {
    return num < 10 ? "0".concat(num) : num;
  }

  function AmPM(num) {
    return num < 12 ? 'AM' : 'PM';
  }

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var nearPrice, nearCurrencyUrl, currency_options;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;

              if (!id) {
                _context8.next = 16;
                break;
              }

              nearPrice = 0; //NEAR currency

              _context8.prev = 3;
              nearCurrencyUrl = "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=near-protocol&start=1&limit=1&category=spot&sort=cmc_rank_advanced";
              currency_options = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json, text/plain, */*'
                }
              };
              _context8.next = 8;
              return fetch(nearCurrencyUrl, currency_options).then(function (res) {
                return res.json();
              }).then(function (json) {
                return nearPrice = json;
              }).catch(function (err) {
                return console.error('error:' + err);
              });

            case 8:
              nearPrice = nearPrice.data.marketPairs[0].price;
              _context8.next = 14;
              break;

            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8["catch"](3);
              nearPrice = 0;

            case 14:
              _context8.next = 16;
              return base('tokenbid').select({
                filterByFormula: "({Tokenid} = '".concat(id, "')"),
                // Selecting the first 10 records in Grid view:
                maxRecords: 10,
                sort: [{
                  field: "Bidprice",
                  direction: "desc"
                }],
                view: "Grid view"
              }).eachPage( /*#__PURE__*/function () {
                var _page = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(records, fetchNextPage) {
                  var arr, element;
                  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          // This function (`page`) will get called for each page of records.
                          arr = [];
                          _context7.next = 3;
                          return records.forEach(function (record) {
                            var _context, _context2, _context3, _context4, _context5, _context6;

                            var goalPrice2usd = 0;
                            goalPrice2usd = Number(Number(record.get("Bidprice")) * nearPrice);
                            var Datetime = new Date(record.get("Date"));

                            var currentdate = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context5 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_4___default()(_context6 = "".concat(addZero(Datetime.getDate()), "/")).call(_context6, addZero(Datetime.getMonth() + 1), "/")).call(_context5, addZero(Datetime.getFullYear()), " ")).call(_context4, addZero(Datetime.getHours()), ":")).call(_context3, addZero(Datetime.getMinutes()), ":")).call(_context2, addZero(Datetime.getSeconds()), " ")).call(_context, AmPM(Datetime.getHours()));

                            arr.push({
                              Date: currentdate,
                              UserName: record.get("UserName"),
                              bidpriceusd: formatter.format(goalPrice2usd),
                              Bidprice: record.get("Bidprice")
                            });
                          });

                        case 3:
                          setList(arr); // fetchNextPage();

                          // fetchNextPage();
                          if (document.getElementById("LoadingView")) document.getElementById("LoadingView").style = "display:none";

                          if (document.getElementById("Loadingtable")) {
                            element = document.getElementById("Loadingtable");
                            element.style = "display:block";
                            element.setAttribute("id", "");
                          }

                        case 6:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee);
                }));

                function page(_x, _x2) {
                  return _page.apply(this, arguments);
                }

                return page;
              }(), function done(err) {
                if (err) {
                  console.error(err);
                  return;
                }
              });

            case 16:
              _context8.next = 21;
              break;

            case 18:
              _context8.prev = 18;
              _context8.t1 = _context8["catch"](0);
              console.error(_context8.t1);

            case 21:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee2, null, [[0, 18], [3, 11]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    fetchContractData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: show,
    onHide: onHide,
    onShow: fetchContractData,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "xl",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Title, {
    id: "contained-modal-title-vcenter"
  }, "View Bid - ", title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "LoadingView",
    className: "LoadingArea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h1", null, "Loading...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    id: "Loadingtable",
    style: {
      display: 'none'
    },
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableHeaderContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderDateContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    className: "header"
  }, "Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderUserContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    className: "header"
  }, "User Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
    className: "tableheaderBidContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h4", {
    className: "header"
  }, "Bid")))), " ", _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(list).call(list, function (listItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      key: listItem.Id,
      className: "tableFullRowContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellDateContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      className: "cell"
    }, listItem.Date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellUserContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      className: "cell"
    }, listItem.UserName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
      className: "tableRowCellBidContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("h5", {
      className: "cell"
    }, "$", listItem.bidpriceusd, " (", listItem.Bidprice, " ", walletType, ")")))));
  }))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f4b81ed264a629c8d854"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjNkZjljYTYzNDNhZmMzMTM0ZDQwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTUSxhQUFULE9BTVo7QUFBQSxNQUxGQyxJQUtFLFFBTEZBLElBS0U7QUFBQSxNQUpGQyxNQUlFLFFBSkZBLE1BSUU7QUFBQSxNQUhGQyxFQUdFLFFBSEZBLEVBR0U7QUFBQSxNQUZGQyxVQUVFLFFBRkZBLFVBRUU7QUFBQSxNQURGQyxLQUNFLFFBREZBLEtBQ0U7O0FBQ0Ysa0JBQXdCWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9ZLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLE1BQUlDLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyx5REFBRCxDQUF0Qjs7QUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBSUYsUUFBSixDQUFhO0FBQUVHLElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBQWIsRUFBOENELElBQTlDLENBQW1ELG1CQUFuRCxDQUFYOztBQUVBLFdBQVNFLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQ3JCLFdBQU9BLEdBQUcsR0FBRyxFQUFOLGNBQWVBLEdBQWYsSUFBdUJBLEdBQTlCO0FBQ0E7O0FBQ0QsV0FBU0MsSUFBVCxDQUFjRCxHQUFkLEVBQW1CO0FBQ2xCLFdBQU9BLEdBQUcsR0FBRyxFQUFOLEdBQVcsSUFBWCxHQUFrQixJQUF6QjtBQUNBOztBQUNELE1BQU1FLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDaERDLElBQUFBLHFCQUFxQixFQUFFLENBRHlCO0FBRWhEQyxJQUFBQSxxQkFBcUIsRUFBRTtBQUZ5QixHQUEvQixDQUFsQjs7QUFYRSxXQWlCYUMsaUJBakJiO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGtOQWlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QkFDQztBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNDO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FBc0JELFFBQVEsQ0FBQ3JCLElBQS9CLENBREQsQ0FERCxlQUlDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUFzQnFCLFFBQVEsQ0FBQ1osUUFBL0IsQ0FERCxDQUpELGVBT0M7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDQztBQUFJLGVBQVMsRUFBQztBQUFkLFlBQXVCWSxRQUFRLENBQUNYLFdBQWhDLFFBQStDVyxRQUFRLENBQUNULFFBQXhELE9BQW1FL0QsVUFBbkUsTUFERCxDQVBELENBREQsQ0FERCxDQURnQjtBQUFBLEdBQUwsQ0FkYixDQUpELENBZEQsQ0FERDtBQXVEQTs7Ozs7Ozs7VUM5SkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMvbW9kYWxzL1ZpZXdCaWRORlRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB7IGJpZHNnZXRieXRva2VuaWQgfSBmcm9tICdAL3BhZ2VzL0V2ZW50cy90b2tlbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld21vZGFsU2hvdyh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0aWQsXG5cdHdhbGxldFR5cGUsXG5cdHRpdGxlXG59KSB7XG5cdGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblx0dmFyIEFpcnRhYmxlID0gcmVxdWlyZSgnYWlydGFibGUnKTtcblx0dmFyIGJhc2UgPSBuZXcgQWlydGFibGUoeyBhcGlLZXk6ICdrZXlSMVJyY2w5TzJzOWJUcycgfSkuYmFzZSgnYXBwZ2JSQ3Bia3ptZGN1Y08nKTtcblxuXHRmdW5jdGlvbiBhZGRaZXJvKG51bSkge1xuXHRcdHJldHVybiBudW0gPCAxMCA/IGAwJHtudW19YCA6IG51bTtcblx0fVxuXHRmdW5jdGlvbiBBbVBNKG51bSkge1xuXHRcdHJldHVybiBudW0gPCAxMiA/ICdBTScgOiAnUE0nO1xuXHR9XG5cdGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG5cdFx0bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuXHRcdG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcblx0fSk7XG5cblxuXHRhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGlkKSB7XG5cdFx0XHRcdGxldCBuZWFyUHJpY2UgPSAwO1xuXHRcdFx0XHQvL05FQVIgY3VycmVuY3lcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmVhckN1cnJlbmN5VXJsID0gXCJodHRwczovL2FwaS5jb2lubWFya2V0Y2FwLmNvbS9kYXRhLWFwaS92My9jcnlwdG9jdXJyZW5jeS9tYXJrZXQtcGFpcnMvbGF0ZXN0P3NsdWc9bmVhci1wcm90b2NvbCZzdGFydD0xJmxpbWl0PTEmY2F0ZWdvcnk9c3BvdCZzb3J0PWNtY19yYW5rX2FkdmFuY2VkXCI7XG5cdFx0XHRcdFx0Y29uc3QgY3VycmVuY3lfb3B0aW9ucyA9IHtcblx0XHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRhd2FpdCBmZXRjaChuZWFyQ3VycmVuY3lVcmwsIGN1cnJlbmN5X29wdGlvbnMpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG5cdFx0XHRcdFx0XHQudGhlbihqc29uID0+IG5lYXJQcmljZSA9IGpzb24pXG5cdFx0XHRcdFx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicgKyBlcnIpKTtcblx0XHRcdFx0XHRuZWFyUHJpY2UgPSBuZWFyUHJpY2UuZGF0YS5tYXJrZXRQYWlyc1swXS5wcmljZTtcblx0XHRcdFx0fSBjYXRjaCAoZXgpIHtcblx0XHRcdFx0XHRuZWFyUHJpY2UgPSAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXdhaXQgYmFzZSgndG9rZW5iaWQnKS5zZWxlY3Qoe1xuXHRcdFx0XHRcdGZpbHRlckJ5Rm9ybXVsYTogYCh7VG9rZW5pZH0gPSAnJHtpZH0nKWAsXG5cdFx0XHRcdFx0Ly8gU2VsZWN0aW5nIHRoZSBmaXJzdCAxMCByZWNvcmRzIGluIEdyaWQgdmlldzpcblx0XHRcdFx0XHRtYXhSZWNvcmRzOiAxMCxcblx0XHRcdFx0XHRzb3J0OiBbeyBmaWVsZDogXCJCaWRwcmljZVwiLCBkaXJlY3Rpb246IFwiZGVzY1wiIH1dLFxuXHRcdFx0XHRcdHZpZXc6IFwiR3JpZCB2aWV3XCJcblx0XHRcdFx0fSkuZWFjaFBhZ2UoYXN5bmMgZnVuY3Rpb24gcGFnZShyZWNvcmRzLCBmZXRjaE5leHRQYWdlKSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyBmdW5jdGlvbiAoYHBhZ2VgKSB3aWxsIGdldCBjYWxsZWQgZm9yIGVhY2ggcGFnZSBvZiByZWNvcmRzLlxuXHRcdFx0XHRcdHZhciBhcnIgPSBbXTtcblx0XHRcdFx0XHRhd2FpdCByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuXHRcdFx0XHRcdFx0dmFyIGdvYWxQcmljZTJ1c2QgPSAwO1xuXHRcdFx0XHRcdFx0Z29hbFByaWNlMnVzZCA9IE51bWJlcihOdW1iZXIocmVjb3JkLmdldChcIkJpZHByaWNlXCIpKSAqIG5lYXJQcmljZSk7XG5cdFx0XHRcdFx0XHRjb25zdCBEYXRldGltZSA9IG5ldyBEYXRlKHJlY29yZC5nZXQoXCJEYXRlXCIpKTtcblx0XHRcdFx0XHRcdGxldCBjdXJyZW50ZGF0ZSA9IGAke2FkZFplcm8oRGF0ZXRpbWUuZ2V0RGF0ZSgpKX0vJHthZGRaZXJvKERhdGV0aW1lLmdldE1vbnRoKCkgKyAxKX0vJHthZGRaZXJvKERhdGV0aW1lLmdldEZ1bGxZZWFyKCkpfSAke2FkZFplcm8oRGF0ZXRpbWUuZ2V0SG91cnMoKSl9OiR7YWRkWmVybyhEYXRldGltZS5nZXRNaW51dGVzKCkpfToke2FkZFplcm8oRGF0ZXRpbWUuZ2V0U2Vjb25kcygpKX0gJHtBbVBNKERhdGV0aW1lLmdldEhvdXJzKCkpfWBcblxuXHRcdFx0XHRcdFx0YXJyLnB1c2goe1xuXHRcdFx0XHRcdFx0XHREYXRlOiBjdXJyZW50ZGF0ZSxcblx0XHRcdFx0XHRcdFx0VXNlck5hbWU6IHJlY29yZC5nZXQoXCJVc2VyTmFtZVwiKSxcblx0XHRcdFx0XHRcdFx0YmlkcHJpY2V1c2Q6IGZvcm1hdHRlci5mb3JtYXQoZ29hbFByaWNlMnVzZCksXG5cdFx0XHRcdFx0XHRcdEJpZHByaWNlOiByZWNvcmQuZ2V0KFwiQmlkcHJpY2VcIilcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0c2V0TGlzdChhcnIpO1xuXHRcdFx0XHRcdC8vIGZldGNoTmV4dFBhZ2UoKTtcblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nVmlld1wiKSlcblx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1ZpZXdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmd0YWJsZVwiKSkge1xuXHRcdFx0XHRcdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmd0YWJsZVwiKTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuc3R5bGUgPSBcImRpc3BsYXk6YmxvY2tcIjtcblx0XHRcdFx0XHRcdChlbGVtZW50KS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlwiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG5cdFx0XHRcdFx0aWYgKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHJldHVybjsgfVxuXG5cdFx0XHRcdH0pO1xuXG5cblxuXG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoQ29udHJhY3REYXRhKCk7XG5cblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRvblNob3c9e2ZldGNoQ29udHJhY3REYXRhfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0c2l6ZT1cInhsXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRWaWV3IEJpZCAtIHt0aXRsZX1cblx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PGRpdiBpZD0nTG9hZGluZ1ZpZXcnIGNsYXNzTmFtZT1cIkxvYWRpbmdBcmVhXCI+XG5cdFx0XHRcdFx0PGgxPkxvYWRpbmcuLi48L2gxPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD0nTG9hZGluZ3RhYmxlJyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlSGVhZGVyJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZUhlYWRlckNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZWhlYWRlckRhdGVDb250YWluZXInID5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiaGVhZGVyXCI+RGF0ZTwvaDQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYmxlaGVhZGVyVXNlckNvbnRhaW5lclwiID5cblx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiaGVhZGVyXCI+VXNlciBOYW1lPC9oND5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFibGVoZWFkZXJCaWRDb250YWluZXJcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImhlYWRlclwiPkJpZDwvaDQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L2Rpdj4ge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9J3RhYmxlRnVsbFJvd0NvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbENvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGFibGVSb3dDZWxsRGF0ZUNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJjZWxsXCI+e2xpc3RJdGVtLkRhdGV9PC9oNT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q2VsbFVzZXJDb250YWluZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2VsbFwiPntsaXN0SXRlbS5Vc2VyTmFtZX08L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93Q2VsbEJpZENvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiY2VsbFwiPiR7bGlzdEl0ZW0uYmlkcHJpY2V1c2R9ICh7bGlzdEl0ZW0uQmlkcHJpY2V9IHt3YWxsZXRUeXBlfSk8L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+KSl9XG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImY0YjgxZWQyNjRhNjI5YzhkODU0XCI7IH0iXSwibmFtZXMiOlsiTW9kYWwiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29sIiwiSW1hZ2UiLCJCdXR0b24iLCJiaWRzZ2V0Ynl0b2tlbmlkIiwiVmlld21vZGFsU2hvdyIsInNob3ciLCJvbkhpZGUiLCJpZCIsIndhbGxldFR5cGUiLCJ0aXRsZSIsImxpc3QiLCJzZXRMaXN0IiwiQWlydGFibGUiLCJyZXF1aXJlIiwiYmFzZSIsImFwaUtleSIsImFkZFplcm8iLCJudW0iLCJBbVBNIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsImZldGNoQ29udHJhY3REYXRhIiwibmVhclByaWNlIiwibmVhckN1cnJlbmN5VXJsIiwiY3VycmVuY3lfb3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJkYXRhIiwibWFya2V0UGFpcnMiLCJwcmljZSIsInNlbGVjdCIsImZpbHRlckJ5Rm9ybXVsYSIsIm1heFJlY29yZHMiLCJzb3J0IiwiZmllbGQiLCJkaXJlY3Rpb24iLCJ2aWV3IiwiZWFjaFBhZ2UiLCJyZWNvcmRzIiwiZmV0Y2hOZXh0UGFnZSIsImFyciIsImZvckVhY2giLCJyZWNvcmQiLCJnb2FsUHJpY2UydXNkIiwiTnVtYmVyIiwiZ2V0IiwiRGF0ZXRpbWUiLCJEYXRlIiwiY3VycmVudGRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJwdXNoIiwiVXNlck5hbWUiLCJiaWRwcmljZXVzZCIsImZvcm1hdCIsIkJpZHByaWNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInBhZ2UiLCJkb25lIiwiZGlzcGxheSIsImxpc3RJdGVtIiwiSWQiXSwic291cmNlUm9vdCI6IiJ9