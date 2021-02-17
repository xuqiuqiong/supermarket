<template>
  <div>
    <Swiper>
      <Swiper-item v-for="(item,key) in banners" :key="key">
        <a :href="item.link" >
          <img :src="item.image" alt="" @load="imgLoad"/>
        </a>
      </Swiper-item>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/swiper/index'
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad(){
      if(!this.isLoad){
        this.isLoad = true
        this.bus.$emit('swiperImgLoad');
      }
    }
  }
}
</script>

<style scoped>

</style>