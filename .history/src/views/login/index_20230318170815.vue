<script lang="ts" setup>
     import request from '@/utils/request';
const requestRes = async () => {
    let result = await request({
        url: 'pet/',
        method: 'get'
    });
    console.log(result);
    
}


</script>

<template>
    <div>
        这是登录页
    </div>
    <button @click="requestRes">点击获取</button>
</template>