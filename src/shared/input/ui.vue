<script setup lang="ts">
interface Props {
  type: string;
  value?: string;
  name?: string;
  placeholder?: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <input
      class="input"
      :type="type"
      :value="value"
      :name="name"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped lang="scss">
.input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #555;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
}
</style>
