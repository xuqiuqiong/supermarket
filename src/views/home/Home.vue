<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <TabControl class="tab-control tab-control-fix"
                @tabClick="tabClick"
                :titles="['流行','新款','精选']"
                ref="tabControl1"
                v-show="isTabFixed"/>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scrollTo="scrollTo"
            :pull-up-load="true"
            @pullingUp="loadMore" >
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommends="recommends"></HomeRecommend>
      <TabControl class="tab-control"
                  @tabClick="tabClick"
                  :titles="['流行','新款','精选']"
                  ref="tabControl2" />
      <GoodsList :goods-list="showGoods"></GoodsList>
    </scroll>
    <BackTo @click.native="backToTop" v-show="showBackTop"></BackTo>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";

import Navbar from "components/common/navbar/navbar";
import TabControl from "components/content/tabControl/TabControl";

import {getHomeMultidata} from '../../network/home'
import {getHomeGoods} from "network/home";
import 'assets/css/normalize.css'
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/scroll/Scroll";
import BackTo from "../../components/content/backTo/BackTo";
import {itemListener} from "../../common/mixin";

export default {
  name: "Home",
  components: {
    BackTo,
    Scroll,
    GoodsList,
    HomeRecommend,
    HomeSwiper,
    Navbar,
    TabControl,
  },
  data(){
    return {
      banners: [],
      recommends:[],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      showBackTop: false,
      isTabFixed: false,
      tabOffsetTop: 0,
      saveY: 0
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  destroyed() {
    this.bus.$off("imgLoad");
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY();
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  mounted(){
    // const refresh = debounce(this.$refs.scroll.refresh);
    // this.bus.$on('imgLoad',()=>{
    //   refresh();
    // })
    this.bus.$on('swiperImgLoad',()=>{
      if(this.$refs.tabControl2){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }
    });
    this.tabClick(0)
  },
  mixins: [
    itemListener
  ],
  methods: {
    tabClick(index){
      switch (index){
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break
        case 2:
          this.currentType = 'sell';
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    scrollTo(position){
      this.showBackTop = (-position.y) > 500;
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    backToTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    loadMore(){
      this.getHomeGoods(this.currentType);
    },
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){
      let page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      })
    }
  }
}
</script>

<style scoped>
#home{
  /*padding: 44px 0px 49px 0px;*/
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: deeppink;
}
/*.tab-control{*/
/*  position: sticky;*/
/*  top: 44px;*/
/*}*/
.tab-control-fix{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 999;
}
/*.content{*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*  margin-top: 44px;*/
/*}*/
.content{
  position: fixed;
  top: 44px;
  bottom: 49px;
  width: 100%;
}
</style>