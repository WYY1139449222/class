<template>
  <div>
    <my-header></my-header>
    <van-tabs class="topTab" v-model="active" swipeable @change="change" line-width='35px' color='#333' animated >
      <van-tab v-for="item in ary" :title="item.title" :key="item.to"
      >
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "./header";
export default {
  name: "home",
  data() {
    return {
    //   active: 0,
      ary: [
        {
          title: "关注",
          to: "/home/focus"
        },
        {
          title: "推荐",
          to: "/home/recommend"
        },
        {
          title: "热榜",
          to: "/home/hot"
        }
      ]
    };
  },
 
  components: {
    "my-header": Header
  },
  methods: {
    change(n) {
      //   console.log(n);

      //   console.log(arguments,this.active);
      this.$router.push(this.ary[n].to);
    }
  },
  computed: {
      active:{
          get(){
              return this.ary.findIndex(item=>item.to===this.$route.path)
          },
          set(){}
      }
  },
  watch:{
      '$route'(to){
          //侦听路由的变化 第一次监听不到
          console.log(to);
          this.ary.forEach((item,index)=>{
              if(item.to==to.path){
                  this.active = index;
              }
          })
      }
  }
};
</script>
<style lang="less">
.topTab>.van-tabs__wrap {
  box-shadow: 0px 12px 8px -3px #eee;
  &:after {
    border: none;
  }

}
</style>