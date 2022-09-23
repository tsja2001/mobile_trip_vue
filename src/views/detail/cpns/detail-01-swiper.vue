<template>
  <div class="swiper">
    <van-swipe>
      <!-- 循环图片 -->
      <template
        class="my-swipe"
        v-for="item in dataList"
        v-key="index"
      >
        <van-swipe-item class="van-swipe-item">
          <img class="imageItem" :src="item.url" />
        </van-swipe-item>
      </template>
      <!-- 自定义底部指示器 -->
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <span
            v-for="(value, key, index) in swipeGroup"
            :key="index"
            class="itemName"
            :class="{
              active:
                dataList[active]?.enumPictureCategory == key
            }"
          >
            {{ getName(value[0].title) }}
            <span
              v-if="
                dataList[active]?.enumPictureCategory == key
              "
              >{{ getIndex(dataList[active]) + 1 }}/{{
                value.length
              }}</span
            >
          </span>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps(['dataList'])

const swipeGroup = {}

// 将图片分组
props.dataList.forEach((item) => {
  let currentGroup =
    swipeGroup[item.enumPictureCategory] ?? []

  currentGroup.push(item)

  swipeGroup[item.enumPictureCategory] = currentGroup
})

const getName = (name) =>
  name.replace('：', '').replace('【', '').replace('】', '')

const getIndex = (item) => {
  const currentGroup = swipeGroup[item.enumPictureCategory]

  return currentGroup.findIndex((data) => data == item)
}
</script>
<style lang="less" scoped>
.my-swipe,
.van-swipe-item {
  height: 250px;
  color: #fff;
  .imageItem {
    width: 100%;
    height: 250px;
    // margin-top: -300px;
  }
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  .itemName {
    margin-left: 5px;
    &.active {
      background-color: #fff;
      color: #000;
      padding: 0 4px;
      border-radius: 2px;
    }
  }
}
</style>
