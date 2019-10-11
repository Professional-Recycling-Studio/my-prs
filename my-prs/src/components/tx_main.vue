<template>
  <div class="main">
    <van-swipe :autoplay="3000" indicator-color="white" class>
      <van-swipe-item v-for="(item,index) in lunbo" :key="index">
        <img :src="'https://www.qupingce.com/'+item.img" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 回收品类头 -->
    <div class="sort">
      <h2>回收品类</h2>
      <router-link to="/cate">更多类别&nbsp;>&emsp;</router-link>
    </div>

    <!-- 回收品类 -->
    <div class="type-box">
      <!-- 左 -->
      <div class="type-phone">
        <div class="main-index-phone">
          <img src="https://www.qupingce.com/static/images/index-three/phone.png" />
          <p>手机</p>
        </div>
        <div id="data_list1" class="index-brand-box">
          <router-link to="/" v-for="(item,index) in brandName.slice(0,4)" :key="index">
            <img :src="'https://www.qupingce.com'+item.img" />
          </router-link>
        </div>
      </div>
      <!-- 右 -->
      <div class="other-type-box">
        <div class="type-pad">
          <img src="https://www.qupingce.com/static/images/index-three/ipad.png" />
          <p>平板</p>
        </div>
        <div class="type-laptop">
          <img src="https://www.qupingce.com/static/images/index-three/laptop.png" />
          <p>笔记本电脑</p>
        </div>
      </div>
    </div>

    <!-- 热门机型 -->
    <div class="tab_proList">
      <h2 class="band_text_left">热门机型</h2>
      <div class="hot-box">
        <div class="single-hot" v-for="(item,index) in phone" :key="index">
          <router-link to="/" class="goodsPic hotName">
            <img :src="'https://www.qupingce.com/'+item.mobileImg" alt />
          </router-link>
          <div class="goodsInfor">
            <div>
              <h2 class="hot-name">
                <router-link to="/">{{item.versionName}}</router-link>
              </h2>
              <p>
                <del class="price">
                  最高回收价:
                  <i class="fa fa-yen"></i>&nbsp;
                  <em>{{item.maxMoney}}</em>
                </del>
              </p>
            </div>
            <router-link to="/" tag="p" class="count_btn recycle_btn1">
              <strong>立即回收</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 回收流程 -->
    <div class="categoryLiIcon recycle_process">
      <div class="sort">
        <h2>回收流程</h2>
        <router-link to="/faq">常见问题&emsp;</router-link>
      </div>
      <ul>
        <li>
          <a>
            <img src="../assets/image/search.png" />
            <em class="process_text">选择机型</em>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/image/price.png" />
            <em class="process_text">估价</em>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/image/order.png" />
            <em class="process_text">下单</em>
          </a>
        </li>
        <li>
          <a>
            <img src="../assets/image/pay.png" />
            <em class="process_text">货到打款</em>
          </a>
        </li>
      </ul>
    </div>
    <!-- 微博用户晒单 -->
    <div class="tab_proList show_order_main">
      <div class="sort">
        <h2>微博用户晒单</h2>
        <router-link to="/microblog">浏览更多&emsp;</router-link>
      </div>
      <ul>
        <microblog
          class="show-order-single-box"
          v-for="(item,index) in microblogs"
          :key="index"
          :item="item"
        ></microblog>
      </ul>
    </div>
    <!-- 信息 -->
    <div class="footer_info">
      <ul>
        <li>
          <img src="../assets/image/que.png" alt />
          回收指南&nbsp;
        </li>
        <li>
          <img src="../assets/image/footer_icon3.png" alt />
          常见问题
        </li>
      </ul>
    </div>
    <ul class="web_info">
      <li>Copyright © 2015 - 2019 深圳市趣评测科技有限公司</li>
      <li>粤ICP备15063908号-1</li>
    </ul>
  </div>
</template>

<script>
  import microblog from "@/components/microblog.vue";
  export default {
    data() {
      return {
        lunbo: [],
        brandName: [],
        phone: [],
        microblogs: []
      };
    },
    components: {
      microblog
    },
    created() {
      this.$axios.get("/api/page/getSlideTheNews").then(res => {
        this.lunbo = res.data.data;
        // console.log(this.lunbo[0].img);
      });
      this.$axios.get("/api/page/getIndexRecommendBrand").then(res => {
        this.brandName = res.data.data;
        console.log(this.brandName);
      });
      this.$axios.get("/api/page/hotMobile").then(res => {
        this.phone = res.data.data;
        console.log(this.phone);
      });
      this.$axios.get("/api/getThreeShowPhotos").then(res => {
        this.microblogs = res.data.data;
        console.log(this.microblogs[0].publish_time.split(" ")[0]);
      });
    }
  };
</script>

<style>
  body {
    background-color: #fbfbfb;
  }
  .van-swipe {
    margin-top: 61px;
  }
  .van-swipe-item img {
    text-align: center;
    height: 150px;
    border-radius: 5px;
  }
  .sort {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sort > h2,
  .band_text_left {
    border: none;
    width: 65%;
    font-size: 18px;
    padding: 10px 0 7px 14px;
    font-weight: bold;
    text-align: left;
    margin: 0;
  }
  .sort > a {
    float: right;
    font-size: 12px;
    color: #ffbe98;
    /* margin-top: .32rem; */
  }
  .type-box {
    display: flex;
    width: 96%;
    margin: 12px auto;
    justify-content: space-around;
    color: #271d1d;
  }
  .type-phone {
    /* height: 2.55rem; */
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    border-radius: 0.2rem;
    width: 60%;
  }
  .main-index-phone {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
  }
  .index-brand-box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    opacity: 0.999;
  }
  .index-brand-box img {
    width: 45px;
    height: 45px;
  }
  .main-index-phone img {
    margin-left: 15px;
    width: 60px;
    height: 60px;
  }
  .type-pad img {
    width: 45px;
    height: 45px;
    margin-left: 5px;
  }
  .type-laptop img {
    width: 45px;
    height: 45px;
    margin-left: 5px;
    /* opacity: .999; */
  }
  .type-pad {
    height: 60px;
    background-image: linear-gradient(300deg, #ffefef, #fffcf8, #fffdfa, #fff);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    /* box-shadow: 0 0 0.1rem #ededed; */
  }
  .type-laptop {
    height: 60px;
    background-image: linear-gradient(300deg, #f2efff, #fffcf8, #fffdfa, #fff);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    margin-top: 7px;
  }
  .single-hot {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 38%;
    background-image: linear-gradient(
      300deg,
      #ffeff7,
      #fffcf8,
      #fffdfa,
      #fff
    ) !important;
    margin: 5px 20px;
  }
  .goodsPic {
    width: 75px;
    display: block;
    text-align: center;
    overflow: hidden;
    border-radius: 2px;
  }
  .goodsPic img {
    width: auto;
    max-width: 100%;
    height: 60px;
    border: 1px solid #fff;
    border-radius: 5px;
  }
  .hot-box {
    display: flex;
  }
  .goodsInfor h2 {
    margin: 5px 0 7px 0;
  }
  .goodsInfor h2 a {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
  }
  .goodsInfor p del {
    color: #cacaca;
    font-size: 12px;
    font-weight: lighter;
  }
  .goodsInfor p {
    margin: 0;
  }
  .price em {
    color: #fc7800;
    font-style: normal;
    font-weight: bolder !important;
    font-size: 13px;
  }
  .recycle_btn1 {
    /* float: right!important; */
    margin-top: 7% !important;
    border-radius: 8px;
    color: #fff4d1 !important;
    text-shadow: 0 5px 20px #ffb5a3 !important;
    font-weight: 900 !important;
    box-shadow: 0 5px 20px #ffbbab !important;
    background-image: linear-gradient(336deg, #ff5d32, #ffc497) !important;
    font-size: 12px !important;
    width: 100px;
  }
  .tab_proList {
    padding-bottom: 15px;
    background: white;
    margin-bottom: 8px;
  }
  .categoryLiIcon {
    background: white;
    margin-bottom: 8px;
    padding-bottom: 25px;
  }
  .categoryLiIcon > ul {
    display: flex;
    justify-content: space-around;
    margin-top: 13px;
  }
  .categoryLiIcon > ul > li a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .categoryLiIcon > ul > li img {
    width: 30px;
    height: 30px;
  }
  .categoryLiIcon li a em {
    display: block;
    font-style: normal;
    color: #0e0e0e;
    font-weight: bold;
    font-size: 10px;
  }
  .show_order_main > ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  /* 信息 */
  .footer_info ul {
    width: 300px;
    margin: 0 auto;
    height: 50px;
    text-align: center;
  }
  .footer_info > ul > li {
    float: left;
    width: 50%;
    font-size: 10px;
    margin: 0;
    margin-top: 13px;
    text-align: center;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer_info > ul > li > img {
    margin-right: 5px;
  }
  .web_info {
    text-align: center;
    padding: 0.1rem;
    margin: 0;
    list-style-type: none;
    margin-bottom: 51px;
  }
  .web_info li {
    font-size: 10px;
    padding: 0;
    margin: 0;
    color: #adadad;
  }
</style>