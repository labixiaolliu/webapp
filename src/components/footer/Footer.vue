<template>
  <div class="layout-footer">
    <router-link
      v-for="(item, index) of tabList"
      :key="'tab' + index"
      :to="item.path"
      active-class="active"
      class="item"
    >
      <svg-icon :icon="item.icon" :class="'svg-icon' + item.icon"></svg-icon>
      <p>{{ item.name }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      tabList: [
        {
          name: '首页',
          path: '/',
          icon: 'home'
        },
        {
          name: '消息',
          path: '/message',
          icon: 'msg'
        },
        {
          name: '热门',
          path: '/hot',
          icon: 'fav'
        },
        {
          name: '我的',
          path: '/person',
          icon: 'person'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import './footer.scss';
</style>
