import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {default as auth } from '@/api/auth'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:{
      username:"",
      token:""
    },
    teaminfo:{
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
      user.saveUserinfo(state, token)
    },
    clearUserinfo(state){
      state.userinfo = {username:"", token:''}
    },
  },
  actions: {
    // user
    login({commit}, formData){
      user.login({commit}, formData)
    },
    register({commit}, formData) {
      user.register({commit}, formData)
    },
    autoLogin({commit}){
      user.autoLogin({commit})
    },
    logout({commit}, token){
      user.logout({commit}, token)
    },
    // team
    submit({commit}, formData){
      auth.submit(this.state.userinfo.token, formData.gameID, formData.teamName).then((r: any)=>{
        console.log(r)
      })
    }
  },
})
