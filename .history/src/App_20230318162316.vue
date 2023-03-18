<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>

<template>
  <div>{{ userStore }}</div>
</template>

<style scoped>
  
</style>
