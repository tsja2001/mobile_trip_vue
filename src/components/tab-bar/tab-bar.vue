<template>
  <div class="tabbar">
    <van-tabbar
      v-model="currentIndex"
      active-color="#ff9854"
      route
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
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'

let currentIndex = ref(0)

// 实现手动输入路径后, tabbar自动显示对应icon
const router = useRoute()
watch(
  router,
  (newRouter) => {
    const index = tabbarData.findIndex(
      (item) => item.url === newRouter.path
    )
    if (index != -1) currentIndex.value = index
  },
  {
    immediate: true
  }
)
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
