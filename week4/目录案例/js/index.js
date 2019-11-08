let pplis = document.querySelectorAll('.pinpai>li'),
    cclis = document.querySelectorAll('.chicun>li'),
    xtlis = document.querySelectorAll('.xitong>li'),
    wllis = document.querySelectorAll('.wangluo>li'),
    noneBox = document.getElementsByClassName('noneBox'),
    liBox = document.getElementsByClassName('liBox'),
    change = document.getElementsByClassName('change')[0],
    ul = document.querySelectorAll('.box ul');
function click(ary) {
    let div = document.createElement('div');
    div.className = 'noneBox';
    div.innerText = 'X';
    let li = document.createElement('li');
    li.className = 'liBox';
    [...ul].forEach((item, index) => {
        if (ary[0].offsetParent === item) li.flag = index;
    });
    [...ary].forEach((item, index) => {
        if (index !== 0) {
            item.onclick = function () {
                li.innerText = item.innerText;
                li.appendChild(div);
                change.appendChild(li);
                [...liBox].sort((a, b) => a.flag - b.flag).forEach(item => {
                    change.appendChild(item);
                });
                [...noneBox].forEach((item) => {
                    item.onclick = function(){
                        change.removeChild(this.offsetParent);
                    }
                });
            }
        };
    });
}
click(pplis);
click(cclis);
click(xtlis);
click(wllis);