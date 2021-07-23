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
        <el-form-item prop="group">
          <el-input
              placeholder="学校名称"
              prefix-icon="el-icon-school"
              v-model="form.group"
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
        group: null,
      }
    }
  },
  methods:{
    onSubmit(){
      this.$store.dispatch("submit",{gameID:this.form.gameID,group:this.form.group})
    }
  }
}
</script>

<style scoped lang="scss">
.loadings{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  .content{
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 37vw;
    min-width: 270px;
    height: 70vh;
    border-radius: 13px;
    box-shadow:  0 2px 20px rgba(0, 0, 0, .12), 0 0 20px rgba(0, 0, 0, .04);
    .form {
      margin-top: 50px;
      //当在vue文件中，给el-input添加class命名，然后在style中设置样式，调整的是suffix的样式，要调整inner的样式，需要用到 /deep/ .el-input__inner 或 .s2>>>.el-input__inner（ps：搜索参考vue深度选择器）
      ::v-deep .el-input__inner {
        border-radius: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      }

      .el-button {
        border-radius: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
      }
    }
  }
}
</style>
