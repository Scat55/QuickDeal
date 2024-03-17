<script setup lang="ts">
import { type Product } from '@/entities/products';
import { Container } from '@/shared/container';

interface Props {
  product: Product;
}

const { product } = defineProps<Props>();
</script>

<template>
  <div class="card">
    <Container>
      <div class="card__content">
        <img
          class="card__content-img"
          :src="product.images[0]"
          alt="ProductImage"
        />
        <p class="card__content-title">{{ product.title }}</p>
        <p class="card__content-descr">{{ product.description }}</p>
        <div class="card__price">
          <p class="card__price-info">{{ product.price }} &dollar;</p>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped lang="scss">
.card {
  width: 20rem;
  min-height: 36rem;
  border-radius: 0.625rem;
  box-shadow: 0 0 1.875rem 0.625rem #cecece;
  padding: 0.625rem;
  margin-bottom: 0.625rem;

  &__content {
    flex: 1;
    &-img {
      width: 100%;
      margin-bottom: 0.3125rem;
    }
    &-title {
      font-weight: bold;
      font-size: 1.125rem;
      text-align: center;
      margin-bottom: 0.625rem;
    }
  }

  &__price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.625rem 0;
    &-info {
      font-weight: bold;
      font-size: 1.125rem;
    }
  }
}
</style>
