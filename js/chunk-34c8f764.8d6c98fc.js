(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34c8f764"],{a434:function(t,e,r){"use strict";var n=r("23e7"),o=r("23cb"),s=r("a691"),a=r("50c4"),u=r("7b0b"),i=r("65f0"),c=r("8418"),l=r("1dde"),f=r("ae40"),p=l("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,b=Math.min,j=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!d},{splice:function(t,e){var r,n,l,f,p,d,_=u(this),m=a(_.length),y=o(t,m),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=m-y):(r=w-2,n=b(h(s(e),0),m-y)),m+r-n>j)throw TypeError(v);for(l=i(_,n),f=0;f<n;f++)p=y+f,p in _&&c(l,f,_[p]);if(l.length=n,r<n){for(f=y;f<m-n;f++)p=f+n,d=f+r,p in _?_[d]=_[p]:delete _[d];for(f=m;f>m-n+r;f--)delete _[f-1]}else if(r>n)for(f=m-n;f>y;f--)p=f+n-1,d=f+r-1,p in _?_[d]=_[p]:delete _[d];for(f=0;f<r;f++)_[f+y]=arguments[f+2];return _.length=m-n+r,l}})},dc60:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{attrs:{"no-body":""}},[r("b-tabs",{attrs:{card:""},scopedSlots:t._u([{key:"tabs-end",fn:function(){return[r("b-nav-item",{attrs:{role:"presentation",href:"#"},on:{click:function(e){return e.preventDefault(),t.newProjet(e)}}},[r("b",[t._v("+")])])]},proxy:!0},{key:"empty",fn:function(){return[r("div",{staticClass:"text-center text-muted"},[t._v(" Il n'y a aucun projet ouvert"),r("br"),t._v(" Ouvrez un nouveau projet encliquant sur le bouton "),r("b",[t._v("+")]),t._v(" juste au dessus. ")])]},proxy:!0}])},t._l(t.projets,(function(e){return r("b-tab",{key:"dyn-tab-"+e,attrs:{title:"Projet "+e}},[t._v(" Projet "+t._s(e)+" "),r("b-button",{staticClass:"float-right",attrs:{size:"sm",variant:"danger"},on:{click:function(r){return t.closeProjet(e)}}},[t._v(" Close projet ")])],1)})),1)],1)],1)},o=[],s=(r("a434"),r("4360")),a={store:s["a"],name:"Projets",data:function(){return{projets:[],projetCounter:0}},methods:{closeProjet:function(t){for(var e=0;e<this.projets.length;e++)this.projets[e]===t&&this.projets.splice(e,1)},newProjet:function(){this.projets.push(this.projetCounter++)}}},u=a,i=r("2877"),c=Object(i["a"])(u,n,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-34c8f764.8d6c98fc.js.map