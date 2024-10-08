/// <reference types="vitest" />
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const plugins = [
    vue(),
    vuetify({ autoImport: true }),
  ]

  return {
    base: '/consulta-cnpj/',
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 8080,
    },
    test: {
      clearMocks: true,
      coverage: {
        reporter: ['json', 'html'],
      },
      server: {
        deps: {
          inline: ['vuetify']
        }
      },
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./vitest.setup.ts'],
    },
  }
})
