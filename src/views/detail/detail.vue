<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <DetailSwiper
        :dataList="
          mainPart.topModule.housePicture.housePics
        "
      ></DetailSwiper>
      <div class="info" v-if="mainPart">
        <Detail02Title
          :title="mainPart.topModule.houseName"
        ></Detail02Title>
        <Detail03Tags
          :tags="mainPart.topModule.houseTags"
        ></Detail03Tags>
        <Detail04Comment
          :commentBrief="mainPart.topModule.commentBrief"
        ></Detail04Comment>
        <Detail05Position
          :address="mainPart.topModule.nearByPosition"
        ></Detail05Position>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { getDetailInfos } from '@/services'
import { computed, ref } from 'vue'
import DetailSwiper from './cpns/detail-01-swiper.vue'
import Detail02Title from './cpns/detail-02-title.vue'
import Detail03Tags from './cpns/detail-03-tags.vue'
import Detail04Comment from './cpns/detail-04-comment.vue'
import Detail05Position from './cpns/detail-05-position.vue'

const route = useRoute()
const router = useRouter()
const id = route.params.id

const onClickLeft = () => router.back()

// 详情页面获取数据使用另一种数据保存方式, 将数据保存到页面中, 而不是store中
const detailInfo = ref({})

getDetailInfos(id).then((res) => {
  detailInfo.value = res.data
})

// 对于复杂数据, 使用计算属性解构出部分数据
const mainPart = computed(() => detailInfo.value.mainPart)
</script>
<style lang="less" scoped>
.info {
  padding: 10px 15px 0;
  box-sizing: border-box;
}
</style>
