(self.webpackChunkhk_independent_bus_eta=self.webpackChunkhk_independent_bus_eta||[]).push([[776],{6776:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(7313),o=n(941),i=n(178),a=n(7829),c=n(9099),u=n(1422),l=n(4511),s=n(3475),f=n.n(s),h={format:"image/png",quality:.92,width:void 0,height:void 0,Canvas:void 0,crossOrigin:void 0};const d=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t={}),new Promise((function(n){var r=(t=Object.assign({},h,t)).Canvas?new t.Canvas:window.document.createElement("canvas"),o=t.Image||window.Image,i=e.map((function(e){return new Promise((function(n,r){"Object"!==e.constructor.name&&(e={src:e});var i=new o;i.crossOrigin=t.crossOrigin,i.onerror=function(){return r(new Error("Couldn't load image"))},i.onload=function(){return n(Object.assign({},e,{img:i}))},i.src=e.src}))})),a=r.getContext("2d");n(Promise.all(i).then((function(e){var n=function(n){return t[n]||Math.max.apply(Math,e.map((function(e){return e.img[n]})))};return r.width=n("width"),r.height=n("height"),e.forEach((function(e){return a.globalAlpha=e.opacity?e.opacity:1,a.drawImage(e.img,e.x||0,e.y||0)})),t.Canvas&&"image/jpeg"===t.format?new Promise((function(e,n){r.toDataURL(t.format,{quality:t.quality,progressive:!1},(function(t,r){t?n(t):e(r)}))})):r.toDataURL(t.format,t.quality)})))}))};var g=n(5823),m=n(6060),p=n(421),v=n(8467),y=n(6417);const w=(e,t)=>document.getElementById(e)?f().toPng(document.getElementById(e),{bgcolor:"light"===t?"#FFFFFF":"#000"}).then((t=>[t,document.getElementById(e).clientHeight,document.getElementById(e).clientWidth])):Promise.resolve([null,0,0]),x=e=>{let{routeId:t,seq:n=-1,stopId:s,event:f}=e;const[{isOpen:h,isCopied:x},k]=(0,r.useState)(P),{AppTitle:I,colorMode:S,db:{routeList:L,stopList:U}}=(0,r.useContext)(m.ZP),{t:B,i18n:D}=(0,l.$)(),[F,O]=(0,r.useState)(""),{id:R}=(0,v.UO)(),{route:M,dest:H}=L[t],V=U[s],Z=(0,r.useCallback)((e=>k((t=>({...t,isOpen:e})))),[]),N=(0,r.useCallback)((e=>k((t=>({...t,isCopied:e})))),[]);(0,r.useEffect)((()=>(h&&Promise.all([w("route-eta-header",S),w("route-map",S),w("stop-".concat(n),S)]).then((e=>{let t=0;return d(e.filter((e=>{let[t]=e;return t})).map((e=>{let[n,r,o]=e;return t+=r,{src:n,x:0,y:t-r}})),{height:t})})).then((e=>{O(e)})),()=>{O("")})),[h,S,n]),(0,r.useEffect)((()=>{Z(!0)}),[Z,f]);const _=(0,r.useCallback)((()=>{(0,g.I)("https://".concat(window.location.hostname,"/").concat(D.language,"/route/").concat(R,"/").concat(s,"%2C").concat(n),"".concat(n+1,". ").concat((0,g.iF)(V.name[D.language])," - ").concat(M," ").concat(B("\u5f80")," ").concat((0,g.iF)(H[D.language])," - ").concat(B(I))).then((()=>{navigator.clipboard&&N(!0)})).finally((()=>{Z(!1)}))}),[I,R,H,B,N,D.language,n,V.name,s,M,Z]),q=(0,r.useCallback)((()=>{(0,g.JP)(F,"https://".concat(window.location.hostname,"/").concat(D.language,"/route/").concat(R,"/").concat(s,"%2C").concat(n),"".concat(n+1,". ").concat((0,g.iF)(V.name[D.language])," - ").concat(M," ").concat(B("\u5f80")," ").concat((0,g.iF)(H[D.language])," - https://hkbus.app/")).then((()=>{navigator.clipboard&&N(!0)})).finally((()=>{Z(!1)}))}),[g.JP,F,D.language,R,n,M]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o.Z,{sx:b,onClose:()=>Z(!1),open:h,children:(0,y.jsx)(i.Z,{maxWidth:"xs",sx:C,fixed:!0,children:(0,y.jsxs)(a.Z,{sx:E,children:[(0,y.jsx)(a.Z,{sx:A,children:F?(0,y.jsx)("img",{src:F,style:{objectFit:"contain",width:396,height:400},alt:""}):(0,y.jsx)(p.D,{color:"inherit"})}),(0,y.jsxs)(a.Z,{sx:j,children:[(0,y.jsx)(c.Z,{sx:T,onClick:_,children:B("\u4ee5\u93c8\u7d50\u5206\u4eab")}),(0,y.jsx)(c.Z,{sx:T,onClick:q,disabled:""===F,children:B("\u4ee5\u5716\u7247\u5206\u4eab")})]})]})})}),(0,y.jsx)(u.Z,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:x,autoHideDuration:1500,onClose:()=>{N(!1)},message:B("\u5df2\u8907\u88fd\u5230\u526a\u8cbc\u7c3f")})]})},P={isOpen:!1,isCopied:!1},b={display:"flex",alignItems:"center"},C={display:"flex",justifyContent:"center",outline:"none"},E={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,background:e=>e.palette.background.default},A={display:"flex",alignItems:"center",justifyContent:"center",height:400,width:"100%"},j={display:"flex",width:"100%",backgroundColor:e=>e.palette.background.default},T={flex:1,border:"1px solid rgba(255, 255, 255, 0.3)"}},3475:function(e){!function(t){"use strict";var n=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return function(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[n]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){var t=3e4;c.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());return new Promise((function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=a,o.ontimeout=u,o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),c.impl.options.imagePlaceholder){var i=c.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function a(){if(4===o.readyState)if(200===o.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(o.response)}else r?n(r):l("cannot fetch resource: "+e+", status: "+o.status)}function u(){r?n(r):l("timeout of "+t+"ms occured while fetching resource: "+e)}function l(e){console.error(e),n("")}}))},uid:function(){var e=0;return function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}(),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var n=t(e,"border-left-width"),r=t(e,"border-right-width");return e.scrollWidth+n+r},height:function(e){var n=t(e,"border-top-width"),r=t(e,"border-bottom-width");return e.scrollHeight+n+r}};function e(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function t(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),r=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,n,i){return a()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(t){var r=Promise.resolve(e);return t.forEach((function(e){r=r.then((function(t){return o(t,e,n,i)}))})),r}));function a(){return!t(e)}},shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(e)}function r(t){for(var r,o=[];null!==(r=e.exec(t));)o.push(r[1]);return o.filter((function(e){return!n.isDataUrl(e)}))}function o(e,t,r,o){return Promise.resolve(t).then((function(e){return r?n.resolveUrl(e,r):e})).then(o||n.getAndEncode).then((function(e){return n.dataAsUrl(e,n.mimeType(t))})).then((function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+n.escape(e)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")}))}}(),o=function(){return{resolveAll:function(){return e(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(n.asArray(document.styleSheets)).then((function(e){var t=[];return e.forEach((function(e){try{n.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(r){console.log("Error while reading CSS rules from "+e.href,r.toString())}})),t})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return r.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return r.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function t(o){return o instanceof Element?i(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(n.asArray(o.childNodes).map((function(e){return t(e)})))})):Promise.resolve(o);function i(e){var t=e.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}},impl:{newImage:e}};function e(e){return{inline:function(t){return n.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||n.getAndEncode).then((function(t){return n.dataAsUrl(t,n.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}}}(),a={imagePlaceholder:void 0,cacheBust:!1},c={toSvg:u,toPng:function(e,t){return l(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return l(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,t){return l(e,t||{}).then(n.canvasToBlob)},toPixelData:function(e,t){return l(e,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,n.width(e),n.height(e)).data}))},impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function u(e,t){return function(e){"undefined"===typeof e.imagePlaceholder?c.impl.options.imagePlaceholder=a.imagePlaceholder:c.impl.options.imagePlaceholder=e.imagePlaceholder;"undefined"===typeof e.cacheBust?c.impl.options.cacheBust=a.cacheBust:c.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then((function(e){return s(e,t.filter,!0)})).then(f).then(h).then((function(e){t.bgcolor&&(e.style.backgroundColor=t.bgcolor);t.width&&(e.style.width=t.width+"px");t.height&&(e.style.height=t.height+"px");t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]}));return e})).then((function(r){return function(e,t,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(n.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,t.width||n.width(e),t.height||n.height(e))}))}function l(e,t){return u(e,t).then(n.makeImage).then(n.delay(100)).then((function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=t.width||n.width(e),r.height=t.height||n.height(e),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o}))}function s(e,t,r){return r||!t||t(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?n.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(r){return function(e,t,r){var o=e.childNodes;return 0===o.length?Promise.resolve(t):i(t,n.asArray(o),r).then((function(){return t}));function i(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return s(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}}(e,r,t)})).then((function(t){return function(e,t){return t instanceof Element?Promise.resolve().then(r).then(o).then(i).then(a).then((function(){return t})):t;function r(){function r(e,t){function r(e,t){n.asArray(e).forEach((function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))}))}e.cssText?t.cssText=e.cssText:r(e,t)}r(window.getComputedStyle(e),t.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=n.uid();t.className=t.className+" "+a;var c=document.createElement("style");c.appendChild(u(a,r,o)),t.appendChild(c)}function u(e,t,r){var o="."+e+":"+t,i=r.cssText?a(r):c(r);return document.createTextNode(o+"{"+i+"}");function a(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function c(e){return n.asArray(e).map(t).join("; ")+";";function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){r(e)}))}function i(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function a(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)})))}}(e,t)})):Promise.resolve()}function f(e){return o.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function h(e){return i.inlineAll(e).then((function(){return e}))}e.exports=c}()}}]);