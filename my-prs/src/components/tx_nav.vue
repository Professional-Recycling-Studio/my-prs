<template>
  <div>
    <nav>
      <!--<p>首页</p>-->
      <a @click="go('/')" class="homeIcon">
        <img src="../assets/image/home_select.png" alt />
    </a>
      <!--<p>分类</p>-->
      <a @click="go('/cate')" class="cartIcon">
        <img src="../assets/image/type.png" alt />
      </a>
      <!--<p>我的</p>-->
      <a @click="go('/login')" class="userIcon">
        <img src="../assets/image/mine.png" alt />
      </a>
    </nav>
    <van-popup v-model="isShow">
      <van-loading size="60px" color="white">
        <span style="color: white;font-size: 20px">加载中...</span>
      </van-loading>
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      go(x) {
        this.isShow = true,
        setTimeout(()=>{
        this.isShow = false,

          this.$router.push({
            path:x
          })
        },1000)
      }
    },
  };
</script>

<style>
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 768px;
    margin: 0 auto;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px #f4f4f4 solid;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
  }

  nav a {
    text-align: center;
    color: #000;
    line-height: 1.2;
    font-weight: bolder;
  }

  nav>a img {
    width: 28px;
    height: 28px;
  }
</style>