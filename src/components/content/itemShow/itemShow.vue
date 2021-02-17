<template>
  <div class="item-list">
    <div class="item" v-for="(item,index) in itemList"
         :key="index" >{{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: "itemShow",
  props: {
    itemList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .item-list{
    display: flex;
    justify-content: space-between;
  }
  .item{
  }
</style>