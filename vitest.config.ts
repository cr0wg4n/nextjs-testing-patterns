import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // you don't need to iumport describe, test, it and so on in every test file
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      exclude: [
        ...configDefaults.exclude,
        '**/.next/**',
        '**/src/app'
      ],
      include: [
        '**/src/**/*.{test,spec}.{js,ts}'
      ],
      reportsDirectory: './coverage'
    }
  }
})