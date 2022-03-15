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
                  chainId: '0x4e454153'
                }] //1313161555

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
                  chainId: '0x4e454153',
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
/******/ 	__webpack_require__.h = function() { return "4697570d2941ad802a38"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljg1ODUyOWQwOWFiNDVjYzI3NDdmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVlLFNBQVNPLEtBQVQsT0FLWjtBQUFBLE1BSkNDLElBSUQsUUFKQ0EsSUFJRDtBQUFBLE1BSENDLE1BR0QsUUFIQ0EsTUFHRDtBQUFBLE1BRkNDLFdBRUQsUUFGQ0EsV0FFRDs7QUFDQyxrQkFBMENKLCtDQUFRLENBQUMsSUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQThDTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFBQTtBQUFBLE1BQU9PLGVBQVA7QUFBQSxNQUF3QkMsa0JBQXhCOztBQUNBLG1CQUEwQ1IsK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQUE7QUFBQSxNQUFPUyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0QixpQkFIRCxDQU9DOzs7QUFDQSxXQUFTQyxVQUFULEdBQW1DO0FBQy9CLFFBQUlDLFFBQVEsR0FBRyxJQUFmOztBQUNBLFdBQU9BLFFBQVAsRUFBaUI7QUFDYixVQUFJO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLGFBQVAsQ0FBcUJDLFVBQXJCLEVBQVo7QUFDQTtBQUNILE9BSEQsQ0FHRSxPQUFPQyxFQUFQLEVBQVc7QUFBRTtBQUFVOztBQUFBO0FBQzVCOztBQUNELFFBQUlILE1BQU0sQ0FBQ0MsYUFBUCxDQUFxQkMsVUFBckIsTUFBcUMsS0FBekMsRUFBZ0Q7QUFDNUMsMEJBQVEsaUhBQ0o7QUFBSyxlQUFPLEVBQUVFLGtCQUFkO0FBQWtDLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsVUFBQUEsT0FBTyxFQUFFLE1BQTVCO0FBQW9DQyxVQUFBQSxZQUFZLEVBQUUsS0FBbEQ7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QUNJO0FBQUssU0FBSyxFQUFFO0FBQUVILE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CdUQsTUFBQUEsU0FBUyxFQUFFLEtBQTlCO0FBQXFDQyxNQUFBQSxRQUFRLEVBQUU7QUFBL0M7QUFBWixrQkFDSSxpREFBQyxVQUFELE9BREosZUFFSSxpREFBQyxZQUFELE9BRkosZUFHSSxpREFBQyxVQUFELE9BSEosQ0FESixDQUxKLGVBWUk7QUFBSyxTQUFLLEVBQUU7QUFBRXJELE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCSCxNQUFBQSxPQUFPLEVBQUUsTUFBMUI7QUFBa0N5RCxNQUFBQSxjQUFjLEVBQUU7QUFBbEQ7QUFBWixLQUNLeEUsYUFBYSxnQkFBSSxpSEFDZCxpREFBQywrREFBRDtBQUFRLFdBQU8sRUFBRXdELGVBQWpCO0FBQWtDLFNBQUssRUFBRTtBQUFFdEMsTUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBekMsZ0JBRGMsQ0FBSixnQkFHTyxpSEFDYixpREFBQywrREFBRDtBQUFRLFlBQVEsTUFBaEI7QUFBaUIsU0FBSyxFQUFFO0FBQUVBLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQXhCLGdCQURhLENBSnpCLENBWkosQ0FESixDQVJKLENBTkYsQ0FBRixDQUZKO0FBa0RIOzs7Ozs7OztVQzdYRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL21vZGFscy9sb2dpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vYXBwLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgQ29udGVudExvYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vQ29udGVudExvYWRlcidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnQC9uZWFyLWNvbnRyYWN0cy9jb250cmFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHtcbiAgICBzaG93LFxuICAgIG9uSGlkZSxcbiAgICByZWRpcmVjdGluZ1xuXG59KSB7XG4gICAgY29uc3QgW0Nvbm5lY3RTdGF0dXMsIHNldENvbm5lY3RTdGF0dXNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW0Nvbm5lY3RlZEF1cm9yYSwgc2V0Q29ubmVjdGVkQXVyb3JhXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbQ29ubmVjdGVkQ2Vsbywgc2V0Q29ubmVjdGVkQ2Vsb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuXG5cbiAgICAvL05FQVJcbiAgICBmdW5jdGlvbiBOZWFyV2FsbGV0KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGJvb2x0cnVlID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGJvb2x0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IGNvbnRpbnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0Nvbm5lY3ROZWFyfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgd2lkdGg6IFwiMzUwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2kucG9zdGltZy5jYy9uelFNZ25uSi9OZWFyLnBuZycgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTkVBUlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2l0aCBORUFSIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCB3aWR0aDogXCIzNTBweFwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG4gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0Nvbm5lY3RlZE5FQVJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jywgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzAnIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pLnBvc3RpbWcuY2MvbnpRTWdubkovTmVhci5wbmcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5FQVJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0ZWQgTkVBUiB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja0Rpc0Nvbm5lY3RORUFSfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sb2dvdXRcIiBzdHlsZT17eyB3aWR0aDogJ2luaXRpYWwnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBjbG9zZWJ0blwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM5ZDk5OTknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzdweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9e3sgZmlsbDogJ3JlZCcgfX0gZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOC40NzUzIDE4LjI5MDNIMTkuMjk1SDIwLjExNDZWMjEuNTE2MlYyMy45MzU1SDE1LjE5NjZMMTUuMTk2NyAyN0wxMy4wNDkyIDI2LjI3OTlMOC4xMTYzMyAyNC42NjJDNy40NDU5IDI0LjQzMyA3IDI0LjI3ODIgNyAyNC4yNzgyVjdIOC42MzkzOEM4LjY2MTk2IDcgOC42ODM3OCA3LjAwNDU5IDguNzA1NTggNy4wMDkxOUM4LjcyMjQ4IDcuMDEyNzUgOC43MzkzNiA3LjAxNjMgOC43NTY1OSA3LjAxNzcyQzguNzY5MjkgNy4wMTYwNSA4Ljc4MTI1IDcuMDEyNjcgOC43OTMxNSA3LjAwOTMxQzguODA5NjggNy4wMDQ2NCA4LjgyNjEgNyA4Ljg0NDI0IDdIMTcuNjU1NkgyMC4xMTQ2VjExLjgzODdIMTkuMjk1SDE4LjQ3NTNMMTguNDc1NCA4LjYxMjY3TDE3LjY1NTYgOC42MTI4MUgxMy44Mzc2SDExLjkxOEwxNS4xOTY2IDkuNDE5MzZWMjIuMzIyNkgxOC40NzUzVjIxLjUxNjJWMTguMjkwM1pNMjMuMTUzIDExLjI2ODZMMjcgMTUuMDY0NEMyNyAxNS4wNjQ0IDI2Ljc1MjIgMTUuMzE5NCAyNi40MzE4IDE1LjYzNDZMMjMuMTUzIDE4Ljg2MDVMMjEuNzU0MSAyMC4yMjU3TDIxLjc1MzkgMTUuODcwOUgxNy42NTU2VjE1LjA2NDVWMTQuMjU4MUgyMS43NTM5TDIxLjc1NDEgOS45MDMwMUwyMy4xNTMgMTEuMjY4NlpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3ROZWFyKCkge1xuICAgICAgICB3aW5kb3cud2FsbGV0QWNjb3VudC5yZXF1ZXN0U2lnbkluKFxuICAgICAgICAgICAgd2luZG93Lm5lYXJDb25maWcuY29udHJhY3ROYW1lLFxuICAgICAgICAgICAgJ0RlbWV0ZXInKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RlZE5FQVIoKSB7XG4gICAgICAgIC8vICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAocmVkaXJlY3RpbmcpO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrRGlzQ29ubmVjdE5FQVIoKSB7XG4gICAgICAgIGF3YWl0IHdpbmRvdy53YWxsZXRBY2NvdW50LnNpZ25PdXQoKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cblxuXG4gICAgLy9BdXJvcmFcbiAgICBmdW5jdGlvbiBBdXJvcmFXYWxsZXQoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICB2YXIgYm9vbHRydWUgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoYm9vbHRydWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsgY29udGludWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4geyB3aW5kb3cub3BlbihcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL25rYmloZmJlb2dhZWFvZWhsZWZua29kYmVmZ3Bna25uXCIsIFwiX2JsYW5rXCIpIH19IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgd2lkdGg6IFwiMzUwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vaS5wb3N0aW1nLmNjLzN3Q1p6UkNWL0F1cm9yYS5qcGcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1cm9yYVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RhbGwgTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgeyFDb25uZWN0ZWRBdXJvcmEgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0Nvbm5lY3RBdXJvcmF9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgd2lkdGg6IFwiMzUwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2kucG9zdGltZy5jYy8zd0NaelJDVi9BdXJvcmEuanBnJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXJvcmFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdpdGggTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIHdpZHRoOiBcIjM1MHB4XCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0biBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0Nvbm5lY3RlZEF1cm9yYX0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMCcgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9kb2MuYXVyb3JhLmRldi9pbWcvZmF2aWNvbi5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1cm9yYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RlZCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0QXVyb3JhKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcweDRlNDU0MTUzJywgfV0sIC8vMTMxMzE2MTU1NVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRhY2M7XG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweDRlNDU0MTUzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnQXVyb3JhIFRlc3RuZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VUSCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdFVEgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vdGVzdG5ldC5hdXJvcmEuZGV2J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGFkZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZEVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0ZWRBdXJvcmEoKSB7XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0NvbnRpbnVlKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IChyZWRpcmVjdGluZyk7XG4gICAgfVxuXG5cbiAgICAvL0NlbG9cbiAgICBmdW5jdGlvbiBDZWxvV2FsbGV0KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGJvb2x0cnVlID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGJvb2x0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IGNvbnRpbnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbmtiaWhmYmVvZ2FlYW9laGxlZm5rb2RiZWZncGdrbm5cIiwgXCJfYmxhbmtcIikgfX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCB3aWR0aDogXCIzNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9iemxhaDcyam93OHovMlVqTFEwSVlZbThPNm1rYTl6WVZRTS9kODBhOGM2NDI3MDQyN2U5NTc4MzM2Zjk1ZDliNjg1Yy9DZWxvX0dseXBoX0NvbG9yX1JldmVyc2VfMS5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWxsIE1ldGFtYXNrIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7Q29ubmVjdGVkQ2Vsbz8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCB3aWR0aDogXCIzNTBweFwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG4gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0ZWRDZWxvfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcwJyB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2ltYWdlcy5jdGZhc3NldHMubmV0L2J6bGFoNzJqb3c4ei8yVWpMUTBJWVltOE82bWthOXpZVlFNL2Q4MGE4YzY0MjcwNDI3ZTk1NzgzMzZmOTVkOWI2ODVjL0NlbG9fR2x5cGhfQ29sb3JfUmV2ZXJzZV8xLnN2ZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2Vsb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RlZCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tEaXNDb25uZWN0Q2Vsb30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tbG9nb3V0XCIgc3R5bGU9e3sgd2lkdGg6ICdpbml0aWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gY2xvc2VidG5cIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjOWQ5OTk5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc3cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPXt7IGZpbGw6ICdyZWQnIH19IGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTguNDc1MyAxOC4yOTAzSDE5LjI5NUgyMC4xMTQ2VjIxLjUxNjJWMjMuOTM1NUgxNS4xOTY2TDE1LjE5NjcgMjdMMTMuMDQ5MiAyNi4yNzk5TDguMTE2MzMgMjQuNjYyQzcuNDQ1OSAyNC40MzMgNyAyNC4yNzgyIDcgMjQuMjc4MlY3SDguNjM5MzhDOC42NjE5NiA3IDguNjgzNzggNy4wMDQ1OSA4LjcwNTU4IDcuMDA5MTlDOC43MjI0OCA3LjAxMjc1IDguNzM5MzYgNy4wMTYzIDguNzU2NTkgNy4wMTc3MkM4Ljc2OTI5IDcuMDE2MDUgOC43ODEyNSA3LjAxMjY3IDguNzkzMTUgNy4wMDkzMUM4LjgwOTY4IDcuMDA0NjQgOC44MjYxIDcgOC44NDQyNCA3SDE3LjY1NTZIMjAuMTE0NlYxMS44Mzg3SDE5LjI5NUgxOC40NzUzTDE4LjQ3NTQgOC42MTI2N0wxNy42NTU2IDguNjEyODFIMTMuODM3NkgxMS45MThMMTUuMTk2NiA5LjQxOTM2VjIyLjMyMjZIMTguNDc1M1YyMS41MTYyVjE4LjI5MDNaTTIzLjE1MyAxMS4yNjg2TDI3IDE1LjA2NDRDMjcgMTUuMDY0NCAyNi43NTIyIDE1LjMxOTQgMjYuNDMxOCAxNS42MzQ2TDIzLjE1MyAxOC44NjA1TDIxLjc1NDEgMjAuMjI1N0wyMS43NTM5IDE1Ljg3MDlIMTcuNjU1NlYxNS4wNjQ1VjE0LjI1ODFIMjEuNzUzOUwyMS43NTQxIDkuOTAzMDFMMjMuMTUzIDExLjI2ODZaXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0Q2Vsb30gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCB3aWR0aDogXCIzNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9iemxhaDcyam93OHovMlVqTFEwSVlZbThPNm1rYTl6WVZRTS9kODBhOGM2NDI3MDQyN2U5NTc4MzM2Zjk1ZDliNjg1Yy9DZWxvX0dseXBoX0NvbG9yX1JldmVyc2VfMS5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2l0aCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RDZWxvKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcweGFlZjMnLCB9XSwgLy80NDc4N1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRhY2M7XG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweGFlZjMnLCAvLzQ0Nzg3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ0FsZmFqb3JlcyBDZWxvIFRlc3RuZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NFTE8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnQ0VMTycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9hbGZham9yZXMtZm9ybm8uY2Vsby10ZXN0bmV0Lm9yZyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhZGRFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQ29ubmVjdGVkTWV0YUNlbG9cIiwgXCJ0cnVlXCIpXG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RlZENlbG8oKXtcblxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tEaXNDb25uZWN0Q2Vsbygpe1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiLCBcIlwiKVxuXG4gICAgfVxuXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCAmJiAgd2luZG93LmV0aGVyZXVtLm5ldHdvcmtWZXJzaW9uID09IDEzMTMxNjE1NTUpe1xuICAgICAgICAgICAgc2V0Q29ubmVjdGVkQXVyb3JhKHRydWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNldENvbm5lY3RlZEF1cm9yYShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyAhPSBudWxsICYmIHdpbmRvdy5ldGhlcmV1bS5uZXR3b3JrVmVyc2lvbiA9PSA0NDc4NyAmJiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJDb25uZWN0ZWRNZXRhQ2Vsb1wiKSAhPSBcIlwiICl7XG4gICAgICAgICAgICBzZXRDb25uZWN0ZWRDZWxvKHRydWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNldENvbm5lY3RlZENlbG8oZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSB0cnVlICYmIHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdFN0YXR1cyh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldENvbm5lY3RTdGF0dXMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgMTAwMClcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDw+PD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkxvZ2luXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9e29uSGlkZX1cbiAgICAgICAgICAgICAgICBzaXplPSdsZydcbiAgICAgICAgICAgICAgICBjZW50ZXJlZCA+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsYXNzTmFtZT0nbW9kYWwtaGVhZGVyLWxvZ2luJyBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCB3YWxsZXRcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keS1sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzBweCAwcHggMTJweCcsIHdpZHRoOiAnMTAwJScsIGNvbG9yOiAnZ3JleScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBsZWFzZSBjb25uZWN0IGJvdGggeW91ciB3YWxsZXRzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcwcHgnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBjb2x1bW5HYXA6ICcxdncnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmVhcldhbGxldCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXVyb3JhV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxvV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29ubmVjdFN0YXR1cyA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tDb250aW51ZX0gc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj48Lz4pIDogKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgPC8+PC8+XG5cbiAgICApO1xuXG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjQ2OTc1NzBkMjk0MWFkODAyYTM4XCI7IH0iXSwibmFtZXMiOlsiSGVhZCIsIlJvdyIsIk1vZGFsIiwiQ29sIiwiUmVhY3QiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIkxvZ2luIiwic2hvdyIsIm9uSGlkZSIsInJlZGlyZWN0aW5nIiwiQ29ubmVjdFN0YXR1cyIsInNldENvbm5lY3RTdGF0dXMiLCJDb25uZWN0ZWRBdXJvcmEiLCJzZXRDb25uZWN0ZWRBdXJvcmEiLCJDb25uZWN0ZWRDZWxvIiwic2V0Q29ubmVjdGVkQ2VsbyIsIk5lYXJXYWxsZXQiLCJib29sdHJ1ZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJ3YWxsZXRBY2NvdW50IiwiaXNTaWduZWRJbiIsImV4Iiwib25DbGlja0Nvbm5lY3ROZWFyIiwiZGlzcGxheSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImN1cnNvciIsIm1hcmdpbiIsImhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIm9uQ2xpY2tDb25uZWN0ZWRORUFSIiwiYmFja2dyb3VuZCIsIm9uQ2xpY2tEaXNDb25uZWN0TkVBUiIsImZsb2F0IiwiZmlsbCIsInJlcXVlc3RTaWduSW4iLCJuZWFyQ29uZmlnIiwiY29udHJhY3ROYW1lIiwic2lnbk91dCIsImxvY2F0aW9uIiwiaHJlZiIsIkF1cm9yYVdhbGxldCIsImV0aGVyZXVtIiwib3BlbiIsIm9uQ2xpY2tDb25uZWN0QXVyb3JhIiwib25DbGlja0Nvbm5lY3RlZEF1cm9yYSIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXN1bHQiLCJwYXJhbXMiLCJjaGFpbklkIiwiZ2V0YWNjIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsIm9uQ2xpY2tDb250aW51ZSIsIkNlbG9XYWxsZXQiLCJvbkNsaWNrQ29ubmVjdGVkQ2VsbyIsIm9uQ2xpY2tEaXNDb25uZWN0Q2VsbyIsIm9uQ2xpY2tDb25uZWN0Q2VsbyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRUaW1lb3V0Iiwic2VsZWN0ZWRBZGRyZXNzIiwibmV0d29ya1ZlcnNpb24iLCJnZXRJdGVtIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJwYWRkaW5nVG9wIiwiY29sdW1uR2FwIiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=