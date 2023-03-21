<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import '$styles';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<main>
	<slot />
	<Footer />
</main>

<style>
</style>
