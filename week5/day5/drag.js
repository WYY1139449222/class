class Drag{
    constructor(id){
        this.box = document.getElementById(id);
        this.START = this.start.bind(this);
        this.MOVE = this.move.bind(this);
        this.END  = this.end.bind(this);
        this.box.addEventListener('mousedown',this.START,false)
    }
    start(e){
        this.startX = this.offset(this.box).l;
        this.startY = this.offset(this.box).t;

        this.startPX = e.pageX;
        this.startPY = e.pageY;

        document.addEventListener('mousemove',this.MOVE,false);
        document.addEventListener('mouseup',this.END,false);
    }
    move(e){
        let l = e.pageX -this.startPX + this.startX;
        let t = e.pageY -this.startPY + this.startY;

        this.box.style.left = l+'px';
        this.box.style.top  = t+'px';
    }
    end(){
        document.removeEventListener('mousemove',this.MOVE,false);
        document.removeEventListener('mouseup',this.END,false);
    }
    offset(ele) {
        let t = ele.offsetTop,
            l = ele.offsetLeft,
            temp = ele.offsetParent;
        while (temp) {
            t += temp.offsetTop + temp.clientTop;
            l += temp.offsetLeft + temp.clientLeft;
            temp = temp.offsetParent
        }
        return {
            l,
            t
        }
    }
}