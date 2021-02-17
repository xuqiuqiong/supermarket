<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "navbar"
}
</script>

<style scoped>
.nav-bar{
  position: fixed;
  line-height: 44px;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  display: flex;
  text-align: center;
  z-index: 9999;
}
.left,.right{
  width: 60px;
}
.center{
  flex:1;
}
</style>