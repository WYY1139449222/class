//node的模块化 是遵循 commonjs规范
let qqq = require('./2.js');
console.log(qqq);
qqq.f()

//每一个js文件对于node来说都是一个大闭包
//require  __dirname   __filename  module.exports  exports
//以上5个都属于当前js文件的私有变量
//require是用来导入文件
//module.exports和exports  都是用来导出内容的
//__dirname 是当前文件所在文件夹的绝对路径
//__filename 是当前文件的绝对路径
console.log('文件夹路径',__dirname);
console.log('文件路径',__filename);

//npm i less less-loader --save-dev
//npm run +对应的脚本命令
