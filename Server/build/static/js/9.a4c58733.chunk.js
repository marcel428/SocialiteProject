/*! For license information please see 9.a4c58733.chunk.js.LICENSE.txt */
(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[9],{142:function(e,t,o){},175:function(e,t,o){"use strict";o.r(t);var i=o(1),a=o(73),n=o(74),r=o(76),s=o(75),c=o(0),l=(o(37),o(19)),p=(o(77),o(79),o(85)),d=o(86),u=o(87),h=o.n(u),v=(o(88),o(142),function(e){Object(r.a)(o,e);var t=Object(s.a)(o);function o(e){var i;return Object(a.a)(this,o),(i=t.call(this,e)).state={template:i.props.location.query,videoFilePath:i.props.location.videoFilePath,videoWidth:i.props.location.videoWidth,videoHeight:i.props.location.videoHeight,crop:{unit:"px",width:i.props.location.query.mainVideo.width/2,height:i.props.location.query.mainVideo.height*i.props.location.query.gamerVideo.height/2,aspect:i.props.location.query.mainVideo.width/(i.props.location.query.mainVideo.height*i.props.location.query.gamerVideo.height),x:(i.props.location.videoWidth-i.props.location.query.mainVideo.width/2)/2,y:(i.props.location.videoHeight-i.props.location.query.mainVideo.height*i.props.location.query.gamerVideo.height/2)/2},shouldRedirect:!1,faceVideoRatio:null},i.handleCrop=function(e,t){i.setState({crop:e})},i}return Object(n.a)(o,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return console.log("this.props"),console.log(this.props),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsxs)(p.a,{children:[Object(i.jsxs)(d.a,{children:[Object(i.jsx)("span",{children:"Select Facecam\xa0\xa0"}),Object(i.jsx)("input",{type:"checkbox",checked:!0,readOnly:!0})]}),Object(i.jsxs)(d.a,{children:[Object(i.jsx)("span",{children:"Select gamefeed\xa0\xa0"}),Object(i.jsx)("input",{type:"checkbox",value:1,disabled:"disabled"})]}),Object(i.jsxs)(d.a,{children:[Object(i.jsx)("span",{children:"Preview\xa0\xa0"}),Object(i.jsx)("input",{type:"checkbox",value:1,disabled:"disabled"})]})]})}),Object(i.jsx)("div",{style:{textAlign:"center",paddingTop:"50px"},children:Object(i.jsx)(h.a,{crop:this.state.crop,keepSelection:!0,onChange:function(t,o){e.handleCrop(t,o)},renderComponent:f(this.props.location.videoFilePath)})}),Object(i.jsx)("div",{style:{marginTop:"30px",marginBottom:"30px",textAlign:"center"},children:Object(i.jsx)(l.b,{to:{pathname:"main-edit",query:this.props.location.query,videoFilePath:this.props.location.videoFilePath,videoWidth:this.props.location.videoWidth,videoHeight:this.props.location.videoHeight,faceVideo:this.state.crop},children:Object(i.jsx)("button",{children:"Done"})})})]})}}]),o}(c.Component));t.default=v;var f=function(e){return Object(i.jsx)("video",{autoPlay:!0,loop:!0,style:{display:"block",maxWidth:"100%"},onLoadStart:function(e){e.target.dispatchEvent(new Event("medialoaded",{bubbles:!0}))},children:Object(i.jsx)("source",{src:e,type:"video/mp4"})})}},71:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));o(2);var i=o(0),a=o.n(i),n=a.a.createContext({});n.Consumer,n.Provider;function r(e,t){var o=Object(i.useContext)(n);return e||o[t]||t}},72:function(e,t,o){var i;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var n=typeof i;if("string"===n||"number"===n)e.push(i);else if(Array.isArray(i)&&i.length){var r=a.apply(null,i);r&&e.push(r)}else if("object"===n)for(var s in i)o.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()},85:function(e,t,o){"use strict";var i=o(2),a=o(4),n=o(72),r=o.n(n),s=o(0),c=o.n(s),l=o(71),p=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var o=e.bsPrefix,n=e.className,s=e.noGutters,d=e.as,u=void 0===d?"div":d,h=Object(a.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(l.a)(o,"row"),f=v+"-cols",b=[];return p.forEach((function(e){var t,o=h[e];delete h[e];var i="xs"!==e?"-"+e:"";null!=(t=null!=o&&"object"===typeof o?o.cols:o)&&b.push(""+f+i+"-"+t)})),c.a.createElement(u,Object(i.a)({ref:t},h,{className:r.a.apply(void 0,[n,v,s&&"no-gutters"].concat(b))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},86:function(e,t,o){"use strict";var i=o(2),a=o(4),n=o(72),r=o.n(n),s=o(0),c=o.n(s),l=o(71),p=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var o=e.bsPrefix,n=e.className,s=e.as,d=void 0===s?"div":s,u=Object(a.a)(e,["bsPrefix","className","as"]),h=Object(l.a)(o,"col"),v=[],f=[];return p.forEach((function(e){var t,o,i,a=u[e];if(delete u[e],"object"===typeof a&&null!=a){var n=a.span;t=void 0===n||n,o=a.offset,i=a.order}else t=a;var r="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+h+r:""+h+r+"-"+t),null!=i&&f.push("order"+r+"-"+i),null!=o&&f.push("offset"+r+"-"+o)})),v.length||v.push(h),c.a.createElement(d,Object(i.a)({},u,{ref:t,className:r.a.apply(void 0,[n].concat(v,f))}))}));d.displayName="Col",t.a=d}}]);
//# sourceMappingURL=9.a4c58733.chunk.js.map