<template>
  <div>
    <van-sticky>
      <van-nav-bar :title="vn" left-arrow @click-left="onClickLeft('/cate')" />
      <h5 class="progress">当前进度</h5>
      <van-progress :percentage="pro" color="#00b08e" />
    </van-sticky>
    <recycle-process v-for="(item,index) in rdata" :key="index" :data="item" :index="index"></recycle-process>
    <van-button type="primary"

     @click="res"
     color="#00b08e" size="large" v-if="show">立即估价</van-button>
    <van-popup v-model="mshow">
      <van-loading size="60px" color="white">
          <span style="color: white;font-size: 20px">估价中...</span>
      </van-loading>
  </van-popup>
  </div>
</template>
<script>
  import Process from '@/components/Process'
  import {
    Dialog
  } from 'vant';
  export default {
    data() {
      return {
        rdata: {},
        isShow: false,
        mshow:false
      }
    },
    computed: {
      vn(){
        return this.$store.state.phoneName
      },
      pro() {
        return parseInt(this.$store.getters.pro.toFixed(0))
      },
      show() {
        return this.$store.state.isShow
      }
    },
    components: {
      'recycle-process': Process,
      [Dialog.Component.name]: Dialog.Component
    },
    created() {
      this.$axios.get('http://localhost:3005/data').then((res) => {
        // console.log(res.data[2].product_info[0])
        this.rdata = res.data[2].product_info[0]
      })
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
      res(){
        this.mshow=true;
        setTimeout(()=>{
          this.mshow=false
          this.$router.push({
            path:'/estimated'
          })
        },2000)
      }
    },
  }
</script>
<style>
  .progress {
    background-color: #00b08e;
    margin: 0;
    padding: 5px 0;
    color: white;
  }

  .van-progress__portion,
  .van-progress__pivot {
    transition: all 1s;
  }

  .van-progress {
    margin-top: 10px;
    background-color: #00b08e;
    background-color: #fff !important;
  }

  .van-nav-bar {
    background-color: #00b08e !important;

  }

  .van-nav-bar__title {
    color: white !important;
  }

  .van-nav-bar .van-icon {
    color: white !important;
  }

  .van-hairline--bottom::after {
    border-bottom-width: 0 !important;
  }
</style>