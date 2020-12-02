import { createDocument, fetchDocument } from 'tripledoc';
import { vcard, dct, foaf, ldp, /*rdfs,*/ rdf, space} from 'rdf-namespaces'
let ldflex = window.solid
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc   = new FC( auth )

export default {
  created(){
    this.webId = this.$store.state.webId
    this.storage = this.$store.state.storage
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
      group.inbox = "./"+ttl_name+"/inbox/"
      group.storage = "./"+ttl_name+'/'
      let groupDoc = await createDocument(group.url);
      let subj = groupDoc.addSubject({identifier:group.identifier})
      subj.addLiteral(vcard.fn, group.name)
      subj.addRef(ldp.inbox, group.inbox)
      subj.addRef(space.storage, group.storage)
      subj.addLiteral(dct.created, date)
      subj.addRef(foaf.maker, group.maker)
      subj.addRef(vcard.hasMember, group.maker)
      subj.addRef(rdf.type, vcard.Group)
      group.purpose != undefined ?subj.addLiteral('http://www.w3.org/ns/org#purpose', group.purpose) : ""
      group.super != undefined ? subj.addRef("http://www.w3.org/ns/org#subOrganizationOf", group.super) : ""
      try{
        await groupDoc.save();
        group.creation = {status: "ok", message: "group created"}
        console.log("ok")
      }catch(e){
        console.log(e)
        group.creation = {status: "error", message: e}
      }
      await fc.createFolder(group.inbox)
      await fc.creatFolder(group.storage)
      let profileDoc = await fetchDocument(group.maker)
      let me = profileDoc.getSubject(group.maker)
      me.addRef('http://www.w3.org/ns/org#memberOf', group.url+"#"+group.identifier)
      try{
        await profileDoc.save();
      }catch(e){
        console.log(e)
      }
      return group
    },
    async getGroupStorage(url){
      let st = await ldflex.data[url]['http://www.w3.org/ns/pim/space#storage']
      let folder = {folders: [], files: []}
      if (await fc.itemExists(`${st}`)){
        folder = await fc.readFolder(`${st}`)
      }else{
        await fc.createFolder(`${st}`)
      }
      return folder
    },

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
