"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./src/modals/login/index.tsx":
/*!************************************!*\
  !*** ./src/modals/login/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.css */ "./src/modals/login/app.css");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _near_contracts_contract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/near-contracts/contract */ "./src/near-contracts/contract.js");












function Login(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      redirecting = _ref.redirecting;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      _useState2 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      ConnectStatus = _useState2[0],
      setConnectStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState4 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      ConnectedAurora = _useState4[0],
      setConnectedAurora = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState6 = (0,_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      ConnectedCelo = _useState6[0],
      setConnectedCelo = _useState6[1]; //NEAR


  function NearWallet() {
    var booltrue = true;

    while (booltrue) {
      try {
        console.log(window.walletAccount.isSignedIn());
        break;
      } catch (ex) {
        continue;
      }

      ;
    }

    if (window.walletAccount.isSignedIn() == false) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        onClick: onClickConnectNear,
        style: {
          display: "flex",
          padding: "10px",
          borderRadius: "5px",
          width: "350px",
          cursor: "pointer",
          margin: "20px 0"
        },
        className: "btn-primary whitebtn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
        style: {
          height: '51px',
          width: '51px'
        },
        src: "https://i.postimg.cc/nzQMgnnJ/Near.png"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '11px',
          height: '51px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        style: {
          fontWeight: 'bolder',
          padding: '0',
          fontFamily: 'sans-serif',
          height: '100%',
          margin: '-12px 0'
        }
      }, "NEAR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        style: {
          fontSize: '15px',
          padding: '0',
          margin: '0',
          fontFamily: 'sans-serif'
        }
      }, "Connect With NEAR wallet"))));
    }

    if (window.walletAccount.isSignedIn() == true) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        style: {
          display: "flex",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          width: "350px",
          margin: "20px 0"
        },
        className: "btn-primary whitebtn active"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        onClick: onClickConnectedNEAR,
        style: {
          display: 'flex',
          background: 'transparent',
          width: '100%',
          padding: '0'
        },
        className: "btn-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
        style: {
          height: '51px',
          width: '51px'
        },
        src: "https://i.postimg.cc/nzQMgnnJ/Near.png"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        style: {
          display: 'flex',
          background: 'transparent',
          flexDirection: 'column',
          marginLeft: '11px',
          height: '51px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        style: {
          fontWeight: 'bolder',
          padding: '0',
          fontFamily: 'sans-serif',
          height: '100%',
          margin: '-12px 0'
        }
      }, "NEAR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        style: {
          fontSize: '15px',
          padding: '0',
          margin: '0',
          fontFamily: 'sans-serif'
        }
      }, "Connected NEAR wallet"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("button", {
        onClick: onClickDisConnectNEAR,
        type: "button",
        className: "btn btn-logout",
        style: {
          width: 'initial'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        className: "icon closebtn",
        style: {
          background: '#9d9999',
          float: 'right',
          borderRadius: '7px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("svg", {
        style: {
          fill: 'red'
        },
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        height: "32",
        width: "32"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"
      }))))));
    }
  }

  function onClickConnectNear() {
    return _onClickConnectNear.apply(this, arguments);
  }

  function _onClickConnectNear() {
    _onClickConnectNear = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              window.walletAccount.requestSignIn(window.nearConfig.contractName, 'Demeter');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onClickConnectNear.apply(this, arguments);
  }

  function onClickConnectedNEAR() {
    return _onClickConnectedNEAR.apply(this, arguments);
  }

  function _onClickConnectedNEAR() {
    _onClickConnectedNEAR = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onClickConnectedNEAR.apply(this, arguments);
  }

  function onClickDisConnectNEAR() {
    return _onClickDisConnectNEAR.apply(this, arguments);
  } //Aurora


  function _onClickDisConnectNEAR() {
    _onClickDisConnectNEAR = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return window.walletAccount.signOut();

            case 2:
              window.location.href = window.location.href;

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onClickDisConnectNEAR.apply(this, arguments);
  }

  function AuroraWallet() {
    var booltrue = true;

    while (booltrue) {
      try {
        console.log(window.walletAccount.isSignedIn());
        break;
      } catch (ex) {
        continue;
      }

      ;
    }

    if (window.ethereum == null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        onClick: function onClick() {
          window.open("https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank");
        },
        style: {
          display: "flex",
          padding: "10px",
          width: "350px",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "20px 0"
        },
        className: "btn-primary whitebtn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
        style: {
          height: '51px',
          width: '51px'
        },
        src: "https://i.postimg.cc/3wCZzRCV/Aurora.jpg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '11px',
          height: '51px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        style: {
          fontWeight: 'bolder',
          padding: '0',
          fontFamily: 'sans-serif',
          height: '100%',
          margin: '-12px 0'
        }
      }, "Aurora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        style: {
          fontSize: '15px',
          padding: '0',
          margin: '0',
          fontFamily: 'sans-serif'
        }
      }, "Install Metamask wallet"))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, !ConnectedAurora ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      onClick: onClickConnectAurora,
      style: {
        display: "flex",
        padding: "10px",
        width: "350px",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "20px 0"
      },
      className: "btn-primary whitebtn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      style: {
        height: '51px',
        width: '51px'
      },
      src: "https://i.postimg.cc/3wCZzRCV/Aurora.jpg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '11px',
        height: '51px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      style: {
        fontWeight: 'bolder',
        padding: '0',
        fontFamily: 'sans-serif',
        height: '100%',
        margin: '-12px 0'
      }
    }, "Aurora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      style: {
        fontSize: '15px',
        padding: '0',
        margin: '0',
        fontFamily: 'sans-serif'
      }
    }, "Connect With Metamask wallet"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: "flex",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "350px",
        margin: "20px 0"
      },
      className: "btn-primary whitebtn active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      onClick: onClickConnectedAurora,
      style: {
        display: 'flex',
        background: 'transparent',
        width: '100%',
        padding: '0'
      },
      className: "btn-primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      style: {
        height: '51px',
        width: '51px'
      },
      src: "https://doc.aurora.dev/img/favicon.svg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '11px',
        height: '51px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      style: {
        fontWeight: 'bolder',
        padding: '0',
        fontFamily: 'sans-serif',
        height: '100%',
        margin: '-12px 0'
      }
    }, "Aurora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      style: {
        fontSize: '15px',
        padding: '0',
        margin: '0',
        fontFamily: 'sans-serif'
      }
    }, "Connected Metamask wallet")))));
  }

  function onClickConnectAurora() {
    return _onClickConnectAurora.apply(this, arguments);
  }

  function _onClickConnectAurora() {
    _onClickConnectAurora = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var result, getacc;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 2:
              result = _context4.sent;
              result;
              _context4.prev = 4;
              _context4.next = 7;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '1313161555'
                }]
              });

            case 7:
              getacc = _context4.sent;
              getacc;
              _context4.next = 22;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](4);

              if (!(_context4.t0.code === 4902)) {
                _context4.next = 22;
                break;
              }

              _context4.prev = 14;
              _context4.next = 17;
              return window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '1313161555',
                  chainName: 'Aurora Testnet',
                  nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18
                  },
                  rpcUrls: ['https://testnet.aurora.dev']
                }]
              });

            case 17:
              _context4.next = 22;
              break;

            case 19:
              _context4.prev = 19;
              _context4.t1 = _context4["catch"](14);
              // handle "add" error
              console.log(_context4.t1);

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[4, 11], [14, 19]]);
    }));
    return _onClickConnectAurora.apply(this, arguments);
  }

  function onClickConnectedAurora() {
    return _onClickConnectedAurora.apply(this, arguments);
  }

  function _onClickConnectedAurora() {
    _onClickConnectedAurora = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _onClickConnectedAurora.apply(this, arguments);
  }

  function onClickContinue() {
    return _onClickContinue.apply(this, arguments);
  } //Celo


  function _onClickContinue() {
    _onClickContinue = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              window.location.href = redirecting;

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _onClickContinue.apply(this, arguments);
  }

  function CeloWallet() {
    var booltrue = true;

    while (booltrue) {
      try {
        console.log(window.walletAccount.isSignedIn());
        break;
      } catch (ex) {
        continue;
      }

      ;
    }

    if (window.ethereum == null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        onClick: function onClick() {
          window.open("https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn", "_blank");
        },
        style: {
          display: "flex",
          padding: "10px",
          width: "350px",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "20px 0"
        },
        className: "btn-primary whitebtn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
        style: {
          height: '51px',
          width: '51px'
        },
        src: "https://images.ctfassets.net/bzlah72jow8z/2UjLQ0IYYm8O6mka9zYVQM/d80a8c64270427e9578336f95d9b685c/Celo_Glyph_Color_Reverse_1.svg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '11px',
          height: '51px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        style: {
          fontWeight: 'bolder',
          padding: '0',
          fontFamily: 'sans-serif',
          height: '100%',
          margin: '-12px 0'
        }
      }, "Celo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
        style: {
          fontSize: '15px',
          padding: '0',
          margin: '0',
          fontFamily: 'sans-serif'
        }
      }, "Install Metamask wallet"))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, ConnectedCelo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: "flex",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "350px",
        margin: "20px 0"
      },
      className: "btn-primary whitebtn active"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      onClick: onClickConnectedCelo,
      style: {
        display: 'flex',
        background: 'transparent',
        width: '100%',
        padding: '0'
      },
      className: "btn-primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      style: {
        height: '51px',
        width: '51px'
      },
      src: "https://images.ctfassets.net/bzlah72jow8z/2UjLQ0IYYm8O6mka9zYVQM/d80a8c64270427e9578336f95d9b685c/Celo_Glyph_Color_Reverse_1.svg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '11px',
        height: '51px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      style: {
        fontWeight: 'bolder',
        padding: '0',
        fontFamily: 'sans-serif',
        height: '100%',
        margin: '-12px 0'
      }
    }, "Celo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      style: {
        fontSize: '15px',
        padding: '0',
        margin: '0',
        fontFamily: 'sans-serif'
      }
    }, "Connected Metamask wallet"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("button", {
      onClick: onClickDisConnectCelo,
      type: "button",
      className: "btn btn-logout",
      style: {
        width: 'initial'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      className: "icon closebtn",
      style: {
        background: '#9d9999',
        float: 'right',
        borderRadius: '7px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("svg", {
      style: {
        fill: 'red'
      },
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      height: "32",
      width: "32"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      onClick: onClickConnectCelo,
      style: {
        display: "flex",
        padding: "10px",
        width: "350px",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "20px 0"
      },
      className: "btn-primary whitebtn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      style: {
        height: '51px',
        width: '51px'
      },
      src: "https://images.ctfassets.net/bzlah72jow8z/2UjLQ0IYYm8O6mka9zYVQM/d80a8c64270427e9578336f95d9b685c/Celo_Glyph_Color_Reverse_1.svg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '11px',
        height: '51px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      style: {
        fontWeight: 'bolder',
        padding: '0',
        fontFamily: 'sans-serif',
        height: '100%',
        margin: '-12px 0'
      }
    }, "Celo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      style: {
        fontSize: '15px',
        padding: '0',
        margin: '0',
        fontFamily: 'sans-serif'
      }
    }, "Connect With Metamask wallet"))));
  }

  function onClickConnectCelo() {
    return _onClickConnectCelo.apply(this, arguments);
  }

  function _onClickConnectCelo() {
    _onClickConnectCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      var result, getacc;
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return window.ethereum.request({
                method: 'eth_requestAccounts'
              });

            case 2:
              result = _context7.sent;
              result;
              _context7.prev = 4;
              _context7.next = 7;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0xaef3'
                }] //44787

              });

            case 7:
              getacc = _context7.sent;
              getacc;
              _context7.next = 22;
              break;

            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](4);

              if (!(_context7.t0.code === 4902)) {
                _context7.next = 22;
                break;
              }

              _context7.prev = 14;
              _context7.next = 17;
              return window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0xaef3',
                  //44787
                  chainName: 'Alfajores Celo Testnet',
                  nativeCurrency: {
                    name: 'CELO',
                    symbol: 'CELO',
                    decimals: 18
                  },
                  rpcUrls: ['https://alfajores-forno.celo-testnet.org']
                }]
              });

            case 17:
              _context7.next = 22;
              break;

            case 19:
              _context7.prev = 19;
              _context7.t1 = _context7["catch"](14);
              // handle "add" error
              console.log(_context7.t1);

            case 22:
              window.localStorage.setItem("ConnectedMetaCelo", "true");

            case 23:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[4, 11], [14, 19]]);
    }));
    return _onClickConnectCelo.apply(this, arguments);
  }

  function onClickConnectedCelo() {
    return _onClickConnectedCelo.apply(this, arguments);
  }

  function _onClickConnectedCelo() {
    _onClickConnectedCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return _onClickConnectedCelo.apply(this, arguments);
  }

  function onClickDisConnectCelo() {
    return _onClickDisConnectCelo.apply(this, arguments);
  }

  function _onClickDisConnectCelo() {
    _onClickDisConnectCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              window.localStorage.setItem("ConnectedMetaCelo", "");

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));
    return _onClickDisConnectCelo.apply(this, arguments);
  }

  setTimeout(function () {
    if (window.ethereum.selectedAddress != null && window.ethereum.networkVersion == 1313161555) {
      setConnectedAurora(true);
    } else {
      setConnectedAurora(false);
    }

    if (window.ethereum.selectedAddress != null && window.ethereum.networkVersion == 44787 && window.localStorage.getItem("ConnectedMetaCelo") != "") {
      setConnectedCelo(true);
    } else {
      setConnectedCelo(false);
    }

    if (window.walletAccount.isSignedIn() == true && window.ethereum.selectedAddress != null) {
      setConnectStatus(true);
    } else {
      setConnectStatus(false);
    }
  }, 1000);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(next_head__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("title", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("meta", {
    name: "description",
    content: "Login"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: show,
    onHide: onHide,
    size: "lg",
    centered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__["default"].Header, {
    className: "modal-header-login",
    closeButton: true
  }, "Connect wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "modal-body-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      marginBottom: '0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      margin: '0px 0px 12px',
      width: '100%',
      color: 'grey'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", null, "Please connect both your wallets")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      paddingTop: '0px',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      display: 'flex',
      columnGap: '1vw',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(NearWallet, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(AuroraWallet, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(CeloWallet, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, ConnectStatus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: onClickContinue,
    style: {
      width: '150px'
    }
  }, "Continue")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: true,
    style: {
      width: '150px'
    }
  }, "Continue"))))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "858529d09ab45cc2747f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjE0Mjk5OGMxMGVhZTUzZDcyMDlmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVlLFNBQVNPLEtBQVQsT0FLWjtBQUFBLE1BSkNDLElBSUQsUUFKQ0EsSUFJRDtBQUFBLE1BSENDLE1BR0QsUUFIQ0EsTUFHRDtBQUFBLE1BRkNDLFdBRUQsUUFGQ0EsV0FFRDs7QUFDQyxrQkFBMENKLCtDQUFRLENBQUMsSUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQThDTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9PLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG1CQUEwQ1IsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPUyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0QixpQkFIRCxDQU9DOzs7QUFDQSxXQUFTQyxVQUFULEdBQW1DO0FBQy9CLFFBQUlDLFFBQVEsR0FBRyxJQUFmOztBQUNBLFdBQU9BLFFBQVAsRUFBaUI7QUFDYixVQUFJO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLGFBQVAsQ0FBcUJDLFVBQXJCLEVBQVo7QUFDQTtBQUNILE9BSEQsQ0FHRSxPQUFPQyxFQUFQLEVBQVc7QUFBRTtBQUFVOztBQUFBO0FBQzVCOztBQUNELFFBQUlILE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQkMsVUFBckIsTUFBcUMsS0FBekMsRUFBZ0Q7QUFDNUMsMEJBQVEsaUhBQ0o7QUFBSyxlQUFPLEVBQUVFLGtCQUFkO0FBQWtDLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsVUFBQUEsT0FBTyxFQUFFLE1BQTVCO0FBQW9DQyxVQUFBQSxZQUFZLEVBQUUsS0FBbEQ7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QUssRUFBRTtBQUFFSCxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQnVELE1BQUFBLFNBQVMsRUFBRSxLQUE5QjtBQUFxQ0MsTUFBQUEsUUFBUSxFQUFFO0FBQS9DO0FBQVosa0JBQ0ksaURBQUMsVUFBRCxPQURKLGVBRUksaURBQUMsWUFBRCxPQUZKLGVBR0ksaURBQUMsVUFBRCxPQUhKLENBREosQ0FMSixlQVlJO0FBQUssU0FBSyxFQUFFO0FBQUVyRCxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkgsTUFBQUEsT0FBTyxFQUFFLE1BQTFCO0FBQWtDeUQsTUFBQUEsY0FBYyxFQUFFO0FBQWxEO0FBQVosS0FDS3hFLGFBQWEsZ0JBQUksaUhBQ2QsaURBQUMsK0RBQUQ7QUFBUSxXQUFPLEVBQUV3RCxlQUFqQjtBQUFrQyxTQUFLLEVBQUU7QUFBRXRDLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQXpDLGdCQURjLENBQUosZ0JBR08saUhBQ2IsaURBQUMsK0RBQUQ7QUFBUSxZQUFRLE1BQWhCO0FBQWlCLFNBQUssRUFBRTtBQUFFQSxNQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUF4QixnQkFEYSxDQUp6QixDQVpKLENBREosQ0FSSixDQU5GLENBQUYsQ0FGSjtBQWtESDs7Ozs7Ozs7VUM3WEQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NyYy9tb2RhbHMvbG9naW4vaW5kZXgudHN4Iiwid2VicGFjazovL2RlbWV0ZXIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2FwcC5jc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IENvbnRlbnRMb2FkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL0NvbnRlbnRMb2FkZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJ0AvbmVhci1jb250cmFjdHMvY29udHJhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih7XG4gICAgc2hvdyxcbiAgICBvbkhpZGUsXG4gICAgcmVkaXJlY3RpbmdcblxufSkge1xuICAgIGNvbnN0IFtDb25uZWN0U3RhdHVzLCBzZXRDb25uZWN0U3RhdHVzXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtDb25uZWN0ZWRBdXJvcmEsIHNldENvbm5lY3RlZEF1cm9yYV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW0Nvbm5lY3RlZENlbG8sIHNldENvbm5lY3RlZENlbG9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcblxuXG4gICAgLy9ORUFSXG4gICAgZnVuY3Rpb24gTmVhcldhbGxldCgpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHZhciBib29sdHJ1ZSA9IHRydWU7XG4gICAgICAgIHdoaWxlIChib29sdHJ1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkgeyBjb250aW51ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0TmVhcn0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIHdpZHRoOiBcIjM1MHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pLnBvc3RpbWcuY2MvbnpRTWdubkovTmVhci5wbmcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5FQVJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdpdGggTkVBUiB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgd2lkdGg6IFwiMzUwcHhcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0ZWRORUFSfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcwJyB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vaS5wb3N0aW1nLmNjL256UU1nbm5KL05lYXIucG5nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBORUFSXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdGVkIE5FQVIgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tEaXNDb25uZWN0TkVBUn0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tbG9nb3V0XCIgc3R5bGU9e3sgd2lkdGg6ICdpbml0aWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gY2xvc2VidG5cIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjOWQ5OTk5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc3cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPXt7IGZpbGw6ICdyZWQnIH19IGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTguNDc1MyAxOC4yOTAzSDE5LjI5NUgyMC4xMTQ2VjIxLjUxNjJWMjMuOTM1NUgxNS4xOTY2TDE1LjE5NjcgMjdMMTMuMDQ5MiAyNi4yNzk5TDguMTE2MzMgMjQuNjYyQzcuNDQ1OSAyNC40MzMgNyAyNC4yNzgyIDcgMjQuMjc4MlY3SDguNjM5MzhDOC42NjE5NiA3IDguNjgzNzggNy4wMDQ1OSA4LjcwNTU4IDcuMDA5MTlDOC43MjI0OCA3LjAxMjc1IDguNzM5MzYgNy4wMTYzIDguNzU2NTkgNy4wMTc3MkM4Ljc2OTI5IDcuMDE2MDUgOC43ODEyNSA3LjAxMjY3IDguNzkzMTUgNy4wMDkzMUM4LjgwOTY4IDcuMDA0NjQgOC44MjYxIDcgOC44NDQyNCA3SDE3LjY1NTZIMjAuMTE0NlYxMS44Mzg3SDE5LjI5NUgxOC40NzUzTDE4LjQ3NTQgOC42MTI2N0wxNy42NTU2IDguNjEyODFIMTMuODM3NkgxMS45MThMMTUuMTk2NiA5LjQxOTM2VjIyLjMyMjZIMTguNDc1M1YyMS41MTYyVjE4LjI5MDNaTTIzLjE1MyAxMS4yNjg2TDI3IDE1LjA2NDRDMjcgMTUuMDY0NCAyNi43NTIyIDE1LjMxOTQgMjYuNDMxOCAxNS42MzQ2TDIzLjE1MyAxOC44NjA1TDIxLjc1NDEgMjAuMjI1N0wyMS43NTM5IDE1Ljg3MDlIMTcuNjU1NlYxNS4wNjQ1VjE0LjI1ODFIMjEuNzUzOUwyMS43NTQxIDkuOTAzMDFMMjMuMTUzIDExLjI2ODZaXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0TmVhcigpIHtcbiAgICAgICAgd2luZG93LndhbGxldEFjY291bnQucmVxdWVzdFNpZ25JbihcbiAgICAgICAgICAgIHdpbmRvdy5uZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSxcbiAgICAgICAgICAgICdEZW1ldGVyJyk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0ZWRORUFSKCkge1xuICAgICAgICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKHJlZGlyZWN0aW5nKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Rpc0Nvbm5lY3RORUFSKCkge1xuICAgICAgICBhd2FpdCB3aW5kb3cud2FsbGV0QWNjb3VudC5zaWduT3V0KClcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG5cblxuICAgIC8vQXVyb3JhXG4gICAgZnVuY3Rpb24gQXVyb3JhV2FsbGV0KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGJvb2x0cnVlID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGJvb2x0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IGNvbnRpbnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHsgd2luZG93Lm9wZW4oXCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9ua2JpaGZiZW9nYWVhb2VobGVmbmtvZGJlZmdwZ2tublwiLCBcIl9ibGFua1wiKSB9fSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIHdpZHRoOiBcIjM1MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2kucG9zdGltZy5jYy8zd0NaelJDVi9BdXJvcmEuanBnJyAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXJvcmFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWxsIE1ldGFtYXNrIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHshQ29ubmVjdGVkQXVyb3JhID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0QXVyb3JhfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIHdpZHRoOiBcIjM1MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pLnBvc3RpbWcuY2MvM3dDWnpSQ1YvQXVyb3JhLmpwZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVyb3JhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXaXRoIE1ldGFtYXNrIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCB3aWR0aDogXCIzNTBweFwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG4gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0ZWRBdXJvcmF9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jywgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzAnIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vZG9jLmF1cm9yYS5kZXYvaW1nL2Zhdmljb24uc3ZnJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXJvcmFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0ZWQgTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdEF1cm9yYSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICAgIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGdldGFjYyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMTMxMzE2MTU1NScsIH1dLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRhY2M7XG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcxMzEzMTYxNTU1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnQXVyb3JhIFRlc3RuZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VUSCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdFVEgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vdGVzdG5ldC5hdXJvcmEuZGV2J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGFkZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZEVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0ZWRBdXJvcmEoKSB7XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0NvbnRpbnVlKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IChyZWRpcmVjdGluZyk7XG4gICAgfVxuXG5cbiAgICAvL0NlbG9cbiAgICBmdW5jdGlvbiBDZWxvV2FsbGV0KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGJvb2x0cnVlID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGJvb2x0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IGNvbnRpbnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbmtiaWhmYmVvZ2FlYW9laGxlZm5rb2RiZWZncGdrbm5cIiwgXCJfYmxhbmtcIikgfX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCB3aWR0aDogXCIzNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9iemxhaDcyam93OHovMlVqTFEwSVlZbThPNm1rYTl6WVZRTS9kODBhOGM2NDI3MDQyN2U5NTc4MzM2Zjk1ZDliNjg1Yy9DZWxvX0dseXBoX0NvbG9yX1JldmVyc2VfMS5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWxsIE1ldGFtYXNrIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7Q29ubmVjdGVkQ2Vsbz8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCB3aWR0aDogXCIzNTBweFwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG4gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0ZWRDZWxvfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcwJyB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2ltYWdlcy5jdGZhc3NldHMubmV0L2J6bGFoNzJqb3c4ei8yVWpMUTBJWVltOE82bWthOXpZVlFNL2Q4MGE4YzY0MjcwNDI3ZTk1NzgzMzZmOTVkOWI2ODVjL0NlbG9fR2x5cGhfQ29sb3JfUmV2ZXJzZV8xLnN2ZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2Vsb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RlZCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tEaXNDb25uZWN0Q2Vsb30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tbG9nb3V0XCIgc3R5bGU9e3sgd2lkdGg6ICdpbml0aWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gY2xvc2VidG5cIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjOWQ5OTk5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc3cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPXt7IGZpbGw6ICdyZWQnIH19IGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTguNDc1MyAxOC4yOTAzSDE5LjI5NUgyMC4xMTQ2VjIxLjUxNjJWMjMuOTM1NUgxNS4xOTY2TDE1LjE5NjcgMjdMMTMuMDQ5MiAyNi4yNzk5TDguMTE2MzMgMjQuNjYyQzcuNDQ1OSAyNC40MzMgNyAyNC4yNzgyIDcgMjQuMjc4MlY3SDguNjM5MzhDOC42NjE5NiA3IDguNjgzNzggNy4wMDQ1OSA4LjcwNTU4IDcuMDA5MTlDOC43MjI0OCA3LjAxMjc1IDguNzM5MzYgNy4wMTYzIDguNzU2NTkgNy4wMTc3MkM4Ljc2OTI5IDcuMDE2MDUgOC43ODEyNSA3LjAxMjY3IDguNzkzMTUgNy4wMDkzMUM4LjgwOTY4IDcuMDA0NjQgOC44MjYxIDcgOC44NDQyNCA3SDE3LjY1NTZIMjAuMTE0NlYxMS44Mzg3SDE5LjI5NUgxOC40NzUzTDE4LjQ3NTQgOC42MTI2N0wxNy42NTU2IDguNjEyODFIMTMuODM3NkgxMS45MThMMTUuMTk2NiA5LjQxOTM2VjIyLjMyMjZIMTguNDc1M1YyMS41MTYyVjE4LjI5MDNaTTIzLjE1MyAxMS4yNjg2TDI3IDE1LjA2NDRDMjcgMTUuMDY0NCAyNi43NTIyIDE1LjMxOTQgMjYuNDMxOCAxNS42MzQ2TDIzLjE1MyAxOC44NjA1TDIxLjc1NDEgMjAuMjI1N0wyMS43NTM5IDE1Ljg3MDlIMTcuNjU1NlYxNS4wNjQ1VjE0LjI1ODFIMjEuNzUzOUwyMS43NTQxIDkuOTAzMDFMMjMuMTUzIDExLjI2ODZaXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0Q2Vsb30gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCB3aWR0aDogXCIzNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9iemxhaDcyam93OHovMlVqTFEwSVlZbThPNm1rYTl6WVZRTS9kODBhOGM2NDI3MDQyN2U5NTc4MzM2Zjk1ZDliNjg1Yy9DZWxvX0dseXBoX0NvbG9yX1JldmVyc2VfMS5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2l0aCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RDZWxvKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcweGFlZjMnLCB9XSwgLy80NDc4N1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRhY2M7XG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweGFlZjMnLCAvLzQ0Nzg3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0FsZmFqb3JlcyBDZWxvIFRlc3RuZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NFTE8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnQ0VMTycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hbGZham9yZXMtZm9ybm8uY2Vsby10ZXN0bmV0Lm9yZyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIiwgXCJ0cnVlXCIpXG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RlZENlbG8oKXtcblxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tEaXNDb25uZWN0Q2Vsbygpe1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiLCBcIlwiKVxuXG4gICAgfVxuXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCAmJiAgd2luZG93LmV0aGVyZXVtLm5ldHdvcmtWZXJzaW9uID09IDEzMTMxNjE1NTUpe1xuICAgICAgICAgICAgc2V0Q29ubmVjdGVkQXVyb3JhKHRydWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNldENvbm5lY3RlZEF1cm9yYShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyAhPSBudWxsICYmIHdpbmRvdy5ldGhlcmV1bS5uZXR3b3JrVmVyc2lvbiA9PSA0NDc4NyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiKSAhPSBcIlwiICl7XG4gICAgICAgICAgICBzZXRDb25uZWN0ZWRDZWxvKHRydWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNldENvbm5lY3RlZENlbG8oZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSB0cnVlICYmIHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdFN0YXR1cyh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldENvbm5lY3RTdGF0dXMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgMTAwMClcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDw+PD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkxvZ2luXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9e29uSGlkZX1cbiAgICAgICAgICAgICAgICBzaXplPSdsZydcbiAgICAgICAgICAgICAgICBjZW50ZXJlZCA+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsYXNzTmFtZT0nbW9kYWwtaGVhZGVyLWxvZ2luJyBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCB3YWxsZXRcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keS1sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzBweCAwcHggMTJweCcsIHdpZHRoOiAnMTAwJScsIGNvbG9yOiAnZ3JleScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBsZWFzZSBjb25uZWN0IGJvdGggeW91ciB3YWxsZXRzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcwcHgnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBjb2x1bW5HYXA6ICcxdncnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmVhcldhbGxldCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXVyb3JhV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxvV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29ubmVjdFN0YXR1cyA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tDb250aW51ZX0gc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj48Lz4pIDogKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgPC8+PC8+XG5cbiAgICApO1xuXG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjg1ODUyOWQwOWFiNDVjYzI3NDdmXCI7IH0iXSwibmFtZXMiOlsiSGVhZCIsIlJvdyIsIk1vZGFsIiwiQ29sIiwiUmVhY3QiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIkxvZ2luIiwic2hvdyIsIm9uSGlkZSIsInJlZGlyZWN0aW5nIiwiQ29ubmVjdFN0YXR1cyIsInNldENvbm5lY3RTdGF0dXMiLCJDb25uZWN0ZWRBdXJvcmEiLCJzZXRDb25uZWN0ZWRBdXJvcmEiLCJDb25uZWN0ZWRDZWxvIiwic2V0Q29ubmVjdGVkQ2VsbyIsIk5lYXJXYWxsZXQiLCJib29sdHJ1ZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJ3YWxsZXRBY2NvdW50IiwiaXNTaWduZWRJbiIsImV4Iiwib25DbGlja0Nvbm5lY3ROZWFyIiwiZGlzcGxheSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImN1cnNvciIsIm1hcmdpbiIsImhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIm9uQ2xpY2tDb25uZWN0ZWRORUFSIiwiYmFja2dyb3VuZCIsIm9uQ2xpY2tEaXNDb25uZWN0TkVBUiIsImZsb2F0IiwiZmlsbCIsInJlcXVlc3RTaWduSW4iLCJuZWFyQ29uZmlnIiwiY29udHJhY3ROYW1lIiwic2lnbk91dCIsImxvY2F0aW9uIiwiaHJlZiIsIkF1cm9yYVdhbGxldCIsImV0aGVyZXVtIiwib3BlbiIsIm9uQ2xpY2tDb25uZWN0QXVyb3JhIiwib25DbGlja0Nvbm5lY3RlZEF1cm9yYSIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXN1bHQiLCJwYXJhbXMiLCJjaGFpbklkIiwiZ2V0YWNjIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsIm9uQ2xpY2tDb250aW51ZSIsIkNlbG9XYWxsZXQiLCJvbkNsaWNrQ29ubmVjdGVkQ2VsbyIsIm9uQ2xpY2tEaXNDb25uZWN0Q2VsbyIsIm9uQ2xpY2tDb25uZWN0Q2VsbyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRUaW1lb3V0Iiwic2VsZWN0ZWRBZGRyZXNzIiwibmV0d29ya1ZlcnNpb24iLCJnZXRJdGVtIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJwYWRkaW5nVG9wIiwiY29sdW1uR2FwIiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=