<template>
  <div>
    <gg-header title="登陆"></gg-header>
    <div class="wrapper">
      <div class="login-head">
        <img src="@/assets/logo.jpeg" />
      </div>
      <div class="login-body">
        <div class="login-item">
          <svg-icon icon="person"></svg-icon>
          <input type="text" placeholder="请输入邮箱" v-model="name" />
        </div>
        <div class="login-item">
          <svg-icon icon="lock"></svg-icon>
          <input type="password" placeholder="请输入密码" v-model="password" />
        </div>
        <div class="login-item">
          <svg-icon icon="images"></svg-icon>
          <input type="text" placeholder="请输入验证码" v-model="code" />
          <div class="svg-code" v-html="svg" @click="_getCode"></div>
        </div>
        <div class="login-router">
          <router-link to="{name: 'Reg'}">注册</router-link>
          <router-link to="{name: 'Forget'}">忘记密码</router-link>
        </div>
        <div class="login-btn">
          <mt-button type="primary" @click.native="login">登陆</mt-button>
        </div>
        <div class="login-other">
          <svg-icon icon="qq" class="icon-qq"></svg-icon>
          <svg-icon icon="weixin" class="icon-weixin"></svg-icon>
          <svg-icon icon="weibo" class="icon-weibo"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: '',
  data() {
    return {
      svg: '',
      name: '',
      password: '',
      code: ''
    }
  },
  methods: {
    ...mapActions({
      getCode: 'user/getCode',
      getLogin: 'user/getLogin'
    }),
    async _getCode() {
      const result = await this.getCode()
      this.svg = result
    },
    async login() {
      const res = await this.getLogin({
        username: this.name,
        password: this.password,
        code: this.code
      })
      if (res.code == 200) {
        this.$router.push({ name: 'index' })
      }
    }
  },
  mounted() {
    this._getCode()
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  padding-top: $header-height;
  .login-head img {
    width: 40%;
  }
  .login-body {
    padding: 0 40px;
    .login-item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 80px;
      border-bottom: 1px solid #eeeeee;
      input {
        flex: 1;
        border: none;
        outline: none;
        margin: 0 20px;
      }
    }
    .login-router {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      a {
        text-decoration: none;
        outline: none;
        color: #999;
      }
    }
    .login-btn {
      width: 100%;
      margin: 20px 0;
      button {
        width: 100%;
      }
    }
    .login-other {
      display: flex;
      justify-content: space-around;
      margin: 40px 0;
      svg {
        font-size: 70px;
        &.icon-qq {
          color: #c5c5de;
        }
        &.icon-weixin {
          color: #3ee23e;
        }
        &.icon-weibo {
          color: #f12929;
        }
      }
    }
  }
}
</style>
