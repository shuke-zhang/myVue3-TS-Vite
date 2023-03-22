import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router';
import ElementPlus from 'element-plus'
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')


