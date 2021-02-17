<template>
    <div v-if="Object.keys(itemList).length !== 0">
        <!-- <div>{{itemList}}</div> -->
        <cart-list-item v-for="(item,index) in itemList" :key="index" :item-info="item"/>
    </div>
</template>

<script>
import CartListItem from "./CartListItem"
export default {
    name: "CartList",
    components: {
        CartListItem
    },
    props: {
        itemList: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>