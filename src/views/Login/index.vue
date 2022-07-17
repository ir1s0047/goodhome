<template>
  <div class="login-container">
    <!-- 头部区域 -->
    <van-nav-bar title="账号登录" left-arrow @click-left="backToPrePage" />
    <!-- 输入账号密码 -->
    <van-form class="from" ref="form" @submit="login">
      <van-field
        class="int"
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true }]"
      />
      <van-field
        class="int"
        v-model="password"
        name="password"
        type="password"
        placeholder="请输入密码"
        :rules="[{ required: true }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit" class="login-btn"
          >登录</van-button
        >
      </div></van-form
    >

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
    // 返回上一页
    backToPrePage() {
      this.$router.back()
    },
    async login() {
      this.$toast.loading({
        message: '登录ing',
        forbidClick: true
      })
      // try {
      //   const res = await login(this.username, this.password)
      //   const { data } = res
      //   this.$store.commit('setUser', data.body)
      //   this.$router.push('/layout/my')
      // } catch (error) {
      //   this.$toast.fail('账号登录失败')
      // }
      try {
        const res = await login(this.username, this.password)
        // 存储对象
        this.$store.commit('setUser', res.data.body)
        this.$toast.success('登录成功')
        // 跳转页面
        this.$router.push('/layout/my')
      } catch (error) {
        console.log(error)
        this.$toast.fail('账号登录失败')
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
.form {
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
