!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.neetoui=t(require("react")):e.neetoui=t(e.react)}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=500)}({0:function(t,r){t.exports=e},101:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(2),a=r.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}t.a=function(e){var t=e.children,r=e.className,n=void 0===r?"":r,i=e.color,l=e.size,s=void 0===l?"small":l,f=e.type,p=void 0===f?"rounded":f,d=e.onClose,y=u(e,["children","className","color","size","type","onClose"]);return o.a.createElement("div",c({className:a()(["nui-badge inline-flex items-center font-medium","bg-".concat(i,"-100"),"text-".concat(i,"-800"),n],{"text-xs px-2.5 py-0.5 leading-4":"small"===s,"text-sm px-3 py-1 leading-5":"large"===s,"rounded-full":"rounded"===p,rounded:"squared"===p})},y),t,d&&o.a.createElement("div",{className:"flex ml-1 -mr-1 cursor-pointer",onClick:d},o.a.createElement("i",{className:a()(["text-".concat(i,"-600 hover:text-").concat(i,"-800"),"transition-all ease-in-out duration-300","ri-close-line transform scale-125"],{"text-xs":"small"===s,"text-sm":"large"===s})})))}},2:function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},500:function(e,t,r){"use strict";r.r(t),r.d(t,"PageHeading",(function(){return m}));var n=r(0),o=r.n(n),i=r(2),a=r.n(i),c=r(101);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,r,n,i=p(u);function u(){return l(this,u),i.apply(this,arguments)}return t=u,(r=[{key:"render",value:function(){var e=function(){},t=this.props,r=t.customClass,n=t.preHeadingContent,i=void 0===n?e:n,u=t.breadcrumbLinks,l=void 0===u?null:u,s=t.title,f=t.count,p=t.rightButton,d=void 0===p?e:p;return o.a.createElement("div",{className:a()(["nui-header",r])},o.a.createElement("div",{className:"flex flex-row items-center justify-start"},i(),l,o.a.createElement("h1",{className:"text-xl font-semibold","data-test-id":"heading"},s),f>0&&o.a.createElement(c.a,{color:"white",type:"squared",className:"bg-purple-500 text-white py-1.5 px-2 ml-2"},f)),o.a.createElement("div",{className:"post-heading-content d-flex align-items-start"},this.props.search&&o.a.createElement("span",{className:"pl-3"},this.props.search())),o.a.createElement("div",{className:"flex flex-row items-center justify-end"},d()))}}])&&s(t.prototype,r),n&&s(t,n),u}(n.Component)}})}));