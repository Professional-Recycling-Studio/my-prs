<template>
  <div>
    <!-- 头 -->
    <header>
      <router-link to="/login" class="backIcon">
        <van-icon name="arrow-left" />
      </router-link>
      <h1>常见问题</h1>
    </header>
    <!-- 注册 -->
    <ul class="formarea">
      <li>
        <label class="lit">账号：</label>
        <input type="tel" name="seller_phone" placeholder="输入中国大陆11位手机号码" class="textbox" />
      </li>
      <li>
        <label class="lit">密码：</label>
        <input type="password" name="seller_password" placeholder="输入密码" class="textbox" />
      </li>
      <li>
        <label class="lit">确认密码：</label>
        <input type="password" name="seller_rep_password" placeholder="再次输入密码" class="textbox" />
      </li>
      <li class="check_code">
        <label class="lit">验证码：</label>
        <input
          style="width: 66%"
          type="text"
          name="seller_register_code"
          placeholder="请输入短信验证码"
          class="textbox"
        />
        <span class="get_code">获取验证码</span>
      </li>
      <li>
        <input
          type="button"
          disabled
          id="sign_up"
          style="color: #000"
          class="sign_btn"
          value="立即注册"
        />
      </li>
    </ul>

    <!-- footer -->
    <div class="liLink sign_tips">
      <router-link to="/login" class="fr">已有账号，登录</router-link>
      <span style="float: right">
        <input id="checkbox1" type="checkbox" />
        <a style href="article.html" class="fl">服务条款&nbsp;</a>
        <a style="color: #000">我已阅读并同意</a>
      </span>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  header {
    height: 50px;
    line-height: 50px;
    background-color: #00b08e;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 768px;
    margin: 0 auto;
    width: 100%;
    z-index: 99;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
  }
  .backIcon {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 15px;
    color: #000;
    font-size: 20px;
  }
  header h1 {
    text-align: center;
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  ul {
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
    text-indent: 95px;
  }
  .get_code {
    background-color: #00b08e;
    padding: 8px 10px;
    width: 80px;
    text-align: center;
    font-size: 10px;
    border-radius: 5px;
    color: #108f75;
  }
  .formarea {
    margin-top: 51px;
  }
  .sign_btn {
    width: 90%;
    height: 38px;
    background: #00b08e;
    border: none;
    font-size: 15px;
    color: #7c8d8a;
    border-radius: 19px;
    margin: 15px auto;
    display: block;
  }
  .liLink{
    padding: 0 10px;
  }
  .liLink a {
    color: #bbb4a0;
    font-size: 12px;
  }
  .liLink span {
    color: #999;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .fl {
    float: right;
    font-size: 12px;
    color: #5c93f9;
  }
</style>