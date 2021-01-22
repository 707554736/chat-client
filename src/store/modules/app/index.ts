import { RootState } from '@/store'
import { Module } from 'vuex'
import actions from "./actions"
import mutations from './mutations'
import getters from './getters'
import state from './state'
import { AppState } from './state'

const app: Module<AppState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

export default app