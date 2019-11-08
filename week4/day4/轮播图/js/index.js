let ul = document.querySelector('.img_box ul');
let box = document.getElementById('box');
let tipBox = document.querySelector('#box .tip_box');
let span = box.getElementsByClassName('tip');
let leftBtn = document.querySelector('#box .left_btn');
let rightBtn = document.querySelector('#box .right_btn');
function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            let data = JSON.parse(xhr.response);
            render(data);
            move();
            spanClick();
        }
    }
    xhr.send();
}
getData();
function render(ary=[]) {
    let str = tipStr = '';
    ary.push(ary[0]);
    ary.forEach((item, index) => {
        let { img, desc } = item;
        str += `<li>
                    <img src="${img}" alt="">
                    <p class="desc">${desc}</p>
                </li>`
        if (index !== ary.length - 1)
            tipStr+=index == 0?`<span class="tip current"></span>`:`<span class="tip"></span>`
    });
    ul.innerHTML = str;
    ul.style.width = ary.length * 590 + 'px';
    tipBox.innerHTML = tipStr;
}
let n = 0;
let timer = null;
function move() {
    timer = setInterval(() => {
        change();
        if(getComputedStyle(ul).left=='-2360px'){
            ul.style.left = 0;
            ul.style.transition = 'left 0s ease-in' ;
        }
    }, 1000);
}
function change(){
    n++
    if (n == span.length+1) {
        n = 1;
    }
        ul.style.left = -590*n +'px';
        console.log(getComputedStyle(ul).left);
        
    
    ul.style.transition = 'left 0.5s ease-in' ;
    // animate(ul, { left: -590 * n }, 500,)
    spanClass(n)
}
box.onmouseenter = function () {clearInterval(timer)}
box.onmouseleave = function () {move()}
function spanClass(n){
    for (let i = 0; i < span.length; i++) {
        span[i].className = 'tip';
      }
      if(n==span.length) n=0;
      span[n].classList.toggle('current');
}
leftBtn.onclick = function(){
  n--;
  if(n<0){
      n=span.length-1
      ul.style.left = -590 *(span.length)+'px';
  }
  animate(ul, { left: -590 * n }, 500,spanClass(n));
}
rightBtn.onclick = function(){change()}
function spanClick(){
    for (let i = 0; i < span.length; i++) {
       span[i].onclick = function(){
           n=i;
           animate(ul, { left: -590 * n }, 500,spanClass(n));
       }
    }
}