<template>
  <div>
    <van-nav-bar title="选择回收方式" left-arrow @click-left="onClickLeft('/cate')" />
    <ul class="chose_box">
      <li @click="img1=true,img2=false">
        <img v-if="!img1" class="hide_pic" src="../assets/image/way1.png" style="width: 100px" />
        <img v-if="img1" src="../assets/image/way1_chose.png" style="width: 100px" />
      </li>
      <li @click="img1=false,img2=true">
        <img v-if="!img2" src="../assets/image/way2.png" style="width: 100px" />
        <img v-if="img2" class="hide_pic" src="../assets/image/way2_chose.png" style="width: 100px" />
      </li>
    </ul>
    <!-- 验证码登录 -->
    <ul class="formarea" v-if="img1">
      <van-cell-group>
        <van-field  clearable label="联系电话:" right-icon="question-o" @click-right-icon="$toast('question')" placeholder="请输入电话号码" />
        <van-field  center clearable label="短信验证码:" placeholder="请输入短信验证码">
          <van-button slot="button" size="small" color='#00b08e' type="primary">发送验证码</van-button>
        </van-field>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-field  clearable label="收款账户:" placeholder="非常重要，请认真填写" />
        <van-field  clearable label="收款人:"  placeholder="请输入真实姓名"" />
        <van-dropdown-menu>
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <van-field  clearable label="序列号/IMEI" placeholder="IMEI" />
      </van-cell-group>
    </ul>
    <!-- 密码登录 -->
    <ul class="formarea" v-if="img2">
        地图

    </ul>
    <van-button type="primary"
    color="#00b08e" size="large" >立即估价</van-button>
  </div>
</template>
<script>
  import {
    Dialog
  } from 'vant';
  export default {
    data() {
      return {
        img1: true,
        img2: false,
        value1: 0,
        value2: 'a',
        option1: [
        { text: '选择收款方式', value: 0 },
        { text: '支付宝', value: 1 },
        { text: '微信', value: 2 }
      ],
      option2: [
        { text: '机器来源', value: 'a' },
        { text: '活动所得', value: 'b' },
        { text: '他人赠送', value: 'c' },
      ]
      }
    },
    components: {
      [Dialog.Component.name]: Dialog.Component
    },
    methods: {
      onClickLeft(str) {
        Dialog.confirm({
          title: ' ',
          message: '确定要离开吗，将不会保存此内容'
        }).then(() => {
          this.$router.push({
            path: str
          })
        }).catch(() => {});
      },
    },
  }
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
  }

  /* footer */
  .liLink a {
    color: #bbb4a0;
    font-size: 12px;
  }
</style>