<template>
  <div class="container">
    <h3>{{ item.classe.name }}</h3>

    <b-input v-for="f in item.classe.fields" :key="f.predicate"  :ref="f.predicate" :name="f.predicate" :placeholder='f.label'></b-input>

    <b-button @click="add">Créer</b-button>

  </div>
</template>

<script>
import store from '@/store'
import ProfileMixin from '@/mixins/ProfileMixin'
import { createDocument, fetchDocument } from 'tripledoc';
import { dct, foaf, ldp, rdfs, rdf} from 'rdf-namespaces'

export default {
  store,
  name: 'Edit',
  mixins: [ProfileMixin],
  // components:{
  //   'ViewSelector': () => import('@/components/ViewSelector.vue'),
  // },
  async created(){

    if(this.$route.query.item != undefined){
      this.item = this.$route.query.item
      this.item.classe = this.CLASSES[this.item.block.type]
      console.log("CLASSE",this.item)
    }
  },
  data: function(){
    return {
      item: {classe: {fields: []}}
    }
  },
  methods: {
    async   add(){
      console.log("add",this.$refs)
      this.item.thing = {}
      for (const ref of Object.values(this.$refs)) {
        let el = ref[0].$el
        console.log(el.name, el.value);
        this.item.thing[el.name] = el.value
      }
      console.log(this.item)
      //    this.tension.displayType = "Tension"
      // console.log("TODO use http://purl.org/vocab/lifecycle/schema#Task")
      // see https://vocab.org/lifecycle/schema#Task & https://noeldemartin.github.io/solid-focus/#
      this.item.thing.types = [
        "http://purl.org/vocab/lifecycle/schema#Task",
        "http://www.w3.org/ns/ldp#Resource",
        this.item.classe.name
      ]
      this.item.thing.path = this.item.block.path
      let folder =  await this.createFile(this.item.thing)
      console.log(folder)
      this.$router.back()

    },
    async createFile(data){
      console.log(data)

      data.label = data.label.trim()
      data.ttl_name = data.label.replace(/\s/g, '_')

      this.activity = {
        actor: {name: this.webId},
        type: "Create",
        summary: "",
        object:{
          name: data.label,
          url: "",
          type: "Task"}
        }


        let dataDoc = {}
        if (data.url == undefined){
          data.url = data.path+data.ttl_name+".ttl"
          dataDoc = await createDocument(data.url);
          this.activity.type = "Create"
        }else{
          dataDoc = await fetchDocument(data.url);
          this.activity.type = "Update"
        }

        let subj =  dataDoc.addSubject({identifier:"this"})
        var dateObj = new Date();
        var date = dateObj.toISOString()
        if (data.created != undefined ){
          data.modified = date
          subj.addLiteral(dct.modified, date)
          subj.removeAll(rdfs.label)
          subj.removeAll(ldp.inbox)
          subj.removeAll(rdf.type)
        }else{
          data.created = date  //http://purl.org/dc/terms/created
          subj.addLiteral(dct.created, date)
          subj.addLiteral(rdfs.label, data.label)
          subj.addRef(ldp.inbox, "./"+data.ttl_name+"/inbox/")
          subj.addRef(foaf.maker, this.webId)
          data.types.forEach((t) => {
            subj.addRef(rdf.type, t)
          });
        }


        if(data.types.includes('Action')){
          this.activity.object.type = 'Task'
          subj.addLiteral('https://vocab.org/lifecycle/schema#state', data.status)
        }else if(data.types.includes('Tension')){
          this.activity.object.type = 'Tension'
          if (data.created != undefined ){

            subj.removeAll("https://holacratie.solidcommunity.net/public/holacratie#whatis",data.wi)
            subj.removeAll("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe",data.wsb)
            //  subj.addRef(foaf.maker, this.$store.state.solid.webId)

            subj.removeAll("http://www.w3.org/ns/org#memberOf")
            subj.removeAll("http://www.w3.org/ns/org#purpose")
          }

          subj.addLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatis",data.wi)
          subj.addLiteral("https://holacratie.solidcommunity.net/public/holacratie#whatshouldbe",data.wsb)

          if (data.roles != undefined){
            data.roles.split(",").forEach((r) => {
              subj.addLiteral("http://www.w3.org/ns/org#memberOf", r.trim())
            });
            console.log("TODO: must look at existing groups & existing frineds groups & activity published groups")
          }
          if(data.domains != undefined){
            data.domains.split(",").forEach((d) => {
              subj.addLiteral("http://www.w3.org/ns/org#purpose", d.trim())
            });
            console.log("TODO: must look at https://www.wikidata.org/w/api.php?action=wbsearchentities&language=fr&format=json&search=Ecology")
          }
        }
        await dataDoc.save();
        console.log("data saved",data.label )
        //  this.makeToast("Created "+data.label, "ok", "success")
        //}
        // catch(e){
        //   //  this.makeToast("Error creating "+data.label, e, "danger")
        //   console.log(e)
        // }

        console.log(this.activity)
        //       if (data.privacy == "public"){
        //     //    console.log("ACTIVITY !!")
        //         this.activity.object.url = data.url
        //         //  this.activity.summary = [this.activity.actor.name, this.activity.type, "a", this.activity.object.type, "with name", this.activity.object.name].join(" ")
        //
        //         this.sendActivity()
        // console.log("todo",data.label )
        //       //  this.makeToast("TODO : must Activity publish", data.label, "success")
        //       }
        return data
      },
    },
  }
  </script>
  <style>
  .color-primary {
    color: #00fac4;
  }
  </style>
