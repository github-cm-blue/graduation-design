<template>
    <!-- #ifndef H5 -->
    <view>
        <view class="nav-container"
            :style="{ height: `${navHeight}px`, paddingTop: `${paddingTop}px`, paddingBottom: `${paddingButtom}px` }">
            <view class="content">
                <view v-if="back" @click="navigatorBack">
                    <uni-icons  type="back" size="25"></uni-icons>
                </view>
                <view class="title">{{ title }}</view>
            </view>
        </view>
        <!-- 占位符 -->
        <view class="nav-slot" :style="{ height: `${paddingTop + paddingButtom + navHeight}px` }"></view>
    </view>
    <!-- #endif -->
</template>
    
<script setup lang='ts'>
type Props = {
    back?: Boolean,
    title: String,
}
withDefaults(defineProps<Props>(), {
    back: () => false,
})
const navHeight = ref(0)
const paddingTop = ref(0)
const paddingButtom = ref(0)

// #ifdef MP-WEIXIN
onShow(() => {
    const res = uni.getMenuButtonBoundingClientRect()
    navHeight.value = res.height
    paddingTop.value = res.top
    paddingButtom.value = 10
})
// #endif

const navigatorBack = () => uni.navigateBack()

</script>
    
<style lang="scss" scoped>
.nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #f5f5f5;

    .content {
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 10px;

        uni-icons {
            position: absolute;
            top: 0;
        }

        .title {
            font-size: 18px;
            margin-left: 30px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 8em;
        }
    }
}
</style>