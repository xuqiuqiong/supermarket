<template>
  <div>
    <navbar class="detail-nav">
      <go-back slot="left"/>
      <tab-control slot="center"
                   :titles="titles"
                   :out-style="outStyle" @tabClick="itemClick"></tab-control>
    </navbar>
  </div>
</template>

<script>
import Navbar from "../../../components/common/navbar/navbar";
import TabControl from "../../../components/content/tabControl/TabControl";
import GoBack from "../../../components/content/goBack/GoBack";
export default {
  name: "DetailNav",
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    },
    // currentIndex: {
    //   type: Number,
    //   default: 0
    // }
  },
  data(){
    return {
      outStyle: {
        padding: 0,
      },
      currentIndex: 0
    }
  },
  components: {
    GoBack,
    TabControl,
    Navbar
  },
  methods:{
    itemClick(index){
      // this.currentIndex = index;
      this.$emit('titleClick',index);
    }
  }
}
</script>

<style scoped>
  .detail-nav{
    background-color: #fff;
  }
</style>