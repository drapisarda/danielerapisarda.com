<template>
  <div class="technologies-bar">
    <LogosBar :logos="logos" />
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
// https://www.svgrepo.com/author/gilbarbara/
import Html from '@/assets/img/html-5.svg'
import Css from '@/assets/img/css-3.svg'
import Sass from '@/assets/img/sass.svg'
import Nuxt from '@/assets/img/nuxt.svg'
import Typescript from '@/assets/img/typescript.svg'
import Vue from '@/assets/img/vue.svg'

// https://www.svgrepo.com/svg/374114/symfony
import Symfony from '@/assets/img/symfony.svg'

// Garuda Technology https://www.svgrepo.com/svg/452088/php
import Php from '@/assets/img/php.svg'
import type Logo from '@/types/logo'

const logos: Logo[] = [
  {
    svg: Html,
  },
  {
    svg: Css,
  },
  {
    svg: Sass,
  },
  {
    svg: Typescript,
  },
  {
    svg: Vue,
  },
  {
    svg: Nuxt,
  },
  {
    svg: Php,
  },
  {
    svg: Symfony,
  },
]
</script>
