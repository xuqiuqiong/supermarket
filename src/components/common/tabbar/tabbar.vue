<template>
  <div id="tab-bar">
    <tabbar-item path="/home" activeClass="orange">
<!--      <img slot="item-icon" src=""/>-->
<!--      <img slot="item-icon-active" src=""/>-->
      <div slot="item-icon" class="item-icon">
        <span class="iconfont">&#xe613;</span>
      </div>
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/categroy" activeClass="red">
<!--      <img slot="item-icon" src=""/>-->
<!--      <img slot="item-icon-active" src=""/>-->
      <div slot="item-icon" class="item-icon">
        <span class="iconfont">&#xe60e;</span>
      </div>
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart" activeClass="red">
<!--      <img slot="item-icon" src=""/>-->
<!--      <img slot="item-icon-active" src=""/>-->
      <div slot="item-icon" class="item-icon">
        <span class="iconfont">&#xe623;</span>
      </div>
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile" activeClass="red">
<!--      <img slot="item-icon" src=""/>-->
<!--      <img slot="item-icon-active" src=""/>-->
      <div slot="item-icon" class="item-icon">
        <span class="iconfont">&#xe60a;</span>
      </div>
      <div slot="item-text">我的</div>
    </tabbar-item>
  </div>
</template>

<script>
import TabbarItem from "./tabbarItem";
export default {
name: "tabbar",
  components: {TabbarItem}
}
</script>

<style scoped>
#tab-bar{
  height: 49px;
  display: flex;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 1px -1px 1px rgba(252,252,252,0.2);
  background-color: #f6f6f6;
}
.tab-bar-item{
  flex: 1;
}
.tab-bar-item img{
  height: 24px;
}
.item-icon{
  margin-top: 5px;
  margin-bottom: 3px;
}
.iconfont{
  font-size: 24px;
}
</style>