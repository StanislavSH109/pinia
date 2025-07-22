<template>
  <h1>First Component</h1>
  <p>My Count: {{ store.count }}</p>
  <p>My DoubleCount: {{ store.doubleCount }}</p>
  <button @click="store.increment">Добавить</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore()

</script>

<style scoped>

</style>
