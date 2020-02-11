import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Citys from '../views/Citys.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
    // require styles
Vue.use(VueAwesomeSwiper)
Vue.use(swiper)
Vue.use(swiperSlide)
Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/city',
        name: 'Citys',
        component: Citys
    }

]

const router = new VueRouter({
    routes
})

export default router