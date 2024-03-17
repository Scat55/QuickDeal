import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { type Product } from './types';

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([]);

  const getProductsFromApi = async () => {
    await axios.get('https://api.escuelajs.co/api/v1/products').then((res) => {
      products.value = res.data;
    });
  };

  return { products, getProductsFromApi };
});
