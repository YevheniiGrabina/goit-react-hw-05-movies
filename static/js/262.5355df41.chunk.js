"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[262],{991:function(e,t,n){n.d(t,{$:function(){return o},Z:function(){return r}});var r="https://image.tmdb.org/t/p/w500",o="313ffdff82053e0e29100a2fb4b2d3e5"},474:function(e,t,n){n.d(t,{BC:function(){return s},IQ:function(){return h},Jh:function(){return d},TP:function(){return p},Zh:function(){return f}});var r=n(861),o=n(757),u=n.n(o),c=n(991);function i(){return a.apply(this,arguments)}function a(){return a=(0,r.Z)(u().mark((function e(){var t,n,r=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not Found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function s(){return i("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c.$))}function f(e){return i("https://api.themoviedb.org/3/search/movie?api_key=".concat(c.$,"&query=").concat(e))}function p(e){return i("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c.$))}function h(e){return i("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c.$))}function d(e){return i("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c.$,"&page=1"))}},262:function(e,t,n){n.r(t);var r=n(885),o=n(791),u=n(501),c=n(474),i=n(184),a=(0,o.lazy)((function(){return n.e(130).then(n.bind(n,130))}));t.default=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],f=(0,u.lr)(),p=(0,r.Z)(f,2),h=p[0],d=p[1],l=h.get("query"),m=(0,o.useState)(null!==l&&void 0!==l?l:""),v=(0,r.Z)(m,2),b=v[0],g=v[1];return(0,o.useEffect)((function(){l&&(0,c.Zh)(l).then((function(e){return s(e.results)}))}),[l]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d({query:b.toLowerCase().trim()})},children:[(0,i.jsx)("input",{onChange:function(e){g(e.currentTarget.value)},value:b,name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter movie name"}),(0,i.jsx)("button",{type:"submit",children:(0,i.jsx)("span",{children:"Search"})})]}),(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:n.length>0&&(0,i.jsx)(a,{movies:n})})]})}}}]);
//# sourceMappingURL=262.5355df41.chunk.js.map