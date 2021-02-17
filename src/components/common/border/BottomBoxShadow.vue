<template>
  <div class="box-shadow"></div>
</template>

<script>
export default {
name: "BottomBoxShadow"
}
</script>

<style scoped>
  .box-shadow{
    height: 1px;
    width: 100%;
    content: "  ";
    box-shadow: 2px 2px 3px rgba(100,100,100,.1);
    border-bottom: 2px solid rgba(100,100,100,.1);
  }
</style>