import { defineStore } from 'pinia';
import { storeToRefs } from 'pinia';
import { useAuthStore } from './auth';
import type { Product } from './cart';
import { ref } from 'vue';

export const useBasketStore = defineStore('basket', () => {
  const { isAuth } = storeToRefs(useAuthStore());
  const productsInBasket = ref<Product[]>([]);

  const addInBasket = (product: Product) => {
    if (isAuth.value) {
      if (!productsInBasket.value.some((el) => el.product_id === product.product_id)) {
        productsInBasket.value.push(product);
      }
    }
  };
  return {
    productsInBasket,
    addInBasket,
  };
});
