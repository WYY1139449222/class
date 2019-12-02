<template>
    <div class="user">
        <header class="cl">
            <input type="text" placeholder="请输入内容" class="lt">
            <span class="lt">扫描</span>
            <span @click="change" class="rt">{{loginState?'登出':'登录'}}</span>
        </header>
        <in v-if="loginState"></in>
        <no-in v-else></no-in>
    </div>
</template>
<script>
// @ is an alias to /src
import {mapState} from 'vuex'
import In from './in'
import NoIn from './noIn'
export default {
    name: 'user',
    data() {
        return {
        
        }
    },
    computed: {
        ...mapState(['loginState'])
    },
    components: {
        in:In,'no-in':NoIn
    },
    methods: {
        change(){
            if(this.loginState){
                //当前是登录，需要登出
                localStorage.removeItem('token');
                this.$store.commit('stateChange',{loginState:false})
            }else{
                //当前是登出，需要登录
                this.$router.push('/login')
            }
        }
    },
}
</script>
<style lang="less" scoped>
.user{
    width: 90vw;
    margin:auto;
    >header{
        margin:5vw auto;
        height: 10vw;
        line-height: 10vw;
        >input{
            width: 60vw;
            height: 10vw;
            border:1px solid #eee;
            outline: none;
            border-radius: 2vw;
            text-indent: 3vw;
        }
        >span:nth-child(2){
            margin-left: 5vw;
        }
    }
}
</style>