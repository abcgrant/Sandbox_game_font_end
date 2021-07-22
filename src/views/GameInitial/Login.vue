<template>
  <div class="content">
    <div class="title">
      <img alt="logo" src="@/assets/logo.png" width="30%">
      <span>Sandbox Game</span> 沙盘游戏
    </div>
    <div class="login">
      <div class="aside">
      </div>
      <div class="box">
        <div class="login-t">
          {{status}}
        </div>
        <div class="form">
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
            <el-form-item v-if="status==='register'" prop="pwd2">
              <el-input
                  placeholder="确认密码"
                  prefix-icon="el-icon-lock"
                  v-model="form.pwd2"
                  type="password"
              >
              </el-input>
            </el-form-item>
            <el-form-item v-if="status==='login'">
              <el-button type="primary" style="width: 100%" @click="onLogin">
                login
              </el-button>
            </el-form-item>
            <el-form-item v-if="status==='register'">
              <el-button type="primary" style="width: 100%" @click="onRegister">
                register
              </el-button>
            </el-form-item>
            <div class="tips" @click="register">
              <a href="#">{{ tips[status] }}</a>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import auth from "@/api/auth";
import DynamicLine from '@/helper/dynamicLine';

export default {
  data() {
    return {
      users: [
        {
          uid: "user1",
          pwd: "123456",
        },
      ],
      form: {
        uid: null,
        pwd: null,
        pwd2: null,
      },
      status: 'login',
      tips:{login:'没有账号，点击注册', register:'已有帐号点击登录'}
    };
  },
  mounted() {
    DynamicLine()
  },
  methods: {
    onLogin() {
      this.$store.dispatch("login",{username:this.form.uid,password:this.form.pwd})
    },
    register(){
      this.status === 'login' ? this.status='register' : this.status='login'
    },
    onRegister(){
      auth.register(this.form.uid, this.form.pwd)
          .then((data)=>{
            console.log(data)
          })
    },
  },
};
</script>

<style scoped lang="scss">
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .title{
    margin: -50px auto 50px;
    padding-left: 20vw;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    font-size: 30px;
    font-weight: bolder;
    color: darkorange;
    span{
      padding-left: 1vw;
      color: cornflowerblue;
    }
  }
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    min-width: 270px;
    height: 60vh;
    border-radius: 13px;
    box-shadow:  0 2px 20px rgba(0, 0, 0, .12), 0 0 20px rgba(0, 0, 0, .04);
    .aside{
      width: 50%;
      height: 100%;
      border-radius: 13px 0 0 20px;
      background: url("https://images.uiiiuiii.com/wp-content/uploads/2020/08/i-illust-nm08011-2-03.jpg");
    }
    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 30%;
      min-width: calc(270*0.9px);
      height: 100%;
      padding: 20vh 10% 0 10%;
      .login-t{
        height: 20%;
        font-size: 35px;
        font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
        font-weight: bold;
        margin-bottom: 6px;
      }
      .form {
        height: 80%;
        //当在vue文件中，给el-input添加class命名，然后在style中设置样式，调整的是suffix的样式，要调整inner的样式，需要用到 /deep/ .el-input__inner 或 .s2>>>.el-input__inner（ps：搜索参考vue深度选择器）
        ::v-deep .el-input__inner {
          border-radius: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        }
        .el-button {
          border-radius: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        }
        .tips{
          margin-top: -15px;
          text-align: right;
          font-size: 2px;
        }
      }
    }
  }
}


</style>