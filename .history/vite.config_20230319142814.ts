
import { defineConfig } from 'vite' // 导入配置对象
import vue from '@vitejs/plugin-vue' // 导入vue插件
import * as path from 'path'; // 导入路径模块
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将@映射为src目录
    }      
  },
  plugins: [vue()], // 使用vue插件
  server: { // 服务器配置
    // q: vite.config.ts中应该怎么配置historyApiFallback: true
    // a: 在server里面配置


    historyApiFallback: true,

    port: 4090, // 端口号
    hmr: { // 热更新配置
      host: 'localhost',
      port: 4090,
    },
    proxy: { // 代理配置
      '/api': {
        target: 'http://localhost:4090', // 代理目标
        changeOrigin: true, // 是否允许跨域
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径
      }
    },
    // q: historyApiFallback: true 用TS代码该怎么写


    // a: 加在server里面

  }
})
// q； rewrite: (path) => path.replace(/^\/api/, '') 表示什么意思
// a: 代理的路径是 /api/xxx，但是实际请求的路径是 /xxx，所以需要重写路径
// q: hmr 热更新配置有什么用
// a: 热更新配置是为了解决热更新时，浏览器地址栏的端口号不变的问题

