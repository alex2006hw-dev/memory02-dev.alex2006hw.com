webpackJsonp([8],{136:function(e,t,n){"use strict";var r=n(365),o=n.n(r);t.a=o()()},137:function(e,t,n){n(138),e.exports=n(337)},337:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function u(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){var n=t.baseUrl,r=t.cookie,o={method:"POST",mode:n?"cors":"same-origin",credentials:n?"include":"same-origin",headers:s({Accept:"application/json","Content-Type":"application/json"},r?{Cookie:r}:null)};return function(t,r){return t.startsWith("/graphql")||t.startsWith("/api")?e("".concat(n).concat(t),s({},o,r,{headers:s({},o.headers,r&&r.headers)})):e(t,r)}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return h({},e,d({},t.payload.name,t.payload.value));default:return e}}function v(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){function i(e,t){try{var n=c[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(a,u)}function a(e){i("next",e)}function u(e){i("throw",e)}var c=e.apply(t,n);a()})}}function b(e){return function(){var t=v(regeneratorRuntime.mark(function t(n,r){var o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({query:n,variables:r}),credentials:"include"},t.next=3,e("/graphql",o);case 3:if(i=t.sent,200===i.status){t.next=6;break}throw new Error(i.statusText);case 6:return t.abrupt("return",i.json());case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}function m(e){var t=e.fetch;return{fetch:t,history:e.history,graphqlRequest:b(t)}}function w(e,t,n,r,o){var i=document.head.querySelector("".concat(e,"[").concat(t,'="').concat(n,'"]'));if((!i||i.getAttribute(r)!==o)&&(i&&i.parentNode.removeChild(i),"string"==typeof o)){var a=document.createElement(e);a.setAttribute(t,n),a.setAttribute(r,o),document.head.appendChild(a)}}function g(e,t){w("meta","name",e,"content",t)}function O(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){function i(e,t){try{var n=c[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(a,u)}function a(e){i("next",e)}function u(e){i("throw",e)}var c=e.apply(t,n);a()})}}function j(e,t,n,r){X||(X="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&o)for(var a in o)void 0===t[a]&&(t[a]=o[a]);else t||(t=o||{});if(1===i)t.children=r;else if(i>1){for(var u=new Array(i),c=0;c<i;c++)u[c]=arguments[c+3];t.children=u}return{$$typeof:X,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function k(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){function i(e,t){try{var n=c[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(a,u)}function a(e){i("next",e)}function u(e){i("throw",e)}var c=e.apply(t,n);a()})}}function P(e,t){return C.apply(this,arguments)}function C(){return C=k(regeneratorRuntime.mark(function e(t,n){var r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return ne[te.key]={scrollX:window.pageXOffset,scrollY:window.pageYOffset},"PUSH"===n&&delete ne[t.key],te=t,r=!n,e.prev=4,e.next=7,Q.resolve(x({},Z,{pathname:t.pathname,query:T.a.parse(t.search)}));case 7:if(o=e.sent,te.key===t.key){e.next=10;break}return e.abrupt("return");case 10:if(!o.redirect){e.next=13;break}return D.a.replace(o.redirect),e.abrupt("return");case 13:i=r?E.a.hydrate:E.a.render,J=i(j(M,{context:Z},void 0,o.component),ee,function(){if(r){var e=document.getElementById("css");return void(e&&e.parentNode.removeChild(e))}document.title=o.title,g("description",o.description);var n=0,i=0,a=ne[t.key];if(a)n=a.scrollX,i=a.scrollY;else{var u=t.hash.substr(1);if(u){var c=document.getElementById(u);c&&(i=window.pageYOffset+c.getBoundingClientRect().top)}}window.scrollTo(n,i),window.ga&&window.ga("send","pageview",Object(q.createPath)(t))}),e.next=23;break;case 17:e.prev=17,e.t0=e.catch(4),e.next=21;break;case 21:console.error(e.t0),r||te.key!==t.key||window.location.reload();case 23:case"end":return e.stop()}},e,this,[[4,17]])})),C.apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0});var R=(n(338),n(46)),S=n.n(R),_=n(340),E=n.n(_),A=(n(350),n(351)),T=n.n(A),q=n(95),U=n(66),B=n.n(U),I=n(357),N=l({insertCss:B.a.func.isRequired,fetch:B.a.func.isRequired},I.a.childContextTypes),Y=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),a(t,[{key:"getChildContext",value:function(){return this.props.context}},{key:"render",value:function(){return S.a.Children.only(this.props.children)}}]),t}(S.a.PureComponent);Object.defineProperty(Y,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:N});var X,J,M=Y,W=f,$=n(96),H=n(363),L=n.n(H),V="SET_RUNTIME_VARIABLE",z=Object($.c)({user:p,runtime:y}),D=(n(364),n(136)),F=n(371),G={path:"",children:[{path:"",load:function(){return n.e(5).then(n.bind(null,505))}},{path:"/contact",load:function(){return n.e(6).then(n.bind(null,506))}},{path:"/login",load:function(){return n.e(4).then(n.bind(null,507))}},{path:"/register",load:function(){return n.e(2).then(n.bind(null,508))}},{path:"/about",load:function(){return n.e(1).then(n.bind(null,509))}},{path:"/privacy",load:function(){return n.e(0).then(n.bind(null,510))}},{path:"/admin",load:function(){return n.e(7).then(n.bind(null,511))}},{path:"(.*)",load:function(){return n.e(3).then(n.bind(null,512))}}],action:function(){var e=O(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.next,e.next=3,n();case 3:return r=e.sent,r.title="".concat(r.title||"Untitled Page"," - www.reactstarterkit.com"),r.description=r.description||"",e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},K=G,Q=new F.a(K,{resolveRoute:function(e,t){return"function"==typeof e.route.load?e.route.load().then(function(n){return n.default(e,t)}):"function"==typeof e.route.action?e.route.action(e,t):void 0}}),Z={insertCss:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.map(function(e){return e._insertCss()});return function(){r.forEach(function(e){return e()})}},fetch:W(fetch,{baseUrl:window.App.apiUrl}),store:function(e,t){var n,r=m(t),o=[L.a.withExtraArgument(r)];n=$.a.apply(void 0,o);var i=Object($.d)(z,e,n);return i}(window.App.state,{history:D.a}),storeSubscription:null},ee=document.getElementById("app"),te=D.a.location,ne={};window.history&&"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),D.a.listen(P),P(te)}},[137]);
//# sourceMappingURL=client.0ace4a22.js.map