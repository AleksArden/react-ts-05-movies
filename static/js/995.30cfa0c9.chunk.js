"use strict";(self.webpackChunkreact_ts_the_best_choose_movies=self.webpackChunkreact_ts_the_best_choose_movies||[]).push([[995],{866:function(e,n,t){t.d(n,{y:function(){return r}});var r="https://image.tmdb.org/t/p/w500"},159:function(e,n,t){t.d(n,{Q:function(){return r}});var r={idle:"idle",loading:"loading",success:"success",error:"error"}},995:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r,i,s,a,o,c,l,d,p,u,x=t(165),v=t(861),h=t(439),f=t(791),g=t(689),j=t(87),m=t(47),Z=t(168),b=t(444),w=b.ZP.button(r||(r=(0,Z.Z)(["\n  margin-left: 24px;\n  margin-top: 24px;\n"]))),_=b.ZP.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  padding: 16px 24px;\n"]))),k=b.ZP.img(s||(s=(0,Z.Z)(["\n  width: 250px;\n  min-height: 375px;\n  object-fit: cover;\n"]))),P=b.ZP.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 24px 16px;\n"]))),y=b.ZP.div(o||(o=(0,Z.Z)(["\n  padding: 16px 24px;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n"]))),Q=b.ZP.ul(c||(c=(0,Z.Z)(["\n  list-style: none;\n"]))),U=b.ZP.li(l||(l=(0,Z.Z)(["\n  padding: 4px;\n"]))),D=b.ZP.h2(d||(d=(0,Z.Z)(["\n  margin-left: 24px;\n  margin-top: 24px;\n"]))),F=b.ZP.p(p||(p=(0,Z.Z)(["\n  margin-left: 24px;\n  margin-top: 24px;\n"]))),L=b.ZP.div(u||(u=(0,Z.Z)(["\n  margin-top: 16px;\n  margin-left: 24px;\n"]))),N=t(866),C=t(159),O=t(849),R=t(184),A=function(){var e=(0,f.useState)(null),n=(0,h.Z)(e,2),t=n[0],r=n[1],i=(0,f.useState)(C.Q.idle),s=(0,h.Z)(i,2),a=s[0],o=s[1],c=(0,g.s0)(),l=(0,g.TH)();console.log(l);var d=(0,g.UO)().movieId;(0,f.useEffect)((function(){var e=function(){var e=(0,v.Z)((0,x.Z)().mark((function e(n){var t;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(C.Q.loading),e.prev=1,e.next=4,(0,m.t)({URL:"movie/".concat(n)});case 4:t=e.sent,p(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),o(C.Q.error);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}();e(d)}),[d]);var p=function(e){var n={title:e.original_title,releaseDate:new Date(e.release_date).getFullYear(),overview:e.overview,genres:e.genres.map((function(e){return e.name})).join(" "),poster:e.poster_path,voteAverage:(10*e.vote_average).toFixed(0)};r(n),o(C.Q.success)};return(0,R.jsxs)(R.Fragment,{children:[a===C.Q.error&&(0,R.jsx)(D,{children:"NOT FOUND"}),a===C.Q.loading&&(0,R.jsx)(F,{children:"Loading..."}),a===C.Q.success&&t&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(w,{type:"button",onClick:function(){var e;return c(null===l||void 0===l||null===(e=l.state)||void 0===e?void 0:e.from)},children:"Go back"}),(0,R.jsxs)(_,{children:[t.poster?(0,R.jsx)(k,{src:"".concat(N.y)+t.poster,alt:"Poster ".concat(t.title)}):(0,R.jsx)(k,{src:O}),(0,R.jsxs)(P,{children:[t.releaseDate?(0,R.jsxs)("h2",{children:[t.title," (",t.releaseDate,")"]}):(0,R.jsx)("h2",{children:t.title}),(0,R.jsxs)("p",{children:["User score ",t.voteAverage,"%"]}),(0,R.jsx)("b",{children:"Overview"}),t.overview?(0,R.jsx)("p",{children:t.overview}):(0,R.jsx)("p",{children:"Not information"}),(0,R.jsx)("b",{children:"Genres"}),t.genres?(0,R.jsx)("p",{children:t.genres}):(0,R.jsx)("p",{children:"Not information"})]})]}),(0,R.jsxs)(y,{children:[(0,R.jsx)("p",{children:"Additional information"}),(0,R.jsxs)(Q,{children:[(0,R.jsx)(U,{children:(0,R.jsx)(j.rU,{to:"cast",state:l.state,children:"Cast"})}),(0,R.jsx)(U,{children:(0,R.jsx)(j.rU,{to:"reviews",state:l.state,children:"Reviews"})})]})]}),(0,R.jsx)(f.Suspense,{fallback:(0,R.jsx)(L,{children:"Loading..."}),children:(0,R.jsx)(g.j3,{})})]})]})}},47:function(e,n,t){t.d(n,{t:function(){return a}});var r=t(165),i=t(861),s=t(243).Z.create({baseURL:"https://api.themoviedb.org/3/"}),a=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get(n.URL,{params:{api_key:"51cea464d1158e7d34cacf903de39a42",query:n.searchName}});case 2:return t=e.sent,i=t.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},849:function(e,n,t){e.exports=t.p+"static/media/poster-not-found.0a5c47d51136d8a88ebe.jpg"}}]);
//# sourceMappingURL=995.30cfa0c9.chunk.js.map