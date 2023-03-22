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
       
        if (username === '15012342630' && password === '5200207' || username === '19152006616' && password === '5200603') {

                return {
                    code: 200,
                    message: '登录成功',
                    token: 'RgdSyTA_vIhEDRTKMV2syG4qfPYPEJwVI78Vu-i6i9g'
                }
            } else {
                throw new Error("账号密码错误");
            }
      
       
    }
)
export default res

// q: mock 如何用mock.js主动抛出一个请求状态码是400的错误
// a: 通过mockjs的mock方法来模拟数据，mock方法的第二个参数是一个函数，这个函数的参数是一个对象，这个对象有一个body属性，这个body属性就是请求体，我们可以通过JSON.parse(req.body)来获取请求体的数据，然后我们就可以根据请求体的数据来模拟数据了，这里我们模拟的是登录接口，所以我们需要判断请求体中的账号和密码是否正确，如果正确就返回一个登录成功的数据，如果不正确就抛出一个错误，这样就可以模拟一个登录失败的数据了


