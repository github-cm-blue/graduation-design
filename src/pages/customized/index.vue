<template>
    <view class="customized-container">
        <!-- 店铺信息 -->
        <view class="header-box">
            <view class="bg">
                <image src="https://img2.baidu.com/it/u=2356190732,2208415082&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=220"
                    mode="top" />
            </view>
            <view class="card-box" :style="{ top: `${paddingTop}px` }">
                <view class="card">
                    <view class="left">
                        <image
                            src="https://img1.baidu.com/it/u=4199374977,20795570&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=526" />
                        <view class="info">
                            <view class="title">定制辅导</view>
                            <view class="desc">定制您的专属毕设</view>
                        </view>
                    </view>
                    <view class="right">
                        <text>联系客服</text>
                    </view>
                </view>
                <view class="notice">
                    公告：定制设计不支持退款服务哦
                </view>
                <view class="preferential">
                    <text class="tag">350减20</text>
                    <text class="tag">400减35</text>
                    <text class="tag">500减50</text>
                    <text class="tag">800减80</text>
                </view>
            </view>
        </view>
        <!-- 分段器 -->
        <view class="menu-control">
            <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
                activeColor="#800c0b"></uni-segmented-control>
            <view class="search">
                <uni-icons type="search" size="15"></uni-icons>
                <text class="text">搜索</text>
            </view>
        </view>
        <!-- 侧边栏 -->
        <view class="slider">
            <view class="hd">
                <view class="menu-item" v-for="item in 15" :key="item">
                    主控芯片
                </view>
            </view>
            <view class="bd">
                <view class="bd-title">主控芯片</view>
                <view class="product-item" v-for="item in 8" :key="item">
                    <view class="img">
                        <image
                            src="https://img1.baidu.com/it/u=4135041143,3422815973&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500"
                            mode="scaleToFill" />
                    </view>
                    <view class="pro-info">
                        <view class="pro-title">STM3218B20</view>
                        <view class="tags">
                            <text class="tag">限购1份</text>
                            <text class="tag single">单点不做</text>
                        </view>
                        <view class="other">
                            <view class="price">￥58</view>
                            <view class="btn">
                                <view class="sub">-</view>
                                <view class="count">5</view>
                                <view class="add" @click="addCart">+</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <!-- 购物车 -->
        <view class="cart">
            <view class="icon" @click="addCart">
                <uni-icons custom-prefix="custom-icon" color="#fff" type="iconfont icon-gouwuche" size="30"></uni-icons>
            </view>
            <view class="sum">
                <view class="total">￥599.50</view>
                <view class="commission">辅导费￥200</view>
            </view>
            <view class="pay">
                <view>提交订单</view>
            </view>
        </view>

        <!-- tabbar -->
        <GdTabbar :selected="1" />
    </view>
</template>
    
<script setup lang='ts'>
import GdTabbar from '@/components/gd-tabbar/index.vue'

//分段器
const current = ref(0)
const items = ref(['选型'])
const onClickItem = (e: any) => {
    if (current.value != e.currentIndex) {
        current.value = e.currentIndex;
    }
}



//添加购物车
const addCart = (event: any) => {

}

// 距离顶部的距离
const paddingTop = ref(0)
// #ifdef MP-WEIXIN
onLoad(() => {
    const res = uni.getMenuButtonBoundingClientRect()
    // 胶囊距离顶部高度 + 胶囊高度
    paddingTop.value = res.top + res.height
})
// #endif

</script>
    
<style lang="scss" scoped>
.customized-container {
    background-color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;

    .header-box {
        position: relative;
        box-sizing: border-box;

        .bg {
            position: relative;
            width: 100%;
            height: 130px;
            box-sizing: border-box;

            image {
                width: 100%;
                height: 100%;
            }

            &::after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(0, 0, 0, .3);
            }
        }

        .card-box {
            background-color: #fff;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: 10px;
            box-sizing: border-box;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

            .card {
                padding: 10px 10px 0 10px;
                display: flex;
                justify-content: space-between;

                .left {
                    display: flex;
                    align-items: center;

                    image {
                        width: 50px;
                        height: 50px;
                        margin-right: 10px;
                    }

                    .info {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        .desc {
                            font-size: 13px;
                            color: #666;
                        }
                    }
                }

                .right {
                    display: flex;
                    align-items: center;

                    text {
                        background-color: $uni-color-primary;
                        padding: 2px 5px;
                        font-size: 12px;
                        color: #fff;
                        border-radius: 5px;
                    }
                }
            }

            .notice {
                padding: 0 10px;
                font-size: 10px;
                margin: 5px;
                color: #666;
            }

            .preferential {
                background-color: #f5f5f5;
                width: 100%;
                height: 30px;
                display: flex;
                align-items: center;
                padding: 0 10px;

                .tag {
                    font-size: 10px;
                    border: 1px solid $uni-color-primary;
                    color: $uni-color-primary;
                    padding: 2px 5px;
                    border-radius: 5px;

                    &:nth-child(n):not(:last-child) {
                        margin-right: 5px;
                    }
                }
            }
        }
    }

    .menu-control {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;

        .search {
            .text {
                font-size: 12px;
                color: #444;
            }

            background-color: #f5f5f5;
            padding: 2px 5px;
            border-radius: 10px;
            display: flex;
            align-items: center;
        }
    }

    .slider {
        flex: 1;
        overflow-y: auto;
        display: flex;
        overflow: hidden;
        margin-top: 5px;

        .hd,
        .bd {
            /* 每栏占满宽度 */
            width: 100%;
            /* 每栏占满高度 */
            height: 100%;
            /* 超出高度时显示滚动条 */
            overflow-y: auto;
        }


        .hd {
            flex: 1;
            background-color: #eee;
            border-top-right-radius: 10px;

            .menu-item {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                font-size: 13px;
                color: #555;

                &.active {
                    background-color: #fff;
                }
            }
        }

        .bd {
            flex: 3;

            .bd-title {
                padding: 10px;
            }

            .product-item {
                display: flex;
                padding: 5px;
                width: 100%;
                box-sizing: border-box;

                // border: 1px solid red;
                &:nth-child(n):not(:last-child) {
                    margin-bottom: 10px;
                }

                .img {

                    margin-right: 5px;

                    image {
                        width: 90px;
                        height: 90px;
                    }
                }

                .pro-info {
                    width: 100%;

                    .pro-title {
                        width: 100%;
                        font-weight: 700;
                        overflow-wrap: break-word;
                        /* 或者使用 word-wrap: break-word; */
                        word-wrap: break-word;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 5;
                        line-clamp: 5;
                    }

                    .tags {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;

                        .tag {
                            border: 1px solid $uni-color-primary;
                            padding: 2px 5px;
                            margin-top: 5px;
                            border-radius: 5px;
                            font-size: 10px;
                            color: $uni-color-primary;

                            &.single {
                                border: 1px solid #666;
                                color: #666;
                            }
                        }
                    }

                    .other {
                        margin-top: 5px;
                        display: flex;
                        justify-content: space-between;

                        .price {
                            font-weight: 700;
                            font-size: 15px;
                            color: red;
                        }

                        .btn {
                            display: flex;
                            align-items: center;
                            position: relative;

                            .count {
                                margin: 0 6px;
                            }

                            .sub,
                            .add {
                                width: 20px;
                                height: 20px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border: 1px solid $uni-color-primary;
                                border-radius: 5px;
                            }

                            .add {
                                background-color: $uni-color-primary;
                                color: #fff;

                                &.copy {
                                    // 新元素
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    background-color: green;
                                }
                            }
                        }
                    }
                }
            }
        }

    }

    .cart {
        width: 100%;
        background-color: #333;
        color: #fff;
        display: flex;
        align-items: center;

        .icon {
            width: 50px;
            height: 50px;
            background-color: $uni-color-primary;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transform: translateY(-25%);
            margin-left: 20px;
        }

        .sum {
            margin-left: 10px;
            font-size: 14px;

            .commission {
                font-size: 12px;
                margin-top: 5px;
            }
        }

        .pay {
            margin-left: auto;

            view {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: $uni-color-primary;
                height: 50px;
                padding: 0 10px;
            }
        }
    }

    .shall {
        width: 20px;
        height: 20px;
        background-color: green;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        position: absolute;

        // 目标位置
        // left: 30px;
        // top: 472px;
    }
}
</style>