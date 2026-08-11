import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'node:fs'

function sitesWorkerEntry() {
  return {
    name: 'sites-worker-entry',
    closeBundle() {
      mkdirSync('dist/server', { recursive: true })
      copyFileSync('worker.js', 'dist/server/index.js')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitesWorkerEntry()],
})
