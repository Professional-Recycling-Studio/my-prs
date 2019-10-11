<template>
    <div>
        <van-nav-bar title="iphone11" left-arrow @click-left="onClickLeft('/cate')" />


        <ul>
            <li class="list-item">
                <h3 class="text-left">评估报价:￥{{price}}</h3>
            </li>
            <li class="list-item" v-for="(item,index) in info" :key="index">{{item[0]}}:{{item[1]}}</li>
        </ul>
        <van-button class="mbtn" type="primary" color="#00b08e" size="large" @click="res">立即回收</van-button>
        <van-popup v-model="mshow">
            <van-loading size="60px" color="white">
                <span style="color: white;font-size: 20px">加载中...</span>
            </van-loading>
        </van-popup>
    </div>

</template>
<script>
    import Vue from 'vue'
    import {
        Dialog
    } from 'vant';
    export default {
        data() {
            return {
                isShow: false,
                mshow:false
            }
        },
        components: {
            [Dialog.Component.name]: Dialog.Component
        },
        created() {
            // console.log(this.$store.state.info)
            // Vue.set(this.info,0, this.$store.state.info)
            // this.info.splice(0,0,this.$store.state.info)
            // console.log(this.info[0])
        },
        computed: {
            info() {
                return this.$store.state.info
            },
            price() {
                if (this.$store.state.info.length < 7) {
                    return 200
                } else {
                    return parseInt(Math.random() * (6000 - 4000 + 1) + 4000)
                }
            }
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
            res() {
                this.mshow = true;
                setTimeout(() => {
                    this.mshow = false
                    this.$router.push({
                        path: '/order'
                    })
                }, 2000)
            }
        },
    }
</script>
<style>
    .text-left {
        text-align: center;
    }

    .list-item {
        width: 80%;
        display: block;
        line-height: 25px;
        border: 1px solid #00b08e;
        margin: 0 auto;
    }

    ul {
        margin: 20px 0 !important;
    }

    .mbtn {
        margin: 20px 0 !important;
    }
</style>