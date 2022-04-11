<template>
  <div class="home">
    <!-- <gg-header title="首页">
      <template v-slot:h-left>hello left</template>
      <template v-slot:h-right>hello right</template>
    </gg-header> -->
    <!-- <mt-cell title="标题文字" value="标题文字1">
      <mt-button type="primary">primary</mt-button>
    </mt-cell>
    <mt-cell title="说明文字" value="说明文字2">
      <mt-button type="danger">danger</mt-button>
    </mt-cell> -->
    <layout>
      <search></search>
      <tabs></tabs>
      <router-view></router-view>
    </layout>
  </div>
</template>

<script>
import Tabs from './Tabs'
export default {
  name: 'Home',
  components: {
    Tabs
  }
}
</script>
