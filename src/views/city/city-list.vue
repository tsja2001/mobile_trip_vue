<template>
  <div class="city_list">
    <van-index-bar class="van-index-bar" :sticky="true" :index-list="indexList">
      <van-index-anchor :index="'#'" />
      <div class="hot">
        <template v-key="item" v-for="hotCityItem in props?.cityDataList?.hotCities">
          <div class="hot_item" @click="cityClick(hotCityItem)">
            <div class="itemInner">
              {{ hotCityItem.cityName }}
            </div>
          </div>
        </template>
      </div>

      <template v-for="groupItem in props?.cityDataList?.cities">
        <van-index-anchor :index="groupItem.group" />
        <van-cell
          v-for="city in groupItem?.cities"
          @click="cityClick(city)"
          :title="city.cityName"
        />
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { useCityStore } from '@/store/modules/city'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  cityDataList: {
    type: Object,
    default: {}
  }
})

const indexList = computed(() => {
  if (!props.cityDataList.cities) return
  const indexList = props.cityDataList?.cities?.map((item) => item.group)

  indexList?.unshift('#')

  return indexList ?? []
})

const cityStore = useCityStore()
const router = useRouter()
const cityClick = (city) => {
  cityStore.currentCity = city
  router.back(1)
}
</script>
<style lang="less" scoped>
.hot {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-right: 14px;
  box-sizing: border-box;
  .hot_item {
    width: 25%;
    padding: 5px 7px;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    flex-flow: center;
    justify-content: center;
    .itemInner {
      background-color: #ff985437;
      width: 100%;
      padding: 7px 0;
      border-radius: 40px;
      font-size: 13px;
    }
  }
}
</style>
