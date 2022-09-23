<template>
  <div class="potsition">
    <div class="left">{{ address.address }}</div>
    <div class="right">地图·周边</div>
  </div>
</template>

<script setup>
defineProps(['address'])
</script>
<style lang="less" scoped>
.potsition {
  margin: 5px 0;
  width: 100%;
  padding: 7px 10px;
  box-sizing: border-box;
  background-color: #f1f1f1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 12px;
  justify-content: space-between;
  .right {
    font-weight: 500;
  }
}
</style>
