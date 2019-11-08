// ajax({
//     method:'post',//默认值是get
//     url:'./data.json',//必须的
//     data:{
//         //非必须
//     },
//     async:true,//非必须 默认异步(true)
//     cache:false,//非必须 默认走缓存（）true
//     headers:{
//         //非必须
//     },
//     success:function(data){
//         //非必须
//     },
//     error:function(err){
//         //非必须
//     }

// })

function ajax(options){
    let {
        method = 'get',
        url,
        data={},
        async = true,
        cache = true,
        headers = {},
        success,
        error
        } = options;
        method = method.toLowerCase();
        headers = Object.assign({
            'content-type':'application/x-www-form-urlencoded'
        },headers)
    let searchStr = '';
    for (const k in data) {
        searchStr+=`${k}=${data[k]}&`
    }

    if(cache){
        searchStr = searchStr.replace(/&$/,'')
    }else{
        searchStr = searchStr+'_='+Date.now()
    }

    if(method=='get'){
        //判断url有没有问号
        if(url.indexOf('?')>0){
            url += '&'+searchStr
        }else{
            url += '?'+searchStr
        }
    }
    let xhr = new XMLHttpRequest();
    xhr.open(method,url,async);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(/200|304/.test(xhr.status)){
                let data;
                try {
                    data= JSON.parse(xhr.response)
                } catch (error) {
                    data = xhr.response
                }
                success&&success(data)
            }else if(/[45]\d{2}/.test(xhr.status)){
                error&&error(xhr)
            }
        }
    }
    for (const k in headers) {
        xhr.setRequestHeader(k,escape(headers[k]));//处理中文
    }
    xhr.send(searchStr);
   
    
}