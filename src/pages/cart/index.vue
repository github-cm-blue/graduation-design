<template>
    <view class="cart-container">
        <!-- 导航栏 -->
        <GdNavbar title="购物车" />

        <view class="list">
            <view class="item">
                <view class="hd">
                    <view class="left">
                        <checkbox value="r1" color="#800c0b" />
                        <uni-icons type="shop" color="#666" size="30"></uni-icons>
                        <view>大白学长</view>
                    </view>
                    <view class="right">
                        <text>编辑</text>
                    </view>
                </view>
                <view class="bd" v-for="item in 3" :key="item">
                    <view class="left">
                        <checkbox value="r1" color="#800c0b" />
                        <view class="info" @click="navigatorProDetail">
                            <view class="image">
                                <image
                                    src="https://img2.baidu.com/it/u=400220221,2870760241&fm=253&fmt=auto&app=120&f=JPEG?w=563&h=410" />
                            </view>
                            <view class="msg">
                                <view class="pro-title">
                                    基于51单片机的智能环境监测系统基于51单片机的智能环境监测系统基于51单片机的智能环境监测系统
                                </view>
                                <view class="price">
                                    ￥33.5
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="right">
                        <uni-number-box :min="1" :max="100" />
                    </view>
                </view>
            </view>
        </view>

        <!-- tabbar -->
        <GdTabbar :selected="3" />
    </view>
</template>

<script setup lang="ts">
import GdNavbar from '@/components/gd-navbar/index.vue'
import GdTabbar from '@/components/gd-tabbar/index.vue'

const navigatorProDetail = () => {
    uni.navigateTo({ url: '/pages/product/detail' })
}

</script>

<style lang="scss" scoped>
.cart-container {
    .list {
        .item {
            padding: 10px;
            background-color: #fff;
            margin-bottom: 10px;
            border-radius: 10px;

            &:last-child {
                margin-bottom: 0;
            }

            .hd {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .left {
                    display: flex;
                    align-items: center;

                    uni-icons {
                        margin: 0 5px;
                    }

                    font-size: 14px;
                }

                .right {
                    font-size: 14px;
                    color: #666;
                }
            }

            .bd {
                display: flex;
                margin-top: 10px;
                position: relative;


                .left {
                    display: flex;
                    align-items: center;

                    .info {
                        display: flex;
                        align-items: center;
                        height: 100%;


                        image {
                            width: 80px;
                            height: 80px;
                            margin: 0 10px;
                            border-radius: 10px;
                        }

                        .msg {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            height: 100%;
                            align-items: flex-start;
                            box-sizing: border-box;

                            .pro-title {
                                font-size: 14px;
                                font-weight: 700;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                -webkit-line-clamp: 2;
                                /* 限制显示的行数 */
                                line-clamp: 2;

                                // text {
                                //     white-space: nowrap;
                                //     overflow: hidden;
                                //     text-overflow: ellipsis;

                                //     &:nth-child(n):not(:first-child)::before {
                                //         content: '|';
                                //         margin: 0 2px;
                                //     }
                                // }
                            }

                            .price {
                                color: red;
                                font-size: 15px;
                            }
                        }
                    }
                }

                .right {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                }
            }
        }
    }
}
</style>
