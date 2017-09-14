import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import './assets/common.scss'
import './assets/variables.scss'

import App from './App.vue'
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
console.log(process.env)
