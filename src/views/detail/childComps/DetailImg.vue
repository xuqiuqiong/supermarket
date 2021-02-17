<template>
  <div v-if="Object.keys(detailImgList).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailImgList.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="detail-img" v-for="(item,index) in detailImgList.detailImage" :key="index">
      <div class="title">{{item.key}}</div>
      <img v-for="(imgsrc,index) in item.list"
           :key="index"
           :src="imgsrc"
           @load="imgLoad"/>
    </div>
    <bottom-box-shadow></bottom-box-shadow>
  </div>
</template>

<script>
import BottomBoxShadow from "../../../components/common/border/BottomBoxShadow";
export default {
  name: "DetailImg",
  components: {BottomBoxShadow},
  props: {
    detailImgList:{
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      this.$emit("detailImgLoad");
    }
  }
}
</script>

<style scoped>
  .desc{
    padding: 10px;
    font-size: 16px;
  }
  .detail-img .title{
    padding: 20px 10px;
    font-size: 15px;
  }
  .detail-img img{
    width: 100%;
  }
  .goods-info{
    padding: 20px 0px;
  }
  .info-desc{
    padding: 0 10px;
  }
  .info-desc .start, .info-desc .end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a3;
    position: relative;
  }
  .info-desc .start{
    float: left;
  }
  .info-desc .end{
    float: right;
  }
  .info-desc .start::before, .info-desc .end::after{
    position: absolute;
    content: "  ";
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .info-desc .end::after{
    right: 0;
  }
  .info-desc .desc{
    padding: 15px 0px;
    font-size: 14px;
  }
</style>