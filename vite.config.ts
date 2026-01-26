// // import { defineConfig } from "vite";
// // import react from "@vitejs/plugin-react-swc";
// // import path from "path";


// // // https://vitejs.dev/config/
// // export default defineConfig(({ mode }) => ({
  
// //   resolve: {
// //     alias: {
// //       "@": path.resolve(__dirname, "./src"),
// //     },
// //   },
// // }));


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()], // ✅ 1. Enables React
  
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"), // ✅ 2. Fixes "@" path errors
//     },
//   },

//   server: {
//     proxy: {
//       '/api': { // ✅ 3. Fixes CORS errors
//         target: 'https://alumni-backend-05y3.onrender.com',
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));