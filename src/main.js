import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false

// 根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// main.js 的作用是入口文件
// 创建一个根实力
// 复杂全局范围的依赖导入
