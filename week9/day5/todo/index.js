Vue.directive('focus',function(el,obj){
    if(obj.value){
       setTimeout(()=>{
        el.focus()
       })
    }else(
        el.blur()
    )
})
let vm =new Vue({
    el: "#app",
    data: {
        ary: [
            {
                id: 1,
                todo: '吃饭',
                done: false,
                editable: false
            },
            {
                id: 2,
                todo: '睡觉',
                done: false,
                editable: false
            },
            {
                id: 3,
                todo: '打豆豆',
                done: true,
                editable: false
            }
        ],
        todo:'',
        hash:'',//用来存储当前路径的hash值
        arr:[]
    },
    computed:{
        arr2(){
            if(this.hash=='#/all'){
                this.arr=this.ary
            }else if(this.hash=='#/finished'){
                this.arr=this.ary.filter(item=>item.done)
            }else{
                this.arr=this.ary.filter(item=>!item.done)
            }
            localStorage.setItem('ary',JSON.stringify(this.ary));
            return this.arr
        },
        number(){
            return this.ary.filter(item=>!item.done).length
        }
    },
    created(){
        this.hash = location.hash||'#/all';
        window.addEventListener('hashchange',()=>{
            this.hash = location.hash
        });
        this.ary = JSON.parse(localStorage.getItem('ary'))||this.ary;
    },
    methods:{
        add(){
            this.todo = this.todo.trim();
            if(this.todo){
                let obj={
                    id:Math.random(),
                    done:false,
                    todo:this.todo,
                    editable: false
                };
                this.ary.unshift(obj)
                this.todo='';
            }
        },
        change(obj,e){
            if(e.target.nodeName.toLowerCase()!=='input'){
                obj.editable = !obj.editable;
            }
        },
        fn(e){
            e.target.blur()
        },
        f(obj){
            obj.editable = !obj.editable;
        },
        del(n,obj){
            this.ary=this.ary.filter(item=>item.id!=obj.id)
        },
    }
});