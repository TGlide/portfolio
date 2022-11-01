import { browser } from '$app/environment';
import { onMount } from 'svelte';

export const onBrowserMount = (cb: () => void) => {
	onMount(() => {
		if (!browser) return;
		cb();
	});
};

export const getWindowHeight = () => {
	if (!browser) return 0;
	return window.innerHeight;
};
