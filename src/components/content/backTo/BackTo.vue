<template>
  <div class="back-to">
    <span class="iconfont">&#xe716;</span>
  </div>
</template>

<script>
export default {
name: "BackTo"
}
</script>

<style scoped>
.back-to{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: fixed;
  bottom: 55px;
  right: 10px;
  background-color: #fff;
  color: deeppink;
  line-height: 40px;
  border: 1px solid #eee;
  text-align: center;
  font-size: 20px;
}
.iconfont{
  font-size: 20px;
  font-weight: bold;
}
</style>