//box1
let box1 = document.getElementById('box1');
let bgmBox = document.getElementsByClassName('bgm')[0];
let bgm = bgmBox.getElementsByTagName('audio')[0];
document.addEventListener('touchend', bofang, false)
function bofang() {
    bgmBox.style.animationPlayState = 'running';
    bgm.play();
    document.removeEventListener('touchend', bofang, false)
}
bgmBox.addEventListener('touchend', function (e) {
    if (bgmBox.style.animationPlayState == 'running') {
        bgmBox.style.animationPlayState = 'paused'
        bgm.pause()
    } else {
        bgmBox.style.animationPlayState = 'running'
        bgm.play();
    }
}, false)

function textrender() {
    let information = document.querySelector('.information>span');
    let ary = ["性", "名", "：", "王", "园", "园", "<br>", "性", "别", "：", "男", "<br>", "年", "龄", "：", "2", "7", "<br>", "学", "历", "：", "本", "科", "<br>", "电", "话", "：", "1", "5", "9", "9", "1", "6", "6", "6", "2", "6", "7", "<br>", "Q ", "Q", "：", "1", "1", "3", "9", "4", "4", "9", "2", "2", "2", "<br>", "应", "聘", "岗", "位", "：", "前", "端", "工", "程", "师", "<br>", "毕", "业", "学", "校", "：", "成", "都", "中", "医", "药", "大", "学", "<br>", "居", "住", "地", "址", "：", "北", "京", "昌", "平", "区", "国", "风", "美", "唐"];
    let timer = setInterval(() => {
        if (ary.length) {
            information.innerHTML += ary.shift();
        } else {
            clearInterval(timer);
        }

    }, 100)
}
window.onload = function () {
    textrender();
}