(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group"],{4585:function(e,t,r){"use strict";r("b0c0"),r("ac1f"),r("8a79"),r("5319"),r("96cf");var n=r("1da1"),a=r("4d8d"),s=r("6dc1"),o=r("00e8"),i=r.n(o),u=r("7fed"),c=r.n(u),d=window.solid,l=new c.a(i.a);t["a"]={created:function(){this.webId=this.$store.state.webId,this.storage=this.$store.state.storage},methods:{createGroup:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,o,i,u,c,d,p,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("todo formate a good url without single quotes..."),e.encoded_name=e.name.replace(/\s/g,"_").replace(/'/g,"_").replace(/"/g,"_"),e.path=e.path.endsWith("/")?e.path:e.path+"/",n=new Date,o=n.toISOString(),e.url=e.path+e.encoded_name+".ttl",e.identifier="we",e.maker=t.webId,e.inbox="./"+e.encoded_name+"/inbox/",e.storage="./"+e.encoded_name+"/",r.next=12,Object(a["a"])(e.url);case 12:return i=r.sent,u=i.addSubject({identifier:e.identifier}),u.addLiteral(s["g"].fn,e.name),u.addRef(s["c"].inbox,e.inbox),u.addRef(s["f"].storage,e.storage),u.addLiteral(s["a"].created,o),u.addRef(s["b"].maker,e.maker),u.addRef(s["g"].hasMember,e.maker),u.addRef(s["d"].type,s["g"].Group),void 0!=e.purpose&&u.addLiteral("http://www.w3.org/ns/org#purpose",e.purpose),void 0!=e.super&&u.addRef("http://www.w3.org/ns/org#subOrganizationOf",e.super),console.log("GROUP",e),r.prev=24,r.next=27,i.save();case 27:return e.creation={status:"ok",message:"group created"},r.next=30,l.createFolder(e.path+e.encoded_name+"/inbox/Invitations/");case 30:return r.next=32,l.createFolder(e.path+e.encoded_name+"/inbox/Requetes/");case 32:return r.next=34,l.createFolder(e.path+e.encoded_name+"/inbox/Traites/");case 34:return r.next=36,l.createFolder(e.path+e.encoded_name+"/inbox/Corbeille/");case 36:console.log("ok"),r.next=44;break;case 39:r.prev=39,r.t0=r["catch"](24),console.log(r.t0),alert(r.t0),e.creation={status:"error",message:r.t0};case 44:return r.next=46,Object(a["c"])(e.maker);case 46:return c=r.sent,d=c.getSubject(e.maker),d.addRef("http://www.w3.org/ns/org#memberOf",e.url+"#"+e.identifier),r.prev=49,r.next=52,c.save();case 52:r.next=58;break;case 54:r.prev=54,r.t1=r["catch"](49),alert(r.t1),console.log(r.t1);case 58:if(void 0==e.super){r.next=73;break}return r.next=61,Object(a["c"])(e.super);case 61:return p=r.sent,f=p.getSubject(e.super),f.addRef("http://www.w3.org/ns/org#hasSubOrganization",e.url+"#"+e.identifier),r.prev=64,r.next=67,p.save();case 67:r.next=73;break;case 69:r.prev=69,r.t2=r["catch"](64),alert(r.t2),console.log(r.t2);case 73:return r.abrupt("return",e);case 74:case"end":return r.stop()}}),r,null,[[24,39],[49,54],[64,69]])})))()},getGroupStorage:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.data[e]["http://www.w3.org/ns/pim/space#storage"];case 2:return r=t.sent,n={folders:[],files:[]},t.next=6,l.itemExists("".concat(r));case 6:if(!t.sent){t.next=12;break}return t.next=9,l.readFolder("".concat(r));case 9:n=t.sent,t.next=14;break;case 12:return t.next=14,l.createFolder("".concat(r));case 14:return t.abrupt("return",n);case 15:case"end":return t.stop()}}),t)})))()}},computed:{webId:{get:function(){return this.$store.state.webId},set:function(){}},storage:{get:function(){return this.$store.state.storage},set:function(){}}}}},"4ebe":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:" container fluid"},[r("div",{staticClass:"nav"},[void 0!=e.sup?r("b-button",{attrs:{to:"/group?url="+e.sup,variant:"outline-primary",size:"sm"}},[e._v("Super GRoup")]):e._e(),void 0!=e.st.files&&e.st.files.length>0?r("div",{staticClass:"m-2"},[r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-sg",text:"Sous-GRoups",size:"sm"}},e._l(e.st.files,(function(t){return r("b-dropdown-item",{key:t.url,attrs:{to:"/group?url="+t.url+"#we",variant:"outline-info",size:"sm"}},[e._v(" "+e._s(t.name)+" ")])})),1)],1):e._e(),void 0!=e.st.folders&&e.st.folders.length>0?r("div",{staticClass:"m-2"},[r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-dossiers",text:"Dossiers",size:"sm"}},e._l(e.st.folders,(function(t){return r("b-dropdown-item",{key:t.url,attrs:{to:t.url.endsWith("/inbox/")?"/inbox?url="+t.url:"/folder?url="+t.url,variant:"outline-primary",size:"sm"}},[t.url.endsWith("/inbox/")?r("b-icon-mailbox"):e._e(),e._v(" "+e._s(t.name))],1)})),1)],1):e._e()],1),r("div",{staticClass:"row"},[r("b-card",{staticClass:"m-2 col",attrs:{"img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-title",[r("a",{attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.name))])]),void 0!=e.inbox?r("b-button",{attrs:{to:"/inbox?url="+e.inbox,variant:"outline-primary",size:"sm"}},[r("b-icon-mailbox"),e._v(" Inbox")],1):e._e(),r("b-button",{attrs:{href:"https://scenaristeur.github.io/spoggy-simple?source="+e.url,variant:"outline-primary",target:"_blank",size:"sm"}},[e._v("Graphe")]),r("b-button",{attrs:{to:"/profile?url="+e.maker,variant:"outline-primary",size:"sm"}},[e._v("Admin")]),r("b-card-header",[e._v(" "+e._s(e.purpose)+" ")]),r("b-card-text",[r("h5",[e._v("Members")]),r("b-button",{attrs:{to:"/invite?url="+e.url,variant:"outline-primary",size:"sm",disabled:""}},[e._v("Inviter")]),r("b-button",{attrs:{to:"/invite?url="+e.url,variant:"outline-primary",size:"sm",disabled:""}},[e._v("Partager")]),r("b-button",{attrs:{variant:"outline-primary",size:"sm"},on:{click:e.join_req}},[e._v("Rejoindre")]),r("br"),r("ul",e._l(e.members,(function(t){return r("li",{key:t},[e._v(e._s(t))])})),0)],1),e.subgroups.length>0?r("div",[e._v("sous groupes déclarés: "+e._s(e.subgroups))]):e._e(),r("small",[e._v("created:"+e._s(e.created))]),r("br")],1),r("b-card",{staticClass:"m-2 col-12 col-lg-8",attrs:{tag:"article"}},[r("b-card-title",[r("a",{attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.name))]),e._v(" "),r("small",[r("i",[e._v("Cockpit")])])]),r("Cockpit",{attrs:{url:e.url}}),r("b-button",{attrs:{href:"#",variant:"primary"}},[e._v("Go somewhere")])],1)],1)])},a=[],s=(r("99af"),r("b0c0"),r("d3b7"),r("664f"),r("96cf"),r("1da1")),o=r("668b"),i=r("4585"),u=r("00e8"),c=r.n(u),d=r("7fed"),l=r.n(d),p="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),f=new Uint8Array(16);function g(){if(!p)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(f)}var h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function b(e){return"string"===typeof e&&h.test(e)}for(var v=b,m=[],w=0;w<256;++w)m.push((w+256).toString(16).substr(1));function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase();if(!v(r))throw TypeError("Stringified UUID is invalid");return r}var _=x;function k(e,t,r){e=e||{};var n=e.random||(e.rng||g)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return _(n)}var y=k,R=window.solid,S=new l.a(c.a),j={name:"Group",mixins:[i["a"]],components:{Cockpit:function(){return r.e("chunk-a6d559f6").then(r.bind(null,"f3b0"))}},created:function(){void 0!=this.$route.query.url&&(this.url=void 0!=this.$route.hash?this.$route.query.url+this.$route.hash:this.$route.query,this.update())},data:function(){return{group:{},name:"",purpose:"",created:"",inbox:"",maker:"",sup:void 0,members:"",st:"",subgroups:[]}},methods:{update:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s,i,u,c,d,l,p,f,g,h,b,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R.data[e.url]["http://www.w3.org/2006/vcard/ns#fn"];case 2:return e.name=t.sent,t.next=5,R.data[e.url]["http://www.w3.org/ns/org#purpose"];case 5:return e.purpose=t.sent,t.next=8,R.data[e.url]["http://purl.org/dc/terms/created"];case 8:return e.created=t.sent,t.next=11,R.data[e.url]["http://www.w3.org/ns/ldp#inbox"];case 11:return e.inbox=t.sent,t.next=14,R.data[e.url]["http://xmlns.com/foaf/0.1/maker"];case 14:return r=t.sent,e.maker="".concat(r),t.next=18,R.data[e.url]["http://www.w3.org/ns/org#subOrganizationOf"];case 18:e.sup=t.sent,e.members=[],n=!0,a=!1,t.prev=22,i=Object(o["a"])(R.data[e.url]["http://www.w3.org/2006/vcard/ns#hasMember"]);case 24:return t.next=26,i.next();case 26:return u=t.sent,n=u.done,t.next=30,u.value;case 30:if(c=t.sent,n){t.next=37;break}d=c,e.members.push("".concat(d));case 34:n=!0,t.next=24;break;case 37:t.next=43;break;case 39:t.prev=39,t.t0=t["catch"](22),a=!0,s=t.t0;case 43:if(t.prev=43,t.prev=44,n||null==i.return){t.next=48;break}return t.next=48,i.return();case 48:if(t.prev=48,!a){t.next=51;break}throw s;case 51:return t.finish(48);case 52:return t.finish(43);case 53:e.subgroups=[],l=!0,p=!1,t.prev=56,g=Object(o["a"])(R.data[e.url]["http://www.w3.org/ns/org#hasSubOrganization"]);case 58:return t.next=60,g.next();case 60:return h=t.sent,l=h.done,t.next=64,h.value;case 64:if(b=t.sent,l){t.next=71;break}v=b,e.subgroups.push("".concat(v));case 68:l=!0,t.next=58;break;case 71:t.next=77;break;case 73:t.prev=73,t.t1=t["catch"](56),p=!0,f=t.t1;case 77:if(t.prev=77,t.prev=78,l||null==g.return){t.next=82;break}return t.next=82,g.return();case 82:if(t.prev=82,!p){t.next=85;break}throw f;case 85:return t.finish(82);case 86:return t.finish(77);case 87:return t.next=89,e.getGroupStorage(e.url);case 89:e.st=t.sent;case 90:case"end":return t.stop()}}),t,null,[[22,39,43,53],[44,,48,52],[56,73,77,87],[78,,82,86]])})))()},join_req:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="@prefix :      <#> .\n      @prefix as:    <https://www.w3.org/ns/activitystreams#> .\n\n      :it\n      a as:Offer ;\n      as:actor <".concat(e.webId,'> ;\n      as:object :join ;\n      as:summary "').concat(e.webId,' asks to join the group" ;\n      as:target <').concat(e.url,"> .\n\n      :join\n      a as:Join ;\n      as:actor <").concat(e.webId,"> ;\n      as:object <").concat(e.url,'> ;\n      as:summary "').concat(e.webId,' joins group" .'),n="".concat(e.inbox)+"Requetes/"+y()+".ttl",t.prev=2,t.next=5,S.postFile(n,r,"text/turtle");case 5:a=t.sent,1==a.ok&&alert("Demande envoyée"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](2),console.log(t.t0),alert("Erreur"+t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))()}},watch:{url:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("update"),e.update();case 2:case"end":return t.stop()}}),t)})))()}},computed:{url:{get:function(){return void 0!=this.$route.hash?this.$route.query.url+this.$route.hash:this.$route.query.urll},set:function(){}}}},$=j,C=r("2877"),O=Object(C["a"])($,n,a,!1,null,null,null);t["default"]=O.exports},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),s=r("7b0b"),o=r("50c4"),i=r("a691"),u=r("1d80"),c=r("8aa5"),d=r("14c3"),l=Math.max,p=Math.min,f=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,b=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,w=v?"$":"$0";return[function(r,n){var a=u(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!v&&m||"string"===typeof n&&-1===n.indexOf(w)){var s=r(t,e,this,n);if(s.done)return s.value}var u=a(e),f=String(this),g="function"===typeof n;g||(n=String(n));var h=u.global;if(h){var _=u.unicode;u.lastIndex=0}var k=[];while(1){var y=d(u,f);if(null===y)break;if(k.push(y),!h)break;var R=String(y[0]);""===R&&(u.lastIndex=c(f,o(u.lastIndex),_))}for(var S="",j=0,$=0;$<k.length;$++){y=k[$];for(var C=String(y[0]),O=l(p(i(y.index),f.length),0),I=[],E=1;E<y.length;E++)I.push(b(y[E]));var z=y.groups;if(g){var q=[C].concat(I,O,f);void 0!==z&&q.push(z);var G=String(n.apply(void 0,q))}else G=x(C,f,O,I,z,n);O>=j&&(S+=f.slice(j,O)+G,j=O+C.length)}return S+f.slice(j)}];function x(e,r,n,a,o,i){var u=n+e.length,c=a.length,d=h;return void 0!==o&&(o=s(o),d=g),t.call(i,d,(function(t,s){var i;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":i=o[s.slice(1,-1)];break;default:var d=+s;if(0===d)return t;if(d>c){var l=f(d/10);return 0===l?t:l<=c?void 0===a[l-1]?s.charAt(1):a[l-1]+s.charAt(1):t}i=a[d-1]}return void 0===i?"":i}))}}))},"664f":function(e,t,r){"use strict";var n=r("23e7"),a=r("857a"),s=r("af03");n({target:"String",proto:!0,forced:s("sup")},{sup:function(){return a(this,"sup","","")}})},"857a":function(e,t,r){var n=r("1d80"),a=/"/g;e.exports=function(e,t,r,s){var o=String(n(e)),i="<"+t;return""!==r&&(i+=" "+r+'="'+String(s).replace(a,"&quot;")+'"'),i+">"+o+"</"+t+">"}},"8a79":function(e,t,r){"use strict";var n=r("23e7"),a=r("06cf").f,s=r("50c4"),o=r("5a34"),i=r("1d80"),u=r("ab13"),c=r("c430"),d="".endsWith,l=Math.min,p=u("endsWith"),f=!c&&!p&&!!function(){var e=a(String.prototype,"endsWith");return e&&!e.writable}();n({target:"String",proto:!0,forced:!f&&!p},{endsWith:function(e){var t=String(i(this));o(e);var r=arguments.length>1?arguments[1]:void 0,n=s(t.length),a=void 0===r?n:l(s(r),n),u=String(e);return d?d.call(t,u,a):t.slice(a-u.length,a)===u}})},af03:function(e,t,r){var n=r("d039");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b0c0:function(e,t,r){var n=r("83ab"),a=r("9bf2").f,s=Function.prototype,o=s.toString,i=/^\s*function ([^ (]*)/,u="name";n&&!(u in s)&&a(s,u,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=group.54876c29.js.map