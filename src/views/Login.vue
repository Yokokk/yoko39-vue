<template>
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
      <el-form ref="form" :model="form" label-position="top" label-width="80px" class="login-form">
        <el-form-item label="用户名" required="true">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" required="true">
          <el-input v-model="form.passward"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        passward: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
.row-bg {
  height: 100%;
  background-color: #2d434c;
}
.login-form {
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  min-width: 400px;
}
</style>

