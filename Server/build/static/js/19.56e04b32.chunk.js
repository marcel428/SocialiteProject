(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[19],{247:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a(27),n=a(73),i=a(74),d=a(76),o=a(75),l=a(0),u=a(15),c=a(85),p=a(3),h=a(19),j=a(77),y=a.n(j),f=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={email:"",password:"",emailKey:!1,passwordKey:!1,emailRequired:!1,passwordRequired:!1},r.handleInput=function(e,t){if(r.setState(Object(s.a)({},t,e.target.value)),"email"==t){!0===/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(e.target.value)?r.setState({emailKey:!1}):r.setState({emailKey:!0}),""==e.target.value?r.setState({emailRequired:!0}):r.setState({emailRequired:!1})}"password"==t&&(e.target.value.length<4?r.setState({passwordKey:!0}):r.setState({passwordKey:!1}),""==e.target.value?r.setState({passwordRequired:!0}):r.setState({passwordRequired:!1}))},r.login=function(){""!=r.state.email?""!=r.state.password?r.state.emailKey||r.state.passwordKey||y.a.post("".concat("http://18.119.84.95/api/v1","/auth/login"),{email:r.state.email,password:r.state.password}).then((function(e){e.data.status>300?r.setState({serverError:!0,error:e.data.error}):(localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("token",e.data.token),r.props.saveAuthInfo(e.data.user,e.data.token),r.setState({shouldRedirect:!0}))})):r.setState({passwordRequired:!0}):r.setState({emailRequired:!0})},r}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.state.shouldRedirect?Object(r.jsx)(p.a,{to:"/"}):Object(r.jsxs)("div",{style:{marginTop:"100px",textAlign:"center"},children:[this.state.serverError?Object(r.jsx)("div",{style:{color:"red"},children:this.state.error}):null,Object(r.jsxs)("div",{style:{marginTop:"20px"},children:[Object(r.jsx)("div",{children:"email:"}),Object(r.jsx)("input",{onChange:function(t){return e.handleInput(t,"email")},type:"email"}),this.state.emailKey?Object(r.jsx)("div",{style:{color:"red"},children:"email is invalid."}):null,this.state.emailRequired?Object(r.jsx)("div",{style:{color:"red"},children:"email is required."}):null]}),Object(r.jsxs)("div",{style:{marginTop:"20px"},children:[Object(r.jsx)("div",{children:"password:"}),Object(r.jsx)("input",{onChange:function(t){return e.handleInput(t,"password")},type:"password"}),this.state.passwordKey?Object(r.jsx)("div",{style:{color:"red"},children:"password should be greater than 4 characters."}):null,this.state.passwordRequired?Object(r.jsx)("div",{style:{color:"red"},children:"password is required."}):null]}),Object(r.jsx)("div",{style:{marginTop:"20px"},children:Object(r.jsx)("button",{onClick:function(){e.login()},children:"Login"})}),Object(r.jsx)("div",{style:{marginTop:"20px"},children:Object(r.jsx)(h.b,{to:"/register",children:"not register? please register now."})})]})}}]),a}(l.Component);t.default=Object(u.b)((function(e){return{auth:e.auth}}),(function(e){return{saveAuthInfo:function(t,a){return e(Object(c.c)(t,a))}}}))(f)},85:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var r=a(17);function s(e,t){return"undefined"!=t&&"undefined"!=typeof t||(t=!1),{type:r.c,payload:{user:e,token:t}}}function n(e){return"undefined"!=e&&"undefined"!=typeof e||(e=!1),{type:r.b,payload:e}}function i(e){return"undefined"!=e&&"undefined"!=typeof e||(e=!1),{type:r.a,payload:e}}}}]);
//# sourceMappingURL=19.56e04b32.chunk.js.map