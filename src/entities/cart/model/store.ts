import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type Cart } from './types';

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart[]>([]);

  // Добаление товара в корзину
  const getProductInCart = (product: Cart) => {
    cart.value.push(product);
  };
  // Удаление товара из корзины
  const removeProductCard = (index: number) => {
    cart.value = cart.value.filter((_, idx) => idx !== index);
  };
  return { cart, getProductInCart, removeProductCard };
});
