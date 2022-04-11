<template>
  <div class="search-wrap">
    <slot name="h-left"></slot>
    <div class="search-block">
      <i class="mintui mintui-search"></i>
      <input type="text" class="in" v-model="searchText" :placeholder="placeholderIn" />
      <span v-show="searchText" @click="onClear">
        <svg-icon icon="icon-font-close"></svg-icon>
      </span>
    </div>
    <span class="clearText" v-show="searchText" @click.stop="onSearch">确定</span>
    <slot name="h-right"></slot>
  </div>
</template>
<script>
export default {
  name: 'search',
  props: {
    placeholderIn: {
      type: String,
      default: '搜索社区内容'
    }
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    onSearch() {
      this.$emit('search', this.searchText)
    },
    onClear() {
      this.searchText = ''
      this.$emit('clear')
    }
  }
}
</script>
<style scoped lang="scss">
@import './search.scss';
</style>
