import { browser } from '$app/env';
import { onMount } from 'svelte';

export const onBrowserMount = (cb: () => void) => {
	onMount(() => {
		if (!browser) return;
		cb();
	});
};
