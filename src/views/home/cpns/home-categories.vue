<template>
  <div class="home_categories">
    <div class="content">
      <view
        class="itemBox"
        v-for="item in categories"
        key="id"
      >
        <img :src="item.pictureUrl" alt="" />
        <div class="text">{{ item.title }}</div>
      </view>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from '@/store/modules/home'
import { storeToRefs } from 'pinia'
const home = useHomeStore()
const { categories } = storeToRefs(home)
</script>

<style lang="less" scoped>
.home_categories {
  width: 100%;
  margin-top: 10px;
  padding: 5px 20px;
  box-sizing: border-box;
  .content {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .itemBox {
      flex-shrink: 0;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      width: 50px;
      margin-right: 10px;
    }
    img {
      width: 40px;
      height: 40px;
    }
    .text {
      font-size: 5px;
    }
  }
}
</style>
