<template>
  <div class="mainPage">
    <div>
      <router-view></router-view>
    </div>
    <nav class="navBox">
      <div>
        <router-link to="/home">
          <i class="iconfont icon-11"></i>
          <div>首页</div>
        </router-link>
      </div>
      <div>
        <router-link to="/vip">
          <i class="iconfont icon-huiyuan-"></i>
          <div>会员</div>
        </router-link>
      </div>
      <div>
        <i class="iconfont icon-yingyong-" @click="show"></i>
      </div>
      <div>
        <router-link to="/notify">
          <i class="iconfont icon-tongzhi"></i>
          <div>通知</div>
        </router-link>
      </div>
      <div>
        <router-link to="/user">
          <i class="iconfont icon-icon-user"></i>
          <div>{{loginState?'我的':'未登录'}}</div>
        </router-link>
      </div>
    </nav>
    <my-dialog :isshow="flag" @close="close">
      你好啊 啊哈哈 皇后和 看啥奥i好的
    </my-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import mydialog from "@/components/dialog.vue";
// @ is an alias to /src
export default {
  data() {
    return {
      flag: false
    };
  },
  created() {
    if (!localStorage.getItem("token")) {
      // this.$router.push('/login')
    }
  },
  computed: {
    ...mapState(["loginState"])
  },
  components: {
    "my-dialog": mydialog
  },
  methods: {
    show() {
      this.flag = true;
    },
    close() {
      this.flag = false;
    }
  }
};
</script>
<style lang="less" scoped>
//scoped 当前样式 只对当前模板 起作用
.mainPage {
  > div:nth-child(1) {
    padding-bottom: 18vw;
  }
}
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18vw;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  background: #fff;
  > div {
    flex: 1;
    > i {
      font-size: 10vw;
      color: blueviolet;
    }
    text-align: center;
    > a {
      > i {
        font-size: 7vw;
        font-weight: 800;
      }
      text-decoration: none;
      color: red;
      width: 100%;
      height: 100%;
      display: block;
      font-size: 5vw;
    }
    > a.router-link-active {
      color: gold;
    }
  }
}
</style>