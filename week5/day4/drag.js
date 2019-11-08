class Drag {
    constructor(id,n){
        this.n = n;
        this.box = document.getElementById(id);
        this.START = this.start.bind(this);
        this.MOVE = this.move.bind(this);
        this.END = this.end.bind(this);
        this.m = 0;
        // this.box.addEventListener('mousedown',this.START,false);
        on(this.box,'mousedown',this.START)
    }
    offset(ele) {
        let l = ele.offsetLeft,
            t = ele.offsetTop;
        let temp = ele.offsetParent;
        while (temp) {
            l += temp.offsetLeft + temp.clientLeft;
            t += temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return {
            l,
            t
        }
    }
    start(e) {
        // this 是当前的实例；
        this.startX = this.offset(this.box).l;
        this.startY = this.offset(this.box).t;
        this.startPx = e.pageX;
        this.startPy = e.pageY;
        // document.addEventListener('mousemove', this.MOVE, false);
        // document.addEventListener('mouseup', this.END, false)
        on(document,'mousemove', this.MOVE)
        on(document,'mouseup', this.END)
        fire(this.box,'myIndex',this.box)
    }
    move(e) {
        // this 是当前的实例
        this.box.style.left = e.pageX - this.startPx + this.startX + 'px';
        this.box.style.top = e.pageY - this.startPy + this.startY + 'px';
    }
    end(e) {
        // this 是当前的实例
        // 鼠标抬起执行的函数
        // document.removeEventListener('mousemove', this.MOVE, false);
        // document.removeEventListener('mouseup', this.END, false)
        off(document,'mousemove', this.MOVE)
        off(document,'mouseup', this.END)
        this.box.speed =this.startPx- e.pageX
        fire(this.box,'myFly',this.box)
        if(this.n!==undefined){
            this.m++;
            if(this.m>=this.n)this.clear()
        }
    }
    clear(){
        // this.box.removeEventListener('mousedown',this.START,false);
        off(this.box,'mousedown',this.START)
    }
}