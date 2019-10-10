import Vue from 'vue'
import Router from 'vue-router'
import Cate from './views/Cate.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Cate
    },
  ]
})
