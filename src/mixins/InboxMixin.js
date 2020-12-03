import { /*createDocument,*/ fetchDocument, createDocumentInContainer } from 'tripledoc';
import { /*vcard,*//* dct, foaf,*/ ldp, rdf /*rdfs,rdf, space*/} from 'rdf-namespaces'
  // let ldflex = window.solid
  //import auth from 'solid-auth-client';
  // import FC from 'solid-file-client'
  // const fc   = new FC( auth )
  import {
    getSolidDataset,
    getThingAll,
    // getThing,
    // getUrl,
    // addUrl,
    // saveSolidDatasetAt,
    // setThing,
    // getStringNoLocale,
    getUrlAll
  } from "@inrupt/solid-client";
  //
  import { RDF,  /*FOAF, VCARD */ } from "@inrupt/vocab-common-rdf";


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
        things.forEach((t) => {t.types = getUrlAll(t, RDF.type)});
        console.log(things)
        mail.things = things
        return mail
      },
      async accepte(mail){
        console.log(mail)
        mail.things.forEach(async (t) => {
          if(t.types.includes("https://www.w3.org/ns/activitystreams#Join")){
            console.log(t.internal_url)
            let mailDoc = await fetchDocument(t.internal_url)
            let joinSubject = mailDoc.getSubject(t.internal_url)
            let member = joinSubject.getRef('https://www.w3.org/ns/activitystreams#actor')
            let group = joinSubject.getRef('https://www.w3.org/ns/activitystreams#object')

            let groupDoc = await fetchDocument(group)
            let groupSubject = groupDoc.getSubject(group)
            groupSubject.addRef('http://www.w3.org/2006/vcard/ns#hasMember',member)
            await groupDoc.save()
            console.log("member added")
            //recup inbox
            let profileDoc = await fetchDocument(member)
            let memberSubject = profileDoc.getSubject(member)
            let inbox = memberSubject.getRef(ldp.inbox)
            // send mail acceptation mail
            /*
            @prefix :      <#> .
            @prefix as:    <https://www.w3.org/ns/activitystreams#> .

            :it
            a as:Accept ;
            as:actor <https://angelo.veltens.org/profile/card#me> ;
            as:object :join ;
            as:summary "Angelo Veltens accepted your join request" .

            :join
            a as:Join ;
            as:actor <https://spoggy-test7.solidcommunity.net/profile/card#me> ;
            as:object <https://solid-groups.solidcommunity.net/groups/main#we> ;
            as:summary "Spoggy-test7 joins group" .*/
            let inboxDoc = await createDocumentInContainer(inbox)
            // member = member.split('#')
            // console.log(member)

            let it = inboxDoc.addSubject({identifier: 'it'})
            let join = inboxDoc.addSubject({identifier: 'join'})
            it.addRef(rdf.type, 'https://www.w3.org/ns/activitystreams#Accept')
            it.addRef('https://www.w3.org/ns/activitystreams#actor', mail.webId)
            it.addRef('https://www.w3.org/ns/activitystreams#object', join.asRef())
            it.addString('https://www.w3.org/ns/activitystreams#summary', 'Votre requete est acceptée')
            join.addRef(rdf.type, 'https://www.w3.org/ns/activitystreams#Join')
            join.addRef('https://www.w3.org/ns/activitystreams#actor', memberSubject.asRef())
            join.addRef('https://www.w3.org/ns/activitystreams#object', group)
            join.addString('https://www.w3.org/ns/activitystreams#summary', "nom de l'acteur a rejoint le group")


            console.log("sendMail")
            await inboxDoc.save()
            console.log("mail saved")
            // const joinDataset = await getSolidDataset( t.internal_url );
            // const join = getThing( joinDataset, t.internal_url);
            // let member = getUrl(join, 'https://www.w3.org/ns/activitystreams#actor')
            // let group = getUrl(join, 'https://www.w3.org/ns/activitystreams#object')
            // console.log(member, group)
            // const groupDataset = await getSolidDataset( group );
            // console.log(groupDataset)
            // const groupThing = getThing( groupDataset, group);
            // console.log(groupThing)
            // let updatedGroup = addUrl(groupThing, VCARD.hasMember, member);
            // console.log(updatedGroup)
            // const myChangedDataset = setThing(joinDataset, updatedGroup);
            // console.log(myChangedDataset)
            // const savedGroupResource = await saveSolidDatasetAt(
            //   group,
            //   myChangedDataset,
            //   { fetch: auth.session.fetch }
            // )
            // console.log(savedGroupResource)
            // updatedProfile = addStringNoLocale(thing, FOAF.nick, "docs");
          }
        });

        // const groupDataset = await getSolidDataset( mail.url);
        // const thing = getThing( groupDataset, mail.url+"#we");
        // console.log(thing)
        //  updatedProfile = addStringNoLocale(thing, FOAF.nick, "docs");
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
