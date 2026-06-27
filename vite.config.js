import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              test: /node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react-vendor',
            },
            {
              test: /node_modules[\\/](gsap|@gsap)[\\/]/,
              name: 'gsap-vendor',
            },
            {
              test: /node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/,
              name: 'motion-vendor',
            },
          ],
        },
      },
    },
  },
})
