<template>
  <div v-if="Object.keys(itemParams).length !== 0" class="params">
    <div class="params-rule">
      <div class="rule-info">
        <table v-for="(table,index) in itemParams.sizes" :key="index">
          <tr v-for="(tr,indey) in table" :key="indey">
            <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="params-info">
      <div class="product-info">
        <table>
          <tr v-for="(item,index) in itemParams.infos" :key="index">
            <td class="info-key">{{item.key}}</td>
            <td class="info-value">{{item.value}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="params-images">
      <div v-if="Object.keys(itemParams.image).length !== 0">
        <img :src="itemParams.image" @load="imgLoad" alt="" />
      </div>
    </div>
    <bottom-box-shadow></bottom-box-shadow>
  </div>
</template>

<script>
import BottomBoxShadow from "../../../components/common/border/BottomBoxShadow";
export default {
name: "DetailParamsInfo",
  components: {BottomBoxShadow},
  props: {
    itemParams: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      this.bus.$emit("detailImgLoad");
    }
  }
}
</script>

<style scoped>
  .params{
    margin-bottom: 15px;
  }
  .params-rule,.params-info{
    font-size: 14px;
  }
  table{
    width: 100%;
    border-collapse: collapse;
  }
  table tr{
    border-bottom: 1px solid #eeeeee;
  }
  table td{
    padding: 10px;
  }
  .params-info .info-value{
    color: #eb4868;
  }
  .params-info td.info-key{
    min-width: 80px;
  }
</style>