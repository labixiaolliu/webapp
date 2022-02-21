import { SET_SID, SET_TOKEN, SET_IS_LOGIN, SET_USERINFO, SET_IS_HIDE } from '../mutation-types'
export default {
  state: {
    sid: '',
    isLogin: false,
    token: '',
    userInfo: {},
    isHide: false
  },
  mutations: {
    [SET_SID](state, value) {
      state.sid = value
    },
    [SET_TOKEN](state, value) {
      state.token = value
      localStorage.setItem('token', value)
    },
    [SET_IS_LOGIN](state, value) {
      state.isLogin = value
    },
    [SET_USERINFO](state, value) {
      state.userInfo = value
      if (value === '') return
      localStorage.setItem('userInfo', JSON.stringify(value))
    },
    [SET_IS_HIDE](state, value) {
      state.isHide = value
    }
  },
  actions: {},
  modules: {}
}
