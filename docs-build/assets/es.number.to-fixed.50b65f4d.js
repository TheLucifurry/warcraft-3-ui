var O=Object.defineProperty;var f=(a,i)=>O(a,"name",{value:i,configurable:!0});import{a9 as R,aa as S,ab as x,Y as E,ac as F,ad as N,ae as T}from"./iframe.d3fca4a9.js";var j=x,C=R,q=S,D=RangeError,V=f(function(i){var r=C(q(this)),e="",t=j(i);if(t<0||t==1/0)throw D("Wrong number of repetitions");for(;t>0;(t>>>=1)&&(r+=r))t&1&&(e+=r);return e},"repeat"),k=E,p=F,z=x,M=T,U=V,b=N,W=RangeError,I=String,y=Math.floor,d=p(U),w=p("".slice),c=p(1 .toFixed),s=f(function(a,i,r){return i===0?r:i%2===1?s(a,i-1,r*a):s(a*a,i/2,r)},"pow"),Y=f(function(a){for(var i=0,r=a;r>=4096;)i+=12,r/=4096;for(;r>=2;)i+=1,r/=2;return i},"log"),u=f(function(a,i,r){for(var e=-1,t=r;++e<6;)t+=i*a[e],a[e]=t%1e7,t=y(t/1e7)},"multiply"),$=f(function(a,i){for(var r=6,e=0;--r>=0;)e+=a[r],a[r]=y(e/i),e=e%i*1e7},"divide"),m=f(function(a){for(var i=6,r="";--i>=0;)if(r!==""||i===0||a[i]!==0){var e=I(a[i]);r=r===""?e:r+d("0",7-e.length)+e}return r},"dataToString"),_=b(function(){return c(8e-5,3)!=="0.000"||c(.9,0)!=="1"||c(1.255,2)!=="1.25"||c(0xde0b6b3a7640080,0)!=="1000000000000000128"})||!b(function(){c({})});k({target:"Number",proto:!0,forced:_},{toFixed:f(function(i){var r=M(this),e=z(i),t=[0,0,0,0,0,0],h="",n="0",o,g,v,l;if(e<0||e>20)throw W("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return I(r);if(r<0&&(h="-",r=-r),r>1e-21)if(o=Y(r*s(2,69,1))-69,g=o<0?r*s(2,-o,1):r/s(2,o,1),g*=4503599627370496,o=52-o,o>0){for(u(t,0,g),v=e;v>=7;)u(t,1e7,0),v-=7;for(u(t,s(10,v,1),0),v=o-1;v>=23;)$(t,1<<23),v-=23;$(t,1<<v),u(t,1,1),$(t,2),n=m(t)}else u(t,0,g),u(t,1<<-o,0),n=m(t)+d("0",e);return e>0?(l=n.length,n=h+(l<=e?"0."+d("0",e-l)+n:w(n,0,l-e)+"."+w(n,l-e))):n=h+n,n},"toFixed")});export{V as s};
//# sourceMappingURL=es.number.to-fixed.50b65f4d.js.map
