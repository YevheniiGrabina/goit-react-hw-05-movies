"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[797],{991:function(t,e,n){n.d(e,{$:function(){return o},Z:function(){return r}});var r="https://image.tmdb.org/t/p/w500",o="313ffdff82053e0e29100a2fb4b2d3e5"},474:function(t,e,n){n.d(e,{BC:function(){return s},IQ:function(){return p},Jh:function(){return d},TP:function(){return h},Zh:function(){return f}});var r=n(861),o=n(757),c=n.n(o),i=n(991);function u(){return a.apply(this,arguments)}function a(){return a=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t.next=3,fetch(e);case 3:if(!(n=t.sent).ok){t.next=10;break}return t.next=7,n.json();case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=Promise.reject(new Error("Not Found"));case 11:return t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}function s(){return u("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i.$))}function f(t){return u("https://api.themoviedb.org/3/search/movie?api_key=".concat(i.$,"&query=").concat(t))}function h(t){return u("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i.$))}function p(t){return u("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i.$))}function d(t){return u("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i.$,"&page=1"))}},797:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(885),o=n(871),c=n(791),i=n(474),u="Reviews_authorName__GDP-o",a=n(184),s=function(){var t=(0,o.UO)().movieId,e=(0,c.useState)([]),n=(0,r.Z)(e,2),s=n[0],f=n[1];return(0,c.useEffect)((function(){(0,i.Jh)(t).then((function(t){return f(t.results)}))}),[t]),(0,a.jsx)(a.Fragment,{children:s.length>0?(0,a.jsx)("ul",{children:s.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("p",{className:u,children:["Author: ",n]}),(0,a.jsx)("p",{children:r})]},e)}))}):(0,a.jsx)("p",{children:"We don`t have any reviews for this movie"})})}}}]);
//# sourceMappingURL=797.80a9fc4b.chunk.js.map