import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     port: 5172, // Default Vite port
//     host: 'localhost', // Ensure it's set to 'localhost'
//     open: true, // Opens browser on startup
//   },
// });