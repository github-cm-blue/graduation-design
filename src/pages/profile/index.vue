<template>
    <view class="profile-container">
        <!-- 导航栏 -->
        <GdNavbar title="我的" />
        <view class="bg">
            <image src="https://img2.baidu.com/it/u=2356190732,2208415082&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=220"
                mode="top" />
        </view>
        <view class="header-box"> 
            <view class="circle-container">
                <img class="circle-image" src="https://img2.baidu.com/it/u=2356190732,2208415082&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=220" alt="头像"/>
            </view>
            <view class="account-inf">
                <text class="name">李传明</text>
                <text class="id">000001</text>
            </view>
        </view>
        <view class="menu1-box">
        <view class="menu1-content" v-for="(item,index) in list" :key="index">
            <uni-icons custom-prefix="custom-icon" :type="`iconfont ${item.icon}`" size="30"></uni-icons>
            <text>购物车</text>
        </view>
        </view>
    <!-- tabbar -->
        <GdTabbar :selected="4" />
    </view>
</template>
    
<script setup lang='ts'>
import GdNavbar from '@/components/gd-navbar/index.vue'
import GdTabbar from '@/components/gd-tabbar/index.vue'

const list = [
    {
        text:'購物車',
        icon:'icon-shoucang'
    },
    {
        text:'購物車',
        icon:'icon-shouchang'
    },
    {
        text:'購物車',
        icon:'icon-shouchang'
    },
    {
        text:'購物車',
        icon:'icon-shouchang'
    }
]

</script>
    
<style lang="scss" scoped>
.profile-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #EFEFEF20;
}

.header-box{
  display: flex;
  align-items: center;
  width: 290px;
  padding: 10px 0 10px 0;
}
.bg {
    position: absolute;
    width: 100%;
    height: 130px;
    box-sizing: border-box;
    z-index: -1;
    image {
        width: 100%;
        height: 100%;
    }
    &::after{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .3);
    }
}

.account-inf{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:0 0 0 10px;
}

.circle-container {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  overflow: hidden;
}

.circle-image {
  width:100%;
  height: 100%;
  object-fit: cover;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.menu1-box{
  display: flex;
  align-items: center;
  margin: 10px 15px 0 15px;
  height: 75px;
  background-color: white;
  width: 290px;
  border-radius: 10px;
}

.menu1-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2px;
  height: 60px;
  width: 70px;
}

.menu1-icon{
  font-size: 35px;
}
</style>
