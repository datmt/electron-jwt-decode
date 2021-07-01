import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
import VueCodemirror from 'vue-codemirror'
 
// require styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/base16-dark.css'
// import '../../node_modules/codemirror/lib/codemirror.css'
// import '../../node_modules/codemirror/mode/javascript/javascript'
import 'codemirror/mode/javascript/javascript.js'
// import '../../node_modules/codemirror/theme/eclipse.css'


Vue.use(VueCodemirror)
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
