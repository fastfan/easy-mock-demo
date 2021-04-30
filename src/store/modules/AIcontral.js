
/**
* state字段描述
* @param  {string}  name:名称
* @param  {string}  key:唯一标识
* @param  {boolean}  state:高亮状态
* @param  {string}  icon:图标
* @param  {boolean}  disable:禁用点击事件
* @param  {string}  icon:图标
* @param  {boolean}  loadComponent:加载组件
*/
export default {
    state: {
        monitor: [
            { name: "AI监控", key: "AI", state: true, icon: "AI", disable: true },
            { name: "公安监控", key: "police", state: false, icon: "police" },
            { name: "搜索", key: "AISearch", state: false, icon: "search", loadComponent: true }
        ],
        event: [
            { name: "实时追踪", key: "realtime", state: true, icon: "realtime", disable: true },
            { name: "问题", key: "problem", state: true, icon: "problem", disable: true },
            { name: "热力", key: "hotmap", state: false, icon: "hotmap", disable: true },
        ],
        wisdom: [
            { name: "实时追踪", key: "realtime", state: true, icon: "realtime", disable: true },
        ],
        subway: [
            { name: "实时追踪", key: "realtime", state: true, icon: "realtime", disable: true },
        ],
        unobstruct: [
            { name: "重复", key: "repeat", state: false, icon: "repeat", disable: true },
            { name: "畅行", key: "unobstructPlay", state: false, icon: "unobstruct" },
        ],
        airun: [
            { name: "实时追踪", key: "realtime", state: false, icon: "realtime" }
        ]
    },
    getters: {},
    mutations: {
        SET_CONTRAL_STATUS: (state, payload) => {
            const { type, key } = payload
            const idx = state[type].findIndex(_ => _.key === key)
            state[type][idx].state = !state[type][idx].state
        }
    },
    actions: {
        updateAIcontral: ({ commit }, payload) => {
            commit('SET_CONTRAL_STATUS', payload)
        }
    }
}
