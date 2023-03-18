import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'

// 创建vue实例
const app = createApp(App)
createApp(App).use(store).mount('#app')
