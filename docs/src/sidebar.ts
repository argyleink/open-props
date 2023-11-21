export default [
	{ label: 'Playground', link: '#' },
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
			{
				label: 'Setup',
				collapsed: true,
				items: [
					{ label: 'Editor', link: '/guides/editor/' },
					{ label: 'PostCSS', link: '/guides/postcss/' },
					{ label: 'NPM', link: '/guides/npm/' },
					{ label: 'CDN', link: '/guides/cdn/' },
				],
			},
			{ label: 'Customizing', link: '/guides/customizing/' },
		],
	},
	{
		label: 'Shop Props',
		autogenerate: { directory: 'props', collapsed: true },
	},
	{
		label: 'Prop Packs',
		autogenerate: { directory: 'packs' },
	},
]
