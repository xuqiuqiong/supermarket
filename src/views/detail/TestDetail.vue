<template>
  <div id="detail">
    <detail-nav :titles="titles"></detail-nav>
    <!--    <scroll class="content" ref="scroll"-->
    <!--            :probe-type="3"-->
    <!--            @scrollTo="scrollTo"-->
    <!--            :pull-up-load="true"-->
    <!--            @pullingUp="loadMore" >-->
    <detail-swiper :de-img-list="deImgList"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop-info="shopInfo" />
    <detail-img :detail-img-list="detailImgList"></detail-img>

    <!--    商品参数-->
    <detail-params-info :item-params="itemParams" ref="itemparams"></detail-params-info>

    <!--   用户评论 -->
    <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>

    <!--    推荐-->
    <goods-list :goods-list="recommendList" ref="recommend"></goods-list>
    <!--    <scroll class="content" ref="scroll"-->
    <!--                  :probe-type="3"-->
    <!--                  @scrollTo="scrollTo"-->
    <!--                  :pull-up-load="true"-->
    <!--                  @pullingUp="loadMore" >-->

    <!--    </Scroll>-->
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
// import Scroll from "../../components/scroll/Scroll";
// import {debounce} from "../../common/util";
// import {itemListener} from "../../common/mixin";
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
    }
  },
  created(){
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
  },
  components: {
    // Scroll,
    GoodsList,
    DetailCommentInfo,
    DetailParamsInfo,
    DetailImg,
    DetailShopInfo,
    DetailSwiper,
    DetailNav,
    DetailBaseInfo
  },
  mounted() {
    // const refresh1 = debounce(()=>{
    //   this.itemOffset.push(0);
    //   this.itemOffset.push(this.$refs.itemparams.$el.offsetTop);
    //   this.itemOffset.push(this.$refs.comment.$el.offsetTop);
    //   this.itemOffset.push(this.$refs.recommend.$el.offsetTop);
    // })
    // const refresh = debounce(this.$refs.scroll.refresh)
    // this.bus.$on("swiperImgLoad",()=>{
    //   refresh()
    // })
  },
  // mixins: [
  //   itemListener
  // ],
  methods: {
    getDetail(){
      getDetail(this.iid).then(res =>{
        this.result = res.data.result
        let data = this.result
        console.log(data);
        this.deImgList = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.detailImgList = data.detailInfo
        this.itemParams = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate;
        }
        getRcommend().then(res => {
          this.recommendList = res.data.data.list;
        })
      })
    },
    scrollTo(position){
      for(let i = 0; i < this.itemOffset.length-1; i++){
        if(-position.y > this.itemOffset[i]){
          this.currentIndex = i;
        }
      }
    },
    loadMore(){

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