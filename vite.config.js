import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@use "@/assets/sass/variables.sass" as * \n`
      }
    }
  },
  plugins: [
    vue(),
    Components({
      dirs: ['./src/components'],
    }),
    AutoImport({
      imports: [
        'vue', 'vue-router',
        {
          from: '/src/logic/functions.js',
          imports: ['copy', 'handleFocusOut'],
        },
      ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
