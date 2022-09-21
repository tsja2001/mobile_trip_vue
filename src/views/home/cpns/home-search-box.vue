<template>
  <div class="search_box">
    <!-- 位置 -->
    <div class="position item">
      <div class="left" @click="cityClick">
        {{ currentCity.cityName }}
      </div>
      <div class="right" @click="positonClick">
        <div class="text">我的位置</div>
        <img
          src="@/assets/img/location_city.png"
          class="loaction_img"
        />
      </div>
    </div>
    <!-- 日期选择 -->
    <div
      class="time_select item"
      @click="showCalendar = true"
    >
      <div class="time_item">
        <div class="time_text">入住</div>
        <div class="time_main">{{ startDate }}</div>
      </div>
      <div class="middle_text">共{{ diffDate }}晚</div>
      <div class="time_item">
        <div class="time_text">离店</div>
        <div class="time_main">{{ endDate }}</div>
      </div>
      <van-calendar
        v-model:show="showCalendar"
        type="range"
        color="#ff9854"
        @confirm="onCalendarConfirm"
      />
    </div>
    <!-- 搜索条件 -->
    <div class="filler_box">
      <div class="filler">
        <div class="filler_item">价格不限</div>
        <div class="filler_item">时间不限</div>
      </div>
      <div class="filler">
        <div class="filler_params">关键字/位置/民宿名</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { useCityStore } from '@/store/modules/city'
import {
  formatMonthDay,
  getDiffDate
} from '@/utils/format_date'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

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

// 显示当前时间, 明天
const nowDate = new Date()
const startDate = ref(formatMonthDay(nowDate))
const newDate = nowDate.setDate(nowDate.getDate() + 1)
const endDate = ref(formatMonthDay(newDate))
// 相差几天
const diffDate = ref('1')

// 点击选择日期
const showCalendar = ref(false)

const onCalendarConfirm = (dates) => {
  showCalendar.value = false

  startDate.value = formatMonthDay(dates[0])
  endDate.value = formatMonthDay(dates[1])

  diffDate.value = getDiffDate(dates[0], dates[1])
}
</script>
<style lang="less" scoped>
.item {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 7px 20px;
  box-sizing: border-box;
}
.position {
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
.time_select {
  justify-content: space-between;
  // padding: 4px 20px;
  .time_item {
    // width: 90px;

    width: 84px;
    .time_text {
      font-size: 9px;
      color: #a0a0a0;
      .time_main {
        font-size: 10px;
      }
    }
  }
  .middle_text {
    font-size: 8px;
  }
}
.filler_box {
  padding: 0px 20px;
  box-sizing: border-box;
  .filler {
    padding: 8px 0;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    justify-content: space-between;
    color: #a0a0a0;
    font-size: 10px;
    border-bottom: var(--van-border-gray);
    .filler_item {
      width: 84px;
    }
  }
}
</style>
