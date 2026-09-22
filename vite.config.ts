import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    base: env.VITE_DEPLOY_TARGET === "github" ? "/SUSCODE/" : "/",
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
