<template>
    <view class="product-container">
        <!-- 导航栏 -->
        <GdNavbar title="作品详情" back />
        <!-- 轮播图 -->
        <z-swiper v-model="swipers" class="swiper" :options="options">
            <z-swiper-item v-for="(item, index) in swipers" :key="index">
                <image class="image" :src="item" mode="aspectFill"> </image>
            </z-swiper-item>
        </z-swiper>
        <!-- 作品信息 -->
        <view class="product-info">
            <view class="card">
                <view class="price">
                    <view class="left">
                        <text class="new">￥599.00</text>
                        <text class="old">￥998.00</text>
                    </view>
                    <view class="right">
                        <view class="tool">
                            <uni-icons custom-prefix="custom-icon" type="iconfont icon-shoucang" size="20"></uni-icons>
                            <text>收藏</text>
                        </view>
                        <view class="tool">
                            <uni-icons custom-prefix="custom-icon" type="iconfont icon-fenxiang" size="20"></uni-icons>
                            <text>分享</text>
                        </view>
                    </view>
                </view>
                <view class="title">
                    <text>基于51单片机的环境监测系统基于51单片机的环境监测系统基于51单片机的环境监测系统基于51单片机的环境监测系统</text>
                </view>
            </view>
            <view class="card">
                <view class="pei">
                    <view class="left">
                        <uni-icons custom-prefix="custom-icon" type="iconfont icon-fahuo" size="20"></uni-icons>
                        <text class="label">发货时间</text>
                    </view>
                    <view class="right">
                        <text>7天内发货</text>
                    </view>
                </view>
            </view>
            <view class="card">
                <view class="params">
                    <view class="hd">
                        <view class="left">元器件清单</view>
                        <view class="right">共18件</view>
                    </view>
                    <view class="bd">
                        <view class="item" v-for="item in 8" :key="item">
                            <view class="key">温湿度传感器</view>
                            <view class="value">AHT20 * 1</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <!-- 购买 -->
        <view class="pay-box">
            <view class="left">
                <view class="item">
                    <uni-icons custom-prefix="custom-icon" type="iconfont icon-shouye" size="25"></uni-icons>
                    <text>首页</text>
                </view>
                <view class="item">
                    <uni-icons custom-prefix="custom-icon" type="iconfont icon-kefu" size="25"></uni-icons>
                    <text>客服</text>
                </view>
                <view class="item">
                    <uni-icons custom-prefix="custom-icon" type="iconfont icon-gouwuche" size="25"></uni-icons>
                    <text>购物车</text>
                </view>
            </view>
            <view class="right">
                <view class="cart">加入购物车</view>
                <view class="pay">立即购买</view>
            </view>
        </view>

    </view>
</template>
    
<script setup lang='ts'>
import GdNavbar from '@/components/gd-navbar/index.vue'

const swipers = ref([
    'https://img2.baidu.com/it/u=400220221,2870760241&fm=253&fmt=auto&app=120&f=JPEG?w=563&h=410',
    'https://img1.baidu.com/it/u=626307190,3316603329&fm=253&fmt=auto&app=138&f=JPEG?w=473&h=471',
    'https://img0.baidu.com/it/u=912459493,3603991604&fm=253&fmt=auto&app=138&f=PNG?w=803&h=500',
    'https://img0.baidu.com/it/u=4273083068,3029230266&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://img0.baidu.com/it/u=2713426271,1285952473&fm=253&fmt=auto&app=138&f=PNG?w=732&h=500',
])
const options = {
    pagination: {
        el: true, //启用分段器
        type: 'fraction', //圆点
    },
    autoplay: true, //自动播放
    loop: true, //循环
    effect: 'slide'
}

</script>
    
<style lang="scss" scoped>
.product-container {
    // 空出底部固定位置，形成可滚动，防止底部遮挡内容
    padding-bottom: 55px;
    .swiper {
        image {
            width: 100%;
            height: 200px;
        }
    }


    .product-info {

        .card {
            background-color: #fff;
            padding: 10px;
            margin: 0 10px;
            border-radius: 10px;
            margin-top: 5px;

        }

        .price {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #f1f1f1;
            padding-bottom: 10px;

            .left {
                display: flex;
                align-items: center;

                .new {
                    font-size: 18px;
                    color: red;
                    font-weight: 700;
                }

                .old {
                    font-size: 12px;
                    color: #666;
                    text-decoration: line-through;
                    margin-left: 10px;
                }
            }

            .right {
                display: flex;
                align-items: center;

                .tool {
                    font-size: 12px;
                    color: #666;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;

                    &:nth-child(n):not(:first-child) {
                        margin-left: 10px;
                    }
                }
            }
        }

        .title {
            margin-top: 10px;
            font-weight: 700;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            line-clamp: 2;
        }

        .pei {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;

            .label {
                margin-left: 5px;
            }

            .right {
                color: $uni-color-primary;
            }
        }

        .params {
            .hd {
                font-size: 14px;
                color: #666;
                font-weight: 700;
                display: flex;
                justify-content: space-between;

                .right{
                    font-size: 12px;
                }
            }

            .bd {
                margin-top: 10px;
                // height: 120px;
                overflow: hidden;
                overflow-y: auto;

                .item {
                    margin-top: 10px;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #f1f1f1;
                    padding-bottom: 10px;

                    .key {
                        font-size: 14px;
                        color: #666;
                    }

                    .value {
                        font-size: 15px;
                        color: $uni-color-primary;
                    }
                }
            }
        }
    }

    .pay-box {
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #f1f1f1;
        padding: 0 5px;
        .left {
            display: flex;
            align-items: center;
            .item {
                display: flex;
                flex-direction: column;
                font-size: 12px;
                align-items: center;
                margin: 0 10px;
            }
        }

        .right {
            display: flex;
            align-items: center;

            .cart,
            .pay {
                border-radius: 999px;

                display: flex;
                align-items: center;
                padding: 10px;

                font-size: 13px;
                color: #fff;
            }

            .cart {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                background-color: #e69137;
            }

            .pay {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                background-color: $uni-color-primary;

            }
        }
    }
}
</style>