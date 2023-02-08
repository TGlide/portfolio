import type { ProjectCardProps } from '$components/ProjectCard.svelte';

export const projects: ProjectCardProps[] = [
	{
		title: 'Wordex',
		description: 'Wordle clone with support for multiple languages',
		logo: {
			src: 'projects/wordex/logo.svg',
			alt: 'Wordex logo',
		},
		image: {
			src: 'projects/wordex/image.png',
			alt: 'Wordex image',
		},
		links: [
			{
				href: 'https://wordex.app/',
				text: 'check it out',
			},
			{
				href: 'https://github.com/tGlide/wordex',
				text: 'source code',
			},
		],
	},
	{
		title: 'Movie Search',
		description: 'A Next.js Web App to check if your letterboxd list movies are on netflix',
		logo: { text: 'M', color: 'var(--fiery-rose)', bgColor: 'var(--night-black)' },
		image: {
			src: 'projects/movie-search/image.png',
			alt: "A table with 3 headers (Netflix, with a number alongside a green check indicating the movies on netflix, and a number alongside a red x indicating the movies that aren't), title, and rating (based on IMDB).",
			position: 'bottom',
		},
		links: [
			{ href: 'https://movie-search-iota.vercel.app/', text: 'check it out' },
			{ href: 'https://github.com/TGlide/movie-search', text: 'source code' },
		],
	},
	{
		title: 'Radial Menu',
		description: "Radial Menu Experiment based on Rauno's Freiberg work",
		logo: {
			text: 'R',
			color: '#ffffff',
			bgColor: '#121210',
		},
		image: {
			src: 'projects/radial-menu/image.png',
			alt: 'Radial Menu, with the option "Eat!" selected',
			position: 'top',
		},
		links: [
			{
				href: 'https://svelte-radial-menu.thomasglopes.com/',
				text: 'check it out',
			},
			{
				href: 'https://github/tglide/svelte-radial-menu',
				text: 'source code',
			},
		],
	},

	{
		title: 'Vintage Cars',
		description:
			'A virtual gallery of vintage cars. Done for a job interview, previously coupled together with a GraphQL server, and later changed to be purely static.',
		logo: { text: 'VC', color: '#C8451B', bgColor: '#171923' },
		image: {
			src: 'projects/vintage-cars/image.png',
			alt: 'A preview of the Vintage Cars website',
			position: 'top',
		},
		links: [
			{
				href: 'https://car-gallery-webapp.vercel.app/',
				text: 'check it out',
			},
			{
				href: 'https://github.com/TGlide/car-gallery-webapp',
				text: 'source code',
			},
		],
	},
	{
		title: 'Pathfinder',
		description: 'A demo of an HTML element following an SVG path. Made with Svelte.',
		logo: { text: 'PF', color: '#e9d8a6', bgColor: '#001219' },
		links: [
			{ href: 'https://pathfinder-jade.vercel.app/', text: 'check it out' },
			{
				href: 'https://github.com/TGlide/pathfinder',
				text: 'source code',
			},
		],
	},
	{
		title: 'Weather PWA',
		description: 'A weather PWA built with React, Typescript and SCSS',
		logo: { src: 'projects/weather/logo.svg', alt: 'Weather app logo' },
		image: { src: 'projects/weather/image.png', alt: 'Weather app image', position: 'bottom' },
		links: [
			{ href: 'https://tgl-weather-app.vercel.app/', text: 'check it out' },
			{ href: 'https://github.com/TGlide/weather-app', text: 'source code' },
		],
	},
	{
		title: 'Github CSS Card',
		description: 'A 3D card effect for your Github profile.',
		logo: {
			text: 'GC',
			color: 'var(--fiery-rose)',
			bgColor: '#00011a',
		},
		links: [
			{
				href: 'https://github-css-card.vercel.app/',
				text: 'check it out',
			},
			{
				href: 'https://github.com/TGlide/github-css-card',
				text: 'source code',
			},
		],
	},

	{
		title: 'Chuck Norris Facts',
		description: 'A Next.js Web App to search for facts on the most badass man alive.',
		logo: { src: 'projects/chuck/logo.svg', alt: 'Chuck Norris face' },
		image: {
			src: 'projects/chuck/image.png',
			alt: 'A website containing a title written Chuck Norris Facts, a search bar, and a search button.',
			position: 'bottom',
		},
		links: [
			{ href: 'https://chuck-norris-facts-nextjs.vercel.app/', text: 'check it out' },
			{ href: 'https://github.com/TGlide/chuck-norris-facts-nextjs', text: 'source code' },
		],
	},
	{
		title: "Warrior's Tenacity",
		description:
			'An arcade game where you defeat enemeis with the power of typing! Built for an old college assignment.',
		links: [{ href: 'https://github.com/TGlide/Warrior-s-Tenacity', text: 'source code' }],
		logo: { text: 'W', color: '#E36018', bgColor: '#170005' },
	},
	{
		title: 'Show and tell',
		description:
			'A short presentation about animations during my time at Significa. Built with Svelte and Reveal.js',
		logo: { text: 'ST', color: '#ed7176', bgColor: '#191919' },
		links: [
			{ href: 'https://show-and-tell-gamma.vercel.app/', text: 'check it out' },
			{
				href: 'https://github.com/TGlide/show-and-tell',
				text: 'source code',
			},
		],
		image: {
			src: 'projects/show-and-tell/image.png',
			alt: 'Title "Demystifying animations" with colored shapes in the background',
			position: 'top',
		},
	},
	{
		title: 'Screen Recorder',
		description: 'Screen Recorder built with Vue and Electron',
		logo: { text: 'SR', color: '#42b883', bgColor: '#1A1A1A' },
		links: [
			{ href: 'https://github.com/TGlide/vue-electron-screen-recorder', text: 'source code' },
		],
	},
];
