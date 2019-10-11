<template>
    <div>

        <van-sticky>
            <search></search>
            <van-tabs @click="classify" color="#00b08e">
                <van-tab name="phone" title="手机"></van-tab>
                <van-tab name="pad" title="平板"></van-tab>
                <van-tab name="computer" title="笔记本"></van-tab>
            </van-tabs>
        </van-sticky>
        <van-sidebar v-model="activeKey">
            <van-sidebar-item title="全部" @click="change(0)">
            </van-sidebar-item>
            <van-sidebar-item v-for="(item,index) in catedata" :title="item.brandName" :key="index"
                @click="change(index+1)">
            </van-sidebar-item>
        </van-sidebar>
        <van-grid :border="false" :column-num="3">
            <van-grid-item v-for="(item,index) in cateitem" :key="index">
                <div @click="jump('/recycle',item)">
                    <img :src="'https://www.qupingce.com'+item.img" /></div>
                <p class='phoneName'>{{item.versionName}}</p>
            </van-grid-item>
            <h2 class="load-more" @click="loadMore">{{notice}}</h2>
        </van-grid>
        <van-popup v-model="isShow">
            <van-loading size="60px" color="white">
                <span style="color: white;font-size: 20px">加载中...</span>
            </van-loading>
        </van-popup>
        <bottom-nav></bottom-nav>
    </div>
</template>
<script>
    import Nav from '@/components/tx_nav.vue'
    import Search from '@/components/tx_search.vue'

    export default {
        data() {
            return {
                activeKey: 0,
                catedata: {}, //商品分类的数据
                cateitem: {}, //分类的项目
                num: 1, //页数
                isShow: false, //是否显示模态框
                brandId: '0', //商品的品牌Id
                notice: '点击加载更多', //提示文字
                ppc: 'phone'
            };
        },
        components: {
            'bottom-nav': Nav,
            'search': Search
        },
        created() {
            //创建时显示手机的分类
            this.$axios.get('/api/page/getAllBrandByType?type=phone').then((response) => {
                this.catedata = response.data.data;
            })
            //显示全部手机
            this.$axios.get(
                    `/api/page/ChooseTypeByBrandByPage?brandId=${this.brandId}&type=${this.ppc}&page=${this.num}&limit=15`
                )
                .then((
                    response) => {
                    // console.log(response)
                    this.cateitem = response.data.data;
                })
            // setTimeout(()=>{
            //     this.isShow=false
            // },1000)
        },
        mounted() {
            let sidebar = document.getElementsByClassName('van-sidebar')[0];
            let grid = document.getElementsByClassName('van-grid')[0]
            // console.log(window.screen.height)
            grid.style.height = sidebar.style.height = window.screen.height * 0.75 + "px"
        },
        methods: {
            jump(str, x) {
                this.isShow = true
                setTimeout(() => {
                    this.isShow=false
                    this.$router.push({
                        path: str, //router中的path属性就指当前要跳转的路径
                    })
                    this.$store.commit('phone', x.versionName)
                }, 500);
            },
            classify(name, title) {
                // 修改商品的分类(手机，平板等))
                this.isShow = true
                this.ppc = name
                this.$axios.get(`/api/page/getAllBrandByType?type=${name}`).then((response) => {
                    this.catedata = response.data.data;
                    this.$axios.get(
                            `/api/page/ChooseTypeByBrandByPage?brandId=${this.brandId}&type=${this.ppc}&page=${this.num}&limit=15`
                        )
                        .then((
                            response) => {
                            // console.log(response)
                            this.cateitem = response.data.data;
                            this.isShow = false
                        })
                })
            },
            change(x) {
                // 修改商品品牌
                this.isShow = true
                this.num = 1;
                if (x != 0) {
                    this.brandId = this.catedata[x - 1].brandId
                } else {
                    this.brandId = '0'
                }
            },
            loadMore() {
                //加载更多商品
                this.isShow = true
                this.num++;
                this.$axios.get(
                    `/api/page/ChooseTypeByBrandByPage?brandId=${this.brandId}&type=${this.ppc}&page=${this.num}&limit=15`
                ).then((response) => {
                    if (response.data.data.length == 0) {
                        this.notice = "没有更多啦！"
                        this.isShow = false
                    } else {
                        this.cateitem = this.cateitem.concat(response.data.data)
                        this.isShow = false
                    }
                })
            }
        },
        watch: {
            brandId() {
                //当分类改变时，将页数重置为1
                this.num = 1
                this.notice = "点击加载更多"
                this.$axios.get(
                        `/api/page/ChooseTypeByBrandByPage?brandId=${this.brandId}&type=${this.ppc}&page=${this.num}&limit=15`
                    )
                    .then((response) => {
                        this.cateitem = response.data.data;
                        this.isShow = false
                    })
            }
        },
    }
</script>
<style>
    body {
        height: 100%;
    }

    .van-sidebar {
        overflow: auto;
        width: 80px !important;
        float: left;
        height: 75%;
    }

    .van-grid {
        overflow: auto;
        align-content: flex-start;
    }

    .van-sidebar-item {
        line-height: 18px !important;
    }

    .van-grid-item__content--center img {
        width: 65px;
        height: 60px;
    }

    .load-more {
        font-size: 18px;
        width: 100%;
        text-align: center;
    }

    .van-tabs {
        margin-top: 59px;
        margin-bottom: 1px;
    }

    .phoneName {
        height: 20px;
        font-size: 14px;
        line-height: 1.2;
    }

    .van-popup {
        background-color: transparent !important;
        overflow-y: inherit !important;
    }

    .van-grid-item {
        height: 150px !important;
    }

    .van-sidebar-item--select {
        border-color: #00b08e !important;
    }
</style>