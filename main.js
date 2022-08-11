import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueErdjs from 'vue-erdjs'
import api from "@/config"

import {BootstrapVue} from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const fetchConfig = api.fetchConfig();
fetchConfig.then((config) => {
  Vue.use(VueErdjs, config.elrond)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
