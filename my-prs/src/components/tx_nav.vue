<template>
  <nav>
    <!--<p>首页</p>-->
    <router-link to="/" class="homeIcon">
      <img src="../assets/image/home_select.png" alt />
    </router-link>
    <!--<p>分类</p>-->
    <router-link to="/" class="cartIcon">
      <img src="../assets/image/type.png" alt />
    </router-link>
    <!--<p>我的</p>-->
    <router-link to="/login" class="userIcon">
      <img src="../assets/image/mine.png" alt />
    </router-link>
  </nav>
</template>

<script>
  export default {};
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
  nav>a img{
    width: 28px;
    height: 28px;
  }
</style>