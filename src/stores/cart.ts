import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Product {
  product_id: number;
  name: string;
  image: string;
  description: string;
}

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
    const response = await fetch('https://fake-store-api.mock.beeceptor.com/api/products');
    const data = await response.json();
    products.value = data;
  }

  return { products, addProduct, removeProduct, hasProduct, loadProducts };
});
