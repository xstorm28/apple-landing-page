import { sentryVitePlugin } from "@sentry/vite-plugin";
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-lvq",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})