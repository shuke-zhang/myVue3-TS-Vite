import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

// Request interceptors
service.interceptors.request.use(
    // q: 下面这一行为什么会报错
    // a: 因为这里的config是一个AxiosRequestConfig类型，而不是一个对象
    // (config: { [key: string]: any }) => {

    (config ) => {
        // do something
        return config;
    },
    (error) => {Promise.reject(error);
    }
);

// Response interceptors
service.interceptors.response.use(
    // q: 下面这一行为什么会报错
    // a: 因为这里的response是一个AxiosResponse类型，而不是一个对象
    // (response: { [key: string]: any }) => {
     (response: any) => {
        // do something
    },
    (error: any) => {
        // do something
        return Promise.reject(error);
    }
);

export default service;

