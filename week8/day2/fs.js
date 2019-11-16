//fs  是node内模块  用来操作文件的 读写文件
// I/O  input  output  文件读写
let fs = require('fs');

//readFile 执行有三个参数  url 编码格式  回调函数
// fs.readFile('./package.json',null)
/* fs.readFile('./package.json','utf-8',(err,data)=>{
    //若文件读取失败，则err就会有对应的值
    //若成功 则err为null
    console.log('err',err);
    console.log('data',data.toString());
    if(!err){
        console.log(data);
        
    }else{
        console.log(err);
        
    }
    
    
}) */

// let data = fs.readFileSync('./ceshi.less','utf-8')
// console.log(data);

// console.log(345678);

//readFile 异步读取文件
//readFileSync 同步读取文件

//++++================================================读文件夹
/* fs.readdir('./node',null,(err,data)=>{
    if(!err){
        // console.log(data);
        data.forEach(item=>{
            fs.readFile('./node/'+item,'utf-8',(e,d)=>{
                if(!e){
                    console.log(d);
                }
            })
        })
    }else{
        console.log(err);
        
    }
})
console.log(1234); */
// let data = fs.readdirSync('./node',null);
// console.log(data);

/* fs.mkdir('./qqq',(err)=>{
    if(!err){console.log('创建成功')}else{console.log('创建失败')}
})
fs.mkdirSync('./qqq')//异步
fs.rmdir('./qqq',err=>{
    if(!err){console.log('删除成功')}else{console.log('删除失败'),err}
})
fs.rmdirSync('./qqq')//同步 */
/* fs.writeFile('./qqq/1.txt','你好','utf-8',err=>{
    if(!err){console.log('写入成功')}else{console.log('写入失败')}
}) */
/* try {
    fs.writeFileSync('./qq2q/1.txt','hello world','utf-8');
} catch (error) {
    console.log(232322);
} */
/* fs.appendFile('./qqq/1.txt','你好 世界','utf-8',err=>{
    if(!err){console.log('添加成功')}else{console.log('添加失败')}
}) */


function append(url,data){
    fs.readFile(url,'utf-8',(err,d)=>{
        if(d===undefined){
            d='';
        }
        fs.writeFile(url,d+data,err=>{
            if(!err){
                console.log('添加成功');
            }
        })
        // if(!err){
        //     fs.writeFile(url,d+data,err=>{
        //         if(!err){
        //             console.log('添加成功');
        //         }
        //     })
        // }else{
        //     fs.writeFile(url,data,err=>{
        //         if(!err){
        //             console.log('创建成功');
        //         }
        //     })
        // }
    });
}
// append('./qqq/1.txt','哈哈哈')
/* fs.rmdir('./qqq',err=>{
    console.log(err);
    
}) */

/* fs.unlink('./qqq/1.txt',err=>{
    console.log(err);
    //删除文件
}) */
fs.copyFile('./qqq/1.txt','./qqq/3.txt',err=>{
    console.log(err);
    //拷贝文件
})

// readFile  readdir mkdir rmdir writeFile appendFile copyFile unlink