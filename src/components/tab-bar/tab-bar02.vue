<template>
  <div class="tabbar">
    <div
      class="item"
      :class="{ active: index === currentIndex }"
      v-for="(item, index) in tabbarData"
      key="text"
      @click="barItemClick(item.url, index)"
    >
      <img
        :src="
          getAssetUrl(
            index === currentIndex
              ? item.activeImage
              : item.image
          )
        "
      />
      <div class="text">{{ item.text }}</div>
    </div>
  </div>
</template>

<script setup>
import { tabbarData } from '@/assets/data/tabber'
import { getAssetUrl } from '@/utils/load_assets'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 点击路由
let currentIndex = ref(0)

const barItemClick = (url, index) => {
  currentIndex.value = index
  router.push(url)
}
</script>
<style lang="less" scoped>
.tabbar {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #f0f0f0;
  display: flex;
  flex-flow: row nowrap;
  .item {
    width: 25%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    img {
      width: 24px;
      margin-bottom: 4px;
    }
    .text {
      font-size: 13px;
    }
  }
  .active {
    color: var(--primary-color);
  }
}
</style>
