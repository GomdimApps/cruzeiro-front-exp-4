import { defineConfig } from "vite";
import { minify } from "html-minifier-terser";

const minificarHtml = () => ({
  name: "minificar-html",
  enforce: "post",
  transformIndexHtml: (html) =>
    minify(html, {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
    }),
});

export default defineConfig({
  base: "./",
  plugins: [minificarHtml()],
  build: {
    outDir: "dist",
    minify: "esbuild",
    cssMinify: true,
    assetsInlineLimit: 0,
    modulePreload: { polyfill: false },
  },
});
