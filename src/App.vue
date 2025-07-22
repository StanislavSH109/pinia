<template>
  <FirstComponent />
  <SecondComponent />
</template>


<script setup lang="ts">
import FirstComponent from './components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';
import { useProductStore } from './stores/cart';
import { onMounted } from 'vue';

const productsStore = useProductStore();

onMounted(() => {
  productsStore.loadProducts()
})
</script>

<style scoped></style>
