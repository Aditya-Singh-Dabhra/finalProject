webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _etherium_Campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../etherium/Campaign */ "./etherium/Campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");








var _jsxFileName = "C:\\Users\\aditya\\Desktop\\blockchain\\kickstart\\pages\\campaigns\\requests\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var RequestsIndex = /*#__PURE__*/function (_Component) {
  Object(C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RequestsIndex, _Component);

  var _super = _createSuper(RequestsIndex);

  function RequestsIndex() {
    Object(C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RequestsIndex);

    return _super.apply(this, arguments);
  }

  Object(C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestsIndex, [{
    key: "renderRow",
    value: function renderRow() {
      var _this = this;

      return this.props.requests.map(function (request, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_RequestRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
          request: request,
          id: index,
          address: _this.props.address,
          approversCount: _this.props.approversCount
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Body;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          children: "Requests"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
          route: "/campaigns/".concat(this.props.address, "/requests/new"),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
              primary: true,
              floated: "right",
              style: {
                marginBottom: 15
              },
              children: "Add Requests"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Header, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Row, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "Amount(Ether)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "Recipient"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "ApprovalCount"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "aprrove"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "Finalize"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Body, {
            children: this.renderRow()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: [" Found ", this.props.requestCount, " requests"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var address, campaign, approversCount, requestCount, requests;
        return C_Users_aditya_Desktop_blockchain_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = Object(_etherium_Campaign__WEBPACK_IMPORTED_MODULE_12__["default"])(address);
                _context.next = 4;
                return campaign.methods.approversCount().call();

              case 4:
                approversCount = _context.sent;
                console.log(approversCount);
                _context.next = 8;
                return campaign.methods.getRequestsCount().call();

              case 8:
                requestCount = +_context.sent;
                _context.next = 11;
                return Promise.all(Array(requestCount).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 11:
                requests = _context.sent;
                return _context.abrupt("return", {
                  address: address,
                  requests: requests,
                  requestCount: requestCount,
                  approversCount: approversCount
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestsIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestsIndex);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RzSW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwiSGVhZGVyIiwiVGFibGUiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvdyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIm1ldGhvZHMiLCJjYWxsIiwiY29uc29sZSIsImxvZyIsImdldFJlcXVlc3RzQ291bnQiLCJQcm9taXNlIiwiYWxsIiwiQXJyYXkiLCJmaWxsIiwiZWxlbWVudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsYTs7Ozs7Ozs7Ozs7OztnQ0E2QlU7QUFBQTs7QUFDUixhQUFPLEtBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQy9DLDRCQUNJLHFFQUFDLCtEQUFEO0FBQ0ksaUJBQU8sRUFBRUQsT0FEYjtBQUdJLFlBQUUsRUFBRUMsS0FIUjtBQUlJLGlCQUFPLEVBQUUsS0FBSSxDQUFDSixLQUFMLENBQVdLLE9BSnhCO0FBS0ksd0JBQWMsRUFBRSxLQUFJLENBQUNMLEtBQUwsQ0FBV007QUFML0IsV0FFU0YsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBU0gsT0FWTSxDQUFQO0FBV0g7Ozs2QkFFUTtBQUFBLFVBQ0dHLE1BREgsR0FDcUNDLHVEQURyQyxDQUNHRCxNQURIO0FBQUEsVUFDV0UsR0FEWCxHQUNxQ0QsdURBRHJDLENBQ1dDLEdBRFg7QUFBQSxVQUNnQkMsVUFEaEIsR0FDcUNGLHVEQURyQyxDQUNnQkUsVUFEaEI7QUFBQSxVQUM0QkMsSUFENUIsR0FDcUNILHVEQURyQyxDQUM0QkcsSUFENUI7QUFFTCwwQkFDSSxxRUFBQywyREFBRDtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsNkNBQUQ7QUFBTSxlQUFLLHVCQUFnQixLQUFLWCxLQUFMLENBQVdLLE9BQTNCLGtCQUFYO0FBQUEsaUNBQ0k7QUFBQSxtQ0FDSSxxRUFBQyx3REFBRDtBQUNJLHFCQUFPLE1BRFg7QUFFSSxxQkFBTyxFQUFDLE9BRlo7QUFHSSxtQkFBSyxFQUFFO0FBQUVPLDRCQUFZLEVBQUU7QUFBaEIsZUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBYUkscUVBQUMsdURBQUQ7QUFBQSxrQ0FDSSxxRUFBQyxNQUFEO0FBQUEsbUNBQ0kscUVBQUMsR0FBRDtBQUFBLHNDQUNJLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0kscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISixlQUlJLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFLSSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKLGVBTUkscUVBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFOSixlQU9JLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVlJLHFFQUFDLElBQUQ7QUFBQSxzQkFBTyxLQUFLQyxTQUFMO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUEyQkk7QUFBQSxnQ0FBYSxLQUFLYixLQUFMLENBQVdjLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUErQkg7Ozs7K1VBM0U0QmQsSzs7Ozs7O0FBQ2pCSyx1QixHQUFZTCxLQUFLLENBQUNlLEssQ0FBbEJWLE87QUFFRlcsd0IsR0FBV0MsbUVBQVEsQ0FBQ1osT0FBRCxDOzt1QkFDSVcsUUFBUSxDQUFDRSxPQUFULENBQWlCWixjQUFqQixHQUFrQ2EsSUFBbEMsRTs7O0FBQXZCYiw4QjtBQUNOYyx1QkFBTyxDQUFDQyxHQUFSLENBQVlmLGNBQVo7O3VCQUU2QlUsUUFBUSxDQUFDRSxPQUFULENBQ3hCSSxnQkFEd0IsR0FFeEJILElBRndCLEU7OztBQUF2QkwsNEI7O3VCQUtpQlMsT0FBTyxDQUFDQyxHQUFSLENBQ25CQyxLQUFLLENBQUNYLFlBQUQsQ0FBTCxDQUNLWSxJQURMLEdBRUt4QixHQUZMLENBRVMsVUFBQ3lCLE9BQUQsRUFBVXZCLEtBQVYsRUFBb0I7QUFDckIseUJBQU9ZLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQmpCLFFBQWpCLENBQTBCRyxLQUExQixFQUFpQ2UsSUFBakMsRUFBUDtBQUNILGlCQUpMLENBRG1CLEM7OztBQUFqQmxCLHdCO2lEQVFDO0FBQ0hJLHlCQUFPLEVBQUVBLE9BRE47QUFFSEosMEJBQVEsRUFBRUEsUUFGUDtBQUdIYSw4QkFBWSxFQUFFQSxZQUhYO0FBSUhSLGdDQUFjLEVBQUVBO0FBSmIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyQmFzQiwrQzs7QUErRWI3Qiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuZTQ3MTAzZWMzZjFmYjVjNWU0ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyaXVtL0NhbXBhaWduJztcclxuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcclxuXHJcbmNsYXNzIFJlcXVlc3RzSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgYXBwcm92ZXJzQ291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVyc0NvdW50KCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFwcHJvdmVyc0NvdW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdENvdW50ID0gKyhhd2FpdCBjYW1wYWlnbi5tZXRob2RzXHJcbiAgICAgICAgICAgIC5nZXRSZXF1ZXN0c0NvdW50KClcclxuICAgICAgICAgICAgLmNhbGwoKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdENvdW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgQXJyYXkocmVxdWVzdENvdW50KVxyXG4gICAgICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICByZXF1ZXN0czogcmVxdWVzdHMsXHJcbiAgICAgICAgICAgIHJlcXVlc3RDb3VudDogcmVxdWVzdENvdW50LFxyXG4gICAgICAgICAgICBhcHByb3ZlcnNDb3VudDogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSb3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFJlcXVlc3RSb3dcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0PXtyZXF1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudD17dGhpcy5wcm9wcy5hcHByb3ZlcnNDb3VudH1cclxuICAgICAgICAgICAgICAgID48L1JlcXVlc3RSb3c+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDM+UmVxdWVzdHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0cy9uZXdgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD0ncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBSZXF1ZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BbW91bnQoRXRoZXIpPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92YWxDb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPmFwcnJvdmU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5GaW5hbGl6ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJvZHk+e3RoaXMucmVuZGVyUm93KCl9PC9Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgIDxkaXY+IEZvdW5kIHt0aGlzLnByb3BzLnJlcXVlc3RDb3VudH0gcmVxdWVzdHM8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdHNJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==