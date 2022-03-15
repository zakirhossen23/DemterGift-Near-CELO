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

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, ConnectedAurora ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
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
    if (window.ethereum.selectedAddress != null && window.ethereum.networkVersion != 1313161555) {
      setConnectedAurora(true);
    }

    if (window.ethereum.selectedAddress != null && window.ethereum.networkVersion == 44787 && window.localStorage.getItem("ConnectedMetaCelo") != "") {
      setConnectedCelo(true);
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
/******/ 	__webpack_require__.h = function() { return "2adedbc80c9cd5669813"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjYwNTk2OGEwOTBjNTYzYWZlMWNjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVlLFNBQVNPLEtBQVQsT0FLWjtBQUFBLE1BSkNDLElBSUQsUUFKQ0EsSUFJRDtBQUFBLE1BSENDLE1BR0QsUUFIQ0EsTUFHRDtBQUFBLE1BRkNDLFdBRUQsUUFGQ0EsV0FFRDs7QUFDQyxrQkFBMENKLCtDQUFRLENBQUMsSUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQThDTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9PLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG1CQUEwQ1IsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPUyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0QixpQkFIRCxDQU9DOzs7QUFDQSxXQUFTQyxVQUFULEdBQW1DO0FBQy9CLFFBQUlDLFFBQVEsR0FBRyxJQUFmOztBQUNBLFdBQU9BLFFBQVAsRUFBaUI7QUFDYixVQUFJO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLGFBQVAsQ0FBcUJDLFVBQXJCLEVBQVo7QUFDQTtBQUNILE9BSEQsQ0FHRSxPQUFPQyxFQUFQLEVBQVc7QUFBRTtBQUFVOztBQUFBO0FBQzVCOztBQUNELFFBQUlILE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQkMsVUFBckIsTUFBcUMsS0FBekMsRUFBZ0Q7QUFDNUMsMEJBQVEsaUhBQ0o7QUFBSyxlQUFPLEVBQUVFLGtCQUFkO0FBQWtDLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsVUFBQUEsT0FBTyxFQUFFLE1BQTVCO0FBQW9DQyxVQUFBQSxZQUFZLEVBQUUsS0FBbEQ7QUFBeURDLFVBQUFBLEtBQUssRUFBRSxPQUFoRTtBQUF5RUMsVUFBQUEsTUFBTSxFQUFFLFNBQWpGO0FBQTRGQyxVQUFBQSxNQUFNLEVBQUU7QUFBcEcsU0FBekM7QUFBeUosaUJBQVMsRUFBQztBQUFuSyxzQkFDSTtBQUFLLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxNQUFNLEVBQUUsTUFBVjtBQUFrQkgsVUFBQUEsS0FBSyxFQUFFO0FBQXpCLFNBQVo7QUFBK0MsV0FBRyxFQUFDO0FBQW5ELFFBREosZUFFSTtBQUFLLGFBQUssRUFBRTtBQUFFSCxVQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQk8sVUFBQUEsYUFBYSxFQUFFLFFBQWxDO0FBQTRDQyxVQUFBQSxVQUFVLEVBQUUsTUFBeEQ7QUFBZ0VGLFVBQUFBLE1BQU0sRUFBRTtBQUF4RTtBQUFaLHNCQUNJO0FBQU0sYUFBSyxFQUFFO0FBQUVHLFVBQUFBLFVBQVUsRUFBRSxRQUFkO0FBQXdCUixVQUFBQSxPQUFPLEVBQUUsR0FBakM7QUFBc0NTLFVBQUFBLFVBQVUsRUFBRSxZQUFsRDtBQUFnRUosVUFBQUEsTUFBTSxFQUFFLE1BQXhFO0FBQWdGRCxVQUFBQSxNQUFNLEVBQUU7QUFBeEY7QUFBYixnQkFESixlQUlJO0FBQU0sYUFBSyxFQUFFO0FBQUVNLFVBQUFBLFFBQVEsRUFBRSxNQUFaO0FBQW9CVixVQUFBQSxPQUFPLEVBQUUsR0FBN0I7QUFBa0NJLFVBQUFBLE1BQU0sRUFBRSxHQUExQztBQUErQ0ssVUFBQUEsVUFBVSxFQUFFO0FBQTNEO0FBQWIsb0NBSkosQ0FGSixDQURJLENBQVI7QUFhSDs7QUFDRCxRQUFJZixNQUFNLENBQUNDLGFBQVAsQ0FBcUJDLFVBQXJCLE1BQXFDLElBQXpDLEVBQStDO0FBQzNDLDBCQUFRLGlIQUNKO0FBQUssYUFBSyxFQUFFO0FBQUVHLFVBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxVQUFBQSxPQUFPLEVBQUUsTUFBNUI7QUFBb0NDLFVBQUFBLFlBQVksRUFBRSxLQUFsRDtBQUF5REUsVUFBQUEsTUFBTSxFQUFFLFNBQWpFO0FBQTRFRCxVQUFBQSxLQUFLLEVBQUUsT0FBbkY7QUFBNEZFLFVBQUFBLE1BQU0sRUFBRTtBQUFwRyxTQUFaO0FBQTRILGlCQUFTLEVBQUM7QUFBdEksc0JBQ0k7QUFBSyxlQUFPLEVBQUVPLG9CQUFkO0FBQW9DLGFBQUssRUFBRTtBQUFFWixVQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQmEsVUFBQUEsVUFBVSxFQUFFLGFBQS9CO0FBQThDVixVQUFBQSxLQUFLLEVBQUUsTUFBckQ7QUFBNkRGLFVBQUFBLE9BQU8sRUFBRTtBQUF0RSxTQUEzQztBQUF3SCxpQkFBUyxFQUFDO0FBQWxJLHNCQUNJO0FBQUssYUFBSyxFQUFFO0FBQUVLLFVBQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCSCxVQUFBQSxLQUFLLEVBQUU7QUFBekIsU0FBWjtBQUErQyxXQUFHLEVBQUM7QUFBbkQsUUFESixlQUVJO0FBQUssYUFBSyxFQUFFO0FBQUVILFVBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CYSxVQUFBQSxVQUFVLEVBQUUsYUFBL0I7QUFBOENOLFVBQUFBLGFBQWEsRUFBRSxRQUE3RDtBQUF1RUMsVUFBQUEsVUFBVSxFQUFFLE1BQW5GO0FBQTJGRixVQUFBQSxNQUFNLEVBQUU7QUFBbkc7QUFBWixzQkFDSTtBQUFNLGFBQUssRUFBRTtBQUFFRyxVQUFBQSxVQUFVLEVBQUUsUUFBZDtBQUF3QlIsVUFBQUEsT0FBTyxFQUFFLEdBQWpDO0FBQXNDUyxVQUFBQSxVQUFVLEVBQUUsWUFBbEQ7QUFBZ0VKLFVBQUFBLE1BQU0sRUFBRSxNQUF4RTtBQUFnRkQsVUFBQUEsTUFBTSxFQUFFO0FBQXhGO0FBQWIsZ0JBREosZUFJSTtBQUFNLGFBQUssRUFBRTtBQUFFTSxVQUFBQSxRQUFRLEVBQUUsTUFBWjtBQUFvQlYsVUFBQUEsT0FBTyxFQUFFLEdBQTdCO0FBQWtDSSxVQUFBQSxNQUFNLEVBQUUsR0FBMUM7QUFBK0NLLFVBQUFBLFVBQVUsRUFBRTtBQUEzRDtBQUFiLGlDQUpKLENBRkosQ0FESixlQVlJO0FBQVEsZUFBTyxFQUFFSSxxQkFBakI7QUFBd0MsWUFBSSxFQUFDLFFBQTdDO0FBQXNELGlCQUFTLEVBQUMsZ0JBQWhFO0FBQWlGLGFBQUssRUFBRTtBQUFFWCxVQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUF4RixzQkFDSTtBQUFNLGlCQUFTLEVBQUMsZUFBaEI7QUFBZ0MsYUFBSyxFQUFFO0FBQ25DVSxVQUFBQSxVQUFVLEVBQUUsU0FEdUI7QUFFbkNFLFVBQUFBLEtBQUssRUFBRSxPQUY0QjtBQUduQ2IsVUFBQUEsWUFBWSxFQUFFO0FBSHFCO0FBQXZDLHNCQUtJO0FBQUssYUFBSyxFQUFFO0FBQUVjLFVBQUFBLElBQUksRUFBRTtBQUFSLFNBQVo7QUFBNkIsWUFBSSxFQUFDLE1BQWxDO0FBQXlDLGFBQUssRUFBQyw0QkFBL0M7QUFBNEUsZUFBTyxFQUFDLFdBQXBGO0FBQWdHLGNBQU0sRUFBQyxJQUF2RztBQUE0RyxhQUFLLEVBQUM7QUFBbEgsc0JBQXVIO0FBQU0scUJBQVUsU0FBaEI7QUFBMEIscUJBQVUsU0FBcEM7QUFBOEMsU0FBQyxFQUFDO0FBQWhELFFBQXZILENBTEosQ0FESixDQVpKLENBREksQ0FBUjtBQXdCSDtBQUVKOztBQTFERixXQTJEZ0JqQixrQkEzRGhCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1OQTJEQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lKLGNBQUFBLE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQnFCLGFBQXJCLENBQ0l0QixNQUFNLENBQUN1QixVQUFQLENBQWtCQyxZQUR0QixFQUVJLFNBRko7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EzREQ7QUFBQTtBQUFBOztBQUFBLFdBZ0VnQlAsb0JBaEVoQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxTkFnRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhFRDtBQUFBO0FBQUE7O0FBQUEsV0FtRWdCRSxxQkFuRWhCO0FBQUE7QUFBQSxJQXlFQzs7O0FBekVEO0FBQUEsc05BbUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNVbkIsTUFBTSxDQUFDQyxhQUFQLENBQXFCd0IsT0FBckIsRUFEVjs7QUFBQTtBQUVJekIsY0FBQUEsTUFBTSxDQUFDMEIsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIzQixNQUFNLENBQUMwQixRQUFQLENBQWdCQyxJQUF2Qzs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5FRDtBQUFBO0FBQUE7O0FBMEVDLFdBQVNDLFlBQVQsR0FBcUM7QUFDakMsUUFBSS9CLFFBQVEsR0FBRyxJQUFmOztBQUNBLFdBQU9BLFFBQVAsRUFBaUI7QUFDYixVQUFJO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLGFBQVAsQ0FBcUJDLFVBQXJCLEVBQVo7QUFDQTtBQUNILE9BSEQsQ0FHRSxPQUFPQyxFQUFQLEVBQVc7QUFBRTtBQUFVOztBQUFBO0FBQzVCOztBQUVELFFBQUlILE1BQU0sQ0FBQzZCLFFBQVAsSUFBbUIsSUFBdkIsRUFBNkI7QUFDekIsMEJBQVEsaUhBQ0o7QUFBSyxlQUFPLEVBQUUsbUJBQU07QUFBRTdCLFVBQUFBLE1BQU0sQ0FBQzhCLElBQVAsQ0FBWSw0RUFBWixFQUEwRixRQUExRjtBQUFxRyxTQUEzSDtBQUE2SCxhQUFLLEVBQUU7QUFBRXpCLFVBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxVQUFBQSxPQUFPLEVBQUUsTUFBNUI7QUFBb0NFLFVBQUFBLEtBQUssRUFBRSxPQUEzQztBQUFvREQsVUFBQUEsWUFBWSxFQUFFLEtBQWxFO0FBQXlFRSxVQUFBQSxNQUFNLEVBQUUsU0FBakY7QUFBNEZDLFVBQUFBLE1BQU0sRUFBRTtBQUFwRyxTQUFwSTtBQUFvUCxpQkFBUyxFQUFDO0FBQTlQLHNCQUNJO0FBQUssYUFBSyxFQUFFO0FBQUVDLFVBQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCSCxVQUFBQSxLQUFLLEVBQUU7QUFBekIsU0FBWjtBQUErQyxXQUFHLEVBQUM7QUFBbkQsUUFESixlQUVJO0FBQUssYUFBSyxFQUFFO0FBQUVILFVBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CTyxVQUFBQSxhQUFhLEVBQUUsUUFBbEM7QUFBNENDLFVBQUFBLFVBQVUsRUFBRSxNQUF4RDtBQUFnRUYsVUFBQUEsTUFBTSxFQUFFO0FBQXhFO0FBQVosc0JBQ0k7QUFBTSxhQUFLLEVBQUU7QUFBRUcsVUFBQUEsVUFBVSxFQUFFLFFBQWQ7QUFBd0JSLFVBQUFBLE9BQU8sRUFBRSxHQUFqQztBQUFzQ1MsVUFBQUEsVUFBVSxFQUFFLFlBQWxEO0FBQWdFSixVQUFBQSxNQUFNLEVBQUUsTUFBeEU7QUFBZ0ZELFVBQUFBLE1BQU0sRUFBRTtBQUF4RjtBQUFiLGtCQURKLGVBSUk7QUFBTSxhQUFLLEVBQUU7QUFBRU0sVUFBQUEsUUFBUSxFQUFFLE1BQVo7QUFBb0JWLFVBQUFBLE9BQU8sRUFBRSxHQUE3QjtBQUFrQ0ksVUFBQUEsTUFBTSxFQUFFLEdBQTFDO0FBQStDSyxVQUFBQSxVQUFVLEVBQUU7QUFBM0Q7QUFBYixtQ0FKSixDQUZKLENBREksQ0FBUjtBQWFIOztBQUVELHdCQUNJLG9HQUNLdkIsZUFBZSxnQkFDWjtBQUFLLGFBQU8sRUFBRXVDLG9CQUFkO0FBQW9DLFdBQUssRUFBRTtBQUFFMUIsUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLFFBQUFBLE9BQU8sRUFBRSxNQUE1QjtBQUFvQ0UsUUFBQUEsS0FBSyxFQUFFLE9BQTNDO0FBQW9ERCxRQUFBQSxZQUFZLEVBQUUsS0FBbEU7QUFBeUVFLFFBQUFBLE1BQU0sRUFBRSxTQUFqRjtBQUE0RkMsUUFBQUEsTUFBTSxFQUFFO0FBQXBHLE9BQTNDO0FBQTJKLGVBQVMsRUFBQztBQUFySyxvQkFDSTtBQUFLLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxNQUFNLEVBQUUsTUFBVjtBQUFrQkgsUUFBQUEsS0FBSyxFQUFFO0FBQXpCLE9BQVo7QUFBK0MsU0FBRyxFQUFDO0FBQW5ELE1BREosZUFFSTtBQUFLLFdBQUssRUFBRTtBQUFFSCxRQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQk8sUUFBQUEsYUFBYSxFQUFFLFFBQWxDO0FBQTRDQyxRQUFBQSxVQUFVLEVBQUUsTUFBeEQ7QUFBZ0VGLFFBQUFBLE1BQU0sRUFBRTtBQUF4RTtBQUFaLG9CQUNJO0FBQU0sV0FBSyxFQUFFO0FBQUVHLFFBQUFBLFVBQVUsRUFBRSxRQUFkO0FBQXdCUixRQUFBQSxPQUFPLEVBQUUsR0FBakM7QUFBc0NTLFFBQUFBLFVBQVUsRUFBRSxZQUFsRDtBQUFnRUosUUFBQUEsTUFBTSxFQUFFLE1BQXhFO0FBQWdGRCxRQUFBQSxNQUFNLEVBQUU7QUFBeEY7QUFBYixnQkFESixlQUlJO0FBQU0sV0FBSyxFQUFFO0FBQUVNLFFBQUFBLFFBQVEsRUFBRSxNQUFaO0FBQW9CVixRQUFBQSxPQUFPLEVBQUUsR0FBN0I7QUFBa0NJLFFBQUFBLE1BQU0sRUFBRSxHQUExQztBQUErQ0ssUUFBQUEsVUFBVSxFQUFFO0FBQTNEO0FBQWIsc0NBSkosQ0FGSixDQURZLGdCQWFaO0FBQUssV0FBSyxFQUFFO0FBQUVWLFFBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxRQUFBQSxPQUFPLEVBQUUsTUFBNUI7QUFBb0NDLFFBQUFBLFlBQVksRUFBRSxLQUFsRDtBQUF5REUsUUFBQUEsTUFBTSxFQUFFLFNBQWpFO0FBQTRFRCxRQUFBQSxLQUFLLEVBQUUsT0FBbkY7QUFBNEZFLFFBQUFBLE1BQU0sRUFBRTtBQUFwRyxPQUFaO0FBQTRILGVBQVMsRUFBQztBQUF0SSxvQkFDSTtBQUFLLGFBQU8sRUFBRXNCLHNCQUFkO0FBQXNDLFdBQUssRUFBRTtBQUFFM0IsUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJhLFFBQUFBLFVBQVUsRUFBRSxhQUEvQjtBQUE4Q1YsUUFBQUEsS0FBSyxFQUFFLE1BQXJEO0FBQTZERixRQUFBQSxPQUFPLEVBQUU7QUFBdEUsT0FBN0M7QUFBMEgsZUFBUyxFQUFDO0FBQXBJLG9CQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVLLFFBQUFBLE1BQU0sRUFBRSxNQUFWO0FBQWtCSCxRQUFBQSxLQUFLLEVBQUU7QUFBekIsT0FBWjtBQUErQyxTQUFHLEVBQUM7QUFBbkQsTUFESixlQUVJO0FBQUssV0FBSyxFQUFFO0FBQUVILFFBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CTyxRQUFBQSxhQUFhLEVBQUUsUUFBbEM7QUFBNENDLFFBQUFBLFVBQVUsRUFBRSxNQUF4RDtBQUFnRUYsUUFBQUEsTUFBTSxFQUFFO0FBQXhFO0FBQVosb0JBQ0k7QUFBTSxXQUFLLEVBQUU7QUFBRUcsUUFBQUEsVUFBVSxFQUFFLFFBQWQ7QUFBd0JSLFFBQUFBLE9BQU8sRUFBRSxHQUFqQztBQUFzQ1MsUUFBQUEsVUFBVSxFQUFFLFlBQWxEO0FBQWdFSixRQUFBQSxNQUFNLEVBQUUsTUFBeEU7QUFBZ0ZELFFBQUFBLE1BQU0sRUFBRTtBQUF4RjtBQUFiLGdCQURKLGVBSUk7QUFBTSxXQUFLLEVBQUU7QUFBRU0sUUFBQUEsUUFBUSxFQUFFLE1BQVo7QUFBb0JWLFFBQUFBLE9BQU8sRUFBRSxHQUE3QjtBQUFrQ0ksUUFBQUEsTUFBTSxFQUFFLEdBQTFDO0FBQStDSyxRQUFBQSxVQUFVLEVBQUU7QUFBM0Q7QUFBYixtQ0FKSixDQUZKLENBREosQ0FkUixDQURKO0FBZ0NIOztBQW5JRixXQW9JZ0JnQixvQkFwSWhCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFOQW9JQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN1Qi9CLE1BQU0sQ0FBQzZCLFFBQVAsQ0FBZ0JJLE9BQWhCLENBQXdCO0FBQUVDLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUF4QixDQUR2Qjs7QUFBQTtBQUNRQyxjQUFBQSxNQURSO0FBRUlBLGNBQUFBLE1BQU07QUFGVjtBQUFBO0FBQUEscUJBSTZCbkMsTUFBTSxDQUFDNkIsUUFBUCxDQUFnQkksT0FBaEIsQ0FBd0I7QUFDekNDLGdCQUFBQSxNQUFNLEVBQUUsNEJBRGlDO0FBRXpDRSxnQkFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFEO0FBRmlDLGVBQXhCLENBSjdCOztBQUFBO0FBSWNDLGNBQUFBLE1BSmQ7QUFRUUEsY0FBQUEsTUFBTTtBQVJkO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQVdZLGFBQVlDLElBQVosS0FBcUIsSUFYakM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQWFzQnZDLE1BQU0sQ0FBQzZCLFFBQVAsQ0FBZ0JJLE9BQWhCLENBQXdCO0FBQzFCQyxnQkFBQUEsTUFBTSxFQUFFLHlCQURrQjtBQUUxQkUsZ0JBQUFBLE1BQU0sRUFBRSxDQUNKO0FBQ0lDLGtCQUFBQSxPQUFPLEVBQUUsWUFEYjtBQUVJRyxrQkFBQUEsU0FBUyxFQUFFLGdCQUZmO0FBR0lDLGtCQUFBQSxjQUFjLEVBQUU7QUFDWkMsb0JBQUFBLElBQUksRUFBRSxLQURNO0FBRVpDLG9CQUFBQSxNQUFNLEVBQUUsS0FGSTtBQUdaQyxvQkFBQUEsUUFBUSxFQUFFO0FBSEUsbUJBSHBCO0FBUUlDLGtCQUFBQSxPQUFPLEVBQUUsQ0FBQyw0QkFBRDtBQVJiLGlCQURJO0FBRmtCLGVBQXhCLENBYnRCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE2QmdCO0FBQ0EvQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBOUJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXBJRDtBQUFBO0FBQUE7O0FBQUEsV0F5S2dCaUMsc0JBektoQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1TkF5S0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXpLRDtBQUFBO0FBQUE7O0FBQUEsV0E0S2dCYyxlQTVLaEI7QUFBQTtBQUFBLElBaUxDOzs7QUFqTEQ7QUFBQSxnTkE0S0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJOUMsY0FBQUEsTUFBTSxDQUFDMEIsUUFBUCxDQUFnQkMsSUFBaEIsR0FBd0J0QyxXQUF4Qjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTVLRDtBQUFBO0FBQUE7O0FBa0xDLFdBQVMwRCxVQUFULEdBQW1DO0FBQy9CLFFBQUlsRCxRQUFRLEdBQUcsSUFBZjs7QUFDQSxXQUFPQSxRQUFQLEVBQWlCO0FBQ2IsVUFBSTtBQUNBQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxhQUFQLENBQXFCQyxVQUFyQixFQUFaO0FBQ0E7QUFDSCxPQUhELENBR0UsT0FBT0MsRUFBUCxFQUFXO0FBQUU7QUFBVTs7QUFBQTtBQUM1Qjs7QUFDRCxRQUFJSCxNQUFNLENBQUM2QixRQUFQLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLDBCQUFRLGlIQUNKO0FBQUssZUFBTyxFQUFFLG1CQUFNO0FBQUU3QixVQUFBQSxNQUFNLENBQUM4QixJQUFQLENBQVksNEVBQVosRUFBMEYsUUFBMUY7QUFBcUcsU0FBM0g7QUFBNkgsYUFBSyxFQUFFO0FBQUV6QixVQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsVUFBQUEsT0FBTyxFQUFFLE1BQTVCO0FBQW9DRSxVQUFBQSxLQUFLLEVBQUUsT0FBM0M7QUFBb0RELFVBQUFBLFlBQVksRUFBRSxLQUFsRTtBQUF5RUUsVUFBQUEsTUFBTSxFQUFFLFNBQWpGO0FBQTRGQyxVQUFBQSxNQUFNLEVBQUU7QUFBcEcsU0FBcEk7QUFBb1AsaUJBQVMsRUFBQztBQUE5UCxzQkFDSTtBQUFLLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxNQUFNLEVBQUUsTUFBVjtBQUFrQkgsVUFBQUEsS0FBSyxFQUFFO0FBQXpCLFNBQVo7QUFBK0MsV0FBRyxFQUFDO0FBQW5ELFFBREosZUFFSTtBQUFLLGFBQUssRUFBRTtBQUFFSCxVQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQk8sVUFBQUEsYUFBYSxFQUFFLFFBQWxDO0FBQTRDQyxVQUFBQSxVQUFVLEVBQUUsTUFBeEQ7QUFBZ0VGLFVBQUFBLE1BQU0sRUFBRTtBQUF4RTtBQUFaLHNCQUNJO0FBQU0sYUFBSyxFQUFFO0FBQUVHLFVBQUFBLFVBQVUsRUFBRSxRQUFkO0FBQXdCUixVQUFBQSxPQUFPLEVBQUUsR0FBakM7QUFBc0NTLFVBQUFBLFVBQVUsRUFBRSxZQUFsRDtBQUFnRUosVUFBQUEsTUFBTSxFQUFFLE1BQXhFO0FBQWdGRCxVQUFBQSxNQUFNLEVBQUU7QUFBeEY7QUFBYixnQkFESixlQUlJO0FBQU0sYUFBSyxFQUFFO0FBQUVNLFVBQUFBLFFBQVEsRUFBRSxNQUFaO0FBQW9CVixVQUFBQSxPQUFPLEVBQUUsR0FBN0I7QUFBa0NJLFVBQUFBLE1BQU0sRUFBRSxHQUExQztBQUErQ0ssVUFBQUEsVUFBVSxFQUFFO0FBQTNEO0FBQWIsbUNBSkosQ0FGSixDQURJLENBQVI7QUFhSDs7QUFDRCx3QkFDSSxvR0FDS3JCLGFBQWEsZ0JBQ1Y7QUFBSyxXQUFLLEVBQUU7QUFBRVcsUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLFFBQUFBLE9BQU8sRUFBRSxNQUE1QjtBQUFvQ0MsUUFBQUEsWUFBWSxFQUFFLEtBQWxEO0FBQXlERSxRQUFBQSxNQUFNLEVBQUUsU0FBakU7QUFBNEVELFFBQUFBLEtBQUssRUFBRSxPQUFuRjtBQUE0RkUsUUFBQUEsTUFBTSxFQUFFO0FBQXBHLE9BQVo7QUFBNEgsZUFBUyxFQUFDO0FBQXRJLG9CQUNJO0FBQUssYUFBTyxFQUFFc0Msb0JBQWQ7QUFBb0MsV0FBSyxFQUFFO0FBQUUzQyxRQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQmEsUUFBQUEsVUFBVSxFQUFFLGFBQS9CO0FBQThDVixRQUFBQSxLQUFLLEVBQUUsTUFBckQ7QUFBNkRGLFFBQUFBLE9BQU8sRUFBRTtBQUF0RSxPQUEzQztBQUF3SCxlQUFTLEVBQUM7QUFBbEksb0JBQ0k7QUFBSyxXQUFLLEVBQUU7QUFBRUssUUFBQUEsTUFBTSxFQUFFLE1BQVY7QUFBa0JILFFBQUFBLEtBQUssRUFBRTtBQUF6QixPQUFaO0FBQStDLFNBQUcsRUFBQztBQUFuRCxNQURKLGVBRUk7QUFBSyxXQUFLLEVBQUU7QUFBRUgsUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJPLFFBQUFBLGFBQWEsRUFBRSxRQUFsQztBQUE0Q0MsUUFBQUEsVUFBVSxFQUFFLE1BQXhEO0FBQWdFRixRQUFBQSxNQUFNLEVBQUU7QUFBeEU7QUFBWixvQkFDSTtBQUFNLFdBQUssRUFBRTtBQUFFRyxRQUFBQSxVQUFVLEVBQUUsUUFBZDtBQUF3QlIsUUFBQUEsT0FBTyxFQUFFLEdBQWpDO0FBQXNDUyxRQUFBQSxVQUFVLEVBQUUsWUFBbEQ7QUFBZ0VKLFFBQUFBLE1BQU0sRUFBRSxNQUF4RTtBQUFnRkQsUUFBQUEsTUFBTSxFQUFFO0FBQXhGO0FBQWIsY0FESixlQUlJO0FBQU0sV0FBSyxFQUFFO0FBQUVNLFFBQUFBLFFBQVEsRUFBRSxNQUFaO0FBQW9CVixRQUFBQSxPQUFPLEVBQUUsR0FBN0I7QUFBa0NJLFFBQUFBLE1BQU0sRUFBRSxHQUExQztBQUErQ0ssUUFBQUEsVUFBVSxFQUFFO0FBQTNEO0FBQWIsbUNBSkosQ0FGSixDQURKLGVBWUk7QUFBUSxhQUFPLEVBQUVrQyxxQkFBakI7QUFBd0MsVUFBSSxFQUFDLFFBQTdDO0FBQXNELGVBQVMsRUFBQyxnQkFBaEU7QUFBaUYsV0FBSyxFQUFFO0FBQUV6QyxRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUF4RixvQkFDQTtBQUFNLGVBQVMsRUFBQyxlQUFoQjtBQUFnQyxXQUFLLEVBQUU7QUFDbkNVLFFBQUFBLFVBQVUsRUFBRSxTQUR1QjtBQUVuQ0UsUUFBQUEsS0FBSyxFQUFFLE9BRjRCO0FBR25DYixRQUFBQSxZQUFZLEVBQUU7QUFIcUI7QUFBdkMsb0JBS0k7QUFBSyxXQUFLLEVBQUU7QUFBRWMsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBWjtBQUE2QixVQUFJLEVBQUMsTUFBbEM7QUFBeUMsV0FBSyxFQUFDLDRCQUEvQztBQUE0RSxhQUFPLEVBQUMsV0FBcEY7QUFBZ0csWUFBTSxFQUFDLElBQXZHO0FBQTRHLFdBQUssRUFBQztBQUFsSCxvQkFBdUg7QUFBTSxtQkFBVSxTQUFoQjtBQUEwQixtQkFBVSxTQUFwQztBQUE4QyxPQUFDLEVBQUM7QUFBaEQsTUFBdkgsQ0FMSixDQURBLENBWkosQ0FEVSxnQkEwQlY7QUFBSyxhQUFPLEVBQUU2QixrQkFBZDtBQUFrQyxXQUFLLEVBQUU7QUFBRTdDLFFBQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxRQUFBQSxPQUFPLEVBQUUsTUFBNUI7QUFBb0NFLFFBQUFBLEtBQUssRUFBRSxPQUEzQztBQUFvREQsUUFBQUEsWUFBWSxFQUFFLEtBQWxFO0FBQXlFRSxRQUFBQSxNQUFNLEVBQUUsU0FBakY7QUFBNEZDLFFBQUFBLE1BQU0sRUFBRTtBQUFwRyxPQUF6QztBQUF5SixlQUFTLEVBQUM7QUFBbkssb0JBQ0E7QUFBSyxXQUFLLEVBQUU7QUFBRUMsUUFBQUEsTUFBTSxFQUFFLE1BQVY7QUFBa0JILFFBQUFBLEtBQUssRUFBRTtBQUF6QixPQUFaO0FBQStDLFNBQUcsRUFBQztBQUFuRCxNQURBLGVBRUE7QUFBSyxXQUFLLEVBQUU7QUFBRUgsUUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJPLFFBQUFBLGFBQWEsRUFBRSxRQUFsQztBQUE0Q0MsUUFBQUEsVUFBVSxFQUFFLE1BQXhEO0FBQWdFRixRQUFBQSxNQUFNLEVBQUU7QUFBeEU7QUFBWixvQkFDSTtBQUFNLFdBQUssRUFBRTtBQUFFRyxRQUFBQSxVQUFVLEVBQUUsUUFBZDtBQUF3QlIsUUFBQUEsT0FBTyxFQUFFLEdBQWpDO0FBQXNDUyxRQUFBQSxVQUFVLEVBQUUsWUFBbEQ7QUFBZ0VKLFFBQUFBLE1BQU0sRUFBRSxNQUF4RTtBQUFnRkQsUUFBQUEsTUFBTSxFQUFFO0FBQXhGO0FBQWIsY0FESixlQUlJO0FBQU0sV0FBSyxFQUFFO0FBQUVNLFFBQUFBLFFBQVEsRUFBRSxNQUFaO0FBQW9CVixRQUFBQSxPQUFPLEVBQUUsR0FBN0I7QUFBa0NJLFFBQUFBLE1BQU0sRUFBRSxHQUExQztBQUErQ0ssUUFBQUEsVUFBVSxFQUFFO0FBQTNEO0FBQWIsc0NBSkosQ0FGQSxDQTNCUixDQURKO0FBMENIOztBQW5QRixXQXFQZ0JtQyxrQkFyUGhCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1OQXFQQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN1QmxELE1BQU0sQ0FBQzZCLFFBQVAsQ0FBZ0JJLE9BQWhCLENBQXdCO0FBQUVDLGdCQUFBQSxNQUFNLEVBQUU7QUFBVixlQUF4QixDQUR2Qjs7QUFBQTtBQUNRQyxjQUFBQSxNQURSO0FBRUlBLGNBQUFBLE1BQU07QUFGVjtBQUFBO0FBQUEscUJBSTZCbkMsTUFBTSxDQUFDNkIsUUFBUCxDQUFnQkksT0FBaEIsQ0FBd0I7QUFDekNDLGdCQUFBQSxNQUFNLEVBQUUsNEJBRGlDO0FBRXpDRSxnQkFBQUEsTUFBTSxFQUFFLENBQUM7QUFBRUMsa0JBQUFBLE9BQU8sRUFBRTtBQUFYLGlCQUFELENBRmlDLENBRVA7O0FBRk8sZUFBeEIsQ0FKN0I7O0FBQUE7QUFJY0MsY0FBQUEsTUFKZDtBQVFRQSxjQUFBQSxNQUFNO0FBUmQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBV1ksYUFBWUMsSUFBWixLQUFxQixJQVhqQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEscUJBYXNCdkMsTUFBTSxDQUFDNkIsUUFBUCxDQUFnQkksT0FBaEIsQ0FBd0I7QUFDMUJDLGdCQUFBQSxNQUFNLEVBQUUseUJBRGtCO0FBRTFCRSxnQkFBQUEsTUFBTSxFQUFFLENBQ0o7QUFDSUMsa0JBQUFBLE9BQU8sRUFBRSxRQURiO0FBQ3VCO0FBQ25CRyxrQkFBQUEsU0FBUyxFQUFFLHdCQUZmO0FBR0lDLGtCQUFBQSxjQUFjLEVBQUU7QUFDWkMsb0JBQUFBLElBQUksRUFBRSxNQURNO0FBRVpDLG9CQUFBQSxNQUFNLEVBQUUsTUFGSTtBQUdaQyxvQkFBQUEsUUFBUSxFQUFFO0FBSEUsbUJBSHBCO0FBUUlDLGtCQUFBQSxPQUFPLEVBQUUsQ0FBQywwQ0FBRDtBQVJiLGlCQURJO0FBRmtCLGVBQXhCLENBYnRCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE2QmdCO0FBQ0EvQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBOUJoQjtBQW1DSUMsY0FBQUEsTUFBTSxDQUFDbUQsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsbUJBQTVCLEVBQWlELE1BQWpEOztBQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXJQRDtBQUFBO0FBQUE7O0FBQUEsV0EyUmdCSixvQkEzUmhCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFOQTJSQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBM1JEO0FBQUE7QUFBQTs7QUFBQSxXQStSZ0JDLHFCQS9SaEI7QUFBQTtBQUFBOztBQUFBO0FBQUEsc05BK1JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSWpELGNBQUFBLE1BQU0sQ0FBQ21ELFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLG1CQUE1QixFQUFpRCxFQUFqRDs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQS9SRDtBQUFBO0FBQUE7O0FBcVNDQyxFQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLFFBQUlyRCxNQUFNLENBQUM2QixRQUFQLENBQWdCeUIsZUFBaEIsSUFBbUMsSUFBbkMsSUFBNEN0RCxNQUFNLENBQUM2QixRQUFQLENBQWdCMEIsY0FBaEIsSUFBa0MsVUFBbEYsRUFBNkY7QUFDekY5RCxNQUFBQSxrQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0g7O0FBRUQsUUFBSU8sTUFBTSxDQUFDNkIsUUFBUCxDQUFnQnlCLGVBQWhCLElBQW1DLElBQW5DLElBQTJDdEQsTUFBTSxDQUFDNkIsUUFBUCxDQUFnQjBCLGNBQWhCLElBQWtDLEtBQTdFLElBQXNGdkQsTUFBTSxDQUFDbUQsWUFBUCxDQUFvQkssT0FBcEIsQ0FBNEIsbUJBQTVCLEtBQW9ELEVBQTlJLEVBQWtKO0FBQzlJN0QsTUFBQUEsZ0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNIOztBQUVELFFBQUlLLE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQkMsVUFBckIsTUFBcUMsSUFBckMsSUFBNkNGLE1BQU0sQ0FBQzZCLFFBQVAsQ0FBZ0J5QixlQUFoQixJQUFtQyxJQUFwRixFQUEwRjtBQUN0Ri9ELE1BQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDSCxLQUZELE1BRU87QUFDSEEsTUFBQUEsZ0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNIO0FBQ0osR0FkUyxFQWNQLElBZE8sQ0FBVjtBQWVBLHNCQUVJLGlIQUFFLGlIQUNFLGlEQUFDLGlEQUFELHFCQUNJLHdFQURKLGVBRUk7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUM7QUFBakMsSUFGSixlQUdJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDO0FBQXRCLElBSEosQ0FERixlQU1FLGlEQUFDLDZEQUFEO0FBQU8sUUFBSSxFQUFFSixJQUFiO0FBQ0ksVUFBTSxFQUFFQyxNQURaO0FBRUksUUFBSSxFQUFDLElBRlQ7QUFHSSxZQUFRO0FBSFosa0JBS0ksaURBQUMsb0VBQUQ7QUFBYyxhQUFTLEVBQUMsb0JBQXhCO0FBQTZDLGVBQVc7QUFBeEQsc0JBTEosZUFRSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJLGlEQUFDLDJEQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVxRSxNQUFBQSxZQUFZLEVBQUU7QUFBaEI7QUFBWixrQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFFL0MsTUFBQUEsTUFBTSxFQUFFLGNBQVY7QUFBMEJGLE1BQUFBLEtBQUssRUFBRSxNQUFqQztBQUF5Q2tELE1BQUFBLEtBQUssRUFBRTtBQUFoRDtBQUFaLGtCQUNJLGdHQURKLENBREosZUFLSSxpREFBQywyREFBRDtBQUFLLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxVQUFVLEVBQUUsS0FBZDtBQUFxQm5ELE1BQUFBLEtBQUssRUFBRTtBQUE1QjtBQUFaLGtCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVILE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CdUQsTUFBQUEsU0FBUyxFQUFFLEtBQTlCO0FBQXFDQyxNQUFBQSxRQUFRLEVBQUU7QUFBL0M7QUFBWixrQkFDSSxpREFBQyxVQUFELE9BREosZUFFSSxpREFBQyxZQUFELE9BRkosZUFHSSxpREFBQyxVQUFELE9BSEosQ0FESixDQUxKLGVBWUk7QUFBSyxTQUFLLEVBQUU7QUFBRXJELE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCSCxNQUFBQSxPQUFPLEVBQUUsTUFBMUI7QUFBa0N5RCxNQUFBQSxjQUFjLEVBQUU7QUFBbEQ7QUFBWixLQUNLeEUsYUFBYSxnQkFBSSxpSEFDZCxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBRXdELGVBQWpCO0FBQWtDLFNBQUssRUFBRTtBQUFFdEMsTUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBekMsZ0JBRGMsQ0FBSixnQkFHTyxpSEFDYixpREFBQywrREFBRDtBQUFRLFlBQVEsTUFBaEI7QUFBaUIsU0FBSyxFQUFFO0FBQUVBLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQXhCLGdCQURhLENBSnpCLENBWkosQ0FESixDQVJKLENBTkYsQ0FBRixDQUZKO0FBa0RIOzs7Ozs7OztVQ3pYRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL21vZGFscy9sb2dpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vYXBwLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgQ29udGVudExvYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vQ29udGVudExvYWRlcidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnQC9uZWFyLWNvbnRyYWN0cy9jb250cmFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHtcbiAgICBzaG93LFxuICAgIG9uSGlkZSxcbiAgICByZWRpcmVjdGluZ1xuXG59KSB7XG4gICAgY29uc3QgW0Nvbm5lY3RTdGF0dXMsIHNldENvbm5lY3RTdGF0dXNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW0Nvbm5lY3RlZEF1cm9yYSwgc2V0Q29ubmVjdGVkQXVyb3JhXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbQ29ubmVjdGVkQ2Vsbywgc2V0Q29ubmVjdGVkQ2Vsb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuXG5cbiAgICAvL05FQVJcbiAgICBmdW5jdGlvbiBOZWFyV2FsbGV0KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGJvb2x0cnVlID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGJvb2x0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IGNvbnRpbnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0Nvbm5lY3ROZWFyfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgd2lkdGg6IFwiMzUwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2kucG9zdGltZy5jYy9uelFNZ25uSi9OZWFyLnBuZycgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTkVBUlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2l0aCBORUFSIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCB3aWR0aDogXCIzNTBweFwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG4gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0Nvbm5lY3RlZE5FQVJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jywgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzAnIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pLnBvc3RpbWcuY2MvbnpRTWdubkovTmVhci5wbmcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5FQVJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0ZWQgTkVBUiB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja0Rpc0Nvbm5lY3RORUFSfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sb2dvdXRcIiBzdHlsZT17eyB3aWR0aDogJ2luaXRpYWwnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBjbG9zZWJ0blwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM5ZDk5OTknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzdweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9e3sgZmlsbDogJ3JlZCcgfX0gZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOC40NzUzIDE4LjI5MDNIMTkuMjk1SDIwLjExNDZWMjEuNTE2MlYyMy45MzU1SDE1LjE5NjZMMTUuMTk2NyAyN0wxMy4wNDkyIDI2LjI3OTlMOC4xMTYzMyAyNC42NjJDNy40NDU5IDI0LjQzMyA3IDI0LjI3ODIgNyAyNC4yNzgyVjdIOC42MzkzOEM4LjY2MTk2IDcgOC42ODM3OCA3LjAwNDU5IDguNzA1NTggNy4wMDkxOUM4LjcyMjQ4IDcuMDEyNzUgOC43MzkzNiA3LjAxNjMgOC43NTY1OSA3LjAxNzcyQzguNzY5MjkgNy4wMTYwNSA4Ljc4MTI1IDcuMDEyNjcgOC43OTMxNSA3LjAwOTMxQzguODA5NjggNy4wMDQ2NCA4LjgyNjEgNyA4Ljg0NDI0IDdIMTcuNjU1NkgyMC4xMTQ2VjExLjgzODdIMTkuMjk1SDE4LjQ3NTNMMTguNDc1NCA4LjYxMjY3TDE3LjY1NTYgOC42MTI4MUgxMy44Mzc2SDExLjkxOEwxNS4xOTY2IDkuNDE5MzZWMjIuMzIyNkgxOC40NzUzVjIxLjUxNjJWMTguMjkwM1pNMjMuMTUzIDExLjI2ODZMMjcgMTUuMDY0NEMyNyAxNS4wNjQ0IDI2Ljc1MjIgMTUuMzE5NCAyNi40MzE4IDE1LjYzNDZMMjMuMTUzIDE4Ljg2MDVMMjEuNzU0MSAyMC4yMjU3TDIxLjc1MzkgMTUuODcwOUgxNy42NTU2VjE1LjA2NDVWMTQuMjU4MUgyMS43NTM5TDIxLjc1NDEgOS45MDMwMUwyMy4xNTMgMTEuMjY4NlpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3ROZWFyKCkge1xuICAgICAgICB3aW5kb3cud2FsbGV0QWNjb3VudC5yZXF1ZXN0U2lnbkluKFxuICAgICAgICAgICAgd2luZG93Lm5lYXJDb25maWcuY29udHJhY3ROYW1lLFxuICAgICAgICAgICAgJ0RlbWV0ZXInKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RlZE5FQVIoKSB7XG4gICAgICAgIC8vICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAocmVkaXJlY3RpbmcpO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrRGlzQ29ubmVjdE5FQVIoKSB7XG4gICAgICAgIGF3YWl0IHdpbmRvdy53YWxsZXRBY2NvdW50LnNpZ25PdXQoKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cblxuXG4gICAgLy9BdXJvcmFcbiAgICBmdW5jdGlvbiBBdXJvcmFXYWxsZXQoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICB2YXIgYm9vbHRydWUgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoYm9vbHRydWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsgY29udGludWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4geyB3aW5kb3cub3BlbihcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL25rYmloZmJlb2dhZWFvZWhsZWZua29kYmVmZ3Bna25uXCIsIFwiX2JsYW5rXCIpIH19IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgd2lkdGg6IFwiMzUwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vaS5wb3N0aW1nLmNjLzN3Q1p6UkNWL0F1cm9yYS5qcGcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1cm9yYVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RhbGwgTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge0Nvbm5lY3RlZEF1cm9yYSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdEF1cm9yYX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCB3aWR0aDogXCIzNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vaS5wb3N0aW1nLmNjLzN3Q1p6UkNWL0F1cm9yYS5qcGcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1cm9yYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2l0aCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgd2lkdGg6IFwiMzUwcHhcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdGVkQXVyb3JhfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcwJyB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2RvYy5hdXJvcmEuZGV2L2ltZy9mYXZpY29uLnN2ZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVyb3JhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdGVkIE1ldGFtYXNrIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RBdXJvcmEoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuICAgICAgICByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBnZXRhY2MgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxuICAgICAgICAgICAgICAgIHBhcmFtczogW3sgY2hhaW5JZDogJzEzMTMxNjE1NTUnLCB9XSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0YWNjO1xuICAgICAgICB9IGNhdGNoIChzd2l0Y2hFcnJvcjogYW55KSB7XG4gICAgICAgICAgICAvLyBUaGlzIGVycm9yIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIGNoYWluIGhhcyBub3QgYmVlbiBhZGRlZCB0byBNZXRhTWFzay5cbiAgICAgICAgICAgIGlmIChzd2l0Y2hFcnJvci5jb2RlID09PSA0OTAyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiAnMTMxMzE2MTU1NScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0F1cm9yYSBUZXN0bmV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFVEgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnRVRIJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnBjVXJsczogWydodHRwczovL3Rlc3RuZXQuYXVyb3JhLmRldiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdGVkQXVyb3JhKCkge1xuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb250aW51ZSgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAocmVkaXJlY3RpbmcpO1xuICAgIH1cblxuXG4gICAgLy9DZWxvXG4gICAgZnVuY3Rpb24gQ2Vsb1dhbGxldCgpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHZhciBib29sdHJ1ZSA9IHRydWU7XG4gICAgICAgIHdoaWxlIChib29sdHJ1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkgeyBjb250aW51ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4geyB3aW5kb3cub3BlbihcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL25rYmloZmJlb2dhZWFvZWhsZWZua29kYmVmZ3Bna25uXCIsIFwiX2JsYW5rXCIpIH19IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgd2lkdGg6IFwiMzUwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vaW1hZ2VzLmN0ZmFzc2V0cy5uZXQvYnpsYWg3Mmpvdzh6LzJVakxRMElZWW04TzZta2E5ellWUU0vZDgwYThjNjQyNzA0MjdlOTU3ODMzNmY5NWQ5YjY4NWMvQ2Vsb19HbHlwaF9Db2xvcl9SZXZlcnNlXzEuc3ZnJyAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZWxvXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGFsbCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge0Nvbm5lY3RlZENlbG8/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgd2lkdGg6IFwiMzUwcHhcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdGVkQ2Vsb30gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMCcgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9iemxhaDcyam93OHovMlVqTFEwSVlZbThPNm1rYTl6WVZRTS9kODBhOGM2NDI3MDQyN2U5NTc4MzM2Zjk1ZDliNjg1Yy9DZWxvX0dseXBoX0NvbG9yX1JldmVyc2VfMS5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0ZWQgTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrRGlzQ29ubmVjdENlbG99IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ291dFwiIHN0eWxlPXt7IHdpZHRoOiAnaW5pdGlhbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGNsb3NlYnRuXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzlkOTk5OScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnN3B4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT17eyBmaWxsOiAncmVkJyB9fSBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4LjQ3NTMgMTguMjkwM0gxOS4yOTVIMjAuMTE0NlYyMS41MTYyVjIzLjkzNTVIMTUuMTk2NkwxNS4xOTY3IDI3TDEzLjA0OTIgMjYuMjc5OUw4LjExNjMzIDI0LjY2MkM3LjQ0NTkgMjQuNDMzIDcgMjQuMjc4MiA3IDI0LjI3ODJWN0g4LjYzOTM4QzguNjYxOTYgNyA4LjY4Mzc4IDcuMDA0NTkgOC43MDU1OCA3LjAwOTE5QzguNzIyNDggNy4wMTI3NSA4LjczOTM2IDcuMDE2MyA4Ljc1NjU5IDcuMDE3NzJDOC43NjkyOSA3LjAxNjA1IDguNzgxMjUgNy4wMTI2NyA4Ljc5MzE1IDcuMDA5MzFDOC44MDk2OCA3LjAwNDY0IDguODI2MSA3IDguODQ0MjQgN0gxNy42NTU2SDIwLjExNDZWMTEuODM4N0gxOS4yOTVIMTguNDc1M0wxOC40NzU0IDguNjEyNjdMMTcuNjU1NiA4LjYxMjgxSDEzLjgzNzZIMTEuOTE4TDE1LjE5NjYgOS40MTkzNlYyMi4zMjI2SDE4LjQ3NTNWMjEuNTE2MlYxOC4yOTAzWk0yMy4xNTMgMTEuMjY4NkwyNyAxNS4wNjQ0QzI3IDE1LjA2NDQgMjYuNzUyMiAxNS4zMTk0IDI2LjQzMTggMTUuNjM0NkwyMy4xNTMgMTguODYwNUwyMS43NTQxIDIwLjIyNTdMMjEuNzUzOSAxNS44NzA5SDE3LjY1NTZWMTUuMDY0NVYxNC4yNTgxSDIxLjc1MzlMMjEuNzU0MSA5LjkwMzAxTDIzLjE1MyAxMS4yNjg2WlwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdENlbG99IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgd2lkdGg6IFwiMzUwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vaW1hZ2VzLmN0ZmFzc2V0cy5uZXQvYnpsYWg3Mmpvdzh6LzJVakxRMElZWW04TzZta2E5ellWUU0vZDgwYThjNjQyNzA0MjdlOTU3ODMzNmY5NWQ5YjY4NWMvQ2Vsb19HbHlwaF9Db2xvcl9SZXZlcnNlXzEuc3ZnJyAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZWxvXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdpdGggTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0Q2VsbygpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICAgIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGdldGFjYyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMHhhZWYzJywgfV0sIC8vNDQ3ODdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0YWNjO1xuICAgICAgICB9IGNhdGNoIChzd2l0Y2hFcnJvcjogYW55KSB7XG4gICAgICAgICAgICAvLyBUaGlzIGVycm9yIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIGNoYWluIGhhcyBub3QgYmVlbiBhZGRlZCB0byBNZXRhTWFzay5cbiAgICAgICAgICAgIGlmIChzd2l0Y2hFcnJvci5jb2RlID09PSA0OTAyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiAnMHhhZWYzJywgLy80NDc4N1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbk5hbWU6ICdBbGZham9yZXMgQ2VsbyBUZXN0bmV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDRUxPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ0NFTE8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIFwiYWRkXCIgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdGhlciBcInN3aXRjaFwiIGVycm9yc1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIsIFwidHJ1ZVwiKVxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0ZWRDZWxvKCl7XG5cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrRGlzQ29ubmVjdENlbG8oKXtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIiwgXCJcIilcblxuICAgIH1cblxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzICE9IG51bGwgJiYgIHdpbmRvdy5ldGhlcmV1bS5uZXR3b3JrVmVyc2lvbiAhPSAxMzEzMTYxNTU1KXtcbiAgICAgICAgICAgIHNldENvbm5lY3RlZEF1cm9yYSh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzICE9IG51bGwgJiYgd2luZG93LmV0aGVyZXVtLm5ldHdvcmtWZXJzaW9uID09IDQ0Nzg3ICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkNvbm5lY3RlZE1ldGFDZWxvXCIpICE9IFwiXCIgKXtcbiAgICAgICAgICAgIHNldENvbm5lY3RlZENlbG8odHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IHRydWUgJiYgd2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBzZXRDb25uZWN0U3RhdHVzKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Q29ubmVjdFN0YXR1cyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LCAxMDAwKVxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPD48PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTG9naW5cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17b25IaWRlfVxuICAgICAgICAgICAgICAgIHNpemU9J2xnJ1xuICAgICAgICAgICAgICAgIGNlbnRlcmVkID5cblxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xhc3NOYW1lPSdtb2RhbC1oZWFkZXItbG9naW4nIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBDb25uZWN0IHdhbGxldFxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1ib2R5LWxvZ2luJz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMHB4IDBweCAxMnB4Jywgd2lkdGg6ICcxMDAlJywgY29sb3I6ICdncmV5JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UGxlYXNlIGNvbm5lY3QgYm90aCB5b3VyIHdhbGxldHM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZ1RvcDogJzBweCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGNvbHVtbkdhcDogJzF2dycsIGZsZXhXcmFwOiAnd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZWFyV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXJvcmFXYWxsZXQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbG9XYWxsZXQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtDb25uZWN0U3RhdHVzID8gKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0NvbnRpbnVlfSBzdHlsZT17eyB3aWR0aDogJzE1MHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPjwvPikgOiAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQgc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGludWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4pfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9Nb2RhbD5cblxuICAgICAgICA8Lz48Lz5cblxuICAgICk7XG5cbn1cblxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMmFkZWRiYzgwYzljZDU2Njk4MTNcIjsgfSJdLCJuYW1lcyI6WyJIZWFkIiwiUm93IiwiTW9kYWwiLCJDb2wiLCJSZWFjdCIsIkJ1dHRvbiIsInVzZVN0YXRlIiwiTG9naW4iLCJzaG93Iiwib25IaWRlIiwicmVkaXJlY3RpbmciLCJDb25uZWN0U3RhdHVzIiwic2V0Q29ubmVjdFN0YXR1cyIsIkNvbm5lY3RlZEF1cm9yYSIsInNldENvbm5lY3RlZEF1cm9yYSIsIkNvbm5lY3RlZENlbG8iLCJzZXRDb25uZWN0ZWRDZWxvIiwiTmVhcldhbGxldCIsImJvb2x0cnVlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIndhbGxldEFjY291bnQiLCJpc1NpZ25lZEluIiwiZXgiLCJvbkNsaWNrQ29ubmVjdE5lYXIiLCJkaXNwbGF5IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiY3Vyc29yIiwibWFyZ2luIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwib25DbGlja0Nvbm5lY3RlZE5FQVIiLCJiYWNrZ3JvdW5kIiwib25DbGlja0Rpc0Nvbm5lY3RORUFSIiwiZmxvYXQiLCJmaWxsIiwicmVxdWVzdFNpZ25JbiIsIm5lYXJDb25maWciLCJjb250cmFjdE5hbWUiLCJzaWduT3V0IiwibG9jYXRpb24iLCJocmVmIiwiQXVyb3JhV2FsbGV0IiwiZXRoZXJldW0iLCJvcGVuIiwib25DbGlja0Nvbm5lY3RBdXJvcmEiLCJvbkNsaWNrQ29ubmVjdGVkQXVyb3JhIiwicmVxdWVzdCIsIm1ldGhvZCIsInJlc3VsdCIsInBhcmFtcyIsImNoYWluSWQiLCJnZXRhY2MiLCJjb2RlIiwiY2hhaW5OYW1lIiwibmF0aXZlQ3VycmVuY3kiLCJuYW1lIiwic3ltYm9sIiwiZGVjaW1hbHMiLCJycGNVcmxzIiwib25DbGlja0NvbnRpbnVlIiwiQ2Vsb1dhbGxldCIsIm9uQ2xpY2tDb25uZWN0ZWRDZWxvIiwib25DbGlja0Rpc0Nvbm5lY3RDZWxvIiwib25DbGlja0Nvbm5lY3RDZWxvIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNldFRpbWVvdXQiLCJzZWxlY3RlZEFkZHJlc3MiLCJuZXR3b3JrVmVyc2lvbiIsImdldEl0ZW0iLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsInBhZGRpbmdUb3AiLCJjb2x1bW5HYXAiLCJmbGV4V3JhcCIsImp1c3RpZnlDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==