import {require} from "./require"

export function getRcommend(){
    return require({
        url: '/recommend'
    })
}