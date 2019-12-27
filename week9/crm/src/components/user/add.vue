<template>
  <el-form ref="form" :model="form" label-width="80px" class="myform">
    <el-form-item label="性名" style="width:300px">
      <el-input v-model="form.name" ></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.sex">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="邮箱" style="width:300px">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="电话" style="width:300px">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item label="部门">
      <el-select v-model="form.departmentId" placeholder="请选择部门">
        <el-option v-for="item in departmentList" :label="item.name" :value="item.id+''" :key='item.id'></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="职务" >
      <el-select v-model="form.jobId" placeholder="请选择职务">
        <el-option v-for="item in jobList" :label="item.name" :value="item.id+''" :key='item.id'></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="自我介绍" style="width:300px" rows='6'>
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button >取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {addUser,changeUser} from '@/api/index.js'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      form: {
        department: "",
        departmentId: "",
        desc: "",
        email: "",
        id: '',
        job:'',
        jobId: "",
        name: "",
        phone: "",
        sex: ""
      },
    };
  },
  methods: {
    onSubmit() {
        let id = this.$route.query.id;
        this.form.id=id;
        
        this.form.id= this.form.id?this.form.id:Math.random();
        console.log(this.form);
        this.form.userId = id;
      (id?changeUser:addUser)(this.form).then((data)=>{
          if (data.code == 0) {
              //成功
              this.$confirm((id?'更新':'添加')+"成功！", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "success"
              }).then(data => {
                this.$router.push("/org/user");
              });
            } else {
              this.$message.error((id?'更新':'添加')+"失败");
            }
      })
    },
     
  },
  created() {
    let id = this.$route.query.id;
    let obj = this.$store.state.userList.filter(item=>item.id == id)[0];
    this.form = obj || this.form;
    if(!this.form.job){
        this.form.jobId=''
    };
    this.$store.dispatch('changeJobList');
  },
  computed: {
    ...mapState(['departmentList','jobList']),
      // departmentList(){
      //     return this.$store.state.departmentList
      // },
      // jobList(){
          
      //     return this.$store.state.jobList
      // }
  },
};
</script>