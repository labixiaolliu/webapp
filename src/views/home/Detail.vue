<template>
  <div>
    <gg-header :title="post.title || '测试标题'"></gg-header>
    <div class="wrapper">
      <div class="detail-head">
        {{ post.title }}
      </div>
      <div class="detail-info">
        <div class="detail-info-head">
          <div class="avatar">
            <img :src="post.user && post.user.pic" alt="" />
          </div>
          <div class="cont">
            <p class="name">{{ post.user && post.user.nick }}</p>
            <p class="time">{{ post.user.created | moment }} 评论了帖子</p>
          </div>
        </div>
        <div class="detail-info-body" v-richtext="post.content"></div>
        <div class="detail-info-foot">{{ post.reads }}阅读</div>
      </div>
      <div
        class="detail-comment"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="30"
      >
        <p class="comment-head">评论列表</p>
        <div class="comment-detail" v-for="(item, index) of comments" :key="'comment' + index">
          <div class="detail-info-head">
            <div class="avatar">
              <img :src="item.uid && item.uid.pic" alt="" />
            </div>
            <div class="cont">
              <p class="name">{{ item.uid && item.uid.nick }}</p>
              <p class="time">{{ item.uid.created | moment }}</p>
            </div>
            <div class="comment-zan">
              <svg-icon icon="zan"></svg-icon>
              <span>{{ item.hands }}</span>
            </div>
          </div>
          <div class="detail-info-body" v-richtext="item.content"></div>
        </div>
        <div class="loading" v-if="loading"><mt-spinner type="fading-circle"></mt-spinner>加载中...</div>
        <div class="comment-nomore" v-if="isEnd && comments.length > 0">已经加载全部</div>
        <div class="comment-none" v-if="comments.length <= 0">还没有评论，快来抢沙发吧～～</div>
      </div>
      <div class="detail-bottom" :class="{ fixed: isFocus }">
        <span class="bottom-input-wrap">
          <svg-icon icon="advice"></svg-icon><input type="text" placeholder="写评论" @blur="blur" @focus="focus" />
        </span>
        <ul class="bottom-right">
          <li :class="{ row: !showText }">
            <svg-icon icon="bianji"></svg-icon>
            <p>
              <span v-show="showText">评论</span>
              {{ post.answer }}
            </p>
          </li>
          <li :class="{ row: !showText }">
            <svg-icon icon="shoucang"></svg-icon>
            <p>
              <span v-show="showText">收藏</span>
              {{ post.fav }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getPostById, getComments } from '../../api/content'
export default {
  name: 'Detail',
  data() {
    return {
      post: { user: { created: '' } },
      showText: true,
      comments: [],
      loading: false,
      page: -1,
      limit: 10,
      isEnd: false,
      tid: '',
      isFocus: false
    }
  },
  methods: {
    getCommentsByTid(tid) {
      getComments({ tid: tid, page: this.page, limit: this.limit }).then((res) => {
        console.log('TCL: Data -> store', res)
        this.loading = false
        if (res.code === 200) {
          if (this.page === 0) {
            this.comments = res.data
          } else {
            this.comments = this.comments.concat(res.data)
          }
          if (res.data.length < this.limit) {
            this.isEnd = true
          }
        } else {
          this.$Trost(res.message)
        }
      })
    },
    loadMore() {
      console.log('TCL: Data -> store', 'load more')
      if (this.isEnd) return
      this.loading = true
      this.page++
      this.getCommentsByTid(this.tid)
    },
    blur() {
      this.isBlur = false
    },
    focus() {
      this.isBlur = true
    }
  },
  mounted() {
    this.tid = this.$route.query.tid
    getPostById(this.tid).then((res) => {
      if (res.code === 200) {
        console.log('TCL: Data -> store', res.data)
        this.post = res.data
      } else {
        this.$Toast(res.message)
      }
    })
    // this.getCommentsByTid(this.tid)
  }
}
</script>
<style lang="scss">
img {
  max-width: 100%;
}
</style>
<style scoped lang="scss">
@import '@/assets/style/_mixin.scss';
.wrapper {
  padding-top: 105px;
  margin-bottom: $header-height;
  display: flex;
  flex-direction: column;
  background: #e2e2e2;
  .detail-head {
    font-size: 36px;
    color: #333;
    padding: 0 30px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    // margin: 0 0 20px 0;
    line-height: $header-height;
    background-color: #fff;
    z-index: 200;
    position: relative;
  }
  .detail-info-head {
    display: flex;
    align-items: center;
    background-color: #fff;
    img {
      width: 120px;
      height: 120px;
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
  }
  .detail-info-body {
    padding-bottom: 46px;
    color: #666;
    word-break: break-all;
    word-wrap: break-word;
    line-height: 55px;
    font-size: 30px;
    overflow-x: hidden;
    text-align: left;
    padding: 0 20px;
    background-color: #fff;
    img {
      max-width: 100%;
    }
  }
  .detail-info-foot {
    color: #ccc;
    font-size: 26px;
    text-align: left;
    padding: 15px 30px;
    background-color: #fff;
  }
  .detail-bottom {
    display: flex;
    height: $header-height;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    align-items: center;
    background-color: #fff;
    @include resH-to(big-screens) {
      padding-bottom: 28px;
      &.fixed {
        padding-bottom: 0;
      }
    }
    .bottom-input-wrap {
      flex: 1;
      display: flex;
      align-items: center;
      background-color: #f3f3f3;
      flex: 1;
      display: flex;
      align-items: center;
      border-radius: 50px;
      width: 200px;
      color: #ccc;
      font-size: 28px;
      height: 64px;
      margin: 0 20px;

      .svg-icon {
        font-size: 30px;
        margin: 0 10px 0 16px;
        &.face {
          font-size: 36px;
        }
      }
      input {
        border: 0;
        background-color: transparent;
        outline: 0;
        flex: 1;
        background: transparent;
        margin: 0 5px;
      }
    }
    .bottom-right {
      display: flex;
      list-style: none;
      margin-right: 20px;
      font-size: 26px;
      padding: 0;
      li {
        text-align: center;
        white-space: nowrap;
        align-items: center;
        margin: 0 10px;
        &.row {
          flex-flow: row nowrap;
          display: flex;
          align-items: center;
          .svg-icon {
            margin-bottom: 0;
          }
          p {
            margin-top: 8px;
          }
        }
        svg {
          margin: 0 5px;
        }
        .svg-icon {
          font-size: 30px;
          margin-bottom: 10px;
        }
        p {
          margin: 0;
        }
      }
    }
  }
  .comment-detail {
    margin: 1px 0;
  }
  .comment-none {
    text-align: center;
    color: #999999;
    background: #ffffff;
    padding: 15px 0;
  }
  .comment-head {
    text-align: left;
    padding: 20px 20px;
    margin: 2px 0;
    background-color: #fff;
  }
  .comment-zan {
    margin: 0 20px;
    color: #999999;
    span {
      padding: 0 15px;
    }
  }
  .loading {
    background: #ffffff;
    padding: 20px 0 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin: 0 25px;
    }
  }
  .comment-nomore {
    background: #ffffff;
    padding: 20px 0 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999999;
    font-size: 32px;
  }
}
</style>
