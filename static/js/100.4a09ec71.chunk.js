"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[100],{991:function(e,t,n){n.d(t,{$:function(){return r},Z:function(){return i}});var i="https://image.tmdb.org/t/p/w500",r="313ffdff82053e0e29100a2fb4b2d3e5"},474:function(e,t,n){n.d(t,{BC:function(){return u},IQ:function(){return p},Jh:function(){return h},TP:function(){return d},Zh:function(){return l}});var i=n(861),r=n(757),a=n.n(r),c=n(991);function o(){return s.apply(this,arguments)}function s(){return s=(0,i.Z)(a().mark((function e(){var t,n,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not Found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function u(){return o("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c.$))}function l(e){return o("https://api.themoviedb.org/3/search/movie?api_key=".concat(c.$,"&query=").concat(e))}function d(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c.$))}function p(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c.$))}function h(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c.$,"&page=1"))}},100:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var i=n(885),r=n(474),a=n(791),c=n(501),o=n(871),s=n(134),u=n(991),l={backLink:"MovieDetails_backLink__cUreP",backLinkContainer:"MovieDetails_backLinkContainer__h8hLq",backLinkCapture:"MovieDetails_backLinkCapture__MolzE",movieDetailsCard:"MovieDetails_movieDetailsCard__Eub0G",movieDetailsInfo:"MovieDetails_movieDetailsInfo__zxjvT"},d=n(184),p=function(){var e,t,n=(0,o.UO)().movieId,p=(0,a.useState)({}),h=(0,i.Z)(p,2),v=h[0],f=h[1],m=(0,o.TH)(),k=null!==(e=null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,a.useEffect)((function(){(0,r.TP)(n).then(f)}),[n]);var x=v.title,j=v.poster_path,_=v.overview,b=v.genres;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.rU,{className:l.backLink,to:k,children:(0,d.jsxs)("div",{className:l.backLinkContainer,children:[(0,d.jsx)("span",{children:(0,d.jsx)(s.kyg,{})}),(0,d.jsx)("span",{className:l.backLinkCapture,children:"Go Back"})]})}),(0,d.jsxs)("div",{className:l.movieDetailsCard,children:[(0,d.jsx)("img",{src:"".concat(u.Z).concat(j),alt:"Poster to ".concat(x)}),(0,d.jsxs)("div",{className:l.movieDetailsInfo,children:[(0,d.jsx)("h1",{children:x}),(0,d.jsx)("p",{className:l.capture,children:"Overview"}),(0,d.jsx)("p",{children:_}),(0,d.jsx)("p",{className:l.capture,children:"Genres"}),b&&b.map((function(e){return e.name})).join(", ")]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:l.capture,children:"Additional information"}),(0,d.jsx)("p",{children:(0,d.jsx)(c.rU,{to:"cast",state:{from:k},children:"Cast"})}),(0,d.jsx)("p",{children:(0,d.jsx)(c.rU,{to:"reviews",state:{from:k},children:"Reviews"})}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(o.j3,{})})]})]})}}}]);
//# sourceMappingURL=100.4a09ec71.chunk.js.map