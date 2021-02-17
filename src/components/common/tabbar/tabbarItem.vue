<template>
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
<!--    <div v-if="isActive"><slot name="item-icon"></slot></div>-->
<!--    <div v-else><slot name="item-icon-active"></slot></div>-->
    <div :class="{active:isActive}"><slot name="item-icon"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props:{
    path: String,
    activeColor: {
      type:String,
      default: 'red'
    },
    activeClass:{
      type: String,
      default: 'active'
    }
  },
  data(){
    return {
      // isActive: false
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      // console.log(this.activeColor);
      return this.isActive ? {color: this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }

}
</script>

<style>
.tab-bar-item{
  flex: 1;
}
.tab-bar-item img{
  height: 24px;
}
.tab-bar-item.active{
  color: pink;
}
.tab-bar-item.active img{
  border: 1px solid red;
}
</style>