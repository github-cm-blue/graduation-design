<template>
        <view class="detail-container">
            <!-- 导航栏 -->
            <GdNavbar title="订单审核通过通知" back/>
            <view class="hd">
                订单审核通过通知
            </view>
            <view class="bd">
                这是一段中文。Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores dolorem ex commodi odit aut eius quidem nam ducimus maxime voluptas beatae assumenda ad temporibus itaque, neque quaerat dicta ipsam.
                Eum possimus praesentium eaque ipsa laboriosam. Atque nesciunt voluptas incidunt! Ullam soluta quam libero, veritatis impedit ab velit in sed vero cum a perferendis explicabo error hic vitae, nesciunt exercitationem!
                Repudiandae, maxime deserunt sunt temporibus veritatis laborum sequi at eaque error eos. Totam perspiciatis consectetur optio deleniti odio sint amet accusamus vero. Ab nihil veniam sequi? Quas distinctio sunt at.
                Voluptatem, ipsum, suscipit asperiores veniam eius sapiente fugit, doloremque aspernatur facilis distinctio perferendis nemo minima sequi ut? Officiis corrupti fugiat nemo. Mollitia, ipsum animi dignissimos cum beatae dolorum deleniti vero!
                Maxime minus accusamus saepe. Architecto ex sequi fugiat deleniti explicabo perferendis, cum eligendi maiores quam quos? Praesentium cum in, aliquid assumenda distinctio delectus nostrum aliquam asperiores quidem tenetur libero? Laboriosam.
            </view>
        </view>
</template>
    
<script setup lang='ts'>
    import GdNavbar from '@/components/gd-navbar/index.vue'
</script>
    
<style lang="scss" scoped>
    .detail-container{
        margin: 0 10px;
        margin-top: 10px;
        .hd{
            font-size: 16px;
            font-weight: 700;
            border-top: 1px solid #e1e1e1;
            padding: 10px 0;
        }
        .bd{
            font-size: 13px;
            color: #333;
            margin-top: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e1e1e1;
            
        }
    }
</style>