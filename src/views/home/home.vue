<script setup>
import { useHomeStore } from '@/store/modules/home'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'
import useScroll from '@/hooks/useScroll'
import { computed, watch } from 'vue'
import SearchBar from './cpns/search-bar.vue'

// 加载home数据
const home = useHomeStore()
home.fetchHotSuggestData()
home.fetchCategoriesData()
home.fetchHouseListData()

// 触底刷新
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (e) => {
  if (e) {
    home.fetchHouseListData()
    isReachBottom.value = false
  }
})

const ifDisplaySearch = computed(() => {
  return scrollTop.value >= 350
})
</script>
<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <img src="@/assets/img/banner.png" class="banner" />
    <HomeSearchBox></HomeSearchBox>
    <HomeCategories></HomeCategories>
    <SearchBar v-show="ifDisplaySearch"></SearchBar>
    <HomeContent></HomeContent>
  </div>
</template>
<style lang="less" scoped>
.home {
  // 方法1: 限定高度, 实现内容滚动
  // height: calc(100vh - 50px);
  // overflow-y: scroll;
  // 增加底部padding, 实现屏幕滚动
  padding-bottom: 50px;
}
.banner {
  width: 100%;
  position: relative;
}
</style>
