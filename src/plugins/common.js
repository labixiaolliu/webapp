import Vue from 'vue'
import filters from './filter'
import directives from './directive'

var reqContext = require.context('../components', true, /\.vue$/)

reqContext.keys().forEach((key) => {
  Vue.component(reqContext(key).default.name, reqContext(key).default)
})

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})
