import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        background: "./src/background.ts",
      },
      output: {
        entryFileNames: (chunkInfo) => {
          console.log("chunk==", chunkInfo.facadeModuleId);
          if (
            chunkInfo.facadeModuleId &&
            chunkInfo.facadeModuleId.includes("background.ts")
          ) {
            return "background.js";
          }
          return "assets/[name].[hash].js";
        },
      },
    },
  },
});
