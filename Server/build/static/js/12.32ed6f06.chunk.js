(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[12],{170:function(e,t,i){},234:function(e,t,i){"use strict";i.r(t);var a=i(1),o=i(73),c=i(74),n=i(76),s=i(75),d=i(0),r=i.n(d),l=(i(37),i(3)),h=(i(77),i(79),i(94)),u=i(95),p=i(96),v=i.n(p),j=(i(97),i(170),function(e){Object(n.a)(i,e);var t=Object(s.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={template:JSON.parse(localStorage.getItem("template")),videoFilePath:localStorage.getItem("videoFilePath"),videoWidth:localStorage.getItem("videoWidth"),videoHeight:localStorage.getItem("videoHeight"),crop:{unit:"px",width:100,height:100,aspect:1,x:0,y:0},shouldRedirect:!1,faceVideoRatio:null},a.handleCrop=function(e,t){a.setState({crop:e})},a.goToMain=function(){a.setState({shouldRedirect:!0})},a.videoPlayer=r.a.createRef(),a}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var e=this.state,t=e.videoHeight/e.videoWidth,i=e.template.mainVideo.height*e.template.gamerVideo.height/e.template.mainVideo.width,a={};i<t?(console.log("sdf"),a={unit:"px",width:e.videoWidth/3,height:e.videoWidth*i/3,aspect:1/i,x:(e.videoWidth-e.videoWidth/3)/2,y:(e.videoHeight-e.videoWidth*i/3)/2}):(console.log("wer"),a={unit:"px",width:e.videoHeight/i/3,height:e.videoHeight/3,aspect:1/i,x:(e.videoWidth-e.videoHeight/i/3)/2,y:(e.videoHeight-e.videoHeight/3)/2}),this.setState({crop:a})}},{key:"render",value:function(){var e=this;return this.state.shouldRedirect?(localStorage.setItem("faceVideo",JSON.stringify(this.state.crop)),Object(a.jsx)(l.a,{to:{pathname:"main-edit"}})):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsxs)(h.a,{children:[Object(a.jsxs)(u.a,{children:[Object(a.jsx)("span",{children:"Select Facecam\xa0\xa0"}),Object(a.jsx)("input",{type:"checkbox",checked:!0,readOnly:!0})]}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)("span",{children:"Select gamefeed\xa0\xa0"}),Object(a.jsx)("input",{type:"checkbox",value:1,disabled:"disabled"})]}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)("span",{children:"Preview\xa0\xa0"}),Object(a.jsx)("input",{type:"checkbox",value:1,disabled:"disabled"})]})]})}),Object(a.jsx)("div",{style:{textAlign:"center",paddingTop:"50px"},children:Object(a.jsx)(v.a,{crop:this.state.crop,keepSelection:!0,onChange:function(t,i){e.handleCrop(t,i)},renderComponent:b(this.state.videoFilePath,this.videoPlayer)})}),Object(a.jsx)("div",{style:{marginTop:"30px",marginBottom:"30px",textAlign:"center"},children:Object(a.jsx)("button",{onClick:this.goToMain,children:"Done"})})]})}}]),i}(d.Component));t.default=j;var b=function(e,t){return Object(a.jsx)("video",{ref:t,muted:!0,onLoadedData:function(){return t.current.play()},loop:!0,style:{display:"block",maxWidth:"100%"},onLoadStart:function(e){e.target.dispatchEvent(new Event("medialoaded",{bubbles:!0}))},children:Object(a.jsx)("source",{src:e,type:"video/mp4"})})}},94:function(e,t,i){"use strict";var a=i(2),o=i(4),c=i(72),n=i.n(c),s=i(0),d=i.n(s),r=i(71),l=["xl","lg","md","sm","xs"],h=d.a.forwardRef((function(e,t){var i=e.bsPrefix,c=e.className,s=e.noGutters,h=e.as,u=void 0===h?"div":h,p=Object(o.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(r.a)(i,"row"),j=v+"-cols",b=[];return l.forEach((function(e){var t,i=p[e];delete p[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=i&&"object"===typeof i?i.cols:i)&&b.push(""+j+a+"-"+t)})),d.a.createElement(u,Object(a.a)({ref:t},p,{className:n.a.apply(void 0,[c,v,s&&"no-gutters"].concat(b))}))}));h.displayName="Row",h.defaultProps={noGutters:!1},t.a=h},95:function(e,t,i){"use strict";var a=i(2),o=i(4),c=i(72),n=i.n(c),s=i(0),d=i.n(s),r=i(71),l=["xl","lg","md","sm","xs"],h=d.a.forwardRef((function(e,t){var i=e.bsPrefix,c=e.className,s=e.as,h=void 0===s?"div":s,u=Object(o.a)(e,["bsPrefix","className","as"]),p=Object(r.a)(i,"col"),v=[],j=[];return l.forEach((function(e){var t,i,a,o=u[e];if(delete u[e],"object"===typeof o&&null!=o){var c=o.span;t=void 0===c||c,i=o.offset,a=o.order}else t=o;var n="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+p+n:""+p+n+"-"+t),null!=a&&j.push("order"+n+"-"+a),null!=i&&j.push("offset"+n+"-"+i)})),v.length||v.push(p),d.a.createElement(h,Object(a.a)({},u,{ref:t,className:n.a.apply(void 0,[c].concat(v,j))}))}));h.displayName="Col",t.a=h}}]);
//# sourceMappingURL=12.32ed6f06.chunk.js.map