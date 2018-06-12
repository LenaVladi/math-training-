import Vue from 'vue'
import App from './App.vue'

import StartScreen from './components/StartScreen.vue'
import Question from './components/Question.vue'
import Message from './components/Message.vue'
import ResultScreen from './components/ResultScreen.vue'

Vue.component('StartScreen', StartScreen)
Vue.component('Question', Question)
Vue.component('Message', Message)
Vue.component('ResultScreen', ResultScreen)

new Vue({
  el: '#app',
  render: h => h(App)
})
