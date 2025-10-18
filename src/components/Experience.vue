<script setup lang="ts">
import { experiencesData } from "@/data";
</script>

<template>
    <section
        id="experience"
        class="scroll-mt-28 mb-28 sm:mb-40"
    >
        <h2 class="text-3xl font-medium capitalize mb-8 text-center">
            My experience
        </h2>
        <div class="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
            <div
                v-for="(experience, index) in experiencesData"
                :key="`experience-${index}`"
                class="vertical-timeline-element"
            >
                <span
                    class="vertical-timeline-element-icon bounce-in"
                    style="background: rgba(255, 255, 255, 0.15); font-size: 1.5rem"
                >
                    <component :is="experience.icon"/>
                </span>
                <div
                    class="vertical-timeline-element-content bounce-in"
                    style="
            background: rgba(255, 255, 255, 0.05);
            box-shadow: none;
            border: 1px solid rgba(0, 0, 0, 0.05);
            text-align: left;
            padding: 1.3rem 2rem;
          "
                >
                    <div
                        class="vertical-timeline-element-content-arrow"
                        style="border-right: 0.4rem solid rgba(255, 255, 255, 0.5)"
                    ></div>
                    <h3 class="font-semibold capitalize">{{ experience.title }}</h3>
                    <p class="font-normal !mt-0">{{ experience.location }}</p>
                    <p
                        class="!mt-1 !font-normal text-gray-700 dark:text-white/75"
                        v-html="experience.description"
                    ></p>
                    <span class="vertical-timeline-element-date">{{
                        experience.date
                    }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/experienceStyles.scss";
</style>
