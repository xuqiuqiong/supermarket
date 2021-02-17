import {ADD_COUNTER,ADD_TO_CART} from "./mutations_type";

export default {
    [ADD_COUNTER](state,product) {
        product.count ++
    },
    [ADD_TO_CART](state,product){
        product.isChecked = true;
        state.cartList.push(product)
    }
}