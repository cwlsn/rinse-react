const config = {
	htmlContext: {
		head: {
			links: [
				{
					rel: 'stylesheet',
					href:
						'https://fonts.googleapis.com/css?family=Kadwa:400,700|Montserrat:400,400i,700',
				},
				{
					rel: 'stylesheet',
					href: 'https://codemirror.net/theme/material.css',
				},
			],
		},
	},
	themeConfig: {
		codemirrorTheme: 'material',
		logo: {
			src:
				'https://user-images.githubusercontent.com/10063864/45445171-7d1a6980-b697-11e8-9052-22f7b3c36e94.png',
			width: 232,
		},
		colors: {
			primary: '#1494d0',
			sidebarBg: '#f3f3f3',
		},
		styles: {
			body: {
				fontFamily: "'Montserrat', Helvetica Neue, Arial, sans",
				fontSize: 16,
			},
			h1: {
				fontFamily: "'Kadwa'",
			},
			h2: {
				fontFamily: "'Kadwa'",
			},
			h3: {
				fontFamily: "'Kadwa'",
			},
			logo: {
				background: 'transparent',
				alignItems: 'center',
			},
		},
	},
};

export default config;
