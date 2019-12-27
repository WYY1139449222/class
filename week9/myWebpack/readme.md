 打包工具  grunt  gulp webpack


 使用webpack的过程
    1、搭建一个文件夹
    2、在文件夹中安装webpack 和 webpack-cli
    3、建立一个src文件夹，所有的资源文件都放到该文件夹中
    4、使用时 需要建立一个 webpack.config.js
        该js中存放的都是webpack的配置信息 mode entry output module(rules[loader]) plugins
    5、在package.json中的script属性 配置脚本 直接写属性名"qqq":"webpack"，
        运行npm run qqq 会按照配置信息打包对应的文件
    6、还可以在package.json中指定走 对应的配置文件 "webpack --config ./build/    XXX.js"  webpack-dev-server是让我们可以 以起服务的形式 运行我们的代码 后边的脚本跟webpack一样 也是写 "webpack-dev-server --config ./build/XXX.js"