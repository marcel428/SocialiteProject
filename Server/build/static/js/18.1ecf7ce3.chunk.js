(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[18],{184:function(e,t,r){"use strict";r.r(t);var s=r(1),a=r(27),n=r(73),i=r(74),d=r(76),o=r(75),c=r(0),l=r(15),u=r(80),p=r(3),m=r(19),h=r(77),j=r.n(h),f=function(e){Object(d.a)(r,e);var t=Object(o.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).state={name:"",email:"",password:"",confirmPassword:"",nameKey:!1,emailKey:!1,passwordKey:!1,confirmPasswordKey:!1,nameRequired:!1,emailRequired:!1,passwordRequired:!1,confirmPasswordRequired:!1,serverError:!1,error:"",shouldRedirect:!1},s.handleInput=function(e,t){if(s.setState(Object(a.a)({},t,e.target.value)),"name"==t&&(e.target.value.length<4?s.setState({nameKey:!0}):s.setState({nameKey:!1}),""==e.target.value?s.setState({nameRequired:!0}):s.setState({nameRequired:!1})),"email"==t){!0===/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(e.target.value)?s.setState({emailKey:!1}):s.setState({emailKey:!0}),""==e.target.value?s.setState({emailRequired:!0}):s.setState({emailRequired:!1})}"password"==t&&(e.target.value.length<4?s.setState({passwordKey:!0}):s.setState({passwordKey:!1}),""==e.target.value?s.setState({passwordRequired:!0}):s.setState({passwordRequired:!1})),"confirmPassword"==t&&(e.target.value!=s.state.password?s.setState({confirmPasswordKey:!0}):s.setState({confirmPasswordKey:!1}),""==e.target.value?s.setState({confirmPasswordRequired:!0}):s.setState({confirmPasswordRequired:!1}))},s.register=function(){""!=s.state.name?""!=s.state.email?""!=s.state.password?""!=s.state.confirmPassword?s.state.nameKey||s.state.emailKey||s.state.passwordKey||s.state.confirmPasswordKey||j.a.post("".concat("http://18.222.58.119/api/v1","/auth/register"),{name:s.state.name,email:s.state.email,password:s.state.password,confirmPassword:s.state.confirmPassword}).then((function(e){e.data.status>300?s.setState({serverError:!0,error:e.data.error}):(localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("token",e.data.token),s.props.saveAuthInfo(e.data.user,e.data.token),s.setState({shouldRedirect:!0}))})):s.setState({confirmPasswordRequired:!0}):s.setState({passwordRequired:!0}):s.setState({emailRequired:!0}):s.setState({nameRequired:!0})},s}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return this.state.shouldRedirect?Object(s.jsx)(p.a,{to:"/"}):Object(s.jsxs)("div",{style:{marginTop:"100px",textAlign:"center"},children:[this.state.serverError?Object(s.jsx)("div",{style:{color:"red"},children:this.state.error}):null,Object(s.jsxs)("div",{style:{marginTop:"20px"},children:[Object(s.jsx)("div",{children:"name:"}),Object(s.jsx)("input",{onChange:function(t){return e.handleInput(t,"name")},type:"text"}),this.state.nameKey?Object(s.jsx)("div",{style:{color:"red"},children:"name should be greater than 4 characters."}):null,this.state.nameRequired?Object(s.jsx)("div",{style:{color:"red"},children:"name is required."}):null]}),Object(s.jsxs)("div",{style:{marginTop:"20px"},children:[Object(s.jsx)("div",{children:"email:"}),Object(s.jsx)("input",{onChange:function(t){return e.handleInput(t,"email")},type:"email"}),this.state.emailKey?Object(s.jsx)("div",{style:{color:"red"},children:"email is invalid."}):null,this.state.emailRequired?Object(s.jsx)("div",{style:{color:"red"},children:"email is required."}):null]}),Object(s.jsxs)("div",{style:{marginTop:"20px"},children:[Object(s.jsx)("div",{children:"password:"}),Object(s.jsx)("input",{onChange:function(t){return e.handleInput(t,"password")},type:"password"}),this.state.passwordKey?Object(s.jsx)("div",{style:{color:"red"},children:"password should be greater than 4 characters."}):null,this.state.passwordRequired?Object(s.jsx)("div",{style:{color:"red"},children:"password is required."}):null]}),Object(s.jsxs)("div",{style:{marginTop:"20px"},children:[Object(s.jsx)("div",{children:"confirm password:"}),Object(s.jsx)("input",{onChange:function(t){return e.handleInput(t,"confirmPassword")},type:"password"}),this.state.confirmPasswordKey?Object(s.jsx)("div",{style:{color:"red"},children:"password did not match."}):null,this.state.confirmPasswordRequired?Object(s.jsx)("div",{style:{color:"red"},children:"confirmed password is required."}):null]}),Object(s.jsx)("div",{style:{marginTop:"20px"},children:Object(s.jsx)("button",{onClick:function(){e.register()},children:"register"})}),Object(s.jsx)("div",{style:{marginTop:"20px"},children:Object(s.jsx)(m.b,{to:"/login",children:"go to login"})})]})}}]),r}(c.Component);t.default=Object(l.b)((function(e){return{auth:e.auth}}),(function(e){return{saveAuthInfo:function(t,r){return e(Object(u.c)(t,r))}}}))(f)},80:function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}));var s=r(16);function a(e,t){return"undefined"!=t&&"undefined"!=typeof t||(t=!1),{type:s.c,payload:{user:e,token:t}}}function n(e){return"undefined"!=e&&"undefined"!=typeof e||(e=!1),{type:s.b,payload:e}}function i(e){return"undefined"!=e&&"undefined"!=typeof e||(e=!1),{type:s.a,payload:e}}}}]);
//# sourceMappingURL=18.1ecf7ce3.chunk.js.map