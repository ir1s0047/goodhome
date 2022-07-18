<template>
  <div>
    <div><van-nav-bar title="收藏列表" left-arrow class="title" /></div>
    <div>
      <van-row v-for="(item, index) in FavorateList" :key="index" class="main">
        <van-col span="8" class="left">
          <van-image
            width="106px"
            height="80px"
            fir="contain"
            :src="`http://liufusong.top:8080${item.houseImg}`"
            class="image"
          />
        </van-col>
        <van-col span="16" class="right">
          <h3 class="title1" style="margin: 0">{{ item.title }}</h3>
          <div class="title2">{{ item.desc }}</div>
          <div class="title3">
            <span>{{ item.tags && item.tags[0] }}</span>
          </div>
          <div style="height: 22px" class="title4">
            <span>{{ item.price }}元/月</span>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getFavorate } from '@/api'
export default {
  data() {
    return {
      FavorateList: []
    }
  },
  methods: {
    async getFavorate() {
      try {
        const res = await getFavorate()
        console.log(res.data)
        this.FavorateList = res.data.body
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getFavorate()
  }
}
</script>

<style lang="less" scoped>
.title {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon-arrow-left:before) {
    color: #fff;
  }
}
.main {
  height: 120px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 18px;
  border-bottom: 1px solid #e5e5e5;
  .left {
    width: 106px;
    height: 80px;
    :deep(.image) {
      width: 106px;
      height: 80px;
    }
  }
}
.title1 {
  font-size: 15px;
}
.title2 {
  color: #afb2b3;
  font-size: 12px;
}
.title3 {
  color: #39becd;
  background: #e1f5f8;
  display: inline-block;
  font-size: 12px;
  border-radius: 3px;
  padding: 4px 5px;
  margin-right: 5px;
  line-height: 12px;
}
.title4 {
  font-size: 12px;
  color: #fa5741;
}
</style>
