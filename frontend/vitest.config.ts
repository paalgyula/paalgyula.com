import { defineConfig } from 'vitest/config'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@frontend': path.resolve(__dirname, './src'),
        '@backend': path.resolve(__dirname, '../firebase/src')
      },
  },
  test: {
    environment: 'jsdom',
  },
})
