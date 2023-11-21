import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import sidebar from './src/sidebar'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Open Props',
			logo: {
				src: './src/assets/op.png',
			},
			// site: 'https://open-props.style',
			// customCss: [
			// 	'../css/index.css',
			// 	'./src/styles/starlight.overrides.css',
			// ],
			social: {
				github: 'https://github.com/argyleink/open-props',
				discord: 'https://discord.gg/AqA4fU886r',
			},
			sidebar,
		}),
	],
})
