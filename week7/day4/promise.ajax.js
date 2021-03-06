function ajax(url, options) {
    let {
            method = 'get',
            data = {},
            cache = true,//是否走缓存
            async = true,//true是异步
            headers = {}
        } = options;
        let isGet = method.toLowerCase() == 'get';
        let searchStr = '';
        for (const k in data) {
            searchStr += `${k}=${data[k]}&`
        }
        searchStr = searchStr.replace(/&$/, '');
        if (isGet) {
            url = url.indexOf('?') == -1 ? url + '?' + searchStr : url + '&' + searchStr;
            if (!cache) {
                url = url + '&t=' + Date.now();
            }
        }
    return new Promise(function (res, rej) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, async);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (/2\d{2}|304/.test(xhr.status))
                    // let data = JSON.parse(xhr.response);
                    res(JSON.parse(xhr.response))
            } else if (/[45]\d{2}/.test(xhr.status)) {
                    rej(xhr);
            }
        }
        xhr.send(JSON.stringify(data));
    })

}
ajax.get = function(url,data){
    return ajax(url,{
        method:'get',
        data
    })
}
ajax.post = function(url,data){
    return ajax(url,{
        method:'post',
        data
    })
}