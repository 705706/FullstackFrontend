// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      // Any request starting with /api will be proxied
      "/api": {
        target: "https://fullstackbackend-r5n2.onrender.com",
        changeOrigin: true,
        secure: true, // since it's HTTPS
      },
    },
  },
});
