(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[17],{202:function(e,t,i){},236:function(e,t,i){"use strict";i.r(t);var a=i(1),o=i(73),d=i(74),c=i(76),n=i(75),l=i(0),s=i.n(l),r=(i(37),i(3)),h=i(77),m=i.n(h),p=(i(79),i(94)),v=i(95),j=(i(172),i(96),i(97),i(202),function(e){Object(c.a)(i,e);var t=Object(n.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={template:JSON.parse(localStorage.getItem("template")),videoFilePath:localStorage.getItem("videoFilePath"),videoWidth:localStorage.getItem("videoWidth"),videoHeight:localStorage.getItem("videoHeight"),faceVideo:localStorage.getItem("faceVideo")?JSON.parse(localStorage.getItem("faceVideo")):null,mainVideo:JSON.parse(localStorage.getItem("mainVideo")),crop:{unit:"px",width:100,height:100,x:0,y:0},shouldRedirect:!1,templateRedirect:!1,faceRedirect:!1,mainRedirect:!1,savedVideo:"",loading:!1,percent:.3,mainVideoWidth:"",mainVideoHeight:"",faceVideoWidth:"",faceVideoHeight:"",faceMarginLeftAndRight:"",faceMarginTop:"",faceMarginBottom:"",totalVideoWidth:"",totalVideoHeight:""},a.handleCrop=function(e,t){a.setState({crop:e})},a.sendSelectedVideo=function(){a.setState({loading:!0}),m.a.post("".concat("http://18.119.84.95/api/v1","/editor/thumbnail"),{videoFilePath:a.state.videoFilePath,template:a.state.template,faceVideo:a.state.faceVideo?a.state.faceVideo:null,mainVideo:a.state.mainVideo}).then((function(e){console.log("res"),console.log(e),a.setState({loading:!1,shouldRedirect:!0,savedVideo:e.data})}))},a.goToTemplate=function(){a.setState({templateRedirect:!0})},a.goToRedo=function(){a.state.faceVideo?a.setState({faceRedirect:!0}):a.state.faceVideo||a.setState({mainRedirect:!0})},a.videoPlayer=s.a.createRef(),a.videoPlayer_2=s.a.createRef(),a}return Object(d.a)(i,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;if(this.state.templateRedirect)return localStorage.removeItem("faceVideo"),localStorage.removeItem("mainVideo"),Object(a.jsx)(r.a,{to:{pathname:"template"}});if(this.state.faceRedirect)return localStorage.removeItem("faceVideo"),localStorage.removeItem("mainVideo"),Object(a.jsx)(r.a,{to:{pathname:"face-edit"}});if(this.state.mainRedirect)return localStorage.removeItem("mainVideo"),Object(a.jsx)(r.a,{to:{pathname:"main-edit"}});var t=this.state,i=window.innerWidth/2,o=t.template.mainVideo.height/t.template.mainVideo.width,d=.3*window.innerWidth;if(t.template.gamerVideo)var c=d/t.faceVideo.width,n=d,l=d*o*t.template.gamerVideo.height,s=t.videoWidth*c,h=t.videoHeight*c,m=t.faceVideo.y*c,j=t.faceVideo.x*c,g=s-j-n,f=h-t.faceVideo.y*c-l,V=i-(j+n/2),u=t.faceVideo.y*c;var x=d/t.mainVideo.width,b=t.videoWidth*x,O=t.videoHeight*x,y=t.mainVideo.y*x,S=t.videoWidth*x-t.mainVideo.x*x-t.mainVideo.width*x,R=t.videoHeight*x-t.mainVideo.y*x-t.mainVideo.height*x,w=t.mainVideo.x*x,P=i-(t.mainVideo.x*x+t.mainVideo.width*x/2);if(t.template.gamerVideo)var I=t.mainVideo.y*x+(h-l)+5;else I=t.mainVideo.y*x;var k=d*o;return this.state.shouldRedirect?(localStorage.setItem("savedVideo",this.state.savedVideo),localStorage.setItem("displayPercentInSave",.3),Object(a.jsx)(r.a,{to:{pathname:"save"}})):Object(a.jsx)("div",{children:this.state.loading?Object(a.jsx)("div",{children:"Wait a second"}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{marginBottom:"30px"},children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(v.a,{children:this.state.template&&this.state.template.gamerVideo?Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Select Facecam\xa0\xa0"}),Object(a.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]}):null}),Object(a.jsx)(v.a,{children:this.state.template&&this.state.template.mainVideo?Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Select gamefeed\xa0\xa0"}),Object(a.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]}):null}),Object(a.jsxs)(v.a,{children:[Object(a.jsx)("span",{children:"Preview\xa0\xa0"}),Object(a.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]})]})}),Object(a.jsxs)("div",{style:{maxHeight:k,overflow:"hidden",width:"fit-content"},children:[t.template.gamerVideo?Object(a.jsx)("div",{children:Object(a.jsx)("video",{muted:!0,ref:this.videoPlayer,onLoadedData:function(){return e.videoPlayer.current.play()},width:s,height:h,src:this.state.videoFilePath,style:{position:"relative",clipPath:"inset(".concat(m,"px ").concat(g,"px ").concat(f,"px ").concat(j,"px)"),left:V,bottom:u}})}):null,Object(a.jsx)("div",{children:Object(a.jsx)("video",{muted:!0,ref:this.videoPlayer_2,onLoadedData:function(){return e.videoPlayer_2.current.play()},width:b,height:O,src:this.state.videoFilePath,style:{position:"relative",clipPath:"inset(".concat(y,"px ").concat(S,"px ").concat(R,"px ").concat(w,"px)"),left:P,bottom:I}})})]}),Object(a.jsxs)("div",{style:{textAlign:"center",marginTop:"30px",marginBottom:30},children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:this.goToTemplate,children:"Change Template"}),Object(a.jsx)("button",{onClick:this.goToRedo,children:"Redo"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.sendSelectedVideo,children:"save"})})]})]})})}}]),i}(l.Component));t.default=j}}]);
//# sourceMappingURL=17.6298609f.chunk.js.map