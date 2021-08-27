import {state, State} from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions';
import {ActionTree, GetterTree, ModuleTree, MutationTree} from 'vuex';
import {RootState} from '@/store';

export const team: Team<State, RootState> = {
  state,
  getters,
  mutations,
  actions
}

export interface Team<State, R> {
  namespaced?: boolean;
  state?: State | (() => State);
  getters?: GetterTree<State, R>;
  actions?: ActionTree<State, R>;
  mutations?: MutationTree<State>;
  modules?: ModuleTree<R>;
}