/// <reference types="vitest" />
import path from 'path'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [
    vue(),
    vuetify({ autoImport: true }),
  ]

  return {
    build: {
      sourcemap: true,
    },
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
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
