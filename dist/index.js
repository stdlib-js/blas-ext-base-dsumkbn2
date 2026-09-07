"use strict";var b=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var d=b(function(H,k){
var c=require('@stdlib/math-base-special-abs/dist');function E(i,r,u,g){var e,o,q,s,t,m,a,v,n,f;if(i<=0)return 0;if(s=g,u===0)return i*r[s];if(a=r[s],s+=u,e=a,e===0)for(f=1;f<i;f++){if(a=r[s],a!==0){q=!0;break}e+=a,s+=u}else q=!0,f=1;for(o=0,t=0;f<i;f++)a=r[s],v=e+a,c(e)>=c(a)?n=e-v+a:n=a-v+e,e=v,v=t+n,c(t)>=c(n)?m=t-v+n:m=n-v+t,t=v,o+=m,s+=u;return q?e+t+o:e}k.exports=E
});var y=b(function(I,p){
var O=require('@stdlib/strided-base-stride2offset/dist'),h=d();function w(i,r,u){return h(i,r,u,O(i,u))}p.exports=w
});var R=b(function(J,x){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=y(),A=d();z(j,"ndarray",A);x.exports=j
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=R(),l,_=C(B(__dirname,"./native.js"));D(_)?l=F:l=_;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
