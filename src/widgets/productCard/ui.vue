<script setup lang="ts">
import { type Product } from '@/entities/products';
import { Container } from '@/shared/container';
import { Button } from '@/shared/button';

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
          <Button class="card__price-btn" type="button">
            <span class="IconContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                fill="rgb(17, 17, 17)"
                class="cart"
              >
                <path
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                ></path>
              </svg>
            </span>
            <p class="text">В корзину</p></Button
          >
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
    &-btn {
      width: 140px;
      height: 40px;
      border-radius: 12px;
      border: none;
      background-color: rgb(108, 213, 38);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition-duration: 0.5s;
      font-size: 1rem;
      overflow: hidden;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.103);
      position: relative;
    }
  }
}

.IconContainer {
  position: absolute;
  left: -50px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: 0.5s;
}

.icon {
  border-radius: 1px;
}

.text {
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(17, 17, 17);
}
.card__price-btn:hover .IconContainer {
  transform: translateX(58px);
  border-radius: 40px;
  transition-duration: 0.5s;
}

.card__price-btn:hover .text {
  transform: translate(10px, 0px);
  transition-duration: 0.5s;
}

.card__price-btn:active {
  transform: scale(0.95);
  transition-duration: 0.5s;
}
</style>
