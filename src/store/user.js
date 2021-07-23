import {default as auth} from "@/api/auth";
import router from "@/router";
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500
})

const user = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  login: ({commit}, formData) => auth.login(formData.username,formData.password)
    .then((res)=>{
      if(res.data === 'none'){
        alert("用户不存在")
        return 'none'
      }else if (res.data === 'err'){
        alert("密码错误")
        return "密码错误"
      }else if(res.data === '用户名或密码错误'){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Toast.fire({
          icon: 'warning',
          title: '用户名或密码错误'
        })
      }
      else{
        console.log(res)
        commit("saveUserinfo", res.data)
        localStorage.setItem("token", res.data)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Toast.fire({
          icon: 'success',
          title: '登陆成功'
        }).then(r => router.push({path:'/team'}).catch(err => (console.log(err))))
      }
    }),

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  register: ({commit}, formData) => auth.register(...formData)
    .then((res) => {
      if (res.data === 'repeat') {
        alert("用户已存在")
        return "用户存在"
      } else {
        console.log(res.data)
        commit("saveUserinfo", res.data)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        localStorage.setItem('token', res.data['token'])
        router.push({path:'/'}).then(res=>{console.log(res)})
      }
    }),

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  autoLogin: async ({commit}) => {
    const token = localStorage.getItem('token')
    if(token){
      await auth.autoLogin(token)
        .then((res)=>{
          if(res.data === 'tokenTimeout'){
            alert("用户信息过期，请重新登录")
            router.push({path:'/login'}).catch(res=>{console.log(res)})
          }else {
            commit("saveUserinfo", res.data)
            localStorage.setItem('token', res.data)
          }
        })
        .catch((err)=>{
          console.log(err)
          router.push({path:'/login'}).catch(err=>{console.log(err)})
        })
    }else{
    router.push({path:'/login'}).catch(err=>{console.log(err)})
  }},

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  logout: ({commit}, token) => {
    commit('clearUserinfo')
    localStorage.removeItem('token')
    auth.logout(token).then((res)=>{console.log(res)})
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  saveUserinfo: (state, token) => {
    console.log(state)
    state.userinfo['token'] = token;
  },

}

export default user