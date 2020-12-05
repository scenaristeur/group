//https://learnvue.co/2020/01/how-to-make-your-first-vuejs-plugin/
// import { getSolidDataset,
//   //saveSolidDatasetAt,
//   getThingAll,
//   getThing,
//   getStringNoLocale,
//   getUrlAll,
//   getUrl } from "@inrupt/solid-client";
//
//   import { FOAF, VCARD, DCTERMS, RDF } from "@inrupt/vocab-common-rdf";

const defaultOptions = {
  cutoff: 50
};

export default {
  // called by Vue.use(FirstPlugin)
  // merge default options with arg options


  install(Vue, options) {
    Vue.VERSION = 'v0.0.1';


    let userOptions = {...defaultOptions, ...options};
    console.log(userOptions)
    //  console.log(userOptions)

    // create a mixin
    Vue.mixin({
      data: function(){
        return {
          CLASSES :{
            Tension: {name: "Tension",
            fields:[
              {label:"Nom", predicate:"label"},
              {label: "Ce qui est", predicate:"wi"},
              {label: "Ce qui devrait être", predicate: "wsb"},
              {label: "Domaines", predicate:"domain"},
              {label: "Proposition", predicate: "proposition"}
            ]
          },
          Action: {name: "Action",
          fields: [
            {label:"Nom", predicate:"label"},
            {label: "status", predicate:"status"}
          ]},
          Indicateur: {name: "Indicateur",
          fields: [
            {label:"Nom", predicate:"label"},
            {label: "valeur", predicate:"value"}
          ]},
          Reunion: {name: "Réunion",
          fields: [
            {label:"Nom", predicate:"label"},
            {label: "date", predicate:"date"}
          ]},
        }
      }
    },
    // created() {
    //   console.log(Vue.VERSION);
    // },
    methods: {

    }



  });


},


}
