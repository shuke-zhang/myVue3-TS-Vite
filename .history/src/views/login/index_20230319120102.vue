<script lang="ts" setup>
     import request from '@/utils/request';
const requestRes = async () => {
    let result = await request({
        url: '/login/password',
        method: 'POST',
        data: {
             mobile: '13211112222',
            // 密码 abc123456 测试：出现非10000的情况
            password: 'abc12345'
        }
        
    });
    console.log(result);
    
}


</script>

<template>
    <div class="contaniner">
        登录页
    </div>
</template>

<style lang="less" scoped> 
.contaniner {
    width: 100%;
    height: 100%;
    background: url('@/assets/images/login-bg.jpg')  no-repeat;
    background-size: cover;
    }
   



</style>