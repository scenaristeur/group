<template>
  <div class="ipfs-info">
    <!-- <img class="ipfs-logo" alt="IPFS logo" src="../assets/logo.svg" /> -->
    <h3>{{ status }}</h3>
    <h4>ID: {{ id }}</h4>
    <h4>Agent version: {{ agentVersion }}</h4>
  </div>
</template>

<script>

// import IPFS from 'ipfs'
// //const IPFS = require('ipfs')
// const node = new IPFS({ repo: 'ipfs' })
// node.on('error', errorObject => console.error(errorObject, errorObject.message))
// node.on('ready', async () => {
//   console.log('Node ready!')
//   try {
//     await node.start()
//     console.log('Node started!')
//   } catch (error) {
//     console.error('Node failed to start!', error)
//   }
//   // Ready to use!
//   // See https://github.com/ipfs/js-ipfs#core-api
// })

export default {
  name: "IpfsInfo",
  data: function() {
    return {
      status: "Connecting to IPFS...",
      id: "",
      agentVersion: ""
    };
  },
  mounted: function() {
    this.getIpfsNodeInfo();
  },
  methods: {
    async getIpfsNodeInfo() {
      try {
        // Await for ipfs node instance.
        const ipfs = await this.$ipfs;
        // Call ipfs `id` method.
        // Returns the identity of the Peer.
        const { agentVersion, id } = await ipfs.id();
        this.agentVersion = agentVersion;
        this.id = id;
        // Set successful status text.
        this.status = "Connected to IPFS =)";
        const doc = JSON.stringify({
          foo: "bar",
          tic: "tac"
        });

        const cid = await ipfs.add(doc);

        console.log("IPFS cid:", cid);
        let res1 = await ipfs.cat('/ipfs/'+cid)
        let res = await ipfs.cat('https://cid.ipfs.io/#'+cid.path)
        console.log(res1, res)
      } catch (err) {
        // Set error status text.
        this.status = `Error: ${err}`;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ipfs-logo {
  height: 10rem;
}
</style>
