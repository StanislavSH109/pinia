<template>
  <div class="container">
    <h2>Product List</h2>
    <label>
      is authorized:<input type="checkbox" v-model="authStore.isAuth" />
      <div class="id">
        <h2>Basket id:</h2>
        <span class="id__number" v-for="{ product_id } in basketStore.productsInBasket">{{ product_id }}, </span>
      </div>
    </label>
    <div class="wrapper">
      <ProductCard
        v-for="product in productsStore.products"
        :product="product"
        @click="() => basketStore.addInBasket(product)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from './components/ProductCard.vue';
import { useAuthStore } from './stores/auth';
import { useBasketStore } from './stores/basket';
import { useProductStore } from './stores/cart';
import { ref, onMounted } from 'vue';

const productsStore = useProductStore();

const authStore = useAuthStore();
const basketStore = useBasketStore();

onMounted(() => {
  productsStore.loadProducts();
});

console.log('BasketStore', basketStore);
</script>

<style scoped>
.id {
  display: flex;
  &__number {
    display: block;
    font-size: 16px;
  }
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    :last-child {
      grid-column: span 2;
    }
  }
}
</style>
