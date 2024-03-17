import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type Cart } from './types';

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart[]>([]);

  const getProductInCart = (product: Cart) => {
    cart.value.push(product);
  };
  return { cart, getProductInCart };
});
