// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function f(e){return Math.abs(e)}function c(e,t,r){var n,o,i,a,u,l,c,_,p;if(e<=0)return 0;if(1===e||0===r)return t[0];for(i=r<0?(1-e)*r:0,n=0,o=0,a=0,p=0;p<e;p++)c=n+(l=t[i]),_=f(n)>=f(l)?n-c+l:l-c+n,n=c,c=a+_,u=f(a)>=f(_)?a-c+_:_-c+a,a=c,o+=u,i+=r;return n+a+o}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n){var o,i,a,u,l,c,_,p,d;if(e<=0)return 0;if(1===e||0===r)return t[n];for(a=n,o=0,i=0,u=0,d=0;d<e;d++)_=o+(c=t[a]),p=f(o)>=f(c)?o-_+c:c-_+o,o=_,_=u+p,l=f(u)>=f(p)?u-_+p:p-_+u,u=_,i+=l,a+=r;return o+u+i}}),c},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dsumkbn2=t();
//# sourceMappingURL=browser.js.map
