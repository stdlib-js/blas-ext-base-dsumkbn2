"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=d(function(G,p){
var c=require('@stdlib/math-base-special-abs/dist');function E(e,r,t,_){var i,o,n,s,q,v,a,u,f;if(e<=0)return 0;if(n=_,t===0)return e*r[n];for(i=0,o=0,s=0,f=0;f<e;f++)v=r[n],a=i+v,c(i)>=c(v)?u=i-a+v:u=v-a+i,i=a,a=s+u,c(s)>=c(u)?q=s-a+u:q=u-a+s,s=a,o+=q,n+=t;return i+s+o}p.exports=E
});var k=d(function(H,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(e,r,t){return g(e,r,t,O(e,t))}y.exports=h
});var j=d(function(I,x){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),z=m();w(l,"ndarray",z);x.exports=l
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=j(),b,R=B(A(__dirname,"./native.js"));C(R)?b=D:b=R;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
