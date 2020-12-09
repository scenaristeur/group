<template>
  <div>

    <div class="alert alert-info" role="alert">
      {{ file.url }}
    </div>
    <div class="btn-group ml-auto" role="group" aria-label="Basic example">
      <button class="btn btn-sm"><i class="fa fa-home"></i></button>
      <button class="btn btn-sm"><i class="fill-person"></i></button>
      <button type="button" class="btn btn-sm" @click="nouveau">Nouveau</button>

      <button type="button" class="btn btn-sm" @click="save">enregistrer</button>
      <button type="button" class=" btn-danger" @click="supprime">Supprimer <i class="fa fa-trash"></i></button>
    </div>


    <div ref="editor" class="code"></div>

    <button type="button" class="btn btn-success" @click="download_tisobr">Telecharger TiSoBr</button>
    <button type="button" class="btn btn-success btn-sm" @click="install_tisobr">Installer TiSoBr dans sur mon POD</button>
  </div>
</template>

<script>

import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import CodeFlask from 'codeflask'

export default {
  name: "SolidEditor",
  //  props: ['file'],
  created(){
    this.update()
  },
  data: function () {
    return {
      url: {},
      file: {}
      //  message: "boo"
    }
  },
  watch:{
    file(){
      this.update()
    },
    $route(to){
      console.log( to.hash, to.query.url)
      this.update()
    }
  },
  mounted () {
    //  console.log("content",this.content)
    //  console.log('Hello World', this.message)
    //  console.log(this.$refs.editor)
    const elem = this.$refs.editor;
    this.flask = new CodeFlask(elem, { language: 'js'}) // ,  lineNumbers: true  bug https://github.com/kazzkiq/CodeFlask/issues/102
    this.flask.onUpdate((code) => {
      console.log("_")
       console.log("UPDATED CODE",code)
      // do something with code here.
      // this will trigger whenever the code
      // in the editor changes.
    });
    this.flask.updateCode('var you = "Cool people that help devs, when giving them feedback ;-)"');
    const code = this.flask.getCode();
    console.log(code)

  },
  methods: {
    async save() {
      this.file.content = this.flask.getCode();


      console.log(this.file)
      if (window.confirm("Souhaitez vous réellement enregistrer "+this.file.name)) {
        try{
          await fc.createFile( this.file.url, this.file.content, this.file.type )
          alert(this.file.url+" sauvegardé")
        }
        catch(e){
          alert(e)
        }
      }
    },
    nouveau(){
      this.file.name = window.prompt("Nom du fichier avec extension");

      //this.file.url = this.file.url+this.file.name
      this.file.url = window.prompt("Url", this.file.url+this.file.name);
      console.log(this.file)
      this.flask.updateCode('');
    },
    async supprime() {
      console.log("del",this.file)
      if (window.confirm("Souhaitez vous réellement supprimer "+this.file.name)) {
        //  window.open("fenetre.html", "Nouvelle fenêtre", "");
        try{
          await fc.deleteFile(this.file.url)
          alert(this.file.url+" supprimé")
          this.flask.updateCode('');
        }
        catch(e){
          alert(e)
        }
      }
    },
    async download_tisobr(){
      console.log("Install",this.file)
      console.log(fc)
      try{
        window.open("https://kinolien.github.io/gitzip/?download=/scenaristeur/base-solid/tree/main/npx/", "Telechargement TiSoBr", "");
        //await   fetch('https://kinolien.github.io/gitzip/?download=/scenaristeur/base-solid/tree/main/npx/')//, this.file.parent)
      }
      catch(e){
        console.log(e)
      }
    },
    async install_tisobr(){
      console.log("Install",this.file)
      console.log(fc)
      try{
        const result = await fc.extractZipArchive('https://raw.githack.com/scenaristeur/base-solid/main/tisobr.zip', this.file.parent)
        console.log(result)
        //window.open("https://kinolien.github.io/gitzip/?download=/scenaristeur/base-solid/tree/main/npx/", "Telechargement TiSoBr", "");
        //await   fetch('https://kinolien.github.io/gitzip/?download=/scenaristeur/base-solid/tree/main/npx/')//, this.file.parent)
      }
      catch(e){
        console.log(e)
      }
    },

    async update(){
      //  console.log(this.file)
      this.file.url = this.$route.query.url
      console.log(this.file.url)
      let content = await fc.readFile(this.file.url)
      this.flask.updateCode(content)
    }
  }
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
.code {
  position: relative;
  width: 90vw;
  height: 80vh;
  border: 2px solid #ccc;
}
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 6px 8px;
  font-size: 18px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>
