import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'main',
      formats: ['es'],
      fileName: () => `main.js`,
    },
    rollupOptions: {
      external: ['crypto-js', '@types/crypto-js'],
    },
  },
  plugins: [dts()],
})
