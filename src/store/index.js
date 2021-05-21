import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //definir variables globales
    url:`${process.env.VUE_APP_URL}`
  },
  getters:{
    //para usar las variables globales con set
  },
  mutations: {
    //assignar valores a las variables globales (state)
  },
  actions: {
    //para programar funciones globales en toda la app
  },
  modules: {
  }
})
