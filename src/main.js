import Vue from 'vue'
import App from './App.vue'
import XesKatex from 'xes-katex'
import 'xes-katex/dist/katex.css'

Vue.use(XesKatex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
