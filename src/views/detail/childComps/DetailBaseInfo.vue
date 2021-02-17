<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="title">{{goods.title}}</div>
    <div>
      <span class="price">￥{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount"
            :style="{backgroundColor: goods.discountBgColor}"
            v-if="goods.discountDesc">{{goods.discountDesc}}</span>
    </div>
    <item-show class="other-info" v-if="goods.columns"
               :item-list="[goods.columns[0],goods.columns[1],goods.services[goods.services.length - 1].name]" />
    <div class="info-service" v-if="goods.services">
      <span v-for="index in (goods.services.length - 1)"
           :key="index" class="service-item">
        <img :src="goods.services[index-1].icon" class="icon" />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import ItemShow from "components/content/itemShow/itemShow";
export default {
  name: "DetailBaseInfo",
  components: {
    ItemShow
  },
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info{
  padding: 10px 5px 15px 5px;
  box-shadow:4px 2px 3px #eeeeee;
}
.title{
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 25px;
}
.price{
  color: deeppink;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px 0px;
}
.old-price{
  text-decoration: line-through;
}
.discount{
  color: #ffffff;
  border-radius: 6px;
  vertical-align: top;
  margin-top: -3px;
  font-size: 9px;
  padding: 2px;
  margin-left: 10px;
}
.other-info{
  margin-top: 10px;
}
.info-service{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.info-service .service-item{
  font-size: 15px
}
.service-item .icon{
  width: 14px;
  position: relative;

}
.service-item .title{
  vertical-align: center;
}
</style>