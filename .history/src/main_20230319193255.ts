import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from '@/router';

// ElementPlus 导入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@mock/index'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')


