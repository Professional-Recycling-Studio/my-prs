<template>
    <div>
        <!-- 头部 -->
        <header>
            <a @click="res('/')" class="backIcon">
                <van-icon name="wap-home-o" />
            </a>
            <h1>{{username}}</h1>
            <a @click="res('/enroll')" class="setIcon" style=" 
              color: #fff;
              font-weight: bold;">注销</a>
        </header>
        <!-- logo -->
        <div class="formLogo">
            <img src="../assets/image/logo.png" width="100" alt />
            <h2 style="color: white;">PRS专业回收机构，给您前所未有的回收体验</h2>
        </div>
        <!-- 验证方式 -->
        <van-popup v-model="isShow">
            <van-loading size="60px" color="white">
                <span style="color: white;font-size: 20px">加载中...</span>
            </van-loading>
        </van-popup>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        Toast
    } from 'vant';

    Vue.use(Toast);
    export default {
        data() {
            return {
                isShow:false
            };
        },
        methods: {
            res(x) {
                this.isShow = true
                setTimeout(() => {
                    this.isShow = false
                    this.$router.push({
                        path: x
                    })
                }, 1000);
            },
        },
        computed: {
            username() {
                return this.$store.state.username
            }
        }
    };
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
        color: white;
    }

    /* footer */
    .liLink a {
        color: #bbb4a0;
        font-size: 12px;
    }
</style>