/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Boardwalk',
      fileName: (format) => `boardwalk.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    cssInjectedByJs(),
  ],
  test: {
    environment: 'jsdom',
  },
});
