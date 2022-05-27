<template>
  <div id="app">
    <transition :name="direction">
      <router-view />
    </transition>
  </div>
</template>
<script>
import { forbidScroll } from './utils/forbidScroll'
export default {
  data() {
    return {
      direction: ''
    }
  },
  watch: {
    $route(to, from) {
      if (!from.name) {
        return
      } else if (from.meta.index > to.meta.index) {
        this.direction = 'slide-right'
      } else {
        if (!to.meta.index) {
          this.direction = ''
          return
        }
        this.direction = 'slide-left'
      }
    }
  },
  mounted() {
    window.forbidScroll = forbidScroll
  }
}
</script>

<style lang="scss">
@media (min-width: $break-super) and (orientation: landscape) {
  html:before {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: #000000;
    z-index: 99999;
  }
  body:before {
    content: '';
    background-image: url('./assets/orientation.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 50%;
    width: 100px;
    height: 200px;
    position: absolute;
    z-index: 99999;
    top: 50%;
    left: 50%;
    margin: -140px 0 0 -50px;
  }
  body:after {
    content: '\73b0\5728\662f\6a2a\5c4f\ff0c\8bf7\5207\6362\5230\8ff0\8bc4\5c55\793a';
    position: absolute;
    z-index: 99999;
    color: #ffffff;
    left: 0;
    top: 50%;
    text-align: center;
    width: 100%;
    height: 60px;
    margin-top: 50px;
    font-size: 16px;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.slide-left-enter,
.slide-right-leave-to {
  transform: translateX(100%);
}
.slide-left-enter-to,
.slide-left-leave,
.slide-right-enter-to,
.slide-right-leave {
  transform: translateX(0);
}
.slide-left-leave-to,
.slide-right-enter {
  transform: translateX(-100%);
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s;
  will-change: transform;
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
