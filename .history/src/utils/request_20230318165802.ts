import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create({
    // 黑马在线地址
    baseURL: 'https://consult-api.itheima.net/',
    timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
    // q: 下面这一行为什么会报错
    // a: 因为这里的config是一个AxiosRequestConfig类型，而不是一个对象
    // (config: { [key: string]: any }) => {

    (config) => {
        // 携带token
        // const store = useUserStore()
        // if (store.user?.token && config.headers) {
        //     config.headers['Authorization'] = `Bearer ${store.user?.token}`
        // }
        return config;
    },
    (error) => {Promise.reject(error);
    }
);

// Response interceptors
service.interceptors.response.use(
    (res) => {
        // TODO 3. 处理业务失败
        // TODO 4. 摘取核心响应数据
        return res
    },
    (err) => {
        // TODO 5. 处理401错误
        return Promise.reject(err)
    }
);

export default service;

