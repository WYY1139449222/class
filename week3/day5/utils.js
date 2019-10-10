var utils={
    getCss(ele,attr){
        //获取ele元素的attr属性
        var str = getComputedStyle(ele)[attr]
        if(/width|height|left|top|margin|padding/g.test(attr)){
            return parseFloat(str)
        }
        return str;
    },
    setCss(ele,attr,val){
        if(/width|height|left|top|margin|padding/g.test(attr)){
            ele.style[attr] = parseFloat(val)+'px'
        }else{
            ele.style[attr] = val
        }
    },
    winH(){
        var h=document.documentElement.clientHeight||document.body.clientHeight
        var w = document.documentElement.clientWidth||document.body.clientWidth
        return {
            h,w
        }
    },
    offset(ele){
        //求出ele到 body的偏移量
        let l = ele.offsetLeft
        let t = ele.offsetTop
        let temp = ele.offsetParent
        while (temp) {
            l+=temp.offsetLeft+temp.clientLeft
            t+=temp.offsetTop+temp.clientTop
            temp=temp.offsetParent
        }
        return{
            l,t
        }
    },
    loadImg(ele){
        if(ele.flag)return
        let scT = document.body.scrollTop||document.documentElement.scrollTop;//卷去的高度
        let wH = utils.winH().h;//一屏幕的高度
        let t = utils.offset(ele).t;//当前元素到body的偏移量
        let h = ele.clientHeight/2
        if(scT+wH>t+h){
            ele.flag = true;
            let temp = new Image();
            let realSrc = ele.getAttribute('realSrc')
            temp.src = realSrc
            temp.onload = function(){
                ele.src = temp.src 
                utils.fadeIn(ele)
            }
        }
    },
    fadeIn(ele){
        //让图片的opacity从0变成1
        ele.style.opacity=0
        let n=0
        ele.timer = setInterval(()=>{
            n+=0.01
            if(n>=1){
                n=1
                clearInterval(ele.timer)
            }
           ele.style.opacity=n
        },10)
    }
}