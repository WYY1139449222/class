function getData(){
    flag = true;
    var xhr = new XMLHttpRequest();// 创造实例
    xhr.open('get','./data.json',true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4 && /200|304/.test(xhr.status)){
            flag = false;
            let data = JSON.parse(xhr.response);
            renderHtml(data);// 把后台给的数据渲染了
            loadAll();// 保证首屏图片加载出来
        }
    }
    xhr.send();
}
getData();
