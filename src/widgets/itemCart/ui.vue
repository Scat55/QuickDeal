<script setup lang="ts">
import { type Cart } from '@/entities/cart';

interface Props {
  cart: Cart;
}
defineProps<Props>();
</script>

<template>
  <div class="itemCart">
    <div class="itemCart__content">
      <img class="itemCart__content-img" :src="cart.images[0]" alt="" />
      <div class="itemCart__content-text">
        <span class="itemCart__text-title">{{ cart.title }}</span>
        <span class="itemCart__text-price">{{ cart.price }} &dollar;</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.itemCart {
  &__content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 12.5rem;
    padding: 0.625rem;
    box-shadow: 0 0 10px 10px #cecece;
    border-radius: 0.625rem;
    &-img {
      height: 100%;
    }
    &-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  &__text {
    &-title {
      font-size: 1.25rem;
    }
    &-price {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
}
</style>
