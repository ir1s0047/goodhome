<template>
  <div>
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      active-color="#8ccba9"
      inactive-color="#8f918f"
    >
      <van-tabbar-item to="/layout/home" class="house house-home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item to="/layout/search" class="house house-sousuo"
        >找房</van-tabbar-item
      >
      <van-tabbar-item to="/layout/news" class="house house-zixun"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item to="/layout/my" class="house house-wode"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png'
      }
    }
  }
}
</script>

<style>
.van-tabbar-item {
  font-size: 16px !important;
}
</style>
