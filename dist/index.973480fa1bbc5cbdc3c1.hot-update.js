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
/******/ 	__webpack_require__.h = function() { return "142998c10eae53d7209f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljk3MzQ4MGZhMWJiYzVjYmRjM2MxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVlLFNBQVNPLEtBQVQsT0FLWjtBQUFBLE1BSkNDLElBSUQsUUFKQ0EsSUFJRDtBQUFBLE1BSENDLE1BR0QsUUFIQ0EsTUFHRDtBQUFBLE1BRkNDLFdBRUQsUUFGQ0EsV0FFRDs7QUFDQyxrQkFBMENKLCtDQUFRLENBQUMsSUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQThDTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9PLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG1CQUEwQ1IsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPUyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0QixpQkFIRCxDQU9DOzs7QUFDQSxXQUFTQyxVQUFULEdBQW1DO0FBQy9CLFFBQUlDLFFBQVEsR0FBRyxJQUFmOztBQUNBLFdBQU9BLFFBQVAsRUFBaUI7QUFDYixVQUFJO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLGFBQVAsQ0FBcUJDLFVBQXJCLEVBQVo7QUFDQTtBQUNILE9BSEQsQ0FHRSxPQUFPQyxFQUFQLEVBQVc7QUFBRTtBQUFVOztBQUFBO0FBQzVCOztBQUNELFFBQUlILE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQkMsVUFBckIsTUFBcUMsS0FBekMsRUFBZ0Q7QUFDNUMsMEJBQVEsaUhBQ0o7QUFBSyxlQUFPLEVBQUVFLGtCQUFkO0FBQWtDLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsVUFBQUEsT0FBTyxFQUFFLE1BQTVCO0FBQW9DQyxVQUFBQSxZQUFZLEVBQUUsS0FBbEQ7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QUU7QUFBRUgsTUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJ1RCxNQUFBQSxTQUFTLEVBQUUsS0FBOUI7QUFBcUNDLE1BQUFBLFFBQVEsRUFBRTtBQUEvQztBQUFaLGtCQUNJLGlEQUFDLFVBQUQsT0FESixlQUVJLGlEQUFDLFlBQUQsT0FGSixlQUdJLGlEQUFDLFVBQUQsT0FISixDQURKLENBTEosZUFZSTtBQUFLLFNBQUssRUFBRTtBQUFFckQsTUFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJILE1BQUFBLE9BQU8sRUFBRSxNQUExQjtBQUFrQ3lELE1BQUFBLGNBQWMsRUFBRTtBQUFsRDtBQUFaLEtBQ0t4RSxhQUFhLGdCQUFJLGlIQUNkLGlEQUFDLCtEQUFEO0FBQVEsV0FBTyxFQUFFd0QsZUFBakI7QUFBa0MsU0FBSyxFQUFFO0FBQUV0QyxNQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUF6QyxnQkFEYyxDQUFKLGdCQUdPLGlIQUNiLGlEQUFDLCtEQUFEO0FBQVEsWUFBUSxNQUFoQjtBQUFpQixTQUFLLEVBQUU7QUFBRUEsTUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBeEIsZ0JBRGEsQ0FKekIsQ0FaSixDQURKLENBUkosQ0FORixDQUFGLENBRko7QUFrREg7Ozs7Ozs7O1VDN1hELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvbW9kYWxzL2xvZ2luL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9hcHAuY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBDb250ZW50TG9hZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50TG9hZGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICdAL25lYXItY29udHJhY3RzL2NvbnRyYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oe1xuICAgIHNob3csXG4gICAgb25IaWRlLFxuICAgIHJlZGlyZWN0aW5nXG5cbn0pIHtcbiAgICBjb25zdCBbQ29ubmVjdFN0YXR1cywgc2V0Q29ubmVjdFN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbQ29ubmVjdGVkQXVyb3JhLCBzZXRDb25uZWN0ZWRBdXJvcmFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtDb25uZWN0ZWRDZWxvLCBzZXRDb25uZWN0ZWRDZWxvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG5cblxuICAgIC8vTkVBUlxuICAgIGZ1bmN0aW9uIE5lYXJXYWxsZXQoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICB2YXIgYm9vbHRydWUgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoYm9vbHRydWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsgY29udGludWUgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdE5lYXJ9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCB3aWR0aDogXCIzNTBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vaS5wb3N0aW1nLmNjL256UU1nbm5KL05lYXIucG5nJyAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBORUFSXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXaXRoIE5FQVIgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIHdpZHRoOiBcIjM1MHB4XCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0biBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdGVkTkVBUn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMCcgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2kucG9zdGltZy5jYy9uelFNZ25uSi9OZWFyLnBuZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTkVBUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RlZCBORUFSIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrRGlzQ29ubmVjdE5FQVJ9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ291dFwiIHN0eWxlPXt7IHdpZHRoOiAnaW5pdGlhbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGNsb3NlYnRuXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzlkOTk5OScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnN3B4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT17eyBmaWxsOiAncmVkJyB9fSBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4LjQ3NTMgMTguMjkwM0gxOS4yOTVIMjAuMTE0NlYyMS41MTYyVjIzLjkzNTVIMTUuMTk2NkwxNS4xOTY3IDI3TDEzLjA0OTIgMjYuMjc5OUw4LjExNjMzIDI0LjY2MkM3LjQ0NTkgMjQuNDMzIDcgMjQuMjc4MiA3IDI0LjI3ODJWN0g4LjYzOTM4QzguNjYxOTYgNyA4LjY4Mzc4IDcuMDA0NTkgOC43MDU1OCA3LjAwOTE5QzguNzIyNDggNy4wMTI3NSA4LjczOTM2IDcuMDE2MyA4Ljc1NjU5IDcuMDE3NzJDOC43NjkyOSA3LjAxNjA1IDguNzgxMjUgNy4wMTI2NyA4Ljc5MzE1IDcuMDA5MzFDOC44MDk2OCA3LjAwNDY0IDguODI2MSA3IDguODQ0MjQgN0gxNy42NTU2SDIwLjExNDZWMTEuODM4N0gxOS4yOTVIMTguNDc1M0wxOC40NzU0IDguNjEyNjdMMTcuNjU1NiA4LjYxMjgxSDEzLjgzNzZIMTEuOTE4TDE1LjE5NjYgOS40MTkzNlYyMi4zMjI2SDE4LjQ3NTNWMjEuNTE2MlYxOC4yOTAzWk0yMy4xNTMgMTEuMjY4NkwyNyAxNS4wNjQ0QzI3IDE1LjA2NDQgMjYuNzUyMiAxNS4zMTk0IDI2LjQzMTggMTUuNjM0NkwyMy4xNTMgMTguODYwNUwyMS43NTQxIDIwLjIyNTdMMjEuNzUzOSAxNS44NzA5SDE3LjY1NTZWMTUuMDY0NVYxNC4yNTgxSDIxLjc1MzlMMjEuNzU0MSA5LjkwMzAxTDIzLjE1MyAxMS4yNjg2WlwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdE5lYXIoKSB7XG4gICAgICAgIHdpbmRvdy53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oXG4gICAgICAgICAgICB3aW5kb3cubmVhckNvbmZpZy5jb250cmFjdE5hbWUsXG4gICAgICAgICAgICAnRGVtZXRlcicpO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdGVkTkVBUigpIHtcbiAgICAgICAgLy8gICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IChyZWRpcmVjdGluZyk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tEaXNDb25uZWN0TkVBUigpIHtcbiAgICAgICAgYXdhaXQgd2luZG93LndhbGxldEFjY291bnQuc2lnbk91dCgpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuXG5cbiAgICAvL0F1cm9yYVxuICAgIGZ1bmN0aW9uIEF1cm9yYVdhbGxldCgpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHZhciBib29sdHJ1ZSA9IHRydWU7XG4gICAgICAgIHdoaWxlIChib29sdHJ1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkgeyBjb250aW51ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbmtiaWhmYmVvZ2FlYW9laGxlZm5rb2RiZWZncGdrbm5cIiwgXCJfYmxhbmtcIikgfX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCB3aWR0aDogXCIzNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pLnBvc3RpbWcuY2MvM3dDWnpSQ1YvQXVyb3JhLmpwZycgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVyb3JhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGFsbCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7Q29ubmVjdGVkQXVyb3JhID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0QXVyb3JhfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIHdpZHRoOiBcIjM1MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pLnBvc3RpbWcuY2MvM3dDWnpSQ1YvQXVyb3JhLmpwZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVyb3JhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXaXRoIE1ldGFtYXNrIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCB3aWR0aDogXCIzNTBweFwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG4gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0ZWRBdXJvcmF9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jywgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzAnIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vZG9jLmF1cm9yYS5kZXYvaW1nL2Zhdmljb24uc3ZnJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXJvcmFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0ZWQgTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdEF1cm9yYSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICAgIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGdldGFjYyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMTMxMzE2MTU1NScsIH1dLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRhY2M7XG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcxMzEzMTYxNTU1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnQXVyb3JhIFRlc3RuZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VUSCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdFVEgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vdGVzdG5ldC5hdXJvcmEuZGV2J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGFkZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZEVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0ZWRBdXJvcmEoKSB7XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0NvbnRpbnVlKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IChyZWRpcmVjdGluZyk7XG4gICAgfVxuXG5cbiAgICAvL0NlbG9cbiAgICBmdW5jdGlvbiBDZWxvV2FsbGV0KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGJvb2x0cnVlID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGJvb2x0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IGNvbnRpbnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbmtiaWhmYmVvZ2FlYW9laGxlZm5rb2RiZWZncGdrbm5cIiwgXCJfYmxhbmtcIikgfX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCB3aWR0aDogXCIzNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9iemxhaDcyam93OHovMlVqTFEwSVlZbThPNm1rYTl6WVZRTS9kODBhOGM2NDI3MDQyN2U5NTc4MzM2Zjk1ZDliNjg1Yy9DZWxvX0dseXBoX0NvbG9yX1JldmVyc2VfMS5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWxsIE1ldGFtYXNrIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7Q29ubmVjdGVkQ2Vsbz8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCB3aWR0aDogXCIzNTBweFwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG4gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0ZWRDZWxvfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcwJyB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2ltYWdlcy5jdGZhc3NldHMubmV0L2J6bGFoNzJqb3c4ei8yVWpMUTBJWVltOE82bWthOXpZVlFNL2Q4MGE4YzY0MjcwNDI3ZTk1NzgzMzZmOTVkOWI2ODVjL0NlbG9fR2x5cGhfQ29sb3JfUmV2ZXJzZV8xLnN2ZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2Vsb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RlZCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tEaXNDb25uZWN0Q2Vsb30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tbG9nb3V0XCIgc3R5bGU9e3sgd2lkdGg6ICdpbml0aWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gY2xvc2VidG5cIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjOWQ5OTk5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc3cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPXt7IGZpbGw6ICdyZWQnIH19IGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTguNDc1MyAxOC4yOTAzSDE5LjI5NUgyMC4xMTQ2VjIxLjUxNjJWMjMuOTM1NUgxNS4xOTY2TDE1LjE5NjcgMjdMMTMuMDQ5MiAyNi4yNzk5TDguMTE2MzMgMjQuNjYyQzcuNDQ1OSAyNC40MzMgNyAyNC4yNzgyIDcgMjQuMjc4MlY3SDguNjM5MzhDOC42NjE5NiA3IDguNjgzNzggNy4wMDQ1OSA4LjcwNTU4IDcuMDA5MTlDOC43MjI0OCA3LjAxMjc1IDguNzM5MzYgNy4wMTYzIDguNzU2NTkgNy4wMTc3MkM4Ljc2OTI5IDcuMDE2MDUgOC43ODEyNSA3LjAxMjY3IDguNzkzMTUgNy4wMDkzMUM4LjgwOTY4IDcuMDA0NjQgOC44MjYxIDcgOC44NDQyNCA3SDE3LjY1NTZIMjAuMTE0NlYxMS44Mzg3SDE5LjI5NUgxOC40NzUzTDE4LjQ3NTQgOC42MTI2N0wxNy42NTU2IDguNjEyODFIMTMuODM3NkgxMS45MThMMTUuMTk2NiA5LjQxOTM2VjIyLjMyMjZIMTguNDc1M1YyMS41MTYyVjE4LjI5MDNaTTIzLjE1MyAxMS4yNjg2TDI3IDE1LjA2NDRDMjcgMTUuMDY0NCAyNi43NTIyIDE1LjMxOTQgMjYuNDMxOCAxNS42MzQ2TDIzLjE1MyAxOC44NjA1TDIxLjc1NDEgMjAuMjI1N0wyMS43NTM5IDE1Ljg3MDlIMTcuNjU1NlYxNS4wNjQ1VjE0LjI1ODFIMjEuNzUzOUwyMS43NTQxIDkuOTAzMDFMMjMuMTUzIDExLjI2ODZaXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0Q2Vsb30gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCB3aWR0aDogXCIzNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9iemxhaDcyam93OHovMlVqTFEwSVlZbThPNm1rYTl6WVZRTS9kODBhOGM2NDI3MDQyN2U5NTc4MzM2Zjk1ZDliNjg1Yy9DZWxvX0dseXBoX0NvbG9yX1JldmVyc2VfMS5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2l0aCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RDZWxvKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcweGFlZjMnLCB9XSwgLy80NDc4N1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRhY2M7XG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweGFlZjMnLCAvLzQ0Nzg3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0FsZmFqb3JlcyBDZWxvIFRlc3RuZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NFTE8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnQ0VMTycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hbGZham9yZXMtZm9ybm8uY2Vsby10ZXN0bmV0Lm9yZyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIiwgXCJ0cnVlXCIpXG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RlZENlbG8oKXtcblxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tEaXNDb25uZWN0Q2Vsbygpe1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiLCBcIlwiKVxuXG4gICAgfVxuXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCAmJiAgd2luZG93LmV0aGVyZXVtLm5ldHdvcmtWZXJzaW9uID09IDEzMTMxNjE1NTUpe1xuICAgICAgICAgICAgc2V0Q29ubmVjdGVkQXVyb3JhKHRydWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNldENvbm5lY3RlZEF1cm9yYShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyAhPSBudWxsICYmIHdpbmRvdy5ldGhlcmV1bS5uZXR3b3JrVmVyc2lvbiA9PSA0NDc4NyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiKSAhPSBcIlwiICl7XG4gICAgICAgICAgICBzZXRDb25uZWN0ZWRDZWxvKHRydWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNldENvbm5lY3RlZENlbG8oZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSB0cnVlICYmIHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdFN0YXR1cyh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldENvbm5lY3RTdGF0dXMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgMTAwMClcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDw+PD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkxvZ2luXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9e29uSGlkZX1cbiAgICAgICAgICAgICAgICBzaXplPSdsZydcbiAgICAgICAgICAgICAgICBjZW50ZXJlZCA+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsYXNzTmFtZT0nbW9kYWwtaGVhZGVyLWxvZ2luJyBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCB3YWxsZXRcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keS1sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzBweCAwcHggMTJweCcsIHdpZHRoOiAnMTAwJScsIGNvbG9yOiAnZ3JleScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBsZWFzZSBjb25uZWN0IGJvdGggeW91ciB3YWxsZXRzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcwcHgnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBjb2x1bW5HYXA6ICcxdncnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmVhcldhbGxldCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXVyb3JhV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxvV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29ubmVjdFN0YXR1cyA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tDb250aW51ZX0gc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj48Lz4pIDogKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgPC8+PC8+XG5cbiAgICApO1xuXG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjE0Mjk5OGMxMGVhZTUzZDcyMDlmXCI7IH0iXSwibmFtZXMiOlsiSGVhZCIsIlJvdyIsIk1vZGFsIiwiQ29sIiwiUmVhY3QiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIkxvZ2luIiwic2hvdyIsIm9uSGlkZSIsInJlZGlyZWN0aW5nIiwiQ29ubmVjdFN0YXR1cyIsInNldENvbm5lY3RTdGF0dXMiLCJDb25uZWN0ZWRBdXJvcmEiLCJzZXRDb25uZWN0ZWRBdXJvcmEiLCJDb25uZWN0ZWRDZWxvIiwic2V0Q29ubmVjdGVkQ2VsbyIsIk5lYXJXYWxsZXQiLCJib29sdHJ1ZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJ3YWxsZXRBY2NvdW50IiwiaXNTaWduZWRJbiIsImV4Iiwib25DbGlja0Nvbm5lY3ROZWFyIiwiZGlzcGxheSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImN1cnNvciIsIm1hcmdpbiIsImhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIm9uQ2xpY2tDb25uZWN0ZWRORUFSIiwiYmFja2dyb3VuZCIsIm9uQ2xpY2tEaXNDb25uZWN0TkVBUiIsImZsb2F0IiwiZmlsbCIsInJlcXVlc3RTaWduSW4iLCJuZWFyQ29uZmlnIiwiY29udHJhY3ROYW1lIiwic2lnbk91dCIsImxvY2F0aW9uIiwiaHJlZiIsIkF1cm9yYVdhbGxldCIsImV0aGVyZXVtIiwib3BlbiIsIm9uQ2xpY2tDb25uZWN0QXVyb3JhIiwib25DbGlja0Nvbm5lY3RlZEF1cm9yYSIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXN1bHQiLCJwYXJhbXMiLCJjaGFpbklkIiwiZ2V0YWNjIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsIm9uQ2xpY2tDb250aW51ZSIsIkNlbG9XYWxsZXQiLCJvbkNsaWNrQ29ubmVjdGVkQ2VsbyIsIm9uQ2xpY2tEaXNDb25uZWN0Q2VsbyIsIm9uQ2xpY2tDb25uZWN0Q2VsbyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRUaW1lb3V0Iiwic2VsZWN0ZWRBZGRyZXNzIiwibmV0d29ya1ZlcnNpb24iLCJnZXRJdGVtIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJwYWRkaW5nVG9wIiwiY29sdW1uR2FwIiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=