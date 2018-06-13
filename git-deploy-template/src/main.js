// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import StartScreen from './components/StartScreen.vue'
import Question from './components/Question.vue'
import Message from './components/Message.vue'
import ResultScreen from './components/ResultScreen.vue'

Vue.component('StartScreen', StartScreen)
Vue.component('Question', Question)
Vue.component('Message', Message)
Vue.component('ResultScreen', ResultScreen)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
