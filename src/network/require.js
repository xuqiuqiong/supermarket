import axios from "axios";

export function require(config){
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    instance.interceptors.request.use(config =>{
        // console.log(config);
        return config
    })
    return instance(config)
}
// export function request(config){
//     return new Promise((resolve, reject) =>{
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     instance(config)
//         .then(res=>{
//             console.log(res);
//             resolve(res);
//         }).catch(err=>{
//             console.log(err);
//             reject(err);
//     })
//     })
// }