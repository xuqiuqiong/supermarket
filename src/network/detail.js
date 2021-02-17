import {require} from './require'

export function getDetail(iid){
    return require({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.price = itemInfo.lowNowPrice
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.discountBgColor = itemInfo.discountBgColor
        this.columns = columns
        this.services = services
    }
}

export class ShopInfo{
    constructor(shopInfo){
        this.name = shopInfo.name
        this.shopLogo = shopInfo.shopLogo
        this.sells = shopInfo.cSells
        this.goods = shopInfo.cGoods
        this.score = shopInfo.score
    }
}

export class GoodsParam{
    constructor(info, rule) {
        this.image = info.images ? info.image[0] : ""
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}