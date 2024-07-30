<script setup lang="ts">
const startYear = 2024;
const copyrightYears = `${startYear}${new Date().getFullYear() <= startYear ? "" : -new Date().getFullYear()}`
</script>

<template>
  <footer class="mb-10 px-4 text-center text-gray-500">
    <small class="mb-2 block text-xs"
      >&copy; Copyright: Anton Glebov. {{ copyrightYears }}</small
    >
    <p class="text-xs">
      <span class="font-semibold">About this website:</span> built with Vue 3
      &amp; Vuex, TypeScript, Tailwind CSS,
      Framer Motion, Github pages.
    </p>
  </footer>
</template>

<style scoped></style>
