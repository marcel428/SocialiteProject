(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[20],{199:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(73),r=n(74),c=n(82),i=n(76),u=n(75),l=n(0),s=n(77),d=n.n(s),p=n(15),h=n(80),f=n(83),b=n(110),j=n.n(b),O={content:{width:"50%",height:"auto",margin:"auto",marginTop:"120px"}},g=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={amount:null,modalOpen:!1},a.handleVideoUpload=function(e){e.preventDefault(),console.log("event.target.files");var t=e.target.files,n=new FormData;n.append("myfile",t[0]);d.a.post("".concat("http://18.119.84.95/api/v1","/upload"),n,{headers:{"content-type":"multipart/form-data"}}).then((function(e){a.setState({videoFilePath:"".concat("http://18.119.84.95/uploads","/uploadedVideos/").concat(e.data)})})).catch((function(e){console.log(e)}))},a.handleChange=function(e){a.setState({amount:e.target.value})},a.openModal=function(){a.state.amount>0?a.setState({modalOpen:!0}):alert("please input amount")},a.closeModal=function(){a.setState({modalOpen:!1})},a.createOrder=function(e,t){return d.a.post("".concat("http://18.119.84.95/api/v1","/paypal/create"),{orderId:Date.now(),amount:a.state.amount,description:"mechant"}).then((function(e){return console.log("res"),console.log(e),e.data.result.id}))},a.onApprove=function(e,t){var n=Object(c.a)(a);return d.a.post("".concat("http://18.119.84.95/api/v1","/paypal/capture"),{order:{id:e.orderID,userId:a.props.auth.user.id}}).then((function(e){if(e.data.balance){var t=JSON.parse(localStorage.getItem("user"));t.balance=e.data.balance,localStorage.setItem("user",JSON.stringify(t)),n.props.changeBalance(e.data.balance),n.closeModal()}return e}))},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return console.log("this.props"),console.log(this.props),Object(a.jsxs)("div",{style:{marginTop:"100px",textAlign:"center"},children:[Object(a.jsx)("div",{children:Object(a.jsx)("h3",{children:"Make a deposit"})}),Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)("span",{children:this.props.auth.user.balance}),Object(a.jsx)("span",{children:"\xa0\xa0 usd"})]}),Object(a.jsxs)("div",{style:{marginTop:"50px"},children:[Object(a.jsx)("div",{children:"amount:"}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{onChange:function(t){return e.handleChange(t)},type:"number"})})]}),Object(a.jsx)("div",{style:{marginTop:"50px"},onClick:function(){return e.openModal()},children:Object(a.jsx)("button",{children:"deposit"})}),Object(a.jsx)(j.a,{isOpen:this.state.modalOpen,onRequestClose:this.closeModal,contentLabel:"Paypal Modal",ariaHideApp:!1,style:O,children:Object(a.jsx)(f.PayPalButton,{createOrder:function(t,n){return e.createOrder(t,n)},onApprove:function(t,n){return e.onApprove(t,n)},options:{clientId:"Aegg544wO3m11jblWTgE_9xBk6erCLmdbLrrfrTFkfdniH6xrV9zMK7IvXD499YACCG3E4DliH9AQqBO"}})})]})}}]),n}(l.Component);t.default=Object(p.b)((function(e){return{auth:e.auth}}),(function(e){return{changeBalance:function(t){return e(Object(h.a)(t))}}}))(g)},80:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(16);function o(e,t){return"undefined"!=t&&"undefined"!=typeof t||(t=!1),{type:a.c,payload:{user:e,token:t}}}function r(e){return"undefined"!=e&&"undefined"!=typeof e||(e=!1),{type:a.b,payload:e}}function c(e){return"undefined"!=e&&"undefined"!=typeof e||(e=!1),{type:a.a,payload:e}}}}]);
//# sourceMappingURL=20.127ff5f7.chunk.js.map