import Vue from 'vue'
import App from './App.vue'
import Jxs from './Jxs.vue'



Vue.component('jxs',Jxs);
new Vue({
  el: '#app',
  render: h => h(App)
})
