<template>
  <div class="recommend">
      <div class="reco-item" v-for="(item,key) in recommends" :key="key">
        <a :href="item.link">
          <img :src="item.image" />
          <div>{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0px;
  border-bottom: 8px solid #eee;
}
.reco-item{
  flex: 1;
}
.reco-item img{
  width: 75px;
  height: 75px;
}
</style>