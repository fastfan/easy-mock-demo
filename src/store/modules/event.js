export default {
  state: {
    timeType: 'month',  // month、year
  },
  getters: {
    timeType: state => state.timeType,
  },
  mutations: {
    SET_TIME_TYPE: (state, type) => {
      state.timeType = type
    }
  },
  actions: {
    updateTimeType: ({ commit }, type) => {
      commit('SET_TIME_TYPE', type)
    }
  }
}
