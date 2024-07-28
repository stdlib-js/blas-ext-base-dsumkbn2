"use strict";var b=function(s,u){return function(){return u||s((u={exports:{}}).exports,u),u.exports}};var k=b(function(F,d){
var q=require('@stdlib/math-base-special-abs/dist');function O(s,u,o){var n,a,f,i,v,c,e,r,t;if(s<=0)return 0;if(s===1||o===0)return u[0];for(o<0?f=(1-s)*o:f=0,n=0,a=0,i=0,t=0;t<s;t++)c=u[f],e=n+c,q(n)>=q(c)?r=n-e+c:r=c-e+n,n=e,e=i+r,q(i)>=q(r)?v=i-e+r:v=r-e+i,i=e,a+=v,f+=o;return n+i+a}d.exports=O
});var y=b(function(G,x){
var m=require('@stdlib/math-base-special-abs/dist');function g(s,u,o,n){var a,f,i,v,c,e,r,t,l;if(s<=0)return 0;if(s===1||o===0)return u[n];for(i=n,a=0,f=0,v=0,l=0;l<s;l++)e=u[i],r=a+e,m(a)>=m(e)?t=a-r+e:t=e-r+a,a=r,r=v+t,m(v)>=m(t)?c=v-r+t:c=t-r+v,v=r,f+=c,i+=o;return a+v+f}x.exports=g
});var _=b(function(H,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=k(),w=y();h(j,"ndarray",w);R.exports=j
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=_(),p,E=A(z(__dirname,"./native.js"));B(E)?p=C:p=E;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
