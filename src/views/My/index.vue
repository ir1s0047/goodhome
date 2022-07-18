<template>
  <div>
    <!-- 已登录 -->
    <div v-if="isLogin" class="title">
      <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
      <div class="myinfo">
        <div class="myimg">
          <img
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
          />
        </div>
        <div class="mylogin" style="margin-top: 15px">
          <p class="name1">好客_845296</p>
          <van-button class="btn" sizi="mini" round @click="logout"
            >退出</van-button
          ><br />
          <p class="bj">编辑个人资料</p>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div v-else class="title">
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
      <div class="myinfo">
        <div class="myimg">
          <img
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt="icon"
          />
        </div>
        <div class="mylogin">
          <p>游客</p>
          <van-button type="primary" size="small" to="login">去登录</van-button>
        </div>
      </div>
    </div>
    <div class="middle">
      <van-grid :border="false" :column-num="3">
        <van-grid-item icon="star-o" text="我的收藏" to="/favorate">
        </van-grid-item>
        <van-grid-item icon="wap-home-o" text="我的出租"> </van-grid-item>
        <van-grid-item icon="clock-o" text="看房记录"> </van-grid-item>
        <van-grid-item icon="newspaper-o" text="成为房主"> </van-grid-item>
        <van-grid-item icon="contact" text="个人资料"> </van-grid-item>
        <van-grid-item icon="service-o" text="联系我们"> </van-grid-item>
      </van-grid>
    </div>
    <div class="banner">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/api'
export default {
  data() {
    return {
      userInfo: {},
      value: [
        {
          name: '我的收藏'
        }
      ]
    }
  },
  computed: {
    isLogin() {
      return !!this.$store.state.user.token
    }
  },
  methods: {
    logout() {
      this.$dialog
        .confirm({
          title: '好客租房',
          message: '是否确认退出该账号'
        })
        .then(() => {
          this.$store.commit('setUser', '')
          // 点击确认走这里
          // on confirm
        })
        .catch(() => {
          // 点击取消进入catch1
          // on cancel1
        })
    },
    async getUserInfo() {
      if (this.isLogin) {
        try {
          const {
            data: { data }
          } = await getUserInfo()
          this.userInfo = data
        } catch (error) {
          this.$toast.fail('请重新登录')
        }
      }
    }
  },
  created() {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
/* 头部 */
.title {
  position: relative;
  height: 300px;
  .myinfo {
    position: absolute;
    background: #fff;
    width: 74%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .myimg {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 60px;
      height: 60px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
    }
    .mylogin {
      transform: translateY(-50%);
      height: 100px;
      .btn {
        width: 1.53333rem;
        height: 20px;
        background: #21b97a;
        border-radius: 0.21333rem;
        font-size: 0.26667rem;
        color: #fff;
        padding: 0;
      }
      :deep(.name1) {
        margin-top: 20px;
      }
      :deep(.bj) {
        color: #a6a699;
        font-size: 12px;
      }
    }
    .myimg img {
      width: 101%;
      border-radius: 60%;
      height: 101%;
    }
  }
  img {
    width: 375px;
    height: 191px;
  }
}
/* 中部内容 */
.middle {
  padding-top: 20px;
}
/* banner区域 */
.banner {
  text-align: center;
  margin-top: 10px;
}
.banner img {
  width: 92%;
}
</style>
