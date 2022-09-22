<template>
  <div class="house-item-v9">
    <div class="inner">
      <img :src="props.data.image.url" />
      <div class="content">
        <div class="text1">
          {{ props.data.summaryText }}
        </div>
        <div class="text2">
          {{ props.data.houseName }}
        </div>
        <div class="bottom">
          <div class="left">
            <van-rate
              v-model="rate"
              readonly
              allow-half
              size="10px"
            />
          </div>
          <div class="right">
            ¥{{ props.data.productPrice }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
const props = defineProps(['data'])
// const rate = ref(4.3)
const rate = computed(
  () => props.data?.commentScore * 1 ?? 0
)
</script>
<style lang="less" scoped>
.house-item-v9 {
  width: 50%;
  padding: 4px;
  padding-bottom: 0;
  box-sizing: border-box;
  .inner {
    width: 100%;
    position: relative;
    img {
      border-radius: 6px;
      width: 100%;
      // height: 100%;
    }
    .content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      // height: 100%;
      color: white;
      padding: 10px;
      box-sizing: border-box;
      .text1 {
        font-size: 11px;
        padding-bottom: 5px;
      }
      .text2 {
        font-size: 9px;
        font-weight: 500;
      }
      .bottom {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        .right {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
