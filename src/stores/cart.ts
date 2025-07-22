import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Product {}

export const userProductStore = defineStore('', () => {
  const products = ref<Product[]>([]);
  function addProduct(product: Product) {
    products.value.push(product);
  }

  function removeProduct(product: Product) {
    const index = products.value.indexOf(product);
    products.value.splice(index, 1);
  }

  function hasProduct(product: Product) {
    return products.value.includes(product);
  }

  return { products, addProduct, removeProduct, hasProduct };
});
