import path from 'path'
import { UserConfigExport, ConfigEnv } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import svgPlugin from 'vite-plugin-svg-sprite-component'
import { viteMockServe } from 'vite-plugin-mock'
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vuePlugin(),
      svgPlugin({ symbolId: (name) => 'icon-' + name }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        supportTs: true
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        view: path.resolve(__dirname, 'src/view'),
        com: path.resolve(__dirname, 'src/components'),
        api: path.resolve(__dirname, 'src/api'),
        utils: path.resolve(__dirname, 'src/utils'),
        path: 'path-browserify'
      }
    }
  }
}
