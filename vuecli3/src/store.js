import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    a:"xxx",
    b:20
  },
  mutations: {//修改state中的值
    add(state,num){
      state.count+=num;
    }

  },
  getters:{//计算属性
    sum:(state)=>{
      return state.count + state.b;
    }



  },
    actions: {

  }
})
