(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(o){if(o.ep)return;o.ep=!0;const e=r(o);fetch(o.href,e)}})();const g="modulepreload",y=function(t,n){return new URL(t,n).href},f={},c=function(n,r,l){if(!r||r.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(r.map(e=>{if(e=y(e,l),e in f)return;f[e]=!0;const i=e.endsWith(".css"),_=i?'[rel="stylesheet"]':"";if(!!l)for(let a=o.length-1;a>=0;a--){const u=o[a];if(u.href===e&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${_}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":g,i||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),i)return new Promise((a,u)=>{s.addEventListener("load",a),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},v=t=>{const n=new URL(t).pathname.endsWith("main.js");return r=>(r.startsWith("static/")?r=new URL(r.replace("static/",n?"../public/":"../"),t).pathname:r.startsWith("@/")?r=n?new URL(r.replace("@/","./"),t).pathname:r.replace("@/","/src/"):r==="root"&&(r=new URL("../index.html",t).pathname),r)},h=()=>{const t=Object.assign({"/src/App.vue":()=>c(()=>import("./App.f3a06f00.js"),["./App.f3a06f00.js","./MarkdownEditor.cb7f3a6b.js","./CreateFileDialog.6e840465.js","./MoDialog.ed7cb9b3.js","./MoButton.5c2237de.js","./_plugin-vue_export-helper.cdc0426e.js","./MoButton.ad56eebe.css","./MoDialog.ff47d681.css","./MoInput.299a7ded.js","./MoInput.293ee87d.css","./CreateFileDialog.3e3bece1.css","./MarkdownEditor.9e2f3c14.css"],import.meta.url),"/src/components/MoButton.vue":()=>c(()=>import("./MoButton.5c2237de.js"),["./MoButton.5c2237de.js","./_plugin-vue_export-helper.cdc0426e.js","./MoButton.ad56eebe.css"],import.meta.url),"/src/components/MoDialog.vue":()=>c(()=>import("./MoDialog.ed7cb9b3.js"),["./MoDialog.ed7cb9b3.js","./MoButton.5c2237de.js","./_plugin-vue_export-helper.cdc0426e.js","./MoButton.ad56eebe.css","./MoDialog.ff47d681.css"],import.meta.url),"/src/components/MoInput.vue":()=>c(()=>import("./MoInput.299a7ded.js"),["./MoInput.299a7ded.js","./_plugin-vue_export-helper.cdc0426e.js","./MoInput.293ee87d.css"],import.meta.url),"/src/views/MarkdownEditor.vue":()=>c(()=>import("./MarkdownEditor.cb7f3a6b.js"),["./MarkdownEditor.cb7f3a6b.js","./CreateFileDialog.6e840465.js","./MoDialog.ed7cb9b3.js","./MoButton.5c2237de.js","./_plugin-vue_export-helper.cdc0426e.js","./MoButton.ad56eebe.css","./MoDialog.ff47d681.css","./MoInput.299a7ded.js","./MoInput.293ee87d.css","./CreateFileDialog.3e3bece1.css","./MarkdownEditor.9e2f3c14.css"],import.meta.url),"/src/views/components/CreateFileDialog.vue":()=>c(()=>import("./CreateFileDialog.6e840465.js").then(n=>n.a),["./CreateFileDialog.6e840465.js","./MoDialog.ed7cb9b3.js","./MoButton.5c2237de.js","./_plugin-vue_export-helper.cdc0426e.js","./MoButton.ad56eebe.css","./MoDialog.ff47d681.css","./MoInput.299a7ded.js","./MoInput.293ee87d.css","./CreateFileDialog.3e3bece1.css"],import.meta.url)});return n=>t[n]().then(r=>r.default)},L=Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype,"href").set;Object.defineProperty(HTMLLinkElement.prototype,"href",{set:function(t){t.indexOf("cdnjs.cloudflare.com/ajax/libs")!==-1&&(t=t.replace("cdnjs.cloudflare.com/ajax/libs","cdn.staticfile.org")),L.call(this,t)}});const E=Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype,"src").set;Object.defineProperty(HTMLScriptElement.prototype,"src",{set:function(t){t.indexOf("cdnjs.cloudflare.com/ajax/libs")!==-1&&(t=t.replace("cdnjs.cloudflare.com/ajax/libs","cdn.staticfile.org")),E.call(this,t)}});const p=v(import.meta.url),d=h(),m=Vue.createApp(Vue.defineAsyncComponent(()=>d(p("@/App.vue"))));m.config.globalProperties.$getActualPath=p;m.config.globalProperties.$getAsyncComponent=d;m.mount("#app");