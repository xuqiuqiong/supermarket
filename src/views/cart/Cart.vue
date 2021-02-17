<template>
  <div class="cart">
    <navbar class="nav">
      <div slot="center">购物车 ({{totalCount}})</div>
    </navbar>
    <div class="cart-content">
      <cart-list :item-list="$store.state.cartList" />
    </div>
  </div>
</template>

<script>
// import CheckBox from '../../components/common/checkbox/CheckBox.vue';
import Navbar from "../../components/common/navbar/navbar";
import CartList from "./cartComps/CartList"
export default {
name: "Cart",
  components: {
    Navbar,
    CartList
    // CheckBox
    },
  computed: {
    totalCount(){
        return this.$store.state.cartList.filter(item => item.isChecked).length
        // return 0
    }
  }
}
</script>

<style scoped>
    .nav{
        background: deeppink;
        color: #fff
    }
    .cart-content{
        padding-top: 44px;
        padding-bottom: 49px
    }
</style>