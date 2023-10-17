import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'


export default defineConfig({
  plugins: [react(),
  libInjectCss(),
  dts({ include: ['lib'] })],
  server: {
    proxy: { "/api": "http://localhost:8080/" },
    open: true,
    port: 4000
  },
  build: {
    target: 'modules',
    // minify: 'terser',
    modulePreload: {
      polyfill: false,
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'PalmyraZui',
      fileName: 'palmyra-zui',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'axios',
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@emotion/react',
        '@emotion/styled',
        '@mui/material',
        '@mui/icons-material',
        '@mui/styled-engine'      
      ],
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}').map(file => [
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        // format: 'iife',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js'
      }
    }
  }
})
