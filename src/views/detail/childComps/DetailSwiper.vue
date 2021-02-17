<template>
  <div>
    <Swiper class="detail-swiper">
      <Swiper-item v-for="(item,key) in deImgList" :key="key">
        <img :src="item" alt="" @load="imgLoad"/>
      </Swiper-item>
    </Swiper>
  </div>
</template>
<script>
import Swiper from "../../../components/swiper/Swiper";
import SwiperItem from "../../../components/swiper/SwiperItem";
export default {
name: "DetailSwiper",
  props: {
    deImgList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods:{
    imgLoad(){
      // if(index === this.deImgList.length -1){
      //   this.bus.$emit('swiperImgLoad');
      // }
    }
  },
  components: {SwiperItem, Swiper}
}
</script>

<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>