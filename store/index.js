import Vue from 'vue'
import Vuex from 'vuex'
import ApiStore from "@/store/api-store";
import Elrond from '@/store/elrond-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    elrond: Elrond,
    api: ApiStore
  }
})
