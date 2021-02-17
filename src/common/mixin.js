import {debounce} from './util'

export const itemListener = {
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh);
        this.bus.$on('imgLoad',()=>{
            refresh();
        })
    }
}
export const backToTop = {
    methods: {
        backToTop(){
            this.$refs.scroll.scroll.scrollTo(0,0,300)
        }
    }
}