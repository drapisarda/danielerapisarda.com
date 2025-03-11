<template>
  <div class="links-bar">
    <LogosBar :logos="logos" />
  </div>
</template>

<script lang="ts" setup>
// https://www.svgrepo.com/author/gilbarbara/
import LinkedIn from '@/assets/img/linkedin.svg'
import GitHub from '@/assets/img/github.svg'
import type Logo from '@/types/logo'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logos: Logo[] = [
  {
    name: 'My LinkedIn profile',
    svg: LinkedIn,
    link: 'https://linkedin.com/in/danielerapisarda',
  },
  {
    name: 'My GitHub profile',
    svg: GitHub,
    link: 'https://github.com/drapisarda/',
  },
]
</script>
