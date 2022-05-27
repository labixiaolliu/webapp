<template>
  <div>
    <div class="hot-head">
      <ul class="spinner">
        <li
          v-for="(item, index) of spinnerList"
          :key="'spinner' + index"
          :class="{ active: spinnerIndex === index }"
          @click="setSpinnerIndex(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="hot-detail">
      <ul>
        <li class="detail-item">
          <p class="index">01</p>
          <div class="avatar">
            <img src="@/assets/logo-1.png" alt="" />
          </div>
          <div class="cont">
            <p class="name">蜡笔小六</p>
            <p class="time">592<span>条评论</span></p>
          </div>
        </li>

        <li class="detail-item">
          <p class="index">02</p>
          <div class="avatar">
            <img src="@/assets/logo-1.png" alt="" />
          </div>
          <div class="cont">
            <p class="name">蜡笔小六</p>
            <p class="time">592<span>条评论</span></p>
          </div>
        </li>
        <li class="detail-item">
          <p class="index">03</p>
          <div class="avatar">
            <img src="@/assets/logo-1.png" alt="" />
          </div>
          <div class="cont">
            <p class="name">蜡笔小六</p>
            <p class="time">592<span>条评论</span></p>
          </div>
        </li>
        <li class="detail-item">
          <p class="index">04</p>
          <div class="avatar">
            <img src="@/assets/logo-1.png" alt="" />
          </div>
          <div class="cont">
            <p class="name">蜡笔小六</p>
            <p class="time">592<span>条评论</span></p>
          </div>
        </li>
        <li class="detail-item">
          <p class="index">05</p>
          <div class="avatar">
            <img src="@/assets/logo-1.png" alt="" />
          </div>
          <div class="cont">
            <p class="name">蜡笔小六</p>
            <p class="time">592<span>条评论</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      spinnerIndex: 0,
      spinnerList: [
        {
          name: '三天内',
          content: ''
        },
        {
          name: '一周内',
          content: ''
        },
        {
          name: '一月内',
          content: ''
        }
      ]
    }
  },
  methods: {
    setSpinnerIndex(index) {
      if (this.spinnerIndex !== index) {
        this.spinnerIndex = index
      }
    }
  }
}
</script>
<style scoped lang="scss">
ul {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
}
.spinner {
  display: flex;
  padding: 20px 20px;
  li {
    display: inline;
    padding: 10px 20px;
    margin: 0 30px 0 0;
    background: #e2e2e2;
    border-radius: 30px;
    color: #999999;
    font-weight: bold;
  }
  .active {
    background: #d3ead3;
    color: #5ccc5c;
  }
}
.detail-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  .index {
    font-size: 42px;
    padding: 0 0 0 20px;
    color: #999999;
    font-weight: bold;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: 0 30px;
  }
  .cont {
    // display: flex;
    // flex-direction: column;
    flex: 1;
    margin-left: 20px;
    .name {
      font-size: 32px;
      font-weight: bold;
      color: #333;
      margin-bottom: 10px;
      text-align: left;
    }
    .time {
      color: #999;
      font-size: 22px;
      text-align: left;
    }
  }
}
.detail-item:nth-child(1) {
  .index {
    color: #dc5f5f;
  }
}
.detail-item:nth-child(2) {
  .index {
    color: #bd841a;
  }
}
.detail-item:nth-child(3) {
  .index {
    color: #dede5e;
  }
}
</style>
