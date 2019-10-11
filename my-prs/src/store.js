import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0
  },
  mutations: {
    alter(state,x){
      state.num=parseInt(x)+1
      console.log(state.num)
    }
  },
  getters:{
    pro(state){
      return (state.num+1)/11*100
    }
  },
})
