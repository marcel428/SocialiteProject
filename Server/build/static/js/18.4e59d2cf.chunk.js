(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[18],{212:function(e,i,t){},246:function(e,i,t){"use strict";t.r(i);var o=t(1),d=t(73),a=t(74),n=t(76),c=t(75),h=t(0),s=(t(37),t(3)),l=t(19),r=t(77),p=t.n(r),v=(t(79),t(96)),j=t(97),u=t(187),m=t.n(u),x=(t(98),t(99),t(212),function(e){Object(n.a)(t,e);var i=Object(c.a)(t);function t(e){var o;return Object(d.a)(this,t),(o=i.call(this,e)).state={template:o.props.location.query,videoFilePath:o.props.location.videoFilePath,videoWidth:o.props.location.videoWidth,videoHeight:o.props.location.videoHeight,crop:{unit:"px",width:100,height:100,x:(o.props.location.videoWidth-100)/2,y:(o.props.location.videoHeight-100)/2},shouldRedirect:!1,savedVideo:"",loading:!1,percent:.3,mainVideoWidth:"",mainVideoHeight:"",faceVideoWidth:"",faceVideoHeight:"",faceMarginLeftAndRight:"",faceMarginTop:"",faceMarginBottom:"",totalVideoWidth:"",totalVideoHeight:""},o.handleCrop=function(e,i){o.setState({crop:e})},o.sendSelectedVideo=function(){o.setState({loading:!0}),p.a.post("".concat("http://18.119.84.95/api/v1","/editor/thumbnail"),{videoFilePath:o.props.location.videoFilePath,template:o.props.location.query,faceVideo:o.props.location.faceVideo?o.props.location.faceVideo:null,mainVideo:o.props.location.mainVideo}).then((function(e){console.log("res"),console.log(e),o.setState({loading:!1,shouldRedirect:!0,savedVideo:e.data})}))},o}return Object(a.a)(t,[{key:"componentDidMount",value:function(){this.socket=m()()}},{key:"componentWillUnmount",value:function(){console.log("unmounted"),this.socket.disconnect()}},{key:"render",value:function(){var e=this.props.location,i=window.innerWidth/2,t=e.query.mainVideo.height/e.query.mainVideo.width,d=.3*window.innerWidth;if(e.query.gamerVideo)var a=d/e.faceVideo.width,n=d,c=d*t*e.query.gamerVideo.height,h=e.videoWidth*a,r=e.videoHeight*a,p=e.faceVideo.y*a,u=e.faceVideo.x*a,m=h-u-n,x=r-e.faceVideo.y*a-c,b=i-(u+n/2),g=e.faceVideo.y*a;var V=d/e.mainVideo.width,y=e.videoWidth*V,O=e.videoHeight*V,f=e.mainVideo.y*V,w=e.videoWidth*V-e.mainVideo.x*V-e.mainVideo.width*V,W=e.videoHeight*V-e.mainVideo.y*V-e.mainVideo.height*V,P=e.mainVideo.x*V,k=i-(e.mainVideo.x*V+e.mainVideo.width*V/2);if(e.query.gamerVideo)var H=e.mainVideo.y*V+(r-c)+5;else H=e.mainVideo.y*V;var q=d*t;return this.state.shouldRedirect?Object(o.jsx)(s.a,{to:{pathname:"save",savedVideo:this.state.savedVideo,displayPercentInSave:.3}}):Object(o.jsx)("div",{children:this.state.loading?Object(o.jsx)("div",{children:"Wait a second"}):Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{style:{marginBottom:"30px"},children:Object(o.jsxs)(v.a,{children:[Object(o.jsx)(j.a,{children:this.state.template&&this.state.template.gamerVideo?Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Select Facecam\xa0\xa0"}),Object(o.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]}):null}),Object(o.jsx)(j.a,{children:this.state.template&&this.state.template.mainVideo?Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Select gamefeed\xa0\xa0"}),Object(o.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]}):null}),Object(o.jsxs)(j.a,{children:[Object(o.jsx)("span",{children:"Preview\xa0\xa0"}),Object(o.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]})]})}),Object(o.jsxs)("div",{style:{maxHeight:q,overflow:"hidden",width:"fit-content"},children:[e.query.gamerVideo?Object(o.jsx)("div",{children:Object(o.jsx)("video",{autoPlay:!0,width:h,height:r,src:this.props.location.videoFilePath,style:{position:"relative",clipPath:"inset(".concat(p,"px ").concat(m,"px ").concat(x,"px ").concat(u,"px)"),left:b,bottom:g}})}):null,Object(o.jsx)("div",{children:Object(o.jsx)("video",{autoPlay:!0,width:y,height:O,src:this.props.location.videoFilePath,style:{position:"relative",clipPath:"inset(".concat(f,"px ").concat(w,"px ").concat(W,"px ").concat(P,"px)"),left:k,bottom:H}})})]}),Object(o.jsxs)("div",{style:{textAlign:"center",marginTop:"30px",marginBottom:30},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(l.b,{to:{pathname:"/template",state:{videoFilePath:e.videoFilePath,videoWidth:e.videoWidth,videoHeight:e.videoHeight}},children:Object(o.jsx)("button",{children:"Change template"})}),Object(o.jsx)(l.b,{to:{pathname:e.query.gamerVideo?"face-edit":"main-edit",query:e.query,videoFilePath:e.videoFilePath,videoWidth:e.videoWidth,videoHeight:e.videoHeight},children:Object(o.jsx)("button",{children:"Redo"})})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:this.sendSelectedVideo,children:"save"})})]})]})})}}]),t}(h.Component));i.default=x}}]);
//# sourceMappingURL=18.4e59d2cf.chunk.js.map