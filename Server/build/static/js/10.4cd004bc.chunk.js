/*! For license information please see 10.4cd004bc.chunk.js.LICENSE.txt */
(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[10],{143:function(e,t,o){},176:function(e,t,o){"use strict";o.r(t);var i=o(1),n=o(73),a=o(74),r=o(76),s=o(75),c=o(0),l=(o(37),o(19)),p=o(77),d=o.n(p),h=(o(79),o(85)),u=o(86),f=o(87),j=o.n(f),v=(o(88),o(143),function(e){Object(r.a)(o,e);var t=Object(s.a)(o);function o(e){var i;return Object(n.a)(this,o),(i=t.call(this,e)).state={template:i.props.location.query,videoFilePath:i.props.location.videoFilePath,videoWidth:i.props.location.videoWidth,videoHeight:i.props.location.videoHeight,crop:{unit:"px",width:i.props.location.query.mainVideo.width/2,height:i.props.location.query.mainVideo.height*(1-(i.props.location.faceVideo?i.props.location.query.gamerVideo.height:0))/2,aspect:i.props.location.query.mainVideo.width/(i.props.location.query.mainVideo.height*(1-(i.props.location.faceVideo?i.props.location.query.gamerVideo.height:0))),x:(i.props.location.videoWidth-i.props.location.query.mainVideo.width/2)/2,y:i.props.location.query.mainVideo.height*(1-(i.props.location.faceVideo?i.props.location.query.gamerVideo.height:0))/2/2},shouldRedirect:!1,previewVideo:"",loading:!1},i.handleCrop=function(e,t){i.setState({crop:e})},i}return Object(a.a)(o,[{key:"componentDidMount",value:function(){d.a.interceptors.request.use((function(e){return console.log("Start Ajax Call"),e}),(function(e){return console.log("Error"),Promise.reject(e)})),d.a.interceptors.response.use((function(e){return console.log("Done with Ajax call"),e}),(function(e){return console.log("Error fetching the data"),Promise.reject(e)}))}},{key:"render",value:function(){var e=this;return console.log("this.props"),console.log(this.props),console.log("this.state"),console.log(this.state),console.log("this.props.location.faceVideo"),console.log(this.props.location.faceVideo?this.props.location.query.gamerVideo.height:0),Object(i.jsx)("div",{children:this.state.loading?Object(i.jsx)("div",{style:{marginTop:"100px",textAlign:"center"},children:Object(i.jsx)("h5",{children:"Wait a second..."})}):Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsxs)(h.a,{children:[Object(i.jsx)(u.a,{children:this.state.template&&this.state.template.gamerVideo?Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Select Facecam\xa0\xa0"}),Object(i.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]}):null}),Object(i.jsx)(u.a,{children:this.state.template&&this.state.template.mainVideo?Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Select gamefeed\xa0\xa0"}),Object(i.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]}):null}),Object(i.jsxs)(u.a,{children:[Object(i.jsx)("span",{children:"Preview\xa0\xa0"}),Object(i.jsx)("input",{type:"checkbox",defaultChecked:!1})]})]})}),Object(i.jsx)("div",{style:{textAlign:"center",paddingTop:"50px"},children:Object(i.jsx)(j.a,{crop:this.state.crop,keepSelection:!0,onChange:function(t,o){e.handleCrop(t,o)},renderComponent:b(this.props.location.videoFilePath)})}),Object(i.jsx)("div",{style:{marginTop:"30px",marginBottom:"30px",textAlign:"center"},children:Object(i.jsx)(l.b,{to:{pathname:"preview",videoFilePath:this.props.location.videoFilePath,query:this.props.location.query,faceVideo:this.props.location.faceVideo?this.props.location.faceVideo:null,mainVideo:this.state.crop,videoWidth:this.props.location.videoWidth,videoHeight:this.props.location.videoHeight},children:Object(i.jsx)("button",{children:"Preview"})})})]})})}}]),o}(c.Component));t.default=v;var b=function(e){return Object(i.jsx)("video",{autoPlay:!0,loop:!0,style:{display:"block",maxWidth:"100%"},onLoadStart:function(e){e.target.dispatchEvent(new Event("medialoaded",{bubbles:!0}))},children:Object(i.jsx)("source",{src:e,type:"video/mp4"})})}},71:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));o(2);var i=o(0),n=o.n(i),a=n.a.createContext({});a.Consumer,a.Provider;function r(e,t){var o=Object(i.useContext)(a);return e||o[t]||t}},72:function(e,t,o){var i;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)&&i.length){var r=n.apply(null,i);r&&e.push(r)}else if("object"===a)for(var s in i)o.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},85:function(e,t,o){"use strict";var i=o(2),n=o(4),a=o(72),r=o.n(a),s=o(0),c=o.n(s),l=o(71),p=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var o=e.bsPrefix,a=e.className,s=e.noGutters,d=e.as,h=void 0===d?"div":d,u=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(l.a)(o,"row"),j=f+"-cols",v=[];return p.forEach((function(e){var t,o=u[e];delete u[e];var i="xs"!==e?"-"+e:"";null!=(t=null!=o&&"object"===typeof o?o.cols:o)&&v.push(""+j+i+"-"+t)})),c.a.createElement(h,Object(i.a)({ref:t},u,{className:r.a.apply(void 0,[a,f,s&&"no-gutters"].concat(v))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},86:function(e,t,o){"use strict";var i=o(2),n=o(4),a=o(72),r=o.n(a),s=o(0),c=o.n(s),l=o(71),p=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var o=e.bsPrefix,a=e.className,s=e.as,d=void 0===s?"div":s,h=Object(n.a)(e,["bsPrefix","className","as"]),u=Object(l.a)(o,"col"),f=[],j=[];return p.forEach((function(e){var t,o,i,n=h[e];if(delete h[e],"object"===typeof n&&null!=n){var a=n.span;t=void 0===a||a,o=n.offset,i=n.order}else t=n;var r="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+u+r:""+u+r+"-"+t),null!=i&&j.push("order"+r+"-"+i),null!=o&&j.push("offset"+r+"-"+o)})),f.length||f.push(u),c.a.createElement(d,Object(i.a)({},h,{ref:t,className:r.a.apply(void 0,[a].concat(f,j))}))}));d.displayName="Col",t.a=d}}]);
//# sourceMappingURL=10.4cd004bc.chunk.js.map