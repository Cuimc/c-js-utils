import Vue from 'vue'
import App from './App.vue'

import func from "../../../index"
Vue.use(func)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
