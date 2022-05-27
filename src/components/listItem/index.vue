<template>
  <li @click="goDetail(item._id)">
    <div class="list-head">
      <div class="title">
        <div :class="['type', 'type-' + item.catalog]">{{ item.catalog | catalogFilter }}</div>
        <div class="ellipsis">{{ item.title }}</div>
      </div>
    </div>
    <div class="author">
      <img :src="item.uid.pic" />
      <div class="nick">{{ item.uid.nick }}</div>
    </div>
    <div class="list-body">
      <div class="info">{{ item.content }}</div>
      <img class="fmt" :src="item.snapshot" v-show="item.snapshot" />
    </div>
    <div class="list-foot">
      <span class="left">{{ item.answer }} 回复</span>
      <span class="timer">{{ item.created | moment }}</span>
    </div>
  </li>
</template>
<script>
const CATALOG_TYPE = {
  share: '分享',
  ask: '提问',
  discuss: '讨论',
  advise: '建议'
}
export default {
  name: 'ListItem',
  props: ['item'],
  data() {
    return {}
  },
  filters: {
    catalogFilter(v) {
      return CATALOG_TYPE[v]
    }
  },
  methods: {
    goDetail(tid) {
      this.$router.push({ name: 'detail', query: { tid: tid } })
    }
  }
}
</script>
<style scoped lang="scss">
li {
  list-style: none;
  padding: 0 20px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  .title {
    display: flex;
    margin-top: 10px;
    .type {
      display: inline-block;
      height: 36px;
      width: 72px;
      text-align: center;
      line-height: 36px;
      white-space: nowrap;
      margin-right: 10px;
      font-size: 24px;
      border-radius: 18px;
      border-bottom-left-radius: 0;
      color: #fff;
      min-width: 80px;
    }
    .type-share {
      background-color: #feb21e;
    }
    .type-ask {
      background-color: #02d199;
    }
    .type-discuss {
      background-color: #fe1e1e;
    }
    .type-advise {
      background-color: #0166f8;
    }
    .ellipsis {
      margin-left: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .author {
    display: flex;
    align-items: center;
    font-size: 24px;
    margin-bottom: 18px;
    img {
      width: 82px;
      height: 82px;
      border-radius: 100%;
    }
  }
  .list-body {
    margin-bottom: 30px;
    display: flex;
    .info {
      font-size: 28px;
      color: #666;
      max-height: 94px;
      flex: 1;
      margin-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      //-webkit-box-orient: vertical;
    }
  }
  .list-foot {
    color: #999;
    font-size: 24px;
    display: flex;
    align-items: center;
    .left {
      // flex: 1;
      display: flex;
      align-items: center;
      .svg-icon {
        margin-right: 5px;
      }
      .timer {
        margin-left: 20px;
        flex: 1;
      }
    }
  }
}
</style>
