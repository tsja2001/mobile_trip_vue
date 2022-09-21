<script setup>
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
</script>
<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <img src="@/assets/img/banner.png" class="banner" />
    <HomeSearchBox></HomeSearchBox>
  </div>
</template>
<style lang="less" scoped>
.banner {
  width: 100%;
  position: relative;
}
</style>
