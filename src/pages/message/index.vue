<template>
    <view class="message-container">
        <!-- 导航栏 -->
        <GdNavbar title="消息" />
        <view class="content">
            <!-- 
                top：置顶样式
                read：已读样式
                unread：未读样式
             -->
            <view class="card top read">
                <view class="title">订单审核通过通知</view>
                <view class="bd">
                    <view class="time">2023/5/29 15:35:26</view>
                    <view class="more">
                        <text>查看详情</text>
                        <uni-icons type="forward" size="15"></uni-icons>
                    </view>
                </view>
            </view>
            <view class="card unread" v-for="item in 8" :key="item">
                <view class="title">订单审核通过通知</view>
                <view class="bd">
                    <view class="time">2023/5/29 15:35:26</view>
                    <view class="more">
                        <text>查看详情</text>
                        <uni-icons type="forward" size="15"></uni-icons>
                    </view>
                </view>
            </view>
        </view>
        <!-- tabbar -->
        <GdTabbar :selected="2" />
    </view>
</template>
    
<script setup lang='ts'>
import GdNavbar from '@/components/gd-navbar/index.vue'
import GdTabbar from '@/components/gd-tabbar/index.vue'
</script>
    
<style lang="scss" scoped>
.message-container {
    .content {
        margin: 0 10px;

        .card {
            position: relative;
            padding: 15px;
            background-color: #fff;
            border-radius: 10px;
            margin-bottom: 10px;

            &.top::before {
                content: '置顶';
                position: absolute;
                top: 0;
                left: 0;
                color: #fff;
                font-size: 10px;
                padding: 2px;
                border-radius: 2px;
                background-color: $uni-color-primary;
            }

            &.read {
                color: #999;
            }

            &.read::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, .1);
                border-radius: 10px;
            }

            &.unread {
                position: relative;

                .title::after {
                    content: '';
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 10px;
                    height: 10px;
                    background-color: red;
                    border-radius: 50%;
                }
            }

            .title {
                font-size: 16px;
                font-weight: 700;

                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
                line-clamp: 3;
            }

            .bd {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                font-size: 13px;
                color: #666;

                .more {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
}
</style>