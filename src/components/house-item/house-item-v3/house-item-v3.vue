<template>
  <div class="house-item-v9">
    <div class="inner">
      <img :src="props.data.image.url" />
      <div class="content">
        <div class="text0">
          {{ props.data.location }}
        </div>
        <div class="text1">
          {{ props.data.houseName }}
        </div>
        <div class="text2">
          {{ props.data.summaryText }}
        </div>
        <div class="bottom">
          <div class="left">
            ¥{{ props.data.finalPrice }}
          </div>
          <div class="middle">
            ¥{{ props.data.productPrice }}
          </div>
          <div class="right">
            已减{{
              props.data.productPrice -
              props.data.finalPrice
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
</script>
<style lang="less" scoped>
.house-item-v9 {
  width: 50%;
  padding: 4px;
  padding-bottom: 0;
  box-sizing: border-box;
  .inner {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    img {
      border-radius: 6px;
      width: 100%;
      flex: 1;
    }
    .content {
      padding: 8px 5px 0px 5px;
      // padding-bottom: 0px;
      width: 100%;
      box-sizing: border-box;
      .text0 {
        color: #808080;
        font-size: 10px;
        padding-bottom: 5px;
      }
      .text1 {
        font-size: 12px;
        padding-bottom: 3px;
      }
      .text2 {
        font-size: 11px;
        color: #808080;
        padding-bottom: 6px;
      }
      .bottom {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        .left {
          color: #ff9854;
          font-size: 17px;
        }
        .middle {
          padding: 0 5px;
          font-size: 12px;
          text-decoration: line-through;
          color: #808080;
        }
        .right {
          padding: 3px 5px;
          border-radius: 20px;
          font-size: 7px;
          background-color: #ff9854;
          color: #fff;
        }
      }
    }
  }
}
</style>
