import Vue from 'vue'
import Router from 'vue-router'
import search from './components/tx_search.vue'
import main from './components/tx_main.vue'
import tx_nav from './components/tx_nav.vue'
import login from './views/tx_login.vue'
import MoreMicroblog from './views/MoreMicroblog.vue'
import Cate from './views/Cate.vue'
import Recycle from './views/Recycle.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
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
  ]
})
