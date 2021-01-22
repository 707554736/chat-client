import { MutationTree } from 'vuex'
import { SET_BACKGROUND, SET_MOBILE } from './mutation-types'
import { AppState } from './state'
import cookie from 'js-cookie'
// localStorage 实现本地存储 存数据setItem, 取数据getItem 删除存储数据 removeItem 更改数据也用set
/**
  . localStorage在浏览器的隐私模式下面是不可读取的。
  . localStorage本质上是对字符串的读取，有json格式时需要JSON.stringify()转化为字符串。
  . localStorage不能被爬虫抓取到
 */
const mutations: MutationTree<AppState> = {
  [SET_MOBILE](state, payload: boolean) {
    state.mobile = payload
  },

  [SET_BACKGROUND](state, payload: string) {
    console.log(state, payload);
    state.background = payload
    localStorage.setItem('background', payload)
  }
}

export default mutations