function HTML(obj) {
    let lis = document.createElement('li');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');

    for (let key in obj) {
        if(key == 'img'){
            img.src = obj[key];
        }else if(key == 'p1'){
            p1.innerText = obj[key];
        }else if(key == 'p2'){
            p2.innerText = obj[key];
        }else if(key == 'p3'){
            p3.innerText = `￥${obj[key]}`;
        }else if(key == 'div2'){
            div2.innerText = `${obj[key]}评价`;
        }
    }
    div1.innerText = '选购'
    lis.appendChild(img)
    lis.appendChild(p1)
    lis.appendChild(p2)
    lis.appendChild(p3)
    lis.appendChild(div1)
    lis.appendChild(div2)
    return lis
}
let obj = {
    img: 'images/n1.png',
    p1: 'HUAWEI Mate 20 Pro',
    p2: '赠好礼|享12期免息',
    p3: 9999,
    div2: 21424
}
let ary=[
            { img: 'images/n1.png',
            p1: 'HUAWEI Mate 20 Pro',
            p2: '赠好礼|享12期免息',
            p3: 9999,
            div2: 21424
            },
            { img: 'images/n2.png',
            p1: 'HUAWEI Mate 20 Pro',
            p2: '赠好礼|享12期免息',
            p3: 9999,
            div2: 21424}
        ]
let ul = document.getElementById('body');
let ary = []
for (let i = 0; i < 5; i++) {
    ary[i] = HTML(obj)
    ul.appendChild(ary[i]);
}

