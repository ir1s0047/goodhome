<template>
  <div class="login-container">
    <!-- 头部区域 -->
    <van-nav-bar title="账号登录" left-arrow />
    <!-- 输入账号密码 -->
    <van-form class="from">
      <van-field
        class="int"
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true }]" />
      <van-field
        class="int"
        v-model="password"
        name="password"
        type="password"
        placeholder="请输入密码"
        :rules="[{ required: true }]"
    /></van-form>
    <div style="margin: 16px">
      <van-button
        block
        type="info"
        native-type="submit"
        @click="login"
        class="login-btn"
        >登录</van-button
      >
    </div>
    <p class="zhuce">还没有账号，去注册~</p>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const res = await login(this.username, this.password)
      if (res.data.status === 200) {
        this.$toast({
          message: '登录成功',
          icon: 'passed'
        })
      } else if (res.data.status === 400) {
        this.$toast({
          message: '账号或密码错误',
          icon: 'close'
        })
      } else {
        this.$toast({
          message: '服务器错误',
          icon: 'close'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
}
:deep([data-v-aeba673c] .van-nav-bar__title) {
  color: #fff;
  font-size: 18px;
}
:deep(.van-nav-bar .van-icon) {
  color: #fff;
}
.from {
  padding-top: 15px;
  padding-bottom: 20px;
}
:deep(.van-field) {
  height: 60px;
}
:deep(.van-field__control) {
  line-height: 50px;
  font-size: 18px;
  // color: #c0c0c0;
}
.login-btn {
  background-color: #1cb676;
  border: 0 solid #1cb676;
  font-size: 18px;
}
.zhuce {
  text-align: center;
  font-size: 14px;
  color: #666;
}
.int {
  border-bottom: 1px solid #f2f2f2;
  width: 340px;
  margin: 0 auto;
}
</style>
