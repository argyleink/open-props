import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import starlight from '@astrojs/starlight'
import sidebar from './src/sidebar'

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		starlight({
			title: 'Open Props',
			logo: {
				src: './src/assets/op.png',
			},
			// site: 'https://open-props.style',
			customCss: [
				'../css/index.v2.css',
				'./src/styles/demo-animations.css',
				// './src/styles/starlight.overrides.css',
			],
			social: {
				github: 'https://github.com/argyleink/open-props',
				discord: 'https://discord.gg/AqA4fU886r',
			},
			sidebar,
		}),
	],
})
