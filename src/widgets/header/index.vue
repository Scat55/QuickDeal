<script setup lang="ts">
import { Container } from '@/shared/container';
</script>

<template>
  <header class="header">
    <div class="header__content">
      <Container>
        <div class="header__content-logo">Logo</div>
      </Container>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 0.625rem 0;
  background: linear-gradient(145deg, #f0f0f0, #f0f0f0);
  box-shadow: 7px 7px 7px #bebebe, 7px -7px 14px #ffffff;
}
</style>
