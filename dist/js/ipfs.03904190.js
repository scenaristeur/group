(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ipfs"],{"6f08":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipfs-info"},[n("h3",[t._v(t._s(t.status))]),n("h4",[t._v("ID: "+t._s(t.id))]),n("h4",[t._v("Agent version: "+t._s(t.agentVersion))])])},r=[],a=(n("96cf"),n("1da1")),i={name:"IpfsInfo",data:function(){return{status:"Connecting to IPFS...",id:"",agentVersion:""}},mounted:function(){this.getIpfsNodeInfo()},methods:{getIpfsNodeInfo:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,s,r,a,i,o,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$ipfs;case 3:return n=e.sent,e.next=6,n.id();case 6:return s=e.sent,r=s.agentVersion,a=s.id,t.agentVersion=r,t.id=a,t.status="Connected to IPFS =)",i=JSON.stringify({foo:"bar",tic:"tac"}),e.next=15,n.add(i);case 15:return o=e.sent,console.log("IPFS cid:",o),e.next=19,n.cat("/ipfs/"+o);case 19:return c=e.sent,e.next=22,n.cat("https://cid.ipfs.io/#"+o.path);case 22:u=e.sent,console.log(c,u),e.next=29;break;case 26:e.prev=26,e.t0=e["catch"](0),t.status="Error: ".concat(e.t0);case 29:case"end":return e.stop()}}),e,null,[[0,26]])})))()}}},o=i,c=(n("f0a2"),n("2877")),u=Object(c["a"])(o,s,r,!1,null,"7b2ef39e",null);e["default"]=u.exports},ead8:function(t,e,n){},f0a2:function(t,e,n){"use strict";n("ead8")}}]);
//# sourceMappingURL=ipfs.03904190.js.map