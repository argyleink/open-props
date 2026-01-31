import { defineConfig } from 'vite'
import { version } from '../package.json'

export default defineConfig({
  plugins: [
    {
      name: 'inject-version',
      transformIndexHtml(html) {
        return html.replace('%VERSION%', `v${version}`)
      }
    }
  ]
})
