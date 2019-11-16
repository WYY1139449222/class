let express = require('express');
let {readFile,writeFile} = require('./promiseFs');
// let bodyParser = require('body-parser')
// let url = require('url');
let qs = require('qs');
let app = express();
app.listen(8080,function(){
    console.log('服务起于8080');
    
});

// app.use(bodyParser.json())
// app.use(bodyParser.raw())
// app.use(bodyParser.text())
// app.use(bodyParser.urlencoded({
//     extended:true
// }))
app.use((req,res,next)=>{
    let str='';
    req.on('data',function(chunk){
        str+=chunk;
    })
    req.on('end',function(){
        let obj={};
        try {
            obj = JSON.parse(str)
        } catch (err) {
            obj = qs.parse(str)
        }
        req.body = obj;
        next();
    })
})

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"http://localhost:8000");
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
})

app.use((req,res,next)=>{
    // 这个中间件 是将读取的数据放到req上 这样下面的接口就可以通过req获取需要的数据
    readFile('./package-lock.json').then(data=>{
        data = JSON.parse(data.toString());
        req.data = data.dependencies;
        //readFile 是异步的 在读取成功之后 再执行next()
        next()
    }).catch(err=>{
        res.status(500);
        
    })
})

app.get('/list',function(req,res){
    //req.query  前端传给后端的参数
    //type是query中的属性   是用来获取对应的对象的
    let {type} = req.query;//query是插件自带的
    let data = req.data;//是上面中间件添加的
    res.send({
        code:0,
        data:type?data[type]:data  //前端给了type 我们就给对应的属性值 不给就直接返回整个对象
    })
})
let ary=[];
function f(req,res){
    readFile('./package-lock.json').then(data=>{
        data = JSON.parse(data.toString());
        Object.assign(data.dependencies.my,req.body);
        return writeFile('./package-lock.json',JSON.stringify(data))
    }).then(data=>{
        res.send({
            code:0,
            data:'success'
        });
    }).catch(err=>{
        res.send({
            err:err
        })
    }).finally(()=>{
        fn = ary.shift()()
        fn && fn()
    })
}
app.post('/add',function(req,res){
    console.log(req.body);
    ary.push(()=>{f(req,res)});
    fn = ary.shift()()
    fn && fn()

    
})