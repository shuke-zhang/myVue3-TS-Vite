import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
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
    },
    // q: 路由重定向
    {
        path:any: '/',

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;

