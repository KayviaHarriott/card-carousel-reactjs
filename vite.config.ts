import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',           // Your entry point
      name: 'CardCarouselReactJS',      // Library name
      fileName: (format) => `card-carousel-reactjs.${format}.js`,  // Output file name
    },
    rollupOptions: {
      external: ['react', 'react-dom'],  // Specify dependencies to be treated as external
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
