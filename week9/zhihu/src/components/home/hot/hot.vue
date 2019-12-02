<template>
  <div class="hotBox">
    <van-tabs type="card" v-model="index" @change='getList'>
      <van-tab v-for="item in ary" :title='item.til' :key='item.type'>
        <my-item v-for="(i,n) in hotList" :key='i.ts' :data='i' :index='n'></my-item>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
// @ is an alias to /src
import Item from "./item";
import { mapState } from 'vuex';

// import {hotlist} from '@/api/home'
export default {
  data() {
    return {
          index:0,
          flag:true,
          oldType:'',
          ary:[{
                til:'全部',
                type:'tuijian'
            },
            {
                til:"科技",
                type:'keji'
            },
            {
                til:"教育",
                type:'jiaoyu'
            },{
                til:"娱乐",
                type:'yule'
            },{
                til:"金融",
                type:'jinrong'
            },{
                til:"汽车",
                type:'qiche'
            },{
                til:"体育",
                type:'tiyu'
            }],
    };
  },
  created() {
      this.getList()
      
      window.onscroll = ()=>{
        if(!this.flag)return
        this.getMore()

      }
  },
  beforeDestroy() {
    window.onscroll=null;
  },
  methods: {
    getList() {
      this.$store.dispatch('getHotList',{
        newType:this.ary[this.index].type,
        oldType:this.oldType,//旧值怎么保存
        count:10,
        reload:false,
        category:this.ary[this.index].type
      }).then(()=>{
        this.flag=true
      })
      this.oldType = this.ary[this.index].type//更新oldType
      // hotlist().then(data => {
      //   console.log(data);
      // });
    },
    getMore(){
      let app = document.getElementById('app');
      let ct = document.documentElement.clientHeight||document.body.clientHeight;
      let st = document.documentElement.scrollTop;
      if(app.clientHeight<=st+ct+50){
        this.flag=false
        this.getList()
      }
    },
    
  },
  components: {
    "my-item": Item
  },
  computed: {
    ...mapState(['hotList'])//把hotList从vuex中拿到本组件
  },
};
</script>
<style lang="less">
.hotBox {
  margin-top: 3vw;
  text-align: center;
  .van-tabs__nav--card {
    border: none;
  }
  .van-tabs__nav--card .van-tab {
    border: none;
    border-radius: 2px;
    color: #646464;
    background-color: #f6f6f6;
    margin: 0 1vw;
    line-height: 30px;
    flex-basis: 18% !important;
  }
  .van-tabs__nav--card .van-tab.van-tab--active {
    font-weight: 500;
    color: #0084ff;
    background-color: rgba(0, 132, 255, 0.1);
  }
}
</style>