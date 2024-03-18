<script setup lang="ts">
import { Container } from '@/shared/container';
import { Avatar } from '@/shared/avatar';
import { computed } from 'vue';
import { usePersonStore } from '@/entities/person';

interface Links {
  name: string;
  value: string;
}

const personStore = usePersonStore();
const person = computed(() => personStore.person);

const links: Links[] = [
  { name: 'Главная', value: '/' },
  { name: 'Товары', value: 'Products' },
  { name: 'Корзина', value: 'Cart' },
  { name: 'Мои заказы', value: 'Orders' },
];
</script>

<template>
  <header class="header">
    <div class="header__content">
      <Container>
        <div class="header__content-logo">
          <nav class="header__content-logo-links">
            <p v-for="link in links">
              <RouterLink class="link" :to="link.value">{{
                link.name
              }}</RouterLink>
            </p>
          </nav>
          <div class="header__content-logo-user" v-if="personStore.isAuth">
            <Avatar :img="person.avatar" />
            <div class="user__info">
              <span>{{ person.name }}</span>
              <span>{{ person.coins }} &dollar;</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 0.625rem 0;
  background: linear-gradient(145deg, #f0f0f0, #f0f0f0);
  box-shadow: 7px 7px 7px #bebebe, 7px -7px 14px #ffffff;

  &__content {
    &-logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-links {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        font-size: 1.2rem;
      }
      &-user {
        display: flex;
        align-items: center;
        gap: 0.3125rem;
      }
    }
  }
}
.user__info {
  display: flex;
  flex-direction: column;
}
</style>
