let dataAry;
// 把数据从后台获取到 然后渲染到页面上
let xhr = new XMLHttpRequest();
xhr.open('get', './data.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // 代表请求成功；
        dataAry = JSON.parse(xhr.response); // 把从后台获取到的JSON字符串转化成 JSON对象
    }
}
xhr.send();
let body = document.getElementById('body')
function HTML(ary) {
    let str = '';
    ary.forEach(item => {
        let {
            img,
            title,
            num,
            price,
            time
        } = item;
        str += `<li>
        <img src="${img}" alt="" title="${title}">
        <p>${title}</p>
        <p>${time}</p>
        <p>￥${price}</p>
        <div>选购</div>
        <div>${num}评价</div>
        </li>`
    });
    body.innerHTML = str;
}
HTML(dataAry);
let time = document.getElementById('time');
let price = document.getElementById('price');
let pj = document.getElementById('pj');
time.a = price.a =pj.a = 1;

function btn(nn){
    return function(){
        this.a*=-1;
        dataAry.sort((a,b)=>(a[nn]-b[nn])*this.a)
        HTML(dataAry);
    }
}
time.onclick =btn('time')
price.onclick = btn('price')
pj.onclick = btn('num')
// time.onclick = function(){
//     this.a*=-1;
//     dataAry.sort((a,b)=>(a.time-b.time)*this.a)
//     HTML(dataAry);
// }
// price.onclick = function(){
//     this.a*=-1;
//     dataAry.sort((a,b)=>(a.price-b.price)*this.a)
//     HTML(dataAry);
// }
// pj.onclick = function(){
//     this.a*=-1;
//     dataAry.sort((a,b)=>(a.num-b.num)*this.a)
//     HTML(dataAry);
// }

