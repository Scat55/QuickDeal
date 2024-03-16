<script setup lang="ts">
import { Container } from '@/shared/container';
import { usePersonStore } from '@/entities/person';
import { computed } from 'vue';

const personStore = usePersonStore();
const person = computed(() => personStore.person);
</script>

<template>
  <div class="user">
    <Container>
      <div class="user__content">
        <img :src="person.avatar" alt="" class="user__content-img" />
        <div class="user__contetn-text">
          <p class="user__content-text-name">{{ person.name }}</p>
          <span class="user__content-text-coins"
            >{{ person.coins }} &dollar;</span
          >
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped lang="scss">
.user {
  &__content {
    display: flex;
    justify-content: center;
    gap: 0.625rem;

    &-img {
      width: 18.75rem;
      height: 18.75rem;
    }

    &-text {
      &-name {
        font-size: 1.25rem;
      }
      &-coins {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
