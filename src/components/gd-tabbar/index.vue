<template>
    <view class="tabbar-container">
        <view class="tab-bar">
            <view v-for="(item, index) in list" :key="index" class="tab-bar-item" @click="switchTab(item, index)">
                <image class="tab_img" :src="selected === index ? item.selectedIconPath : item.iconPath"></image>
                <view class="tab_text" :class="{ 'active': selected === index }">{{ item.text }}</view>
            </view>
        </view>
        <view class="tabbar-solt"></view>
    </view>
</template>

<script lang="ts" setup>
type Props = {
    selected: Number
}
defineProps<Props>()

const list = [{
    "pagePath": "pages/home/index",
    "iconPath": "../../static/images/tabbar/home.png",
    "selectedIconPath": "../../static/images/tabbar/homeactive.png",
    "text": "首页"
},
{
    "pagePath": "pages/customized/index",
    "iconPath": "../../static/images/tabbar/category.png",
    "selectedIconPath": "../../static/images/tabbar/categoryactive.png",
    "text": "定制"
},
{
    "pagePath": "pages/message/index",
    "iconPath": "../../static/images/tabbar/message.png",
    "selectedIconPath": "../../static/images/tabbar/messageactive.png",
    "text": "消息"
},
{
    "pagePath": "pages/order/index",
    "iconPath": "../../static/images/tabbar/order.png",
    "selectedIconPath": "../../static/images/tabbar/orderactive.png",
    "text": "订单"
},
{
    "pagePath": "pages/profile/index",
    "iconPath": "../../static/images/tabbar/my.png",
    "selectedIconPath": "../../static/images/tabbar/myactive.png",
    "text": "我的"
}]

const switchTab = (item: any, index: Number) => {

    console.log('点击切换');

    let url = item.pagePath;
    // console.log(url, '自定义tabbbar');
    uni.switchTab({ url: '/' + url })
}

</script>

<style lang="scss" scoped>
.tabbar-container {
    

    .tab-bar {
        border-top: 1px solid #f0f0f0;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        right: 0;
        height: 110rpx;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: env(safe-area-inset-bottom); // 适配iphoneX的底部
        width: 100%;
        max-width: 1500rpx;

        .tab-bar-item {
            flex: 1;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .tab_img {
                width: 50rpx;
                height: 50rpx;
            }

            .tab_text {
                font-size: 13px;
                margin-top: 9rpx;

                color: #9a9a9a;

                &.active {
                    color: $uni-color-primary;
                }
            }
        }
    }

    .tabbar-solt {
        width: 100%;
        height: 110rpx;
    }
}
</style>
