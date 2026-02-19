import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // 允许移动端访问
    allowedHosts: ['all'] // 允许所有域名访问（包括 ngrok）
  }
})
