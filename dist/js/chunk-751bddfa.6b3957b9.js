(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-751bddfa"],{a434:function(e,t,r){"use strict";var n=r("23e7"),o=r("23cb"),a=r("a691"),i=r("50c4"),s=r("7b0b"),u=r("65f0"),c=r("8418"),l=r("1dde"),f=r("ae40"),d=l("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,h=Math.min,v=9007199254740991,w="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d||!p},{splice:function(e,t){var r,n,l,f,d,p,j=s(this),m=i(j.length),g=o(e,m),y=arguments.length;if(0===y?r=n=0:1===y?(r=0,n=m-g):(r=y-2,n=h(b(a(t),0),m-g)),m+r-n>v)throw TypeError(w);for(l=u(j,n),f=0;f<n;f++)d=g+f,d in j&&c(l,f,j[d]);if(l.length=n,r<n){for(f=g;f<m-n;f++)d=f+n,p=f+r,d in j?j[p]=j[d]:delete j[p];for(f=m;f>m-n+r;f--)delete j[f-1]}else if(r>n)for(f=m-n;f>g;f--)d=f+n-1,p=f+r-1,d in j?j[p]=j[d]:delete j[p];for(f=0;f<r;f++)j[f+g]=arguments[f+2];return j.length=m-n+r,l}})},ae40:function(e,t,r){var n=r("83ab"),o=r("d039"),a=r("5135"),i=Object.defineProperty,s={},u=function(e){throw e};e.exports=function(e,t){if(a(s,e))return s[e];t||(t={});var r=[][e],c=!!a(t,"ACCESSORS")&&t.ACCESSORS,l=a(t,0)?t[0]:u,f=a(t,1)?t[1]:void 0;return s[e]=!!r&&!o((function(){if(c&&!n)return!0;var e={length:-1};c?i(e,1,{enumerable:!0,get:u}):e[1]=1,r.call(e,l,f)}))}},dc60:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{attrs:{"no-body":""}},[r("b-tabs",{attrs:{card:""},scopedSlots:e._u([{key:"tabs-end",fn:function(){return[r("b-nav-item",{attrs:{role:"presentation",href:"#"},on:{click:function(t){return t.preventDefault(),e.newProjet(t)}}},[r("b",[e._v("+")])])]},proxy:!0},{key:"empty",fn:function(){return[r("div",{staticClass:"text-center text-muted"},[e._v(" Il n'y a aucun projet ouvert"),r("br"),e._v(" Ouvrez un nouveau projet encliquant sur le bouton "),r("b",[e._v("+")]),e._v(" juste au dessus. ")])]},proxy:!0}])},e._l(e.projets,(function(t){return r("b-tab",{key:"dyn-tab-"+t,attrs:{title:"Projet "+t}},[e._v(" Projet "+e._s(t)+" "),r("b-button",{staticClass:"float-right",attrs:{size:"sm",variant:"danger"},on:{click:function(r){return e.closeProjet(t)}}},[e._v(" Close projet ")])],1)})),1)],1)],1)},o=[],a=(r("a434"),r("96cf"),r("1da1")),i=r("4360"),s={store:i["a"],name:"Projets",created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.webId=e.$store.state.profile.profile.webId;case 1:case"end":return t.stop()}}),t)})))()},data:function(){return{projets:[],projetCounter:0}},methods:{closeProjet:function(e){for(var t=0;t<this.projets.length;t++)this.projets[t]===e&&this.projets.splice(t,1)},newProjet:function(){this.projets.push(this.projetCounter++)}},watch:{webId:function(){console.log("watch webid",this.webId)}},computed:{webId:{get:function(){return this.$store.state.profile.profile.webId},set:function(){}}}},u=s,c=r("2877"),l=Object(c["a"])(u,n,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-751bddfa.6b3957b9.js.map