// import { createDocument, fetchDocument } from 'tripledoc';
// import { vcard, dct, foaf, ldp, /*rdfs,*/ rdf, space} from 'rdf-namespaces'
// let ldflex = window.solid
// import auth from 'solid-auth-client';
// import FC from 'solid-file-client'
// const fc   = new FC( auth )
import {
  getSolidDataset,
  getThingAll,
  // getStringNoLocale,
   getUrlAll
} from "@inrupt/solid-client";

import { RDF /*FOAF, VCARD*/ } from "@inrupt/vocab-common-rdf";


export default {
  created(){
    this.webId = this.$store.state.webId
    this.storage = this.$store.state.storage
  },
  methods: {
    async getMail(url){
      let mail = {status : "ok", url:url}
      const mailDataset = await getSolidDataset(url);
      console.log(mailDataset)
      const things = getThingAll(mailDataset);

      things.forEach((t) => {

t.types = getUrlAll(t, RDF.type)

      });
        console.log(things)

      mail.things = things

      return mail
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
