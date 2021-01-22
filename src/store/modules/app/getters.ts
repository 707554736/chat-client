// 此文件存get方法等
import { GetterTree } from 'vuex'
import { AppState } from './state'
import { RootState } from '../../index'
import cookie from 'js-cookie'

const getters: GetterTree<AppState, RootState> = {
  background(state) {
    state.background
    return
  }
}

export default getters