<template>
    <view class="profile-container">
        <!-- 导航栏 -->
        <GdNavbar title="我的" />
        
        <!-- tabbar -->
        <GdTabbar :selected="4" />
    </view>
</template>
    
<script setup lang='ts'>
import GdNavbar from '@/components/gd-navbar/index.vue'
import GdTabbar from '@/components/gd-tabbar/index.vue'
</script>
    
<style lang="scss" scoped>
.profile-container {}
</style>