// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  vite: {
    resolve: {
      alias: [
        {
          find: /^~(.*)$/,
          replacement: 'node_modules/$1',
        },
      ],
    },
    plugins: [svgLoader()],
  },
})
