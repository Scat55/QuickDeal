<script setup lang="ts">
import { Container } from '@/shared/container';
import { type Cart } from '@/entities/cart';

interface Props {
  cart: Cart;
}

const { cart } = defineProps<Props>();
</script>

<template>
  <div class="order">
    <Container>
      <div class="order__content">
        <img class="order__content-img" :src="cart.images[0]" alt="ImgOrder" />
        <span class="itemCart__text-title">{{ cart.title }}</span>
      </div>
    </Container>
  </div>
</template>

<style scoped lang="scss">
.order {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    height: 5rem;
    padding: 0.625rem;
    box-shadow: 0 0 10px 10px #cecece;
    border-radius: 0.625rem;
    &-img {
      height: 100%;
    }
  }
}
</style>
