(function(e){function t(t){for(var n,u,l=t[0],s=t[1],c=t[2],i=0,f=[];i<l.length;i++)u=l[i],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function u(e){return l.p+"js/"+({about:"about",createGroup:"createGroup",group:"group"}[e]||e)+"."+{about:"0b918f28","chunk-2d0a3369":"89afb4b2","chunk-2d226c5a":"aff795dc","chunk-58685883":"16886f2c","chunk-75563116":"0bd230f6","chunk-2d0c91a5":"91a53bd7",createGroup:"026eb7db",group:"8435aa50"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(i);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[e]=void 0}};var i=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/group/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var p=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1608:function(e,t,r){"use strict";r("5dc2")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),"undefined"==e.url?r("router-link",{attrs:{to:"/createGroup"}},[e._v("New Group")]):r("router-link",{attrs:{to:"/createGroup?url="+e.url}},[e._v("New Sub-Group")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),r("SolidLoginButton")],1),r("router-view",{staticClass:"container"}),r("SolidTrackSession"),e._v(" 0.0.6 - fix quotes in names ")],1)},a=[],u=(r("d3b7"),{name:"App",components:{SolidLoginButton:function(){return Promise.all([r.e("chunk-2d0a3369"),r.e("chunk-2d226c5a")]).then(r.bind(null,"e9a1"))},SolidTrackSession:function(){return Promise.all([r.e("chunk-2d0a3369"),r.e("chunk-58685883")]).then(r.bind(null,"c1a7"))}},computed:{url:{get:function(){return void 0!=this.$route.hash?this.$route.query.url+this.$route.hash:this.$route.query.urll},set:function(){}}}}),l=u,s=(r("5c0b"),r("2877")),c=Object(s["a"])(l,o,a,!1,null,null,null),i=c.exports,p=r("9483");Object(p["a"])("".concat("/group/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("Une nouvelle version de Solid Groups et disponible. Veuillez fermer l'application et la rouvrir pour en profiter")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("UserGroups"),r("HelloWorld",{attrs:{msg:"Welcome to Your Solid Group Management App"}})],1)},d=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:String}},m=b,_=(r("1608"),Object(s["a"])(m,h,g,!1,null,"4f12c5b6",null)),k=_.exports,w={name:"Home",components:{HelloWorld:k,UserGroups:function(){return Promise.all([r.e("chunk-2d0a3369"),r.e("chunk-75563116"),r.e("chunk-2d0c91a5")]).then(r.bind(null,"585a"))}}},j=w,y=Object(s["a"])(j,v,d,!1,null,null,null),x=y.exports;n["default"].use(f["a"]);var O=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/createGroup",name:"createGroup",component:function(){return Promise.all([r.e("chunk-2d0a3369"),r.e("chunk-75563116"),r.e("createGroup")]).then(r.bind(null,"f9c1"))}},{path:"/group",name:"group",props:function(e){return{query:e.query.url}},component:function(){return Promise.all([r.e("chunk-2d0a3369"),r.e("chunk-75563116"),r.e("group")]).then(r.bind(null,"4ebe"))}}],S=new f["a"]({mode:"history",base:"/group/",routes:O}),G=S,P=(r("99af"),r("96cf"),r("1da1")),E=r("668b"),$=r("2f62");n["default"].use($["a"]);var C=window.solid,T=new $["a"].Store({state:{webId:null,storage:null,groups:[]},mutations:{setWebId:function(e,t){console.log(t),e.webId=t},setStorage:function(e,t){console.log(t),e.storage=t},setGroups:function(e,t){console.log(t),e.groups=t}},actions:{setWebId:function(e,t){return Object(P["a"])(regeneratorRuntime.mark((function r(){var n,o,a,u,l,s,c,i,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.commit("setWebId",t),null==t){r.next=51;break}return r.t0=e,r.t1="",r.next=6,C.data[t].storage;case 6:r.t2=r.sent,r.t3=r.t1.concat.call(r.t1,r.t2),r.t0.commit.call(r.t0,"setStorage",r.t3),n=[],console.log("TODO: remplacer par solid-client-js peut-il eviter les nombreux appels ?"),o=!0,a=!1,r.prev=13,l=Object(E["a"])(C.data[t]["http://www.w3.org/ns/org#memberOf"]);case 15:return r.next=17,l.next();case 17:return s=r.sent,o=s.done,r.next=21,s.value;case 21:if(c=r.sent,o){r.next=35;break}return i=c,console.log("".concat(i)),r.t4="".concat(i),r.next=28,C.data["".concat(i)].vcard$fn;case 28:r.t5=r.sent,p={url:r.t4,name:r.t5},n.push(p),e.commit("setGroups",n);case 32:o=!0,r.next=15;break;case 35:r.next=41;break;case 37:r.prev=37,r.t6=r["catch"](13),a=!0,u=r.t6;case 41:if(r.prev=41,r.prev=42,o||null==l.return){r.next=46;break}return r.next=46,l.return();case 46:if(r.prev=46,!a){r.next=49;break}throw u;case 49:return r.finish(46);case 50:return r.finish(41);case 51:case"end":return r.stop()}}),r,null,[[13,37,41,51],[42,,46,50]])})))()}},modules:{}}),A=r("5f5b"),q=r("b1e0");r("f9e3"),r("2dd8");n["default"].use(A["a"]),n["default"].use(q["a"]),n["default"].config.productionTip=!1,new n["default"]({router:G,store:T,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"5dc2":function(e,t,r){},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.ecd52c10.js.map