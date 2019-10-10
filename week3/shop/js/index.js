//获取数据 展示到页面上
let xhr = new XMLHttpRequest();
let data;
xhr.open('get','./data.json',true);
xhr.onreadystatechange=()=>{
    if(xhr.readyState ==4&&xhr.status==200){
        data =  (JSON.parse(xhr.response));
       render(data);//去请求成功之后，再去渲染数据
    }
}
xhr.send()
let box = document.getElementById('box')
let timeBtn = document.getElementById('timeBtn')
let priceBtn = document.getElementById('priceBtn')
let commentBtn = document.getElementById('commentBtn')
function render(ary){
    console.log(ary);//ary就是后台传过来的数组
    let str='';
    ary.forEach(item => {
        let {img,title,price,num,time}=item;
        str += `<li>
        <div class="imgBox">
            <img src="${img}" alt="" title="${title}">
        </div>
        <div class="til">${title}</div>
        <div class="desc">${time}</div>
        <div class="price">￥${price}</div>
        <div class="botBox">
            <div>选购</div>
            <div>${num}评价</div>
        </div>
    </li>`
    });
   box.innerHTML = str;
}
timeBtn.flag = priceBtn.flag = commentBtn.flag = 1;
function click(ele,key){
    ele.onclick = function(){
        this.flag*=-1;
        data.sort((a,b)=>(a[key]-b[key])*this.flag)
        render(data);
    }
}
click(timeBtn,'time')
click(priceBtn,'price')
click(commentBtn,'num')