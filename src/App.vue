<template>
  <div class="app">
    <!-- <div class="main"> -->
    <router-view />
    <!-- </div> -->
    <tab-bar
      v-if="router.currentRoute.value.meta.showTabBar"
    ></tab-bar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import TabBar from './components/tab-bar/tab-bar.vue'
const router = useRouter()
</script>
<style lang="less" scoped></style>
