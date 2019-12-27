<template>
  <div>
    <el-container>
      <el-header class="cl">
        <h2 class="lt">CRM管理系统</h2>
        <div class="topTabBox lt">
          <div class="lt">
            <router-link to="/org" tag="span">组织结构</router-link>
          </div>
          <div class="lt">
            <router-link to="/crm" tag="span">客户管理</router-link>
          </div>
        </div>
        <div class="userNameBox rt">
          <span>你好：{{username}}</span>
          <span @click='signout'>安全退出</span>
        </div>
      </el-header>
      <div class="middle_content_box">
        <router-view></router-view>
      </div>

      <el-footer class="footer_bottom">Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /src
import {judgeLogin} from '@/api/index.js'
import {signout} from '@/api/login.js'
export default {
  name: "index",
  data() {
    return {};
  },
  created() {
    judgeLogin().then(flag=>{
      if(!flag){
        this.$router.push('/login')
      }
    })
  },
  computed: {
    username(){
      return localStorage.getItem('username')
    }
  },
  methods: {
    signout(){
      signout().then(data=>{
        if(data.code==0){
          this.$router.push('/login')
        }
      })
    }
  },
  components: {}
};
</script>
<style lang="less">
.topTabBox {
  padding: 0 60px;
  > div {
    cursor: pointer;
    margin: 0 10px;
    color: #aaa;
    box-sizing: border-box;
    &:hover {
      color: #fff;
    }
    > span {
      display: block;
      height: 100%;
    }
    > span.router-link-active {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      &::after {
        content: "";
        display: block;
        width: 100%;
        position: relative;
        border-bottom: 5px solid rgb(0, 146, 231);
        top: -5px;
      }
    }
  }
}
.userNameBox {
  > span:nth-child(2) {
    cursor: pointer;
    padding-left: 20px;
  }
}
.middle_content_box {
  position: absolute;
  top: 60px;
  bottom: 60px;
  left: 0;
  right: 0;
  .el-container {
    height: 100%;
    background-color: rgb(84, 92, 100);
    .el-aside {
      > .el-row {
        height: 100%;
        background-color: rgb(84, 92, 100);
      }
    }
  }
}
.footer_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.el-header,
.el-footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>