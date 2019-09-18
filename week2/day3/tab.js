class Tab{
    constructor(idSelector){
        this.box = document.querySelector(idSelector);
        this.tabs = this.box.querySelectorAll('.tab');
        this.bodys = this.box.querySelectorAll('.body');
        this.mapBind();
    }
    mapBind = function(){
        //this 都是Tab 的实例
        // this.tabs 是我们要去绑定事件的元素
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].onclick = ()=>{
                //给每一个tab 绑定点击事件
                this.clearClass();
                this.tabs[i].className = 'tab current';
                this.bodys[i].className = 'body current';
            }
            
        }
    }
    clearClass = function(){
        // 清除类名 this.tabs 和 this.bodys 上的current类名清除
        for (let i = 0; i < this.tabs.length; i++) {
           this.tabs[i].className = 'tab';
           this.bodys[i].className = 'body'
        }
    }
}