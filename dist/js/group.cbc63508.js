(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group"],{"4ebe":function(t,r,e){"use strict";e.r(r);var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:" container "},[e("div",{staticClass:"row"},[e("b-card",{staticClass:"m-2",attrs:{"img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-title",[e("a",{attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.name))])]),e("b-card-header",[t._v(t._s(t.purpose))]),e("b-card-text",[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),e("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Go somewhere")])],1),e("b-card",{staticClass:"m-2 col",attrs:{"img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-title",[e("a",{attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.name))])]),e("b-card-header",[t._v(t._s(t.purpose))]),e("b-card-text",[void 0!=t.sup?e("b-button",{attrs:{to:"/group?url="+t.sup,variant:"primary"}},[t._v("Go Super")]):t._e(),void 0!=t.inbox?e("b-button",{attrs:{to:"/inbox?url="+t.inbox,variant:"primary"}},[t._v("Inbox")]):t._e(),t._v(" members: "+t._s(t.members)),e("br"),t._v(" subgroups: "+t._s(t.subgroups)),e("br"),t._v(" sup "+t._s(t.sup)+" ")],1),t._l(t.st.folders,(function(r){return e("b-button",{key:r.url,attrs:{to:"/group?url="+r.url,variant:"outline-primary"}},[t._v(t._s(r.name))])})),t._l(t.st.files,(function(r){return e("b-button",{key:r.url,attrs:{to:"/group?url="+r.url+"#we",variant:"primary"}},[t._v(t._s(r.name))])})),t._v(" created: "+t._s(t.created)),e("br"),t._v(" maker: "+t._s(t.maker)),e("br"),t._v(" storage: "+t._s(t.st)),e("br")],2)],1)])},n=[],s=(e("b0c0"),e("664f"),e("96cf"),e("1da1")),u=e("668b"),o=e("4585"),i=window.solid,c={name:"Group",mixins:[o["a"]],created:function(){void 0!=this.$route.query.url&&(this.url=void 0!=this.$route.hash?this.$route.query.url+this.$route.hash:this.$route.query,this.update())},data:function(){return{group:{},name:"",purpose:"",created:"",inbox:"",maker:"",sup:"",members:"",st:"",subgroups:[]}},methods:{update:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var e,a,n,s,o,c,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i.data[t.url]["http://www.w3.org/2006/vcard/ns#fn"];case 2:return t.name=r.sent,r.next=5,i.data[t.url]["http://www.w3.org/ns/org#purpose"];case 5:return t.purpose=r.sent,r.next=8,i.data[t.url]["http://purl.org/dc/terms/created"];case 8:return t.created=r.sent,r.next=11,i.data[t.url]["http://www.w3.org/ns/ldp#inbox"];case 11:return t.inbox=r.sent,r.next=14,i.data[t.url]["http://xmlns.com/foaf/0.1/maker"];case 14:return t.maker=r.sent,r.next=17,i.data[t.url]["http://www.w3.org/ns/org#subOrganizationOf"];case 17:t.sup=r.sent,t.members=[],e=!0,a=!1,r.prev=21,s=Object(u["a"])(i.data[t.url]["http://www.w3.org/2006/vcard/ns#hasMember"]);case 23:return r.next=25,s.next();case 25:return o=r.sent,e=o.done,r.next=29,o.value;case 29:if(c=r.sent,e){r.next=36;break}p=c,t.members.push("".concat(p));case 33:e=!0,r.next=23;break;case 36:r.next=42;break;case 38:r.prev=38,r.t0=r["catch"](21),a=!0,n=r.t0;case 42:if(r.prev=42,r.prev=43,e||null==s.return){r.next=47;break}return r.next=47,s.return();case 47:if(r.prev=47,!a){r.next=50;break}throw n;case 50:return r.finish(47);case 51:return r.finish(42);case 52:return r.next=54,t.getGroupStorage(t.url);case 54:t.st=r.sent;case 55:case"end":return r.stop()}}),r,null,[[21,38,42,52],[43,,47,51]])})))()}},watch:{url:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:console.log("update"),t.update();case 2:case"end":return r.stop()}}),r)})))()}},computed:{url:{get:function(){return void 0!=this.$route.hash?this.$route.query.url+this.$route.hash:this.$route.query.urll},set:function(){}}}},p=c,l=e("2877"),m=Object(l["a"])(p,a,n,!1,null,null,null);r["default"]=m.exports},"664f":function(t,r,e){"use strict";var a=e("23e7"),n=e("857a"),s=e("af03");a({target:"String",proto:!0,forced:s("sup")},{sup:function(){return n(this,"sup","","")}})},"857a":function(t,r,e){var a=e("1d80"),n=/"/g;t.exports=function(t,r,e,s){var u=String(a(t)),o="<"+r;return""!==e&&(o+=" "+e+'="'+String(s).replace(n,"&quot;")+'"'),o+">"+u+"</"+r+">"}},af03:function(t,r,e){var a=e("d039");t.exports=function(t){return a((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}}}]);
//# sourceMappingURL=group.cbc63508.js.map