// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   base: "/meroResturant/",
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",  // Serve from the root of the domain
  plugins: [react()],
});
