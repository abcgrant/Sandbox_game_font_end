import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {default as auth } from '@/api/auth'
import router from "@/router";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:{
      token:""
    },
  },
  getters: {
    userStatus(state){
      return state.userinfo['token']
    },
  },
  mutations: {
    saveUserinfo(state, token){
      state.userinfo['token'] = token;
    },
    clearUserinfo(state){
      state.userinfo = {token:''}
      // console.log("clear",state.userinfo['token'])
    },
  },
  actions: {
    login({commit}, formData){
      auth.login(formData.username,formData.password)
          .then((res: { data: string; })=>{
            if(res.data === 'none'){
              alert("用户不存在")
              return 'none'
            }else if (res.data === 'err'){
              alert("密码错误")
              return "密码错误"
            }else{
              console.log(res)
              commit("saveUserinfo", res.data)
              localStorage.setItem("token", res.data)
              router.push({path:'/loading'}).catch(err => (console.log(err)))
            }
          })
    },
    register({commit}, formData) {
      auth.register(...formData)
          .then((res: { data: string; }) => {
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
          })
    },
    async autoLogin({commit}){
      const token = localStorage.getItem('token')
      if(token){
        await auth.autoLogin(token)
            .then((res: { data: string; })=>{
              if(res.data === 'tokenTimeout'){
                alert("用户信息过期，请重新登录")
                router.push({path:'/login'}).catch(res=>{console.log(res)})
              }else {
                commit("saveUserinfo", res.data)
                localStorage.setItem('token', res.data)
              }
            })
            .catch((err: never)=>{
              console.log(err)
              router.push({path:'/login'}).catch(err=>{console.log(err)})
            })
      }else{
        router.push({path:'/login'}).catch(err=>{console.log(err)})
      }
    },
    logout({commit}, token){
      commit('clearUserinfo')
      localStorage.removeItem('token')
      auth.logout(token).then((res: never)=>{console.log(res)})
    }
  },
})
