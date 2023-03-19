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
        <div>
        登录页
        </div>
    </div>
</template>

<style lang="less" scoped> 
body {
    width: 100%;    
    height: 100%;
}
.contaniner {
    width: 100%;
    height: 100%;
    z-index: 9;
    background-image: url('@/assets/images/R-C.jpg');
    background-size: cover;
    background-size: auto;
}



</style>