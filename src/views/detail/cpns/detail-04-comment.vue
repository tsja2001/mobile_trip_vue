<template>
  <div class="comment" v-if="commentBrief">
    <div class="left">
      <div class="score">{{ commentBrief?.overall }}</div>
      <div class="scoreTitle">
        {{ commentBrief?.scoreTitle }}
      </div>
      <div class="commentBrief">
        {{ commentBrief?.commentBrief }}
      </div>
    </div>
    <div class="right">
      <div class="totalCount">
        {{ commentBrief?.totalCount }}条评论
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['commentBrief'])
</script>
<style lang="less" scoped>
.comment {
  margin: 5px 0;
  width: 100%;
  padding: 7px 10px;
  box-sizing: border-box;
  background-color: #f1f1f1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 12px;
  .left {
    display: flex;
    flex-flow: row nowrap;
    // align-items: flex-end;
    align-items: center;

    .score {
      font-size: 20px;
      font-weight: 500;
      margin-top: -2px;
    }
    .scoreTitle {
      padding-left: 5px;
      font-weight: 500;
    }
    .commentBrief {
      padding-left: 5px;
      color: #737373;
    }
  }
  .right {
    color: var(--primary-color)
    // .totalCount {
    // }
  }
  justify-content: space-between;
}
</style>
