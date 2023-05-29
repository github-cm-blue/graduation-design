<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@import url('./static/styles/main.css');
/* @import url('https://at.alicdn.com/t/c/font_4093288_kamqy12uhsk.css'); */
@import url('./static/styles/iconfont.css');
</style>
