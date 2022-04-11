import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
const Catalog = () => import(/* webpackChunkName: "catalog" */ '../views/home/Catalog.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index/:catalog',
        name: 'Catalog',
        component: Catalog
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
