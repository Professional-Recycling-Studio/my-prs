import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import search from './components/tx_search.vue'
import main from './components/tx_main.vue'
import tx_nav from './components/tx_nav.vue'
import login from './views/tx_login.vue'
import MoreMicroblog from './views/MoreMicroblog.vue'


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
  ]
})
