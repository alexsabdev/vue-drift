import Vue from 'vue'
import App from './App.vue'
import VueDrift from '../../build/vue-drift'

Vue.use(VueDrift, { appId: process.env.DRIFT_APPID })

new Vue({
  el: '#app',
  render: h => h(App),
});
