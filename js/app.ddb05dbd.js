(function(e){function t(t){for(var r,o,s=t[0],i=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function s(e){return i.p+"js/"+({about:"about",inbox:"inbox",createGroup:"createGroup",edit:"edit",group:"group"}[e]||e)+"."+{about:"3440d907","chunk-2d0a3369":"89afb4b2","chunk-179c975c":"7915b666","chunk-1c8329a3":"da2b43c8","chunk-688fe063":"13849157","chunk-782eadc0":"ddbc389d",inbox:"a0463adb",createGroup:"bf2820ab",edit:"343c817c",group:"55bc65a3","chunk-2d226c5a":"dc260225","chunk-2d209b7f":"fbab2258","chunk-2d228e9e":"e7ba87e9","chunk-bc4f471e":"bf8cf599","chunk-748f4d22":"df718f2c","chunk-2d22cfa9":"45bdc2e3","chunk-102a2df6":"a82f09a9","chunk-29d327cd":"fe5129ea","chunk-34c8f764":"427c509d","chunk-5ee4e328":"e441e53e","chunk-2d21ee7d":"505423ba","chunk-bd7913a4":"4a702bb1","chunk-2d21de10":"fd94fd42","chunk-7ba67897":"b15fc66e","chunk-2d0a3e2d":"c5afb61a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={inbox:1,edit:1,"chunk-748f4d22":1,"chunk-102a2df6":1,"chunk-29d327cd":1,"chunk-bd7913a4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",inbox:"inbox",createGroup:"createGroup",edit:"edit",group:"group"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0a3369":"31d6cfe0","chunk-179c975c":"31d6cfe0","chunk-1c8329a3":"31d6cfe0","chunk-688fe063":"31d6cfe0","chunk-782eadc0":"31d6cfe0",inbox:"7d933061",createGroup:"31d6cfe0",edit:"6147178c",group:"31d6cfe0","chunk-2d226c5a":"31d6cfe0","chunk-2d209b7f":"31d6cfe0","chunk-2d228e9e":"31d6cfe0","chunk-bc4f471e":"31d6cfe0","chunk-748f4d22":"53722b7f","chunk-2d22cfa9":"31d6cfe0","chunk-102a2df6":"ab769625","chunk-29d327cd":"1f134cd3","chunk-34c8f764":"31d6cfe0","chunk-5ee4e328":"31d6cfe0","chunk-2d21ee7d":"31d6cfe0","chunk-bd7913a4":"86e7224b","chunk-2d21de10":"31d6cfe0","chunk-7ba67897":"31d6cfe0","chunk-2d0a3e2d":"31d6cfe0"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/group/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f5a":function(e,t,n){e.exports=n.p+"img/patreon.7a8adca5.png"},"2a10":function(e,t,n){"use strict";n("4751")},4360:function(e,t,n){"use strict";n("99af"),n("96cf");var r=n("1da1"),o=n("668b"),a=n("2b0e"),u=n("2f62"),s=function(){return{channel:null,users:{"https://spoggy-test3.solidcommunity.net/profile/card#me":{pic:"boo"}},root:"",fileUrl:"",messages:[]}},i={},c={},l={setChannel:function(e,t){console.log(t),e.channel=t},setUser:function(e,t){console.log("User",t);var n=t.webId,r=t.pic;e.users[n]=r},setFileUrl:function(e,t){e.fileUrl=t},setRoot:function(e,t){console.log(t),e.root=t},setMessages:function(e,t){e.messages=t}},d={namespaced:!0,state:s,getters:i,actions:c,mutations:l};a["default"].use(u["a"]);var p=window.solid;t["a"]=new u["a"].Store({state:{webId:null,storage:null,groups:[]},mutations:{setWebId:function(e,t){console.log(t),e.webId=t},setStorage:function(e,t){console.log(t),e.storage=t},setGroups:function(e,t){e.groups=t}},actions:{setWebId:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,a,u,s,i,c,l,d,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.commit("setWebId",t),null==t){n.next=50;break}return n.t0=e,n.t1="",n.next=6,p.data[t].storage;case 6:n.t2=n.sent,n.t3=n.t1.concat.call(n.t1,n.t2),n.t0.commit.call(n.t0,"setStorage",n.t3),r=[],console.log("TODO: remplacer par solid-client-js peut-il eviter les nombreux appels ?"),a=!0,u=!1,n.prev=13,i=Object(o["a"])(p.data[t]["http://www.w3.org/ns/org#memberOf"]);case 15:return n.next=17,i.next();case 17:return c=n.sent,a=c.done,n.next=21,c.value;case 21:if(l=n.sent,a){n.next=34;break}return d=l,n.t4="".concat(d),n.next=27,p.data["".concat(d)].vcard$fn;case 27:n.t5=n.sent,f={url:n.t4,name:n.t5},r.push(f),e.commit("setGroups",r);case 31:a=!0,n.next=15;break;case 34:n.next=40;break;case 36:n.prev=36,n.t6=n["catch"](13),u=!0,s=n.t6;case 40:if(n.prev=40,n.prev=41,a||null==i.return){n.next=45;break}return n.next=45,i.return();case 45:if(n.prev=45,!u){n.next=48;break}throw s;case 48:return n.finish(45);case 49:return n.finish(40);case 50:case"end":return n.stop()}}),n,null,[[13,36,40,50],[41,,45,49]])})))()}},modules:{chat:d}})},4751:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Accueil")]),e._v(" | "),"undefined"==e.url?n("router-link",{attrs:{to:"/createGroup"}},[e._v("Nouveau GRoup")]):n("router-link",{attrs:{to:"/createGroup?url="+e.url}},[e._v("Nouveau Sous-GRoup")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("A Propos")]),n("SolidLoginButton")],1),e._m(0),n("router-view",{staticClass:"container"}),n("SolidTrackSession"),n("hr"),e._v(" 0.0.19 - fix path of createGroup ")],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"https://www.patreon.com/smag0",target:"_blank"}},[r("img",{attrs:{src:n("0f5a"),width:"100px"}}),r("br"),e._v(" Soutenir GRoup ")])}],u=(n("d3b7"),{name:"App",components:{SolidLoginButton:function(){return Promise.all([n.e("chunk-2d0a3369"),n.e("chunk-2d226c5a")]).then(n.bind(null,"e9a1"))},SolidTrackSession:function(){return Promise.all([n.e("chunk-2d0a3369"),n.e("chunk-179c975c")]).then(n.bind(null,"c1a7"))}},computed:{url:{get:function(){return void 0!=this.$route.hash?this.$route.query.url+this.$route.hash:this.$route.query.urll},set:function(){}}}}),s=u,i=(n("5c0b"),n("2877")),c=Object(i["a"])(s,o,a,!1,null,null,null),l=c.exports,d=n("9483");Object(d["a"])("".concat("/group/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("Une nouvelle version de Solid Groups et disponible. Veuillez fermer l'application et la rouvrir pour en profiter")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("UserGroups"),n("HelloWorld")],1)},h=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("div",[r("b-jumbotron",{attrs:{header:"GRoup",lead:"Bienvenue sur Ton application Group !"}},[r("p",[e._v(" Pour gérer collectivement un projet, un lieu, une association..."),r("br"),r("b",[e._v("GRoup")]),e._v(" s'appuie sur les résultats de recherches récentes dans plusieurs domaines de la gouvernance partagée. ")]),r("b-button",{staticClass:"m-3",attrs:{variant:"dark",to:"/createGroup",size:"lg"}},[r("b",[e._v("Créer un GRoup")])]),r("b-button",{staticClass:"m-3",attrs:{variant:"dark",size:"lg",href:"https://www.patreon.com/smag0",target:"_blank"}},[e._v(" Soutenir GRoup sur "),r("img",{attrs:{src:n("0f5a"),width:"100px"}})])],1)],1),r("h3",[e._v("Sur GRoup, vous pouvez")]),r("ul",[r("li",[r("router-link",{attrs:{to:"/createGroup"}},[e._v("Créer des GRoups")]),e._v(" avec chat, wiki, gestions des projets et des tensions, gestions d'indicateurs, et on vous concocte de nouvelles fonctionnalités pour très bientôt. Si vous avez des idées ou des besoins particuliers, faites-le nous savoir sur "),r("a",{attrs:{href:"https://github.com/scenaristeur/group/issues",target:"_blank"}},[e._v("github")]),e._v(" ou en créant un GRoup et en invitant "),r("b",[e._v("https://www.spoggy-test7.solidcommunity.net/profile/card#me")])],1),r("li",[r("router-link",{attrs:{to:"/group?url=https%3A%2F%2Fspoggy-test7.solidcommunity.net%2Fpublic%2Fdfcv.ttl#we",rel:"noopener"}},[e._v(" Voir des Groups")]),e._v(" créés par d'autres utilisateurs et demander à les rejoindre ")],1),r("li",[e._v("Gérer les utilisateurs de vos Groups")])]),r("h3",[e._v("Quelle est la différence entre GRoup et une autre plateforme de réseau social ?")]),e._m(0),r("b-alert",{attrs:{show:""}},[e._v(" Tout le monde peut devenir fournisseur de POD, en installant un serveur compatible et il en existe de plus en plus. ")]),r("p",[e._v("Vous pouvez même installer un fournisseur chez vous sur un Raspberry Pi. ")]),r("h3",[e._v("Le Pod")]),r("p",[e._v("Le Pod Solid, c'est l'espace d'hébergement propre à chaque compte et c'est aussi lui qui fournit l'authentification via le webId du POD")]),r("b-alert",{attrs:{show:""}},[e._v(" Par exemple, "),r("b",[e._v("https://www.spoggy-test7.solidcommunity.net/profile/card#me")]),e._v(" évoqué plus haut est l'identifiant de l'un de mes Pods. et il est associé au POD "),r("b",[e._v("https://www.spoggy-test7.solidcommunity.net/")]),e._v(" dont vous pouvez consulter la partie publique à l'adresse "),r("a",{attrs:{href:"https://www.spoggy-test7.solidcommunity.net/public",target:"_blank"}},[e._v(" https://www.spoggy-test7.solidcommunity.net/public")]),e._v(". ")]),r("p",[e._v("D'autres implementations et outils s'appuient aussi sur ces principes comme Semapps de l'Assemblée Virtuelle ou Hubl de Startinblox (Happy Dev'), offrant des possibilités d'interconnexion avec de multiples bases de connaissances ou sources de données.")]),r("p",[e._v("Sur un Pod Solid, les données sont stockées en respectant les schémas du Web Sémantique & du LinkedData afin de profiter au maximum de l'interopérabilité et pouvoir se brancher sur des bases de connaissances plus vastes comme DBPedia, WikiData, ou encore d'autres endpoints Sparql comme Persée oucelui de la BNF... ")]),r("p",[e._v("Et comme vous gérez votre Pod, c'est vous qui choisissez à qui vous partagez vos données, quelles applications peuvent les manipuler...")]),r("p"),r("h3",[e._v("Prêt à tenter l'aventure ? ")]),r("b-button",{attrs:{variant:"dark",to:"/createGroup",size:"lg"}},[r("b",[e._v("Créer un GRoup")])]),r("p",{staticClass:"m-3"},[e._v(".")])],1)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("La principale différence se situe au niveau de la gestion de vos données."),n("br"),e._v(" En effet, GRoup est basé sur "),n("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Solid_(projet_de_web_d%C3%A9centralis%C3%A9)",target:"_blank"}},[e._v("la plateforme Solid")]),e._v(" dont les spécifications offrent aux utilisateurs l'opportunité de stocker leurs données là où ils le souhaitent "),n("ul",[n("li",[e._v("chez un fournisseur de POD 'officiel' comme "),n("a",{attrs:{href:"https://inrupt.net/",target:"_blank"}},[e._v("https://inrupt.net/")]),e._v(" proposé par l'entreprise Inrupt dont le rôle est de soutenir le projet Solid,")]),n("li",[e._v("ou celui de la communauté Solid "),n("a",{attrs:{href:"https://solidcommunity.net",target:"_blank"}},[e._v("https://solidcommunity.net")]),e._v(",")]),n("li",[e._v("chez des indépendants comme "),n("a",{attrs:{href:"https://solidweb.org",target:"_blank"}},[e._v("https://solidweb.org")]),e._v(" proposé par Matthias, un développeur allemand. ")])])])}],v={name:"HelloWorld"},g=v,k=(n("2a10"),Object(i["a"])(g,b,m,!1,null,"367ebf12",null)),_=k.exports,w={name:"Home",components:{HelloWorld:_,UserGroups:function(){return Promise.all([n.e("chunk-2d0a3369"),n.e("chunk-1c8329a3"),n.e("chunk-688fe063")]).then(n.bind(null,"585a"))}}},y=w,x=Object(i["a"])(y,f,h,!1,null,null,null),S=x.exports;r["default"].use(p["a"]);var G=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/createGroup",name:"createGroup",component:function(){return Promise.all([n.e("chunk-2d0a3369"),n.e("chunk-1c8329a3"),n.e("createGroup")]).then(n.bind(null,"f9c1"))}},{path:"/group",name:"group",props:function(e){return{query:e.query.url}},component:function(){return Promise.all([n.e("chunk-2d0a3369"),n.e("chunk-1c8329a3"),n.e("group")]).then(n.bind(null,"4ebe"))}},{path:"/inbox",name:"Inbox",component:function(){return Promise.all([n.e("chunk-2d0a3369"),n.e("chunk-1c8329a3"),n.e("chunk-782eadc0"),n.e("inbox")]).then(n.bind(null,"85fc"))}},{path:"/edit",name:"Edit",component:function(){return Promise.all([n.e("chunk-2d0a3369"),n.e("chunk-1c8329a3"),n.e("edit")]).then(n.bind(null,"1071"))}}],P=new p["a"]({mode:"history",base:"/group/",routes:G}),O=P,j=n("4360"),C=n("5f5b"),A=n("b1e0"),E=(n("f9e3"),n("2dd8"),n("5530")),R={cutoff:50},q={install:function(e,t){e.VERSION="v0.0.1";var n=Object(E["a"])(Object(E["a"])({},R),t);console.log(n),e.mixin({data:function(){return{CLASSES:{Tension:{name:"Tension",fields:[{label:"Nom",predicate:"label"},{label:"Ce qui est",predicate:"wi"},{label:"Ce qui devrait être",predicate:"wsb"},{label:"Domaines",predicate:"domain"},{label:"Proposition",predicate:"proposition"}]},Action:{name:"Action",fields:[{label:"Nom",predicate:"label"},{label:"status",predicate:"status"}]},Indicateur:{name:"Indicateur",fields:[{label:"Nom",predicate:"label"},{label:"valeur",predicate:"value"}]},Reunion:{name:"Réunion",fields:[{label:"Nom",predicate:"label"},{label:"date",predicate:"date"}]}}}},methods:{}})}};r["default"].use(C["a"]),r["default"].use(A["a"]),r["default"].use(q),r["default"].config.productionTip=!1,new r["default"]({router:O,store:j["a"],render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.ddb05dbd.js.map