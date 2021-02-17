<template>
  <div class="shop" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" />
      <span class="title">{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shopInfo.sells | sellCount}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shopInfo.goods}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop"><span>进店逛逛</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props:{
    shopInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    sellCount(value){
      let result = value;
      if(value>10000){
        result = (value/10000).toFixed(1) + '万'
      }
      return result
    }
  }
}
</script>

<style scoped>
  .shop{
    box-shadow: 3px 2px 2px #eee;
    padding: 20px 0px;
  }
  .shop-top{
    display: flex;
    align-items: center;
    margin: 0px 10px;
    font-size: 18px;
  }
  .shop-top img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .shop-middle{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  .shop-middle-item{
    flex: 1;
  }
  .shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    color: #333;
  }
  .shop-middle-right{
    border-left: 2px solid #aaa;
  }
  .shop-middle-right table{
    width: 100%;
    padding-left: 20px;
  }
  .shop-middle-right td{
    padding: 0px 5px;
    font-size: 15px;
    line-height: 25px;
  }
  .info-goods,info-sells{
    text-align: center;
  }
  .sells-count,.goods-count{
    font-size: 22px;
    margin-bottom: 10px;
  }
  .shop-middle-right .score{
    color: #5ea732;
  }
  .shop-middle-right .score-better{
    color: #f13e3a;
  }
  .shop-middle-right .better span{
    background-color: #5ea732;
    color: #ffffff;
    text-align: center;
  }
  .shop-middle-right .better-more span{
    background-color: #f13a3a;
    color: #ffffff;
  }
  .shop-bottom{
    text-align: center;
    margin-top: 25px;
  }
  .enter-shop span{
    background-color: #eeeeee;
    padding: 5px 40px;
    border-radius: 20px;
  }
</style>