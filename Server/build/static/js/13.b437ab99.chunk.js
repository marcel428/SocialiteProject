(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[13],{170:function(e,t,i){},235:function(e,t,i){"use strict";i.r(t);var a=i(1),o=i(73),c=i(74),n=i(76),s=i(75),l=i(0),d=i.n(l),r=(i(37),i(3)),h=(i(77),i(79),i(94)),p=i(95),u=i(96),v=i.n(u),j=(i(97),i(170),function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={template:JSON.parse(localStorage.getItem("template")),videoFilePath:localStorage.getItem("videoFilePath"),videoWidth:localStorage.getItem("videoWidth"),videoHeight:localStorage.getItem("videoHeight"),faceVideo:localStorage.getItem("faceVideo")?JSON.parse(localStorage.getItem("faceVideo")):null,crop:{unit:"px",width:50,height:50,aspect:1,x:0,y:0},shouldRedirect:!1,previewVideo:"",loading:!1},a.handleCrop=function(e,t){a.setState({crop:e})},a.goToPreview=function(){a.setState({shouldRedirect:!0})},a.videoPlayer=d.a.createRef(),a}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=this.state,t=e.videoHeight/e.videoWidth;if("split"==e.template.name)var i=e.template.mainVideo.height*(1-e.template.gamerVideo.height)/e.template.mainVideo.width;else i=e.template.mainVideo.height/e.template.mainVideo.width;var a={};i<t?(console.log("sdf"),a={unit:"px",width:e.videoWidth/3,height:e.videoWidth*i/3,aspect:1/i,x:(e.videoWidth-e.videoWidth/3)/2,y:(e.videoHeight-e.videoWidth*i/3)/2}):(console.log("wer"),a={unit:"px",width:e.videoHeight/i/3,height:e.videoHeight/3,aspect:1/i,x:(e.videoWidth-e.videoHeight/i/3)/2,y:(e.videoHeight-e.videoHeight/3)/2}),this.setState({crop:a})}},{key:"render",value:function(){var e=this;return this.state.shouldRedirect?(localStorage.setItem("mainVideo",JSON.stringify(this.state.crop)),Object(a.jsx)(r.a,{to:{pathname:"preview"}})):Object(a.jsx)("div",{children:this.state.loading?Object(a.jsx)("div",{style:{marginTop:"100px",textAlign:"center"},children:Object(a.jsx)("h5",{children:"Wait a second..."})}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(p.a,{children:this.state.template&&this.state.template.gamerVideo?Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Select Facecam\xa0\xa0"}),Object(a.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]}):null}),Object(a.jsx)(p.a,{children:this.state.template&&this.state.template.mainVideo?Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Select gamefeed\xa0\xa0"}),Object(a.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]}):null}),Object(a.jsxs)(p.a,{children:[Object(a.jsx)("span",{children:"Preview\xa0\xa0"}),Object(a.jsx)("input",{type:"checkbox",defaultChecked:!1})]})]})}),Object(a.jsx)("div",{style:{textAlign:"center",paddingTop:"50px"},children:Object(a.jsx)(v.a,{crop:this.state.crop,keepSelection:!0,onChange:function(t,i){e.handleCrop(t,i)},renderComponent:m(this.state.videoFilePath,this.videoPlayer)})}),Object(a.jsx)("div",{style:{marginTop:"30px",marginBottom:"30px",textAlign:"center"},children:Object(a.jsx)("button",{onClick:this.goToPreview,children:"Preview"})})]})})}}]),i}(l.Component));t.default=j;var m=function(e,t){return Object(a.jsx)("video",{ref:t,onLoadedData:function(){return t.current.play()},muted:!0,loop:!0,style:{display:"block",maxWidth:"100%"},onLoadStart:function(e){e.target.dispatchEvent(new Event("medialoaded",{bubbles:!0}))},children:Object(a.jsx)("source",{src:e,type:"video/mp4"})})}},94:function(e,t,i){"use strict";var a=i(2),o=i(4),c=i(72),n=i.n(c),s=i(0),l=i.n(s),d=i(71),r=["xl","lg","md","sm","xs"],h=l.a.forwardRef((function(e,t){var i=e.bsPrefix,c=e.className,s=e.noGutters,h=e.as,p=void 0===h?"div":h,u=Object(o.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(d.a)(i,"row"),j=v+"-cols",m=[];return r.forEach((function(e){var t,i=u[e];delete u[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=i&&"object"===typeof i?i.cols:i)&&m.push(""+j+a+"-"+t)})),l.a.createElement(p,Object(a.a)({ref:t},u,{className:n.a.apply(void 0,[c,v,s&&"no-gutters"].concat(m))}))}));h.displayName="Row",h.defaultProps={noGutters:!1},t.a=h},95:function(e,t,i){"use strict";var a=i(2),o=i(4),c=i(72),n=i.n(c),s=i(0),l=i.n(s),d=i(71),r=["xl","lg","md","sm","xs"],h=l.a.forwardRef((function(e,t){var i=e.bsPrefix,c=e.className,s=e.as,h=void 0===s?"div":s,p=Object(o.a)(e,["bsPrefix","className","as"]),u=Object(d.a)(i,"col"),v=[],j=[];return r.forEach((function(e){var t,i,a,o=p[e];if(delete p[e],"object"===typeof o&&null!=o){var c=o.span;t=void 0===c||c,i=o.offset,a=o.order}else t=o;var n="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+u+n:""+u+n+"-"+t),null!=a&&j.push("order"+n+"-"+a),null!=i&&j.push("offset"+n+"-"+i)})),v.length||v.push(u),l.a.createElement(h,Object(a.a)({},p,{ref:t,className:n.a.apply(void 0,[c].concat(v,j))}))}));h.displayName="Col",t.a=h}}]);
//# sourceMappingURL=13.b437ab99.chunk.js.map