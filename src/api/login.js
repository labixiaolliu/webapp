import axios from '../utils/request'

/**
 * 获取验证码
 * @param {*} sid
 */
function getCode(sid) {
  return axios.get('/public/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

/**
 * 登陆
 * @param {*} useInfo (邮箱，密码，验证码)
 */
function login(useInfo) {
  return axios.post('/login/login', {
    ...useInfo
  })
}

async function forget(params) {
  return axios.post('/login/forget', params)
}

async function register(userInfo) {
  return axios.post('/login/register', { ...userInfo })
}

export { getCode, forget, login, register }
