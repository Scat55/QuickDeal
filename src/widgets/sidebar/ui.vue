<script setup lang="ts"></script>

<template>
  <div class="sidebar"><slot></slot></div>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  height: 100vh;
  padding: 0.625rem;
  background: linear-gradient(145deg, #f0f0f0, #f0f0f0);
  box-shadow: 7px 7px 7px #bebebe, 7px -7px 14px #ffffff;
}
</style>
