(function(global,factory){
    global.Vuex = factory();
})(this,function(){
    let Vue;
    class Store{
        constructor(options){

            // Vue代表的就是全局的Vue
            let vm = new Vue({
                data:{
                    state:options.state||''
                },

            })
            this.state = vm.state||'';
            this.mutations = {};
            let mutations= options.mutations||{};
            Object.keys(mutations).forEach(item=>{
                this.mutations[item] = (option)=>{
                    mutations[item].call(this,this.state,option)
                }
            })
            this.actions={}
            let actions = options.actions||{};
            Object.keys(actions).forEach(item=>{
                this.actions[item] = (option)=>{
                    // this 就是store
                    //第一个this是将在、this指向改为store
                    //第二个this是传递给函数的实参store
                    actions[item].call(this,this,option)
                }
            })
            this.getters={}
            let getters=options.getters||{};
            Object.keys(getters).forEach(item=>{
                Object.defineProperty(this.getters,item,{
                    get:()=>{
                        return getters[item].call(this,this.state)
                    }
                })
                
            })

        }
        commit(type,option){
            console.log(this.mutations,type);
            this.mutations[type](option)
        }
        dispatch(type,option){
            this.actions[type](option)
        }
    }
    function install(_vue){
        Vue = _vue;
        // console.log(888,_vue);
        _vue.mixin({
            //给当前项目每一个组件都混入了一个beforeCreate的钩子函数
            //若组件存在对应的钩子函数 那么先执行混入的钩子函数
            beforeCreate(){
                //this 指的就是当前那个组件
                // console.log('beforeCreate',this);
                if(this.$options&&this.$options.store){
                    console.log(111);
                    //该组件是跟组件
                    //把对应的store放到了放到了$store上
                    this.$store = this.$options.store
                    // this.$options.store
                }else{
                    //租到这里的组件 都是后代组件
                    console.log(this);
                    this.$store = this.$parent&&this.$parent.$store
                }
                
            }
        })
    }
    function mapState(ary){
        let obj = {};
        ary.forEach(item=>{
            obj[item] = function(){
                //this 是当前实例
                return this.$store.state[item]
            }
        })
        return obj
    }
    function mapGetters(ary){
        let obj = {};
        ary.forEach(item=>{
            obj[item] = function(){
                //this 是当前实例
                return this.$store.getters[item]
            }
        })
        return obj
    }
    function mapActions(ary){
        let obj = {};
        ary.forEach(item=>{
            obj[item] = function(option){
                this.$store.dispatch(item,option)
            }
        })
        return obj;
    }
    function mapMutations(ary){
        let obj = {};
        ary.forEach(item=>{
            obj[item] = function(option){
                this.$store.commit(item,option)
            }
        })
        return obj;
    }
    return {
        Store,
        install,
        mapState,
        mapGetters,
        mapActions,
        mapMutations
    }
});