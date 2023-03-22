// 引入mock模块
console.log(1);

import Mock from 'mockjs'
// 引入mock数据
// mock 一个登录接口需要有返回内容，这里我们使用mockjs来模拟数据
Mock.setup({
    timeout: '200-600'
})
const res = Mock.mock(
    'http://localhost:4090/api/login',
    (req: any) => {
        const { username, password } = JSON.parse(req.body)
       
        console.log('判断二次数据条件',username === '19152006616' && password === '5200603' ); 
        

        try {
            if (username === '15012342630' && password === '5200207') {
                console.log('这是成功的');

                return {
                    code: 200,
                    message: '登录成功',
                    token: 'RgdSyTA_vIhEDRTKMV2syG4qfPYPEJwVI78Vu-i6i9g'
                }
            } else {
                throw new Error("账号密码错误");
            }
        } catch (error) {
            return {
                this.status = 404,
                code: 500,
                message: '登录失败',
                token: ''
            }
        }
       
    }
)
export default res