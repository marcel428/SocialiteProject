/*! For license information please see 13.632b83dc.chunk.js.LICENSE.txt */
(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[13],{100:function(e,t,n){"use strict";var a=n(2),s=n(4),r=n(72),i=n.n(r),o=n(0),l=n.n(o),c=n(73),u=["xl","lg","md","sm","xs"],p=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.noGutters,p=e.as,d=void 0===p?"div":p,f=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(c.a)(n,"row"),m=h+"-cols",g=[];return u.forEach((function(e){var t,n=f[e];delete f[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&g.push(""+m+a+"-"+t)})),l.a.createElement(d,Object(a.a)({ref:t},f,{className:i.a.apply(void 0,[r,h,o&&"no-gutters"].concat(g))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},101:function(e,t,n){"use strict";var a=n(2),s=n(4),r=n(72),i=n.n(r),o=n(0),l=n.n(o),c=n(73),u=["xl","lg","md","sm","xs"],p=l.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,p=void 0===o?"div":o,d=Object(s.a)(e,["bsPrefix","className","as"]),f=Object(c.a)(n,"col"),h=[],m=[];return u.forEach((function(e){var t,n,a,s=d[e];if(delete d[e],"object"===typeof s&&null!=s){var r=s.span;t=void 0===r||r,n=s.offset,a=s.order}else t=s;var i="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+f+i:""+f+i+"-"+t),null!=a&&m.push("order"+i+"-"+a),null!=n&&m.push("offset"+i+"-"+n)})),h.length||h.push(f),l.a.createElement(p,Object(a.a)({},d,{ref:t,className:i.a.apply(void 0,[r].concat(h,m))}))}));p.displayName="Col",t.a=p},190:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(5),r=n(74),i=n(75),o=n(77),l=n(76),c=n(0),u=(n(38),n(3)),p=n(79),d=n.n(p),f=(n(81),n(100)),h=n(101),m=n(13),g=(n(190),[]),v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={templates:[],linkKey:[],shouldRedirect:!1,selectedTmp:{}},a.getVideoSize=function(e,t){g[t]=!0,a.setState({linkKey:g})},a.goToEdit=function(e){console.log("item"),console.log(e),a.setState({shouldRedirect:!0,selectedTmp:e})},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.get("".concat("https://socialsgonewild.com/api/v1","/template")).then((function(t){console.log("res"),console.log(t),e.setState({templates:t.data})}))}},{key:"render",value:function(){var e=this;if(this.state.shouldRedirect){if(console.log("this.state"),console.log(this.state),0==this.state.selectedTmp.gamerVideo.length){var t=Object(s.a)(Object(s.a)({},this.state.selectedTmp),{},{gamerVideo:null});localStorage.setItem("template",JSON.stringify(t))}else console.log("sss"),localStorage.setItem("template",JSON.stringify(this.state.selectedTmp));return Object(a.jsx)(u.a,{to:{pathname:this.state.selectedTmp.gamerVideo&&this.state.selectedTmp.gamerVideo.length>0?"face-edit":"main-edit"}})}return Object(a.jsx)("div",{style:{paddingLeft:"5%",paddingRight:"5%",paddingTop:"50px",paddingBottom:"50px"},children:Object(a.jsx)(f.a,{children:this.state.templates&&this.state.templates?this.state.templates.map((function(t,n){return Object(a.jsxs)(h.a,{xs:"4",style:{textAlign:"center",backgroundColor:"white",marginTop:"40px"},children:[Object(a.jsx)("div",{style:{padding:"10px"},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{style:{marginRight:"10px"},children:t.name}),Object(a.jsx)("span",{style:{backgroundColor:"blue"},children:t.level})]})}),Object(a.jsx)("video",{style:{marginRight:"2%",marginLeft:"2%",display:"inline-block"},autoPlay:!0,controls:!0,width:"90%",height:"90%",src:"".concat("https://socialsgonewild.com/uploads","/template/").concat(t.exampleVideo),onLoadedMetadata:function(t){e.getVideoSize(t,n)}}),Object(a.jsx)("div",{children:t.description}),e.state.linkKey[n]?Object(a.jsx)("div",{style:{textAlign:"center"},children:Object(a.jsx)("button",{onClick:function(){return e.goToEdit(t)},children:"Select Template"})}):null]},t._id)})):null})})}}]),n}(c.Component);t.default=Object(m.b)((function(e){return{auth:e.auth}}))(v)},72:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=s.apply(null,a);i&&e.push(i)}else if("object"===r)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(2);var a=n(0),s=n.n(a),r=s.a.createContext({});r.Consumer,r.Provider;function i(e,t){var n=Object(a.useContext)(r);return e||n[t]||t}},81:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0);function s(e,t,n){var s=[];return e.forEach((function(e){if("string"===typeof e){var r=new RegExp("\\{"+n+"\\}","gi");if("string"===typeof t||"number"===typeof t)s.push(e.replace(r,""+t));else{var i=e.split(r);i.forEach((function(e,n){e&&function(e){var t=[],n=!1,s=!1;return e.match(/^\s+/gi)&&(e=e.replace(/^\s+/gi,""),n=!0),e.match(/\s+$/gi)&&(e=e.replace(/\s+$/gi,""),s=!0),n&&t.push(a.createElement(a.Fragment,null,"\xa0")),t.push(e),s&&t.push(a.createElement(a.Fragment,null,"\xa0")),t}(e).forEach((function(e){return s.push(e)})),n+1<i.length&&s.push(t)}))}}else s.push(e)})),s}t.WhiteSpaceChar="&nbsp;",t.format=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=[e];return t.forEach((function(e,t){r=s(r,e,t)})),0===r.length?"":1===r.length&&"string"===typeof r[0]?r[0]:a.createElement(a.Fragment,null,r.map((function(e,t){return a.createElement(a.Fragment,{key:t},e)})))}}}]);
//# sourceMappingURL=13.632b83dc.chunk.js.map