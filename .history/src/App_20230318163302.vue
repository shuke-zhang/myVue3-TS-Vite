<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const updateName = () => {
  userStore.updateName('小明')
}
</script>

<template>
  <div>{{ userStore.name }}</div>
  <!-- q: 用TS写一个按钮，绑定一个函数，这个函数在 setup中声明 -->


  <button @click="updateName">点击修改人名</button>
</template>

<style scoped>
  
</style>
