!function(){var t={91:function(t){"use strict";t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),n.hash&&(t+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},123:function(t){"undefined"!=typeof self&&self,t.exports=function(){"use strict";var t={407:function(t,n,e){e.d(n,{default:function(){return P}});var o=/([:*])(\w+)/g,r=/\*/g,i=/\/\?/g;function a(t){return void 0===t&&(t="/"),p()?location.pathname+location.search+location.hash:t}function s(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function c(t){return"string"==typeof t}function l(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function u(t){var n=s(t).split(/\?(.*)?$/);return[s(n[0]),n.slice(1).join("")]}function _(t){for(var n={},e=t.split("&"),o=0;o<e.length;o++){var r=e[o].split("=");if(""!==r[0]){var i=decodeURIComponent(r[0]);n[i]?(Array.isArray(n[i])||(n[i]=[n[i]]),n[i].push(decodeURIComponent(r[1]||""))):n[i]=decodeURIComponent(r[1]||"")}}return n}function h(t,n){var e,a=u(s(t.currentLocationPath)),h=a[0],f=a[1],d=""===f?null:_(f),p=[];if(c(n.path)){if(e="(?:/^|^)"+s(n.path).replace(o,(function(t,n,e){return p.push(e),"([^/]+)"})).replace(r,"?(?:.*)").replace(i,"/?([^/]+|)")+"$",""===s(n.path)&&""===s(h))return{url:h,queryString:f,hashString:l(t.to),route:n,data:null,params:d}}else e=n.path;var v=new RegExp(e,""),g=h.match(v);if(g){var m=c(n.path)?function(t,n){return 0===n.length?null:t?t.slice(1,t.length).reduce((function(t,e,o){return null===t&&(t={}),t[n[o]]=decodeURIComponent(e),t}),null):null}(g,p):g.groups?g.groups:g.slice(1);return{url:s(h.replace(new RegExp("^"+t.instance.root),"")),queryString:f,hashString:l(t.to),route:n,data:m,params:d}}return!1}function f(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function d(t,n){return void 0===t[n]||!0===t[n]}function p(){return"undefined"!=typeof window}function v(t,n){return void 0===t&&(t=[]),void 0===n&&(n={}),t.filter((function(t){return t})).forEach((function(t){["before","after","already","leave"].forEach((function(e){t[e]&&(n[e]||(n[e]=[]),n[e].push(t[e]))}))})),n}function g(t,n,e){var o=n||{},r=0;!function n(){t[r]?Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),n()):t[r](o,(function(t){void 0===t||!0===t?(r+=1,n()):e&&e(o)})):e&&e(o)}()}function m(t,n){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=a(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function y(t,n){for(var e=0;e<t.instance.routes.length;e++){var o=h(t,t.instance.routes[e]);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),"ONE"===t.resolveOptions.strategy))return void n()}n()}function k(t,n){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function w(t,n){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}g.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};var b=p(),C=f();function L(t,n){if(d(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),o=b&&t.resolveOptions&&!0===t.resolveOptions.hash;C?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout((function(){if(!o){var n=location.hash;location.hash="",location.hash=n}t.instance.__freezeListening=!1}),1))):b&&(window.location.href=t.to)}n()}function O(t,n){var e=t.instance;e.lastResolved()?g(e.lastResolved().map((function(n){return function(e,o){if(n.route.hooks&&n.route.hooks.leave){var r,i=t.instance.matchLocation(n.route.path,t.currentLocationPath,!1);r="*"!==n.route.path?!i:!(t.matches&&t.matches.find((function(t){return n.route.path===t.route.path}))),d(t.navigateOptions,"callHooks")&&r?g(n.route.hooks.leave.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}})).concat([function(){return o()}])):o()}else o()}})),{},(function(){return n()})):n()}function x(t,n){d(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var S=[function(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString)return e.forEach((function(n){n.route.hooks&&n.route.hooks.already&&d(t.navigateOptions,"callHooks")&&n.route.hooks.already.forEach((function(n){return n(t.match)}))})),void n(!1);n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.before&&d(t.navigateOptions,"callHooks")?g(t.match.route.hooks.before.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.match)}})).concat([function(){return n()}])):n()},function(t,n){d(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.after&&d(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach((function(n){return n(t.match)})),n()}],A=[O,function(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var o=u(t.currentLocationPath),r=o[0],i=o[1],a=l(t.to);e.path=s(r);var c={url:e.path,queryString:i,hashString:a,data:null,route:e,params:""!==i?_(i):null};t.matches=[c],t.match=c}n()},g.if((function(t){return t.notFoundHandled}),S.concat([x]),[function(t,n){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),n()},function(t,n){t.instance._setCurrent(null),n()}])];function H(){return(H=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function R(t,n){var e=0;O(t,(function o(){e!==t.matches.length?g(S,H({},t,{match:t.matches[e]}),(function(){e+=1,o()})):x(t,n)}))}function j(t){t.instance.__markAsClean(t)}function M(){return(M=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var E="[data-navigo]";function P(t,n){var e,o=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:E},r=this,i="/",d=null,b=[],C=!1,O=f(),x=p();function S(t){return t.indexOf("#")>=0&&(t=!0===o.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function H(t){return s(i+"/"+s(t))}function P(t,n,e,o){return t=c(t)?H(t):t,{name:o||s(String(t)),path:t,handler:n,hooks:v(e)}}function N(t,n){if(!r.__dirty){r.__dirty=!0,t=t?s(i)+"/"+s(t):void 0;var e={instance:r,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:M({},o,n)};return g([m,y,g.if((function(t){var n=t.matches;return n&&n.length>0}),R,A)],e,j),!!e.matches&&e.matches}r.__waiting.push((function(){return r.resolve(t,n)}))}function T(t,n){if(r.__dirty)r.__waiting.push((function(){return r.navigate(t,n)}));else{r.__dirty=!0,t=s(i)+"/"+s(t);var e={instance:r,to:t,navigateOptions:n||{},resolveOptions:n&&n.resolveOptions?n.resolveOptions:o,currentLocationPath:S(t)};g([k,w,y,g.if((function(t){var n=t.matches;return n&&n.length>0}),R,A),L,j],e,j)}}function U(){if(x)return(x?[].slice.call(document.querySelectorAll(o.linksSelector||E)):[]).forEach((function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(n){if((n.ctrlKey||n.metaKey)&&"a"===n.target.tagName.toLowerCase())return!1;var e=t.getAttribute("href");if(null==e)return!1;if(e.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(e);e=o.pathname+o.search}catch(t){}var i=function(t){if(!t)return{};var n,e=t.split(","),o={};return e.forEach((function(t){var e=t.split(":").map((function(t){return t.replace(/(^ +| +$)/g,"")}));switch(e[0]){case"historyAPIMethod":o.historyAPIMethod=e[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=e[1];break;case"resolveOptionsHash":n||(n={}),n.hash="true"===e[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[e[0]]="true"===e[1]}})),n&&(o.resolveOptions=n),o}(t.getAttribute("data-navigo-options"));C||(n.preventDefault(),n.stopPropagation(),r.navigate(s(e),i))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)})),r}function I(t,n,e){var o=b.find((function(n){return n.name===t})),r=null;if(o){if(r=o.path,n)for(var a in n)r=r.replace(":"+a,n[a]);r=r.match(/^\//)?r:"/"+r}return r&&e&&!e.includeRoot&&(r=r.replace(new RegExp("^/"+i),"")),r}function W(t){var n=u(s(t)),o=n[0],r=n[1],i=""===r?null:_(r);return{url:o,queryString:r,hashString:l(t),route:P(o,(function(){}),[e],o),data:null,params:i}}function q(t,n,e){return"string"==typeof n&&(n=B(n)),n?(n.hooks[t]||(n.hooks[t]=[]),n.hooks[t].push(e),function(){n.hooks[t]=n.hooks[t].filter((function(t){return t!==e}))}):(console.warn("Route doesn't exists: "+n),function(){})}function B(t){return"string"==typeof t?b.find((function(n){return n.name===H(t)})):b.find((function(n){return n.handler===t}))}t?i=s(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=i,this.routes=b,this.destroyed=C,this.current=d,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,n,o){var r=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(o=n,n=t,t=i),b.push(P(t,n,[e,o])),this):(Object.keys(t).forEach((function(n){if("function"==typeof t[n])r.on(n,t[n]);else{var o=t[n],i=o.uses,a=o.as,s=o.hooks;b.push(P(n,i,[e,s],a))}})),this)},this.off=function(t){return this.routes=b=b.filter((function(n){return c(t)?s(n.path)!==s(t):"function"==typeof t?t!==n.handler:String(n.path)!==String(t)})),this},this.resolve=N,this.navigate=T,this.navigateByName=function(t,n,e){var o=I(t,n);return null!==o&&(T(o.replace(new RegExp("^/?"+i),""),e),!0)},this.destroy=function(){this.routes=b=[],O&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=C=!0},this.notFound=function(t,n){return r._notFoundRoute=P("*",t,[e,n],"__NOT_FOUND__"),this},this.updatePageLinks=U,this.link=function(t){return"/"+i+"/"+s(t)},this.hooks=function(t){return e=t,this},this.extractGETParameters=function(t){return u(S(t))},this.lastResolved=function(){return d},this.generate=I,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var n={instance:r,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return y(n,(function(){})),!!n.matches&&n.matches},this.matchLocation=function(t,n,e){void 0===n||void 0!==e&&!e||(n=H(n));var o={instance:r,to:n,currentLocationPath:n};return m(o,(function(){})),"string"==typeof t&&(t=void 0===e||e?H(t):t),h(o,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return W(s(a(i)).replace(new RegExp("^"+i),""))},this.addBeforeHook=q.bind(this,"before"),this.addAfterHook=q.bind(this,"after"),this.addAlreadyHook=q.bind(this,"already"),this.addLeaveHook=q.bind(this,"leave"),this.getRoute=B,this._pathToMatchObject=W,this._clean=s,this._checkForAHash=S,this._setCurrent=function(t){return d=r.current=t},function(){O&&(this.__popstateListener=function(){r.__freezeListening||N()},window.addEventListener("popstate",this.__popstateListener))}.call(this),U.call(this)}}},n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}return e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e(407)}().default},376:function(t,n,e){"use strict";t.exports=e.p+"assets/apple-touch-icon.png"},733:function(t,n,e){"use strict";t.exports=e.p+"assets/favicon-16x16.png"},777:function(t,n,e){"use strict";t.exports=e.p+"assets/favicon-32x32.png"},304:function(t,n,e){"use strict";t.exports=e.p+"assets/safari-pinned-tab.svg"},17:function(t,n,e){"use strict";t.exports=e.p+"fonts/inter-v12-latin_cyrillic-600.woff2"},421:function(t,n,e){"use strict";t.exports=e.p+"fonts/inter-v12-latin_cyrillic-700.woff2"},706:function(t,n,e){"use strict";t.exports=e.p+"fonts/inter-v12-latin_cyrillic-regular.woff2"},226:function(t,n,e){"use strict";t.exports=e.p+"assets/site.webmanifest"}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,e),i.exports}e.m=t,e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}(),e.b=document.baseURI||self.location.href,function(){"use strict";var t=e(91),n=e.n(t),o=new URL(e(17),e.b),r=new URL(e(421),e.b),i=new URL(e(706),e.b),a=new URL(e(376),e.b),s=new URL(e(777),e.b),c=new URL(e(733),e.b),l=new URL(e(226),e.b),u=new URL(e(304),e.b),_=(n()(o),n()(r),n()(i),n()(a),n()(s),n()(c),n()(l),n()(u),e(123)),h=new(e.n(_)())("/",{hash:!0}),f=function(t){var n=document.querySelector(".hero");t?(n.style.display="",n.className="hero hero__".concat(t),n.innerHTML='\n  <div class="container">\n    <div class="hero__content">\n      <h2 class="hero__title">Новая коллекция Бюстгальтер-балконет</h2>\n\n      <a href="#" class="hero__link">Перейти</a>\n    </div>\n  </div>\n  '):n.style.display="none"};function d(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var v=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=e.append,r=e.appends,i=e.parent,a=e.cb,s=document.createElement(t);return n&&Object.assign(s,n),o&&o instanceof HTMLElement&&s.append(o),r&&r.every((function(t){return t instanceof HTMLElement}))&&s.append.apply(s,d(r)),i&&i instanceof HTMLElement&&i.append(s),a&&"function"==typeof a&&a(s),s},g={women:{title:"Женское",list:[{title:"Бюстгальтеры",slug:"bras"},{title:"Трусы",slug:"panties"},{title:"Носки",slug:"socks"},{title:"Халаты",slug:"bathrobes"},{title:"Термобельё",slug:"thermal"},{title:"Пижамы",slug:"pijamas"}]},men:{title:"Мужское",list:[{title:"Нижнее бельё",slug:"underwear"},{title:"Носки",slug:"panties"},{title:"Халаты",slug:"bathrobes"},{title:"Термобельё",slug:"thermal"}]}},m=function(t){var n=document.querySelector(".navigation");n.textContent="";var e=v("div",{className:"container"},{parent:n}),o=v("ul",{className:"navigation__gender gender"},{parent:e});for(var r in g)v("a",{className:"gender__link\n          ".concat(t===r?"gender__link_active":""),href:"#/".concat(r),textContent:g[r].title},{parent:v("li",{className:"gender__item"},{parent:o})});var i=g[t].list.map((function(n){return v("li",{className:"category__item"},{append:v("a",{className:"category__link",textContent:n.title,href:"#/".concat(t,"/").concat(n.slug)},{cb:function(t){t.addEventListener("click",(function(){var n;null===(n=document.querySelector(".category__link_active"))||void 0===n||n.classList.remove("category__link_active"),t.classList.add("category__link_active")}))}})})}));v("ul",{className:"navigation__category category"},{parent:e,appends:i})},y=function(){document.querySelector(".goods").innerHTML='\n    <div class="container">\n      <h2 class="goods__title">Новинки</h2>\n\n      <ul class="goods__list">\n        <li class="goods__item">\n          <article class="product">\n            <a href="#" class="product__link">\n              <img src="img/product02.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">\n              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>\n            </a>\n\n            <div class="product__row">\n              <p class="product__price">руб 2999</p>\n\n              <button class="product__btn-favorite" aria-label="добавить в избранное"></button>\n            </div>\n\n            <ul class="product__color-list">\n              <li class="product__color-item">\n                <div class="color color_red color_check"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_white"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_black"></div>\n              </li>\n            </ul>\n          </article>\n        </li>\n\n        <li class="goods__item">\n          <article class="product">\n            <a href="#" class="product__link">\n              <img src="img/product01.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">\n              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>\n            </a>\n\n            <div class="product__row">\n              <p class="product__price">руб 2999</p>\n\n              <button class="product__btn-favorite" aria-label="добавить в избранное"></button>\n            </div>\n\n            <ul class="product__color-list">\n              <li class="product__color-item">\n                <div class="color color_red color_check"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_white"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_black"></div>\n              </li>\n            </ul>\n          </article>\n        </li>\n\n        <li class="goods__item">\n          <article class="product">\n            <a href="#" class="product__link">\n              <img src="img/product02.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">\n              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>\n            </a>\n\n            <div class="product__row">\n              <p class="product__price">руб 2999</p>\n\n              <button class="product__btn-favorite" aria-label="добавить в избранное"></button>\n            </div>\n\n            <ul class="product__color-list">\n              <li class="product__color-item">\n                <div class="color color_red color_check"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_white"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_black"></div>\n              </li>\n            </ul>\n          </article>\n        </li>\n\n        <li class="goods__item">\n          <article class="product">\n            <a href="#" class="product__link">\n              <img src="img/product01.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">\n              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>\n            </a>\n\n            <div class="product__row">\n              <p class="product__price">руб 2999</p>\n\n              <button class="product__btn-favorite product__btn-favorite_active" aria-label="добавить в избранное"></button>\n            </div>\n\n            <ul class="product__color-list">\n              <li class="product__color-item">\n                <div class="color color_red color_check"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_white"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_black"></div>\n              </li>\n            </ul>\n          </article>\n        </li>\n\n        <li class="goods__item">\n          <article class="product">\n            <a href="#" class="product__link">\n              <img src="img/product02.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">\n              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>\n            </a>\n\n            <div class="product__row">\n              <p class="product__price">руб 2999</p>\n\n              <button class="product__btn-favorite" aria-label="добавить в избранное"></button>\n            </div>\n\n            <ul class="product__color-list">\n              <li class="product__color-item">\n                <div class="color color_red color_check"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_white"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_black"></div>\n              </li>\n            </ul>\n          </article>\n        </li>\n\n        <li class="goods__item">\n          <article class="product">\n            <a href="#" class="product__link">\n              <img src="img/product01.jpg" alt="Бюстгальтер-Балконет Wien из Микрофибры" class="product__image">\n              <h3 class="product__title">Бюстгальтер-Балконет Wien из Микрофибры</h3>\n            </a>\n\n            <div class="product__row">\n              <p class="product__price">руб 2999</p>\n\n              <button class="product__btn-favorite" aria-label="добавить в избранное"></button>\n            </div>\n\n            <ul class="product__color-list">\n              <li class="product__color-item">\n                <div class="color color_red color_check"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_white"></div>\n              </li>\n\n              <li class="product__color-item">\n                <div class="color color_black"></div>\n              </li>\n            </ul>\n          </article>\n        </li>\n      </ul>\n    </div>\n  '},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"women";console.log("gender: ",t),m(t),f(t),y()},w=e.p+"assets/logo.svg",b=v("button",{className:"header__link",innerHTML:'\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">\n      <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n      <path d="M16.4431 16.4438L20.9994 21.0002" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n  '}),C=v("a",{className:"header__link",innerHTML:'\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">\n      <path d="M19.5787 6.75H4.42122C4.23665 6.75 4.05856 6.81806 3.92103 6.94115C3.7835 7.06425 3.69619 7.23373 3.67581 7.41718L2.34248 19.4172C2.33083 19.522 2.34143 19.6281 2.37357 19.7286C2.40572 19.829 2.4587 19.9216 2.52904 20.0002C2.59939 20.0788 2.68553 20.1417 2.78182 20.1847C2.87812 20.2278 2.98241 20.25 3.08789 20.25H20.912C21.0175 20.25 21.1218 20.2278 21.2181 20.1847C21.3144 20.1417 21.4005 20.0788 21.4708 20.0002C21.5412 19.9216 21.5942 19.829 21.6263 19.7286C21.6585 19.6281 21.6691 19.522 21.6574 19.4172L20.3241 7.41718C20.3037 7.23373 20.2164 7.06425 20.0789 6.94115C19.9413 6.81806 19.7632 6.75 19.5787 6.75Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n      <path d="M8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>  \n  ',href:"cart"}),L=v("a",{className:"header__link",innerHTML:'\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">\n      <path d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n  ',href:"favorite"}),O=v("div",{className:"container header__container",innerHTML:'\n    <a href="tel:89304902620" class="header__phone header__link">8 930 490 26 20</a>\n\n    <img class="header__logo" src="'.concat(w,'" alt="Логотип inspired">\n  ')}),x=v("div",{className:"header__navigation"},{parent:O});v("ul",{className:"header__nav-list"},{parent:x,appends:[v("li",{className:"header__nav-item"},{append:b}),v("li",{className:"header__nav-item"},{append:C}),v("li",{className:"header__nav-item"},{append:L})]}),h.on("*",(function(){document.querySelector(".header").append(O),document.querySelector(".footer").innerHTML='\n    <div class="container ">\n      <div class="footer__container">\n        <div class="footer__item footer__item_category footer-category">\n          <h2 class="footer__title footer-category__title">Каталог</h2>\n\n          <ul class="footer-category__list">\n            <li class="footer-category__item">\n              <h3 class="footer-category__subtitle">\n                <a href="#" class="footer__link">Женщины</a>\n              </h3>\n\n              <ul class="footer-category__sublist">\n                <li class="footer-category__subitem">\n                  <a href="#" class="footer__link">Бюстгальтеры</a>\n                </li>\n                <li class="footer-category__subitem">\n                  <a href="#" class="footer__link">Трусы</a>\n                </li>\n                <li class="footer-category__subitem">\n                  <a href="#" class="footer__link">Носки</a>\n                </li>\n                <li class="footer-category__subitem">\n                  <a href="#" class="footer__link">Халаты</a>\n                </li>\n                <li class="footer-category__subitem">\n                  <a href="#" class="footer__link">Термобелье</a>\n                </li>\n                <li class="footer-category__subitem">\n                  <a href="#" class="footer__link">Пижамы</a>\n                </li>\n              </ul>\n            </li>\n            <li class="footer-category__item">\n              <h3 class="footer-category__subtitle">\n                <a href="#" class="footer__link">Мужчины</a>\n              </h3>\n\n              <ul class="footer-category__sublist">\n                <li class="footer-category__subitem">\n                  <a href="#" class="footer__link">Трусы</a>\n                </li>\n                <li class="footer-category__subitem">\n                  <a href="#" class="footer__link">Носки</a>\n                </li>\n                <li class="footer-category__subitem">\n                  <a href="#" class="footer__link">Халаты</a>\n                </li>\n                <li class="footer-category__subitem">\n                  <a href="#" class="footer__link">Термобелье</a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </div>\n\n        <div class="footer__item footer__item_social footer-social">\n          <h2 class="footer__title footer-social__title">Связаться с нами</h2>\n\n          <p class="footer-social__subtitle">Контакты и адреса магазинов</h3>\n\n          <ul class="footer-social__list">\n            <li class="footer-social__item">\n              <a href="#" class="footer-social__link footer-social__link_vk footer__link">\n                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M12 0C5.37281 0 0 5.37256 0 12C0 18.6274 5.37281 24 12 24C18.6272 24 24 18.6274 24 12C24 5.37256 18.6272 0 12 0ZM18.087 13.2978C18.6463 13.8441 19.2381 14.3583 19.7402 14.961C19.9626 15.2277 20.1723 15.5034 20.3319 15.8135C20.5597 16.2557 20.354 16.7406 19.9582 16.7669L17.4997 16.7664C16.8648 16.8189 16.3595 16.5628 15.9335 16.1287C15.5935 15.7828 15.278 15.4133 14.9505 15.0556C14.8167 14.9087 14.6757 14.7705 14.5078 14.6617C14.1726 14.4437 13.8815 14.5105 13.6895 14.8606C13.4938 15.2169 13.4491 15.6117 13.4304 16.0082C13.4037 16.5879 13.2288 16.7394 12.6472 16.7666C11.4044 16.8248 10.2251 16.6362 9.12908 16.0097C8.16221 15.457 7.41385 14.677 6.76174 13.7938C5.49189 12.0722 4.51937 10.1826 3.64554 8.23881C3.44888 7.80104 3.59276 7.56681 4.0757 7.55773C4.87808 7.54226 5.68045 7.54423 6.48282 7.55699C6.80937 7.56215 7.02543 7.74899 7.1509 8.05713C7.58449 9.12393 8.11605 10.1389 8.78216 11.0803C8.95967 11.3309 9.14087 11.5809 9.39892 11.7579C9.68372 11.9534 9.90077 11.8888 10.0351 11.5708C10.121 11.3688 10.1581 11.1527 10.1767 10.9361C10.2406 10.1944 10.2482 9.45293 10.1377 8.71415C10.069 8.25183 9.80894 7.95327 9.34809 7.86586C9.11337 7.82142 9.14774 7.73451 9.26191 7.60045C9.46005 7.36868 9.64567 7.22529 10.0167 7.22529L12.7943 7.2248C13.232 7.31073 13.3303 7.50715 13.3897 7.94811L13.3921 11.0348C13.387 11.2055 13.4778 11.7113 13.7842 11.823C14.0297 11.904 14.1918 11.7071 14.3386 11.5517C15.0047 10.8448 15.4793 10.0105 15.9043 9.14701C16.0919 8.7662 16.2537 8.37213 16.4108 7.97733C16.5277 7.6854 16.7094 7.54177 17.0389 7.54668L19.7136 7.54987C19.7924 7.54987 19.8725 7.55061 19.9506 7.56411C20.4014 7.64121 20.5248 7.83517 20.3854 8.27491C20.1659 8.96581 19.7394 9.54132 19.3225 10.1183C18.8757 10.736 18.3991 11.3322 17.9567 11.9526C17.5501 12.5198 17.5822 12.8053 18.087 13.2978Z"/>\n                </svg>                  \n              </a>\n            </li>\n            <li class="footer-social__item">\n              <a href="#" class="footer-social__link footer-social__link_fb footer__link">\n                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z"/>\n                </svg> \n              </a>                 \n            </li>\n          </ul>\n\n        </div>\n\n        <div class="footer__item footer__item_contacts footer-contacts">\n          <a class="footer__link" href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>\n          <a class="footer__link" href="tel:89304902620">8 930 490 26 20</a>\n        </div>\n\n        <div class="footer__item footer__item_copyright footer-copyright">\n          <p>© INSPIRED, 2022</p>\n        </div>\n\n        <div class="footer__item footer__item_development footer-development">\n            <ul class="footer-development__list">\n              <li class="footer-development__item">\n                Designer: <a class="footer__link" href="https://t.me/Mrshmallowww">Anastasia Ilina</a>\n              </li>\n\n              <li class="footer-development__item">\n                Developer: <a class="footer__link" href="https://t.me/Quper">Maksim Leskin</a>\n              </li>\n            </ul>\n        </div>\n      </div>\n    </div>\n  '})),h.on("/",(function(){k()})),h.on("women",(function(){k("women")})),h.on("men",(function(){k("men")})),h.resolve()}()}();