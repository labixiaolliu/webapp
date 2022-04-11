<template>
  <div class="wrapper">
    <slot></slot>
    <gg-footer></gg-footer>
  </div>
</template>
<script>
import Footer from './Footer'
export default {
  name: 'Layout',
  components: {
    'gg-footer': Footer
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  padding-bottom: $footer-height;
}
</style>
