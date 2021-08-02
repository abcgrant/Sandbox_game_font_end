<template>
  <div class="box">
    <div class="content">
    <el-form ref="form" class="form">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="A地区" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="B地区" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="C地区" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
  </div>

</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped lang="scss">
@use "src/style/box-content";
@use "src/style/form";
.box{
    @include box-content.box;
    .form {
      @include form.form;
    }
}

</style>