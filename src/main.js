import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import DaySpan from 'dayspan-vuetify-2'
import fr from 'dayspan-vuetify-2/src/locales/fr';
// import VueIpfs from './plugins/vue-ipfs';
//
// // Load our IPFS plugin.
// Vue.use(VueIpfs);

Vue.config.productionTip = false

Vue.use(DaySpan, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

import PopockTypesPlugin from "./plugins/popock-types-plugin.js";

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(PopockTypesPlugin)
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
/*@import 'dayspan-vuetify2/dist/lib/dayspan-vuetify.min.css';*/
// You can access $dayspan via Vue.$dayspan or this.$dayspan inside a component.

// Vue.$dayspan.setLocale('en'); // if en does not exist, this will have no affect
// Vue.$dayspan.setLocale('fr', true); // true was passed, so if the locale does not exist an error is thrown
// Vue.$dayspan.locales; // map of locale names to locale values

Vue.$dayspan.addLocales(['fr', 'fr-CA', 'fr-BE', 'fr-CH', 'fr-FR', 'fr-LU', 'fr-MC'], fr);

Vue.config.productionTip = false


import Editor from 'vue-editor-js'

Vue.use(Editor)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
