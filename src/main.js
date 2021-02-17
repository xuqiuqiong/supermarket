import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }).then(res => {
//   console.log("test");
//   console.log(res);
// })

// axios.all([
//     axios({
//       url: "http://123.207.32.32:8000/home/multidata",
// }), axios(
//     {
//         baseURL: "http://123.207.32.32:8000",
//       url: "http://123.207.32.32:8000/home/data",
//       params: {
//         type: "pop",
//         page: 1
//       }
//     }
// )]).then(([res1,res2])=>{
//   console.log(res1);
//   console.log(res2);
// })
// const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout: 5000
// })
//
// instance({
//     url: '/home/multidata'
// })
//
// instance({
//     url: '/home/data',
//     params:{
//         type: 'pop',
//         page: 2
//     }
// })


// import require from './network/require'
// require({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })