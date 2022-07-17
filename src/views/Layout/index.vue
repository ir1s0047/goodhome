<template>
  <div>
    <router-view></router-view>
    <van-tabbar active-color="#8ccba9" inactive-color="#8f918f" route>
      <van-tabbar-item to="/layout/home">
        <template #icon>
          <span class="house house-home"></span>
          <span class="text">首页</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/layout/search">
        <template #icon>
          <span class="house house-sousuo"></span>
          <span class="text">找房</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/layout/news">
        <template #icon>
          <span class="house house-zixun"></span>
          <span class="text">资讯</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/layout/my">
        <template #icon>
          <span class="house house-wode"></span>
          <span class="text">我的</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
:deep(.van-tabbar-item__icon) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  .house {
    font-size: 0.5333rem;
  }
  .text {
    font-size: 0.32rem;
  }
}
</style>
