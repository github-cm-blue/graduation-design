<template>
    <view class="order-container">
        <!-- 导航栏 -->
        <GdNavbar title="订单" />
        <!-- tabs -->
        <view class="tabs">
            <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
                activeColor="#800c0b"></uni-segmented-control>
        </view>
        <!-- 订单信息 -->
        <view class="order-list">
            <view class="item" v-for="item in 8" :key="item">
                <view class="top">
                    <view class="left">成品辅导</view>
                    <view class="right">待发货</view>
                </view>
                <view class="middle">
                    <image src="https://img2.baidu.com/it/u=400220221,2870760241&fm=253&fmt=auto&app=120&f=JPEG?w=563&h=410"
                        mode="scaleToFill" />
                    <view class="info">
                        <view class="title">基于STM32的智能环境监测系统 基于STM32的智能环境监测系统</view>
                        <view class="desc">共18个元器件</view>
                    </view>
                </view>
                <view class="bottom">
                    <view class="btn">查看物流</view>
                    <view class="btn">确认收货</view>
                </view>
            </view>
        </view>
        <!-- tabbar -->
        <GdTabbar :selected="3" />
    </view>
</template>
    
<script setup lang='ts'>
import GdNavbar from '@/components/gd-navbar/index.vue'
import GdTabbar from '@/components/gd-tabbar/index.vue'

const current = ref(0)
const items = ref(['全部', '待审核', '待发货', '待收货', '已完成'])
const onClickItem = (e: any) => {
    if (current.value != e.currentIndex) {
        current.value = e.currentIndex;
    }
}

</script>
    
<style lang="scss" scoped>
.order-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    .tabs {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .order-list {
        flex: 1;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        margin-top: 10px;

        .item {
            border-radius: 10px;
            margin: 0 5px;
            background-color: #fff;
            padding: 10px;
            margin-bottom: 10px;

            .top {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 700;

                .left {
                    font-size: 15px;
                }

                .right {
                    font-size: 12px;
                    color: $uni-color-primary;
                }
            }

            .middle {
                margin-top: 10px;
                display: flex;

                image {
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                }

                .info {
                    margin-left: 10px;

                    .title {
                        max-width: 15em;
                        width: 100%;
                        font-size: 13px;
                        font-weight: 700;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .desc {
                        color: #666;
                        font-size: 12px;
                        margin-top: 10px;
                    }
                }
            }

            .bottom {
                display: flex;
                margin-top: 10px;
                justify-content: flex-end;
                .btn {
                    color: #333;
                    border: 1px solid #666;
                    padding: 5px 8px;
                    border-radius: 10px;
                    font-size: 13px;
                    margin-left: 5px;

                    &:last-child {
                        background-color: $uni-color-primary;
                        color: #fff;
                        border: 0;
                    }
                }
            }

        }
    }

}</style>