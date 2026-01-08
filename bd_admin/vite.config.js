import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/blooddonationadmin',
  server: {
    port: 7008,
    host: '0.0.0.0', // Allows access from external devices
    strictPort: true, // Ensures the exact port is used
    allowedHosts: ['adityauniversity.in'], // Add allowed host
  }
})
