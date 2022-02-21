import axios from '../utils/request'
import qs from 'qs'
import store from '@/store'

/**
 * 读取文章列表
 * @param {*} options
 */
const getList = (options) => {
  return axios.get('/public/getList?' + qs.stringify(options))
}

// 温馨提醒
const getTips = () => {
  return axios.get('/public/tips')
}

// 友情链接
const getLinks = () => {
  return axios.get('/public/links')
}

// 本周热议
const getTop = () => {
  return axios.get('/public/topWeek')
}

// 图片上传
const uploadPic = (formData) => {
  return axios.post('/content/uploadImg', formData)
}

// 帖子发布
const addPost = (param) => {
  return axios.post('/content/addPost', { ...param })
}

// 帖子编辑
const editPost = (param) => {
  return axios.post('/content/editPost', { ...param })
}

// 获取帖子详情
const getPostById = (tid) => {
  let headers = {}
  let token = store.state.token
  if (token) {
    headers = {
      Authorization: 'Bearer ' + token
    }
  }
  return axios.get('/public/content/getPost?tid=' + tid, { headers: headers })
}

// 获取帖子的回复列表
const getComments = (param) => {
  return axios.get('/public/getComments?' + qs.stringify(param), {
    headers: {
      Authorization: store.state.token ? 'Bearer ' + store.state.token : ''
    }
  })
}

// 发表评论
const addComment = (param) => {
  return axios.post('/comment/reply', { ...param })
}

// 修改评论
const updateComment = (param) => {
  return axios.post('/comment/update', { ...param })
}

// 采纳评论
const acceptComment = (param) => {
  return axios.get('/comment/accept?' + qs.stringify(param))
}

// 点赞评论
const handComment = (param) => {
  return axios.get('/comment/hand?' + qs.stringify(param))
}

export {
  getList,
  getTips,
  getTop,
  getLinks,
  uploadPic,
  addPost,
  editPost,
  getPostById,
  getComments,
  addComment,
  updateComment,
  acceptComment,
  handComment
}
