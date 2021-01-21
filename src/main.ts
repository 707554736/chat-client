import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Viewer from 'v-viewer'

Vue.config.productionTip = false

import './ant-design'

import moment from 'moment'

Vue.prototype.$moment = moment

// 图片预览插件
import 'viewerjs/dist/viewer.css'

console.log(App);

let vm = new Vue({
  router,
  store,
  render: (h) => h(App)
})

vm.$mount('#app')
