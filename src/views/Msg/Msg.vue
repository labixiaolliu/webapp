<template>
  <div>
    <layout>
      <ul class="tab-wrapper">
        <li><router-link :to="{ name: 'comment' }">评论</router-link></li>
        <li><router-link :to="{ name: 'zan' }">点赞</router-link></li>
      </ul>
      <router-view></router-view>
    </layout>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.tab-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.2);
  li {
    height: 100px;
    line-height: 100px;
    list-style: none;
    margin: 0 10%;
    a {
      color: #999999;
      text-decoration: none;
    }
    .router-link-exact-active {
      color: #47b747;
      position: relative;
      display: block;
      &:after {
        content: '';
        width: 90%;
        height: 5px;
        background: #47b747;
        position: absolute;
        bottom: 0;
        left: 5%;
      }
    }
  }
}
</style>
