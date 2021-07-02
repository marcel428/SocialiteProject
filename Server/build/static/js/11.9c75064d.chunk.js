/*! For license information please see 11.9c75064d.chunk.js.LICENSE.txt */
(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[11],{241:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(73),s=n(74),i=n(76),c=n(75),o=n(0),u=n(77),l=n.n(u),p=n(94),d=n(95),h=n(15),f=(n(92),n(135),n(85)),b=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={amount:null,modalOpen:!1},a.handleChange=function(e){a.setState({amount:e.target.value})},a.openModal=function(){a.state.amount>0?a.setState({modalOpen:!0}):alert("please input amount")},a.closeModal=function(){a.setState({modalOpen:!1,membership:null})},a.selectMembership=function(e,t){t>a.props.auth.user.balance?alert("Your balance is not enough. Please deposit first!"):l.a.post("".concat("http://18.119.84.95/api/v1","/membership/change"),{userId:a.props.auth.user.id,name:e,price:t}).then((function(e){if(e.data){var t=JSON.parse(localStorage.getItem("user"));t.balance=e.data.balance,t.membership=e.data.membership,localStorage.setItem("user",JSON.stringify(t)),a.props.changeMembership(e.data.membership),a.props.changeBalance(e.data.balance)}}))},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;l.a.get("".concat("http://18.119.84.95/api/v1","/membership")).then((function(t){t.data&&e.setState({membership:t.data})}))}},{key:"render",value:function(){var e=this;return console.log("this.props"),console.log(this.props),Object(a.jsxs)("div",{style:{marginTop:"100px",textAlign:"center"},children:[Object(a.jsx)("div",{children:Object(a.jsx)("h3",{children:"Upgrade your membership"})}),Object(a.jsx)("div",{style:{marginTop:"50px",paddingLeft:"5%",paddingRight:"5%"},children:Object(a.jsx)(p.a,{children:this.state.membership&&this.state.membership.map((function(t){return Object(a.jsxs)(d.a,{style:{backgroundColor:"white",width:"90%",marginLeft:"5%",marginRight:"5%"},children:[Object(a.jsx)("div",{children:t.name}),Object(a.jsx)("div",{children:t.description}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"price:\xa0\xa0\xa0"}),Object(a.jsx)("span",{children:t.price&&t.price})]}),e.props.auth.user&&e.props.auth.user.membership==t.name?Object(a.jsxs)("div",{style:{marginTop:"50px"},children:[Object(a.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0}),Object(a.jsx)("div",{style:{color:"green"},children:"current membership"})]}):null,Object(a.jsx)("div",{style:{marginTop:"50px"},children:Object(a.jsx)("button",{onClick:function(){return e.selectMembership(t.name,t.price)},disabled:e.props.auth.user&&e.props.auth.user.membership===t.name||"free"==t.name,children:"Select"})})]},t._id)}))})})]})}}]),n}(o.Component);t.default=Object(h.b)((function(e){return{auth:e.auth}}),(function(e){return{changeMembership:function(t){return e(Object(f.b)(t))},changeBalance:function(t){return e(Object(f.a)(t))}}}))(b)},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(2);var a=n(0),r=n.n(a),s=r.a.createContext({});s.Consumer,s.Provider;function i(e,t){var n=Object(a.useContext)(s);return e||n[t]||t}},72:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===s)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},85:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n(17);function r(e,t){return"undefined"!=t&&"undefined"!=typeof t||(t=!1),{type:a.c,payload:{user:e,token:t}}}function s(e){return"undefined"!=e&&"undefined"!=typeof e||(e=!1),{type:a.b,payload:e}}function i(e){return"undefined"!=e&&"undefined"!=typeof e||(e=!1),{type:a.a,payload:e}}},94:function(e,t,n){"use strict";var a=n(2),r=n(4),s=n(72),i=n.n(s),c=n(0),o=n.n(c),u=n(71),l=["xl","lg","md","sm","xs"],p=o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,c=e.noGutters,p=e.as,d=void 0===p?"div":p,h=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(u.a)(n,"row"),b=f+"-cols",m=[];return l.forEach((function(e){var t,n=h[e];delete h[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&m.push(""+b+a+"-"+t)})),o.a.createElement(d,Object(a.a)({ref:t},h,{className:i.a.apply(void 0,[s,f,c&&"no-gutters"].concat(m))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},95:function(e,t,n){"use strict";var a=n(2),r=n(4),s=n(72),i=n.n(s),c=n(0),o=n.n(c),u=n(71),l=["xl","lg","md","sm","xs"],p=o.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,c=e.as,p=void 0===c?"div":c,d=Object(r.a)(e,["bsPrefix","className","as"]),h=Object(u.a)(n,"col"),f=[],b=[];return l.forEach((function(e){var t,n,a,r=d[e];if(delete d[e],"object"===typeof r&&null!=r){var s=r.span;t=void 0===s||s,n=r.offset,a=r.order}else t=r;var i="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+h+i:""+h+i+"-"+t),null!=a&&b.push("order"+i+"-"+a),null!=n&&b.push("offset"+i+"-"+n)})),f.length||f.push(h),o.a.createElement(p,Object(a.a)({},d,{ref:t,className:i.a.apply(void 0,[s].concat(f,b))}))}));p.displayName="Col",t.a=p}}]);
//# sourceMappingURL=11.9c75064d.chunk.js.map