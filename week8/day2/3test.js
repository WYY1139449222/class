let my = require('./promiseFs.js');
/* my.unlink('./qqq/3.txt').then(data=>{
    console.log(data);
    
}).catch(err=>{
    console.log(err);
    
}); */

let p1 = my.unlink('./qqq/1.txt');
let p2 = my.unlink('./qqq/2.txt');
Promise.all([p1,p2]).then(data=>{
    //删除所有文件成功
    console.log('删除所有文件成功');
    
    return my.rmdir('./qqq')
}).then(data=>{
    console.log('删除文件夹成功');
    
    //删除文件夹成功
}).catch(err=>{
    console.log(err);
    
})
