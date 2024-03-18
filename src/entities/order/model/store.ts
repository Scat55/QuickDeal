import { defineStore } from 'pinia';
import { type Order } from './types';
import { ref } from 'vue';

export const useOrderStore = defineStore('store', () => {
  const orders = ref<Order[]>([]);

  return { orders };
});
