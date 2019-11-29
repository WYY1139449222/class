(function(global,factory){
    global.VueRouter = factory();
})(this,function(){
    class VueRouter{
        constructor(options){
            let {
                routes
            }=options;
            //routes [{path:'',component:''}]
            //{'/a':a}
            this.routeMap=routes.reduce((obj,cur)=>{
                obj[cur.path]=cur.component
                return obj;
               
            },{})
            window.addEventListener('load',()=>{
                location.hash = location.hash||'/'
            })
            Vue.util.defineReactive(this,'_route','/')
            this._route = location.hash.slice(1)
            window.addEventListener('hashchange',()=>{
                this._route = location.hash.slice(1)
            })
        }
    }
    VueRouter.install = function(_vue){
        //只要Vue.use执行了 这个install方法就会执行 
        // console.log(_vue);
        _vue.mixin({
            beforeCreate() {
                // console.log(this)
                if(this.$options&&this.$options.router){
                    this._router=this.$options.router
                }else{
                    this._router = this.$parent._router;
                }
            },
        })
        _vue.component('router-link',{
            props:{
                to:String,//要接收一个to属性 类型要是一个字符串
            },
            // template:`<a :herf='"#"+to'><slot></slot></a>`,
            render(h){
                return h('a',{
                    attrs:{
                        href:'#'+this.to
                    }
                },this.$slots.default)
            }
        })
        _vue.component('router-view',{
            render(h){
                return h(this._router.routeMap[this._router._route])
            }
        })
    }
    return VueRouter;
})