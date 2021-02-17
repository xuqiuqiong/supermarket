<template>
  <div class="cart">
    <div class="left">
      <cart-bar />
    </div>
    <div class="center" @click="addCart">加入购物车</div>
    <div class="right">购买</div>
  </div>
</template>

<script>
import CartBar from "../cartnav/CartBar";
export default {
  name: "Cart",
  components: {CartBar},
  methods: {
    addCart(){
      this.$emit('addToCart');
    }
  }
}
</script>

<style scoped>
.cart{
  display: flex;
  height: 49px;
  line-height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #ffffff;
  text-align: center;
}
.left{
  flex: 1;
}
.center{
  width: 100px;
  background-color: deeppink;
  color: #ffffff;
  font-size: 15px;
}
.right{
  width: 100px;
  background-color: orange;
  color: #ffffff;
  font-size: 15px;
}
</style>