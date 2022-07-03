import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/Login'
import BoosterPack from '@/views/BoosterPack/BoosterPack'
import Explore from '@/views/Explore/Explore'
import Homepage from '@/views/Homepage/Homepage'
import MyCollection from '@/views/MyCollection/MyCollection'
import MintPage from '@/views/MintPage/MintPage'
import DownloadDemo from '@/views/DownloadDemo/DownloadDemo'
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
