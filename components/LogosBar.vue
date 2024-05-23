<template>
  <div class="logos-bar container">
    <div class="logos-bar__list">
      <ul>
        <!-- eslint-disable-next-line vue/valid-v-for -->
        <li v-for="(logo, index) in logos" :key="index" class="logo">
          <component :is="logo.svg" v-if="!logo.link" />
          <template v-else>
            <a
              :aria-label="logo.name ? logo.name : undefined"
              :href="logo.link"
              target="_blank"
            >
              <component :is="logo.svg" />
            </a>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type Logo from '@/types/logo'

defineProps({
  logos: {
    type: Object as PropType<Logo[]>,
    required: true,
  },
})
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
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      @media (min-width: $desktop) {
        justify-content: center;
      }
    }
  }

  li {
    display: block;
    padding: 1rem;
    width: 25%;
    height: 8rem;

    @media (min-width: $tablet) {
      flex: 1;
      width: auto;
      max-width: 33%;
      padding: 1rem;
    }

    svg {
      width: 100%;
      height: auto;
      max-height: 100%;
    }
  }
}
</style>
