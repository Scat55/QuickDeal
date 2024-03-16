<script setup lang="ts">
import { Input } from '@/shared/input';
import { ref } from 'vue';
import { usePersonStore } from '@/entities/person';
import { Sidebar } from '@/widgets/sidebar';
const personStore = usePersonStore();
const id = ref<number | undefined>(undefined);
const balanse = ref<number | undefined>(undefined);
const getInfoAboutPerson = () => {
  if (id.value !== undefined) {
    personStore.getInfoAboutPerson(id.value);
    id.value = undefined;
  }
};
</script>

<template>
  <main class="main">
    <Sidebar class="main__sidebar">
      <Input
        type="number"
        placeholder="id поьзователя"
        v-model:value="id"
        @keyup.enter="getInfoAboutPerson"
      />
      <Input type="number" placeholder="Баланс" v-model:value="balanse" />
    </Sidebar>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;

  &__sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
}
</style>
