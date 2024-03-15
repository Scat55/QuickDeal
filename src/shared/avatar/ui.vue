<script setup lang="ts">
interface Props {
  img: string;
}

const { img } = defineProps<Props>();
</script>

<template>
  <div class="avatar">
    <img :src="img" alt="Avatar for user" />
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

