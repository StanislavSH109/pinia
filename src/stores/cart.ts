import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Product {}

export const useProductStore = defineStore('', () => {
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

  async function loadProducts() {
    const response = await fetch('https://vue-study.skillbox.cc/api/products');
    const data = await response.json();
    products.value = data;
  }

  return { products, addProduct, removeProduct, hasProduct };
});
