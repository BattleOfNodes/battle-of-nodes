import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login/Login'
import BoosterPack from '@/pages/BoosterPack/BoosterPack'
import Explore from '@/pages/Explore/Explore'
import Homepage from '@/pages/Homepage/Homepage'
import MyCollection from '@/pages/MyCollection/MyCollection'
import MintPage from '@/pages/MintPage/MintPage'
import DownloadDemo from '@/pages/DownloadDemo/DownloadDemo'
import staking from '@/pages/Staking/staking'
import vmodal from 'vue-js-modal'

Vue.use(VueRouter)
Vue.use(vmodal)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/booster-pack',
    name: 'BoosterPack',
    component: BoosterPack,
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore,
  },
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/my-collection',
    name: 'MyCollection',
    component: MyCollection
  },
  {
    path: '/mint-page',
    name: 'MintPage',
    component: MintPage
  },
  {
    path: '/download',
    name: 'DownloadDemo',
    component: DownloadDemo
  }
  // {
  //   path: '/staking',
  //   name: 'Staking',
  //   component: staking
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
