(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[18],{206:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var i=a(1),o=a(87),n=a.n(o),c=a(88),r=a(73),d=a(74),s=a(76),l=a(75),h=a(0),p=a.n(h),m=(a(37),a(3)),u=a(77),f=a.n(u),v=(a(79),a(250)),g=a(97),j=a(98),x=a(176),b=a.n(x),y=(a(99),a(100),a(206),a(90)),V=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={template:JSON.parse(localStorage.getItem("template")),videoFilePath:localStorage.getItem("videoFilePath"),videoFileName:localStorage.getItem("videoFileName"),videoWidth:localStorage.getItem("videoWidth"),videoHeight:localStorage.getItem("videoHeight"),faceVideo:localStorage.getItem("faceVideo")?JSON.parse(localStorage.getItem("faceVideo")):null,mainVideo:JSON.parse(localStorage.getItem("mainVideo")),crop:{unit:"px",width:100,height:100,x:0,y:0},shouldRedirect:!1,templateRedirect:!1,faceRedirect:!1,mainRedirect:!1,savedVideo:"",loading:!1,percent:.3,mainVideoWidth:"",mainVideoHeight:"",faceVideoWidth:"",faceVideoHeight:"",faceMarginLeftAndRight:"",faceMarginTop:"",faceMarginBottom:"",totalVideoWidth:"",totalVideoHeight:"",io:"",progress:1},i.handleCrop=function(e,t){i.setState({crop:e})},i.DataURIToBlob=function(e){for(var t=e.split(","),a=t[0].indexOf("base64")>=0?atob(t[1]):decodeURI(t[1]),i=t[0].split(":")[1].split(";")[0],o=new Uint8Array(a.length),n=0;n<a.length;n++)o[n]=a.charCodeAt(n);return new Blob([o],{type:i})},i.sendSelectedVideo=Object(c.a)(n.a.mark((function e(){var t,a,o,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.setState({loading:!0}),e.next=3,Object(y.b)("videoBase64");case 3:t=e.sent,a=i.DataURIToBlob(t),(o=new FormData).append("myfile",a,i.state.videoFileName),o.append("template",localStorage.getItem("template")),o.append("faceVideo",localStorage.getItem("faceVideo")?localStorage.getItem("faceVideo"):null),o.append("mainVideo",localStorage.getItem("mainVideo")),c={headers:{"content-type":"multipart/form-data"}},i.socket.emit("start","progressing is started..."),f.a.post("".concat("http://18.119.84.95/api/v1","/editor/thumbnail"),o,c).then((function(e){i.socket.disconnect(),i.setState({progress:100,savedVideo:e.data})})).catch((function(e){console.log(e)}));case 13:case"end":return e.stop()}}),e)}))),i.goToTemplate=function(){i.setState({templateRedirect:!0})},i.goToRedo=function(){i.state.faceVideo?i.setState({faceRedirect:!0}):i.state.faceVideo||i.setState({mainRedirect:!0})},i.setLoading=function(){i.setState({loading:!1,shouldRedirect:!0})},i.videoPlayer_2=p.a.createRef(),i.videoPlayer=p.a.createRef(),i}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.socket=b()("ws://18.119.84.95:9999"),this.socket.on("progressStatus",(function(t){e.setState({progress:t})}))}},{key:"componentDidUpdate",value:function(){100==this.state.progress&&setTimeout(this.setLoading,1e3)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;if(this.state.templateRedirect)return localStorage.removeItem("faceVideo"),localStorage.removeItem("mainVideo"),localStorage.removeItem("template"),Object(i.jsx)(m.a,{to:{pathname:"template"}});if(this.state.faceRedirect)return localStorage.removeItem("faceVideo"),localStorage.removeItem("mainVideo"),Object(i.jsx)(m.a,{to:{pathname:"face-edit"}});if(this.state.mainRedirect)return localStorage.removeItem("mainVideo"),Object(i.jsx)(m.a,{to:{pathname:"main-edit"}});var t=this.state,a=window.innerWidth/2,o=t.template.mainVideo.height/t.template.mainVideo.width,n=.3*window.innerWidth;if(t.template.gamerVideo)var c=t.template.mainVideo.height*t.template.gamerVideo.height/(t.template.mainVideo.width*t.template.gamerVideo.width),r=t.faceVideo.height/t.faceVideo.width/c,d=n*t.template.gamerVideo.width/t.faceVideo.width,s=n*t.template.gamerVideo.width,l=n*o*t.template.gamerVideo.height*r,h=t.videoWidth*d,p=t.videoHeight*d,u=t.faceVideo.y*d,f=t.faceVideo.x*d,x=h-f-s,b=p-t.faceVideo.y*d-l,y=a-(f+s/2),V=t.faceVideo.y*d;var O=n/t.mainVideo.width,w=t.videoWidth*O,S=t.videoHeight*O,k=t.mainVideo.y*O,P=t.videoWidth*O-t.mainVideo.x*O-t.mainVideo.width*O,I=t.videoHeight*O-t.mainVideo.y*O-t.mainVideo.height*O,R=t.mainVideo.x*O,F=a-(t.mainVideo.x*O+t.mainVideo.width*O/2);if("split"==t.template.name)var T=t.mainVideo.y*O+(p-l)+0;else T=t.mainVideo.y*O;"smallfacecam"!=t.template.name&&"square"!=t.template.name||(V=t.faceVideo.y*d+S*(1-t.template.gamerVideo.y));var W=n*o;return this.state.shouldRedirect?(localStorage.setItem("savedVideo",this.state.savedVideo),localStorage.setItem("displayPercentInSave",.3),Object(i.jsx)(m.a,{to:{pathname:"save"}})):Object(i.jsx)("div",{children:this.state.loading?Object(i.jsx)("div",{style:{width:"100%",justifyContent:"center"},children:Object(i.jsx)(v.a,{now:this.state.progress,label:"".concat(this.state.progress,"%"),style:{width:"100%"}})}):Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{marginBottom:"30px"},children:Object(i.jsxs)(g.a,{children:[Object(i.jsx)(j.a,{children:this.state.template&&this.state.template.gamerVideo?Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Select Facecam\xa0\xa0"}),Object(i.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]}):null}),Object(i.jsx)(j.a,{children:this.state.template&&this.state.template.mainVideo?Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Select gamefeed\xa0\xa0"}),Object(i.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]}):null}),Object(i.jsxs)(j.a,{children:[Object(i.jsx)("span",{children:"Preview\xa0\xa0"}),Object(i.jsx)("input",{type:"checkbox",checked:!0,value:1,readOnly:!0})]})]})}),Object(i.jsxs)("div",{style:{maxHeight:W,overflow:"hidden"},children:["split"==t.template.name?Object(i.jsxs)("div",{style:{display:"grid"},children:[Object(i.jsx)("video",{muted:!0,ref:this.videoPlayer,onLoadedData:function(){return e.videoPlayer.current.play()},width:h,height:p,src:this.state.videoFilePath,style:{position:"relative",clipPath:"inset(".concat(u,"px ").concat(x,"px ").concat(b,"px ").concat(f,"px)"),left:y,bottom:V}}),Object(i.jsx)("video",{muted:!0,ref:this.videoPlayer_2,onLoadedData:function(){return e.videoPlayer_2.current.play()},width:w,height:S,src:this.state.videoFilePath,style:{position:"relative",clipPath:"inset(".concat(k,"px ").concat(P,"px ").concat(I,"px ").concat(R,"px)"),left:F,bottom:T}})]}):null,"fullscreen"==t.template.name?Object(i.jsx)("video",{muted:!0,ref:this.videoPlayer_2,onLoadedData:function(){return e.videoPlayer_2.current.play()},width:w,height:S,src:this.state.videoFilePath,style:{position:"relative",clipPath:"inset(".concat(k,"px ").concat(P,"px ").concat(I,"px ").concat(R,"px)"),left:F,bottom:T}}):null,"smallfacecam"==t.template.name||"square"==t.template.name?Object(i.jsxs)("div",{style:{display:"grid"},children:[Object(i.jsx)("video",{muted:!0,ref:this.videoPlayer_2,onLoadedData:function(){return e.videoPlayer_2.current.play()},width:w,height:S,src:this.state.videoFilePath,style:{position:"relative",clipPath:"inset(".concat(k,"px ").concat(P,"px ").concat(I,"px ").concat(R,"px)"),left:F,bottom:T}}),Object(i.jsx)("video",{muted:!0,ref:this.videoPlayer,onLoadedData:function(){return e.videoPlayer.current.play()},width:h,height:p,src:this.state.videoFilePath,style:{position:"relative",clipPath:"inset(".concat(u,"px ").concat(x,"px ").concat(b,"px ").concat(f,"px)"),left:y,bottom:V}})]}):null]}),Object(i.jsxs)("div",{style:{textAlign:"center",marginTop:"30px",marginBottom:30},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:this.goToTemplate,children:"Change Template"}),Object(i.jsx)("button",{onClick:this.goToRedo,children:"Redo"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:this.sendSelectedVideo,children:"save"})})]})]})})}}]),a}(h.Component);t.default=V},90:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return p}));var i=a(87),o=a.n(i),n=a(88),c=a(112),r=Object(c.a)("keyval-store",1,{upgrade:function(e){e.createObjectStore("keyval")}});function d(e){return s.apply(this,arguments)}function s(){return(s=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r;case 2:return e.abrupt("return",e.sent.get("keyval",t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r;case 2:return e.abrupt("return",e.sent.put("keyval",a,t));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return m.apply(this,arguments)}function m(){return(m=Object(n.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r;case 2:return e.abrupt("return",e.sent.clear("keyval"));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=18.cea9d05a.chunk.js.map