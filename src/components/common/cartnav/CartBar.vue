<template>
  <div class="cart-nav">
    <div class="cart-nav-item">
      <div class="icon"><span class="iconfont">&#xe639;</span></div>
      <div class="text">客服</div>
    </div>
    <div class="cart-nav-item">
      <div class="icon"><span class="iconfont">&#xe651;</span></div>
      <div class="text">店铺</div>
    </div>
    <div class="cart-nav-item">
      <div class="icon"><span class="iconfont">&#xe609;</span></div>
      <div class="text">收藏</div>
    </div>
  </div>
</template>

<script>
export default {
name: "CartBar"
}
</script>

<style scoped>
  .cart-nav{
    display: flex;
    line-height: 20px;
  }
  .cart-nav-item{
    flex: 1;
  }
  .icon{
    height: 20px;
  }
</style>