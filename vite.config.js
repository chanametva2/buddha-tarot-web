import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use /buddha-tarot-web/ only for GitHub Pages, root for Vercel and local
  base: process.env.GITHUB_ACTIONS ? '/buddha-tarot-web/' : '/'
}))
