export default [
	{ label: 'Playground', link: '/playground/' },
	{
		label: 'Examples',
		collapsed: true,
		autogenerate: { directory: 'examples' },
	},
	{
		label: 'Guides',
		items: [
			{
				label: 'Get Started',
				link: '/guides/get-started/',
			},
			{ label: 'Customizing', link: '/guides/customizing/' },
			{
				label: 'Tooling',
				collapsed: true,
				items: [
					{ label: 'Editor', link: '/guides/editor/' },
					{ label: 'PostCSS', link: '/guides/postcss/' },
					{ label: 'NPM', link: '/guides/npm/' },
					{ label: 'CDN', link: '/guides/cdn/' },
				],
			},
		],
	},
	{
		label: 'Shop Props',
		collapsed: true,
		autogenerate: { directory: 'props' },
	},
	{
		label: 'Prop Packs',
		autogenerate: { directory: 'packs' },
	},
]
