import adapter from '@sveltejs/adapter-auto';

import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		alias: {
			$UI: 'src/UI',
			$styles: 'src/styles',
			$components: 'src/components',
			$slices: 'src/slices',
			$utils: 'src/utils',
			$data: 'src/data',
		},
	},

	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
