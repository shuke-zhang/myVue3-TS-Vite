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
        // 后台约定，响应成功，但是code不是10000，是业务逻辑失败
        if (res.data?.code !== 10000) {
            // showToast(res.data?.message || '业务失败')
            return Promise.reject(res.data)
        }
        return res
    },
    (err) => {
        // TODO 5. 处理401错误
        return Promise.reject(err)
    }
);

export default service;

