<script setup>
import router from '@/router'
import { computed, ref, toRaw } from 'vue'
import { getCityAll } from '@/services'
import { useCityStore } from '@/store/modules/city'
import { storeToRefs } from 'pinia'
import CityList from './city-list.vue'

let value = ref('')

const onSearch = (e) => {
  // console.log(e)
}
const onCancel = () => {
  router.back(1)
}

const active = ref(0)

// 使用pinia加载city数据
const cityStore = useCityStore()
cityStore.getCityAllData()

const { allCities } = storeToRefs(cityStore)

// 点击切换tab
const currentTabKey = ref('')
const tabchange = (name) => {
  currentTabKey.value = name
}

const getCurrentTabData = computed(() => {
  return allCities.value[currentTabKey.value]
})
</script>

<template>
  <div class="city">
    <!-- 搜索 -->
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
    <!-- tab选择 -->
    <van-tabs
      class="tab"
      v-model:active="active"
      color="#ff9854"
      :swipeable="true"
      line-height="2px"
      @change="tabchange"
    >
      <van-tab
        v-for="(value, key) in allCities"
        :key="key"
        :title="value.title"
        :name="key"
      >
      </van-tab>
    </van-tabs>
    <!-- 列表 -->

    <div class="content">
      <CityList :cityDataList="getCurrentTabData"></CityList>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tab {
  position: relative;
  z-index: 10;
}
.content {
  height: calc(100vh - 98px);
  overflow: scroll;
}
</style>
