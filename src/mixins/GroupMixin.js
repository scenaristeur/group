import { createDocument, /*fetchDocument*/ } from 'tripledoc';
import { vcard, dct, foaf, ldp, /*rdfs,*/ rdf, space} from 'rdf-namespaces'

export default {
  created(){
    return this.$store.state.webId
  },
  methods: {
    async createGroup(group){
      let ttl_name = group.name.replace(/\s/g, '_')
      group.path = !group.path.endsWith('/') ? group.path+'/' : group.path
      var dateObj = new Date();
      var date = dateObj.toISOString()
      group.url = group.path+ttl_name+".ttl"
      group.identifier = 'we'
      group.maker = this.webId
      let groupDoc = await createDocument(group.url);
      let subj = groupDoc.addSubject({identifier:group.identifier})
      subj.addLiteral(vcard.fn, group.name)
      subj.addRef(ldp.inbox, "./"+ttl_name+"/inbox/")
      subj.addRef(space.storage, "./"+ttl_name+'/')
      subj.addLiteral(dct.created, date)
      subj.addRef(foaf.maker, group.maker)
      subj.addRef(vcard.hasMember, group.maker)
      subj.addRef(rdf.type, vcard.Group)
      subj.addLiteral('http://www.w3.org/ns/org#purpose', group.purpose)
      subj.addRef("http://www.w3.org/ns/org#subOrganizationOf", group.super)
      await groupDoc.save();
      return group
    },
  },
  watch:{
    webId(){
      console.log("watch webid", this.webId)
    }
  },
  computed:{
    webId:{
      get: function() { return this.$store.state.webId},
      set: function() {}
    },
  }
}
