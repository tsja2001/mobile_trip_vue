<template>
  <div class="search_box">
    <div class="position">
      <div class="left" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="right" @click="positonClick">
        <div class="text">我的位置</div>
        <img src="@/assets/img/location_city.png" class="loaction_img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { useCityStore } from '@/store/modules/city'
import { storeToRefs } from 'pinia'

const positonClick = () => {
  navigator.geolocation.getCurrentPosition(
    (suc) => {
      console.log(suc)
    },
    (err) => {
      console.log(err)
    }
  )
}

// 跳转到城市选择页面
const cityClick = () => {
  router.push('/city')
}

// 获取当前城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
</script>
<style lang="less" scoped>
.position {
  width: 100;
  display: flex;
  flex-flow: row nowrap;
  padding: 5px 10px;
  box-sizing: border-box;
  font-size: 13px;
  .left {
    flex: 1;
  }
  .right {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .loaction_img {
      width: 22px;
      height: 22px;
      padding-left: 4px;
    }
  }
}
</style>
