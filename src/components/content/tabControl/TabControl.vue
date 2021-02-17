<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,key) in titles"
         :key="key"
         :class="{active: key === currentIndex}"
         :style="outStyle"
         @click="onclick(key)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    },
    outStyle: {
      type: Object,
      default(){
        return {}
      }
    },
    // currentIndex: {
    //   type: Number,
    //   default: 0
    // }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    onclick(index){
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
  padding: 10px;
}
.tab-control-item.active{
  color: deeppink;
}
.tab-control-item.active span{
  padding: 5px;
  border-bottom: 3px solid deeppink;
}
</style>