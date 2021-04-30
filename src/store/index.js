
import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app.js'
import event from './modules/event.js'
import eventPanel from './modules/eventPanel.js'
import AIContral from './modules/AIcontral.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    event,
    eventPanel,
    AIContral
  }
})
