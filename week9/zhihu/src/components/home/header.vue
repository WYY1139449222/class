<template>
  <div class="headerBox">
    <div>
      <van-icon name="tv-o" class="lt" />
      <van-search placeholder="请输入搜索关键词" v-model="value" class="lt" />
      <van-icon name="calender-o" class="rt" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "myheader",
  data() {
    return {
      value: "",
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
.headerBox {
  > div:nth-child(1) {
    display: flex;
    padding: 5vw;
    align-items: center;
    > .lt {
      width: 10vw;
      font-size: 8vw;
      text-align: right;
    }
    > div {
      flex: auto;
    }
    > .rt {
      width: 10vw;
      font-size: 8vw;
      text-align: left;
    }
  }
}
</style>