<template>
    <div class="cart-item">
        <div>{{item}}</div>
        <div class="check-box">
        <check-box :is-checked="itemInfo.isChecked" @click.native="checkBox"/>
        </div>
        <div class="picture"><img :src="itemInfo.image" /></div>
        <div class="info">
            <div class="title">{{itemInfo.title}}</div>
            <div>
                <span class="price">{{itemInfo.price}}</span>
                <span class="count">{{itemInfo.count}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import CheckBox from "components/common/checkbox/CheckBox"
export default {
    name: "CartListItem",
    components: {
        CheckBox
    },
    props: {
        itemInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        checkBox(){
            this.itemInfo.isChecked = !this.itemInfo.isChecked            
        }
    }
}
</script>

<style scoped>
    .cart-item {
      display: flex;
      vertical-align: center;
    }
    .cart-item .check-box{
      width: 40px;
    }
    .cart-item .picture{
        width: 60px;
    }
    .cart-item .picture img{
        width: 60px;
    }
    .cart-item .info{
      margin-left: 10px;
    }
</style>