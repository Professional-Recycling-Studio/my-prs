<template>
  <div>
    <!-- 头部 -->
    <header>
      <router-link to="/" class="backIcon">
        <van-icon name="arrow-left" />
      </router-link>
      <h1>搜索型号</h1>
    </header>
    <!-- 搜索框 -->
    <div class="searchArea">
      <input type="text" placeholder="在这里输入您想要回收的机型" v-model="key" />
      <van-icon name="search" class="btn" />
    </div>
    <!-- 搜索出下弹出框 -->
    <ul class="searchHistory">
      <li v-for="(item,index) in list" :key="index" @click="jump('/recycle',item)">
        {{item.version_name}}</li>
    </ul>
    <!-- 历史记录 -->
    <div class="searchHistory check">
      <h2>历史搜索</h2>
      <ul class="search-history-list">
        <li 
        v-for="(item,index) in history" 
        :key="index" 
        class="history_list"
        @click="jumps('/recycle',item)">{{item}}
        </li>
      </ul>
      <p class="clear-history" @click="clear">清空历史记录</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        key: "",
        list: [],
        btn: []
      };
    },
    watch: {
      key() {
        this.$axios.get("/api/search/serarchByKey?key=" + this.key).then(res => {
          this.list = res.data.data;
          console.log(this.list);
          // console.log(this.phone_name);
        });
      }
    },
    methods: {
      jump(str, x) {
        // console.log(x.version_name)
        this.$router.push({
          path: str, //router中的path属性就指当前要跳转的路径
        })
        this.$store.commit('phone', x.version_name)
        this.$store.commit('phoneHis', x.version_name)
        
      },
      clear(){
        this.$store.commit('clear')

      },
      jumps(str, x) {
        // console.log(x.version_name)
        this.$router.push({
          path: str, //router中的path属性就指当前要跳转的路径
        })
        this.$store.commit('phone', x)
        this.$store.commit('phoneHis', x)
        
      },
    },
    computed: {
      history() {
        return this.$store.state.history
      }
    }
  };
</script>

<style scoped>
  /* 头部 */
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

  .history_list {
    line-height: 20px;
    padding: 5px !important;
    margin: 5px !important;
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

  /* 搜索框 */
  .searchArea {
    width: auto;
    overflow: hidden;
    position: relative;
    margin-top: 76px;
  }

  .searchArea>input:nth-of-type(1) {
    width: 80%;
    display: block;
    padding: 13px 18px;
    outline: none;
    border: #ffdead;
    background-color: #ececec;
    margin: 0 auto;
    border-radius: 5px;
  }

  .btn {
    background: none;
    border: none;
    color: grey;
    position: absolute;
    right: 7%;
    top: 23%;
    outline: none;
    font-size: 22px;
  }

  .searchHistory {
    background: white;
    overflow: hidden;
    padding: 0 3%;
    margin: 0;
  }

  .searchHistory li {
    list-style: none;
    color: grey;
    /* height: .65rem; */
    line-height: 32px;
    border-bottom: 1px #f4f4f4 solid;
    margin: 0;
    padding: 0;
  }

  /* 搜索历史 */
  .searchHistory {
    padding: 14px 12px;
  }

  .searchHistory h2 {
    color: grey;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px #f4f4f4 solid;
    font-size: 16px;
  }

  .clear-history {
    background: #f8f8f8;
    color: #666;
    text-align: center;
    width: 100%;
    height: 37px;
    line-height: 37px;
    font-weight: lighter;
    font-size: 12px;
  }

  .search-history-list {
    display: flex;
    flex-wrap: wrap;
  }

  .search-history-list li {
    background: #f8f8f8;
    float: left;
    margin: 8px;
    color: grey;
    padding: 8px 10px;
    border-radius: 2px;
  }
</style>