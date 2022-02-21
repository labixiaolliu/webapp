import axios from '../utils/request'
import qs from 'qs'

const userSign = () => {
  return axios.get('/user/fav')
}
const updateUserInfo = (param) => {
  return axios.post('user/basic', param)
}
//邮箱重置
const updateUsername = (param) => {
  return axios.get('public/resetEmail?' + qs.stringify(param))
}
// 忘记密码
const updatePassword = (param) => {
  return axios.get('public/updatePassword?' + qs.stringify(param))
}
// 修改密码
const resetPassword = (param) => {
  return axios.post('user/resetPassword', param)
}
// 收藏，取消收藏帖子
const setCollect = (param) => {
  return axios.post('user/setCollect', param)
}

// 获取登陆用户发帖列表
const getPostsByUid = (param) => {
  return axios.get('/user/getPostsByUid?' + qs.stringify(param))
}

// 删帖
const deletePost = (param) => {
  return axios.get('/user/deletePost?' + qs.stringify(param))
}

// 获取用户收藏帖子
const getCollectionByUid = (param) => {
  return axios.get('/user/getCollections?' + qs.stringify(param))
}

// 获取用户信息
const getUserInfo = (param) => {
  return axios.get('/public/getUserInfo?' + qs.stringify(param))
}

// 获取其他用户发表的帖子
const getPosts = (param) => {
  return axios.get('/public/getPosts?' + qs.stringify(param))
}

const getComments = (param) => {
  return axios.get('/public/getCommentsByUid?' + qs.stringify(param))
}

// 获取回复
const getUserMsg = (param) => {
  return axios.get('/user/getMsg?' + qs.stringify(param))
}

// 设置消息已读
const setMessageRead = (param) => {
  return axios.get('/user/setMessageRead?' + qs.stringify(param))
}

export {
  userSign,
  updateUserInfo,
  updateUsername,
  updatePassword,
  resetPassword,
  setCollect,
  getPostsByUid,
  deletePost,
  getCollectionByUid,
  getUserInfo,
  getPosts,
  getComments,
  getUserMsg,
  setMessageRead
}
