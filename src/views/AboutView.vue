<script setup lang="ts">
import { aboutImagesData } from "@/data";
</script>

<template>
  <section
    class="max-w-[45rem] text-center leading-8 scroll-mt-28"
    style="opacity: 1; transform: none"
  >
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">About me</h2>
    <p class="mb-3">
      My friends taught me to play the guitar when I was 11. Later I played the
      African djembe. Since then I like to play it whether alone or not. In my
      free time, I am fond of recording and DJing. Together with my wife, we
      often go running and cycling. We love to travel. And of course, I can't
      but mention the time I spend on self-education.
    </p>
  </section>
  <section class="mb-28 sm:mb-40">
    <div class="container mx-auto px-5 lg:px-32 lg:pt-4">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div
          v-for="(chunk, index) in aboutImagesData"
          :key="`chunk-${index}`"
          class="flex w-full md:w-1/2 flex-wrap"
        >
          <div
            v-for="image in chunk"
            :key="`image-${image}`"
            :class="image.class"
          >
            <img
              :alt="`gallery-${image.name}`"
              class="block h-full w-full rounded-lg object-cover object-center"
              :src="image.image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
