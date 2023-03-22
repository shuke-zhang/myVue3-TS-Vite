import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
    }, 
    {
        path: '/login', // 路由地址
        name: 'Login', // 路由名称
        meta: {
            title: '登录', // 路由标题
            keepAlive: true, // 是否缓存
            // q: 为什么这里要加一个 requireAuth: false
            requireAuth: false // 是否需要登录
        },
        component: () => import('@/views/login/index.vue')
    }
    
]

const router = createRouter({
    // q: history: createWebHistory(),是什么意思
    
    history: createWebHashHistory(),
    routes
});
export default router;

