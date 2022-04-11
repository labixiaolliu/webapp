import Vue from 'vue'

var reqContext = require.context('../components', true, /\.vue$/)

reqContext.keys().forEach((key) => {
  Vue.component(reqContext(key).default.name, reqContext(key).default)
})
