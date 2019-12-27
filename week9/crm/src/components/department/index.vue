<template>
  <el-table :data="tableData" style="width: 100%" stripe border height="100%">
    <el-table-column label="编号" type="index" width="100" align="center" :index="indexMethod"></el-table-column>
    <el-table-column label="名称" width="180" align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="描述" align="center">
      <template slot-scope="scope">
        <el-popover  placement="top">
          <p>描述</p>
          <div slot="reference" class="name-wrapper">{{ scope.row.desc }}</div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="200" align="center">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { delDpList } from "@/api/index.js";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("changeDpList");
  },
  methods: {
    handleEdit(index, row) {
    //  this.$router.push('/org/addDepartment')
      this.$router.push({
        path:'/org/addDepartment',
        query:{id:row.id}
      })
    },
    handleDelete(index, row) {
      this.$confirm("此操作将删除该项, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        //点击了确定按钮 调用API 中的 delDpList方法
        delDpList(row.id)
          .then(data => {
            if (data.code == 0) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.$store.dispatch("changeDpList");
            }
          })
          .catch(err => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      });
    },
    indexMethod(index) {
      return index + 1;
    }
  },
  computed: {
    tableData() {
      return this.$store.state.departmentList;
    }
  }
};
</script>