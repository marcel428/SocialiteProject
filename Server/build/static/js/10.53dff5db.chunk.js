/*! For license information please see 10.53dff5db.chunk.js.LICENSE.txt */
(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[10],{184:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(73),s=n(74),i=n(76),o=n(75),l=n(0),c=(n(37),n(19)),u=n(77),p=n.n(u),d=(n(79),n(96)),f=n(97),h=(n(184),[]),v=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={templates:[],linkKey:[]},a.getVideoSize=function(e,t){h[t]=!0,a.setState({linkKey:h})},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("".concat("http://18.119.84.95/api/v1","/template")).then((function(t){console.log("res"),console.log(t),e.setState({templates:t.data})}))}},{key:"render",value:function(){var e=this;return console.log("this.props"),console.log(this.props),console.log("this.state"),console.log(this.state),Object(a.jsx)("div",{style:{paddingLeft:"5%",paddingRight:"5%",paddingTop:"50px",paddingBottom:"50px"},children:Object(a.jsx)(d.a,{children:this.state.templates&&this.state.templates?this.state.templates.map((function(t,n){return Object(a.jsxs)(f.a,{xs:"4",style:{textAlign:"center",backgroundColor:"white"},children:[Object(a.jsx)("div",{style:{padding:"10px"},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{style:{marginRight:"10px"},children:t.name}),Object(a.jsx)("span",{style:{backgroundColor:"blue"},children:t.level})]})}),Object(a.jsx)("video",{style:{marginRight:"2%",marginLeft:"2%",display:"inline-block"},autoPlay:!0,controls:!0,width:"90%",height:"90%",src:"".concat("http://18.119.84.95/uploads","/template/").concat(t.exampleVideo),onLoadedMetadata:function(t){e.getVideoSize(t,n)}}),Object(a.jsx)("div",{children:t.description}),e.state.linkKey[n]?Object(a.jsx)("div",{style:{textAlign:"center"},children:Object(a.jsx)(c.b,{to:{pathname:t.gamerVideo?"face-edit":"main-edit",query:t,videoFilePath:e.props.location.state.videoFilePath,videoWidth:e.props.location.state.videoWidth,videoHeight:e.props.location.state.videoHeight},children:Object(a.jsx)("button",{children:"Select Template"})})}):null]},t._id)})):null})})}}]),n}(l.Component);t.default=v},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(2);var a=n(0),r=n.n(a),s=r.a.createContext({});s.Consumer,s.Provider;function i(e,t){var n=Object(a.useContext)(s);return e||n[t]||t}},72:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===s)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);function r(e,t,n){var r=[];return e.forEach((function(e){if("string"===typeof e){var s=new RegExp("\\{"+n+"\\}","gi");if("string"===typeof t||"number"===typeof t)r.push(e.replace(s,""+t));else{var i=e.split(s);i.forEach((function(e,n){e&&function(e){var t=[],n=!1,r=!1;return e.match(/^\s+/gi)&&(e=e.replace(/^\s+/gi,""),n=!0),e.match(/\s+$/gi)&&(e=e.replace(/\s+$/gi,""),r=!0),n&&t.push(a.createElement(a.Fragment,null,"\xa0")),t.push(e),r&&t.push(a.createElement(a.Fragment,null,"\xa0")),t}(e).forEach((function(e){return r.push(e)})),n+1<i.length&&r.push(t)}))}}else r.push(e)})),r}t.WhiteSpaceChar="&nbsp;",t.format=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var s=[e];return t.forEach((function(e,t){s=r(s,e,t)})),0===s.length?"":1===s.length&&"string"===typeof s[0]?s[0]:a.createElement(a.Fragment,null,s.map((function(e,t){return a.createElement(a.Fragment,{key:t},e)})))}},96:function(e,t,n){"use strict";var a=n(2),r=n(4),s=n(72),i=n.n(s),o=n(0),l=n.n(o),c=n(71),u=["xl","lg","md","sm","xs"],p=l.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,o=e.noGutters,p=e.as,d=void 0===p?"div":p,f=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(c.a)(n,"row"),v=h+"-cols",g=[];return u.forEach((function(e){var t,n=f[e];delete f[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&g.push(""+v+a+"-"+t)})),l.a.createElement(d,Object(a.a)({ref:t},f,{className:i.a.apply(void 0,[s,h,o&&"no-gutters"].concat(g))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},97:function(e,t,n){"use strict";var a=n(2),r=n(4),s=n(72),i=n.n(s),o=n(0),l=n.n(o),c=n(71),u=["xl","lg","md","sm","xs"],p=l.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,o=e.as,p=void 0===o?"div":o,d=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(c.a)(n,"col"),h=[],v=[];return u.forEach((function(e){var t,n,a,r=d[e];if(delete d[e],"object"===typeof r&&null!=r){var s=r.span;t=void 0===s||s,n=r.offset,a=r.order}else t=r;var i="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+f+i:""+f+i+"-"+t),null!=a&&v.push("order"+i+"-"+a),null!=n&&v.push("offset"+i+"-"+n)})),h.length||h.push(f),l.a.createElement(p,Object(a.a)({},d,{ref:t,className:i.a.apply(void 0,[s].concat(h,v))}))}));p.displayName="Col",t.a=p}}]);
//# sourceMappingURL=10.53dff5db.chunk.js.map