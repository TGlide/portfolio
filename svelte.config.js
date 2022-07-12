import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		alias: {
			$UI: 'src/UI',
			$styles: 'src/styles',
			$components: 'src/components',
			$slices: 'src/slices',
			$utils: 'src/utils'
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
