(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["createGroup"],{"16b0":function(e,t,r){"use strict";r("a15b"),r("baa5"),r("ac1f"),r("8a79"),r("5319"),r("498a"),r("96cf");var n=r("1da1"),a=r("00e8"),o=r.n(a),s=r("7fed"),u=r.n(s),i=window.solid,c=new u.a(o.a),l=r("9b92"),p=l.namedNode;t["a"]={created:function(){this.webId=this.$store.state.webId,this.storage=this.$store.state.storage},methods:{getStorage:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.endsWith("#we")||e.endsWith("#this")?e:e+"#we",console.log("REEEES",n),r.next=4,i.data[n].storage;case 4:if(a=r.sent,console.log("".concat(a)),void 0!="".concat(a)){r.next=25;break}return o=t.url.substring(0,t.url.lastIndexOf("/")),r.next=10,i.data[n].vcard$fn;case 10:return s=r.sent,u="".concat(s).trim().replace(/\s/g,"_"),console.log("".concat(s),t.url,u),a=[o,u,""].join("/"),console.log(a),r.next=17,!c.itemExists(t.storage);case 17:if(!r.sent){r.next=22;break}return r.next=20,c.createFolder(t.storage);case 20:r.next=23;break;case 22:case 23:return r.next=25,i.data[n]["http://www.w3.org/ns/pim/space#storage"].set(p(a));case 25:return r.abrupt("return","".concat(a));case 26:case"end":return r.stop()}}),r)})))()}},computed:{webId:{get:function(){return this.$store.state.webId},set:function(){}},storage:{get:function(){return this.$store.state.storage},set:function(){}}}}},4585:function(e,t,r){"use strict";r("b0c0"),r("ac1f"),r("8a79"),r("5319"),r("96cf");var n=r("1da1"),a=r("4d8d"),o=r("6dc1"),s=r("00e8"),u=r.n(s),i=r("7fed"),c=r.n(i),l=window.solid,p=new c.a(u.a);t["a"]={methods:{createGroup:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,s,u,i,c,l,d,g;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("todo formate a good url without single quotes..."),e.encoded_name=e.name.replace(/\s/g,"_").replace(/'/g,"_").replace(/"/g,"_"),e.path=e.path.endsWith("/")?e.path:e.path+"/",n=new Date,s=n.toISOString(),e.url=e.path+e.encoded_name+".ttl",e.identifier="we",e.maker=t.webId,e.inbox="./"+e.encoded_name+"/inbox/",e.storage="./"+e.encoded_name+"/",r.next=12,Object(a["a"])(e.url);case 12:return u=r.sent,i=u.addSubject({identifier:e.identifier}),i.addLiteral(o["h"].fn,e.name),i.addRef(o["c"].inbox,e.inbox),i.addRef(o["g"].storage,e.storage),i.addLiteral(o["a"].created,s),i.addRef(o["b"].maker,e.maker),i.addRef(o["h"].hasMember,e.maker),i.addRef(o["d"].type,o["h"].Group),void 0!=e.purpose&&i.addLiteral("http://www.w3.org/ns/org#purpose",e.purpose),void 0!=e.super&&i.addRef("http://www.w3.org/ns/org#subOrganizationOf",e.super),console.log("GROUP",e),r.prev=24,r.next=27,u.save();case 27:return e.creation={status:"ok",message:"group created"},r.next=30,p.createFolder(e.path+e.encoded_name+"/inbox/Invitations/");case 30:return r.next=32,p.createFolder(e.path+e.encoded_name+"/inbox/Requetes/");case 32:return r.next=34,p.createFolder(e.path+e.encoded_name+"/inbox/Traites/");case 34:return r.next=36,p.createFolder(e.path+e.encoded_name+"/inbox/Corbeille/");case 36:console.log("ok"),r.next=44;break;case 39:r.prev=39,r.t0=r["catch"](24),console.log(r.t0),alert(r.t0),e.creation={status:"error",message:r.t0};case 44:return r.next=46,Object(a["c"])(e.maker);case 46:return c=r.sent,l=c.getSubject(e.maker),l.addRef("http://www.w3.org/ns/org#memberOf",e.url+"#"+e.identifier),r.prev=49,r.next=52,c.save();case 52:r.next=58;break;case 54:r.prev=54,r.t1=r["catch"](49),alert(r.t1),console.log(r.t1);case 58:if(void 0==e.super){r.next=73;break}return r.next=61,Object(a["c"])(e.super);case 61:return d=r.sent,g=d.getSubject(e.super),g.addRef("http://www.w3.org/ns/org#hasSubOrganization",e.url+"#"+e.identifier),r.prev=64,r.next=67,d.save();case 67:r.next=73;break;case 69:r.prev=69,r.t2=r["catch"](64),alert(r.t2),console.log(r.t2);case 73:return r.abrupt("return",e);case 74:case"end":return r.stop()}}),r,null,[[24,39],[49,54],[64,69]])})))()},getGroupStorage:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.data[e]["http://www.w3.org/ns/pim/space#storage"];case 2:return r=t.sent,n={folders:[],files:[]},t.next=6,p.itemExists("".concat(r));case 6:if(!t.sent){t.next=12;break}return t.next=9,p.readFolder("".concat(r));case 9:n=t.sent,t.next=14;break;case 12:return t.next=14,p.createFolder("".concat(r));case 14:return t.abrupt("return",n);case 15:case"end":return t.stop()}}),t)})))()}}}},"498a":function(e,t,r){"use strict";var n=r("23e7"),a=r("58a8").trim,o=r("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return a(this)}})},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),o=r("7b0b"),s=r("50c4"),u=r("a691"),i=r("1d80"),c=r("8aa5"),l=r("14c3"),p=Math.max,d=Math.min,g=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var m=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,w=m?"$":"$0";return[function(r,n){var a=i(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!m&&b||"string"===typeof n&&-1===n.indexOf(w)){var o=r(t,e,this,n);if(o.done)return o.value}var i=a(e),g=String(this),f="function"===typeof n;f||(n=String(n));var h=i.global;if(h){var k=i.unicode;i.lastIndex=0}var S=[];while(1){var $=l(i,g);if(null===$)break;if(S.push($),!h)break;var R=String($[0]);""===R&&(i.lastIndex=c(g,s(i.lastIndex),k))}for(var _="",y=0,E=0;E<S.length;E++){$=S[E];for(var O=String($[0]),j=p(d(u($.index),g.length),0),I=[],C=1;C<$.length;C++)I.push(v($[C]));var P=$.groups;if(f){var q=[O].concat(I,j,g);void 0!==P&&q.push(P);var A=String(n.apply(void 0,q))}else A=x(O,g,j,I,P,n);j>=y&&(_+=g.slice(y,j)+A,y=j+O.length)}return _+g.slice(y)}];function x(e,r,n,a,s,u){var i=n+e.length,c=a.length,l=h;return void 0!==s&&(s=o(s),l=f),t.call(u,l,(function(t,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(i);case"<":u=s[o.slice(1,-1)];break;default:var l=+o;if(0===l)return t;if(l>c){var p=g(l/10);return 0===p?t:p<=c?void 0===a[p-1]?o.charAt(1):a[p-1]+o.charAt(1):t}u=a[l-1]}return void 0===u?"":u}))}}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),o="["+a+"]",s=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),i=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(u,"")),r}};e.exports={start:i(1),end:i(2),trim:i(3)}},"8a79":function(e,t,r){"use strict";var n=r("23e7"),a=r("06cf").f,o=r("50c4"),s=r("5a34"),u=r("1d80"),i=r("ab13"),c=r("c430"),l="".endsWith,p=Math.min,d=i("endsWith"),g=!c&&!d&&!!function(){var e=a(String.prototype,"endsWith");return e&&!e.writable}();n({target:"String",proto:!0,forced:!g&&!d},{endsWith:function(e){var t=String(u(this));s(e);var r=arguments.length>1?arguments[1]:void 0,n=o(t.length),a=void 0===r?n:p(o(r),n),i=String(e);return l?l.call(t,i,a):t.slice(a-i.length,a)===i}})},a15b:function(e,t,r){"use strict";var n=r("23e7"),a=r("44ad"),o=r("fc6a"),s=r("a640"),u=[].join,i=a!=Object,c=s("join",",");n({target:"Array",proto:!0,forced:i||!c},{join:function(e){return u.call(o(this),void 0===e?",":e)}})},b0c0:function(e,t,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,s=o.toString,u=/^\s*function ([^ (]*)/,i="name";n&&!(i in o)&&a(o,i,{configurable:!0,get:function(){try{return s.call(this).match(u)[1]}catch(e){return""}}})},c8d2:function(e,t,r){var n=r("d039"),a=r("5899"),o="​᠎";e.exports=function(e){return n((function(){return!!a[e]()||o[e]()!=o||a[e].name!==e}))}},f9c1:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[null!=e.webId?r("div",[r("b-form-group",[r("b-form-input",{ref:"name",staticClass:"m-3",attrs:{size:"lg",placeholder:"Nom du groupe"},model:{value:e.group.name,callback:function(t){e.$set(e.group,"name",t)},expression:"group.name"}}),r("b-form-textarea",{staticClass:"m-3",attrs:{size:"lg",placeholder:"Raison d'être"},model:{value:e.group.purpose,callback:function(t){e.$set(e.group,"purpose",t)},expression:"group.purpose"}}),r("b-form-input",{staticClass:"m-3",attrs:{size:"lg",placeholder:"Super groupe"},model:{value:e.group.super,callback:function(t){e.$set(e.group,"super",t)},expression:"group.super"}}),r("b-form-select",{staticClass:"m-3",attrs:{options:e.privacy_options,size:"lg"},model:{value:e.group.privacy,callback:function(t){e.$set(e.group,"privacy",t)},expression:"group.privacy"}}),r("b-form-input",{staticClass:"m-3",attrs:{size:"lg",placeholder:"Chemin"},model:{value:e.path,callback:function(t){e.path=t},expression:"path"}})],1),r("b-button",{attrs:{variant:"primary"},on:{click:e.create}},[e._v("Créer")]),r("p",[e._v(" "+e._s(e.group)+" "+e._s(e.group_url)+" ")])],1):r("div",[e._v("Please login with a Solid webId to create a group !")])])},a=[],o=(r("b0c0"),r("96cf"),r("1da1")),s=r("4585"),u=r("16b0"),i={name:"CreateGroup",mixins:[s["a"],u["a"]],mounted:function(){this.$refs.name.focus()},data:function(){return{path:"",group:{privacy:"public"},privacy_options:[{value:"public",text:"Public. Tout le monde peut voir qui est dans le groupe et ce qui est publié"},{value:"private",text:"Privé. Seuls les membres peuvent voir qui est dans le groupe et ce qui est publié"}],group_url:null}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:void 0!=e.$route.query.url?e.setSuperAndPath(e.$route.query.url,e.$route.hash):e.path=e.$store.state.storage+e.group.privacy+"/";case 1:case"end":return t.stop()}}),t)})))()},methods:{setSuperAndPath:function(e,t){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(void 0==e){n.next=10;break}return r.group.super=void 0!=t?e+t:e,console.log(r.group.super),n.next=5,r.getGroupStorage(r.group.super);case 5:a=n.sent,r.path="".concat(a.url),console.log(r.path),n.next=11;break;case 10:r.path=r.$store.state.storage+r.group.privacy+"/";case 11:case"end":return n.stop()}}),n)})))()},create:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.group.path=e.path,t.next=3,e.createGroup(e.group);case 3:r=t.sent,console.log("group result",r),e.group_url=r.url,"ok"==r.creation.status&&e.$router.push("group?url="+r.url+"#"+r.identifier);case 7:case"end":return t.stop()}}),t)})))()}},watch:{url:function(){this.group.super=this.url},$route:function(e){this.setSuperAndPath(e.query.url,e.hash)}},computed:{url:{get:function(){return void 0!=this.$route.hash?this.$route.query.url+this.$route.hash:this.$route.query.urll},set:function(){}}}},c=i,l=r("2877"),p=Object(l["a"])(c,n,a,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=createGroup.6e099164.js.map