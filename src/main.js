import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lod from 'lodash'
import Live2d from './components/Live2d'
Vue.config.productionTip = false
Vue.use(lod)
Vue.use(Live2d)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
