import { SET_SID, SET_TOKEN, SET_IS_LOGIN, SET_USERINFO, SET_IS_HIDE } from '../mutation-types'
import { getCode, login } from '../../api/login'
import { v4 as uuidv4 } from 'uuid'
export default {
  namespaced: true,
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
  actions: {
    async getCode({ commit }) {
      let sid = ''
      if (localStorage.getItem('sid')) {
        sid = localStorage.getItem('sid')
      } else {
        sid = uuidv4()
        localStorage.setItem('uuid', sid)
      }
      commit(SET_SID, sid)
      let code = await getCode(sid)
      console.log('TCL: Data -> store', code)
      return code.data
    },
    async getLogin({ state }, payload) {
      // { rootState } 可以使用rootState，rootState.user.xxx
      const res = await login({
        ...payload,
        sid: state.sid
      })
      console.log('TCL: Data -> store', payload)
      console.log('TCL: Data -> store', state)
      return res
    }
  },
  modules: {}
}
