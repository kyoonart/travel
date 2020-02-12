module.exports = {
    lintOnSave: false,
    devServer: {
        host: ' locallhost', // ip
        port: 8080, // 设置端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: null //设置代理
    }
}