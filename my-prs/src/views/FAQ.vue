<template>
  <div>
    <!-- 头 -->
    <header>
      <router-link to="/" class="backIcon">
        <van-icon name="arrow-left" />
      </router-link>
      <h1>常见问题</h1>
    </header>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="1. 邮寄机器的快递费用如何计算？" name="12">
        <a
          href="#"
        >一般情况下快递费用均由趣评测承担(不承担保价费用)，用户只需要寄送到付的快递(手机类产品运费趣评测承担上限为20元，笔记本上限为40元，超出上限部分将会在打款时扣除相应金额)。但由于机器是山寨机，高仿机或处于丢失模式，快递未签收，产生的退回快递费由用户承担，趣评测会以到付形式寄回机器，其余情况的退回费用仍由趣评测承担。</a>
      </van-collapse-item>
      <van-collapse-item title="2. 什么时候可以收到钱？" name="2">
        <a href="#">您可以在个人中心查看订单状态，订单通过审核之后，趣评测工作人员会通过电话或者短信与您联系打款。</a>
      </van-collapse-item>
      <van-collapse-item title="3. 发货地址怎么填写？" name="3">
        <a href="#">在您下单成功之后，趣评测会发送一条带有地址的短信给您，另外在发货界面也有相应的地址信息。</a>
      </van-collapse-item>
      <van-collapse-item title="4. 下单之后，去哪里填写发货信息？" name="4">
        <a href="#">您可以在【首页】-【右上角头像】点击登录之后，在个人中心查看订单信息，点击订单中的“去发货”按钮填写快递信息；也可以点击导航栏右侧的【我的】按钮进行上述操作。</a>
      </van-collapse-item>
      <van-collapse-item title="5. 下单之后填写发货信息有时间限制吗？" name="5">
        <a href="#">建议您下单之后尽快发货，系统估价有效期为下单起72小时之内，如有效期过后用户仍未预约发货或填写物流信息，则该订单失效，无法发货，需要重新估价下单。</a>
      </van-collapse-item>
      <van-collapse-item title="6. 可以一个快递寄送多个机器吗？" name="6">
        <a href="#">可以一个快递寄送多个机器。如果您想要一次回收多个机器，只需要给每个订单填写相同的快递单号信息和收款信息即可。</a>
      </van-collapse-item>
      <van-collapse-item title="7. 现场回收如何进行？" name="7">
        <a href="#">用户可以自己把机器送至深圳市福田区深南中路电子科技大厦A座601-3进行现场回收，注意需带上本人身份证。</a>
      </van-collapse-item>
      <van-collapse-item title="8. 什么情况手机会被退回？" name="8">
        <a href="#">
          如果您的手机有如下情况，趣评测会进行退回处理：
          1.山寨机、高仿机，这种情况趣评测不承担运费。
          2.在客服与您沟通后未达成成交需退回时，这种情况趣评测承担退货运费。
          3.客户无理由要求退回，这种情况趣评测不承担运费。
          4.手机锁和ID锁未解锁手机，这种情况趣评测不承担运费。
        </a>
      </van-collapse-item>
      <van-collapse-item title="9. 机器质检结果与提交信息不符合怎么办？" name="9">
        <a
          href="#"
        >如果趣评测质检人员认定机器情况不符合订单描述，将会通过电话或短信的形式与您取得联系，进行沟通。若沟通报价双方满意则订单产生二次报价，若沟通无果则会将机器原路退回，这种情况下退回运费由趣评测承担。</a>
      </van-collapse-item>
      <van-collapse-item title="10. 我的机器包含耳机充电器等配件，如何估价？" name="10">
        <a
          href="#"
        >由于配件组合情况比较多，当前趣评测回收估价为裸机报价，如果您的机器有配件，可以在发货页面填写备注说明，工作人员在收到机器后会适当加价，如有任何疑问，欢迎您随时联系客服。</a>
      </van-collapse-item>
      <van-collapse-item title="11. 用户须知：关于回收手机原有贴膜的处理？" name="11">
        <a href="#">寄过来的机器会撕掉贴膜检查屏幕，贴膜不做保留。</a>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: "1"
      };
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
  .van-collapse{
    margin-top: 51px;
    padding: 10px 12px;
  }
  .van-collapse-item__content>a{
    display: block;
    padding-left: 26px;
    color: #666666;
    text-align: justify;
  }

</style>