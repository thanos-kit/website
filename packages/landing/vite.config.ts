import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src/") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/global/color.scss" as *;
            @use "@/global/font.scss" as *;
            @use "@/global/spacing.scss" as *;
            @use "@/global/radius.scss" as *;
        `
      }
    }
  }
})
