<template>
  <div class="home_content">
    <template
      v-for="item in houseListData"
      :key="item.data.houseId"
    >
      <HouseItemV9
        v-if="item.discoveryContentType === 9"
        :data="item.data"
        @click="itemClick(item.data)"
      />
      <HouseItemV3
        v-if="item.discoveryContentType === 3"
        :data="item.data"
        @click="itemClick(item.data)"
      />
    </template>
  </div>
</template>

<script setup>
import { useHomeStore } from '@/store/modules/home'
import HouseItemV3 from '@/components/house-item/house-item-v3/house-item-v3.vue'
import HouseItemV9 from '@/components/house-item/house-item-v9/house-item-v9.vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
const homeStore = useHomeStore()
const { houseListData } = storeToRefs(homeStore)

// 点击item
const router = useRouter()
const itemClick = (item) => {
  const houseId = item.houseId
  // const router = useRoute()
  router.push('/detail/' + houseId)
}
</script>
<style lang="less" scoped>
.home_content {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 0 4px;
  box-sizing: border-box;
}
</style>
