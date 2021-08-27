import { State } from './state'

export default {
  userStatus(state: State) {
    return state.userinfo['token']
  },
}