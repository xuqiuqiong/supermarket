<template>
  <div id="app">
<!--    <div>{{result}}</div>-->
<!--    详情页不保持keep alive-->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>


import Tabbar from "./components/common/tabbar/tabbar";
// import axios from "axios";
// require("./assets/css/common.css")
export default {
  name: 'App',
  data(){
    return{
      result: ''
    }
  },
  created() {
    // axios({
    //   url: 'http://123.207.32.32:8000/home/multidata',
    // }).then(res=>{
    //   this.result = res;
    // })
  },
  components: {
    Tabbar

  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
