// 引入mock模块
import Mock from 'mockjs'
// 引入mock数据
// mock 一个登录接口需要有返回内容，这里我们使用mockjs来模拟数据
Mock.setup({
    timeout: '200-600'
})
Mock.mock('/api/login', 'post', {
    code: 200,
    message: '登录成功',
    data: {
        token: 'RgdSyTA_vIhEDRTKMV2syG4qfPYPEJwVI78Vu-i6i9gadmin-token'
    }
})
