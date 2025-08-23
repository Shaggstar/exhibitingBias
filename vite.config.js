// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⬇️ the one‑line change you asked for
export default defineConfig({
  base: '/exhibitingBias/',   // <-- this is it
  plugins: [react()]
})
