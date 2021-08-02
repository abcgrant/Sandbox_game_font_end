<template>
  <div class="loadings">
    <Load msg="Welcome to sandbox game"/>
    <div class="content">
      <img alt="logo" src="@/assets/全力以赴.gif">
      <el-form ref="form" :model="form" class="form">
        <el-form-item prop="gameID" class="input">
          <el-input class="input"
                    placeholder="游戏ID"
                    prefix-icon="el-icon-lollipop"
                    v-model="form.gameID"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="teamName">
          <el-input
              placeholder="学校名称"
              prefix-icon="el-icon-school"
              v-model="form.teamName"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="onSubmit">
            提交
          </el-button>
        </el-form-item>
      </el-form>
      </div>
  </div>
</template>

<script>
import Load from '@/components/Loading.vue'

export default {
  components: {
    Load
  },
  data(){
    return{
      form: {
        gameID: null,
        teamName: null,
      }
    }
  },
  methods:{
    onSubmit(){
      this.$store.dispatch("submit",{gameID:this.form.gameID,teamName:this.form.teamName})
    }
  }
}
</script>

<style scoped lang="scss">
@use "src/style/box-content";
@use "src/style/form";

.loadings{
  @include box-content.box;
  .form {
    @include form.form;
  }
}
</style>
