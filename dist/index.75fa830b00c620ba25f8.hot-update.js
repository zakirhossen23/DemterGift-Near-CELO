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
      setConnectStatus = _useState2[1]; //NEAR


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

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, window.ethereum.selectedAddress == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
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

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, window.ethereum.selectedAddress == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
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
    }, "Connected Metamask wallet")))));
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
                  chainId: '44787'
                }]
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
                  chainId: '44787',
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

  setTimeout(function () {
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
/******/ 	__webpack_require__.h = function() { return "793f854956feb42feade"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4Ljc1ZmE4MzBiMDBjNjIwYmEyNWY4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVlLFNBQVNPLEtBQVQsT0FLWjtBQUFBLE1BSkNDLElBSUQsUUFKQ0EsSUFJRDtBQUFBLE1BSENDLE1BR0QsUUFIQ0EsTUFHRDtBQUFBLE1BRkNDLFdBRUQsUUFGQ0EsV0FFRDs7QUFDQyxrQkFBMENKLCtDQUFRLENBQUMsSUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEIsaUJBREQsQ0FHQzs7O0FBQ0EsV0FBU0MsVUFBVCxHQUFtQztBQUMvQixRQUFJQyxRQUFRLEdBQUcsSUFBZjs7QUFDQSxXQUFPQSxRQUFQLEVBQWlCO0FBQ2IsVUFBSTtBQUNBQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxhQUFQLENBQXFCQyxVQUFyQixFQUFaO0FBQ0E7QUFDSCxPQUhELENBR0UsT0FBT0MsRUFBUCxFQUFXO0FBQUU7QUFBVTs7QUFBQTtBQUM1Qjs7QUFDRCxRQUFJSCxNQUFNLENBQUNDLGFBQVAsQ0FBcUJDLFVBQXJCLE1BQXFDLEtBQXpDLEVBQWdEO0FBQzVDLDBCQUFRLGlIQUNKO0FBQUssZUFBTyxFQUFFRSxrQkFBZDtBQUFrQyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLFVBQUFBLE9BQU8sRUFBRSxNQUE1QjtBQUFvQ0MsVUFBQUEsWUFBWSxFQUFFLEtBQWxEO0FBQXlEQyxVQUFBQSxLQUFLLEVBQUUsT0FBaEU7QUFBeUVDLFVBQUFBLE1BQU0sRUFBRSxTQUFqRjtBQUE0RkMsVUFBQUEsTUFBTSxFQUFFO0FBQXBHLFNBQXpDO0FBQXlKLGlCQUFTLEVBQUM7QUFBbkssc0JBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsTUFB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LEVBQUU7QUFBRUEsTUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBeEIsZ0JBRGEsQ0FKekIsQ0FaSixDQURKLENBUkosQ0FORixDQUFGLENBRko7QUFrREg7Ozs7Ozs7O1VDN1ZELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbWV0ZXIvLi9zcmMvbW9kYWxzL2xvZ2luL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9hcHAuY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBDb250ZW50TG9hZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50TG9hZGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICdAL25lYXItY29udHJhY3RzL2NvbnRyYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oe1xuICAgIHNob3csXG4gICAgb25IaWRlLFxuICAgIHJlZGlyZWN0aW5nXG5cbn0pIHtcbiAgICBjb25zdCBbQ29ubmVjdFN0YXR1cywgc2V0Q29ubmVjdFN0YXR1c10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgXG4gICAgLy9ORUFSXG4gICAgZnVuY3Rpb24gTmVhcldhbGxldCgpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHZhciBib29sdHJ1ZSA9IHRydWU7XG4gICAgICAgIHdoaWxlIChib29sdHJ1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkgeyBjb250aW51ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0TmVhcn0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIHdpZHRoOiBcIjM1MHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pLnBvc3RpbWcuY2MvbnpRTWdubkovTmVhci5wbmcnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5FQVJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdpdGggTkVBUiB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgd2lkdGg6IFwiMzUwcHhcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0ZWRORUFSfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcwJyB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vaS5wb3N0aW1nLmNjL256UU1nbm5KL05lYXIucG5nJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBORUFSXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdGVkIE5FQVIgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tEaXNDb25uZWN0TkVBUn0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tbG9nb3V0XCIgc3R5bGU9e3sgd2lkdGg6ICdpbml0aWFsJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gY2xvc2VidG5cIiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjOWQ5OTk5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc3cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPXt7IGZpbGw6ICdyZWQnIH19IGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTguNDc1MyAxOC4yOTAzSDE5LjI5NUgyMC4xMTQ2VjIxLjUxNjJWMjMuOTM1NUgxNS4xOTY2TDE1LjE5NjcgMjdMMTMuMDQ5MiAyNi4yNzk5TDguMTE2MzMgMjQuNjYyQzcuNDQ1OSAyNC40MzMgNyAyNC4yNzgyIDcgMjQuMjc4MlY3SDguNjM5MzhDOC42NjE5NiA3IDguNjgzNzggNy4wMDQ1OSA4LjcwNTU4IDcuMDA5MTlDOC43MjI0OCA3LjAxMjc1IDguNzM5MzYgNy4wMTYzIDguNzU2NTkgNy4wMTc3MkM4Ljc2OTI5IDcuMDE2MDUgOC43ODEyNSA3LjAxMjY3IDguNzkzMTUgNy4wMDkzMUM4LjgwOTY4IDcuMDA0NjQgOC44MjYxIDcgOC44NDQyNCA3SDE3LjY1NTZIMjAuMTE0NlYxMS44Mzg3SDE5LjI5NUgxOC40NzUzTDE4LjQ3NTQgOC42MTI2N0wxNy42NTU2IDguNjEyODFIMTMuODM3NkgxMS45MThMMTUuMTk2NiA5LjQxOTM2VjIyLjMyMjZIMTguNDc1M1YyMS41MTYyVjE4LjI5MDNaTTIzLjE1MyAxMS4yNjg2TDI3IDE1LjA2NDRDMjcgMTUuMDY0NCAyNi43NTIyIDE1LjMxOTQgMjYuNDMxOCAxNS42MzQ2TDIzLjE1MyAxOC44NjA1TDIxLjc1NDEgMjAuMjI1N0wyMS43NTM5IDE1Ljg3MDlIMTcuNjU1NlYxNS4wNjQ1VjE0LjI1ODFIMjEuNzUzOUwyMS43NTQxIDkuOTAzMDFMMjMuMTUzIDExLjI2ODZaXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0TmVhcigpIHtcbiAgICAgICAgd2luZG93LndhbGxldEFjY291bnQucmVxdWVzdFNpZ25JbihcbiAgICAgICAgICAgIHdpbmRvdy5uZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSxcbiAgICAgICAgICAgICdEZW1ldGVyJyk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0ZWRORUFSKCkge1xuICAgICAgICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKHJlZGlyZWN0aW5nKTtcbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Rpc0Nvbm5lY3RORUFSKCkge1xuICAgICAgICBhd2FpdCB3aW5kb3cud2FsbGV0QWNjb3VudC5zaWduT3V0KClcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG5cblxuICAgIC8vQXVyb3JhXG4gICAgZnVuY3Rpb24gQXVyb3JhV2FsbGV0KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGJvb2x0cnVlID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGJvb2x0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IGNvbnRpbnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHsgd2luZG93Lm9wZW4oXCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9ua2JpaGZiZW9nYWVhb2VobGVmbmtvZGJlZmdwZ2tublwiLCBcIl9ibGFua1wiKSB9fSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIHdpZHRoOiBcIjM1MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2kucG9zdGltZy5jYy8zd0NaelJDVi9BdXJvcmEuanBnJyAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXJvcmFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWxsIE1ldGFtYXNrIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHt3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzID09IG51bGwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0Nvbm5lY3RBdXJvcmF9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgd2lkdGg6IFwiMzUwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2kucG9zdGltZy5jYy8zd0NaelJDVi9BdXJvcmEuanBnJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXJvcmFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdpdGggTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIHdpZHRoOiBcIjM1MHB4XCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0biBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0Nvbm5lY3RlZEF1cm9yYX0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMCcgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9kb2MuYXVyb3JhLmRldi9pbWcvZmF2aWNvbi5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1cm9yYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RlZCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0QXVyb3JhKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcbiAgICAgICAgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcxMzEzMTYxNTU1JywgfV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdldGFjYztcbiAgICAgICAgfSBjYXRjaCAoc3dpdGNoRXJyb3I6IGFueSkge1xuICAgICAgICAgICAgLy8gVGhpcyBlcnJvciBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjaGFpbiBoYXMgbm90IGJlZW4gYWRkZWQgdG8gTWV0YU1hc2suXG4gICAgICAgICAgICBpZiAoc3dpdGNoRXJyb3IuY29kZSA9PT0gNDkwMikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5JZDogJzEzMTMxNjE1NTUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbk5hbWU6ICdBdXJvcmEgVGVzdG5ldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRVRIJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ0VUSCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly90ZXN0bmV0LmF1cm9yYS5kZXYnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIFwiYWRkXCIgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdGhlciBcInN3aXRjaFwiIGVycm9yc1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RlZEF1cm9yYSgpIHtcblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29udGludWUoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKHJlZGlyZWN0aW5nKTtcbiAgICB9XG5cblxuICAgIC8vQ2Vsb1xuICAgIGZ1bmN0aW9uIENlbG9XYWxsZXQoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICB2YXIgYm9vbHRydWUgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoYm9vbHRydWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsgY29udGludWUgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAoPD5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHsgd2luZG93Lm9wZW4oXCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9ua2JpaGZiZW9nYWVhb2VobGVmbmtvZGJlZmdwZ2tublwiLCBcIl9ibGFua1wiKSB9fSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIHdpZHRoOiBcIjM1MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2ltYWdlcy5jdGZhc3NldHMubmV0L2J6bGFoNzJqb3c4ei8yVWpMUTBJWVltOE82bWthOXpZVlFNL2Q4MGE4YzY0MjcwNDI3ZTk1NzgzMzZmOTVkOWI2ODVjL0NlbG9fR2x5cGhfQ29sb3JfUmV2ZXJzZV8xLnN2ZycgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2Vsb1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RhbGwgTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHt3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzID09IG51bGwgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0Nvbm5lY3RDZWxvfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIHdpZHRoOiBcIjM1MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9iemxhaDcyam93OHovMlVqTFEwSVlZbThPNm1rYTl6WVZRTS9kODBhOGM2NDI3MDQyN2U5NTc4MzM2Zjk1ZDliNjg1Yy9DZWxvX0dseXBoX0NvbG9yX1JldmVyc2VfMS5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2l0aCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgd2lkdGg6IFwiMzUwcHhcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdGVkQ2Vsb30gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMCcgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9iemxhaDcyam93OHovMlVqTFEwSVlZbThPNm1rYTl6WVZRTS9kODBhOGM2NDI3MDQyN2U5NTc4MzM2Zjk1ZDliNjg1Yy9DZWxvX0dseXBoX0NvbG9yX1JldmVyc2VfMS5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0ZWQgTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0Q2VsbygpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICAgIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGdldGFjYyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnNDQ3ODcnLCB9XSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ2V0YWNjO1xuICAgICAgICB9IGNhdGNoIChzd2l0Y2hFcnJvcjogYW55KSB7XG4gICAgICAgICAgICAvLyBUaGlzIGVycm9yIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIGNoYWluIGhhcyBub3QgYmVlbiBhZGRlZCB0byBNZXRhTWFzay5cbiAgICAgICAgICAgIGlmIChzd2l0Y2hFcnJvci5jb2RlID09PSA0OTAyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiAnNDQ3ODcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbk5hbWU6ICdBbGZham9yZXMgQ2VsbyBUZXN0bmV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDRUxPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ0NFTE8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlIFwiYWRkXCIgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkRXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdGhlciBcInN3aXRjaFwiIGVycm9yc1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0Nvbm5lY3RlZENlbG8oKXtcblxuICAgIH1cblxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gdHJ1ZSAmJiB3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNldENvbm5lY3RTdGF0dXModHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRDb25uZWN0U3RhdHVzKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIDEwMDApXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8Pjw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TG9naW48L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJMb2dpblwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3d9XG4gICAgICAgICAgICAgICAgb25IaWRlPXtvbkhpZGV9XG4gICAgICAgICAgICAgICAgc2l6ZT0nbGcnXG4gICAgICAgICAgICAgICAgY2VudGVyZWQgPlxuXG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbGFzc05hbWU9J21vZGFsLWhlYWRlci1sb2dpbicgY2xvc2VCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIENvbm5lY3Qgd2FsbGV0XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLWJvZHktbG9naW4nPlxuICAgICAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcwcHggMHB4IDEycHgnLCB3aWR0aDogJzEwMCUnLCBjb2xvcjogJ2dyZXknIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5QbGVhc2UgY29ubmVjdCBib3RoIHlvdXIgd2FsbGV0czwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMHB4Jywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgY29sdW1uR2FwOiAnMXZ3JywgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5lYXJXYWxsZXQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1cm9yYVdhbGxldCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Vsb1dhbGxldCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0Nvbm5lY3RTdGF0dXMgPyAoPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQ29udGludWV9IHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGludWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+PC8+KSA6ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZCBzdHlsZT17eyB3aWR0aDogJzE1MHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPil9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgIDwvPjwvPlxuXG4gICAgKTtcblxufVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI3OTNmODU0OTU2ZmViNDJmZWFkZVwiOyB9Il0sIm5hbWVzIjpbIkhlYWQiLCJSb3ciLCJNb2RhbCIsIkNvbCIsIlJlYWN0IiwiQnV0dG9uIiwidXNlU3RhdGUiLCJMb2dpbiIsInNob3ciLCJvbkhpZGUiLCJyZWRpcmVjdGluZyIsIkNvbm5lY3RTdGF0dXMiLCJzZXRDb25uZWN0U3RhdHVzIiwiTmVhcldhbGxldCIsImJvb2x0cnVlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIndhbGxldEFjY291bnQiLCJpc1NpZ25lZEluIiwiZXgiLCJvbkNsaWNrQ29ubmVjdE5lYXIiLCJkaXNwbGF5IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiY3Vyc29yIiwibWFyZ2luIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwib25DbGlja0Nvbm5lY3RlZE5FQVIiLCJiYWNrZ3JvdW5kIiwib25DbGlja0Rpc0Nvbm5lY3RORUFSIiwiZmxvYXQiLCJmaWxsIiwicmVxdWVzdFNpZ25JbiIsIm5lYXJDb25maWciLCJjb250cmFjdE5hbWUiLCJzaWduT3V0IiwibG9jYXRpb24iLCJocmVmIiwiQXVyb3JhV2FsbGV0IiwiZXRoZXJldW0iLCJvcGVuIiwic2VsZWN0ZWRBZGRyZXNzIiwib25DbGlja0Nvbm5lY3RBdXJvcmEiLCJvbkNsaWNrQ29ubmVjdGVkQXVyb3JhIiwicmVxdWVzdCIsIm1ldGhvZCIsInJlc3VsdCIsInBhcmFtcyIsImNoYWluSWQiLCJnZXRhY2MiLCJjb2RlIiwiY2hhaW5OYW1lIiwibmF0aXZlQ3VycmVuY3kiLCJuYW1lIiwic3ltYm9sIiwiZGVjaW1hbHMiLCJycGNVcmxzIiwib25DbGlja0NvbnRpbnVlIiwiQ2Vsb1dhbGxldCIsIm9uQ2xpY2tDb25uZWN0Q2VsbyIsIm9uQ2xpY2tDb25uZWN0ZWRDZWxvIiwic2V0VGltZW91dCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwicGFkZGluZ1RvcCIsImNvbHVtbkdhcCIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9