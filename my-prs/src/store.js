import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: [10],
  },
  mutations: {
    cart(state, name) {
      var bool = false;
      state.history.forEach((d) => {
        if (d != name) {
          bool = true
        }
      })
      if (bool) {
        state.history.push(name)
      }
    }
  },
  getters:{

  },
})
