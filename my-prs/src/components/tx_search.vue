<template>
  <header>
    <a href class="location">
      <img src="../assets/image/logo.png" width="56" alt />
    </a>
    <router-link to="/search" tag="p">
      <van-icon name="search" />搜索您想要回收的产品
    </router-link>
  </header>
</template>

<script>
  export default {};
</script>

<style scoped>
  header {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 768px;
    margin: 0 auto;
    width: 100%;
    z-index: 99;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
  }
  header .location {
    display: block;
    left: 0;
    top: 0;
    color: white;
    padding: 0 0.25rem;
  }
  header img {
    padding: 0 10px;
  }
  header > p {
    text-align: left;
    width: 70%;
    padding: 0.2rem;
    color: #afafaf;
    border-radius: 5px;
    background-color: #f3f3f3;
    font-size: 0.24rem;
    /* margin-right: .2rem; */
    padding: 10px;
    display: flex;
    align-items: center;
    margin-left: 14px;
  }
  header > p > i {
    margin-right: 10px;
    font-size: 12px;
    color: #333333;
  }
</style>