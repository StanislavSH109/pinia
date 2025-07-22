<template>
  <div class="container">
    <h2>Product List</h2>
    <ProductCard v-for="product in productsStore.products" :product="product"/>
  </div>
</template>


<script setup lang="ts">
import ProductCard from './components/ProductCard.vue';
import { useProductStore } from './stores/cart';
import { ref, onMounted } from 'vue';

const productsStore = useProductStore();

onMounted(() => {
  productsStore.loadProducts()
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
