import {state, State} from './state'
import mutations from './mutations'
import actions from './actions';
import {ActionTree, GetterTree, ModuleTree, MutationTree} from 'vuex';

export const team: Team<State, any> = {
  state,
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