<template>
  <div>
    <!-- 头部 -->
    <header>
      <a @click="res('/')" class="backIcon">
        <van-icon name="wap-home-o" />
      </a>
      <h1>登录</h1>
      <a @click="res('/enroll')" class="setIcon" style=" 
        color: #fff;
        font-weight: bold;">注册</a>
    </header>
    <!-- logo -->
    <div class="formLogo">
      <img src="../assets/image/logo.png" width="100" alt />
      <h2 style="color: white;">PRS专业回收机构，给您前所未有的回收体验</h2>
    </div>
    <!-- 验证方式 -->
    <ul class="chose_box">
      <li @click="img1=true,img2=false">
        <img v-if="!img1" class="hide_pic" src="../assets/image/login_way1.png" style="width: 100px" />
        <img v-if="img1" src="../assets/image/login_way1_chose.png" style="width: 100px" />
      </li>
      <li @click="img1=false,img2=true">
        <img v-if="!img2" src="../assets/image/login_way2.png" style="width: 100px" />
        <img v-if="img2" class="hide_pic" src="../assets/image/login_way2_chose.png" style="width: 100px" />
      </li>
    </ul>
    <!-- 验证码登录 -->
    <ul class="formarea" v-if="img1">
      <van-cell-group>
        <van-field clearable label="联系电话:" right-icon="question-o" placeholder="请输入电话号码" v-model="phone" />
        <van-field center clearable label="短信验证码:" placeholder="请输入短信验证码" v-model="code">
          <van-button slot="button" size="small" color='#00b08e' @click="getcode" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <li>
        <input type="button"  @click="log" class="login" value="登录" />
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
    <van-popup v-model="isShow">
      <van-loading size="60px" color="white">
        <span style="color: white;font-size: 20px">加载中...</span>
      </van-loading>
    </van-popup>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    Toast
  } from 'vant';

  Vue.use(Toast);
  export default {
    data() {
      return {
        img1: true,
        img2: false,
        isShow: false,
        phone: "",
        code: ""
      };
    },
    methods: {
      res(x) {
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
          this.$router.push({
            path: x
          })
        }, 1000);
      },
      getcode() {
        this.$axios.get(
          `code/code/sendcode?phone=${this.phone}&remark=login`
        ).then((response) => {
          // console.log(response)
          Toast(response.data.msg);
        })
      },
      log(){
        console.log(1)
        this.$axios.get(
          `/code/qpc/login?mode=codeMethod&seller_phone=${this.phone}&code=${this.code}&tu=recycle&isHoldMode=&_=1570852176428`
        ).then((response) => {
          if(response.data.msg=='未获取验证码或验证码已失效！'||response.data.msg=='请输入验证码！'||response.data.msg=='请输入手机号码！'){
            Toast(response.data.msg);
          }else{
            this.$store.commit("changename",this.phone)
            this.$router.push({
              path:'/center'
            })
          }
        })
      }
    },

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
    text-align: center;
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
    color: white;
  }

  /* footer */
  .liLink a {
    color: #bbb4a0;
    font-size: 12px;
  }
</style>