import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// console.log(process);
Vue.config.productionTip = false;

Vue.filter('trans', function (val) {
  let obj = {
    userhandle: "员工操作权",
    departhandle: "部门操作权",
    jobhandle: "职务操作权",
    departcustomer: "部门全部客户",
    allcustomer: "公司全部客户",
    resetpassword: "重置密码"
  };
  let arr = val.split("|");
  return arr.map(item=>obj[item]).join(' | ')
})

router.beforeEach((to,from,next)=>{
  //to  时要去的路径 若to的路径 用户没权限 那么我们不执行 next即可
  let power = localStorage.getItem('power')||'';//当前用户权限
  if(/^\/\w+[/]?$/.test(to.path)){
    next()
  }else if(power.indexOf(to.meta.power)!=-1){
    next()
  }else{
    next(from)
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


