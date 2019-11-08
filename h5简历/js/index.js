//box1
let box1 = document.getElementById('box1');
let bgmBox = document.getElementsByClassName('bgm')[0];
let bgm = bgmBox.getElementsByTagName('audio')[0];

document.addEventListener('touchend',bofang,false)
function bofang(){
    bgmBox.style.animationPlayState ='running';
    bgm.play();
    document.removeEventListener('touchend',bofang,false)
}
bgmBox.addEventListener('touchend',function(e){
    if(bgmBox.style.animationPlayState == 'running'){
        bgmBox.style.animationPlayState = 'paused'
        bgm.pause()
    }else{
        bgmBox.style.animationPlayState ='running'
        bgm.play();
    }
},false)