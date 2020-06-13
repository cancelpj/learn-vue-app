/*
 * @Author: 彭俊
 * @Date: 2019-12-22 17:08:43
 * @LastEditors: 彭俊
 * @LastEditTime: 2020-06-13 13:44:31
 * @FilePath: /SP_WEB_iview/Users/pengjun/vscode-workspace/vue/learn-vue-app/src/main.js
 * @Description: 根对象
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './routes'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/iconfont.css'

import Vconsole from 'vconsole'
const vConsole = new Vconsole()
export default vConsole

Vue.use(VueRouter)
Vue.use(Mint);

Vue.config.productionTip = false

// runtime-only build（体积缩小30%）: import Vue from 'vue'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// compiler-included build : import Vue from 'vue/dist/vue.esm.js'
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })