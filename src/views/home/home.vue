<script setup>
import { useHomeStore } from '@/store/modules/home'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'

// 加载home数据
const home = useHomeStore()
home.fetchHotSuggestData()
home.fetchCategoriesData()
home.fetchHouseListData()
</script>
<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <img src="@/assets/img/banner.png" class="banner" />
    <HomeSearchBox></HomeSearchBox>
    <HomeCategories></HomeCategories>
    <HomeContent></HomeContent>
  </div>
</template>
<style lang="less" scoped>
.home {
  height: calc(100vh - 50px);
  overflow-y: scroll;
}
.banner {
  width: 100%;
  position: relative;
}
</style>
