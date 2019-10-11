<template>
    <div v-show="isShow">
        <p class="title">
            <span>{{names[index]}}</span>
        </p>
        <div class="items">
            <van-button type="default" class="item" v-for="(item,index) in data" :key="index" ref="choose"
                @click="choose(index)" :class="num==index?'on':''">{{item.name}}</van-button>
        </div>
        <span v-show="false">{{disnon}}</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                num: -1,
                isShow:false,
                names:['子型号','内存','颜色','购买渠道','是否有以下特殊情况','机身外观','屏幕外观','屏幕显示','维修情况','是否带原装配件','其他特殊情况(可多选或不选)']
            }
        },
        props: {
            data: Array,
            index: String
        },
        computed:{
            disnon(){
                return this.$store.state.num
            }
        },
        created() {
            // console.log(this.data)
            // console.log(this.index)
            if(this.index=='0'){
                this.isShow=true
            }
        },
        updated() {
            if(this.$store.state.num>=parseInt(this.index)){
                this.isShow=true
            }
        },
        methods: {
            choose(x) {
                this.num = x;
                this.$store.commit('alter',this.index)

            }
        },
    }
</script>
<style lang="scss">
    .title {
        border-left: 20px solid #00b08e;
        padding-left: 10px;
        text-align: left;
        font-size: 15px;
    }

    .title span:nth-last-of-type(1) {
        font-size: 12px;
        color: #00b08e;
        margin-left: 10px;
    }

    .van-icon-question-o {
        float: right;
        color: #00b08e;
        margin-right: 10px;
    }

    .items {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .item {
        border: 1px solid #007a62 !important;
        width: 40%;
        height: 40px;
        margin: 5% !important;
        text-align: center;
    }

    .on {
        line-height: 40px;
        font-size: 14px;
        background-color: #00b08e !important;
    }
    .on .van-button__text{
        color: white !important;
    }

    .van-button {
        line-height: unset !important;
    }

    .van-button__text {
        
        font-size: 12px;
    }
</style>