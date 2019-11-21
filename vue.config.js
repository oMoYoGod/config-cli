module.exports={
    publicPath:'/',//公共路径
    outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist', // 不同的环境打不同包名
    devServer:{
        port:8085,
        open:true
    }
}