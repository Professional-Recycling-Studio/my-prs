import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
      state: {
        num: 0,
        isShow: false,
        info: []
      },
      mutations: {
        alter(state, x) {
          state.num = parseInt(x) + 1
        },
        chr(state, x) {
          state.isShow = x
        },
        add(state, x) {
          if (state.info.length == 0) {
            state.info.push(x)
          } else {
            for (var i = 0; i < state.info.length; i++) {
              if (x[0] == state.info[i][0]) {
                state.info[i][1]=x[1]
                return
              }
            }
            state.info.push(x)
          }
          for (var i = 0; i < state.info.length; i++){
            if(state.info[i][0]=='是否有以下特殊情况'&&state.info[i][1]=='都不是，下一步'){
              state.info.splice(i,1)
            }
          }
        }
        },
        getters: {
          pro(state) {
            return (state.num + 1) / 11 * 100 - 9
          }
        },
      })