<template>
  <div class="search-bar">
    <div class="inner">
      <div class="time">
        <div class="line">
          <div class="text">住</div>
          <div class="timeInner">{{ startDateStr }}</div>
        </div>
        <div class="line">
          <div class="text">离</div>
          <div class="timeInner">{{ endDateStr }}</div>
        </div>
      </div>
      <input
        class="content"
        placeholder="关键字/位置/民宿"
      />
      <van-icon name="search" size="20" />
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/store/modules/main'
import { formatMonthDay } from '@/utils/format_date'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

// 获取用户选择的居住时间并格式化
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() =>
  formatMonthDay(startDate.value, 'MM.DD')
)
const endDateStr = computed(() =>
  formatMonthDay(endDate.value, 'MM.DD')
)
</script>
<style lang="less" scoped>
.search-bar {
  z-index: 10;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px 10px;
  box-sizing: border-box;
  .inner {
    background-color: #f1f1f1;
    border-radius: 8px;
    // height: 40px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 7px;
    box-sizing: border-box;
    .time {
      font-size: 8px;
      .line {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        .text {
          color: #797979;
          padding-right: 3px;
        }
      }
    }
  }
  input {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    padding: 0 15px;
    flex: 1;
    font-size: 15px;
  }
}
</style>
