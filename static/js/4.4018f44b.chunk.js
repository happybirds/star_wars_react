(this["webpackJsonpstat-wars-react"]=this["webpackJsonpstat-wars-react"]||[]).push([[4],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var r=n(13),a=n(0),c=n.n(a),i=n(10),s=n(64),o=s.c,l=n(164),u=n.n(l),j=n(166),p=n(167),d=n.n(p),b=n(72),h=n(189),O=n(190),x=n(141),m=n(195),f=n(136),v=n(196),g=n(197),w=n(192),k=n(193),S=n(194),y=n(137),z=n(148),_=n(140),C=n(187),B=n.n(C),E=n(186),F=n.n(E),J=n(2);function L(e){var t,n=["name","height","mass","hair_color","skin_color","gender","birth_year"];switch(Object(i.g)().name){case"movies":n=["title","director","producer","release_date"];break;case"planets":n=["name","terrain","population"]}var a=c.a.useState(!1),s=Object(r.a)(a,2),o=s[0],l=s[1];return Object(J.jsxs)(c.a.Fragment,{children:[Object(J.jsxs)(w.a,{sx:{"& > *":{borderBottom:"unset"}},children:[Object(J.jsx)(k.a,{children:Object(J.jsx)(x.a,{"aria-label":"expand row",size:"small",onClick:function(){return l(!o)},children:o?Object(J.jsx)(F.a,{}):Object(J.jsx)(B.a,{})})}),Object(J.jsx)(k.a,{component:"th",scope:"row",children:null!==(t=e.row.name)&&void 0!==t?t:e.row.title})]}),Object(J.jsx)(w.a,{children:Object(J.jsx)(k.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(J.jsx)(S.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(J.jsx)(y.a,{sx:{margin:1},children:Object(J.jsx)(z.a,{children:n&&n.map((function(t,n){return Object(J.jsxs)(_.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,component:"div",children:[t.replace(/[_]/g," ").replace(/^\S/,(function(e){return e.toUpperCase()})),": ",e.row[t]]},n)}))})})})})})]})}var M=function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(i.g)().name,p=o((function(e){return e.user})),w=p.data,k=p.isLoading,S=p.error,y=p.count,z=function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"person"){case"person":return"https://swapi.dev/api/people/?page=".concat(e);case"movies":return"https://swapi.dev/api/films/?page=".concat(e);case"planets":return"https://swapi.dev/api/planets/?page=".concat(e)}}(l,n),_=Object(s.b)();return Object(a.useEffect)((function(){c(1)}),[l]),Object(a.useEffect)((function(){_(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(j.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(Object(b.b)()),t.next=4,d.a.get(e);case 4:r=t.sent,n(Object(b.c)(r.data.results,r.data.count)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(Object(b.d)("Fetch error "));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(z))}),[z]),k?Object(J.jsx)("h1",{children:"Loading..."}):S?Object(J.jsx)("h1",{children:S}):Object(J.jsxs)(J.Fragment,{children:[n,"/ ",Math.ceil(y/10),1!==n&&Object(J.jsx)(x.a,{"aria-label":"delete",size:"medium",onClick:function(){return c(n-1)},children:Object(J.jsx)(h.a,{fontSize:"inherit",color:"primary"})}),n<y/10&&Object(J.jsx)(x.a,{"aria-label":"delete",size:"medium",onClick:function(){return c(n+1)},children:Object(J.jsx)(O.a,{fontSize:"inherit",color:"primary"})}),Object(J.jsx)(m.a,{component:f.a,children:Object(J.jsx)(v.a,{"aria-label":"collapsible table",children:Object(J.jsx)(g.a,{children:w.map((function(e,t){return Object(J.jsx)(L,{row:e},t)}))})})})]})}}}]);
//# sourceMappingURL=4.4018f44b.chunk.js.map