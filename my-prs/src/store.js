import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
      state: {
        num: 0,
        isShow: false,
        info: [],
        history: [],
        phoneName:'',
        username:'',
        data:
        {
            "data": [{
                "product_title": {
                    "type_name": "phone",
                    "price_area": "272|1224|2176|3128|3808|4352|4896|6800|9928",
                    "markup_money": 0,
                    "markup_id": "",
                    "type_id": "9d0114c4907f4c7bab424bb501e86e0c",
                    "ismarkup": 3,
                    "brand_name": "苹果",
                    "product_name": "iphone 11",
                    "brand_id": "85001ac13f7e4c56ab949328165e0ed6",
                    "max_price": 6000,
                    "min_price": 100,
                    "proporty": "2|9|16|23|28|32|36|50|73",
                    "recycle_lowest_money": "200"
                }
            }, {
                "product_conflictOption": []
            }, {
                "product_info": [
                    {
                    "0": [{
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 0,
                        "name": "A2223",
                        "second_price": 0,
                        "option_id": "86d8d29673ad4cdd8d2a1503d1cd7da4"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 500,
                        "name": "其他",
                        "second_price": 100,
                        "option_id": "74a84f296c8f4a7b9d1c264e10a9520e"
                    }],
                    "1": [{
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 0,
                        "name": "256G",
                        "second_price": 400,
                        "option_id": "0ad34c597eae47aabb0bec9b85d4fc0b"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 700,
                        "name": "128G",
                        "second_price": 1100,
                        "option_id": "6b5106488cee46a9a9fec511c2036b7a"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 1100,
                        "name": "64G",
                        "second_price": 1500,
                        "option_id": "e4b102e412854b3d95f35922377c6a53"
                    }],
                    "2": [{
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 0,
                        "name": "黑色",
                        "second_price": 0,
                        "option_id": "00eb44b6876a4b78b68c7a17000127f2"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 0,
                        "name": "红色",
                        "second_price": 0,
                        "option_id": "36a9142bce724d8bb4c2f83e26ccd806"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 0,
                        "name": "绿色",
                        "second_price": 0,
                        "option_id": "5616a9c000c64353af9e8b1545012ca8"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 0,
                        "name": "紫色",
                        "second_price": 0,
                        "option_id": "6b32c8e4fa6348259e33ec09457285f6"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 0,
                        "name": "黄色",
                        "second_price": 0,
                        "option_id": "930e0414dfd04f3c91bfc4d732d35bc6"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 0,
                        "name": "白色",
                        "second_price": 0,
                        "option_id": "d9988fc5025e4cc9bc5fc0dfbaf65ddf"
                    }],
                    "3": [{
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 0,
                        "name": "大陆国行",
                        "second_price": 0,
                        "option_id": "964035ac13904a83b51f5c033c8d2d55"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 500,
                        "name": "香港/澳门行货",
                        "second_price": 200,
                        "option_id": "86093fc6386a42c6b9336bcf06b4af33"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 500,
                        "name": "展示机",
                        "second_price": 400,
                        "option_id": "d5f889800fe84093b002bd8eb52e0f53"
                    }],
                    "4": [{
                        "hasDetail": true,
                        "isSpecial": "true",
                        "price": 0,
                        "name": "全新机，未拆封未激活",
                        "second_price": 0,
                        "option_id": "f284804f19d74a0dbbbbe2005b4fde85"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "true",
                        "price": 5500,
                        "name": "无法开机/进入桌面",
                        "second_price": 0,
                        "option_id": "36844a175c1c4cf3b16ab139dbd68b1e"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 0.1,
                        "name": "都不是，下一步"
                    }],
                    "5": [{
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 1,
                        "name": "外观完美，无任何使用痕迹",
                        "second_price": 0,
                        "option_id": "7fefa8c462754beabbd52ce86bf732f2"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 130,
                        "name": "外壳有轻微使用痕迹",
                        "second_price": 0,
                        "option_id": "0120c541ed984c2b87f7d14fe3cf17a6"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 250,
                        "name": "外壳有轻微掉漆、划痕、磕碰",
                        "second_price": 0,
                        "option_id": "1e059625733445deb898d2e9f6becec3"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 400,
                        "name": "外观严重划痕、磨损、磕碰",
                        "second_price": 0,
                        "option_id": "9041984df2c9475994c20204bd90aa1c"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 900,
                        "name": "外壳有裂痕/缺失/变形/刻字",
                        "second_price": 0,
                        "option_id": "6c17ffa64d23471e9950bf07e9acd6ab"
                    }],
                    "6": [{
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 1,
                        "name": "屏幕完美，无任何划痕",
                        "second_price": 0,
                        "option_id": "f944ccc855f64342b6067239440ad18f"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 200,
                        "name": "屏幕有轻微划痕",
                        "second_price": 0,
                        "option_id": "c8cfe8aa18dd46ca81929af583757d93"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 400,
                        "name": "明显划痕/磕痕",
                        "second_price": 0,
                        "option_id": "27c25f8ac74741c19af156e2dcd29fa8"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 1300,
                        "name": "屏幕有缺角/碎裂",
                        "second_price": 0,
                        "option_id": "642558216bce406999599b82e2cc8928"
                    }],
                    "7": [{
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 1,
                        "name": "显示完美，无任何异常",
                        "second_price": 0,
                        "option_id": "2692a67808db44468b194a0592f2cb24"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 800,
                        "name": "不影响使用，但有色差/亮坏点/色斑",
                        "second_price": 0,
                        "option_id": "f762b0a50b9a4871b6ebc132fcdcb604"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 1800,
                        "name": "显示异常，有漏液/错乱/横竖线/花屏",
                        "second_price": 0,
                        "option_id": "44370bea01de45ef898a7ee23ed08532"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 2000,
                        "name": "屏幕无法显示",
                        "second_price": 0,
                        "option_id": "6e247e0f95aa4e528334a53bec568251"
                    }],
                    "8": [{
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 1,
                        "name": "无维修情况",
                        "second_price": 0,
                        "option_id": "bec293614aad4662b833bf0db4615649"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 500,
                        "name": "官方更换过除电池外的主板或配件",
                        "second_price": 0,
                        "option_id": "2d4acd0d9b904b0ba858ec21e6ee1d99"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 1000,
                        "name": "第三方更换过除主板、电池外的配件",
                        "second_price": 0,
                        "option_id": "4d1dd8655226412eaa233bc1de7e25f7"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 2300,
                        "name": "主板有维修",
                        "second_price": 0,
                        "option_id": "b3ca2e7b77b548dd8d9d7771ce9dd336"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 2800,
                        "name": "屏幕主板均有维修",
                        "second_price": 0,
                        "option_id": "b8af367c912a40398a6fcc7974bbdd28"
                    }],
                    "9": [{
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 1,
                        "name": "带原装充电头+线+耳机",
                        "second_price": 0,
                        "option_id": "66cd4390651443debbe7e7509e9f37df"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 60,
                        "name": "带原装充电头+线",
                        "second_price": 0,
                        "option_id": "593cdb2716a34f1ba5835b1fac70d370"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 100,
                        "name": "带原装数据线",
                        "second_price": 0,
                        "option_id": "81e0a10c465b48c0a881c85828b72c19"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 100,
                        "name": "带原装充电头",
                        "second_price": 0,
                        "option_id": "9aca5082dd38436492418a1ab111c0b7"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 120,
                        "name": "带原装耳机",
                        "second_price": 0,
                        "option_id": "4c9e269691414958940b09f9340bbd22"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 160,
                        "name": "带原装耳机转接头",
                        "second_price": 0,
                        "option_id": "5cb0cf07e8924da6a7269ec08328a356"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 200,
                        "name": "单机不带任何配件",
                        "second_price": 0,
                        "option_id": "2416eb6215934a83ac659001278c0b47"
                    }],
                    "10": [{
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 100,
                        "name": "电池异常/换过电池/按键反馈差",
                        "second_price": 0,
                        "option_id": "75b2b03b9d9c40d4b4ab3cc22d03160d"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 800,
                        "name": "拍摄模糊/抖动/有斑",
                        "second_price": 0,
                        "option_id": "22d51376be0740a29f2fbc83a63f7205"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 800,
                        "name": "充电无反应/充电孔接触不良",
                        "second_price": 0,
                        "option_id": "9e14aa62273840019a8b7644f922e0e6"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 2100,
                        "name": "触摸失灵/延迟",
                        "second_price": 0,
                        "option_id": "7560462df51940dc8acb94b4fc4ce234"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 2100,
                        "name": "机身弯曲",
                        "second_price": 0,
                        "option_id": "45cc601616ac41eea8dba2ac359177f3"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 2100,
                        "name": "WIFI/蓝牙/距离，光线等感应器不正常",
                        "second_price": 0,
                        "option_id": "1d6d287965a74146b6df9eea15595422"
                    }, {
                        "hasDetail": false,
                        "isSpecial": "false",
                        "price": 2100,
                        "name": "通话功能不正常、不读卡、信号不正常",
                        "second_price": 0,
                        "option_id": "fc5760908ab044c1847e90978e718295"
                    }, {
                        "hasDetail": true,
                        "isSpecial": "false",
                        "price": 3500,
                        "name": "机身进水或受潮",
                        "second_price": 0,
                        "option_id": "c37ce5f9c2164887a6daf86f9d3deb0e"
                    }]
                }]
            }]
        }
      },
      mutations: {
        cart(state, name) {
          var bool = false;
          state.history.forEach((d) => {
            if (d != name) {
              bool = true
            }
          })
          if (bool) {
            state.history.push(name)
          }
        },
        alter(state, x) {
          state.num = parseInt(x) + 1
        },
        chr(state, x) {
          state.isShow = x
        },
        add(state, x) {
          if (state.info.length == 0) {
            state.info.push(x)
          } else {
            for (var i = 0; i < state.info.length; i++) {
              if (x[0] == state.info[i][0]) {
                state.info[i][1]=x[1]
                return
              }
            }
            state.info.push(x)
          }
          for (var i = 0; i < state.info.length; i++){
            if(state.info[i][0]=='是否有以下特殊情况'&&state.info[i][1]=='都不是，下一步'){
              state.info.splice(i,1)
            }
          }
        },
        changename(state,x){
          state.username=x
        },
        phone(state,x){
          state.phoneName=x
        },
        clear(state){
          state.history=[]
        },
        phoneHis(state,x){
          if(state.history.length==0){
            state.history.push(x)
          }
          state.history.forEach((val)=>{
            if(x==val){
              return
            }
            state.history.push(x)
          })
        }
        },
        getters: {
          pro(state) {
            return (state.num + 1) / 11 * 100 - 9
          }
        },
      })