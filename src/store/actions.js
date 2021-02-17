import {ADD_COUNTER,ADD_TO_CART} from "./mutations_type";

export default {
    //使用commit时候，参数是state
    // addCart(state, product) {
    //     const oldProduct = state.cartList.find(item => item.iid === product.iid)
    //     if(oldProduct){
    //         this.addCount(oldProduct);
    //     }else{
    //         this.addToCart(oldProduct)
    //     }
    // }
    //使用dispatch时候，参数是context
    addCart(context, product) {
        const oldProduct = context.state.cartList.find(item => item.iid === product.iid)
        if(oldProduct){
            context.commit(ADD_COUNTER,oldProduct);
        }else{
            product.count = 1
            context.commit(ADD_TO_CART,product)
        }
    }
}