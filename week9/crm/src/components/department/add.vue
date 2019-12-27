<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="myform">
    <el-form-item label="部门名称" prop="name">
      <el-input v-model.trim="form.name" style="width:400px"></el-input>
    </el-form-item>
    <el-form-item label="部门描述" prop="desc">
      <el-input type="textarea" v-model.trim="form.desc" style="width:400px" rows="6"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click='$router.back()'>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { addDpList,undateDpList } from "@/api/index.js";
export default {
  data() {
    return {
      form: {
        name: "",
        desc: ""
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(flag => {
        if (flag) {
            let id = this.$route.query.id;
            this.form.departmentId=id;
            (id?undateDpList:addDpList)(this.form).then(data => {
            if (data.code == 0) {
              //成功
              this.$confirm((id?'更新':'添加')+"成功！", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "success"
              }).then(data => {
                this.$router.push("/org/department");
              });
            } else {
              this.$message.error((id?'更新':'添加')+"失败");
            }
          });
        }else{
            this.$message.error('必填项不能为空')
        }
      });
    }
  },
  created() {
    let id = this.$route.query.id;
    let obj = this.$store.state.departmentList.filter(item=>item.id == id)[0];
    console.log(obj);
    this.form = obj ? obj : this.form;
  },
};
</script>
<style lang="less" >
.myform {
  text-align: left;
  background: #fff;
  padding: 20px;
  min-height: 100%;
  box-sizing: border-box;
}
</style>