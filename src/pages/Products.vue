<script setup lang="ts">
import { productCard } from '@/widgets/productCard';
import { useProductsStore } from '@/entities/products';
import { computed } from 'vue';

const productsStore = useProductsStore();

const getProducts = () => {
  productsStore.getProductsFromApi();
};
getProducts();

const products = computed(() => productsStore.products);
</script>

<template>
  <div class="products">
    <productCard
      v-for="product in products"
      :product="product"
      :key="product.title"
    />
  </div>
</template>

<style scoped lang="scss">
.products {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-top: 1.25rem;
}
</style>
