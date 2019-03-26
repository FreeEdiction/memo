import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from '../src/index.js'

Vue.use(BootstrapVue)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})