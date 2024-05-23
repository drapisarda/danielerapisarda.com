<template>
  <div class="sgbar-bar">
    <LogosBar :logos="logos" />
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
import Bell from '@/assets/img/serenegrove/001-standing-bell.svg'
import Shree from '@/assets/img/serenegrove/002-shree.svg'
import Meditation from '@/assets/img/serenegrove/003-meditation.svg'
import Lendscape from '@/assets/img/serenegrove/004-landscape.svg'
import Breath from '@/assets/img/serenegrove/005-breath.svg'
import type Logo from '@/types/logo'

const logos: Logo[] = [
  {
    svg: Bell,
  },
  {
    svg: Shree,
  },
  {
    svg: Meditation,
  },
  {
    svg: Lendscape,
  },
  {
    svg: Breath,
  },
]
</script>

<style lang="scss">
@import '../style/vars.scss';

.sgbar-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .logos-bar {
    width: 100%;
    max-width: 100%;

    .logos-bar__list {
      width: 100%;

      ul {
        justify-content: space-around;
      }
    }
  }

  svg {
    fill: $primary;
    opacity: 0.3;
    animation: float 6s ease-in-out infinite;
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-100px);
  }

  100% {
    transform: translatey(0px);
  }
}
</style>
