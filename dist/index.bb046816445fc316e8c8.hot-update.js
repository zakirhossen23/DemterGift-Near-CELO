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

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, address != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
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
    }, "Connect With Celo"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
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
      onClick: destroy,
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
    }, "Connected Celo wallet")))));
  }

  function onClickConnectCelo() {
    return _onClickConnectCelo.apply(this, arguments);
  }

  function _onClickConnectCelo() {
    _onClickConnectCelo = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              connect().catch(function (e) {
                return console.log(e);
              });

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return _onClickConnectCelo.apply(this, arguments);
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
/******/ 	__webpack_require__.h = function() { return "75fa830b00c620ba25f8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmJiMDQ2ODE2NDQ1ZmMzMTZlOGM4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVlLFNBQVNPLEtBQVQsT0FLWjtBQUFBLE1BSkNDLElBSUQsUUFKQ0EsSUFJRDtBQUFBLE1BSENDLE1BR0QsUUFIQ0EsTUFHRDtBQUFBLE1BRkNDLFdBRUQsUUFGQ0EsV0FFRDs7QUFDQyxrQkFBMENKLCtDQUFRLENBQUMsSUFBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEIsaUJBREQsQ0FHQzs7O0FBQ0EsV0FBU0MsVUFBVCxHQUFtQztBQUMvQixRQUFJQyxRQUFRLEdBQUcsSUFBZjs7QUFDQSxXQUFPQSxRQUFQLEVBQWlCO0FBQ2IsVUFBSTtBQUNBQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxhQUFQLENBQXFCQyxVQUFyQixFQUFaO0FBQ0E7QUFDSCxPQUhELENBR0UsT0FBT0MsRUFBUCxFQUFXO0FBQUU7QUFBVTs7QUFBQTtBQUM1Qjs7QUFDRCxRQUFJSCxNQUFNLENBQUNDLGFBQVAsQ0FBcUJDLFVBQXJCLE1BQXFDLEtBQXpDLEVBQWdEO0FBQzVDLDBCQUFRLGlIQUNKO0FBQUssZUFBTyxFQUFFRSxrQkFBZDtBQUFrQyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJDLFVBQUFBLE9BQU8sRUFBRSxNQUE1QjtBQUFvQ0MsVUFBQUEsWUFBWSxFQUFFLEtBQWxEO0FBQXlEQyxVQUFBQSxLQUFLLEVBQUUsT0FBaEU7QUFBeUVDLFVBQUFBLE1BQU0sRUFBRSxTQUFqRjtBQUE0RkMsVUFBQUEsTUFBTSxFQUFFO0FBQXBHLFNBQXpDO0FBQXlKLGlCQUFTLEVBQUM7QUFBbkssc0JBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsTUFB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WkosQ0FESixDQVJKLENBTkYsQ0FBRixDQUZKO0FBa0RIOzs7Ozs7OztVQzNTRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1ldGVyLy4vc3JjL21vZGFscy9sb2dpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGVtZXRlci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vYXBwLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgQ29udGVudExvYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vQ29udGVudExvYWRlcidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnQC9uZWFyLWNvbnRyYWN0cy9jb250cmFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHtcbiAgICBzaG93LFxuICAgIG9uSGlkZSxcbiAgICByZWRpcmVjdGluZ1xuXG59KSB7XG4gICAgY29uc3QgW0Nvbm5lY3RTdGF0dXMsIHNldENvbm5lY3RTdGF0dXNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIFxuICAgIC8vTkVBUlxuICAgIGZ1bmN0aW9uIE5lYXJXYWxsZXQoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICB2YXIgYm9vbHRydWUgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoYm9vbHRydWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsgY29udGludWUgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpID09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdE5lYXJ9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCB3aWR0aDogXCIzNTBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vaS5wb3N0aW1nLmNjL256UU1nbm5KL05lYXIucG5nJyAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBORUFSXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXaXRoIE5FQVIgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIHdpZHRoOiBcIjM1MHB4XCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0biBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrQ29ubmVjdGVkTkVBUn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMCcgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2kucG9zdGltZy5jYy9uelFNZ25uSi9OZWFyLnBuZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTkVBUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RlZCBORUFSIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrRGlzQ29ubmVjdE5FQVJ9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWxvZ291dFwiIHN0eWxlPXt7IHdpZHRoOiAnaW5pdGlhbCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGNsb3NlYnRuXCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzlkOTk5OScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnN3B4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT17eyBmaWxsOiAncmVkJyB9fSBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE4LjQ3NTMgMTguMjkwM0gxOS4yOTVIMjAuMTE0NlYyMS41MTYyVjIzLjkzNTVIMTUuMTk2NkwxNS4xOTY3IDI3TDEzLjA0OTIgMjYuMjc5OUw4LjExNjMzIDI0LjY2MkM3LjQ0NTkgMjQuNDMzIDcgMjQuMjc4MiA3IDI0LjI3ODJWN0g4LjYzOTM4QzguNjYxOTYgNyA4LjY4Mzc4IDcuMDA0NTkgOC43MDU1OCA3LjAwOTE5QzguNzIyNDggNy4wMTI3NSA4LjczOTM2IDcuMDE2MyA4Ljc1NjU5IDcuMDE3NzJDOC43NjkyOSA3LjAxNjA1IDguNzgxMjUgNy4wMTI2NyA4Ljc5MzE1IDcuMDA5MzFDOC44MDk2OCA3LjAwNDY0IDguODI2MSA3IDguODQ0MjQgN0gxNy42NTU2SDIwLjExNDZWMTEuODM4N0gxOS4yOTVIMTguNDc1M0wxOC40NzU0IDguNjEyNjdMMTcuNjU1NiA4LjYxMjgxSDEzLjgzNzZIMTEuOTE4TDE1LjE5NjYgOS40MTkzNlYyMi4zMjI2SDE4LjQ3NTNWMjEuNTE2MlYxOC4yOTAzWk0yMy4xNTMgMTEuMjY4NkwyNyAxNS4wNjQ0QzI3IDE1LjA2NDQgMjYuNzUyMiAxNS4zMTk0IDI2LjQzMTggMTUuNjM0NkwyMy4xNTMgMTguODYwNUwyMS43NTQxIDIwLjIyNTdMMjEuNzUzOSAxNS44NzA5SDE3LjY1NTZWMTUuMDY0NVYxNC4yNTgxSDIxLjc1MzlMMjEuNzU0MSA5LjkwMzAxTDIzLjE1MyAxMS4yNjg2WlwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdE5lYXIoKSB7XG4gICAgICAgIHdpbmRvdy53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oXG4gICAgICAgICAgICB3aW5kb3cubmVhckNvbmZpZy5jb250cmFjdE5hbWUsXG4gICAgICAgICAgICAnRGVtZXRlcicpO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdGVkTkVBUigpIHtcbiAgICAgICAgLy8gICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IChyZWRpcmVjdGluZyk7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tEaXNDb25uZWN0TkVBUigpIHtcbiAgICAgICAgYXdhaXQgd2luZG93LndhbGxldEFjY291bnQuc2lnbk91dCgpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuXG5cbiAgICAvL0F1cm9yYVxuICAgIGZ1bmN0aW9uIEF1cm9yYVdhbGxldCgpOiBKU1guRWxlbWVudCB7XG4gICAgICAgIHZhciBib29sdHJ1ZSA9IHRydWU7XG4gICAgICAgIHdoaWxlIChib29sdHJ1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkgeyBjb250aW51ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvbmtiaWhmYmVvZ2FlYW9laGxlZm5rb2RiZWZncGdrbm5cIiwgXCJfYmxhbmtcIikgfX0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCB3aWR0aDogXCIzNTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeSB3aGl0ZWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pLnBvc3RpbWcuY2MvM3dDWnpSQ1YvQXVyb3JhLmpwZycgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW5MZWZ0OiAnMTFweCcsIGhlaWdodDogJzUxcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVyb3JhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5zdGFsbCBNZXRhbWFzayB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7d2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcyA9PSBudWxsID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0QXVyb3JhfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIHdpZHRoOiBcIjM1MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pLnBvc3RpbWcuY2MvM3dDWnpSQ1YvQXVyb3JhLmpwZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZGVyJywgcGFkZGluZzogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsIGhlaWdodDogJzEwMCUnLCBtYXJnaW46ICctMTJweCAwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVyb3JhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXaXRoIE1ldGFtYXNrIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjVweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCB3aWR0aDogXCIzNTBweFwiLCBtYXJnaW46IFwiMjBweCAwXCIgfX0gY2xhc3NOYW1lPVwiYnRuLXByaW1hcnkgd2hpdGVidG4gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tDb25uZWN0ZWRBdXJvcmF9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jywgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzAnIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6ICc1MXB4Jywgd2lkdGg6ICc1MXB4JyB9fSBzcmM9J2h0dHBzOi8vZG9jLmF1cm9yYS5kZXYvaW1nL2Zhdmljb24uc3ZnJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luTGVmdDogJzExcHgnLCBoZWlnaHQ6ICc1MXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdXJvcmFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzE1cHgnLCBwYWRkaW5nOiAnMCcsIG1hcmdpbjogJzAnLCBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0ZWQgTWV0YW1hc2sgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdEF1cm9yYSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSk7XG4gICAgICAgIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGdldGFjYyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMTMxMzE2MTU1NScsIH1dLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnZXRhY2M7XG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZXJyb3IgY29kZSBpbmRpY2F0ZXMgdGhhdCB0aGUgY2hhaW4gaGFzIG5vdCBiZWVuIGFkZGVkIHRvIE1ldGFNYXNrLlxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcxMzEzMTYxNTU1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnQXVyb3JhIFRlc3RuZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVDdXJyZW5jeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VUSCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdFVEgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBycGNVcmxzOiBbJ2h0dHBzOi8vdGVzdG5ldC5hdXJvcmEuZGV2J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGFkZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZEVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2xpY2tDb25uZWN0ZWRBdXJvcmEoKSB7XG5cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gb25DbGlja0NvbnRpbnVlKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IChyZWRpcmVjdGluZyk7XG4gICAgfVxuXG5cbiAgICAvL0NlbG9cbiAgICBmdW5jdGlvbiBDZWxvV2FsbGV0KCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgdmFyIGJvb2x0cnVlID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGJvb2x0cnVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IGNvbnRpbnVlIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7YWRkcmVzcyAhPSBudWxsPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25DbGlja0Nvbm5lY3RDZWxvfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIHdpZHRoOiBcIjM1MHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzUxcHgnLCB3aWR0aDogJzUxcHgnIH19IHNyYz0naHR0cHM6Ly9pbWFnZXMuY3RmYXNzZXRzLm5ldC9iemxhaDcyam93OHovMlVqTFEwSVlZbThPNm1rYTl6WVZRTS9kODBhOGM2NDI3MDQyN2U5NTc4MzM2Zjk1ZDliNjg1Yy9DZWxvX0dseXBoX0NvbG9yX1JldmVyc2VfMS5zdmcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGRlcicsIHBhZGRpbmc6ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAnLTEycHggMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JywgcGFkZGluZzogJzAnLCBtYXJnaW46ICcwJywgZm9udEZhbWlseTogJ3NhbnMtc2VyaWYnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdpdGggQ2VsbyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgd2lkdGg6IFwiMzUwcHhcIiwgbWFyZ2luOiBcIjIwcHggMFwiIH19IGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5IHdoaXRlYnRuIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtkZXN0cm95fSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcwJyB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiAnNTFweCcsIHdpZHRoOiAnNTFweCcgfX0gc3JjPSdodHRwczovL2ltYWdlcy5jdGZhc3NldHMubmV0L2J6bGFoNzJqb3c4ei8yVWpMUTBJWVltOE82bWthOXpZVlFNL2Q4MGE4YzY0MjcwNDI3ZTk1NzgzMzZmOTVkOWI2ODVjL0NlbG9fR2x5cGhfQ29sb3JfUmV2ZXJzZV8xLnN2ZycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcxMXB4JywgaGVpZ2h0OiAnNTFweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkZXInLCBwYWRkaW5nOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJywgaGVpZ2h0OiAnMTAwJScsIG1hcmdpbjogJy0xMnB4IDAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2Vsb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIHBhZGRpbmc6ICcwJywgbWFyZ2luOiAnMCcsIGZvbnRGYW1pbHk6ICdzYW5zLXNlcmlmJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RlZCBDZWxvIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQ29ubmVjdENlbG8oKSB7XG4gICAgICAgIGNvbm5lY3QoKS5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xuICAgIH1cblxuXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSA9PSB0cnVlICYmIHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdFN0YXR1cyh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldENvbm5lY3RTdGF0dXMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgMTAwMClcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDw+PD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkxvZ2luXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9e29uSGlkZX1cbiAgICAgICAgICAgICAgICBzaXplPSdsZydcbiAgICAgICAgICAgICAgICBjZW50ZXJlZCA+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsYXNzTmFtZT0nbW9kYWwtaGVhZGVyLWxvZ2luJyBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCB3YWxsZXRcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtYm9keS1sb2dpbic+XG4gICAgICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzBweCAwcHggMTJweCcsIHdpZHRoOiAnMTAwJScsIGNvbG9yOiAnZ3JleScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBsZWFzZSBjb25uZWN0IGJvdGggeW91ciB3YWxsZXRzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdUb3A6ICcwcHgnLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBjb2x1bW5HYXA6ICcxdncnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmVhcldhbGxldCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXVyb3JhV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxvV2FsbGV0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q29ubmVjdFN0YXR1cyA/ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tDb250aW51ZX0gc3R5bGU9e3sgd2lkdGg6ICcxNTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj48Lz4pIDogKDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkIHN0eWxlPXt7IHdpZHRoOiAnMTUwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgPC8+PC8+XG5cbiAgICApO1xuXG59XG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjc1ZmE4MzBiMDBjNjIwYmEyNWY4XCI7IH0iXSwibmFtZXMiOlsiSGVhZCIsIlJvdyIsIk1vZGFsIiwiQ29sIiwiUmVhY3QiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsIkxvZ2luIiwic2hvdyIsIm9uSGlkZSIsInJlZGlyZWN0aW5nIiwiQ29ubmVjdFN0YXR1cyIsInNldENvbm5lY3RTdGF0dXMiLCJOZWFyV2FsbGV0IiwiYm9vbHRydWUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwid2FsbGV0QWNjb3VudCIsImlzU2lnbmVkSW4iLCJleCIsIm9uQ2xpY2tDb25uZWN0TmVhciIsImRpc3BsYXkiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJjdXJzb3IiLCJtYXJnaW4iLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJvbkNsaWNrQ29ubmVjdGVkTkVBUiIsImJhY2tncm91bmQiLCJvbkNsaWNrRGlzQ29ubmVjdE5FQVIiLCJmbG9hdCIsImZpbGwiLCJyZXF1ZXN0U2lnbkluIiwibmVhckNvbmZpZyIsImNvbnRyYWN0TmFtZSIsInNpZ25PdXQiLCJsb2NhdGlvbiIsImhyZWYiLCJBdXJvcmFXYWxsZXQiLCJldGhlcmV1bSIsIm9wZW4iLCJzZWxlY3RlZEFkZHJlc3MiLCJvbkNsaWNrQ29ubmVjdEF1cm9yYSIsIm9uQ2xpY2tDb25uZWN0ZWRBdXJvcmEiLCJyZXF1ZXN0IiwibWV0aG9kIiwicmVzdWx0IiwicGFyYW1zIiwiY2hhaW5JZCIsImdldGFjYyIsImNvZGUiLCJjaGFpbk5hbWUiLCJuYXRpdmVDdXJyZW5jeSIsIm5hbWUiLCJzeW1ib2wiLCJkZWNpbWFscyIsInJwY1VybHMiLCJvbkNsaWNrQ29udGludWUiLCJDZWxvV2FsbGV0IiwiYWRkcmVzcyIsIm9uQ2xpY2tDb25uZWN0Q2VsbyIsImRlc3Ryb3kiLCJjb25uZWN0IiwiY2F0Y2giLCJlIiwic2V0VGltZW91dCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwicGFkZGluZ1RvcCIsImNvbHVtbkdhcCIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9