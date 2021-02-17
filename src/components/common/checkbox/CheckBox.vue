<template>
    <div class="check-box" :class="{active: isChecked}" >
        <span class="iconfont">&#xe600;</span>
    </div>
</template>

<script>
export default {
    name: 'CheckBox',
    props: {
        isChecked: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped >
    .check-box{
        display: flex;
        text-align: center;
        vertical-align: center;
    }
    .check-box span{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        line-height: 20px;
        font-size: 20px;
        border: 1px solid #aaa;
        color: transparent
    }
    .check-box.active span{
        border: none;
        color: #fff;
        background-color: deeppink;
    }
</style>