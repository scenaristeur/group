(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-102a2df6"],{1276:function(t,e,n){"use strict";var i=n("d784"),r=n("44e7"),a=n("825a"),s=n("1d80"),o=n("4840"),l=n("8aa5"),c=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),h=[].push,g=Math.min,p=4294967295,m=!f((function(){return!RegExp(p,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),a=void 0===n?p:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);var o,l,c,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,m=new RegExp(t.source,f+"g");while(o=d.call(m,i)){if(l=m.lastIndex,l>g&&(u.push(i.slice(g,o.index)),o.length>1&&o.index<i.length&&h.apply(u,o.slice(1)),c=o[0].length,g=l,u.length>=a))break;m.lastIndex===o.index&&m.lastIndex++}return g===i.length?!c&&m.test("")||u.push(""):u.push(i.slice(g)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var d=a(t),f=String(this),h=o(d,RegExp),v=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),w=new h(m?d:"^(?:"+d.source+")",b),y=void 0===r?p:r>>>0;if(0===y)return[];if(0===f.length)return null===u(w,f)?[f]:[];var x=0,S=0,k=[];while(S<f.length){w.lastIndex=m?S:0;var C,R=u(w,m?f:f.slice(S));if(null===R||(C=g(c(w.lastIndex+(m?0:S)),f.length))===x)S=l(f,S,v);else{if(k.push(f.slice(x,S)),k.length===y)return k;for(var T=1;T<=R.length-1;T++)if(k.push(R[T]),k.length===y)return k;S=x=C}}return k.push(f.slice(x)),k}]}),!m)},2532:function(t,e,n){"use strict";var i=n("23e7"),r=n("5a34"),a=n("1d80"),s=n("ab13");i({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(a(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),r=n("825a"),a=n("d039"),s=n("ad6d"),o="toString",l=RegExp.prototype,c=l[o],u=a((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=o;(u||d)&&i(RegExp.prototype,o,(function(){var t=r(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in l)?s.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"487a":function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){"use strict";var t="@@InfiniteScroll",e=function(t,e){var n,i,r,a,s,o=function(){t.apply(a,s),i=n};return function(){if(a=this,s=arguments,n=Date.now(),r&&(clearTimeout(r),r=null),i){var t=e-(n-i);t<0?o():r=setTimeout((function(){o()}),t)}else o()}},n=function(t){return t===window?Math.max(window.pageYOffset||0,document.documentElement.scrollTop):t.scrollTop},i=document.defaultView.getComputedStyle,r=function(t){var e=t;while(e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType){var n=i(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},a=function(t){return t===window?document.documentElement.clientHeight:t.clientHeight},s=function(t){return t===window?n(window):t.getBoundingClientRect().top+n(window)},o=function(t){var e=t.parentNode;while(e){if("HTML"===e.tagName)return!0;if(11===e.nodeType)return!1;e=e.parentNode}return!1},l=function(){if(!this.binded){this.binded=!0;var t=this,n=t.el,i=n.getAttribute("infinite-scroll-throttle-delay"),a=200;i&&(a=Number(t.vm[i]||i),(isNaN(a)||a<0)&&(a=200)),t.throttleDelay=a,t.scrollEventTarget=r(n),t.scrollListener=e(c.bind(t),t.throttleDelay),t.scrollEventTarget.addEventListener("scroll",t.scrollListener),this.vm.$on("hook:beforeDestroy",(function(){t.scrollEventTarget.removeEventListener("scroll",t.scrollListener)}));var s=n.getAttribute("infinite-scroll-disabled"),o=!1;s&&(this.vm.$watch(s,(function(e){t.disabled=e,!e&&t.immediateCheck&&c.call(t)})),o=Boolean(t.vm[s])),t.disabled=o;var l=n.getAttribute("infinite-scroll-distance"),u=0;l&&(u=Number(t.vm[l]||l),isNaN(u)&&(u=0)),t.distance=u;var d=n.getAttribute("infinite-scroll-immediate-check"),f=!0;d&&(f=Boolean(t.vm[d])),t.immediateCheck=f,f&&c.call(t);var h=n.getAttribute("infinite-scroll-listen-for-event");h&&t.vm.$on(h,(function(){c.call(t)}))}},c=function(t){var e=this.scrollEventTarget,i=this.el,r=this.distance;if(!0===t||!this.disabled){var o=n(e),l=o+a(e),c=!1;if(e===i)c=e.scrollHeight-l<=r;else{var u=s(i)-s(e)+i.offsetHeight+o;c=l+r>=u}c&&this.expression&&this.expression()}},u={bind:function(e,n,i){e[t]={el:e,vm:i.context,expression:n.value};var r=arguments;e[t].vm.$on("hook:mounted",(function(){e[t].vm.$nextTick((function(){o(e)&&l.call(e[t],r),e[t].bindTryCount=0;var n=function n(){e[t].bindTryCount>10||(e[t].bindTryCount++,o(e)?l.call(e[t],r):setTimeout(n,50))};n()}))}))},unbind:function(e){e&&e[t]&&e[t].scrollEventTarget&&e[t].scrollEventTarget.removeEventListener("scroll",e[t].scrollListener)}},d=function(t){t.directive("InfiniteScroll",u)};return window.Vue&&(window.infiniteScroll=u,Vue.use(d)),u.install=d,u}))},"4b6f":function(t,e,n){"use strict";n("dfa4")},"4df4":function(t,e,n){"use strict";var i=n("0366"),r=n("7b0b"),a=n("9bdd"),s=n("e95a"),o=n("50c4"),l=n("8418"),c=n("35a1");t.exports=function(t){var e,n,u,d,f,h,g=r(t),p="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,b=void 0!==v,w=c(g),y=0;if(b&&(v=i(v,m>2?arguments[2]:void 0,2)),void 0==w||p==Array&&s(w))for(e=o(g.length),n=new p(e);e>y;y++)h=b?v(g[y],y):g[y],l(n,y,h);else for(d=w.call(g),f=d.next,n=new p;!(u=f.call(d)).done;y++)h=b?a(d,v,[u.value,y],!0):u.value,l(n,y,h);return n.length=y,n}},"9bdd":function(t,e,n){var i=n("825a"),r=n("2a62");t.exports=function(t,e,n,a){try{return a?e(i(n)[0],n[1]):e(n)}catch(s){throw r(t),s}}},a630:function(t,e,n){var i=n("23e7"),r=n("4df4"),a=n("1c7e"),s=!a((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:s},{from:r})},c975:function(t,e,n){"use strict";var i=n("23e7"),r=n("4d64").indexOf,a=n("a640"),s=n("ae40"),o=[].indexOf,l=!!o&&1/[1].indexOf(1,-0)<0,c=a("indexOf"),u=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:l||!c||!u},{indexOf:function(t){return l?o.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,e,n){"use strict";var i=n("23e7"),r=n("4d64").includes,a=n("44d2"),s=n("ae40"),o=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!o},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},cbc6:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-list"},[n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"container",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"300"}},[0==t.data.length?n("div",[t._v("Please Wait, I'm loading data ;-)")]):t._e(),n("b-list-group",{attrs:{flush:""}},t._l(t.data,(function(e){return n("b-list-group-item",{key:e.id},[n("div",{staticClass:"item"},[n("div",{staticClass:"avatar"}),n("div",{staticClass:"created"},[t._v(" "+t._s(e.created)+" ")]),n("div",{staticClass:"maker text-info"},[n("UserName",{attrs:{webId:e.maker}})],1),n("div",{staticClass:"content"},[t._v(" "+t._s(e.content)+" ")])])])})),1)],1),n("b-alert",{staticClass:"position-fixed fixed-bottom rounded-0",staticStyle:{"z-index":"2000",bottom:"30px"},attrs:{variant:"info",dismissible:""},model:{value:t.busy,callback:function(e){t.busy=e},expression:"busy"}},[t._v(t._s(t.title)+" ")]),n("SolidChatSend",{attrs:{url:t.url}})],1)},r=[];n("99af"),n("4de4"),n("caad"),n("c975"),n("a15b"),n("baa5"),n("d81d"),n("fb6a"),n("d3b7"),n("ac1f"),n("8a79"),n("2532"),n("1276"),n("a4d3"),n("e01a"),n("d28b"),n("3ca3"),n("ddb0"),n("a630"),n("b0c0"),n("25f0");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function s(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function o(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=s(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){l=!0,a=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(l)throw a}}}}n("96cf");var l=n("1da1"),c=n("487a"),u=n.n(c),d=n("4d8d"),f=n("6dc1"),h=n("4585"),g=n("16b0"),p=n("00e8"),m=n.n(p),v=n("7fed"),b=n.n(v),w=new b.a(m.a),y={name:"SolidChatList",directives:{infiniteScroll:u.a},mixins:[h["a"],g["a"]],props:["url"],components:{SolidChatSend:function(){return n.e("chunk-bd7913a4").then(n.bind(null,"f345"))},UserName:function(){return n.e("chunk-2d21ee7d").then(n.bind(null,"d80c"))}},data:function(){return{data:[],busy:!0,title:"Select a channel",index_cat:'@prefix : <#>.\n      @prefix XML: <http://www.w3.org/2001/XMLSchema#>.\n      @prefix c: </profile/card#>.\n      @prefix mee: <http://www.w3.org/ns/pim/meeting#>.\n      @prefix n1: <http://purl.org/dc/elements/1.1/>.\n      @prefix ui: <http://www.w3.org/ns/ui#>.\n      @prefix ic: <http://www.w3.org/2002/12/cal/ical#>.\n      @prefix flow: <http://www.w3.org/2005/01/wf/flow#>.\n\n      :id1606695592333\n      ic:dtstart "2020-11-30T00:19:52Z"^^XML:dateTime;\n      flow:participant c:me;\n      ui:backgroundColor "#eac1e3".\n      :this\n      a mee:LongChat;\n      n1:author c:me;\n      n1:created "2020-11-30T00:19:48Z"^^XML:dateTime;\n      n1:title "Chat channel";\n      flow:participation :id1606695592333;\n      ui:sharedPreferences :SharedPreferences.'}},created:function(){this.update()},methods:{update:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getStorage(t.url);case 2:return n=e.sent,t.storage="".concat(n)+"chat/",i=t.storage+"index.ttl",e.next=7,w.itemExists(i);case 7:if(e.sent){e.next=10;break}return e.next=10,w.createFile(i,t.index_cat,"text/turtle");case 10:t.data=[],t.limite=new Date("2020-11-27"),t.initChat(t.storage);case 13:case"end":return e.stop()}}),e)})))()},channelChanged:function(t){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.created,e.limite=new Date(i),e.date=new Date,e.url=e.channel.substr(0,e.channel.lastIndexOf("/")+1),console.log("url",e.url),e.data=[],n.next=8,e.initChat(e.url);case 8:case"end":return n.stop()}}),n)})))()},loadMore:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.busy=!0,!(this.limite<=this.date)){t.next=9;break}return e=[this.root,this.date.getFullYear(),("0"+(this.date.getMonth()+1)).slice(-2),("0"+this.date.getDate()).slice(-2),"chat.ttl"].join("/"),this.date.setDate(this.date.getDate()-1),this.title="loading "+this.date.toLocaleDateString(),t.next=7,this.loadMessages(e,"bottom");case 7:t.next=11;break;case 9:this.data.push({id:Math.random(),maker:"https://System.solid-vue-panes",content:"This is the end, my friend, there are no message before that date",created:this.limite.toLocaleString()}),this.makeToast("No message before",this.limite.toLocaleString(),"warning");case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadMessages:function(t,e){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function i(){var r,a,s,l,c,u,h,g,p,m,v;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(d["c"])(t);case 3:r=i.sent,a=r.findSubjects(),a=a.filter(n.onlyUnique),s=[],l=n.data.map((function(t){return t.id})),c=o(a);try{for(c.s();!(u=c.n()).done;)h=u.value,h.asRef()==n.root+"/index.ttl#this"||l.includes(h.asRef())||(g=h.getString(f["a"].created),p=h.getLiteral(f["f"].content),m=h.getNodeRef(f["b"].maker)||"anonymous",v={id:h.asRef(),created:new Date(g).toLocaleString(),content:p,maker:m},s.unshift(v))}catch(b){c.e(b)}finally{c.f()}"top"==e?(n.today_messages=[],n.today_messages=s):n.old_messages.push.apply(n.old_messages,s),n.data=[],n.data=n.today_messages.concat(n.old_messages),i.next=17;break;case 15:i.prev=15,i.t0=i["catch"](0);case 17:n.busy=!1;case 18:case"end":return i.stop()}}),i,null,[[0,15]])})))()},loadMore1:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.busy=!0,!(this.limite<=this.date)){t.next=10;break}return e=[this.root,this.date.getFullYear(),("0"+(this.date.getMonth()+1)).slice(-2),("0"+this.date.getDate()).slice(-2),"chat.ttl"].join("/"),this.date.setDate(this.date.getDate()-1),this.title="loading "+this.date.toLocaleDateString(),t.next=7,this.updateMessages(e,"bottom");case 7:this.busy=!1,t.next=10;break;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),initChat:function(t){this.today_messages=[],this.old_messages=[],this.messages=[],this.data=[],this.stopped=!1,this.date=new Date,this.root=t,this.root.endsWith("/")&&(this.root=this.root.slice(0,-1)),this.fileUrl=[this.root,this.date.getFullYear(),("0"+(this.date.getMonth()+1)).slice(-2),("0"+this.date.getDate()).slice(-2),"chat.ttl"].join("/"),this.$store.commit("chat/setFileUrl",this.fileUrl),this.$store.commit("chat/setRoot",this.root);var e=this.root.split("//")[1],n=e.split("/")[0]+"/",i=new WebSocket("wss://"+n,["solid.0.1.0"]);i.onopen=function(){i.send("sub "+this.fileUrl)}.bind(this),i.onmessage=function(t){t.data&&"pub"===t.data.slice(0,3)&&this.updateMessages(t.data.substring(4),"top")}.bind(this),this.loadMore()},updateMessages:function(t,e){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function i(){var r,a,s,l,c,u,h,g,p,m,v;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(d["c"])(t);case 3:r=i.sent,a=r.findSubjects(),a=a.filter(n.onlyUnique),s=[],l=n.data.map((function(t){return t.id})),c=o(a);try{for(c.s();!(u=c.n()).done;)h=u.value,h.asRef()==n.root+"/index.ttl#this"||l.includes(h.asRef())||(g=h.getString(f["a"].created),p=h.getLiteral(f["f"].content),m=h.getNodeRef(f["b"].maker)||"anonymous",v={id:h.asRef(),created:new Date(g).toLocaleString(),content:p,maker:m},s.unshift(v),console.log(s))}catch(b){c.e(b)}finally{c.f()}"top"==e?(n.today_messages=[],n.today_messages=s):n.old_messages.push.apply(n.old_messages,s),n.data=[],n.data=n.today_messages.concat(n.old_messages),n.busy=!1,console.log("DATA",n.data,n.busy),i.next=19;break;case 17:i.prev=17,i.t0=i["catch"](0);case 19:case"end":return i.stop()}}),i,null,[[0,17]])})))()},makeToast:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(e,{title:t,variant:n,solid:!0})},onlyUnique:function(t,e,n){return n.indexOf(t)===e}},watch:{},computed:{}},x=y,S=(n("4b6f"),n("2877")),k=Object(S["a"])(x,i,r,!1,null,null,null);e["default"]=k.exports},d81d:function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").map,a=n("1dde"),s=n("ae40"),o=a("map"),l=s("map");i({target:"Array",proto:!0,forced:!o||!l},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},dfa4:function(t,e,n){},fb6a:function(t,e,n){"use strict";var i=n("23e7"),r=n("861d"),a=n("e8b5"),s=n("23cb"),o=n("50c4"),l=n("fc6a"),c=n("8418"),u=n("b622"),d=n("1dde"),f=n("ae40"),h=d("slice"),g=f("slice",{ACCESSORS:!0,0:0,1:2}),p=u("species"),m=[].slice,v=Math.max;i({target:"Array",proto:!0,forced:!h||!g},{slice:function(t,e){var n,i,u,d=l(this),f=o(d.length),h=s(t,f),g=s(void 0===e?f:e,f);if(a(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return m.call(d,h,g);for(i=new(void 0===n?Array:n)(v(g-h,0)),u=0;h<g;h++,u++)h in d&&c(i,u,d[h]);return i.length=u,i}})}}]);
//# sourceMappingURL=chunk-102a2df6.6e0ba0c7.js.map