<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ThemeSwitch from "./components/ThemeSwitch.vue";
</script>

<template>
  <main class="flex flex-col items-center px-4">
    <Header />
    <RouterView />
    <Footer />
    <ThemeSwitch />
  </main>

</template>

<style scoped>
</style>
