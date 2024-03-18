<script setup lang="ts">
import { itemCart } from '@/widgets/itemCart';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/entities/cart';
import { usePersonStore } from '@/entities/person';
import { Container } from '@/shared/container';
import { Button } from '@/shared/button';

const cartStore = useCartStore();
const personStore = usePersonStore();
const cartItem = computed(() => cartStore.cart);
const router = useRouter();

const getAllSumm = computed(() => {
  return cartStore.cart.reduce((totalPrice, currentItem) => {
    return totalPrice + currentItem.price * currentItem.quantity;
  }, 0);
});

// Оформлени заказа
const placeAnOrder = () => {
  if (
    !personStore.isAuth ||
    personStore.person.coins === undefined ||
    personStore.person.coins < getAllSumm.value
  ) {
    alert('Ошибка');
  } else {
    cartStore.isOrderActive = true;
    personStore.person.coins -= getAllSumm.value;
    router.push('/Orders');
  }
};
</script>

<template>
  <Container>
    <div class="cart">
      <div class="cart__item">
        <itemCart v-for="cart in cartItem" :cart="cart" :key="cart.id" />
      </div>
      <div class="cart__sum">
        <p class="cart__sum-info">Итого {{ getAllSumm }} &dollar;</p>
        <Button class="cart__sum-btn" type="button" @click="placeAnOrder"
          >Оформить</Button
        >
      </div>
    </div>
  </Container>
</template>

<style scoped lang="scss">
.cart {
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  &__item {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    gap: 1.25rem;
  }
  &__sum {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    &-info {
      font-size: 1.25rem;
      font-weight: bold;
    }
    &-btn {
      background-color: #f3f7fe;
      color: #3b82f6;
      border: none;
      &:hover {
        background-color: #3b82f6;
        box-shadow: 0 0 0 5px #3b83f65f;
        color: #fff;
      }
    }
  }
}
</style>
