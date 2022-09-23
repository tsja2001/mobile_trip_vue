<template>
  <div
    class="loading"
    v-if="isLoading"
    @click="loadingClick"
  >
    <div class="inner">
      <van-loading color="#1989fa" vertical>
        加载中...
      </van-loading>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/store/modules/main'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { isLoading } = storeToRefs(mainStore)

const loadingClick = () => {
  isLoading.value = false
}
</script>
<style lang="less" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .inner {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 10px;
  }
}
</style>
