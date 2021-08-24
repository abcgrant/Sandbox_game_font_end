import {default as auth} from "@/api/auth.ts";
import router from "@/router";
import Swal from 'sweetalert2'
import { State } from './state'
import {ActionTree, Commit} from 'vuex';
import {RootState} from '@/store';

export const actions: ActionTree<State, RootState> ={

  register({commit}: {commit: Commit}, formData: userForm) :Promise<unknown>{
    return auth.register(formData.username, formData.password)
      .then((res) => {
        if (res === '用户已存在') {
          alert("用户已存在")
          return "用户存在"
        } else {
          alert("注册成功")
          router.push({path: '/'}).then(res => {
            console.log(res)
          })
        }
      });
  },

  login({commit}: {commit: Commit}, userFormData: userForm) :Promise<unknown>{
    return auth.login(userFormData.username, userFormData.password)
      .then((res) => {
        if (res === "用户不存在") {
          Toast.fire({
            icon: 'warning',
            title: '用户不存在'
          }).then(r=>{
            console.log(r)
          })
        } else if (res === "用户名或密码错误") {
          Toast.fire({
            icon: 'warning',
            title: '用户名或密码错误'
          }).then(r=>{
            console.log(r)
          })
        } else {
          commit("saveUserinfo", res)
          Toast.fire({
            icon: 'success',
            title: '登陆成功'
          }).then(() => router.push({path: '/team'}).catch(err => (console.log(err))))
        }
      });
  },

  autoLogin: async ({commit}: {commit: Commit}): Promise<void> => {
    const token = localStorage.getItem('token')
    if(token){
      await auth.autoLogin(token)
        .then((res)=>{
          if(res === 'tokenTimeout'){
            alert("用户信息过期，请重新登录")
            router.push({path:'/login'}).catch(res=>{console.log(res)})
          }else {
            commit("saveUserinfo", res)
          }
        })
        .catch((err)=>{
          console.log(err)
          router.push({path:'/login'}).catch(err=>{console.log(err)})
        })
    }else{
      router.push({path:'/login'}).catch(err=>{console.log(err)})
    }},

  logout: ({commit}: {commit: Commit}, token :string): void=> {
    commit('clearUserinfo')
    localStorage.removeItem('token')
    auth.logout(token).then((res)=>{console.log(res)})
  },
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500
})

interface userForm {
  username: string;
  password: string;
}

interface res {
  data: string;
}

