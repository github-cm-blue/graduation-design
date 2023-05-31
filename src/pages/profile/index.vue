<template>
    <view class="profile-container">
        <!-- 导航栏 -->
        <GdNavbar title="我的" />
        <!-- 用户信息及会员卡 -->
        <view class="user-wrapper">
            <view class="info">
                <view class="avatar">
                    <image src="https://img02.hua.com/wxmp/hua/def_user_header.png" />
                </view>
                <view class="username">立即登录</view>
            </view>
            <view class="vip">
                <!-- <view class="hd">
                    <view class="left">
                        <uni-icons type="vip" color="#2aaaff" size="25"></uni-icons>
                        <text>会员卡</text>
                    </view>
                    <view class="right">
                        <text>会员中心</text>
                        <uni-icons type="forward" color="#2aaaff" size="20"></uni-icons>
                    </view>
                </view> -->
                <view class="bd">
                    <view class="item">
                        <view class="value">36.00</view>
                        <view class="key">余额</view>
                    </view>
                    <view class="item">
                        <view class="value">5</view>
                        <view class="key">兑换券</view>
                    </view>
                </view>
            </view>
        </view>

        <!-- 我的订单 -->
        <view class="order">
            <view class="hd">
                <view class="left">我的订单</view>
                <view class="right" @click="toOrder">
                    <text>全部订单</text>
                    <uni-icons type="forward" color="#666" size="13"></uni-icons>
                </view>
            </view>
            <view class="bd">
                <view class="item" @click="toOrder">
                    <uni-badge class="uni-badge-left-margin" absolute="rightTop" text="5">
                        <view class="content">
                            <uni-icons custom-prefix="custom-icon" type="iconfont icon-anquanjianchaoff"
                                size="30"></uni-icons>
                            <text>待审核</text>
                        </view>
                    </uni-badge>
                </view>

                <view class="item" @click="toOrder">
                    <uni-badge class="uni-badge-left-margin" absolute="rightTop" text="5">
                        <view class="content">
                            <uni-icons custom-prefix="custom-icon" type="iconfont icon-daifukuan" size="30"></uni-icons>
                            <text>待付款</text>
                        </view>
                    </uni-badge>
                </view>

                <view class="item" @click="toOrder">
                    <uni-badge class="uni-badge-left-margin" absolute="rightTop" text="">
                        <view class="content">
                            <uni-icons custom-prefix="custom-icon" type="iconfont icon-daifahuo" size="30"></uni-icons>
                            <text>待发货</text>
                        </view>
                    </uni-badge>
                </view>

                <view class="item" @click="toOrder">
                    <uni-badge class="uni-badge-left-margin" absolute="rightTop" text="">
                        <view class="content">
                            <uni-icons custom-prefix="custom-icon" type="iconfont icon-baoguo_lanshou_o"
                                size="30"></uni-icons>
                            <text>待收货</text>
                        </view>
                    </uni-badge>
                </view>

            </view>
        </view>

        <!-- 我的服务 -->
        <view class="service">
            <view class="hd">我的服务</view>
            <view class="bd">
                <view class="item" v-for="item in 10" :key="item">
                    <uni-icons color="#dd524d" custom-prefix="custom-icon" type="iconfont icon-dizhi"
                        size="25"></uni-icons>
                    <text>地址管理</text>
                </view>
            </view>
        </view>

        <!-- tabbar -->
        <GdTabbar :selected="4" />
    </view>
</template>

<script setup lang="ts">
import GdNavbar from '@/components/gd-navbar/index.vue'
import GdTabbar from '@/components/gd-tabbar/index.vue'

const toOrder = () => {
    uni.navigateTo({
        url: '/pages/order/index'
    })
}

</script>

<style lang="scss" scoped>
.profile-container {

    .user-wrapper {
        height: 90px;
        background: linear-gradient(to right, #f5f7fd, #e9effc);
        padding: 20px;
        border-radius: 0 0 40px 40px;

        .info {
            display: flex;
            align-items: center;

            .avatar {
                image {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }

                margin-right: 10px;
            }

            .username {
                color: #666;
                font-size: 14px;
            }
        }

        .vip {
            margin-top: 10px;
            background-color: #fff;
            padding: 5px;
            box-sizing: border-box;
            border-radius: 10px;

            .hd {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: #2aaaff;

                .left {
                    display: flex;
                    align-items: center;

                    uni-icons {
                        margin-right: 5px;
                    }
                }

                .right {
                    display: flex;
                    align-items: center;

                }
            }

            .bd {
                display: flex;

                .item {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 6px;

                    &:nth-child(n):not(:first-child) {
                        border-left: 1px solid rgba(0, 0, 0, 0.2);
                    }

                    .value {
                        font-size: 18px;
                        margin-bottom: 5px;
                        color: #333;
                    }

                    .key {
                        font-size: 13px;
                        color: #666;
                    }
                }
            }
        }

    }

    .order {
        margin: 0 10px;
        margin-top: 35px;
        border-radius: 10px;
        padding: 0 20px;
        background-color: #fff;

        .hd {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f1f1f1;
            padding: 10px 0;

            .left {
                font-weight: 700;
                font-size: 14px;
            }

            .right {
                font-size: 13px;
                color: #666;
            }
        }

        .bd {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            padding-bottom: 10px;

            .item {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;

                .content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                text {
                    font-size: 13px;
                    margin-top: 5px;
                    color: #666;
                }
            }
        }
    }

    .service {
        background-color: #fff;
        margin: 10px;
        padding: 10px 20px;
        border-radius: 10px;

        .hd {
            font-weight: 700;
            font-size: 14px;
            border-bottom: 1px solid #f1f1f1;
            padding-bottom: 10px;
        }

        .bd {
            display: flex;
            flex-wrap: wrap;

            .item {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                font-size: 12px;
                width: 25%;
                box-sizing: border-box;
                align-items: center;
                margin-top: 20px;

                // border: 1px solid red;
                text {
                    margin-top: 5px;
                    color: #666;
                }
            }
        }
    }

}
</style>