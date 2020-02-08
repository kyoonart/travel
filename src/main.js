import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.css'
import './assets/border.css'
import fastClick from 'fastclick'
import './assets/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')