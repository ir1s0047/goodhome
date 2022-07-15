<template>
  <div>
    <div class="title">
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
        <van-grid-item icon="star-o" text="我的收藏"> </van-grid-item>
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
export default {
  data() {
    return {
      value: [
        {
          name: '我的收藏'
        }
      ]
    }
  }
}
</script>

<style>
/* 头部 */
.title {
  position: relative;
  height: 300px;
}
.title .myinfo {
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
}
.title .myinfo .myimg {
  position: relative;
  transform: translateY(-50%);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
}
.myinfo .mylogin {
  transform: translateY(-50%);
}
.title .myinfo .myimg img {
  width: 101%;
  border-radius: 60%;
  height: 101%;
}
.title img {
  width: 375px;
  height: 191px;
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
