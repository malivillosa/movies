if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/BookmarkView-CIUJHQsf.js",revision:null},{url:"assets/BookmarkView-D54a__n3.css",revision:null},{url:"assets/DetailsView-CTMd7Tcr.js",revision:null},{url:"assets/DetailsView-Dn7dF8G3.css",revision:null},{url:"assets/HomeView-CVUCr2aO.js",revision:null},{url:"assets/HomeView-uct0K1GM.css",revision:null},{url:"assets/index-COH4q7qR.css",revision:null},{url:"assets/index-xge7-wCV.js",revision:null},{url:"assets/MovieCard-BN3nROk6.css",revision:null},{url:"assets/MovieCard-BvrRqHnz.js",revision:null},{url:"assets/MovieService-BJ23OKhU.js",revision:null},{url:"index.html",revision:"c360a41a1dc1ceef9a3451c4e0df79a2"},{url:"registerSW.js",revision:"200a93f18e3f6e37003a55d924876fcf"},{url:"favicon.ico",revision:"ff238d76a396cba47053e68ecd2d16e7"},{url:"manifest.webmanifest",revision:"85c931b85497d592c3e485aff3d446b5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));