import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Open Props',
			logo: {
				src: './src/assets/op.png',
			},
			site: 'https://open-props.style',
			integrations: [starlight({ title: 'Open Props' })],
			customCss: [
				// Relative path to your custom CSS file
				// '../css/index.css',
				// './src/styles/starlight.overrides.css',
			],
			social: {
				github: 'https://github.com/argyleink/open-props',
				discord: 'https://discord.gg/AqA4fU886r',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
})
