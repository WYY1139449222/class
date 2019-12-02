module.exports = {
    publicPath: './',
    lintOnSave:false,
    devServer: {
        //本地访问 localhost：8080的时候 有node把请求转接到代理地址
        proxy:'https://www.zhihu.com/api/'
    }
}