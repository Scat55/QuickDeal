<script setup lang="ts">
import { Input } from '@/shared/input';
import { ref } from 'vue';
import { usePersonStore } from '@/entities/person';
import { Sidebar } from '@/widgets/sidebar';
import { Button } from '@/shared/button';
import { userCard } from '@/widgets/userCard';

const personStore = usePersonStore();
const id = ref<number | undefined>(undefined);
const balanse = ref<number | undefined>(undefined);

const getInfoAboutPerson = () => {
  if (id.value !== undefined) {
    personStore.getInfoAboutPerson(id.value, balanse.value);
    personStore.person.coins = balanse.value;
    id.value = undefined;
    balanse.value = undefined;
  }
};
</script>

<template>
  <main class="main">
    <Sidebar class="main__sidebar">
      <Input type="number" placeholder="id поьзователя" v-model:value="id" />
      <Input type="number" placeholder="Баланс" v-model:value="balanse" />
      <Button type="button" class="main__btn" @click="getInfoAboutPerson"
        >Показать</Button
      >
    </Sidebar>

    <userCard class="main__userCard" v-if="personStore.isAuth" />
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  gap: 2.5rem;
  &__sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  &__btn {
    &:hover {
      color: white;
      box-shadow: inset 0 -100px 0 0 #725ac1;
    }
  }

  &__userCard {
    margin-top: 0.625rem;
  }
}
</style>
