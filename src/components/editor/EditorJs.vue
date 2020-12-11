<template>
  <div class="editorjs">
    EditorJs : {{ url}}
    <div class="container">
      JS EDITOR
      <b-button-group>
        <b-button @click='nouveau' >Nouveau</b-button>
        <b-button @click='saveFile'>Enregistrer</b-button>
      </b-button-group>
      <!-- (autosave Switch pour collaboration) -->
      <editor ref="editor" header list code checklist  :config="config" />
      <!-- :initialized="onInitialized" -->
      <!-- <button id='save-button' style="font-size: 2rem;" @click="save">Save</button>
      <editor
      autofocus
      ref="editor"
      holder-id="codex-editor"
      save-button-id="save-button"
      :init-data="initData"
      @save="save"
      @ready="onReady"
      @change="onChange"
      /> -->
    </div>

    <div>


      <b-modal id="modal-filename" title="Nouveau fichier">
        <div>
          <b-form-input v-model="filename" placeholder="Nom du fichier (.json)"></b-form-input>
          <div class="mt-2">Value: {{ filename }}</div>
        </div>
        <div>
          <b-form-input v-model="path" placeholder="chemin"></b-form-input>
          <div class="mt-2">Value: {{ path }}</div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
//let ldflex = window.solid
// import { createDocument, fetchDocument } from 'tripledoc';
// import { vcard, dct, foaf, ldp, /*rdfs,*/ rdf, space} from 'rdf-namespaces'
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )

import Header from '@editorjs/header';
import List from '@editorjs/list';
import CodeTool from '@editorjs/code'
import Paragraph from '@editorjs/paragraph'
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Checklist from '@editorjs/checklist'
import Marker from '@editorjs/marker'
import Warning from '@editorjs/warning'
import RawTool from '@editorjs/raw'
import Quote from '@editorjs/quote'
import InlineCode from '@editorjs/inline-code'
import Delimiter from '@editorjs/delimiter'
import SimpleImage from '@editorjs/simple-image'
import Personality from'@editorjs/personality';

export default {
  name: 'EditorJs',
  components: {
    //  'GroupTabs': () => import('@/components/group/GroupTabs')
  },
  mounted(){
    this.update()
  },
  data: function () {
    return {
      path:"",
      //t: [], //pour eviter les erreurs editor-js ?
      filename:"",
      url: {},
      folder: {folders:[], files: [], url:""},
      current: "",
      parent: "",
      //  webId: null,
      //storage: "",
      config: {
        tools:{
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a header',
              levels: [2, 3, 4],
              defaultLevel: 3,
            }
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          code: {
            class: CodeTool
          },
          paragraph: {
            class: Paragraph,
            placeholder: "Tape ton texte ici..."
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                imgur: true
              }
            }
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },
          checklist: {
            class: Checklist,
          },
          Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
          },
          warning: {
            class: Warning,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+W',
            config: {
              titlePlaceholder: 'Title',
              messagePlaceholder: 'Message',
            },
          },
          raw: RawTool,
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author',
            },
          },
          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
          },
          delimiter: Delimiter,
          image: SimpleImage,
          personality: {
            class: Personality,
            config: {
              endpoint: 'http://localhost:8008/uploadFile'  // Your backend file uploader endpoint
            }
          }
        },
        onReady: () => {
          console.log('on ready')
        },
        // onChange: (args) => {
        //   console.log('Now I know that Editor\'s content changed!', args)
        //   //  this.save()
        // },
        dataEmpty:{
          "time": 1591362820044,
          "blocks": [
            {
              "type" : "header",
              "data" : {
                "text" : "Editor.js",
                "level" : 2
              }
            }
          ],
          "version" : "2.18.0"
        },
        data: {
          "time": 1591362820044,
          "blocks": [
            {
              "type" : "header",
              "data" : {
                "text" : "Editor.js",
                "level" : 2
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
              }
            },
            {
              "type" : "header",
              "data" : {
                "text" : "Key features",
                "level" : 3
              }
            },
            {
              "type" : "personality",
              "data" : {
                "name" : "Elon Musk",
                "description" : "Elon Reeve Musk FRS is a technology entrepreneur, investor, and engineer. He holds South African, Canadian, and U.S. citizenship and is the founder",
                "link" : "https://twitter.com/elonmusk",
                "photo" : "https://capella.pics/3c0e1b97-bc56-4961-b54e-2a6c2c3260f2.jpg"
              }
            },
            {
              "type" : "list",
              "data" : {
                "style" : "unordered",
                "items" : [
                  "It is a block-styled editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a simple API"
                ]
              }
            },
            {
              "type" : "header",
              "data" : {
                "text" : "What does it mean «block-styled editor»",
                "level" : 3
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
              }
            },
            {
              "type" : "header",
              "data" : {
                "text" : "What does it mean clean data output",
                "level" : 3
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "Given data can be used as you want: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
              }
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "Clean data is useful to sanitize, validate and process on the backend."
              }
            },
            {
              "type" : "delimiter",
              "data" : {}
            },
            {
              "type" : "paragraph",
              "data" : {
                "text" : "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
              }
            },
            {
              "type" : "image",
              "data" : {
                "file" : {
                  "url" : "https://codex.so/public/app/img/external/codex2x.png"
                },
                "caption" : "",
                "withBorder" : false,
                "stretched" : false,
                "withBackground" : false
              }
            },
          ],
          "version" : "2.18.0"
        }
      },

    }
  },
  methods: {
    nouveau(){

      this.path = this.url.substring(0, this.url.lastIndexOf('/')+1);
      console.log(this.path)
      this.$bvModal.show('modal-filename')
      //this.config.data = this.config.dataEmpty

      this.$refs.editor.state.editor.clear()
    this.$refs.editor.state.editor.render()
      //  console.log(this.config.data)
        //  this.$refs.editor.render()
    },
    async update() {
      this.url = this.$route.query.url
      console.log("URL",this.url)
      this.url.endsWith('/') == true ? this.folder = await fc.readFolder(this.url) : this.file = await fc.readFile(this.url)
      console.log(this.folder)
      console.log(this.file, this.url.endsWith('.json'))
      console.log("state",this.$refs.editor.state)
      if (this.url.endsWith('.json') == true){
        console.log('CHARGE',JSON.parse(this.file))
        this.$refs.editor.config.data = JSON.parse(this.file)
        try{
          this.$refs.editor.state.editor.render()
          console.log('CHARGE')
        }catch(e){
          console.log(e)
        }

      }
    },
    // onInitialized(ed){
    //   console.log(ed)
    // },
    async saveFile(){
      try{
        const response = await this.$refs.editor.state.editor.save().then((res)=>res);

        //  let path = this.url.substring(0, this.url.lastIndexOf('/')+1)+'doc_blocks.json';
        console.log(this.path)
        try{
          await fc.createFile( this.path+this.filename+'.json', JSON.stringify(response), 'text/x-json' )
          alert(this.path+" sauvegardé")
        }
        catch(e){
          alert(e)
        }
      }

      catch(e){
        console.log("-")
      }

    }
    // async  save() {
    //   console.log(this.$refs.editor);
    //   const response = await this.$refs.editor.state.editor.save().then((res)=>res);
    //   console.log( JSON.stringify(response) )
    //   // this.$refs.editor.save();
    //   // console.log("data", this.data)
    // },
    // onReady: () => {
    //         console.log('on ready')
    //       },
    //       onChange: (args) => {
    //         console.log('Now I know that Editor\'s content changed!')
    //       },
  },
  watch: {
    url(){
      console.log(this.url)
    },
    $route(to){
      console.log( to.hash, to.query.url)
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
  }
}
</script>
<style>
editorjs {
  margin: 1rem;
  padding: 1rem;
}
</style>
