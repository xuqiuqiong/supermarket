<template>
<!--    <img @load="imgLoad" v-lazy="showImage" :key="showImage" alt="" />-->
  <div class="goods-item" @click="itemClick">
    <img :src="showImg" @load="imgLoad"/>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="iconfont">&#xe609;</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default(){
        return []
      }
    }
  },
  computed:{
    showImg(){
      return this.goodsItem.image || this.goodsItem.show.img
    },
  },
  methods: {
    itemClick(){
      //1、动态路由
      // this.$router.push('/detail?iid=' + this.goodsItem.iid);
      this.$router.push("/detail/"+ this.getGoodsId());
      // 2、query
      // let iid = this.goodsItem.iid;
      // this.$router.push({
      //   path: '/detail',
      //   query: {
      //     iid: this.goodsItem.iid
      //   }
      // })
    },
    imgLoad(){
      this.bus.$emit("imgLoad");
    },
    getGoodsId(){
      return this.goodsItem.iid || this.goodsItem.item_id
    }
  }
}
</script>

<style scoped>
  .goods-item{
    width: 48%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 4px
  }
  .goods-info{
    margin: 5px 0;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
</style>