<template>
  <div class="loginBox">
    <header class="cl">
      <div class="lt" @click="close">X</div>
      <div class="rt">免密码登录</div>
    </header>
    <h2>密码登录</h2>
    <div class="inpBox">
      <input type="text" placeholder="请输入用户名或手机号" />
      <input type="password" placeholder="请输入密码" />
    </div>
    <div class="loginBtn">登录</div>
    <div class="cl help">
      <div class="lt">海外手机号登录</div>
      <div class="rt">需要帮助</div>
    </div>
    <div class="otherLogin">
      <div>微信</div>
      <div>QQ</div>
      <div>新浪</div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$router.back(); //点击关闭按钮 回到原来的页面
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.loginBox {
  padding: 5vw;

  > h2 {
    height: 30vw;
    line-height: 30vw;
    width: 90vw;
    text-align: center;
  }
  .inpBox {
    width: 80vw;
    margin: 5vw auto;
    input {
      border: none;
      display: block;
      outline: none;
      width: 100%;
      height: 15vw;
      font-size: 5vw;
      text-indent: 5vw;
      border-bottom: 1px solid #eee;
    }
  }
  .loginBtn {
    width: 80vw;
    height: 15vw;
    line-height: 15vw;
    margin: 5vw auto;
    background: rgb(16, 78, 248);
    color: #fff;
    font-size: 8vw;
  }
  .help {
    width: 80vw;
    margin: 10vw auto;
  }
  .otherLogin {
    width: 80vw;
    display: flex;
    margin: auto;
    position: fixed;
    bottom: 10vw;
    left: 10vw;
    > div {
      flex: 1;
    }
  }
}
</style>