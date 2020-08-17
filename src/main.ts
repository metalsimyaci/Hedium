import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icons/index'
import vuetify from '@/plugins/vuetify'
// Vue.config.productionTip = false

import './assets/styles/main.scss';
import SvgIcon from '@/components/SvgIcon.vue';
Vue.component('svg-icon',SvgIcon)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
