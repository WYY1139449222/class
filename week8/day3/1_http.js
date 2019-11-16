//fs 读写文件  
// url  parse获取url参数  
// path.resolve获取绝对路径
//http 是起服务的模块
//__dirname   __filename
let http = require('http');
let {readFile}=require('./promiseFs');
let url = require('url');

http.createServer((req,res)=>{
    //req 存放的是请求信息
    //res存放的是响应信息
    //只要前端发送了请求，就会执行该函数
    // console.log(req.url);
    // console.log(req.method);//前端的请求方法
    // console.log(url.parse(req.url,true));//解析url前端路径
    //pathname是前端给的纯路径
    //query是前端在路径上给的参数
    let {pathname,query}=url.parse(req.url,true)
    if(pathname== '/favicon.ico'){
        //前端请求的是小图标
       
        readFile('./6.jpg').then(data=>{
            res.end(data);
        }).catch(()=>{
            res.statusCode = 404;
            res.statusMessage = 'hello hahah';//给前端的状态文本
        });
        
        // res.end('./6.jpg')
    }else{
        res.end(JSON.stringify(query))
    }
    // res.statusCode = 404;
    // res.statusMessage = 'hello hahah';//给前端的状态文本
    // res.end('999')//给前端响应的
}).listen(8000,()=>{
    //服务启动成功之后会执行的函数
    console.log('服务启动于8000端口');
    
})