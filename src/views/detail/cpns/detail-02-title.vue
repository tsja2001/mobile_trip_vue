<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script setup>
defineProps(['title'])
</script>
<style lang="less" scoped>
.title {
  font-size: 17px;
  font-weight: 600;
  padding: 5px 0;
}
</style>
