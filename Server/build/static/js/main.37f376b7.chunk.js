(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[6],{18:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var a="SAVE_AUTH_INFO",c="CHANGE_BALANCE",o="CHANGE_MEMBERSHIP"},28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(38),n(34)),o=n.n(c);t.default=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(o.a,{channel:"RoundDistinctGarbageHassaanChop"})})}},69:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),o=n.n(c),r=n(11),l=n.n(r),i=(n(28),n(19),n(29),n(17)),u=(n(30),n(13)),s=n(3),b=n(6),j=(n(48),n(5)),h=n(37),d=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,124))})),p=(Object(b.a)(),function(e){var t=e.component,n=Object(h.a)(e,["component"]);return Object(a.jsx)(s.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,Object(j.a)({},e)),Object(a.jsx)(t,Object(j.a)({},e))]})}}))}),O=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(4),n.e(10)]).then(n.bind(null,247))})),f=o.a.lazy((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,248))})),m=o.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(16)]).then(n.bind(null,249))})),x=o.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(17)]).then(n.bind(null,250))})),g=o.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(4),n.e(9),n.e(19)]).then(n.bind(null,251))})),y=o.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(1),n.e(4),n.e(15)]).then(n.bind(null,252))})),P=o.a.lazy((function(){return Promise.all([n.e(11),n.e(27)]).then(n.bind(null,253))})),z=o.a.lazy((function(){return Promise.resolve().then(n.bind(null,48))})),v=o.a.lazy((function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,254))})),w=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(20)]).then(n.bind(null,255))})),S=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(14)]).then(n.bind(null,256))})),E=o.a.lazy((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,257))})),k=o.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(12),n.e(23)]).then(n.bind(null,258))})),C=o.a.lazy((function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,259))})),F=o.a.lazy((function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,260))})),I=o.a.lazy((function(){return Promise.all([n.e(0),n.e(24)]).then(n.bind(null,261))}));Object(b.a)();i.a.configure();var A=Object(u.b)((function(e){return{auth:e.auth}}))((function(e){return Object(c.useEffect)((function(){"#/_=_"==window.location.hash.substring(0,5)&&(console.log("sdfsdf"),window.location.href=window.location.href.slice(0,-3))})),console.log("props"),console.log(e),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(s.d,{children:[Object(a.jsx)(p,{exact:!0,path:"/",component:O}),Object(a.jsx)(p,{path:"/template",component:f}),Object(a.jsx)(p,{exact:!0,path:"/face-edit",component:m}),Object(a.jsx)(p,{exact:!0,path:"/main-edit",component:x}),Object(a.jsx)(p,{exact:!0,path:"/preview",component:g}),Object(a.jsx)(p,{exact:!0,path:"/save",component:y}),Object(a.jsx)(p,{exact:!0,path:"/youtube",component:P}),Object(a.jsx)(p,{exact:!0,path:"/fb",component:z}),Object(a.jsx)(p,{exact:!0,path:"/profile",component:v}),Object(a.jsx)(p,{exact:!0,path:"/deposit",component:w}),Object(a.jsx)(p,{exact:!0,path:"/membership",component:S}),Object(a.jsx)(p,{exact:!0,path:"/login",component:E}),Object(a.jsx)(p,{exact:!0,path:"/register",component:k}),Object(a.jsx)(p,{exact:!0,path:"/forgot-password",component:C}),Object(a.jsx)(p,{exact:!0,path:"/verify-code",component:F}),Object(a.jsx)(p,{exact:!0,path:"/reset-password",component:I})]})})})),_=n(26),H=n(18),N={user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,token:localStorage.getItem("token")},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.c:return Object(j.a)(Object(j.a)({},e),{},{user:t.payload.user,token:t.payload.token});case H.b:return Object(j.a)(Object(j.a)({},e),{},{user:Object(j.a)(Object(j.a)({},e.user),{},{membership:t.payload})});case H.a:return Object(j.a)(Object(j.a)({},e),{},{user:Object(j.a)(Object(j.a)({},e.user),{},{balance:t.payload})});default:return e}},L=Object(_.a)({auth:B}),G=function(){return Object(_.b)(L)}();i.a.configure();var J=function(){return Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)("div",{children:"Loading... "}),children:Object(a.jsx)(u.a,{store:G,children:Object(a.jsx)(A,{})})})},M=function(e){e&&e instanceof Function&&n.e(28).then(n.bind(null,262)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))},T=n(15);l.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(T.a,{children:Object(a.jsx)(J,{})})}),document.getElementById("root")),M()}},[[69,7,8]]]);
//# sourceMappingURL=main.37f376b7.chunk.js.map