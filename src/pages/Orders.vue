<script setup lang="ts">
import { orderCard } from '@/widgets/orderCard';
import { Button } from '@/shared/button';
import { useCartStore } from '@/entities/cart';
import { useOrderStore } from '@/entities/order';
import { computed } from 'vue';
import { usePersonStore } from '@/entities/person';

const cartStore = useCartStore();
const orderStore = useOrderStore();
const orderItem = computed(() => orderStore.orders);

const personStore = usePersonStore();

const getAllSumm = computed(() => {
  return orderStore.orders.reduce((totalPrice, currentItem) => {
    return totalPrice + currentItem.totalPrice;
  }, 0);
});

const returnSumm = () => {
  if (personStore.person.coins === undefined) {
    return;
  } else {
    personStore.person.coins += getAllSumm.value;
    orderStore.orders = [];
  }
};
</script>

<template>
  <div class="orders">
    <div class="orders__card">
      <orderCard
        v-for="cart in orderItem"
        :cart="cart"
        :key="cart.id"
        v-if="cartStore.isOrderActive"
      />
    </div>
    <div class="orders__button">
      <Button type="button" class="orders__button-btn" @click="returnSumm"
        >Отмена</Button
      >
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
    &-btn {
      background-color: #f3f7fe;
      color: #ed4112;
      border: none;
      &:hover {
        background-color: #d91d0c;
        box-shadow: 0 0 0 5px #f6763b5f;
        color: #fff;
      }
    }
  }
}
</style>
