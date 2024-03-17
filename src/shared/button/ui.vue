<script setup lang="ts">
interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
}

const { type } = defineProps<Props>();
</script>

<template>
  <button class="button" :type="type"><slot></slot></button>
</template>

<style scoped lang="scss">
.button {
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0 0.9375rem;
  border-radius: 0.625rem;
  color: #000;
  border: 2px solid #ccc;
  outline: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: ease-out 0.5s;
}
</style>
