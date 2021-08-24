import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex';

import {User, user} from './user/index';
import {team} from './team/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    user,
    team
  },
};

export default new Vuex.Store<RootState>(store);

export interface RootState {
  [x: string]: any;
  version: string;
}
