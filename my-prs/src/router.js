import Vue from 'vue'
import Router from 'vue-router'
import search from './components/tx_search.vue'
import main from './components/tx_main.vue'
import tx_nav from './components/tx_nav.vue'
import login from './views/tx_login.vue'
import MoreMicroblog from './views/MoreMicroblog.vue'
import Cate from './views/Cate.vue'
import Recycle from './views/Recycle.vue'
import Estimated from './views/Estimated.vue'
import faq from './views/FAQ.vue'
import enroll from './views/tx_enroll.vue'
import SearchPhone from './views/SearchPhone.vue'
import Order from './views/Order.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        search,
        main,
        tx_nav,
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        login,
      }
    },
    {
      path: '/microblog',
      name: 'microblog',
      components: {
        MoreMicroblog,
      }
    },
    {
      path: '/cate',
      name: 'cate',
      component: Cate
    },
    {
      path: '/recycle',
      name: 'recycle',
      component: Recycle
    },
    {
      path: '/estimated',
      name: 'Estimated',
      component: Estimated
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    },
    {
      path: '/enroll',
      name: 'enroll',
      component: enroll
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPhone
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
  ]
})
