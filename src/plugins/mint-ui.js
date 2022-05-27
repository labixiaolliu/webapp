import Vue from 'vue'
import { Button, Cell, Header, Loadmore, Spinner, Toast, InfiniteScroll } from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Header.name, Header)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)

Vue.use(InfiniteScroll)
Vue.prototype.$Toast = Toast
