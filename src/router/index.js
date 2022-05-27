import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
const Catalog = () => import(/* webpackChunkName: "catalog" */ '../views/home/Catalog.vue')
const Detail = () => import(/* webpackChunkName: "detail" */ '../views/home/Detail.vue')
const Login = () => import(/* webpackChunkName: "login" */ '../views/user/Login.vue')
const Reg = () => import(/* webpackChunkName: "reg" */ '../views/user/Reg.vue')
const User = () => import(/* webpackChunkName: "user" */ '../views/user/User.vue')
const Msg = () => import(/* webpackChunkName: "msg" */ '../views/Msg/Msg.vue')
const Zan = () => import(/* webpackChunkName: "zan" */ '../views/Msg/Zan.vue')
const Comment = () => import(/* webpackChunkName: "comment" */ '../views/Msg/Comment.vue')
const Hot = () => import(/* webpackChunkName: "hot" */ '../views/hot/Hot.vue')
const SignRanking = () => import(/* webpackChunkName: "signRanking" */ '../views/hot/SignRanking.vue')
const HotPost = () => import(/* webpackChunkName: "hotPost" */ '../views/hot/HotPost.vue')
const HotComment = () => import(/* webpackChunkName: "hotComment" */ '../views/hot/HotComment.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Catalog,
        meta: { index: 1 }
      },
      {
        path: '/index/:catalog',
        name: 'catalog',
        component: Catalog,
        props: true,
        meta: { index: 2 }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    props: true,
    meta: { index: 999 }
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg,
    props: true
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    props: true,
    meta: { index: 101 }
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    props: true,
    meta: { index: 31 }
  },
  {
    path: '/msg',
    name: 'msg',
    component: Msg,
    props: true,
    redirect: '/msg/post',
    children: [
      {
        path: 'post',
        name: 'comment',
        component: Comment,
        props: true,
        meta: { index: 11 }
      },
      {
        path: 'zan',
        name: 'zan',
        component: Zan,
        props: true,
        meta: { index: 12 }
      }
    ]
  },
  {
    path: '/hot',
    name: 'hot',
    component: Hot,
    props: true,
    children: [
      {
        path: '',
        name: 'hotPost',
        component: HotPost,
        props: true,
        meta: { index: 21 }
      },
      {
        path: 'hotComment',
        name: 'hotComment',
        component: HotComment,
        props: true,
        meta: { index: 22 }
      },
      {
        path: 'signRanking',
        name: 'signRanking',
        component: SignRanking,
        props: true,
        meta: { index: 23 }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
