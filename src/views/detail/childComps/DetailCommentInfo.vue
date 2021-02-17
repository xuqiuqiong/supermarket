<template>
  <div class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评论</div>
      <div class="header-more">更多</div>
    </div>
    <div class="comment-list"  v-if="Object.keys(commentInfo).length !== 0">
      <div class="content-list">
        <div class="user-info">
          <img class="user-icon" :src="commentInfo.user.avatar" alt="">
          <span class="user-name">{{commentInfo.user.uname}}</span>
        </div>
      </div>
      <div class="content-info">
        <div class="text">{{commentInfo.content}}</div>
        <div class="other-info">
          <span class="date">{{commentInfo.created | dateFormat}}</span>
          <span class="style-info">{{commentInfo.style}}</span>
        </div>
        <div class="image-info" v-show="commentInfo.images">
          <img v-for="(image,index) in commentInfo.images"
               :key="index"
               :src="image"
               @load="imgLoad"/>
        </div>
        <div v-show="commentInfo.canExplain">{{commentInfo.explain}}</div>
      </div>
    </div>
    <bottom-box-shadow></bottom-box-shadow>
  </div>
</template>

<script>
  import BottomBoxShadow from "../../../components/common/border/BottomBoxShadow";

  export default {
    name: 'DetailCommentInfo',
    components:{
      BottomBoxShadow
    },
    props: {
      commentInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      dateFormat(value){
        let result = new Date(value * 1000);
        return result.getFullYear() +'-' + result.getMonth() + '-' + result.getDay()
      }
    },
    methods: {
      imgLoad(){
        this.bus.$emit("imgLoad")
      }
    }
  }
</script>

<style scoped>
.info-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin: 0px 5px 10px 5px;
  border-bottom: 1px solid #eee;
}
.header-title{
  padding: 0px 10px;
}
.header-more{
  padding: 0px 10px;
  font-size: 12px;
}
.user-info{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.user-icon{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0px 10px;
}
.user-name{
  vertical-align: center;
  font-size: 13px;
}
.content-info{
  padding: 0px 10px;
  color: #aaa;
  margin-bottom: 10px;
}
.content-info .text{
  margin-bottom: 5px;
}
.other-info .date{
  margin-right: 10px;
}
.image-info{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.image-info img{
  /*flex: 0.25;*/
  /*width: 100%;*/
  width: calc((100% - 50px) / 4);
  margin-left: 10px;
}
</style>