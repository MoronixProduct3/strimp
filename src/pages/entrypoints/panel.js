import Vue from 'vue'
import Panel from '../Panel.vue'
import vuetify from '../../plugins/vuetify'
import store from '../../store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(Panel)
}).$mount('#app')
