<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>

<template>
  <div>{{ userStore.name }}</div>
</template>

<style scoped>
  
</style>
