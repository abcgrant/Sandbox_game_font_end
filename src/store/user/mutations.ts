import { State } from './state'

export default {
  saveUserinfo: (state: State, token: string): void => {
    localStorage.setItem('token', token)
    state.userinfo['token'] = token;
  },
  clearUserinfo(state: State): void{
    state.userinfo = {username:"", token:''}
  },
}