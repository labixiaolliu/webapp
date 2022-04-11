<template>
  <div class="tab">
    <router-link
      v-for="(item, index) of tabList"
      :key="'hometab' + index"
      :to="item.to"
      exact-active-class="active"
      class="item"
    >
      <span class="txt">{{ item.name }}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Tabs',
  data() {
    return {
      tabList: [
        { name: '首页', to: '/' },
        { name: '提问', to: '/index/ask' },
        { name: '建议', to: '/index/advice' },
        { name: '分享', to: '/index/share' },
        { name: '讨论', to: '/index/discuss' }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import './tabs.scss';
</style>
