<template>
  <div>
    <scroll :distance="footerHeight" :isEnd="isEnd" @on-loadTop="loadTop" @on-loadBottom="loadBottom">
      <ul>
        <list-item v-for="(item, index) of lists" :key="'catalog' + index" :item="item"></list-item>
      </ul>
    </scroll>
  </div>
</template>

<script>
import { getList } from '../../api/content'
export default {
  name: 'Catalog',
  props: ['catalog'],
  data() {
    return {
      footerHeight: 0,
      isEnd: false,
      isRepeat: false,
      page: 0,
      limit: 10,
      lists: [],
      handle: {},
      type: ''
    }
  },
  watch: {
    catalog(newVal, oldVal) {
      console.log('TCL: Data -> store', newVal, oldVal)
      this.type = newVal ? newVal : ''
      this.isRepeat = false
      this.isEnd = false
      this.page = 0
      this.init()
    }
  },
  methods: {
    init() {
      // 加载结束或者还在加载中，
      if (!this.isEnd && !this.isRepeat) {
        this.isRepeat = true
        this.getList()
      } else {
        if (typeof this.handle === 'function') {
          this.handle()
        }
      }
    },
    getList() {
      getList({ limit: this.limit, page: this.page, sort: 'created', catalog: this.type }).then((res) => {
        if (res.code === 200) {
          console.log('TCL: Data -> store', res)
          if (this.page === 0) {
            this.lists = res.data
          } else {
            this.lists = this.lists.concat(res.data)
          }

          if (res.data.length < this.limit) {
            // 最后一页
            this.isEnd = true
          }
          this.isRepeat = false
          if (typeof this.handle === 'function') {
            this.handle()
          }
        } else {
          this.$Toast(res.message)
        }
      })
    },
    loadTop(fn) {
      this.page = 0
      this.handle = fn
      this.isEnd = false
      this.init()
    },
    loadBottom(fn) {
      this.page++
      this.handle = fn
      this.init()
    }
  },
  mounted() {
    this.init()
    this.footerHeight = document.getElementsByClassName('layout-footer')[0].offsetHeight
  }
}
</script>
<style scoped lang="scss">
ul {
  padding: 0;
  margin: 0;
  background-color: #f3f6f8;
}
</style>
