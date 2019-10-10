<template>
  <div>
    <van-sticky>
        <van-nav-bar :title="versionName" left-arrow  @click-left="onClickLeft('/')"/>
        <h5 class="progress" >当前进度</h5>
        <van-progress :percentage="10" color="#00b08e" />
    </van-sticky>
    <recycle-process 
    v-for="(item,index) in rdata" 
    :key="index"
    :data="item"
    :index="index"></recycle-process>
  </div>
</template>
<script>
  import Process from '@/components/Process'
  export default {
    data() {
      return {
        versionName: 'PRS回收',
        rdata:{}
      }
    },
    components:{
      'recycle-process':Process
    },
    created() {
      this.$axios.get('http://localhost:3005/data').then((res) => {
        console.log(res.data[2].product_info[0])
        this.rdata=res.data[2].product_info[0]
      })
      if(this.$route.query.item.versionName){
        this.versionName = this.$route.query.item.versionName
      }
    },
    methods: {
      onClickLeft(str){
        this.$router.push({
          path:str
        })
      }
    },
  }
</script>
<style>
  .progress{
    background-color: #00b08e;
    margin: 0;
    padding: 5px 0;
    color: white;
  }
  .van-progress{
    margin-top: 10px;
    background-color: #00b08e;
    background-color: #fff !important;
  }
  .van-nav-bar {
    background-color: #00b08e !important;

  } 
  .van-nav-bar__title{
    color: white !important;
  }
  .van-nav-bar .van-icon{
    color: white !important;
  }
  .van-hairline--bottom::after{
    border-bottom-width: 0 !important;
  }
</style>