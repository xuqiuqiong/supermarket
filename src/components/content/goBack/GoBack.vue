<template>
  <div class="go-back" @click="itemClick">&#60;</div>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    itemClick(){
      this.$router.go(-1);
      //第二种方法
      // this.$router.back()
    }
  }
}
</script>

<style scoped>
  .go-back{
    text-align: center;
    font-size: 32px;
    color: #333;
  }
</style>