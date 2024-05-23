<template>
  <NuxtLayout>
    <main>
      <NuxtPage />
      <SpeedInsights />
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<style lang="scss">
@import '@/style/main.scss';
</style>
