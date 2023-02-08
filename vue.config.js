// module.exports = {
//     devServer: {
//         // 3000 포트에서 vue 개발 서버를 실행합니다.
//         port:3000
//     }
// }
module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            '^/api': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true
            },
            '^/pub': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true
            },
            '^/ws': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true
            },
        },
        disableHostCheck: true
    }

}