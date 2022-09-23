<template>
  <div class="tags">
    <template v-for="item in tags">
      <div
        class="tagItem"
        v-if="item?.tagText?.text"
        :style="{
          color: item?.tagText?.color,
          backgroundColor: item?.tagText?.background?.color
        }"
      >
        {{ item?.tagText?.text }}
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps(['tags'])
</script>
<style lang="less" scoped>
.tags {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 5px 0;
  .tagItem {
    padding: 2px 3px;
    border-radius: 1px;
    font-size: 10px;
    margin-right: 4px;
  }
}
</style>
