let $box = $('#box'),
    // $ul = $box.children('.img_box').children('ul')
    $ul = $box.find('ul'),
    $tipBox = $box.find('.tip_box'),
    $tips = $tipBox.children('.tip'),
    $leftBtn = $box.find('.left_btn'),
    $rightBtn = $box.find('.right_btn');
    let n = 0;
    
    let timer = null;

    //获取数据
function getData(){
    $.ajax({
        type:'get',
        url:'./data.json',
        success:function(data){
            console.log(data);
            render(data);
            tipClick()
            
            
        },
        error:function(){
            //请求失败时
        }
    })
}   
getData();

function render(data){
    let str = tipStr = '';
    data.push(data[0]);
    data.forEach((item,index) => {
        str+=`<li>
        <img src="${item.img}" alt="">
        <p class="desc">${item.desc}</p>
    </li>`;
        if(index==0){
            tipStr +=`<span class="tip current"></span>`
        }else if(index<data.length-1){
            tipStr +=`<span class="tip"></span>`
        }
        
    });
    $ul.html(str);
    $ul.width(590*data.length);
    $tipBox.html(tipStr);
    $tips = $tipBox.children('.tip');
}


function move(){
    n++;
    if(n>$tips.length){
        n=1
        $ul.css("left",0);
        // $ul.animate({left:0},0)
    }
    $ul.animate({left:-590*n},300);
    autoFocus(n)
}

function autoMove(){
    timer = setInterval(()=>{move() },1000)
}
autoMove();

function autoFocus(m){
    if(m>=$tips.length){
        m=0;//m==$tips.length 显示的是伪第一张
    }
    // m就是要有点的索引
    $tips.eq(m).addClass('current').siblings().removeClass('current');
}

$box.on('mouseenter',function(){
    clearInterval(timer)
});
$box.on('mouseleave',function(){
    autoMove();
});


$leftBtn.on('click',function(){
    n--;
    if(n<0){
        $ul.css("left",-$tips.length*590);
        n=$tips.length-1;
    }
    $ul.animate({left:-590*n},300);
    autoFocus(n)
})   

$rightBtn.on('click',function(){

    move()
});
function tipClick(){
    $tips.on('click',function(){
        console.log($(this).index());
        let m = $(this).index();
        $ul.animate({'left':-590*m},300)
        n=m;
        autoFocus(m)
    })
}  
$.fn.extend({
        //把对应的方法放到了JQ的原型上

    myFn:function(){
        console.log(666);
        console.log(this);
    }
})
$.extend({
    //把对应的方法放到了JQ自身上
    myFn:function(){
        console.log(000);
        
    }
})


const curry = (fn, arr = []) => (...args) => (arg => 
    arg.length === fn.length
      ? fn(...arg)
      : curry(fn, arg)
  )([...arr, ...args])
  
  let curryTest=curry((a,b,c,d)=>a+b+c+d)
  curryTest(1,2,3)(4) //返回10
  curryTest(1,2)(4)(3) //返回10
  curryTest(1,2)(3,4) //返回10
  
 