"use strict";var b=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var d=b(function(H,k){
var c=require('@stdlib/math-base-special-abs/dist');function E(i,r,v,g){var e,o,q,u,t,m,a,s,n,f;if(i<=0)return 0;if(u=g,v===0)return i*r[u];if(a=r[u],u+=v,e=a,e===0)for(f=1;f<i;f++){if(a=r[u],a!==0){q=!0;break}e+=a,u+=v}else q=!0,f=1;for(o=0,t=0;f<i;f++)a=r[u],s=e+a,c(e)>=c(a)?n=e-s+a:n=a-s+e,e=s,s=t+n,c(t)>=c(n)?m=t-s+n:m=n-s+t,t=s,o+=m,u+=v;return q?e+t+o:e}k.exports=E
});var y=b(function(I,p){
var O=require('@stdlib/strided-base-stride2offset/dist'),h=d();function w(i,r,v){return h(i,r,v,O(i,v))}p.exports=w
});var R=b(function(J,x){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=y(),A=d();z(j,"ndarray",A);x.exports=j
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=R(),l,_=C(B(__dirname,"./native.js"));D(_)?l=F:l=_;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
