
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< HEAD
      "@": path.resolve(__dirname, "./src"), // This makes @ point to /src
=======
      "@": path.resolve(__dirname, "./src"), 
>>>>>>> baf429c (Updated Spacex Mission Explorer Application)
    },
  },
 test: {
  globals: true,
  environment: "jsdom",
  setupFiles: "./src/setupTests.js", 
},
});
