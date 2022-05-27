<template>
  <div>
    <layout>
      <div class="bg"></div>
      <div class="user-wrapper">
        <div class="profile">
          <div class="user-top">
            <img src="@/assets/logo-1.png" />
            <div class="name-info">
              <div class="name">用户昵称</div>
              <div class="fav"><svg-icon icon="fav2"></svg-icon>8000</div>
            </div>
            <router-link to="">个人主页></router-link>
          </div>
          <div class="user-bottom">
            <div class="user-item">
              <div class="num">8</div>
              <div class="title">我的帖子</div>
            </div>
            <div class="user-item">
              <div class="num">10</div>
              <div class="title">收藏夹</div>
            </div>
            <div class="user-item">
              <div class="num">100</div>
              <div class="title">最近浏览</div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-wrapper">
        <ul class="url-list first">
          <li v-for="(item, index) of lists" :key="'first-list' + index">
            <i :class="item.icon"></i>
            <div class="title">{{ item.name }}</div>
          </li>
        </ul>
        <ul class="url-list">
          <li v-for="(item, index) of routes" :key="'second-list' + index">
            <i :class="item.icon"></i>
            <div class="title">{{ item.name }}</div>
          </li>
        </ul>
      </div>
    </layout>
  </div>
</template>
<script>
export default {
  name: 'User',
  data() {
    return {
      lists: [
        {
          name: '我的帖子',
          icon: 'icon-teizi',
          routeName: 'mypost'
        },
        {
          name: '修改设置',
          icon: 'icon-setting',
          routeName: 'settings'
        },
        {
          name: '修改密码',
          icon: 'icon-lock2',
          routeName: 'passwd'
        },
        {
          name: '签到中心',
          icon: 'icon-qiandao',
          routeName: 'sign'
        },
        {
          name: '购买记录',
          icon: 'icon-qiandao',
          routeName: '404'
        },
        {
          name: '赞助商',
          icon: 'icon-jiangbei',
          routeName: '404'
        }
      ],
      routes: [
        {
          name: '提问',
          icon: 'icon-question',
          path: '/index/ask'
        },
        {
          name: '分享',
          icon: 'icon-share',
          path: '/index/share'
        },
        {
          name: '讨论',
          icon: 'icon-taolun',
          path: '/index/discuss'
        },
        {
          name: '建议',
          icon: 'icon-advise',
          path: '/index/advise'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  background: #e2e2e2;
}
.bg {
  height: 300px;
  background: #16d1a2;
  border-radius: 0 0 50% 50%;
  z-index: 101;
}
.user-wrapper {
  width: 100%;
  height: 370px;
  padding: 25px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  box-sizing: border-box;
  // background: #ffffff;
  .profile {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    .user-top {
      display: flex;
      //justify-content: space-between;
      padding: 20px;
      box-sizing: border-box;
      align-items: center;
      > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      .name-info {
        flex: 1;
        text-align: left;
        margin: 0 20px;
        .name {
          font-size: 32px;
          font-weight: bold;
        }
        .fav {
          background: #f7f7f7;
          color: #419a41;
          display: inline;
          padding: 0 20px;
          font-size: 20px;
          svg {
            margin: 0 10px 0 0;
          }
        }
      }
      > a {
        outline: none;
        text-decoration: none;
        color: #999;
      }
    }
    .user-bottom {
      display: flex;
      justify-content: space-around;
      margin: 20px 0;
      height: 100px;
      .user-item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        &:after {
          content: '';
          width: 2px;
          height: 100%;
          position: absolute;
          right: -50px;
          background: #e2e2e2;
        }
        &:last-child {
          &:after {
            width: 0;
          }
        }
      }
    }
  }
}
.center-wrapper {
  width: 100%;
  .url-list {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    list-style: none;
    padding: 0 20px;
    background: #ffffff;
    padding: 20px 0;
    &.first {
      margin-top: 80px;
    }
    li {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      i {
        width: 60px;
        height: 60px;
        background-size: 100%;
        margin: 10px 0;
      }
      .icon-teizi {
        background-image: url(~@/assets/images/teizi@2x.png);
      }
      .icon-setting {
        background-image: url(~@/assets/images/setting@2x.png);
      }
      .icon-lock2 {
        background-image: url(~@/assets/images/lock2@2x.png);
      }
      .icon-qiandao {
        background-image: url(~@/assets/images/qiandao@2x.png);
      }
      .icon-record {
        background-image: url(~@/assets/images/record@2x.png);
      }
      .icon-jiangbei {
        background-image: url(~@/assets/images/jiangbei@2x.png);
      }
      .icon-question {
        background-image: url(~@/assets/images/question@2x.png);
      }
      .icon-share {
        background-image: url(~@/assets/images/share@2x.png);
      }
      .icon-taolun {
        background-image: url(~@/assets/images/taolun@2x.png);
      }
      .icon-advise {
        background-image: url(~@/assets/images/advice@2x.png);
      }
    }
  }
}
</style>
