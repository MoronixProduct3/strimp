import Vue from 'vue'
import Banner from '../Banner.vue'
import vuetify from '../../plugins/vuetify'
import store from '../../store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(Banner)
}).$mount('#app')
