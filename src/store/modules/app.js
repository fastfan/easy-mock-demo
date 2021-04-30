import { getClientWidth } from "@/utils/index.js"

export default{
  state: {
    widthType: 16,
  },
  getters: {
    widthType: state => state.widthType,
  },
  mutations: {
    SET_WIDTH_TYPE: (state, currentType) => {
      state.widthType = currentType
    }
  },
  actions: {
    changeWidthType: ({ commit }, currentType) => {
      commit('SET_WIDTH_TYPE', currentType)
    }
  }
}
