import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'
import App from './App.vue'
import MenuPage from './components/MenuPage.vue'
import AdminPage from './components/AdminPage.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: MenuPage },
  { path: '/admin', component: AdminPage }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
