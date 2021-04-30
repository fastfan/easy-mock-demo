/*
 * @Author: fastfan
 * @Date: 2020-11-10 12:48:38
 * @LastEditors: fastfan
 * @LastEditTime: 2020-11-17 14:44:47
 * @Description: 工程车专题事件面板
 * @FilePath: /xs-management-bigScreen/src/store/modules/eventPanel.js
 */
export default {
  state: {
    eventRate:'0%',
    eventObj: [
      {
        value: [0],
        unit: "",
        title: '今日上报',
        color: "rgba(0,157,255,1)",
      },
      {
        value: [3,5,0],
        unit: "",
        title: '累计上报',
        color: "rgba(0,157,255,1)",
      },
    ], 
    eventRank:[
      {
        svgIcon: "first",
        name: "杭州某某某运输有限公司",
        value: "23",
        unit: "",
      },
      {
        svgIcon: "second",
        name: "杭州某某某运输有限公司",
        value: "23",
        unit: "",
      },
      {
        svgIcon: "third",
        name: "杭州某某某运输有限公司",
        value: "23",
        unit: "",
      },
    ]
  },
  getters: {
    eventObj: state => state.eventObj,
    eventRate: state => state.eventRate,
    eventRank: state => state.eventRank
  },
  mutations: {
    SET_EVENT_OBJ: (state, type) => {
      state.eventObj = type
    },
    SET_EVENT_RATE: (state, type) => {
      state.eventRate = type
    },
    SET_EVENT_RANK: (state,type) => {
      state.eventRank = type
    }
  },
  actions: {
    updateEventObj: ({ commit }, type) => {
      commit('SET_EVENT_OBJ', type)
    },
    updateEventRate: ({ commit }, type) => {
      commit('SET_EVENT_RATE', type)
    },
    updateEventRank: ({ commit }, type) => {
      commit('SET_EVENT_RANK', type)
    },
  }
}
