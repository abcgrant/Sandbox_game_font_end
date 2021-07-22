<template>
  <div class="loadings">
    <Load msg="Welcome to sandbox game"/>
    <div class="content">
        <el-form ref="form" :model="form">
          <el-form-item prop="uid" class="input">
            <el-input class="input"
                      placeholder="用户名"
                      prefix-icon="el-icon-user"
                      v-model="form.uid"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input
                placeholder="密码"
                prefix-icon="el-icon-lock"
                v-model="form.pwd"
                type="password"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%">
              login
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
        uid: null,
        pwd: null,
      }
    }
  }
}
</script>

<style scoped lang="scss">
.loadings{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  .content{
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    min-width: 270px;
    height: 70vh;
    border-radius: 13px;
    box-shadow:  0 2px 20px rgba(0, 0, 0, .12), 0 0 20px rgba(0, 0, 0, .04);
  }
}
</style>
