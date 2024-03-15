<script setup lang="ts">
import Header from '@/widgets/header/index.vue';
import { Input } from '@/shared/input';
import { ref } from 'vue';
import { usePersonStore } from '@/entities/person';

const personStore = usePersonStore();
const id = ref<number | undefined>(undefined);

const getInfoAboutPerson = () => {
  if (id.value !== undefined) {
    personStore.getInfoAboutPerson(id.value);
    id.value = undefined;
  }
};
</script>

<template>
  <main>
    <Header />

    <Input
      type="number"
      placeholder="id поьзователя"
      v-model:value="id"
      @keyup.enter="getInfoAboutPerson"
    />
  </main>
</template>

<style scoped></style>
