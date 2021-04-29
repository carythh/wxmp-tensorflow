"use strict";var e=require("../../chunks/three-platformize.js"),t=require("../../chunks/tfjs.js");class n{__init(){this.enable=!0}constructor(e){this.consumer=e,n.prototype.__init.call(this)}onFrame(e){this.currFrame=e,this.currFrameReachTime=Date.now(),this.processFrame()}async processFrame(){if(!this.enable||this.processing)return;const e=this.currFrame;this.processing=!0;try{await this.consumer(e),this.processing=!1}catch(e){console.error(e),this.enable=!1}}}class r{constructor(e,t){this.parts=e,this.options=t}}for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=new Uint8Array(256),a=0;a<s.length;a++)o[s.charCodeAt(a)]=a;class i{createObjectURL(e){if(e instanceof r){const t=function(e){for(var t,n="",r=new Uint8Array(e),o=r.byteLength,a=o%3,i=o-a,c=0;c<i;c+=3)t=r[c]<<16|r[c+1]<<8|r[c+2],n+=s[(16515072&t)>>18]+s[(258048&t)>>12]+s[(4032&t)>>6]+s[63&t];return 1==a?(t=r[i],n+=s[(252&t)>>2]+s[(3&t)<<4]+"=="):2==a&&(t=r[i]<<8|r[i+1],n+=s[(64512&t)>>10]+s[(1008&t)>>4]+s[(15&t)<<2]+"="),n}(e.parts[0]);return`data:${e.options.type};base64,${t}`}return""}revokeObjectURL(){}}function c(e){if((e=(e=`${e}`).replace(/[ \t\n\f\r]/g,"")).length%4==0&&(e=e.replace(/==?$/,"")),e.length%4==1||/[^+/0-9A-Za-z]/.test(e))return null;let t="",n=0,r=0;for(let s=0;s<e.length;s++)n<<=6,n|=l(e[s]),r+=6,24===r&&(t+=String.fromCharCode((16711680&n)>>16),t+=String.fromCharCode((65280&n)>>8),t+=String.fromCharCode(255&n),n=r=0);return 12===r?(n>>=4,t+=String.fromCharCode(n)):18===r&&(n>>=2,t+=String.fromCharCode((65280&n)>>8),t+=String.fromCharCode(255&n)),t}function l(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e);return t<0?void 0:t}const h=new WeakMap;class d{constructor(e){this.identifier=e.identifier,this.force=void 0===e.force?1:e.force,this.pageX=void 0===e.pageX?e.x:e.pageX,this.pageY=void 0===e.pageY?e.y:e.pageY,this.clientX=void 0===e.clientX?e.x:e.clientX,this.clientY=void 0===e.clientY?e.y:e.clientY,this.screenX=this.pageX,this.screenY=this.pageY}}class u{constructor(){h.set(this,{})}addEventListener(e,t,n={}){let r=h.get(this);r||(r={},h.set(this,r)),r[e]||(r[e]=[]),r[e].push(t),n.capture,n.once,n.passive}removeEventListener(e,t){const n=h.get(this);if(n){const r=n[e];if(r&&r.length>0)for(let e=r.length;e--;e>0)if(r[e]===t){r.splice(e,1);break}}}dispatchEvent(e={}){"function"!=typeof e.preventDefault&&(e.preventDefault=()=>{}),"function"!=typeof e.stopPropagation&&(e.stopPropagation=()=>{});const t=h.get(this);if(t){const n=t[e.type];if(n)for(let t=0;t<n.length;t++)n[t](e)}}}const f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e,t={}){t.target=t.target||this,"function"==typeof this[`on${e}`]&&this[`on${e}`].call(this,t)}function w(e,t={}){this.readyState=e,t.readyState=e,m.call(this,"readystatechange",t)}const{platform:v}=wx.getSystemInfoSync();class y extends u{constructor(){super(),this.onabort=null,this.onerror=null,this.onload=null,this.onloadstart=null,this.onprogress=null,this.ontimeout=null,this.onloadend=null,this.onreadystatechange=null,this.readyState=0,this.response=null,this.responseText=null,this.responseType="text",this.dataType="string",this.responseXML=null,this.status=0,this.statusText="",this.upload={},this.withCredentials=!1,f.set(this,{"content-type":"application/x-www-form-urlencoded"}),p.set(this,{})}abort(){const e=g.get(this);e&&e.abort()}getAllResponseHeaders(){const e=p.get(this);return Object.keys(e).map((t=>`${t}: ${e[t]}`)).join("\n")}getResponseHeader(e){return p.get(this)[e]}open(e,t){this._method=e,this._url=t,w.call(this,y.OPENED)}overrideMimeType(){}send(e=""){if(this.readyState!==y.OPENED)throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");{const n=this._url,r=f.get(this),s=this.responseType,o=this.dataType,a=function(e){return!/^(http|https|ftp|wxfile):\/\/.*/i.test(e)}(n);let i;"arraybuffer"===s||(i="utf8"),delete this.response,this.response=null;let c=!1;const l=({data:e,statusCode:t,header:n})=>{if(!c){if(c=!0,t=void 0===t?200:t,"string"!=typeof e&&!(e instanceof ArrayBuffer))try{e=JSON.stringify(e)}catch(e){}this.status=t,n&&p.set(this,n),m.call(this,"loadstart"),w.call(this,y.HEADERS_RECEIVED),w.call(this,y.LOADING),this.response=e,e instanceof ArrayBuffer?Object.defineProperty(this,"responseText",{enumerable:!0,configurable:!0,get:function(){throw"InvalidStateError : responseType is "+this.responseType}}):this.responseText=e,w.call(this,y.DONE),m.call(this,"load"),m.call(this,"loadend")}},h=({errMsg:e})=>{-1!==e.indexOf("abort")?m.call(this,"abort"):m.call(this,"error",{message:e}),m.call(this,"loadend"),a&&console.warn(e)};if(a){const e=wx.getFileSystemManager();var t={filePath:n,success:l,fail:h};return i&&(t.encoding=i),void e.readFile(t)}const d="arraybuffer"===s&&"ios"===v&&y.useFetchPatch;wx.request({data:e,url:n,method:this._method,header:r,dataType:o,responseType:s,enableCache:!1,success:l,fail:h}),d&&setTimeout((function(){wx.request({data:e,url:n,method:this._method,header:r,dataType:o,responseType:s,enableCache:!0,success:l,fail:h})}),y.fetchPatchDelay)}}setRequestHeader(e,t){const n=f.get(this);n[e]=t,f.set(this,n)}addEventListener(e,t){"function"==typeof t&&(this["on"+e]=(e={})=>{e.target=e.target||this,t.call(this,e)})}removeEventListener(e,t){this["on"+e]===t&&(this["on"+e]=null)}}function b(e){return e=(e=e.trim()).replace(/<!--[\s\S]*?-->/g,""),{declaration:t(),root:n()};function t(){if(!s(/^<\?xml\s*/))return;const e={attributes:{}};for(;!o()&&!a("?>");){const t=r();if(!t)return e;e.attributes[t.name]=t.value}return s(/\?>\s*/),s(/<!DOCTYPE[^>]*>\s/),e}function n(){const e=s(/^<([\w-:.]+)\s*/);if(!e)return;const t={name:e[1],attributes:{},children:[]};for(;!(o()||a(">")||a("?>")||a("/>"));){const e=r();if(!e)return t;t.attributes[e.name]=e.value}if(s(/^\s*\/>\s*/))return t;let i;for(s(/\??>\s*/),t.content=function(){const e=s(/^([^<]*)/);return e?e[1]:""}();i=n();)t.children.push(i);return s(/^<\/[\w-:.]+>\s*/),t}function r(){const e=s(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);var t;if(e)return{name:e[1],value:(t=e[2],t.replace(/^['"]|['"]$/g,""))}}function s(t){const n=e.match(t);if(n)return e=e.slice(n[0].length),n}function o(){return 0==e.length}function a(t){return 0==e.indexOf(t)}}function C(e,t){t(e),e.children.forEach((e=>C(e,t)))}y.UNSEND=0,y.OPENED=1,y.HEADERS_RECEIVED=2,y.LOADING=3,y.DONE=4,y.useFetchPatch=!1,y.fetchPatchDelay=200;class x{parseFromString(e){const t=b(e),n={hasAttribute(e){return void 0!==this.attributes[e]},getAttribute(e){return this.attributes[e]},getElementsByTagName(e){const t=[];return this.childNodes.forEach((n=>C(n,(n=>e===n.name&&t.push(n))))),t}};C(t.root,(e=>{e.nodeType=1,e.nodeName=e.name,e.style=new Proxy((e.attributes.style||"").split(";").reduce(((e,t)=>{if(t){let[n,r]=t.split(":");e[n.trim()]=r.trim()}return e}),{}),{get:(e,t)=>e[t]||""}),e.textContent=e.content,e.childNodes=e.children,e.__proto__=n}));const r={documentElement:t.root,childNodes:[t.root]};return r.__proto__=n,r}}class E{decode(e){let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(e){return t}}}function D(){return wx.createOffscreenCanvas()}class O{constructor(e,t,n){const r=wx.getSystemInfoSync(),s="android"===r.platform;this.canvas=e,this.canvasW=void 0===t?e.width:t,this.canvasH=void 0===n?e.height:n,this.document={createElementNS:(t,n)=>"canvas"===n?e:"img"===n?e.createImage():void 0},this.window={innerWidth:r.windowWidth,innerHeight:r.windowHeight,devicePixelRatio:r.pixelRatio,URL:new i,AudioContext:function(){},requestAnimationFrame:this.canvas.requestAnimationFrame,cancelAnimationFrame:this.canvas.cancelAnimationFrame,DeviceOrientationEvent:{requestPermission:()=>Promise.resolve("granted")},DOMParser:x,TextDecoder:E},[this.canvas,this.document,this.window].forEach((e=>{const t=e.__proto__;e.__proto__={},e.__proto__.__proto__=t,function(e,t){for(let n of Object.getOwnPropertyNames(t))if("constructor"!==n&&"prototype"!==n&&"name"!==n){let r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r)}}(e.__proto__,u.prototype)})),this.patchCanvas(),this.onDeviceMotionChange=e=>{e.type="deviceorientation",s&&(e.alpha*=-1,e.beta*=-1,e.gamma*=-1),this.window.dispatchEvent(e)}}patchCanvas(){const{canvasH:e,canvasW:t}=this;Object.defineProperty(this.canvas,"style",{get(){return{width:this.width+"px",height:this.height+"px"}}}),Object.defineProperty(this.canvas,"clientHeight",{get(){return e||this.height}}),Object.defineProperty(this.canvas,"clientWidth",{get(){return t||this.width}}),this.canvas.ownerDocument=this.document}patchXHR(){return y.useFetchPatch=!0,this}getGlobals(){return{atob:c,Blob:r,window:this.window,document:this.document,HTMLCanvasElement:void 0,XMLHttpRequest:y,OffscreenCanvas:D,createImageBitmap:void 0}}enableDeviceOrientation(e){return new Promise(((t,n)=>{wx.onDeviceMotionChange(this.onDeviceMotionChange),wx.startDeviceMotionListening({interval:e,success:e=>{t(e),this.enabledDeviceMotion=!0},fail:n})}))}disableDeviceOrientation(){return new Promise(((e,t)=>{wx.offDeviceMotionChange(this.onDeviceMotionChange),this.enabledDeviceMotion&&wx.stopDeviceMotionListening({success:()=>{e(),this.enabledDeviceMotion=!1},fail:t})}))}dispatchTouchEvent(e={}){const t={...this},n={changedTouches:e.changedTouches.map((e=>new d(e))),touches:e.touches.map((e=>new d(e))),targetTouches:Array.prototype.slice.call(e.touches.map((e=>new d(e)))),timeStamp:e.timeStamp,target:t,currentTarget:t,type:e.type,cancelBubble:!1,cancelable:!1};this.canvas.dispatchEvent(n)}dispose(){this.disableDeviceOrientation(),this.canvas.width=0,this.canvas.height=0,this.canvas&&(this.canvas.ownerDocument=null),this.onDeviceMotionChange=null,this.document=null,this.window=null,this.canvas=null}}function P(e,t){return new Promise((n=>{wx.createSelectorQuery().in(t).select(e).fields({node:!0,rect:!0}).exec(n)}))}function A(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e);return t<0?void 0:t}function T(e){if(e>=0&&e<64)return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e]}var S={atob:function(e){if((e=(e=`${e}`).replace(/[ \t\n\f\r]/g,"")).length%4==0&&(e=e.replace(/==?$/,"")),e.length%4==1||/[^+/0-9A-Za-z]/.test(e))return null;let t="",n=0,r=0;for(let s=0;s<e.length;s++)n<<=6,n|=A(e[s]),r+=6,24===r&&(t+=String.fromCharCode((16711680&n)>>16),t+=String.fromCharCode((65280&n)>>8),t+=String.fromCharCode(255&n),n=r=0);return 12===r?(n>>=4,t+=String.fromCharCode(n)):18===r&&(n>>=2,t+=String.fromCharCode((65280&n)>>8),t+=String.fromCharCode(255&n)),t},btoa:function(e){let t;for(e=`${e}`,t=0;t<e.length;t++)if(e.charCodeAt(t)>255)return null;let n="";for(t=0;t<e.length;t+=3){const r=[void 0,void 0,void 0,void 0];r[0]=e.charCodeAt(t)>>2,r[1]=(3&e.charCodeAt(t))<<4,e.length>t+1&&(r[1]|=e.charCodeAt(t+1)>>4,r[2]=(15&e.charCodeAt(t+1))<<2),e.length>t+2&&(r[2]|=e.charCodeAt(t+2)>>6,r[3]=63&e.charCodeAt(t+2));for(let e=0;e<r.length;e++)void 0===r[e]?n+="=":n+=T(r[e])}return n}},_=["utf8","utf-8","unicode-1-1-utf-8"];var L={TextEncoder:function(e){if(_.indexOf(e)<0&&void 0!==e&&null!=e)throw new RangeError("Invalid encoding type. Only utf-8 is supported");this.encoding="utf-8",this.encode=function(e){if("string"!=typeof e)throw new TypeError("passed argument must be of tye string");var t=unescape(encodeURIComponent(e)),n=new Uint8Array(t.length);const r=t.split("");for(let e=0;e<r.length;e++)n[e]=r[e].charCodeAt(0);return n}},TextDecoder:function(e){if(_.indexOf(e)<0&&void 0!==e&&null!=e)throw new RangeError("Invalid encoding type. Only utf-8 is supported");this.encoding="utf-8",this.decode=function(e,t){if(void 0===e)return"";var n=void 0!==t&&n in t&&t.stream;if("boolean"!=typeof n)throw new TypeError("stream option must be boolean");if(ArrayBuffer.isView(e)){var r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),s=new Array(r.length);for(let e=0;e<r.length;e++)s[e]=String.fromCharCode(r[e]);return decodeURIComponent(escape(s.join("")))}throw new TypeError("passed argument must be an array buffer view")}}};let F;class k{constructor(e){F=e}fetch(e,t){return F(e,t)}now(){return Date.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return new L.TextEncoder(t).encode(e)}decode(e,t){return new L.TextDecoder(t).decode(e)}}const M=/\.(txt|json|html|txt|csv)/;function N(e,t){let n=t.header||{};return n=Object.keys(n).reduce(((e,t)=>(e[t.toLowerCase()]=n[t],e)),{}),{ok:1==(t.statusCode/200|0),status:t.statusCode,statusText:t.statusCode,url:e,clone:()=>N(e,t),text:()=>Promise.resolve("string"==typeof t.data?t.data:JSON.stringify(t.data)),json:()=>{if("object"==typeof t.data)return Promise.resolve(t.data);let e={};try{e=JSON.parse(t.data)}catch(e){console.error(e)}return Promise.resolve(e)},arrayBuffer:()=>Promise.resolve(t.data),headers:{keys:()=>Object.keys(n),entries:()=>{const e=[];for(const t in n)n.hasOwnProperty(t)&&e.push([t,n[t]]);return e},get:e=>n[e.toLowerCase()],has:e=>e.toLowerCase()in n}}}function R(e){let t,n=e[0],r=1;for(;r<e.length;){const s=e[r],o=e[r+1];if(r+=2,("optionalAccess"===s||"optionalCall"===s)&&null==n)return;"access"===s||"optionalAccess"===s?(t=n,n=o(n)):"call"!==s&&"optionalCall"!==s||(n=o(((...e)=>n.call(t,...e))),t=void 0)}return n}let j,B;!function(e,t=!1){const n=e.tf,r=e.backendName||"wechat-webgl";if(t&&console.log(n),n.getBackend()===r)return;const s=e.webgl;n.ENV.setPlatform("wechat",new k(e.fetchFunc)),function(e){e.ENV.global.btoa=S.btoa,e.ENV.global.atob=S.atob}(n),e.webgl&&e.canvas?function(e,t,n,r="wechat-webgl",s=!1){if(null==e.findBackend(r)){const o={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0},a=n.getContext("webgl",o);s&&console.log("start backend registration"),t.setWebGLContext(1,a);try{e.registerBackend(r,(()=>{const e=new t.GPGPUContext(a);return new t.MathBackendWebGL(e)}),2);e.getKernelsForBackend("webgl").forEach((t=>{const n=Object.assign({},t,{backendName:r});e.registerKernel(n)}))}catch(e){throw new Error(`Failed to register Webgl backend: ${e.message}`)}}e.setBackend(r),s&&console.log("current backend = ",e.getBackend())}(n,s,e.canvas,r,t):console.log("webgl backend is not initialized, please inject webgl backend and the offscreen canvas.")}({fetchFunc:function(e,t){t=t||{};const n=e.match(M)?"text":"arraybuffer";return new Promise(((r,s)=>{wx.request({url:e,method:t.method||"GET",data:t.body,header:t.headers,dataType:n,responseType:n,success:t=>r(N(e,t)),fail:e=>s(e)})}))},tf:t.tf,webgl:t.webgl,canvas:wx.createOffscreenCanvas()}),Component({properties:{cameraPosition:{type:String,value:"front"}},data:{FPS:"0"},behaviors:["wx://component-export"],export:()=>({set(e){B=e.onFrame},drawCanvas2D(e){if(j){const{ctx:t,canvas2D:n}=j;t.clearRect(0,0,n.width,n.height),n.width=e.width,n.height=e.height;const r=n.createImageData(new Uint8Array(e.data),e.width,e.height);t.putImageData(r,0,0)}},start(){R([j,"optionalAccess",e=>e.cameraListener,"access",e=>e.start,"call",e=>e()])},stop(){R([j,"optionalAccess",e=>e.cameraListener,"access",e=>e.stop,"call",e=>e()])}}),async ready(){console.log("helper view ready");const[{node:t}]=await P("#gl",this),[{node:r}]=await P("#canvas",this);console.log("helper view get canvas node"),e.PLATFORM.set(new O(t));const s=r.getContext("2d"),o=new e.WebGL1Renderer({canvas:t,antialias:!0}),a=new e.Scene,i=wx.createCameraContext(),c=new n((async e=>{if(B){const t=Date.now();await B(e,j),console.log("trigger userFrameCallback"),this.setData({FPS:(1e3/(Date.now()-t)).toFixed(2)})}})),l=i.onCameraFrame(c.onFrame.bind(c));j={ctx:s,scene:a,canvasGL:t,canvas2D:r,renderer:o,cameraCtx:i,frameAdapter:c,cameraListener:l},j.cameraListener.start(),this.triggerEvent("inited"),console.log("helper view inited")},detached(){R([j,"optionalAccess",e=>e.cameraListener,"access",e=>e.stop,"call",e=>e()]),e.PLATFORM.dispose(),j=null,B=null},methods:{}});
