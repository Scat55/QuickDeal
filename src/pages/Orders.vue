<script setup lang="ts">
import { orderCard } from '@/widgets/orderCard';
import { Button } from '@/shared/button';
import { useCartStore } from '@/entities/cart';
import { computed } from 'vue';
import { usePersonStore } from '@/entities/person';

const cartStore = useCartStore();
const cartItem = computed(() => cartStore.cart);

const personStore = usePersonStore();

const getAllSumm = computed(() => {
  return cartStore.cart.reduce((totalPrice, currentItem) => {
    return totalPrice + currentItem.price;
  }, 0);
});

const returnSumm = () => {
  if (personStore.person.coins === undefined) {
    return;
  } else {
    personStore.person.coins += getAllSumm.value;
    cartStore.cart = [];
  }
};
</script>

<template>
  <div class="orders">
    <div class="orders__card">
      <orderCard
        v-for="cart in cartItem"
        :cart="cart"
        :key="cart.id"
        v-if="cartStore.isOrderActive"
      />
    </div>
    <div class="orders__button">
      <Button type="button" @click="returnSumm">Отмена</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.orders {
  display: grid;
  grid-template-columns: 6fr 1fr;
  gap: 1rem;
  margin-top: 1.25rem;

  &__card {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    grid-column: 1;
  }

  &__button {
    grid-column: 2;
  }
}
</style>
