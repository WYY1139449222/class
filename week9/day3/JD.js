Vue.filter('money',function(val,n){
    return "￥"+(val/100).toFixed(n)
})
let vm = new Vue({
    el:'#app',
    data:{
        name:'珠峰',
        datalist:[],
        total:0,
        checkAll:false,
        show:false,
        delIndex:''
    },
    created(){
        //实例创建完成后会触发(钩子函数)
        this.getData();
       
    },
    methods:{
        getData(){
            fetch('./data.json').then(res=>{
                return res.json()
            }).then(data=>{
                this.datalist = data;
                this.sum();
                //重置checkAll属性
                this.checkAll = this.datalist.every(item=>item.isSelect)
            }).catch(err=>{
                console.log(err);
            })
        },
        sum(){
            //求总价
            this.total = this.datalist.filter(item=>item.isSelect).reduce((prev,next)=>prev+next.count*next.price,0)

        },
        checkoneFn(n){
            this.datalist[n].isSelect = !this.datalist[n].isSelect;
            this.checkAll = this.datalist.every(item=>item.isSelect)
            this.sum()
        },
        changeAllFn(){
            this.datalist.forEach(item=>{
                item.isSelect = this.checkAll
            })
            this.sum()
        },
        del(n){
            this.show = true;
            this.delIndex = n
        },
        cancel(){
            this.show = false;
        },
        sure(){
            this.show = false;
            this.datalist.splice(this.delIndex,1);
            this.checkAll = this.datalist.every(item=>item.isSelect)
            this.sum()
        },
        clear(){
            this.datalist=[];
            this.checkAll = false;
            this.sum()
        }
    }
})