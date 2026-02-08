import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // If mode is 'gh-pages', use repo subpath. Otherwise (Vercel/Local), use root.
  base: mode === 'gh-pages' ? '/buddha-tarot-web/' : '/'
}))
