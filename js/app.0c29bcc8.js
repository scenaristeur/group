(function(e){function t(t){for(var n,u,l=t[0],c=t[1],s=t[2],i=0,f=[];i<l.length;i++)u=l[i],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function u(e){return l.p+"js/"+({about:"about",createGroup:"createGroup"}[e]||e)+"."+{about:"b2432978","chunk-2d0a3369":"89afb4b2","chunk-2d226c5a":"df34d138","chunk-71b7d500":"b340c3d6","chunk-2d0c91a5":"9699f3db",createGroup:"81ee7f78","chunk-bdccffe8":"aeb46f07"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(i);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/group/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var p=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1608:function(e,t,r){"use strict";r("5dc2")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/createGroup"}},[e._v("New Group")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),r("SolidLoginButton")],1),r("router-view",{staticClass:"container"}),r("SolidTrackSession")],1)},a=[],u=(r("d3b7"),{name:"App",components:{SolidLoginButton:function(){return Promise.all([r.e("chunk-2d0a3369"),r.e("chunk-2d226c5a")]).then(r.bind(null,"e9a1"))},SolidTrackSession:function(){return Promise.all([r.e("chunk-2d0a3369"),r.e("chunk-bdccffe8")]).then(r.bind(null,"c1a7"))}}}),l=u,c=(r("5c0b"),r("2877")),s=Object(c["a"])(l,o,a,!1,null,null,null),i=s.exports,p=r("9483");Object(p["a"])("".concat("/group/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=r("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("UserGroups"),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},v=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:String}},m=b,_=(r("1608"),Object(c["a"])(m,h,g,!1,null,"4f12c5b6",null)),k=_.exports,w={name:"Home",components:{HelloWorld:k,UserGroups:function(){return Promise.all([r.e("chunk-2d0a3369"),r.e("chunk-71b7d500"),r.e("chunk-2d0c91a5")]).then(r.bind(null,"585a"))}}},j=w,y=Object(c["a"])(j,d,v,!1,null,null,null),x=y.exports;n["default"].use(f["a"]);var O=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/createGroup",name:"createGroup",component:function(){return Promise.all([r.e("chunk-2d0a3369"),r.e("chunk-71b7d500"),r.e("createGroup")]).then(r.bind(null,"f9c1"))}}],S=new f["a"]({mode:"history",base:"/group/",routes:O}),P=S,E=(r("99af"),r("96cf"),r("1da1")),C=r("2f62");n["default"].use(C["a"]);var G=window.solid,A=new C["a"].Store({state:{webId:null,storage:null},mutations:{setWebId:function(e,t){console.log("webId",t),e.webId=t},setStorage:function(e,t){console.log("storage",t),e.storage=t}},actions:{setWebId:function(e,t){return Object(E["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.commit("setWebId",t),r.t0=e,r.t1="",r.next=5,G.data[t].storage;case 5:r.t2=r.sent,r.t3=r.t1.concat.call(r.t1,r.t2),r.t0.commit.call(r.t0,"setStorage",r.t3);case 8:case"end":return r.stop()}}),r)})))()}},modules:{}}),I=r("5f5b"),T=r("b1e0");r("f9e3"),r("2dd8");n["default"].use(I["a"]),n["default"].use(T["a"]),n["default"].config.productionTip=!1,new n["default"]({router:P,store:A,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"5dc2":function(e,t,r){},"9c0c":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0c29bcc8.js.map