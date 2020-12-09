<template>
  <div class="sidebar">
    <span style="font-size:20px;cursor:pointer" @click="openNav"><i class="fa fa-folder ml-2 mt-2 "></i>
      &#9776; TSB - Tiny Solid Browser
    </span>

    <div id="mySidenav" ref="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>

      <!-- <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a> -->
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-light" size="sm">dossier courant: {{ current }}</button>
        <button type="button" class="list-group-item list-group-item-info" @click="go_parent">.. ({{ parent }})</button>

        <button type="button" v-for="fo in folder.folders" :key="fo.name"
        @click="select(fo)"
        class="list-group-item list-group-item-warning py-1">
        {{ fo.name}}
      </button>
      <button type="button"
      v-for="fi in folder.files" :key="fi.name"
      @click="select(fi)"
      class="list-group-item py-0">
      {{ fi.name}}
    </button>
  </div>
</div>


<!-- {{ folder}}<hr>
{{ url}} -->
</div>
</template>

<script>
//let ldflex = window.solid
// import { createDocument, fetchDocument } from 'tripledoc';
// import { vcard, dct, foaf, ldp, /*rdfs,*/ rdf, space} from 'rdf-namespaces'
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
// let ldflex = window.solid
// const popUri = 'https://solidcommunity.net/common/popup.html'

export default {
  name: 'SideBar',
  components: {
    //  'GroupTabs': () => import('@/components/group/GroupTabs')
  },

  data: function () {
    return {
      //  config: {},
      //valeur: true,
      first: true,
      folder: {folders:[], files: [], url:""},
      current: "",
      parent: "",
      selected: { url: null, content: 'TiSoBr est un mini editeur de POD Solid. \nPour vous faciliter la vie... ' }//'const my_new_code_here = "Blabla"'
    }
  },
  async   created(){

    // let session = await auth.currentSession()
    // if (!session) { session = await auth.popupLogin({ popupUri:popUri }) }
    // this.webId = session.webId
    // let st = await ldflex.data[session.webId]['http://www.w3.org/ns/pim/space#storage'] //this.getGroupStorage(this.group.super)
    // this.storage = `${st}`
    this.storage = this.$store.state.storage

    this.url = this.$route.query.url
    if (this.url != undefined && this.url != 'undefined'){
      console.log("1",this.url)
      this.folder = await fc.readFolder(this.url)
      this.parent = this.folder.parent
    }
    //this.update()

  },
  methods: {
    async update() {

      if(this.current != undefined && this.current.length > 0){
        console.log(this.current)
        this.folder = await fc.readFolder( this.current )
        this.parent = this.folder.parent
      }else if(this.storage != undefined){
        this.current = this.storage
        console.log("STORAGE",this.storage)
        console.log("2",this.current)
        this.folder = await fc.readFolder( this.current )
        this.parent = this.folder.parent
      }else{
        console.log('rien')
      }
      console.log(this.folder)
      this.parent = this.folder.parent
    },
    openNav() {
      this.$refs.mySidenav.style.width = "250px";
    },

    closeNav() {
      this.$refs.mySidenav.style.width = "0";
    },
    async select(selected){
      //  console.log(selected, selected.type)
      this.current = selected.url
      console.warn('[ optionnal : show folder structure in ttl format ( readfile(folder.url)) -> cool but less perf]')

      this.selected = selected
      this.$router.push({ path: 'browser', query: { url: this.current }})
      if (selected.type == 'folder'){
        this.update()
      }else{
        this.update()
        //  console.log(selected)

        //  console.log(this.selected)
        this.closeNav()
      }
    },
    async go_parent(){
      this.current = this.parent
      this.selected = {}
      this.selected.url = this.parent
      this.update()
    },

  },
  watch: {
    url(){
      console.log(this.url)
      this.update()
    },
    storage(){
      this.update()
    }
  },
  computed:{
    webId:{
      get: function() { return this.$store.state.webId},
      set: function() {}
    },
    storage:{
      get: function() { return this.$store.state.storage},
      set: function() {}
    },
    url:{
      get: function() { return this.$route.hash != undefined ? this.$route.query.url+this.$route.hash : this.$route.query.urll},
      set: function() {}
    },
  }
}
</script>

<style scoped>
/*@import '../web_modules/codemirror/lib/codemirror.css';*/

.list-group-item {
  text-align: left;
}
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align:center;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;

}

.sidenav a:hover{
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
/* SLIDER */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
