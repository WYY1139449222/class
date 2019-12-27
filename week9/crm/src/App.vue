<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>
<script>
import {init} from '@/api/login.js'
export default {
  created() {
    init(this)
  },
}
</script>
<style lang="less">
*{
  margin: 0;padding: 0;list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.lt{
  float: left;
}
.rt{
  float: right;
}
.cl::after{
  content: '';
  display: block;
  clear: both;
}

</style>
