<template>
  <li>
    <div class="goodsInfor show_order_content">
      <p>&copy;{{item.nick_name}}</p>
      <h2>
        <router-link to="/">{{item.evaluation_content}}</router-link>
      </h2>
      <div>
        <p class="show_order_time">
          <van-icon name="underway-o" />
          <strong>{{item.publish_time.split(" ")[0]}}</strong>
        </p>

        <p class="show_order_lookBlog">
          <a :href="item.evaluation_url">
            <strong>查看原博</strong>
            <van-icon name="arrow" />
          </a>
        </p>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      item: Object
    }
  };
</script>

<style>
  ul > li {
    overflow: hidden;
    border-bottom: 1px #f1f1f1 dotted;
    padding: 8px 1%;
    margin: 10px 5%;
    /* border-radius: .25rem; */
  }
  .show_order_content > div {
    display: flex;
    justify-content: space-between;
  }
  .show_order_content > p {
    text-align: left;
    color: #656565;
    font-size: 14px;
    font-weight: bold;
  }
  .show_order_content > h2 > a {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px !important;
    white-space: nowrap;
    color: #a9a9a9;
    font-weight: 500;
    padding: 0 15px;
  }
  .show_order_time {
    color: #c3c3c3 !important;
    font-size: 14px !important;
    font-weight: 100 !important;
    display: flex;
    align-items: center;
  }
  .show_order_lookBlog >a{
    color: #ff8842 !important;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
</style>