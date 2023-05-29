<template>
  <view class="home-container">
    <!-- 导航栏 -->
    <GdNavbar title="毕业设计辅导" />
    <!-- 轮播图 -->
    <uni-swiper-dot class="uni-swiper-dot-box" @clickItem="clickItem" :current="current" mode="round"
      field="content">
      <swiper class="swiper-box" :current="swiperDotIndex">
        <swiper-item v-for="(item, index) in list" :key="index">
          <view class="swiper-item">
            <image :src="item" />
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
    <!-- 搜索框 -->
    <view class="search-wrapper">
      <view class="search-box">
        <text class="placeholder">请输入搜索内容</text>
        <uni-icons type="search" size="20"></uni-icons>
      </view>
    </view>
    <!-- 宫格 -->
    <view class="grid-box">
      <view class="grid-item" v-for="item in 10" :key="item">
        <image src="https://img0.baidu.com/it/u=817067158,447581893&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" />
        <text>毕设辅导</text>
      </view>
    </view>
    <!-- 公告 -->
    <view class="notice-box">
      <text>公告：单片机毕设辅导，包含软件端，支持定制</text>
    </view>
    <!-- 商品列表 -->
    <view class="flower-list">
      <view class="flower-item" v-for="item in 5" :key="item">
        <view class="image">
          <image src="https://img2.baidu.com/it/u=400220221,2870760241&fm=253&fmt=auto&app=120&f=JPEG?w=563&h=410" />
        </view>
        <view class="info">
          <text class="title">基于51单片机的环境监测系统</text>
          <!-- <text class="color">红玫瑰</text>
          <text class="count">33支</text> -->
        </view>
        <view class="price">
          <text>￥599.00</text>
        </view>
        <view class="other">
          <view class="left">
            <text>销量：256</text>
          </view>
          <view class="right">
            <uni-icons type="cart" size="20"></uni-icons>
          </view>
        </view>
      </view>
    </view>

    <!-- tabbar -->
    <GdTabbar :selected="0"/>
  </view>
</template>
  
<script setup lang='ts'>
import GdNavbar from '@/components/gd-navbar/index.vue'
import GdTabbar from '@/components/gd-tabbar/index.vue'

const current = ref(0)
const swiperDotIndex = ref(0)
const list = [
  'https://img0.baidu.com/it/u=2947724938,834751751&fm=253&fmt=auto&app=138&f=JPEG?w=407&h=304',
]

const clickItem = () => {

}

</script>

  
<style lang="scss" scoped>
.home-container {
  .swiper-box {
    width: 100%;
    height: 200px;
  }

  .swiper-item {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    color: #fff;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .search-wrapper {
    padding: 10px 20px;
    background-color: #fff;

    .search-box {
      border: 1px solid $uni-color-primary;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      border-radius: 15px;

      .placeholder {
        font-size: 12px;
        color: $uni-color-primary;
      }
    }
  }


  .grid-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: #fff;
    padding-bottom: 10px;

    .grid-item {
      flex: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      image {
        width: 50px;
        height: 50px;
        border-radius: 10px;
      }

      text {
        margin-top: 5px;
        color: #999;
        font-size: 13px;
      }
    }
  }

  .notice-box {
    font-size: 12px;
    background-color: $uni-color-primary;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
    color: #fff;
    margin-top: 10px;
  }

  .flower-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 0 5px;


    .flower-item {
      width: 49%;
      background-color: #fff;
      margin-bottom: 8px;
      border-radius: 10px;
      overflow: hidden;
      // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.1);

      &:nth-child(2n) {
        margin-left: 5px;
      }

      image {
        width: 100%;
        height: 160px;
      }

      .info {
        display: flex;
        padding: 5px;
        color: $uni-color-primary;
        font-size: 14px;

        text {
          &:nth-child(n+2):not(:first-child)::before {
            content: '|';
            padding: 0 2px;
          }

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .price {
        margin-top: 10px;
        padding: 5px;
        color: #e69137;
        font-weight: 700;
      }

      .other {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          font-size: 12px;
          color: #666;
        }

        .right {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 25px;
          background-color: #f5f5f5;
          border-radius: 50%;
        }
      }
    }
  }


}
</style>