(()=>{"use strict";var e,r,t,a,o,n={},f={};function d(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=n,d.c=f,e=[],d.O=(r,t,a,o)=>{if(!t){var n=1/0;for(u=0;u<e.length;u++){t=e[u][0],a=e[u][1],o=e[u][2];for(var f=!0,c=0;c<t.length;c++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](t[c])))?t.splice(c--,1):(f=!1,o<n&&(n=o));if(f){e.splice(u--,1);var i=a();void 0!==i&&(r=i)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,a,o]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var f=2&a&&e;"object"==typeof f&&!~r.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,d.d(o,n),o},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",105:"deb4b68c",237:"1df93b7f",351:"c76213e4",363:"816b73bf",368:"a94703ab",414:"393be207",518:"a7bd4aaa",538:"cd948886",546:"05a25144",661:"5e95c892",670:"e52073de",690:"cfd3e9a1",820:"e5106cde",825:"7105011f",871:"d03241c9",918:"17896441",920:"1a4e3797",929:"d438f276",935:"e07b0139"}[e]||e)+"."+{53:"c0158a55",85:"99741877",105:"d95392a5",237:"49614f12",325:"09657743",351:"19b9e8da",363:"7009291e",368:"b4e900d5",414:"fb9dd48d",443:"fbcc34d3",518:"cc0a96f7",525:"670def37",538:"9637b384",546:"47a778f6",661:"59d23fa0",670:"c053cf99",690:"10533326",772:"e030eea5",820:"305a53bc",825:"57c0adf7",871:"446870cb",918:"652a2eaf",920:"64cccb6a",929:"f06b94aa",935:"ec75d5ce"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="speedrun-docs:",d.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var f,c;if(void 0!==t)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var b=i[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+t){f=b;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.setAttribute("data-webpack",o+t),f.src=e),a[e]=[r];var l=(r,t)=>{f.onerror=f.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),c&&document.head.appendChild(f)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/speedrun-docs/",d.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85",deb4b68c:"105","1df93b7f":"237",c76213e4:"351","816b73bf":"363",a94703ab:"368","393be207":"414",a7bd4aaa:"518",cd948886:"538","05a25144":"546","5e95c892":"661",e52073de:"670",cfd3e9a1:"690",e5106cde:"820","7105011f":"825",d03241c9:"871","1a4e3797":"920",d438f276:"929",e07b0139:"935"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(r,t)=>{var a=d.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=d.p+d.u(r),f=new Error;d.l(n,(t=>{if(d.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,a[1](f)}}),"chunk-"+r,r)}},d.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],f=t[1],c=t[2],i=0;if(n.some((r=>0!==e[r]))){for(a in f)d.o(f,a)&&(d.m[a]=f[a]);if(c)var u=c(d)}for(r&&r(t);i<n.length;i++)o=n[i],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(u)},t=self.webpackChunkspeedrun_docs=self.webpackChunkspeedrun_docs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();