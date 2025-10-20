<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      role="img"
      :aria-label="title || 'React logo'"
  >
    <title v-if="title">{{ title }}</title>
    <circle :cx="12" :cy="12" :r="2.2" :fill="color" stroke="none" />
    <ellipse :cx="12" :cy="12" :rx="11" :ry="4.2" />
    <ellipse :cx="12" :cy="12" :rx="11" :ry="4.2" transform="rotate(60 12 12)" />
    <ellipse :cx="12" :cy="12" :rx="11" :ry="4.2" transform="rotate(120 12 12)" />
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
      size?: number | string
      color?: string
      strokeWidth?: number | string
      title?: string
    }>(),
    {
      size: '1em',
      color: 'currentColor',
      strokeWidth: 1.5
    }
)
</script>
