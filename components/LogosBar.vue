<template>
  <div class="logos-bar container container--small">
    <ul class="logos-bar__list">
      <li>
        <Html />
      </li>
      <li>
        <Css />
      </li>
      <li>
        <Sass />
      </li>
      <li>
        <Typescript />
      </li>
      <li>
        <Vue />
      </li>
      <li>
        <Nuxt />
      </li>
      <li>
        <Php />
      </li>
      <li>
        <Symfony />
      </li>
      <li>
        <Git />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// https://www.svgrepo.com/author/gilbarbara/
import Css from '@/assets/img/css-3.svg'
import Git from '@/assets/img/git.svg'
import Html from '@/assets/img/html-5.svg'
import Nuxt from '@/assets/img/nuxt.svg'
import Sass from '@/assets/img/sass.svg'
import Typescript from '@/assets/img/typescript.svg'
import Vue from '@/assets/img/vue.svg'

// https://www.svgrepo.com/svg/374114/symfony
import Symfony from '@/assets/img/symfony.svg'

// Garuda Technology https://www.svgrepo.com/svg/452088/php
import Php from '@/assets/img/php.svg'
</script>

<style lang="scss">
@import '../style/vars';

.logos-bar {
  display: flex;
  justify-content: center;

  &__title {
    flex: 1;
    white-space: nowrap;
    margin: 0 1em 0 0;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    li {
      padding: 1rem;
      width: calc($tablet / 10);

      svg {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
