function on(ele,type,f){
    if(/^my/.test(type)){
        ele[type] = ele[type]||[]
        ele[type].push(f);
    }else{
        type = type.replace(/^on/,'');
        ele.addEventListener(type,f,false)
    }
}
function fire(ele,type,...arg){
    if(/^my/.test(type)){
        ele[type] = ele[type]||[]
        ele[type].forEach(item=>{
            item.call(this,...arg);
        })
    }
}
function off(ele,type,f){
    if(/^my/.test(type)){
        if(f===undefined){
            ele[type]=[];
            return;
        }
        ele[type] = ele[type]||[]
        let n = ele[type].indexOf(f);
        n==-1?null:ele[type].splice(n,1);
        
    }else{
        type = type.replace(/^on/,'');
        ele.removeEventListener(type,f,false)
    }
}