let bell = document.getElementById('bell');
let say = document.getElementById('say');
let bgm = document.getElementById('bgm');
let h1 = document.querySelector('.loadingBox>h1');
let btn = document.getElementById('btn')
function loadBox(){
    let progress = document.querySelector('.progress');
    let loadingBox = document.querySelector('.loadingBox');
    let ary = ['phone-bg.jpg',
    'phone-listen.png', 'phone-key.png', 'phone-logo.png', 'phone-name.png', 'message-head1.png', 'message-head2.png', 'message-keyboard.png', 'cube-bg.jpg', 'cube-img1.png', 'cube-img2.png', 'cube-img3.png', 'cube-img4.png', 'cube-img5.png', 'cube-img6.png', 'cube-tip.png', 'menu-icon.png', 'concat-address.png', 'concat-icon1.png', 'concat-icon2.png', 'course-icon1.png', 'course-icon2.png', 'course-icon3.png', 'course-icon4.png', 'course-icon5.png', 'course-icon6.png', 'course-icon7.png', 'course-pocket.png', 'school-bot1.png', 'school-bot2.png', 'school-img1.jpg', 'school-img2.jpg', 'school-img3.jpg', 'teacher-title.png', 'zf-detailsReturn.png', 'zf-jobTable.png', 'zf-teacher1.png', 'zf-teacher2.png', 'zf-teacher3.jpg', 'zf-teacher4.png', 'zf-teacher5.png', 'zf-teacher6.png'];
    let n = 0;
    let per = 100/ary.length
    ary.forEach(item => {
        let img = new Image();
        img.src = `./images/${item}`;
        img.onload = function () {
            n++;
            let per = n / ary.length;
            progress.style.width = per * 100 + '%';
            if (n === ary.length) {
                // 所有图片都一经加载完成
                btn.classList.remove('hide');

                /* progress.addEventListener('transitionend',function(e){
                    e.stopPropagation();
                    // 阻止progress动效完成之后的冒泡
                },false) */
            }
        }
    })
    btn.ontouchend = function () {
        loadingBox.style.opacity = 0;
        loadingBox.addEventListener('transitionend', function (e) {
            // console.log(e)
            if (e.propertyName === 'opacity') {
                bell.play()
                loadingBox.classList.add('hide');
                phoneBox(); // 第一屏完成之后再来第二屏
            }
        }, false)
    }
}
loadBox()

function  phoneBox(){
    let circle = document.querySelector('.phoneBox .circle');
    let overBtn = document.querySelector('.overBtn');
    let timeBox = document.querySelector('.phoneBox>header>h3');
    let footer = document.querySelector('.phoneBox>footer');
    let overBox = document.querySelector('.phoneBox>.overBox');
    let phone = document.querySelector('.phoneBox')
    let chat = document.querySelector('.chatBox');
    let clearFn = null;//为了清除时间定时器
    circle.addEventListener("touchend",function(){
        timeBox.classList.remove('hide');//显示时间
        footer.classList.add('hide');
        overBox.classList.remove('bot')
        bell.pause();
        say.play();
        clearFn = changeTime()
    },false)
   
    overBtn.ontouchend = function(){
        phone.style.transform = 'translateY(110%)'
        setTimeout(() => {
            chat.classList.remove('hide');
            chatBox();
            say.pause();
            clearFn();
            bgm.play();
        }, 500);
    }

    function changeTime(){
        let timer = setInterval(() => {
            let t = parseInt(say.currentTime) 
            timeBox.innerHTML = `00 : ${t<10?'0'+t:t}`;
            if(say.ended){
                clearInterval(timer);
                phone.style.transform = 'translateY(110%)'
                setTimeout(() => {
                    chat.classList.remove('hide');
                    chatBox();
                    bgm.play();
                }, 500);
            }
        }, 1000);
        return function(){
            clearInterval(timer);
        }
    }
}

function chatBox(){
    let olis = document.querySelectorAll('.chatMsgBox>li');
    let timer = null;
    let n = 0;
    let t=0;

    let keyboard = document.querySelector('.keyboard');
    let chatBtn = document.querySelector('.chatBtn');
    let p = document.querySelector('.keyboard>p');
    let chatMsgBox = document.querySelector('.chatMsgBox');
    timer = setInterval(()=>{
        olis[n].classList.remove('opa');
        n++;
        if(n==3){
            clearInterval(timer);
            setTimeout(()=>{
                keyboard.classList.remove('bot');
                setTimeout(()=>{
                    input()
                },500)
            },1000)
            
            
        }
    },1500)
    function input(){
        var str = '我们现在使用的是VUE和REACT';
        let n = 0;
        let timer = null;
        timer = setInterval(()=>{
            p.innerHTML+=str[n];
            n++;
            if(n>=str.length)clearInterval(timer);
            
            chatBtn.classList.remove('hide');
        },100)
    }
    chatBtn.onclick = function(){
        p.innerHTML = '';
        keyboard.classList.add('bot');
        olis[n].classList.remove('opa');
        n++;
        timer = setInterval(() => {
            olis[n].classList.remove('opa');
            move()
            n++;
            
            if(n>=olis.length)clearInterval(timer);
        }, 1000);
    }
   
    function move(){
        t += olis[n].clientHeight;
        chatMsgBox.style.transform = `translateY(-${t}px)`
        //负责整个盒子向上移动 每次移动出现盒子的高度
    }
}
