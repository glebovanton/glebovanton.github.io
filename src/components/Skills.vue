<script setup lang="ts">
import { skillsData } from "@/data";
</script>

<template>
  <section
    id="skills"
    class="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
  >
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">My skills</h2>
    <ul class="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      <li
        v-for="skill in skillsData"
        :key="`skills-${skill}`"
        class="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
        style="opacity: 1; transform: none"
      >
        {{ skill }}
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
