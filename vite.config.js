import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Zaika_Junction/',   // repo name with leading and trailing slash
  build: {
    outDir: 'docs',                 // keep docs if you want
  },
})
