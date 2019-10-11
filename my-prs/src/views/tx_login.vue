<template>
  <div>
    <!-- 头部 -->
    <header>
      <router-link to="/" class="backIcon">
        <van-icon name="wap-home-o" />
      </router-link>
      <h1>登录</h1>
      <router-link
        to="/enroll"
        class="setIcon"
        style=" 
        color: #fff;
        font-weight: bold;"
      >注册</router-link>
    </header>
    <!-- logo -->
    <div class="formLogo">
      <img src="../assets/image/logo.png" width="100" alt />
      <h2>趣 评 测, 一 站 式 数 码 交 易</h2>
    </div>
    <!-- 验证方式 -->
    <ul class="chose_box">
      <li @click="img1=true,img2=false">
        <img
          v-if="!img1"
          class="hide_pic"
          src="../assets/image/login_way1.png"
          style="width: 100px"
        />
        <img v-if="img1" src="../assets/image/login_way1_chose.png" style="width: 100px" />
      </li>
      <li @click="img1=false,img2=true">
        <img v-if="!img2" src="../assets/image/login_way2.png" style="width: 100px" />
        <img
          v-if="img2"
          class="hide_pic"
          src="../assets/image/login_way2_chose.png"
          style="width: 100px"
        />
      </li>
    </ul>
    <!-- 验证码登录 -->
    <ul class="formarea" v-if="img1">
      <li>
        <label class="lit">手机号：</label>
        <input type="tel" placeholder=" 输入手机号码" class="textbox" />
      </li>
      <li class="check_code">
        <label class="lit">验证码：</label>
        <input
          style="width: 67% ;text-indent: 65px;"
          type="text"
          placeholder="请输入短信验证码"
          class="textbox"
        />
        <span class="get_code">获取验证码</span>
      </li>
      <li>
        <input type="button" class="login" value="登录" />
      </li>
    </ul>
    <!-- 密码登录 -->
    <ul class="formarea" v-if="img2">
      <li>
        <label class="lit">账号：</label>
        <input type="text" placeholder="手机号码" class="textbox" />
      </li>
      <li>
        <label class="lit">密码：</label>
        <input type="password" placeholder="登录密码" class="textbox" />
      </li>
      <li>
        <input class="login" type="button" value="登录" />
      </li>
    </ul>
    <!-- footer -->
    <div class="liLink lg_liLink">
      <input type="checkbox" style="float: left;margin-left:12px" />
      <a style="float: left" class="fr">&nbsp;一周内免登录</a>
      <router-link to="/" style="float: right;margin-right:12px">未设置或忘记密码?</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        img1: true,
        img2: false
      };
    }
  };
</script>

<style scoped>
  /* 头部 */
  header {
    height: 50px;
    /* line-height: 50px; */
    background-color: #00b08e;
    max-width: 768px;
    margin: 0 auto;
    width: 100%;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .backIcon {
    display: block;
    padding: 0 15px;
    color: white;
    font-size: 25px;
  }
  header h1 {
    margin: 0;
    text-align: center;
    /* width: 67%; */
    border-radius: 5px;
    font-size: 19px;
    font-weight: bold;
    color: white;
  }
  .setIcon {
    display: block;
    color: white;
    padding: 0 15px;
    font-size: 16px;
  }
  /* logo */
  .formLogo {
    /* margin-top: 1rem; */
    background: #00b08e;
    overflow: hidden;
  }
  .formLogo h2 {
    font-size: 0.2rem;
    color: #058a6f;
  }
  /* 验证方式 */
  .chose_box {
    height: 100px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 10px;
  }
  .chose_box li {
    flex: 1;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  /* 验证码登录 */
  .formarea {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .formarea li {
    position: relative;
    margin: 1px 0;
    background: white;
    padding: 0 3%;
    overflow: hidden;
  }
  .formarea li .lit {
    position: absolute;
    left: 9%;
    top: 0;
    line-height: 47px;
    font-weight: bolder;
  }
  .formarea li .textbox {
    width: 94%;
    padding: 15px 3%;
    border: none;
    text-indent: 75px;
  }
  .get_code {
    background-color: #00b08e;
    padding: 7px 10px;
    width: 80px;
    text-align: center;
    font-size: 10px;
    border-radius: 5px;
    color: #058a6f;
  }
  .login {
    width: 90%;
    height: 38px;
    background: #00b08e;
    border: none;
    font-size: 18px;
    color: #058a6f;
    border-radius: 19px;
    margin: 15px auto;
    display: block;
  }
  /* footer */
  .liLink a {
    color: #bbb4a0;
    font-size: 12px;
  }
</style>