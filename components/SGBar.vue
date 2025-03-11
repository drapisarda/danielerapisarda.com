<template>
  <div class="sgbar-bar">
    <LogosBar :logos="logos" />
  </div>
</template>

<script lang="ts" setup>
import Bell from '@/assets/img/serenegrove/001-standing-bell.svg'
import Shree from '@/assets/img/serenegrove/002-shree.svg'
import Meditation from '@/assets/img/serenegrove/003-meditation.svg'
import Lendscape from '@/assets/img/serenegrove/004-landscape.svg'
import Breath from '@/assets/img/serenegrove/005-breath.svg'
import type Logo from '@/types/logo'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
@use '../style/vars.scss';

.sgbar-bar {
  position: absolute;
  z-index: -1;
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

  li {
    animation: float-x 16s ease-in-out infinite;
  }

  svg {
    fill: vars.$primary;
    opacity: 0.3;
    animation: float-y 16s ease-in-out infinite;
  }

  li:nth-child(2) {
    animation-delay: 0.5s;
    animation-duration: 20s;
    margin-left: -2rem;

    svg {
      animation-delay: 0.5s;
      animation-duration: 20s;
      margin-bottom: -2rem;
    }
  }

  li:nth-child(3) {
    animation-delay: 0s;
    animation-duration: 20s;
    margin-left: 3rem;
    animation-direction: reverse;

    svg {
      animation-delay: 0s;
      animation-duration: 20s;
      margin-bottom: 3rem;
      animation-direction: reverse;
    }
  }

  li:nth-child(4) {
    animation-delay: 0s;
    animation-duration: 12s;
    margin-left: -3rem;

    svg {
      animation-delay: 0s;
      animation-duration: 12s;
      margin-bottom: -3rem;
    }
  }

  li:nth-child(5) {
    animation-delay: 0s;
    animation-duration: 13s;
    margin-left: -12rem;

    svg {
      animation-delay: 0s;
      animation-duration: 13s;
      margin-bottom: -12rem;
    }
  }
}

@keyframes float-y {
  0% {
    transform: translatey(0px);
  }

  33% {
    transform: translatey(-30svh);
  }

  66% {
    transform: translatey(30svh);
  }

  100% {
    transform: translatey(0px);
  }
}

@keyframes float-x {
  0% {
    transform: translatex(0px);
  }

  33% {
    transform: translatex(-20svh);
  }

  66% {
    transform: translatex(20svh);
  }

  100% {
    transform: translatex(0px);
  }
}
</style>
