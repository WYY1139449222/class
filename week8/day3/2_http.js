let http = require('http');
let url = require('url');
let {readFile} = require('./promiseFs');

let server = http.createServer((req,res)=>{
    let str=''
    req.on('data',function(chunk){
        //正在接受请求体
        str+=chunk;
    });
    req.on('end',function(){
        //接受请求体完成
        console.log(str);
        
    })
    //cors跨域
    // res.setHeader('Access-Control-Allow-Methods','post');
    // res.setHeader('Access-Control-Allow-Origin','*');
    // res.setHeader('set-cookie','qqqq=66666');
    //跨域种植cookie在Application中没有体现
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'post',
        'set-cookie':'qqqq=66666'
    })
    // console.log(req.headers);
    
   res.end('999')
    
});

let port = 8000;
let init = true;
function listen(){
    let cb = null;
    if(init){
        init=false;
        cb=()=>{
            console.log('服务起于'+port);
        }
    }
    server.listen(port,cb)
}
listen()
server.on('error',(e)=>{
    if(e.code==='EADDRINUSE'){
        port++;
        listen();
    }
})


/* 
    http  怎么其服务
    怎么获取前端数据  路径 和参数
    设置响应头 （cors跨域设置）
    端口的占用处理
    后端的响应 res.end(给前端的信息)

*/