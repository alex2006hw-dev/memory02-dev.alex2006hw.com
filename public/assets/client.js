webpackJsonp([8],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
 // Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history

/* harmony default export */ __webpack_exports__["a"] = (true && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(198);
module.exports = __webpack_require__(397);


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_deep_force_update__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_deep_force_update___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_deep_force_update__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_query_string__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history_PathUtils__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_App__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__createFetch__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_configureStore__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__history__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DOMUtils__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router__ = __webpack_require__(462);
var _jsxFileName = "/home/alex2006hw/work/memory02.alex2006hw.com/src/client.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */











 // Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html

var context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: function insertCss() {
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    // eslint-disable-next-line no-underscore-dangle
    var removeCss = styles.map(function (x) {
      return x._insertCss();
    });
    return function () {
      removeCss.forEach(function (f) {
        return f();
      });
    };
  },
  // Universal HTTP client
  fetch: Object(__WEBPACK_IMPORTED_MODULE_7__createFetch__["a" /* default */])(fetch, {
    baseUrl: window.App.apiUrl
  }),
  // Initialize a new Redux store
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: Object(__WEBPACK_IMPORTED_MODULE_8__store_configureStore__["a" /* default */])(window.App.state, {
    history: __WEBPACK_IMPORTED_MODULE_9__history__["a" /* default */]
  }),
  storeSubscription: null
};
var container = document.getElementById('app');
var currentLocation = __WEBPACK_IMPORTED_MODULE_9__history__["a" /* default */].location;
var appInstance; // Switch off the native scroll restoration behavior and handle it manually
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration

var scrollPositionsHistory = {};

if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
} // Re-render the app when window.location changes


function onLocationChange(_x, _x2) {
  return _onLocationChange.apply(this, arguments);
} // Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme


function _onLocationChange() {
  _onLocationChange = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(location, action) {
    var isInitialRender, route, renderReactApp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Remember the latest scroll position for the previous location
            scrollPositionsHistory[currentLocation.key] = {
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset
            }; // Delete stored scroll position for next page if any

            if (action === 'PUSH') {
              delete scrollPositionsHistory[location.key];
            }

            currentLocation = location;
            isInitialRender = !action;
            _context.prev = 4;
            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_11__router__["a" /* default */].resolve(_extends({}, context, {
              pathname: location.pathname,
              query: __WEBPACK_IMPORTED_MODULE_4_query_string___default.a.parse(location.search)
            }));

          case 7:
            route = _context.sent;

            if (!(currentLocation.key !== location.key)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return");

          case 10:
            if (!route.redirect) {
              _context.next = 13;
              break;
            }

            __WEBPACK_IMPORTED_MODULE_9__history__["a" /* default */].replace(route.redirect);
            return _context.abrupt("return");

          case 13:
            renderReactApp = isInitialRender ? __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.hydrate : __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render;
            appInstance = renderReactApp(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_App__["a" /* default */], {
              context: context,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              },
              __self: this
            }, route.component), container, function () {
              if (isInitialRender) {
                var elem = document.getElementById('css');
                if (elem) elem.parentNode.removeChild(elem);
                return;
              }

              document.title = route.title;
              Object(__WEBPACK_IMPORTED_MODULE_10__DOMUtils__["a" /* updateMeta */])('description', route.description); // Update necessary tags in <head> at runtime here, ie:
              // updateMeta('keywords', route.keywords);
              // updateCustomMeta('og:url', route.canonicalUrl);
              // updateCustomMeta('og:image', route.imageUrl);
              // updateLink('canonical', route.canonicalUrl);
              // etc.

              var scrollX = 0;
              var scrollY = 0;
              var pos = scrollPositionsHistory[location.key];

              if (pos) {
                scrollX = pos.scrollX;
                scrollY = pos.scrollY;
              } else {
                var targetHash = location.hash.substr(1);

                if (targetHash) {
                  var target = document.getElementById(targetHash);

                  if (target) {
                    scrollY = window.pageYOffset + target.getBoundingClientRect().top;
                  }
                }
              } // Restore the scroll position if it was saved into the state
              // or scroll to the given #hash anchor
              // or scroll to top of the page


              window.scrollTo(scrollX, scrollY); // Google Analytics tracking. Don't send 'pageview' event after
              // the initial rendering, as it was already sent

              if (window.ga) {
                window.ga('send', 'pageview', Object(__WEBPACK_IMPORTED_MODULE_5_history_PathUtils__["createPath"])(location));
              }
            });
            _context.next = 23;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](4);

            if (false) {
              _context.next = 21;
              break;
            }

            throw _context.t0;

          case 21:
            console.error(_context.t0); // Do a full page reload if error occurs during client-side navigation

            if (!isInitialRender && currentLocation.key === location.key) {
              window.location.reload();
            }

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 17]]);
  }));
  return _onLocationChange.apply(this, arguments);
}

__WEBPACK_IMPORTED_MODULE_9__history__["a" /* default */].listen(onLocationChange);
onLocationChange(currentLocation); // Enable Hot Module Replacement (HMR)

if (false) {
  module.hot.accept('./router', function () {
    if (appInstance && appInstance.updater.isMounted(appInstance)) {
      // Force-update the whole tree, including components that refuse to update
      deepForceUpdate(appInstance);
    }

    onLocationChange(currentLocation);
  });
}

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(420);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var ContextType = _extends({
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // Universal HTTP client
  fetch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
}, __WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* Provider */].childContextTypes);
/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */


var App =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: "render",
    value: function render() {
      // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

Object.defineProperty(App, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    context: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(ContextType).isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  }
});
Object.defineProperty(App, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ContextType
});
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch(fetch, _ref) {
  var baseUrl = _ref.baseUrl,
      cookie = _ref.cookie;
  // NOTE: Tweak the default options to suite your application needs
  var defaults = {
    method: 'POST',
    // handy with GraphQL backends
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: _extends({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, cookie ? {
      Cookie: cookie
    } : null)
  };
  return function (url, options) {
    return url.startsWith('/graphql') || url.startsWith('/api') ? fetch("".concat(baseUrl).concat(url), _extends({}, defaults, options, {
      headers: _extends({}, defaults.headers, options && options.headers)
    })) : fetch(url, options);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createFetch);

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(453);





function configureStore(initialState, helpersConfig) {
  var helpers = Object(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];
  var enhancer;

  if (true) {
    middleware.push(Object(__WEBPACK_IMPORTED_MODULE_4__logger__["a" /* default */])()); // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension

    var devToolsExtension = function devToolsExtension(f) {
      return f;
    };

    if (true && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* compose */])(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* applyMiddleware */].apply(void 0, middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware.apply(void 0, middleware);
  } // See https://github.com/rackt/redux/releases/tag/v3.1.0


  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* createStore */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer); // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)

  if (false) {
    module.hot.accept('../reducers', function () {
      return (// eslint-disable-next-line global-require
        store.replaceReducer(require('../reducers').default)
      );
    });
  }

  return store;
}

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(450);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */]
}));

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(451);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function runtime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, _defineProperty({}, action.payload.name, action.payload.value));

    default:
      return state;
  }
}

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_RUNTIME_VARIABLE; });
/* eslint-disable import/prefer-default-export */
var SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function createGraphqlRequest(fetch) {
  return (
    /*#__PURE__*/
    function () {
      var _graphqlRequest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(query, variables) {
        var fetchConfig, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetchConfig = {
                  method: 'post',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: variables
                  }),
                  credentials: 'include'
                };
                _context.next = 3;
                return fetch('/graphql', fetchConfig);

              case 3:
                resp = _context.sent;

                if (!(resp.status !== 200)) {
                  _context.next = 6;
                  break;
                }

                throw new Error(resp.statusText);

              case 6:
                return _context.abrupt("return", resp.json());

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function graphqlRequest(_x, _x2) {
        return _graphqlRequest.apply(this, arguments);
      };
    }()
  );
}

function createHelpers(_ref) {
  var fetch = _ref.fetch,
      history = _ref.history;
  return {
    fetch: fetch,
    history: history,
    graphqlRequest: createGraphqlRequest(fetch)
  };
}

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_logger__);

function createLogger() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux_logger__["createLogger"])({
    collapsed: true
  });
}

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateTag */
/* harmony export (immutable) */ __webpack_exports__["a"] = updateMeta;
/* unused harmony export updateCustomMeta */
/* unused harmony export updateLink */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  var node = document.head.querySelector("".concat(tagName, "[").concat(keyName, "=\"").concat(keyValue, "\"]"));
  if (node && node.getAttribute(attrName) === attrValue) return; // Remove and create a new tag in order to make it work with bookmarks in Safari

  if (node) {
    node.parentNode.removeChild(node);
  }

  if (typeof attrValue === 'string') {
    var nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}
function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}
function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}
function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(465);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */], {
  resolveRoute: function resolveRoute(context, params) {
    if (typeof context.route.load === 'function') {
      return context.route.load().then(function (action) {
        return action.default(context, params);
      });
    }

    if (typeof context.route.action === 'function') {
      return context.route.action(context, params);
    }

    return undefined;
  }
}));

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */
// The top-level (parent) route
var routes = {
  path: '',
  // Keep in mind, routes are evaluated in order
  children: [{
    path: '',
    load: function load() {
      return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 522));
    }
  }, {
    path: '/contact',
    load: function load() {
      return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 523));
    }
  }, {
    path: '/login',
    load: function load() {
      return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 524));
    }
  }, {
    path: '/register',
    load: function load() {
      return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 525));
    }
  }, {
    path: '/about',
    load: function load() {
      return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 526));
    }
  }, {
    path: '/privacy',
    load: function load() {
      return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 527));
    }
  }, {
    path: '/admin',
    load: function load() {
      return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 528));
    }
  }, // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
  {
    path: '(.*)',
    load: function load() {
      return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 529));
    }
  }],
  action: function () {
    var _action = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref) {
      var next, route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              next = _ref.next;
              _context.next = 3;
              return next();

            case 3:
              route = _context.sent;
              // Provide default values for title, description etc.
              route.title = "".concat(route.title || 'Untitled Page', " - www.reactstarterkit.com");
              route.description = route.description || '';
              return _context.abrupt("return", route);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function action(_x) {
      return _action.apply(this, arguments);
    };
  }()
}; // The error page is available by permanent url for development mode

if (true) {
  routes.children.unshift({
    path: '/error',
    action: __webpack_require__(466).default
  });
}

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ErrorPage__ = __webpack_require__(467);
var _jsxFileName = "/home/alex2006hw/work/memory02.alex2006hw.com/src/routes/error/index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



function action() {
  return {
    title: 'Demo Error',
    component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ErrorPage__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorPageWithoutStyle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__);
var _jsxFileName = "/home/alex2006hw/work/memory02.alex2006hw.com/src/routes/error/ErrorPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      if (true && this.props.error) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, this.props.error.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("pre", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, this.props.error.stack));
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Error"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Sorry, a critical error occurred on this page."));
    }
  }]);

  return ErrorPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(ErrorPage, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
      message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
      stack: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
    })
  }
});
Object.defineProperty(ErrorPage, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    error: null
  }
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default.a)(ErrorPage));

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(511);
    var insertCss = __webpack_require__(194);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(193)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nhtml {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n", "", {"version":3,"sources":["/home/alex2006hw/work/memory02.alex2006hw.com/src/routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,qBAAqB;EACrB,cAAc;EACd,uBAAuB;MACnB,oBAAoB;EACxB,sBAAsB;MAClB,wBAAwB;EAC5B,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,UAAU;CACX;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,sBAAsB;EACtB,iBAAiB;CAClB","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nhtml {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 100%;\n  font-family: sans-serif;\n  text-align: center;\n  color: #888;\n}\n\nbody {\n  margin: 0;\n}\n\nh1 {\n  font-weight: 400;\n  color: #555;\n}\n\npre {\n  white-space: pre-wrap;\n  text-align: left;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

},[197]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlcyI6WyIvaG9tZS9hbGV4MjAwNmh3L3dvcmsvbWVtb3J5MDIuYWxleDIwMDZody5jb20vc3JjL2hpc3RvcnkuanMiLCIvaG9tZS9hbGV4MjAwNmh3L3dvcmsvbWVtb3J5MDIuYWxleDIwMDZody5jb20vc3JjL2NsaWVudC5qcyIsIi9ob21lL2FsZXgyMDA2aHcvd29yay9tZW1vcnkwMi5hbGV4MjAwNmh3LmNvbS9zcmMvY29tcG9uZW50cy9BcHAuanMiLCIvaG9tZS9hbGV4MjAwNmh3L3dvcmsvbWVtb3J5MDIuYWxleDIwMDZody5jb20vc3JjL2NyZWF0ZUZldGNoLmpzIiwiL2hvbWUvYWxleDIwMDZody93b3JrL21lbW9yeTAyLmFsZXgyMDA2aHcuY29tL3NyYy9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIi9ob21lL2FsZXgyMDA2aHcvd29yay9tZW1vcnkwMi5hbGV4MjAwNmh3LmNvbS9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCIvaG9tZS9hbGV4MjAwNmh3L3dvcmsvbWVtb3J5MDIuYWxleDIwMDZody5jb20vc3JjL3JlZHVjZXJzL3VzZXIuanMiLCIvaG9tZS9hbGV4MjAwNmh3L3dvcmsvbWVtb3J5MDIuYWxleDIwMDZody5jb20vc3JjL3JlZHVjZXJzL3J1bnRpbWUuanMiLCIvaG9tZS9hbGV4MjAwNmh3L3dvcmsvbWVtb3J5MDIuYWxleDIwMDZody5jb20vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsIi9ob21lL2FsZXgyMDA2aHcvd29yay9tZW1vcnkwMi5hbGV4MjAwNmh3LmNvbS9zcmMvc3RvcmUvY3JlYXRlSGVscGVycy5qcyIsIi9ob21lL2FsZXgyMDA2aHcvd29yay9tZW1vcnkwMi5hbGV4MjAwNmh3LmNvbS9zcmMvc3RvcmUvbG9nZ2VyL2xvZ2dlci5jbGllbnQuanMiLCIvaG9tZS9hbGV4MjAwNmh3L3dvcmsvbWVtb3J5MDIuYWxleDIwMDZody5jb20vc3JjL0RPTVV0aWxzLmpzIiwiL2hvbWUvYWxleDIwMDZody93b3JrL21lbW9yeTAyLmFsZXgyMDA2aHcuY29tL3NyYy9yb3V0ZXIuanMiLCIvaG9tZS9hbGV4MjAwNmh3L3dvcmsvbWVtb3J5MDIuYWxleDIwMDZody5jb20vc3JjL3JvdXRlcy9pbmRleC5qcyIsIi9ob21lL2FsZXgyMDA2aHcvd29yay9tZW1vcnkwMi5hbGV4MjAwNmh3LmNvbS9zcmMvcm91dGVzL2Vycm9yL2luZGV4LmpzIiwiL2hvbWUvYWxleDIwMDZody93b3JrL21lbW9yeTAyLmFsZXgyMDA2aHcuY29tL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmpzIiwiL2hvbWUvYWxleDIwMDZody93b3JrL21lbW9yeTAyLmFsZXgyMDA2aHcuY29tL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3M/OWVmZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5JztcblxuLy8gTmF2aWdhdGlvbiBtYW5hZ2VyLCBlLmcuIGhpc3RvcnkucHVzaCgnL2hvbWUnKVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21qYWNrc29uL2hpc3RvcnlcbmV4cG9ydCBkZWZhdWx0IHByb2Nlc3MuZW52LkJST1dTRVIgJiYgY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaGlzdG9yeS5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGRlZXBGb3JjZVVwZGF0ZSBmcm9tICdyZWFjdC1kZWVwLWZvcmNlLXVwZGF0ZSc7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCB7IGNyZWF0ZVBhdGggfSBmcm9tICdoaXN0b3J5L1BhdGhVdGlscyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IGNyZWF0ZUZldGNoIGZyb20gJy4vY3JlYXRlRmV0Y2gnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi9oaXN0b3J5JztcbmltcG9ydCB7IHVwZGF0ZU1ldGEgfSBmcm9tICcuL0RPTVV0aWxzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuXG4vLyBHbG9iYWwgKGNvbnRleHQpIHZhcmlhYmxlcyB0aGF0IGNhbiBiZSBlYXNpbHkgYWNjZXNzZWQgZnJvbSBhbnkgUmVhY3QgY29tcG9uZW50XG4vLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2NvbnRleHQuaHRtbFxuY29uc3QgY29udGV4dCA9IHtcbiAgLy8gRW5hYmxlcyBjcml0aWNhbCBwYXRoIENTUyByZW5kZXJpbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyXG4gIGluc2VydENzczogKC4uLnN0eWxlcykgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgIGNvbnN0IHJlbW92ZUNzcyA9IHN0eWxlcy5tYXAoeCA9PiB4Ll9pbnNlcnRDc3MoKSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJlbW92ZUNzcy5mb3JFYWNoKGYgPT4gZigpKTtcbiAgICB9O1xuICB9LFxuICAvLyBVbml2ZXJzYWwgSFRUUCBjbGllbnRcbiAgZmV0Y2g6IGNyZWF0ZUZldGNoKGZldGNoLCB7XG4gICAgYmFzZVVybDogd2luZG93LkFwcC5hcGlVcmwsXG4gIH0pLFxuICAvLyBJbml0aWFsaXplIGEgbmV3IFJlZHV4IHN0b3JlXG4gIC8vIGh0dHA6Ly9yZWR1eC5qcy5vcmcvZG9jcy9iYXNpY3MvVXNhZ2VXaXRoUmVhY3QuaHRtbFxuICBzdG9yZTogY29uZmlndXJlU3RvcmUod2luZG93LkFwcC5zdGF0ZSwgeyBoaXN0b3J5IH0pLFxuICBzdG9yZVN1YnNjcmlwdGlvbjogbnVsbCxcbn07XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbmxldCBjdXJyZW50TG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xubGV0IGFwcEluc3RhbmNlO1xuXG4vLyBTd2l0Y2ggb2ZmIHRoZSBuYXRpdmUgc2Nyb2xsIHJlc3RvcmF0aW9uIGJlaGF2aW9yIGFuZCBoYW5kbGUgaXQgbWFudWFsbHlcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi91cGRhdGVzLzIwMTUvMDkvaGlzdG9yeS1hcGktc2Nyb2xsLXJlc3RvcmF0aW9uXG5jb25zdCBzY3JvbGxQb3NpdGlvbnNIaXN0b3J5ID0ge307XG5pZiAod2luZG93Lmhpc3RvcnkgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSkge1xuICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xufVxuXG4vLyBSZS1yZW5kZXIgdGhlIGFwcCB3aGVuIHdpbmRvdy5sb2NhdGlvbiBjaGFuZ2VzXG5hc3luYyBmdW5jdGlvbiBvbkxvY2F0aW9uQ2hhbmdlKGxvY2F0aW9uLCBhY3Rpb24pIHtcbiAgLy8gUmVtZW1iZXIgdGhlIGxhdGVzdCBzY3JvbGwgcG9zaXRpb24gZm9yIHRoZSBwcmV2aW91cyBsb2NhdGlvblxuICBzY3JvbGxQb3NpdGlvbnNIaXN0b3J5W2N1cnJlbnRMb2NhdGlvbi5rZXldID0ge1xuICAgIHNjcm9sbFg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICBzY3JvbGxZOiB3aW5kb3cucGFnZVlPZmZzZXQsXG4gIH07XG4gIC8vIERlbGV0ZSBzdG9yZWQgc2Nyb2xsIHBvc2l0aW9uIGZvciBuZXh0IHBhZ2UgaWYgYW55XG4gIGlmIChhY3Rpb24gPT09ICdQVVNIJykge1xuICAgIGRlbGV0ZSBzY3JvbGxQb3NpdGlvbnNIaXN0b3J5W2xvY2F0aW9uLmtleV07XG4gIH1cbiAgY3VycmVudExvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgY29uc3QgaXNJbml0aWFsUmVuZGVyID0gIWFjdGlvbjtcbiAgdHJ5IHtcbiAgICAvLyBUcmF2ZXJzZXMgdGhlIGxpc3Qgb2Ygcm91dGVzIGluIHRoZSBvcmRlciB0aGV5IGFyZSBkZWZpbmVkIHVudGlsXG4gICAgLy8gaXQgZmluZHMgdGhlIGZpcnN0IHJvdXRlIHRoYXQgbWF0Y2hlcyBwcm92aWRlZCBVUkwgcGF0aCBzdHJpbmdcbiAgICAvLyBhbmQgd2hvc2UgYWN0aW9uIG1ldGhvZCByZXR1cm5zIGFueXRoaW5nIG90aGVyIHRoYW4gYHVuZGVmaW5lZGAuXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCByb3V0ZXIucmVzb2x2ZSh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHF1ZXJ5U3RyaW5nLnBhcnNlKGxvY2F0aW9uLnNlYXJjaCksXG4gICAgfSk7XG5cbiAgICAvLyBQcmV2ZW50IG11bHRpcGxlIHBhZ2UgcmVuZGVycyBkdXJpbmcgdGhlIHJvdXRpbmcgcHJvY2Vzc1xuICAgIGlmIChjdXJyZW50TG9jYXRpb24ua2V5ICE9PSBsb2NhdGlvbi5rZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocm91dGUucmVkaXJlY3QpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZShyb3V0ZS5yZWRpcmVjdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUmVhY3RBcHAgPSBpc0luaXRpYWxSZW5kZXIgPyBSZWFjdERPTS5oeWRyYXRlIDogUmVhY3RET00ucmVuZGVyO1xuICAgIGFwcEluc3RhbmNlID0gcmVuZGVyUmVhY3RBcHAoXG4gICAgICA8QXBwIGNvbnRleHQ9e2NvbnRleHR9Pntyb3V0ZS5jb21wb25lbnR9PC9BcHA+LFxuICAgICAgY29udGFpbmVyLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoaXNJbml0aWFsUmVuZGVyKSB7XG4gICAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjc3MnKTtcbiAgICAgICAgICBpZiAoZWxlbSkgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gcm91dGUudGl0bGU7XG5cbiAgICAgICAgdXBkYXRlTWV0YSgnZGVzY3JpcHRpb24nLCByb3V0ZS5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIFVwZGF0ZSBuZWNlc3NhcnkgdGFncyBpbiA8aGVhZD4gYXQgcnVudGltZSBoZXJlLCBpZTpcbiAgICAgICAgLy8gdXBkYXRlTWV0YSgna2V5d29yZHMnLCByb3V0ZS5rZXl3b3Jkcyk7XG4gICAgICAgIC8vIHVwZGF0ZUN1c3RvbU1ldGEoJ29nOnVybCcsIHJvdXRlLmNhbm9uaWNhbFVybCk7XG4gICAgICAgIC8vIHVwZGF0ZUN1c3RvbU1ldGEoJ29nOmltYWdlJywgcm91dGUuaW1hZ2VVcmwpO1xuICAgICAgICAvLyB1cGRhdGVMaW5rKCdjYW5vbmljYWwnLCByb3V0ZS5jYW5vbmljYWxVcmwpO1xuICAgICAgICAvLyBldGMuXG5cbiAgICAgICAgbGV0IHNjcm9sbFggPSAwO1xuICAgICAgICBsZXQgc2Nyb2xsWSA9IDA7XG4gICAgICAgIGNvbnN0IHBvcyA9IHNjcm9sbFBvc2l0aW9uc0hpc3RvcnlbbG9jYXRpb24ua2V5XTtcbiAgICAgICAgaWYgKHBvcykge1xuICAgICAgICAgIHNjcm9sbFggPSBwb3Muc2Nyb2xsWDtcbiAgICAgICAgICBzY3JvbGxZID0gcG9zLnNjcm9sbFk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0SGFzaCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpO1xuICAgICAgICAgIGlmICh0YXJnZXRIYXNoKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRIYXNoKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlmIGl0IHdhcyBzYXZlZCBpbnRvIHRoZSBzdGF0ZVxuICAgICAgICAvLyBvciBzY3JvbGwgdG8gdGhlIGdpdmVuICNoYXNoIGFuY2hvclxuICAgICAgICAvLyBvciBzY3JvbGwgdG8gdG9wIG9mIHRoZSBwYWdlXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxYLCBzY3JvbGxZKTtcblxuICAgICAgICAvLyBHb29nbGUgQW5hbHl0aWNzIHRyYWNraW5nLiBEb24ndCBzZW5kICdwYWdldmlldycgZXZlbnQgYWZ0ZXJcbiAgICAgICAgLy8gdGhlIGluaXRpYWwgcmVuZGVyaW5nLCBhcyBpdCB3YXMgYWxyZWFkeSBzZW50XG4gICAgICAgIGlmICh3aW5kb3cuZ2EpIHtcbiAgICAgICAgICB3aW5kb3cuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBjcmVhdGVQYXRoKGxvY2F0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cbiAgICAvLyBEbyBhIGZ1bGwgcGFnZSByZWxvYWQgaWYgZXJyb3Igb2NjdXJzIGR1cmluZyBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uXG4gICAgaWYgKCFpc0luaXRpYWxSZW5kZXIgJiYgY3VycmVudExvY2F0aW9uLmtleSA9PT0gbG9jYXRpb24ua2V5KSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIEhhbmRsZSBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uIGJ5IHVzaW5nIEhUTUw1IEhpc3RvcnkgQVBJXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiB2aXNpdCBodHRwczovL2dpdGh1Yi5jb20vbWphY2tzb24vaGlzdG9yeSNyZWFkbWVcbmhpc3RvcnkubGlzdGVuKG9uTG9jYXRpb25DaGFuZ2UpO1xub25Mb2NhdGlvbkNoYW5nZShjdXJyZW50TG9jYXRpb24pO1xuXG4vLyBFbmFibGUgSG90IE1vZHVsZSBSZXBsYWNlbWVudCAoSE1SKVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcm91dGVyJywgKCkgPT4ge1xuICAgIGlmIChhcHBJbnN0YW5jZSAmJiBhcHBJbnN0YW5jZS51cGRhdGVyLmlzTW91bnRlZChhcHBJbnN0YW5jZSkpIHtcbiAgICAgIC8vIEZvcmNlLXVwZGF0ZSB0aGUgd2hvbGUgdHJlZSwgaW5jbHVkaW5nIGNvbXBvbmVudHMgdGhhdCByZWZ1c2UgdG8gdXBkYXRlXG4gICAgICBkZWVwRm9yY2VVcGRhdGUoYXBwSW5zdGFuY2UpO1xuICAgIH1cblxuICAgIG9uTG9jYXRpb25DaGFuZ2UoY3VycmVudExvY2F0aW9uKTtcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NsaWVudC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBSZWR1eFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBDb250ZXh0VHlwZSA9IHtcbiAgLy8gRW5hYmxlcyBjcml0aWNhbCBwYXRoIENTUyByZW5kZXJpbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyXG4gIGluc2VydENzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gVW5pdmVyc2FsIEhUVFAgY2xpZW50XG4gIGZldGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvLyBJbnRlZ3JhdGUgUmVkdXhcbiAgLy8gaHR0cDovL3JlZHV4LmpzLm9yZy9kb2NzL2Jhc2ljcy9Vc2FnZVdpdGhSZWFjdC5odG1sXG4gIC4uLlJlZHV4UHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMsXG59O1xuXG4vKipcbiAqIFRoZSB0b3AtbGV2ZWwgUmVhY3QgY29tcG9uZW50IHNldHRpbmcgY29udGV4dCAoZ2xvYmFsKSB2YXJpYWJsZXNcbiAqIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIGZyb20gYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzLlxuICpcbiAqIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvY29udGV4dC5odG1sXG4gKlxuICogVXNhZ2UgZXhhbXBsZTpcbiAqXG4gKiAgIGNvbnN0IGNvbnRleHQgPSB7XG4gKiAgICAgaGlzdG9yeTogY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSxcbiAqICAgICBzdG9yZTogY3JlYXRlU3RvcmUoKSxcbiAqICAgfTtcbiAqXG4gKiAgIFJlYWN0RE9NLnJlbmRlcihcbiAqICAgICA8QXBwIGNvbnRleHQ9e2NvbnRleHR9PlxuICogICAgICAgPExheW91dD5cbiAqICAgICAgICAgPExhbmRpbmdQYWdlIC8+XG4gKiAgICAgICA8L0xheW91dD5cbiAqICAgICA8L0FwcD4sXG4gKiAgICAgY29udGFpbmVyLFxuICogICApO1xuICovXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb250ZXh0OiBQcm9wVHlwZXMuc2hhcGUoQ29udGV4dFR5cGUpLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0gQ29udGV4dFR5cGU7XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNvbnRleHQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gTk9URTogSWYgeW91IG5lZWQgdG8gYWRkIG9yIG1vZGlmeSBoZWFkZXIsIGZvb3RlciBldGMuIG9mIHRoZSBhcHAsXG4gICAgLy8gcGxlYXNlIGRvIHRoYXQgaW5zaWRlIHRoZSBMYXlvdXQgY29tcG9uZW50LlxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BcHAuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qIEBmbG93ICovXG5cbnR5cGUgRmV0Y2ggPSAodXJsOiBzdHJpbmcsIG9wdGlvbnM6ID9hbnkpID0+IFByb21pc2U8YW55PjtcblxudHlwZSBPcHRpb25zID0ge1xuICBiYXNlVXJsOiBzdHJpbmcsXG4gIGNvb2tpZT86IHN0cmluZyxcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gYXJvdW5kIHRoZSBIVE1MNSBGZXRjaCBBUEkgdGhhdCBwcm92aWRlc1xuICogZGVmYXVsdCBhcmd1bWVudHMgdG8gZmV0Y2goLi4uKSBhbmQgaXMgaW50ZW5kZWQgdG8gcmVkdWNlIHRoZSBhbW91bnRcbiAqIG9mIGJvaWxlcnBsYXRlIGNvZGUgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICovXG5mdW5jdGlvbiBjcmVhdGVGZXRjaChmZXRjaDogRmV0Y2gsIHsgYmFzZVVybCwgY29va2llIH06IE9wdGlvbnMpIHtcbiAgLy8gTk9URTogVHdlYWsgdGhlIGRlZmF1bHQgb3B0aW9ucyB0byBzdWl0ZSB5b3VyIGFwcGxpY2F0aW9uIG5lZWRzXG4gIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLCAvLyBoYW5keSB3aXRoIEdyYXBoUUwgYmFja2VuZHNcbiAgICBtb2RlOiBiYXNlVXJsID8gJ2NvcnMnIDogJ3NhbWUtb3JpZ2luJyxcbiAgICBjcmVkZW50aWFsczogYmFzZVVybCA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLi4uKGNvb2tpZSA/IHsgQ29va2llOiBjb29raWUgfSA6IG51bGwpLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuICh1cmw6IHN0cmluZywgb3B0aW9uczogYW55KSA9PlxuICAgIHVybC5zdGFydHNXaXRoKCcvZ3JhcGhxbCcpIHx8IHVybC5zdGFydHNXaXRoKCcvYXBpJylcbiAgICAgID8gZmV0Y2goYCR7YmFzZVVybH0ke3VybH1gLCB7XG4gICAgICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0cy5oZWFkZXJzLFxuICAgICAgICAgICAgLi4uKG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgOiBmZXRjaCh1cmwsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGZXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY3JlYXRlRmV0Y2guanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5pbXBvcnQgY3JlYXRlSGVscGVycyBmcm9tICcuL2NyZWF0ZUhlbHBlcnMnO1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSwgaGVscGVyc0NvbmZpZykge1xuICBjb25zdCBoZWxwZXJzID0gY3JlYXRlSGVscGVycyhoZWxwZXJzQ29uZmlnKTtcbiAgY29uc3QgbWlkZGxld2FyZSA9IFt0aHVuay53aXRoRXh0cmFBcmd1bWVudChoZWxwZXJzKV07XG5cbiAgbGV0IGVuaGFuY2VyO1xuXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgbWlkZGxld2FyZS5wdXNoKGNyZWF0ZUxvZ2dlcigpKTtcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96YWxtb3hpc3VzL3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbiNyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cbiAgICBsZXQgZGV2VG9vbHNFeHRlbnNpb24gPSBmID0+IGY7XG4gICAgaWYgKHByb2Nlc3MuZW52LkJST1dTRVIgJiYgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKSB7XG4gICAgICBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpO1xuICAgIH1cblxuICAgIGVuaGFuY2VyID0gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksIGRldlRvb2xzRXh0ZW5zaW9uKTtcbiAgfSBlbHNlIHtcbiAgICBlbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcbiAgfVxuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVkdXgvcmVsZWFzZXMvdGFnL3YzLjEuMFxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcblxuICAvLyBIb3QgcmVsb2FkIHJlZHVjZXJzIChyZXF1aXJlcyBXZWJwYWNrIG9yIEJyb3dzZXJpZnkgSE1SIHRvIGJlIGVuYWJsZWQpXG4gIGlmIChfX0RFVl9fICYmIG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vcmVkdWNlcnMnLCAoKSA9PlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdsb2JhbC1yZXF1aXJlXG4gICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihyZXF1aXJlKCcuLi9yZWR1Y2VycycpLmRlZmF1bHQpLFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gc3RvcmU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBydW50aW1lIGZyb20gJy4vcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHVzZXIsXG4gIHJ1bnRpbWUsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVkdWNlcnMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VyKHN0YXRlID0ge30sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZWR1Y2Vycy91c2VyLmpzIiwiaW1wb3J0IHsgU0VUX1JVTlRJTUVfVkFSSUFCTEUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW50aW1lKHN0YXRlID0ge30sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfUlVOVElNRV9WQVJJQUJMRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbYWN0aW9uLnBheWxvYWQubmFtZV06IGFjdGlvbi5wYXlsb2FkLnZhbHVlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JlZHVjZXJzL3J1bnRpbWUuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmV4cG9ydCBjb25zdCBTRVRfUlVOVElNRV9WQVJJQUJMRSA9ICdTRVRfUlVOVElNRV9WQVJJQUJMRSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsImZ1bmN0aW9uIGNyZWF0ZUdyYXBocWxSZXF1ZXN0KGZldGNoKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBncmFwaHFsUmVxdWVzdChxdWVyeSwgdmFyaWFibGVzKSB7XG4gICAgY29uc3QgZmV0Y2hDb25maWcgPSB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWVyeSwgdmFyaWFibGVzIH0pLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCBmZXRjaENvbmZpZyk7XG4gICAgaWYgKHJlc3Auc3RhdHVzICE9PSAyMDApIHRocm93IG5ldyBFcnJvcihyZXNwLnN0YXR1c1RleHQpO1xuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVscGVycyh7IGZldGNoLCBoaXN0b3J5IH0pIHtcbiAgcmV0dXJuIHtcbiAgICBmZXRjaCxcbiAgICBoaXN0b3J5LFxuICAgIGdyYXBocWxSZXF1ZXN0OiBjcmVhdGVHcmFwaHFsUmVxdWVzdChmZXRjaCksXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL2NyZWF0ZUhlbHBlcnMuanMiLCJpbXBvcnQgeyBjcmVhdGVMb2dnZXIgYXMgcmVkdXhMb2dnZXIgfSBmcm9tICdyZWR1eC1sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMb2dnZXIoKSB7XG4gIHJldHVybiByZWR1eExvZ2dlcih7XG4gICAgY29sbGFwc2VkOiB0cnVlLFxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RvcmUvbG9nZ2VyL2xvZ2dlci5jbGllbnQuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYWcodGFnTmFtZSwga2V5TmFtZSwga2V5VmFsdWUsIGF0dHJOYW1lLCBhdHRyVmFsdWUpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcbiAgICBgJHt0YWdOYW1lfVske2tleU5hbWV9PVwiJHtrZXlWYWx1ZX1cIl1gLFxuICApO1xuICBpZiAobm9kZSAmJiBub2RlLmdldEF0dHJpYnV0ZShhdHRyTmFtZSkgPT09IGF0dHJWYWx1ZSkgcmV0dXJuO1xuXG4gIC8vIFJlbW92ZSBhbmQgY3JlYXRlIGEgbmV3IHRhZyBpbiBvcmRlciB0byBtYWtlIGl0IHdvcmsgd2l0aCBib29rbWFya3MgaW4gU2FmYXJpXG4gIGlmIChub2RlKSB7XG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICB9XG4gIGlmICh0eXBlb2YgYXR0clZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG5leHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICBuZXh0Tm9kZS5zZXRBdHRyaWJ1dGUoa2V5TmFtZSwga2V5VmFsdWUpO1xuICAgIG5leHROb2RlLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbHVlKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5leHROb2RlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTWV0YShuYW1lLCBjb250ZW50KSB7XG4gIHVwZGF0ZVRhZygnbWV0YScsICduYW1lJywgbmFtZSwgJ2NvbnRlbnQnLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUN1c3RvbU1ldGEocHJvcGVydHksIGNvbnRlbnQpIHtcbiAgdXBkYXRlVGFnKCdtZXRhJywgJ3Byb3BlcnR5JywgcHJvcGVydHksICdjb250ZW50JywgY29udGVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMaW5rKHJlbCwgaHJlZikge1xuICB1cGRhdGVUYWcoJ2xpbmsnLCAncmVsJywgcmVsLCAnaHJlZicsIGhyZWYpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9ET01VdGlscy5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFVuaXZlcnNhbFJvdXRlciBmcm9tICd1bml2ZXJzYWwtcm91dGVyJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVW5pdmVyc2FsUm91dGVyKHJvdXRlcywge1xuICByZXNvbHZlUm91dGUoY29udGV4dCwgcGFyYW1zKSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0LnJvdXRlLmxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjb250ZXh0LnJvdXRlXG4gICAgICAgIC5sb2FkKClcbiAgICAgICAgLnRoZW4oYWN0aW9uID0+IGFjdGlvbi5kZWZhdWx0KGNvbnRleHQsIHBhcmFtcykpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnRleHQucm91dGUuYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY29udGV4dC5yb3V0ZS5hY3Rpb24oY29udGV4dCwgcGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXIuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5cbi8vIFRoZSB0b3AtbGV2ZWwgKHBhcmVudCkgcm91dGVcbmNvbnN0IHJvdXRlcyA9IHtcbiAgcGF0aDogJycsXG5cbiAgLy8gS2VlcCBpbiBtaW5kLCByb3V0ZXMgYXJlIGV2YWx1YXRlZCBpbiBvcmRlclxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdob21lJyAqLyAnLi9ob21lJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2NvbnRhY3QnLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdjb250YWN0JyAqLyAnLi9jb250YWN0JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnbG9naW4nICovICcuL2xvZ2luJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL3JlZ2lzdGVyJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAncmVnaXN0ZXInICovICcuL3JlZ2lzdGVyJyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYWJvdXQnICovICcuL2Fib3V0JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL3ByaXZhY3knLFxuICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdwcml2YWN5JyAqLyAnLi9wcml2YWN5JyksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2FkbWluJyxcbiAgICAgIGxvYWQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnYWRtaW4nICovICcuL2FkbWluJyksXG4gICAgfSxcblxuICAgIC8vIFdpbGRjYXJkIHJvdXRlcywgZS5nLiB7IHBhdGg6ICcoLiopJywgLi4uIH0gKG11c3QgZ28gbGFzdClcbiAgICB7XG4gICAgICBwYXRoOiAnKC4qKScsXG4gICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ25vdC1mb3VuZCcgKi8gJy4vbm90LWZvdW5kJyksXG4gICAgfSxcbiAgXSxcblxuICBhc3luYyBhY3Rpb24oeyBuZXh0IH0pIHtcbiAgICAvLyBFeGVjdXRlIGVhY2ggY2hpbGQgcm91dGUgdW50aWwgb25lIG9mIHRoZW0gcmV0dXJuIHRoZSByZXN1bHRcbiAgICBjb25zdCByb3V0ZSA9IGF3YWl0IG5leHQoKTtcblxuICAgIC8vIFByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRpdGxlLCBkZXNjcmlwdGlvbiBldGMuXG4gICAgcm91dGUudGl0bGUgPSBgJHtyb3V0ZS50aXRsZSB8fCAnVW50aXRsZWQgUGFnZSd9IC0gd3d3LnJlYWN0c3RhcnRlcmtpdC5jb21gO1xuICAgIHJvdXRlLmRlc2NyaXB0aW9uID0gcm91dGUuZGVzY3JpcHRpb24gfHwgJyc7XG5cbiAgICByZXR1cm4gcm91dGU7XG4gIH0sXG59O1xuXG4vLyBUaGUgZXJyb3IgcGFnZSBpcyBhdmFpbGFibGUgYnkgcGVybWFuZW50IHVybCBmb3IgZGV2ZWxvcG1lbnQgbW9kZVxuaWYgKF9fREVWX18pIHtcbiAgcm91dGVzLmNoaWxkcmVuLnVuc2hpZnQoe1xuICAgIHBhdGg6ICcvZXJyb3InLFxuICAgIGFjdGlvbjogcmVxdWlyZSgnLi9lcnJvcicpLmRlZmF1bHQsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9pbmRleC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnLi9FcnJvclBhZ2UnO1xuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdEZW1vIEVycm9yJyxcbiAgICBjb21wb25lbnQ6IDxFcnJvclBhZ2UgLz4sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2Vycm9yL2luZGV4LmpzIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vRXJyb3JQYWdlLmNzcyc7XG5cbmNsYXNzIEVycm9yUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZXJyb3I6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBzdGFjazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZXJyb3I6IG51bGwsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChfX0RFVl9fICYmIHRoaXMucHJvcHMuZXJyb3IpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmVycm9yLm5hbWV9PC9oMT5cbiAgICAgICAgICA8cHJlPnt0aGlzLnByb3BzLmVycm9yLnN0YWNrfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FcnJvcjwvaDE+XG4gICAgICAgIDxwPlNvcnJ5LCBhIGNyaXRpY2FsIGVycm9yIG9jY3VycmVkIG9uIHRoaXMgcGFnZS48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEVycm9yUGFnZSBhcyBFcnJvclBhZ2VXaXRob3V0U3R5bGUgfTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoRXJyb3JQYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5qcyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRXJyb3JQYWdlLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gICAgXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xLXJ1bGVzLTMhLi9FcnJvclBhZ2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMS1ydWxlcy0zIS4vRXJyb3JQYWdlLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlLmNzc1xuLy8gbW9kdWxlIGlkID0gNTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAzMnB4O1xcbiAgcGFkZGluZzogMCAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzU1NTtcXG59XFxuXFxucHJlIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9hbGV4MjAwNmh3L3dvcmsvbWVtb3J5MDIuYWxleDIwMDZody5jb20vc3JjL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHVCQUF1QjtNQUNuQixvQkFBb0I7RUFDeEIsc0JBQXNCO01BQ2xCLHdCQUF3QjtFQUM1QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0NBQ2xCXCIsXCJmaWxlXCI6XCJFcnJvclBhZ2UuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuaHRtbCB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxuICBwYWRkaW5nOiAwIDJyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjODg4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjNTU1O1xcbn1cXG5cXG5wcmUge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJzb3VyY2VNYXBcIjp0cnVlLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW25hbWVdLVtsb2NhbF0tW2hhc2g6YmFzZTY0OjVdXCIsXCJtaW5pbWl6ZVwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWI/e1wiY29uZmlnXCI6e1wicGF0aFwiOlwiLi90b29scy9wb3N0Y3NzLmNvbmZpZy5qc1wifX0hLi9zcmMvcm91dGVzL2Vycm9yL0Vycm9yUGFnZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDUxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUdBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBakJBO0FBb0JBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWdHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQW5HQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFaQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQUhBO0FBQ0E7QUFsQkE7QUFpQkE7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTRCQTtBQTdCQTtBQUNBO0FBREE7QUFpQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFoRkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBdUZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTdGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWtHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdktBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOzs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBaEJBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQURBOzs7O0FBTUE7O0FBYUE7Ozs7Ozs7Ozs7QUNqRUE7Ozs7Ozs7OztBQWtCQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBUEE7QUFXQTtBQUFBO0FBS0E7QUFIQTtBQUZBO0FBV0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVBBO0FBU0E7Ozs7Ozs7O0FDWkE7QUFBQTtBQUVBOzs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBVUE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVhBOzs7Ozs7Ozs7O0FDWkE7Ozs7Ozs7OztBQVNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFNQTtBQXpDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUNBO0FBekNBO0FBQUE7QUFDQTtBQURBO0FBMkNBO0FBRUE7QUFDQTtBQUNBO0FBL0NBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcURBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekVBOzs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUE3QkE7QUFDQTtBQURBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7O0FBREE7Ozs7QUFTQTtBQUNBO0FBREE7O0FBdUJBO0FBQ0E7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=