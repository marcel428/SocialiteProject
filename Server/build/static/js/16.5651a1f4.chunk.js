(this["webpackJsonpui-italy"]=this["webpackJsonpui-italy"]||[]).push([[16],{203:function(e,t,o){},204:function(e,t,o){(function(o){var a,n,i;n=[],void 0===(i="function"===typeof(a=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,o){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){r(a.response,t,o)},a.onerror=function(){console.error("could not download file")},a.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o&&o.global===o?o:void 0,c=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,t,o){var c=l.URL||l.webkitURL,r=document.createElement("a");t=t||e.name||"download",r.download=t,r.rel="noopener","string"==typeof e?(r.href=e,r.origin===location.origin?i(r):n(r.href)?a(e,t,o):i(r,r.target="_blank")):(r.href=c.createObjectURL(e),setTimeout((function(){c.revokeObjectURL(r.href)}),4e4),setTimeout((function(){i(r)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,l){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,l),o);else if(n(e))a(e,o,l);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout((function(){i(c)}))}}:function(e,t,o,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,o);var i="application/octet-stream"===e.type,r=/constructor/i.test(l.HTMLElement)||l.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&r||c)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},d.readAsDataURL(e)}else{var u=l.URL||l.webkitURL,v=u.createObjectURL(e);n?n.location=v:location.href=v,n=null,setTimeout((function(){u.revokeObjectURL(v)}),4e4)}});l.saveAs=r.saveAs=r,e.exports=r})?a.apply(t,n):a)||(e.exports=i)}).call(this,o(16))},237:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o(73),i=o(74),l=o(76),c=o(75),r=o(0),s=o.n(r),d=(o(37),o(3)),u=o(77),v=o.n(u),f=(o(79),o(231)),p=(o(96),o(97),o(203),o(204)),g=function(e){Object(l.a)(o,e);var t=Object(c.a)(o);function o(e){var a;return Object(n.a)(this,o),(a=t.call(this,e)).state={savedVideo:localStorage.getItem("savedVideo"),displayPercentInSave:localStorage.getItem("displayPercentInSave"),shouldRedirect:!1,url:null,authed:!1},a.uploadGoogleDrive=function(){v.a.get("".concat("http://18.119.84.95/api/v1","/googleDrive/upload")).then((function(e){200==e.status&&a.setState({shouldRedirect:!0})})).catch((function(e){console.log(e)}))},a.download=function(){Object(p.saveAs)("".concat("http://18.119.84.95/uploads","/editedVideos/").concat(a.state.savedVideo),a.state.savedVideo)},a.goToHome=function(){a.setState({shouldRedirect:!0})},a.videoPlayer=s.a.createRef(),a}return Object(i.a)(o,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat("http://18.119.84.95/api/v1","/googleDrive/?fileName=").concat(this.state.savedVideo)).then((function(t){200==t.status&&(console.log("res"),console.log(t),t.data.authed?e.setState({authed:!0}):e.setState({url:t.data.url,authed:!1}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return this.state.shouldRedirect?(localStorage.getItem("faceVideo")&&localStorage.removeItem("faceVideo"),localStorage.getItem("mainVideo")&&localStorage.removeItem("mainVideo"),localStorage.getItem("savedVideo")&&localStorage.removeItem("savedVideo"),localStorage.getItem("template")&&localStorage.removeItem("template"),localStorage.getItem("videoFilePath")&&localStorage.removeItem("videoFilePath"),localStorage.getItem("videoHeight")&&localStorage.removeItem("videoHeight"),localStorage.getItem("videoWidth")&&localStorage.removeItem("videoWidth"),localStorage.getItem("displayPercentInSave")&&localStorage.removeItem("displayPercentInSave"),Object(a.jsx)(d.a,{to:{pathname:"/"}})):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{display:"flex",width:"100%"},children:this.state.savedVideo?Object(a.jsx)("video",{muted:!0,playsInline:!0,ref:this.videoPlayer,onLoadedData:function(){e.videoPlayer.current.play()},style:{marginRight:"auto",marginLeft:"auto"},autoPlay:!0,controls:!0,src:"".concat("http://18.119.84.95/uploads","/editedVideos/").concat(this.state.savedVideo)}):null}),Object(a.jsx)("div",{style:{textAlign:"center",padding:"30px"},children:Object(a.jsx)("button",{onClick:this.goToHome,children:"go to home"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:this.download,children:"download"}),Object(a.jsx)(f.a,{id:"dropdown-basic-button",title:"upload",children:this.state.authed?Object(a.jsx)("button",{onClick:this.uploadGoogleDrive,children:"Google drive"}):Object(a.jsx)("a",{href:this.state.url,children:"Google drive"})})]})]})}}]),o}(r.Component);t.default=g}}]);
//# sourceMappingURL=16.5651a1f4.chunk.js.map