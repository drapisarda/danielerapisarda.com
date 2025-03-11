<template>
  <NuxtLayout>
    <main>
      <NuxtPage />
      <SpeedInsights />
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<style lang="scss">
@use '@/style/main.scss';
</style>
