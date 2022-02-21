import WebSocketClient from '../../utils/WebSocket'
import { INIT_WEBSOCKET, SET_MESSAGE } from '../mutation-types'
export default {
  state: {
    ws: null,
    count: 0 // 未读消息数量
  },
  mutations: {
    [INIT_WEBSOCKET](state, config) {
      state.ws = new WebSocketClient(config)
      state.ws.init()
    },
    [SET_MESSAGE](state, msg) {
      console.log('TCL: Data -> store', 99999)
      console.log('TCL: Data -> store', msg.message)
      state.count = msg
    }
  },
  actions: {
    message({ commit }, msg) {
      commit('setMessage', msg)
    }
  },
  modules: {}
}
