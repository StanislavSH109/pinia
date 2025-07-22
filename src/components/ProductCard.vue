<template>
    <div class="product">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
    </div>
</template>

<script lang="ts" setup>
import type { Product} from '@/stores/cart';

const props = defineProps<{product: Product}>()
</script>

<style lang="scss" scoped>
.product {
   padding: 16px;
  display: flex;
  gap: 16px;
  border: 1px solid white;
}
</style>
