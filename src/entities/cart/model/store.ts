import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type Cart } from './types';

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Cart[]>([]);
  const isOrderActive = ref<boolean>(false);

  // Добаление товара в корзину
  const getProductInCart = (product: Cart) => {
    const existingProductIndex = cart.value.findIndex(
      (item) => item.id === product.id,
    );
    if (existingProductIndex !== -1) {
      // Если товар уже есть в корзине, увеличиваем его количество
      cart.value[existingProductIndex].quantity += product.quantity;
      // Увеличиваем общую цену корзины на основе цены товара и его количества
      cart.value[existingProductIndex].totalPrice +=
        product.price * product.quantity;
    } else {
      // Иначе добавляем новый товар в корзину
      // Устанавливаем общую цену товара, учитывая его количество
      product.totalPrice = product.price * product.quantity;
      cart.value.push(product);
    }
  };
  // Удаление товара из корзины
  const removeProductCard = (index: number) => {
    cart.value = cart.value.filter((_, idx) => idx !== index);
  };
  return { cart, isOrderActive, getProductInCart, removeProductCard };
});
