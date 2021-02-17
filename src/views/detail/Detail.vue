<template>
  <div id="detail">
    <detail-nav :titles="titles" ref="nav"
                @titleClick="titleClick"></detail-nav>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scrollTo="scrollTo"
            :pull-up-load="true">
<!--            @pullingUp="loadMore" -->
      <detail-swiper :de-img-list="deImgList"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop-info="shopInfo" />
      <detail-img :detail-img-list="detailImgList" @detailImgLoad="detailImgLoad"></detail-img>

      <!--    商品参数-->
      <detail-params-info :item-params="itemParams" ref="itemparams"></detail-params-info>

      <!--   用户评论 -->
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>

      <!--    推荐-->
      <goods-list :goods-list="recommendList" ref="recommend"></goods-list>
    </Scroll>
    <cart @addToCart="addToCart"></cart>
    <back-to @click.native="backToTop" v-show="showBackTop" />
  </div>
</template>

<script>
import DetailNav from "./childComps/DetailNav";
import {getDetail} from "network/detail";
import DetailSwiper from "./childComps/DetailSwiper";

import {Goods,ShopInfo,GoodsParam} from "network/detail"
import {getRcommend} from "../../network/recommend";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailImg from "./childComps/DetailImg";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/scroll/Scroll";
import {debounce} from "../../common/util";
import {itemListener,backToTop} from "../../common/mixin";
import Cart from 'components/common/cart/Cart'
import BackTo from "../../components/content/backTo/BackTo";
export default {
  name: "Detail",
  data(){
    return {
      iid: null,
      titles: ['商品','参数','评论','推荐'],
      result: null,
      deImgList: [],
      goods: {},
      shopInfo: {},
      detailImgList: {},
      itemParams: {},
      commentInfo: {},
      recommendList: [],
      itemOffset:[],
      currentIndex: 0,
      showBackTop: false
    }
  },
  created(){
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
  },
  destroyed(){
    this.bus.$off("imgLoad");
  },
  components: {
    BackTo,
    Scroll,
    GoodsList,
    DetailCommentInfo,
    DetailParamsInfo,
    DetailImg,
    DetailShopInfo,
    DetailSwiper,
    DetailNav,
    DetailBaseInfo,
    Cart
  },
  mounted() {
    this.getItemOffset = debounce(()=>{
      this.itemOffset = []
      this.itemOffset.push(0);
      this.itemOffset.push(this.$refs.itemparams.$el.offsetTop);
      this.itemOffset.push(this.$refs.comment.$el.offsetTop);
      this.itemOffset.push(this.$refs.recommend.$el.offsetTop);
      this.itemOffset.push(Number.MAX_VALUE);
      console.log(this.itemOffset);
    },200)
    this.bus.$on('tabClick',index => {
      this.$refs.scroll.scrollTo(this.itemOffset[index]);
    })
    // this.detailImgLoad();
  },
  mixins: [
    itemListener,
    backToTop
  ],
  methods: {
    detailImgLoad(){
      this.getItemOffset()
    },
    getDetail(){
      getDetail(this.iid).then(res =>{
        this.result = res.data.result
        let data = this.result
        this.deImgList = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.detailImgList = data.detailInfo
        this.itemParams = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0];
        }
        console.log(data);
        getRcommend().then(res => {
          this.recommendList = res.data.data.list;
        })
      })
    },
    scrollTo(position){
      const positionY = -position.y
      this.showBackTop = (-position.y) > 500;
      for(let i = 0; i < this.itemOffset.length; i++){
        if(this.currentIndex !== i){
          if((positionY >=this.itemOffset[i]) && (positionY < this.itemOffset[i+1])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
      }
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.itemOffset[index],100);
    },
    addToCart(){
      const product = {}
      product.iid = this.iid
      product.image = this.deImgList[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.price
      // console.log(this.$store);
      //store的mutation调用的方法用commit
      // this.$store.commit('addCart',product)
    //  store 的actions 调用dispatch
      this.$store.dispatch('addCart',product);
    }
  }
}
</script>

<style scoped>
#detail{
  padding-top: 44px;
  padding-bottom: 49px;
}
.content{
  height: calc(100% - 44px);
  position: fixed;
  width: 100%;
  top: 44px;
}
</style>