import {
  loadEnv, 
  defineConfig 
} from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';


export default defineConfig({
  server: { 
    port: 3000,
    cors: true,
    https: true,
    // fs: {allow: ['public/', 'src/', 'cesium']}
  },
  plugins: [
    basicSsl()
  ],
  build: {
    rollupOptions: {
      plugins: [],
      output: {
        dir: "dist",
        manualChunks: {}
      },
    }
  },
  optimizeDeps: { 
    // include: ['./global.d.ts'],
  },
});