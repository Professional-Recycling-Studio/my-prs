<template>
  <div>
    <!-- 头 -->
    <header>
      <router-link to="/" class="backIcon">
        <van-icon name="arrow-left" />
      </router-link>
      <h1>全部用户晒单</h1>
    </header>
    <!-- 列（内容） -->
    <ul class="microblog_ul">
      <microblog v-for="(item,index) in MoreMicroblog" :key="index" :item="item"></microblog>
    </ul>
    <!-- 加载更多 -->
    <h2 @click="fn">点击加载更多~</h2>
  </div>
</template>

<script>
  import microblog from "@/components/microblog.vue";
  export default {
    data() {
      return {
        MoreMicroblog: [],
        page: 1,
        limit: 8
      };
    },
    components: {
      microblog
    },
    created() {
      this.$axios
        .post(
          "/api/getShowPhotosByPage?page=" + this.page + "&limit=8"
        )
        .then(res => {
          console.log(res);
          this.MoreMicroblog =res.data.data;
          // console.log(this.MoreMicroblog);
        });
    },
    methods: {
      fn() {
        this.page++;
        this.limit=this.page*8;
        this.$axios
          .post(
            "/api/getShowPhotosByPage?page=" + this.page + "&limit=8"
          )
          .then(res => {
            this.MoreMicroblog = this.MoreMicroblog.concat(res.data.data) ;
            // console.log(this.MoreMicroblog);
          });
        // console.log(this.page, this.limit);
      }
    }
  };
</script>

<style scoped>
  header {
    height: 50px;
    line-height: 50px;
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

  /* 列 */
  .microblog_ul {
    margin-top: 50px;
    padding: 10px 0 30px 0;
    /* border-bottom: 1px solid #000; */
  }
  h2 {
    width: 90%;
    margin: 0 auto 20px;
    border-top: 1px solid #e8e8e8;
    padding-top: 13px;
    font-size: 15px;
    color: grey;
    text-align: center;
  }
</style>