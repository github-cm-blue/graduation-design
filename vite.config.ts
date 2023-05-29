import { defineConfig } from "vite"
import uni from "@dcloudio/vite-plugin-uni"
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ['vue', 'uni-app'],
      dirs: [
      ],
      dts: './auto-imports.d.ts'
    }),
    Components({
      dirs: ['./src/components'],
      extensions: ['vue'],
      dts: './components.d.ts',
      deep: true
    })
  ],
  resolve: {
    alias: {
      '@': `${resolve(__dirname, 'src')}/`
    },
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue', '.ts', '.tsx']
  },
  // build: {
  //   minify: 'terser',
  //   terserOptions: {
  //     compress: {
  //       drop_console: true, // 生产环境删除console
  //     },
  //   },
  // },
})
