(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11291843"],{"11a8":function(e,t){function r(e){this.value=e}r.prototype.equals=function(e){return!!e&&e.termType===this.termType&&e.value===this.value},r.prototype.termType="NamedNode",e.exports=r},"16b0":function(e,t,r){"use strict";r("a15b"),r("baa5"),r("ac1f"),r("8a79"),r("5319"),r("498a"),r("96cf");var n=r("1da1"),a=r("00e8"),s=r.n(a),o=r("7fed"),u=r.n(o),i=window.solid,c=new u.a(s.a),p=r("9b92"),d=p.namedNode;t["a"]={created:function(){this.webId=this.$store.state.webId,this.storage=this.$store.state.storage},methods:{getStorage:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.endsWith("#we")||e.endsWith("#this")?e:e+"#we",r.next=3,i.data[n].storage;case 3:if(a=r.sent,void 0!="".concat(a)){r.next=21;break}return s=t.url.substring(0,t.url.lastIndexOf("/")),r.next=8,i.data[n].vcard$fn;case 8:return o=r.sent,u="".concat(o).trim().replace(/\s/g,"_"),a=[s,u,""].join("/"),r.next=13,!c.itemExists(t.storage);case 13:if(!r.sent){r.next=18;break}return r.next=16,c.createFolder(t.storage);case 16:r.next=19;break;case 18:case 19:return r.next=21,i.data[n]["http://www.w3.org/ns/pim/space#storage"].set(d(a));case 21:return r.abrupt("return","".concat(a));case 22:case"end":return r.stop()}}),r)})))()}},computed:{webId:{get:function(){return this.$store.state.webId},set:function(){}},storage:{get:function(){return this.$store.state.storage},set:function(){}}}}},"3cf1":function(e,t,r){var n=r("47b7"),a=r("d76c"),s=r("5afa"),o=r("11a8"),u=r("e1cc"),i=r("a55c");function c(){}c.namedNode=function(e){return new o(e)},c.blankNode=function(e){return new n(e)},c.literal=function(e,t){return"string"===typeof t?-1===t.indexOf(":")?new s(e,t):new s(e,null,c.namedNode(t)):new s(e,null,t)},c.defaultGraph=function(){return c.defaultGraphInstance},c.variable=function(e){return new i(e)},c.triple=function(e,t,r){return c.quad(e,t,r)},c.quad=function(e,t,r,n){return new u(e,t,r,n||c.defaultGraphInstance)},c.defaultGraphInstance=new a,e.exports=c},4585:function(e,t,r){"use strict";r("b0c0"),r("ac1f"),r("8a79"),r("5319"),r("96cf");var n=r("1da1"),a=r("4d8d"),s=r("6dc1"),o=r("00e8"),u=r.n(o),i=r("7fed"),c=r.n(i),p=window.solid,d=new c.a(u.a);t["a"]={methods:{createGroup:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,o,u,i,c,p,l,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("todo formate a good url without single quotes..."),e.encoded_name=e.name.replace(/\s/g,"_").replace(/'/g,"_").replace(/"/g,"_"),e.path=e.path.endsWith("/")?e.path:e.path+"/",n=new Date,o=n.toISOString(),e.url=e.path+e.encoded_name+".ttl",e.identifier="we",e.maker=t.webId,e.inbox="./"+e.encoded_name+"/inbox/",e.storage="./"+e.encoded_name+"/",r.next=12,Object(a["a"])(e.url);case 12:return u=r.sent,i=u.addSubject({identifier:e.identifier}),i.addLiteral(s["g"].fn,e.name),i.addRef(s["c"].inbox,e.inbox),i.addRef(s["f"].storage,e.storage),i.addLiteral(s["a"].created,o),i.addRef(s["b"].maker,e.maker),i.addRef(s["g"].hasMember,e.maker),i.addRef(s["d"].type,s["g"].Group),void 0!=e.purpose&&i.addLiteral("http://www.w3.org/ns/org#purpose",e.purpose),void 0!=e.super&&i.addRef("http://www.w3.org/ns/org#subOrganizationOf",e.super),console.log("GROUP",e),r.prev=24,r.next=27,u.save();case 27:return e.creation={status:"ok",message:"group created"},r.next=30,d.createFolder(e.path+e.encoded_name+"/inbox/Invitations/");case 30:return r.next=32,d.createFolder(e.path+e.encoded_name+"/inbox/Requetes/");case 32:return r.next=34,d.createFolder(e.path+e.encoded_name+"/inbox/Traites/");case 34:return r.next=36,d.createFolder(e.path+e.encoded_name+"/inbox/Corbeille/");case 36:console.log("ok"),r.next=44;break;case 39:r.prev=39,r.t0=r["catch"](24),console.log(r.t0),alert(r.t0),e.creation={status:"error",message:r.t0};case 44:return r.next=46,Object(a["c"])(e.maker);case 46:return c=r.sent,p=c.getSubject(e.maker),p.addRef("http://www.w3.org/ns/org#memberOf",e.url+"#"+e.identifier),r.prev=49,r.next=52,c.save();case 52:r.next=58;break;case 54:r.prev=54,r.t1=r["catch"](49),alert(r.t1),console.log(r.t1);case 58:if(void 0==e.super){r.next=73;break}return r.next=61,Object(a["c"])(e.super);case 61:return l=r.sent,f=l.getSubject(e.super),f.addRef("http://www.w3.org/ns/org#hasSubOrganization",e.url+"#"+e.identifier),r.prev=64,r.next=67,l.save();case 67:r.next=73;break;case 69:r.prev=69,r.t2=r["catch"](64),alert(r.t2),console.log(r.t2);case 73:return r.abrupt("return",e);case 74:case"end":return r.stop()}}),r,null,[[24,39],[49,54],[64,69]])})))()},getGroupStorage:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.data[e]["http://www.w3.org/ns/pim/space#storage"];case 2:return r=t.sent,n={folders:[],files:[]},t.next=6,d.itemExists("".concat(r));case 6:if(!t.sent){t.next=12;break}return t.next=9,d.readFolder("".concat(r));case 9:n=t.sent,t.next=14;break;case 12:return t.next=14,d.createFolder("".concat(r));case 14:return t.abrupt("return",n);case 15:case"end":return t.stop()}}),t)})))()}}}},"47b7":function(e,t){function r(e){this.value=e||"b"+ ++r.nextId}r.prototype.equals=function(e){return!!e&&e.termType===this.termType&&e.value===this.value},r.prototype.termType="BlankNode",r.nextId=0,e.exports=r},"585a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[null!=e.webId?r("div",[e._v(" MES GROUPES "),e.groups.length>0?r("div",[e._v(e._s(e.groups.length)+" GRoups.")]):e._e(),r("b-list-group",e._l(e.groups,(function(t){return r("b-list-group-item",{key:t.url,attrs:{to:{path:"/group?url="+t.url}}},[e._v(" "+e._s(t.name||t.url)+" ")])})),1)],1):e._e()])},a=[],s=r("4585"),o=r("16b0"),u={name:"UserGroups",mixins:[s["a"],o["a"]],computed:{groups:{get:function(){return this.$store.state.groups},set:function(){}}}},i=u,c=r("2877"),p=Object(c["a"])(i,n,a,!1,null,null,null);t["default"]=p.exports},"5afa":function(e,t,r){var n=r("11a8");function a(e,t,r){this.value=e,this.datatype=a.stringDatatype,this.language="",t?(this.language=t,this.datatype=a.langStringDatatype):r&&(this.datatype=r)}a.prototype.equals=function(e){return!!e&&e.termType===this.termType&&e.value===this.value&&e.language===this.language&&e.datatype.equals(this.datatype)},a.prototype.termType="Literal",a.langStringDatatype=new n("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),a.stringDatatype=new n("http://www.w3.org/2001/XMLSchema#string"),e.exports=a},"9b92":function(e,t,r){var n=r("3cf1");e.exports=n},a55c:function(e,t){function r(e){this.value=e}r.prototype.equals=function(e){return!!e&&e.termType===this.termType&&e.value===this.value},r.prototype.termType="Variable",e.exports=r},baa5:function(e,t,r){var n=r("23e7"),a=r("e58c");n({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},d76c:function(e,t){function r(){this.value=""}r.prototype.equals=function(e){return!!e&&e.termType===this.termType},r.prototype.termType="DefaultGraph",e.exports=r},e1cc:function(e,t,r){var n=r("d76c");function a(e,t,r,a){this.subject=e,this.predicate=t,this.object=r,this.graph=a||new n}a.prototype.equals=function(e){return!!e&&("Quad"===e.termType||!e.termType)&&e.subject.equals(this.subject)&&e.predicate.equals(this.predicate)&&e.object.equals(this.object)&&e.graph.equals(this.graph)},a.prototype.termType="Quad",a.prototype.value="",e.exports=a},e58c:function(e,t,r){"use strict";var n=r("fc6a"),a=r("a691"),s=r("50c4"),o=r("a640"),u=r("ae40"),i=Math.min,c=[].lastIndexOf,p=!!c&&1/[1].lastIndexOf(1,-0)<0,d=o("lastIndexOf"),l=u("indexOf",{ACCESSORS:!0,1:0}),f=p||!d||!l;e.exports=f?function(e){if(p)return c.apply(this,arguments)||0;var t=n(this),r=s(t.length),o=r-1;for(arguments.length>1&&(o=i(o,a(arguments[1]))),o<0&&(o=r+o);o>=0;o--)if(o in t&&t[o]===e)return o||0;return-1}:c}}]);
//# sourceMappingURL=chunk-11291843.64e4cfc8.js.map