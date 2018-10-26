import Vue from 'vue'
import Vuex from 'vuex'
import playlist from './modules/playlist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    playlist
  },
  strict: process.env.NODE_ENV !== 'production'
})