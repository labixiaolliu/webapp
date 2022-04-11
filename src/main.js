import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/mint-ui' // 加载vant-ui
import './plugins/common' // 全局注册各个vue的component组件
import 'normalize.css/normalize.css'
import './assets/style/theme.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
