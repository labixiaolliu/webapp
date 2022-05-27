<template>
  <div>
    <ul>
      <li>
        <div class="msg-head">
          <div class="avatar">
            <img src="@/assets/logo-1.png" alt="" />
          </div>
          <div class="cont">
            <p class="name">蜡笔小六</p>
            <p class="time">1分钟前回复了你</p>
          </div>
          <div class="edit">
            <svg-icon icon="editor"></svg-icon>
            回复
          </div>
        </div>
        <div class="msg-body">这个我也看了</div>
        <div class="msg-bottom">
          <img src="@/assets/logo-1.png" />
          <div class="post-detail">
            <div class="title">你问了一个什么问题</div>
            <div class="content">阿圣诞节啊谁的卡是几点哈是大红色的</div>
          </div>
        </div>
      </li>
      <li>
        <div class="msg-head">
          <div class="avatar">
            <img src="@/assets/logo-1.png" alt="" />
          </div>
          <div class="cont">
            <p class="name">蜡笔小六</p>
            <p class="time">1分钟前回复了你</p>
          </div>
          <div class="edit">
            <svg-icon icon="editor"></svg-icon>
            回复
          </div>
        </div>
        <div class="msg-body">这个我也看了</div>
        <div class="msg-bottom">
          <img src="@/assets/logo-1.png" />
          <div class="post-detail">
            <div class="title">你问了一个什么问题</div>
            <div class="content">阿圣诞节啊谁的卡是几点哈是大红色的</div>
          </div>
        </div>
      </li>
    </ul>
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
ul {
  margin: 0;
  padding: 0;
}
li {
  width: 100%;
  list-style: none;
  margin-top: 40px;
  .msg-head {
    font-size: 36px;
    color: #333;
    padding: 0 30px;
    // box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    // margin: 0 0 20px 0;
    background-color: #fff;
    z-index: 200;
    position: relative;
    box-sizing: border-box;
  }
  .msg-head {
    display: flex;
    align-items: center;
    background-color: #fff;
    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
    .cont {
      // display: flex;
      // flex-direction: column;
      flex: 1;
      margin-left: 20px;
      .name {
        font-size: 26px;
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
    .edit {
      color: #999999;
      font-size: 30px;
    }
  }
  .msg-body {
    text-align: left;
    padding: 0 20px;
  }
  .msg-bottom {
    display: flex;
    align-items: center;
    height: 150px;
    width: 100%;
    padding: 0 15px;
    margin-top: 20px;
    .post-detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: #eeeeee;
      padding: 0 10px;
      margin: 0 40px 0 0;
      height: 100%;
      border-radius: 15px;
      .title {
        text-align: left;
        font-size: 32px;
        color: #000000;
        line-height: 50px;
        margin: 10px 10px 0 10px;
      }
      .content {
        font-size: 25px;
        color: #999999;
        line-height: 40px;
        margin: 10px;
      }
    }
    > div {
      line-height: 33px;
    }
    .content {
      text-align: left;
    }
  }
}
</style>
