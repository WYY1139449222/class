let http = require('http');
http.createServer(function(req,res){
    console.log(req);
    
    res.end('666')
}).listen(8000,function(){
    console.log('服务起于8000端口');
    
})