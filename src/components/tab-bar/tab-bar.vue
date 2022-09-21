<template>
  <div class="tabbar">
    <van-tabbar
      v-model="currentIndex"
      active-color="#ff9854"
    >
      <van-tabbar-item
        icon="home-o"
        v-for="(item, index) in tabbarData"
        key="text"
        :to="item.url"
      >
        <span>{{ item.text }}</span>
        <template #icon>
          <img
            :src="
              getAssetUrl(
                index === currentIndex
                  ? item.activeImage
                  : item.image
              )
            "
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { tabbarData } from '@/assets/data/tabber'
import { getAssetUrl } from '@/utils/load_assets'
import { ref } from 'vue'

let currentIndex = ref(0)
</script>
<style lang="less" scoped>
.tabbar {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
</style>
