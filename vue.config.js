const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@',resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('common',resolve('src/common'))
            .set('components',resolve('src/components'))
            .set('network',resolve('src/network'))
            .set('router',resolve('src/router'))
            .set('store',resolve('src/store'))
            .set('views',resolve('src/views'));
    },
}

// module.exports = {
//     chainWebpack: config =>{
//         config.resolve.alias
//             .set('@',resolve('src'))
//             .set('asserts',resolve('src/asserts'))
//             .set('components',resolve('src/components'))
//             .set('network',resolve('src/network'))
//             .set('router',resolve('src/router'))
//             .set('views',resolve('src/views'));
//     }
// }
// module.exports = {
//     configureWebpack: {
//         resolve: {
//             extensions: [],
//             alias: {
//                 '@': resolve('src'),
//                 'asserts' : '@/asserts',
//                 'components': '@/components',
//                 'network': '@/network',
//                 'router': '@/router',
//                 'views': '@views'
//             }
//         }
//     }
// }
// module.exports = {
//     configureWebpack: {
//         resolve:{
//             extensions: [],
//             alias: {
//                 'asserts': '@/asserts',
//                 'components': '@components',
//                 'common': '@/common',
//                 'network': '@/network',
//                 'router': '@/router',
//                 'views': '@/views'
//             }
//         }
//     }
// }