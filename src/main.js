import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueErdjs from 'vue-erdjs'
import api from "@/config"

Vue.config.productionTip = false

// console.log("before")

const fetchConfig = api.fetchConfig();
fetchConfig.then((config) => {
  // console.log(config)
  Vue.use(VueErdjs, config.elrond)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
